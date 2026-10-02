# Native TypeScript browser port

The native entry point is `native/`. It runs editable TypeScript game methods,
renders the original artwork through Three.js and can run the same game session
on a Node.js server for online play. It does not load ScummVM, WebAssembly, SCI
bytecode or a runtime source-syntax interpreter. The older `web/` ScummVM build
is a separate implementation and reference, not a dependency of this port.

The target is the original English Jones interface and rules: player selection,
characters, goals, the Jones opponent, original menus and controls, jobs, shops,
education, weeks and Save/Restore. Display effects do not change those rules.
Conversion coverage and passing play tests are not an exhaustive 1:1 parity
certification; `native/generated/manifest.json` explicitly keeps
`parityVerified: false`.

## Build and run

Use Node.js 22 or later and the repository's pinned pnpm dependencies:

```sh
pnpm install --frozen-lockfile
pnpm typecheck:native
pnpm test:native
pnpm build:native
pnpm serve:native
```

The combined HTTP and WebSocket server serves `build/native/` at
`http://127.0.0.1:8787/`; its game endpoint is `/multiplayer`. For development,
`pnpm dev:native` serves the client at `http://127.0.0.1:8767/`. Run
`pnpm serve:native` alongside it when testing online play.

`pnpm build:native` compiles the checked-in TypeScript and assets. It does not
overwrite edited game logic. `pnpm translate:native` is an explicit re-import
from the pinned decompiled sources and regenerates `native/generated/`;
preserve any native edits before deliberately running that command.

To regenerate original graphics, fonts, cursors and text:

```sh
pnpm assets:native
python3 -m unittest discover -s tests -p test_native_assets.py -v
```

Audio regeneration has separate build dependencies and is described in
[`native/audio/README.md`](../native/audio/README.md). Neither Python, an audio
compiler nor FFmpeg is required to play an already-built browser package.

## Architecture and editing

| Location | Responsibility |
| --- | --- |
| `native/generated/script_*.ts` | The converted original game classes, instances, procedures and methods; editable TypeScript game logic. |
| `native/generated/manifest.json` | Pinned source revision, per-file hashes, conversion counts and known source ambiguities. |
| `native/runtime/` | Object/property dispatch, 16-bit values, references, events, waits, saves, movement and native implementations of the original kernel API. |
| `native/graphics/GraphicsState.ts` | DOM-free 320×200 indexed raster state, ports, text, sprites, pictures, priority/control planes, windows and saved regions. |
| `native/graphics/animation.ts` | Original cast order, update flags, static backgrounds and displayed moving actors. |
| `native/graphics/menus.ts`, `controls.ts` | Original source-defined menu items, enabled state, hotkeys and editable line controls. |
| `native/graphics/ThreeRenderer.ts` | CanvasTexture, orthographic Three.js presentation, pointer mapping and optional display shaders. |
| `native/session.ts` | Shared native session used by the browser and authoritative server. |
| `native/network/` | Invitation-based rooms, player seats, turn ownership, reconnect and serialized frame/state transport. |
| `native/audio/` | Original resource timing, native sound state and browser playback; see its README for fidelity limits. |

`Runtime.send` invokes converted TypeScript functions directly. It is an object
support library, not a SCI opcode execution loop. Original calls such as
`DrawCel`, `TextSize` and `Animate` resolve to native services. The game core and
indexed rasterizer do not require a document, canvas or browser global, so the
server runs the actual game logic rather than accepting client-reported money
or turns.

Graphics frames contain indexed pixels, the active palette, cursor state and a
bounded diagnostic command list. Three.js presents the resulting game image
on an orthographic plane. Original pixels are the default; Smooth, Modern and
CRT are presentation options. Output resolution can increase to 720p, 1080p,
1440p or 2160p within the device's limits, while original asset detail and
logical hit targets remain 320×200. The 8:5 play area is letterboxed, with pointer
coordinates mapped back to that same area. A 2D canvas fallback preserves the
game image when the optional WebGL renderer is unavailable.

## Original assets and provenance

`tools/export_native_assets.py` reads the original SCI resources without editing
them. `native/public/assets/manifest.json` includes resource hashes, per-cel
indexed pixels, image locations, palette declarations, offsets and transparency.
The export includes:

- 90 view resources, all 752 cels and their loop structure;
- all seven picture resources, including visual, priority and control planes;
- eight original bitmap fonts with every glyph mask, width and line height;
- two original cursors with their hotspots and bit masks;
- 39 text resources with the original byte/code-page mapping and palette data.

Jones draws into the complete 320×200 surface, including the first ten rows;
it does not use the ten-pixel picture-port offset common in other SCI games.
The menu bar is drawn by the original menu interaction when requested.

The high-level source reference is
[`sluicebox/sci-scripts`](https://github.com/sluicebox/sci-scripts/tree/870a8015b689474484bf3d8b41416956d4315432),
game `jones-dos-1.000.060`, pinned at
`870a8015b689474484bf3d8b41416956d4315432`. It supplies 69 scripts, 72 classes,
526 instances, 738 methods and 98 procedures. The two unused procedures with
ambiguous lexical `super` calls are identified in the conversion manifest and
fail explicitly if invoked.

Resource format and original kernel behavior were checked against
[`ScummVM` at `fed42f2068dcafc6aafa1c28c77e4c88def74b66`](https://github.com/scummvm/scummvm/tree/fed42f2068dcafc6aafa1c28c77e4c88def74b66/engines/sci).
Derived native service and exporter code carries GPL-3.0-or-later notices.
The palette merger deliberately retains the pinned reference's exact-match
flag/allocation behavior: deduplicating all equal RGB colors changes how early
portrait colors run out of free slots and no longer matches reference captures.
Palette caches share the original 60 Hz timestamp semantics and are retained
across menu/save restoration. These narrow compatibility behaviors are covered
by native regression tests.
The browser's Three.js dependency carries its own MIT licence. Original Sierra
artwork, text, music and decompiled game logic retain their original rights;
the tools' licence does not relicense those assets. Audio vendor provenance and
licences are recorded separately under `native/audio/vendor/`.

`original/` remains the preserved source of truth. Its existing hash inventory
and the separate byte-identical SCI assembly check remain useful evidence about
the original files; neither alone proves behavioral parity of the native port.

## Online play

Free online play uses one player's browser as the authoritative host, with
PeerJS/WebRTC connections to up to three guests. The existing native session
runs the original game, including setup, turns and Jones. The host validates
all input, including its own, before the session receives it. Guests receive
the same original indexed frames and audio state. No Node game server is needed
for this mode on GitHub Pages.

The optional dedicated WebSocket server uses the same room authority. Public
server mode requires its own HTTPS/WSS deployment. Configure `HOST`, `PORT` and
`ALLOWED_ORIGINS` as before; select it under Advanced connection in the lobby.

Read [Free peer multiplayer](PEER_MULTIPLAYER.md) for the connection flow,
original Save/Restore, private guest reconnection, host lifetime, custom
signaling and the explicit limits of the free STUN path.

## Verification and remaining limits

`tests/test_native_assets.py` compares every exported cel and font/cursor bit
with original resource decoding, checks text byte preservation and all picture
planes. `native/graphics/GraphicsState.test.ts` covers drawing, clip/port
coordinates, persistent and transient actors, palette retention, transparent
bubble disposal, saved regions, menu input and editable controls. The native
test suite also covers conversion, original AI paths, audio and networking.

`tests/native_browser_smoke.cjs` exercises real mouse/keyboard input through
startup, original player setup, bank deposits/withdrawals, Save/Restore and
reload, employment and work, food, school, a week transition and display modes.
It also verifies the original F4 statistics text and original Quit confirmation.
It rejects ScummVM/WASM requests and stores its actual result and captures in
`build/native-evidence/`. Run it against `pnpm dev:native`, or set
`JONES_NATIVE_URL` to the server URL for a packaged-build check:

```sh
pnpm exec playwright install chromium
node tests/native_browser_smoke.cjs
```

Use the latest generated reports for which scenarios passed on the current
build. Original and native screenshots can differ in cursor location, random
events and animation phase; visual comparisons must account for those. These
tests do not cover every combination of players, late-game outcome, rare event
or menu sequence. Audio has documented synthesis/mixing differences. The port
must not be described as exhaustively pixel-, timing- or behavior-identical
until those comparisons have actually been completed.
