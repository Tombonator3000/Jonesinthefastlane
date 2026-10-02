# Native port verification

Date: 2026-10-02. Target: original DOS/English Jones 1.000.060, translated
TypeScript game logic, Three.js presentation and authoritative WebSocket play.
This is separate from the original-engine report in `browser_verification.md`.

## Observed coverage

- All 69 source modules translate reproducibly: 72 classes, 526 instances,
  738 methods and 98 procedures. Every source object's superclass was compared
  with original binary metadata. Compiler execution fixtures check evaluation
  order, short-circuiting, references, inheritance, loop/return semantics and
  original accumulator behavior.
- Original rule tests cover starting money/goals/rent/clothes, money carry and
  borrow, liquid assets/debts, job prerequisites/chance/refusal, active and
  completed education, monthly rent/loan/work history, economic-index bounds,
  action time, victory prerequisites and Jones route planning.
- Original-input journeys cover all four player counts, two F9 restarts and
  two complete human/Jones rounds reaching week 3. Repeated shop visits reload
  the original script locals instead of retaining stale AI state.
- Real Chromium input covers original startup, characters/goals, a bank
  deposit/withdrawal, original F5/F7 Save/Restore, restoring after closing the
  page, job application, work, a meal, enrollment/course units, a week
  transition, fullscreen and input scaling at wide and portrait sizes.
  Original F4 statistics draws its text rows; original Quit returns to Play.
  Restart clears old sound instances and held input as well as menu state.
- Real WebSocket tests cover invitations/private seats, inactive-input rejection,
  identical frames/state, each player's original character/goals selection,
  an entire first human turn, control transfer to the second human, and
  reconnect to the same seat. Queued old-seat input is discarded at transfer.
- Two isolated Chromium clients cover the production online UI, shared original
  menus, inactive input, actual reload/Resume, and control after reconnect.
- Online setup rejects a count that differs from the room size at event
  consumption, including prequeued input; original navigation and F9 prompts
  still work. A focused authorization fixture checks that the original Jones
  victory presentation can receive its required human acknowledgement.
- Every original indexed cel, font/cursor bit, picture plane and text byte is
  compared by resource tests. Graphics tests exercise transparent windows,
  actor/background restoration, original palettes, menus and editable controls.
  A real bank capture matched all 20,313 sampled logical pixels in the bank
  rectangle of the original-engine reference. This is a specific comparison,
  not a claim about every frame.
- All 34 original sound resources decode to nonzero 44.1 kHz stereo PCM.
  Real Web Audio playback, pause/resume, mute and disposal were checked.
  Native sound tests cover original durations, intro loops, fades and saved
  playback state. See `native/audio/README.md` for mixing/synthesis limits.
- All 22 original files retain their recorded SHA-256 checksums. Unchanged
  low-level scripts still assemble byte-identically to all 69 originals.

## Published delivery

The native edition is live at
[the public game address](https://tombonator3000.github.io/Jonesinthefastlane/native/).
[Deployment run 36985121327](https://github.com/Tombonator3000/Jonesinthefastlane/actions/runs/36985121327)
passed its native, original-reference and Pages deployment jobs for commit
`23c065f11c55950515f032b3ada393abc1e374d7` on 2026-10-02.

A real Chromium check of the public address completed original one-player setup
and entered the bank in week 1 with $200. Browser fullscreen was active. There
were no page errors, failed requests, HTTP resource errors, or ScummVM/WASM
requests during that journey. Six public core/startup files matched the recorded
production SHA-256 values; this was not a hash audit of every public asset.
[Delivery evidence](native_delivery.json) records the result and
[public bank capture](native-evidence/public-bank.png). Public online multiplayer
still needs a separately hosted game server.

## Reproduce

```sh
pnpm install --frozen-lockfile
python3 -m pip install -r requirements.txt
python3 tools/fetch_reference_sources.py
python3 tools/jones.py verify
python3 -m unittest discover -s tests -v
pnpm typecheck:native
pnpm test:native
pnpm build:native
pnpm exec playwright install chromium
pnpm serve:native
```

In another terminal:

```sh
JONES_NATIVE_URL=http://127.0.0.1:8787/ pnpm test:browser:native
JONES_NATIVE_URL=http://127.0.0.1:8787/ pnpm test:browser:online
```

The two browser tests write actual results and captures into
`build/native-evidence/` and `build/native-online-evidence/`; CI retains them
as the `native-evidence` artifact. `reports/native_verification.json` records
this delivery's completed checks and production build hashes. Browser tests
reject ScummVM/WASM requests; the local game journey also rejects failed
resource requests. The CI workflow publishes the tested native directory
alongside the preserved original-engine edition.

## Limits

The decompiled source is not certified equivalent along every binary path.
The generated manifest therefore retains `parityVerified: false`; two unused
source-only procedures with unresolved `super` context fail explicitly if
called. Native random selection is seeded/deterministic, but reproducing an
original DOS session's exact random sequence is not claimed. Rare events,
all late-game combinations and every visual/audio timing have not been
exhaustively compared. Optional shaders scale/filter original detail; they
are not new high-resolution artwork.

Native saves are separate from ScummVM/DOS saves. Online rooms and their saves
remain in the server process and are lost if that process restarts; ordinary
local native saves persist in browser local storage. The public static site
is not a public multiplayer host. Online deployment needs the provided Node
server on a reachable WebSocket-capable host; no paid or third-party hosting
was provisioned by these tests.
