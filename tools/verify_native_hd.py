#!/usr/bin/env python3
"""Read-only validation of the optional HD pack against the preserved SCI export.

Run from any directory. Pillow is the only dependency (requirements.txt).
This checks file/metadata integrity, not artistic quality or gameplay parity.
"""
from __future__ import annotations

import argparse
import base64
import hashlib
import json
import math
from pathlib import Path
from typing import Any

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]


class ValidationError(ValueError):
    pass


def require(condition: bool, message: str) -> None:
    if not condition:
        raise ValidationError(message)


def digest(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def local_file(base: Path, name: Any) -> Path:
    require(isinstance(name, str) and bool(name), "Missing local image path")
    require(not any(char in name for char in ("\\", ":", "?", "#")), f"Unsafe image path: {name}")
    relative = Path(name)
    require(not relative.is_absolute() and ".." not in relative.parts, f"Unsafe image path: {name}")
    path = (base / relative).resolve()
    require(path.is_relative_to(base.resolve()) and path.is_file(), f"Missing/outside image: {name}")
    return path


def number(value: Any) -> bool:
    return isinstance(value, (int, float)) and not isinstance(value, bool) and math.isfinite(value)


def rectangle(rect: Any, width: int, height: int, label: str, crop: bool = False) -> tuple[float, float, float, float]:
    fields = ("left", "top", "width", "height") if crop else ("left", "top", "right", "bottom")
    require(isinstance(rect, dict) and all(number(rect.get(k)) for k in fields), f"{label}: invalid rectangle")
    left, top = rect["left"], rect["top"]
    right = left + rect["width"] if crop else rect["right"]
    bottom = top + rect["height"] if crop else rect["bottom"]
    require(0 <= left < right <= width + 1e-7 and 0 <= top < bottom <= height + 1e-7,
            f"{label}: rectangle outside {width}x{height}")
    return left, top, right, bottom


def load_image(path: Path) -> dict[str, Any]:
    with Image.open(path) as source:
        require(source.format == "PNG", f"{path.name}: expected PNG")
        require(0 < source.width <= 8192 and 0 < source.height <= 8192, f"{path.name}: unsupported size")
        source.load()
        alpha = source.convert("RGBA").getchannel("A")
        return {"width": source.width, "height": source.height, "sha256": digest(path),
                "alphaExtrema": list(alpha.getextrema()), "alpha": alpha}


def verify_pack(manifest_path: Path, original_path: Path, provenance_path: Path | None = None) -> dict[str, Any]:
    manifest = json.loads(manifest_path.read_text())
    original = json.loads(original_path.read_text())
    require(manifest.get("schema") == 1, "Unsupported HD manifest schema")
    require(isinstance(manifest.get("pics"), dict) and isinstance(manifest.get("cels"), dict), "Missing HD collections")
    hd_base, original_base = manifest_path.parent, original_path.parent
    images: dict[str, dict[str, Any]] = {}
    originals: dict[str, dict[str, Any]] = {}
    uses: dict[str, list[str]] = {}
    source_uses: dict[str, dict[str, dict[str, Any]]] = {}
    alpha_cels = 0
    crop_count = 0

    def image(name: str, cache: dict[str, Any], base: Path) -> dict[str, Any]:
        if name not in cache:
            cache[name] = load_image(local_file(base, name))
        return cache[name]

    def entry(key: str, art: dict[str, Any], source: dict[str, Any] | None, overlay: bool = False) -> None:
        nonlocal alpha_cels, crop_count
        require(isinstance(art, dict), f"{key}: invalid entry")
        info = image(art.get("src"), images, hd_base)
        uses.setdefault(art["src"], []).append(key)
        for field in ("width", "height", "sourceWidth", "sourceHeight"):
            require(isinstance(art.get(field), int) and not isinstance(art[field], bool) and art[field] > 0,
                    f"{key}: missing/invalid {field}")
        require((art["sourceWidth"], art["sourceHeight"]) == (info["width"], info["height"]), f"{key}: source dimensions differ")
        hashes = [art[field] for field in ("sha256", "generatedSha256") if field in art]
        require(bool(hashes) and all(h == info["sha256"] for h in hashes), f"{key}: generated SHA-256 differs/missing")
        if source:
            require((art["width"], art["height"]) == (source["width"], source["height"]), f"{key}: original dimensions differ")
            original_info = image(source["png"], originals, original_base)
            require((original_info["width"], original_info["height"]) == (source["width"], source["height"]), f"{key}: original PNG dimensions differ")
            require(art.get("originalSha256") == original_info["sha256"], f"{key}: original SHA-256 differs/missing")
            source_uses.setdefault(art["src"], {})[key] = {
                "key": key, "src": "native/public/assets/" + source["png"],
                "width": source["width"], "height": source["height"],
                "dx": source.get("dx", 0), "dy": source.get("dy", 0), "sha256": original_info["sha256"],
            }
            if "originalSource" in art:
                require(art["originalSource"] == "assets/" + source["png"], f"{key}: original source path differs")
            for field in ("dx", "dy"):
                if field in art:
                    require(art[field] == source.get(field, 0), f"{key}: original {field} anchor differs")
        bounds = (0, 0, info["width"], info["height"])
        if "crop" in art:
            bounds = rectangle(art["crop"], info["width"], info["height"], key + " crop", crop=True)
            crop_count += 1
        for field in ("regions", "originalRegions", "preserveSourceColorRegions"):
            if field in art:
                require(isinstance(art[field], list) and len(art[field]) <= 12, f"{key}: invalid/too many {field}")
                for index, rect in enumerate(art[field]):
                    rectangle(rect, art["width"], art["height"], f"{key} {field}[{index}]")
        for field in ("mirrorX", "generatedAlpha", "opaque"):
            if field in art:
                require(isinstance(art[field], bool), f"{key}: {field} must be boolean")
        if "preserveSourceColors" in art:
            colors = art["preserveSourceColors"]
            require(isinstance(colors, list) and len(colors) <= 256 and
                    all(type(c) is int and 0 <= c <= 255 for c in colors) and len(set(colors)) == len(colors),
                    f"{key}: invalid preserved palette indices")
        if "preserveSourceColorRegions" in art:
            require(bool(art.get("preserveSourceColors")), f"{key}: ink regions need preserved palette indices")
        left, top, right, bottom = bounds
        # Outward rounding includes edge texels sampled by a fractional crop.
        alpha = info["alpha"].crop((math.floor(left), math.floor(top), math.ceil(right), math.ceil(bottom)))
        low, high = alpha.getextrema()
        require(high > 2, f"{key}: crop contains no visible artwork")
        if art.get("opaque"):
            require(low == 255, f"{key}: opaque crop contains transparent pixels")
        if art.get("generatedAlpha"):
            require(not overlay and source is not None and "clear" in source, f"{key}: alpha expansion needs an original cel")
            source_pixels = base64.b64decode(source["pixels"], validate=True)
            require(len(source_pixels) == source["width"] * source["height"] and source["clear"] in source_pixels,
                    f"{key}: alpha expansion needs original transparent pixels")
            require(low < 3 and high >= 128, f"{key}: alpha expansion needs transparent background and visible body")
            alpha_cels += 1

    for key, art in manifest["pics"].items():
        require(key.isdecimal() and key in original["pics"], f"Unknown original picture {key}")
        entry("pic:" + key, art, original["pics"][key])
    for key, art in manifest["cels"].items():
        try:
            parts = key.split(":")
            require(len(parts) == 3 and all(p.isdecimal() for p in parts), f"Invalid cel key {key}")
            view, loop, cel = map(int, parts)
            source = original["views"][str(view)]["loops"][loop]["cels"][cel]
        except (KeyError, IndexError):
            raise ValidationError(f"Unknown original cel {key}") from None
        entry(key, art, source)
        if "mirrorOf" in art:
            other = manifest["cels"].get(art["mirrorOf"])
            require(art.get("mirrorX") is True and other is not None and other.get("src") == art["src"] and
                    other.get("crop") == art.get("crop"), f"{key}: invalid shared mirrored crop")
    overlays = manifest.get("overlays", [])
    require(isinstance(overlays, list), "Invalid overlays")
    for index, art in enumerate(overlays):
        key = f"overlay:{index}"
        pic = original["pics"].get(str(art.get("pic")))
        require(pic is not None, f"{key}: unknown original picture")
        left, top, right, bottom = rectangle(art.get("dest"), pic["width"], pic["height"], key + " destination")
        require((right - left, bottom - top) == (art.get("width"), art.get("height")), f"{key}: destination dimensions differ")
        entry(key, art, None, overlay=True)

    counts = {"pics": len(manifest["pics"]), "cels": len(manifest["cels"]), "overlays": len(overlays),
              "uniqueImages": len(images), "originalPics": len(original["pics"]),
              "originalCels": sum(len(loop["cels"]) for view in original["views"].values() for loop in view["loops"]),
              "croppedEntries": crop_count, "generatedAlphaCels": alpha_cels}
    coverage = manifest.get("coverage", {})
    for field in ("pics", "cels", "overlays", "uniqueImages", "originalPics", "originalCels"):
        require(coverage.get(field) == counts[field], f"coverage.{field} differs: expected {counts[field]}")
    if provenance_path is not None:
        provenance = json.loads(provenance_path.read_text())
        require(provenance.get("schema") == 1, "Unsupported provenance schema")
        records = provenance.get("assets", [])
        require(isinstance(records, list) and len(records) == len({r.get("src") for r in records}), "Duplicate provenance images")
        indexed = {record["src"]: record for record in records}
        for name, info in images.items():
            record = indexed.get(name)
            require(record is not None, f"{name}: missing production provenance")
            for field in ("sha256", "width", "height", "alphaExtrema"):
                require(record.get(field) == info[field], f"{name}: provenance {field} differs")
            require(isinstance(record.get("production"), dict) and bool(record["production"].get("prompt")),
                    f"{name}: missing exact generation prompt")
            require(sorted(record.get("entries", [])) == sorted(uses[name]), f"{name}: provenance entry list differs")
            references = record.get("originalReferences", [])
            require(isinstance(references, list) and len(references) == len(source_uses.get(name, {})) and
                    {r.get("key"): r for r in references} == source_uses.get(name, {}),
                    f"{name}: provenance original references differ")
        require(set(indexed) == set(images), "Provenance active file set differs from manifest")
    return {"schema": 1, "valid": True, "manifestSha256": digest(manifest_path),
            "originalManifestSha256": digest(original_path),
            "provenanceSha256": digest(provenance_path) if provenance_path else None,
            "counts": counts, "images": [dict(src=name, **{k: v for k, v in info.items() if k != "alpha"},
                                               entries=uses[name]) for name, info in sorted(images.items())]}


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--manifest", type=Path, default=ROOT / "native/public/hd/manifest.json")
    parser.add_argument("--original-manifest", type=Path, default=ROOT / "native/public/assets/manifest.json")
    parser.add_argument("--provenance", type=Path, default=ROOT / "native/public/hd/expanded-provenance.json")
    parser.add_argument("--report", type=Path, help="Optional machine-readable report; validation never changes assets")
    args = parser.parse_args()
    try:
        report = verify_pack(args.manifest, args.original_manifest, args.provenance)
    except (ValidationError, OSError, ValueError, TypeError, KeyError) as error:
        report = {"schema": 1, "valid": False, "error": str(error)}
    if args.report:
        args.report.parent.mkdir(parents=True, exist_ok=True)
        args.report.write_text(json.dumps(report, indent=2) + "\n")
    if report["valid"]:
        count = report["counts"]
        print(f"HD pack valid: {count['pics']} pictures, {count['cels']} cels, {count['overlays']} overlays, "
              f"{count['uniqueImages']} PNGs; {count['generatedAlphaCels']} alpha silhouettes checked.")
        return 0
    print("HD validation failed: " + report["error"])
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
