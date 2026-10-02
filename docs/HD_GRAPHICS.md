# Optional photorealistic HD artwork

Use **Graphics: Original / HD** in the display controls to switch immediately.
Alternatively open **Display**, choose **Graphics pack → HD**, and select the output resolution.
Each browser remembers its own graphics choices. Other players can use Original
or HD in the same game. **Town lighting (HD)** adds restrained sign glow and edge
shading to the town illustration. It does not illuminate dialogue or controls.
The existing Original, Smooth, Modern and CRT presentation styles remain available.

The photorealistic pack contains newly generated detailed artwork, rather than merely
enlarged 320×200 pixels. Its exact coverage is recorded in
`native/public/hd/manifest.json`: a town board, the four-character selection
figures and eight animated shop portraits. It is an initial pack, not a
complete repaint of every original image. Missing artwork, unsafe text backgrounds
and unsupported screens retain original graphics. Original is still the default.

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
to pixels still belonging to that original operation. Subsequent dialogs and
actors therefore cover the same content as before. Asset-region masks retain
original headers, control labels and tokens where a repaint must not replace them.
Original palette fade intensity also applies to the HD artwork. Original cursor
pixels are drawn above it, using the same hotspot.

HD does not replace game text or control artwork. Original glyphs, punctuation,
button labels, borders, highlights and pressed states come from the same original
raster in both modes. The town's original cream menu background and black frame
are protected separately from the surrounding buildings. Character-selection
headers, column dividers and player tokens likewise stay original. Photorealistic
images contain no game menus or interactive labels. The shared launch, online and
display panels keep the same English, original-inspired presentation in either mode.
Select **Style → Original pixels** for the unfiltered original palette; the existing
optional whole-frame display filters remain a separate presentation choice.

The previous painted images and their production records remain alongside the
new sibling files for provenance. Only the photorealistic files listed by the
current manifest are loaded by HD. `photoreal-prompts.md`,
`photoreal-provenance.json` and `photoreal-validation.json` record this revision.
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
atlas. Optional `regions` whitelist local logical rectangles that may be replaced.
The original export remains untouched. Existing exported cel PNGs already include
their mirroring; do not mirror a replacement a second time.

Inspect generated art against the source, then in the real game at desktop and
portrait sizes. Match every animation frame and preserve all original English
names. Record prompts, source references, hashes and actual coverage. Generated
derivatives do not change ownership of the underlying Sierra material.

## Verification

`pnpm test:native` covers ownership, overlapping windows, animation restoration,
palette behavior, old saves and scene-history bounds. `pnpm test:browser:hd`
uses original mouse/keyboard input through menus, character selection, bank,
Save/Restore, reload, 2160p, portrait input and real WebGL context loss. It also
checks visible detail inside original pixel cells and verifies that choosing HD
does not change the original indexed frame. Peer and room-discovery journeys
exercise the same packaged build with actual WebRTC and MQTT services.

Actual results and screenshots belong in the delivery report. These checks are
not an exhaustive pixel-, animation- or gameplay-parity certification.
