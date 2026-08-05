/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_DOWNLOADS_BASE?: string;
  readonly VITE_DIST_REPO?: string;
  readonly VITE_STATS_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
