#!/usr/bin/env python3
"""Download a PINNED reference decompilation, without executing its code.
Requires internet on the machine running this script. Not run successfully here.
SPDX-License-Identifier: GPL-3.0-or-later
Downloaded game sources retain their own/original rights, not this tool licence.
"""
from __future__ import annotations
from pathlib import Path,PurePosixPath
from concurrent.futures import ThreadPoolExecutor
import argparse,hashlib,json,sys,urllib.request
ROOT=Path(__file__).resolve().parents[1]
REPO='sluicebox/sci-scripts'
COMMIT='870a8015b689474484bf3d8b41416956d4315432'
GAME='jones-dos-1.000.060'
SRC_TREE='9842b4d5d449ab71fc7e50881afdc567a82fefd1'
GAMEINI_BLOB='f15313708e88783af0c46f7ddc33798aeabedf8a'

def get(url:str)->bytes:
    request=urllib.request.Request(url,headers={'User-Agent':'Jones-research-workbench/0.1'})
    with urllib.request.urlopen(request,timeout=30) as response:
        data=response.read(10_000_001)
    if len(data)>10_000_000:raise ValueError('Reference file exceeds safety limit')
    return data

def blobhash(data:bytes)->str:
    return hashlib.sha1(f'blob {len(data)}\0'.encode()+data).hexdigest()

def main()->int:
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--out',type=Path,default=ROOT/'reference/upstream')
    args=parser.parse_args();out=args.out.resolve()
    if out.is_relative_to((ROOT/'original').resolve()):parser.error('Do not download into original/')
    try:
        tree=json.loads(get(f'https://api.github.com/repos/{REPO}/git/trees/{SRC_TREE}?recursive=1'))
        if tree.get('truncated'):raise ValueError('GitHub returned an incomplete tree')
        items=[{'path':'game.ini','sha':GAMEINI_BLOB}]
        for item in tree['tree']:
            if item['type']=='tree':continue
            path=PurePosixPath(item['path'])
            if item.get('mode') not in ('100644','100755') or path.is_absolute() or '..' in path.parts:
                raise ValueError('Unsupported or unsafe source-tree entry')
            if item['type']!='blob':raise ValueError('Submodules are not supported')
            items.append({'path':'src/'+item['path'],'sha':item['sha']})
        out.mkdir(parents=True,exist_ok=True)
        def download(item:dict)->str:
            target=out/item['path'];expected=item['sha']
            if target.exists():
                if blobhash(target.read_bytes())!=expected:
                    raise ValueError(f'Refusing to overwrite locally changed file {target}')
                return item['path']
            data=get(f'https://raw.githubusercontent.com/{REPO}/{COMMIT}/{GAME}/{item["path"]}')
            if blobhash(data)!=expected:raise ValueError(f'Git blob checksum mismatch: {item["path"]}')
            target.parent.mkdir(parents=True,exist_ok=True)
            tmp=target.with_name(target.name+'.download-part');tmp.write_bytes(data);tmp.replace(target)
            return item['path']
        with ThreadPoolExecutor(max_workers=4) as executor:
            for name in executor.map(download,items):print(name)
        manifest={'repository':REPO,'commit':COMMIT,'game_directory':GAME,'files':items,
                  'download_complete':True,'bytecode_equivalence_verified':False,'recompilation_tested':False}
        (out/'UPSTREAM_MANIFEST.json').write_text(json.dumps(manifest,indent=2)+'\n')
        print(f'Downloaded/verified {len(items)} reference files. This is NOT a verified recompile of your binary.')
        return 0
    except (OSError,ValueError,KeyError) as error:
        print(f'Download incomplete: {error}. Existing verified files are retained; rerun to resume.',file=sys.stderr)
        return 1
if __name__=='__main__':raise SystemExit(main())
