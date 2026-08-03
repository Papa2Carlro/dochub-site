# Marketing screenshots

Product UI captures for the landing gallery, hero, and press kit.

Target: **≥1800px wide PNG** (ideally full native window @2x).

## Keep in this folder

| File | Used for |
|------|----------|
| `portfolio-task-board.png` | Hero + gallery |
| `portfolio-dashboard-overview.png` | Gallery |
| `portfolio-dashboard-audit.png` | Gallery |
| `portfolio-milestones.png` | Gallery |
| `portfolio-orbit-map.png` | Gallery |
| `portfolio-living-glossary.png` | Gallery |
| `portfolio-mcp-history.png` | Gallery |
| `portfolio-trophy-room.png` | Gallery |
| `board.png` / `dashboard.png` / `trophy.png` | Legacy captures (kept as fallbacks) |

Do **not** commit Visual Ship dogfood of the marketing site itself
(`portfolio-landing-*`, `visual-ship.gif`).

## Capture (macOS)

1. Open Doc Hub, enable **Settings → Screenshot mode** (hides home paths).
2. Open the screen you want.
3. From repo root:

```bash
./site/scripts/capture-screens.sh
```

Or manually:

```bash
screencapture -x -o site/public/screens/portfolio-task-board.png
```
