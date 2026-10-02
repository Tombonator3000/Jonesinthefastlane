#!/usr/bin/env python3
"""Build-time SCI source to ordinary asynchronous TypeScript translation.

The input is separately attributed decompiled Sierra source. Generated game
logic retains that source's provenance; this translator is GPL-3.0-or-later.
No source syntax tree or bytecode evaluator is shipped to the browser.
"""
from __future__ import annotations

import argparse
from collections import Counter
from dataclasses import dataclass
import hashlib
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]


class TranslationError(ValueError):
    pass


class Symbol(str):
    """SCI identifier, kept distinct from a literal string."""


class Array(list):
    """SCI bracket expression: a declaration or indexed variable."""


@dataclass
class Address:
    value: object


def parse(source: str) -> list:
    """Read SCI's S-expressions, comments, brace strings and bracket arrays."""
    tokens = []
    i = 0
    while i < len(source):
        ch = source[i]
        if ch.isspace():
            i += 1
        elif ch == ';' or source.startswith('//', i):
            end = source.find('\n', i)
            i = len(source) if end < 0 else end + 1
        elif source.startswith('/*', i):
            end = source.find('*/', i + 2)
            if end < 0:
                raise TranslationError('Unclosed block comment')
            i = end + 2
        elif ch in '()[]':
            tokens.append(ch)
            i += 1
        elif ch in '{"':
            closing = '}' if ch == '{' else '"'
            i += 1
            chars = []
            while i < len(source) and source[i] != closing:
                if source[i] == '\\':
                    i += 1
                    if i >= len(source):
                        raise TranslationError('Unclosed string escape')
                    esc = source[i]
                    if esc == 'n': chars.append('\n')
                    elif esc == 'r': chars.append('\r')
                    elif esc == 't': chars.append('\t')
                    elif esc == '\n': pass
                    elif esc in '\\{}"': chars.append(esc)
                    elif esc.isdigit():
                        end = i
                        while end < len(source) and end < i + 3 and source[end].isdigit(): end += 1
                        chars.append(chr(int(source[i:end], 10)))
                        i = end - 1
                    else:
                        raise TranslationError(f'Unsupported string escape \\{esc}')
                else:
                    # SCI brace strings spell a literal space as underscore.
                    # Original bank strings at204:4669/4687 confirm this;
                    # quoted strings retain their ordinary underscore bytes.
                    chars.append(' ' if ch=='{' and source[i]=='_' else source[i])
                i += 1
            if i >= len(source):
                raise TranslationError('Unclosed string')
            tokens.append(('string', ''.join(chars)))
            i += 1
        else:
            start = i
            while i < len(source) and not source[i].isspace() and source[i] not in '()[]{};': i += 1
            if start == i:
                raise TranslationError(f'Unexpected character {source[i]!r}')
            word = source[start:i]
            if re.fullmatch(r'-?\d+', word): tokens.append(int(word))
            elif re.fullmatch(r'\$[a-fA-F0-9]+', word): tokens.append(int(word[1:], 16))
            else: tokens.append(Symbol(word))
    cursor = 0
    def read():
        nonlocal cursor
        if cursor >= len(tokens): raise TranslationError('Unexpected end of source')
        token = tokens[cursor]; cursor += 1
        if token in ('(', '['):
            closing = ')' if token == '(' else ']'
            node = [] if token == '(' else Array()
            while cursor < len(tokens) and tokens[cursor] != closing: node.append(read())
            if cursor >= len(tokens): raise TranslationError(f'Unclosed {token}')
            cursor += 1
            return node
        if token in (')', ']'): raise TranslationError(f'Unexpected {token}')
        if isinstance(token, tuple): return token[1]
        if isinstance(token, Symbol) and token.startswith('@'):
            return Address(Symbol(token[1:]) if len(token) > 1 else read())
        return token
    forms = []
    while cursor < len(tokens): forms.append(read())
    return forms


def walk(node):
    yield node
    if isinstance(node, list):
        for child in node: yield from walk(child)
    elif isinstance(node, Address): yield from walk(node.value)


def quote(value):
    return json.dumps(value, ensure_ascii=False)


def load_sources(directory: Path):
    result = {}
    for file in sorted(directory.glob('*.sc')):
        forms = parse(file.read_text())
        ids = [f[1] for f in forms if isinstance(f, list) and f and f[0] == 'script#']
        if len(ids) != 1 or not isinstance(ids[0], int):
            raise TranslationError(f'{file}: exactly one numeric script# is required')
        if ids[0] in result: raise TranslationError(f'Duplicate script number {ids[0]}')
        result[ids[0]] = {'id': ids[0], 'name': file.stem, 'path': file, 'forms': forms}
    return result


def load_constants(paths):
    """Select the SCI1-late header branch used by the original sound API."""
    values = {}
    for path in paths:
        lines = []
        active = [True]
        for line in path.read_text().splitlines():
            stripped = line.strip()
            if stripped.startswith('#ifdef '):
                active.append(active[-1] and stripped.split()[1] == 'SCI_1_1')
            elif stripped.startswith('#endif'):
                if len(active) == 1: raise TranslationError('Unbalanced header #endif')
                active.pop()
            elif stripped.startswith('#'):
                raise TranslationError(f'Unknown header directive {stripped}')
            elif active[-1]: lines.append(line)
        if len(active) != 1: raise TranslationError('Unbalanced header #ifdef')
        for form in parse('\n'.join(lines)):
            if not isinstance(form, list) or not form: raise TranslationError('Invalid header form')
            if form[0] == 'define':
                if len(form) != 3: raise TranslationError(f'Invalid define {form}')
                value = form[2]
                if isinstance(value, Symbol):
                    if value not in values: raise TranslationError(f'Unknown constant alias {value}')
                    value = values[value]
                if not isinstance(value, (str, int)): raise TranslationError(f'Nonliteral define {form}')
                values[str(form[1])] = value
            elif form[0] != 'include': raise TranslationError(f'Unknown header form {form[0]}')
    return values


def declarations(nodes, constants=None):
    """Return name->flat-word-slot and initial data; arrays occupy consecutive words."""
    names, data = {}, []
    i = 0
    while i < len(nodes):
        declaration = nodes[i]; i += 1
        if isinstance(declaration, Array):
            if len(declaration) != 2: raise TranslationError(f'Bad array declaration {declaration}')
            name, size = declaration
        else: name, size = declaration, 1
        if not isinstance(name, Symbol) or not isinstance(size, int) or size < 1:
            raise TranslationError(f'Bad declaration {declaration}')
        if name in names: raise TranslationError(f'Duplicate variable {name}')
        names[str(name)] = len(data)
        initial = [0] * size
        if i < len(nodes) and nodes[i] == '=':
            i += 1
            if i >= len(nodes): raise TranslationError(f'Missing initializer for {name}')
            value = nodes[i]; i += 1
            if isinstance(value, Symbol):
                if value not in (constants or {}): raise TranslationError(f'Unknown initializer {value}')
                value = constants[value]
            initial_values = list(value) if isinstance(value, Array) else [value]
            if len(initial_values) > size: raise TranslationError(f'Initializer too long for {name}')
            if any(isinstance(v, (Symbol, list, Address)) for v in initial_values):
                raise TranslationError(f'Nonliteral initializer for {name}')
            initial[:len(initial_values)] = initial_values
        data.extend(initial)
    return names, data


class Compiler:
    def __init__(self, sources, constants, selectors, kernels):
        self.sources, self.constants = sources, constants
        self.selectors = {name: i for i, name in enumerate(selectors)}
        # SCI1 resource-residency kernel, named explicitly in the decompiled
        # source even where the game's kernel vocabulary entry is anonymous.
        self.kernels = set(kernels) | {'Lock'}
        self.by_name = {s['name']: sid for sid, s in sources.items()}
        self.classes = {}
        self.objects = {}
        self.procedures = {}
        for sid, source in sources.items():
            source.update(uses=[], locals={}, initial=[], objects={}, procedures={}, exports={})
            for form in source['forms']:
                if not isinstance(form, list) or not form: raise TranslationError(f'Invalid top-level form in {source["name"]}')
                head = form[0]
                if head in ('script#', 'include'): continue
                if head == 'use':
                    if str(form[1]) not in self.by_name: raise TranslationError(f'Unknown script use {form[1]}')
                    source['uses'].append(self.by_name[str(form[1])])
                elif head == 'local': source['locals'], source['initial'] = declarations(form[1:], constants)
                elif head == 'public':
                    if len(form[1:]) % 2: raise TranslationError('Odd public declaration')
                    source['exports'] = {int(form[i+1]):str(form[i]) for i in range(1,len(form),2)}
                elif head == 'procedure':
                    name = str(form[1][0]); source['procedures'][name] = form
                    self.procedures.setdefault(name, []).append(sid)
                elif head in ('class', 'instance'):
                    name = str(form[1]); rest = form[2:]; parent = None
                    if rest and rest[0] == 'of': parent = str(rest[1]); rest = rest[2:]
                    obj = {'name':name,'script':sid,'parentName':parent,'isClass':head=='class','properties':{},'methods':{}}
                    for part in rest:
                        if part[0] == 'properties':
                            if len(part[1:]) % 2: raise TranslationError(f'Odd properties in {name}')
                            obj['properties'] = {str(part[i]):part[i+1] for i in range(1,len(part),2)}
                        elif part[0] == 'method': obj['methods'][str(part[1][0])] = part
                        else: raise TranslationError(f'Unknown object form {part[0]}')
                    source['objects'][name] = obj
                    self.objects.setdefault(name, []).append(sid)
                    if obj['isClass']:
                        self.classes.setdefault(name, []).append(sid)
                else: raise TranslationError(f'Unsupported top-level construct {head}')
        for source in sources.values():
            for obj in source['objects'].values():
                name = obj['parentName']
                if name and name not in self.classes: raise TranslationError(f'Unknown parent class {name}')
                if name:
                    candidates = [sid for sid in self.classes[name] if not (sid==source['id'] and name==obj['name'])]
                    local = [sid for sid in candidates if sid==source['id']]
                    imported = [sid for sid in candidates if sid in source['uses']]
                    candidates = local or imported or candidates
                    if len(candidates)!=1: raise TranslationError(f'Ambiguous parent class {name} in {source["name"]}')
                    obj['parent'] = {'script':candidates[0], 'name':name}
                else: obj['parent'] = None
        self.global_names = sources.get(0, {}).get('locals', {})
        self.stats = Counter()

    def properties(self, obj):
        result = {'species', 'superClass', '-info-', 'name'}
        while obj:
            result.update(obj['properties'])
            parent = obj['parent']
            obj = self.sources[parent['script']]['objects'][parent['name']] if parent else None
        return result

    def resolve(self, name, source, table):
        # Source reuses MenuBar for unnamed species9 and derived species18.
        # Every original class operand for this name is species18, including
        # Interface's @0fa4. Parent metadata still explicitly names species9.
        if table=='objects' and name=='MenuBar' and set(self.classes.get(name,[]))=={255,997}: return 997
        if name in source[table]: return source['id']
        candidates = [sid for sid in source['uses'] if name in self.sources[sid][table]]
        if len(candidates) == 1: return candidates[0]
        if len(candidates)>1 and table=='objects':
            # Menu's game-specific MenuBar subclasses Interface's homonymous class.
            # An importing script names the most-derived class; its own script
            # retains lexical access to its local base class.
            ancestors=set()
            for sid in candidates:
                parent=self.sources[sid]['objects'][name]['parent']
                while parent:
                    if parent['name']==name: ancestors.add(parent['script'])
                    parent=self.sources[parent['script']]['objects'][parent['name']]['parent']
            candidates=[sid for sid in candidates if sid not in ancestors]
            if len(candidates)==1: return candidates[0]
        if len(candidates) > 1: raise TranslationError(f'Ambiguous {table} identifier {name} in {source["name"]}')
        if table == 'objects' and name in self.classes and len(self.classes[name])==1: return self.classes[name][0]
        return None

    def compile_script(self, source):
        sid = source['id']
        lines = [
            '// Native TypeScript translated at build time; no SCI interpreter is used here.',
            f'// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/{source["path"].name}',
            '// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.',
            '// Original game code: Sierra On-Line. Decompiled by sluicebox.',
            '// Attribution does not grant a new license to the original game material.',
            f'// Original source SHA-256: {hashlib.sha256(source["path"].read_bytes()).hexdigest()}',
            "import { type Runtime } from '../runtime/runtime.js';", '',
            'export function register(rt: Runtime): void {',
            f'  rt.defineScript({sid}, {{',
            f'    name: {quote(source["name"])},',
            f'    uses: {quote(source["uses"])},',
            f'    locals: {quote(source["initial"])},',
            '    objects: [',
        ]
        for obj in source['objects'].values():
            if any(isinstance(v,(Symbol,list,Address)) for v in obj['properties'].values()):
                raise TranslationError(f'Nonliteral property initializer in {obj["name"]}')
            lines.extend(['      {', f'        name: {quote(obj["name"])},', f'        className: {quote(obj["parentName"] or obj["name"])},',
                          f'        parent: {quote(obj["parent"])},', f'        isClass: {str(obj["isClass"]).lower()},',
                          f'        properties: {quote(obj["properties"])},', '        methods: {'])
            for name, method in obj['methods'].items():
                lines.extend(FunctionEmitter(self, source, obj, method).compile('          '))
                self.stats['methods'] += 1
            lines.extend(['        },','      },'])
            self.stats['classes' if obj['isClass'] else 'instances'] += 1
        lines.extend(['    ],','    procedures: {'])
        for name, procedure in source['procedures'].items():
            lines.extend(FunctionEmitter(self, source, None, procedure).compile('      '))
            self.stats['procedures'] += 1
        lines.extend(['    },',f'    exports: {quote(source["exports"])},','  });','}',''])
        self.stats['scripts'] += 1
        return '\n'.join(lines)


class FunctionEmitter:
    OPERATORS = {'+','-','*','/','mod','&','|','^','<<','>>','==','!=','<','<=','>','>=','u<','u<=','u>','u>=','not','~'}

    def __init__(self, compiler, source, obj, form):
        self.c, self.source, self.obj, self.form = compiler, source, obj, form
        signature = list(form[1]); self.name = str(signature.pop(0))
        tmp = signature.index('&tmp') if '&tmp' in signature else len(signature)
        self.params, initial = declarations(signature[:tmp])
        self.param_count = len(initial)
        self.temps, self.temp_values = declarations(signature[tmp+1:])
        self.properties = compiler.properties(obj) if obj else set()
        self.lines, self.level, self.counter, self.loops = [], 0, 0, []

    def line(self, text): self.lines.append('  ' * self.level + text)

    def fresh(self, prefix='v'):
        self.counter += 1
        return f'_{prefix}{self.counter}'

    def value(self, expression):
        temp = self.fresh()
        self.line(f'const {temp}: any = {expression};')
        self.line(f'acc = {temp};')
        return temp

    def variable(self, name):
        if name == 'argc': return ('argc', None, None)
        if name in self.params: return ('array', 'args', self.params[name])
        if name in self.temps: return ('array', 'temps', self.temps[name])
        if name in self.source['locals']:
            return ('global', 0, self.source['locals'][name]) if self.source['id']==0 else ('local',self.source['id'],self.source['locals'][name])
        if name in self.c.global_names: return ('global', 0, self.c.global_names[name])
        if name in self.properties: return ('property','this',name)
        return None

    def lvalue(self, node):
        if isinstance(node, Array):
            if len(node)!=2 or not isinstance(node[0],Symbol): raise TranslationError(f'Bad subscript {node}')
            base = self.variable(str(node[0]))
            if not base or base[0]=='property': raise TranslationError(f'Unindexable variable {node[0]}')
            index = self.expr(node[1])
            return (base[0],base[1],f'({base[2]} + (Number({index}) & 65535))')
        if not isinstance(node, Symbol): raise TranslationError(f'Not an lvalue: {node}')
        ref = self.variable(str(node))
        if not ref: raise TranslationError(f'Unknown lvalue {node}')
        return ref

    def read(self, ref):
        kind, owner, index = ref
        if kind=='argc': return 'argc'
        if kind=='array': return f'({owner}[{index}] ?? 0)'
        if kind=='global': return f'rt.global({index})'
        if kind=='local': return f'rt.local({owner}, {index})'
        return f'rt.get(this, {quote(index)})'

    def write(self, ref, value):
        kind, owner, index = ref
        if kind=='argc': return f'(argc = {value})'
        if kind=='array': return f'({owner}[{index}] = {value})'
        if kind=='global': return f'rt.setGlobal({index}, {value})'
        if kind=='local': return f'rt.setLocal({owner}, {index}, {value})'
        return f'rt.set(this, {quote(index)}, {value})'

    def reference(self, node):
        kind, owner, index = self.lvalue(node)
        if kind in ('property','argc'): raise TranslationError('Property/argc address is not supported')
        return f'rt.ref({quote(kind)}, {owner}, {index})'

    def arguments(self, nodes):
        args = []
        for node in nodes:
            if node == '&rest': args.append('...' + self.value(f'args.slice({self.param_count}, argc)'))
            else: args.append(self.expr(node))
        return '[' + ', '.join(args) + ']'

    def body(self, nodes, destination=None):
        for node in nodes:
            value = self.expr(node)
            if destination: self.line(f'{destination} = {value};')

    def expr(self, node):
        if isinstance(node, Address): return self.value(self.reference(node.value))
        if isinstance(node, Array): return self.value(self.read(self.lvalue(node)))
        if isinstance(node, Symbol):
            name = str(node)
            if name == 'self': return self.value('this')
            if name.startswith('#'):
                selector = name[1:]
                if selector not in self.c.selectors: raise TranslationError(f'Unknown selector {selector}')
                return self.value(str(self.c.selectors[selector]))
            # Decompiled spelling loses the distinction here: original 994
            # @06ad is lofsa controls, followed by aTop controls at @06b0.
            # Other controls reads in Rm/room1 use pToa and remain properties.
            if self.source['id']==994 and self.obj and self.obj['name']=='Rm' and self.name=='init' and name=='controls':
                return self.value('rt.object(994, "controls")')
            ref = self.variable(name)
            if ref: return self.value(self.read(ref))
            sid = self.c.resolve(name,self.source,'objects')
            if sid is not None: return self.value(f'rt.object({sid}, {quote(name)})')
            if name in self.c.constants: return self.value(quote(self.c.constants[name]))
            raise TranslationError(f'Unknown symbol {name}')
        if not isinstance(node, list): return self.value(quote(node))
        if not node: raise TranslationError('Empty expression')
        if len(node)==1 and isinstance(node[0],list): return self.expr(node[0])
        head = str(node[0]) if isinstance(node[0],Symbol) else None
        if head=='return':
            if len(node)>2: raise TranslationError('Too many return arguments')
            result = self.expr(node[1]) if len(node)>1 else 'acc'
            self.line(f'return {result};'); return 'acc'
        if head in ('break','continue','breakif'):
            if not self.loops: raise TranslationError(f'{head} outside loop')
            outer, cont = self.loops[-1]
            if head=='breakif':
                condition = self.expr(node[1]); self.line(f'if (rt.truth({condition})) break {outer};')
            else:
                if len(node)!=1: raise TranslationError(f'Unsupported {head} level')
                self.line(f'break {outer if head=="break" else cont};')
            return 'acc'
        if head in ('if','cond','switch'): return self.branch(node)
        if head in ('for','while','repeat'): return self.loop(node)
        if head in ('and','or'):
            result=self.fresh(); self.line(f'let {result}: any = {1 if head=="and" else 0};')
            for arg in node[1:]:
                self.line(f'if ({"" if head=="and" else "!"}rt.truth({result})) {{'); self.level+=1
                value=self.expr(arg); self.line(f'{result} = {value};'); self.level-=1; self.line('}')
            self.line(f'acc = {result};'); return result
        if head=='=' or head in ('+=','-=','*=','/=','&=','|=','^=','%=') or head in ('++','--'):
            # SCI evaluates the right side before an indexed store. Preserve it in a temp.
            rhs = self.expr(node[2]) if len(node)==3 else None
            if head=='=' and rhs is None: raise TranslationError('Assignment requires two operands')
            ref = self.lvalue(node[1])
            if head!='=':
                operator = '+' if head=='++' else '-' if head=='--' else head[:-1]
                rhs = f'rt.op({quote(operator)}, {self.read(ref)}, {rhs or "1"})'
            return self.value(self.write(ref,rhs))
        if head in self.OPERATORS:
            if len(node)>3 and head in {'==','!=','<','<=','>','>=','u<','u<=','u>','u>='}:
                # SCI pprev retains the previous right-hand operand. Chained
                # comparisons compare adjacent operands and short circuit.
                first=self.expr(node[1]); previous=self.fresh(); result=self.fresh()
                self.line(f'let {previous}: any = {first};')
                self.line(f'let {result}: any = 1;')
                for operand in node[2:]:
                    self.line(f'if (rt.truth({result})) {{'); self.level+=1
                    current=self.expr(operand)
                    self.line(f'{result} = rt.op({quote(head)}, {previous}, {current});')
                    self.line(f'{previous} = {current};'); self.level-=1; self.line('}')
                self.line(f'acc = {result};'); return result
            args=self.arguments(node[1:]); return self.value(f'rt.op({quote(head)}, ...{args})')
        if len(node)>1 and isinstance(node[1],Symbol) and node[1].endswith(':'):
            return self.send(node)
        if head:
            if head=='DisposeScript':
                # Original kDisposeScript preserves the accumulator unless a
                # second return value is supplied. All Jones arguments here
                # compile to pushi/pTos (no accumulator-changing expression).
                if any(isinstance(arg,(list,Address)) for arg in node[1:]):
                    raise TranslationError('Computed DisposeScript argument requires explicit accumulator analysis')
                previous=self.fresh('acc'); self.line(f'const {previous}: any = acc;')
                args=self.arguments(node[1:]); actual=self.fresh('args'); self.line(f'const {actual}: any[] = {args};')
                self.line(f'await rt.call({self.source["id"]}, "DisposeScript", {actual}, this);')
                return self.value(f'{actual}.length === 2 ? {actual}[1] : {previous}')
            args=self.arguments(node[1:])
            sid=self.c.resolve(head,self.source,'procedures')
            if sid is None and head in self.c.kernels: sid=self.source['id']
            if sid is None: raise TranslationError(f'Unknown procedure/kernel call {head}')
            return self.value(f'await rt.call({sid}, {quote(head)}, {args}, this)')
        raise TranslationError(f'Unsupported expression {node}')

    def send(self,node):
        is_super=node[0]=='super'
        if is_super and not self.obj:
            if self.source['id']==211 and self.name in ('localproc_1','localproc_2'):
                self.line('throw new Error("Unused decompiled procedure has no lexical super class: discount.'+self.name+'");')
                return 'acc'
            raise TranslationError('super outside a method')
        sends=[]; i=1
        while i<len(node):
            token=node[i]; i+=1
            if not isinstance(token,Symbol) or not token.endswith(':'): raise TranslationError(f'Invalid selector {token}')
            name=str(token[:-1]); argv=[]
            while i<len(node) and not (isinstance(node[i],Symbol) and node[i].endswith(':')):
                argv.append(node[i]); i+=1
            # Parameters/temps supply selector IDs in eachElementDo and friends.
            dynamic = self.variable(name)
            selector=self.value(self.read(dynamic)) if dynamic and dynamic[0]!='property' else quote(name)
            if not dynamic and name not in self.c.selectors: raise TranslationError(f'Unknown send selector {name}')
            sends.append((selector,self.arguments(argv)))
        # SCI constructs the entire send frame before invoking the first selector.
        target='this' if is_super else self.expr(node[0])
        result='acc'
        for selector,args in sends:
            if is_super:
                owner=quote({'script':self.source['id'],'name':self.obj['name']})
                result=self.value(f'await rt.superSend(this, {owner}, {selector}, {args})')
            else: result=self.value(f'await rt.send({target}, {selector}, {args})')
        return result

    def branch(self,node):
        result=self.fresh(); self.line(f'let {result}: any = acc;')
        if node[0]=='if':
            condition=self.expr(node[1]); self.line(f'{result} = {condition};')
            body=node[2:]; split=body.index('else') if 'else' in body else len(body)
            self.line(f'if (rt.truth({condition})) {{'); self.level+=1; self.body(body[:split],result); self.level-=1
            if split<len(body):
                self.line('} else {'); self.level+=1; self.body(body[split+1:],result); self.level-=1
            self.line('}')
        else:
            switch=self.expr(node[1]) if node[0]=='switch' else None
            clauses=node[2:] if switch else node[1:]
            end=self.fresh('branch'); self.line(f'{end}: {{'); self.level+=1
            for clause in clauses:
                if not isinstance(clause,list) or not clause: raise TranslationError('Malformed conditional clause')
                if clause[0]=='else':
                    self.body(clause[1:],result); self.line(f'break {end};')
                else:
                    test=self.expr(clause[0])
                    self.line(f'{result} = rt.op("==", {switch}, {test});' if switch else f'{result} = {test};')
                    self.line(f'acc = {result};')
                    condition=f'rt.truth({result})'
                    self.line(f'if ({condition}) {{'); self.level+=1
                    self.body(clause[1:],result); self.line(f'break {end};'); self.level-=1; self.line('}')
            self.level-=1; self.line('}')
        self.line(f'acc = {result};'); return result

    def loop(self,node):
        kind=node[0]; outer=self.fresh('loop'); cont=self.fresh('continue')
        if kind=='for':
            self.body(node[1]); condition=node[2]; update=node[3]; body=node[4:]
        elif kind=='while': condition=node[1]; update=[]; body=node[2:]
        else: condition=None; update=[]; body=node[1:]
        self.line(f'{outer}: for (;;) {{'); self.level+=1
        if condition is not None:
            value=self.expr(condition); self.line(f'if (!rt.truth({value})) break {outer};')
        self.line(f'{cont}: {{'); self.level+=1; self.loops.append((outer,cont))
        self.body(body); self.loops.pop(); self.level-=1; self.line('}')
        self.body(update); self.level-=1; self.line('}')
        return 'acc'

    def compile(self,indent):
        self.line(f'// SCI {self.source["path"].name}: {self.obj["name"]+"." if self.obj else ""}{self.name}')
        self.line(f'{quote(self.name)}: async function(this: any, rt: Runtime, args: any[]): Promise<any> {{')
        self.level+=1
        self.line('let acc: any = 0;')
        self.line('let argc: number = args.length;')
        if self.temp_values: self.line(f'const temps: any[] = {quote(self.temp_values)};')
        try: self.body(self.form[2:])
        except TranslationError as error:
            owner=f'{self.obj["name"]}.' if self.obj else ''
            raise TranslationError(f'{self.source["path"].name}: {owner}{self.name}: {error}') from error
        self.line('return acc;'); self.level-=1; self.line('},')
        return [indent+line for line in self.lines]


def translate(source_dir=None, output_dir=None):
    source_dir=source_dir or ROOT/'reference/upstream/src'
    output_dir=output_dir or ROOT/'native/generated'
    sources=load_sources(source_dir)
    if len(sources)!=69: raise TranslationError(f'Expected 69 original scripts, found {len(sources)}')
    headers=[ROOT/'reference/keys.sh', ROOT/'reference/sci.sh']
    constants=load_constants(headers)
    selectors=json.loads((ROOT/'reports/selectors.json').read_text())
    kernels=json.loads((ROOT/'reports/kernels.json').read_text())
    compiler=Compiler(sources,constants,selectors,kernels)
    # Compile everything before touching output so unknown syntax cannot leave a partial build.
    outputs={sid:compiler.compile_script(sources[sid]) for sid in sorted(sources)}
    output_dir.mkdir(parents=True,exist_ok=True)
    for sid, text in outputs.items(): (output_dir/f'script_{sid:03d}.ts').write_text(text)
    index=["import { type Runtime } from '../runtime/runtime.js';"]
    index.extend(f"import {{ register as script{sid} }} from './script_{sid:03d}.js';" for sid in outputs)
    index.extend(['',f'export const scripts = {quote(sorted(sources))} as const;','export function registerAll(rt: Runtime): void {'])
    index.extend(f'  script{sid}(rt);' for sid in outputs)
    index.extend(['}',''])
    (output_dir/'index.ts').write_text('\n'.join(index))
    manifest={
        'format':1, 'description':'Build-time translation to editable asynchronous TypeScript; no runtime source AST or bytecode interpreter.',
        'sourceRepository':'https://github.com/sluicebox/sci-scripts',
        'sourceRevision':'870a8015b689474484bf3d8b41416956d4315432',
        'game':'jones-dos-1.000.060', 'counts':dict(compiler.stats),
        'unresolved':[], 'parityVerified':False,
        'sourceOnlyAmbiguities': ['discount.localproc_1: unused procedure has no lexical super class; throws if called',
                                 'discount.localproc_2: unused procedure has no lexical super class; throws if called'],
        'headers':[{ 'name':p.name,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()} for p in headers],
        'scripts':[{ 'id':sid,'name':sources[sid]['name'],'sourceSha256':hashlib.sha256(sources[sid]['path'].read_bytes()).hexdigest(),
                     'generatedSha256':hashlib.sha256(outputs[sid].encode()).hexdigest()} for sid in outputs],
    }
    (output_dir/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
    return manifest


if __name__ == '__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source',type=Path,default=ROOT/'reference/upstream/src')
    parser.add_argument('--output',type=Path,default=ROOT/'native/generated')
    options=parser.parse_args()
    try: print(json.dumps(translate(options.source,options.output)['counts'],sort_keys=True))
    except TranslationError as error: parser.exit(1, f'Translation failed: {error}\n')
