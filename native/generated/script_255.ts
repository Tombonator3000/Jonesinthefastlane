// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/Interface.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: e34a16d434a56e5b28285c0499f4f9d24967675a67b4be7f9ee08b31e8f73486
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(255, {
    name: "Interface",
    uses: [0, 891, 996, 997, 999],
    locals: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    objects: [
      {
        name: "MenuBar",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: true,
        properties: {"state": 0},
        methods: {
          // SCI Interface.sc: MenuBar.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 1;
            acc = _v1;
            const _v2: any = rt.set(this, "state", _v1);
            acc = _v2;
            const _v3: any = 1;
            acc = _v3;
            const _v4: any = await rt.call(255, "DrawMenuBar", [_v3], this);
            acc = _v4;
            return acc;
          },
          // SCI Interface.sc: MenuBar.hide
          "hide": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = await rt.call(255, "DrawMenuBar", [_v1], this);
            acc = _v2;
            return acc;
          },
          // SCI Interface.sc: MenuBar.add
          "add": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = args.slice(0, argc);
            acc = _v1;
            const _v2: any = await rt.call(255, "AddMenu", [..._v1], this);
            acc = _v2;
            return acc;
          },
          // SCI Interface.sc: MenuBar.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "state");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = (args[0] ?? 0);
              acc = _v3;
              const _v4: any = args.slice(1, argc);
              acc = _v4;
              const _v5: any = await rt.call(255, "MenuSelect", [_v3, ..._v4], this);
              acc = _v5;
              _v1 = _v5;
            } else {
              const _v6: any = 0;
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return acc;
          },
        },
      },
      {
        name: "Item",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: true,
        properties: {"type": 0, "state": 0, "nsTop": 0, "nsLeft": 0, "nsBottom": 0, "nsRight": 0, "key": 0, "said": 0, "value": 0, "underBits": 0, "lsTop": 0, "lsLeft": 0, "lsBottom": 0, "lsRight": 0, "client": 0, "-oldPort-": 0, "keyMouseX": 0, "keyMouseY": 0, "offsetX": 0, "offsetY": 0},
        methods: {
          // SCI Interface.sc: Item.hilite
          "hilite": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "setPort", []);
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.call(255, "HiliteControl", [_v3], this);
            acc = _v4;
            const _v5: any = 25;
            acc = _v5;
            const _v6: any = (args[0] ?? 0);
            acc = _v6;
            const _v7: any = rt.op("/", ...[_v5, _v6]);
            acc = _v7;
            const _v8: any = await rt.call(255, "Wait", [_v7], this);
            acc = _v8;
            const _v9: any = this;
            acc = _v9;
            const _v10: any = await rt.call(255, "HiliteControl", [_v9], this);
            acc = _v10;
            const _v11: any = this;
            acc = _v11;
            const _v12: any = await rt.send(_v11, "resetPort", []);
            acc = _v12;
            return acc;
          },
          // SCI Interface.sc: Item.motionCue
          "motionCue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
          // SCI Interface.sc: Item.new
          "new": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = await rt.superSend(this, {"script": 255, "name": "Item"}, "new", []);
            acc = _v2;
            const _v3: any = (temps[0] = _v2);
            acc = _v3;
            const _v4: any = await rt.send(_v3, "underBits", [_v1]);
            acc = _v4;
            const _v5: any = (temps[0] ?? 0);
            acc = _v5;
            return _v5;
            return acc;
          },
          // SCI Interface.sc: Item.setPort
          "setPort": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.call(255, "GetPort", [], this);
            acc = _v1;
            const _v2: any = rt.set(this, "-oldPort-", _v1);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.get(this, "client");
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = rt.get(this, "client");
              acc = _v5;
              const _v6: any = await rt.send(_v5, "window", []);
              acc = _v6;
              const _v7: any = await rt.send(_v6, "window", []);
              acc = _v7;
              _v3 = _v7;
            } else {
              const _v8: any = 0;
              acc = _v8;
              _v3 = _v8;
            }
            acc = _v3;
            const _v9: any = await rt.call(255, "SetPort", [_v3], this);
            acc = _v9;
            return acc;
          },
          // SCI Interface.sc: Item.resetPort
          "resetPort": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "client");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = rt.get(this, "-oldPort-");
              acc = _v3;
              _v1 = _v3;
            } else {
              const _v4: any = 0;
              acc = _v4;
              _v1 = _v4;
            }
            acc = _v1;
            const _v5: any = await rt.call(255, "SetPort", [_v1], this);
            acc = _v5;
            return acc;
          },
          // SCI Interface.sc: Item.drag
          "drag": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0];
            const _v1: any = rt.get(this, "nsLeft");
            acc = _v1;
            const _v2: any = (args[0] ?? 0);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "x", []);
            acc = _v3;
            const _v4: any = rt.op("-", ...[_v1, _v3]);
            acc = _v4;
            const _v5: any = (temps[2] = _v4);
            acc = _v5;
            const _v6: any = rt.get(this, "nsTop");
            acc = _v6;
            const _v7: any = (args[0] ?? 0);
            acc = _v7;
            const _v8: any = await rt.send(_v7, "y", []);
            acc = _v8;
            const _v9: any = rt.op("-", ...[_v6, _v8]);
            acc = _v9;
            const _v10: any = (temps[3] = _v9);
            acc = _v10;
            _loop11: for (;;) {
              const _v13: any = (args[0] ?? 0);
              acc = _v13;
              const _v14: any = await rt.call(255, "StillDown", [_v13], this);
              acc = _v14;
              if (!rt.truth(_v14)) break _loop11;
              _continue12: {
                let _v15: any = acc;
                const _v16: any = rt.get(this, "client");
                acc = _v16;
                _v15 = _v16;
                if (rt.truth(_v16)) {
                  const _v17: any = rt.get(this, "client");
                  acc = _v17;
                  const _v18: any = await rt.send(_v17, "window", []);
                  acc = _v18;
                  const _v19: any = await rt.send(_v18, "window", []);
                  acc = _v19;
                  const _v20: any = (args[0] ?? 0);
                  acc = _v20;
                  const _v21: any = await rt.send(_v20, "localize", [_v19]);
                  acc = _v21;
                  _v15 = _v21;
                }
                acc = _v15;
                let _v22: any = acc;
                let _v23: any = 0;
                if (!rt.truth(_v23)) {
                  const _v24: any = (temps[0] ?? 0);
                  acc = _v24;
                  const _v25: any = (args[0] ?? 0);
                  acc = _v25;
                  const _v26: any = await rt.send(_v25, "x", []);
                  acc = _v26;
                  const _v27: any = rt.op("!=", ...[_v24, _v26]);
                  acc = _v27;
                  _v23 = _v27;
                }
                if (!rt.truth(_v23)) {
                  const _v28: any = (temps[1] ?? 0);
                  acc = _v28;
                  const _v29: any = (args[0] ?? 0);
                  acc = _v29;
                  const _v30: any = await rt.send(_v29, "y", []);
                  acc = _v30;
                  const _v31: any = rt.op("!=", ...[_v28, _v30]);
                  acc = _v31;
                  _v23 = _v31;
                }
                acc = _v23;
                _v22 = _v23;
                if (rt.truth(_v23)) {
                  const _v32: any = (args[0] ?? 0);
                  acc = _v32;
                  const _v33: any = await rt.send(_v32, "x", []);
                  acc = _v33;
                  const _v34: any = (temps[0] = _v33);
                  acc = _v34;
                  _v22 = _v34;
                  const _v35: any = (args[0] ?? 0);
                  acc = _v35;
                  const _v36: any = await rt.send(_v35, "y", []);
                  acc = _v36;
                  const _v37: any = (temps[1] = _v36);
                  acc = _v37;
                  _v22 = _v37;
                  const _v38: any = (temps[2] ?? 0);
                  acc = _v38;
                  const _v39: any = (args[0] ?? 0);
                  acc = _v39;
                  const _v40: any = await rt.send(_v39, "x", []);
                  acc = _v40;
                  const _v41: any = rt.op("+", ...[_v38, _v40]);
                  acc = _v41;
                  const _v42: any = (temps[3] ?? 0);
                  acc = _v42;
                  const _v43: any = (args[0] ?? 0);
                  acc = _v43;
                  const _v44: any = await rt.send(_v43, "y", []);
                  acc = _v44;
                  const _v45: any = rt.op("+", ...[_v42, _v44]);
                  acc = _v45;
                  const _v46: any = this;
                  acc = _v46;
                  const _v47: any = await rt.send(_v46, "erase", []);
                  acc = _v47;
                  const _v48: any = await rt.send(_v46, "moveTo", [_v41, _v45]);
                  acc = _v48;
                  const _v49: any = await rt.send(_v46, "draw", []);
                  acc = _v49;
                  _v22 = _v49;
                }
                acc = _v22;
              }
            }
            return acc;
          },
          // SCI Interface.sc: Item.enable
          "enable": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = (args[0] ?? 0);
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = 1;
              acc = _v3;
              const _v4: any = rt.set(this, "state", rt.op("|", rt.get(this, "state"), _v3));
              acc = _v4;
              _v1 = _v4;
            } else {
              const _v5: any = 65534;
              acc = _v5;
              const _v6: any = rt.set(this, "state", rt.op("&", rt.get(this, "state"), _v5));
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return acc;
          },
          // SCI Interface.sc: Item.select
          "select": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = (args[0] ?? 0);
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = 8;
              acc = _v3;
              const _v4: any = rt.set(this, "state", rt.op("|", rt.get(this, "state"), _v3));
              acc = _v4;
              _v1 = _v4;
            } else {
              const _v5: any = 65527;
              acc = _v5;
              const _v6: any = rt.set(this, "state", rt.op("&", rt.get(this, "state"), _v5));
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            const _v7: any = this;
            acc = _v7;
            const _v8: any = await rt.send(_v7, "draw", []);
            acc = _v8;
            return acc;
          },
          // SCI Interface.sc: Item.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            let _v1: any = acc;
            const _v2: any = (args[0] ?? 0);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "claimed", []);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = 0;
              acc = _v4;
              return _v4;
              _v1 = acc;
            }
            acc = _v1;
            const _v5: any = 0;
            acc = _v5;
            const _v6: any = (temps[0] = _v5);
            acc = _v6;
            let _v7: any = acc;
            let _v8: any = 1;
            if (rt.truth(_v8)) {
              const _v9: any = rt.get(this, "state");
              acc = _v9;
              const _v10: any = 1;
              acc = _v10;
              const _v11: any = rt.op("&", ...[_v9, _v10]);
              acc = _v11;
              _v8 = _v11;
            }
            if (rt.truth(_v8)) {
              let _v12: any = 0;
              if (!rt.truth(_v12)) {
                let _v13: any = 1;
                if (rt.truth(_v13)) {
                  const _v14: any = (args[0] ?? 0);
                  acc = _v14;
                  const _v15: any = await rt.send(_v14, "type", []);
                  acc = _v15;
                  const _v16: any = (temps[1] = _v15);
                  acc = _v16;
                  const _v17: any = 4;
                  acc = _v17;
                  const _v18: any = rt.op("==", ...[_v16, _v17]);
                  acc = _v18;
                  _v13 = _v18;
                }
                if (rt.truth(_v13)) {
                  const _v19: any = (args[0] ?? 0);
                  acc = _v19;
                  const _v20: any = await rt.send(_v19, "message", []);
                  acc = _v20;
                  const _v21: any = rt.get(this, "key");
                  acc = _v21;
                  const _v22: any = rt.op("==", ...[_v20, _v21]);
                  acc = _v22;
                  _v13 = _v22;
                }
                acc = _v13;
                _v12 = _v13;
              }
              if (!rt.truth(_v12)) {
                let _v23: any = 1;
                if (rt.truth(_v23)) {
                  const _v24: any = (temps[1] ?? 0);
                  acc = _v24;
                  const _v25: any = 1;
                  acc = _v25;
                  const _v26: any = rt.op("==", ...[_v24, _v25]);
                  acc = _v26;
                  _v23 = _v26;
                }
                if (rt.truth(_v23)) {
                  const _v27: any = (args[0] ?? 0);
                  acc = _v27;
                  const _v28: any = this;
                  acc = _v28;
                  const _v29: any = await rt.send(_v28, "check", [_v27]);
                  acc = _v29;
                  _v23 = _v29;
                }
                acc = _v23;
                _v12 = _v23;
              }
              acc = _v12;
              _v8 = _v12;
            }
            acc = _v8;
            _v7 = _v8;
            if (rt.truth(_v8)) {
              const _v30: any = 1;
              acc = _v30;
              const _v31: any = (args[0] ?? 0);
              acc = _v31;
              const _v32: any = await rt.send(_v31, "claimed", [_v30]);
              acc = _v32;
              _v7 = _v32;
              const _v33: any = (args[0] ?? 0);
              acc = _v33;
              const _v34: any = this;
              acc = _v34;
              const _v35: any = await rt.send(_v34, "track", [_v33]);
              acc = _v35;
              const _v36: any = (temps[0] = _v35);
              acc = _v36;
              _v7 = _v36;
            }
            acc = _v7;
            const _v37: any = (temps[0] ?? 0);
            acc = _v37;
            return _v37;
            return acc;
          },
          // SCI Interface.sc: Item.check
          "check": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = 1;
            if (rt.truth(_v1)) {
              const _v2: any = rt.get(this, "nsLeft");
              acc = _v2;
              let _v3: any = _v2;
              let _v4: any = 1;
              if (rt.truth(_v4)) {
                const _v5: any = (args[0] ?? 0);
                acc = _v5;
                const _v6: any = await rt.send(_v5, "x", []);
                acc = _v6;
                _v4 = rt.op("<=", _v3, _v6);
                _v3 = _v6;
              }
              if (rt.truth(_v4)) {
                const _v7: any = rt.get(this, "nsRight");
                acc = _v7;
                _v4 = rt.op("<=", _v3, _v7);
                _v3 = _v7;
              }
              acc = _v4;
              _v1 = _v4;
            }
            if (rt.truth(_v1)) {
              const _v8: any = rt.get(this, "nsTop");
              acc = _v8;
              let _v9: any = _v8;
              let _v10: any = 1;
              if (rt.truth(_v10)) {
                const _v11: any = (args[0] ?? 0);
                acc = _v11;
                const _v12: any = await rt.send(_v11, "y", []);
                acc = _v12;
                _v10 = rt.op("<=", _v9, _v12);
                _v9 = _v12;
              }
              if (rt.truth(_v10)) {
                const _v13: any = rt.get(this, "nsBottom");
                acc = _v13;
                _v10 = rt.op("<=", _v9, _v13);
                _v9 = _v13;
              }
              acc = _v10;
              _v1 = _v10;
            }
            acc = _v1;
            return _v1;
            return acc;
          },
          // SCI Interface.sc: Item.track
          "track": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            let _v1: any = acc;
            const _v2: any = 1;
            acc = _v2;
            const _v3: any = (args[0] ?? 0);
            acc = _v3;
            const _v4: any = await rt.send(_v3, "type", []);
            acc = _v4;
            const _v5: any = rt.op("==", ...[_v2, _v4]);
            acc = _v5;
            _v1 = _v5;
            if (rt.truth(_v5)) {
              const _v6: any = this;
              acc = _v6;
              const _v7: any = await rt.send(_v6, "setPort", []);
              acc = _v7;
              _v1 = _v7;
              const _v8: any = 0;
              acc = _v8;
              const _v9: any = (temps[1] = _v8);
              acc = _v9;
              _v1 = _v9;
              _loop10: for (;;) {
                _continue11: {
                  const _v12: any = 32768;
                  acc = _v12;
                  const _v13: any = rt.object(999, "Event");
                  acc = _v13;
                  const _v14: any = await rt.send(_v13, "new", [_v12]);
                  acc = _v14;
                  const _v15: any = (args[0] = _v14);
                  acc = _v15;
                  let _v16: any = acc;
                  const _v17: any = rt.get(this, "client");
                  acc = _v17;
                  _v16 = _v17;
                  if (rt.truth(_v17)) {
                    const _v18: any = rt.get(this, "client");
                    acc = _v18;
                    const _v19: any = await rt.send(_v18, "window", []);
                    acc = _v19;
                    const _v20: any = await rt.send(_v19, "window", []);
                    acc = _v20;
                    const _v21: any = (args[0] ?? 0);
                    acc = _v21;
                    const _v22: any = await rt.send(_v21, "localize", [_v20]);
                    acc = _v22;
                    _v16 = _v22;
                  }
                  acc = _v16;
                  let _v23: any = acc;
                  const _v24: any = (args[0] ?? 0);
                  acc = _v24;
                  const _v25: any = this;
                  acc = _v25;
                  const _v26: any = await rt.send(_v25, "check", [_v24]);
                  acc = _v26;
                  const _v27: any = (temps[0] = _v26);
                  acc = _v27;
                  const _v28: any = (temps[1] ?? 0);
                  acc = _v28;
                  const _v29: any = rt.op("!=", ...[_v27, _v28]);
                  acc = _v29;
                  _v23 = _v29;
                  if (rt.truth(_v29)) {
                    const _v30: any = this;
                    acc = _v30;
                    const _v31: any = await rt.call(255, "HiliteControl", [_v30], this);
                    acc = _v31;
                    _v23 = _v31;
                    const _v32: any = (temps[0] ?? 0);
                    acc = _v32;
                    const _v33: any = (temps[1] = _v32);
                    acc = _v33;
                    _v23 = _v33;
                  }
                  acc = _v23;
                  const _v34: any = (args[0] ?? 0);
                  acc = _v34;
                  const _v35: any = await rt.send(_v34, "dispose", []);
                  acc = _v35;
                  const _v36: any = await rt.call(255, "StillDown", [], this);
                  acc = _v36;
                  const _v37: any = rt.op("not", ...[_v36]);
                  acc = _v37;
                  if (rt.truth(_v37)) break _loop10;
                }
              }
              _v1 = acc;
              let _v38: any = acc;
              const _v39: any = (temps[0] ?? 0);
              acc = _v39;
              _v38 = _v39;
              if (rt.truth(_v39)) {
                const _v40: any = this;
                acc = _v40;
                const _v41: any = await rt.call(255, "HiliteControl", [_v40], this);
                acc = _v41;
                _v38 = _v41;
              }
              acc = _v38;
              _v1 = _v38;
              const _v42: any = this;
              acc = _v42;
              const _v43: any = await rt.send(_v42, "resetPort", []);
              acc = _v43;
              _v1 = _v43;
              const _v44: any = (temps[0] ?? 0);
              acc = _v44;
              return _v44;
              _v1 = acc;
            } else {
              let _v45: any = acc;
              let _v46: any = 1;
              if (rt.truth(_v46)) {
                const _v47: any = (args[0] ?? 0);
                acc = _v47;
                const _v48: any = await rt.send(_v47, "type", []);
                acc = _v48;
                const _v49: any = 4;
                acc = _v49;
                const _v50: any = rt.op("==", ...[_v48, _v49]);
                acc = _v50;
                _v46 = _v50;
              }
              if (rt.truth(_v46)) {
                const _v51: any = (args[0] ?? 0);
                acc = _v51;
                const _v52: any = await rt.send(_v51, "message", []);
                acc = _v52;
                const _v53: any = rt.get(this, "key");
                acc = _v53;
                const _v54: any = rt.op("==", ...[_v52, _v53]);
                acc = _v54;
                _v46 = _v54;
              }
              acc = _v46;
              _v45 = _v46;
              if (rt.truth(_v46)) {
                const _v55: any = 1;
                acc = _v55;
                const _v56: any = this;
                acc = _v56;
                const _v57: any = await rt.send(_v56, "hilite", [_v55]);
                acc = _v57;
                _v45 = _v57;
              }
              acc = _v45;
              _v1 = _v45;
              const _v58: any = this;
              acc = _v58;
              return _v58;
              _v1 = acc;
            }
            acc = _v1;
            return acc;
          },
          // SCI Interface.sc: Item.isType
          "isType": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "type");
            acc = _v1;
            const _v2: any = (args[0] ?? 0);
            acc = _v2;
            const _v3: any = rt.op("==", ...[_v1, _v2]);
            acc = _v3;
            return _v3;
            return acc;
          },
          // SCI Interface.sc: Item.checkState
          "checkState": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "state");
            acc = _v1;
            const _v2: any = (args[0] ?? 0);
            acc = _v2;
            const _v3: any = rt.op("&", ...[_v1, _v2]);
            acc = _v3;
            return _v3;
            return acc;
          },
          // SCI Interface.sc: Item.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "value");
            acc = _v1;
            return _v1;
            return acc;
          },
          // SCI Interface.sc: Item.setSize
          "setSize": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
          // SCI Interface.sc: Item.move
          "move": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = rt.set(this, "nsRight", rt.op("+", rt.get(this, "nsRight"), _v1));
            acc = _v2;
            const _v3: any = (args[0] ?? 0);
            acc = _v3;
            const _v4: any = rt.set(this, "nsLeft", rt.op("+", rt.get(this, "nsLeft"), _v3));
            acc = _v4;
            const _v5: any = (args[1] ?? 0);
            acc = _v5;
            const _v6: any = rt.set(this, "nsTop", rt.op("+", rt.get(this, "nsTop"), _v5));
            acc = _v6;
            const _v7: any = (args[1] ?? 0);
            acc = _v7;
            const _v8: any = rt.set(this, "nsBottom", rt.op("+", rt.get(this, "nsBottom"), _v7));
            acc = _v8;
            return acc;
          },
          // SCI Interface.sc: Item.moveTo
          "moveTo": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = rt.get(this, "nsLeft");
            acc = _v2;
            const _v3: any = rt.op("-", ...[_v1, _v2]);
            acc = _v3;
            const _v4: any = (args[1] ?? 0);
            acc = _v4;
            const _v5: any = rt.get(this, "nsTop");
            acc = _v5;
            const _v6: any = rt.op("-", ...[_v4, _v5]);
            acc = _v6;
            const _v7: any = this;
            acc = _v7;
            const _v8: any = await rt.send(_v7, "move", [_v3, _v6]);
            acc = _v8;
            return acc;
          },
          // SCI Interface.sc: Item.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "setPort", []);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 0;
            if (!rt.truth(_v4)) {
              let _v5: any = 1;
              if (rt.truth(_v5)) {
                const _v6: any = rt.get(this, "type");
                acc = _v6;
                const _v7: any = 6;
                acc = _v7;
                const _v8: any = rt.op("!=", ...[_v6, _v7]);
                acc = _v8;
                _v5 = _v8;
              }
              if (rt.truth(_v5)) {
                const _v9: any = rt.get(this, "type");
                acc = _v9;
                const _v10: any = 7;
                acc = _v10;
                const _v11: any = rt.op("!=", ...[_v9, _v10]);
                acc = _v11;
                _v5 = _v11;
              }
              acc = _v5;
              _v4 = _v5;
            }
            if (!rt.truth(_v4)) {
              let _v12: any = 1;
              if (rt.truth(_v12)) {
                const _v13: any = argc;
                acc = _v13;
                _v12 = _v13;
              }
              if (rt.truth(_v12)) {
                const _v14: any = (args[0] ?? 0);
                acc = _v14;
                _v12 = _v14;
              }
              acc = _v12;
              _v4 = _v12;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v15: any = this;
              acc = _v15;
              const _v16: any = await rt.send(_v15, "erase", []);
              acc = _v16;
              _v3 = _v16;
              let _v17: any = acc;
              const _v18: any = rt.get(this, "state");
              acc = _v18;
              const _v19: any = 64;
              acc = _v19;
              const _v20: any = rt.op("&", ...[_v18, _v19]);
              acc = _v20;
              _v17 = _v20;
              if (rt.truth(_v20)) {
                const _v21: any = rt.get(this, "nsTop");
                acc = _v21;
                const _v22: any = rt.set(this, "lsTop", _v21);
                acc = _v22;
                _v17 = _v22;
                const _v23: any = rt.get(this, "nsLeft");
                acc = _v23;
                const _v24: any = rt.set(this, "lsLeft", _v23);
                acc = _v24;
                _v17 = _v24;
                const _v25: any = rt.get(this, "nsBottom");
                acc = _v25;
                const _v26: any = rt.set(this, "lsBottom", _v25);
                acc = _v26;
                _v17 = _v26;
                const _v27: any = rt.get(this, "nsRight");
                acc = _v27;
                const _v28: any = rt.set(this, "lsRight", _v27);
                acc = _v28;
                _v17 = _v28;
                const _v29: any = 7;
                acc = _v29;
                const _v30: any = rt.get(this, "nsTop");
                acc = _v30;
                const _v31: any = 1;
                acc = _v31;
                const _v32: any = rt.op("-", ...[_v30, _v31]);
                acc = _v32;
                const _v33: any = rt.get(this, "nsLeft");
                acc = _v33;
                const _v34: any = 1;
                acc = _v34;
                const _v35: any = rt.op("-", ...[_v33, _v34]);
                acc = _v35;
                const _v36: any = rt.get(this, "nsBottom");
                acc = _v36;
                const _v37: any = 1;
                acc = _v37;
                const _v38: any = rt.op("+", ...[_v36, _v37]);
                acc = _v38;
                const _v39: any = rt.get(this, "nsRight");
                acc = _v39;
                const _v40: any = 1;
                acc = _v40;
                const _v41: any = rt.op("+", ...[_v39, _v40]);
                acc = _v41;
                const _v42: any = 1;
                acc = _v42;
                const _v43: any = await rt.call(255, "Graph", [_v29, _v32, _v35, _v38, _v41, _v42], this);
                acc = _v43;
                const _v44: any = rt.set(this, "underBits", _v43);
                acc = _v44;
                _v17 = _v44;
              }
              acc = _v17;
              _v3 = _v17;
            }
            acc = _v3;
            let _v45: any = acc;
            const _v46: any = rt.get(this, "type");
            acc = _v46;
            _v45 = _v46;
            if (rt.truth(_v46)) {
              const _v47: any = this;
              acc = _v47;
              const _v48: any = await rt.call(255, "DrawControl", [_v47], this);
              acc = _v48;
              _v45 = _v48;
            }
            acc = _v45;
            const _v49: any = this;
            acc = _v49;
            const _v50: any = await rt.send(_v49, "resetPort", []);
            acc = _v50;
            return acc;
          },
          // SCI Interface.sc: Item.erase
          "erase": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "underBits");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = this;
              acc = _v3;
              const _v4: any = await rt.send(_v3, "setPort", []);
              acc = _v4;
              _v1 = _v4;
              const _v5: any = 8;
              acc = _v5;
              const _v6: any = rt.get(this, "underBits");
              acc = _v6;
              const _v7: any = await rt.call(255, "Graph", [_v5, _v6], this);
              acc = _v7;
              _v1 = _v7;
              const _v8: any = 12;
              acc = _v8;
              const _v9: any = rt.get(this, "nsTop");
              acc = _v9;
              const _v10: any = 1;
              acc = _v10;
              const _v11: any = rt.op("-", ...[_v9, _v10]);
              acc = _v11;
              const _v12: any = rt.get(this, "nsLeft");
              acc = _v12;
              const _v13: any = 1;
              acc = _v13;
              const _v14: any = rt.op("-", ...[_v12, _v13]);
              acc = _v14;
              const _v15: any = rt.get(this, "nsBottom");
              acc = _v15;
              const _v16: any = 1;
              acc = _v16;
              const _v17: any = rt.op("+", ...[_v15, _v16]);
              acc = _v17;
              const _v18: any = rt.get(this, "nsRight");
              acc = _v18;
              const _v19: any = 1;
              acc = _v19;
              const _v20: any = rt.op("+", ...[_v18, _v19]);
              acc = _v20;
              const _v21: any = 1;
              acc = _v21;
              const _v22: any = await rt.call(255, "Graph", [_v8, _v11, _v14, _v17, _v20, _v21], this);
              acc = _v22;
              _v1 = _v22;
              const _v23: any = 0;
              acc = _v23;
              const _v24: any = rt.set(this, "underBits", _v23);
              acc = _v24;
              _v1 = _v24;
              const _v25: any = this;
              acc = _v25;
              const _v26: any = await rt.send(_v25, "resetPort", []);
              acc = _v26;
              _v1 = _v26;
            }
            acc = _v1;
            return acc;
          },
          // SCI Interface.sc: Item.dispose
          "dispose": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "underBits");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = 133;
              acc = _v3;
              const _v4: any = rt.get(this, "underBits");
              acc = _v4;
              const _v5: any = await rt.call(255, "UnLoad", [_v3, _v4], this);
              acc = _v5;
              _v1 = _v5;
              const _v6: any = 0;
              acc = _v6;
              const _v7: any = rt.set(this, "underBits", _v6);
              acc = _v7;
              _v1 = _v7;
              const _v8: any = this;
              acc = _v8;
              const _v9: any = await rt.send(_v8, "erase", []);
              acc = _v9;
              _v1 = _v9;
            }
            acc = _v1;
            const _v10: any = await rt.superSend(this, {"script": 255, "name": "Item"}, "dispose", []);
            acc = _v10;
            return acc;
          },
          // SCI Interface.sc: Item.cycle
          "cycle": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
        },
      },
      {
        name: "DText",
        className: "Item",
        parent: {"script": 255, "name": "Item"},
        isClass: true,
        properties: {"type": 2, "text": 0, "font": 1, "mode": 0},
        methods: {
          // SCI Interface.sc: DText.new
          "new": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = rt.global(22);
            acc = _v1;
            const _v2: any = await rt.superSend(this, {"script": 255, "name": "DText"}, "new", []);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "font", [_v1]);
            acc = _v3;
            const _v4: any = await rt.send(_v2, "yourself", []);
            acc = _v4;
            return acc;
          },
          // SCI Interface.sc: DText.setSize
          "setSize": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0];
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.ref("array", temps, (0 + (Number(_v1) & 65535)));
            acc = _v2;
            const _v3: any = rt.get(this, "text");
            acc = _v3;
            const _v4: any = rt.get(this, "font");
            acc = _v4;
            let _v5: any = acc;
            const _v6: any = argc;
            acc = _v6;
            _v5 = _v6;
            if (rt.truth(_v6)) {
              const _v7: any = (args[0] ?? 0);
              acc = _v7;
              _v5 = _v7;
            } else {
              const _v8: any = 0;
              acc = _v8;
              _v5 = _v8;
            }
            acc = _v5;
            const _v9: any = await rt.call(255, "TextSize", [_v2, _v3, _v4, _v5], this);
            acc = _v9;
            const _v10: any = rt.get(this, "nsTop");
            acc = _v10;
            const _v11: any = 2;
            acc = _v11;
            const _v12: any = (temps[(0 + (Number(_v11) & 65535))] ?? 0);
            acc = _v12;
            const _v13: any = rt.op("+", ...[_v10, _v12]);
            acc = _v13;
            const _v14: any = rt.set(this, "nsBottom", _v13);
            acc = _v14;
            const _v15: any = rt.get(this, "nsLeft");
            acc = _v15;
            const _v16: any = 3;
            acc = _v16;
            const _v17: any = (temps[(0 + (Number(_v16) & 65535))] ?? 0);
            acc = _v17;
            const _v18: any = rt.op("+", ...[_v15, _v17]);
            acc = _v18;
            const _v19: any = rt.set(this, "nsRight", _v18);
            acc = _v19;
            return acc;
          },
        },
      },
      {
        name: "DIcon",
        className: "Item",
        parent: {"script": 255, "name": "Item"},
        isClass: true,
        properties: {"type": 4, "view": 0, "loop": 0, "cel": 0, "priority": -1},
        methods: {
          // SCI Interface.sc: DIcon.setSize
          "setSize": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0];
            const _v1: any = rt.get(this, "nsLeft");
            acc = _v1;
            const _v2: any = rt.get(this, "view");
            acc = _v2;
            const _v3: any = rt.get(this, "loop");
            acc = _v3;
            const _v4: any = rt.get(this, "cel");
            acc = _v4;
            const _v5: any = await rt.call(255, "CelWide", [_v2, _v3, _v4], this);
            acc = _v5;
            const _v6: any = rt.op("+", ...[_v1, _v5]);
            acc = _v6;
            const _v7: any = rt.set(this, "nsRight", _v6);
            acc = _v7;
            const _v8: any = rt.get(this, "nsTop");
            acc = _v8;
            const _v9: any = rt.get(this, "view");
            acc = _v9;
            const _v10: any = rt.get(this, "loop");
            acc = _v10;
            const _v11: any = rt.get(this, "cel");
            acc = _v11;
            const _v12: any = await rt.call(255, "CelHigh", [_v9, _v10, _v11], this);
            acc = _v12;
            const _v13: any = rt.op("+", ...[_v8, _v12]);
            acc = _v13;
            const _v14: any = rt.set(this, "nsBottom", _v13);
            acc = _v14;
            return acc;
          },
        },
      },
      {
        name: "ErasableDIcon",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: true,
        properties: {},
        methods: {
          // SCI Interface.sc: ErasableDIcon.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            let _v2: any = 0;
            if (!rt.truth(_v2)) {
              const _v3: any = argc;
              acc = _v3;
              const _v4: any = 1;
              acc = _v4;
              const _v5: any = rt.op("!=", ...[_v3, _v4]);
              acc = _v5;
              _v2 = _v5;
            }
            if (!rt.truth(_v2)) {
              const _v6: any = (args[0] ?? 0);
              acc = _v6;
              _v2 = _v6;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v7: any = 23;
              acc = _v7;
              const _v8: any = rt.global(476);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "play", [_v7]);
              acc = _v9;
              _v1 = _v9;
            }
            acc = _v1;
            const _v10: any = await rt.superSend(this, {"script": 255, "name": "ErasableDIcon"}, "doit", []);
            acc = _v10;
            return acc;
          },
        },
      },
      {
        name: "DButton",
        className: "Item",
        parent: {"script": 255, "name": "Item"},
        isClass: true,
        properties: {"type": 1, "state": 3, "text": 0, "font": 0},
        methods: {
          // SCI Interface.sc: DButton.setSize
          "setSize": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0];
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.ref("array", temps, (0 + (Number(_v1) & 65535)));
            acc = _v2;
            const _v3: any = rt.get(this, "text");
            acc = _v3;
            const _v4: any = rt.get(this, "font");
            acc = _v4;
            const _v5: any = await rt.call(255, "TextSize", [_v2, _v3, _v4], this);
            acc = _v5;
            const _v6: any = 2;
            acc = _v6;
            const _v7: any = 2;
            acc = _v7;
            const _v8: any = (temps[(0 + (Number(_v7) & 65535))] = rt.op("+", (temps[(0 + (Number(_v7) & 65535))] ?? 0), _v6));
            acc = _v8;
            const _v9: any = 2;
            acc = _v9;
            const _v10: any = 3;
            acc = _v10;
            const _v11: any = (temps[(0 + (Number(_v10) & 65535))] = rt.op("+", (temps[(0 + (Number(_v10) & 65535))] ?? 0), _v9));
            acc = _v11;
            const _v12: any = rt.get(this, "nsTop");
            acc = _v12;
            const _v13: any = 2;
            acc = _v13;
            const _v14: any = (temps[(0 + (Number(_v13) & 65535))] ?? 0);
            acc = _v14;
            const _v15: any = rt.op("+", ...[_v12, _v14]);
            acc = _v15;
            const _v16: any = rt.set(this, "nsBottom", _v15);
            acc = _v16;
            const _v17: any = 3;
            acc = _v17;
            const _v18: any = (temps[(0 + (Number(_v17) & 65535))] ?? 0);
            acc = _v18;
            const _v19: any = 15;
            acc = _v19;
            const _v20: any = rt.op("+", ...[_v18, _v19]);
            acc = _v20;
            const _v21: any = 16;
            acc = _v21;
            const _v22: any = rt.op("/", ...[_v20, _v21]);
            acc = _v22;
            const _v23: any = 16;
            acc = _v23;
            const _v24: any = rt.op("*", ...[_v22, _v23]);
            acc = _v24;
            const _v25: any = 3;
            acc = _v25;
            const _v26: any = (temps[(0 + (Number(_v25) & 65535))] = _v24);
            acc = _v26;
            const _v27: any = 3;
            acc = _v27;
            const _v28: any = (temps[(0 + (Number(_v27) & 65535))] ?? 0);
            acc = _v28;
            const _v29: any = rt.get(this, "nsLeft");
            acc = _v29;
            const _v30: any = rt.op("+", ...[_v28, _v29]);
            acc = _v30;
            const _v31: any = rt.set(this, "nsRight", _v30);
            acc = _v31;
            return acc;
          },
        },
      },
      {
        name: "DEdit",
        className: "Item",
        parent: {"script": 255, "name": "Item"},
        isClass: true,
        properties: {"type": 3, "state": 1, "text": 0, "font": 0, "max": 0, "cursor": 0},
        methods: {
          // SCI Interface.sc: DEdit.track
          "track": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = (args[0] ?? 0);
            acc = _v2;
            const _v3: any = await rt.call(255, "EditControl", [_v1, _v2], this);
            acc = _v3;
            const _v4: any = this;
            acc = _v4;
            return _v4;
            return acc;
          },
          // SCI Interface.sc: DEdit.setSize
          "setSize": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0];
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.ref("array", temps, (0 + (Number(_v1) & 65535)));
            acc = _v2;
            const _v3: any = "M";
            acc = _v3;
            const _v4: any = rt.get(this, "font");
            acc = _v4;
            const _v5: any = await rt.call(255, "TextSize", [_v2, _v3, _v4], this);
            acc = _v5;
            const _v6: any = rt.get(this, "nsTop");
            acc = _v6;
            const _v7: any = 2;
            acc = _v7;
            const _v8: any = (temps[(0 + (Number(_v7) & 65535))] ?? 0);
            acc = _v8;
            const _v9: any = rt.op("+", ...[_v6, _v8]);
            acc = _v9;
            const _v10: any = rt.set(this, "nsBottom", _v9);
            acc = _v10;
            const _v11: any = rt.get(this, "nsLeft");
            acc = _v11;
            const _v12: any = 3;
            acc = _v12;
            const _v13: any = (temps[(0 + (Number(_v12) & 65535))] ?? 0);
            acc = _v13;
            const _v14: any = rt.get(this, "max");
            acc = _v14;
            const _v15: any = 3;
            acc = _v15;
            const _v16: any = rt.op("*", ...[_v13, _v14, _v15]);
            acc = _v16;
            const _v17: any = 4;
            acc = _v17;
            const _v18: any = rt.op("/", ...[_v16, _v17]);
            acc = _v18;
            const _v19: any = rt.op("+", ...[_v11, _v18]);
            acc = _v19;
            const _v20: any = rt.set(this, "nsRight", _v19);
            acc = _v20;
            const _v21: any = rt.get(this, "text");
            acc = _v21;
            const _v22: any = await rt.call(255, "StrLen", [_v21], this);
            acc = _v22;
            const _v23: any = rt.set(this, "cursor", _v22);
            acc = _v23;
            return acc;
          },
        },
      },
      {
        name: "DSelector",
        className: "Item",
        parent: {"script": 255, "name": "Item"},
        isClass: true,
        properties: {"type": 6, "font": 0, "x": 20, "y": 6, "text": 0, "cursor": 0, "brTop": 0, "mark": 0},
        methods: {
          // SCI Interface.sc: DSelector.indexOf
          "indexOf": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            const _v1: any = rt.get(this, "text");
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v5: any = 0;
            acc = _v5;
            const _v6: any = (temps[1] = _v5);
            acc = _v6;
            _loop3: for (;;) {
              const _v7: any = (temps[1] ?? 0);
              acc = _v7;
              const _v8: any = 300;
              acc = _v8;
              const _v9: any = rt.op("<", ...[_v7, _v8]);
              acc = _v9;
              if (!rt.truth(_v9)) break _loop3;
              _continue4: {
                let _v10: any = acc;
                const _v11: any = 0;
                acc = _v11;
                const _v12: any = (temps[0] ?? 0);
                acc = _v12;
                const _v13: any = 0;
                acc = _v13;
                const _v14: any = await rt.call(255, "StrAt", [_v12, _v13], this);
                acc = _v14;
                const _v15: any = rt.op("==", ...[_v11, _v14]);
                acc = _v15;
                _v10 = _v15;
                if (rt.truth(_v15)) {
                  const _v16: any = -1;
                  acc = _v16;
                  return _v16;
                  _v10 = acc;
                }
                acc = _v10;
                let _v17: any = acc;
                const _v18: any = (args[0] ?? 0);
                acc = _v18;
                const _v19: any = (temps[0] ?? 0);
                acc = _v19;
                const _v20: any = rt.get(this, "x");
                acc = _v20;
                const _v21: any = await rt.call(255, "StrCmp", [_v18, _v19, _v20], this);
                acc = _v21;
                const _v22: any = rt.op("not", ...[_v21]);
                acc = _v22;
                _v17 = _v22;
                if (rt.truth(_v22)) {
                  const _v23: any = (temps[1] ?? 0);
                  acc = _v23;
                  return _v23;
                  _v17 = acc;
                }
                acc = _v17;
                const _v24: any = rt.get(this, "x");
                acc = _v24;
                const _v25: any = (temps[0] = rt.op("+", (temps[0] ?? 0), _v24));
                acc = _v25;
              }
              const _v26: any = (temps[1] = rt.op("+", (temps[1] ?? 0), 1));
              acc = _v26;
            }
            return acc;
          },
          // SCI Interface.sc: DSelector.at
          "at": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "text");
            acc = _v1;
            const _v2: any = rt.get(this, "x");
            acc = _v2;
            const _v3: any = (args[0] ?? 0);
            acc = _v3;
            const _v4: any = rt.op("*", ...[_v2, _v3]);
            acc = _v4;
            const _v5: any = rt.op("+", ...[_v1, _v4]);
            acc = _v5;
            return _v5;
            return acc;
          },
          // SCI Interface.sc: DSelector.setSize
          "setSize": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0];
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.ref("array", temps, (0 + (Number(_v1) & 65535)));
            acc = _v2;
            const _v3: any = "M";
            acc = _v3;
            const _v4: any = rt.get(this, "font");
            acc = _v4;
            const _v5: any = await rt.call(255, "TextSize", [_v2, _v3, _v4], this);
            acc = _v5;
            const _v6: any = rt.get(this, "nsTop");
            acc = _v6;
            const _v7: any = 20;
            acc = _v7;
            const _v8: any = 2;
            acc = _v8;
            const _v9: any = (temps[(0 + (Number(_v8) & 65535))] ?? 0);
            acc = _v9;
            const _v10: any = rt.get(this, "y");
            acc = _v10;
            const _v11: any = rt.op("*", ...[_v9, _v10]);
            acc = _v11;
            const _v12: any = rt.op("+", ...[_v6, _v7, _v11]);
            acc = _v12;
            const _v13: any = rt.set(this, "nsBottom", _v12);
            acc = _v13;
            const _v14: any = rt.get(this, "nsLeft");
            acc = _v14;
            const _v15: any = 3;
            acc = _v15;
            const _v16: any = (temps[(0 + (Number(_v15) & 65535))] ?? 0);
            acc = _v16;
            const _v17: any = rt.get(this, "x");
            acc = _v17;
            const _v18: any = 4;
            acc = _v18;
            const _v19: any = rt.op("*", ...[_v16, _v17, _v18]);
            acc = _v19;
            const _v20: any = 4;
            acc = _v20;
            const _v21: any = rt.op("/", ...[_v19, _v20]);
            acc = _v21;
            const _v22: any = rt.op("+", ...[_v14, _v21]);
            acc = _v22;
            const _v23: any = rt.set(this, "nsRight", _v22);
            acc = _v23;
            const _v24: any = rt.get(this, "text");
            acc = _v24;
            const _v25: any = rt.set(this, "cursor", _v24);
            acc = _v25;
            const _v26: any = rt.set(this, "brTop", _v25);
            acc = _v26;
            const _v27: any = 0;
            acc = _v27;
            const _v28: any = rt.set(this, "mark", _v27);
            acc = _v28;
            return acc;
          },
          // SCI Interface.sc: DSelector.retreat
          "retreat": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.get(this, "type");
            acc = _v4;
            const _v5: any = 7;
            acc = _v5;
            const _v6: any = rt.op("==", ...[_v4, _v5]);
            acc = _v6;
            _v3 = _v6;
            if (rt.truth(_v6)) {
              const _v7: any = 0;
              acc = _v7;
              const _v8: any = rt.set(this, "mark", _v7);
              acc = _v8;
              _v3 = _v8;
              const _v9: any = 1;
              acc = _v9;
              const _v10: any = (temps[0] = _v9);
              acc = _v10;
              _v3 = _v10;
              const _v11: any = 3;
              acc = _v11;
              const _v12: any = await rt.call(255, "Wait", [_v11], this);
              acc = _v12;
              _v3 = _v12;
            }
            acc = _v3;
            _loop13: for (;;) {
              const _v15: any = (args[0] ?? 0);
              acc = _v15;
              if (!rt.truth(_v15)) break _loop13;
              _continue14: {
                let _v16: any = acc;
                const _v17: any = rt.get(this, "cursor");
                acc = _v17;
                const _v18: any = rt.get(this, "text");
                acc = _v18;
                const _v19: any = rt.op("!=", ...[_v17, _v18]);
                acc = _v19;
                _v16 = _v19;
                if (rt.truth(_v19)) {
                  const _v20: any = 1;
                  acc = _v20;
                  const _v21: any = (temps[0] = _v20);
                  acc = _v21;
                  _v16 = _v21;
                  const _v22: any = rt.get(this, "x");
                  acc = _v22;
                  const _v23: any = rt.set(this, "cursor", rt.op("-", rt.get(this, "cursor"), _v22));
                  acc = _v23;
                  _v16 = _v23;
                  let _v24: any = acc;
                  const _v25: any = rt.get(this, "mark");
                  acc = _v25;
                  _v24 = _v25;
                  if (rt.truth(_v25)) {
                    const _v26: any = rt.set(this, "mark", rt.op("-", rt.get(this, "mark"), 1));
                    acc = _v26;
                    _v24 = _v26;
                  } else {
                    const _v27: any = rt.get(this, "x");
                    acc = _v27;
                    const _v28: any = rt.set(this, "brTop", rt.op("-", rt.get(this, "brTop"), _v27));
                    acc = _v28;
                    _v24 = _v28;
                  }
                  acc = _v24;
                  _v16 = _v24;
                } else {
                  break _loop13;
                  _v16 = acc;
                }
                acc = _v16;
                const _v29: any = (args[0] = rt.op("-", (args[0] ?? 0), 1));
                acc = _v29;
              }
            }
            let _v30: any = acc;
            const _v31: any = (temps[0] ?? 0);
            acc = _v31;
            _v30 = _v31;
            if (rt.truth(_v31)) {
              const _v32: any = this;
              acc = _v32;
              const _v33: any = await rt.send(_v32, "draw", []);
              acc = _v33;
              _v30 = _v33;
            }
            acc = _v30;
            return acc;
          },
          // SCI Interface.sc: DSelector.advance
          "advance": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.get(this, "type");
            acc = _v4;
            const _v5: any = 7;
            acc = _v5;
            const _v6: any = rt.op("==", ...[_v4, _v5]);
            acc = _v6;
            _v3 = _v6;
            if (rt.truth(_v6)) {
              const _v7: any = rt.get(this, "y");
              acc = _v7;
              const _v8: any = rt.set(this, "mark", _v7);
              acc = _v8;
              _v3 = _v8;
              const _v9: any = 1;
              acc = _v9;
              const _v10: any = (temps[0] = _v9);
              acc = _v10;
              _v3 = _v10;
              const _v11: any = 3;
              acc = _v11;
              const _v12: any = await rt.call(255, "Wait", [_v11], this);
              acc = _v12;
              _v3 = _v12;
            }
            acc = _v3;
            _loop13: for (;;) {
              const _v15: any = (args[0] ?? 0);
              acc = _v15;
              if (!rt.truth(_v15)) break _loop13;
              _continue14: {
                let _v16: any = acc;
                const _v17: any = rt.get(this, "cursor");
                acc = _v17;
                const _v18: any = rt.get(this, "x");
                acc = _v18;
                const _v19: any = await rt.call(255, "StrAt", [_v17, _v18], this);
                acc = _v19;
                _v16 = _v19;
                if (rt.truth(_v19)) {
                  const _v20: any = 1;
                  acc = _v20;
                  const _v21: any = (temps[0] = _v20);
                  acc = _v21;
                  _v16 = _v21;
                  const _v22: any = rt.get(this, "x");
                  acc = _v22;
                  const _v23: any = rt.set(this, "cursor", rt.op("+", rt.get(this, "cursor"), _v22));
                  acc = _v23;
                  _v16 = _v23;
                  let _v24: any = acc;
                  const _v25: any = rt.get(this, "mark");
                  acc = _v25;
                  const _v26: any = 1;
                  acc = _v26;
                  const _v27: any = rt.op("+", ...[_v25, _v26]);
                  acc = _v27;
                  const _v28: any = rt.get(this, "y");
                  acc = _v28;
                  const _v29: any = rt.op("<", ...[_v27, _v28]);
                  acc = _v29;
                  _v24 = _v29;
                  if (rt.truth(_v29)) {
                    const _v30: any = rt.set(this, "mark", rt.op("+", rt.get(this, "mark"), 1));
                    acc = _v30;
                    _v24 = _v30;
                  } else {
                    const _v31: any = rt.get(this, "x");
                    acc = _v31;
                    const _v32: any = rt.set(this, "brTop", rt.op("+", rt.get(this, "brTop"), _v31));
                    acc = _v32;
                    _v24 = _v32;
                  }
                  acc = _v24;
                  _v16 = _v24;
                } else {
                  break _loop13;
                  _v16 = acc;
                }
                acc = _v16;
                const _v33: any = (args[0] = rt.op("-", (args[0] ?? 0), 1));
                acc = _v33;
              }
            }
            let _v34: any = acc;
            const _v35: any = (temps[0] ?? 0);
            acc = _v35;
            _v34 = _v35;
            if (rt.truth(_v35)) {
              const _v36: any = this;
              acc = _v36;
              const _v37: any = await rt.send(_v36, "draw", []);
              acc = _v37;
              _v34 = _v37;
            }
            acc = _v34;
            return acc;
          },
          // SCI Interface.sc: DSelector.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            let _v1: any = acc;
            const _v2: any = (args[0] ?? 0);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "claimed", []);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = 0;
              acc = _v4;
              return _v4;
              _v1 = acc;
            }
            acc = _v1;
            let _v5: any = acc;
            const _v6: any = 64;
            acc = _v6;
            const _v7: any = (args[0] ?? 0);
            acc = _v7;
            const _v8: any = await rt.send(_v7, "type", []);
            acc = _v8;
            const _v9: any = rt.op("==", ...[_v6, _v8]);
            acc = _v9;
            _v5 = _v9;
            if (rt.truth(_v9)) {
              const _v10: any = 4;
              acc = _v10;
              const _v11: any = (args[0] ?? 0);
              acc = _v11;
              const _v12: any = await rt.send(_v11, "type", [_v10]);
              acc = _v12;
              _v5 = _v12;
              let _v13: any = acc;
              const _v14: any = (args[0] ?? 0);
              acc = _v14;
              const _v15: any = await rt.send(_v14, "message", []);
              acc = _v15;
              _branch16: {
                const _v17: any = 5;
                acc = _v17;
                _v13 = rt.op("==", _v15, _v17);
                acc = _v13;
                if (rt.truth(_v13)) {
                  const _v18: any = 20480;
                  acc = _v18;
                  const _v19: any = (args[0] ?? 0);
                  acc = _v19;
                  const _v20: any = await rt.send(_v19, "message", [_v18]);
                  acc = _v20;
                  _v13 = _v20;
                  break _branch16;
                }
                const _v21: any = 1;
                acc = _v21;
                _v13 = rt.op("==", _v15, _v21);
                acc = _v13;
                if (rt.truth(_v13)) {
                  const _v22: any = 18432;
                  acc = _v22;
                  const _v23: any = (args[0] ?? 0);
                  acc = _v23;
                  const _v24: any = await rt.send(_v23, "message", [_v22]);
                  acc = _v24;
                  _v13 = _v24;
                  break _branch16;
                }
                const _v25: any = 64;
                acc = _v25;
                const _v26: any = (args[0] ?? 0);
                acc = _v26;
                const _v27: any = await rt.send(_v26, "type", [_v25]);
                acc = _v27;
                _v13 = _v27;
                break _branch16;
              }
              acc = _v13;
              _v5 = _v13;
            }
            acc = _v5;
            const _v28: any = 0;
            acc = _v28;
            const _v29: any = (temps[0] = _v28);
            acc = _v29;
            let _v30: any = acc;
            const _v31: any = (args[0] ?? 0);
            acc = _v31;
            const _v32: any = await rt.send(_v31, "type", []);
            acc = _v32;
            _branch33: {
              const _v34: any = 4;
              acc = _v34;
              _v30 = rt.op("==", _v32, _v34);
              acc = _v30;
              if (rt.truth(_v30)) {
                const _v35: any = 1;
                acc = _v35;
                const _v36: any = (args[0] ?? 0);
                acc = _v36;
                const _v37: any = await rt.send(_v36, "claimed", [_v35]);
                acc = _v37;
                _v30 = _v37;
                let _v38: any = acc;
                const _v39: any = (args[0] ?? 0);
                acc = _v39;
                const _v40: any = await rt.send(_v39, "message", []);
                acc = _v40;
                _branch41: {
                  const _v42: any = 18176;
                  acc = _v42;
                  _v38 = rt.op("==", _v40, _v42);
                  acc = _v38;
                  if (rt.truth(_v38)) {
                    const _v43: any = 50;
                    acc = _v43;
                    const _v44: any = this;
                    acc = _v44;
                    const _v45: any = await rt.send(_v44, "retreat", [_v43]);
                    acc = _v45;
                    _v38 = _v45;
                    break _branch41;
                  }
                  const _v46: any = 20224;
                  acc = _v46;
                  _v38 = rt.op("==", _v40, _v46);
                  acc = _v38;
                  if (rt.truth(_v38)) {
                    const _v47: any = 50;
                    acc = _v47;
                    const _v48: any = this;
                    acc = _v48;
                    const _v49: any = await rt.send(_v48, "advance", [_v47]);
                    acc = _v49;
                    _v38 = _v49;
                    break _branch41;
                  }
                  const _v50: any = 20736;
                  acc = _v50;
                  _v38 = rt.op("==", _v40, _v50);
                  acc = _v38;
                  if (rt.truth(_v38)) {
                    const _v51: any = rt.get(this, "y");
                    acc = _v51;
                    const _v52: any = 1;
                    acc = _v52;
                    const _v53: any = rt.op("-", ...[_v51, _v52]);
                    acc = _v53;
                    const _v54: any = this;
                    acc = _v54;
                    const _v55: any = await rt.send(_v54, "advance", [_v53]);
                    acc = _v55;
                    _v38 = _v55;
                    break _branch41;
                  }
                  const _v56: any = 18688;
                  acc = _v56;
                  _v38 = rt.op("==", _v40, _v56);
                  acc = _v38;
                  if (rt.truth(_v38)) {
                    const _v57: any = rt.get(this, "y");
                    acc = _v57;
                    const _v58: any = 1;
                    acc = _v58;
                    const _v59: any = rt.op("-", ...[_v57, _v58]);
                    acc = _v59;
                    const _v60: any = this;
                    acc = _v60;
                    const _v61: any = await rt.send(_v60, "retreat", [_v59]);
                    acc = _v61;
                    _v38 = _v61;
                    break _branch41;
                  }
                  const _v62: any = 20480;
                  acc = _v62;
                  _v38 = rt.op("==", _v40, _v62);
                  acc = _v38;
                  if (rt.truth(_v38)) {
                    const _v63: any = 1;
                    acc = _v63;
                    const _v64: any = this;
                    acc = _v64;
                    const _v65: any = await rt.send(_v64, "advance", [_v63]);
                    acc = _v65;
                    _v38 = _v65;
                    break _branch41;
                  }
                  const _v66: any = 18432;
                  acc = _v66;
                  _v38 = rt.op("==", _v40, _v66);
                  acc = _v38;
                  if (rt.truth(_v38)) {
                    const _v67: any = 1;
                    acc = _v67;
                    const _v68: any = this;
                    acc = _v68;
                    const _v69: any = await rt.send(_v68, "retreat", [_v67]);
                    acc = _v69;
                    _v38 = _v69;
                    break _branch41;
                  }
                  const _v70: any = 0;
                  acc = _v70;
                  const _v71: any = (args[0] ?? 0);
                  acc = _v71;
                  const _v72: any = await rt.send(_v71, "claimed", [_v70]);
                  acc = _v72;
                  _v38 = _v72;
                  break _branch41;
                }
                acc = _v38;
                _v30 = _v38;
                break _branch33;
              }
              const _v73: any = 1;
              acc = _v73;
              _v30 = rt.op("==", _v32, _v73);
              acc = _v30;
              if (rt.truth(_v30)) {
                let _v74: any = acc;
                const _v75: any = (args[0] ?? 0);
                acc = _v75;
                const _v76: any = this;
                acc = _v76;
                const _v77: any = await rt.send(_v76, "check", [_v75]);
                acc = _v77;
                _v74 = _v77;
                if (rt.truth(_v77)) {
                  const _v78: any = 1;
                  acc = _v78;
                  const _v79: any = (args[0] ?? 0);
                  acc = _v79;
                  const _v80: any = await rt.send(_v79, "claimed", [_v78]);
                  acc = _v80;
                  _v74 = _v80;
                  let _v81: any = acc;
                  _branch82: {
                    const _v83: any = (args[0] ?? 0);
                    acc = _v83;
                    const _v84: any = await rt.send(_v83, "y", []);
                    acc = _v84;
                    const _v85: any = rt.get(this, "nsTop");
                    acc = _v85;
                    const _v86: any = 10;
                    acc = _v86;
                    const _v87: any = rt.op("+", ...[_v85, _v86]);
                    acc = _v87;
                    const _v88: any = rt.op("<", ...[_v84, _v87]);
                    acc = _v88;
                    _v81 = _v88;
                    acc = _v81;
                    if (rt.truth(_v81)) {
                      _loop89: for (;;) {
                        _continue90: {
                          const _v91: any = 1;
                          acc = _v91;
                          const _v92: any = this;
                          acc = _v92;
                          const _v93: any = await rt.send(_v92, "retreat", [_v91]);
                          acc = _v93;
                          const _v94: any = await rt.call(255, "StillDown", [], this);
                          acc = _v94;
                          const _v95: any = rt.op("not", ...[_v94]);
                          acc = _v95;
                          if (rt.truth(_v95)) break _loop89;
                        }
                      }
                      _v81 = acc;
                      break _branch82;
                    }
                    const _v96: any = (args[0] ?? 0);
                    acc = _v96;
                    const _v97: any = await rt.send(_v96, "y", []);
                    acc = _v97;
                    const _v98: any = rt.get(this, "nsBottom");
                    acc = _v98;
                    const _v99: any = 10;
                    acc = _v99;
                    const _v100: any = rt.op("-", ...[_v98, _v99]);
                    acc = _v100;
                    const _v101: any = rt.op(">", ...[_v97, _v100]);
                    acc = _v101;
                    _v81 = _v101;
                    acc = _v81;
                    if (rt.truth(_v81)) {
                      _loop102: for (;;) {
                        _continue103: {
                          const _v104: any = 1;
                          acc = _v104;
                          const _v105: any = this;
                          acc = _v105;
                          const _v106: any = await rt.send(_v105, "advance", [_v104]);
                          acc = _v106;
                          const _v107: any = await rt.call(255, "StillDown", [], this);
                          acc = _v107;
                          const _v108: any = rt.op("not", ...[_v107]);
                          acc = _v108;
                          if (rt.truth(_v108)) break _loop102;
                        }
                      }
                      _v81 = acc;
                      break _branch82;
                    }
                    const _v109: any = rt.get(this, "type");
                    acc = _v109;
                    const _v110: any = 6;
                    acc = _v110;
                    const _v111: any = rt.op("==", ...[_v109, _v110]);
                    acc = _v111;
                    _v81 = _v111;
                    acc = _v81;
                    if (rt.truth(_v81)) {
                      const _v112: any = 0;
                      acc = _v112;
                      const _v113: any = rt.ref("array", temps, (5 + (Number(_v112) & 65535)));
                      acc = _v113;
                      const _v114: any = "M";
                      acc = _v114;
                      const _v115: any = rt.get(this, "font");
                      acc = _v115;
                      const _v116: any = await rt.call(255, "TextSize", [_v113, _v114, _v115], this);
                      acc = _v116;
                      _v81 = _v116;
                      let _v117: any = acc;
                      const _v118: any = (args[0] ?? 0);
                      acc = _v118;
                      const _v119: any = await rt.send(_v118, "y", []);
                      acc = _v119;
                      const _v120: any = rt.get(this, "nsTop");
                      acc = _v120;
                      const _v121: any = 10;
                      acc = _v121;
                      const _v122: any = rt.op("+", ...[_v120, _v121]);
                      acc = _v122;
                      const _v123: any = rt.op("-", ...[_v119, _v122]);
                      acc = _v123;
                      const _v124: any = 2;
                      acc = _v124;
                      const _v125: any = (temps[(5 + (Number(_v124) & 65535))] ?? 0);
                      acc = _v125;
                      const _v126: any = rt.op("/", ...[_v123, _v125]);
                      acc = _v126;
                      const _v127: any = (temps[4] = _v126);
                      acc = _v127;
                      const _v128: any = rt.get(this, "mark");
                      acc = _v128;
                      const _v129: any = rt.op(">", ...[_v127, _v128]);
                      acc = _v129;
                      _v117 = _v129;
                      if (rt.truth(_v129)) {
                        const _v130: any = (temps[4] ?? 0);
                        acc = _v130;
                        const _v131: any = rt.get(this, "mark");
                        acc = _v131;
                        const _v132: any = rt.op("-", ...[_v130, _v131]);
                        acc = _v132;
                        const _v133: any = this;
                        acc = _v133;
                        const _v134: any = await rt.send(_v133, "advance", [_v132]);
                        acc = _v134;
                        _v117 = _v134;
                      } else {
                        const _v135: any = rt.get(this, "mark");
                        acc = _v135;
                        const _v136: any = (temps[4] ?? 0);
                        acc = _v136;
                        const _v137: any = rt.op("-", ...[_v135, _v136]);
                        acc = _v137;
                        const _v138: any = this;
                        acc = _v138;
                        const _v139: any = await rt.send(_v138, "retreat", [_v137]);
                        acc = _v139;
                        _v117 = _v139;
                      }
                      acc = _v117;
                      _v81 = _v117;
                      break _branch82;
                    }
                  }
                  acc = _v81;
                  _v74 = _v81;
                }
                acc = _v74;
                _v30 = _v74;
                break _branch33;
              }
            }
            acc = _v30;
            let _v140: any = acc;
            let _v141: any = 1;
            if (rt.truth(_v141)) {
              const _v142: any = (args[0] ?? 0);
              acc = _v142;
              const _v143: any = await rt.send(_v142, "claimed", []);
              acc = _v143;
              _v141 = _v143;
            }
            if (rt.truth(_v141)) {
              const _v144: any = rt.get(this, "state");
              acc = _v144;
              const _v145: any = 2;
              acc = _v145;
              const _v146: any = rt.op("&", ...[_v144, _v145]);
              acc = _v146;
              _v141 = _v146;
            }
            acc = _v141;
            _v140 = _v141;
            if (rt.truth(_v141)) {
              const _v147: any = this;
              acc = _v147;
              _v140 = _v147;
            } else {
              const _v148: any = 0;
              acc = _v148;
              _v140 = _v148;
            }
            acc = _v140;
            return acc;
          },
        },
      },
      {
        name: "Dialog",
        className: "List",
        parent: {"script": 999, "name": "List"},
        isClass: true,
        properties: {"text": 0, "window": 0, "theItem": 0, "nsTop": 0, "nsLeft": 0, "nsBottom": 0, "nsRight": 0, "time": 0, "busy": 0, "seconds": 0, "lastSeconds": 0, "client": 0, "agent": 0, "script": 0, "menuBarOK": 0, "tail": 0, "standard": 1, "keyMouseList": 0, "prevDialog": 0, "prevTalker": 0, "aTimeClock": 0},
        methods: {
          // SCI Interface.sc: Dialog.setScript
          "setScript": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "script");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = rt.get(this, "script");
              acc = _v3;
              const _v4: any = await rt.send(_v3, "dispose", []);
              acc = _v4;
              _v1 = _v4;
            }
            acc = _v1;
            const _v5: any = (args[0] ?? 0);
            acc = _v5;
            const _v6: any = rt.set(this, "script", _v5);
            acc = _v6;
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
              const _v12: any = rt.get(this, "script");
              acc = _v12;
              const _v13: any = await rt.send(_v12, "state", [_v11]);
              acc = _v13;
              _v7 = _v13;
            }
            acc = _v7;
            return acc;
          },
          // SCI Interface.sc: Dialog.add
          "add": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = args.slice(1, argc);
            acc = _v2;
            const _v3: any = await rt.superSend(this, {"script": 255, "name": "Dialog"}, "add", [_v1, ..._v2]);
            acc = _v3;
            const _v6: any = 0;
            acc = _v6;
            const _v7: any = (temps[0] = _v6);
            acc = _v7;
            _loop4: for (;;) {
              const _v8: any = (temps[0] ?? 0);
              acc = _v8;
              const _v9: any = argc;
              acc = _v9;
              const _v10: any = rt.op("<", ...[_v8, _v9]);
              acc = _v10;
              if (!rt.truth(_v10)) break _loop4;
              _continue5: {
                const _v11: any = this;
                acc = _v11;
                const _v12: any = (temps[0] ?? 0);
                acc = _v12;
                const _v13: any = (args[(0 + (Number(_v12) & 65535))] ?? 0);
                acc = _v13;
                const _v14: any = await rt.send(_v13, "client", [_v11]);
                acc = _v14;
              }
              const _v15: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
              acc = _v15;
            }
            return acc;
          },
          // SCI Interface.sc: Dialog.addAfter
          "addAfter": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = args.slice(1, argc);
            acc = _v2;
            const _v3: any = await rt.superSend(this, {"script": 255, "name": "Dialog"}, "addAfter", [_v1, ..._v2]);
            acc = _v3;
            const _v6: any = 0;
            acc = _v6;
            const _v7: any = (temps[0] = _v6);
            acc = _v7;
            _loop4: for (;;) {
              const _v8: any = (temps[0] ?? 0);
              acc = _v8;
              const _v9: any = argc;
              acc = _v9;
              const _v10: any = rt.op("<", ...[_v8, _v9]);
              acc = _v10;
              if (!rt.truth(_v10)) break _loop4;
              _continue5: {
                const _v11: any = this;
                acc = _v11;
                const _v12: any = (temps[0] ?? 0);
                acc = _v12;
                const _v13: any = (args[(0 + (Number(_v12) & 65535))] ?? 0);
                acc = _v13;
                const _v14: any = await rt.send(_v13, "client", [_v11]);
                acc = _v14;
              }
              const _v15: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
              acc = _v15;
            }
            return acc;
          },
          // SCI Interface.sc: Dialog.open
          "open": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            let _v2: any = 1;
            if (rt.truth(_v2)) {
              const _v3: any = await rt.call(255, "PicNotValid", [], this);
              acc = _v3;
              _v2 = _v3;
            }
            if (rt.truth(_v2)) {
              const _v4: any = rt.global(5);
              acc = _v4;
              _v2 = _v4;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v5: any = rt.global(5);
              acc = _v5;
              const _v6: any = await rt.send(_v5, "elements", []);
              acc = _v6;
              const _v7: any = 0;
              acc = _v7;
              const _v8: any = await rt.call(255, "Animate", [_v6, _v7], this);
              acc = _v8;
              _v1 = _v8;
            }
            acc = _v1;
            const _v9: any = rt.get(this, "window");
            acc = _v9;
            const _v10: any = await rt.send(_v9, "new", []);
            acc = _v10;
            const _v11: any = rt.set(this, "window", _v10);
            acc = _v11;
            let _v12: any = acc;
            const _v13: any = argc;
            acc = _v13;
            const _v14: any = 7;
            acc = _v14;
            const _v15: any = rt.op(">=", ...[_v13, _v14]);
            acc = _v15;
            _v12 = _v15;
            if (rt.truth(_v15)) {
              const _v16: any = 1;
              acc = _v16;
              const _v17: any = rt.get(this, "window");
              acc = _v17;
              const _v18: any = await rt.send(_v17, "underBits", [_v16]);
              acc = _v18;
              _v12 = _v18;
            }
            acc = _v12;
            const _v19: any = rt.get(this, "nsTop");
            acc = _v19;
            const _v20: any = rt.get(this, "nsLeft");
            acc = _v20;
            const _v21: any = rt.get(this, "nsBottom");
            acc = _v21;
            const _v22: any = rt.get(this, "nsRight");
            acc = _v22;
            const _v23: any = rt.get(this, "text");
            acc = _v23;
            const _v24: any = (args[0] ?? 0);
            acc = _v24;
            const _v25: any = (args[1] ?? 0);
            acc = _v25;
            const _v26: any = (args[2] ?? 0);
            acc = _v26;
            const _v27: any = (args[3] ?? 0);
            acc = _v27;
            const _v28: any = (args[4] ?? 0);
            acc = _v28;
            const _v29: any = (args[5] ?? 0);
            acc = _v29;
            const _v30: any = rt.get(this, "window");
            acc = _v30;
            const _v31: any = await rt.send(_v30, "top", [_v19]);
            acc = _v31;
            const _v32: any = await rt.send(_v30, "left", [_v20]);
            acc = _v32;
            const _v33: any = await rt.send(_v30, "bottom", [_v21]);
            acc = _v33;
            const _v34: any = await rt.send(_v30, "right", [_v22]);
            acc = _v34;
            const _v35: any = await rt.send(_v30, "title", [_v23]);
            acc = _v35;
            const _v36: any = await rt.send(_v30, "type", [_v24]);
            acc = _v36;
            const _v37: any = await rt.send(_v30, "priority", [_v25]);
            acc = _v37;
            const _v38: any = await rt.send(_v30, "open", [_v26, _v27, _v28, _v29]);
            acc = _v38;
            const _v39: any = rt.get(this, "time");
            acc = _v39;
            const _v40: any = rt.set(this, "seconds", _v39);
            acc = _v40;
            const _v41: any = this;
            acc = _v41;
            const _v42: any = await rt.send(_v41, "draw", []);
            acc = _v42;
            return acc;
          },
          // SCI Interface.sc: Dialog.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 83;
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "eachElementDo", [_v1]);
            acc = _v3;
            return acc;
          },
          // SCI Interface.sc: Dialog.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0];
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = 1;
            acc = _v3;
            const _v4: any = rt.set(this, "busy", _v3);
            acc = _v4;
            let _v5: any = acc;
            const _v6: any = argc;
            acc = _v6;
            const _v7: any = 1;
            acc = _v7;
            const _v8: any = rt.op("<=", ...[_v6, _v7]);
            acc = _v8;
            _v5 = _v8;
            if (rt.truth(_v8)) {
              const _v9: any = 102;
              acc = _v9;
              const _v10: any = this;
              acc = _v10;
              const _v11: any = await rt.send(_v10, "eachElementDo", [_v9]);
              acc = _v11;
              _v5 = _v11;
            }
            acc = _v5;
            let _v12: any = acc;
            const _v13: any = rt.get(this, "theItem");
            acc = _v13;
            _v12 = _v13;
            if (rt.truth(_v13)) {
              const _v14: any = 0;
              acc = _v14;
              const _v15: any = rt.get(this, "theItem");
              acc = _v15;
              const _v16: any = await rt.send(_v15, "select", [_v14]);
              acc = _v16;
              _v12 = _v16;
            }
            acc = _v12;
            let _v17: any = acc;
            let _v18: any = 1;
            if (rt.truth(_v18)) {
              const _v19: any = argc;
              acc = _v19;
              _v18 = _v19;
            }
            if (rt.truth(_v18)) {
              const _v20: any = (args[0] ?? 0);
              acc = _v20;
              _v18 = _v20;
            }
            acc = _v18;
            _v17 = _v18;
            if (rt.truth(_v18)) {
              const _v21: any = (args[0] ?? 0);
              acc = _v21;
              _v17 = _v21;
            } else {
              const _v22: any = 158;
              acc = _v22;
              const _v23: any = 1;
              acc = _v23;
              const _v24: any = this;
              acc = _v24;
              const _v25: any = await rt.send(_v24, "firstTrue", [_v22, _v23]);
              acc = _v25;
              _v17 = _v25;
            }
            acc = _v17;
            const _v26: any = rt.set(this, "theItem", _v17);
            acc = _v26;
            let _v27: any = acc;
            const _v28: any = rt.get(this, "theItem");
            acc = _v28;
            _v27 = _v28;
            if (rt.truth(_v28)) {
              const _v29: any = 1;
              acc = _v29;
              const _v30: any = rt.get(this, "theItem");
              acc = _v30;
              const _v31: any = await rt.send(_v30, "select", [_v29]);
              acc = _v31;
              _v27 = _v31;
            }
            acc = _v27;
            const _v32: any = 0;
            acc = _v32;
            const _v33: any = (temps[2] = _v32);
            acc = _v33;
            _loop34: for (;;) {
              const _v36: any = (temps[2] ?? 0);
              acc = _v36;
              const _v37: any = rt.op("not", ...[_v36]);
              acc = _v37;
              if (!rt.truth(_v37)) break _loop34;
              _continue35: {
                let _v38: any = acc;
                const _v39: any = rt.global(4);
                acc = _v39;
                const _v40: any = rt.op("not", ...[_v39]);
                acc = _v40;
                _v38 = _v40;
                if (rt.truth(_v40)) {
                  let _v41: any = acc;
                  const _v42: any = rt.global(528);
                  acc = _v42;
                  const _v43: any = rt.op("not", ...[_v42]);
                  acc = _v43;
                  _v41 = _v43;
                  if (rt.truth(_v43)) {
                    let _v44: any = acc;
                    const _v45: any = rt.global(529);
                    acc = _v45;
                    const _v46: any = rt.op("not", ...[_v45]);
                    acc = _v46;
                    _v44 = _v46;
                    if (rt.truth(_v46)) {
                      let _v47: any = acc;
                      const _v48: any = rt.global(521);
                      acc = _v48;
                      const _v49: any = rt.op("not", ...[_v48]);
                      acc = _v49;
                      _v47 = _v49;
                      if (rt.truth(_v49)) {
                        const _v50: any = 147;
                        acc = _v50;
                        const _v51: any = rt.global(8);
                        acc = _v51;
                        const _v52: any = await rt.send(_v51, "eachElementDo", [_v50]);
                        acc = _v52;
                        _v47 = _v52;
                        const _v53: any = 305;
                        acc = _v53;
                        const _v54: any = this;
                        acc = _v54;
                        const _v55: any = await rt.send(_v54, "eachElementDo", [_v53]);
                        acc = _v55;
                        _v47 = _v55;
                        let _v56: any = acc;
                        const _v57: any = rt.get(this, "window");
                        acc = _v57;
                        const _v58: any = await rt.send(_v57, "animateObj", []);
                        acc = _v58;
                        _v56 = _v58;
                        if (rt.truth(_v58)) {
                          const _v59: any = rt.get(this, "window");
                          acc = _v59;
                          const _v60: any = await rt.send(_v59, "animateObj", []);
                          acc = _v60;
                          const _v61: any = await rt.send(_v60, "cycle", []);
                          acc = _v61;
                          const _v62: any = await rt.send(_v60, "doit", []);
                          acc = _v62;
                          _v56 = _v62;
                        }
                        acc = _v56;
                        _v47 = _v56;
                        let _v63: any = acc;
                        const _v64: any = rt.global(58);
                        acc = _v64;
                        _v63 = _v64;
                        if (rt.truth(_v64)) {
                          const _v65: any = 0;
                          acc = _v65;
                          const _v66: any = rt.setGlobal(58, _v65);
                          acc = _v66;
                          _v63 = _v66;
                          const _v67: any = 178;
                          acc = _v67;
                          const _v68: any = this;
                          acc = _v68;
                          const _v69: any = await rt.send(_v68, "eachElementDo", [_v67]);
                          acc = _v69;
                          _v63 = _v69;
                        }
                        acc = _v63;
                        _v47 = _v63;
                        const _v70: any = rt.object(999, "Event");
                        acc = _v70;
                        const _v71: any = await rt.send(_v70, "new", []);
                        acc = _v71;
                        const _v72: any = (temps[1] = _v71);
                        acc = _v72;
                        _v47 = _v72;
                        let _v73: any = acc;
                        const _v74: any = rt.object(996, "User");
                        acc = _v74;
                        const _v75: any = await rt.send(_v74, "controls", []);
                        acc = _v75;
                        const _v76: any = rt.op("not", ...[_v75]);
                        acc = _v76;
                        _v73 = _v76;
                        if (rt.truth(_v76)) {
                          const _v77: any = 0;
                          acc = _v77;
                          const _v78: any = (temps[1] ?? 0);
                          acc = _v78;
                          const _v79: any = await rt.send(_v78, "message", [_v77]);
                          acc = _v79;
                          _v73 = _v79;
                        }
                        acc = _v73;
                        _v47 = _v73;
                        let _v80: any = acc;
                        const _v81: any = rt.get(this, "script");
                        acc = _v81;
                        _v80 = _v81;
                        if (rt.truth(_v81)) {
                          const _v82: any = (temps[1] ?? 0);
                          acc = _v82;
                          const _v83: any = rt.get(this, "script");
                          acc = _v83;
                          const _v84: any = await rt.send(_v83, "handleEvent", [_v82]);
                          acc = _v84;
                          const _v85: any = await rt.send(_v83, "doit", []);
                          acc = _v85;
                          _v80 = _v85;
                        }
                        acc = _v80;
                        _v47 = _v80;
                        const _v86: any = (temps[1] ?? 0);
                        acc = _v86;
                        const _v87: any = this;
                        acc = _v87;
                        const _v88: any = await rt.send(_v87, "handleEvent", [_v86]);
                        acc = _v88;
                        const _v89: any = (temps[2] = _v88);
                        acc = _v89;
                        _v47 = _v89;
                        const _v90: any = (temps[1] ?? 0);
                        acc = _v90;
                        const _v91: any = await rt.send(_v90, "dispose", []);
                        acc = _v91;
                        _v47 = _v91;
                        const _v92: any = this;
                        acc = _v92;
                        const _v93: any = await rt.send(_v92, "check", []);
                        acc = _v93;
                        _v47 = _v93;
                        let _v94: any = acc;
                        let _v95: any = 0;
                        if (!rt.truth(_v95)) {
                          const _v96: any = (temps[2] ?? 0);
                          acc = _v96;
                          const _v97: any = -1;
                          acc = _v97;
                          const _v98: any = rt.op("==", ...[_v96, _v97]);
                          acc = _v98;
                          _v95 = _v98;
                        }
                        if (!rt.truth(_v95)) {
                          const _v99: any = rt.get(this, "busy");
                          acc = _v99;
                          const _v100: any = rt.op("not", ...[_v99]);
                          acc = _v100;
                          _v95 = _v100;
                        }
                        acc = _v95;
                        _v94 = _v95;
                        if (rt.truth(_v95)) {
                          const _v101: any = 0;
                          acc = _v101;
                          const _v102: any = (temps[2] = _v101);
                          acc = _v102;
                          _v94 = _v102;
                          let _v103: any = acc;
                          const _v104: any = rt.get(this, "theItem");
                          acc = _v104;
                          _v103 = _v104;
                          if (rt.truth(_v104)) {
                            const _v105: any = rt.get(this, "theItem");
                            acc = _v105;
                            const _v106: any = 0;
                            acc = _v106;
                            const _v107: any = await rt.call(255, "EditControl", [_v105, _v106], this);
                            acc = _v107;
                            _v103 = _v107;
                          }
                          acc = _v103;
                          _v94 = _v103;
                          break _loop34;
                          _v94 = acc;
                        }
                        acc = _v94;
                        _v47 = _v94;
                      } else {
                        break _loop34;
                        _v47 = acc;
                      }
                      acc = _v47;
                      _v44 = _v47;
                    } else {
                      break _loop34;
                      _v44 = acc;
                    }
                    acc = _v44;
                    _v41 = _v44;
                  } else {
                    break _loop34;
                    _v41 = acc;
                  }
                  acc = _v41;
                  _v38 = _v41;
                } else {
                  break _loop34;
                  _v38 = acc;
                }
                acc = _v38;
                const _v108: any = 1;
                acc = _v108;
                const _v109: any = await rt.call(255, "Wait", [_v108], this);
                acc = _v109;
              }
            }
            const _v110: any = 0;
            acc = _v110;
            const _v111: any = rt.set(this, "busy", _v110);
            acc = _v111;
            const _v112: any = (temps[2] ?? 0);
            acc = _v112;
            return _v112;
            return acc;
          },
          // SCI Interface.sc: Dialog.check
          "check": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = rt.get(this, "seconds");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = 1;
              acc = _v3;
              const _v4: any = await rt.call(255, "GetTime", [_v3], this);
              acc = _v4;
              const _v5: any = (temps[0] = _v4);
              acc = _v5;
              _v1 = _v5;
              let _v6: any = acc;
              const _v7: any = rt.get(this, "lastSeconds");
              acc = _v7;
              const _v8: any = (temps[0] ?? 0);
              acc = _v8;
              const _v9: any = rt.op("!=", ...[_v7, _v8]);
              acc = _v9;
              _v6 = _v9;
              if (rt.truth(_v9)) {
                const _v10: any = (temps[0] ?? 0);
                acc = _v10;
                const _v11: any = rt.set(this, "lastSeconds", _v10);
                acc = _v11;
                _v6 = _v11;
                let _v12: any = acc;
                const _v13: any = rt.set(this, "seconds", rt.op("-", rt.get(this, "seconds"), 1));
                acc = _v13;
                const _v14: any = rt.op("not", ...[_v13]);
                acc = _v14;
                _v12 = _v14;
                if (rt.truth(_v14)) {
                  const _v15: any = this;
                  acc = _v15;
                  const _v16: any = await rt.send(_v15, "cue", []);
                  acc = _v16;
                  _v12 = _v16;
                }
                acc = _v12;
                _v6 = _v12;
              }
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return acc;
          },
          // SCI Interface.sc: Dialog.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "busy");
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = this;
              acc = _v4;
              const _v5: any = await rt.send(_v4, "dispose", []);
              acc = _v5;
              _v1 = _v5;
            } else {
              const _v6: any = 0;
              acc = _v6;
              const _v7: any = rt.set(this, "busy", _v6);
              acc = _v7;
              _v1 = _v7;
            }
            acc = _v1;
            return acc;
          },
          // SCI Interface.sc: Dialog.dispose
          "dispose": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "script");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = rt.get(this, "script");
              acc = _v3;
              const _v4: any = await rt.send(_v3, "dispose", []);
              acc = _v4;
              _v1 = _v4;
              const _v5: any = 0;
              acc = _v5;
              const _v6: any = rt.set(this, "script", _v5);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            let _v7: any = acc;
            const _v8: any = this;
            acc = _v8;
            const _v9: any = rt.global(25);
            acc = _v9;
            const _v10: any = rt.op("==", ...[_v8, _v9]);
            acc = _v10;
            _v7 = _v10;
            if (rt.truth(_v10)) {
              const _v11: any = rt.local(255, 0);
              acc = _v11;
              const _v12: any = await rt.call(255, "SetPort", [_v11], this);
              acc = _v12;
              _v7 = _v12;
              const _v13: any = 0;
              acc = _v13;
              const _v14: any = rt.setLocal(255, 0, _v13);
              acc = _v14;
              const _v15: any = rt.setGlobal(25, _v14);
              acc = _v15;
              _v7 = _v15;
            }
            acc = _v7;
            let _v16: any = acc;
            const _v17: any = rt.get(this, "window");
            acc = _v17;
            _v16 = _v17;
            if (rt.truth(_v17)) {
              const _v18: any = rt.get(this, "window");
              acc = _v18;
              const _v19: any = await rt.send(_v18, "dispose", []);
              acc = _v19;
              _v16 = _v19;
            }
            acc = _v16;
            const _v20: any = 0;
            acc = _v20;
            const _v21: any = rt.set(this, "theItem", _v20);
            acc = _v21;
            const _v22: any = rt.set(this, "window", _v21);
            acc = _v22;
            const _v23: any = await rt.superSend(this, {"script": 255, "name": "Dialog"}, "dispose", []);
            acc = _v23;
            return acc;
          },
          // SCI Interface.sc: Dialog.advance
          "advance": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            let _v1: any = acc;
            const _v2: any = rt.get(this, "theItem");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = 0;
              acc = _v3;
              const _v4: any = rt.get(this, "theItem");
              acc = _v4;
              const _v5: any = await rt.send(_v4, "select", [_v3]);
              acc = _v5;
              _v1 = _v5;
              const _v6: any = rt.get(this, "theItem");
              acc = _v6;
              const _v7: any = this;
              acc = _v7;
              const _v8: any = await rt.send(_v7, "contains", [_v6]);
              acc = _v8;
              const _v9: any = (temps[1] = _v8);
              acc = _v9;
              _v1 = _v9;
              _loop10: for (;;) {
                _continue11: {
                  let _v12: any = acc;
                  const _v13: any = (temps[1] ?? 0);
                  acc = _v13;
                  const _v14: any = this;
                  acc = _v14;
                  const _v15: any = await rt.send(_v14, "next", [_v13]);
                  acc = _v15;
                  const _v16: any = (temps[1] = _v15);
                  acc = _v16;
                  const _v17: any = rt.op("not", ...[_v16]);
                  acc = _v17;
                  _v12 = _v17;
                  if (rt.truth(_v17)) {
                    const _v18: any = this;
                    acc = _v18;
                    const _v19: any = await rt.send(_v18, "first", []);
                    acc = _v19;
                    const _v20: any = (temps[1] = _v19);
                    acc = _v20;
                    _v12 = _v20;
                  }
                  acc = _v12;
                  const _v21: any = (temps[1] ?? 0);
                  acc = _v21;
                  const _v22: any = await rt.call(255, "NodeValue", [_v21], this);
                  acc = _v22;
                  const _v23: any = rt.set(this, "theItem", _v22);
                  acc = _v23;
                  let _v24: any = acc;
                  const _v25: any = rt.get(this, "theItem");
                  acc = _v25;
                  const _v26: any = await rt.send(_v25, "state", []);
                  acc = _v26;
                  const _v27: any = 1;
                  acc = _v27;
                  const _v28: any = rt.op("&", ...[_v26, _v27]);
                  acc = _v28;
                  _v24 = _v28;
                  if (rt.truth(_v28)) {
                    break _loop10;
                    _v24 = acc;
                  }
                  acc = _v24;
                }
              }
              _v1 = acc;
              const _v29: any = 1;
              acc = _v29;
              const _v30: any = rt.get(this, "theItem");
              acc = _v30;
              const _v31: any = await rt.send(_v30, "select", [_v29]);
              acc = _v31;
              _v1 = _v31;
            }
            acc = _v1;
            return acc;
          },
          // SCI Interface.sc: Dialog.retreat
          "retreat": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            let _v1: any = acc;
            const _v2: any = rt.get(this, "theItem");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = 0;
              acc = _v3;
              const _v4: any = rt.get(this, "theItem");
              acc = _v4;
              const _v5: any = await rt.send(_v4, "select", [_v3]);
              acc = _v5;
              _v1 = _v5;
              const _v6: any = rt.get(this, "theItem");
              acc = _v6;
              const _v7: any = this;
              acc = _v7;
              const _v8: any = await rt.send(_v7, "contains", [_v6]);
              acc = _v8;
              const _v9: any = (temps[1] = _v8);
              acc = _v9;
              _v1 = _v9;
              _loop10: for (;;) {
                _continue11: {
                  let _v12: any = acc;
                  const _v13: any = (temps[1] ?? 0);
                  acc = _v13;
                  const _v14: any = this;
                  acc = _v14;
                  const _v15: any = await rt.send(_v14, "prev", [_v13]);
                  acc = _v15;
                  const _v16: any = (temps[1] = _v15);
                  acc = _v16;
                  const _v17: any = rt.op("not", ...[_v16]);
                  acc = _v17;
                  _v12 = _v17;
                  if (rt.truth(_v17)) {
                    const _v18: any = this;
                    acc = _v18;
                    const _v19: any = await rt.send(_v18, "last", []);
                    acc = _v19;
                    const _v20: any = (temps[1] = _v19);
                    acc = _v20;
                    _v12 = _v20;
                  }
                  acc = _v12;
                  const _v21: any = (temps[1] ?? 0);
                  acc = _v21;
                  const _v22: any = await rt.call(255, "NodeValue", [_v21], this);
                  acc = _v22;
                  const _v23: any = rt.set(this, "theItem", _v22);
                  acc = _v23;
                  let _v24: any = acc;
                  const _v25: any = rt.get(this, "theItem");
                  acc = _v25;
                  const _v26: any = await rt.send(_v25, "state", []);
                  acc = _v26;
                  const _v27: any = 1;
                  acc = _v27;
                  const _v28: any = rt.op("&", ...[_v26, _v27]);
                  acc = _v28;
                  _v24 = _v28;
                  if (rt.truth(_v28)) {
                    break _loop10;
                    _v24 = acc;
                  }
                  acc = _v24;
                }
              }
              _v1 = acc;
              const _v29: any = 1;
              acc = _v29;
              const _v30: any = rt.get(this, "theItem");
              acc = _v30;
              const _v31: any = await rt.send(_v30, "select", [_v29]);
              acc = _v31;
              _v1 = _v31;
            }
            acc = _v1;
            return acc;
          },
          // SCI Interface.sc: Dialog.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            let _v1: any = acc;
            const _v2: any = rt.get(this, "menuBarOK");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = (args[0] ?? 0);
              acc = _v3;
              const _v4: any = rt.object(997, "MenuBar");
              acc = _v4;
              const _v5: any = await rt.send(_v4, "handleEvent", [_v3]);
              acc = _v5;
              _v1 = _v5;
            }
            acc = _v1;
            const _v6: any = rt.get(this, "window");
            acc = _v6;
            const _v7: any = await rt.send(_v6, "window", []);
            acc = _v7;
            const _v8: any = (args[0] ?? 0);
            acc = _v8;
            const _v9: any = await rt.send(_v8, "localize", [_v7]);
            acc = _v9;
            let _v10: any = acc;
            let _v11: any = 1;
            if (rt.truth(_v11)) {
              const _v12: any = rt.global(443);
              acc = _v12;
              const _v13: any = rt.op("not", ...[_v12]);
              acc = _v13;
              _v11 = _v13;
            }
            if (rt.truth(_v11)) {
              const _v14: any = rt.object(996, "User");
              acc = _v14;
              const _v15: any = await rt.send(_v14, "controls", []);
              acc = _v15;
              const _v16: any = rt.op("not", ...[_v15]);
              acc = _v16;
              _v11 = _v16;
            }
            if (rt.truth(_v11)) {
              const _v17: any = (args[0] ?? 0);
              acc = _v17;
              const _v18: any = await rt.send(_v17, "message", []);
              acc = _v18;
              const _v19: any = rt.op("not", ...[_v18]);
              acc = _v19;
              _v11 = _v19;
            }
            acc = _v11;
            _v10 = _v11;
            if (rt.truth(_v11)) {
              const _v20: any = 0;
              acc = _v20;
              return _v20;
              _v10 = acc;
            }
            acc = _v10;
            let _v21: any = acc;
            let _v22: any = 1;
            if (rt.truth(_v22)) {
              const _v23: any = rt.get(this, "client");
              acc = _v23;
              _v22 = _v23;
            }
            if (rt.truth(_v22)) {
              const _v24: any = (args[0] ?? 0);
              acc = _v24;
              const _v25: any = await rt.send(_v24, "type", []);
              acc = _v25;
              _v22 = _v25;
            }
            if (rt.truth(_v22)) {
              let _v26: any = 0;
              if (!rt.truth(_v26)) {
                const _v27: any = (args[0] ?? 0);
                acc = _v27;
                const _v28: any = await rt.send(_v27, "x", []);
                acc = _v28;
                const _v29: any = 0;
                acc = _v29;
                const _v30: any = rt.op("<", ...[_v28, _v29]);
                acc = _v30;
                _v26 = _v30;
              }
              if (!rt.truth(_v26)) {
                const _v31: any = (args[0] ?? 0);
                acc = _v31;
                const _v32: any = await rt.send(_v31, "x", []);
                acc = _v32;
                const _v33: any = rt.get(this, "nsRight");
                acc = _v33;
                const _v34: any = rt.get(this, "nsLeft");
                acc = _v34;
                const _v35: any = rt.op("-", ...[_v33, _v34]);
                acc = _v35;
                const _v36: any = rt.op(">", ...[_v32, _v35]);
                acc = _v36;
                _v26 = _v36;
              }
              if (!rt.truth(_v26)) {
                const _v37: any = (args[0] ?? 0);
                acc = _v37;
                const _v38: any = await rt.send(_v37, "y", []);
                acc = _v38;
                const _v39: any = 0;
                acc = _v39;
                const _v40: any = rt.op("<", ...[_v38, _v39]);
                acc = _v40;
                _v26 = _v40;
              }
              if (!rt.truth(_v26)) {
                const _v41: any = (args[0] ?? 0);
                acc = _v41;
                const _v42: any = await rt.send(_v41, "y", []);
                acc = _v42;
                const _v43: any = rt.get(this, "nsBottom");
                acc = _v43;
                const _v44: any = rt.get(this, "nsTop");
                acc = _v44;
                const _v45: any = rt.op("-", ...[_v43, _v44]);
                acc = _v45;
                const _v46: any = rt.op(">", ...[_v42, _v45]);
                acc = _v46;
                _v26 = _v46;
              }
              acc = _v26;
              _v22 = _v26;
            }
            acc = _v22;
            _v21 = _v22;
            if (rt.truth(_v22)) {
              const _v47: any = (args[0] ?? 0);
              acc = _v47;
              const _v48: any = rt.get(this, "client");
              acc = _v48;
              const _v49: any = await rt.send(_v48, "handleEvent", [_v47]);
              acc = _v49;
              _v21 = _v49;
              return acc;
              _v21 = acc;
            }
            acc = _v21;
            let _v50: any = acc;
            let _v51: any = 0;
            if (!rt.truth(_v51)) {
              const _v52: any = (args[0] ?? 0);
              acc = _v52;
              const _v53: any = await rt.send(_v52, "claimed", []);
              acc = _v53;
              _v51 = _v53;
            }
            if (!rt.truth(_v51)) {
              const _v54: any = (args[0] ?? 0);
              acc = _v54;
              const _v55: any = await rt.send(_v54, "type", []);
              acc = _v55;
              const _v56: any = 0;
              acc = _v56;
              const _v57: any = rt.op("==", ...[_v55, _v56]);
              acc = _v57;
              _v51 = _v57;
            }
            if (!rt.truth(_v51)) {
              let _v58: any = 1;
              if (rt.truth(_v58)) {
                const _v59: any = 1;
                acc = _v59;
                const _v60: any = (args[0] ?? 0);
                acc = _v60;
                const _v61: any = await rt.send(_v60, "type", []);
                acc = _v61;
                const _v62: any = rt.op("!=", ...[_v59, _v61]);
                acc = _v62;
                _v58 = _v62;
              }
              if (rt.truth(_v58)) {
                const _v63: any = 4;
                acc = _v63;
                const _v64: any = (args[0] ?? 0);
                acc = _v64;
                const _v65: any = await rt.send(_v64, "type", []);
                acc = _v65;
                const _v66: any = rt.op("!=", ...[_v63, _v65]);
                acc = _v66;
                _v58 = _v66;
              }
              if (rt.truth(_v58)) {
                const _v67: any = 64;
                acc = _v67;
                const _v68: any = (args[0] ?? 0);
                acc = _v68;
                const _v69: any = await rt.send(_v68, "type", []);
                acc = _v69;
                const _v70: any = rt.op("!=", ...[_v67, _v69]);
                acc = _v70;
                _v58 = _v70;
              }
              if (rt.truth(_v58)) {
                const _v71: any = 256;
                acc = _v71;
                const _v72: any = (args[0] ?? 0);
                acc = _v72;
                const _v73: any = await rt.send(_v72, "type", []);
                acc = _v73;
                const _v74: any = rt.op("!=", ...[_v71, _v73]);
                acc = _v74;
                _v58 = _v74;
              }
              acc = _v58;
              _v51 = _v58;
            }
            acc = _v51;
            _v50 = _v51;
            if (rt.truth(_v51)) {
              let _v75: any = acc;
              const _v76: any = rt.get(this, "theItem");
              acc = _v76;
              _v75 = _v76;
              if (rt.truth(_v76)) {
                const _v77: any = rt.get(this, "theItem");
                acc = _v77;
                const _v78: any = (args[0] ?? 0);
                acc = _v78;
                const _v79: any = await rt.call(255, "EditControl", [_v77, _v78], this);
                acc = _v79;
                _v75 = _v79;
              }
              acc = _v75;
              _v50 = _v75;
              const _v80: any = 0;
              acc = _v80;
              return _v80;
              _v50 = acc;
            }
            acc = _v50;
            const _v81: any = (args[0] ?? 0);
            acc = _v81;
            const _v82: any = await rt.call(255, "MapKeyToDir", [_v81], this);
            acc = _v82;
            let _v83: any = acc;
            const _v84: any = 124;
            acc = _v84;
            const _v85: any = (args[0] ?? 0);
            acc = _v85;
            const _v86: any = this;
            acc = _v86;
            const _v87: any = await rt.send(_v86, "firstTrue", [_v84, _v85]);
            acc = _v87;
            const _v88: any = (temps[0] = _v87);
            acc = _v88;
            _v83 = _v88;
            if (rt.truth(_v88)) {
              let _v89: any = acc;
              const _v90: any = rt.get(this, "theItem");
              acc = _v90;
              _v89 = _v90;
              if (rt.truth(_v90)) {
                const _v91: any = rt.get(this, "theItem");
                acc = _v91;
                const _v92: any = 0;
                acc = _v92;
                const _v93: any = await rt.call(255, "EditControl", [_v91, _v92], this);
                acc = _v93;
                _v89 = _v93;
              }
              acc = _v89;
              _v83 = _v89;
              let _v94: any = acc;
              let _v95: any = 0;
              if (!rt.truth(_v95)) {
                const _v96: any = 2;
                acc = _v96;
                const _v97: any = (temps[0] ?? 0);
                acc = _v97;
                const _v98: any = await rt.send(_v97, "checkState", [_v96]);
                acc = _v98;
                const _v99: any = rt.op("not", ...[_v98]);
                acc = _v99;
                _v95 = _v99;
              }
              if (!rt.truth(_v95)) {
                const _v100: any = 32;
                acc = _v100;
                const _v101: any = (temps[0] ?? 0);
                acc = _v101;
                const _v102: any = await rt.send(_v101, "checkState", [_v100]);
                acc = _v102;
                _v95 = _v102;
              }
              acc = _v95;
              _v94 = _v95;
              if (rt.truth(_v95)) {
                let _v103: any = acc;
                const _v104: any = rt.get(this, "theItem");
                acc = _v104;
                _v103 = _v104;
                if (rt.truth(_v104)) {
                  const _v105: any = 0;
                  acc = _v105;
                  const _v106: any = (temps[0] ?? 0);
                  acc = _v106;
                  const _v107: any = rt.get(this, "theItem");
                  acc = _v107;
                  const _v108: any = await rt.send(_v107, "select", [_v105, _v106]);
                  acc = _v108;
                  _v103 = _v108;
                }
                acc = _v103;
                _v94 = _v103;
                const _v109: any = 1;
                acc = _v109;
                const _v110: any = (temps[0] ?? 0);
                acc = _v110;
                const _v111: any = rt.set(this, "theItem", _v110);
                acc = _v111;
                const _v112: any = await rt.send(_v111, "select", [_v109]);
                acc = _v112;
                _v94 = _v112;
                const _v113: any = (temps[0] ?? 0);
                acc = _v113;
                const _v114: any = (temps[1] = _v113);
                acc = _v114;
                _v94 = _v114;
                const _v115: any = (args[0] ?? 0);
                acc = _v115;
                const _v116: any = rt.setGlobal(508, _v115);
                acc = _v116;
                _v94 = _v116;
                const _v117: any = (temps[0] ?? 0);
                acc = _v117;
                const _v118: any = await rt.send(_v117, "doit", []);
                acc = _v118;
                const _v119: any = (temps[0] = _v118);
                acc = _v119;
                _v94 = _v119;
                let _v120: any = acc;
                let _v121: any = 1;
                if (rt.truth(_v121)) {
                  const _v122: any = (temps[1] ?? 0);
                  acc = _v122;
                  const _v123: any = await rt.call(255, "IsObject", [_v122], this);
                  acc = _v123;
                  _v121 = _v123;
                }
                if (rt.truth(_v121)) {
                  const _v124: any = 2;
                  acc = _v124;
                  const _v125: any = (temps[1] ?? 0);
                  acc = _v125;
                  const _v126: any = await rt.send(_v125, "checkState", [_v124]);
                  acc = _v126;
                  _v121 = _v126;
                }
                acc = _v121;
                _v120 = _v121;
                if (rt.truth(_v121)) {
                  const _v127: any = (temps[1] ?? 0);
                  acc = _v127;
                  const _v128: any = (temps[0] = _v127);
                  acc = _v128;
                  _v120 = _v128;
                }
                acc = _v120;
                _v94 = _v120;
              }
              acc = _v94;
              _v83 = _v94;
            } else {
              const _v129: any = 0;
              acc = _v129;
              const _v130: any = (temps[0] = _v129);
              acc = _v130;
              _v83 = _v130;
              let _v131: any = acc;
              _branch132: {
                let _v133: any = 1;
                if (rt.truth(_v133)) {
                  let _v134: any = 0;
                  if (!rt.truth(_v134)) {
                    const _v135: any = (args[0] ?? 0);
                    acc = _v135;
                    const _v136: any = await rt.send(_v135, "type", []);
                    acc = _v136;
                    const _v137: any = 256;
                    acc = _v137;
                    const _v138: any = rt.op("==", ...[_v136, _v137]);
                    acc = _v138;
                    _v134 = _v138;
                  }
                  if (!rt.truth(_v134)) {
                    let _v139: any = 1;
                    if (rt.truth(_v139)) {
                      const _v140: any = 4;
                      acc = _v140;
                      const _v141: any = (args[0] ?? 0);
                      acc = _v141;
                      const _v142: any = await rt.send(_v141, "type", []);
                      acc = _v142;
                      const _v143: any = rt.op("==", ...[_v140, _v142]);
                      acc = _v143;
                      _v139 = _v143;
                    }
                    if (rt.truth(_v139)) {
                      const _v144: any = 13;
                      acc = _v144;
                      const _v145: any = (args[0] ?? 0);
                      acc = _v145;
                      const _v146: any = await rt.send(_v145, "message", []);
                      acc = _v146;
                      const _v147: any = rt.op("==", ...[_v144, _v146]);
                      acc = _v147;
                      _v139 = _v147;
                    }
                    acc = _v139;
                    _v134 = _v139;
                  }
                  acc = _v134;
                  _v133 = _v134;
                }
                if (rt.truth(_v133)) {
                  const _v148: any = rt.get(this, "theItem");
                  acc = _v148;
                  _v133 = _v148;
                }
                if (rt.truth(_v133)) {
                  const _v149: any = 1;
                  acc = _v149;
                  const _v150: any = rt.get(this, "theItem");
                  acc = _v150;
                  const _v151: any = await rt.send(_v150, "checkState", [_v149]);
                  acc = _v151;
                  _v133 = _v151;
                }
                acc = _v133;
                _v131 = _v133;
                acc = _v131;
                if (rt.truth(_v131)) {
                  let _v152: any = acc;
                  const _v153: any = rt.get(this, "standard");
                  acc = _v153;
                  _v152 = _v153;
                  if (rt.truth(_v153)) {
                    const _v154: any = rt.get(this, "theItem");
                    acc = _v154;
                    const _v155: any = (temps[0] = _v154);
                    acc = _v155;
                    _v152 = _v155;
                    let _v156: any = acc;
                    const _v157: any = rt.get(this, "theItem");
                    acc = _v157;
                    _v156 = _v157;
                    if (rt.truth(_v157)) {
                      const _v158: any = rt.get(this, "theItem");
                      acc = _v158;
                      const _v159: any = 0;
                      acc = _v159;
                      const _v160: any = await rt.call(255, "EditControl", [_v158, _v159], this);
                      acc = _v160;
                      _v156 = _v160;
                    }
                    acc = _v156;
                    _v152 = _v156;
                  } else {
                    let _v161: any = acc;
                    let _v162: any = 1;
                    if (rt.truth(_v162)) {
                      const _v163: any = rt.object(891, "KeyMouse");
                      acc = _v163;
                      const _v164: any = await rt.send(_v163, "curItem", []);
                      acc = _v164;
                      const _v165: any = (temps[2] = _v164);
                      acc = _v165;
                      const _v166: any = await rt.call(255, "IsObject", [_v165], this);
                      acc = _v166;
                      _v162 = _v166;
                    }
                    if (rt.truth(_v162)) {
                      const _v167: any = 307;
                      acc = _v167;
                      const _v168: any = (temps[2] ?? 0);
                      acc = _v168;
                      const _v169: any = await rt.send(_v168, "respondsTo", [_v167]);
                      acc = _v169;
                      _v162 = _v169;
                    }
                    acc = _v162;
                    _v161 = _v162;
                    if (rt.truth(_v162)) {
                      const _v170: any = 2;
                      acc = _v170;
                      const _v171: any = (temps[2] ?? 0);
                      acc = _v171;
                      const _v172: any = await rt.send(_v171, "hilite", [_v170]);
                      acc = _v172;
                      const _v173: any = await rt.send(_v171, "doit", []);
                      acc = _v173;
                      _v161 = _v173;
                    }
                    acc = _v161;
                    _v152 = _v161;
                    let _v174: any = acc;
                    const _v175: any = (temps[2] ?? 0);
                    acc = _v175;
                    const _v176: any = await rt.call(255, "IsObject", [_v175], this);
                    acc = _v176;
                    _v174 = _v176;
                    if (rt.truth(_v176)) {
                      let _v177: any = acc;
                      const _v178: any = rt.object(255, "DButton");
                      acc = _v178;
                      const _v179: any = (temps[2] ?? 0);
                      acc = _v179;
                      const _v180: any = await rt.send(_v179, "isMemberOf", [_v178]);
                      acc = _v180;
                      _v177 = _v180;
                      if (rt.truth(_v180)) {
                        const _v181: any = (temps[2] ?? 0);
                        acc = _v181;
                        _v177 = _v181;
                      } else {
                        const _v182: any = 2;
                        acc = _v182;
                        const _v183: any = (temps[2] ?? 0);
                        acc = _v183;
                        const _v184: any = await rt.send(_v183, "checkState", [_v182]);
                        acc = _v184;
                        _v177 = _v184;
                      }
                      acc = _v177;
                      _v174 = _v177;
                    } else {
                      const _v185: any = 0;
                      acc = _v185;
                      _v174 = _v185;
                    }
                    acc = _v174;
                    _v152 = _v174;
                    return acc;
                    _v152 = acc;
                  }
                  acc = _v152;
                  _v131 = _v152;
                  const _v186: any = 1;
                  acc = _v186;
                  const _v187: any = (args[0] ?? 0);
                  acc = _v187;
                  const _v188: any = await rt.send(_v187, "claimed", [_v186]);
                  acc = _v188;
                  _v131 = _v188;
                  break _branch132;
                }
                let _v189: any = 0;
                if (!rt.truth(_v189)) {
                  let _v190: any = 1;
                  if (rt.truth(_v190)) {
                    const _v191: any = 158;
                    acc = _v191;
                    const _v192: any = 1;
                    acc = _v192;
                    const _v193: any = this;
                    acc = _v193;
                    const _v194: any = await rt.send(_v193, "firstTrue", [_v191, _v192]);
                    acc = _v194;
                    const _v195: any = rt.op("not", ...[_v194]);
                    acc = _v195;
                    _v190 = _v195;
                  }
                  if (rt.truth(_v190)) {
                    let _v196: any = 0;
                    if (!rt.truth(_v196)) {
                      let _v197: any = 1;
                      if (rt.truth(_v197)) {
                        const _v198: any = 4;
                        acc = _v198;
                        const _v199: any = (args[0] ?? 0);
                        acc = _v199;
                        const _v200: any = await rt.send(_v199, "type", []);
                        acc = _v200;
                        const _v201: any = rt.op("==", ...[_v198, _v200]);
                        acc = _v201;
                        _v197 = _v201;
                      }
                      if (rt.truth(_v197)) {
                        const _v202: any = 13;
                        acc = _v202;
                        const _v203: any = (args[0] ?? 0);
                        acc = _v203;
                        const _v204: any = await rt.send(_v203, "message", []);
                        acc = _v204;
                        const _v205: any = rt.op("==", ...[_v202, _v204]);
                        acc = _v205;
                        _v197 = _v205;
                      }
                      acc = _v197;
                      _v196 = _v197;
                    }
                    if (!rt.truth(_v196)) {
                      const _v206: any = 1;
                      acc = _v206;
                      const _v207: any = (args[0] ?? 0);
                      acc = _v207;
                      const _v208: any = await rt.send(_v207, "type", []);
                      acc = _v208;
                      const _v209: any = rt.op("==", ...[_v206, _v208]);
                      acc = _v209;
                      _v196 = _v209;
                    }
                    if (!rt.truth(_v196)) {
                      const _v210: any = 256;
                      acc = _v210;
                      const _v211: any = (args[0] ?? 0);
                      acc = _v211;
                      const _v212: any = await rt.send(_v211, "type", []);
                      acc = _v212;
                      const _v213: any = rt.op("==", ...[_v210, _v212]);
                      acc = _v213;
                      _v196 = _v213;
                    }
                    acc = _v196;
                    _v190 = _v196;
                  }
                  acc = _v190;
                  _v189 = _v190;
                }
                if (!rt.truth(_v189)) {
                  let _v214: any = 1;
                  if (rt.truth(_v214)) {
                    const _v215: any = 4;
                    acc = _v215;
                    const _v216: any = (args[0] ?? 0);
                    acc = _v216;
                    const _v217: any = await rt.send(_v216, "type", []);
                    acc = _v217;
                    const _v218: any = rt.op("==", ...[_v215, _v217]);
                    acc = _v218;
                    _v214 = _v218;
                  }
                  if (rt.truth(_v214)) {
                    const _v219: any = 27;
                    acc = _v219;
                    const _v220: any = (args[0] ?? 0);
                    acc = _v220;
                    const _v221: any = await rt.send(_v220, "message", []);
                    acc = _v221;
                    const _v222: any = rt.op("==", ...[_v219, _v221]);
                    acc = _v222;
                    _v214 = _v222;
                  }
                  acc = _v214;
                  _v189 = _v214;
                }
                acc = _v189;
                _v131 = _v189;
                acc = _v131;
                if (rt.truth(_v131)) {
                  const _v223: any = 1;
                  acc = _v223;
                  const _v224: any = (args[0] ?? 0);
                  acc = _v224;
                  const _v225: any = await rt.send(_v224, "claimed", [_v223]);
                  acc = _v225;
                  _v131 = _v225;
                  const _v226: any = -1;
                  acc = _v226;
                  const _v227: any = (temps[0] = _v226);
                  acc = _v227;
                  _v131 = _v227;
                  break _branch132;
                }
                let _v228: any = 0;
                if (!rt.truth(_v228)) {
                  let _v229: any = 1;
                  if (rt.truth(_v229)) {
                    const _v230: any = 4;
                    acc = _v230;
                    const _v231: any = (args[0] ?? 0);
                    acc = _v231;
                    const _v232: any = await rt.send(_v231, "type", []);
                    acc = _v232;
                    const _v233: any = rt.op("==", ...[_v230, _v232]);
                    acc = _v233;
                    _v229 = _v233;
                  }
                  if (rt.truth(_v229)) {
                    const _v234: any = 9;
                    acc = _v234;
                    const _v235: any = (args[0] ?? 0);
                    acc = _v235;
                    const _v236: any = await rt.send(_v235, "message", []);
                    acc = _v236;
                    const _v237: any = rt.op("==", ...[_v234, _v236]);
                    acc = _v237;
                    _v229 = _v237;
                  }
                  acc = _v229;
                  _v228 = _v229;
                }
                if (!rt.truth(_v228)) {
                  let _v238: any = 1;
                  if (rt.truth(_v238)) {
                    const _v239: any = 64;
                    acc = _v239;
                    const _v240: any = (args[0] ?? 0);
                    acc = _v240;
                    const _v241: any = await rt.send(_v240, "type", []);
                    acc = _v241;
                    const _v242: any = rt.op("==", ...[_v239, _v241]);
                    acc = _v242;
                    _v238 = _v242;
                  }
                  if (rt.truth(_v238)) {
                    let _v243: any = 0;
                    if (!rt.truth(_v243)) {
                      const _v244: any = 5;
                      acc = _v244;
                      const _v245: any = (args[0] ?? 0);
                      acc = _v245;
                      const _v246: any = await rt.send(_v245, "message", []);
                      acc = _v246;
                      const _v247: any = rt.op("==", ...[_v244, _v246]);
                      acc = _v247;
                      _v243 = _v247;
                    }
                    if (!rt.truth(_v243)) {
                      const _v248: any = 3;
                      acc = _v248;
                      const _v249: any = (args[0] ?? 0);
                      acc = _v249;
                      const _v250: any = await rt.send(_v249, "message", []);
                      acc = _v250;
                      const _v251: any = rt.op("==", ...[_v248, _v250]);
                      acc = _v251;
                      _v243 = _v251;
                    }
                    acc = _v243;
                    _v238 = _v243;
                  }
                  acc = _v238;
                  _v228 = _v238;
                }
                acc = _v228;
                _v131 = _v228;
                acc = _v131;
                if (rt.truth(_v131)) {
                  let _v252: any = acc;
                  const _v253: any = rt.get(this, "standard");
                  acc = _v253;
                  _v252 = _v253;
                  if (rt.truth(_v253)) {
                    const _v254: any = this;
                    acc = _v254;
                    const _v255: any = await rt.send(_v254, "advance", []);
                    acc = _v255;
                    _v252 = _v255;
                  } else {
                    let _v256: any = acc;
                    const _v257: any = rt.get(this, "theItem");
                    acc = _v257;
                    _v256 = _v257;
                    if (rt.truth(_v257)) {
                      const _v258: any = 0;
                      acc = _v258;
                      const _v259: any = rt.get(this, "theItem");
                      acc = _v259;
                      const _v260: any = await rt.send(_v259, "select", [_v258]);
                      acc = _v260;
                      _v256 = _v260;
                    }
                    acc = _v256;
                    _v252 = _v256;
                    const _v261: any = rt.object(891, "KeyMouse");
                    acc = _v261;
                    const _v262: any = await rt.send(_v261, "advance", []);
                    acc = _v262;
                    _v252 = _v262;
                    let _v263: any = acc;
                    const _v264: any = rt.object(891, "KeyMouse");
                    acc = _v264;
                    const _v265: any = await rt.send(_v264, "curItem", []);
                    acc = _v265;
                    _v263 = _v265;
                    if (rt.truth(_v265)) {
                      const _v266: any = 1;
                      acc = _v266;
                      const _v267: any = rt.object(891, "KeyMouse");
                      acc = _v267;
                      const _v268: any = await rt.send(_v267, "curItem", []);
                      acc = _v268;
                      const _v269: any = rt.set(this, "theItem", _v268);
                      acc = _v269;
                      const _v270: any = await rt.send(_v269, "select", [_v266]);
                      acc = _v270;
                      _v263 = _v270;
                    }
                    acc = _v263;
                    _v252 = _v263;
                  }
                  acc = _v252;
                  _v131 = _v252;
                  const _v271: any = 1;
                  acc = _v271;
                  const _v272: any = (args[0] ?? 0);
                  acc = _v272;
                  const _v273: any = await rt.send(_v272, "claimed", [_v271]);
                  acc = _v273;
                  _v131 = _v273;
                  break _branch132;
                }
                let _v274: any = 0;
                if (!rt.truth(_v274)) {
                  let _v275: any = 1;
                  if (rt.truth(_v275)) {
                    const _v276: any = 4;
                    acc = _v276;
                    const _v277: any = (args[0] ?? 0);
                    acc = _v277;
                    const _v278: any = await rt.send(_v277, "type", []);
                    acc = _v278;
                    const _v279: any = rt.op("==", ...[_v276, _v278]);
                    acc = _v279;
                    _v275 = _v279;
                  }
                  if (rt.truth(_v275)) {
                    const _v280: any = 3840;
                    acc = _v280;
                    const _v281: any = (args[0] ?? 0);
                    acc = _v281;
                    const _v282: any = await rt.send(_v281, "message", []);
                    acc = _v282;
                    const _v283: any = rt.op("==", ...[_v280, _v282]);
                    acc = _v283;
                    _v275 = _v283;
                  }
                  acc = _v275;
                  _v274 = _v275;
                }
                if (!rt.truth(_v274)) {
                  let _v284: any = 1;
                  if (rt.truth(_v284)) {
                    const _v285: any = 64;
                    acc = _v285;
                    const _v286: any = (args[0] ?? 0);
                    acc = _v286;
                    const _v287: any = await rt.send(_v286, "type", []);
                    acc = _v287;
                    const _v288: any = rt.op("==", ...[_v285, _v287]);
                    acc = _v288;
                    _v284 = _v288;
                  }
                  if (rt.truth(_v284)) {
                    let _v289: any = 0;
                    if (!rt.truth(_v289)) {
                      const _v290: any = 1;
                      acc = _v290;
                      const _v291: any = (args[0] ?? 0);
                      acc = _v291;
                      const _v292: any = await rt.send(_v291, "message", []);
                      acc = _v292;
                      const _v293: any = rt.op("==", ...[_v290, _v292]);
                      acc = _v293;
                      _v289 = _v293;
                    }
                    if (!rt.truth(_v289)) {
                      const _v294: any = 7;
                      acc = _v294;
                      const _v295: any = (args[0] ?? 0);
                      acc = _v295;
                      const _v296: any = await rt.send(_v295, "message", []);
                      acc = _v296;
                      const _v297: any = rt.op("==", ...[_v294, _v296]);
                      acc = _v297;
                      _v289 = _v297;
                    }
                    acc = _v289;
                    _v284 = _v289;
                  }
                  acc = _v284;
                  _v274 = _v284;
                }
                acc = _v274;
                _v131 = _v274;
                acc = _v131;
                if (rt.truth(_v131)) {
                  let _v298: any = acc;
                  const _v299: any = rt.get(this, "standard");
                  acc = _v299;
                  _v298 = _v299;
                  if (rt.truth(_v299)) {
                    const _v300: any = this;
                    acc = _v300;
                    const _v301: any = await rt.send(_v300, "retreat", []);
                    acc = _v301;
                    _v298 = _v301;
                  } else {
                    let _v302: any = acc;
                    const _v303: any = rt.get(this, "theItem");
                    acc = _v303;
                    _v302 = _v303;
                    if (rt.truth(_v303)) {
                      const _v304: any = 0;
                      acc = _v304;
                      const _v305: any = rt.get(this, "theItem");
                      acc = _v305;
                      const _v306: any = await rt.send(_v305, "select", [_v304]);
                      acc = _v306;
                      _v302 = _v306;
                    }
                    acc = _v302;
                    _v298 = _v302;
                    const _v307: any = rt.object(891, "KeyMouse");
                    acc = _v307;
                    const _v308: any = await rt.send(_v307, "retreat", []);
                    acc = _v308;
                    _v298 = _v308;
                    let _v309: any = acc;
                    const _v310: any = rt.object(891, "KeyMouse");
                    acc = _v310;
                    const _v311: any = await rt.send(_v310, "curItem", []);
                    acc = _v311;
                    _v309 = _v311;
                    if (rt.truth(_v311)) {
                      const _v312: any = 1;
                      acc = _v312;
                      const _v313: any = rt.object(891, "KeyMouse");
                      acc = _v313;
                      const _v314: any = await rt.send(_v313, "curItem", []);
                      acc = _v314;
                      const _v315: any = rt.set(this, "theItem", _v314);
                      acc = _v315;
                      const _v316: any = await rt.send(_v315, "select", [_v312]);
                      acc = _v316;
                      _v309 = _v316;
                    }
                    acc = _v309;
                    _v298 = _v309;
                  }
                  acc = _v298;
                  _v131 = _v298;
                  const _v317: any = 1;
                  acc = _v317;
                  const _v318: any = (args[0] ?? 0);
                  acc = _v318;
                  const _v319: any = await rt.send(_v318, "claimed", [_v317]);
                  acc = _v319;
                  _v131 = _v319;
                  break _branch132;
                }
                const _v320: any = rt.get(this, "theItem");
                acc = _v320;
                _v131 = _v320;
                acc = _v131;
                if (rt.truth(_v131)) {
                  const _v321: any = rt.get(this, "theItem");
                  acc = _v321;
                  const _v322: any = (args[0] ?? 0);
                  acc = _v322;
                  const _v323: any = await rt.call(255, "EditControl", [_v321, _v322], this);
                  acc = _v323;
                  _v131 = _v323;
                  break _branch132;
                }
              }
              acc = _v131;
              _v83 = _v131;
            }
            acc = _v83;
            const _v324: any = (temps[0] ?? 0);
            acc = _v324;
            return _v324;
            return acc;
          },
          // SCI Interface.sc: Dialog.move
          "move": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = rt.set(this, "nsRight", rt.op("+", rt.get(this, "nsRight"), _v1));
            acc = _v2;
            const _v3: any = (args[0] ?? 0);
            acc = _v3;
            const _v4: any = rt.set(this, "nsLeft", rt.op("+", rt.get(this, "nsLeft"), _v3));
            acc = _v4;
            const _v5: any = (args[1] ?? 0);
            acc = _v5;
            const _v6: any = rt.set(this, "nsTop", rt.op("+", rt.get(this, "nsTop"), _v5));
            acc = _v6;
            const _v7: any = (args[1] ?? 0);
            acc = _v7;
            const _v8: any = rt.set(this, "nsBottom", rt.op("+", rt.get(this, "nsBottom"), _v7));
            acc = _v8;
            return acc;
          },
          // SCI Interface.sc: Dialog.moveTo
          "moveTo": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = rt.get(this, "nsLeft");
            acc = _v2;
            const _v3: any = rt.op("-", ...[_v1, _v2]);
            acc = _v3;
            const _v4: any = (args[1] ?? 0);
            acc = _v4;
            const _v5: any = rt.get(this, "nsTop");
            acc = _v5;
            const _v6: any = rt.op("-", ...[_v4, _v5]);
            acc = _v6;
            const _v7: any = this;
            acc = _v7;
            const _v8: any = await rt.send(_v7, "move", [_v3, _v6]);
            acc = _v8;
            return acc;
          },
          // SCI Interface.sc: Dialog.center
          "center": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "window");
            acc = _v1;
            const _v2: any = await rt.send(_v1, "brLeft", []);
            acc = _v2;
            const _v3: any = rt.get(this, "window");
            acc = _v3;
            const _v4: any = await rt.send(_v3, "brRight", []);
            acc = _v4;
            const _v5: any = rt.get(this, "window");
            acc = _v5;
            const _v6: any = await rt.send(_v5, "brLeft", []);
            acc = _v6;
            const _v7: any = rt.op("-", ...[_v4, _v6]);
            acc = _v7;
            const _v8: any = rt.get(this, "nsRight");
            acc = _v8;
            const _v9: any = rt.get(this, "nsLeft");
            acc = _v9;
            const _v10: any = rt.op("-", ...[_v8, _v9]);
            acc = _v10;
            const _v11: any = rt.op("-", ...[_v7, _v10]);
            acc = _v11;
            const _v12: any = 2;
            acc = _v12;
            const _v13: any = rt.op("/", ...[_v11, _v12]);
            acc = _v13;
            const _v14: any = rt.op("+", ...[_v2, _v13]);
            acc = _v14;
            const _v15: any = rt.get(this, "window");
            acc = _v15;
            const _v16: any = await rt.send(_v15, "brTop", []);
            acc = _v16;
            const _v17: any = rt.get(this, "window");
            acc = _v17;
            const _v18: any = await rt.send(_v17, "brBottom", []);
            acc = _v18;
            const _v19: any = rt.get(this, "window");
            acc = _v19;
            const _v20: any = await rt.send(_v19, "brTop", []);
            acc = _v20;
            const _v21: any = rt.op("-", ...[_v18, _v20]);
            acc = _v21;
            const _v22: any = rt.get(this, "nsBottom");
            acc = _v22;
            const _v23: any = rt.get(this, "nsTop");
            acc = _v23;
            const _v24: any = rt.op("-", ...[_v22, _v23]);
            acc = _v24;
            const _v25: any = rt.op("-", ...[_v21, _v24]);
            acc = _v25;
            const _v26: any = 2;
            acc = _v26;
            const _v27: any = rt.op("/", ...[_v25, _v26]);
            acc = _v27;
            const _v28: any = rt.op("+", ...[_v16, _v27]);
            acc = _v28;
            const _v29: any = this;
            acc = _v29;
            const _v30: any = await rt.send(_v29, "moveTo", [_v14, _v28]);
            acc = _v30;
            return acc;
          },
          // SCI Interface.sc: Dialog.setSize
          "setSize": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0];
            let _v1: any = acc;
            const _v2: any = rt.get(this, "text");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = 0;
              acc = _v3;
              const _v4: any = rt.ref("array", temps, (2 + (Number(_v3) & 65535)));
              acc = _v4;
              const _v5: any = rt.get(this, "text");
              acc = _v5;
              const _v6: any = 0;
              acc = _v6;
              const _v7: any = -1;
              acc = _v7;
              const _v8: any = await rt.call(255, "TextSize", [_v4, _v5, _v6, _v7], this);
              acc = _v8;
              _v1 = _v8;
              const _v9: any = 0;
              acc = _v9;
              const _v10: any = (temps[(2 + (Number(_v9) & 65535))] ?? 0);
              acc = _v10;
              const _v11: any = rt.set(this, "nsTop", _v10);
              acc = _v11;
              _v1 = _v11;
              const _v12: any = 1;
              acc = _v12;
              const _v13: any = (temps[(2 + (Number(_v12) & 65535))] ?? 0);
              acc = _v13;
              const _v14: any = rt.set(this, "nsLeft", _v13);
              acc = _v14;
              _v1 = _v14;
              const _v15: any = 2;
              acc = _v15;
              const _v16: any = (temps[(2 + (Number(_v15) & 65535))] ?? 0);
              acc = _v16;
              const _v17: any = rt.set(this, "nsBottom", _v16);
              acc = _v17;
              _v1 = _v17;
              const _v18: any = 3;
              acc = _v18;
              const _v19: any = (temps[(2 + (Number(_v18) & 65535))] ?? 0);
              acc = _v19;
              const _v20: any = rt.set(this, "nsRight", _v19);
              acc = _v20;
              _v1 = _v20;
            } else {
              const _v21: any = 0;
              acc = _v21;
              const _v22: any = rt.set(this, "nsTop", _v21);
              acc = _v22;
              const _v23: any = rt.set(this, "nsLeft", _v22);
              acc = _v23;
              const _v24: any = rt.set(this, "nsBottom", _v23);
              acc = _v24;
              const _v25: any = rt.set(this, "nsRight", _v24);
              acc = _v25;
              _v1 = _v25;
            }
            acc = _v1;
            const _v28: any = this;
            acc = _v28;
            const _v29: any = await rt.send(_v28, "first", []);
            acc = _v29;
            const _v30: any = (temps[0] = _v29);
            acc = _v30;
            _loop26: for (;;) {
              const _v31: any = (temps[0] ?? 0);
              acc = _v31;
              if (!rt.truth(_v31)) break _loop26;
              _continue27: {
                const _v32: any = (temps[0] ?? 0);
                acc = _v32;
                const _v33: any = await rt.call(255, "NodeValue", [_v32], this);
                acc = _v33;
                const _v34: any = (temps[1] = _v33);
                acc = _v34;
                let _v35: any = acc;
                const _v36: any = (temps[1] ?? 0);
                acc = _v36;
                const _v37: any = await rt.send(_v36, "nsLeft", []);
                acc = _v37;
                const _v38: any = rt.get(this, "nsLeft");
                acc = _v38;
                const _v39: any = rt.op("<", ...[_v37, _v38]);
                acc = _v39;
                _v35 = _v39;
                if (rt.truth(_v39)) {
                  const _v40: any = (temps[1] ?? 0);
                  acc = _v40;
                  const _v41: any = await rt.send(_v40, "nsLeft", []);
                  acc = _v41;
                  const _v42: any = rt.set(this, "nsLeft", _v41);
                  acc = _v42;
                  _v35 = _v42;
                }
                acc = _v35;
                let _v43: any = acc;
                const _v44: any = (temps[1] ?? 0);
                acc = _v44;
                const _v45: any = await rt.send(_v44, "nsTop", []);
                acc = _v45;
                const _v46: any = rt.get(this, "nsTop");
                acc = _v46;
                const _v47: any = rt.op("<", ...[_v45, _v46]);
                acc = _v47;
                _v43 = _v47;
                if (rt.truth(_v47)) {
                  const _v48: any = (temps[1] ?? 0);
                  acc = _v48;
                  const _v49: any = await rt.send(_v48, "nsTop", []);
                  acc = _v49;
                  const _v50: any = rt.set(this, "nsTop", _v49);
                  acc = _v50;
                  _v43 = _v50;
                }
                acc = _v43;
                let _v51: any = acc;
                const _v52: any = (temps[1] ?? 0);
                acc = _v52;
                const _v53: any = await rt.send(_v52, "nsRight", []);
                acc = _v53;
                const _v54: any = rt.get(this, "nsRight");
                acc = _v54;
                const _v55: any = rt.op(">", ...[_v53, _v54]);
                acc = _v55;
                _v51 = _v55;
                if (rt.truth(_v55)) {
                  const _v56: any = (temps[1] ?? 0);
                  acc = _v56;
                  const _v57: any = await rt.send(_v56, "nsRight", []);
                  acc = _v57;
                  const _v58: any = rt.set(this, "nsRight", _v57);
                  acc = _v58;
                  _v51 = _v58;
                }
                acc = _v51;
                let _v59: any = acc;
                const _v60: any = (temps[1] ?? 0);
                acc = _v60;
                const _v61: any = await rt.send(_v60, "nsBottom", []);
                acc = _v61;
                const _v62: any = rt.get(this, "nsBottom");
                acc = _v62;
                const _v63: any = rt.op(">", ...[_v61, _v62]);
                acc = _v63;
                _v59 = _v63;
                if (rt.truth(_v63)) {
                  const _v64: any = (temps[1] ?? 0);
                  acc = _v64;
                  const _v65: any = await rt.send(_v64, "nsBottom", []);
                  acc = _v65;
                  const _v66: any = rt.set(this, "nsBottom", _v65);
                  acc = _v66;
                  _v59 = _v66;
                }
                acc = _v59;
              }
              const _v67: any = (temps[0] ?? 0);
              acc = _v67;
              const _v68: any = this;
              acc = _v68;
              const _v69: any = await rt.send(_v68, "next", [_v67]);
              acc = _v69;
              const _v70: any = (temps[0] = _v69);
              acc = _v70;
            }
            const _v71: any = 5;
            acc = _v71;
            const _v72: any = rt.set(this, "nsRight", rt.op("+", rt.get(this, "nsRight"), _v71));
            acc = _v72;
            const _v73: any = 5;
            acc = _v73;
            const _v74: any = rt.set(this, "nsBottom", rt.op("+", rt.get(this, "nsBottom"), _v73));
            acc = _v74;
            const _v75: any = 0;
            acc = _v75;
            const _v76: any = 0;
            acc = _v76;
            const _v77: any = this;
            acc = _v77;
            const _v78: any = await rt.send(_v77, "moveTo", [_v75, _v76]);
            acc = _v78;
            return acc;
          },
        },
      },
      {
        name: "Controls",
        className: "List",
        parent: {"script": 999, "name": "List"},
        isClass: true,
        properties: {},
        methods: {
          // SCI Interface.sc: Controls.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 153;
            acc = _v1;
            const _v2: any = 83;
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "eachElementDo", [_v1]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "eachElementDo", [_v2]);
            acc = _v5;
            return acc;
          },
          // SCI Interface.sc: Controls.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = (args[0] ?? 0);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "claimed", []);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = 0;
              acc = _v4;
              return _v4;
              _v1 = acc;
            }
            acc = _v1;
            let _v5: any = acc;
            let _v6: any = 1;
            if (rt.truth(_v6)) {
              const _v7: any = 124;
              acc = _v7;
              const _v8: any = (args[0] ?? 0);
              acc = _v8;
              const _v9: any = this;
              acc = _v9;
              const _v10: any = await rt.send(_v9, "firstTrue", [_v7, _v8]);
              acc = _v10;
              const _v11: any = (temps[0] = _v10);
              acc = _v11;
              _v6 = _v11;
            }
            if (rt.truth(_v6)) {
              const _v12: any = 2;
              acc = _v12;
              const _v13: any = (temps[0] ?? 0);
              acc = _v13;
              const _v14: any = await rt.send(_v13, "checkState", [_v12]);
              acc = _v14;
              const _v15: any = rt.op("not", ...[_v14]);
              acc = _v15;
              _v6 = _v15;
            }
            acc = _v6;
            _v5 = _v6;
            if (rt.truth(_v6)) {
              const _v16: any = (temps[0] ?? 0);
              acc = _v16;
              const _v17: any = await rt.send(_v16, "doit", []);
              acc = _v17;
              _v5 = _v17;
              const _v18: any = 0;
              acc = _v18;
              const _v19: any = (temps[0] = _v18);
              acc = _v19;
              _v5 = _v19;
            }
            acc = _v5;
            const _v20: any = (temps[0] ?? 0);
            acc = _v20;
            return _v20;
            return acc;
          },
        },
      },
    ],
    procedures: {
      // SCI Interface.sc: StillDown
      "StillDown": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0];
        const _v1: any = rt.object(999, "Event");
        acc = _v1;
        const _v2: any = await rt.send(_v1, "new", []);
        acc = _v2;
        const _v3: any = (temps[0] = _v2);
        acc = _v3;
        let _v4: any = acc;
        const _v5: any = argc;
        acc = _v5;
        _v4 = _v5;
        if (rt.truth(_v5)) {
          const _v6: any = (temps[0] ?? 0);
          acc = _v6;
          const _v7: any = await rt.send(_v6, "port", []);
          acc = _v7;
          const _v8: any = (temps[0] ?? 0);
          acc = _v8;
          const _v9: any = await rt.send(_v8, "x", []);
          acc = _v9;
          const _v10: any = (temps[0] ?? 0);
          acc = _v10;
          const _v11: any = await rt.send(_v10, "y", []);
          acc = _v11;
          const _v12: any = (args[0] ?? 0);
          acc = _v12;
          const _v13: any = await rt.send(_v12, "port", [_v7]);
          acc = _v13;
          const _v14: any = await rt.send(_v12, "x", [_v9]);
          acc = _v14;
          const _v15: any = await rt.send(_v12, "y", [_v11]);
          acc = _v15;
          _v4 = _v15;
        }
        acc = _v4;
        const _v16: any = (temps[0] ?? 0);
        acc = _v16;
        const _v17: any = await rt.send(_v16, "type", []);
        acc = _v17;
        const _v18: any = 2;
        acc = _v18;
        const _v19: any = rt.op("!=", ...[_v17, _v18]);
        acc = _v19;
        const _v20: any = (temps[1] = _v19);
        acc = _v20;
        const _v21: any = (temps[0] ?? 0);
        acc = _v21;
        const _v22: any = await rt.send(_v21, "dispose", []);
        acc = _v22;
        const _v23: any = (temps[1] ?? 0);
        acc = _v23;
        return _v23;
        return acc;
      },
      // SCI Interface.sc: GetInput
      "GetInput": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0];
        let _v1: any = acc;
        let _v2: any = acc;
        const _v3: any = argc;
        acc = _v3;
        const _v4: any = 3;
        acc = _v4;
        const _v5: any = rt.op(">=", ...[_v3, _v4]);
        acc = _v5;
        _v2 = _v5;
        if (rt.truth(_v5)) {
          const _v6: any = (args[2] ?? 0);
          acc = _v6;
          _v2 = _v6;
        } else {
          const _v7: any = "";
          acc = _v7;
          _v2 = _v7;
        }
        acc = _v2;
        const _v8: any = 41;
        acc = _v8;
        const _v9: any = (args[0] ?? 0);
        acc = _v9;
        const _v10: any = (args[1] ?? 0);
        acc = _v10;
        const _v11: any = args.slice(3, argc);
        acc = _v11;
        const _v12: any = await rt.call(255, "Print", [_v2, _v8, _v9, _v10, ..._v11], this);
        acc = _v12;
        _v1 = _v12;
        if (rt.truth(_v12)) {
          const _v13: any = (args[0] ?? 0);
          acc = _v13;
          const _v14: any = await rt.call(255, "StrLen", [_v13], this);
          acc = _v14;
          _v1 = _v14;
        }
        acc = _v1;
        return acc;
      },
      // SCI Interface.sc: ShowView
      "ShowView": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = (args[0] ?? 0);
        acc = _v1;
        const _v2: any = 82;
        acc = _v2;
        const _v3: any = (args[1] ?? 0);
        acc = _v3;
        const _v4: any = (args[2] ?? 0);
        acc = _v4;
        const _v5: any = (args[3] ?? 0);
        acc = _v5;
        const _v6: any = args.slice(4, argc);
        acc = _v6;
        const _v7: any = await rt.call(255, "Print", [_v1, _v2, _v3, _v4, _v5, ..._v6], this);
        acc = _v7;
        return acc;
      },
      // SCI Interface.sc: Print
      "Print": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const _v1: any = 1;
        acc = _v1;
        const _v2: any = rt.setGlobal(506, _v1);
        acc = _v2;
        const _v3: any = await rt.call(255, "GetPort", [], this);
        acc = _v3;
        const _v4: any = (temps[22] = _v3);
        acc = _v4;
        const _v5: any = 0;
        acc = _v5;
        const _v6: any = await rt.call(255, "SetPort", [_v5], this);
        acc = _v6;
        const _v7: any = -1;
        acc = _v7;
        const _v8: any = (temps[18] = _v7);
        acc = _v8;
        const _v9: any = (temps[17] = _v8);
        acc = _v9;
        const _v10: any = 0;
        acc = _v10;
        const _v11: any = (temps[26] = _v10);
        acc = _v11;
        const _v12: any = (temps[30] = _v11);
        acc = _v12;
        const _v13: any = (temps[12] = _v12);
        acc = _v13;
        const _v14: any = (temps[11] = _v13);
        acc = _v14;
        const _v15: any = (temps[25] = _v14);
        acc = _v15;
        const _v16: any = (temps[19] = _v15);
        acc = _v16;
        const _v17: any = (temps[20] = _v16);
        acc = _v17;
        const _v18: any = (temps[29] = _v17);
        acc = _v18;
        const _v19: any = (temps[28] = _v18);
        acc = _v19;
        const _v20: any = rt.global(371);
        acc = _v20;
        const _v21: any = "PrintD";
        acc = _v21;
        const _v22: any = rt.object(255, "Dialog");
        acc = _v22;
        const _v23: any = await rt.send(_v22, "new", []);
        acc = _v23;
        const _v24: any = (temps[1] = _v23);
        acc = _v24;
        const _v25: any = await rt.send(_v24, "window", [_v20]);
        acc = _v25;
        const _v26: any = await rt.send(_v24, "name", [_v21]);
        acc = _v26;
        const _v27: any = rt.object(255, "DText");
        acc = _v27;
        const _v28: any = await rt.send(_v27, "new", []);
        acc = _v28;
        const _v29: any = (temps[10] = _v28);
        acc = _v29;
        let _v30: any = acc;
        _branch31: {
          const _v32: any = 0;
          acc = _v32;
          const _v33: any = (args[(0 + (Number(_v32) & 65535))] ?? 0);
          acc = _v33;
          const _v34: any = 1000;
          acc = _v34;
          const _v35: any = rt.op("u<", ...[_v33, _v34]);
          acc = _v35;
          _v30 = _v35;
          acc = _v30;
          if (rt.truth(_v30)) {
            const _v36: any = 0;
            acc = _v36;
            const _v37: any = (args[(0 + (Number(_v36) & 65535))] ?? 0);
            acc = _v37;
            const _v38: any = 1;
            acc = _v38;
            const _v39: any = (args[(0 + (Number(_v38) & 65535))] ?? 0);
            acc = _v39;
            const _v40: any = rt.ref("array", temps, 33);
            acc = _v40;
            const _v41: any = await rt.call(255, "GetFarText", [_v37, _v39, _v40], this);
            acc = _v41;
            _v30 = _v41;
            const _v42: any = 2;
            acc = _v42;
            const _v43: any = (temps[16] = _v42);
            acc = _v43;
            _v30 = _v43;
            break _branch31;
          }
          const _v44: any = 0;
          acc = _v44;
          const _v45: any = (args[(0 + (Number(_v44) & 65535))] ?? 0);
          acc = _v45;
          _v30 = _v45;
          acc = _v30;
          if (rt.truth(_v30)) {
            const _v46: any = rt.ref("array", temps, 33);
            acc = _v46;
            const _v47: any = 0;
            acc = _v47;
            const _v48: any = (args[(0 + (Number(_v47) & 65535))] ?? 0);
            acc = _v48;
            const _v49: any = await rt.call(255, "StrCpy", [_v46, _v48], this);
            acc = _v49;
            _v30 = _v49;
            const _v50: any = 1;
            acc = _v50;
            const _v51: any = (temps[16] = _v50);
            acc = _v51;
            _v30 = _v51;
            break _branch31;
          }
          const _v52: any = 0;
          acc = _v52;
          const _v53: any = (temps[33] = _v52);
          acc = _v53;
          _v30 = _v53;
          const _v54: any = 0;
          acc = _v54;
          const _v55: any = (temps[16] = _v54);
          acc = _v55;
          _v30 = _v55;
          break _branch31;
        }
        acc = _v30;
        const _v56: any = rt.ref("array", temps, 33);
        acc = _v56;
        const _v57: any = 5;
        acc = _v57;
        const _v58: any = 5;
        acc = _v58;
        const _v59: any = rt.global(22);
        acc = _v59;
        const _v60: any = (temps[10] ?? 0);
        acc = _v60;
        const _v61: any = await rt.send(_v60, "text", [_v56]);
        acc = _v61;
        const _v62: any = await rt.send(_v60, "moveTo", [_v57, _v58]);
        acc = _v62;
        const _v63: any = await rt.send(_v60, "font", [_v59]);
        acc = _v63;
        const _v64: any = await rt.send(_v60, "setSize", []);
        acc = _v64;
        const _v65: any = (temps[10] ?? 0);
        acc = _v65;
        const _v66: any = (temps[1] ?? 0);
        acc = _v66;
        const _v67: any = await rt.send(_v66, "add", [_v65]);
        acc = _v67;
        const _v68: any = 100;
        acc = _v68;
        const _v69: any = (temps[19] = _v68);
        acc = _v69;
        const _v70: any = 1;
        acc = _v70;
        const _v71: any = (temps[10] ?? 0);
        acc = _v71;
        const _v72: any = await rt.send(_v71, "setSize", [_v69]);
        acc = _v72;
        const _v73: any = await rt.send(_v71, "mode", [_v70]);
        acc = _v73;
        const _v76: any = (temps[16] ?? 0);
        acc = _v76;
        const _v77: any = (temps[16] = _v76);
        acc = _v77;
        _loop74: for (;;) {
          const _v78: any = (temps[16] ?? 0);
          acc = _v78;
          const _v79: any = argc;
          acc = _v79;
          const _v80: any = rt.op("<", ...[_v78, _v79]);
          acc = _v80;
          if (!rt.truth(_v80)) break _loop74;
          _continue75: {
            let _v81: any = acc;
            const _v82: any = (temps[16] ?? 0);
            acc = _v82;
            const _v83: any = (args[(0 + (Number(_v82) & 65535))] ?? 0);
            acc = _v83;
            _branch84: {
              const _v85: any = 30;
              acc = _v85;
              _v81 = rt.op("==", _v83, _v85);
              acc = _v81;
              if (rt.truth(_v81)) {
                const _v86: any = (temps[16] = rt.op("+", (temps[16] ?? 0), 1));
                acc = _v86;
                _v81 = _v86;
                const _v87: any = (temps[16] ?? 0);
                acc = _v87;
                const _v88: any = (args[(0 + (Number(_v87) & 65535))] ?? 0);
                acc = _v88;
                const _v89: any = (temps[10] ?? 0);
                acc = _v89;
                const _v90: any = await rt.send(_v89, "mode", [_v88]);
                acc = _v90;
                _v81 = _v90;
                break _branch84;
              }
              const _v91: any = 33;
              acc = _v91;
              _v81 = rt.op("==", _v83, _v91);
              acc = _v81;
              if (rt.truth(_v81)) {
                const _v92: any = (temps[16] = rt.op("+", (temps[16] ?? 0), 1));
                acc = _v92;
                _v81 = _v92;
                const _v93: any = (temps[16] ?? 0);
                acc = _v93;
                const _v94: any = (args[(0 + (Number(_v93) & 65535))] ?? 0);
                acc = _v94;
                const _v95: any = (temps[19] ?? 0);
                acc = _v95;
                const _v96: any = (temps[10] ?? 0);
                acc = _v96;
                const _v97: any = await rt.send(_v96, "font", [_v94]);
                acc = _v97;
                const _v98: any = await rt.send(_v96, "setSize", [_v95]);
                acc = _v98;
                _v81 = _v98;
                break _branch84;
              }
              const _v99: any = 70;
              acc = _v99;
              _v81 = rt.op("==", _v83, _v99);
              acc = _v81;
              if (rt.truth(_v81)) {
                const _v100: any = (temps[16] = rt.op("+", (temps[16] ?? 0), 1));
                acc = _v100;
                const _v101: any = (args[(0 + (Number(_v100) & 65535))] ?? 0);
                acc = _v101;
                const _v102: any = (temps[19] = _v101);
                acc = _v102;
                _v81 = _v102;
                const _v103: any = (temps[19] ?? 0);
                acc = _v103;
                const _v104: any = (temps[10] ?? 0);
                acc = _v104;
                const _v105: any = await rt.send(_v104, "setSize", [_v103]);
                acc = _v105;
                _v81 = _v105;
                break _branch84;
              }
              const _v106: any = 25;
              acc = _v106;
              _v81 = rt.op("==", _v83, _v106);
              acc = _v81;
              if (rt.truth(_v81)) {
                const _v107: any = (temps[16] = rt.op("+", (temps[16] ?? 0), 1));
                acc = _v107;
                _v81 = _v107;
                const _v108: any = (temps[16] ?? 0);
                acc = _v108;
                const _v109: any = (args[(0 + (Number(_v108) & 65535))] ?? 0);
                acc = _v109;
                const _v110: any = (temps[1] ?? 0);
                acc = _v110;
                const _v111: any = await rt.send(_v110, "time", [_v109]);
                acc = _v111;
                _v81 = _v111;
                break _branch84;
              }
              const _v112: any = 80;
              acc = _v112;
              _v81 = rt.op("==", _v83, _v112);
              acc = _v81;
              if (rt.truth(_v81)) {
                const _v113: any = (temps[16] = rt.op("+", (temps[16] ?? 0), 1));
                acc = _v113;
                _v81 = _v113;
                const _v114: any = (temps[16] ?? 0);
                acc = _v114;
                const _v115: any = (args[(0 + (Number(_v114) & 65535))] ?? 0);
                acc = _v115;
                const _v116: any = (temps[1] ?? 0);
                acc = _v116;
                const _v117: any = await rt.send(_v116, "text", [_v115]);
                acc = _v117;
                _v81 = _v117;
                break _branch84;
              }
              const _v118: any = 67;
              acc = _v118;
              _v81 = rt.op("==", _v83, _v118);
              acc = _v81;
              if (rt.truth(_v81)) {
                const _v119: any = (temps[16] = rt.op("+", (temps[16] ?? 0), 1));
                acc = _v119;
                const _v120: any = (args[(0 + (Number(_v119) & 65535))] ?? 0);
                acc = _v120;
                const _v121: any = (temps[17] = _v120);
                acc = _v121;
                _v81 = _v121;
                const _v122: any = (temps[16] = rt.op("+", (temps[16] ?? 0), 1));
                acc = _v122;
                const _v123: any = (args[(0 + (Number(_v122) & 65535))] ?? 0);
                acc = _v123;
                const _v124: any = (temps[18] = _v123);
                acc = _v124;
                _v81 = _v124;
                break _branch84;
              }
              const _v125: any = 83;
              acc = _v125;
              _v81 = rt.op("==", _v83, _v125);
              acc = _v81;
              if (rt.truth(_v81)) {
                const _v126: any = rt.global(5);
                acc = _v126;
                const _v127: any = await rt.send(_v126, "elements", []);
                acc = _v127;
                const _v128: any = 0;
                acc = _v128;
                const _v129: any = await rt.call(255, "Animate", [_v127, _v128], this);
                acc = _v129;
                _v81 = _v129;
                break _branch84;
              }
              const _v130: any = 41;
              acc = _v130;
              _v81 = rt.op("==", _v83, _v130);
              acc = _v81;
              if (rt.truth(_v81)) {
                const _v131: any = (temps[16] = rt.op("+", (temps[16] ?? 0), 1));
                acc = _v131;
                _v81 = _v131;
                const _v132: any = (temps[16] ?? 0);
                acc = _v132;
                const _v133: any = (args[(0 + (Number(_v132) & 65535))] ?? 0);
                acc = _v133;
                const _v134: any = rt.object(255, "DEdit");
                acc = _v134;
                const _v135: any = await rt.send(_v134, "new", []);
                acc = _v135;
                const _v136: any = (temps[12] = _v135);
                acc = _v136;
                const _v137: any = await rt.send(_v136, "text", [_v133]);
                acc = _v137;
                _v81 = _v137;
                const _v138: any = (temps[16] = rt.op("+", (temps[16] ?? 0), 1));
                acc = _v138;
                _v81 = _v138;
                const _v139: any = (temps[16] ?? 0);
                acc = _v139;
                const _v140: any = (args[(0 + (Number(_v139) & 65535))] ?? 0);
                acc = _v140;
                const _v141: any = (temps[12] ?? 0);
                acc = _v141;
                const _v142: any = await rt.send(_v141, "max", [_v140]);
                acc = _v142;
                const _v143: any = await rt.send(_v141, "setSize", []);
                acc = _v143;
                _v81 = _v143;
                break _branch84;
              }
              const _v144: any = 81;
              acc = _v144;
              _v81 = rt.op("==", _v83, _v144);
              acc = _v81;
              if (rt.truth(_v81)) {
                const _v145: any = (temps[16] = rt.op("+", (temps[16] ?? 0), 1));
                acc = _v145;
                const _v146: any = (args[(0 + (Number(_v145) & 65535))] ?? 0);
                acc = _v146;
                const _v147: any = (temps[16] = rt.op("+", (temps[16] ?? 0), 1));
                acc = _v147;
                const _v148: any = (args[(0 + (Number(_v147) & 65535))] ?? 0);
                acc = _v148;
                const _v149: any = rt.object(255, "DButton");
                acc = _v149;
                const _v150: any = await rt.send(_v149, "new", []);
                acc = _v150;
                const _v151: any = (temps[26] ?? 0);
                acc = _v151;
                const _v152: any = (temps[(4 + (Number(_v151) & 65535))] = _v150);
                acc = _v152;
                const _v153: any = await rt.send(_v152, "text", [_v146]);
                acc = _v153;
                const _v154: any = await rt.send(_v152, "value", [_v148]);
                acc = _v154;
                const _v155: any = await rt.send(_v152, "setSize", []);
                acc = _v155;
                _v81 = _v155;
                const _v156: any = (temps[26] ?? 0);
                acc = _v156;
                const _v157: any = (temps[(4 + (Number(_v156) & 65535))] ?? 0);
                acc = _v157;
                const _v158: any = await rt.send(_v157, "nsRight", []);
                acc = _v158;
                const _v159: any = 5;
                acc = _v159;
                const _v160: any = rt.op("+", ...[_v158, _v159]);
                acc = _v160;
                const _v161: any = (temps[25] = rt.op("+", (temps[25] ?? 0), _v160));
                acc = _v161;
                _v81 = _v161;
                const _v162: any = (temps[26] = rt.op("+", (temps[26] ?? 0), 1));
                acc = _v162;
                _v81 = _v162;
                break _branch84;
              }
              const _v163: any = 82;
              acc = _v163;
              _v81 = rt.op("==", _v83, _v163);
              acc = _v81;
              if (rt.truth(_v81)) {
                let _v164: any = acc;
                const _v165: any = (temps[16] ?? 0);
                acc = _v165;
                const _v166: any = 1;
                acc = _v166;
                const _v167: any = rt.op("+", ...[_v165, _v166]);
                acc = _v167;
                const _v168: any = (args[(0 + (Number(_v167) & 65535))] ?? 0);
                acc = _v168;
                const _v169: any = await rt.call(255, "IsObject", [_v168], this);
                acc = _v169;
                _v164 = _v169;
                if (rt.truth(_v169)) {
                  const _v170: any = (temps[16] ?? 0);
                  acc = _v170;
                  const _v171: any = 1;
                  acc = _v171;
                  const _v172: any = rt.op("+", ...[_v170, _v171]);
                  acc = _v172;
                  const _v173: any = (args[(0 + (Number(_v172) & 65535))] ?? 0);
                  acc = _v173;
                  const _v174: any = await rt.send(_v173, "new", []);
                  acc = _v174;
                  const _v175: any = (temps[11] = _v174);
                  acc = _v175;
                  _v164 = _v175;
                  const _v176: any = (temps[11] ?? 0);
                  acc = _v176;
                  const _v177: any = await rt.send(_v176, "setSize", []);
                  acc = _v177;
                  _v164 = _v177;
                  const _v178: any = 1;
                  acc = _v178;
                  const _v179: any = (temps[16] = rt.op("+", (temps[16] ?? 0), _v178));
                  acc = _v179;
                  _v164 = _v179;
                } else {
                  const _v180: any = rt.object(255, "DIcon");
                  acc = _v180;
                  const _v181: any = await rt.send(_v180, "new", []);
                  acc = _v181;
                  const _v182: any = (temps[11] = _v181);
                  acc = _v182;
                  _v164 = _v182;
                  const _v183: any = (temps[16] ?? 0);
                  acc = _v183;
                  const _v184: any = 1;
                  acc = _v184;
                  const _v185: any = rt.op("+", ...[_v183, _v184]);
                  acc = _v185;
                  const _v186: any = (args[(0 + (Number(_v185) & 65535))] ?? 0);
                  acc = _v186;
                  const _v187: any = (temps[16] ?? 0);
                  acc = _v187;
                  const _v188: any = 2;
                  acc = _v188;
                  const _v189: any = rt.op("+", ...[_v187, _v188]);
                  acc = _v189;
                  const _v190: any = (args[(0 + (Number(_v189) & 65535))] ?? 0);
                  acc = _v190;
                  const _v191: any = (temps[16] ?? 0);
                  acc = _v191;
                  const _v192: any = 3;
                  acc = _v192;
                  const _v193: any = rt.op("+", ...[_v191, _v192]);
                  acc = _v193;
                  const _v194: any = (args[(0 + (Number(_v193) & 65535))] ?? 0);
                  acc = _v194;
                  const _v195: any = (temps[11] ?? 0);
                  acc = _v195;
                  const _v196: any = await rt.send(_v195, "view", [_v186]);
                  acc = _v196;
                  const _v197: any = await rt.send(_v195, "loop", [_v190]);
                  acc = _v197;
                  const _v198: any = await rt.send(_v195, "cel", [_v194]);
                  acc = _v198;
                  const _v199: any = await rt.send(_v195, "setSize", []);
                  acc = _v199;
                  _v164 = _v199;
                  const _v200: any = 3;
                  acc = _v200;
                  const _v201: any = (temps[16] = rt.op("+", (temps[16] ?? 0), _v200));
                  acc = _v201;
                  _v164 = _v201;
                }
                acc = _v164;
                _v81 = _v164;
                break _branch84;
              }
              const _v202: any = 103;
              acc = _v202;
              _v81 = rt.op("==", _v83, _v202);
              acc = _v81;
              if (rt.truth(_v81)) {
                let _v203: any = acc;
                const _v204: any = rt.global(25);
                acc = _v204;
                _v203 = _v204;
                if (rt.truth(_v204)) {
                  const _v205: any = rt.global(25);
                  acc = _v205;
                  const _v206: any = await rt.send(_v205, "dispose", []);
                  acc = _v206;
                  _v203 = _v206;
                }
                acc = _v203;
                _v81 = _v203;
                const _v207: any = (temps[1] ?? 0);
                acc = _v207;
                const _v208: any = (temps[20] = _v207);
                acc = _v208;
                _v81 = _v208;
                break _branch84;
              }
              const _v209: any = 35;
              acc = _v209;
              _v81 = rt.op("==", _v83, _v209);
              acc = _v81;
              if (rt.truth(_v81)) {
                const _v210: any = (temps[16] = rt.op("+", (temps[16] ?? 0), 1));
                acc = _v210;
                _v81 = _v210;
                const _v211: any = (temps[16] ?? 0);
                acc = _v211;
                const _v212: any = (args[(0 + (Number(_v211) & 65535))] ?? 0);
                acc = _v212;
                const _v213: any = (temps[1] ?? 0);
                acc = _v213;
                const _v214: any = await rt.send(_v213, "window", [_v212]);
                acc = _v214;
                _v81 = _v214;
                break _branch84;
              }
              const _v215: any = 310;
              acc = _v215;
              _v81 = rt.op("==", _v83, _v215);
              acc = _v81;
              if (rt.truth(_v81)) {
                const _v216: any = (temps[16] = rt.op("+", (temps[16] ?? 0), 1));
                acc = _v216;
                const _v217: any = (args[(0 + (Number(_v216) & 65535))] ?? 0);
                acc = _v217;
                const _v218: any = (temps[28] = _v217);
                acc = _v218;
                _v81 = _v218;
                const _v219: any = (temps[16] = rt.op("+", (temps[16] ?? 0), 1));
                acc = _v219;
                const _v220: any = (args[(0 + (Number(_v219) & 65535))] ?? 0);
                acc = _v220;
                const _v221: any = (temps[29] = _v220);
                acc = _v221;
                _v81 = _v221;
                const _v222: any = (temps[16] = rt.op("+", (temps[16] ?? 0), 1));
                acc = _v222;
                const _v223: any = (args[(0 + (Number(_v222) & 65535))] ?? 0);
                acc = _v223;
                const _v224: any = (temps[13] = _v223);
                acc = _v224;
                _v81 = _v224;
                const _v225: any = (temps[16] = rt.op("+", (temps[16] ?? 0), 1));
                acc = _v225;
                const _v226: any = (args[(0 + (Number(_v225) & 65535))] ?? 0);
                acc = _v226;
                const _v227: any = (temps[14] = _v226);
                acc = _v227;
                _v81 = _v227;
                break _branch84;
              }
              const _v228: any = 311;
              acc = _v228;
              _v81 = rt.op("==", _v83, _v228);
              acc = _v81;
              if (rt.truth(_v81)) {
                let _v229: any = acc;
                const _v230: any = rt.global(447);
                acc = _v230;
                _v229 = _v230;
                if (rt.truth(_v230)) {
                  const _v231: any = rt.object(891, "KeyMouse");
                  acc = _v231;
                  const _v232: any = await rt.send(_v231, "prevCursorX", []);
                  acc = _v232;
                  const _v233: any = (temps[31] = _v232);
                  acc = _v233;
                  _v229 = _v233;
                  const _v234: any = rt.object(891, "KeyMouse");
                  acc = _v234;
                  const _v235: any = await rt.send(_v234, "prevCursorY", []);
                  acc = _v235;
                  const _v236: any = (temps[32] = _v235);
                  acc = _v236;
                  _v229 = _v236;
                  const _v237: any = rt.object(891, "KeyMouse");
                  acc = _v237;
                  const _v238: any = await rt.send(_v237, "curItem", []);
                  acc = _v238;
                  const _v239: any = (temps[2] = _v238);
                  acc = _v239;
                  _v229 = _v239;
                  const _v240: any = rt.object(891, "KeyMouse");
                  acc = _v240;
                  const _v241: any = await rt.send(_v240, "listOfCoords", []);
                  acc = _v241;
                  const _v242: any = (temps[3] = _v241);
                  acc = _v242;
                  _v229 = _v242;
                  const _v243: any = 0;
                  acc = _v243;
                  const _v244: any = (temps[1] ?? 0);
                  acc = _v244;
                  const _v245: any = await rt.send(_v244, "standard", [_v243]);
                  acc = _v245;
                  _v229 = _v245;
                  const _v246: any = rt.object(999, "List");
                  acc = _v246;
                  const _v247: any = await rt.send(_v246, "new", []);
                  acc = _v247;
                  const _v248: any = (temps[15] = _v247);
                  acc = _v248;
                  const _v249: any = await rt.send(_v248, "add", []);
                  acc = _v249;
                  _v229 = _v249;
                  const _v250: any = 1;
                  acc = _v250;
                  const _v251: any = (temps[30] = _v250);
                  acc = _v251;
                  _v229 = _v251;
                }
                acc = _v229;
                _v81 = _v229;
                break _branch84;
              }
            }
            acc = _v81;
          }
          const _v252: any = (temps[16] = rt.op("+", (temps[16] ?? 0), 1));
          acc = _v252;
        }
        let _v253: any = acc;
        const _v254: any = (temps[11] ?? 0);
        acc = _v254;
        _v253 = _v254;
        if (rt.truth(_v254)) {
          const _v255: any = 5;
          acc = _v255;
          const _v256: any = 5;
          acc = _v256;
          const _v257: any = (temps[11] ?? 0);
          acc = _v257;
          const _v258: any = await rt.send(_v257, "moveTo", [_v255, _v256]);
          acc = _v258;
          _v253 = _v258;
          const _v259: any = 5;
          acc = _v259;
          const _v260: any = (temps[11] ?? 0);
          acc = _v260;
          const _v261: any = await rt.send(_v260, "nsRight", []);
          acc = _v261;
          const _v262: any = rt.op("+", ...[_v259, _v261]);
          acc = _v262;
          const _v263: any = (temps[10] ?? 0);
          acc = _v263;
          const _v264: any = await rt.send(_v263, "nsTop", []);
          acc = _v264;
          const _v265: any = (temps[10] ?? 0);
          acc = _v265;
          const _v266: any = await rt.send(_v265, "moveTo", [_v262, _v264]);
          acc = _v266;
          _v253 = _v266;
          const _v267: any = (temps[11] ?? 0);
          acc = _v267;
          const _v268: any = (temps[1] ?? 0);
          acc = _v268;
          const _v269: any = await rt.send(_v268, "add", [_v267]);
          acc = _v269;
          _v253 = _v269;
        }
        acc = _v253;
        const _v270: any = (temps[1] ?? 0);
        acc = _v270;
        const _v271: any = await rt.send(_v270, "setSize", []);
        acc = _v271;
        let _v272: any = acc;
        const _v273: any = (temps[12] ?? 0);
        acc = _v273;
        _v272 = _v273;
        if (rt.truth(_v273)) {
          const _v274: any = (temps[10] ?? 0);
          acc = _v274;
          const _v275: any = await rt.send(_v274, "nsLeft", []);
          acc = _v275;
          const _v276: any = 5;
          acc = _v276;
          const _v277: any = (temps[10] ?? 0);
          acc = _v277;
          const _v278: any = await rt.send(_v277, "nsBottom", []);
          acc = _v278;
          const _v279: any = rt.op("+", ...[_v276, _v278]);
          acc = _v279;
          const _v280: any = (temps[12] ?? 0);
          acc = _v280;
          const _v281: any = await rt.send(_v280, "moveTo", [_v275, _v279]);
          acc = _v281;
          _v272 = _v281;
          const _v282: any = (temps[12] ?? 0);
          acc = _v282;
          const _v283: any = (temps[1] ?? 0);
          acc = _v283;
          const _v284: any = await rt.send(_v283, "add", [_v282]);
          acc = _v284;
          const _v285: any = await rt.send(_v283, "setSize", []);
          acc = _v285;
          _v272 = _v285;
        }
        acc = _v272;
        let _v286: any = acc;
        const _v287: any = (temps[25] ?? 0);
        acc = _v287;
        const _v288: any = (temps[1] ?? 0);
        acc = _v288;
        const _v289: any = await rt.send(_v288, "nsRight", []);
        acc = _v289;
        const _v290: any = rt.op(">", ...[_v287, _v289]);
        acc = _v290;
        _v286 = _v290;
        if (rt.truth(_v290)) {
          const _v291: any = 5;
          acc = _v291;
          _v286 = _v291;
        } else {
          const _v292: any = (temps[1] ?? 0);
          acc = _v292;
          const _v293: any = await rt.send(_v292, "nsRight", []);
          acc = _v293;
          const _v294: any = (temps[25] ?? 0);
          acc = _v294;
          const _v295: any = rt.op("-", ...[_v293, _v294]);
          acc = _v295;
          _v286 = _v295;
        }
        acc = _v286;
        const _v296: any = (temps[27] = _v286);
        acc = _v296;
        const _v299: any = 0;
        acc = _v299;
        const _v300: any = (temps[16] = _v299);
        acc = _v300;
        _loop297: for (;;) {
          const _v301: any = (temps[16] ?? 0);
          acc = _v301;
          const _v302: any = (temps[26] ?? 0);
          acc = _v302;
          const _v303: any = rt.op("<", ...[_v301, _v302]);
          acc = _v303;
          if (!rt.truth(_v303)) break _loop297;
          _continue298: {
            const _v304: any = (temps[27] ?? 0);
            acc = _v304;
            const _v305: any = (temps[1] ?? 0);
            acc = _v305;
            const _v306: any = await rt.send(_v305, "nsBottom", []);
            acc = _v306;
            const _v307: any = (temps[16] ?? 0);
            acc = _v307;
            const _v308: any = (temps[(4 + (Number(_v307) & 65535))] ?? 0);
            acc = _v308;
            const _v309: any = await rt.send(_v308, "moveTo", [_v304, _v306]);
            acc = _v309;
            const _v310: any = (temps[16] ?? 0);
            acc = _v310;
            const _v311: any = (temps[(4 + (Number(_v310) & 65535))] ?? 0);
            acc = _v311;
            const _v312: any = (temps[1] ?? 0);
            acc = _v312;
            const _v313: any = await rt.send(_v312, "add", [_v311]);
            acc = _v313;
            const _v314: any = 5;
            acc = _v314;
            const _v315: any = (temps[16] ?? 0);
            acc = _v315;
            const _v316: any = (temps[(4 + (Number(_v315) & 65535))] ?? 0);
            acc = _v316;
            const _v317: any = await rt.send(_v316, "nsRight", []);
            acc = _v317;
            const _v318: any = rt.op("+", ...[_v314, _v317]);
            acc = _v318;
            const _v319: any = (temps[27] = _v318);
            acc = _v319;
          }
          const _v320: any = (temps[16] = rt.op("+", (temps[16] ?? 0), 1));
          acc = _v320;
        }
        const _v321: any = (temps[1] ?? 0);
        acc = _v321;
        const _v322: any = await rt.send(_v321, "setSize", []);
        acc = _v322;
        const _v323: any = await rt.send(_v321, "center", []);
        acc = _v323;
        let _v324: any = acc;
        let _v325: any = 1;
        if (rt.truth(_v325)) {
          const _v326: any = (temps[11] ?? 0);
          acc = _v326;
          _v325 = _v326;
        }
        if (rt.truth(_v325)) {
          const _v327: any = rt.ref("array", temps, 33);
          acc = _v327;
          const _v328: any = await rt.call(255, "StrLen", [_v327], this);
          acc = _v328;
          const _v329: any = rt.op("not", ...[_v328]);
          acc = _v329;
          _v325 = _v329;
        }
        acc = _v325;
        _v324 = _v325;
        if (rt.truth(_v325)) {
          const _v330: any = (temps[1] ?? 0);
          acc = _v330;
          const _v331: any = await rt.send(_v330, "nsRight", []);
          acc = _v331;
          const _v332: any = (temps[1] ?? 0);
          acc = _v332;
          const _v333: any = await rt.send(_v332, "nsLeft", []);
          acc = _v333;
          const _v334: any = rt.op("-", ...[_v331, _v333]);
          acc = _v334;
          const _v335: any = (temps[11] ?? 0);
          acc = _v335;
          const _v336: any = await rt.send(_v335, "nsRight", []);
          acc = _v336;
          const _v337: any = (temps[11] ?? 0);
          acc = _v337;
          const _v338: any = await rt.send(_v337, "nsLeft", []);
          acc = _v338;
          const _v339: any = rt.op("-", ...[_v336, _v338]);
          acc = _v339;
          const _v340: any = rt.op("-", ...[_v334, _v339]);
          acc = _v340;
          const _v341: any = 2;
          acc = _v341;
          const _v342: any = rt.op("/", ...[_v340, _v341]);
          acc = _v342;
          const _v343: any = 5;
          acc = _v343;
          const _v344: any = (temps[11] ?? 0);
          acc = _v344;
          const _v345: any = await rt.send(_v344, "moveTo", [_v342, _v343]);
          acc = _v345;
          _v324 = _v345;
        }
        acc = _v324;
        let _v346: any = acc;
        const _v347: any = -1;
        acc = _v347;
        const _v348: any = (temps[17] ?? 0);
        acc = _v348;
        const _v349: any = rt.op("==", ...[_v347, _v348]);
        acc = _v349;
        _v346 = _v349;
        if (rt.truth(_v349)) {
          const _v350: any = (temps[1] ?? 0);
          acc = _v350;
          const _v351: any = await rt.send(_v350, "nsLeft", []);
          acc = _v351;
          _v346 = _v351;
        } else {
          const _v352: any = (temps[17] ?? 0);
          acc = _v352;
          _v346 = _v352;
        }
        acc = _v346;
        let _v353: any = acc;
        const _v354: any = -1;
        acc = _v354;
        const _v355: any = (temps[18] ?? 0);
        acc = _v355;
        const _v356: any = rt.op("==", ...[_v354, _v355]);
        acc = _v356;
        _v353 = _v356;
        if (rt.truth(_v356)) {
          const _v357: any = (temps[1] ?? 0);
          acc = _v357;
          const _v358: any = await rt.send(_v357, "nsTop", []);
          acc = _v358;
          _v353 = _v358;
        } else {
          const _v359: any = (temps[18] ?? 0);
          acc = _v359;
          _v353 = _v359;
        }
        acc = _v353;
        const _v360: any = (temps[1] ?? 0);
        acc = _v360;
        const _v361: any = await rt.send(_v360, "moveTo", [_v346, _v353]);
        acc = _v361;
        let _v362: any = acc;
        const _v363: any = (temps[1] ?? 0);
        acc = _v363;
        const _v364: any = await rt.send(_v363, "text", []);
        acc = _v364;
        _v362 = _v364;
        if (rt.truth(_v364)) {
          const _v365: any = 4;
          acc = _v365;
          _v362 = _v365;
        } else {
          const _v366: any = 0;
          acc = _v366;
          _v362 = _v366;
        }
        acc = _v362;
        let _v367: any = acc;
        const _v368: any = (temps[20] ?? 0);
        acc = _v368;
        _v367 = _v368;
        if (rt.truth(_v368)) {
          const _v369: any = 15;
          acc = _v369;
          _v367 = _v369;
        } else {
          const _v370: any = -1;
          acc = _v370;
          _v367 = _v370;
        }
        acc = _v367;
        const _v371: any = (temps[28] ?? 0);
        acc = _v371;
        const _v372: any = (temps[29] ?? 0);
        acc = _v372;
        const _v373: any = (temps[13] ?? 0);
        acc = _v373;
        const _v374: any = (temps[14] ?? 0);
        acc = _v374;
        const _v375: any = (temps[1] ?? 0);
        acc = _v375;
        const _v376: any = await rt.send(_v375, "open", [_v362, _v367, _v371, _v372, _v373, _v374]);
        acc = _v376;
        let _v377: any = acc;
        const _v378: any = (temps[20] ?? 0);
        acc = _v378;
        _v377 = _v378;
        if (rt.truth(_v378)) {
          const _v379: any = await rt.call(255, "GetPort", [], this);
          acc = _v379;
          const _v380: any = rt.setLocal(255, 0, _v379);
          acc = _v380;
          _v377 = _v380;
          const _v381: any = (temps[22] ?? 0);
          acc = _v381;
          const _v382: any = await rt.call(255, "SetPort", [_v381], this);
          acc = _v382;
          _v377 = _v382;
          const _v383: any = (temps[20] ?? 0);
          acc = _v383;
          const _v384: any = rt.setGlobal(25, _v383);
          acc = _v384;
          return _v384;
          _v377 = acc;
        }
        acc = _v377;
        let _v385: any = acc;
        let _v386: any = 1;
        if (rt.truth(_v386)) {
          const _v387: any = 158;
          acc = _v387;
          const _v388: any = 1;
          acc = _v388;
          const _v389: any = (temps[1] ?? 0);
          acc = _v389;
          const _v390: any = await rt.send(_v389, "firstTrue", [_v387, _v388]);
          acc = _v390;
          const _v391: any = (temps[21] = _v390);
          acc = _v391;
          _v386 = _v391;
        }
        if (rt.truth(_v386)) {
          const _v392: any = 158;
          acc = _v392;
          const _v393: any = 2;
          acc = _v393;
          const _v394: any = (temps[1] ?? 0);
          acc = _v394;
          const _v395: any = await rt.send(_v394, "firstTrue", [_v392, _v393]);
          acc = _v395;
          const _v396: any = rt.op("not", ...[_v395]);
          acc = _v396;
          _v386 = _v396;
        }
        acc = _v386;
        _v385 = _v386;
        if (rt.truth(_v386)) {
          const _v397: any = (temps[21] ?? 0);
          acc = _v397;
          const _v398: any = await rt.send(_v397, "state", []);
          acc = _v398;
          const _v399: any = 2;
          acc = _v399;
          const _v400: any = rt.op("|", ...[_v398, _v399]);
          acc = _v400;
          const _v401: any = (temps[21] ?? 0);
          acc = _v401;
          const _v402: any = await rt.send(_v401, "state", [_v400]);
          acc = _v402;
          _v385 = _v402;
        }
        acc = _v385;
        let _v403: any = acc;
        const _v404: any = (temps[30] ?? 0);
        acc = _v404;
        _v403 = _v404;
        if (rt.truth(_v404)) {
          const _v405: any = (temps[1] ?? 0);
          acc = _v405;
          const _v406: any = (temps[15] ?? 0);
          acc = _v406;
          const _v407: any = 0;
          acc = _v407;
          const _v408: any = (temps[29] ?? 0);
          acc = _v408;
          const _v409: any = await rt.call(0, "proc0_9", [_v405, _v406, _v407, _v408], this);
          acc = _v409;
          _v403 = _v409;
          const _v410: any = (temps[15] ?? 0);
          acc = _v410;
          const _v411: any = rt.object(891, "KeyMouse");
          acc = _v411;
          const _v412: any = await rt.send(_v411, "setList", [_v410]);
          acc = _v412;
          _v403 = _v412;
        }
        acc = _v403;
        let _v413: any = acc;
        const _v414: any = (temps[21] ?? 0);
        acc = _v414;
        const _v415: any = (temps[1] ?? 0);
        acc = _v415;
        const _v416: any = await rt.send(_v415, "doit", [_v414]);
        acc = _v416;
        const _v417: any = (temps[0] = _v416);
        acc = _v417;
        const _v418: any = -1;
        acc = _v418;
        const _v419: any = rt.op("==", ...[_v417, _v418]);
        acc = _v419;
        _v413 = _v419;
        if (rt.truth(_v419)) {
          const _v420: any = 0;
          acc = _v420;
          const _v421: any = (temps[0] = _v420);
          acc = _v421;
          _v413 = _v421;
        }
        acc = _v413;
        let _v422: any = acc;
        const _v423: any = (temps[1] ?? 0);
        acc = _v423;
        const _v424: any = await rt.send(_v423, "theItem", []);
        acc = _v424;
        const _v425: any = rt.op("not", ...[_v424]);
        acc = _v425;
        _v422 = _v425;
        if (rt.truth(_v425)) {
          const _v426: any = 1;
          acc = _v426;
          const _v427: any = (temps[0] = _v426);
          acc = _v427;
          _v422 = _v427;
        }
        acc = _v422;
        const _v430: any = 0;
        acc = _v430;
        const _v431: any = (temps[16] = _v430);
        acc = _v431;
        _loop428: for (;;) {
          const _v432: any = (temps[16] ?? 0);
          acc = _v432;
          const _v433: any = (temps[26] ?? 0);
          acc = _v433;
          const _v434: any = rt.op("<", ...[_v432, _v433]);
          acc = _v434;
          if (!rt.truth(_v434)) break _loop428;
          _continue429: {
            let _v435: any = acc;
            const _v436: any = (temps[0] ?? 0);
            acc = _v436;
            const _v437: any = (temps[16] ?? 0);
            acc = _v437;
            const _v438: any = (temps[(4 + (Number(_v437) & 65535))] ?? 0);
            acc = _v438;
            const _v439: any = rt.op("==", ...[_v436, _v438]);
            acc = _v439;
            _v435 = _v439;
            if (rt.truth(_v439)) {
              const _v440: any = (temps[0] ?? 0);
              acc = _v440;
              const _v441: any = await rt.send(_v440, "value", []);
              acc = _v441;
              const _v442: any = (temps[0] = _v441);
              acc = _v442;
              _v435 = _v442;
              break _loop428;
              _v435 = acc;
            }
            acc = _v435;
          }
          const _v443: any = (temps[16] = rt.op("+", (temps[16] ?? 0), 1));
          acc = _v443;
        }
        let _v444: any = acc;
        const _v445: any = (temps[1] ?? 0);
        acc = _v445;
        const _v446: any = await rt.send(_v445, "standard", []);
        acc = _v446;
        const _v447: any = rt.op("not", ...[_v446]);
        acc = _v447;
        _v444 = _v447;
        if (rt.truth(_v447)) {
          const _v448: any = (temps[15] ?? 0);
          acc = _v448;
          const _v449: any = await rt.send(_v448, "release", []);
          acc = _v449;
          const _v450: any = await rt.send(_v448, "dispose", []);
          acc = _v450;
          _v444 = _v450;
          const _v451: any = (temps[3] ?? 0);
          acc = _v451;
          const _v452: any = (temps[2] ?? 0);
          acc = _v452;
          const _v453: any = rt.object(891, "KeyMouse");
          acc = _v453;
          const _v454: any = await rt.send(_v453, "setList", [_v451]);
          acc = _v454;
          const _v455: any = await rt.send(_v453, "curItem", [_v452]);
          acc = _v455;
          _v444 = _v455;
          let _v456: any = acc;
          const _v457: any = rt.global(447);
          acc = _v457;
          _v456 = _v457;
          if (rt.truth(_v457)) {
            const _v458: any = (temps[2] ?? 0);
            acc = _v458;
            const _v459: any = rt.object(891, "KeyMouse");
            acc = _v459;
            const _v460: any = await rt.send(_v459, "setCursor", [_v458]);
            acc = _v460;
            _v456 = _v460;
          }
          acc = _v456;
          _v444 = _v456;
        }
        acc = _v444;
        const _v461: any = (temps[1] ?? 0);
        acc = _v461;
        const _v462: any = await rt.send(_v461, "dispose", []);
        acc = _v462;
        const _v463: any = (temps[22] ?? 0);
        acc = _v463;
        const _v464: any = await rt.call(255, "SetPort", [_v463], this);
        acc = _v464;
        const _v465: any = 0;
        acc = _v465;
        const _v466: any = rt.setGlobal(506, _v465);
        acc = _v466;
        const _v467: any = (temps[0] ?? 0);
        acc = _v467;
        return _v467;
        return acc;
      },
      // SCI Interface.sc: GetNumber
      "GetNumber": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const _v1: any = 0;
        acc = _v1;
        const _v2: any = (temps[0] = _v1);
        acc = _v2;
        let _v3: any = acc;
        const _v4: any = argc;
        acc = _v4;
        const _v5: any = 1;
        acc = _v5;
        const _v6: any = rt.op(">", ...[_v4, _v5]);
        acc = _v6;
        _v3 = _v6;
        if (rt.truth(_v6)) {
          const _v7: any = rt.ref("array", temps, 0);
          acc = _v7;
          const _v8: any = 255;
          acc = _v8;
          const _v9: any = 0;
          acc = _v9;
          const _v10: any = (args[1] ?? 0);
          acc = _v10;
          const _v11: any = await rt.call(255, "Format", [_v7, _v8, _v9, _v10], this);
          acc = _v11;
          _v3 = _v11;
        }
        acc = _v3;
        let _v12: any = acc;
        const _v13: any = rt.ref("array", temps, 0);
        acc = _v13;
        const _v14: any = 5;
        acc = _v14;
        const _v15: any = (args[0] ?? 0);
        acc = _v15;
        const _v16: any = await rt.call(255, "GetInput", [_v13, _v14, _v15], this);
        acc = _v16;
        _v12 = _v16;
        if (rt.truth(_v16)) {
          const _v17: any = rt.ref("array", temps, 0);
          acc = _v17;
          const _v18: any = await rt.call(255, "ReadNumber", [_v17], this);
          acc = _v18;
          _v12 = _v18;
        } else {
          const _v19: any = -1;
          acc = _v19;
          _v12 = _v19;
        }
        acc = _v12;
        return _v12;
        return acc;
      },
      // SCI Interface.sc: Printf
      "Printf": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const _v1: any = rt.ref("array", temps, 0);
        acc = _v1;
        const _v2: any = args.slice(0, argc);
        acc = _v2;
        const _v3: any = await rt.call(255, "Format", [_v1, ..._v2], this);
        acc = _v3;
        const _v4: any = rt.ref("array", temps, 0);
        acc = _v4;
        const _v5: any = await rt.call(255, "Print", [_v4], this);
        acc = _v5;
        return acc;
      },
    },
    exports: {"0": "Print", "1": "ShowView", "2": "GetInput", "3": "GetNumber", "4": "Printf", "6": "StillDown"},
  });
}
