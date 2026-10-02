// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/marblePath.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: a49559377a31451898a8e56fbc62642770f43bd30184d98af5634a4b626938f7
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(101, {
    name: "marblePath",
    uses: [0, 992],
    locals: [170, 144, 150, 156, 162, 168, 174, 180, 186, 192, 198, 204, 210, 216, 222, 228, 234, 240, 246, 252, 258, 264, 270, 276, 282, 280, 275, 270, 264, 259, 257, 259, 264, 270, 276, 282, 288, 294, 299, 304, 306, 306, 304, 299, 294, 288, 282, 276, 281, 286, 291, 296, 301, 305, 305, 306, 306, 306, 306, 307, 307, 304, 299, 294, 288, 282, 276, 270, 264, 258, 252, 246, 240, 234, 228, 222, 216, 210, 204, 198, 193, 188, 183, 178, 172, 167, 162, 158, 152, 148, 143, 138, 133, 128, 123, 118, 113, 108, 103, 97, 91, 85, 79, 73, 67, 61, 55, 49, 43, 37, 31, 25, 19, 14, 11, 11, 14, 19, 21, 23, 24, 30, 36, 42, 48, 54, 59, 62, 63, 62, 61, 58, 54, 49, 43, 37, 31, 25, 19, 16, 14, 13, 15, 19, 24, 29, 34, 39, 40, 38, 33, 29, 35, 41, 47, 53, 58, 63, 68, 74, 80, 86, 92, 98, 104, 109, 115, 120, 126, 132, 138, 170, 37, 37, 38, 39, 40, 40, 39, 39, 39, 39, 39, 40, 40, 40, 40, 40, 39, 38, 37, 37, 38, 39, 40, 39, 43, 47, 52, 55, 60, 66, 72, 76, 79, 80, 81, 83, 86, 89, 94, 100, 106, 112, 117, 119, 120, 121, 121, 126, 128, 130, 133, 137, 142, 148, 152, 158, 164, 170, 176, 182, 187, 189, 189, 189, 188, 187, 187, 188, 188, 188, 190, 191, 190, 189, 188, 188, 189, 189, 189, 186, 184, 179, 177, 175, 173, 169, 169, 169, 169, 170, 173, 176, 180, 183, 185, 187, 188, 188, 188, 188, 188, 187, 186, 185, 185, 185, 186, 187, 187, 187, 187, 187, 183, 178, 173, 167, 162, 157, 153, 149, 150, 150, 150, 150, 149, 146, 141, 135, 129, 123, 118, 114, 111, 110, 109, 108, 107, 105, 100, 94, 88, 83, 78, 74, 70, 66, 63, 59, 54, 50, 45, 45, 45, 44, 44, 42, 40, 37, 37, 37, 38, 38, 39, 39, 39, 39, 39, 38, 38, 37],
    objects: [
      {
        name: "MarblePath",
        className: "MoveTo",
        parent: {"script": 992, "name": "MoveTo"},
        isClass: true,
        properties: {"index": 1, "theDirection": 0, "finalDest": 0, "lastPlace": 0, "destIndex": 0, "firstMove": 1},
        methods: {
          // SCI marblePath.sc: MarblePath.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = rt.set(this, "client", _v1);
            acc = _v2;
            const _v3: any = (args[3] ?? 0);
            acc = _v3;
            const _v4: any = rt.set(this, "caller", _v3);
            acc = _v4;
            const _v5: any = (args[2] ?? 0);
            acc = _v5;
            const _v6: any = rt.set(this, "finalDest", _v5);
            acc = _v6;
            const _v7: any = (args[1] ?? 0);
            acc = _v7;
            const _v8: any = rt.set(this, "lastPlace", _v7);
            acc = _v8;
            const _v9: any = rt.get(this, "client");
            acc = _v9;
            const _v10: any = await rt.send(_v9, "moveSpeed", []);
            acc = _v10;
            const _v11: any = 1;
            acc = _v11;
            const _v12: any = rt.op("-", ...[_v10, _v11]);
            acc = _v12;
            const _v13: any = rt.set(this, "b-moveCnt", _v12);
            acc = _v13;
            const _v14: any = rt.get(this, "finalDest");
            acc = _v14;
            const _v15: any = rt.global(301);
            acc = _v15;
            const _v16: any = await rt.send(_v15, "at", [_v14]);
            acc = _v16;
            const _v17: any = await rt.send(_v16, "index", []);
            acc = _v17;
            const _v18: any = rt.set(this, "destIndex", _v17);
            acc = _v18;
            const _v19: any = rt.get(this, "client");
            acc = _v19;
            const _v20: any = await rt.send(_v19, "x", []);
            acc = _v20;
            const _v21: any = rt.set(this, "x", _v20);
            acc = _v21;
            const _v22: any = rt.get(this, "client");
            acc = _v22;
            const _v23: any = await rt.send(_v22, "y", []);
            acc = _v23;
            const _v24: any = rt.set(this, "y", _v23);
            acc = _v24;
            const _v25: any = 1;
            acc = _v25;
            const _v26: any = rt.set(this, "firstMove", _v25);
            acc = _v26;
            const _v27: any = this;
            acc = _v27;
            const _v28: any = await rt.send(_v27, "setDirection", []);
            acc = _v28;
            const _v29: any = await rt.send(_v27, "next", []);
            acc = _v29;
            const _v30: any = rt.object(992, "Fwd");
            acc = _v30;
            const _v31: any = rt.global(303);
            acc = _v31;
            const _v32: any = await rt.send(_v31, "setCycle", [_v30]);
            acc = _v32;
            return acc;
          },
          // SCI marblePath.sc: MarblePath.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "client");
            acc = _v2;
            const _v3: any = await rt.send(_v2, "moveSpeed", []);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = rt.set(this, "b-moveCnt", rt.op("+", rt.get(this, "b-moveCnt"), 1));
              acc = _v4;
              _v1 = _v4;
              let _v5: any = acc;
              const _v6: any = rt.get(this, "b-moveCnt");
              acc = _v6;
              const _v7: any = rt.get(this, "client");
              acc = _v7;
              const _v8: any = await rt.send(_v7, "moveSpeed", []);
              acc = _v8;
              const _v9: any = rt.op("==", ...[_v6, _v8]);
              acc = _v9;
              _v5 = _v9;
              if (rt.truth(_v9)) {
                const _v10: any = 0;
                acc = _v10;
                const _v11: any = rt.set(this, "b-moveCnt", _v10);
                acc = _v11;
                _v5 = _v11;
                const _v12: any = this;
                acc = _v12;
                const _v13: any = await rt.send(_v12, "next", []);
                acc = _v13;
                _v5 = _v13;
                let _v14: any = acc;
                const _v15: any = rt.get(this, "index");
                acc = _v15;
                const _v16: any = rt.get(this, "destIndex");
                acc = _v16;
                const _v17: any = rt.op("==", ...[_v15, _v16]);
                acc = _v17;
                _v14 = _v17;
                if (rt.truth(_v17)) {
                  const _v18: any = 0;
                  acc = _v18;
                  const _v19: any = rt.global(303);
                  acc = _v19;
                  const _v20: any = await rt.send(_v19, "setCycle", [_v18]);
                  acc = _v20;
                  const _v21: any = await rt.send(_v19, "stopUpd", []);
                  acc = _v21;
                  _v14 = _v21;
                  const _v22: any = this;
                  acc = _v22;
                  const _v23: any = await rt.send(_v22, "moveDone", []);
                  acc = _v23;
                  _v14 = _v23;
                }
                acc = _v14;
                _v5 = _v14;
              }
              acc = _v5;
              _v1 = _v5;
            }
            acc = _v1;
            return acc;
          },
          // SCI marblePath.sc: MarblePath.next
          "next": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            _branch2: {
              const _v3: any = rt.get(this, "firstMove");
              acc = _v3;
              _v1 = _v3;
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v4: any = 0;
                acc = _v4;
                const _v5: any = rt.set(this, "firstMove", _v4);
                acc = _v5;
                _v1 = _v5;
                break _branch2;
              }
              const _v6: any = rt.get(this, "theDirection");
              acc = _v6;
              const _v7: any = 1;
              acc = _v7;
              const _v8: any = rt.op("==", ...[_v6, _v7]);
              acc = _v8;
              _v1 = _v8;
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v9: any = rt.set(this, "index", rt.op("+", rt.get(this, "index"), 1));
                acc = _v9;
                _v1 = _v9;
                break _branch2;
              }
              const _v10: any = rt.set(this, "index", rt.op("-", rt.get(this, "index"), 1));
              acc = _v10;
              _v1 = _v10;
              break _branch2;
            }
            acc = _v1;
            const _v11: any = this;
            acc = _v11;
            const _v12: any = await rt.send(_v11, "at", []);
            acc = _v12;
            const _v13: any = rt.get(this, "client");
            acc = _v13;
            const _v14: any = await rt.send(_v13, "x", []);
            acc = _v14;
            const _v15: any = rt.get(this, "client");
            acc = _v15;
            const _v16: any = await rt.send(_v15, "y", []);
            acc = _v16;
            const _v17: any = rt.get(this, "x");
            acc = _v17;
            const _v18: any = rt.get(this, "y");
            acc = _v18;
            const _v19: any = await rt.call(101, "GetAngle", [_v14, _v16, _v17, _v18], this);
            acc = _v19;
            const _v20: any = rt.get(this, "client");
            acc = _v20;
            const _v21: any = await rt.send(_v20, "heading", [_v19]);
            acc = _v21;
            const _v22: any = rt.get(this, "x");
            acc = _v22;
            const _v23: any = rt.get(this, "y");
            acc = _v23;
            const _v24: any = rt.get(this, "client");
            acc = _v24;
            const _v25: any = await rt.send(_v24, "posn", [_v22, _v23]);
            acc = _v25;
            let _v26: any = acc;
            const _v27: any = rt.get(this, "client");
            acc = _v27;
            const _v28: any = await rt.send(_v27, "looper", []);
            acc = _v28;
            _v26 = _v28;
            if (rt.truth(_v28)) {
              const _v29: any = rt.get(this, "client");
              acc = _v29;
              const _v30: any = rt.get(this, "client");
              acc = _v30;
              const _v31: any = await rt.send(_v30, "heading", []);
              acc = _v31;
              const _v32: any = rt.get(this, "client");
              acc = _v32;
              const _v33: any = await rt.send(_v32, "looper", []);
              acc = _v33;
              const _v34: any = await rt.send(_v33, "doit", [_v29, _v31]);
              acc = _v34;
              _v26 = _v34;
            }
            acc = _v26;
            return acc;
          },
          // SCI marblePath.sc: MarblePath.at
          "at": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "index");
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = 0;
              acc = _v4;
              const _v5: any = rt.local(101, (0 + (Number(_v4) & 65535)));
              acc = _v5;
              const _v6: any = rt.set(this, "index", _v5);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            let _v7: any = acc;
            const _v8: any = rt.get(this, "index");
            acc = _v8;
            const _v9: any = 0;
            acc = _v9;
            const _v10: any = rt.local(101, (0 + (Number(_v9) & 65535)));
            acc = _v10;
            const _v11: any = 1;
            acc = _v11;
            const _v12: any = rt.op("+", ...[_v10, _v11]);
            acc = _v12;
            const _v13: any = rt.op("==", ...[_v8, _v12]);
            acc = _v13;
            _v7 = _v13;
            if (rt.truth(_v13)) {
              const _v14: any = 1;
              acc = _v14;
              const _v15: any = rt.set(this, "index", _v14);
              acc = _v15;
              _v7 = _v15;
            }
            acc = _v7;
            const _v16: any = rt.get(this, "index");
            acc = _v16;
            const _v17: any = rt.local(101, (0 + (Number(_v16) & 65535)));
            acc = _v17;
            const _v18: any = rt.set(this, "x", _v17);
            acc = _v18;
            const _v19: any = rt.get(this, "index");
            acc = _v19;
            const _v20: any = rt.local(101, (171 + (Number(_v19) & 65535)));
            acc = _v20;
            const _v21: any = rt.set(this, "y", _v20);
            acc = _v21;
            return acc;
          },
          // SCI marblePath.sc: MarblePath.setDirection
          "setDirection": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0];
            const _v3: any = 0;
            acc = _v3;
            const _v4: any = (temps[1] = _v3);
            acc = _v4;
            _loop1: for (;;) {
              const _v5: any = (temps[1] ?? 0);
              acc = _v5;
              const _v6: any = 0;
              acc = _v6;
              const _v7: any = rt.local(101, (0 + (Number(_v6) & 65535)));
              acc = _v7;
              const _v8: any = rt.op("<=", ...[_v5, _v7]);
              acc = _v8;
              if (!rt.truth(_v8)) break _loop1;
              _continue2: {
                let _v9: any = acc;
                let _v10: any = 1;
                if (rt.truth(_v10)) {
                  const _v11: any = rt.get(this, "x");
                  acc = _v11;
                  const _v12: any = (temps[1] ?? 0);
                  acc = _v12;
                  const _v13: any = rt.local(101, (0 + (Number(_v12) & 65535)));
                  acc = _v13;
                  const _v14: any = rt.op("==", ...[_v11, _v13]);
                  acc = _v14;
                  _v10 = _v14;
                }
                if (rt.truth(_v10)) {
                  const _v15: any = rt.get(this, "y");
                  acc = _v15;
                  const _v16: any = (temps[1] ?? 0);
                  acc = _v16;
                  const _v17: any = rt.local(101, (171 + (Number(_v16) & 65535)));
                  acc = _v17;
                  const _v18: any = rt.op("==", ...[_v15, _v17]);
                  acc = _v18;
                  _v10 = _v18;
                }
                acc = _v10;
                _v9 = _v10;
                if (rt.truth(_v10)) {
                  const _v19: any = (temps[1] ?? 0);
                  acc = _v19;
                  const _v20: any = (temps[2] = _v19);
                  acc = _v20;
                  _v9 = _v20;
                  break _loop1;
                  _v9 = acc;
                }
                acc = _v9;
              }
              const _v21: any = (temps[1] = rt.op("+", (temps[1] ?? 0), 1));
              acc = _v21;
            }
            const _v22: any = rt.get(this, "finalDest");
            acc = _v22;
            const _v23: any = rt.global(301);
            acc = _v23;
            const _v24: any = await rt.send(_v23, "at", [_v22]);
            acc = _v24;
            const _v25: any = await rt.send(_v24, "index", []);
            acc = _v25;
            const _v26: any = (temps[3] = _v25);
            acc = _v26;
            let _v27: any = acc;
            const _v28: any = (temps[2] ?? 0);
            acc = _v28;
            const _v29: any = (temps[3] ?? 0);
            acc = _v29;
            const _v30: any = rt.op(">", ...[_v28, _v29]);
            acc = _v30;
            _v27 = _v30;
            if (rt.truth(_v30)) {
              let _v31: any = acc;
              const _v32: any = (temps[2] ?? 0);
              acc = _v32;
              const _v33: any = (temps[3] ?? 0);
              acc = _v33;
              const _v34: any = rt.op("-", ...[_v32, _v33]);
              acc = _v34;
              const _v35: any = (temps[0] = _v34);
              acc = _v35;
              const _v36: any = 0;
              acc = _v36;
              const _v37: any = rt.local(101, (0 + (Number(_v36) & 65535)));
              acc = _v37;
              const _v38: any = 2;
              acc = _v38;
              const _v39: any = rt.op("/", ...[_v37, _v38]);
              acc = _v39;
              const _v40: any = rt.op(">=", ...[_v35, _v39]);
              acc = _v40;
              _v31 = _v40;
              if (rt.truth(_v40)) {
                const _v41: any = 1;
                acc = _v41;
                _v31 = _v41;
              } else {
                const _v42: any = 0;
                acc = _v42;
                _v31 = _v42;
              }
              acc = _v31;
              const _v43: any = rt.set(this, "theDirection", _v31);
              acc = _v43;
              _v27 = _v43;
            } else {
              let _v44: any = acc;
              const _v45: any = (temps[3] ?? 0);
              acc = _v45;
              const _v46: any = (temps[2] ?? 0);
              acc = _v46;
              const _v47: any = rt.op("-", ...[_v45, _v46]);
              acc = _v47;
              const _v48: any = (temps[0] = _v47);
              acc = _v48;
              const _v49: any = 0;
              acc = _v49;
              const _v50: any = rt.local(101, (0 + (Number(_v49) & 65535)));
              acc = _v50;
              const _v51: any = 2;
              acc = _v51;
              const _v52: any = rt.op("/", ...[_v50, _v51]);
              acc = _v52;
              const _v53: any = rt.op(">=", ...[_v48, _v52]);
              acc = _v53;
              _v44 = _v53;
              if (rt.truth(_v53)) {
                const _v54: any = 0;
                acc = _v54;
                _v44 = _v54;
              } else {
                const _v55: any = 1;
                acc = _v55;
                _v44 = _v55;
              }
              acc = _v44;
              const _v56: any = rt.set(this, "theDirection", _v44);
              acc = _v56;
              _v27 = _v56;
            }
            acc = _v27;
            const _v57: any = (temps[0] ?? 0);
            acc = _v57;
            return _v57;
            return acc;
          },
        },
      },
      {
        name: "marblePath",
        className: "MarblePath",
        parent: {"script": 101, "name": "MarblePath"},
        isClass: false,
        properties: {},
        methods: {
        },
      },
    ],
    procedures: {
    },
    exports: {"0": "marblePath"},
  });
}
