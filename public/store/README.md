# First-party store catalog (free ship)

- Live catalog: https://dochub-site.pages.dev/store/catalog.json
- Worker proxy: https://dochub-downloads.dochubhq.workers.dev/store/catalog.json
- Override: `DOCHUB_STORE_CATALOG_URL`

Local dogfood:

```bash
export DOCHUB_STORE_CATALOG_URL="$PWD/catalog.local.json"
dm extension search
```

Custom domain (`downloads.doc-hub.app`) comes after R2 is enabled and DNS is attached.

## Free packs

- `com.dochub.adapter.git` — local git HEAD → `scm.commit` / `scm.branch`
- `com.dochub.adapter.python` — pytest / ruff / mypy → `build.*` / `test.*`
- `com.dochub.adapter.rust` — cargo build/test/clippy → `build.*` / `test.*`
- `com.dochub.adapter.dotnet` — dotnet build/test → `build.*` / `test.*`
- `com.dochub.adapter.godot` — headless check/test → `build.*` / `test.*`
- `com.dochub.pack.achievements-starter` — language-agnostic starter achievements (pack-local eval)
- `com.dochub.pack.visual-ship-teaser` — UI teaser scanners (funnel → Visual Ship Gate)

## Upcoming paid packs

- `com.dochub.pack.dtj` (**DTJ Trace Gate**, $25) — list on landing `#packs` first;
  add to `catalog.json` only after a real signed `.dhpack` exists (same rule as Visual Ship).
