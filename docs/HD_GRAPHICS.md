# Optional photorealistic HD artwork

Use **Graphics: Original / HD** in the display controls to switch immediately.
Alternatively open **Display**, choose **Graphics pack → HD**, and select the output resolution.
Each browser remembers its own graphics choices. Other players can use Original
or HD in the same game. **Town lighting (HD)** adds restrained sign glow and edge
shading to the town illustration. It does not illuminate dialogue or controls.
The existing Original, Smooth, Modern and CRT presentation styles remain available.

The expanded pack contains generated photographic artwork and separately authored
technical drawings. Its current manifest maps **38 PNG files to 1 of 7 pictures,
291 of 752 cels and one town-clock base overlay**. `HdProps.ts` supplies drawings
for **161 additional cels and a static clock face**. These counts include partial
replacements and reused/mirrored atlas crops; they are not counts of unique pictures
or proof of exhaustive visual parity. The other 300 cels remain original, as do the
six other picture resources. Original is still the default.

## Coverage

| Photographic layers | Original resource addresses | Mapped cels |
| --- | --- | ---: |
| Selection panel and Jones challenge figure | 500:0:0, 11:0:0 | 2 |
| Four player animation sets and Jones | 280–287, 290–297 loop 0; 274–277 | 80 |
| Eleven service portraits, six talking frames each | 351, 353–362 | 66 |
| Intro illustrations, with original text overlaid | 1–5 | 15 |
| Willy and winner Jones | 340:2–6, 609:2–3 | 42 |
| Rent/room backgrounds | 697–700, 702 | 5 |
| Groceries, appliances, clothing, food, discount items and furniture | Selected 700, 702, 703, 708–711 cels | 52 |
| Piggy bank and ambulance | 704:1, 608:1 | 9 |
| Banknotes, newspaper and diploma animation material | 340:0, 603:0, 607:0 | 19 |
| Town foreground patch using the clock-free town texture | 0:1:0 | 1 |

Picture 11 supplies the town. A cropped clock-free texture restores the area under
the technical clock, whose position and 61 elapsed-time states follow the original
draw operations. The technical group also covers the decorative calculator (1),
player markers (5), goal icons (4), podium (1), stars (5), confetti (24), university
book stacks (4), work time-clock (4) and door states (52). The calculator's money
field and dollar glyph retain their original pixels; its decorative keys do not
introduce new functionality.

Original flat menu panels, store headers, course names, paper ink, labels, fonts,
buttons and cursor are deliberately preserved. Four small heads at `293:1:*` remain
original; their active runtime use has not been established. Blank/transparent cels
and optional detail modes also occur in the source. The complete resource inventory
is recorded in `native/public/hd/resource-inventory.json`; it distinguishes the
earlier coverage audit from this expanded pack. The original intro is reachable
through normal startup, not classified as obsolete demo material.

## Rendering without changing gameplay

The native game continues to draw its original 320×200 indexed image, including
its unchanged palette, priority maps, input coordinates, original text measurement,
line breaks, menu controls, animations and save rules. No HD image changes a hit
target. The 8:5 game area is preserved in fullscreen at every output resolution.

`GraphicsState` additionally tracks which original drawing operation owns each
visible logical pixel. Each complete frame includes a bounded run-length encoded
ownership plane and only the drawing operations referenced by it. Operations
identify the original picture, view/loop/cel or positioned text glyph. This is a
complete current image description, not the previous diagnostic command log.

`HdPresentation` renders artwork in the original logical rectangles, at its actual
higher source resolution, through Three.js. An ownership texture clips each layer
to pixels belonging to that original operation. For explicitly marked transparent
figures and the clock sector, a presentation-only mask can also admit visible background pixels inside
that rectangle. It first restores a trustworthy underlying image or uniform color,
so the new alpha outline does not expose an old pixel-art silhouette. The helper
preserves text and other foreground owners and leaves the authoritative frame,
priority maps and ownership data unchanged. If the background cannot be inferred
safely, the original mask remains. The clock sector reconstructs its authored dial
and smooth dot markers beneath the original elapsed-time wedge. Asset-region masks retain
original headers, control labels and tokens where a repaint must not replace them.
Original palette fade intensity also applies to the HD artwork. Original cursor
pixels are drawn above it, using the same hotspot.

HD does not replace game text or interactive control artwork. Original glyphs, punctuation,
button labels, borders, highlights and pressed states come from the same original
raster in both modes. The town's original cream menu background and black frame
are protected separately from the surrounding buildings. Character-selection
headers, column dividers and player tokens likewise stay original. Photorealistic
images contain no game menus or interactive labels. The shared launch, online and
display panels keep the same English, original-inspired presentation in either mode.
Select **Style → Original pixels** for the unfiltered original palette; the existing
optional whole-frame display filters remain a separate presentation choice.

The previous painted and first photorealistic packs remain alongside the new sibling
files for history. Only files listed by the current manifest load as HD textures.
`native/public/hd/expanded-provenance.json` embeds exact generation prompts,
correction prompts where available, authoring records, original image references,
dimensions, SHA-256 hashes and measured alpha ranges for every active PNG.
Archive paths using `$CODEX_HOME` are local authoring references, not dependencies.
The first pack's `photoreal-*.json` and prompt documents are historical records.
Generated PNGs were copied unchanged; crops and mirroring are declarative. The
generator did not expose an exact model version. Technical drawings are identified
separately in source and are not presented as generated photographs.
The manifest is revalidated when HD first loads on a page, so a previously cached
painted-pack manifest does not hide a newly deployed pack. An already open game
keeps its loaded pack until the page is reloaded.

## Save, restore and multiplayer

Visible and offscreen ownership planes, saved window regions and referenced
operations follow the existing save and restore process. Old saves without this
optional data remain usable with original pixels until the game redraws the area.
Operation IDs can be reused by another session or save, so the renderer compares
the complete operation before reusing a layer.

The authoritative host sends these complete, compressed scene descriptions with
the original frame over the existing transport. Peers render HD locally; 4K images
are not streamed over the network. A fresh/reconnected client needs only its
current snapshot and the static asset pack hosted on Pages.

If the HD pack cannot load, original graphics remain playable. If WebGL is lost
or a shader cannot compile, the renderer falls back to the original canvas.
Neither failure replaces the game's input methods or rules.

## Extending the pack

Add a separate image under `native/public/hd/` and a manifest entry keyed by the
original picture ID or `view:loop:cel`. Preserve its original logical width,
height, anchor and pose. An optional `crop` selects a frame from a high-resolution
atlas. Optional `regions` whitelist local logical rectangles that may be replaced;
`originalRegions` and `preserveSourceColors` protect source labels and ink.
`generatedAlpha` explicitly opts a transparent figure into safe silhouette expansion.
The original export remains untouched. Its cel PNGs already include their mirroring.
Some HD entries deliberately share one generated crop with `mirrorX`/`mirrorOf`;
use that metadata only for the corresponding original mirrored pose.

Inspect generated art against the source, then in the real game at desktop and
portrait sizes. Match every animation frame and preserve all original English
names. Record prompts, source references, hashes and actual coverage. Generated
derivatives do not change ownership of the underlying Sierra material.

## Verification

Install `requirements.txt`, then run `pnpm verify:hd` to validate the active PNGs,
original image hashes and dimensions, preserved anchors, source dimensions, finite
crop/region bounds, alpha assumptions, coverage counts and embedded provenance.
Use `pnpm verify:hd --report build/native-hd-validation.json` for a reproducible
machine-readable result. No images or manifests are rewritten. Six corrupt-pack
regressions in `python3 -m unittest tests.test_native_hd -v` exercise rejection paths.
CI runs these checks before building.

`pnpm test:native` covers ownership, overlapping windows, animation restoration,
palette behavior, old saves and scene-history bounds. `pnpm test:browser:hd`
uses original mouse/keyboard input through menus, character selection, bank,
Save/Restore, reload, 2160p, portrait input and real WebGL context loss. It also
checks visible detail inside original pixel cells and verifies that choosing HD
does not change the original indexed frame. `pnpm test:browser:hd-props` checks
the calculator, clock and selected prop presentation through the game. Pure tests
cover the technical resource mapping and safe alpha-mask expansion. Peer and room-discovery journeys
exercise the same packaged build with actual WebRTC and MQTT services.

Actual results and screenshots belong in the delivery report. These checks are
not an exhaustive pixel-, animation- or gameplay-parity certification.
