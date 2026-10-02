"""Offline structural tests. These tests do not execute the game engine."""
import json
from pathlib import Path
import random
import sys
import tempfile
import unittest
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'tools'))
from sci_core import *
from sci_scripts import *
from sci_graphics import *
from jones import build
ROOT=Path(__file__).resolve().parents[1]

class WorkbenchTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.records,cls.resources,cls.duplicates=read_game(ROOT/'original')
        cls.base=palette(cls.resources[(11,999)])
    def test_01_map_and_resources(self):
        self.assertEqual(len(self.records),299)
        self.assertEqual(len(self.resources),266)
        self.assertEqual(len(self.duplicates),33)
        self.assertTrue(all(d['identical'] for d in self.duplicates))
    def test_02_original_checksums(self):
        lines=(ROOT/'reports/original_files.sha256').read_text().splitlines()
        self.assertEqual(len(lines),22)
        for line in lines:
            expected,name=line.split(None,1)
            self.assertEqual(digest((ROOT/'original'/name.strip()).read_bytes()),expected)
    def test_03_assembly_roundtrip_all_69(self):
        scripts=list((ROOT/'source_asm').glob('*.sciasm'));self.assertEqual(len(scripts),69)
        for p in scripts:
            n=int(p.stem.split('_')[1])
            self.assertEqual(assemble(p.read_text()),self.resources[(2,n)],str(p))
    def test_04_text_roundtrip_all_39(self):
        files=list((ROOT/'extracted/text').glob('*.json'));self.assertEqual(len(files),39)
        for p in files:
            d=json.loads(p.read_text());raw=b'\0'.join(s.encode('cp437') for s in d['strings'])
            self.assertEqual(raw,self.resources[(3,d['resource'])])
    def test_05_patches_all_266(self):
        files=list((ROOT/'extracted/patches').iterdir());self.assertEqual(len(files),266)
        for p in files:
            key,raw=parse_patch(p);self.assertEqual(raw,self.resources[key])
    def test_06_all_752_png_pixels(self):
        from PIL import Image
        count=0
        for (typ,num),raw in self.resources.items():
            if typ!=0:continue
            for f in view_frames(raw,self.base):
                p=ROOT/'graphics/views'/f'view_{num:04d}'/f"loop_{f['loop']:02d}_cel_{f['cel']:02d}.png"
                im=Image.open(p)
                self.assertEqual(im.mode,'P');self.assertEqual(im.tobytes(),f['pixels'])
                self.assertEqual(im.info['transparency'],f['clear'])
                count+=1
        self.assertEqual(count,752)
    def test_07_rle_roundtrip_all_frames(self):
        for (typ,num),raw in self.resources.items():
            if typ!=0:continue
            for f in view_frames(raw,self.base):
                encoded=encode_rle(f['pixels'],f['clear'])
                decoded,_=decode_rle(encoded,0,len(f['pixels']),f['clear'])
                self.assertEqual(decoded,f['pixels'])
    def test_08_view_reimport_and_shared_loops(self):
        tested=0
        for (typ,num),raw in sorted(self.resources.items()):
            if typ!=0:continue
            old=view_frames(raw,self.base)
            chosen=next((f for f in old if f['mirror']),None)
            if chosen is None and num not in (274,310,340):continue
            if chosen is None:chosen=old[0]
            p=ROOT/'graphics/views'/f'view_{num:04d}'/f"loop_{chosen['loop']:02d}_cel_{chosen['cel']:02d}.png"
            new=replace_cel(raw,self.base,chosen['loop'],chosen['cel'],p)
            frames=view_frames(new,self.base)
            self.assertEqual(len(old),len(frames))
            for a,b in zip(old,frames):
                self.assertEqual(a['pixels'],b['pixels'])
                for field in ('width','height','dx','dy','clear','mirror'):self.assertEqual(a[field],b[field])
            tested+=1
        self.assertGreaterEqual(tested,3)
    def test_09_repacked_archives_roundtrip(self):
        with tempfile.TemporaryDirectory() as tmp:
            out=Path(tmp)/'repacked';write_repacked(self.records,self.resources,out)
            rows,res,dup=read_game(out)
            self.assertEqual(len(rows),299);self.assertEqual(res,self.resources);self.assertEqual(len(dup),33)
    def test_10_fixed_layout_rejected(self):
        with self.assertRaises(FormatError):assemble('@0000 ldi.w 0x0001\n@0002 ret.w\n')
    def test_11_truncated_bitstream_rejected(self):
        with self.assertRaises(FormatError):decompress_lzw1(b'',10)
        with self.assertRaises(FormatError):decompress_huffman(b'',10)
    def test_12_truncated_map_rejected(self):
        with tempfile.TemporaryDirectory() as tmp:
            p=Path(tmp);(p/'resource.map').write_bytes(b'\xff')
            with self.assertRaises(FormatError):read_game(p)
    def test_13_text_patch_build(self):
        with tempfile.TemporaryDirectory() as tmp:
            p=Path(tmp);mods=p/'mods';mods.mkdir()
            (mods/'text.999').write_bytes(make_patch(3,self.resources[(3,999)]))
            result=build(ROOT/'original',mods,p/'game')
            self.assertEqual(result['patches'],['text.999'])
            self.assertEqual((p/'game/resource.map').read_bytes(),(ROOT/'original/resource.map').read_bytes())
            self.assertEqual(parse_patch(p/'game/text.999')[1],self.resources[(3,999)])
            with self.assertRaises(FormatError):build(ROOT/'original',mods,p/'game')
    def test_14_assembler_operand_edit(self):
        # Check that an operand change is real, not a no-op hex dump assembler.
        self.assertEqual(assemble('@0000 ldi.b 0x02\n@0002 ret.w\n'),bytes([0x35,2,0x48]))
        self.assertNotEqual(assemble('@0000 ldi.b 0x03\n@0002 ret.w\n'),bytes([0x35,2,0x48]))
    def test_15_no_branch_target_warnings(self):
        report=json.loads((ROOT/'reports/extraction_summary.json').read_text())
        self.assertEqual(report['branch_target_warnings'],0)
        self.assertEqual(report['disassembled_instructions'],53923)

if __name__=='__main__':unittest.main(verbosity=2)
