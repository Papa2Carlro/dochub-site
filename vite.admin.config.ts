import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { adminVisitsApi } from "./admin-visits-api";

const rootDir = dirname(fileURLToPath(import.meta.url));

/**
 * Local-only admin UI. Never used by `npm run build` / Pages.
 * Requires ./admin (gitignored) — see ADMIN.md.
 */
export default defineConfig(({ mode }) => {
  const adminRoot = resolve(rootDir, "admin");
  if (!existsSync(adminRoot)) {
    throw new Error(
      "Missing ./admin (gitignored). See ADMIN.md to recreate, then npm run admin.",
    );
  }

  const env = loadEnv(mode, adminRoot, "");
  const siteUrl = (
    env.VITE_SITE_URL || "https://dochub-site.pages.dev"
  ).replace(/\/$/, "");

  const cfAccountId = (
    env.CF_ACCOUNT_ID || "293add1698c4458729001c4828c1b481"
  ).trim();
  const cfSiteTag = (
    env.CF_SITE_TAG || "ccc59f84652c4564b665581cfed7db65"
  ).trim();

  return {
    root: adminRoot,
    // Reuse landing public assets (icon) without copying into admin/
    publicDir: resolve(rootDir, "public"),
    envDir: adminRoot,
    plugins: [
      react(),
      adminVisitsApi({
        adminRoot,
        cfAccountId,
        cfSiteTag,
      }),
    ],
    server: {
      port: 4175,
      strictPort: true,
      open: "/",
    },
    preview: {
      port: 4176,
      strictPort: true,
    },
    define: {
      __SITE_URL__: JSON.stringify(siteUrl),
    },
  };
});
