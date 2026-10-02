#!/usr/bin/env python3
"""Jones decompile workbench. Run --help. SPDX-License-Identifier: GPL-3.0-or-later."""
from __future__ import annotations
from pathlib import Path
from dataclasses import asdict
from collections import Counter
import argparse
import json
import shutil
import sys
from sci_core import *
from sci_scripts import selector_names, script_metadata, disassemble, assemble

ROOT=Path(__file__).resolve().parents[1]

def save_json(path: Path, obj: object) -> None:
    path.parent.mkdir(parents=True,exist_ok=True)
    path.write_text(json.dumps(obj,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')

def extract(game: Path, out: Path) -> dict:
    records,resources,duplicates=read_game(game)
    for folder in ['extracted/raw','extracted/patches','extracted/text','source_asm','script_metadata','reports']:
        (out/folder).mkdir(parents=True,exist_ok=True)
    bykey={r.key:r for r in records}
    for key,raw in sorted(resources.items()):
        r=bykey[key]
        (out/'extracted/raw'/r.raw_name).write_bytes(raw)
        (out/'extracted/patches'/r.patch_name).write_bytes(make_patch(r.type,raw))
        if r.type==3:
            # Preserve empty entries and final terminator exactly.
            pieces=raw.split(b'\0')
            doc={'resource':r.number,'encoding':'cp437','strings':[v.decode('cp437') for v in pieces]}
            save_json(out/'extracted/text'/f'text_{r.number:03d}.json',doc)
    selectors=selector_names(resources[(6,997)])
    kernels=[v.decode('cp437') for v in resources[(6,999)].split(b'\0')]
    save_json(out/'reports/selectors.json',selectors);save_json(out/'reports/kernels.json',kernels)
    scripts=[]
    for (typ,num),raw in sorted(resources.items()):
        if typ!=2:continue
        meta=script_metadata(raw,selectors)
        text,stats=disassemble(raw,num,meta,selectors,kernels)
        if assemble(text)!=raw:raise FormatError(f'Assembly round-trip failed for script {num}')
        (out/'source_asm'/f'script_{num:03d}.sciasm').write_text(text,encoding='utf-8')
        save_json(out/'script_metadata'/f'script_{num:03d}.json',meta)
        scripts.append({'number':num,'size':len(raw),'sha256':digest(raw),**stats,
                        'objects':[o['name'] for o in meta['objects']]})
    summary={'map_entries':len(records),'unique_resources':len(resources),'identical_resource_duplicates':len(duplicates),
             'counts_by_type':{TYPES[t]:sum(1 for a,_ in resources if a==t) for t in sorted(set(t for t,_ in resources))},
             'decompression_failures':0,'scripts_roundtrip_equal':len(scripts),
             'disassembled_instructions':sum(s['instructions'] for s in scripts),
             'branch_target_warnings':sum(len(s['branch_target_warnings']) for s in scripts),
             'runtime_tested':False,'high_level_decompilation_complete':False,'modern_source_port_complete':False}
    save_json(out/'reports/resource_records.json',[{**asdict(r),'type_name':TYPES[r.type],'sha256_unpacked':digest(resources[r.key])} for r in records])
    save_json(out/'reports/resource_duplicates.json',duplicates)
    save_json(out/'reports/script_index.json',scripts)
    save_json(out/'reports/extraction_summary.json',summary)
    return summary

def safe_write(path: Path,data: bytes) -> None:
    resolved=path.resolve()
    if resolved.is_relative_to((ROOT/'original').resolve()):
        raise FormatError('Original files are protected; write to mods/ or another working directory')
    path.parent.mkdir(parents=True,exist_ok=True)
    path.write_bytes(data)

def build(original: Path, mods: Path, output: Path) -> dict:
    if output.resolve()==original.resolve() or output.resolve().is_relative_to(original.resolve()):
        raise FormatError('Build output must be separate from original files')
    if output.exists() and any(output.iterdir()):
        raise FormatError('Build output already contains files; choose a new directory')
    _,resources,_=read_game(original)
    patches=[]
    if mods.exists():
        for p in sorted(mods.iterdir()):
            if not p.is_file() or p.name.startswith('.') or p.suffix.lower()=='.md':continue
            key,raw=parse_patch(p)
            if key not in resources:raise FormatError(f'Patch {p.name} does not replace an existing resource')
            if len(raw)>65531:raise FormatError(f'Patch {p.name} is too large for early SCI')
            if key[0]==2:
                from sci_scripts import sections
                sections(raw)
            patches.append(p)
    output.mkdir(parents=True,exist_ok=True)
    for p in original.iterdir():
        if p.is_file():shutil.copy2(p,output/p.name)
    for p in patches:shutil.copy2(p,output/p.name.lower())
    return {'output':str(output),'patches':[p.name for p in patches],'runtime_tested':False}

def main() -> int:
    parser=argparse.ArgumentParser(description='Jones / SCI1 resource and low-level code workbench')
    sub=parser.add_subparsers(dest='command',required=True)
    p=sub.add_parser('verify',help='Verify originals, map and all compressed resources')
    p.add_argument('--game',type=Path,default=ROOT/'original')
    p=sub.add_parser('extract',help='Export resources, text, metadata and lossless assembly')
    p.add_argument('--game',type=Path,default=ROOT/'original');p.add_argument('--out',type=Path,default=ROOT)
    p=sub.add_parser('graphics',help='Export SCI1 view cels as indexed PNG files')
    p.add_argument('--game',type=Path,default=ROOT/'original');p.add_argument('--out',type=Path,default=ROOT/'graphics/views')
    p=sub.add_parser('assemble',help='Assemble a fixed-layout .sciasm file into a script patch')
    p.add_argument('source',type=Path);p.add_argument('--out',type=Path,required=True)
    p=sub.add_parser('text',help='Build a text patch from exported JSON; keep entry order')
    p.add_argument('source',type=Path);p.add_argument('--out',type=Path,required=True)
    p=sub.add_parser('view',help='Replace one view cel with a same-size PNG')
    p.add_argument('--id',type=int,required=True);p.add_argument('--loop',type=int,default=0);p.add_argument('--cel',type=int,default=0)
    p.add_argument('--png',type=Path,required=True);p.add_argument('--out',type=Path,required=True)
    p.add_argument('--quantize',action='store_true');p.add_argument('--game',type=Path,default=ROOT/'original')
    p.add_argument('--base-patch',type=Path,help='Use a previously edited view patch to accumulate multiple changes')
    p=sub.add_parser('build',help='Copy originals and overlay mods into a NEW working game directory')
    p.add_argument('--original',type=Path,default=ROOT/'original');p.add_argument('--mods',type=Path,default=ROOT/'mods')
    p.add_argument('--out',type=Path,default=ROOT/'build/modded')
    p=sub.add_parser('repack',help='Experimental uncompressed archives; structural tests only')
    p.add_argument('--game',type=Path,default=ROOT/'original');p.add_argument('--out',type=Path,required=True)
    args=parser.parse_args()
    try:
        if args.command=='verify':
            records,res,dup=read_game(args.game)
            result={'records_validated':len(records),'unique_resources':len(res),'identical_duplicates':len(dup)}
            manifest=ROOT/'reports/original_files.sha256'
            if manifest.exists() and args.game.resolve()==(ROOT/'original').resolve():
                matches=[]
                for line in manifest.read_text().splitlines():
                    if not line.strip():continue
                    expected,name=line.split(None,1);actual=digest((args.game/name.strip()).read_bytes())
                    matches.append(expected==actual)
                if not all(matches):raise FormatError('Original-file checksum mismatch')
                result['original_hashes_verified']=len(matches)
        elif args.command=='extract':result=extract(args.game,args.out)
        elif args.command=='graphics':
            from sci_graphics import export_views
            _,resources,_=read_game(args.game)
            manifest=export_views(resources,args.out);save_json(args.out/'manifest.json',manifest)
            result={'frames_exported':len(manifest),'views':len({r['view'] for r in manifest})}
        elif args.command=='assemble':
            raw=assemble(args.source.read_text(encoding='utf-8'))
            from sci_scripts import sections
            sections(raw)
            safe_write(args.out,make_patch(2,raw));result={'patch':str(args.out),'bytes':len(raw),'runtime_tested':False}
        elif args.command=='text':
            doc=json.loads(args.source.read_text(encoding='utf-8'))
            strings=doc['strings']
            if not isinstance(strings,list) or not all(isinstance(x,str) and '\0' not in x for x in strings):
                raise FormatError('Expected a string array without embedded NULs')
            raw=b'\0'.join(x.encode('cp437',errors='strict') for x in strings)
            safe_write(args.out,make_patch(3,raw));result={'patch':str(args.out),'entries':len(strings),'runtime_tested':False}
        elif args.command=='view':
            from sci_graphics import palette,replace_cel
            _,resources,_=read_game(args.game);raw=resources[(0,args.id)]
            if args.base_patch:
                key,raw=parse_patch(args.base_patch)
                if key!=(0,args.id):raise FormatError('--base-patch must match the requested view ID')
            new=replace_cel(raw,palette(resources[(11,999)]),args.loop,args.cel,args.png,args.quantize)
            safe_write(args.out,make_patch(0,new));result={'patch':str(args.out),'bytes':len(new),'runtime_tested':False}
        elif args.command=='build':result=build(args.original,args.mods,args.out)
        else:
            records,resources,_=read_game(args.game);write_repacked(records,resources,args.out)
            _,again,_=read_game(args.out)
            if again!=resources:raise FormatError('Repack did not preserve all resource bytes')
            result={'roundtrip_resources':len(again),'output':str(args.out),'runtime_tested':False}
        print(json.dumps(result,indent=2,ensure_ascii=False));return 0
    except (OSError,ValueError,KeyError,ImportError) as error:
        print(f'ERROR: {error}',file=sys.stderr);return 1

if __name__=='__main__':raise SystemExit(main())
