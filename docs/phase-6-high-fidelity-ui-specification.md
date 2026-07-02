# Sharpened Website - Phase 6 High Fidelity UI Specification

Date: 2026-07-01  
Phase: Phase 6 - High Fidelity UI Specification  
Foundation:

- `docs/phase-2-ux-strategy-information-architecture.md`
- `docs/phase-3-content-strategy-blueprint.md`
- `docs/phase-4-design-system.md`
- `docs/phase-5-wireframes.md`

## Scope

This specification prepares the Sharpened website UI for React implementation. It defines production-ready section behavior, component anatomy, interactions, states, icon usage, photography, illustrations, and animation rules.

This document does not include React, Tailwind, CSS, or implementation code.

## Product UI Direction

The interface should feel like a serious operations consultancy for SSDI law firms: clean, structured, trustworthy, and modern. It should not feel like a generic SaaS landing page or a decorative agency portfolio.

Primary UI objective:

- Help qualified SSDI law firm visitors understand fit, trust the operating approach, and book a Workflow Assessment.

Core UI qualities:

- High clarity.
- Strong hierarchy.
- Restrained color.
- Reusable section patterns.
- Practical workflow visuals.
- Accessible interactions.
- Fast scanning on mobile.

## Global Visual Rules

- Use `#00153B` for authority surfaces, header/footer emphasis, and dark section anchors.
- Use `#0642D0` for links, active indicators, and secondary interactive accents.
- Use `#FEC001` only for primary CTAs, selected highlights, and critical emphasis.
- Use `#F0F1F4` for page canvas and alternate bands.
- Use `#353637` for primary body text.
- Use border-first cards with limited shadows.
- Keep cards at 8px radius.
- Keep buttons at 6px radius.
- Use Montserrat for headings and Inter for UI/body copy.
- Use outline icons consistently.
- Do not use decorative blobs, bokeh, unrelated abstract shapes, or fake legal stock tropes.

## Global Layout Specification

### Page Shell

Purpose:

- Provide consistent page structure across all routes.

Anatomy:

- Header.
- Main content.
- Footer.

Behavior:

- Header stays at top and may become sticky only if it does not reduce reading space or cover anchors.
- Main content uses full-width sections with constrained inner containers.
- Footer closes every page with navigation recovery and primary CTA.

Responsive behavior:

- Desktop uses 12-column content logic.
- Tablet uses reduced two-column layouts where practical.
- Mobile is single-column.

States:

- Loading: page-level content should avoid layout shift by reserving predictable section space where possible.
- Empty: if optional proof/media is unavailable, show a structured placeholder or remove the section rather than leaving empty decorative space.
- Error: global route errors should use a simple message, route recovery link, and contact link.

## Shared Components

## Component: Header Navigation

Purpose:

- Help users navigate decision paths and keep the primary assessment CTA available.

Anatomy:

- Logo area.
- Navigation links: Services, Workflow Assessment, Industries, Why Sharpened, About, Contact.
- Primary CTA: Book a Workflow Assessment.
- Mobile menu trigger.

Desktop specification:

- Height: approximately 72px.
- Logo left.
- Navigation center or right.
- CTA far right.
- Background: white.
- Bottom border: light neutral.

Mobile specification:

- Height: approximately 64px.
- Logo left.
- Menu trigger right.
- CTA appears inside opened mobile menu.

Interactions:

- Nav link hover: text changes to secondary blue or underline appears.
- Active route: visible blue indicator or stronger text weight.
- CTA hover: yellow deepens subtly or text/icon shifts minimally.
- Mobile menu opens with a short slide/fade.
- Escape key and outside click should close menu in implementation.

States:

- Hover: visible for all links and buttons.
- Active: current route clearly marked.
- Loading: navigation remains stable during route transitions.
- Disabled: not expected for main nav; if future links are unavailable, do not render them as clickable.
- Empty: if logo asset is missing, use text logotype temporarily.
- Success: not applicable.
- Error: if a route fails, nav remains usable.

Recommended icons:

- Menu: `Menu`.
- Close: `X`.
- CTA: `CalendarCheck` or `ArrowRight`.

Accessibility:

- Mobile trigger must have clear accessible name.
- Focus order follows visual order.
- Focus ring must be visible on all links and CTA.

## Component: Footer

Purpose:

- Provide navigation recovery, trust closure, and a final assessment CTA.

Anatomy:

- Brand positioning statement.
- Primary CTA.
- Link groups: Company, Services, Industries, Resources.
- Contact details.
- Privacy link.

Visual specification:

- Background: primary navy.
- Text: white or high-contrast muted light text.
- CTA: yellow primary button.
- Link groups separated by spacing, not heavy dividers.

Interactions:

- Footer links underline or shift to yellow/white on hover.
- CTA follows primary button states.

States:

- Hover: links and CTA visibly respond.
- Active: current route can be indicated if useful.
- Loading: not applicable.
- Disabled: future links should be labeled as future only if shown; otherwise omit.
- Empty: if contact details are not finalized, use Contact page link instead.
- Success/Error: not applicable.

Recommended icons:

- Email: `Mail`.
- Phone: `Phone`, only if phone is finalized.
- Website/domain: `Globe`.
- CTA: `CalendarCheck`.

## Component: Button

Purpose:

- Drive clear actions without overwhelming the page.

Variants:

- Primary: Book a Workflow Assessment.
- Secondary: Explore Services, See How It Works.
- Tertiary/text: Read FAQ, Learn More.
- Inverse: used on navy backgrounds.

Anatomy:

- Text label.
- Optional leading or trailing icon.
- Optional loading indicator.

Interactions:

- Hover: subtle color shift and pointer cursor.
- Active: pressed state, slight tonal darkening.
- Focus: strong visible ring.
- Loading: label changes to progress language or spinner appears while preserving width.

States:

- Default: clear visual priority.
- Hover: visible tonal change.
- Active: pressed state.
- Loading: disabled interaction, progress indicator visible.
- Disabled: muted, non-interactive, still readable.
- Empty: button should not render without a label.
- Success: used after successful form submit only if inline confirmation is tied to action.
- Error: form-level error message should appear near form, not only on button.

Icon recommendations:

- Primary CTA: `CalendarCheck` or `ArrowRight`.
- Submit: `Send`.
- Learn more: `ArrowRight`.
- Download future lead magnet: `Download`.

## Component: Card

Purpose:

- Present repeated services, benefits, values, process steps, FAQs, and trust points.

Anatomy:

- Optional icon.
- Title.
- Short description.
- Optional link or CTA.
- Optional metadata.

Visual specification:

- White surface.
- Light border.
- 8px radius.
- No shadow by default.
- Strong internal spacing.

Interactions:

- Static cards: no hover treatment beyond normal cursor.
- Clickable cards: border shifts to secondary blue and title/link responds.

States:

- Default: white surface, light border.
- Hover: border blue or background slight tint if clickable.
- Active: selected/pressed state if used as a selectable card.
- Loading: skeleton structure preserving card size.
- Disabled: muted, no hover, clear unavailable cue.
- Empty: show no card if content is unavailable unless there is a deliberate empty-state message.
- Success: selected or completed process cards can use success icon.
- Error: only for cards representing failed dynamic content; use clear message and retry link.

Icon recommendations:

- Service cards: `Workflow`, `ClipboardCheck`, `FileText`, `MessageSquare`, `Bell`, `Settings`.
- Benefit cards: `Clock`, `CheckCircle`, `TrendingUp`, `Users`.
- Trust cards: `ShieldCheck`, `Handshake`, `BadgeCheck`.

## Component: Section Header

Purpose:

- Create consistent scan points for each content section.

Anatomy:

- Optional eyebrow label.
- Heading.
- Supporting paragraph.
- Optional inline link.

Visual specification:

- Max width should keep lines readable.
- Left aligned by default.
- Center only for short, broad overview sections.

States:

- Loading: skeleton lines.
- Empty: section should not render if no heading or content is available.
- Error: not applicable unless content is CMS-driven.

## Component: CTA Band

Purpose:

- Re-engage users after explanation-heavy sections.

Anatomy:

- Short heading.
- Supporting sentence.
- Primary CTA.
- Optional secondary link.

Visual specification:

- Navy or white surface depending on page rhythm.
- If navy, use yellow CTA and white text.
- If white, use yellow CTA with navy text.

Interactions and states:

- CTA follows button rules.
- Empty: do not render if CTA destination is unavailable.
- Loading: avoid showing loading state unless CTA action starts inline booking.

## Component: FAQ Accordion

Purpose:

- Handle objections without making pages text-heavy.

Anatomy:

- Question row.
- Expand/collapse icon.
- Answer body.
- Optional contextual link.

Interactions:

- Click/tap opens answer.
- Keyboard activation supported in implementation.
- Multiple open items are acceptable; single-open behavior is also acceptable if simpler.

States:

- Default: closed.
- Hover: row background or text accent shift.
- Active/open: icon rotates or switches.
- Loading: skeleton rows.
- Disabled: not expected.
- Empty: show no FAQ section if questions are not available.
- Success: not applicable.
- Error: if dynamic FAQ fails, show compact error with retry or contact link.

Recommended icons:

- Closed: `Plus`.
- Open: `Minus` or rotated `ChevronDown`.

## Component: Form

Purpose:

- Capture qualified inquiries without asking for sensitive client data.

Form types:

- Contact form.
- Workflow Assessment inquiry form.

Recommended fields:

- Name.
- Work email.
- Firm name.
- Role.
- Workflow area of interest.
- Message.
- Optional website.
- Privacy acknowledgement if needed.

Anatomy:

- Form title.
- Helpful intro copy.
- Field groups.
- Visible labels.
- Helper text where needed.
- Submit button.
- Inline validation messages.
- Success confirmation.

Interactions:

- Focus field on click/tab.
- Validate required fields before submit.
- On submit, button enters loading state.
- On success, show confirmation and next-step expectation.
- On error, preserve entered values and explain the issue.

States:

- Default: empty fields, visible labels.
- Hover: border slightly darkens.
- Active/focus: clear focus ring.
- Loading: submit button disabled with progress state.
- Disabled: field muted, not editable.
- Empty: empty required fields validate on submit or blur, depending on implementation preference.
- Success: success message confirms receipt and next step.
- Error: field-level errors plus form-level summary for submission failure.

Accessibility:

- Placeholder cannot replace label.
- Error text must be associated with field in implementation.
- Do not request sensitive claimant/client details.

Recommended icons:

- Submit: `Send`.
- Success: `CheckCircle`.
- Error: `AlertCircle`.
- Privacy reassurance: `ShieldCheck`.

## Component: Workflow Visual

Purpose:

- Make abstract automation work concrete without using decorative filler.

Types:

- Hero workflow snapshot.
- Process diagram.
- Before-after workflow map.
- Assessment roadmap.

Visual content:

- Nodes representing intake, filing, case management, follow-up, handoff, documentation.
- Connector lines.
- Small status labels.
- A clear "current friction" to "improved flow" story where appropriate.

Interactions:

- Usually static.
- On desktop, small hover tooltips can be added later for process nodes.
- On mobile, avoid tiny labels that require zooming.

States:

- Loading: skeleton diagram blocks.
- Empty: replace with trust card or remove visual column.
- Error: not applicable unless generated from dynamic data.

Recommended icons:

- `Workflow`.
- `ArrowRight`.
- `FileText`.
- `MessageSquare`.
- `Clock`.
- `CheckCircle`.

## Component: Image Block

Purpose:

- Add credibility and human context.

Usage:

- About page founder/team area.
- Homepage trust area if quality imagery exists.
- Contact page optional human support cue.

Photography direction:

- Professional office or remote operations setting.
- Clean laptop/workspace.
- Team collaboration.
- Human-centered professional services context.

Avoid:

- Gavels, courthouse cliches, fake boardrooms, cluttered desks, dark tech stock.

States:

- Loading: aspect-ratio placeholder.
- Empty: omit image and rebalance layout.
- Error: fallback to structured trust card, not broken image.

## Component: Badge / Eyebrow

Purpose:

- Give quick context such as "For SSDI Law Firms" or "Workflow Assessment."

Visual specification:

- Small text.
- Rounded pill.
- Light background or subtle blue tint.
- High contrast.

States:

- Default: static.
- Hover/active: only if badge is clickable.
- Disabled/loading/success/error: not usually applicable.

Recommended icons:

- `BadgeCheck`.
- `ShieldCheck`.
- `Workflow`.

## Component: Process Steps

Purpose:

- Reduce uncertainty by showing what happens next.

Anatomy:

- Step number.
- Icon.
- Step title.
- Short description.

Interactions:

- Static by default.
- Optional active step later if used in an interactive assessment flow.

States:

- Default.
- Hover only if clickable.
- Active/current if future interactive process.
- Complete/success with check icon if used in a form flow.
- Loading/empty/error only for dynamic implementations.

Recommended icons:

- Assess: `Search`.
- Map: `Workflow`.
- Prioritize: `ListChecks`.
- Automate: `Settings`.
- Document: `FileText`.
- Improve: `TrendingUp`.

## Page Specification: Homepage

## Section: Homepage Hero

Purpose:

- Establish Sharpened as the SSDI workflow automation partner and route qualified visitors to assessment.

Layout:

- Desktop: two-column hero. Left column contains badge, H1, subheadline, CTAs. Right column contains workflow visual or trust snapshot.
- Tablet: hero stacks above visual.
- Mobile: single-column; CTA appears immediately after subheadline.

Components:

- Header Navigation.
- Badge.
- H1.
- Body Large subheadline.
- Primary Button.
- Secondary Button.
- Workflow Visual or Trust Snapshot card.

Interactions:

- Primary CTA navigates to Workflow Assessment or booking area.
- Secondary CTA scrolls to process/services section.
- Workflow visual remains static unless future tooltips are added.

States:

- Hover: buttons and links respond.
- Active: CTA pressed state.
- Loading: hero text should render before optional visual if possible.
- Disabled: secondary CTA disabled only if target section is unavailable.
- Empty: if visual asset missing, use trust snapshot card.
- Success/Error: not applicable.

Icon usage:

- Primary CTA: `CalendarCheck`.
- Secondary CTA: `ArrowDown` or `ArrowRight`.
- Trust snapshot: `Workflow`, `ShieldCheck`, `BadgeCheck`.

Photography/illustration:

- Prefer workflow diagram over generic photo in hero.
- If using photography, choose a clean operational workspace or team collaboration image.

Animation:

- Optional subtle entrance for hero text and visual, 180-240ms.
- No typing effects or animated headline.

## Section: Homepage Problem

Purpose:

- Help visitors recognize operational friction before services are introduced.

Layout:

- Full-width soft background section.
- Section header followed by 3-4 problem cards or compact bullet blocks.

Components:

- Section Header.
- Problem Cards.

Interactions:

- Cards are static.

States:

- Loading: skeleton cards.
- Empty: hide card if no problem content.
- Error: not applicable.

Icon usage:

- `Clock`, `MessageSquareWarning`, `FileWarning`, `Repeat`, `ArrowLeftRight`.

Animation:

- Cards can reveal subtly as a group; no stagger beyond 80ms.

## Section: Homepage Outcomes

Purpose:

- Shift from pain to practical business outcomes.

Layout:

- Three cards desktop.
- Two then one on tablet.
- Stacked on mobile.

Components:

- Benefit Cards.

Interactions:

- Static unless cards link to Services.

States:

- Hover only if clickable.
- Loading/empty follow card rules.

Icons:

- Faster response: `Zap` or `Clock`.
- Fewer missed tasks: `CheckCircle`.
- Clearer handoffs: `Workflow`.

## Section: Homepage Services Snapshot

Purpose:

- Route visitors to service understanding without overwhelming them.

Layout:

- Six service cards in 3x2 desktop grid.
- 2-column tablet.
- Single-column mobile.

Components:

- Section Header.
- Service Cards.
- Secondary link to Services page.

Interactions:

- Service cards can link to Services or future service detail pages.
- Card hover shows clickable affordance.

States:

- Hover: border blue, title/link blue.
- Active: pressed card state.
- Loading: skeleton card grid.
- Empty: omit unavailable future services rather than showing broken content.

Icons:

- Assessment: `ClipboardCheck`.
- Intake: `Inbox`.
- Filing: `FileText`.
- Case Management: `FolderKanban`.
- Follow-up: `MessageSquare`.
- Operations System: `Workflow`.

## Section: Homepage Why Sharpened

Purpose:

- Differentiate through SSDI experience and practical systems.

Layout:

- Desktop: two columns; copy on left, trust/value cards on right.
- Mobile: stacked.

Components:

- Section Header.
- Trust Cards.
- Text Link to Why Sharpened.

Interactions:

- Link hover.
- Cards static.

States:

- Empty: if proof assets missing, use values and founder experience as trust elements.

Icons:

- `BadgeCheck`, `ShieldCheck`, `Handshake`, `Settings`.

Photography:

- Optional small founder/team image only if professional quality is available.

## Section: Homepage Process

Purpose:

- Reduce implementation uncertainty.

Layout:

- Horizontal stepper on desktop.
- Two-column steps on tablet.
- Numbered vertical steps on mobile.

Components:

- Process Steps.

Interactions:

- Static.

States:

- Loading: step skeleton.
- Empty: do not render if process steps missing.

Icons:

- `Search`, `Workflow`, `ListChecks`, `Settings`, `FileText`, `TrendingUp`.

Animation:

- Optional line/step reveal after section enters viewport; disable for reduced motion.

## Section: Homepage CTA Band

Purpose:

- Convert after the visitor understands value and process.

Layout:

- Full-width navy band.
- Heading and body left, CTA right on desktop.
- Stacked centered or left-aligned on mobile; left-aligned preferred for readability.

Components:

- CTA Band.
- Primary Button.

States:

- Button states only.

Icon:

- `CalendarCheck`.

## Section: Homepage FAQ Preview

Purpose:

- Address top objections before final CTA.

Layout:

- 3-4 FAQ accordion items or static question cards.

Components:

- FAQ Accordion.
- Link to FAQ page.

States:

- FAQ states as defined globally.

## Section: Homepage Final CTA

Purpose:

- Give users a final conversion point before footer.

Layout:

- Compact section with heading, one sentence, primary CTA.

Components:

- CTA Band or simple section.

States:

- Button states only.

## Page Specification: About

## Section: About Hero

Purpose:

- Humanize Sharpened while preserving professional trust.

Layout:

- Desktop: two columns with mission copy and founder/team trust panel.
- Mobile: copy first, trust panel second.

Components:

- Badge.
- H1.
- Subheadline.
- Primary CTA.
- Secondary CTA.
- Trust Card or Image Block.

Interactions:

- CTAs navigate to assessment and Why Sharpened.

States:

- Empty: if team image unavailable, use text trust card.
- Loading: reserve image space only if image is expected.

Icons:

- `Users`, `BadgeCheck`, `HeartHandshake`.

Photography:

- Use professional team/founder image if available.
- If not, use clean operational workspace photo or no photo.

## Section: Origin Story

Purpose:

- Explain why Sharpened exists in a polished, client-relevant way.

Layout:

- Narrow readable text container.
- Optional supporting side note on desktop.

Components:

- Section Header.
- Text content.
- Optional Image Block.

Interactions:

- None.

States:

- Empty: section should not render until copy is approved.

## Section: SSDI Connection + Mission/Vision

Purpose:

- Tie team story to SSDI law firm operations and claimant support.

Layout:

- Desktop: two balanced panels.
- Mobile: stacked.

Components:

- Content Panels.
- Icons.

States:

- Static.

Icons:

- SSDI connection: `Workflow` or `FileText`.
- Mission: `Target`.
- Vision: `TrendingUp`.

## Section: Values

Purpose:

- Build trust using SHARP values.

Layout:

- Five cards.
- Desktop: 5-column or 3+2 grid depending on text length.
- Tablet: 2-column.
- Mobile: stacked.

Components:

- Value Cards.

Interactions:

- Static.

States:

- Empty: if a value description is missing, show title only only if approved; otherwise complete content before implementation.

Icons:

- Simplicity: `Sparkles` or `SlidersHorizontal`.
- Honesty: `Handshake`.
- Accountability: `ClipboardCheck`.
- Reliability: `ShieldCheck`.
- Progress: `TrendingUp`.

## Section: How We Work

Purpose:

- Show working posture before CTA.

Layout:

- Step list.

Components:

- Process Steps.

Icons:

- `Ear`, `Search`, `ListChecks`, `Settings`, `RefreshCw`.

## Section: About CTA Band

Purpose:

- Route trust-informed users to assessment.

States and interactions:

- CTA Band and button states only.

## Page Specification: Services

## Section: Services Hero

Purpose:

- Introduce the service ecosystem and assessment-first approach.

Layout:

- Desktop: hero copy plus routing panel.
- Mobile: hero then routing panel.

Components:

- H1.
- Subheadline.
- Primary and secondary buttons.
- Routing Panel.

Routing panel content:

- Step 1: Workflow Assessment.
- Step 2: Operations Optimization.
- Step 3: Documentation and improvement.

Interactions:

- Primary CTA to assessment.
- Secondary CTA to contact.
- Routing panel links to relevant sections.

States:

- Hover/active for links and buttons.
- Empty: if routing detail is incomplete, show simplified assessment-first panel.

Icons:

- `ClipboardCheck`, `Workflow`, `FileText`.

## Section: Services Problem

Purpose:

- Explain why disconnected automations are weaker than workflow-level thinking.

Layout:

- Full-width section with clear headline and concise supporting copy.
- Optional side diagram showing disconnected tasks vs connected workflow.

Components:

- Section Header.
- Workflow Visual.

Icons:

- `GitBranch`, `Workflow`, `AlertTriangle`.

## Section: Service Groups

Purpose:

- Present service options as scannable cards.

Layout:

- Desktop: 2 or 3-column grid.
- Tablet: 2-column grid.
- Mobile: stacked.

Cards:

- Workflow Assessment.
- Operations Optimization System.
- Intake Automation.
- Filing Workflow.
- Case Management.
- Follow-up and Communication.

Interactions:

- Cards clickable if destination exists.
- If detail page does not exist, card CTA points to Workflow Assessment.

States:

- Hover: card border blue.
- Active: pressed.
- Loading: skeleton.
- Disabled: future service card can show "Future" label and no click, but avoid if not needed.
- Empty: omit services with no approved positioning.

Icons:

- Use same service icon mapping from Homepage Services Snapshot.

## Section: Service Journey

Purpose:

- Clarify how engagement flows from assessment to implementation.

Layout:

- Horizontal process on desktop.
- Vertical steps on mobile.

Components:

- Process Steps.
- Optional CTA after final step.

States:

- Static unless future interactive timeline.

## Section: Services Benefits + Trust

Purpose:

- Reinforce outcomes and risk reduction.

Layout:

- Desktop: benefits list left, trust panel right.
- Mobile: stacked.

Components:

- Benefit list.
- Trust Card.

Icons:

- `CheckCircle`, `ShieldCheck`, `Settings`, `FileText`.

## Section: Services FAQ Preview

Purpose:

- Handle service-selection objections.

Components:

- FAQ Accordion.

Questions should cover:

- Which service do we need?
- Is assessment required?
- Can existing systems stay?
- How long does implementation take?

## Section: Services CTA Band

Purpose:

- Convert uncertain service visitors to assessment.

Components:

- CTA Band.

## Page Specification: Workflow Assessment

## Section: Assessment Hero

Purpose:

- Make the assessment the obvious low-risk first step.

Layout:

- Desktop: hero copy left, booking/inquiry panel right.
- Tablet/mobile: hero first, booking panel immediately after.

Components:

- Badge.
- H1.
- Subheadline.
- Primary CTA.
- Secondary CTA.
- Booking/Inquiry Panel.
- Privacy reassurance.

Interactions:

- Primary CTA scrolls to form or opens booking flow.
- Secondary CTA navigates to Contact or FAQ anchor.

States:

- Loading: booking panel shows stable loading state.
- Empty: if booking tool unavailable, show contact CTA.
- Error: if booking embed fails, show fallback contact form link.

Icons:

- `CalendarCheck`, `ShieldCheck`, `HelpCircle`.

## Section: Who It Is For

Purpose:

- Qualify the audience.

Layout:

- Short text plus checklist cards.

Components:

- Checklist.
- Cards.

States:

- Static.

Icons:

- `CheckCircle`, `Users`, `Workflow`.

## Section: Problems Uncovered

Purpose:

- Help visitors recognize hidden workflow issues.

Layout:

- Four cards.

Cards:

- Bottlenecks.
- Manual repeats.
- System gaps.
- Handoffs.

Interactions:

- Static cards.

Icons:

- `Timer`, `Repeat`, `PlugZap`, `ArrowLeftRight`.

## Section: What Is Reviewed

Purpose:

- Define assessment scope.

Layout:

- Structured list or table-like cards.

Components:

- Scope Cards.
- Optional comparison table later.

States:

- Empty: do not show scope item without a defined description.

Icons:

- `Search`, `FileText`, `Workflow`, `Settings`.

## Section: Assessment Process

Purpose:

- Explain what happens next.

Layout:

- 5-step process.

Steps:

- Inquiry.
- Discovery.
- Workflow review.
- Findings.
- Next steps.

States:

- Static.

Animation:

- Optional step reveal; no complex animated timeline.

## Section: Deliverables + Trust

Purpose:

- Explain output and reduce risk before final CTA.

Layout:

- Desktop two-column.
- Mobile stacked.

Components:

- Deliverables card/list.
- Trust card.

Trust messages:

- No forced system replacement.
- No sensitive client data required through public forms.
- Recommendations before implementation.

Icons:

- `ClipboardCheck`, `ShieldCheck`, `FileText`, `BadgeCheck`.

## Section: Assessment FAQ

Purpose:

- Handle high-intent conversion objections.

Questions:

- What is reviewed?
- Who should attend?
- How long does it take?
- Do we need to change systems?
- Is client data required?
- What happens after?

States:

- FAQ Accordion states.

## Section: Assessment Final CTA

Purpose:

- Convert after scope and risk reduction.

Layout:

- Navy CTA band or white high-emphasis section.

Components:

- CTA Band.
- Primary Button.
- Secondary Contact link.

## Page Specification: Contact

## Section: Contact Hero

Purpose:

- Give ready visitors a clear path to booking or inquiry.

Layout:

- Desktop: hero copy left, contact options right.
- Mobile: hero then contact details and CTA.

Components:

- H1.
- Subheadline.
- Primary CTA.
- Contact Options Card.

Interactions:

- CTA navigates to booking/assessment.
- Email link opens mail client.

States:

- Empty: if phone/email unavailable, use form and Contact page only.

Icons:

- `CalendarCheck`, `Mail`, `MessageSquare`, `Clock`.

## Section: Contact Form

Purpose:

- Capture inquiry safely and clearly.

Layout:

- Desktop: form left, side panel right.
- Tablet/mobile: form full-width, side panel below.

Components:

- Form.
- Side Panel.
- Privacy reassurance.

Interactions:

- Input focus.
- Validation.
- Submit.
- Success confirmation.
- Error handling.

States:

- Default: all fields empty.
- Hover: inputs border darkens.
- Active/focus: clear focus ring.
- Loading: submit button shows sending state.
- Disabled: submit disabled while invalid or sending if implementation chooses.
- Empty: required fields show validation when submitted.
- Success: replace or prepend form with confirmation and next step.
- Error: field-level errors plus submission error summary.

Icons:

- `Send`, `ShieldCheck`, `CheckCircle`, `AlertCircle`.

## Section: What Happens Next

Purpose:

- Reduce uncertainty after form/booking.

Layout:

- Three-step process card.

Steps:

- Sharpened reviews inquiry.
- Discovery or assessment path is confirmed.
- Next steps are shared.

Icons:

- `Search`, `CalendarCheck`, `ArrowRight`.

## Section: Contact FAQ Preview

Purpose:

- Answer final concerns near the form.

Questions:

- What should I include?
- Who should book?
- How quickly will Sharpened respond?
- Is sensitive data required?

Components:

- FAQ Accordion or compact static list.

## Page Specification: Shared Legal/Utility Pages

Although Phase 5 wireframes focused on five pages, the implementation should reserve reusable layouts for FAQ, Resources, Privacy Policy, Industries, and future service pages.

Recommended patterns:

- FAQ: narrow/readable hero, category accordion, CTA band.
- Resources: hero, category filters, resource cards, CTA band.
- Privacy Policy: narrow readable text container, no aggressive sales CTA.
- Industries: focused hero, industry cards, CTA by fit.
- Future service pages: hero, problem, solution, process, FAQ, CTA.

## Recommended Icon Library Usage

Use a consistent outline icon set during implementation.

Recommended icon map:

| UI Need | Icon |
|---|---|
| Primary CTA | CalendarCheck |
| Learn more | ArrowRight |
| Send form | Send |
| Menu | Menu |
| Close | X |
| Workflow | Workflow |
| Assessment | ClipboardCheck |
| Intake | Inbox |
| Filing | FileText |
| Case management | FolderKanban |
| Messaging | MessageSquare |
| Time saved | Clock |
| Reliability | ShieldCheck |
| Values/trust | BadgeCheck |
| Process | ListChecks |
| Improvement | TrendingUp |
| Error | AlertCircle |
| Success | CheckCircle |
| Privacy | Lock or ShieldCheck |

Icon rules:

- Icons should support comprehension.
- Do not use emoji as UI icons.
- Do not mix icon styles.
- Keep icon sizes consistent inside the same component family.
- Decorative icons should not be announced by assistive technology in implementation.

## Photography Specification

Primary photography role:

- Support credibility, professionalism, and human context.

Approved subjects:

- Professional law firm operations environments.
- Clean desks with laptops and workflow tools.
- Remote team collaboration.
- Consultant working with dashboard/process documentation.
- People collaborating in a professional service context.

Avoid:

- Gavels, scales of justice, courtroom cliches.
- Dark hacker/AI imagery.
- Fake corporate boardrooms.
- Overly happy stock teams.
- Cluttered environments.
- Images implying specific clients or claimants without consent.

Implementation prep:

- Every image should have defined aspect ratio.
- Prepare alt text intent before implementation.
- If image is decorative, mark as decorative in implementation.
- Use image placeholders only during build; final production should not ship with placeholder photos.

## Illustration Specification

Primary illustration role:

- Explain workflows, process, and automation logic.

Recommended illustration types:

- Workflow map.
- Intake-to-filing path.
- Assessment roadmap.
- Before/after bottleneck diagram.
- System connection diagram.

Style:

- Line-based.
- Minimal.
- Brand colors used sparingly.
- Clear labels.
- No cartoon characters.
- No abstract decorative shapes as main content.

Responsive requirements:

- Desktop diagrams can show more nodes.
- Mobile diagrams must simplify or stack into steps.
- Labels must remain readable without pinch zoom.

## Animation Specification

Motion philosophy:

- Motion guides attention. It does not entertain.

Approved animations:

- Button hover transition.
- Link underline or color transition.
- Card border/background transition.
- Accordion expand/collapse.
- Mobile menu open/close.
- Form submission loading.
- Optional subtle section entrance.

Timing:

- Hover/active: 120-180ms.
- Standard transitions: 180-240ms.
- Menu/accordion: 200-280ms.
- Modal/overlay future: 240-320ms.

Rules:

- Respect reduced-motion preferences in implementation.
- Do not animate hero headline text.
- Do not use parallax.
- Do not delay content readability.
- Avoid bouncy easing.

## Global State Specification

### Hover

- Buttons: tonal shift.
- Links: underline or color shift.
- Clickable cards: border changes to secondary blue.
- Form fields: border slightly darkens.

### Active

- Buttons: pressed visual state.
- Nav links: route active state remains visible.
- Accordion: open state clearly marked.
- Mobile menu: active page link highlighted.

### Loading

- Forms: submit button shows loading and disables duplicate submit.
- Dynamic embeds: show stable loading panel.
- Cards/resources future: use skeleton placeholders.
- Page navigation: avoid large layout shift.

### Disabled

- Buttons: muted and non-interactive.
- Inputs: muted background, readable text.
- Future unavailable links: omit or label clearly; do not present as active links.

### Empty

- Optional proof/testimonials: omit section or show "proof coming later" only in internal environments, not production.
- Missing image: replace with trust card or remove media column.
- No resources future: show useful intro and assessment CTA rather than blank grid.

### Success

- Form: confirmation message with next-step expectation.
- Booking: confirmation handoff or external booking confirmation.
- Download future: clear "download started" or email sent state.

### Error

- Forms: field-level errors plus form-level summary.
- Booking embed failure: fallback contact/assessment form link.
- Route/content failure: simple recovery message with Home and Contact links.
- Images: no broken image icon; use fallback layout.

## React Implementation Readiness Notes

Recommended component boundaries:

- PageShell.
- Header.
- MobileMenu.
- Footer.
- SectionHeader.
- Button.
- Card.
- ServiceCard.
- BenefitCard.
- ProcessSteps.
- CTASection.
- FAQAccordion.
- ContactForm.
- AssessmentInquiryPanel.
- WorkflowVisual.
- ImageBlock.
- Badge.
- TrustPanel.

Data/content boundaries:

- Keep navigation items data-driven.
- Keep service cards data-driven.
- Keep FAQ content data-driven.
- Keep process steps data-driven.
- Keep page sections composable but not over-abstracted.

Accessibility implementation requirements:

- Semantic sections.
- One H1 per page.
- Keyboard-accessible navigation and accordion.
- Visible focus states.
- Form labels and error associations.
- Reduced-motion support.
- Meaningful alt text.

Performance implementation requirements:

- Optimize images.
- Avoid unnecessary animation libraries for simple transitions.
- Lazy-load below-fold heavy media.
- Keep icons tree-shakeable.
- Avoid layout shift with fixed media aspect ratios.

## Phase 6 Conclusion

The UI is ready to move into React implementation after approval. The specification defines the shared component system, page sections, interactions, states, icon usage, photography direction, illustration direction, animation rules, accessibility expectations, and implementation boundaries.

No React, Tailwind, CSS, or implementation code has been created in this phase.
