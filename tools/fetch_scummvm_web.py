#!/usr/bin/env python3
"""Build the pinned official ScummVM SCI browser runtime, or verify its files.

SPDX-License-Identifier: GPL-3.0-or-later
No system package installation. Requires Python 3.12+, make and pkg-config.
Emscripten and source downloads are stored in a separate user cache.
"""
from __future__ import annotations

import argparse
import difflib
import hashlib
import json
import os
from pathlib import Path
import shutil
import subprocess
import tarfile
import urllib.request
import zipfile

ROOT = Path(__file__).resolve().parents[1]
VERSION = '2026.3.0'
COMMIT = 'fed42f2068dcafc6aafa1c28c77e4c88def74b66'
EMSDK_VERSION = '4.0.10'
SOURCE_URL = f'https://downloads.scummvm.org/frs/scummvm/{VERSION}/scummvm-{VERSION}.tar.xz'
SOURCE_SHA256 = 'b863a81e1598df8bc4aa0c33e3d9b1c8bbede1879d94d91568a4f200057677e7'
SDK_URL = f'https://github.com/emscripten-core/emsdk/archive/refs/tags/{EMSDK_VERSION}.tar.gz'
SDK_SHA256 = '2497b55ddbba9bf9be2d18cfca3e973d40a0cfaa8d18f6caacb882a65b2faf1c'
CONFIGURE = [
    '--host=wasm32-unknown-emscripten', '--build=wasm32-unknown-emscripten',
    '--disable-all-engines', '--enable-engine=sci', '--disable-detection-full',
    '--enable-release', '--opengl-mode=gles2', '--disable-cloud', '--enable-png', '--enable-zlib',
]
EXPORTS_OLD = '-s EXPORTED_RUNTIME_METHODS=[ccall,lengthBytesUTF8,setValue,writeArrayToMemory]'
EXPORTS_NEW = '-s EXPORTED_RUNTIME_METHODS=[ccall,lengthBytesUTF8,setValue,writeArrayToMemory,FS,ENV,callMain,addRunDependency,removeRunDependency]'
PRE_JS = ('/* Jones browser shell preserves Module arguments; no external MIDI devices requested. */\n'
          'var midiOutputMap;\n')
SDL_VERSION = '3.2.4'
SDL_URL = f'https://github.com/libsdl-org/SDL/archive/release-{SDL_VERSION}.zip'
SDL_SHA512 = 'c26a8afeec481e3ae3b435eec405d9f99d78752ebf5118963cd56728ceff23772769f5291df581329488da7489034e835301b08d61a42c811764e24b3542a4c2'


def adapt_source(name: str, before: str) -> str:
    if name == 'configure':
        if before.count(EXPORTS_OLD) != 1:
            raise ValueError('Unexpected upstream runtime export list')
        return before.replace(EXPORTS_OLD, EXPORTS_NEW)
    if name.endswith('custom_shell-pre.js'):
        return PRE_JS
    if name == 'engines/sci/engine/file.cpp':
        marker = '\t\t\tif (id == kNewGameId || id == kAutoSaveId) {'
        if before.count(marker) != 1:
            raise ValueError('Unexpected upstream SCI save-list filtering')
        return before.replace(marker,
            '\t\t\t// Jones maps its sole ordinary save to slot 0 in the save/restore kernels.\n'
            '\t\t\tif (id == kNewGameId || (id == kAutoSaveId && g_sci->getGameId() != GID_JONES)) {')
    if name == 'backends/platform/sdl/emscripten/emscripten.cpp':
        return before.replace('return !!document.fullscreenElement;',
                              "return !Module['hostManagedFullscreen'] && !!document.fullscreenElement;").replace(
            "let canvas = document.getElementById('canvas');",
            "if (Module['hostManagedFullscreen']) return;\n\tlet canvas = document.getElementById('canvas');")
    if name == 'backends/platform/sdl/sdl-window.cpp':
        after = before.replace('#include "icons/scummvm.xpm"',
            '#include "icons/scummvm.xpm"\n\n#ifdef __EMSCRIPTEN__\n#include <emscripten/html5.h>\n#endif')
        after = after.replace('bool SdlWindow::createOrUpdateWindow(int width, int height, uint32 flags) {',
            '''bool SdlWindow::createOrUpdateWindow(int width, int height, uint32 flags) {
\tbool hostManagedFullscreen = false;
#ifdef __EMSCRIPTEN__
\thostManagedFullscreen = EM_ASM_INT({ return !!Module['hostManagedFullscreen']; });
\tif (hostManagedFullscreen) {
\t\t// The browser host owns the outer fullscreen element and canvas CSS size.
\t\t// A canvas has no desktop window decorations or independent fullscreen mode.
\t\tflags &= ~fullscreenMask;
\t\tdouble cssWidth, cssHeight;
\t\tif (emscripten_get_element_css_size("#canvas", &cssWidth, &cssHeight) == EMSCRIPTEN_RESULT_SUCCESS) {
\t\t\twidth = MAX(1, (int)(cssWidth + 0.5));
\t\t\theight = MAX(1, (int)(cssHeight + 0.5));
\t\t}
\t}
#endif''')
        after = after.replace('\t\t!fullscreenFlags\n', '\t\t!fullscreenFlags && !hostManagedFullscreen\n')
        after = after.replace('if (width > desktopRes.right)', 'if (!hostManagedFullscreen && width > desktopRes.right)')
        after = after.replace('if (height > desktopRes.bottom)', 'if (!hostManagedFullscreen && height > desktopRes.bottom)')
        return after
    raise ValueError(f'Unknown integration source: {name}')


def digest(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def download(url: str, path: Path, expected: str) -> None:
    if not path.exists():
        path.parent.mkdir(parents=True, exist_ok=True)
        partial = path.with_suffix(path.suffix+'.partial')
        print(f'Downloading {url}', flush=True)
        urllib.request.urlretrieve(url, partial)
        if digest(partial) != expected:
            raise ValueError(f'Download checksum mismatch: {url}')
        partial.replace(path)
    if digest(path) != expected:
        raise ValueError(f'Cached download checksum mismatch: {path}')


def patch_source(source: Path, archive: Path, names: list[str] | None = None) -> str:
    """Apply pinned, reviewable integration/compatibility changes; no game-resource edits."""
    changes = []
    with tarfile.open(archive) as original:
        for name in names or ['configure', 'dists/emscripten/custom_shell-pre.js',
                              'backends/platform/sdl/emscripten/emscripten.cpp',
                              'backends/platform/sdl/sdl-window.cpp']:
            stream = original.extractfile(f'scummvm-{VERSION}/{name}')
            if stream is None:
                raise ValueError(f'Missing source entry: {name}')
            before = stream.read().decode()
            after = adapt_source(name, before)
            path = source/name
            if path.read_text() not in (before, after):
                raise ValueError(f'Refusing to replace changed source: {path}')
            if path.read_text() != after:
                path.write_text(after)
            changes.extend(difflib.unified_diff(before.splitlines(True), after.splitlines(True),
                                               fromfile='a/'+name, tofile='b/'+name))
    return ''.join(changes)


def patch_sdl(cache: Path) -> str:
    """Prevent SDL canvas lifecycle calls from changing a host-owned fullscreen element."""
    ports = cache/f'emsdk-{EMSDK_VERSION}/upstream/emscripten/cache/ports'
    archive = ports/f'sdl{SDL_VERSION}.zip'
    if hashlib.sha512(archive.read_bytes()).hexdigest() != SDL_SHA512:
        raise ValueError('SDL source archive SHA-512 mismatch')
    changes = []
    with zipfile.ZipFile(archive) as original:
        for filename in ['SDL_emscriptenvideo.c', 'SDL_emscriptenevents.c']:
            name = 'src/video/emscripten/'+filename
            before = original.read(f'SDL-release-{SDL_VERSION}/{name}').decode()
            if filename.endswith('video.c'):
                marker = '    SDL_WindowData *data;\n    int res = -1;\n'
                addition = '''    // Browser host owns fullscreen; changing the inner SDL window must not exit it.
    if (MAIN_THREAD_EM_ASM_INT({ return !!Module['hostManagedFullscreen']; })) {
        return SDL_FULLSCREEN_SUCCEEDED;
    }
'''
            else:
                marker = '    SDL_WindowData *window_data = userData;\n\n    if (fullscreenChangeEvent->isFullscreen)'
                addition = '''    // Fullscreen on an outer host element does not change the inner SDL window mode.
    if (MAIN_THREAD_EM_ASM_INT({ return !!Module['hostManagedFullscreen']; })) {
        return 0;
    }
'''
            if before.count(marker) != 1:
                raise ValueError(f'Unexpected SDL fullscreen implementation: {filename}')
            after = before.replace(marker, addition+marker)
            path = ports/f'sdl3/SDL-release-{SDL_VERSION}'/name
            if path.read_text() not in (before, after):
                raise ValueError(f'Refusing to replace changed SDL source: {path}')
            if path.read_text() != after:
                path.write_text(after)
            changes.extend(difflib.unified_diff(before.splitlines(True), after.splitlines(True),
                                               fromfile='a/'+name, tofile='b/'+name))
    return ''.join(changes)


def build_environment(cache: Path) -> dict:
    sdk = cache/f'emsdk-{EMSDK_VERSION}'
    subprocess.run([str(sdk/'emsdk'), 'install', EMSDK_VERSION], cwd=sdk, check=True)
    subprocess.run([str(sdk/'emsdk'), 'activate', EMSDK_VERSION], cwd=sdk, check=True)
    # Read the environment after the official activation script. No shell profile changes.
    command = ['bash', '-c', 'source "$1/emsdk_env.sh" >/dev/null 2>&1; env -0', 'bash', str(sdk)]
    result = subprocess.run(command, check=True, stdout=subprocess.PIPE)
    env = dict(item.decode().split('=', 1) for item in result.stdout.split(b'\0') if item)
    env['EMCC_CORES'] = '2'
    # Optional locally unpacked distro tools; never install into /usr.
    bootstrap = cache/'bootstrap/root/usr'
    if (bootstrap/'bin/make').exists():
        env['PATH'] = str(bootstrap/'bin')+os.pathsep+env['PATH']
        env['LD_LIBRARY_PATH'] = str(bootstrap/'lib/x86_64-linux-gnu')
    for tool in ('make', 'pkg-config'):
        if not shutil.which(tool, path=env['PATH']):
            raise RuntimeError(f'{tool} is required on PATH, or under {bootstrap}/bin')
    return env


def collect(source: Path, output: Path, patch: str, sdl_patch: str, sci_patch: str) -> dict:
    for name in ('scummvm.js', 'scummvm.wasm'):
        if not (source/name).is_file():
            raise ValueError(f'Build output missing: {source/name}')
    if (source/'scummvm.wasm').read_bytes()[:8] != b'\0asm\x01\0\0\0':
        raise ValueError('Invalid WebAssembly magic/version')
    output.mkdir(parents=True, exist_ok=True)
    for name in ('scummvm.js', 'scummvm.wasm', 'COPYING', 'COPYRIGHT'):
        shutil.copyfile(source/name, output/name)
    shutil.copytree(source/'LICENSES', output/'LICENSES', dirs_exist_ok=True)
    data = output/'data'
    data.mkdir(exist_ok=True)
    for name in ('scummclassic.zip', 'scummmodern.zip', 'shaders.dat'):
        shutil.copyfile(source/'gui/themes'/name, data/name)
    (data/'index.json').write_text(json.dumps({p.name: p.stat().st_size for p in sorted(data.iterdir())
                                            if p.is_file() and p.name != 'index.json'}, indent=2)+'\n')
    (output/'browser-integration.patch').write_text(patch)
    (output/'sdl-browser-integration.patch').write_text(sdl_patch)
    (output/'sci-save-compatibility.patch').write_text(sci_patch)
    report = {
        'schema': 1, 'scummvm_version': VERSION, 'source_commit': COMMIT,
        'source_url': SOURCE_URL, 'source_sha256': SOURCE_SHA256,
        'source_repository': f'https://github.com/scummvm/scummvm/tree/{COMMIT}',
        'emsdk_version': EMSDK_VERSION, 'emsdk_url': SDK_URL, 'emsdk_sha256': SDK_SHA256,
        'sdl_version': SDL_VERSION, 'sdl_source_url': SDL_URL, 'sdl_source_sha512': SDL_SHA512,
        'configure': CONFIGURE, 'build_parallelism': 2,
        'engines': ['SCI (statically linked)'], 'game_scripts_modified': False,
        'source_changes': 'browser-integration.patch and sdl-browser-integration.patch: retain host arguments, omit external MIDI access, export filesystem/loading APIs, honor host-owned fullscreen and canvas CSS size. sci-save-compatibility.patch: expose Jones ordinary slot 0 save to its original GetSaveFiles/Restore menu; retain new-game filtering and other games unchanged.',
        'sci_compatibility_fix': {'file': 'engines/sci/engine/file.cpp', 'function': 'listSavegames',
                                'affected_game': 'GID_JONES', 'ordinary_save_slot': 0,
                                'reason': 'Upstream save/check/restore kernels map Jones virtual slot 1 to 0, but the generic save-list filter hides slot 0 as an autosave.'},
        'runtime_api': {'global': 'Module', 'factory': False, 'preRun': True,
                        'exports': ['FS', 'ENV', 'callMain', 'addRunDependency', 'removeRunDependency'],
                        'persistent_storage': 'Upstream backend mounts ENV.HOME using IDBFS with autoPersist',
                        'host_fullscreen': 'Set Module.hostManagedFullscreen=true; host controls requestFullscreen/exitFullscreen directly; native canvas uses CSS bounds without desktop decorations',
                        'data_bundle_required': False},
        'licence': 'GPL-3.0-or-later; third-party notices retained in COPYRIGHT and LICENSES/',
        'runtime_test_status': 'Compiled; browser integration validation is recorded separately by browser tests.',
        'files': [{'path': str(p.relative_to(output)), 'bytes': p.stat().st_size, 'sha256': digest(p)}
                  for p in sorted(output.rglob('*')) if p.is_file() and p.name != 'manifest.json'],
    }
    (output/'manifest.json').write_text(json.dumps(report, indent=2)+'\n')
    (ROOT/'reports/scummvm_web_source.json').write_text(json.dumps(report, indent=2)+'\n')
    return report


def verify(output: Path) -> None:
    report = json.loads((output/'manifest.json').read_text())
    for item in report['files']:
        relative = Path(item['path'])
        if relative.is_absolute() or '..' in relative.parts:
            raise ValueError('Unsafe manifest entry')
        path = output/relative
        if path.stat().st_size != item['bytes'] or digest(path) != item['sha256']:
            raise ValueError(f'Vendor file mismatch: {path}')
    print(f"Verified {len(report['files'])} pinned ScummVM vendor files.")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--cache', type=Path, default=Path.home()/'.cache/jones-scummvm-web-build')
    parser.add_argument('--out', type=Path, default=ROOT/'web/vendor')
    parser.add_argument('--verify', action='store_true', help='Verify vendored bytes without downloading or building')
    parser.add_argument('--collect', action='store_true', help='Collect an already completed pinned local build')
    args = parser.parse_args()
    if args.verify:
        verify(args.out)
        return 0
    cache = args.cache.resolve()
    cache.mkdir(parents=True, exist_ok=True)
    source = cache/f'scummvm-{VERSION}'
    for url, name, checksum, destination in [
        (SOURCE_URL, 'scummvm.tar.xz', SOURCE_SHA256, source),
        (SDK_URL, 'emsdk.tar.gz', SDK_SHA256, cache/f'emsdk-{EMSDK_VERSION}'),
    ]:
        download(url, cache/name, checksum)
        if not destination.exists():
            with tarfile.open(cache/name) as archive:
                archive.extractall(cache, filter='data')
    patch = patch_source(source, cache/'scummvm.tar.xz')
    sci_patch = patch_source(source, cache/'scummvm.tar.xz', ['engines/sci/engine/file.cpp'])
    if not args.collect:
        env = build_environment(cache)
        subprocess.run(['embuilder', 'build', 'sdl3'], env=env, check=True)
        sdl_patch = patch_sdl(cache)
        subprocess.run(['embuilder', 'clear', 'sdl3'], env=env, check=True)
        subprocess.run(['embuilder', 'build', 'sdl3'], env=env, check=True)
        for command, log_name in [(['emconfigure', './configure']+CONFIGURE, 'configure.log'),
                                  (['emmake', 'make', '-j2'], 'make.log')]:
            print('Running '+command[0]+'; log: '+str(cache/log_name), flush=True)
            with (cache/log_name).open('w') as log:
                subprocess.run(command, cwd=source, env=env, stdout=log, stderr=subprocess.STDOUT, check=True)
    else:
        sdl_patch = patch_sdl(cache)
    result = collect(source, args.out, patch, sdl_patch, sci_patch)
    verify(args.out)
    print(f"Collected ScummVM {VERSION}: {len(result['files'])} files in {args.out}")
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
