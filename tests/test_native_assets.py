"""Original asset pixels/metadata used by both native browser and server graphics."""
import base64
import hashlib
import json
from pathlib import Path
import struct
import sys
import unittest
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT/'tools'))
from sci_core import read_game
from sci_graphics import palette, view_frames
from export_native_assets import decode_font, decode_cursor, decode_picture


class NativeAssetsTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.directory = ROOT/'native/public/assets'
        cls.data = json.loads((cls.directory/'manifest.json').read_text())
        _, cls.resources, _ = read_game(ROOT/'original')
        cls.base = palette(cls.resources[(11,999)])

    def test_complete_original_resource_coverage(self):
        self.assertEqual(self.data['counts'], dict(views=90,cels=752,pics=7,fonts=8,cursors=2,texts=39,palettes=1))
        for kind,key in [(0,'views'),(1,'pics'),(3,'texts'),(7,'fonts'),(8,'cursors'),(11,'palettes')]:
            self.assertEqual({str(number) for typ,number in self.resources if typ==kind},set(self.data[key]))
        self.assertEqual(self.data['defaultPortTop'],0)

    def test_every_cel_matches_original_indexed_pixels_and_displacements(self):
        for key,view in self.data['views'].items():
            raw=self.resources[(0,int(key))]
            self.assertEqual(view['sha256'],hashlib.sha256(raw).hexdigest())
            for frame in view_frames(raw,self.base):
                cel=view['loops'][frame['loop']]['cels'][frame['cel']]
                self.assertEqual(base64.b64decode(cel['pixels']),frame['pixels'])
                self.assertEqual(cel['dx'],-frame['dx'] if frame['mirror'] else frame['dx'])
                self.assertEqual(cel['dy'],raw[frame['cel_offset']+5])
                image=Image.open(self.directory/cel['png']).convert('RGBA')
                self.assertEqual(image.size,(cel['width'],cel['height']))
                rgba=image.tobytes()
                for i,index in enumerate(frame['pixels']):
                    self.assertEqual(rgba[i*4+3],0 if index==frame['clear'] else 255)
                    if index!=frame['clear']:
                        self.assertEqual(tuple(rgba[i*4:i*4+3]),tuple(frame['colors'][index]))

    def test_fonts_decode_every_original_bit_and_glyph_metric(self):
        for key,font in self.data['fonts'].items():
            raw=self.resources[(7,int(key))]
            self.assertEqual(font['charCount'],struct.unpack_from('<H',raw,2)[0])
            self.assertEqual(font['lineHeight'],struct.unpack_from('<H',raw,4)[0])
            atlas=Image.open(self.directory/font['png']).convert('RGBA')
            for glyph in font['chars']:
                offset=struct.unpack_from('<H',raw,6+glyph['code']*2)[0]
                width,height=raw[offset:offset+2]
                self.assertEqual((glyph['width'],glyph['height'],glyph['advance']),(width,height,width))
                pixels=base64.b64decode(glyph['bits'])
                for y in range(height):
                    for x in range(width):
                        expected=bool(raw[offset+2+y*((width+7)//8)+x//8] & (128>>(x%8)))
                        self.assertEqual(bool(pixels[y*width+x]),expected)
                        self.assertEqual(atlas.getpixel((glyph['atlasX']+x,glyph['atlasY']+y))[3],255 if expected else 0)

    def test_cursors_use_both_masks_and_original_hotspot(self):
        for key,cursor in self.data['cursors'].items():
            raw=self.resources[(8,int(key))]
            self.assertEqual((cursor['hotspotX'],cursor['hotspotY']),struct.unpack_from('<HH',raw))
            pixels=base64.b64decode(cursor['pixels'])
            for y in range(16):
                a,b=struct.unpack_from('<H',raw,4+y*2)[0],struct.unpack_from('<H',raw,36+y*2)[0]
                for x in range(16):
                    index=2*((a>>(15-x))&1)+((b>>(15-x))&1)
                    self.assertEqual(pixels[y*16+x],[0,255,254,7][index])

    def test_text_bytes_and_all_picture_planes_are_preserved(self):
        for key,entries in self.data['texts'].items():
            self.assertEqual(b'\0'.join(s.encode('cp437') for s in entries)+b'\0',self.resources[(3,int(key))])
        for key,pic in self.data['pics'].items():
            raw=self.resources[(1,int(key))]
            frame=decode_picture(raw,self.base)
            for name in ['pixels','priority','control']:
                data=base64.b64decode(pic[name])
                self.assertEqual(len(data),64000)
                self.assertEqual(data,frame[name])
            image=Image.open(self.directory/pic['png']).convert('RGB')
            expected=bytes(channel for index in frame['pixels'] for channel in frame['colors'][index])
            self.assertEqual(image.tobytes(),expected)

    def test_truncated_fonts_cursors_fail_explicitly(self):
        for decoder,data in [(decode_font,b'\0'*5),(decode_cursor,b'\0'*67)]:
            with self.assertRaises(ValueError):decoder(data)


if __name__ == '__main__':
    unittest.main()
