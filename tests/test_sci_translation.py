"""Verify the build-time compiler separately from browser/runtime parity tests."""
from __future__ import annotations

import hashlib
import json
from pathlib import Path
import shutil
import subprocess
import tempfile
import unittest

from tools.translate_sci import (
    Address, Array, Compiler, ROOT, Symbol, TranslationError, declarations,
    load_constants, load_sources, parse, translate,
)


class ParserTests(unittest.TestCase):
    def test_strings_comments_hex_and_addresses_are_distinct(self):
        forms = parse('; comment\n // comment\n /* comment */ (x {a\\01b} "c\\nd" $ffff -2 @a @[a 2])')
        self.assertIsInstance(forms[0][0], Symbol)
        self.assertEqual(forms[0][1:5], ['a\x01b', 'c\nd', 65535, -2])
        self.assertNotIsInstance(forms[0][1], Symbol)
        self.assertEqual(forms[0][5], Address(Symbol('a')))
        self.assertIsInstance(forms[0][6].value, Array)

    def test_invalid_syntax_fails(self):
        for text in ['(x', '(x]', '{unclosed', '/*unclosed', '(x "\\q")']:
            with self.subTest(text=text), self.assertRaises(TranslationError): parse(text)

    def test_flat_word_layout_for_arrays_and_initializers(self):
        names, data = declarations(parse('(local a [buffer 4] = [1 2] z = -1)')[0][1:])
        self.assertEqual(names, {'a':0, 'buffer':1, 'z':5})
        self.assertEqual(data, [0,1,2,0,0,-1])

    def test_brace_string_underscores_are_original_spaces(self):
        self.assertEqual(parse('{Deposit__} "keep_under_score"'),['Deposit  ','keep_under_score'])


class TranslationTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        if not (ROOT/'reference/upstream/src').is_dir():
            raise unittest.SkipTest('Pinned decompiled reference source is not downloaded')
        cls.sources = load_sources(ROOT/'reference/upstream/src')
        cls.constants = load_constants([ROOT/'reference/keys.sh', ROOT/'reference/sci.sh'])
        cls.selectors = json.loads((ROOT/'reports/selectors.json').read_text())
        cls.kernels = json.loads((ROOT/'reports/kernels.json').read_text())

    def test_every_script_function_and_object_is_translated_reproducibly(self):
        with tempfile.TemporaryDirectory() as directory:
            out = Path(directory)
            manifest = translate(output_dir=out)
            self.assertEqual(manifest['counts'], {
                'scripts':69, 'classes':72, 'instances':526, 'methods':738, 'procedures':98,
            })
            self.assertEqual(manifest['unresolved'], [])
            self.assertFalse(manifest['parityVerified'])
            self.assertEqual(len(manifest['sourceOnlyAmbiguities']), 2)
            self.assertEqual(len(list(out.glob('script_*.ts'))), 69)
            for entry in manifest['scripts']:
                text = (out/f'script_{entry["id"]:03d}.ts').read_text()
                self.assertEqual(hashlib.sha256(text.encode()).hexdigest(), entry['generatedSha256'])
                self.assertEqual(text, (ROOT/'native/generated'/f'script_{entry["id"]:03d}.ts').read_text())
                self.assertIn('Decompiled by sluicebox', text)
                self.assertNotIn('eval(', text)
                self.assertNotIn('executeAst', text)
                self.assertNotIn('interpret(', text)

    def test_class_inheritance_matches_original_binary_metadata(self):
        compiler = Compiler(self.sources, self.constants, self.selectors, self.kernels)
        classes = {}
        metadata = {}
        for sid in self.sources:
            metadata[sid] = json.loads((ROOT/f'script_metadata/script_{sid:03d}.json').read_text())
            source_objects = list(self.sources[sid]['objects'].values())
            binary_objects = metadata[sid]['objects']
            self.assertEqual(len(source_objects), len(binary_objects), str(sid))
            for source, binary in zip(source_objects, binary_objects):
                if binary['kind']=='class': classes[binary['species']] = (sid, source['name'])
        for sid in self.sources:
            for source, binary in zip(self.sources[sid]['objects'].values(), metadata[sid]['objects']):
                expected = classes.get(binary['superclass'])
                actual = source['parent']
                self.assertEqual((actual['script'],actual['name']) if actual else None, expected,
                                 f'{sid}:{source["name"]}')

    def test_original_controls_ambiguity_is_narrowly_resolved(self):
        text = (ROOT/'native/generated/script_994.ts').read_text()
        init = text.split('// SCI Game.sc: Rm.init')[1].split('// SCI Game.sc: Rm.doit')[0]
        dispose = text.split('// SCI Game.sc: Rm.dispose')[1].split('// SCI Game.sc: Rm.handleEvent')[0]
        self.assertIn('rt.object(994, "controls")', init)
        self.assertIn('rt.set(this, "controls",', init)
        self.assertNotIn('rt.object(994, "controls")', dispose)
        self.assertIn('rt.get(this, "controls")', dispose)

    def test_derived_menubar_binding_matches_original_class_operands(self):
        compiler = Compiler(self.sources,self.constants,self.selectors,self.kernels)
        for sid in [0,1,255,996]:
            self.assertEqual(compiler.resolve('MenuBar',self.sources[sid],'objects'),997)
        text=(ROOT/'native/generated/script_255.ts').read_text()
        self.assertIn('rt.object(997, "MenuBar")',text)
        self.assertNotIn('rt.object(255, "MenuBar")',text)
        self.assertEqual(self.sources[997]['objects']['MenuBar']['parent'],{'script':255,'name':'MenuBar'})

    def test_unknown_identifiers_or_syntax_fail_at_build_time(self):
        for expression in ['mysteryVariable', '(mysteryCall 1)', '(target mysterySelector:)', '(switchto 1 2)']:
            with tempfile.TemporaryDirectory() as directory:
                path = Path(directory)/'Fixture.sc'
                path.write_text(f'(script# 0) (procedure (test) {expression})')
                sources = load_sources(Path(directory))
                compiler = Compiler(sources, {}, [], [])
                with self.subTest(expression=expression), self.assertRaises(TranslationError):
                    compiler.compile_script(sources[0])

    def test_generated_control_flow_runs_without_source_interpreter(self):
        node = shutil.which('node')
        bundled = Path('/home/tombonator3000t/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node')
        if not node and bundled.is_file(): node = str(bundled)
        if not node or not (ROOT/'node_modules/typescript').is_dir():
            self.skipTest('Node and repository TypeScript dependency are required for execution test')
        source = r'''
        (script# 0)
        (local sequence [data 4] = [10 20 30 40])
        (procedure (record n) (= sequence (+ (* sequence 10) n)) (return n))
        (procedure (receiver) (record 3) (return target))
        (procedure (sendOrder) (= sequence 0) ((receiver) first: (record 1) second: (record 2)) (return sequence))
        (procedure (shortCircuit) (= sequence 0) (and 0 (record 8)) (or 1 (record 9)) (return sequence))
        (procedure (compareShortCircuit) (= sequence 0) (< 2 1 (record 8)) (return sequence))
        (procedure (rest source selector) (source selector: &rest))
        (procedure (trimRest source) (-= argc 1) (source first: &rest))
        (procedure (loopTest &tmp i total)
          (for ((= i 0)) (< i 9) ((++ i))
            (if (== i 2) (continue))
            (if (== i 5) (break))
            (+= total i))
          (return total))
        (procedure (repeatTest &tmp i)
          (repeat (++ i) (breakif (== i 4))) (return i))
        (procedure (nestedReturn n)
          (= sequence (if n (cond ((== n 2) (return 99)) (else 5)) else 7))
          (return sequence))
        (procedure (switchTest n)
          (return (switch n (1 11) (2 22) (else 33))))
        (procedure (switchNoMatch n) (return (switch n (1 11) (2 22))))
        (procedure (references &tmp [buffer 3])
          (Write @buffer 1 42) (= [data 2] [buffer 1]) (return [data 2]))
        (procedure (mutableArg n) (= n (+ n 5)) (return n))
        (procedure (disposeResult) 7 (DisposeScript 0))
        (procedure (disposeExplicitResult) 7 (DisposeScript 0 11))
        (class Base (properties value 8)
          (method (first a) (return a)))
        (class Child of Base (properties)
          (method (first a) (return (+ (super first: a) value))))
        (instance target of Child (properties))
        '''
        harness = r'''
        const fs=require('fs'),ts=require(process.argv[3]),assert=require('node:assert/strict');
        const input=fs.readFileSync(process.argv[2],'utf8');
        const js=ts.transpileModule(input,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS}}).outputText;
        const exported={};new Function('exports',js)(exported);
        const rt={
          defs:new Map(), locals:[], trace:[],
          defineScript(id,d){this.def=d;this.locals=d.locals;for(const o of d.objects)this.defs.set(o.name,o)},
          object(id,name){return this.defs.get(name)},global(i){return this.locals[i]},setGlobal(i,v){return this.locals[i]=v},
          truth(v){return v!==0&&v!==false&&v!=null},
          get(o,p){return o.properties[p]??(o.parent?this.get(this.object(o.parent.script,o.parent.name),p):0)},
          op(op,...v){let n=v[0];switch(op){case '+':n=v.reduce((a,b)=>a+b);break;case '-':n=v.length===1?-n:v.reduce((a,b)=>a-b);break;case '*':n=v.reduce((a,b)=>a*b);break;case '==':return +(v[0]===v[1]);case '<':return +(v[0]<v[1]);default:throw Error(op)}return (n<<16)>>16},
          ref(kind,owner,index){return {owner:kind==='global'?this.locals:owner,index}},
          async call(id,name,args,self){if(name==='DisposeScript')return -999;if(name==='Write'){const [r,at,n]=args;r.owner[r.index+at]=n;return n}return this.def.procedures[name].call(self,this,args)},
          async send(o,s,args){this.trace.push([s,args]);let x=o;while(x&&!x.methods[s])x=x.parent?this.object(x.parent.script,x.parent.name):null;return x?x.methods[s].call(o,this,args):args.at(-1)},
          async superSend(o,from,s,args){const d=this.object(from.script,from.name),p=this.object(d.parent.script,d.parent.name);return p.methods[s].call(o,this,args)}
        };
        exported.register(rt);
        (async()=>{
          const call=(name,args=[])=>rt.call(0,name,args);
          assert.equal(await call('sendOrder'),123,'arguments must precede receiver evaluation');
          assert.equal(await call('shortCircuit'),0,'and/or must not evaluate skipped side effects');
          assert.equal(await call('compareShortCircuit'),0,'chained comparisons must skip subsequent operands after failure');
          assert.equal(await call('loopTest'),8,'continue executes for-update and break exits loop');
          assert.equal(await call('repeatTest'),4);
          assert.equal(await call('nestedReturn',[2]),99,'return in expression-form cond exits enclosing function');
          assert.equal(await call('nestedReturn',[1]),5);
          assert.equal(await call('nestedReturn',[0]),7);
          assert.deepEqual(await Promise.all([1,2,3].map(n=>call('switchTest',[n]))),[11,22,33]);
          assert.equal(await call('switchNoMatch',[3]),0,'unmatched switch preserves failed comparison accumulator');
          assert.equal(await call('references'),42,'address shares original flat array storage');
          assert.equal(await call('mutableArg',[4]),9);
          assert.equal(await call('disposeResult'),7,'DisposeScript preserves preceding accumulator');
          assert.equal(await call('disposeExplicitResult'),11,'DisposeScript second argument supplies explicit return value');
          const target=rt.object(0,'target');
          await call('rest',[target,'other',7,8]);assert.deepEqual(rt.trace.at(-1),['other',[7,8]]);
          await call('trimRest',[target,7,8]);assert.deepEqual(rt.trace.at(-1),['first',[7]]);
          assert.equal(await rt.send(target,'first',[10]),18,'super retains receiver and inherited property');
          process.stdout.write('translation execution assertions passed\n');
        })().catch(e=>{console.error(e);process.exitCode=1});
        '''
        with tempfile.TemporaryDirectory() as directory:
            folder = Path(directory)
            (folder/'Fixture.sc').write_text(source)
            sources = load_sources(folder)
            compiler = Compiler(sources, {}, ['first','second'], ['Write'])
            generated = folder/'fixture.ts'
            generated.write_text(compiler.compile_script(sources[0]))
            runner = folder/'run.cjs'; runner.write_text(harness)
            result = subprocess.run([node,str(runner),str(generated),str(ROOT/'node_modules/typescript')],
                                    text=True,capture_output=True,timeout=30)
            self.assertEqual(result.returncode,0,result.stdout+'\n'+result.stderr)
            self.assertIn('translation execution assertions passed',result.stdout)


if __name__ == '__main__': unittest.main()
