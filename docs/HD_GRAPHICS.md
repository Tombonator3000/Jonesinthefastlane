# Optional photorealistic HD artwork

Use **HD: Off / HD: On** in the always-visible row above the game to switch
immediately. Off selects Original; On selects the HD pack. The controls have
44-pixel touch targets and reserve their own space in fullscreen and both mobile
orientations, so they cannot cover original game controls.
Alternatively open **Display**, choose **Graphics pack → HD**, and select the output resolution.
Each browser remembers its own graphics choices. Other players can use Original
or HD in the same game. **Town lighting (HD)** adds restrained sign glow and edge
shading to the town illustration. It does not illuminate dialogue or controls.
The existing Original, Smooth, Modern and CRT presentation styles remain available.

The pack combines photographic artwork with code-authored props and interface
lettering. **41 PNG files map to the town, 311 of 752 cels and one clock-base
overlay**. `HdProps.ts` draws 161 cels and a static clock face; `HdUi.ts` redraws
57 additional cels plus lettering overlays for the photographic selection and
factory panels. Six intro backdrops use `HdIntro.ts`. The other **223 cels retain original artwork**;
these include blank resources, speech-bubble pieces, course labels, decorative
panel elements and embedded text. Counts include partial replacements and shared
crops; they are not numbers of unique illustrations or exhaustive route coverage.
Original remains the default.

The October 3 interface pass implements the user's request for sharper buttons,
text and panels. It supersedes the earlier policy of keeping all HD-mode UI pixels
identical. English strings, source glyph advances, line breaks, positions, click
rectangles, pressed/disabled behavior and authoritative game pixels remain original.

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
| Turn notice materials, lottery paper, factory PCB and open newspaper | 310–322, 340:1, 705:0, 603:1:0 | 16 |
| Four small head crops from the existing player identity | 293:1 | 4 |

Picture 11 supplies the town. A cropped clock-free texture restores the area under
the technical clock, whose position and 61 elapsed-time states follow the original
draw operations. The technical group also covers the decorative calculator (1),
player markers (5), goal icons (4), podium (1), stars (5), confetti (24), university
book stacks (4), work time-clock (4) and door states (52). The calculator's money
field now uses sharp glyphs wherever its recorded background is safe. Its
decorative keys do not introduce new functionality.

The 59 interface entries cover all fourteen action-button cels, eight main-menu
and difficulty/Jones-choice buttons, four player-number tiles, eight goal/selection/
statistics fields, seven branded store panels, and seventeen goal, investment,
employment, rent-office and pawnshop fields, plus the factory title. The selection header is an
overlay above its photographic characters. English labels and palettes are read
from inspected original resource addresses; unrelated decoration stays original.

`HdText.ts` fits bundled Liberation outline glyphs into each original glyph's ink
bounds, including punctuation and descenders. It does not reflow, translate or
replace strings. One-column stems and dots use their exact source shapes so
narrow letters remain legible. Only cells with a proven flat backdrop are redrawn; the exact
WButton shadow pair has a narrowly validated reconstruction. Complex backgrounds,
unsupported glyphs and pressed/inverted pixels retain their original raster.
Fonts load locally per browser; a font failure leaves original controls readable
while photographic artwork can still load. The original cursor, opening-title
lettering, text embedded in notice illustrations, course-name cels and some small
ornaments remain original. Four small head cels are mapped, but their active
runtime use is still unconfirmed.

The three completion textures were regenerated here from the original references
and production descriptions recovered from the shared conversation; remote PNG
bytes were unavailable. Provenance records the new files' actual hashes and sizes.
See `coverage-audit.json` for every resource decision and `expanded-provenance.json`
for the generator prompts, references and scoped original-ink masks.

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

HD interface textures remain under the same per-pixel owner mask as original
artwork. This protects foregrounds, clip rectangles, original pressed inversions
and later drawing operations. Source glyph-cell positions are recorded in the
frame, so peers and restored saves render the same labels without running new
layout or game logic. All dynamic text textures are discarded when their layers
leave the snapshot; long games do not cache every historical cash value or message.
The town's original cream menu background and frame remain in place. Decorative
lighting stays restricted to town artwork, preserving readable interface colors.
The shared online/display panels keep their existing English game-style design.

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
`originalRegions`, `preserveSourceColors` and optional `preserveSourceColorRegions` protect source labels and ink.
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
machine-readable result. No images or manifests are rewritten. Seven corrupt-pack
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

### Interface and completion checks

`pnpm audit:hd` verifies a decision for all 752 cels and seven pictures.
`pnpm test:browser:hd-completion` exercises the actual WebGL compositor for the
new notice/factory/newspaper/head and intro resources, separately from gameplay.
`pnpm test:browser:hd-interface` reviews static UI cells and ownership clipping.
The normal-input HD journeys verify original startup, selection, bank, work,
purchase, Save/Restore, fullscreen, aspect ratios, local toggling and fallbacks.
These fixtures do not claim that every rare event was reached through gameplay.
