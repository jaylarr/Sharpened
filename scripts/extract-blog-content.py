from __future__ import annotations

import json
import re
from pathlib import Path

from docx import Document


ROOT = Path(__file__).resolve().parents[1]
SOURCE_ROOT = (
    ROOT
    / "CopyWritings"
    / "Copywrite (Write copy here)"
    / "Article Writing - Blog-Website"
)
OUTPUT = ROOT / "src" / "content" / "blogPosts.json"


AUTHORS = {
    "rex-rocha": {
        "name": "Rex Rocha",
        "image": "/images/authors/rex-rocha.jpg",
        "imageAlt": "Portrait of Rex Rocha",
        "bio": (
            "Rex Rocha is a physician with a growing interest in copywriting and "
            "business operations. His articles explore how small process improvements "
            "can help law firms operate more efficiently, with a focus on practical "
            "solutions to everyday problems."
        ),
    },
    "timothy-wilt-p-montales": {
        "name": "Timothy Wilt P. Montales",
        "bio": (
            "Timothy Wilt P. Montales is a copywriter at Sharpened Automated with "
            "more than a decade of professional writing experience across content "
            "creation, catalog writing, and business communications. He also works "
            "as an analyst in the business process outsourcing industry, bringing "
            "analytical insight and close attention to detail to his work."
        ),
    },
}


POSTS = [
    {
        "filePrefix": "10 Signs Your",
        "author": "rex-rocha",
        "titleIndex": 2,
        "title": "10 Signs Your Law Firm Is Spending Too Much Time on Repetitive Tasks",
        "slug": "10-signs-your-law-firm-spends-too-much-time-on-repetitive-tasks",
        "excerpt": (
            "Routine administrative work can quietly consume a law firm's day. "
            "These ten signs reveal when repetitive tasks are becoming an operational burden."
        ),
        "category": "Law Firm Operations",
        "numberedPairs": [
            [11, 12], [14, 15], [17, 18], [20, 21], [23, 24],
            [26, 27], [29, 30], [32, 33], [35, 36], [38, 39],
        ],
    },
    {
        "filePrefix": "Could Your Law Firm",
        "author": "rex-rocha",
        "titleIndex": 0,
        "title": "Could Your Law Firm Be Losing Potential Clients?",
        "slug": "could-your-law-firm-be-losing-potential-clients",
        "excerpt": (
            "A slow or inconsistent response process can lose qualified inquiries "
            "before a law firm ever has the opportunity to speak with them."
        ),
        "category": "Client Intake",
        "listRanges": [[19, 23]],
    },
    {
        "filePrefix": "Why Your Law Firm",
        "author": "rex-rocha",
        "titleIndex": 1,
        "title": "Why Your Law Firm Is Always Busy but Never Catches Up",
        "slug": "why-your-law-firm-is-always-busy-but-never-catches-up",
        "excerpt": (
            "The legal work may not be what keeps a capable team behind. The real "
            "constraint is often the repetitive administrative work surrounding it."
        ),
        "category": "Law Firm Operations",
    },
    {
        "filePrefix": "The Hidden Cost",
        "author": "timothy-wilt-p-montales",
        "titleIndex": 1,
        "title": "The Hidden Costs of Manual Processes for Small Businesses",
        "slug": "hidden-costs-of-manual-processes-for-small-businesses",
        "excerpt": (
            "Manual processes often begin as practical solutions, but they can quietly "
            "reduce productivity, visibility, consistency, and profitability as a business grows."
        ),
        "category": "Workflow Automation",
        "forcedHeadings": [6],
    },
    {
        "filePrefix": "What Happens When",
        "author": "timothy-wilt-p-montales",
        "titleIndex": 0,
        "title": "What Happens When a Lead Doesn't Hear Back Immediately?",
        "subtitle": "Why every law firm should understand the five-minute rule",
        "slug": "what-happens-when-a-lead-doesnt-hear-back-immediately",
        "excerpt": (
            "Prompt lead response can shape trust, consultation bookings, and the value "
            "a law firm receives from its marketing investment."
        ),
        "category": "Lead Response",
        "skipIndices": [2],
        "forcedHeadings": [108],
        "listRanges": [[25, 29], [40, 41], [44, 47], [87, 92]],
    },
    {
        "filePrefix": "Why Customers Expect",
        "author": "timothy-wilt-p-montales",
        "titleIndex": 2,
        "title": "Why Customers Expect Faster Responses Than Ever",
        "slug": "why-customers-expect-faster-responses-than-ever",
        "excerpt": (
            "Digital services have reshaped what customers consider responsive. "
            "Businesses now need systems that combine speed, accuracy, and human judgment."
        ),
        "category": "Customer Experience",
    },
    {
        "filePrefix": "Why Following Up",
        "author": "timothy-wilt-p-montales",
        "titleIndex": 2,
        "title": "Why Manual Follow-Ups Cost Businesses and Law Firms Customers",
        "slug": "why-manual-follow-ups-cost-businesses-and-law-firms-customers",
        "excerpt": (
            "Manual follow-up breaks down as inquiry volume grows. Consistent, immediate "
            "acknowledgment helps protect customer relationships and revenue opportunities."
        ),
        "category": "Follow-Up Automation",
        "forcedParagraphs": [69, 71, 73, 75],
        "listRanges": [[34, 40]],
    },
]


def find_document(prefix: str) -> Path:
    matches = [path for path in SOURCE_ROOT.rglob("*.docx") if path.name.startswith(prefix)]
    if len(matches) != 1:
        raise RuntimeError(f"Expected one document for {prefix!r}, found {len(matches)}")
    return matches[0]


def clean_text(value: str) -> str:
    return re.sub(r"\s+", " ", value.replace("\u00a0", " ")).strip()


def clean_numbered_title(value: str) -> str:
    return re.sub(r"^\d+\.\s*", "", clean_text(value))


def extract_post(config: dict) -> dict:
    document = Document(str(find_document(config["filePrefix"])))
    paragraphs = {
        index: {
            "text": clean_text(paragraph.text),
            "style": paragraph.style.name if paragraph.style else "",
        }
        for index, paragraph in enumerate(document.paragraphs)
        if clean_text(paragraph.text)
    }

    about_index = next(
        (
            index
            for index, paragraph in paragraphs.items()
            if paragraph["text"].lower() in {"about the author", "about the author"}
            or paragraph["text"].lower().startswith("about the author ")
        ),
        None,
    )

    end_index = about_index if about_index is not None else max(paragraphs) + 1
    skip_indices = set(config.get("skipIndices", []))
    forced_headings = set(config.get("forcedHeadings", []))
    forced_paragraphs = set(config.get("forcedParagraphs", []))
    title_index = config["titleIndex"]

    numbered_pairs = config.get("numberedPairs", [])
    numbered_start = numbered_pairs[0][0] if numbered_pairs else None
    numbered_indices = {index for pair in numbered_pairs for index in pair}

    list_ranges = config.get("listRanges", [])
    list_starts = {start: end for start, end in list_ranges}
    list_indices = {
        index for start, end in list_ranges for index in range(start, end + 1)
    }

    blocks = []
    for index in sorted(paragraphs):
        if index <= title_index or index >= end_index or index in skip_indices:
            continue

        if index == numbered_start:
            blocks.append(
                {
                    "type": "numbered",
                    "items": [
                        {
                            "title": clean_numbered_title(paragraphs[title]["text"]),
                            "text": paragraphs[body]["text"],
                        }
                        for title, body in numbered_pairs
                    ],
                }
            )
            continue
        if index in numbered_indices:
            continue

        if index in list_starts:
            end = list_starts[index]
            blocks.append(
                {
                    "type": "list",
                    "items": [
                        paragraphs[item]["text"]
                        for item in sorted(paragraphs)
                        if index <= item <= end
                    ],
                }
            )
            continue
        if index in list_indices:
            continue

        paragraph = paragraphs[index]
        is_heading = (
            index in forced_headings
            or (
                paragraph["style"].lower().startswith("heading")
                and index not in forced_paragraphs
            )
        )
        blocks.append(
            {
                "type": "heading" if is_heading else "paragraph",
                "text": paragraph["text"],
            }
        )

    return {
        "slug": config["slug"],
        "title": config["title"],
        **({"subtitle": config["subtitle"]} if config.get("subtitle") else {}),
        "excerpt": config["excerpt"],
        "category": config["category"],
        "author": config["author"],
        "blocks": blocks,
    }


def main() -> None:
    payload = {
        "authors": AUTHORS,
        "posts": [extract_post(config) for config in POSTS],
    }
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(payload['posts'])} posts to {OUTPUT}")


if __name__ == "__main__":
    main()
