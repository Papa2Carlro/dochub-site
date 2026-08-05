# Local admin (not shipped)

Private ops dashboard for download counters + Cloudflare Web Analytics visits.

**Never deployed.** The whole `admin/` folder is **gitignored**. Pages only builds
the main landing (`npm run build` → `dist/`). Admin uses a separate Vite config.

## Setup (once)

```bash
# restore UI from tracked template (secrets stay local)
cp -R admin.template admin
cp ADMIN.env.example admin/.env
# edit admin/.env → VITE_STATS_TOKEN (Worker secret STATS_TOKEN)
# edit admin/.env → CF_API_TOKEN (Cloudflare API token, server-only)
```

Tracked template: `admin.template/` (no secrets). Working copy: `admin/` (**gitignored**).

## Run (local only)

```bash
npm run admin
# → http://127.0.0.1:4175/
```

## What it shows

| Block | Source |
|-------|--------|
| Funnel: visits, OS share, conversion | RUM + KV (+ HTTP hits for fair %) · window **Today / 7d / 30d** |
| Downloads mac/win/linux/total | `GET {VITE_DOWNLOADS_BASE}/stats?token=` |
| Download hits (UA / country / bot?) | `GET /api/download-hits` → CF `httpRequestsAdaptiveGroups` on Worker host `/d/*` |
| Store packs (.dhpack) | same endpoint → `store.packs` / `store.hits` |
| Visits (total + per day) | `GET /api/visits` → CF `rumPageloadEventsAdaptiveGroups` |
| Devices (install-set count) | Worker `/stats` → D1 `device_install_sets` |
| Reconcile warnings | bot/curl share, HTTP > KV anomalies |

### Local APIs (dev server only)

- `/api/visits?days=30`
- `/api/download-hits?days=30`
- Token: `CF_API_TOKEN` in `admin/.env` (never `VITE_*`)
- Optional: `CF_ACCOUNT_ID`, `CF_SITE_TAG`, `CF_DOWNLOADS_HOST`

## Safety

- `admin/` in `.gitignore`
- `npm run build` does **not** reference `vite.admin.config.ts`
- Do not add `admin` to Pages deploy / `wrangler pages deploy`
- Never prefix Cloudflare API tokens with `VITE_` — they would be exposed to the browser bundle
