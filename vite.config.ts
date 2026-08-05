import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  // Free ship: pages.dev until doc-hub.app DNS is live.
  const siteUrl = (
    env.VITE_SITE_URL || "https://dochub-site.pages.dev"
  ).replace(/\/$/, "");

  return {
    plugins: [
      react(),
      {
        name: "dochub-html-site-url",
        transformIndexHtml(html) {
          return html.replaceAll("%SITE_URL%", siteUrl);
        },
      },
    ],
    base: "/",
    // Landing only — local admin uses vite.admin.config.ts and is gitignored.
    build: {
      emptyOutDir: true,
      rollupOptions: {
        input: "index.html",
      },
    },
    css: {
      postcss: {
        plugins: [],
      },
    },
    server: { port: 4173, strictPort: true },
    preview: { port: 4174, strictPort: true },
  };
});
