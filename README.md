# Jones in the Fast Lane — native TypeScript and Three.js port

[**Play the native browser edition**](https://tombonator3000.github.io/Jonesinthefastlane/native/) · [Original-engine reference edition](https://tombonator3000.github.io/Jonesinthefastlane/)

The native edition translates all 69 original game/source modules into editable TypeScript and draws the original indexed artwork with Three.js. It runs **without ScummVM, a SCI bytecode interpreter or WebAssembly**. The translated game code controls the original English menus, 1–4 players, characters, goals, shops, economy, jobs, education, events, weeks and Jones opponent. Optional display effects leave those rules in charge.

**Play online for free from GitHub Pages:** the creator's browser hosts the same native game and guests join through an invitation link or **Find games**. Rooms are private by default; choose **Public room** to advertise available seats in the best-effort free room directory. PeerJS Cloud provides free connection signaling; game input and the authoritative original frames travel over WebRTC. Each player controls their own original turn. The creator must keep the game open. Private reconnect credentials let guests reload and return to the same seat while the host remains available.

**Play online** opens a game-styled panel over the town, from the launch screen or the added button above the original main-menu controls. Create/Join, Find games and the room lobby share the original cream, turquoise and black presentation. The lobby shows player seats and **Copy invitation**; **Back** closes the panel, while **Leave online game** leaves the room. Original Play/Restore/Demo controls keep their positions.

Original Save/Restore stores peer games on the creator's device, separately from single-player saves and by room player count. Closing the host ends the live room; a new room can use the original Restore Game menu to load the last saved game. Automatic host migration is not implemented. Some restrictive networks need a separately configured TURN relay; the default free path uses STUN and does not promise connectivity on every network.

[Free multiplayer setup, architecture and limits](docs/PEER_MULTIPLAYER.md)

The optional Node/WebSocket server remains under **Advanced connection → Dedicated server**. It runs the same authoritative room logic; it is not required for ordinary peer play from Pages. To run it locally:

```sh
pnpm install --frozen-lockfile
pnpm build:native
pnpm serve:native
```

Open **http://127.0.0.1:8787**. Node 22 or newer is required. For development, use `pnpm dev:native`. To accept other machines, run the server with `HOST=0.0.0.0`; public HTTPS hosting needs a WebSocket-capable reverse proxy. The online creator chooses the room size, shares the invitation, starts when everyone is connected, then chooses the same player count in the original game menu.

Full browser fullscreen starts from the Play gesture. Original pixels are the default; smoothing, modern color/light and CRT shaders support resolution settings through 2160p. Original 320×200 proportions are retained. Save/Restore works through the original menus and persists locally in the browser; native saves are separate from original-engine saves.

**Graphics: Original / HD** switches artwork immediately, including during a game. The same choice is available under **Display → Graphics pack** and is remembered independently by each player. The expanded HD pack maps photographic artwork to the town and 291 original cels, including player/Jones movement, eleven talking portraits, products, interiors and event sequences. Another 161 cels use technical drawings for the calculator, clock sectors, doors and smaller props; the town clock face is drawn separately. Original text, menu controls, borders, pressed states and cursor remain authoritative in both modes. **Town lighting (HD)** adds optional sign glow and edge shading. Uncovered artwork remains original; this is not a complete remaster of all 752 cels. [Exact HD coverage, provenance and validation](docs/HD_GRAPHICS.md).

[Native architecture, setup and limits](docs/NATIVE_PORT.md) · [Native verification](reports/native_verification.md) · [Source translation](native/compiler/README.md) · [Original audio](native/audio/README.md)

`native/generated/` contains ordinary game functions, not a runtime syntax tree. Normal builds preserve edits to these TypeScript files. `pnpm translate:native` explicitly regenerates them from pinned reference sources and replaces those edits. Native tests verify compiler behavior, original rule scenarios, real input journeys, audio, graphics and real online turns; they do not certify every possible path as binary-equivalent.

## Original-engine reference edition

The preserved reference edition runs the **unchanged original Jones SCI scripts** in a pinned, source-built ScummVM WebAssembly engine. It remains available for comparison with the native port.

The game fills the browser viewport. **Play in fullscreen** also requests real browser fullscreen after a user gesture. The original image proportions are preserved, so wide screens can have black borders. Use the original in-game controls, including Save and Restore. The small display controls in the upper-right corner appear only on hover or keyboard focus.

**Original pixels** is the default. Optional smoothing, light/color and CRT effects affect presentation only. Modern/CRT rendering supports output up to 2160p; these filters do not add new detail to the original artwork. A direct-canvas fallback keeps the original game visible if the optional effects cannot run.

## Play locally

Python 3 is sufficient; there are no JavaScript packages to install for normal play.

```sh
bash start_browser.sh
```

On Windows, run `start_browser.cmd`. Open **http://localhost:8765**, then select **Play in fullscreen**.

Manual build/start:

```sh
python3 tools/build_browser.py
python3 -m http.server 8765 --bind 127.0.0.1 --directory build/browser
```

The build produces `build/browser/` and `build/jones-browser-0.2.0.zip`. The ZIP is a self-contained static website; extract it and serve its `jones-browser/` directory over HTTP. Do not open `index.html` using `file://`.

[Browser architecture and limits](docs/BROWSER_PORT.md) · [Browser verification](reports/browser_verification.md) · [Native reference run](docs/ORIGINAL_RUNTIME.md)

## Preservation and editing workbench

The original workbench remains available alongside the browser runtime:

| Location | Contents |
| --- | --- |
| `original/` | 22 original files, protected by SHA-256 checksums. |
| `source_asm/` | 69 editable low-level SCI scripts; unchanged scripts assemble byte-identically. |
| `script_metadata/` | Objects, methods, strings and script structure. |
| `graphics/` | 752 exported PNG cels and a separate asset viewer. |
| `extracted/` | 266 unique resources, SCI patches and 39 text JSON files. |
| `web/` | Fullscreen browser shell and presentation-only compositor. |
| `web/vendor/` | Pinned ScummVM WebAssembly engine, provenance and license. |
| `web/assets/` | Reproducible original picture/view exports for editing and comparison. |
| `native/generated/` | All 69 translated TypeScript game modules and source provenance. |
| `native/runtime/` | Native object, event, save, movement and resource support. |
| `native/graphics/` | Indexed original drawing and Three.js display/shaders. |
| `native/audio/` | Original sound timing, Web Audio playback and FM export source. |
| `native/network/` | Authoritative Node/WebSocket rooms, private seats and reconnect. |
| `tools/` | Extraction, assembler, patching, asset export and browser packaging tools. |
| `mods/` | Separate resource patches; never overwrite original files. |

The complete original workbench was imported in commit `76282663e768d5fa432f69bd5501e0b45532608c`: 1,504 added files, 13 already-identical files, and 22 passing data/import tests. [Historical import report](reports/github_import.json) · [Import test log](reports/github_import_tests.txt).

```sh
python3 -m pip install -r requirements.txt
python3 tools/jones.py verify
python3 -m unittest discover -s tests -v
```

For browser input tests, install the pinned development dependency and Chromium:

```sh
pnpm install --frozen-lockfile
pnpm exec playwright install chromium
python3 tools/build_browser.py
pnpm test:browser
```

[README_NO.md](README_NO.md) preserves the original Norwegian workbench guide. [docs/SOURCES.md](docs/SOURCES.md) records format references and original provenance. The low-level assembler is not a complete high-level compiler. Downloadable third-party decompiled reference sources are kept separate and are not claimed to be bytecode-equivalent.

## Delivery and remaining verification

The Browser game workflow verifies both editions and publishes the native build at `/native/` alongside the original-engine reference on `main`. It runs the native original-input browser journey against the production build before packaging that same directory. See the verification reports for observed results and exact limitations.

Newly authored tools and browser presentation code are GPL-3.0-or-later. ScummVM retains its upstream license and attribution. Original Sierra game data/artwork and third-party decompiled sources are not relicensed. See [LICENSE.md](LICENSE.md).
