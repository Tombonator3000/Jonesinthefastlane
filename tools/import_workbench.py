#!/usr/bin/env python3
"""Safely import the verified workbench ZIP without replacing existing work.
SPDX-License-Identifier: GPL-3.0-or-later
"""
from __future__ import annotations
import argparse
import hashlib
import json
from pathlib import Path, PurePosixPath
import stat
import sys
import zipfile

ARCHIVE_SHA256 = 'c2fa12f8f58caa6857ecea1cfc2c8d0e6ea8da035fbf19b594beef07ebcf2780'
PREFIX = 'Jones_decomp_arbeidsprosjekt'
ALLOWED = {'original', 'extracted', 'source_asm', 'script_metadata', 'graphics',
           'tools', 'tests', 'reports', 'reference', 'docs', 'mods', '.gitignore',
           'LICENSE.tools.txt', 'README_NO.md', 'requirements.txt',
           'start_linux.sh', 'start_windows.cmd'}
MAX_ARCHIVE = 20 * 1024 * 1024
MAX_EXPANDED = 30 * 1024 * 1024


def import_archive(archive: Path, destination: Path,
                   expected_sha256: str = ARCHIVE_SHA256) -> dict:
    if archive.stat().st_size > MAX_ARCHIVE:
        raise ValueError('Archive is larger than the allowed transfer package')
    digest = hashlib.sha256(archive.read_bytes()).hexdigest()
    if digest != expected_sha256:
        raise ValueError('ZIP checksum mismatch; use the unchanged workbench ZIP')
    root = destination.resolve()
    planned: list[tuple[Path, bytes]] = []
    unchanged, preserved = [], []
    seen: set[str] = set()
    with zipfile.ZipFile(archive) as z:
        entries = z.infolist()
        if len(entries) > 2000 or sum(i.file_size for i in entries) > MAX_EXPANDED:
            raise ValueError('Unexpected archive size or number of entries')
        for info in entries:
            path = PurePosixPath(info.filename)
            if ('\\' in info.filename or ':' in info.filename or path.is_absolute()
                    or '..' in path.parts or not path.parts or path.parts[0] != PREFIX):
                raise ValueError(f'Unsafe archive path: {info.filename}')
            if stat.S_ISLNK(info.external_attr >> 16):
                raise ValueError('Symbolic links are not accepted')
            if info.is_dir():
                continue
            relative = PurePosixPath(*path.parts[1:])
            if not relative.parts or relative.parts[0] not in ALLOWED:
                raise ValueError(f'Unexpected archive member: {relative}')
            if any(p in {'.git', '.github', '.ssh', '.venv', '__pycache__'} for p in relative.parts):
                raise ValueError(f'Protected path: {relative}')
            name = relative.as_posix()
            if name.casefold() in seen:
                raise ValueError(f'Duplicate archive destination: {name}')
            seen.add(name.casefold())
            target = root.joinpath(*relative.parts)
            for part in (target, *target.parents):
                if part == root:
                    break
                if part.is_symlink():
                    raise ValueError(f'Destination contains a symbolic link: {name}')
                if part != target and part.exists() and not part.is_dir():
                    raise ValueError(f'Destination parent is not a directory: {name}')
            if not target.resolve().is_relative_to(root):
                raise ValueError('Destination escapes repository')
            data = z.read(info)
            if target.exists():
                if not target.is_file():
                    raise ValueError(f'Destination is not a regular file: {name}')
                if target.read_bytes() == data:
                    unchanged.append(name)
                elif relative.parts[0] == 'original':
                    raise ValueError(f'Original-file conflict: {name}; nothing imported')
                else:
                    preserved.append(name)
            else:
                planned.append((target, data))
    # No writes until every archive entry has passed validation.
    for target, data in planned:
        target.parent.mkdir(parents=True, exist_ok=True)
        with target.open('xb') as output:
            output.write(data)
        if target.name == 'start_linux.sh':
            target.chmod(0o755)
    return {'archive_sha256': digest, 'archive_files': len(seen),
            'files_added': len(planned), 'identical_existing': len(unchanged),
            'preserved_modified_files': preserved,
            'runtime_tested': False, 'modern_source_port_complete': False}


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('archive', type=Path)
    parser.add_argument('--dest', type=Path, default=Path(__file__).resolve().parents[1])
    args = parser.parse_args()
    try:
        report = import_archive(args.archive, args.dest)
        report_path = args.dest / 'reports/github_import.json'
        report_path.parent.mkdir(parents=True, exist_ok=True)
        if report_path.is_symlink():
            raise ValueError('Import report must not be a symbolic link')
        report_path.write_text(json.dumps(report, indent=2) + '\n', encoding='utf-8')
        print(json.dumps(report, indent=2))
        return 0
    except (OSError, ValueError, zipfile.BadZipFile) as error:
        print(f'IMPORT FAILED: {error}', file=sys.stderr)
        return 1


if __name__ == '__main__':
    raise SystemExit(main())
