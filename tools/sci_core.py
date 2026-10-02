"""Jones / early SCI1 resource reader, writer and decompressor.
SPDX-License-Identifier: GPL-3.0-or-later
Format references and acknowledgements: ../docs/SOURCES.md.
Original Sierra game resources are not covered by this tool licence.
"""
from __future__ import annotations
from dataclasses import dataclass, asdict
from pathlib import Path
import hashlib
import struct

TYPES = ('view','pic','script','text','sound','memory','vocab','font','cursor','patch','bitmap','palette')

class FormatError(ValueError):
    """Invalid or unsupported data; never silently guess a different format."""

class Bits:
    def __init__(self, data: bytes):
        self.data = data
        self.bit = 0
    def get(self, count: int) -> int:
        if self.bit + count > len(self.data) * 8:
            raise FormatError('Truncated MSB-first bitstream')
        result = 0
        for _ in range(count):
            result = (result << 1) | ((self.data[self.bit // 8] >> (7-self.bit % 8)) & 1)
            self.bit += 1
        return result

def decompress_lzw1(data: bytes, expected: int) -> bytes:
    """SCI1 MSB-first LZW, including its early code-width change."""
    bits = Bits(data)
    output = bytearray()
    table: list[tuple[int, int] | None] = [None] * 4096
    width, next_code, limit = 9, 258, 511
    while len(output) < expected:
        code = bits.get(width)
        if code == 257:
            break
        if code == 256:
            width, next_code, limit = 9, 258, 511
            continue
        if code >= next_code:
            raise FormatError(f'LZW code {code} outside table of {next_code}')
        start = len(output)
        if code < 256:
            output.append(code)
        else:
            entry = table[code]
            if entry is None:
                raise FormatError('LZW uninitialized dictionary entry')
            offset, length = entry
            for i in range(length):
                if len(output) == expected:
                    break
                if offset + i >= len(output):
                    raise FormatError('LZW reference ahead of output')
                output.append(output[offset+i])
        if next_code < 4096:
            if next_code == limit and width < 12:
                width += 1
                limit = (1 << width) - 1
            table[next_code] = (start, len(output) - start + 1)
            next_code += 1
    if len(output) != expected:
        raise FormatError(f'LZW output length {len(output)} != expected {expected}')
    return bytes(output)

def decompress_huffman(data: bytes, expected: int) -> bytes:
    if len(data) < 2:
        raise FormatError('Missing Huffman header')
    count, terminator = data[0], data[1] | 256
    if count == 0 or 2 + 2*count > len(data):
        raise FormatError('Invalid Huffman node table')
    nodes = data[2:2+2*count]
    bits = Bits(data[2+2*count:])
    output = bytearray()
    while len(output) < expected:
        index, steps = 0, 0
        while nodes[index+1]:
            branch = bits.get(1)
            step = (nodes[index+1] & 15) if branch else (nodes[index+1] >> 4)
            if branch and step == 0:
                value = bits.get(8) | 256
                break
            if step == 0:
                raise FormatError('Huffman self-reference')
            index += step * 2
            steps += 1
            if index + 1 >= len(nodes) or steps > count:
                raise FormatError('Huffman node outside table')
        else:
            value = nodes[index]
        if value == terminator:
            break
        output.append(value & 255)
    if len(output) != expected:
        raise FormatError(f'Huffman output length {len(output)} != expected {expected}')
    return bytes(output)

@dataclass(frozen=True)
class Record:
    type: int
    number: int
    volume: int
    offset: int
    packed: int
    unpacked: int
    compression: int
    @property
    def key(self) -> tuple[int, int]:
        return self.type, self.number
    @property
    def patch_name(self) -> str:
        return f'{TYPES[self.type]}.{self.number:03d}'
    @property
    def raw_name(self) -> str:
        return f'{self.type:02d}_{self.number:04d}.bin'

def casefile(root: Path, name: str) -> Path:
    matches = [p for p in root.iterdir() if p.is_file() and p.name.lower() == name.lower()]
    if len(matches) != 1:
        raise FormatError(f'Expected exactly one {name} in {root}; found {len(matches)}')
    return matches[0]

def read_game(root: Path) -> tuple[list[Record], dict[tuple[int,int],bytes], list[dict]]:
    mapping = casefile(root, 'resource.map').read_bytes()
    if len(mapping) % 6:
        raise FormatError('This tool expects the 6-byte early-SCI resource map')
    records: list[Record] = []
    volumes: dict[int, bytes] = {}
    resources: dict[tuple[int,int],bytes] = {}
    duplicates: list[dict] = []
    terminated = False
    for p in range(0, len(mapping), 6):
        rid, location = struct.unpack_from('<HI', mapping, p)
        if rid == 65535:
            if location != 0xffffffff or p+6 != len(mapping):
                raise FormatError('Invalid map terminator or data after terminator')
            terminated = True
            break
        typ, number = rid >> 11, rid & 2047
        if typ >= len(TYPES):
            raise FormatError(f'Unsupported resource type {typ}')
        volume, offset = location >> 26, location & 0x3ffffff
        if volume not in volumes:
            volumes[volume] = casefile(root, f'resource.{volume:03d}').read_bytes()
        data = volumes[volume]
        if offset+8 > len(data):
            raise FormatError(f'Resource header outside volume {volume} at {offset}')
        actual, packed_field, unpacked, method = struct.unpack_from('<4H', data, offset)
        if actual != rid or packed_field < 4 or offset+4+packed_field > len(data):
            raise FormatError(f'Map/header mismatch at map offset {p}')
        packed = packed_field - 4
        payload = data[offset+8:offset+8+packed]
        if method == 0:
            result = payload
        elif method == 1:
            result = decompress_huffman(payload, unpacked)
        elif method == 2:
            result = decompress_lzw1(payload, unpacked)
        else:
            raise FormatError(f'Unsupported compression method {method}')
        if len(result) != unpacked:
            raise FormatError(f'Resource size mismatch: {typ}:{number}')
        r = Record(typ, number, volume, offset, packed, unpacked, method)
        records.append(r)
        if r.key in resources:
            identical = result == resources[r.key]
            duplicates.append({'type':typ,'number':number,'volume':volume,'identical':identical})
            if not identical:
                raise FormatError(f'Conflicting versions of resource {r.patch_name}; preserve and resolve manually')
        else:
            resources[r.key] = result
    if not terminated:
        raise FormatError('No map terminator')
    return records, resources, duplicates

def make_patch(typ: int, raw: bytes) -> bytes:
    if typ < 0 or typ >= len(TYPES):
        raise FormatError('Unsupported patch resource type')
    return bytes([0x80 | typ, 0]) + raw

def parse_patch(path: Path) -> tuple[tuple[int,int],bytes]:
    try:
        kind, num = path.name.lower().rsplit('.', 1)
        typ = TYPES.index(kind)
        number = int(num)
    except ValueError as error:
        raise FormatError(f'Invalid SCI patch name: {path.name}') from error
    if not 0 <= number <= 2047:
        raise FormatError('Resource number outside early-SCI range')
    data = path.read_bytes()
    if len(data) < 2 or (data[0] & 127) != typ or data[1] != 0:
        raise FormatError(f'Invalid/unsupported two-byte patch header: {path}')
    return (typ, number), data[2:]

def write_repacked(records: list[Record], resources: dict[tuple[int,int],bytes], target: Path) -> None:
    """Experimental method-0 repack. Same entry order, disk IDs and duplicates.
    Byte-level round-trip tested; not a guarantee of original DOS runtime behaviour.
    """
    if target.exists() and any(target.iterdir()):
        raise FormatError(f'Refusing to overwrite nonempty output directory {target}')
    target.mkdir(parents=True, exist_ok=True)
    volumes: dict[int,bytearray] = {}
    mapping = bytearray()
    for r in records:
        raw = resources[r.key]
        if len(raw) > 65531:
            raise FormatError(f'{r.patch_name}: too large for method-0 header')
        volume = volumes.setdefault(r.volume, bytearray())
        offset = len(volume)
        if offset >= 1 << 26:
            raise FormatError('Volume exceeds 26-bit offset limit')
        rid = r.type * 2048 + r.number
        mapping.extend(struct.pack('<HI', rid, (r.volume << 26) | offset))
        volume.extend(struct.pack('<4H', rid, len(raw)+4, len(raw), 0))
        volume.extend(raw)
    mapping.extend(b'\xff'*6)
    (target/'resource.map').write_bytes(mapping)
    for n, data in volumes.items():
        (target/f'resource.{n:03d}').write_bytes(data)

def digest(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()
