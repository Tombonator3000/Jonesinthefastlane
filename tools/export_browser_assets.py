#!/usr/bin/env python3
"""Export original Jones SCI1 pictures and selected views for the browser.

SPDX-License-Identifier: GPL-3.0-or-later
The exported Sierra artwork retains its original rights, not this tool licence.
Format reference: ScummVM engines/sci/graphics/{picture,screen}.cpp.
This is a bounded SCI1 visual-plane exporter, not an SCI interpreter.
Unsupported drawing opcodes fail explicitly instead of producing guessed art.
"""
from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path
import struct

from sci_core import FormatError, read_game
from sci_graphics import decode_rle, palette, view_frames

ROOT = Path(__file__).resolve().parents[1]
WIDTH, HEIGHT = 320, 200
SCENE_NAMES = {0: 'opening', 1: 'blue_grid', 2: 'green_grid', 3: 'violet_grid',
               4: 'red_grid', 5: 'neutral_grid', 11: 'town'}
SELECTED_VIEWS = {
    280: 'player_business_man', 282: 'player_casual_man', 284: 'player_business_woman',
    286: 'player_casual_woman', 290: 'player2_business_man', 292: 'player2_casual_man',
    294: 'player2_business_woman', 296: 'player2_casual_woman',
    351: 'portrait_351', 353: 'portrait_353', 354: 'portrait_bank', 355: 'portrait_355',
    356: 'portrait_356', 357: 'portrait_university', 358: 'portrait_358',
    359: 'portrait_359', 360: 'portrait_360', 361: 'portrait_361', 362: 'portrait_362',
    697: 'rental_exterior', 698: 'security_exterior', 699: 'rental_house',
    700: 'lowcost_apartment', 701: 'rent_office', 702: 'security_apartment',
    705: 'factory', 706: 'employment', 710: 'appliance', 712: 'pawnshop',
    803: 'market', 804: 'bank', 807: 'university', 808: 'clothing',
    809: 'discount', 810: 'appliance_alt', 811: 'fastfood',
}


def decode_picture(raw: bytes, base: list[tuple[int, int, int]]) -> dict:
    """Render the commands actually used by the seven original Jones pictures.

    Coordinates are the complete 320x200 SCI drawing surface, without stretching.
    Priority/control planes are retained internally because they affect filling
    and embedded-cel visibility. Their numeric data is not browser collision data.
    """
    planes = [bytearray([255]) * (WIDTH * HEIGHT), bytearray(WIDTH * HEIGHT), bytearray(WIDTH * HEIGHT)]
    colors = list(base)
    values = [0, 255, 255]
    pos = 0
    commands = []
    embedded = []

    def take(n: int) -> bytes:
        nonlocal pos
        if n < 0 or pos + n > len(raw):
            raise FormatError('Truncated SCI picture command')
        result = raw[pos:pos+n]
        pos += n
        return result

    def peek() -> int:
        if pos >= len(raw):
            raise FormatError('SCI picture missing terminator')
        return raw[pos]

    def absolute() -> tuple[int, int]:
        a, b, c = take(3)
        return b + ((a & 240) << 4), c + ((a & 15) << 8)

    def plot(x: int, y: int) -> None:
        if 0 <= x < WIDTH and 0 <= y < HEIGHT:
            at = y * WIDTH + x
            for plane, value in zip(planes, values):
                if value != 255:
                    plane[at] = value

    def line(start: tuple[int, int], end: tuple[int, int]) -> None:
        x, y = max(0, min(319, start[0])), max(0, min(199, start[1]))
        ex, ey = max(0, min(319, end[0])), max(0, min(199, end[1]))
        sx, sy = (1 if ex >= x else -1), (1 if ey >= y else -1)
        dx, dy = abs(ex-x)*2, abs(ey-y)*2
        plot(x, y)
        if dx > dy:
            fraction = dy - dx//2
            while x != ex:
                if fraction >= 0:
                    y += sy
                    fraction -= dx
                x += sx
                fraction += dy
                plot(x, y)
        else:
            fraction = dx - dy//2
            while y != ey:
                if fraction >= 0:
                    x += sx
                    fraction -= dy
                y += sy
                fraction += dx
                plot(x, y)

    def fill(x: int, y: int) -> None:
        if not (0 <= x < WIDTH and 0 <= y < HEIGHT):
            return
        enabled = [i for i in range(3) if values[i] != 255]
        if not enabled:
            return
        first = enabled[0]
        at = y*WIDTH+x
        search = planes[first][at]
        # SCI only fills untouched white visual / zero priority/control regions.
        expected = 255 if first == 0 else 0
        if search != expected or values[first] == expected:
            return
        stack = [(x, y)]
        while stack:
            x, y = stack.pop()
            if not (0 <= x < WIDTH and 0 <= y < HEIGHT):
                continue
            if planes[first][y*WIDTH+x] != search:
                continue
            plot(x, y)
            stack.extend(((x-1, y), (x+1, y), (x, y-1), (x, y+1)))

    while pos < len(raw):
        at = pos
        op = take(1)[0]
        commands.append(op)
        if op in (0xf0, 0xf2, 0xfb):
            which = {0xf0: 0, 0xf2: 1, 0xfb: 2}[op]
            value = take(1)[0]
            values[which] = value if which == 0 else value & 15
        elif op in (0xf1, 0xf3, 0xfc):
            values[{0xf1: 0, 0xf3: 1, 0xfc: 2}[op]] = 255
        elif op in (0xf5, 0xf6, 0xf7):
            x, y = absolute()
            while peek() < 0xf0:
                old = x, y
                if op == 0xf6:
                    x, y = absolute()
                elif op == 0xf5:
                    dy, dx = take(2)
                    y += -(dy & 127) if dy & 128 else dy
                    x += dx-256 if dx & 128 else dx
                else:
                    value = take(1)[0]
                    x += -((value >> 4) & 7) if value & 128 else value >> 4
                    y += -(value & 7) if value & 8 else value & 7
                line(old, (x, y))
        elif op == 0xf8:
            while peek() < 0xf0:
                fill(*absolute())
        elif op == 0xfe:
            sub = take(1)[0]
            if sub == 2:
                colors = palette(take(1284), colors)
            elif sub == 3:
                take(4)  # Priority-band thresholds do not change visual pixels.
            elif sub == 4:
                take(14)
            elif sub == 1:
                x, y = absolute()
                size = struct.unpack('<H', take(2))[0]
                cel = take(size)
                if len(cel) < 8:
                    raise FormatError('Truncated embedded picture cel')
                width, height, _, _, clear, _ = struct.unpack_from('<HHbbBB', cel)
                if not 0 < width <= WIDTH or not 0 < height <= HEIGHT:
                    raise FormatError('Unsafe embedded picture dimensions')
                pixels, end = decode_rle(cel, 8, width*height, clear)
                if end != len(cel):
                    raise FormatError('Unexpected trailing embedded cel data')
                for cy in range(height):
                    for cx in range(width):
                        px, py = x+cx, y+cy
                        if 0 <= px < WIDTH and 0 <= py < HEIGHT:
                            index = py*WIDTH+px
                            value = pixels[cy*width+cx]
                            if value != 255 and planes[1][index] == 0:
                                planes[0][index] = value
                embedded.append({'x': x, 'y': y, 'width': width, 'height': height})
            else:
                raise FormatError(f'Unsupported SCI picture extension {sub} at {at}')
        elif op == 0xff:
            if pos != len(raw):
                raise FormatError('Unexpected data after SCI picture terminator')
            return {'pixels': bytes(planes[0]), 'colors': colors, 'commands': len(commands),
                    'embedded_cels': embedded, 'width': WIDTH, 'height': HEIGHT}
        else:
            raise FormatError(f'Unsupported SCI picture opcode {op:#x} at {at}')
    raise FormatError('SCI picture missing terminator')


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def save_png(pixels: bytes, colors: list, width: int, height: int, path: Path,
             clear: int | None = None) -> None:
    from PIL import Image
    image = Image.frombytes('P', (width, height), pixels)
    image.putpalette([value for color in colors for value in color])
    path.parent.mkdir(parents=True, exist_ok=True)
    if clear is not None:
        image.info['transparency'] = clear
        image = image.convert('RGBA')
    else:
        image = image.convert('RGB')
    image.save(path, optimize=True)


def export_assets(original: Path, output: Path) -> dict:
    if output.resolve().is_relative_to(original.resolve()):
        raise ValueError('Browser export must not write inside original/')
    _, resources, _ = read_game(original)
    base = palette(resources[(11, 999)])
    manifest = {
        'schema': 1, 'source': 'User-provided Jones in the Fast Lane DOS 1.000.060 SCI resources',
        'rights': 'Original Sierra game artwork; not licensed under the tool GPL licence.',
        'generator': 'tools/export_browser_assets.py',
        'source_digest_scope': 'SHA-256 of decompressed SCI resource payload, excluding patch header',
        'coordinate_system': {'width': WIDTH, 'height': HEIGHT, 'origin': 'top-left',
                              'pixel_aspect': 'original 320x200; display at 4:3 if desired'},
        'format_references': [
            'https://github.com/scummvm/scummvm/blob/master/engines/sci/graphics/picture.cpp',
            'https://github.com/scummvm/scummvm/blob/master/engines/sci/graphics/screen.cpp'],
        'scenes': [], 'views': [],
    }
    for (typ, number), raw in sorted(resources.items()):
        if typ != 1:
            continue
        frame = decode_picture(raw, base)
        name = f'scenes/pic_{number:04d}.png'
        save_png(frame['pixels'], frame['colors'], WIDTH, HEIGHT, output/name)
        manifest['scenes'].append({
            'id': number, 'name': SCENE_NAMES.get(number, f'picture_{number}'), 'file': name,
            'width': WIDTH, 'height': HEIGHT, 'source_resource': f'pic.{number:03d}',
            'source_sha256': sha256(raw), 'png_sha256': sha256((output/name).read_bytes()),
            'embedded_cels': frame['embedded_cels'], 'drawing_commands': frame['commands'],
        })
    for number, label in SELECTED_VIEWS.items():
        raw = resources[(0, number)]
        frame = view_frames(raw, base)[0]
        name = f'views/view_{number:04d}.png'
        save_png(frame['pixels'], frame['colors'], frame['width'], frame['height'], output/name, frame['clear'])
        manifest['views'].append({
            'id': number, 'name': label, 'file': name, 'loop': frame['loop'], 'cel': frame['cel'],
            'width': frame['width'], 'height': frame['height'],
            'source_resource': f'view.{number:03d}', 'source_sha256': sha256(raw),
            'png_sha256': sha256((output/name).read_bytes()),
        })
    (output/'manifest.json').write_text(json.dumps(manifest, indent=2)+'\n')
    return manifest


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--original', type=Path, default=ROOT/'original')
    parser.add_argument('--out', type=Path, default=ROOT/'web/assets')
    args = parser.parse_args()
    manifest = export_assets(args.original, args.out)
    print(f"Exported {len(manifest['scenes'])} original pictures and {len(manifest['views'])} selected views to {args.out}")
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
