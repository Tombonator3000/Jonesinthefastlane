// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/DialogScript.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: f125002d3385aa3334cc5fb9cd7fdce013bba0bad4d9f4594d38197f4d4f40c9
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(110, {
    name: "DialogScript",
    uses: [0, 999],
    locals: [],
    objects: [
      {
        name: "DialogScript",
        className: "Script",
        parent: {"script": 999, "name": "Script"},
        isClass: true,
        properties: {},
        methods: {
          // SCI DialogScript.sc: DialogScript.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "state");
            acc = _v2;
            _branch3: {
              const _v4: any = 0;
              acc = _v4;
              _v1 = rt.op("==", _v2, _v4);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v5: any = 10;
                acc = _v5;
                const _v6: any = rt.set(this, "cycles", _v5);
                acc = _v6;
                _v1 = _v6;
                break _branch3;
              }
              const _v7: any = 1;
              acc = _v7;
              _v1 = rt.op("==", _v2, _v7);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v8: any = -1;
                acc = _v8;
                const _v9: any = rt.setGlobal(401, _v8);
                acc = _v9;
                _v1 = _v9;
                let _v10: any = acc;
                let _v11: any = 1;
                if (rt.truth(_v11)) {
                  const _v12: any = rt.global(323);
                  acc = _v12;
                  const _v13: any = 60;
                  acc = _v13;
                  const _v14: any = rt.op("<", ...[_v12, _v13]);
                  acc = _v14;
                  _v11 = _v14;
                }
                if (rt.truth(_v11)) {
                  const _v15: any = rt.global(407);
                  acc = _v15;
                  const _v16: any = 1;
                  acc = _v16;
                  const _v17: any = rt.op("==", ...[_v15, _v16]);
                  acc = _v17;
                  _v11 = _v17;
                }
                if (rt.truth(_v11)) {
                  const _v18: any = rt.global(408);
                  acc = _v18;
                  _v11 = _v18;
                }
                if (rt.truth(_v11)) {
                  const _v19: any = rt.global(302);
                  acc = _v19;
                  const _v20: any = await rt.send(_v19, "worksAt", []);
                  acc = _v20;
                  const _v21: any = rt.global(400);
                  acc = _v21;
                  const _v22: any = rt.op("==", ...[_v20, _v21]);
                  acc = _v22;
                  _v11 = _v22;
                }
                if (rt.truth(_v11)) {
                  const _v23: any = (args[1] ?? 0);
                  acc = _v23;
                  _v11 = _v23;
                }
                acc = _v11;
                _v10 = _v11;
                if (rt.truth(_v11)) {
                  const _v24: any = 119;
                  acc = _v24;
                  const _v25: any = (args[0] ?? 0);
                  acc = _v25;
                  const _v26: any = await rt.send(_v25, "message", [_v24]);
                  acc = _v26;
                  _v10 = _v26;
                  let _v27: any = acc;
                  const _v28: any = rt.setGlobal(408, rt.op("-", rt.global(408), 1));
                  acc = _v28;
                  _v27 = _v28;
                  if (rt.truth(_v28)) {
                    const _v29: any = rt.set(this, "state", rt.op("-", rt.get(this, "state"), 1));
                    acc = _v29;
                    _v27 = _v29;
                  }
                  acc = _v27;
                  _v10 = _v27;
                  const _v30: any = 10;
                  acc = _v30;
                  const _v31: any = rt.set(this, "cycles", _v30);
                  acc = _v31;
                  _v10 = _v31;
                }
                acc = _v10;
                _v1 = _v10;
                break _branch3;
              }
              const _v32: any = 10;
              acc = _v32;
              _v1 = rt.op("==", _v2, _v32);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v33: any = 0;
                acc = _v33;
                const _v34: any = rt.setGlobal(407, _v33);
                acc = _v34;
                _v1 = _v34;
                let _v35: any = acc;
                let _v36: any = 1;
                if (rt.truth(_v36)) {
                  const _v37: any = rt.global(323);
                  acc = _v37;
                  const _v38: any = 60;
                  acc = _v38;
                  const _v39: any = rt.op("<", ...[_v37, _v38]);
                  acc = _v39;
                  _v36 = _v39;
                }
                if (rt.truth(_v36)) {
                  const _v40: any = rt.global(407);
                  acc = _v40;
                  const _v41: any = 1;
                  acc = _v41;
                  const _v42: any = rt.op("!=", ...[_v40, _v41]);
                  acc = _v42;
                  _v36 = _v42;
                }
                if (rt.truth(_v36)) {
                  const _v43: any = rt.global(302);
                  acc = _v43;
                  const _v44: any = await rt.send(_v43, "worksAt", []);
                  acc = _v44;
                  const _v45: any = rt.global(400);
                  acc = _v45;
                  const _v46: any = rt.op("==", ...[_v44, _v45]);
                  acc = _v46;
                  _v36 = _v46;
                }
                if (rt.truth(_v36)) {
                  const _v47: any = rt.global(329);
                  acc = _v47;
                  _v36 = _v47;
                }
                if (rt.truth(_v36)) {
                  const _v48: any = (args[1] ?? 0);
                  acc = _v48;
                  _v36 = _v48;
                }
                if (rt.truth(_v36)) {
                  const _v49: any = rt.global(302);
                  acc = _v49;
                  const _v50: any = await rt.send(_v49, "dressedForWork", []);
                  acc = _v50;
                  _v36 = _v50;
                }
                acc = _v36;
                _v35 = _v36;
                if (rt.truth(_v36)) {
                  const _v51: any = 1;
                  acc = _v51;
                  const _v52: any = rt.setGlobal(407, _v51);
                  acc = _v52;
                  _v35 = _v52;
                  const _v53: any = 3;
                  acc = _v53;
                  const _v54: any = rt.setGlobal(408, _v53);
                  acc = _v54;
                  _v35 = _v54;
                  let _v55: any = acc;
                  const _v56: any = rt.global(551);
                  acc = _v56;
                  _v55 = _v56;
                  if (rt.truth(_v56)) {
                    const _v57: any = rt.setGlobal(408, rt.op("+", rt.global(408), 1));
                    acc = _v57;
                    _v55 = _v57;
                  }
                  acc = _v55;
                  _v35 = _v55;
                }
                acc = _v35;
                _v1 = _v35;
                let _v58: any = acc;
                let _v59: any = 1;
                if (rt.truth(_v59)) {
                  const _v60: any = rt.global(407);
                  acc = _v60;
                  const _v61: any = 1;
                  acc = _v61;
                  const _v62: any = rt.op("==", ...[_v60, _v61]);
                  acc = _v62;
                  _v59 = _v62;
                }
                if (rt.truth(_v59)) {
                  const _v63: any = rt.global(408);
                  acc = _v63;
                  _v59 = _v63;
                }
                acc = _v59;
                _v58 = _v59;
                if (rt.truth(_v59)) {
                  const _v64: any = 119;
                  acc = _v64;
                  const _v65: any = (args[0] ?? 0);
                  acc = _v65;
                  const _v66: any = await rt.send(_v65, "message", [_v64]);
                  acc = _v66;
                  _v58 = _v66;
                  let _v67: any = acc;
                  const _v68: any = rt.setGlobal(408, rt.op("-", rt.global(408), 1));
                  acc = _v68;
                  _v67 = _v68;
                  if (rt.truth(_v68)) {
                    const _v69: any = rt.set(this, "state", rt.op("-", rt.get(this, "state"), 1));
                    acc = _v69;
                    _v67 = _v69;
                  }
                  acc = _v67;
                  _v58 = _v67;
                  const _v70: any = 10;
                  acc = _v70;
                  const _v71: any = rt.set(this, "cycles", _v70);
                  acc = _v71;
                  _v58 = _v71;
                }
                acc = _v58;
                _v1 = _v58;
                break _branch3;
              }
              const _v72: any = 19;
              acc = _v72;
              _v1 = rt.op("==", _v2, _v72);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v73: any = rt.global(302);
                acc = _v73;
                const _v74: any = 300;
                acc = _v74;
                const _v75: any = 0;
                acc = _v75;
                const _v76: any = await rt.call(110, "ScriptID", [_v74, _v75], this);
                acc = _v76;
                const _v77: any = await rt.send(_v76, "doit", [_v73]);
                acc = _v77;
                const _v78: any = rt.setGlobal(401, _v77);
                acc = _v78;
                _v1 = _v78;
                let _v79: any = acc;
                let _v80: any = 1;
                if (rt.truth(_v80)) {
                  const _v81: any = rt.global(323);
                  acc = _v81;
                  const _v82: any = 60;
                  acc = _v82;
                  const _v83: any = rt.op("<", ...[_v81, _v82]);
                  acc = _v83;
                  _v80 = _v83;
                }
                if (rt.truth(_v80)) {
                  const _v84: any = rt.global(401);
                  acc = _v84;
                  const _v85: any = rt.global(400);
                  acc = _v85;
                  const _v86: any = rt.op("==", ...[_v84, _v85]);
                  acc = _v86;
                  _v80 = _v86;
                }
                acc = _v80;
                _v79 = _v80;
                if (rt.truth(_v80)) {
                  const _v87: any = 0;
                  acc = _v87;
                  const _v88: any = rt.set(this, "state", _v87);
                  acc = _v88;
                  _v79 = _v88;
                }
                acc = _v79;
                _v1 = _v79;
                break _branch3;
              }
              const _v89: any = 20;
              acc = _v89;
              _v1 = rt.op("==", _v2, _v89);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v90: any = 120;
                acc = _v90;
                const _v91: any = (args[0] ?? 0);
                acc = _v91;
                const _v92: any = await rt.send(_v91, "message", [_v90]);
                acc = _v92;
                _v1 = _v92;
                break _branch3;
              }
            }
            acc = _v1;
            return acc;
          },
          // SCI DialogScript.sc: DialogScript.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.set(this, "state", rt.op("+", rt.get(this, "state"), 1));
            acc = _v1;
            const _v2: any = 1;
            acc = _v2;
            const _v3: any = rt.set(this, "register", _v2);
            acc = _v3;
            return acc;
          },
        },
      },
    ],
    procedures: {
    },
    exports: {},
  });
}
