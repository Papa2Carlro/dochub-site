#!/usr/bin/env bash
# Capture Retina screenshots into site/public/screens/.
# Usage: run, then click the Doc Hub window for each prompt.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
OUT="$ROOT/public/screens"
mkdir -p "$OUT"

echo "Enable Screenshot mode in Doc Hub Settings first."
echo "You will capture 3 windows — click the Doc Hub window each time."
echo

for name in board dashboard trophy; do
  echo "→ Capture «$name» (click the window)…"
  screencapture -x -o -W "$OUT/${name}.png"
  sips -g pixelWidth -g pixelHeight "$OUT/${name}.png" 2>/dev/null || true
  echo "  saved $OUT/${name}.png"
  echo
done

echo "Done. Refresh pnpm site:dev — hero uses board.png."
