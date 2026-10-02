# Native reference run and original artwork export

Checked on 2 October 2026. This is a limited reference run of the original resources in native **ScummVM 2026.1.0**, separate from the browser runtime. It is not a DOS-interpreter equivalence test or a full playthrough.

## Observed native run

The original game ran on an isolated Xvfb display with separate configuration and save directories. Temporary display/input tools were unpacked under `/tmp/jones-xvfb`; no system package was installed, and the user's desktop and saves were untouched. Audio used the SDL dummy driver and was not listened to.

- Detection identified `sci:jones`, DOS/English.
- Copyright, title and main-menu screens appeared.
- Actual mouse/keyboard input selected Play Game, one player, the first character, default goals and No to challenging Jones.
- Week 1 started. Clicking the bank opened its original dialog.
- A $100 deposit changed cash from $200 to $100. A subsequent Return made another deposit, leaving $0 when saving.
- F5 opened the original confirmation. Yes wrote `jones.000`, and the original save-complete message appeared.
- A $100 withdrawal displayed its notification and increased cash from $0 to $100.
- A fresh native process using `--save-slot=0` restored Week 1 at the bank with $0. This verifies the native startup restore path. F7 was attempted but not successfully verified in this earlier native run.
- All 22 original file hashes remained unchanged.

Measurements and screenshot hashes are in `reports/original_runtime.json`. The `reports/original_runtime_*.png` files are actual captures from that run.

The native run warned that `--gfx-mode=surface` was unrecognized and used the default. Restore also logged `Attempt to free Hunk from address 0013:045b: Invalid segment type 9!`. The expected bank state appeared; longer native stability after restore was not checked. The full log is `reports/original_runtime_restore.log`.

Native job, shop, education, a full week, audio and resource-patch execution were not tested in this run. Subsequent browser checks are documented separately in [browser_verification.md](../reports/browser_verification.md); do not confuse the two sets of evidence.

## Original artwork export

`python3 tools/export_browser_assets.py` reads `original/` and exports all seven PIC resources and 36 selected VIEW images to `web/assets/`. No original file is modified. The manifest records resource numbers, dimensions, PNG hashes and hashes of the decompressed resource data.

The city board is **PIC 11**, `web/assets/scenes/pic_0011.png`, at its original 320 × 200 resolution. It combines 15 embedded bitmap cels with SCI vector commands. Buildings, lettering and the empty central dialog area come from the original resource. Manifest coordinates use this original rectangle, with the origin at the top left. Display upscaling does not make the source artwork newly drawn HD graphics.

The exporter implements the SCI1 commands actually used by these seven pictures and rejects unknown commands and malformed/truncated data. Priority and control planes are used internally for fills and occlusion; they are not exported as collision maps. This is an artwork exporter, not a general SCI engine.

Format references are ScummVM's [picture.cpp](https://github.com/scummvm/scummvm/blob/master/engines/sci/graphics/picture.cpp) and [screen.cpp](https://github.com/scummvm/scummvm/blob/master/engines/sci/graphics/screen.cpp). Those upstream links move with development; the local original-resource hashes and reproduction tests are the repeatable checks. The new exporter is GPL-3.0-or-later; original artwork retains its original rights.

`python3 -m unittest discover -s tests -p test_browser_assets.py -v` verifies exact reproduction, unchanged original files, invalid-command rejection, closed fills and priority occlusion of bitmap cels.
