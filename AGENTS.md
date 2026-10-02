# Jones project — working rules

## Required experience

The user requires the original Jones in the Fast Lane design and behavior, **1:1, fullscreen and entirely in English**. Keep the original menus, 1–4 player selection, characters, goal setting, Jones opponent, shops, job applications, time, economy, Save/Restore and interaction methods. Do not substitute dashboards, action sidebars, a new name-entry form, simplified rules or translated game text.

The native edition in `native/` executes translated TypeScript game functions with Three.js rendering and a shared authoritative session in a peer host browser or optional Node/WebSocket server for online play. It must not depend on ScummVM or a bytecode interpreter. The preserved `web/` edition executes original SCI scripts in ScummVM WebAssembly and remains a reference. New graphics/shaders/resolution options may alter presentation only. Original pixels are the default. Do not claim exhaustive parity from a short play test.

## Preserve existing material

- Do not edit or delete files in `original/`. Verify `reports/original_files.sha256`.
- Do not overwrite other branches, working files, screenshots, modified resources or saves. Never force-push.
- Edited assets, text and scripts belong in separate work directories. SCI resource patches go in `mods/`; builds go in a separate generated directory.
- Keep original Sierra material, third-party decompiled sources, ScummVM and new tools clearly attributed and separately licensed.
- The rejected custom JavaScript gameplay prototype is not part of the release. Do not restore its replacement rules/UI.

## Verification

```sh
python3 -m pip install -r requirements.txt
python3 tools/jones.py verify
python3 -m unittest discover -s tests -v
python3 tools/build_browser.py
pnpm install --frozen-lockfile
pnpm exec playwright install chromium
pnpm test:browser
```

All 69 unchanged scripts must assemble to byte-identical original scripts. Separate static data tests from real engine/browser tests. Preserve failures and their evidence rather than weakening expectations.

For browser changes exercise original startup, menu, player setup, a week, job, bank, shop, education and original save/restore as relevant. Verify fullscreen and coordinate mapping at different aspect ratios. Rendering must fall back to the original canvas if an optional effect fails. Do not promote a package without checking that the packaged build is the one tested.

`tools/fetch_reference_sources.py` downloads a pinned, separately attributed third-party reference into ignored `reference/upstream/`. It is navigation/research material, not automatically validated equivalent source.

Native verification adds `pnpm typecheck:native`, `pnpm test:native`, `pnpm build:native`, and `pnpm test:browser:native` against a running production server. Keep original-input journeys free of test-only game-state mutation. `pnpm translate:native` is an explicit reimport and overwrites generated TypeScript; normal builds must preserve native source edits. Keep compiler ambiguities and observed parity limitations explicit. Do not replace original rules to make a native test pass.

Online changes also require `pnpm test:browser:online` and `pnpm test:browser:peer`. The peer journey must use the actual static production build, PeerJS signaling and real WebRTC. Distinguish local signaling, public signaling and different physical networks in verification reports.
