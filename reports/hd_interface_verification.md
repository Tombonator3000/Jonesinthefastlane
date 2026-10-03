# HD interface and completion pass — 2026-10-03

This pass adds higher-resolution English buttons, panel titles and safe dynamic
text to the optional HD pack. It also adds notice/lottery materials, the factory
PCB, an open newspaper, four existing-player head crops and six technical intro
backdrops. Original remains the default and can be restored immediately.

The source game still determines text, glyph advances, controls, layout, prices,
turns and animation timing. No original resource or translated game rule changed.
WButton's exact shadow/foreground drawing and foreground-only highlight are
recognized using current raster and ownership evidence. Arbitrary mixed
backgrounds and inverted/erased/foreign-owned cells keep their original raster.

## Recovered work and scope

Production descriptions and code were recovered from the shared conversation.
Its remote PNG bytes were unavailable. The three new PNGs were regenerated with
the built-in image generator from the recovered descriptions and original
references; provenance records these new files, without claiming byte identity
with the remote images or an undisclosed model version.

The checked coverage inventory accounts for all 752 original cels: 311
photographic, 161 technical, 57 standalone interface and 223 deliberately
preserved. Two additional interface lettering overlays share photographic cels.
There are 59 interface entries in total, 41 active PNGs and seven covered
pictures. Counts include shared crops and partial replacements, not unique
paintings or exhaustive gameplay reachability.

Original cursor art, embedded notice text, course labels, title lettering and
some decorative pieces remain. Four small head mappings have compositor proof,
but their active gameplay use is unconfirmed. This is not a claim that every
resource is now fully remastered.

## Local verification

Checked on Chromium 151.0.7922.34 against the built static site:

| Check | Result |
| --- | --- |
| TypeScript type check and production build | Pass |
| Native engine, rendering, save and network unit tests | 145 passed |
| HD asset validator and all-resource coverage audit | Pass |
| Corrupt-pack validator regressions | 7 passed |
| Original archive verification | Pass |
| Original-input HD browser journey | 10 passed |
| Original-input work, purchase, clock, travel and deposit journey | 5 passed |
| Actual WebGL completion fixtures | 26 passed |
| Actual WebGL interface, clipping and occlusion fixtures | 62 passed |

The HD journey covers Original/HD round trips, unchanged indexed frames,
selection/goals, bank actions, Save/Restore, fullscreen, 2160p, portrait input,
persisted local preferences, punctuation, font outage, pack outage and actual
WebGL context loss. The work journey checks real animation poses, wages, time,
cash glyphs and the current Deposit label after an actual transaction. An
additional isolated original-input bank diagnosis confirmed $200 → $100, a
sharp current Deposit foreground and byte-identical original label pixels.

Completion/interface fixtures use the actual Three.js renderer with isolated
original resources; they do not inject states into the game or demonstrate that
every rare event can be reached. Both suites are included in CI alongside the
existing gameplay, multiplayer and original-reference checks.

Reproducible commands are in `package.json` and `.github/workflows/browser.yml`.
Local evidence is under `build/hd-interface-review/verified-hd/`,
`build/hd-interface-review/verified-props/`, `build/hd-completion-evidence/` and
`build/hd-interface-evidence/`. CI uploads the corresponding reports and images
as `native-evidence` before Pages deployment. Local checks alone do not establish
that a release is live; the deployment run and served assets are checked separately.

The final typography correction preserves exact one-column source stems and dots
instead of compressing a wide replacement glyph into them. Two regressions and
the final 145-test native run passed; the actual Wealth goal panel was visually
checked again. The final original-input reruns use `release-hd/` and
`release-props/` under `build/hd-interface-review/`.
