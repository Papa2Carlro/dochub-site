import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function gaAlreadyInHead(measurementId: string) {
  return Boolean(
    document.querySelector(
      `script[src*="googletagmanager.com/gtag/js?id=${measurementId}"]`,
    ) || document.querySelector(`script[data-ga-id="${measurementId}"]`),
  );
}

function ensureGtag(measurementId: string) {
  if (gaAlreadyInHead(measurementId)) return;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { send_page_view: false });
  }

  const el = document.createElement("script");
  el.async = true;
  el.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  el.dataset.gaId = measurementId;
  document.head.appendChild(el);
}

function trackGaPageView(measurementId: string, path: string, title: string) {
  if (!window.gtag) return;
  // Initial home page_view already sent by static index.html gtag('config').
  // SPA navigations need explicit page_view events.
  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title,
    send_to: measurementId,
  });
}

/**
 * Page analytics — all optional via env.
 *
 * Prefer privacy-friendly defaults on Pages:
 *   VITE_CF_BEACON_TOKEN — Cloudflare Web Analytics
 *   VITE_PLAUSIBLE_DOMAIN — Plausible
 *
 * Optional Google Analytics 4 (cookies / Ads signals — see /privacy/):
 *   VITE_GA_MEASUREMENT_ID=G-XXXXXXXX
 *   (also injected into index.html at build time for GSC / crawlers)
 */
export function Analytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const cfToken = import.meta.env.VITE_CF_BEACON_TOKEN?.trim();
    if (cfToken && !document.querySelector("script[data-cf-beacon]")) {
      const el = document.createElement("script");
      el.defer = true;
      el.src = "https://static.cloudflareinsights.com/beacon.min.js";
      el.setAttribute("data-cf-beacon", JSON.stringify({ token: cfToken }));
      document.head.appendChild(el);
    }

    const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN?.trim();
    if (domain && !document.querySelector(`script[data-domain="${domain}"]`)) {
      const src =
        import.meta.env.VITE_PLAUSIBLE_SRC?.trim() ||
        "https://plausible.io/js/script.js";
      const el = document.createElement("script");
      el.defer = true;
      el.dataset.domain = domain;
      el.src = src;
      document.head.appendChild(el);
    }

    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
    if (gaId) ensureGtag(gaId);
  }, []);

  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
    if (!gaId) return;
    ensureGtag(gaId);
    const path = `${pathname}${search}`;
    // Skip duplicate first hit when static head already configured gtag on "/"
    if (path === "/" && gaAlreadyInHead(gaId)) return;
    trackGaPageView(gaId, path, document.title);
  }, [pathname, search]);

  return null;
}
