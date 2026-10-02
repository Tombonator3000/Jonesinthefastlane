# Optional HD pack

The expanded manifest selects **38 photographic PNG files**, mapped to **1 picture,
291 original cels and 1 overlay**. This includes partial replacements and shared
atlas crops. Separately, `native/graphics/HdProps.ts` renders 161 technical cels and
the static town clock face. The original export contains 7 pictures and 752 cels;
the remaining 300 cels and 6 pictures continue to use original artwork.

See [the coverage table and rendering guide](../../../docs/HD_GRAPHICS.md) for the
resource groups and limits. New artwork covers player/Jones animation, all eleven
service portraits, Willy, winner Jones, intro illustrations, selected interiors,
products, furniture and event material. Original English labels, bitmap fonts,
interactive controls, paper ink, cursor, coordinates and timing remain authoritative.
Four small `293:1:*` heads remain original; their active runtime use is unconfirmed.
This is not an assertion that every screen or all 752 cels have been repainted.

## Runtime contract

`manifest.json` uses `schema: 1`. `pics` keys are decimal resource IDs; `cels` keys
are `view:loop:cel`. Entries retain the original logical dimensions and original
PNG hash, plus actual source-image dimensions and generated SHA-256. Cel anchors
remain controlled by the original runtime; provided `dx`/`dy` metadata must agree.

`crop` uses source-image coordinates and may contain fractional values. `regions`
whitelists local logical rectangles. `originalRegions` and `preserveSourceColors`
retain original labels and ink. `mirrorX` can reuse a crop for a documented mirrored
original pose. `generatedAlpha` is an explicit request for the safe, presentation-only
silhouette mask; opaque backgrounds continue to use their original ownership mask.
Alpha is measured from each actual PNG, not assumed from its file extension.

The game draws its original indexed frame first. HD never changes original resources,
hit targets, rules, saves or multiplayer authority. Each player selects the pack
locally. Missing assets or unavailable HD rendering fall back to original pixels.

## Production and validation

`expanded-provenance.json` is the current production record. It embeds the exact
prompts and available corrections, original image references/hashes, authoring
metadata, copied-file hashes, dimensions and alpha ranges for all 38 active PNGs.
`resource-inventory.json` records the original resource audit; its baseline coverage
is explicitly historical. Build-fragment paths and `$CODEX_HOME` generator archives
record the authoring session and are not required on another machine.

All generated art used the built-in ChatGPT image generator; an exact model version
was not exposed. PNGs were copied unchanged. Atlas cropping, mirroring and protected
regions are metadata; the technical props are separately authored canvas geometry.
The previous painted and first photorealistic files, prompts and validation records
remain for history. Only the current manifest selects runtime image files.

Run `pnpm verify:hd` from the repository root after installing `requirements.txt`.
The validator checks current files, crops, original dimensions/anchors, hashes,
alpha, regions, coverage and provenance. `--report build/native-hd-validation.json`
writes an optional reproducible report. Browser verification separately checks
actual compositing, input, original text and save/restore; file validation alone
does not establish artistic or gameplay parity.

Original Sierra artwork and character designs retain their separate attribution.
Generated derivatives do not grant rights to that underlying material and are not
automatically covered by the new runtime code's software license.
