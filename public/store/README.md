# First-party Plugin Store catalog (ADR 0022)

Served at `https://downloads.doc-hub.app/store/catalog.json` (or Pages
`/store/catalog.json` until the Worker is live).

Local dogfood:

```bash
export DOCHUB_STORE_CATALOG_URL="$PWD/site/public/store/catalog.local.json"
dm extension search
dm extension install --from-store com.dochub.adapter.typescript
```

Do not commit large `.dhpack` binaries here — upload to R2 under
`store/{extension_id}/{version}.dhpack`.
