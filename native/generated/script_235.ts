// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/select2.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 5b4bcae4bcc416738a85aaba62b4ba8e9700423323f9ec3bc07c74f6378d0472
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(235, {
    name: "select2",
    uses: [0, 255, 891, 999],
    locals: [],
    objects: [
      {
        name: "dialogKeyMouse",
        className: "Set",
        parent: {"script": 999, "name": "Set"},
        isClass: false,
        properties: {},
        methods: {
        },
      },
      {
        name: "select2",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI select2.sc: select2.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = await rt.call(0, "proc0_17", [_v1], this);
            acc = _v2;
            const _v3: any = 3;
            acc = _v3;
            const _v4: any = 8;
            acc = _v4;
            const _v5: any = 16;
            acc = _v5;
            const _v6: any = 1;
            acc = _v6;
            const _v7: any = await rt.call(235, "Palette", [_v3, _v4, _v5, _v6], this);
            acc = _v7;
            const _v8: any = 3;
            acc = _v8;
            const _v9: any = 144;
            acc = _v9;
            const _v10: any = 255;
            acc = _v10;
            const _v11: any = 1;
            acc = _v11;
            const _v12: any = await rt.call(235, "Palette", [_v8, _v9, _v10, _v11], this);
            acc = _v12;
            const _v13: any = rt.object(235, "dialogKeyMouse");
            acc = _v13;
            const _v14: any = rt.set(this, "keyMouseList", _v13);
            acc = _v14;
            const _v15: any = rt.global(502);
            acc = _v15;
            const _v16: any = rt.set(this, "prevDialog", _v15);
            acc = _v16;
            const _v17: any = this;
            acc = _v17;
            const _v18: any = rt.setGlobal(502, _v17);
            acc = _v18;
            const _v19: any = 0;
            acc = _v19;
            const _v20: any = rt.setGlobal(507, _v19);
            acc = _v20;
            const _v21: any = rt.set(this, "client", _v20);
            acc = _v21;
            const _v22: any = rt.setGlobal(413, _v21);
            acc = _v22;
            const _v23: any = await rt.call(0, "proc0_7", [], this);
            acc = _v23;
            const _v24: any = rt.global(59);
            acc = _v24;
            const _v25: any = rt.object(235, "background");
            acc = _v25;
            const _v26: any = rt.object(235, "playerNumber");
            acc = _v26;
            const _v27: any = rt.object(235, "firstPlayer");
            acc = _v27;
            const _v28: any = rt.object(235, "secondPlayer");
            acc = _v28;
            const _v29: any = rt.object(235, "thirdPlayer");
            acc = _v29;
            const _v30: any = rt.object(235, "fourthPlayer");
            acc = _v30;
            const _v31: any = 102;
            acc = _v31;
            const _v32: any = 1;
            acc = _v32;
            const _v33: any = 153;
            acc = _v33;
            const _v34: any = 69;
            acc = _v34;
            const _v35: any = 44;
            acc = _v35;
            const _v36: any = 0;
            acc = _v36;
            const _v37: any = 15;
            acc = _v37;
            const _v38: any = 0;
            acc = _v38;
            const _v39: any = 0;
            acc = _v39;
            const _v40: any = 0;
            acc = _v40;
            const _v41: any = 0;
            acc = _v41;
            const _v42: any = 1;
            acc = _v42;
            const _v43: any = this;
            acc = _v43;
            const _v44: any = await rt.send(_v43, "window", [_v24]);
            acc = _v44;
            const _v45: any = await rt.send(_v43, "add", [_v25, _v26, _v27, _v28, _v29, _v30]);
            acc = _v45;
            const _v46: any = await rt.send(_v43, "eachElementDo", [_v31, _v32]);
            acc = _v46;
            const _v47: any = await rt.send(_v43, "eachElementDo", [_v33]);
            acc = _v47;
            const _v48: any = await rt.send(_v43, "moveTo", [_v34, _v35]);
            acc = _v48;
            const _v49: any = await rt.send(_v43, "open", [_v36, _v37, _v38, _v39, _v40, _v41, _v42]);
            acc = _v49;
            const _v50: any = rt.get(this, "keyMouseList");
            acc = _v50;
            const _v51: any = rt.object(891, "KeyMouse");
            acc = _v51;
            const _v52: any = await rt.send(_v51, "setList", [_v50]);
            acc = _v52;
            const _v53: any = this;
            acc = _v53;
            const _v54: any = rt.get(this, "keyMouseList");
            acc = _v54;
            const _v55: any = rt.object(235, "firstPlayer");
            acc = _v55;
            const _v56: any = await rt.call(0, "proc0_9", [_v53, _v54, _v55], this);
            acc = _v56;
            const _v57: any = 0;
            acc = _v57;
            const _v58: any = 0;
            acc = _v58;
            const _v59: any = this;
            acc = _v59;
            const _v60: any = await rt.send(_v59, "doit", [_v57, _v58]);
            acc = _v60;
            const _v61: any = (temps[0] = _v60);
            acc = _v61;
            let _v62: any = acc;
            const _v63: any = (temps[0] ?? 0);
            acc = _v63;
            const _v64: any = await rt.call(235, "IsObject", [_v63], this);
            acc = _v64;
            _v62 = _v64;
            if (rt.truth(_v64)) {
              let _v65: any = acc;
              const _v66: any = (temps[0] ?? 0);
              acc = _v66;
              const _v67: any = this;
              acc = _v67;
              const _v68: any = await rt.send(_v67, "contains", [_v66]);
              acc = _v68;
              _v65 = _v68;
              if (rt.truth(_v68)) {
                const _v69: any = 0;
                acc = _v69;
                const _v70: any = (temps[0] = _v69);
                acc = _v70;
                _v65 = _v70;
              }
              acc = _v65;
              _v62 = _v65;
            } else {
              const _v71: any = 1;
              acc = _v71;
              const _v72: any = (temps[0] = _v71);
              acc = _v72;
              _v62 = _v72;
            }
            acc = _v62;
            let _v73: any = acc;
            const _v74: any = rt.get(this, "prevDialog");
            acc = _v74;
            _v73 = _v74;
            if (rt.truth(_v74)) {
              const _v75: any = rt.get(this, "prevDialog");
              acc = _v75;
              const _v76: any = await rt.send(_v75, "keyMouseList", []);
              acc = _v76;
              _v73 = _v76;
            } else {
              const _v77: any = rt.global(432);
              acc = _v77;
              _v73 = _v77;
            }
            acc = _v73;
            const _v78: any = rt.object(891, "KeyMouse");
            acc = _v78;
            const _v79: any = await rt.send(_v78, "setList", [_v73]);
            acc = _v79;
            const _v80: any = rt.get(this, "keyMouseList");
            acc = _v80;
            const _v81: any = await rt.send(_v80, "release", []);
            acc = _v81;
            const _v82: any = rt.get(this, "prevDialog");
            acc = _v82;
            const _v83: any = rt.setGlobal(502, _v82);
            acc = _v83;
            const _v84: any = rt.get(this, "keyMouseList");
            acc = _v84;
            const _v85: any = await rt.send(_v84, "dispose", []);
            acc = _v85;
            const _v86: any = this;
            acc = _v86;
            const _v87: any = await rt.send(_v86, "dispose", []);
            acc = _v87;
            const _v88: any = (temps[0] ?? 0);
            acc = _v88;
            const _acc89: any = acc;
            const _v90: any = 235;
            acc = _v90;
            const _args91: any[] = [_v90];
            await rt.call(235, "DisposeScript", _args91, this);
            const _v92: any = _args91.length === 2 ? _args91[1] : _acc89;
            acc = _v92;
            return acc;
          },
          // SCI select2.sc: select2.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
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
              const _v6: any = rt.get(this, "size");
              acc = _v6;
              const _v7: any = rt.op("<", ...[_v5, _v6]);
              acc = _v7;
              if (!rt.truth(_v7)) break _loop1;
              _continue2: {
                let _v8: any = acc;
                let _v9: any = 0;
                if (!rt.truth(_v9)) {
                  const _v10: any = rt.object(255, "ErasableDIcon");
                  acc = _v10;
                  const _v11: any = (temps[0] ?? 0);
                  acc = _v11;
                  const _v12: any = this;
                  acc = _v12;
                  const _v13: any = await rt.send(_v12, "at", [_v11]);
                  acc = _v13;
                  const _v14: any = await rt.send(_v13, "isKindOf", [_v10]);
                  acc = _v14;
                  const _v15: any = rt.op("not", ...[_v14]);
                  acc = _v15;
                  _v9 = _v15;
                }
                if (!rt.truth(_v9)) {
                  const _v16: any = (temps[0] ?? 0);
                  acc = _v16;
                  const _v17: any = this;
                  acc = _v17;
                  const _v18: any = await rt.send(_v17, "at", [_v16]);
                  acc = _v18;
                  const _v19: any = await rt.send(_v18, "state", []);
                  acc = _v19;
                  const _v20: any = 1;
                  acc = _v20;
                  const _v21: any = rt.op("&", ...[_v19, _v20]);
                  acc = _v21;
                  _v9 = _v21;
                }
                acc = _v9;
                _v8 = _v9;
                if (rt.truth(_v9)) {
                  const _v22: any = (temps[0] ?? 0);
                  acc = _v22;
                  const _v23: any = this;
                  acc = _v23;
                  const _v24: any = await rt.send(_v23, "at", [_v22]);
                  acc = _v24;
                  const _v25: any = await rt.send(_v24, "draw", []);
                  acc = _v25;
                  _v8 = _v25;
                }
                acc = _v8;
              }
              const _v26: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
              acc = _v26;
            }
            return acc;
          },
        },
      },
      {
        name: "background",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"view": 500, "priority": 12},
        methods: {
        },
      },
      {
        name: "playerNumber",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 1, "nsLeft": 42, "view": 499, "loop": 1, "priority": 13},
        methods: {
          // SCI select2.sc: playerNumber.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = args.slice(0, argc);
            acc = _v1;
            const _v2: any = await rt.superSend(this, {"script": 235, "name": "playerNumber"}, "init", [..._v1]);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(535);
            acc = _v4;
            const _v5: any = rt.op("not", ...[_v4]);
            acc = _v5;
            _v3 = _v5;
            if (rt.truth(_v5)) {
              const _v6: any = 43;
              acc = _v6;
              const _v7: any = rt.set(this, "nsLeft", _v6);
              acc = _v7;
              _v3 = _v7;
            }
            acc = _v3;
            return acc;
          },
        },
      },
      {
        name: "firstPlayer",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 108, "nsLeft": 6, "view": 250, "loop": 7, "priority": 13},
        methods: {
          // SCI select2.sc: firstPlayer.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 235, "name": "firstPlayer"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = rt.object(235, "select2");
            acc = _v3;
            const _v4: any = 291;
            acc = _v4;
            const _v5: any = await rt.call(0, "proc0_15", [_v3, _v4], this);
            acc = _v5;
            const _v6: any = 0;
            acc = _v6;
            const _v7: any = 0;
            acc = _v7;
            const _v8: any = 236;
            acc = _v8;
            const _v9: any = 0;
            acc = _v9;
            const _v10: any = await rt.call(235, "ScriptID", [_v8, _v9], this);
            acc = _v10;
            const _v11: any = await rt.send(_v10, "init", [_v6, _v7]);
            acc = _v11;
            const _v12: any = rt.global(502);
            acc = _v12;
            const _v13: any = await rt.send(_v12, "draw", []);
            acc = _v13;
            const _v14: any = rt.object(235, "select2");
            acc = _v14;
            const _v15: any = await rt.send(_v14, "advance", []);
            acc = _v15;
            const _v16: any = rt.object(891, "KeyMouse");
            acc = _v16;
            const _v17: any = await rt.send(_v16, "advance", []);
            acc = _v17;
            const _v18: any = 0;
            acc = _v18;
            const _v19: any = rt.global(507);
            acc = _v19;
            const _v20: any = 1;
            acc = _v20;
            const _v21: any = 2;
            acc = _v21;
            const _v22: any = await rt.call(235, "ScriptID", [_v20, _v21], this);
            acc = _v22;
            const _v23: any = await rt.send(_v22, "at", [_v19]);
            acc = _v23;
            const _v24: any = await rt.send(_v23, "whichBody", [_v18]);
            acc = _v24;
            const _v25: any = rt.setGlobal(507, rt.op("+", rt.global(507), 1));
            acc = _v25;
            const _v26: any = 0;
            acc = _v26;
            const _v27: any = this;
            acc = _v27;
            const _v28: any = await rt.send(_v27, "erase", []);
            acc = _v28;
            const _v29: any = await rt.send(_v27, "enable", [_v26]);
            acc = _v29;
            const _v30: any = rt.object(235, "firstDim");
            acc = _v30;
            const _v31: any = rt.object(235, "select2");
            acc = _v31;
            const _v32: any = await rt.send(_v31, "add", [_v30]);
            acc = _v32;
            const _v33: any = 1;
            acc = _v33;
            const _v34: any = rt.object(235, "firstDim");
            acc = _v34;
            const _v35: any = await rt.send(_v34, "init", [_v33]);
            acc = _v35;
            const _v36: any = await rt.send(_v34, "setSize", []);
            acc = _v36;
            const _v37: any = await rt.send(_v34, "draw", []);
            acc = _v37;
            let _v38: any = acc;
            const _v39: any = rt.global(507);
            acc = _v39;
            const _v40: any = rt.global(374);
            acc = _v40;
            const _v41: any = rt.op("==", ...[_v39, _v40]);
            acc = _v41;
            _v38 = _v41;
            if (rt.truth(_v41)) {
              const _v42: any = 2;
              acc = _v42;
              const _v43: any = rt.set(this, "state", _v42);
              acc = _v43;
              _v38 = _v43;
            } else {
              const _v44: any = rt.global(507);
              acc = _v44;
              const _v45: any = rt.object(235, "playerNumber");
              acc = _v45;
              const _v46: any = await rt.send(_v45, "cel", [_v44]);
              acc = _v46;
              const _v47: any = await rt.send(_v45, "draw", []);
              acc = _v47;
              _v38 = _v47;
            }
            acc = _v38;
            const _v48: any = this;
            acc = _v48;
            const _v49: any = rt.object(235, "dialogKeyMouse");
            acc = _v49;
            const _v50: any = await rt.send(_v49, "delete", [_v48]);
            acc = _v50;
            const _v51: any = (temps[0] ?? 0);
            acc = _v51;
            return _v51;
            return acc;
          },
        },
      },
      {
        name: "secondPlayer",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 108, "nsLeft": 52, "view": 250, "loop": 7, "priority": 13},
        methods: {
          // SCI select2.sc: secondPlayer.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 235, "name": "secondPlayer"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = rt.object(235, "select2");
            acc = _v3;
            const _v4: any = 291;
            acc = _v4;
            const _v5: any = await rt.call(0, "proc0_15", [_v3, _v4], this);
            acc = _v5;
            const _v6: any = 0;
            acc = _v6;
            const _v7: any = 0;
            acc = _v7;
            const _v8: any = 236;
            acc = _v8;
            const _v9: any = 0;
            acc = _v9;
            const _v10: any = await rt.call(235, "ScriptID", [_v8, _v9], this);
            acc = _v10;
            const _v11: any = await rt.send(_v10, "init", [_v6, _v7]);
            acc = _v11;
            const _v12: any = rt.global(502);
            acc = _v12;
            const _v13: any = await rt.send(_v12, "draw", []);
            acc = _v13;
            const _v14: any = rt.object(235, "select2");
            acc = _v14;
            const _v15: any = await rt.send(_v14, "advance", []);
            acc = _v15;
            const _v16: any = rt.object(891, "KeyMouse");
            acc = _v16;
            const _v17: any = await rt.send(_v16, "advance", []);
            acc = _v17;
            const _v18: any = 1;
            acc = _v18;
            const _v19: any = rt.global(507);
            acc = _v19;
            const _v20: any = 1;
            acc = _v20;
            const _v21: any = 2;
            acc = _v21;
            const _v22: any = await rt.call(235, "ScriptID", [_v20, _v21], this);
            acc = _v22;
            const _v23: any = await rt.send(_v22, "at", [_v19]);
            acc = _v23;
            const _v24: any = await rt.send(_v23, "whichBody", [_v18]);
            acc = _v24;
            const _v25: any = rt.setGlobal(507, rt.op("+", rt.global(507), 1));
            acc = _v25;
            const _v26: any = 0;
            acc = _v26;
            const _v27: any = this;
            acc = _v27;
            const _v28: any = await rt.send(_v27, "erase", []);
            acc = _v28;
            const _v29: any = await rt.send(_v27, "enable", [_v26]);
            acc = _v29;
            const _v30: any = rt.object(235, "secondDim");
            acc = _v30;
            const _v31: any = rt.object(235, "select2");
            acc = _v31;
            const _v32: any = await rt.send(_v31, "add", [_v30]);
            acc = _v32;
            const _v33: any = 1;
            acc = _v33;
            const _v34: any = rt.object(235, "secondDim");
            acc = _v34;
            const _v35: any = await rt.send(_v34, "init", [_v33]);
            acc = _v35;
            const _v36: any = await rt.send(_v34, "setSize", []);
            acc = _v36;
            const _v37: any = await rt.send(_v34, "draw", []);
            acc = _v37;
            let _v38: any = acc;
            const _v39: any = rt.global(507);
            acc = _v39;
            const _v40: any = rt.global(374);
            acc = _v40;
            const _v41: any = rt.op("==", ...[_v39, _v40]);
            acc = _v41;
            _v38 = _v41;
            if (rt.truth(_v41)) {
              const _v42: any = 2;
              acc = _v42;
              const _v43: any = rt.set(this, "state", _v42);
              acc = _v43;
              _v38 = _v43;
            } else {
              const _v44: any = rt.global(507);
              acc = _v44;
              const _v45: any = rt.object(235, "playerNumber");
              acc = _v45;
              const _v46: any = await rt.send(_v45, "cel", [_v44]);
              acc = _v46;
              const _v47: any = await rt.send(_v45, "draw", []);
              acc = _v47;
              _v38 = _v47;
            }
            acc = _v38;
            const _v48: any = this;
            acc = _v48;
            const _v49: any = rt.object(235, "dialogKeyMouse");
            acc = _v49;
            const _v50: any = await rt.send(_v49, "delete", [_v48]);
            acc = _v50;
            const _v51: any = (temps[0] ?? 0);
            acc = _v51;
            return _v51;
            return acc;
          },
        },
      },
      {
        name: "thirdPlayer",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 108, "nsLeft": 98, "view": 250, "loop": 7, "priority": 13},
        methods: {
          // SCI select2.sc: thirdPlayer.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 235, "name": "thirdPlayer"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = rt.object(235, "select2");
            acc = _v3;
            const _v4: any = 291;
            acc = _v4;
            const _v5: any = await rt.call(0, "proc0_15", [_v3, _v4], this);
            acc = _v5;
            const _v6: any = 0;
            acc = _v6;
            const _v7: any = 0;
            acc = _v7;
            const _v8: any = 236;
            acc = _v8;
            const _v9: any = 0;
            acc = _v9;
            const _v10: any = await rt.call(235, "ScriptID", [_v8, _v9], this);
            acc = _v10;
            const _v11: any = await rt.send(_v10, "init", [_v6, _v7]);
            acc = _v11;
            const _v12: any = rt.global(502);
            acc = _v12;
            const _v13: any = await rt.send(_v12, "draw", []);
            acc = _v13;
            const _v14: any = rt.object(235, "select2");
            acc = _v14;
            const _v15: any = await rt.send(_v14, "advance", []);
            acc = _v15;
            const _v16: any = rt.object(891, "KeyMouse");
            acc = _v16;
            const _v17: any = await rt.send(_v16, "advance", []);
            acc = _v17;
            const _v18: any = 2;
            acc = _v18;
            const _v19: any = rt.global(507);
            acc = _v19;
            const _v20: any = 1;
            acc = _v20;
            const _v21: any = 2;
            acc = _v21;
            const _v22: any = await rt.call(235, "ScriptID", [_v20, _v21], this);
            acc = _v22;
            const _v23: any = await rt.send(_v22, "at", [_v19]);
            acc = _v23;
            const _v24: any = await rt.send(_v23, "whichBody", [_v18]);
            acc = _v24;
            const _v25: any = rt.setGlobal(507, rt.op("+", rt.global(507), 1));
            acc = _v25;
            const _v26: any = 0;
            acc = _v26;
            const _v27: any = this;
            acc = _v27;
            const _v28: any = await rt.send(_v27, "erase", []);
            acc = _v28;
            const _v29: any = await rt.send(_v27, "enable", [_v26]);
            acc = _v29;
            const _v30: any = rt.object(235, "thirdDim");
            acc = _v30;
            const _v31: any = rt.object(235, "select2");
            acc = _v31;
            const _v32: any = await rt.send(_v31, "add", [_v30]);
            acc = _v32;
            const _v33: any = 1;
            acc = _v33;
            const _v34: any = rt.object(235, "thirdDim");
            acc = _v34;
            const _v35: any = await rt.send(_v34, "init", [_v33]);
            acc = _v35;
            const _v36: any = await rt.send(_v34, "setSize", []);
            acc = _v36;
            const _v37: any = rt.object(235, "thirdDim");
            acc = _v37;
            const _v38: any = await rt.send(_v37, "draw", []);
            acc = _v38;
            let _v39: any = acc;
            const _v40: any = rt.global(507);
            acc = _v40;
            const _v41: any = rt.global(374);
            acc = _v41;
            const _v42: any = rt.op("==", ...[_v40, _v41]);
            acc = _v42;
            _v39 = _v42;
            if (rt.truth(_v42)) {
              const _v43: any = 2;
              acc = _v43;
              const _v44: any = rt.set(this, "state", _v43);
              acc = _v44;
              _v39 = _v44;
            } else {
              const _v45: any = rt.global(507);
              acc = _v45;
              const _v46: any = rt.object(235, "playerNumber");
              acc = _v46;
              const _v47: any = await rt.send(_v46, "cel", [_v45]);
              acc = _v47;
              const _v48: any = await rt.send(_v46, "draw", []);
              acc = _v48;
              _v39 = _v48;
            }
            acc = _v39;
            const _v49: any = this;
            acc = _v49;
            const _v50: any = rt.object(235, "dialogKeyMouse");
            acc = _v50;
            const _v51: any = await rt.send(_v50, "delete", [_v49]);
            acc = _v51;
            const _v52: any = (temps[0] ?? 0);
            acc = _v52;
            return _v52;
            return acc;
          },
        },
      },
      {
        name: "fourthPlayer",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 108, "nsLeft": 144, "view": 250, "loop": 7, "priority": 13},
        methods: {
          // SCI select2.sc: fourthPlayer.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 235, "name": "fourthPlayer"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = rt.object(235, "select2");
            acc = _v3;
            const _v4: any = 291;
            acc = _v4;
            const _v5: any = await rt.call(0, "proc0_15", [_v3, _v4], this);
            acc = _v5;
            const _v6: any = 0;
            acc = _v6;
            const _v7: any = 0;
            acc = _v7;
            const _v8: any = 236;
            acc = _v8;
            const _v9: any = 0;
            acc = _v9;
            const _v10: any = await rt.call(235, "ScriptID", [_v8, _v9], this);
            acc = _v10;
            const _v11: any = await rt.send(_v10, "init", [_v6, _v7]);
            acc = _v11;
            const _v12: any = rt.global(502);
            acc = _v12;
            const _v13: any = await rt.send(_v12, "draw", []);
            acc = _v13;
            const _v14: any = rt.object(235, "select2");
            acc = _v14;
            const _v15: any = await rt.send(_v14, "advance", []);
            acc = _v15;
            const _v16: any = rt.object(891, "KeyMouse");
            acc = _v16;
            const _v17: any = await rt.send(_v16, "advance", []);
            acc = _v17;
            const _v18: any = 3;
            acc = _v18;
            const _v19: any = rt.global(507);
            acc = _v19;
            const _v20: any = 1;
            acc = _v20;
            const _v21: any = 2;
            acc = _v21;
            const _v22: any = await rt.call(235, "ScriptID", [_v20, _v21], this);
            acc = _v22;
            const _v23: any = await rt.send(_v22, "at", [_v19]);
            acc = _v23;
            const _v24: any = await rt.send(_v23, "whichBody", [_v18]);
            acc = _v24;
            const _v25: any = rt.setGlobal(507, rt.op("+", rt.global(507), 1));
            acc = _v25;
            const _v26: any = 0;
            acc = _v26;
            const _v27: any = this;
            acc = _v27;
            const _v28: any = await rt.send(_v27, "erase", []);
            acc = _v28;
            const _v29: any = await rt.send(_v27, "enable", [_v26]);
            acc = _v29;
            const _v30: any = rt.object(235, "fourthDim");
            acc = _v30;
            const _v31: any = rt.object(235, "select2");
            acc = _v31;
            const _v32: any = await rt.send(_v31, "add", [_v30]);
            acc = _v32;
            const _v33: any = 1;
            acc = _v33;
            const _v34: any = rt.object(235, "fourthDim");
            acc = _v34;
            const _v35: any = await rt.send(_v34, "init", [_v33]);
            acc = _v35;
            const _v36: any = await rt.send(_v34, "setSize", []);
            acc = _v36;
            const _v37: any = await rt.send(_v34, "draw", []);
            acc = _v37;
            let _v38: any = acc;
            const _v39: any = rt.global(507);
            acc = _v39;
            const _v40: any = rt.global(374);
            acc = _v40;
            const _v41: any = rt.op("==", ...[_v39, _v40]);
            acc = _v41;
            _v38 = _v41;
            if (rt.truth(_v41)) {
              const _v42: any = 2;
              acc = _v42;
              const _v43: any = rt.set(this, "state", _v42);
              acc = _v43;
              _v38 = _v43;
            } else {
              const _v44: any = rt.global(507);
              acc = _v44;
              const _v45: any = rt.object(235, "playerNumber");
              acc = _v45;
              const _v46: any = await rt.send(_v45, "cel", [_v44]);
              acc = _v46;
              const _v47: any = await rt.send(_v45, "draw", []);
              acc = _v47;
              _v38 = _v47;
            }
            acc = _v38;
            const _v48: any = this;
            acc = _v48;
            const _v49: any = rt.object(235, "dialogKeyMouse");
            acc = _v49;
            const _v50: any = await rt.send(_v49, "delete", [_v48]);
            acc = _v50;
            const _v51: any = (temps[0] ?? 0);
            acc = _v51;
            return _v51;
            return acc;
          },
        },
      },
      {
        name: "firstDim",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 14, "nsLeft": 1, "view": 499, "priority": 14},
        methods: {
        },
      },
      {
        name: "secondDim",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 14, "nsLeft": 47, "view": 499, "cel": 1, "priority": 14},
        methods: {
        },
      },
      {
        name: "thirdDim",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 14, "nsLeft": 93, "view": 499, "cel": 2, "priority": 14},
        methods: {
        },
      },
      {
        name: "fourthDim",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 14, "nsLeft": 139, "view": 499, "cel": 3, "priority": 14},
        methods: {
        },
      },
    ],
    procedures: {
    },
    exports: {"0": "select2"},
  });
}
