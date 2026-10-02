"""SCI1 VGA view export and fixed-size PNG-to-view patching.
SPDX-License-Identifier: GPL-3.0-or-later
Pillow is needed only for PNG work. Animation timing belongs to game scripts.
"""
from __future__ import annotations
from pathlib import Path
import struct
from sci_core import FormatError

def word(data: bytes, at: int) -> int:
    if at<0 or at+2>len(data):raise FormatError('Graphics word out of bounds')
    return struct.unpack_from('<H',data,at)[0]

def palette(data: bytes, base: list[tuple[int,int,int]] | None=None) -> list[tuple[int,int,int]]:
    if len(data)<37:raise FormatError('Palette header truncated')
    colors=list(base) if base is not None else [(0,0,0)]*256
    if data[:2]==b'\0\1' or (data[:2]==b'\0\0' and word(data,29)==0):
        pos,start,count,kind=260,0,256,0
    else:
        pos,start,count,kind=37,data[25],word(data,29),data[32]
    if kind not in (0,1) or start+count>256:
        raise FormatError('Unsupported palette layout')
    if pos+count*(3 if kind else 4)>len(data):raise FormatError('Palette colors truncated')
    for i in range(start,start+count):
        used=1 if kind else data[pos]
        if not kind:pos+=1
        rgb=tuple(data[pos:pos+3]);pos+=3
        if used:colors[i]=rgb
    return colors

def decode_rle(data: bytes, pos: int, count: int, clear: int) -> tuple[bytes,int]:
    out=bytearray()
    while len(out)<count:
        if pos>=len(data):raise FormatError('Truncated VGA cel')
        op=data[pos];pos+=1;kind=op&192;n=op&63
        if kind in (0,64):
            n=op
            if pos+n>len(data):raise FormatError('Truncated VGA literal run')
            run=data[pos:pos+n];pos+=n
        elif kind==128:
            if pos>=len(data):raise FormatError('Truncated VGA repeat run')
            run=bytes([data[pos]])*n;pos+=1
        else:run=bytes([clear])*n
        if not run:raise FormatError('Zero-length VGA run')
        # Real SCI interpreters clip the final run to the cel boundary.
        out.extend(run[:count-len(out)])
    return bytes(out),pos

def encode_rle(pixels: bytes, clear: int) -> bytes:
    """Simple bounded runs; valid but not intended to reproduce original packing."""
    out=bytearray();i=0
    while i<len(pixels):
        color=pixels[i];j=i+1
        while j<len(pixels) and pixels[j]==color and j-i<63:j+=1
        count=j-i
        if color==clear:out.append(192+count)
        elif count>=3:out.extend((128+count,color))
        else:
            # Literal runs of at most 127 pixels.
            j=i
            while j<len(pixels) and j-i<127:
                if pixels[j]==clear:break
                if j+2<len(pixels) and pixels[j]==pixels[j+1]==pixels[j+2]:break
                j+=1
            if j==i:j=i+1
            out.append(j-i);out.extend(pixels[i:j])
        i=j
    return bytes(out)

def view_frames(raw: bytes, base: list[tuple[int,int,int]]) -> list[dict]:
    if len(raw)<8:raise FormatError('View header truncated')
    loop_count=raw[0];mirror=word(raw,2);pal_offset=word(raw,6)
    colors=palette(raw[pal_offset:],base) if pal_offset not in (0,256) else list(base)
    result=[]
    for loop in range(loop_count):
        lo=word(raw,8+2*loop);cel_count=word(raw,lo)
        for cel in range(cel_count):
            co=word(raw,lo+4+2*cel)
            if co+8>len(raw):raise FormatError('Cel header truncated')
            w,h,dx,dy,clear,unknown=struct.unpack_from('<HHbbBB',raw,co)
            if not 0<w<=2048 or not 0<h<=2048:raise FormatError('Unsafe cel dimensions')
            if raw[1]&64:
                pixels=raw[co+8:co+8+w*h]
                if len(pixels)!=w*h:raise FormatError('Uncompressed cel truncated')
            else:pixels,_=decode_rle(raw,co+8,w*h,clear)
            mirrored=bool(mirror&(1<<loop))
            if mirrored:pixels=b''.join(pixels[y*w:(y+1)*w][::-1] for y in range(h))
            result.append({'loop':loop,'cel':cel,'width':w,'height':h,'dx':dx,'dy':dy,
                           'clear':clear,'mirror':mirrored,'loop_offset':lo,'cel_offset':co,
                           'palette_offset':pal_offset,'pixels':pixels,'colors':colors})
    return result

def export_views(resources: dict[tuple[int,int],bytes], target: Path) -> list[dict]:
    from PIL import Image
    base=palette(resources[(11,999)]);manifest=[]
    for (typ,number),raw in sorted(resources.items()):
        if typ!=0:continue
        dest=target/f'view_{number:04d}';dest.mkdir(parents=True,exist_ok=True)
        for f in view_frames(raw,base):
            image=Image.frombytes('P',(f['width'],f['height']),f['pixels'])
            image.putpalette([channel for color in f['colors'] for channel in color])
            name=f"loop_{f['loop']:02d}_cel_{f['cel']:02d}.png"
            image.save(dest/name,transparency=f['clear'])
            meta={k:v for k,v in f.items() if k not in ('pixels','colors')}
            meta.update(view=number,file=f'view_{number:04d}/{name}',palette_source='embedded' if f['palette_offset'] not in (0,256) else 'palette.999')
            manifest.append(meta)
    return manifest

def replace_cel(raw: bytes, base: list[tuple[int,int,int]], loop: int, cel: int, png: Path, quantize: bool=False) -> bytes:
    """Preserve original loops, palette, displacement and other cels.
    Append a private loop/cel so shared loop pointers are not edited accidentally.
    PNG must have the original dimensions. New colors require --quantize.
    """
    from PIL import Image
    matches=[f for f in view_frames(raw,base) if f['loop']==loop and f['cel']==cel]
    if len(matches)!=1:raise FormatError('Requested loop/cel not found')
    frame=matches[0];image=Image.open(png)
    if image.size!=(frame['width'],frame['height']):raise FormatError('Replacement PNG must keep original width and height')
    colors=frame['colors'];clear=frame['clear']
    original_palette=[v for c in colors for v in c]
    if image.mode=='P' and image.getpalette()[:768]==original_palette and image.info.get('transparency')==clear:
        pixels=image.tobytes()
    else:
        rgba=image.convert('RGBA');cache={};pixels=bytearray()
        exact={}
        for i,c in enumerate(colors):
            if i!=clear:exact.setdefault(c,i)
        for r,g,b,a in rgba.getdata():
            if a not in (0,255):raise FormatError('Semi-transparent pixels unsupported; use fully opaque or transparent pixels')
            if a==0:pixels.append(clear);continue
            key=(r,g,b)
            if key in exact:index=exact[key]
            elif not quantize:raise FormatError(f'Color {key} not in existing palette; pass --quantize to map to nearest existing color')
            elif key in cache:index=cache[key]
            else:
                index=min((i for i in range(256) if i!=clear),key=lambda i:sum((colors[i][j]-key[j])**2 for j in range(3)))
                cache[key]=index
            pixels.append(index)
        pixels=bytes(pixels)
    w,h=frame['width'],frame['height']
    if frame['mirror']:pixels=b''.join(pixels[y*w:(y+1)*w][::-1] for y in range(h))
    lo=frame['loop_offset'];count=word(raw,lo)
    loop_data=bytearray(raw[lo:lo+4+2*count])
    new_loop=len(raw);new_cel=new_loop+len(loop_data)
    payload=pixels if raw[1]&64 else encode_rle(pixels,clear)
    co=frame['cel_offset'];cel_data=raw[co:co+8]+payload
    if new_cel+len(cel_data)>65531:raise FormatError('Patched view exceeds early-SCI 16-bit resource limit')
    struct.pack_into('<H',loop_data,4+2*cel,new_cel)
    out=bytearray(raw)
    struct.pack_into('<H',out,8+2*loop,new_loop)
    out.extend(loop_data);out.extend(cel_data)
    return bytes(out)
