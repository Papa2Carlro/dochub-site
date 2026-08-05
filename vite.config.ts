import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  // Free ship: pages.dev until doc-hub.app DNS is live.
  const siteUrl = (
    env.VITE_SITE_URL || "https://dochub-site.pages.dev"
  ).replace(/\/$/, "");
  const gsc = env.VITE_GOOGLE_SITE_VERIFICATION?.trim() || "";
  const gaId = env.VITE_GA_MEASUREMENT_ID?.trim() || "";

  const gscMeta = gsc
    ? `<meta name="google-site-verification" content="${gsc}" />`
    : "";

  // Static gtag in <head> so Search Console / crawlers see it without waiting for React.
  const gaSnippet = gaId
    ? [
        `<script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>`,
        `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');</script>`,
      ].join("\n    ")
    : "";

  return {
    plugins: [
      react(),
      {
        name: "dochub-html-site-url",
        transformIndexHtml(html) {
          return html
            .replaceAll("%SITE_URL%", siteUrl)
            .replace("<!--GOOGLE_SITE_VERIFICATION-->", gscMeta)
            .replace("</head>", `${gaSnippet ? `    ${gaSnippet}\n  ` : ""}</head>`);
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
