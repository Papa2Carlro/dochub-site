import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useI18n } from "../i18n";

const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://dochub-site.pages.dev"
).replace(/\/$/, "");

type PageKey = "home" | "docs" | "benchmark";

function pageKey(pathname: string): PageKey {
  const path = pathname.replace(/\/$/, "") || "/";
  if (path === "/docs") return "docs";
  if (path === "/benchmark") return "benchmark";
  return "home";
}

function pagePath(key: PageKey): string {
  if (key === "docs") return "/docs";
  if (key === "benchmark") return "/benchmark";
  return "/";
}

const PAGE_META = {
  home: { title: "homeTitle", description: "homeDescription" },
  docs: { title: "docsTitle", description: "docsDescription" },
  benchmark: { title: "benchmarkTitle", description: "benchmarkDescription" },
} as const;

function upsertMeta(
  attr: "name" | "property",
  key: string,
  content: string,
) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector(
    'link[rel="canonical"]',
  ) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

/**
 * Per-route title / description / canonical / Open Graph for the SPA.
 * Crawlers that execute JS (Google) pick this up after render.
 */
export function Seo() {
  const { pathname } = useLocation();
  const { t, locale } = useI18n();
  const key = pageKey(pathname);
  const path = pagePath(key);
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  const meta = PAGE_META[key];
  const title = t("seo", meta.title);
  const description = t("seo", meta.description);

  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertCanonical(url);

    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:locale", locale === "uk" ? "uk_UA" : "en_US");

    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    const verify = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION?.trim();
    if (verify) {
      upsertMeta("name", "google-site-verification", verify);
    }
  }, [title, description, url, locale]);

  return null;
}
