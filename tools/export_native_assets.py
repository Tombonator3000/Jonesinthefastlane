#!/usr/bin/env python3
"""Export original SCI pixels, glyphs and metadata for the native TypeScript renderer.

SPDX-License-Identifier: GPL-3.0-or-later
Original Sierra assets retain their original rights. No interpreter is included.
Format references: pinned ScummVM 2026.3.0 graphics/{view,picture,scifont,cursor}.cpp.
"""
from __future__ import annotations
import argparse
import base64
import hashlib
import json
from pathlib import Path
import struct
from sci_core import FormatError, read_game
from sci_graphics import decode_rle, palette, view_frames
from export_browser_assets import save_png
ROOT = Path(__file__).resolve().parents[1]
WIDTH, HEIGHT = 320, 200
SCUMMVM_COMMIT = 'fed42f2068dcafc6aafa1c28c77e4c88def74b66'

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
    updates = []
    bands = None

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
                pal = take(1284)
                colors = palette(pal, colors)
                updates = palette_updates(pal)
            elif sub == 3:
                bands = list(struct.unpack('<HH', take(4)))
            elif sub == 4:
                bands = list(take(14))
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
                    'embedded_cels': embedded, 'width': WIDTH, 'height': HEIGHT,
                    'priority': bytes(planes[1]), 'control': bytes(planes[2]),
                    'paletteUpdates': updates, 'priorityBands': bands}
        else:
            raise FormatError(f'Unsupported SCI picture opcode {op:#x} at {at}')
    raise FormatError('SCI picture missing terminator')

def b64(data: bytes) -> str:
    return base64.b64encode(data).decode('ascii')


def provenance(kind: str, number: int, raw: bytes) -> dict:
    return {'resource': f'{kind}.{number:03d}', 'sha256': hashlib.sha256(raw).hexdigest()}


def decode_font(raw: bytes) -> dict:
    if len(raw) < 6:
        raise FormatError('Truncated font header')
    count, height = struct.unpack_from('<HH', raw, 2)
    if not 0 < count <= 256 or not 0 < height <= 256 or len(raw) < 6 + count * 2:
        raise FormatError('Invalid font dimensions/table')
    glyphs = []
    for code in range(count):
        offset = struct.unpack_from('<H', raw, 6 + code * 2)[0]
        if offset + 2 > len(raw):
            raise FormatError(f'Font glyph {code} offset out of bounds')
        width, glyph_height = raw[offset:offset+2]
        stride = (width + 7) // 8
        end = offset + 2 + stride * glyph_height
        if end > len(raw):
            raise FormatError(f'Truncated font glyph {code}')
        packed = raw[offset+2:end]
        pixels = bytes(1 if packed[y*stride+x//8] & (0x80 >> (x % 8)) else 0
                       for y in range(glyph_height) for x in range(width))
        glyphs.append({'code': code, 'width': width, 'height': glyph_height,
                       'advance': width, 'bits': b64(pixels)})
    return {'lineHeight': height, 'charCount': count, 'chars': glyphs}


def decode_cursor(raw: bytes) -> dict:
    if len(raw) != 68:
        raise FormatError(f'SCI1 cursor must contain 68 bytes, got {len(raw)}')
    hot_x, hot_y = struct.unpack_from('<HH', raw)
    if hot_x >= 16 or hot_y >= 16:
        raise FormatError('Cursor hotspot outside bitmap')
    # Separate transparency index avoids confusing opaque white with mask data.
    mapping = [0, 255, 254, 7]
    pixels = bytearray()
    for y in range(16):
        mask_a = struct.unpack_from('<H', raw, 4+y*2)[0]
        mask_b = struct.unpack_from('<H', raw, 36+y*2)[0]
        for x in range(16):
            which = ((mask_a >> (15-x) & 1) << 1) | (mask_b >> (15-x) & 1)
            pixels.append(mapping[which])
    return {'width': 16, 'height': 16, 'hotspotX': hot_x, 'hotspotY': hot_y,
            'clear': 254, 'pixels': b64(pixels)}


def palette_updates(raw: bytes) -> list[list[int]]:
    colors = palette(raw)
    if raw[:2] == b'\0\1' or (raw[:2] == b'\0\0' and struct.unpack_from('<H', raw, 29)[0] == 0):
        pos, start, count, kind = 260, 0, 256, 0
    else:
        pos, start, count, kind = 37, raw[25], struct.unpack_from('<H', raw, 29)[0], raw[32]
    result = []
    for i in range(start, start+count):
        if kind or raw[pos]:
            result.append([i, *colors[i], 1 if kind else raw[pos]])
        pos += 3 if kind else 4
    return result


def export_assets(original: Path, output: Path) -> dict:
    from PIL import Image
    if output.resolve().is_relative_to(original.resolve()):
        raise ValueError('Never write native exports into original/')
    _, resources, _ = read_game(original)
    base = palette(resources[(11, 999)])
    output.mkdir(parents=True, exist_ok=True)
    result = {'schema': 1, 'game': 'Jones in the Fast Lane DOS 1.000.060',
              'rights': 'Original Sierra resources; not covered by the tool GPL licence.',
              'formatReference': f'https://github.com/scummvm/scummvm/tree/{SCUMMVM_COMMIT}/engines/sci/graphics',
              'width': WIDTH, 'height': HEIGHT, 'defaultPortTop': 0,
              'encoding': 'base64 uint8 pixels, row-major; font bits are unpacked 0/1 bytes',
              'codePage': [bytes([i]).decode('cp437') for i in range(256)],
              'palette': base, 'palettes': {}, 'pics': {}, 'views': {}, 'fonts': {}, 'cursors': {}, 'texts': {}}
    for (kind, number), raw in sorted(resources.items()):
        key = str(number)
        if kind == 0:
            frames = view_frames(raw, base)
            pal_at = struct.unpack_from('<H', raw, 6)[0]
            view = {'id': number, **provenance('view', number, raw), 'loops': [],
                    'paletteUpdates': palette_updates(raw[pal_at:]) if pal_at not in (0,256) else []}
            for f in frames:
                while len(view['loops']) <= f['loop']:
                    view['loops'].append({'cels': []})
                name = f"views/{number:04d}/{f['loop']:02d}_{f['cel']:02d}.png"
                save_png(f['pixels'], f['colors'], f['width'], f['height'], output/name, f['clear'])
                # Existing artwork exporter preserves raw offsets; native positioning follows SCI1.
                dx = -f['dx'] if f['mirror'] else f['dx']
                dy = f['dy'] & 255
                view['loops'][f['loop']]['cels'].append({
                    'width': f['width'], 'height': f['height'], 'dx': dx, 'dy': dy,
                    'clear': f['clear'], 'mirrored': f['mirror'], 'png': name,
                    'pixels': b64(f['pixels']), 'pixelSha256': hashlib.sha256(f['pixels']).hexdigest()})
            result['views'][key] = view
        elif kind == 1:
            f = decode_picture(raw, base)
            name = f'pics/{number:04d}.png'
            save_png(f['pixels'], f['colors'], WIDTH, HEIGHT, output/name)
            result['pics'][key] = {'id': number, **provenance('pic', number, raw), 'png': name,
                                   'width': WIDTH, 'height': HEIGHT, 'pixels': b64(f['pixels']),
                                   'priority': b64(f['priority']), 'control': b64(f['control']),
                                   'palette': f['colors'], 'paletteUpdates': f['paletteUpdates'],
                                   'priorityBands': f['priorityBands'], 'embeddedCels': f['embedded_cels']}
        elif kind == 3:
            # Resource text indexes refer to these exact NUL-separated byte strings.
            entries = raw.split(b'\0')
            if entries and entries[-1] == b'':
                entries.pop()
            result['texts'][key] = [value.decode('cp437') for value in entries]
        elif kind == 7:
            font = decode_font(raw)
            max_w = max(c['width'] for c in font['chars'])
            max_h = max(c['height'] for c in font['chars'])
            atlas = Image.new('RGBA', (max_w*16, max_h*((font['charCount']+15)//16)), (0,0,0,0))
            for c in font['chars']:
                c['atlasX'] = (c['code'] % 16)*max_w
                c['atlasY'] = (c['code'] // 16)*max_h
                bits = base64.b64decode(c['bits'])
                for y in range(c['height']):
                    for x in range(c['width']):
                        if bits[y*c['width']+x]:
                            atlas.putpixel((c['atlasX']+x,c['atlasY']+y), (255,255,255,255))
            name = f'fonts/{number:04d}.png'
            (output/name).parent.mkdir(parents=True,exist_ok=True)
            atlas.save(output/name, optimize=True)
            result['fonts'][key] = {'id': number, **provenance('font', number, raw),
                                    'png': name, 'atlasWidth': atlas.width, 'atlasHeight': atlas.height, **font}
        elif kind == 8:
            cursor = decode_cursor(raw)
            name = f'cursors/{number:04d}.png'
            # SCI cursor colors are hardcoded by the video driver, not an active scene palette.
            colors = [(0,0,0)]*256
            colors[255] = (255,255,255)
            colors[7] = (170,170,170)
            save_png(base64.b64decode(cursor['pixels']), colors, 16,16,output/name,254)
            result['cursors'][key] = {'id': number, **provenance('cursor',number,raw), 'png':name,**cursor}
        elif kind == 11:
            result['palettes'][key] = {'id': number, **provenance('palette',number,raw),
                                       'colors': palette(raw,base), 'updates':palette_updates(raw)}
    result['counts'] = {'views':len(result['views']), 'cels':sum(len(loop['cels']) for view in result['views'].values() for loop in view['loops']),
                        'pics':len(result['pics']), 'fonts':len(result['fonts']),
                        'cursors':len(result['cursors']), 'texts':len(result['texts']), 'palettes':len(result['palettes'])}
    (output/'manifest.json').write_text(json.dumps(result,separators=(',',':'),ensure_ascii=True)+'\n')
    return result


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--original',type=Path,default=ROOT/'original')
    parser.add_argument('--out',type=Path,default=ROOT/'native/public/assets')
    args = parser.parse_args()
    print(json.dumps(export_assets(args.original,args.out)['counts']))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
