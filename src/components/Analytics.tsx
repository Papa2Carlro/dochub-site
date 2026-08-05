import { useEffect } from "react";

/**
 * Privacy-friendly page analytics (no cookies by default).
 *
 * Cloudflare Web Analytics — prefer this on Pages:
 *   VITE_CF_BEACON_TOKEN=<site_token from Web Analytics>
 * Optional Plausible:
 *   VITE_PLAUSIBLE_DOMAIN=dochub-site.pages.dev
 */
export function Analytics() {
  useEffect(() => {
    const cfToken = import.meta.env.VITE_CF_BEACON_TOKEN?.trim();
    if (cfToken && !document.querySelector("script[data-cf-beacon]")) {
      const el = document.createElement("script");
      el.defer = true;
      el.src = "https://static.cloudflareinsights.com/beacon.min.js";
      el.setAttribute(
        "data-cf-beacon",
        JSON.stringify({ token: cfToken }),
      );
      document.head.appendChild(el);
    }

    const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN?.trim();
    if (!domain) return;
    if (document.querySelector(`script[data-domain="${domain}"]`)) return;

    const src =
      import.meta.env.VITE_PLAUSIBLE_SRC?.trim() ||
      "https://plausible.io/js/script.js";
    const el = document.createElement("script");
    el.defer = true;
    el.dataset.domain = domain;
    el.src = src;
    document.head.appendChild(el);
  }, []);

  return null;
}
