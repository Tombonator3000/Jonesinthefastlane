// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/Motion.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 3de038184d7eabfee2d8ec7513de10de48b2b445badf3ca9fc6deeb6c5e45bde
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(992, {
    name: "Motion",
    uses: [0, 999],
    locals: [],
    objects: [
      {
        name: "Cycle",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: true,
        properties: {"client": 0, "caller": 0, "cycleDir": 1, "cycleCnt": 0, "completed": 0, "ticksToDo": 0, "lastTime": 0},
        methods: {
          // SCI Motion.sc: Cycle.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = rt.set(this, "client", _v1);
            acc = _v2;
            const _v3: any = rt.get(this, "client");
            acc = _v3;
            const _v4: any = await rt.send(_v3, "ticksToDo", []);
            acc = _v4;
            const _v5: any = rt.set(this, "ticksToDo", _v4);
            acc = _v5;
            const _v6: any = 0;
            acc = _v6;
            const _v7: any = rt.set(this, "cycleCnt", _v6);
            acc = _v7;
            const _v8: any = await rt.call(992, "GetTime", [], this);
            acc = _v8;
            const _v9: any = rt.set(this, "lastTime", _v8);
            acc = _v9;
            return acc;
          },
          // SCI Motion.sc: Cycle.nextCel
          "nextCel": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "ticksToDo");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              let _v3: any = acc;
              let _v4: any = 0;
              if (!rt.truth(_v4)) {
                const _v5: any = rt.get(this, "ticksToDo");
                acc = _v5;
                const _v6: any = rt.get(this, "lastTime");
                acc = _v6;
                const _v7: any = rt.op("+", ...[_v5, _v6]);
                acc = _v7;
                const _v8: any = await rt.call(992, "GetTime", [], this);
                acc = _v8;
                const _v9: any = rt.op("u<", ...[_v7, _v8]);
                acc = _v9;
                _v4 = _v9;
              }
              if (!rt.truth(_v4)) {
                let _v10: any = 1;
                if (rt.truth(_v10)) {
                  const _v11: any = rt.get(this, "lastTime");
                  acc = _v11;
                  const _v12: any = await rt.call(992, "GetTime", [], this);
                  acc = _v12;
                  const _v13: any = rt.op("u>", ...[_v11, _v12]);
                  acc = _v13;
                  _v10 = _v13;
                }
                if (rt.truth(_v10)) {
                  const _v14: any = rt.get(this, "ticksToDo");
                  acc = _v14;
                  const _v15: any = rt.get(this, "lastTime");
                  acc = _v15;
                  const _v16: any = rt.op("+", ...[_v14, _v15]);
                  acc = _v16;
                  const _v17: any = rt.get(this, "lastTime");
                  acc = _v17;
                  const _v18: any = rt.op("u>", ...[_v16, _v17]);
                  acc = _v18;
                  _v10 = _v18;
                }
                acc = _v10;
                _v4 = _v10;
              }
              acc = _v4;
              _v3 = _v4;
              if (rt.truth(_v4)) {
                let _v19: any = acc;
                const _v20: any = rt.get(this, "client");
                acc = _v20;
                const _v21: any = await rt.send(_v20, "signal", []);
                acc = _v21;
                const _v22: any = 4096;
                acc = _v22;
                const _v23: any = rt.op("&", ...[_v21, _v22]);
                acc = _v23;
                _v19 = _v23;
                if (rt.truth(_v23)) {
                  const _v24: any = rt.get(this, "client");
                  acc = _v24;
                  const _v25: any = await rt.send(_v24, "cel", []);
                  acc = _v25;
                  _v19 = _v25;
                } else {
                  const _v26: any = await rt.call(992, "GetTime", [], this);
                  acc = _v26;
                  const _v27: any = rt.set(this, "lastTime", _v26);
                  acc = _v27;
                  _v19 = _v27;
                  const _v28: any = this;
                  acc = _v28;
                  const _v29: any = await rt.send(_v28, "changeCel", []);
                  acc = _v29;
                  _v19 = _v29;
                }
                acc = _v19;
                _v3 = _v19;
              } else {
                const _v30: any = rt.get(this, "client");
                acc = _v30;
                const _v31: any = await rt.send(_v30, "cel", []);
                acc = _v31;
                _v3 = _v31;
              }
              acc = _v3;
              _v1 = _v3;
            } else {
              const _v32: any = rt.set(this, "cycleCnt", rt.op("+", rt.get(this, "cycleCnt"), 1));
              acc = _v32;
              _v1 = _v32;
              let _v33: any = acc;
              const _v34: any = rt.get(this, "cycleCnt");
              acc = _v34;
              const _v35: any = rt.get(this, "client");
              acc = _v35;
              const _v36: any = await rt.send(_v35, "cycleSpeed", []);
              acc = _v36;
              const _v37: any = rt.op("<=", ...[_v34, _v36]);
              acc = _v37;
              _v33 = _v37;
              if (rt.truth(_v37)) {
                const _v38: any = rt.get(this, "client");
                acc = _v38;
                const _v39: any = await rt.send(_v38, "cel", []);
                acc = _v39;
                _v33 = _v39;
              } else {
                const _v40: any = 0;
                acc = _v40;
                const _v41: any = rt.set(this, "cycleCnt", _v40);
                acc = _v41;
                _v33 = _v41;
                let _v42: any = acc;
                const _v43: any = rt.get(this, "client");
                acc = _v43;
                const _v44: any = await rt.send(_v43, "signal", []);
                acc = _v44;
                const _v45: any = 4096;
                acc = _v45;
                const _v46: any = rt.op("&", ...[_v44, _v45]);
                acc = _v46;
                _v42 = _v46;
                if (rt.truth(_v46)) {
                  const _v47: any = rt.get(this, "client");
                  acc = _v47;
                  const _v48: any = await rt.send(_v47, "cel", []);
                  acc = _v48;
                  _v42 = _v48;
                } else {
                  const _v49: any = this;
                  acc = _v49;
                  const _v50: any = await rt.send(_v49, "changeCel", []);
                  acc = _v50;
                  _v42 = _v50;
                }
                acc = _v42;
                _v33 = _v42;
              }
              acc = _v33;
              _v1 = _v33;
            }
            acc = _v1;
            return acc;
          },
          // SCI Motion.sc: Cycle.changeCel
          "changeCel": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "client");
            acc = _v1;
            const _v2: any = await rt.send(_v1, "cel", []);
            acc = _v2;
            const _v3: any = rt.get(this, "cycleDir");
            acc = _v3;
            const _v4: any = rt.op("+", ...[_v2, _v3]);
            acc = _v4;
            return _v4;
            return acc;
          },
          // SCI Motion.sc: Cycle.cycleDone
          "cycleDone": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
          // SCI Motion.sc: Cycle.motionCue
          "motionCue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.get(this, "client");
            acc = _v2;
            const _v3: any = await rt.send(_v2, "cycler", [_v1]);
            acc = _v3;
            let _v4: any = acc;
            let _v5: any = 1;
            if (rt.truth(_v5)) {
              const _v6: any = rt.get(this, "completed");
              acc = _v6;
              _v5 = _v6;
            }
            if (rt.truth(_v5)) {
              const _v7: any = rt.get(this, "caller");
              acc = _v7;
              const _v8: any = await rt.call(992, "IsObject", [_v7], this);
              acc = _v8;
              _v5 = _v8;
            }
            acc = _v5;
            _v4 = _v5;
            if (rt.truth(_v5)) {
              const _v9: any = rt.get(this, "caller");
              acc = _v9;
              const _v10: any = await rt.send(_v9, "cue", []);
              acc = _v10;
              _v4 = _v10;
            }
            acc = _v4;
            const _v11: any = this;
            acc = _v11;
            const _v12: any = await rt.send(_v11, "dispose", []);
            acc = _v12;
            return acc;
          },
        },
      },
      {
        name: "Fwd",
        className: "Cycle",
        parent: {"script": 992, "name": "Cycle"},
        isClass: true,
        properties: {},
        methods: {
          // SCI Motion.sc: Fwd.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "nextCel", []);
            acc = _v3;
            const _v4: any = (temps[0] = _v3);
            acc = _v4;
            const _v5: any = rt.get(this, "client");
            acc = _v5;
            const _v6: any = await rt.send(_v5, "lastCel", []);
            acc = _v6;
            const _v7: any = rt.op(">", ...[_v4, _v6]);
            acc = _v7;
            _v1 = _v7;
            if (rt.truth(_v7)) {
              const _v8: any = this;
              acc = _v8;
              const _v9: any = await rt.send(_v8, "cycleDone", []);
              acc = _v9;
              _v1 = _v9;
            } else {
              const _v10: any = (temps[0] ?? 0);
              acc = _v10;
              const _v11: any = rt.get(this, "client");
              acc = _v11;
              const _v12: any = await rt.send(_v11, "cel", [_v10]);
              acc = _v12;
              _v1 = _v12;
            }
            acc = _v1;
            return acc;
          },
          // SCI Motion.sc: Fwd.cycleDone
          "cycleDone": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.get(this, "client");
            acc = _v2;
            const _v3: any = await rt.send(_v2, "cel", [_v1]);
            acc = _v3;
            return acc;
          },
        },
      },
      {
        name: "Walk",
        className: "Fwd",
        parent: {"script": 992, "name": "Fwd"},
        isClass: true,
        properties: {},
        methods: {
          // SCI Motion.sc: Walk.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = rt.get(this, "client");
            acc = _v2;
            const _v3: any = await rt.send(_v2, "isStopped", []);
            acc = _v3;
            const _v4: any = rt.op("not", ...[_v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = await rt.superSend(this, {"script": 992, "name": "Walk"}, "doit", []);
              acc = _v5;
              _v1 = _v5;
            }
            acc = _v1;
            return acc;
          },
        },
      },
      {
        name: "CT",
        className: "Cycle",
        parent: {"script": 992, "name": "Cycle"},
        isClass: true,
        properties: {"endCel": 0},
        methods: {
          // SCI Motion.sc: CT.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = await rt.superSend(this, {"script": 992, "name": "CT"}, "init", [_v1]);
            acc = _v2;
            const _v3: any = (args[2] ?? 0);
            acc = _v3;
            const _v4: any = rt.set(this, "cycleDir", _v3);
            acc = _v4;
            let _v5: any = acc;
            const _v6: any = argc;
            acc = _v6;
            const _v7: any = 4;
            acc = _v7;
            const _v8: any = rt.op(">=", ...[_v6, _v7]);
            acc = _v8;
            _v5 = _v8;
            if (rt.truth(_v8)) {
              const _v9: any = (args[3] ?? 0);
              acc = _v9;
              const _v10: any = rt.set(this, "caller", _v9);
              acc = _v10;
              _v5 = _v10;
            }
            acc = _v5;
            const _v11: any = rt.get(this, "client");
            acc = _v11;
            const _v12: any = await rt.send(_v11, "lastCel", []);
            acc = _v12;
            const _v13: any = (temps[0] = _v12);
            acc = _v13;
            let _v14: any = acc;
            const _v15: any = (args[1] ?? 0);
            acc = _v15;
            const _v16: any = (temps[0] ?? 0);
            acc = _v16;
            const _v17: any = rt.op(">", ...[_v15, _v16]);
            acc = _v17;
            _v14 = _v17;
            if (rt.truth(_v17)) {
              const _v18: any = (temps[0] ?? 0);
              acc = _v18;
              _v14 = _v18;
            } else {
              const _v19: any = (args[1] ?? 0);
              acc = _v19;
              _v14 = _v19;
            }
            acc = _v14;
            const _v20: any = rt.set(this, "endCel", _v14);
            acc = _v20;
            return acc;
          },
          // SCI Motion.sc: CT.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            const _v1: any = rt.get(this, "client");
            acc = _v1;
            const _v2: any = await rt.send(_v1, "lastCel", []);
            acc = _v2;
            const _v3: any = (temps[1] = _v2);
            acc = _v3;
            let _v4: any = acc;
            const _v5: any = rt.get(this, "endCel");
            acc = _v5;
            const _v6: any = (temps[1] ?? 0);
            acc = _v6;
            const _v7: any = rt.op(">", ...[_v5, _v6]);
            acc = _v7;
            _v4 = _v7;
            if (rt.truth(_v7)) {
              const _v8: any = (temps[1] ?? 0);
              acc = _v8;
              const _v9: any = rt.set(this, "endCel", _v8);
              acc = _v9;
              _v4 = _v9;
            }
            acc = _v4;
            const _v10: any = this;
            acc = _v10;
            const _v11: any = await rt.send(_v10, "nextCel", []);
            acc = _v11;
            const _v12: any = (temps[0] = _v11);
            acc = _v12;
            let _v13: any = acc;
            _branch14: {
              const _v15: any = (temps[0] ?? 0);
              acc = _v15;
              const _v16: any = (temps[1] ?? 0);
              acc = _v16;
              const _v17: any = rt.op(">", ...[_v15, _v16]);
              acc = _v17;
              _v13 = _v17;
              acc = _v13;
              if (rt.truth(_v13)) {
                const _v18: any = 0;
                acc = _v18;
                _v13 = _v18;
                break _branch14;
              }
              const _v19: any = (temps[0] ?? 0);
              acc = _v19;
              const _v20: any = 0;
              acc = _v20;
              const _v21: any = rt.op("<", ...[_v19, _v20]);
              acc = _v21;
              _v13 = _v21;
              acc = _v13;
              if (rt.truth(_v13)) {
                const _v22: any = (temps[1] ?? 0);
                acc = _v22;
                _v13 = _v22;
                break _branch14;
              }
              const _v23: any = (temps[0] ?? 0);
              acc = _v23;
              _v13 = _v23;
              break _branch14;
            }
            acc = _v13;
            const _v24: any = rt.get(this, "client");
            acc = _v24;
            const _v25: any = await rt.send(_v24, "cel", [_v13]);
            acc = _v25;
            let _v26: any = acc;
            let _v27: any = 1;
            if (rt.truth(_v27)) {
              const _v28: any = rt.get(this, "cycleCnt");
              acc = _v28;
              const _v29: any = 0;
              acc = _v29;
              const _v30: any = rt.op("==", ...[_v28, _v29]);
              acc = _v30;
              _v27 = _v30;
            }
            if (rt.truth(_v27)) {
              const _v31: any = rt.get(this, "endCel");
              acc = _v31;
              const _v32: any = rt.get(this, "client");
              acc = _v32;
              const _v33: any = await rt.send(_v32, "cel", []);
              acc = _v33;
              const _v34: any = rt.op("==", ...[_v31, _v33]);
              acc = _v34;
              _v27 = _v34;
            }
            acc = _v27;
            _v26 = _v27;
            if (rt.truth(_v27)) {
              const _v35: any = this;
              acc = _v35;
              const _v36: any = await rt.send(_v35, "cycleDone", []);
              acc = _v36;
              _v26 = _v36;
            }
            acc = _v26;
            return acc;
          },
          // SCI Motion.sc: CT.cycleDone
          "cycleDone": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 1;
            acc = _v1;
            const _v2: any = rt.set(this, "completed", _v1);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.get(this, "caller");
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = 1;
              acc = _v5;
              const _v6: any = rt.setGlobal(58, _v5);
              acc = _v6;
              _v3 = _v6;
            } else {
              const _v7: any = this;
              acc = _v7;
              const _v8: any = await rt.send(_v7, "motionCue", []);
              acc = _v8;
              _v3 = _v8;
            }
            acc = _v3;
            return acc;
          },
        },
      },
      {
        name: "End",
        className: "CT",
        parent: {"script": 992, "name": "CT"},
        isClass: true,
        properties: {},
        methods: {
          // SCI Motion.sc: End.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = (args[0] ?? 0);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "lastCel", []);
            acc = _v3;
            const _v4: any = 1;
            acc = _v4;
            let _v5: any = acc;
            const _v6: any = argc;
            acc = _v6;
            const _v7: any = 2;
            acc = _v7;
            const _v8: any = rt.op(">=", ...[_v6, _v7]);
            acc = _v8;
            _v5 = _v8;
            if (rt.truth(_v8)) {
              const _v9: any = (args[1] ?? 0);
              acc = _v9;
              _v5 = _v9;
            } else {
              const _v10: any = 0;
              acc = _v10;
              _v5 = _v10;
            }
            acc = _v5;
            const _v11: any = await rt.superSend(this, {"script": 992, "name": "End"}, "init", [_v1, _v3, _v4, _v5]);
            acc = _v11;
            return acc;
          },
        },
      },
      {
        name: "Beg",
        className: "CT",
        parent: {"script": 992, "name": "CT"},
        isClass: true,
        properties: {},
        methods: {
          // SCI Motion.sc: Beg.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = 0;
            acc = _v2;
            const _v3: any = -1;
            acc = _v3;
            let _v4: any = acc;
            const _v5: any = argc;
            acc = _v5;
            const _v6: any = 2;
            acc = _v6;
            const _v7: any = rt.op(">=", ...[_v5, _v6]);
            acc = _v7;
            _v4 = _v7;
            if (rt.truth(_v7)) {
              const _v8: any = (args[1] ?? 0);
              acc = _v8;
              _v4 = _v8;
            } else {
              const _v9: any = 0;
              acc = _v9;
              _v4 = _v9;
            }
            acc = _v4;
            const _v10: any = await rt.superSend(this, {"script": 992, "name": "Beg"}, "init", [_v1, _v2, _v3, _v4]);
            acc = _v10;
            return acc;
          },
        },
      },
      {
        name: "Motion",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: true,
        properties: {"client": 0, "caller": 0, "x": 0, "y": 0, "dx": 0, "dy": 0, "b-moveCnt": 0, "b-i1": 0, "b-i2": 0, "b-di": 0, "b-xAxis": 0, "b-incr": 0, "completed": 0, "xLast": 0, "yLast": 0},
        methods: {
          // SCI Motion.sc: Motion.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0];
            let _v1: any = acc;
            const _v2: any = argc;
            acc = _v2;
            const _v3: any = 1;
            acc = _v3;
            const _v4: any = rt.op(">=", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = (args[0] ?? 0);
              acc = _v5;
              const _v6: any = rt.set(this, "client", _v5);
              acc = _v6;
              _v1 = _v6;
              let _v7: any = acc;
              const _v8: any = argc;
              acc = _v8;
              const _v9: any = 2;
              acc = _v9;
              const _v10: any = rt.op(">=", ...[_v8, _v9]);
              acc = _v10;
              _v7 = _v10;
              if (rt.truth(_v10)) {
                const _v11: any = (args[1] ?? 0);
                acc = _v11;
                const _v12: any = rt.set(this, "x", _v11);
                acc = _v12;
                _v7 = _v12;
                let _v13: any = acc;
                const _v14: any = argc;
                acc = _v14;
                const _v15: any = 3;
                acc = _v15;
                const _v16: any = rt.op(">=", ...[_v14, _v15]);
                acc = _v16;
                _v13 = _v16;
                if (rt.truth(_v16)) {
                  const _v17: any = (args[2] ?? 0);
                  acc = _v17;
                  const _v18: any = rt.set(this, "y", _v17);
                  acc = _v18;
                  _v13 = _v18;
                  let _v19: any = acc;
                  const _v20: any = argc;
                  acc = _v20;
                  const _v21: any = 4;
                  acc = _v21;
                  const _v22: any = rt.op(">=", ...[_v20, _v21]);
                  acc = _v22;
                  _v19 = _v22;
                  if (rt.truth(_v22)) {
                    const _v23: any = (args[3] ?? 0);
                    acc = _v23;
                    const _v24: any = rt.set(this, "caller", _v23);
                    acc = _v24;
                    _v19 = _v24;
                  }
                  acc = _v19;
                  _v13 = _v19;
                }
                acc = _v13;
                _v7 = _v13;
              }
              acc = _v7;
              _v1 = _v7;
            }
            acc = _v1;
            const _v25: any = 0;
            acc = _v25;
            const _v26: any = rt.set(this, "completed", _v25);
            acc = _v26;
            const _v27: any = rt.set(this, "b-moveCnt", _v26);
            acc = _v27;
            const _v28: any = rt.set(this, "xLast", _v27);
            acc = _v28;
            const _v29: any = rt.set(this, "yLast", _v28);
            acc = _v29;
            const _v30: any = 0;
            acc = _v30;
            const _v31: any = 0;
            acc = _v31;
            const _v32: any = rt.get(this, "client");
            acc = _v32;
            const _v33: any = await rt.send(_v32, "xLast", [_v30]);
            acc = _v33;
            const _v34: any = await rt.send(_v32, "yLast", [_v31]);
            acc = _v34;
            let _v35: any = acc;
            const _v36: any = rt.get(this, "client");
            acc = _v36;
            const _v37: any = await rt.send(_v36, "cycler", []);
            acc = _v37;
            const _v38: any = (temps[3] = _v37);
            acc = _v38;
            _v35 = _v38;
            if (rt.truth(_v38)) {
              const _v39: any = 0;
              acc = _v39;
              const _v40: any = (temps[3] ?? 0);
              acc = _v40;
              const _v41: any = await rt.send(_v40, "cycleCnt", [_v39]);
              acc = _v41;
              _v35 = _v41;
            }
            acc = _v35;
            const _v42: any = rt.get(this, "client");
            acc = _v42;
            const _v43: any = await rt.send(_v42, "x", []);
            acc = _v43;
            const _v44: any = rt.get(this, "client");
            acc = _v44;
            const _v45: any = await rt.send(_v44, "y", []);
            acc = _v45;
            const _v46: any = rt.get(this, "x");
            acc = _v46;
            const _v47: any = rt.get(this, "y");
            acc = _v47;
            const _v48: any = await rt.call(992, "GetAngle", [_v43, _v45, _v46, _v47], this);
            acc = _v48;
            const _v49: any = rt.get(this, "client");
            acc = _v49;
            const _v50: any = await rt.send(_v49, "heading", [_v48]);
            acc = _v50;
            let _v51: any = acc;
            const _v52: any = rt.get(this, "client");
            acc = _v52;
            const _v53: any = await rt.send(_v52, "looper", []);
            acc = _v53;
            _v51 = _v53;
            if (rt.truth(_v53)) {
              const _v54: any = rt.get(this, "client");
              acc = _v54;
              const _v55: any = rt.get(this, "client");
              acc = _v55;
              const _v56: any = await rt.send(_v55, "heading", []);
              acc = _v56;
              const _v57: any = rt.get(this, "client");
              acc = _v57;
              const _v58: any = await rt.send(_v57, "looper", []);
              acc = _v58;
              const _v59: any = await rt.send(_v58, "doit", [_v54, _v56]);
              acc = _v59;
              _v51 = _v59;
            }
            acc = _v51;
            const _v60: any = this;
            acc = _v60;
            const _v61: any = await rt.call(992, "InitBresen", [_v60], this);
            acc = _v61;
            return acc;
          },
          // SCI Motion.sc: Motion.onTarget
          "onTarget": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = 1;
            if (rt.truth(_v1)) {
              const _v2: any = rt.get(this, "client");
              acc = _v2;
              const _v3: any = await rt.send(_v2, "x", []);
              acc = _v3;
              const _v4: any = rt.get(this, "x");
              acc = _v4;
              const _v5: any = rt.op("==", ...[_v3, _v4]);
              acc = _v5;
              _v1 = _v5;
            }
            if (rt.truth(_v1)) {
              const _v6: any = rt.get(this, "client");
              acc = _v6;
              const _v7: any = await rt.send(_v6, "y", []);
              acc = _v7;
              const _v8: any = rt.get(this, "y");
              acc = _v8;
              const _v9: any = rt.op("==", ...[_v7, _v8]);
              acc = _v9;
              _v1 = _v9;
            }
            acc = _v1;
            return _v1;
            return acc;
          },
          // SCI Motion.sc: Motion.setTarget
          "setTarget": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = argc;
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = (args[0] ?? 0);
              acc = _v3;
              const _v4: any = rt.set(this, "x", _v3);
              acc = _v4;
              _v1 = _v4;
              const _v5: any = (args[1] ?? 0);
              acc = _v5;
              const _v6: any = rt.set(this, "y", _v5);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return acc;
          },
          // SCI Motion.sc: Motion.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0];
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.call(992, "DoBresen", [_v1], this);
            acc = _v2;
            const _v3: any = rt.get(this, "xLast");
            acc = _v3;
            const _v4: any = rt.get(this, "yLast");
            acc = _v4;
            const _v5: any = rt.get(this, "client");
            acc = _v5;
            const _v6: any = await rt.send(_v5, "xLast", [_v3]);
            acc = _v6;
            const _v7: any = await rt.send(_v5, "yLast", [_v4]);
            acc = _v7;
            return acc;
          },
          // SCI Motion.sc: Motion.moveDone
          "moveDone": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 1;
            acc = _v1;
            const _v2: any = rt.set(this, "completed", _v1);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.get(this, "caller");
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = 1;
              acc = _v5;
              const _v6: any = rt.setGlobal(58, _v5);
              acc = _v6;
              _v3 = _v6;
            } else {
              const _v7: any = this;
              acc = _v7;
              const _v8: any = await rt.send(_v7, "motionCue", []);
              acc = _v8;
              _v3 = _v8;
            }
            acc = _v3;
            return acc;
          },
          // SCI Motion.sc: Motion.motionCue
          "motionCue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.get(this, "client");
            acc = _v2;
            const _v3: any = await rt.send(_v2, "mover", [_v1]);
            acc = _v3;
            let _v4: any = acc;
            let _v5: any = 1;
            if (rt.truth(_v5)) {
              const _v6: any = rt.get(this, "completed");
              acc = _v6;
              _v5 = _v6;
            }
            if (rt.truth(_v5)) {
              const _v7: any = rt.get(this, "caller");
              acc = _v7;
              const _v8: any = await rt.call(992, "IsObject", [_v7], this);
              acc = _v8;
              _v5 = _v8;
            }
            acc = _v5;
            _v4 = _v5;
            if (rt.truth(_v5)) {
              const _v9: any = rt.get(this, "caller");
              acc = _v9;
              const _v10: any = await rt.send(_v9, "cue", []);
              acc = _v10;
              _v4 = _v10;
            }
            acc = _v4;
            const _v11: any = this;
            acc = _v11;
            const _v12: any = await rt.send(_v11, "dispose", []);
            acc = _v12;
            return acc;
          },
        },
      },
      {
        name: "MoveTo",
        className: "Motion",
        parent: {"script": 992, "name": "Motion"},
        isClass: true,
        properties: {},
        methods: {
          // SCI Motion.sc: MoveTo.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = args.slice(0, argc);
            acc = _v1;
            const _v2: any = await rt.superSend(this, {"script": 992, "name": "MoveTo"}, "init", [..._v1]);
            acc = _v2;
            return acc;
          },
          // SCI Motion.sc: MoveTo.onTarget
          "onTarget": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = 1;
            if (rt.truth(_v1)) {
              const _v2: any = rt.get(this, "client");
              acc = _v2;
              const _v3: any = await rt.send(_v2, "x", []);
              acc = _v3;
              const _v4: any = rt.get(this, "x");
              acc = _v4;
              const _v5: any = rt.op("-", ...[_v3, _v4]);
              acc = _v5;
              const _v6: any = await rt.call(992, "Abs", [_v5], this);
              acc = _v6;
              const _v7: any = rt.get(this, "client");
              acc = _v7;
              const _v8: any = await rt.send(_v7, "xStep", []);
              acc = _v8;
              const _v9: any = rt.op("<=", ...[_v6, _v8]);
              acc = _v9;
              _v1 = _v9;
            }
            if (rt.truth(_v1)) {
              const _v10: any = rt.get(this, "client");
              acc = _v10;
              const _v11: any = await rt.send(_v10, "y", []);
              acc = _v11;
              const _v12: any = rt.get(this, "y");
              acc = _v12;
              const _v13: any = rt.op("-", ...[_v11, _v12]);
              acc = _v13;
              const _v14: any = await rt.call(992, "Abs", [_v13], this);
              acc = _v14;
              const _v15: any = rt.get(this, "client");
              acc = _v15;
              const _v16: any = await rt.send(_v15, "yStep", []);
              acc = _v16;
              const _v17: any = rt.op("<=", ...[_v14, _v16]);
              acc = _v17;
              _v1 = _v17;
            }
            acc = _v1;
            return _v1;
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
