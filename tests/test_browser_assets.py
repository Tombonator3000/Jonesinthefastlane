"""Picture decoder safety and reproducibility against the supplied originals."""
from pathlib import Path
import hashlib
import json
import struct
import sys
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT/'tools'))
from export_browser_assets import decode_picture, export_assets
from sci_core import FormatError, read_game
from sci_graphics import palette


class PictureDecoderTests(unittest.TestCase):
    def setUp(self):
        self.colors = [(i, i, i) for i in range(256)]

    def test_visual_fill_and_closed_boundary(self):
        # A closed 10..20 rectangle must keep the exterior white when filled.
        raw = bytes([0xf0, 2, 0xf6, 0, 10, 10, 0, 20, 10, 0, 20, 20,
                     0, 10, 20, 0, 10, 10, 0xf0, 3, 0xf8, 0, 15, 15, 0xff])
        pixels = decode_picture(raw, self.colors)['pixels']
        self.assertEqual(pixels[15*320+15], 3)
        self.assertEqual(pixels[10*320+15], 2)
        self.assertEqual(pixels[9*320+15], 255)
        self.assertEqual(pixels.count(3), 81)

    def test_priority_blocks_embedded_cel(self):
        # SCI1 embedded cels have priority 0, so earlier priority pixels hide them.
        cel = struct.pack('<HHbbBB', 2, 1, 0, 0, 255, 0) + bytes([2, 12, 13])
        raw = bytes([0xf1, 0xf2, 5, 0xf7, 0, 0, 0, 0,
                     0xfe, 1, 0, 0, 0]) + struct.pack('<H', len(cel)) + cel + b'\xff'
        pixels = decode_picture(raw, self.colors)['pixels']
        self.assertEqual(pixels[:2], bytes([255, 13]))

    def test_bad_commands_and_truncation_fail(self):
        for raw in (b'', b'\xfe', b'\xfe\x02', b'\xf9\x01\xff',
                    b'\xf6\x00\x01', b'\xff\x00', b'\xfe\x09\xff'):
            with self.subTest(raw=raw):
                with self.assertRaises(FormatError):
                    decode_picture(raw, self.colors)


@unittest.skipUnless((ROOT/'original/resource.map').exists(), 'Original game data not imported')
class OriginalAssetsTests(unittest.TestCase):
    def test_all_pictures_decode_with_original_dimensions(self):
        _, resources, _ = read_game(ROOT/'original')
        base = palette(resources[(11, 999)])
        ids = sorted(number for typ, number in resources if typ == 1)
        self.assertEqual(ids, [0, 1, 2, 3, 4, 5, 11])
        for number in ids:
            with self.subTest(picture=number):
                frame = decode_picture(resources[(1, number)], base)
                self.assertEqual(len(frame['pixels']), 320*200)
                self.assertEqual((frame['width'], frame['height']), (320, 200))
        town = decode_picture(resources[(1, 11)], base)
        self.assertEqual(len(town['embedded_cels']), 15)
        self.assertGreater(len(set(town['pixels'])), 100)

    def test_checked_in_assets_are_reproducible_and_originals_untouched(self):
        from PIL import Image
        def original_hashes():
            return {p.name: hashlib.sha256(p.read_bytes()).hexdigest()
                    for p in (ROOT/'original').iterdir() if p.is_file()}
        before = original_hashes()
        with tempfile.TemporaryDirectory() as temporary:
            output = Path(temporary)/'assets'
            result = export_assets(ROOT/'original', output)
            checked_in = json.loads((ROOT/'web/assets/manifest.json').read_text())
            self.assertEqual(result, checked_in)
            self.assertEqual(len(result['scenes']), 7)
            self.assertEqual(len(result['views']), 36)
            for item in result['scenes'] + result['views']:
                with self.subTest(file=item['file']):
                    generated = (output/item['file']).read_bytes()
                    self.assertEqual(generated, (ROOT/'web/assets'/item['file']).read_bytes())
                    self.assertEqual(hashlib.sha256(generated).hexdigest(), item['png_sha256'])
                    with Image.open(output/item['file']) as image:
                        self.assertEqual(image.size, (item['width'], item['height']))
                        image.verify()
        self.assertEqual(before, original_hashes())

    def test_export_refuses_original_destination(self):
        with self.assertRaises(ValueError):
            export_assets(ROOT/'original', ROOT/'original/forbidden')


if __name__ == '__main__':
    unittest.main()
