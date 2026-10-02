# Jones — native TypeScript and Three.js

This directory is the native browser game. Converted original game methods run
as TypeScript; native graphics/audio services implement their original API.
Three.js presents the original 320×200 game with optional display effects. For free online play, one browser hosts the same game core over WebRTC.
An optional authoritative Node server is also available. No ScummVM runtime or
WebAssembly is loaded by this entry point.

From the repository root:

```sh
pnpm install --frozen-lockfile
pnpm build:native
pnpm serve:native
```

Open `http://127.0.0.1:8787/`. `pnpm dev:native` runs the development client on
port 8767. `pnpm typecheck:native` and `pnpm test:native` run the native checks.

The checked-in `generated/script_*.ts` files are editable game code.
`pnpm build:native` preserves edits; `pnpm translate:native` deliberately
re-imports the pinned original source and overwrites generated files.
`pnpm assets:native` regenerates original artwork/font/cursor/text exports.
Original source resources under `original/` are never modified by these tools.

See [the native port guide](../docs/NATIVE_PORT.md) for architecture, source and
asset provenance, commands, online hosting and verification boundaries. See
[audio documentation](audio/README.md) for original sound rendering, licences
and its known fidelity limits. GitHub Pages hosts free peer play using PeerJS signaling.
See [peer multiplayer](../docs/PEER_MULTIPLAYER.md) for host lifetime, original
saves, guest reconnection and restrictive-network limits.
