# Jones in the Fast Lane — original game in the browser

[**Play in your browser**](https://tombonator3000.github.io/Jonesinthefastlane/)

The browser version runs the **unchanged original Jones SCI scripts** in a pinned, source-built ScummVM WebAssembly engine. The original English menus, 1–4 player setup, character selection, goals, Jones opponent, shops, jobs, time and economy remain in charge. There is no replacement gameplay model or side-panel interface.

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

The Browser game workflow runs the data tests, builds the static package and exercises real browser input before publishing `main` to GitHub Pages. See the verification report for observed results and exact limitations; an unchanged script is not a claim that every possible game path has been play-tested.

Newly authored tools and browser presentation code are GPL-3.0-or-later. ScummVM retains its upstream license and attribution. Original Sierra game data/artwork and third-party decompiled sources are not relicensed. See [LICENSE.md](LICENSE.md).
