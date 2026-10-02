#!/usr/bin/env python3
"""Package the original Jones scripts with the pinned browser SCI engine.
SPDX-License-Identifier: GPL-3.0-or-later
"""
from pathlib import Path
import hashlib
import json
import shutil
import zipfile
from fetch_scummvm_web import verify as verify_runtime

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'build' / 'browser'
GAME_FILES = ('resource.map', 'resource.001', 'resource.002', 'version')
WEB_FILES = ('index.html', 'style.css', 'app.js', 'display.js', 'scummvm.ini')


def build():
    vendor = ROOT / 'web' / 'vendor'
    if not (vendor / 'scummvm.js').is_file() or not (vendor / 'scummvm.wasm').is_file():
        raise SystemExit('Pinned ScummVM WebAssembly runtime missing. See docs/BROWSER_PORT.md.')
    verify_runtime(vendor)
    if OUTPUT.is_symlink() or (ROOT / 'build').is_symlink():
        raise ValueError('Refusing symlink output directory')
    for name in WEB_FILES:
        if not (ROOT / 'web' / name).is_file():
            raise ValueError(f'Missing source file: {name}')
    expected = {}
    for line in (ROOT / 'reports' / 'original_files.sha256').read_text().splitlines():
        digest, name = line.split(maxsplit=1)
        expected[Path(name.strip()).name] = digest
    game_manifest = {'source': 'Unmodified Jones in the Fast Lane DOS 1.000.060', 'files': []}
    for name in GAME_FILES:
        data = (ROOT / 'original' / name).read_bytes()
        digest = hashlib.sha256(data).hexdigest()
        if expected.get(name) != digest:
            raise ValueError(f'Original checksum mismatch: {name}')
        game_manifest['files'].append({'name': name, 'bytes': len(data), 'sha256': digest})
    # Only this fixed generated directory is replaced. Editable sources are preserved.
    if OUTPUT.exists():
        shutil.rmtree(OUTPUT)
    OUTPUT.mkdir(parents=True)
    for name in WEB_FILES:
        shutil.copy2(ROOT / 'web' / name, OUTPUT / name)
    shutil.copytree(vendor, OUTPUT / 'vendor')
    (OUTPUT / 'game').mkdir()
    for name in GAME_FILES:
        shutil.copy2(ROOT / 'original' / name, OUTPUT / 'game' / name)
    (OUTPUT / 'game-files.json').write_text(json.dumps(game_manifest, indent=2) + '\n')
    for name in ('LICENSE.tools.txt', 'LICENSE.md'):
        shutil.copy2(ROOT / name, OUTPUT / name)
    (OUTPUT / '.nojekyll').touch()
    manifest = {}
    for file in sorted(OUTPUT.rglob('*')):
        if file.is_file():
            manifest[file.relative_to(OUTPUT).as_posix()] = hashlib.sha256(file.read_bytes()).hexdigest()
    (OUTPUT / 'build-manifest.json').write_text(json.dumps({'version': '0.2.0', 'sha256': manifest}, indent=2) + '\n')
    archive = ROOT / 'build' / 'jones-browser-0.2.0.zip'
    with zipfile.ZipFile(archive, 'w', zipfile.ZIP_DEFLATED) as package:
        for file in sorted(OUTPUT.rglob('*')):
            if file.is_file():
                package.write(file, 'jones-browser/' + file.relative_to(OUTPUT).as_posix())
    with zipfile.ZipFile(archive) as package:
        if package.testzip():
            raise ValueError('Archive integrity check failed')
    print(f'Built {len(manifest)} static files: {OUTPUT}')
    print(f'Package: {archive}')
    print(f'SHA-256: {hashlib.sha256(archive.read_bytes()).hexdigest()}')

if __name__ == '__main__':
    build()
