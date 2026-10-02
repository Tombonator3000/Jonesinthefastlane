// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/System.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: e76bbc25496033d315fb5bdcec7f957a9a0fab04e1577275263088871df7b7c1
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(999, {
    name: "System",
    uses: [0, 255],
    locals: [],
    objects: [
      {
        name: "Obj",
        className: "Obj",
        parent: null,
        isClass: true,
        properties: {},
        methods: {
          // SCI System.sc: Obj.new
          "new": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.call(999, "Clone", [_v1], this);
            acc = _v2;
            return acc;
          },
          // SCI System.sc: Obj.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
          // SCI System.sc: Obj.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            return _v1;
            return acc;
          },
          // SCI System.sc: Obj.dispose
          "dispose": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.call(999, "DisposeClone", [_v1], this);
            acc = _v2;
            return acc;
          },
          // SCI System.sc: Obj.showStr
          "showStr": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = rt.get(this, "name");
            acc = _v2;
            const _v3: any = await rt.call(999, "StrCpy", [_v1, _v2], this);
            acc = _v3;
            return acc;
          },
          // SCI System.sc: Obj.showSelf
          "showSelf": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const _v1: any = rt.ref("array", temps, 0);
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "showStr", [_v1]);
            acc = _v3;
            const _v4: any = await rt.call(255, "Print", [_v3], this);
            acc = _v4;
            return acc;
          },
          // SCI System.sc: Obj.perform
          "perform": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = args.slice(1, argc);
            acc = _v2;
            const _v3: any = (args[0] ?? 0);
            acc = _v3;
            const _v4: any = await rt.send(_v3, "doit", [_v1, ..._v2]);
            acc = _v4;
            return acc;
          },
          // SCI System.sc: Obj.respondsTo
          "respondsTo": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = (args[0] ?? 0);
            acc = _v2;
            const _v3: any = await rt.call(999, "RespondsTo", [_v1, _v2], this);
            acc = _v3;
            return acc;
          },
          // SCI System.sc: Obj.isMemberOf
          "isMemberOf": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = 1;
            if (rt.truth(_v1)) {
              const _v2: any = (args[0] ?? 0);
              acc = _v2;
              const _v3: any = await rt.send(_v2, "-info-", []);
              acc = _v3;
              const _v4: any = 32768;
              acc = _v4;
              const _v5: any = rt.op("&", ...[_v3, _v4]);
              acc = _v5;
              _v1 = _v5;
            }
            if (rt.truth(_v1)) {
              const _v6: any = rt.get(this, "-info-");
              acc = _v6;
              const _v7: any = 32768;
              acc = _v7;
              const _v8: any = rt.op("&", ...[_v6, _v7]);
              acc = _v8;
              const _v9: any = rt.op("not", ...[_v8]);
              acc = _v9;
              _v1 = _v9;
            }
            if (rt.truth(_v1)) {
              const _v10: any = rt.get(this, "species");
              acc = _v10;
              const _v11: any = (args[0] ?? 0);
              acc = _v11;
              const _v12: any = await rt.send(_v11, "species", []);
              acc = _v12;
              const _v13: any = rt.op("==", ...[_v10, _v12]);
              acc = _v13;
              _v1 = _v13;
            }
            acc = _v1;
            return _v1;
            return acc;
          },
          // SCI System.sc: Obj.isKindOf
          "isKindOf": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "superClass", []);
            acc = _v2;
            const _v3: any = (temps[0] = _v2);
            acc = _v3;
            let _v4: any = 0;
            if (!rt.truth(_v4)) {
              const _v5: any = rt.get(this, "species");
              acc = _v5;
              const _v6: any = (args[0] ?? 0);
              acc = _v6;
              const _v7: any = await rt.send(_v6, "species", []);
              acc = _v7;
              const _v8: any = rt.op("==", ...[_v5, _v7]);
              acc = _v8;
              _v4 = _v8;
            }
            if (!rt.truth(_v4)) {
              let _v9: any = 1;
              if (rt.truth(_v9)) {
                const _v10: any = (temps[0] ?? 0);
                acc = _v10;
                const _v11: any = await rt.call(999, "IsObject", [_v10], this);
                acc = _v11;
                _v9 = _v11;
              }
              if (rt.truth(_v9)) {
                const _v12: any = (args[0] ?? 0);
                acc = _v12;
                const _v13: any = (temps[0] ?? 0);
                acc = _v13;
                const _v14: any = await rt.send(_v13, "isKindOf", [_v12]);
                acc = _v14;
                _v9 = _v14;
              }
              acc = _v9;
              _v4 = _v9;
            }
            acc = _v4;
            return _v4;
            return acc;
          },
          // SCI System.sc: Obj.yourself
          "yourself": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            return _v1;
            return acc;
          },
        },
      },
      {
        name: "Code",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: true,
        properties: {},
        methods: {
          // SCI System.sc: Code.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
        },
      },
      {
        name: "Collect",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: true,
        properties: {"elements": 0, "size": 0},
        methods: {
          // SCI System.sc: Collect.showStr
          "showStr": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = 999;
            acc = _v2;
            const _v3: any = 0;
            acc = _v3;
            const _v4: any = rt.get(this, "name");
            acc = _v4;
            const _v5: any = rt.get(this, "size");
            acc = _v5;
            const _v6: any = await rt.call(999, "Format", [_v1, _v2, _v3, _v4, _v5], this);
            acc = _v6;
            return acc;
          },
          // SCI System.sc: Collect.showSelf
          "showSelf": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const _v1: any = rt.ref("array", temps, 0);
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "showStr", [_v1]);
            acc = _v3;
            const _v4: any = await rt.call(255, "Print", [_v3], this);
            acc = _v4;
            const _v5: any = 105;
            acc = _v5;
            const _v6: any = this;
            acc = _v6;
            const _v7: any = await rt.send(_v6, "eachElementDo", [_v5]);
            acc = _v7;
            return acc;
          },
          // SCI System.sc: Collect.add
          "add": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            let _v1: any = acc;
            const _v2: any = rt.get(this, "elements");
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = await rt.call(999, "NewList", [], this);
              acc = _v4;
              const _v5: any = rt.set(this, "elements", _v4);
              acc = _v5;
              _v1 = _v5;
            }
            acc = _v1;
            const _v8: any = 0;
            acc = _v8;
            const _v9: any = (temps[1] = _v8);
            acc = _v9;
            _loop6: for (;;) {
              const _v10: any = (temps[1] ?? 0);
              acc = _v10;
              const _v11: any = argc;
              acc = _v11;
              const _v12: any = rt.op("<", ...[_v10, _v11]);
              acc = _v12;
              if (!rt.truth(_v12)) break _loop6;
              _continue7: {
                const _v13: any = rt.get(this, "elements");
                acc = _v13;
                const _v14: any = (temps[1] ?? 0);
                acc = _v14;
                const _v15: any = (args[(0 + (Number(_v14) & 65535))] ?? 0);
                acc = _v15;
                const _v16: any = (temps[1] ?? 0);
                acc = _v16;
                const _v17: any = (args[(0 + (Number(_v16) & 65535))] ?? 0);
                acc = _v17;
                const _v18: any = await rt.call(999, "NewNode", [_v15, _v17], this);
                acc = _v18;
                const _v19: any = await rt.call(999, "AddToEnd", [_v13, _v18], this);
                acc = _v19;
                const _v20: any = rt.set(this, "size", rt.op("+", rt.get(this, "size"), 1));
                acc = _v20;
              }
              const _v21: any = (temps[1] = rt.op("+", (temps[1] ?? 0), 1));
              acc = _v21;
            }
            const _v22: any = this;
            acc = _v22;
            return _v22;
            return acc;
          },
          // SCI System.sc: Collect.delete
          "delete": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v3: any = 0;
            acc = _v3;
            const _v4: any = (temps[0] = _v3);
            acc = _v4;
            _loop1: for (;;) {
              const _v5: any = (temps[0] ?? 0);
              acc = _v5;
              const _v6: any = argc;
              acc = _v6;
              const _v7: any = rt.op("<", ...[_v5, _v6]);
              acc = _v7;
              if (!rt.truth(_v7)) break _loop1;
              _continue2: {
                let _v8: any = acc;
                const _v9: any = rt.get(this, "elements");
                acc = _v9;
                const _v10: any = (temps[0] ?? 0);
                acc = _v10;
                const _v11: any = (args[(0 + (Number(_v10) & 65535))] ?? 0);
                acc = _v11;
                const _v12: any = await rt.call(999, "DeleteKey", [_v9, _v11], this);
                acc = _v12;
                _v8 = _v12;
                if (rt.truth(_v12)) {
                  const _v13: any = rt.set(this, "size", rt.op("-", rt.get(this, "size"), 1));
                  acc = _v13;
                  _v8 = _v13;
                }
                acc = _v8;
              }
              const _v14: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
              acc = _v14;
            }
            const _v15: any = this;
            acc = _v15;
            return _v15;
            return acc;
          },
          // SCI System.sc: Collect.dispose
          "dispose": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "elements");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = 103;
              acc = _v3;
              const _v4: any = this;
              acc = _v4;
              const _v5: any = await rt.send(_v4, "eachElementDo", [_v3]);
              acc = _v5;
              _v1 = _v5;
              const _v6: any = rt.get(this, "elements");
              acc = _v6;
              const _v7: any = await rt.call(999, "DisposeList", [_v6], this);
              acc = _v7;
              _v1 = _v7;
            }
            acc = _v1;
            const _v8: any = 0;
            acc = _v8;
            const _v9: any = rt.set(this, "elements", _v8);
            acc = _v9;
            const _v10: any = rt.set(this, "size", _v9);
            acc = _v10;
            const _v11: any = await rt.superSend(this, {"script": 999, "name": "Collect"}, "dispose", []);
            acc = _v11;
            return acc;
          },
          // SCI System.sc: Collect.first
          "first": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "elements");
            acc = _v1;
            const _v2: any = await rt.call(999, "FirstNode", [_v1], this);
            acc = _v2;
            return acc;
          },
          // SCI System.sc: Collect.next
          "next": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = await rt.call(999, "NextNode", [_v1], this);
            acc = _v2;
            return acc;
          },
          // SCI System.sc: Collect.isEmpty
          "isEmpty": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = 0;
            if (!rt.truth(_v1)) {
              const _v2: any = rt.get(this, "elements");
              acc = _v2;
              const _v3: any = 0;
              acc = _v3;
              const _v4: any = rt.op("==", ...[_v2, _v3]);
              acc = _v4;
              _v1 = _v4;
            }
            if (!rt.truth(_v1)) {
              const _v5: any = rt.get(this, "elements");
              acc = _v5;
              const _v6: any = await rt.call(999, "EmptyList", [_v5], this);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return _v1;
            return acc;
          },
          // SCI System.sc: Collect.contains
          "contains": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "elements");
            acc = _v1;
            const _v2: any = (args[0] ?? 0);
            acc = _v2;
            const _v3: any = await rt.call(999, "FindKey", [_v1, _v2], this);
            acc = _v3;
            return acc;
          },
          // SCI System.sc: Collect.eachElementDo
          "eachElementDo": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            const _v3: any = rt.get(this, "elements");
            acc = _v3;
            const _v4: any = await rt.call(999, "FirstNode", [_v3], this);
            acc = _v4;
            const _v5: any = (temps[0] = _v4);
            acc = _v5;
            _loop1: for (;;) {
              const _v6: any = (temps[0] ?? 0);
              acc = _v6;
              if (!rt.truth(_v6)) break _loop1;
              _continue2: {
                const _v7: any = (temps[0] ?? 0);
                acc = _v7;
                const _v8: any = await rt.call(999, "NextNode", [_v7], this);
                acc = _v8;
                const _v9: any = (temps[1] = _v8);
                acc = _v9;
                let _v10: any = acc;
                const _v11: any = (temps[0] ?? 0);
                acc = _v11;
                const _v12: any = await rt.call(999, "NodeValue", [_v11], this);
                acc = _v12;
                const _v13: any = (temps[2] = _v12);
                acc = _v13;
                const _v14: any = await rt.call(999, "IsObject", [_v13], this);
                acc = _v14;
                const _v15: any = rt.op("not", ...[_v14]);
                acc = _v15;
                _v10 = _v15;
                if (rt.truth(_v15)) {
                  return acc;
                  _v10 = acc;
                }
                acc = _v10;
                const _v16: any = (args[0] ?? 0);
                acc = _v16;
                const _v17: any = args.slice(1, argc);
                acc = _v17;
                const _v18: any = (temps[2] ?? 0);
                acc = _v18;
                const _v19: any = await rt.send(_v18, _v16, [..._v17]);
                acc = _v19;
              }
              const _v20: any = (temps[1] ?? 0);
              acc = _v20;
              const _v21: any = (temps[0] = _v20);
              acc = _v21;
            }
            return acc;
          },
          // SCI System.sc: Collect.firstTrue
          "firstTrue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            const _v3: any = rt.get(this, "elements");
            acc = _v3;
            const _v4: any = await rt.call(999, "FirstNode", [_v3], this);
            acc = _v4;
            const _v5: any = (temps[0] = _v4);
            acc = _v5;
            _loop1: for (;;) {
              const _v6: any = (temps[0] ?? 0);
              acc = _v6;
              if (!rt.truth(_v6)) break _loop1;
              _continue2: {
                const _v7: any = (temps[0] ?? 0);
                acc = _v7;
                const _v8: any = await rt.call(999, "NextNode", [_v7], this);
                acc = _v8;
                const _v9: any = (temps[1] = _v8);
                acc = _v9;
                const _v10: any = (temps[0] ?? 0);
                acc = _v10;
                const _v11: any = await rt.call(999, "NodeValue", [_v10], this);
                acc = _v11;
                const _v12: any = (temps[2] = _v11);
                acc = _v12;
                let _v13: any = acc;
                const _v14: any = (args[0] ?? 0);
                acc = _v14;
                const _v15: any = args.slice(1, argc);
                acc = _v15;
                const _v16: any = (temps[2] ?? 0);
                acc = _v16;
                const _v17: any = await rt.send(_v16, _v14, [..._v15]);
                acc = _v17;
                _v13 = _v17;
                if (rt.truth(_v17)) {
                  const _v18: any = (temps[2] ?? 0);
                  acc = _v18;
                  return _v18;
                  _v13 = acc;
                }
                acc = _v13;
              }
              const _v19: any = (temps[1] ?? 0);
              acc = _v19;
              const _v20: any = (temps[0] = _v19);
              acc = _v20;
            }
            const _v21: any = 0;
            acc = _v21;
            return _v21;
            return acc;
          },
          // SCI System.sc: Collect.allTrue
          "allTrue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            const _v3: any = rt.get(this, "elements");
            acc = _v3;
            const _v4: any = await rt.call(999, "FirstNode", [_v3], this);
            acc = _v4;
            const _v5: any = (temps[0] = _v4);
            acc = _v5;
            _loop1: for (;;) {
              const _v6: any = (temps[0] ?? 0);
              acc = _v6;
              if (!rt.truth(_v6)) break _loop1;
              _continue2: {
                const _v7: any = (temps[0] ?? 0);
                acc = _v7;
                const _v8: any = await rt.call(999, "NextNode", [_v7], this);
                acc = _v8;
                const _v9: any = (temps[1] = _v8);
                acc = _v9;
                const _v10: any = (temps[0] ?? 0);
                acc = _v10;
                const _v11: any = await rt.call(999, "NodeValue", [_v10], this);
                acc = _v11;
                const _v12: any = (temps[2] = _v11);
                acc = _v12;
                let _v13: any = acc;
                const _v14: any = (args[0] ?? 0);
                acc = _v14;
                const _v15: any = args.slice(1, argc);
                acc = _v15;
                const _v16: any = (temps[2] ?? 0);
                acc = _v16;
                const _v17: any = await rt.send(_v16, _v14, [..._v15]);
                acc = _v17;
                const _v18: any = rt.op("not", ...[_v17]);
                acc = _v18;
                _v13 = _v18;
                if (rt.truth(_v18)) {
                  const _v19: any = 0;
                  acc = _v19;
                  return _v19;
                  _v13 = acc;
                }
                acc = _v13;
              }
              const _v20: any = (temps[1] ?? 0);
              acc = _v20;
              const _v21: any = (temps[0] = _v20);
              acc = _v21;
            }
            const _v22: any = 1;
            acc = _v22;
            return _v22;
            return acc;
          },
          // SCI System.sc: Collect.release
          "release": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            const _v3: any = rt.get(this, "elements");
            acc = _v3;
            const _v4: any = await rt.call(999, "FirstNode", [_v3], this);
            acc = _v4;
            const _v5: any = (temps[0] = _v4);
            acc = _v5;
            _loop1: for (;;) {
              const _v6: any = (temps[0] ?? 0);
              acc = _v6;
              if (!rt.truth(_v6)) break _loop1;
              _continue2: {
                const _v7: any = (temps[0] ?? 0);
                acc = _v7;
                const _v8: any = await rt.call(999, "NextNode", [_v7], this);
                acc = _v8;
                const _v9: any = (temps[1] = _v8);
                acc = _v9;
                const _v10: any = (temps[0] ?? 0);
                acc = _v10;
                const _v11: any = await rt.call(999, "NodeValue", [_v10], this);
                acc = _v11;
                const _v12: any = this;
                acc = _v12;
                const _v13: any = await rt.send(_v12, "delete", [_v11]);
                acc = _v13;
              }
              const _v14: any = (temps[1] ?? 0);
              acc = _v14;
              const _v15: any = (temps[0] = _v14);
              acc = _v15;
            }
            return acc;
          },
        },
      },
      {
        name: "List",
        className: "Collect",
        parent: {"script": 999, "name": "Collect"},
        isClass: true,
        properties: {},
        methods: {
          // SCI System.sc: List.showStr
          "showStr": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = 999;
            acc = _v2;
            const _v3: any = 1;
            acc = _v3;
            const _v4: any = rt.get(this, "name");
            acc = _v4;
            const _v5: any = rt.get(this, "size");
            acc = _v5;
            const _v6: any = await rt.call(999, "Format", [_v1, _v2, _v3, _v4, _v5], this);
            acc = _v6;
            return acc;
          },
          // SCI System.sc: List.at
          "at": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v3: any = rt.get(this, "elements");
            acc = _v3;
            const _v4: any = await rt.call(999, "FirstNode", [_v3], this);
            acc = _v4;
            const _v5: any = (temps[0] = _v4);
            acc = _v5;
            _loop1: for (;;) {
              let _v6: any = 1;
              if (rt.truth(_v6)) {
                const _v7: any = (args[0] ?? 0);
                acc = _v7;
                _v6 = _v7;
              }
              if (rt.truth(_v6)) {
                const _v8: any = (temps[0] ?? 0);
                acc = _v8;
                _v6 = _v8;
              }
              acc = _v6;
              if (!rt.truth(_v6)) break _loop1;
              _continue2: {
                const _v9: any = (args[0] = rt.op("-", (args[0] ?? 0), 1));
                acc = _v9;
              }
              const _v10: any = (temps[0] ?? 0);
              acc = _v10;
              const _v11: any = await rt.call(999, "NextNode", [_v10], this);
              acc = _v11;
              const _v12: any = (temps[0] = _v11);
              acc = _v12;
            }
            const _v13: any = (temps[0] ?? 0);
            acc = _v13;
            const _v14: any = await rt.call(999, "NodeValue", [_v13], this);
            acc = _v14;
            return acc;
          },
          // SCI System.sc: List.last
          "last": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "elements");
            acc = _v1;
            const _v2: any = await rt.call(999, "LastNode", [_v1], this);
            acc = _v2;
            return acc;
          },
          // SCI System.sc: List.prev
          "prev": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = await rt.call(999, "PrevNode", [_v1], this);
            acc = _v2;
            return acc;
          },
          // SCI System.sc: List.addToFront
          "addToFront": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = rt.get(this, "elements");
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = await rt.call(999, "NewList", [], this);
              acc = _v4;
              const _v5: any = rt.set(this, "elements", _v4);
              acc = _v5;
              _v1 = _v5;
            }
            acc = _v1;
            const _v8: any = argc;
            acc = _v8;
            const _v9: any = 1;
            acc = _v9;
            const _v10: any = rt.op("-", ...[_v8, _v9]);
            acc = _v10;
            const _v11: any = (temps[0] = _v10);
            acc = _v11;
            _loop6: for (;;) {
              const _v12: any = 0;
              acc = _v12;
              const _v13: any = (temps[0] ?? 0);
              acc = _v13;
              const _v14: any = rt.op("<=", ...[_v12, _v13]);
              acc = _v14;
              if (!rt.truth(_v14)) break _loop6;
              _continue7: {
                const _v15: any = rt.get(this, "elements");
                acc = _v15;
                const _v16: any = (temps[0] ?? 0);
                acc = _v16;
                const _v17: any = (args[(0 + (Number(_v16) & 65535))] ?? 0);
                acc = _v17;
                const _v18: any = (temps[0] ?? 0);
                acc = _v18;
                const _v19: any = (args[(0 + (Number(_v18) & 65535))] ?? 0);
                acc = _v19;
                const _v20: any = await rt.call(999, "NewNode", [_v17, _v19], this);
                acc = _v20;
                const _v21: any = await rt.call(999, "AddToFront", [_v15, _v20], this);
                acc = _v21;
                const _v22: any = rt.set(this, "size", rt.op("+", rt.get(this, "size"), 1));
                acc = _v22;
              }
              const _v23: any = (temps[0] = rt.op("-", (temps[0] ?? 0), 1));
              acc = _v23;
            }
            const _v24: any = this;
            acc = _v24;
            return _v24;
            return acc;
          },
          // SCI System.sc: List.addToEnd
          "addToEnd": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = rt.get(this, "elements");
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = await rt.call(999, "NewList", [], this);
              acc = _v4;
              const _v5: any = rt.set(this, "elements", _v4);
              acc = _v5;
              _v1 = _v5;
            }
            acc = _v1;
            const _v8: any = 0;
            acc = _v8;
            const _v9: any = (temps[0] = _v8);
            acc = _v9;
            _loop6: for (;;) {
              const _v10: any = (temps[0] ?? 0);
              acc = _v10;
              const _v11: any = argc;
              acc = _v11;
              const _v12: any = rt.op("<", ...[_v10, _v11]);
              acc = _v12;
              if (!rt.truth(_v12)) break _loop6;
              _continue7: {
                const _v13: any = rt.get(this, "elements");
                acc = _v13;
                const _v14: any = (temps[0] ?? 0);
                acc = _v14;
                const _v15: any = (args[(0 + (Number(_v14) & 65535))] ?? 0);
                acc = _v15;
                const _v16: any = (temps[0] ?? 0);
                acc = _v16;
                const _v17: any = (args[(0 + (Number(_v16) & 65535))] ?? 0);
                acc = _v17;
                const _v18: any = await rt.call(999, "NewNode", [_v15, _v17], this);
                acc = _v18;
                const _v19: any = await rt.call(999, "AddToEnd", [_v13, _v18], this);
                acc = _v19;
                const _v20: any = rt.set(this, "size", rt.op("+", rt.get(this, "size"), 1));
                acc = _v20;
              }
              const _v21: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
              acc = _v21;
            }
            const _v22: any = this;
            acc = _v22;
            return _v22;
            return acc;
          },
          // SCI System.sc: List.addAfter
          "addAfter": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            let _v1: any = acc;
            const _v2: any = rt.get(this, "elements");
            acc = _v2;
            const _v3: any = (args[0] ?? 0);
            acc = _v3;
            const _v4: any = await rt.call(999, "FindKey", [_v2, _v3], this);
            acc = _v4;
            const _v5: any = (temps[2] = _v4);
            acc = _v5;
            _v1 = _v5;
            if (rt.truth(_v5)) {
              const _v6: any = (argc = rt.op("-", argc, 1));
              acc = _v6;
              _v1 = _v6;
              const _v9: any = 0;
              acc = _v9;
              const _v10: any = (temps[0] = _v9);
              acc = _v10;
              _loop7: for (;;) {
                const _v11: any = (temps[0] ?? 0);
                acc = _v11;
                const _v12: any = argc;
                acc = _v12;
                const _v13: any = rt.op("<", ...[_v11, _v12]);
                acc = _v13;
                if (!rt.truth(_v13)) break _loop7;
                _continue8: {
                  const _v14: any = rt.get(this, "elements");
                  acc = _v14;
                  const _v15: any = (temps[2] ?? 0);
                  acc = _v15;
                  const _v16: any = (temps[0] ?? 0);
                  acc = _v16;
                  const _v17: any = (args[(1 + (Number(_v16) & 65535))] ?? 0);
                  acc = _v17;
                  const _v18: any = (temps[0] ?? 0);
                  acc = _v18;
                  const _v19: any = (args[(1 + (Number(_v18) & 65535))] ?? 0);
                  acc = _v19;
                  const _v20: any = await rt.call(999, "NewNode", [_v17, _v19], this);
                  acc = _v20;
                  const _v21: any = await rt.call(999, "AddAfter", [_v14, _v15, _v20], this);
                  acc = _v21;
                  const _v22: any = (temps[2] = _v21);
                  acc = _v22;
                  const _v23: any = rt.set(this, "size", rt.op("+", rt.get(this, "size"), 1));
                  acc = _v23;
                }
                const _v24: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
                acc = _v24;
              }
              _v1 = acc;
            }
            acc = _v1;
            const _v25: any = this;
            acc = _v25;
            return _v25;
            return acc;
          },
          // SCI System.sc: List.indexOf
          "indexOf": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v5: any = rt.get(this, "elements");
            acc = _v5;
            const _v6: any = await rt.call(999, "FirstNode", [_v5], this);
            acc = _v6;
            const _v7: any = (temps[1] = _v6);
            acc = _v7;
            _loop3: for (;;) {
              const _v8: any = (temps[1] ?? 0);
              acc = _v8;
              if (!rt.truth(_v8)) break _loop3;
              _continue4: {
                let _v9: any = acc;
                const _v10: any = (args[0] ?? 0);
                acc = _v10;
                const _v11: any = (temps[1] ?? 0);
                acc = _v11;
                const _v12: any = await rt.call(999, "NodeValue", [_v11], this);
                acc = _v12;
                const _v13: any = rt.op("==", ...[_v10, _v12]);
                acc = _v13;
                _v9 = _v13;
                if (rt.truth(_v13)) {
                  const _v14: any = (temps[0] ?? 0);
                  acc = _v14;
                  return _v14;
                  _v9 = acc;
                }
                acc = _v9;
                const _v15: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
                acc = _v15;
              }
              const _v16: any = (temps[1] ?? 0);
              acc = _v16;
              const _v17: any = await rt.call(999, "NextNode", [_v16], this);
              acc = _v17;
              const _v18: any = (temps[1] = _v17);
              acc = _v18;
            }
            const _v19: any = -1;
            acc = _v19;
            return _v19;
            return acc;
          },
        },
      },
      {
        name: "Set",
        className: "List",
        parent: {"script": 999, "name": "List"},
        isClass: true,
        properties: {},
        methods: {
          // SCI System.sc: Set.showStr
          "showStr": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = 999;
            acc = _v2;
            const _v3: any = 2;
            acc = _v3;
            const _v4: any = rt.get(this, "name");
            acc = _v4;
            const _v5: any = rt.get(this, "size");
            acc = _v5;
            const _v6: any = await rt.call(999, "Format", [_v1, _v2, _v3, _v4, _v5], this);
            acc = _v6;
            return acc;
          },
          // SCI System.sc: Set.add
          "add": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            let _v1: any = acc;
            const _v2: any = rt.get(this, "elements");
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = await rt.call(999, "NewList", [], this);
              acc = _v4;
              const _v5: any = rt.set(this, "elements", _v4);
              acc = _v5;
              _v1 = _v5;
            }
            acc = _v1;
            const _v8: any = 0;
            acc = _v8;
            const _v9: any = (temps[1] = _v8);
            acc = _v9;
            _loop6: for (;;) {
              const _v10: any = (temps[1] ?? 0);
              acc = _v10;
              const _v11: any = argc;
              acc = _v11;
              const _v12: any = rt.op("<", ...[_v10, _v11]);
              acc = _v12;
              if (!rt.truth(_v12)) break _loop6;
              _continue7: {
                const _v13: any = (temps[1] ?? 0);
                acc = _v13;
                const _v14: any = (args[(0 + (Number(_v13) & 65535))] ?? 0);
                acc = _v14;
                const _v15: any = (temps[2] = _v14);
                acc = _v15;
                let _v16: any = acc;
                const _v17: any = (temps[2] ?? 0);
                acc = _v17;
                const _v18: any = this;
                acc = _v18;
                const _v19: any = await rt.send(_v18, "contains", [_v17]);
                acc = _v19;
                const _v20: any = rt.op("not", ...[_v19]);
                acc = _v20;
                _v16 = _v20;
                if (rt.truth(_v20)) {
                  const _v21: any = rt.get(this, "elements");
                  acc = _v21;
                  const _v22: any = (temps[2] ?? 0);
                  acc = _v22;
                  const _v23: any = (temps[2] ?? 0);
                  acc = _v23;
                  const _v24: any = await rt.call(999, "NewNode", [_v22, _v23], this);
                  acc = _v24;
                  const _v25: any = await rt.call(999, "AddToEnd", [_v21, _v24], this);
                  acc = _v25;
                  _v16 = _v25;
                  const _v26: any = rt.set(this, "size", rt.op("+", rt.get(this, "size"), 1));
                  acc = _v26;
                  _v16 = _v26;
                }
                acc = _v16;
              }
              const _v27: any = (temps[1] = rt.op("+", (temps[1] ?? 0), 1));
              acc = _v27;
            }
            return acc;
          },
        },
      },
      {
        name: "EventHandler",
        className: "Set",
        parent: {"script": 999, "name": "Set"},
        isClass: true,
        properties: {},
        methods: {
          // SCI System.sc: EventHandler.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            const _v3: any = rt.get(this, "elements");
            acc = _v3;
            const _v4: any = await rt.call(999, "FirstNode", [_v3], this);
            acc = _v4;
            const _v5: any = (temps[0] = _v4);
            acc = _v5;
            _loop1: for (;;) {
              let _v6: any = 1;
              if (rt.truth(_v6)) {
                const _v7: any = (temps[0] ?? 0);
                acc = _v7;
                _v6 = _v7;
              }
              if (rt.truth(_v6)) {
                const _v8: any = (args[0] ?? 0);
                acc = _v8;
                const _v9: any = await rt.send(_v8, "claimed", []);
                acc = _v9;
                const _v10: any = rt.op("not", ...[_v9]);
                acc = _v10;
                _v6 = _v10;
              }
              acc = _v6;
              if (!rt.truth(_v6)) break _loop1;
              _continue2: {
                const _v11: any = (temps[0] ?? 0);
                acc = _v11;
                const _v12: any = await rt.call(999, "NextNode", [_v11], this);
                acc = _v12;
                const _v13: any = (temps[1] = _v12);
                acc = _v13;
                const _v14: any = (temps[0] ?? 0);
                acc = _v14;
                const _v15: any = await rt.call(999, "NodeValue", [_v14], this);
                acc = _v15;
                const _v16: any = (temps[2] = _v15);
                acc = _v16;
                const _v17: any = await rt.call(999, "IsObject", [_v16], this);
                acc = _v17;
                const _v18: any = rt.op("not", ...[_v17]);
                acc = _v18;
                if (rt.truth(_v18)) break _loop1;
                const _v19: any = (args[0] ?? 0);
                acc = _v19;
                const _v20: any = (temps[2] ?? 0);
                acc = _v20;
                const _v21: any = await rt.send(_v20, "handleEvent", [_v19]);
                acc = _v21;
              }
              const _v22: any = (temps[1] ?? 0);
              acc = _v22;
              const _v23: any = (temps[0] = _v22);
              acc = _v23;
            }
            const _v24: any = (args[0] ?? 0);
            acc = _v24;
            const _v25: any = await rt.send(_v24, "claimed", []);
            acc = _v25;
            return acc;
          },
        },
      },
      {
        name: "Script",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: true,
        properties: {"client": 0, "state": -1, "start": 0, "timer": 0, "cycles": 0, "seconds": 0, "lastSeconds": 0, "register": 0, "script": 0, "caller": 0, "register2": 0},
        methods: {
          // SCI System.sc: Script.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = rt.get(this, "script");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = rt.get(this, "script");
              acc = _v3;
              const _v4: any = await rt.send(_v3, "doit", []);
              acc = _v4;
              _v1 = _v4;
            }
            acc = _v1;
            let _v5: any = acc;
            _branch6: {
              const _v7: any = rt.get(this, "cycles");
              acc = _v7;
              _v5 = _v7;
              acc = _v5;
              if (rt.truth(_v5)) {
                let _v8: any = acc;
                const _v9: any = rt.set(this, "cycles", rt.op("-", rt.get(this, "cycles"), 1));
                acc = _v9;
                const _v10: any = rt.op("not", ...[_v9]);
                acc = _v10;
                _v8 = _v10;
                if (rt.truth(_v10)) {
                  const _v11: any = this;
                  acc = _v11;
                  const _v12: any = await rt.send(_v11, "cue", []);
                  acc = _v12;
                  _v8 = _v12;
                }
                acc = _v8;
                _v5 = _v8;
                break _branch6;
              }
              const _v13: any = rt.get(this, "seconds");
              acc = _v13;
              _v5 = _v13;
              acc = _v5;
              if (rt.truth(_v5)) {
                const _v14: any = 1;
                acc = _v14;
                const _v15: any = await rt.call(999, "GetTime", [_v14], this);
                acc = _v15;
                const _v16: any = (temps[0] = _v15);
                acc = _v16;
                _v5 = _v16;
                let _v17: any = acc;
                const _v18: any = rt.get(this, "lastSeconds");
                acc = _v18;
                const _v19: any = (temps[0] ?? 0);
                acc = _v19;
                const _v20: any = rt.op("!=", ...[_v18, _v19]);
                acc = _v20;
                _v17 = _v20;
                if (rt.truth(_v20)) {
                  const _v21: any = (temps[0] ?? 0);
                  acc = _v21;
                  const _v22: any = rt.set(this, "lastSeconds", _v21);
                  acc = _v22;
                  _v17 = _v22;
                  let _v23: any = acc;
                  const _v24: any = rt.set(this, "seconds", rt.op("-", rt.get(this, "seconds"), 1));
                  acc = _v24;
                  const _v25: any = rt.op("not", ...[_v24]);
                  acc = _v25;
                  _v23 = _v25;
                  if (rt.truth(_v25)) {
                    const _v26: any = this;
                    acc = _v26;
                    const _v27: any = await rt.send(_v26, "cue", []);
                    acc = _v27;
                    _v23 = _v27;
                  }
                  acc = _v23;
                  _v17 = _v23;
                }
                acc = _v17;
                _v5 = _v17;
                break _branch6;
              }
            }
            acc = _v5;
            return acc;
          },
          // SCI System.sc: Script.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.set(this, "register2", _v1);
            acc = _v2;
            const _v3: any = rt.set(this, "register", _v2);
            acc = _v3;
            let _v4: any = acc;
            const _v5: any = argc;
            acc = _v5;
            const _v6: any = 1;
            acc = _v6;
            const _v7: any = rt.op(">=", ...[_v5, _v6]);
            acc = _v7;
            _v4 = _v7;
            if (rt.truth(_v7)) {
              const _v8: any = (args[0] ?? 0);
              acc = _v8;
              const _v9: any = rt.set(this, "client", _v8);
              acc = _v9;
              _v4 = _v9;
              let _v10: any = acc;
              const _v11: any = argc;
              acc = _v11;
              const _v12: any = 2;
              acc = _v12;
              const _v13: any = rt.op(">=", ...[_v11, _v12]);
              acc = _v13;
              _v10 = _v13;
              if (rt.truth(_v13)) {
                const _v14: any = (args[1] ?? 0);
                acc = _v14;
                const _v15: any = rt.set(this, "caller", _v14);
                acc = _v15;
                _v10 = _v15;
                let _v16: any = acc;
                const _v17: any = argc;
                acc = _v17;
                const _v18: any = 3;
                acc = _v18;
                const _v19: any = rt.op(">=", ...[_v17, _v18]);
                acc = _v19;
                _v16 = _v19;
                if (rt.truth(_v19)) {
                  const _v20: any = (args[2] ?? 0);
                  acc = _v20;
                  const _v21: any = rt.set(this, "register", _v20);
                  acc = _v21;
                  _v16 = _v21;
                  let _v22: any = acc;
                  const _v23: any = argc;
                  acc = _v23;
                  const _v24: any = 4;
                  acc = _v24;
                  const _v25: any = rt.op(">=", ...[_v23, _v24]);
                  acc = _v25;
                  _v22 = _v25;
                  if (rt.truth(_v25)) {
                    const _v26: any = (args[3] ?? 0);
                    acc = _v26;
                    const _v27: any = rt.set(this, "register2", _v26);
                    acc = _v27;
                    _v22 = _v27;
                  }
                  acc = _v22;
                  _v16 = _v22;
                }
                acc = _v16;
                _v10 = _v16;
              }
              acc = _v10;
              _v4 = _v10;
            }
            acc = _v4;
            const _v28: any = rt.get(this, "start");
            acc = _v28;
            const _v29: any = this;
            acc = _v29;
            const _v30: any = await rt.send(_v29, "changeState", [_v28]);
            acc = _v30;
            return acc;
          },
          // SCI System.sc: Script.dispose
          "dispose": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "script");
            acc = _v2;
            const _v3: any = await rt.call(999, "IsObject", [_v2], this);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = rt.get(this, "script");
              acc = _v4;
              const _v5: any = await rt.send(_v4, "dispose", []);
              acc = _v5;
              _v1 = _v5;
            }
            acc = _v1;
            let _v6: any = acc;
            const _v7: any = rt.get(this, "timer");
            acc = _v7;
            const _v8: any = await rt.call(999, "IsObject", [_v7], this);
            acc = _v8;
            _v6 = _v8;
            if (rt.truth(_v8)) {
              const _v9: any = rt.get(this, "timer");
              acc = _v9;
              const _v10: any = await rt.send(_v9, "dispose", []);
              acc = _v10;
              _v6 = _v10;
            }
            acc = _v6;
            let _v11: any = acc;
            const _v12: any = rt.get(this, "client");
            acc = _v12;
            const _v13: any = await rt.call(999, "IsObject", [_v12], this);
            acc = _v13;
            _v11 = _v13;
            if (rt.truth(_v13)) {
              const _v14: any = 0;
              acc = _v14;
              const _v15: any = rt.get(this, "client");
              acc = _v15;
              const _v16: any = await rt.send(_v15, "script", [_v14]);
              acc = _v16;
              _v11 = _v16;
            }
            acc = _v11;
            let _v17: any = acc;
            const _v18: any = rt.get(this, "caller");
            acc = _v18;
            const _v19: any = await rt.call(999, "IsObject", [_v18], this);
            acc = _v19;
            _v17 = _v19;
            if (rt.truth(_v19)) {
              const _v20: any = rt.get(this, "register");
              acc = _v20;
              const _v21: any = rt.get(this, "caller");
              acc = _v21;
              const _v22: any = await rt.send(_v21, "cue", [_v20]);
              acc = _v22;
              _v17 = _v22;
            }
            acc = _v17;
            const _v23: any = await rt.superSend(this, {"script": 999, "name": "Script"}, "dispose", []);
            acc = _v23;
            return acc;
          },
          // SCI System.sc: Script.changeState
          "changeState": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = rt.set(this, "state", _v1);
            acc = _v2;
            return acc;
          },
          // SCI System.sc: Script.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "state");
            acc = _v1;
            const _v2: any = 1;
            acc = _v2;
            const _v3: any = rt.op("+", ...[_v1, _v2]);
            acc = _v3;
            const _v4: any = args.slice(0, argc);
            acc = _v4;
            const _v5: any = this;
            acc = _v5;
            const _v6: any = await rt.send(_v5, "changeState", [_v3, ..._v4]);
            acc = _v6;
            return acc;
          },
          // SCI System.sc: Script.setScript
          "setScript": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "script");
            acc = _v2;
            const _v3: any = await rt.call(999, "IsObject", [_v2], this);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = rt.get(this, "script");
              acc = _v4;
              const _v5: any = await rt.send(_v4, "dispose", []);
              acc = _v5;
              _v1 = _v5;
            }
            acc = _v1;
            let _v6: any = acc;
            const _v7: any = (args[0] ?? 0);
            acc = _v7;
            const _v8: any = rt.set(this, "script", _v7);
            acc = _v8;
            _v6 = _v8;
            if (rt.truth(_v8)) {
              const _v9: any = this;
              acc = _v9;
              const _v10: any = args.slice(1, argc);
              acc = _v10;
              const _v11: any = rt.get(this, "script");
              acc = _v11;
              const _v12: any = await rt.send(_v11, "init", [_v9, ..._v10]);
              acc = _v12;
              _v6 = _v12;
            }
            acc = _v6;
            return acc;
          },
          // SCI System.sc: Script.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "script");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = (args[0] ?? 0);
              acc = _v3;
              const _v4: any = rt.get(this, "script");
              acc = _v4;
              const _v5: any = await rt.send(_v4, "handleEvent", [_v3]);
              acc = _v5;
              _v1 = _v5;
            }
            acc = _v1;
            const _v6: any = (args[0] ?? 0);
            acc = _v6;
            const _v7: any = await rt.send(_v6, "claimed", []);
            acc = _v7;
            return acc;
          },
        },
      },
      {
        name: "Event",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: true,
        properties: {"type": 0, "message": 0, "modifiers": 0, "y": 0, "x": 0, "claimed": 0, "port": 0},
        methods: {
          // SCI System.sc: Event.new
          "new": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            const _v1: any = await rt.superSend(this, {"script": 999, "name": "Event"}, "new", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = argc;
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = (args[0] ?? 0);
              acc = _v5;
              _v3 = _v5;
            } else {
              const _v6: any = 32767;
              acc = _v6;
              _v3 = _v6;
            }
            acc = _v3;
            const _v7: any = (temps[0] ?? 0);
            acc = _v7;
            const _v8: any = await rt.call(999, "GetEvent", [_v3, _v7], this);
            acc = _v8;
            let _v9: any = acc;
            const _v10: any = (temps[0] ?? 0);
            acc = _v10;
            const _v11: any = await rt.send(_v10, "type", []);
            acc = _v11;
            const _v12: any = 256;
            acc = _v12;
            const _v13: any = rt.op("==", ...[_v11, _v12]);
            acc = _v13;
            _v9 = _v13;
            if (rt.truth(_v13)) {
              const _v14: any = 4;
              acc = _v14;
              let _v15: any = acc;
              const _v16: any = (temps[0] ?? 0);
              acc = _v16;
              const _v17: any = await rt.send(_v16, "modifiers", []);
              acc = _v17;
              const _v18: any = 3;
              acc = _v18;
              const _v19: any = rt.op("&", ...[_v17, _v18]);
              acc = _v19;
              _v15 = _v19;
              if (rt.truth(_v19)) {
                const _v20: any = 27;
                acc = _v20;
                _v15 = _v20;
              } else {
                const _v21: any = 13;
                acc = _v21;
                _v15 = _v21;
              }
              acc = _v15;
              const _v22: any = (temps[0] ?? 0);
              acc = _v22;
              const _v23: any = await rt.send(_v22, "type", [_v14]);
              acc = _v23;
              const _v24: any = await rt.send(_v22, "message", [_v15]);
              acc = _v24;
              _v9 = _v24;
            }
            acc = _v9;
            let _v25: any = acc;
            let _v26: any = 0;
            if (!rt.truth(_v26)) {
              const _v27: any = (temps[0] ?? 0);
              acc = _v27;
              const _v28: any = await rt.send(_v27, "type", []);
              acc = _v28;
              const _v29: any = 2;
              acc = _v29;
              const _v30: any = rt.op("==", ...[_v28, _v29]);
              acc = _v30;
              _v26 = _v30;
            }
            if (!rt.truth(_v26)) {
              const _v31: any = (temps[0] ?? 0);
              acc = _v31;
              const _v32: any = await rt.send(_v31, "type", []);
              acc = _v32;
              const _v33: any = 1;
              acc = _v33;
              const _v34: any = rt.op("==", ...[_v32, _v33]);
              acc = _v34;
              _v26 = _v34;
            }
            acc = _v26;
            _v25 = _v26;
            if (rt.truth(_v26)) {
              const _v35: any = 0;
              acc = _v35;
              const _v36: any = rt.setGlobal(447, _v35);
              acc = _v36;
              _v25 = _v36;
            }
            acc = _v25;
            let _v37: any = acc;
            const _v38: any = (temps[0] ?? 0);
            acc = _v38;
            const _v39: any = await rt.send(_v38, "type", []);
            acc = _v39;
            const _v40: any = 4;
            acc = _v40;
            const _v41: any = rt.op("==", ...[_v39, _v40]);
            acc = _v41;
            _v37 = _v41;
            if (rt.truth(_v41)) {
              const _v42: any = 1;
              acc = _v42;
              const _v43: any = rt.setGlobal(447, _v42);
              acc = _v43;
              _v37 = _v43;
            }
            acc = _v37;
            const _v44: any = (temps[0] ?? 0);
            acc = _v44;
            return _v44;
            return acc;
          },
          // SCI System.sc: Event.localize
          "localize": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            const _v1: any = await rt.call(999, "GetPort", [], this);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = argc;
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = (args[0] ?? 0);
              acc = _v5;
              _v3 = _v5;
            } else {
              const _v6: any = (temps[0] ?? 0);
              acc = _v6;
              _v3 = _v6;
            }
            acc = _v3;
            const _v7: any = (temps[1] = _v3);
            acc = _v7;
            let _v8: any = acc;
            _branch9: {
              const _v10: any = rt.get(this, "port");
              acc = _v10;
              const _v11: any = rt.op("not", ...[_v10]);
              acc = _v11;
              _v8 = _v11;
              acc = _v8;
              if (rt.truth(_v8)) {
                const _v12: any = (temps[1] ?? 0);
                acc = _v12;
                const _v13: any = await rt.call(999, "SetPort", [_v12], this);
                acc = _v13;
                _v8 = _v13;
                const _v14: any = this;
                acc = _v14;
                const _v15: any = await rt.call(999, "GlobalToLocal", [_v14], this);
                acc = _v15;
                _v8 = _v15;
                break _branch9;
              }
              const _v16: any = (temps[1] ?? 0);
              acc = _v16;
              const _v17: any = rt.op("not", ...[_v16]);
              acc = _v17;
              _v8 = _v17;
              acc = _v8;
              if (rt.truth(_v8)) {
                const _v18: any = rt.get(this, "port");
                acc = _v18;
                const _v19: any = await rt.call(999, "SetPort", [_v18], this);
                acc = _v19;
                _v8 = _v19;
                const _v20: any = this;
                acc = _v20;
                const _v21: any = await rt.call(999, "LocalToGlobal", [_v20], this);
                acc = _v21;
                _v8 = _v21;
                break _branch9;
              }
              const _v22: any = rt.get(this, "port");
              acc = _v22;
              const _v23: any = (temps[1] ?? 0);
              acc = _v23;
              const _v24: any = rt.op("!=", ...[_v22, _v23]);
              acc = _v24;
              _v8 = _v24;
              acc = _v8;
              if (rt.truth(_v8)) {
                const _v25: any = rt.get(this, "port");
                acc = _v25;
                const _v26: any = await rt.call(999, "SetPort", [_v25], this);
                acc = _v26;
                _v8 = _v26;
                const _v27: any = this;
                acc = _v27;
                const _v28: any = await rt.call(999, "LocalToGlobal", [_v27], this);
                acc = _v28;
                _v8 = _v28;
                const _v29: any = (temps[1] ?? 0);
                acc = _v29;
                const _v30: any = await rt.call(999, "SetPort", [_v29], this);
                acc = _v30;
                _v8 = _v30;
                const _v31: any = this;
                acc = _v31;
                const _v32: any = await rt.call(999, "GlobalToLocal", [_v31], this);
                acc = _v32;
                _v8 = _v32;
                break _branch9;
              }
            }
            acc = _v8;
            const _v33: any = (temps[0] ?? 0);
            acc = _v33;
            const _v34: any = await rt.call(999, "SetPort", [_v33], this);
            acc = _v34;
            const _v35: any = (temps[1] ?? 0);
            acc = _v35;
            const _v36: any = rt.set(this, "port", _v35);
            acc = _v36;
            return acc;
          },
          // SCI System.sc: Event.globalize
          "globalize": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.call(999, "GetPort", [], this);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            _branch4: {
              const _v5: any = rt.get(this, "port");
              acc = _v5;
              const _v6: any = (temps[0] ?? 0);
              acc = _v6;
              const _v7: any = rt.op("==", ...[_v5, _v6]);
              acc = _v7;
              _v3 = _v7;
              acc = _v3;
              if (rt.truth(_v3)) {
                const _v8: any = this;
                acc = _v8;
                const _v9: any = await rt.call(999, "LocalToGlobal", [_v8], this);
                acc = _v9;
                _v3 = _v9;
                break _branch4;
              }
              const _v10: any = rt.get(this, "port");
              acc = _v10;
              _v3 = _v10;
              acc = _v3;
              if (rt.truth(_v3)) {
                const _v11: any = rt.get(this, "port");
                acc = _v11;
                const _v12: any = await rt.call(999, "SetPort", [_v11], this);
                acc = _v12;
                _v3 = _v12;
                const _v13: any = this;
                acc = _v13;
                const _v14: any = await rt.call(999, "LocalToGlobal", [_v13], this);
                acc = _v14;
                _v3 = _v14;
                const _v15: any = (temps[0] ?? 0);
                acc = _v15;
                const _v16: any = await rt.call(999, "SetPort", [_v15], this);
                acc = _v16;
                _v3 = _v16;
                break _branch4;
              }
            }
            acc = _v3;
            const _v17: any = 0;
            acc = _v17;
            const _v18: any = rt.set(this, "port", _v17);
            acc = _v18;
            return acc;
          },
        },
      },
    ],
    procedures: {
      // SCI System.sc: sign
      "sign": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        let _v1: any = acc;
        const _v2: any = (args[0] ?? 0);
        acc = _v2;
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = rt.op("<", ...[_v2, _v3]);
        acc = _v4;
        _v1 = _v4;
        if (rt.truth(_v4)) {
          const _v5: any = -1;
          acc = _v5;
          _v1 = _v5;
        } else {
          const _v6: any = (args[0] ?? 0);
          acc = _v6;
          const _v7: any = 0;
          acc = _v7;
          const _v8: any = rt.op(">", ...[_v6, _v7]);
          acc = _v8;
          _v1 = _v8;
        }
        acc = _v1;
        return _v1;
        return acc;
      },
      // SCI System.sc: umod
      "umod": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        let _v1: any = acc;
        const _v2: any = (args[1] ?? 0);
        acc = _v2;
        const _v3: any = (args[0] ?? 0);
        acc = _v3;
        const _v4: any = (args[1] ?? 0);
        acc = _v4;
        const _v5: any = rt.op("/", ...[_v3, _v4]);
        acc = _v5;
        const _v6: any = rt.op("*", ...[_v2, _v5]);
        acc = _v6;
        const _v7: any = (args[0] = rt.op("-", (args[0] ?? 0), _v6));
        acc = _v7;
        const _v8: any = 0;
        acc = _v8;
        const _v9: any = rt.op("<", ...[_v7, _v8]);
        acc = _v9;
        _v1 = _v9;
        if (rt.truth(_v9)) {
          const _v10: any = (args[1] ?? 0);
          acc = _v10;
          const _v11: any = (args[0] = rt.op("+", (args[0] ?? 0), _v10));
          acc = _v11;
          _v1 = _v11;
        }
        acc = _v1;
        const _v12: any = (args[0] ?? 0);
        acc = _v12;
        return _v12;
        return acc;
      },
      // SCI System.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        let _v1: any = 1;
        if (rt.truth(_v1)) {
          const _v2: any = (args[0] ?? 0);
          acc = _v2;
          let _v3: any = _v2;
          let _v4: any = 1;
          if (rt.truth(_v4)) {
            let _v5: any = acc;
            const _v6: any = argc;
            acc = _v6;
            const _v7: any = 6;
            acc = _v7;
            const _v8: any = rt.op("<", ...[_v6, _v7]);
            acc = _v8;
            _v5 = _v8;
            if (rt.truth(_v8)) {
              const _v9: any = (args[4] ?? 0);
              acc = _v9;
              const _v10: any = await rt.send(_v9, "x", []);
              acc = _v10;
              _v5 = _v10;
            } else {
              const _v11: any = (args[4] ?? 0);
              acc = _v11;
              _v5 = _v11;
            }
            acc = _v5;
            _v4 = rt.op("<=", _v3, _v5);
            _v3 = _v5;
          }
          if (rt.truth(_v4)) {
            const _v12: any = (args[2] ?? 0);
            acc = _v12;
            _v4 = rt.op("<=", _v3, _v12);
            _v3 = _v12;
          }
          acc = _v4;
          _v1 = _v4;
        }
        if (rt.truth(_v1)) {
          const _v13: any = (args[1] ?? 0);
          acc = _v13;
          let _v14: any = _v13;
          let _v15: any = 1;
          if (rt.truth(_v15)) {
            let _v16: any = acc;
            const _v17: any = argc;
            acc = _v17;
            const _v18: any = 6;
            acc = _v18;
            const _v19: any = rt.op("<", ...[_v17, _v18]);
            acc = _v19;
            _v16 = _v19;
            if (rt.truth(_v19)) {
              const _v20: any = (args[4] ?? 0);
              acc = _v20;
              const _v21: any = await rt.send(_v20, "y", []);
              acc = _v21;
              _v16 = _v21;
            } else {
              const _v22: any = (args[5] ?? 0);
              acc = _v22;
              _v16 = _v22;
            }
            acc = _v16;
            _v15 = rt.op("<=", _v14, _v16);
            _v14 = _v16;
          }
          if (rt.truth(_v15)) {
            const _v23: any = (args[3] ?? 0);
            acc = _v23;
            _v15 = rt.op("<=", _v14, _v23);
            _v14 = _v23;
          }
          acc = _v15;
          _v1 = _v15;
        }
        acc = _v1;
        return _v1;
        return acc;
      },
    },
    exports: {"0": "sign", "1": "umod"},
  });
}
