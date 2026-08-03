# Marketing screenshots

Current files in chat exports are **~1024×661 JPEG** (soft when stretched).
For a sharp landing, replace with **Retina window captures**:

Target: **≥1800px wide PNG** (ideally full native window @2x).

## Capture (macOS)

1. Open Doc Hub, enable **Settings → Screenshot mode** (hides home paths).
2. Open the screen you want (Board / Dashboard / Trophy).
3. From repo root:

```bash
# Click the Doc Hub window after running — or pass -l and click
./site/scripts/capture-screens.sh
```

Or manually:

```bash
screencapture -x -o site/public/screens/board.png
# then dashboard.png, trophy.png
```

Keep filenames: `board.png`, `dashboard.png`, `trophy.png`.

## Visual Ship Gate demo

- `visual-ship.gif` — short loop of pack route shots (home → press → privacy)
- `visual-ship-still.jpg` — poster / fallback frame

Regenerate from dogfood PNGs:

```bash
# after: node packages/pack-visual-ship/scripts/visual-ship.mjs …
ffmpeg -y \
  -loop 1 -t 1.5 -i .dochub/visual-ship/home__desktop.png \
  -loop 1 -t 1.5 -i .dochub/visual-ship/press__desktop.png \
  -loop 1 -t 1.5 -i .dochub/visual-ship/privacy__desktop.png \
  -filter_complex "\
[0:v]scale=880:520:force_original_aspect_ratio=decrease,pad=880:520:(ow-iw)/2:(oh-ih)/2:color=0x0b0f14,fps=8,format=rgba[a];\
[1:v]scale=880:520:force_original_aspect_ratio=decrease,pad=880:520:(ow-iw)/2:(oh-ih)/2:color=0x0b0f14,fps=8,format=rgba[b];\
[2:v]scale=880:520:force_original_aspect_ratio=decrease,pad=880:520:(ow-iw)/2:(oh-ih)/2:color=0x0b0f14,fps=8,format=rgba[c];\
[a][b][c]concat=n=3:v=1:a=0,split[s0][s1];\
[s0]palettegen=max_colors=48:stats_mode=diff[p];\
[s1][p]paletteuse=dither=bayer:bayer_scale=4" \
  site/public/screens/visual-ship.gif
```

