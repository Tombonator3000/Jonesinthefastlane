"""Importer tests use generated fixtures, not original game data.
SPDX-License-Identifier: GPL-3.0-or-later
"""
from pathlib import Path
import hashlib
import sys
import tempfile
import unittest
import zipfile
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'tools'))
from import_workbench import import_archive, PREFIX


class ImportTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.archive = self.root / 'package.zip'
        self.dest = self.root / 'repo'

    def fixture(self, members):
        with zipfile.ZipFile(self.archive, 'w') as z:
            for name, data in members:
                z.writestr(PREFIX + '/' + name, data)
        return hashlib.sha256(self.archive.read_bytes()).hexdigest()

    def test_import_and_idempotence(self):
        sha = self.fixture([('original/resource.map', b'data'), ('docs/info.md', b'notes')])
        first = import_archive(self.archive, self.dest, sha)
        second = import_archive(self.archive, self.dest, sha)
        self.assertEqual(first['files_added'], 2)
        self.assertEqual(second['files_added'], 0)
        self.assertEqual(second['identical_existing'], 2)

    def test_bad_checksum_writes_nothing(self):
        self.fixture([('docs/info.md', b'notes')])
        with self.assertRaises(ValueError):
            import_archive(self.archive, self.dest, '0' * 64)
        self.assertFalse(self.dest.exists())

    def test_preserves_modified_source_and_unrelated_file(self):
        sha = self.fixture([('tools/example.py', b'old')])
        (self.dest / 'tools').mkdir(parents=True)
        (self.dest / 'tools/example.py').write_bytes(b'new')
        (self.dest / 'screenshot.jpg').write_bytes(b'user file')
        result = import_archive(self.archive, self.dest, sha)
        self.assertEqual(result['preserved_modified_files'], ['tools/example.py'])
        self.assertEqual((self.dest / 'tools/example.py').read_bytes(), b'new')
        self.assertEqual((self.dest / 'screenshot.jpg').read_bytes(), b'user file')

    def test_original_conflict_prevents_all_writes(self):
        sha = self.fixture([('docs/new.md', b'new'), ('original/resource.map', b'old')])
        (self.dest / 'original').mkdir(parents=True)
        (self.dest / 'original/resource.map').write_bytes(b'different')
        with self.assertRaises(ValueError):
            import_archive(self.archive, self.dest, sha)
        self.assertFalse((self.dest / 'docs').exists())

    def test_rejects_traversal_and_protected_paths(self):
        for name in ('../outside', '/absolute', 'tools/../../outside', '.github/workflows/bad.yml', 'tools/.git/config'):
            with self.subTest(name=name):
                sha = self.fixture([(name, b'bad')])
                with self.assertRaises(ValueError):
                    import_archive(self.archive, self.dest, sha)
                self.assertFalse(self.dest.exists())

    def test_rejects_duplicate_destinations(self):
        sha = self.fixture([('docs/Info.md', b'a'), ('docs/info.md', b'b')])
        with self.assertRaises(ValueError):
            import_archive(self.archive, self.dest, sha)
        self.assertFalse(self.dest.exists())

    def test_rejects_destination_symlink(self):
        sha = self.fixture([('docs/info.md', b'notes')])
        outside = self.root / 'outside'
        outside.mkdir()
        self.dest.mkdir()
        try:
            (self.dest / 'docs').symlink_to(outside, target_is_directory=True)
        except (OSError, NotImplementedError):
            self.skipTest('Creating symlinks is not supported on this host')
        with self.assertRaises(ValueError):
            import_archive(self.archive, self.dest, sha)
        self.assertEqual(list(outside.iterdir()), [])


if __name__ == '__main__':
    unittest.main()
