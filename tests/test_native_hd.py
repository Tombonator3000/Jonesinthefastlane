"""Small corrupt-pack regressions; no generated asset copies or browser needed."""
import base64
import copy
import json
from pathlib import Path
import tempfile
import unittest

from PIL import Image

from tools.verify_native_hd import ValidationError, digest, verify_pack


class NativeHdValidationTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.hd = self.root / "hd"
        self.source = self.root / "assets"
        self.hd.mkdir()
        self.source.mkdir()
        original = Image.new("RGBA", (2, 2))
        original.putpixel((0, 0), (240, 100, 20, 255))
        original.save(self.source / "original.png")
        generated = Image.new("RGBA", (8, 8))
        for y in range(1, 7):
            for x in range(1, 7):
                generated.putpixel((x, y), (190, 90, 30, 255))
        generated.save(self.hd / "body.png")
        source = {"width": 2, "height": 2, "dx": -1, "dy": 3, "clear": 255,
                  "png": "original.png", "pixels": base64.b64encode(bytes([1, 255, 255, 255])).decode()}
        self.original = {"pics": {}, "views": {"280": {"loops": [{"cels": [source]}]}}}
        self.art = {"src": "body.png", "width": 2, "height": 2, "dx": -1, "dy": 3,
                    "sourceWidth": 8, "sourceHeight": 8, "crop": {"left": 0.25, "top": 0.25, "width": 7.5, "height": 7.5},
                    "generatedAlpha": True, "generatedSha256": digest(self.hd / "body.png"),
                    "originalSha256": digest(self.source / "original.png")}
        self.manifest = {"schema": 1, "pics": {}, "cels": {"280:0:0": self.art},
                         "coverage": {"pics": 0, "cels": 1, "overlays": 0, "uniqueImages": 1, "originalPics": 0, "originalCels": 1}}
        self.provenance = {"schema": 1, "assets": [{"src": "body.png", "width": 8, "height": 8,
                          "sha256": self.art["generatedSha256"], "alphaExtrema": [0, 255],
                          "entries": ["280:0:0"],
                          "originalReferences": [{"key": "280:0:0", "src": "native/public/assets/original.png",
                                                  "width": 2, "height": 2, "dx": -1, "dy": 3,
                                                  "sha256": self.art["originalSha256"]}],
                          "production": {"prompt": "An original-referenced sprite."}}]}

    def validate(self):
        for path, data in [(self.hd / "manifest.json", self.manifest), (self.source / "manifest.json", self.original),
                           (self.hd / "expanded-provenance.json", self.provenance)]:
            path.write_text(json.dumps(data))
        return verify_pack(self.hd / "manifest.json", self.source / "manifest.json", self.hd / "expanded-provenance.json")

    def test_fractional_crop_and_real_alpha_validate_without_rewriting_files(self):
        before = (self.hd / "body.png").read_bytes()
        result = self.validate()
        self.assertTrue(result["valid"])
        self.assertEqual(result["counts"]["generatedAlphaCels"], 1)
        self.assertEqual(before, (self.hd / "body.png").read_bytes())

    def test_outside_or_nonfinite_crop_and_regions_fail(self):
        original = copy.deepcopy(self.art)
        for update, error in [({"crop": {"left": 7, "top": 0, "width": 2, "height": 8}}, "outside"),
                              ({"crop": {"left": 0, "top": 0, "width": float("nan"), "height": 8}}, "invalid rectangle"),
                              ({"originalRegions": [{"left": 0, "top": 0, "right": 3, "bottom": 2}]}, "outside"),
                              ({"regions": [{"left": 0, "top": 0, "right": 1, "bottom": 1}] * 13}, "too many")]:
            with self.subTest(update=update):
                self.art.clear(); self.art.update(original); self.art.update(update)
                with self.assertRaisesRegex(ValidationError, error):
                    self.validate()

    def test_file_hash_original_geometry_and_anchors_fail_independently(self):
        for field, value, message in [("generatedSha256", "0" * 64, "generated SHA"),
                                       ("originalSha256", "0" * 64, "original SHA"),
                                       ("sourceWidth", 9, "source dimensions"),
                                       ("width", 3, "original dimensions"), ("dy", 2, "anchor")]:
            with self.subTest(field=field):
                previous = self.art[field]; self.art[field] = value
                with self.assertRaisesRegex(ValidationError, message):
                    self.validate()
                self.art[field] = previous

    def test_alpha_expansion_rejects_opaque_or_empty_crops_and_false_opaque_claim(self):
        self.art["crop"] = {"left": 1, "top": 1, "width": 5, "height": 5}
        with self.assertRaisesRegex(ValidationError, "transparent background"):
            self.validate()
        self.art["crop"] = {"left": 0, "top": 0, "width": 1, "height": 1}
        with self.assertRaisesRegex(ValidationError, "no visible artwork"):
            self.validate()
        self.art.pop("crop"); self.art["opaque"] = True
        with self.assertRaisesRegex(ValidationError, "opaque crop"):
            self.validate()

    def test_paths_cannot_escape_pack_and_unknown_originals_fail(self):
        for name in ["../assets/original.png", "/tmp/image.png", "https://example.com/body.png", "..\\body.png"]:
            self.art["src"] = name
            with self.subTest(name=name), self.assertRaisesRegex(ValidationError, "Unsafe"):
                self.validate()
        self.art["src"] = "body.png"
        self.manifest["cels"] = {"280:0:9": self.art}
        with self.assertRaisesRegex(ValidationError, "Unknown original cel"):
            self.validate()

    def test_stale_coverage_and_untraceable_or_altered_provenance_fail(self):
        self.manifest["coverage"]["cels"] = 2
        with self.assertRaisesRegex(ValidationError, "coverage.cels"):
            self.validate()
        self.manifest["coverage"]["cels"] = 1
        record = self.provenance["assets"][0]
        record["production"] = {}
        with self.assertRaisesRegex(ValidationError, "exact generation prompt"):
            self.validate()
        record["production"] = {"prompt": "Example"}; record["alphaExtrema"] = [255, 255]
        with self.assertRaisesRegex(ValidationError, "provenance alphaExtrema"):
            self.validate()
        record["alphaExtrema"] = [0, 255]
        record["originalReferences"][0]["width"] = 9
        with self.assertRaisesRegex(ValidationError, "provenance original references"):
            self.validate()


if __name__ == "__main__":
    unittest.main()
