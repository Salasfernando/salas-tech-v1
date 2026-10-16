import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "profile";
  jsonLd: Record<string, unknown>;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
};

const siteUrl = import.meta.env.VITE_SITE_URL || "https://www.salastech.com.br";
const defaultOgImage = `${siteUrl}/assets/logo%2Bsalastech.png`;

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let node = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(attribute, key);
    document.head.appendChild(node);
  }
  node.content = content;
}

function setLink(rel: string, href: string, extra?: Record<string, string>) {
  const selector = extra?.hreflang
    ? `link[rel="${rel}"][hreflang="${extra.hreflang}"]`
    : `link[rel="${rel}"]`;
  let node = document.head.querySelector<HTMLLinkElement>(selector);
  if (!node) {
    node = document.createElement("link");
    node.rel = rel;
    Object.entries(extra || {}).forEach(([key, value]) =>
      node?.setAttribute(key, value),
    );
    document.head.appendChild(node);
  }
  node.href = href;
}

export default function SeoHead({
  title,
  description,
  path,
  type = "website",
  jsonLd,
  image = defaultOgImage,
  imageAlt = "Assinatura oficial da Salas Tech — Full Stack & Automação",
  noIndex = false,
}: SeoProps) {
  useEffect(() => {
    const canonical = `${siteUrl}${path}`;
    document.documentElement.lang = path.startsWith("/en") ? "en" : "pt-BR";
    document.title = title;
    setMeta("name", "description", description);
    setMeta(
      "name",
      "robots",
      noIndex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );
    setMeta("name", "author", "Salas Tech");
    setMeta("name", "theme-color", "#0B192C");
    setMeta("property", "og:type", type);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:site_name", "Salas Tech");
    setMeta(
      "property",
      "og:locale",
      path.startsWith("/en") ? "en_US" : "pt_BR",
    );
    setMeta("property", "og:image", image);
    setMeta("property", "og:image:secure_url", image);
    setMeta("property", "og:image:type", "image/png");
    setMeta("property", "og:image:width", "2000");
    setMeta("property", "og:image:height", "2000");
    setMeta("property", "og:image:alt", imageAlt);
    setMeta(
      "property",
      "og:locale:alternate",
      path.startsWith("/en") ? "pt_BR" : "en_US",
    );
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:site", "@salas_tech");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    setMeta("name", "twitter:image:alt", imageAlt);
    setLink("canonical", canonical);
    setLink("alternate", `${siteUrl}/`, { hreflang: "pt-BR" });
    setLink("alternate", `${siteUrl}/en`, { hreflang: "en" });
    setLink("alternate", `${siteUrl}/`, { hreflang: "x-default" });

    const existing = document.head.querySelector<HTMLScriptElement>(
      "script[data-seo-jsonld]",
    );
    existing?.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seoJsonld = "true";
    script.textContent = JSON.stringify({ ...jsonLd, url: canonical });
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [description, image, imageAlt, jsonLd, noIndex, path, title, type]);

  return null;
}

export { siteUrl };
