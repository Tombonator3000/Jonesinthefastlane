#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
GAME="${1:-$ROOT/original}"
if [[ ! -f "$GAME/resource.map" ]]; then
  printf 'Finner ikke resource.map i: %s\n' "$GAME" >&2; exit 1
fi
EXE="${SCUMMVM_BIN:-}"
if [[ -z "$EXE" ]]; then
  EXE="$(command -v scummvm || true)"
  [[ -n "$EXE" ]] || EXE="/usr/games/scummvm"
fi
if [[ ! -x "$EXE" ]]; then
  printf '%s\n' 'ScummVM er ikke funnet. Installer ScummVM, eller sett SCUMMVM_BIN til programfilen.' >&2
  exit 1
fi
mkdir -p "$ROOT/saves" "$ROOT/logs"
exec "$EXE" --config="$ROOT/scummvm-local.ini" --savepath="$ROOT/saves" --logfile="$ROOT/logs/scummvm.log" --path="$GAME" sci:jones
