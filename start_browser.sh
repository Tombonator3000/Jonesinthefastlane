#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
python3 tools/build_browser.py
echo 'Open http://localhost:8765 in your browser. Press Ctrl+C to stop the server.'
python3 -m http.server 8765 --bind 127.0.0.1 --directory build/browser
