"""Lossless early-SCI1 disassembly, fixed-layout assembly and script metadata.
SPDX-License-Identifier: GPL-3.0-or-later
This is NOT a high-level SCI source decompiler or a relocating compiler.
"""
from __future__ import annotations
from pathlib import Path
import re
import struct
from sci_core import FormatError

NAMES = '''bnot add sub mul div mod shr shl xor and or neg not eq? ne? gt? ge? lt? le? ugt? uge? ult? ule? bt bnt jmp ldi push pushi toss dup link call callk callb calle ret send dummy26 dummy27 class dummy29 self super &rest lea selfID dummy2f pprev pToa aTop pTos sTop ipToa dpToa ipTos dpTos lofsa lofss push0 push1 push2 pushSelf line lag lal lat lap lsg lsl lst lsp lagi lali lati lapi lsgi lsli lsti lspi sag sal sat sap ssg ssl sst ssp sagi sali sati sapi ssgi ssli ssti sspi +ag +al +at +ap +sg +sl +st +sp +agi +ali +ati +api +sgi +sli +sti +spi -ag -al -at -ap -sg -sl -st -sp -agi -ali -ati -api -sgi -sli -sti -spi'''.split()
assert len(NAMES) == 128
# v = byte/word from opcode bit 0; b = always byte; w = always word.
FORMATS = {op: 'v' for op in range(0x40,0x80)}
for op in [0x17,0x18,0x19,0x1a,0x1c,0x1f,0x28,0x2c,0x39,0x3a,*range(0x31,0x39)]:
    FORMATS[op] = 'v'
FORMATS.update({0x20:'vb',0x21:'vb',0x22:'vb',0x23:'vvb',0x25:'b',0x2a:'b',0x2b:'vb',0x2d:'vv',0x3f:'w'})
INVALID = {0x26,0x27,0x29,0x2f}
SECTION_NAMES = {0:'end',1:'object',2:'code',3:'synonyms',4:'said',5:'strings',6:'class',7:'exports',8:'relocations',9:'preload',10:'locals'}

def word(b: bytes, at: int) -> int:
    if at < 0 or at+2 > len(b):
        raise FormatError('Word outside script')
    return struct.unpack_from('<H', b, at)[0]

def cstring(b: bytes, at: int) -> str:
    if at < 0 or at >= len(b):
        raise FormatError('String address outside resource')
    end = b.find(b'\0', at)
    if end == -1:
        raise FormatError('Unterminated script string')
    return b[at:end].decode('cp437')

def sections(raw: bytes) -> list[dict]:
    result = []
    p = 0
    while p+2 <= len(raw):
        kind = word(raw, p)
        if kind == 0:
            result.append({'type':0,'name':'end','offset':p,'size':len(raw)-p})
            return result
        size = word(raw,p+2)
        if kind not in SECTION_NAMES or size < 4 or p+size > len(raw):
            raise FormatError(f'Invalid script section at {p:04x}: kind={kind}, size={size}')
        result.append({'type':kind,'name':SECTION_NAMES[kind],'offset':p,'size':size})
        p += size
    raise FormatError('Script has no terminator')

def selector_names(raw: bytes) -> list[str]:
    count = word(raw, 0) + 1
    if count*2+2 > len(raw):
        raise FormatError('Selector offset table out of bounds')
    result = []
    for i in range(count):
        offset = word(raw, 2+i*2)
        length = word(raw,offset)
        if offset+2+length > len(raw):
            raise FormatError('Selector string out of bounds')
        result.append(raw[offset+2:offset+2+length].decode('cp437'))
    return result

def script_metadata(raw: bytes, selectors: list[str]) -> dict:
    secs = sections(raw)
    objects, strings, exports, locals_ = [], [], [], []
    for s in secs:
        kind, start, end = s['type'], s['offset']+4, s['offset']+s['size']
        if kind in (1,6):
            count = word(raw,start+6)
            properties = [word(raw,start+8+2*i) for i in range(count)]
            method_at = start+8+count*(4 if kind==6 else 2)
            mcount = word(raw,method_at)
            if method_at+4+4*mcount > end:
                raise FormatError(f'Object method table exceeds block at {s["offset"]:04x}')
            methods = []
            for i in range(mcount):
                selector = word(raw,method_at+2+2*i)
                target = word(raw,method_at+4+2*mcount+2*i)
                methods.append({'selector':selector,'name':selectors[selector] if selector<len(selectors) else f'selector_{selector}', 'address':target})
            obj = {'kind':s['name'],'section_offset':s['offset'],'address':start+8,
                   'name':cstring(raw,properties[3]) if len(properties)>3 and properties[3] else '',
                   'species':properties[0] if properties else None,
                   'superclass':properties[1] if len(properties)>1 else None,
                   'properties':properties,'methods':methods}
            if kind==6:
                obj['property_selectors'] = [word(raw,start+8+count*2+i*2) for i in range(count)]
            objects.append(obj)
        elif kind==7:
            n=word(raw,start)
            if start+2+2*n>end:
                raise FormatError('Export table outside section')
            exports=[word(raw,start+2+2*i) for i in range(n)]
        elif kind==5:
            p=start
            while p<end:
                stop=raw.find(b'\0',p,end)
                if stop==-1:
                    strings.append({'offset':p,'text':raw[p:end].decode('cp437'),'terminated':False})
                    break
                strings.append({'offset':p,'text':raw[p:stop].decode('cp437'),'terminated':True})
                p=stop+1
        elif kind==10:
            if (end-start)%2:
                raise FormatError('Odd local-variable block size')
            locals_=[word(raw,p) for p in range(start,end,2)]
    return {'sections':secs,'objects':objects,'exports':exports,'strings':strings,'locals':locals_}

def instruction(raw: bytes, pos: int, end: int) -> tuple[int,str,list[int],list[int]]:
    ext=raw[pos];op=ext>>1
    if op in INVALID or ext==0x7d:
        # Debug file opcode contains a NUL string. Preserve it as raw data;
        # this conservative path avoids confusing it with ordinary pushSelf.
        if ext==0x7d:
            stop=raw.find(b'\0',pos+1,end)
            if stop>=0: return stop+1,'.hex',list(raw[pos:stop+1]),[]
        return pos+1,'.hex',[ext],[]
    p=pos+1;args=[];widths=[]
    for fmt in FORMATS.get(op,''):
        width=(1 if ext&1 else 2) if fmt=='v' else (1 if fmt=='b' else 2)
        if p+width>end:
            return end,'.hex',list(raw[pos:end]),[]
        args.append(int.from_bytes(raw[p:p+width],'little'));widths.append(width);p+=width
    return p,NAMES[op]+('.b' if ext&1 else '.w'),args,widths

def disassemble(raw: bytes, number: int, meta: dict, selectors: list[str], kernels: list[str]) -> tuple[str,dict]:
    lines=[f'; SCI1 script {number:03d}: fixed-layout, lossless disassembly.',
           '; Not original high-level source. .hex holds headers, tables and strings.',
           '; Edit immediate operands without changing instruction widths or addresses.',
           '; The assembler rejects layout changes; it does not relocate jumps/pointers.',
           f'; Expected size: {len(raw)} bytes.']
    labels={}
    for obj in meta['objects']:
        labels.setdefault(obj['address'],[]).append(obj['name'] or 'unnamed-object')
        for m in obj['methods']:
            labels.setdefault(m['address'],[]).append(f"{obj['name']}::{m['name']}")
    for i,a in enumerate(meta['exports']):labels.setdefault(a,[]).append(f'export_{i}')
    count=0;starts=set();branches=[];raw_code=0
    def emit_hex(start:int,end:int) -> None:
        for p in range(start,end,16):
            chunk=raw[p:min(p+16,end)]
            text=''.join(chr(c) if 32<=c<127 else '.' for c in chunk)
            lines.append(f'@{p:04x} .hex {chunk.hex(" ")} ; {text}')
    for s in meta['sections']:
        p=s['offset'];end=p+s['size']
        lines.append(f"\n; {s['name'].upper()} @0x{p:04x} size={s['size']}")
        if s['type']!=2:
            emit_hex(p,end);continue
        emit_hex(p,p+4);p+=4
        while p<end:
            if p in labels:lines.append('; ' + ' | '.join(labels[p]))
            stop,mnem,args,widths=instruction(raw,p,end)
            if mnem=='.hex':
                emit_hex(p,stop);raw_code+=stop-p;p=stop;continue
            starts.add(p);count+=1
            text=' '.join(f'0x{arg:0{width*2}x}' for arg,width in zip(args,widths))
            comments=[];op=raw[p]>>1
            if op in (0x17,0x18,0x19,0x20):
                width=widths[0];rel=args[0]
                if rel&(1<<(width*8-1)):rel-=1<<(width*8)
                target=stop+rel;branches.append((p,target));comments.append(f'target @0x{target:04x}')
            if op==0x21 and args[0]<len(kernels):comments.append(kernels[args[0]])
            if op in (0x39,0x3a) and args[0]<len(raw):
                matches=labels.get(args[0],[])
                if matches:comments.extend(matches)
                else:
                    for st in meta['strings']:
                        if st['offset']==args[0]:comments.append(repr(st['text']));break
            if op==0x1c and args[0]<len(selectors):comments.append('possible selector: '+selectors[args[0]])
            if op>=0x40:
                scope=('global','local','temp','param')[op%4];comments.append(f'{scope}[{args[0]}]')
            suffix=' ; '+' | '.join(comments) if comments else ''
            lines.append(f'@{p:04x} {mnem:<12} {text}{suffix}'.rstrip())
            p=stop
    warnings=[{'from':p,'target':a} for p,a in branches if a not in starts]
    return '\n'.join(lines)+'\n',{'instructions':count,'raw_code_bytes':raw_code,'branch_target_warnings':warnings}

def assemble(text: str) -> bytes:
    out=bytearray()
    for lineno,line in enumerate(text.splitlines(),1):
        line=line.split(';',1)[0].strip()
        if not line:continue
        words=line.split()
        if not words[0].startswith('@') or len(words)<2:
            raise FormatError(f'Line {lineno}: expected @address directive')
        address=int(words[0][1:],16)
        if address!=len(out):
            raise FormatError(f'Line {lineno}: address {address:04x} != output {len(out):04x}; layout-changing edits are not supported')
        if words[1]=='.hex':
            try:out.extend(bytes.fromhex(' '.join(words[2:])))
            except ValueError as e:raise FormatError(f'Line {lineno}: invalid hex') from e
            continue
        try:
            name,suffix=words[1].rsplit('.',1);op=NAMES.index(name)
            if suffix not in ('b','w') or op in INVALID:raise ValueError()
            ext=op*2+(suffix=='b')
            if ext==0x7d:raise ValueError()
            fmt=FORMATS.get(op,'')
            if len(words)-2!=len(fmt):raise ValueError()
            out.append(ext)
            for typ,arg in zip(fmt,words[2:]):
                width=(1 if suffix=='b' else 2) if typ=='v' else (1 if typ=='b' else 2)
                value=int(arg,0)
                if value<0:value+=1<<(8*width)
                out.extend(value.to_bytes(width,'little'))
        except (ValueError,OverflowError) as error:
            raise FormatError(f'Line {lineno}: invalid mnemonic or operand: {line}') from error
    return bytes(out)
