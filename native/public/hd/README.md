# Optional photorealistic HD pack

The current manifest selects photorealistic derivative artwork generated with the built-in ChatGPT image generator from inspected game references and the previous painted pack. It is a separate presentation pack, not a replacement for the preserved original resources or an assertion of exact visual reconstruction.

## Included artwork

- Town background: picture 11, including the corrected original place name **HI-TECH U**.
- All four player-selection figures: view 500, loop 0, cel 0, in their original selection panel.
- Eight shop/service portraits, each with six talking frames: rent office 351, market 353, bank 354, university 357, appliance store 358, clothing store 359, burger restaurant 360 and discount store 361.

The pack has 10 PNG files mapped to 1 of 7 pictures and 49 of 752 original cels. Other artwork continues to use the original assets. This does not cover every portrait, animation, room, icon or title screen. All game text and control cels remain original in both graphics modes. The HD renderer does not substitute fonts or repaint buttons.

## Runtime contract

`manifest.json` uses `schema: 1`. `pics` keys are decimal resource IDs; `cels` keys are `view:loop:cel`. Every entry has a local `src`, original logical `width` and `height`, actual `sourceWidth` and `sourceHeight`, and original/generated SHA-256 values. Portrait entries preserve original `dx` and `dy` anchors as metadata. The game still supplies the authoritative placement.

`crop` identifies a portrait frame inside a source atlas in source-image pixels. Some coordinates are fractional because generated image dimensions are not exact multiples of the atlas columns or rows; consumers must retain their precision. `regions` is an optional whitelist in the original local coordinate system. The selection-panel whitelist preserves the original heading, frame, column dividers and bottom tokens. Runtime ownership masks retain later dialogs and controls. A source-derived town UI mask also preserves the original central menu background and border while allowing architectural overlaps.

All included source images are fully opaque, including the original talking-portrait blue backgrounds. The generated files preserve that property. No transparent original sprite has been flattened to add coverage. Missing assets use the original renderer and its existing transparency.

These repaints add detail; they are not exact copies of the original pixel silhouettes or mouth animation. The prior painted pack was originally derived from references for frames 0, 1, 2, 3 and 5, with a generated intermediate at frame 4. This photorealistic revision uses each complete six-cell painted atlas as its expression and layout reference. The manifest preserves the complete six-frame addressing used by the original game. Original game rules, timing, hit regions and control labels are not encoded in generated artwork.

## Provenance and review

`photoreal-prompts.md` records the current exact prompts and references. `photoreal-provenance.json` maps the selected sibling files to archived generator outputs. Previous painted files and their `prompts.md`, `provenance.json` and `validation.json` records are preserved for history; the runtime manifest selects only the current pack. The generator did not report an exact model version. No external image-generation service, synthetic SVG substitute, or scripted bitmap repaint was used. PNGs were copied unchanged; atlas cropping is declarative metadata.

Each selected image was visually inspected. `photoreal-validation.json` records current file, dimension, crop, region, opacity and hash checks. Application browser tests separately verify how the pack is composited during original gameplay, dialogs, save/restore and multiplayer.

The original Sierra characters, artwork and designs remain separately attributed. Generated derivative artwork does not grant rights to those originals and is not automatically covered by the new runtime code's software license. Keep this pack and original game resources separate when distributing or relicensing project code.
