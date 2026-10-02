// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/WButton.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 73716eac764fe5db0a7593a78912d31f451cba5c7338abfc824efd7ab2890838
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(104, {
    name: "WButton",
    uses: [0, 103, 109, 255, 967, 999],
    locals: [],
    objects: [
      {
        name: "WButton",
        className: "DButton",
        parent: {"script": 255, "name": "DButton"},
        isClass: true,
        properties: {"type": 0, "state": 1, "theFont": 10, "textColor": 0, "backColor": -1, "shadowColor": 6, "flashColor": 100, "width": 0},
        methods: {
          // SCI WButton.sc: WButton.select
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
            return acc;
          },
          // SCI WButton.sc: WButton.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "setTextSize", []);
            acc = _v2;
            return acc;
          },
          // SCI WButton.sc: WButton.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "setTextSize", []);
            acc = _v2;
            const _v3: any = await rt.superSend(this, {"script": 104, "name": "WButton"}, "draw", []);
            acc = _v3;
            let _v4: any = acc;
            let _v5: any = 1;
            if (rt.truth(_v5)) {
              const _v6: any = rt.global(535);
              acc = _v6;
              _v5 = _v6;
            }
            if (rt.truth(_v5)) {
              const _v7: any = rt.get(this, "shadowColor");
              acc = _v7;
              _v5 = _v7;
            }
            acc = _v5;
            _v4 = _v5;
            if (rt.truth(_v5)) {
              const _v8: any = rt.get(this, "nsLeft");
              acc = _v8;
              const _v9: any = 1;
              acc = _v9;
              const _v10: any = rt.op("+", ...[_v8, _v9]);
              acc = _v10;
              const _v11: any = rt.get(this, "nsTop");
              acc = _v11;
              const _v12: any = 1;
              acc = _v12;
              const _v13: any = rt.op("+", ...[_v11, _v12]);
              acc = _v13;
              let _v14: any = acc;
              const _v15: any = rt.global(535);
              acc = _v15;
              _v14 = _v15;
              if (rt.truth(_v15)) {
                const _v16: any = rt.get(this, "shadowColor");
                acc = _v16;
                _v14 = _v16;
              } else {
                const _v17: any = 7;
                acc = _v17;
                _v14 = _v17;
              }
              acc = _v14;
              const _v18: any = 1;
              acc = _v18;
              const _v19: any = this;
              acc = _v19;
              const _v20: any = await rt.send(_v19, "doDisplay", [_v10, _v13, _v14, _v18]);
              acc = _v20;
              _v4 = _v20;
            }
            acc = _v4;
            const _v21: any = rt.get(this, "nsLeft");
            acc = _v21;
            const _v22: any = rt.get(this, "nsTop");
            acc = _v22;
            let _v23: any = acc;
            const _v24: any = rt.global(535);
            acc = _v24;
            _v23 = _v24;
            if (rt.truth(_v24)) {
              const _v25: any = rt.get(this, "textColor");
              acc = _v25;
              _v23 = _v25;
            } else {
              const _v26: any = 0;
              acc = _v26;
              _v23 = _v26;
            }
            acc = _v23;
            const _v27: any = 0;
            acc = _v27;
            const _v28: any = this;
            acc = _v28;
            const _v29: any = await rt.send(_v28, "doDisplay", [_v21, _v22, _v23, _v27]);
            acc = _v29;
            return acc;
          },
          // SCI WButton.sc: WButton.hilite
          "hilite": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "setPort", []);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(535);
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = rt.get(this, "flashColor");
              acc = _v5;
              _v3 = _v5;
            } else {
              const _v6: any = 12;
              acc = _v6;
              _v3 = _v6;
            }
            acc = _v3;
            const _v7: any = this;
            acc = _v7;
            const _v8: any = await rt.send(_v7, "hiliteControl", [_v3]);
            acc = _v8;
            let _v9: any = acc;
            const _v10: any = rt.global(525);
            acc = _v10;
            _v9 = _v10;
            if (rt.truth(_v10)) {
              const _v11: any = 5;
              acc = _v11;
              _v9 = _v11;
            } else {
              const _v12: any = 25;
              acc = _v12;
              const _v13: any = (args[0] ?? 0);
              acc = _v13;
              const _v14: any = rt.op("/", ...[_v12, _v13]);
              acc = _v14;
              _v9 = _v14;
            }
            acc = _v9;
            const _v15: any = await rt.call(104, "Wait", [_v9], this);
            acc = _v15;
            let _v16: any = acc;
            const _v17: any = rt.global(535);
            acc = _v17;
            _v16 = _v17;
            if (rt.truth(_v17)) {
              const _v18: any = rt.get(this, "textColor");
              acc = _v18;
              _v16 = _v18;
            } else {
              const _v19: any = 0;
              acc = _v19;
              _v16 = _v19;
            }
            acc = _v16;
            const _v20: any = this;
            acc = _v20;
            const _v21: any = await rt.send(_v20, "hiliteControl", [_v16]);
            acc = _v21;
            const _v22: any = this;
            acc = _v22;
            const _v23: any = await rt.send(_v22, "resetPort", []);
            acc = _v23;
            return acc;
          },
          // SCI WButton.sc: WButton.track
          "track": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = (temps[1] = _v1);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = 1;
            acc = _v4;
            const _v5: any = (args[0] ?? 0);
            acc = _v5;
            const _v6: any = await rt.send(_v5, "type", []);
            acc = _v6;
            const _v7: any = rt.op("==", ...[_v4, _v6]);
            acc = _v7;
            _v3 = _v7;
            if (rt.truth(_v7)) {
              const _v8: any = this;
              acc = _v8;
              const _v9: any = await rt.send(_v8, "setPort", []);
              acc = _v9;
              _v3 = _v9;
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
                  const _v16: any = rt.get(this, "client");
                  acc = _v16;
                  const _v17: any = await rt.send(_v16, "window", []);
                  acc = _v17;
                  const _v18: any = await rt.send(_v17, "window", []);
                  acc = _v18;
                  const _v19: any = (args[0] ?? 0);
                  acc = _v19;
                  const _v20: any = await rt.send(_v19, "localize", [_v18]);
                  acc = _v20;
                  let _v21: any = acc;
                  const _v22: any = (args[0] ?? 0);
                  acc = _v22;
                  const _v23: any = this;
                  acc = _v23;
                  const _v24: any = await rt.send(_v23, "check", [_v22]);
                  acc = _v24;
                  const _v25: any = (temps[0] = _v24);
                  acc = _v25;
                  const _v26: any = (temps[1] ?? 0);
                  acc = _v26;
                  const _v27: any = rt.op("!=", ...[_v25, _v26]);
                  acc = _v27;
                  _v21 = _v27;
                  if (rt.truth(_v27)) {
                    let _v28: any = acc;
                    _branch29: {
                      const _v30: any = (temps[0] ?? 0);
                      acc = _v30;
                      _v28 = _v30;
                      acc = _v28;
                      if (rt.truth(_v28)) {
                        let _v31: any = acc;
                        const _v32: any = rt.global(535);
                        acc = _v32;
                        _v31 = _v32;
                        if (rt.truth(_v32)) {
                          const _v33: any = rt.get(this, "flashColor");
                          acc = _v33;
                          _v31 = _v33;
                        } else {
                          const _v34: any = 12;
                          acc = _v34;
                          _v31 = _v34;
                        }
                        acc = _v31;
                        _v28 = _v31;
                        break _branch29;
                      }
                      const _v35: any = rt.global(535);
                      acc = _v35;
                      _v28 = _v35;
                      acc = _v28;
                      if (rt.truth(_v28)) {
                        const _v36: any = rt.get(this, "textColor");
                        acc = _v36;
                        _v28 = _v36;
                        break _branch29;
                      }
                      const _v37: any = 0;
                      acc = _v37;
                      _v28 = _v37;
                      break _branch29;
                    }
                    acc = _v28;
                    const _v38: any = this;
                    acc = _v38;
                    const _v39: any = await rt.send(_v38, "hiliteControl", [_v28]);
                    acc = _v39;
                    _v21 = _v39;
                  }
                  acc = _v21;
                  const _v40: any = (temps[0] ?? 0);
                  acc = _v40;
                  const _v41: any = (temps[1] = _v40);
                  acc = _v41;
                  const _v42: any = (args[0] ?? 0);
                  acc = _v42;
                  const _v43: any = await rt.send(_v42, "dispose", []);
                  acc = _v43;
                  const _v44: any = await rt.call(255, "StillDown", [], this);
                  acc = _v44;
                  const _v45: any = rt.op("not", ...[_v44]);
                  acc = _v45;
                  if (rt.truth(_v45)) break _loop10;
                }
              }
              _v3 = acc;
              let _v46: any = acc;
              const _v47: any = (temps[0] ?? 0);
              acc = _v47;
              _v46 = _v47;
              if (rt.truth(_v47)) {
                let _v48: any = acc;
                const _v49: any = rt.global(535);
                acc = _v49;
                _v48 = _v49;
                if (rt.truth(_v49)) {
                  const _v50: any = rt.get(this, "textColor");
                  acc = _v50;
                  _v48 = _v50;
                } else {
                  const _v51: any = 0;
                  acc = _v51;
                  _v48 = _v51;
                }
                acc = _v48;
                const _v52: any = this;
                acc = _v52;
                const _v53: any = await rt.send(_v52, "hiliteControl", [_v48]);
                acc = _v53;
                _v46 = _v53;
              }
              acc = _v46;
              _v3 = _v46;
              const _v54: any = this;
              acc = _v54;
              const _v55: any = await rt.send(_v54, "resetPort", []);
              acc = _v55;
              _v3 = _v55;
              const _v56: any = (temps[0] ?? 0);
              acc = _v56;
              return _v56;
              _v3 = acc;
            } else {
              let _v57: any = acc;
              let _v58: any = 1;
              if (rt.truth(_v58)) {
                const _v59: any = (args[0] ?? 0);
                acc = _v59;
                const _v60: any = await rt.send(_v59, "type", []);
                acc = _v60;
                const _v61: any = 4;
                acc = _v61;
                const _v62: any = rt.op("==", ...[_v60, _v61]);
                acc = _v62;
                _v58 = _v62;
              }
              if (rt.truth(_v58)) {
                const _v63: any = (args[0] ?? 0);
                acc = _v63;
                const _v64: any = await rt.send(_v63, "message", []);
                acc = _v64;
                const _v65: any = rt.get(this, "key");
                acc = _v65;
                const _v66: any = rt.op("==", ...[_v64, _v65]);
                acc = _v66;
                _v58 = _v66;
              }
              acc = _v58;
              _v57 = _v58;
              if (rt.truth(_v58)) {
                const _v67: any = 1;
                acc = _v67;
                const _v68: any = this;
                acc = _v68;
                const _v69: any = await rt.send(_v68, "hilite", [_v67]);
                acc = _v69;
                _v57 = _v69;
              }
              acc = _v57;
              _v3 = _v57;
              const _v70: any = this;
              acc = _v70;
              return _v70;
              _v3 = acc;
            }
            acc = _v3;
            return acc;
          },
          // SCI WButton.sc: WButton.hiliteControl
          "hiliteControl": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const _v1: any = rt.ref("array", temps, 0);
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "doFormat", [_v1]);
            acc = _v3;
            const _v4: any = rt.ref("array", temps, 0);
            acc = _v4;
            const _v5: any = 100;
            acc = _v5;
            const _v6: any = rt.get(this, "nsLeft");
            acc = _v6;
            const _v7: any = rt.get(this, "nsTop");
            acc = _v7;
            const _v8: any = 102;
            acc = _v8;
            const _v9: any = (args[0] ?? 0);
            acc = _v9;
            const _v10: any = 103;
            acc = _v10;
            const _v11: any = rt.get(this, "backColor");
            acc = _v11;
            const _v12: any = 105;
            acc = _v12;
            const _v13: any = rt.get(this, "theFont");
            acc = _v13;
            const _v14: any = await rt.call(104, "Display", [_v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13], this);
            acc = _v14;
            return acc;
          },
          // SCI WButton.sc: WButton.doFormat
          "doFormat": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = 104;
            acc = _v2;
            const _v3: any = 0;
            acc = _v3;
            const _v4: any = rt.get(this, "text");
            acc = _v4;
            const _v5: any = await rt.call(104, "Format", [_v1, _v2, _v3, _v4], this);
            acc = _v5;
            return acc;
          },
          // SCI WButton.sc: WButton.setTextSize
          "setTextSize": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const _v1: any = rt.ref("array", temps, 0);
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "doFormat", [_v1]);
            acc = _v3;
            let _v4: any = acc;
            let _v5: any = 1;
            if (rt.truth(_v5)) {
              const _v6: any = (temps[0] ?? 0);
              acc = _v6;
              _v5 = _v6;
            }
            if (rt.truth(_v5)) {
              const _v7: any = rt.ref("array", temps, 0);
              acc = _v7;
              const _v8: any = await rt.call(104, "StrLen", [_v7], this);
              acc = _v8;
              _v5 = _v8;
            }
            acc = _v5;
            _v4 = _v5;
            if (rt.truth(_v5)) {
              const _v9: any = 0;
              acc = _v9;
              const _v10: any = rt.ref("array", temps, (40 + (Number(_v9) & 65535)));
              acc = _v10;
              const _v11: any = rt.ref("array", temps, 0);
              acc = _v11;
              const _v12: any = rt.get(this, "theFont");
              acc = _v12;
              const _v13: any = 0;
              acc = _v13;
              const _v14: any = await rt.call(104, "TextSize", [_v10, _v11, _v12, _v13], this);
              acc = _v14;
              _v4 = _v14;
              const _v15: any = 2;
              acc = _v15;
              const _v16: any = (temps[(40 + (Number(_v15) & 65535))] ?? 0);
              acc = _v16;
              const _v17: any = rt.get(this, "nsTop");
              acc = _v17;
              const _v18: any = rt.get(this, "shadowColor");
              acc = _v18;
              const _v19: any = 0;
              acc = _v19;
              const _v20: any = rt.op("!=", ...[_v18, _v19]);
              acc = _v20;
              const _v21: any = rt.op("+", ...[_v16, _v17, _v20]);
              acc = _v21;
              const _v22: any = rt.set(this, "nsBottom", _v21);
              acc = _v22;
              _v4 = _v22;
              const _v23: any = 3;
              acc = _v23;
              const _v24: any = (temps[(40 + (Number(_v23) & 65535))] ?? 0);
              acc = _v24;
              const _v25: any = rt.get(this, "nsLeft");
              acc = _v25;
              const _v26: any = rt.get(this, "shadowColor");
              acc = _v26;
              const _v27: any = 0;
              acc = _v27;
              const _v28: any = rt.op("!=", ...[_v26, _v27]);
              acc = _v28;
              const _v29: any = rt.op("+", ...[_v24, _v25, _v28]);
              acc = _v29;
              const _v30: any = rt.set(this, "nsRight", _v29);
              acc = _v30;
              _v4 = _v30;
            }
            acc = _v4;
            return acc;
          },
          // SCI WButton.sc: WButton.doDisplay
          "doDisplay": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const _v1: any = rt.ref("array", temps, 1);
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "doFormat", [_v1]);
            acc = _v3;
            const _v4: any = this;
            acc = _v4;
            const _v5: any = await rt.send(_v4, "setPort", []);
            acc = _v5;
            const _v6: any = rt.ref("array", temps, 1);
            acc = _v6;
            const _v7: any = 100;
            acc = _v7;
            const _v8: any = (args[0] ?? 0);
            acc = _v8;
            const _v9: any = (args[1] ?? 0);
            acc = _v9;
            const _v10: any = 102;
            acc = _v10;
            const _v11: any = (args[2] ?? 0);
            acc = _v11;
            const _v12: any = 103;
            acc = _v12;
            let _v13: any = acc;
            const _v14: any = rt.global(535);
            acc = _v14;
            _v13 = _v14;
            if (rt.truth(_v14)) {
              const _v15: any = rt.get(this, "backColor");
              acc = _v15;
              _v13 = _v15;
            } else {
              const _v16: any = -1;
              acc = _v16;
              _v13 = _v16;
            }
            acc = _v13;
            const _v17: any = 105;
            acc = _v17;
            const _v18: any = rt.get(this, "theFont");
            acc = _v18;
            const _v19: any = await rt.call(104, "Display", [_v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v17, _v18], this);
            acc = _v19;
            const _v20: any = this;
            acc = _v20;
            const _v21: any = await rt.send(_v20, "resetPort", []);
            acc = _v21;
            return acc;
          },
          // SCI WButton.sc: WButton.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = 23;
            acc = _v1;
            const _v2: any = rt.global(476);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "play", [_v1]);
            acc = _v3;
            const _v4: any = await rt.superSend(this, {"script": 104, "name": "WButton"}, "doit", []);
            acc = _v4;
            const _v5: any = (temps[0] = _v4);
            acc = _v5;
            let _v6: any = acc;
            const _v7: any = rt.global(413);
            acc = _v7;
            _v6 = _v7;
            if (rt.truth(_v7)) {
              const _v8: any = rt.global(413);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "init", []);
              acc = _v9;
              _v6 = _v9;
            }
            acc = _v6;
            const _v10: any = (temps[0] ?? 0);
            acc = _v10;
            return _v10;
            return acc;
          },
        },
      },
      {
        name: "CostDItem",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: true,
        properties: {"nsLeft": 4, "price": 0, "indexNum": 0, "typeOfGoods": 0, "units": 1, "theSign": -1, "basePrice": 0, "fixedPrice": 0, "theDurable": 0, "visitTime": 0, "celNum": 0},
        methods: {
          // SCI WButton.sc: CostDItem.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 104, "name": "CostDItem"}, "init", []);
            acc = _v1;
            let _v2: any = acc;
            let _v3: any = 1;
            if (rt.truth(_v3)) {
              const _v4: any = argc;
              acc = _v4;
              _v3 = _v4;
            }
            if (rt.truth(_v3)) {
              const _v5: any = (args[0] ?? 0);
              acc = _v5;
              const _v6: any = 1;
              acc = _v6;
              const _v7: any = rt.op("!=", ...[_v5, _v6]);
              acc = _v7;
              _v3 = _v7;
            }
            acc = _v3;
            _v2 = _v3;
            if (rt.truth(_v3)) {
              const _v8: any = (args[0] ?? 0);
              acc = _v8;
              _v2 = _v8;
            } else {
              const _v9: any = rt.global(309);
              acc = _v9;
              _v2 = _v9;
            }
            acc = _v2;
            const _v10: any = (temps[0] = _v2);
            acc = _v10;
            let _v11: any = acc;
            const _v12: any = rt.get(this, "fixedPrice");
            acc = _v12;
            const _v13: any = rt.op("not", ...[_v12]);
            acc = _v13;
            _v11 = _v13;
            if (rt.truth(_v13)) {
              const _v14: any = (temps[0] ?? 0);
              acc = _v14;
              const _v15: any = rt.get(this, "basePrice");
              acc = _v15;
              const _v16: any = await rt.call(109, "proc109_0", [_v14, _v15], this);
              acc = _v16;
              const _v17: any = rt.set(this, "price", _v16);
              acc = _v17;
              _v11 = _v17;
            }
            acc = _v11;
            return acc;
          },
          // SCI WButton.sc: CostDItem.doFormat
          "doFormat": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "price");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              let _v3: any = acc;
              const _v4: any = rt.get(this, "price");
              acc = _v4;
              const _v5: any = 100;
              acc = _v5;
              const _v6: any = rt.op("<", ...[_v4, _v5]);
              acc = _v6;
              _v3 = _v6;
              if (rt.truth(_v6)) {
                const _v7: any = (args[0] ?? 0);
                acc = _v7;
                const _v8: any = 104;
                acc = _v8;
                const _v9: any = 1;
                acc = _v9;
                const _v10: any = rt.get(this, "text");
                acc = _v10;
                const _v11: any = rt.get(this, "price");
                acc = _v11;
                const _v12: any = await rt.call(104, "Format", [_v7, _v8, _v9, _v10, _v11], this);
                acc = _v12;
                _v3 = _v12;
              } else {
                const _v13: any = (args[0] ?? 0);
                acc = _v13;
                const _v14: any = 104;
                acc = _v14;
                const _v15: any = 2;
                acc = _v15;
                const _v16: any = rt.get(this, "text");
                acc = _v16;
                const _v17: any = rt.get(this, "price");
                acc = _v17;
                const _v18: any = await rt.call(104, "Format", [_v13, _v14, _v15, _v16, _v17], this);
                acc = _v18;
                _v3 = _v18;
              }
              acc = _v3;
              _v1 = _v3;
            } else {
              const _v19: any = (args[0] ?? 0);
              acc = _v19;
              const _v20: any = await rt.superSend(this, {"script": 104, "name": "CostDItem"}, "doFormat", [_v19]);
              acc = _v20;
              _v1 = _v20;
            }
            acc = _v1;
            return acc;
          },
          // SCI WButton.sc: CostDItem.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = rt.global(502);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "aTimeClock", []);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = 0;
              acc = _v4;
              const _v5: any = 0;
              acc = _v5;
              const _v6: any = rt.global(502);
              acc = _v6;
              const _v7: any = await rt.send(_v6, "aTimeClock", []);
              acc = _v7;
              const _v8: any = await rt.send(_v7, "cel", [_v4]);
              acc = _v8;
              const _v9: any = await rt.send(_v7, "setCycle", [_v5]);
              acc = _v9;
              _v1 = _v9;
            }
            acc = _v1;
            let _v10: any = acc;
            const _v11: any = await rt.call(0, "proc0_11", [], this);
            acc = _v11;
            const _v12: any = rt.get(this, "price");
            acc = _v12;
            const _v13: any = rt.op(">=", ...[_v11, _v12]);
            acc = _v13;
            const _v14: any = rt.setGlobal(416, _v13);
            acc = _v14;
            _v10 = _v14;
            if (rt.truth(_v14)) {
              const _v15: any = 0;
              acc = _v15;
              const _v16: any = rt.setGlobal(418, _v15);
              acc = _v16;
              _v10 = _v16;
              let _v17: any = acc;
              const _v18: any = rt.get(this, "typeOfGoods");
              acc = _v18;
              _branch19: {
                const _v20: any = 1;
                acc = _v20;
                _v17 = rt.op("==", _v18, _v20);
                acc = _v17;
                if (rt.truth(_v17)) {
                  const _v21: any = rt.get(this, "indexNum");
                  acc = _v21;
                  const _v22: any = rt.get(this, "units");
                  acc = _v22;
                  const _v23: any = rt.global(302);
                  acc = _v23;
                  const _v24: any = await rt.send(_v23, "consumables", []);
                  acc = _v24;
                  const _v25: any = await rt.send(_v24, "recieve", [_v21, _v22]);
                  acc = _v25;
                  const _v26: any = rt.setGlobal(418, _v25);
                  acc = _v26;
                  _v17 = _v26;
                  break _branch19;
                }
                const _v27: any = 0;
                acc = _v27;
                _v17 = rt.op("==", _v18, _v27);
                acc = _v17;
                if (rt.truth(_v17)) {
                  const _v28: any = rt.get(this, "indexNum");
                  acc = _v28;
                  const _v29: any = rt.get(this, "units");
                  acc = _v29;
                  const _v30: any = rt.global(302);
                  acc = _v30;
                  const _v31: any = await rt.send(_v30, "durables", []);
                  acc = _v31;
                  const _v32: any = await rt.send(_v31, "recieve", [_v28, _v29]);
                  acc = _v32;
                  const _v33: any = rt.setGlobal(418, _v32);
                  acc = _v33;
                  _v17 = _v33;
                  break _branch19;
                }
                const _v34: any = 2;
                acc = _v34;
                _v17 = rt.op("==", _v18, _v34);
                acc = _v17;
                if (rt.truth(_v17)) {
                  const _v35: any = rt.get(this, "indexNum");
                  acc = _v35;
                  const _v36: any = rt.get(this, "units");
                  acc = _v36;
                  const _v37: any = rt.global(302);
                  acc = _v37;
                  const _v38: any = await rt.send(_v37, "education", []);
                  acc = _v38;
                  const _v39: any = await rt.send(_v38, "recieve", [_v35, _v36]);
                  acc = _v39;
                  const _v40: any = rt.setGlobal(418, _v39);
                  acc = _v40;
                  _v17 = _v40;
                  let _v41: any = acc;
                  const _v42: any = rt.global(418);
                  acc = _v42;
                  const _v43: any = await rt.send(_v42, "quantity", []);
                  acc = _v43;
                  const _v44: any = rt.global(418);
                  acc = _v44;
                  const _v45: any = await rt.send(_v44, "unitsToGraduate", []);
                  acc = _v45;
                  const _v46: any = rt.global(302);
                  acc = _v46;
                  const _v47: any = await rt.send(_v46, "extraCredits", []);
                  acc = _v47;
                  const _v48: any = rt.op("-", ...[_v45, _v47]);
                  acc = _v48;
                  const _v49: any = rt.op(">=", ...[_v43, _v48]);
                  acc = _v49;
                  _v41 = _v49;
                  if (rt.truth(_v49)) {
                    const _v50: any = rt.global(418);
                    acc = _v50;
                    const _v51: any = await rt.send(_v50, "unitsToGraduate", []);
                    acc = _v51;
                    const _v52: any = rt.global(418);
                    acc = _v52;
                    const _v53: any = await rt.send(_v52, "quantity", [_v51]);
                    acc = _v53;
                    _v41 = _v53;
                  }
                  acc = _v41;
                  _v17 = _v41;
                  break _branch19;
                }
              }
              acc = _v17;
              _v10 = _v17;
              let _v54: any = acc;
              const _v55: any = rt.global(418);
              acc = _v55;
              _v54 = _v55;
              if (rt.truth(_v55)) {
                const _v56: any = rt.get(this, "indexNum");
                acc = _v56;
                const _v57: any = rt.global(418);
                acc = _v57;
                const _v58: any = await rt.send(_v57, "indexNum", [_v56]);
                acc = _v58;
                _v54 = _v58;
                let _v59: any = acc;
                const _v60: any = rt.global(418);
                acc = _v60;
                const _v61: any = await rt.send(_v60, "attributes", []);
                acc = _v61;
                const _v62: any = 56;
                acc = _v62;
                const _v63: any = rt.op("&", ...[_v61, _v62]);
                acc = _v63;
                const _v64: any = rt.op("not", ...[_v63]);
                acc = _v64;
                _v59 = _v64;
                if (rt.truth(_v64)) {
                  const _v65: any = rt.get(this, "price");
                  acc = _v65;
                  const _v66: any = rt.global(418);
                  acc = _v66;
                  const _v67: any = await rt.send(_v66, "pricePaid", [_v65]);
                  acc = _v67;
                  _v59 = _v67;
                }
                acc = _v59;
                _v54 = _v59;
              }
              acc = _v54;
              _v10 = _v54;
              const _v68: any = rt.get(this, "theSign");
              acc = _v68;
              const _v69: any = rt.get(this, "price");
              acc = _v69;
              const _v70: any = rt.op("*", ...[_v68, _v69]);
              acc = _v70;
              const _v71: any = await rt.call(0, "proc0_10", [_v70], this);
              acc = _v71;
              _v10 = _v71;
              const _v72: any = await rt.superSend(this, {"script": 104, "name": "CostDItem"}, "doit", []);
              acc = _v72;
              const _v73: any = (temps[0] = _v72);
              acc = _v73;
              _v10 = _v73;
              const _v74: any = rt.global(305);
              acc = _v74;
              const _v75: any = await rt.send(_v74, "doit", []);
              acc = _v75;
              _v10 = _v75;
              let _v76: any = acc;
              let _v77: any = 1;
              if (rt.truth(_v77)) {
                const _v78: any = rt.global(434);
                acc = _v78;
                _v77 = _v78;
              }
              if (rt.truth(_v77)) {
                const _v79: any = rt.global(434);
                acc = _v79;
                const _v80: any = await rt.call(104, "IsObject", [_v79], this);
                acc = _v80;
                _v77 = _v80;
              }
              if (rt.truth(_v77)) {
                const _v81: any = rt.global(534);
                acc = _v81;
                const _v82: any = 2;
                acc = _v82;
                const _v83: any = rt.op("<", ...[_v81, _v82]);
                acc = _v83;
                _v77 = _v83;
              }
              acc = _v77;
              _v76 = _v77;
              if (rt.truth(_v77)) {
                const _v84: any = rt.get(this, "celNum");
                acc = _v84;
                const _v85: any = rt.global(434);
                acc = _v85;
                const _v86: any = await rt.send(_v85, "doit", [_v84]);
                acc = _v86;
                _v76 = _v86;
              }
              acc = _v76;
              _v10 = _v76;
              let _v87: any = acc;
              let _v88: any = 1;
              if (rt.truth(_v88)) {
                const _v89: any = rt.global(425);
                acc = _v89;
                _v88 = _v89;
              }
              if (rt.truth(_v88)) {
                const _v90: any = rt.global(427);
                acc = _v90;
                _v88 = _v90;
              }
              acc = _v88;
              _v87 = _v88;
              if (rt.truth(_v88)) {
                const _v91: any = this;
                acc = _v91;
                const _v92: any = rt.global(425);
                acc = _v92;
                const _v93: any = await rt.send(_v92, "doit", [_v91]);
                acc = _v93;
                _v87 = _v93;
              }
              acc = _v87;
              _v10 = _v87;
            } else {
              const _v94: any = await rt.superSend(this, {"script": 104, "name": "CostDItem"}, "doit", []);
              acc = _v94;
              const _v95: any = (temps[0] = _v94);
              acc = _v95;
              _v10 = _v95;
              let _v96: any = acc;
              const _v97: any = rt.global(413);
              acc = _v97;
              _v96 = _v97;
              if (rt.truth(_v97)) {
                const _v98: any = 6;
                acc = _v98;
                const _v99: any = rt.global(413);
                acc = _v99;
                const _v100: any = await rt.send(_v99, "cel", [_v98]);
                acc = _v100;
                _v96 = _v100;
              }
              acc = _v96;
              _v10 = _v96;
              let _v101: any = acc;
              const _v102: any = rt.global(424);
              acc = _v102;
              _v101 = _v102;
              if (rt.truth(_v102)) {
                const _v103: any = rt.global(424);
                acc = _v103;
                const _v104: any = await rt.send(_v103, "doit", []);
                acc = _v104;
                _v101 = _v104;
              }
              acc = _v101;
              _v10 = _v101;
            }
            acc = _v10;
            const _v105: any = rt.get(this, "visitTime");
            acc = _v105;
            const _v106: any = rt.global(417);
            acc = _v106;
            const _v107: any = await rt.send(_v106, "doit", [_v105]);
            acc = _v107;
            const _v108: any = (temps[0] ?? 0);
            acc = _v108;
            return _v108;
            return acc;
          },
        },
      },
      {
        name: "Talker",
        className: "DCIcon",
        parent: {"script": 967, "name": "DCIcon"},
        isClass: true,
        properties: {"nsTop": 1, "nsLeft": 115, "priority": 14, "cycleSpeed": 10},
        methods: {
          // SCI WButton.sc: Talker.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = rt.global(534);
            acc = _v2;
            const _v3: any = 2;
            acc = _v3;
            const _v4: any = rt.op("<", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              let _v5: any = acc;
              const _v6: any = rt.global(427);
              acc = _v6;
              _v5 = _v6;
              if (rt.truth(_v6)) {
                const _v7: any = 16;
                acc = _v7;
                _v5 = _v7;
              } else {
                const _v8: any = 2;
                acc = _v8;
                _v5 = _v8;
              }
              acc = _v5;
              const _v9: any = (temps[0] = _v5);
              acc = _v9;
              _v1 = _v9;
              let _v10: any = acc;
              let _v11: any = 1;
              if (rt.truth(_v11)) {
                const _v12: any = argc;
                acc = _v12;
                _v11 = _v12;
              }
              if (rt.truth(_v11)) {
                const _v13: any = (args[0] ?? 0);
                acc = _v13;
                _v11 = _v13;
              }
              acc = _v11;
              _v10 = _v11;
              if (rt.truth(_v11)) {
                const _v14: any = (args[0] ?? 0);
                acc = _v14;
                const _v15: any = (temps[0] = _v14);
                acc = _v15;
                _v10 = _v15;
              }
              acc = _v10;
              _v1 = _v10;
              const _v16: any = 6;
              acc = _v16;
              const _v17: any = rt.object(103, "RdmC");
              acc = _v17;
              const _v18: any = this;
              acc = _v18;
              const _v19: any = (temps[0] ?? 0);
              acc = _v19;
              const _v20: any = this;
              acc = _v20;
              const _v21: any = await rt.send(_v20, "ticksToDo", [_v16]);
              acc = _v21;
              const _v22: any = await rt.send(_v20, "setCycle", [_v17, _v18, _v19]);
              acc = _v22;
              _v1 = _v22;
            }
            acc = _v1;
            return acc;
          },
          // SCI WButton.sc: Talker.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.global(534);
            acc = _v2;
            const _v3: any = 2;
            acc = _v3;
            const _v4: any = rt.op("<", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = args.slice(0, argc);
              acc = _v5;
              const _v6: any = await rt.superSend(this, {"script": 104, "name": "Talker"}, "draw", [..._v5]);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return acc;
          },
          // SCI WButton.sc: Talker.setCycle
          "setCycle": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.global(534);
            acc = _v2;
            const _v3: any = 2;
            acc = _v3;
            const _v4: any = rt.op("<", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = args.slice(0, argc);
              acc = _v5;
              const _v6: any = await rt.superSend(this, {"script": 104, "name": "Talker"}, "setCycle", [..._v5]);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return acc;
          },
          // SCI WButton.sc: Talker.setSize
          "setSize": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.global(534);
            acc = _v2;
            const _v3: any = 2;
            acc = _v3;
            const _v4: any = rt.op("<", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = args.slice(0, argc);
              acc = _v5;
              const _v6: any = await rt.superSend(this, {"script": 104, "name": "Talker"}, "setSize", [..._v5]);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return acc;
          },
        },
      },
      {
        name: "TimeClock",
        className: "DCIcon",
        parent: {"script": 967, "name": "DCIcon"},
        isClass: true,
        properties: {"view": 750, "priority": 14, "cycleSpeed": 10},
        methods: {
          // SCI WButton.sc: TimeClock.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.object(103, "FwdCount");
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = 1;
            acc = _v4;
            const _v5: any = this;
            acc = _v5;
            const _v6: any = await rt.send(_v5, "cel", [_v1]);
            acc = _v6;
            const _v7: any = await rt.send(_v5, "setCycle", [_v2, _v3, _v4]);
            acc = _v7;
            const _v8: any = 31;
            acc = _v8;
            const _v9: any = rt.global(476);
            acc = _v9;
            const _v10: any = await rt.send(_v9, "play", [_v8]);
            acc = _v10;
            const _v11: any = await rt.superSend(this, {"script": 104, "name": "TimeClock"}, "doit", []);
            acc = _v11;
            return acc;
          },
        },
      },
    ],
    procedures: {
      // SCI WButton.sc: proc104_1
      "proc104_1": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0];
        const _v1: any = await rt.call(104, "GetPort", [], this);
        acc = _v1;
        const _v2: any = (temps[0] = _v1);
        acc = _v2;
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = await rt.call(104, "SetPort", [_v3], this);
        acc = _v4;
        let _v5: any = acc;
        const _v6: any = rt.global(302);
        acc = _v6;
        _v5 = _v6;
        if (rt.truth(_v6)) {
          let _v7: any = acc;
          const _v8: any = rt.global(302);
          acc = _v8;
          const _v9: any = await rt.send(_v8, "playing", []);
          acc = _v9;
          const _v10: any = 29;
          acc = _v10;
          const _v11: any = rt.op("==", ...[_v9, _v10]);
          acc = _v11;
          _v7 = _v11;
          if (rt.truth(_v11)) {
            const _v12: any = rt.global(426);
            acc = _v12;
            _v7 = _v12;
          } else {
            const _v13: any = 5000;
            acc = _v13;
            _v7 = _v13;
          }
          acc = _v7;
          const _v14: any = (temps[1] = _v7);
          acc = _v14;
          _v5 = _v14;
        }
        acc = _v5;
        const _v15: any = args.slice(0, argc);
        acc = _v15;
        const _v16: any = 35;
        acc = _v16;
        const _v17: any = rt.global(371);
        acc = _v17;
        const _v18: any = 25;
        acc = _v18;
        const _v19: any = (temps[1] ?? 0);
        acc = _v19;
        const _v20: any = await rt.call(255, "Print", [..._v15, _v16, _v17, _v18, _v19], this);
        acc = _v20;
        const _v21: any = (temps[0] ?? 0);
        acc = _v21;
        const _v22: any = await rt.call(104, "SetPort", [_v21], this);
        acc = _v22;
        return acc;
      },
    },
    exports: {"0": "WButton", "1": "proc104_1"},
  });
}
