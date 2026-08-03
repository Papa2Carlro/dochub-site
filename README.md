# Doc Hub landing (React)

Downloads are meant to go through **your CDN** (not GitHub) so you can count them.

```bash
VITE_DOWNLOADS_BASE=https://downloads.doc-hub.app
```

CTAs → `https://downloads.doc-hub.app/d/{mac|win|linux}` → Cloudflare Worker
increments KV → streams the installer from R2.

Worker + setup: [`workers/downloads/`](./workers/downloads/).

Promo: [`PROMO.md`](./PROMO.md) + live press kit at `/press/`.

## Domain

Prefer **`doc-hub.app`** + subdomain **`downloads.doc-hub.app`**.

## Backend?

| Need | What |
|------|------|
| Landing / SEO | Static Pages |
| Download counts | **Worker + KV** (this folder’s sibling `workers/downloads`) — not a full app server |
| Page analytics | Plausible (optional) |
| Waitlist email | Later |

## Dev

```bash
pnpm run site:dev
```

Copy `.env.example` → `.env` and set `VITE_DOWNLOADS_BASE` when the Worker is live.
Until then, the site falls back to GitHub Releases links.
