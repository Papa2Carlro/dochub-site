# Doc Hub landing (React)

Live (free ship): **https://dochub-site.pages.dev**  
Later: `doc-hub.app` + `downloads.doc-hub.app`.

Downloads go through the **Worker CDN** (not GitHub) so KV can count them.

```bash
VITE_SITE_URL=https://dochub-site.pages.dev
VITE_DOWNLOADS_BASE=https://dochub-downloads.dochubhq.workers.dev
```

CTAs → `…/d/{mac|win|linux}` → Worker increments KV → streams installer from R2.

Worker: sibling repo `dochub-downloads-worker`.  
Promo: [`PROMO.md`](./PROMO.md) + press kit at `/press/`.

## Backend?

| Need | What |
|------|------|
| Landing / SEO | Cloudflare Pages |
| Download counts | Worker + KV |
| Page analytics | Cloudflare Web Analytics (`VITE_CF_BEACON_TOKEN`) / optional Plausible |
| Waitlist email | Later |

## Dev

```bash
pnpm install
cp .env.example .env
npm run dev
```

Without `VITE_DOWNLOADS_BASE`, Download buttons fall back to GitHub Releases.

## Local admin (not shipped)

Ops UI for download KV counters — **gitignored**, separate Vite config, never in `dist/`.

```bash
npm run admin   # http://127.0.0.1:4175/
```

Details: [`ADMIN.md`](./ADMIN.md) · env template: [`ADMIN.env.example`](./ADMIN.env.example).
