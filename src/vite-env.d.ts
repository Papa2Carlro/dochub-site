/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_DIST_REPO?: string;
  /** Tracked downloads CDN origin, e.g. https://downloads.doc-hub.app */
  readonly VITE_DOWNLOADS_BASE?: string;
  /** Cloudflare Web Analytics site token (beacon). */
  readonly VITE_CF_BEACON_TOKEN?: string;
  /** Plausible site domain, e.g. doc-hub.app — enables script when set */
  readonly VITE_PLAUSIBLE_DOMAIN?: string;
  readonly VITE_PLAUSIBLE_SRC?: string;
  /** GA4 measurement id, e.g. G-XXXXXXXX — optional; see /privacy/ */
  readonly VITE_GA_MEASUREMENT_ID?: string;
  /** Google Search Console meta verification token */
  readonly VITE_GOOGLE_SITE_VERIFICATION?: string;
  /** Formspree form id for the waitlist (optional) */
  readonly VITE_FORMSPREE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
