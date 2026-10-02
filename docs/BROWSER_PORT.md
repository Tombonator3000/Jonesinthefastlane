# Original-game browser runtime

The current requirement is exact preservation of the original English game design in fullscreen: original menus, player setup, interactions, rules and progression. The initial replacement JavaScript gameplay experiment was rejected and is not part of this deliverable. There are no custom wages, study rules, banking rules, goals or Norwegian in-game controls.

## Architecture

The browser runs the original `resource.map`, `resource.001`, `resource.002` and `version` files through ScummVM's SCI interpreter, compiled to WebAssembly. The build checks these files against the original SHA-256 manifest; the browser checks their sizes and, on secure contexts such as localhost and HTTPS, hashes them before loading.

- `web/app.js`: loading, fullscreen and display settings only. It implements no game logic.
- `web/display.js`: optional visual postprocessing over the untouched runtime canvas. The original canvas receives all input.
- `web/vendor/`: pinned official ScummVM source build, licensing and runtime data. The accompanying manifest records the source revision, toolchain and integration patch.
- `tools/build_browser.py`: makes a static distribution without any dependency on the earlier prototype.
- `original/`, `source_asm/`, `mods/`: the preserved original data and existing editing pipeline.

ScummVM is an interpreter replacement, not a newly rewritten high-level Jones engine. It reads the original game rules and screens. This preserves substantially more of the original behavior than a partial game reimplementation, while leaving the existing script/resource editing workbench usable. Full high-level recompilation and HD replacement artwork are separate future work.

## Display and input

The visible game fills the available viewport while retaining the original 320×200 proportions. **Play in fullscreen** requests fullscreen immediately from the user's click, as required by browsers. If a browser/embedding disallows fullscreen, the game still occupies its entire tab. Esc exits browser fullscreen. There are no permanent sidebars or replacement in-game buttons.

Original pixels are the default. Smooth scaling shows the original canvas with browser filtering. Modern and CRT modes optionally composite the live frame through WebGL. Effects support screen-matched output or 720/1080/1440/2160 height, within GPU limits. This is display resolution, not new artwork detail. Context loss, a blank/unreadable source frame or incompatible capture falls back to the actual game canvas. The compositor adds no gameplay events and does not change timing logic.

The pointer maps directly to the same rectangle that is displayed. F1–F10 retain original game delivery while browser default actions such as F5 reload are suppressed during play. ScummVM handles the original keyboard and mouse. Narrow-screen layout is tested separately from physical touch-device input; a new mobile control scheme is not part of this release.

The small upper-right display buttons appear on pointer hover or keyboard focus. Their dialog changes only presentation. They do not substitute for any original menu.

## Saving

Use the original game's Save/Restore controls. ScummVM writes its actual game-save files under `/home/web_user`, and its Emscripten backend mounts this HOME directory using IDBFS with `autoPersist:true`. The backend restores storage before game startup. The wrapper does not double-mount it and does not translate saves into a new game-state model.

Saves are local to this site's browser origin/profile. Browser data clearing, private sessions or unavailable browser storage may prevent persistence. Localhost and GitHub Pages are separate origins. Original DOS saves and ScummVM saves are not claimed interchangeable. The discarded prototype's JSON saves are not compatible.

## Build and source provenance

Run `python3 tools/build_browser.py`, then serve `build/browser/` using `python3 -m http.server 8765 --bind 127.0.0.1 --directory build/browser`. The runtime has no hosted CDN dependency: JavaScript, WebAssembly, engine data and game resources are served together. `build-manifest.json` fingerprints all packaged files. The ZIP is checked after creation.

The official ScummVM engine is statically built with SCI. Its browser prelude preserves the shell's explicit launch arguments and avoids upstream demo hash-navigation/MIDI-permission behavior. Small platform and SDL adapter patches let the page own fullscreen and use the canvas's actual displayed rectangle without reserving desktop window decorations. `Module.hostManagedFullscreen=true` enables this contract. Exact source/toolchain/patch details accompany the runtime, including the corresponding SDL source patch.

One narrowly scoped SCI compatibility fix makes Jones's original Restore command work: ScummVM already maps this game's single save to slot 0, but its save-list function incorrectly hid that slot as an autosave. The patch includes slot 0 for Jones while retaining the other filtering. It changes neither the original game files nor its Save/Restore interface. The complete engine change is included in the source patch.

The shell checks WebGL and browser storage before loading the engine. Unsupported graphics or denied storage produces a visible English explanation. Loss of the original engine's graphics context produces a persistent reload/Restore Game notice; loss of only the optional effect context falls back to the continuing original canvas.

## Verification and future changes

See `reports/browser_verification.md` for browser evidence and `docs/ORIGINAL_RUNTIME.md` for the earlier independent native ScummVM reference. Original checksums and 69 byte-identical script round trips remain required. Runtime startup, complete player setup, bank actions, job/shift, save/restore, fullscreen and a week boundary must be checked through actual original controls.

Any future work must preserve original gameplay unless the user explicitly asks for a rule change. Higher-resolution art, improved shaders or source reconstruction must not introduce a new interface or simplify menus/economy. Keep source assets and shaders separate from game rules. Do not call limited runtime testing an exhaustive proof of 1:1 behavior across every random event and multiplayer path.
