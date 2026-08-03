import { useEffect } from "react";

/**
 * Privacy-friendly analytics (Plausible). No cookies by default.
 * Enable with VITE_PLAUSIBLE_DOMAIN=doc-hub.app at build time.
 * No custom backend required.
 */
export function Analytics() {
  useEffect(() => {
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
