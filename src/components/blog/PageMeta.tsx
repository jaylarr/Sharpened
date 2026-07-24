import { useEffect } from "react";

type PageMetaProps = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  author?: string;
  structuredData?: Record<string, unknown>;
};

const siteUrl = "https://sharp-enedautomation.site";

function setMeta(selector: string, attribute: "name" | "property", value: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.content = content;
}

export function PageMeta({
  author,
  description,
  image,
  path,
  structuredData,
  title,
  type = "website",
}: PageMetaProps) {
  useEffect(() => {
    const fullTitle = `${title} | Sharpened`;
    const canonicalUrl = `${siteUrl}${path}`;
    const imageUrl = image ? `${siteUrl}${image}` : `${siteUrl}/images/hero-bg.png`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", type);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:image"]', "property", "og:image", imageUrl);
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", imageUrl);

    if (author) {
      setMeta('meta[name="author"]', "name", "author", author);
    } else {
      document.head.querySelector('meta[name="author"]')?.remove();
    }

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const existingStructuredData = document.head.querySelector<HTMLScriptElement>(
      'script[data-sharpened-structured-data="true"]'
    );
    existingStructuredData?.remove();

    if (structuredData) {
      const script = document.createElement("script");
      script.dataset.sharpenedStructuredData = "true";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [author, description, image, path, structuredData, title, type]);

  return null;
}
