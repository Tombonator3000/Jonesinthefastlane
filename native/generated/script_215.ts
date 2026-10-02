// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/newspaper.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 36618c8fcd732fbaf1d91aa374155f28237810f6144b29808a854add977e3cb2
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(215, {
    name: "newspaper",
    uses: [0, 110, 255, 891, 967, 992, 999],
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
        name: "newspaper",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI newspaper.sc: newspaper.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            let _v1: any = acc;
            const _v2: any = rt.global(518);
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = rt.global(413);
              acc = _v4;
              const _v5: any = rt.set(this, "prevTalker", _v4);
              acc = _v5;
              _v1 = _v5;
              const _v6: any = 0;
              acc = _v6;
              const _v7: any = rt.setGlobal(413, _v6);
              acc = _v7;
              _v1 = _v7;
              const _v8: any = 3;
              acc = _v8;
              const _v9: any = await rt.call(0, "proc0_17", [_v8], this);
              acc = _v9;
              _v1 = _v9;
              const _v10: any = rt.object(215, "dialogKeyMouse");
              acc = _v10;
              const _v11: any = rt.set(this, "keyMouseList", _v10);
              acc = _v11;
              _v1 = _v11;
              const _v12: any = rt.global(502);
              acc = _v12;
              const _v13: any = rt.set(this, "prevDialog", _v12);
              acc = _v13;
              _v1 = _v13;
              const _v14: any = this;
              acc = _v14;
              const _v15: any = rt.setGlobal(502, _v14);
              acc = _v15;
              _v1 = _v15;
              const _v16: any = (args[0] ?? 0);
              acc = _v16;
              const _v17: any = rt.set(this, "client", _v16);
              acc = _v17;
              _v1 = _v17;
              let _v18: any = acc;
              const _v19: any = rt.global(302);
              acc = _v19;
              const _v20: any = await rt.send(_v19, "playing", []);
              acc = _v20;
              const _v21: any = 29;
              acc = _v21;
              const _v22: any = rt.op("==", ...[_v20, _v21]);
              acc = _v22;
              _v18 = _v22;
              if (rt.truth(_v22)) {
                const _v23: any = rt.object(215, "computerScript");
                acc = _v23;
                const _v24: any = this;
                acc = _v24;
                const _v25: any = await rt.send(_v24, "setScript", [_v23]);
                acc = _v25;
                _v18 = _v25;
                const _v26: any = rt.object(215, "computerScript");
                acc = _v26;
                const _v27: any = await rt.send(_v26, "cue", []);
                acc = _v27;
                _v18 = _v27;
              }
              acc = _v18;
              _v1 = _v18;
              const _v28: any = rt.global(59);
              acc = _v28;
              const _v29: any = rt.object(215, "background");
              acc = _v29;
              const _v30: any = rt.object(215, "doneButton");
              acc = _v30;
              const _v31: any = rt.object(215, "newsPaper");
              acc = _v31;
              const _v32: any = this;
              acc = _v32;
              const _v33: any = await rt.send(_v32, "window", [_v28]);
              acc = _v33;
              const _v34: any = await rt.send(_v32, "add", [_v29, _v30, _v31]);
              acc = _v34;
              _v1 = _v34;
              const _v35: any = 102;
              acc = _v35;
              const _v36: any = 153;
              acc = _v36;
              const _v37: any = 69;
              acc = _v37;
              const _v38: any = 44;
              acc = _v38;
              const _v39: any = 0;
              acc = _v39;
              const _v40: any = 15;
              acc = _v40;
              const _v41: any = this;
              acc = _v41;
              const _v42: any = await rt.send(_v41, "eachElementDo", [_v35]);
              acc = _v42;
              const _v43: any = await rt.send(_v41, "eachElementDo", [_v36]);
              acc = _v43;
              const _v44: any = await rt.send(_v41, "moveTo", [_v37, _v38]);
              acc = _v44;
              const _v45: any = await rt.send(_v41, "open", [_v39, _v40]);
              acc = _v45;
              _v1 = _v45;
              let _v46: any = acc;
              const _v47: any = rt.global(534);
              acc = _v47;
              _v46 = _v47;
              if (rt.truth(_v47)) {
                const _v48: any = rt.object(215, "newsPaper");
                acc = _v48;
                const _v49: any = await rt.send(_v48, "cue", []);
                acc = _v49;
                _v46 = _v49;
              }
              acc = _v46;
              _v1 = _v46;
              const _v50: any = rt.object(891, "KeyMouse");
              acc = _v50;
              const _v51: any = await rt.send(_v50, "curItem", []);
              acc = _v51;
              const _v52: any = (temps[1] = _v51);
              acc = _v52;
              _v1 = _v52;
              const _v53: any = this;
              acc = _v53;
              const _v54: any = rt.get(this, "keyMouseList");
              acc = _v54;
              const _v55: any = rt.object(215, "doneButton");
              acc = _v55;
              const _v56: any = await rt.call(0, "proc0_9", [_v53, _v54, _v55], this);
              acc = _v56;
              _v1 = _v56;
              const _v57: any = rt.get(this, "keyMouseList");
              acc = _v57;
              const _v58: any = rt.object(891, "KeyMouse");
              acc = _v58;
              const _v59: any = await rt.send(_v58, "setList", [_v57]);
              acc = _v59;
              _v1 = _v59;
            } else {
              const _v60: any = rt.get(this, "theItem");
              acc = _v60;
              const _v61: any = rt.object(891, "KeyMouse");
              acc = _v61;
              const _v62: any = await rt.send(_v61, "setCursor", [_v60]);
              acc = _v62;
              _v1 = _v62;
            }
            acc = _v1;
            const _v63: any = 0;
            acc = _v63;
            const _v64: any = 0;
            acc = _v64;
            const _v65: any = this;
            acc = _v65;
            const _v66: any = await rt.send(_v65, "doit", [_v63, _v64]);
            acc = _v66;
            const _v67: any = (temps[0] = _v66);
            acc = _v67;
            let _v68: any = acc;
            const _v69: any = (temps[0] ?? 0);
            acc = _v69;
            const _v70: any = await rt.call(215, "IsObject", [_v69], this);
            acc = _v70;
            _v68 = _v70;
            if (rt.truth(_v70)) {
              let _v71: any = acc;
              const _v72: any = (temps[0] ?? 0);
              acc = _v72;
              const _v73: any = this;
              acc = _v73;
              const _v74: any = await rt.send(_v73, "contains", [_v72]);
              acc = _v74;
              _v71 = _v74;
              if (rt.truth(_v74)) {
                const _v75: any = 0;
                acc = _v75;
                const _v76: any = (temps[0] = _v75);
                acc = _v76;
                _v71 = _v76;
              }
              acc = _v71;
              _v68 = _v71;
            } else {
              const _v77: any = 1;
              acc = _v77;
              const _v78: any = (temps[0] = _v77);
              acc = _v78;
              _v68 = _v78;
            }
            acc = _v68;
            let _v79: any = acc;
            const _v80: any = rt.get(this, "prevDialog");
            acc = _v80;
            _v79 = _v80;
            if (rt.truth(_v80)) {
              const _v81: any = rt.get(this, "prevDialog");
              acc = _v81;
              const _v82: any = await rt.send(_v81, "keyMouseList", []);
              acc = _v82;
              _v79 = _v82;
            } else {
              const _v83: any = rt.global(432);
              acc = _v83;
              _v79 = _v83;
            }
            acc = _v79;
            const _v84: any = rt.object(891, "KeyMouse");
            acc = _v84;
            const _v85: any = await rt.send(_v84, "setList", [_v79]);
            acc = _v85;
            const _v86: any = (temps[1] ?? 0);
            acc = _v86;
            const _v87: any = rt.object(891, "KeyMouse");
            acc = _v87;
            const _v88: any = await rt.send(_v87, "curItem", [_v86]);
            acc = _v88;
            let _v89: any = acc;
            const _v90: any = rt.global(447);
            acc = _v90;
            _v89 = _v90;
            if (rt.truth(_v90)) {
              const _v91: any = (temps[1] ?? 0);
              acc = _v91;
              const _v92: any = rt.object(891, "KeyMouse");
              acc = _v92;
              const _v93: any = await rt.send(_v92, "setCursor", [_v91]);
              acc = _v93;
              _v89 = _v93;
            }
            acc = _v89;
            const _v94: any = rt.get(this, "keyMouseList");
            acc = _v94;
            const _v95: any = await rt.send(_v94, "release", []);
            acc = _v95;
            const _v96: any = await rt.send(_v94, "dispose", []);
            acc = _v96;
            const _v97: any = rt.get(this, "prevDialog");
            acc = _v97;
            const _v98: any = rt.setGlobal(502, _v97);
            acc = _v98;
            const _v99: any = this;
            acc = _v99;
            const _v100: any = 291;
            acc = _v100;
            const _v101: any = await rt.call(0, "proc0_15", [_v99, _v100], this);
            acc = _v101;
            const _v102: any = this;
            acc = _v102;
            const _v103: any = await rt.send(_v102, "dispose", []);
            acc = _v103;
            const _v104: any = 0;
            acc = _v104;
            const _v105: any = await rt.call(215, "SetPort", [_v104], this);
            acc = _v105;
            const _v106: any = 11;
            acc = _v106;
            const _v107: any = rt.get(this, "nsTop");
            acc = _v107;
            const _v108: any = 1;
            acc = _v108;
            const _v109: any = rt.op("+", ...[_v107, _v108]);
            acc = _v109;
            const _v110: any = rt.get(this, "nsLeft");
            acc = _v110;
            const _v111: any = rt.get(this, "nsBottom");
            acc = _v111;
            const _v112: any = 1;
            acc = _v112;
            const _v113: any = rt.op("-", ...[_v111, _v112]);
            acc = _v113;
            const _v114: any = rt.get(this, "nsRight");
            acc = _v114;
            const _v115: any = 3;
            acc = _v115;
            const _v116: any = rt.op("-", ...[_v114, _v115]);
            acc = _v116;
            const _v117: any = 2;
            acc = _v117;
            const _v118: any = 0;
            acc = _v118;
            const _v119: any = 0;
            acc = _v119;
            const _v120: any = await rt.call(215, "Graph", [_v106, _v109, _v110, _v113, _v116, _v117, _v118, _v119], this);
            acc = _v120;
            const _v121: any = 0;
            acc = _v121;
            const _v122: any = await rt.call(0, "proc0_17", [_v121], this);
            acc = _v122;
            const _v123: any = rt.get(this, "prevTalker");
            acc = _v123;
            const _v124: any = rt.setGlobal(413, _v123);
            acc = _v124;
            const _v125: any = await rt.call(0, "proc0_1", [], this);
            acc = _v125;
            const _v126: any = (temps[0] ?? 0);
            acc = _v126;
            const _acc127: any = acc;
            const _v128: any = 215;
            acc = _v128;
            const _args129: any[] = [_v128];
            await rt.call(215, "DisposeScript", _args129, this);
            const _v130: any = _args129.length === 2 ? _args129[1] : _acc127;
            acc = _v130;
            return acc;
          },
        },
      },
      {
        name: "background",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"view": 603, "loop": 1, "cel": 1, "priority": 13},
        methods: {
        },
      },
      {
        name: "doneButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 99, "nsTop": 108, "nsLeft": 143, "key": 120, "view": 250, "loop": 2, "priority": 15},
        methods: {
        },
      },
      {
        name: "newsPaper",
        className: "DCIcon",
        parent: {"script": 967, "name": "DCIcon"},
        isClass: false,
        properties: {"nsTop": 35, "nsLeft": 56, "view": 603, "priority": 14},
        methods: {
          // SCI newspaper.sc: newsPaper.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 1;
            acc = _v1;
            const _v2: any = rt.global(477);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "pause", [_v1]);
            acc = _v3;
            const _v4: any = 1;
            acc = _v4;
            const _v5: any = 8;
            acc = _v5;
            const _v6: any = rt.global(476);
            acc = _v6;
            const _v7: any = await rt.send(_v6, "loop", [_v4]);
            acc = _v7;
            const _v8: any = await rt.send(_v6, "play", [_v5]);
            acc = _v8;
            let _v9: any = acc;
            const _v10: any = rt.global(534);
            acc = _v10;
            const _v11: any = rt.op("not", ...[_v10]);
            acc = _v11;
            _v9 = _v11;
            if (rt.truth(_v11)) {
              const _v12: any = 1;
              acc = _v12;
              const _v13: any = rt.object(992, "End");
              acc = _v13;
              const _v14: any = this;
              acc = _v14;
              const _v15: any = this;
              acc = _v15;
              const _v16: any = await rt.send(_v15, "cycleSpeed", [_v12]);
              acc = _v16;
              const _v17: any = await rt.send(_v15, "setCycle", [_v13, _v14]);
              acc = _v17;
              _v9 = _v17;
            }
            acc = _v9;
            return acc;
          },
          // SCI newspaper.sc: newsPaper.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            let _v2: any = 0;
            if (!rt.truth(_v2)) {
              const _v3: any = rt.global(534);
              acc = _v3;
              const _v4: any = rt.op("not", ...[_v3]);
              acc = _v4;
              _v2 = _v4;
            }
            if (!rt.truth(_v2)) {
              const _v5: any = rt.get(this, "loop");
              acc = _v5;
              const _v6: any = 1;
              acc = _v6;
              const _v7: any = rt.op("==", ...[_v5, _v6]);
              acc = _v7;
              _v2 = _v7;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v8: any = args.slice(0, argc);
              acc = _v8;
              const _v9: any = await rt.superSend(this, {"script": 215, "name": "newsPaper"}, "draw", [..._v8]);
              acc = _v9;
              _v1 = _v9;
            }
            acc = _v1;
            return acc;
          },
          // SCI newspaper.sc: newsPaper.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "setCycle", [_v1]);
            acc = _v3;
            const _v4: any = 1;
            acc = _v4;
            const _v5: any = 0;
            acc = _v5;
            const _v6: any = 0;
            acc = _v6;
            const _v7: any = 0;
            acc = _v7;
            const _v8: any = 112;
            acc = _v8;
            const _v9: any = 183;
            acc = _v9;
            const _v10: any = this;
            acc = _v10;
            const _v11: any = await rt.send(_v10, "loop", [_v4]);
            acc = _v11;
            const _v12: any = await rt.send(_v10, "cel", [_v5]);
            acc = _v12;
            const _v13: any = await rt.send(_v10, "nsTop", [_v6]);
            acc = _v13;
            const _v14: any = await rt.send(_v10, "nsLeft", [_v7]);
            acc = _v14;
            const _v15: any = await rt.send(_v10, "nsBottom", [_v8]);
            acc = _v15;
            const _v16: any = await rt.send(_v10, "nsRight", [_v9]);
            acc = _v16;
            const _v17: any = await rt.send(_v10, "draw", []);
            acc = _v17;
            let _v18: any = acc;
            let _v19: any = 0;
            if (!rt.truth(_v19)) {
              const _v20: any = rt.global(415);
              acc = _v20;
              const _v21: any = 0;
              acc = _v21;
              const _v22: any = rt.op("<=", ...[_v20, _v21]);
              acc = _v22;
              _v19 = _v22;
            }
            if (!rt.truth(_v19)) {
              const _v23: any = rt.global(415);
              acc = _v23;
              const _v24: any = 62;
              acc = _v24;
              const _v25: any = rt.op(">", ...[_v23, _v24]);
              acc = _v25;
              _v19 = _v25;
            }
            acc = _v19;
            _v18 = _v19;
            if (rt.truth(_v19)) {
              _loop26: for (;;) {
                _continue27: {
                  let _v28: any = acc;
                  let _v29: any = 0;
                  if (!rt.truth(_v29)) {
                    const _v30: any = 25;
                    acc = _v30;
                    const _v31: any = 62;
                    acc = _v31;
                    const _v32: any = await rt.call(215, "Random", [_v30, _v31], this);
                    acc = _v32;
                    const _v33: any = rt.setGlobal(415, _v32);
                    acc = _v33;
                    const _v34: any = 24;
                    acc = _v34;
                    const _v35: any = rt.op("!=", ...[_v33, _v34]);
                    acc = _v35;
                    _v29 = _v35;
                  }
                  if (!rt.truth(_v29)) {
                    const _v36: any = rt.global(372);
                    acc = _v36;
                    const _v37: any = rt.global(524);
                    acc = _v37;
                    const _v38: any = 3;
                    acc = _v38;
                    const _v39: any = rt.op("+", ...[_v37, _v38]);
                    acc = _v39;
                    const _v40: any = rt.op(">=", ...[_v36, _v39]);
                    acc = _v40;
                    _v29 = _v40;
                  }
                  acc = _v29;
                  _v28 = _v29;
                  if (rt.truth(_v29)) {
                    break _loop26;
                    _v28 = acc;
                  }
                  acc = _v28;
                }
              }
              _v18 = acc;
            }
            acc = _v18;
            const _v41: any = rt.object(215, "newspaperText");
            acc = _v41;
            const _v42: any = rt.global(502);
            acc = _v42;
            const _v43: any = await rt.send(_v42, "add", [_v41]);
            acc = _v43;
            const _v44: any = rt.object(215, "newspaperText");
            acc = _v44;
            const _v45: any = await rt.send(_v44, "draw", []);
            acc = _v45;
            return acc;
          },
        },
      },
      {
        name: "newspaperText",
        className: "DText",
        parent: {"script": 255, "name": "DText"},
        isClass: false,
        properties: {},
        methods: {
          // SCI newspaper.sc: newspaperText.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "setPort", []);
            acc = _v2;
            const _v3: any = rt.ref("array", temps, 4);
            acc = _v3;
            const _v4: any = 215;
            acc = _v4;
            const _v5: any = 64;
            acc = _v5;
            const _v6: any = 215;
            acc = _v6;
            const _v7: any = rt.global(415);
            acc = _v7;
            const _v8: any = await rt.call(215, "Format", [_v3, _v4, _v5, _v6, _v7], this);
            acc = _v8;
            const _v9: any = rt.set(this, "text", _v8);
            acc = _v9;
            const _v10: any = 0;
            acc = _v10;
            const _v11: any = rt.ref("array", temps, (0 + (Number(_v10) & 65535)));
            acc = _v11;
            const _v12: any = rt.get(this, "text");
            acc = _v12;
            const _v13: any = 3;
            acc = _v13;
            const _v14: any = 0;
            acc = _v14;
            const _v15: any = await rt.call(215, "TextSize", [_v11, _v12, _v13, _v14], this);
            acc = _v15;
            const _v16: any = rt.get(this, "text");
            acc = _v16;
            const _v17: any = 100;
            acc = _v17;
            const _v18: any = 11;
            acc = _v18;
            const _v19: any = 43;
            acc = _v19;
            const _v20: any = 2;
            acc = _v20;
            const _v21: any = (temps[(0 + (Number(_v20) & 65535))] ?? 0);
            acc = _v21;
            const _v22: any = 2;
            acc = _v22;
            const _v23: any = rt.op("/", ...[_v21, _v22]);
            acc = _v23;
            const _v24: any = rt.op("-", ...[_v19, _v23]);
            acc = _v24;
            const _v25: any = 102;
            acc = _v25;
            let _v26: any = acc;
            const _v27: any = rt.global(535);
            acc = _v27;
            _v26 = _v27;
            if (rt.truth(_v27)) {
              const _v28: any = 72;
              acc = _v28;
              _v26 = _v28;
            } else {
              const _v29: any = 0;
              acc = _v29;
              _v26 = _v29;
            }
            acc = _v26;
            const _v30: any = 106;
            acc = _v30;
            const _v31: any = 155;
            acc = _v31;
            const _v32: any = 103;
            acc = _v32;
            const _v33: any = -1;
            acc = _v33;
            const _v34: any = 105;
            acc = _v34;
            const _v35: any = 3;
            acc = _v35;
            const _v36: any = 101;
            acc = _v36;
            const _v37: any = 1;
            acc = _v37;
            const _v38: any = await rt.call(215, "Display", [_v16, _v17, _v18, _v24, _v25, _v26, _v30, _v31, _v32, _v33, _v34, _v35, _v36, _v37], this);
            acc = _v38;
            const _v39: any = this;
            acc = _v39;
            const _v40: any = await rt.send(_v39, "resetPort", []);
            acc = _v40;
            return acc;
          },
        },
      },
      {
        name: "computerScript",
        className: "DialogScript",
        parent: {"script": 110, "name": "DialogScript"},
        isClass: false,
        properties: {},
        methods: {
          // SCI newspaper.sc: computerScript.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "register");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = 0;
              acc = _v3;
              const _v4: any = rt.set(this, "register", _v3);
              acc = _v4;
              _v1 = _v4;
              const _v5: any = 1;
              acc = _v5;
              const _v6: any = rt.set(this, "cycles", _v5);
              acc = _v6;
              _v1 = _v6;
              const _v7: any = 4;
              acc = _v7;
              const _v8: any = 160;
              acc = _v8;
              const _v9: any = 100;
              acc = _v9;
              const _v10: any = (args[0] ?? 0);
              acc = _v10;
              const _v11: any = await rt.send(_v10, "type", [_v7]);
              acc = _v11;
              const _v12: any = await rt.send(_v10, "x", [_v8]);
              acc = _v12;
              const _v13: any = await rt.send(_v10, "y", [_v9]);
              acc = _v13;
              _v1 = _v13;
              let _v14: any = acc;
              const _v15: any = rt.get(this, "state");
              acc = _v15;
              _branch16: {
                const _v17: any = 2;
                acc = _v17;
                _v14 = rt.op("==", _v15, _v17);
                acc = _v14;
                if (rt.truth(_v14)) {
                  const _v18: any = 240;
                  acc = _v18;
                  const _v19: any = rt.set(this, "cycles", _v18);
                  acc = _v19;
                  _v14 = _v19;
                  break _branch16;
                }
                const _v20: any = 3;
                acc = _v20;
                _v14 = rt.op("==", _v15, _v20);
                acc = _v14;
                if (rt.truth(_v14)) {
                  const _v21: any = 120;
                  acc = _v21;
                  const _v22: any = (args[0] ?? 0);
                  acc = _v22;
                  const _v23: any = await rt.send(_v22, "message", [_v21]);
                  acc = _v23;
                  _v14 = _v23;
                  break _branch16;
                }
                const _v24: any = (args[0] ?? 0);
                acc = _v24;
                const _v25: any = 0;
                acc = _v25;
                const _v26: any = await rt.superSend(this, {"script": 215, "name": "computerScript"}, "handleEvent", [_v24, _v25]);
                acc = _v26;
                _v14 = _v26;
                break _branch16;
              }
              acc = _v14;
              _v1 = _v14;
            }
            acc = _v1;
            return acc;
          },
        },
      },
    ],
    procedures: {
      // SCI newspaper.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = rt.ref("global", 0, 100);
        acc = _v1;
        const _v2: any = 215;
        acc = _v2;
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = await rt.call(215, "Format", [_v1, _v2, _v3], this);
        acc = _v4;
        const _v5: any = rt.ref("global", 0, 100);
        acc = _v5;
        const _v6: any = 215;
        acc = _v6;
        const _v7: any = 1;
        acc = _v7;
        const _v8: any = await rt.call(215, "Format", [_v5, _v6, _v7], this);
        acc = _v8;
        const _v9: any = rt.ref("global", 0, 100);
        acc = _v9;
        const _v10: any = 215;
        acc = _v10;
        const _v11: any = 2;
        acc = _v11;
        const _v12: any = await rt.call(215, "Format", [_v9, _v10, _v11], this);
        acc = _v12;
        const _v13: any = rt.ref("global", 0, 100);
        acc = _v13;
        const _v14: any = 215;
        acc = _v14;
        const _v15: any = 3;
        acc = _v15;
        const _v16: any = await rt.call(215, "Format", [_v13, _v14, _v15], this);
        acc = _v16;
        const _v17: any = rt.ref("global", 0, 100);
        acc = _v17;
        const _v18: any = 215;
        acc = _v18;
        const _v19: any = 4;
        acc = _v19;
        const _v20: any = await rt.call(215, "Format", [_v17, _v18, _v19], this);
        acc = _v20;
        const _v21: any = rt.ref("global", 0, 100);
        acc = _v21;
        const _v22: any = 215;
        acc = _v22;
        const _v23: any = 5;
        acc = _v23;
        const _v24: any = await rt.call(215, "Format", [_v21, _v22, _v23], this);
        acc = _v24;
        const _v25: any = rt.ref("global", 0, 100);
        acc = _v25;
        const _v26: any = 215;
        acc = _v26;
        const _v27: any = 6;
        acc = _v27;
        const _v28: any = await rt.call(215, "Format", [_v25, _v26, _v27], this);
        acc = _v28;
        const _v29: any = rt.ref("global", 0, 100);
        acc = _v29;
        const _v30: any = 215;
        acc = _v30;
        const _v31: any = 7;
        acc = _v31;
        const _v32: any = await rt.call(215, "Format", [_v29, _v30, _v31], this);
        acc = _v32;
        const _v33: any = rt.ref("global", 0, 100);
        acc = _v33;
        const _v34: any = 215;
        acc = _v34;
        const _v35: any = 8;
        acc = _v35;
        const _v36: any = await rt.call(215, "Format", [_v33, _v34, _v35], this);
        acc = _v36;
        const _v37: any = rt.ref("global", 0, 100);
        acc = _v37;
        const _v38: any = 215;
        acc = _v38;
        const _v39: any = 9;
        acc = _v39;
        const _v40: any = await rt.call(215, "Format", [_v37, _v38, _v39], this);
        acc = _v40;
        const _v41: any = rt.ref("global", 0, 100);
        acc = _v41;
        const _v42: any = 215;
        acc = _v42;
        const _v43: any = 10;
        acc = _v43;
        const _v44: any = await rt.call(215, "Format", [_v41, _v42, _v43], this);
        acc = _v44;
        const _v45: any = rt.ref("global", 0, 100);
        acc = _v45;
        const _v46: any = 215;
        acc = _v46;
        const _v47: any = 11;
        acc = _v47;
        const _v48: any = await rt.call(215, "Format", [_v45, _v46, _v47], this);
        acc = _v48;
        const _v49: any = rt.ref("global", 0, 100);
        acc = _v49;
        const _v50: any = 215;
        acc = _v50;
        const _v51: any = 12;
        acc = _v51;
        const _v52: any = await rt.call(215, "Format", [_v49, _v50, _v51], this);
        acc = _v52;
        const _v53: any = rt.ref("global", 0, 100);
        acc = _v53;
        const _v54: any = 215;
        acc = _v54;
        const _v55: any = 13;
        acc = _v55;
        const _v56: any = await rt.call(215, "Format", [_v53, _v54, _v55], this);
        acc = _v56;
        const _v57: any = rt.ref("global", 0, 100);
        acc = _v57;
        const _v58: any = 215;
        acc = _v58;
        const _v59: any = 14;
        acc = _v59;
        const _v60: any = await rt.call(215, "Format", [_v57, _v58, _v59], this);
        acc = _v60;
        const _v61: any = rt.ref("global", 0, 100);
        acc = _v61;
        const _v62: any = 215;
        acc = _v62;
        const _v63: any = 15;
        acc = _v63;
        const _v64: any = await rt.call(215, "Format", [_v61, _v62, _v63], this);
        acc = _v64;
        const _v65: any = rt.ref("global", 0, 100);
        acc = _v65;
        const _v66: any = 215;
        acc = _v66;
        const _v67: any = 16;
        acc = _v67;
        const _v68: any = await rt.call(215, "Format", [_v65, _v66, _v67], this);
        acc = _v68;
        const _v69: any = rt.ref("global", 0, 100);
        acc = _v69;
        const _v70: any = 215;
        acc = _v70;
        const _v71: any = 17;
        acc = _v71;
        const _v72: any = await rt.call(215, "Format", [_v69, _v70, _v71], this);
        acc = _v72;
        const _v73: any = rt.ref("global", 0, 100);
        acc = _v73;
        const _v74: any = 215;
        acc = _v74;
        const _v75: any = 18;
        acc = _v75;
        const _v76: any = await rt.call(215, "Format", [_v73, _v74, _v75], this);
        acc = _v76;
        const _v77: any = rt.ref("global", 0, 100);
        acc = _v77;
        const _v78: any = 215;
        acc = _v78;
        const _v79: any = 19;
        acc = _v79;
        const _v80: any = await rt.call(215, "Format", [_v77, _v78, _v79], this);
        acc = _v80;
        const _v81: any = rt.ref("global", 0, 100);
        acc = _v81;
        const _v82: any = 215;
        acc = _v82;
        const _v83: any = 20;
        acc = _v83;
        const _v84: any = await rt.call(215, "Format", [_v81, _v82, _v83], this);
        acc = _v84;
        const _v85: any = rt.ref("global", 0, 100);
        acc = _v85;
        const _v86: any = 215;
        acc = _v86;
        const _v87: any = 21;
        acc = _v87;
        const _v88: any = await rt.call(215, "Format", [_v85, _v86, _v87], this);
        acc = _v88;
        const _v89: any = rt.ref("global", 0, 100);
        acc = _v89;
        const _v90: any = 215;
        acc = _v90;
        const _v91: any = 22;
        acc = _v91;
        const _v92: any = await rt.call(215, "Format", [_v89, _v90, _v91], this);
        acc = _v92;
        const _v93: any = rt.ref("global", 0, 100);
        acc = _v93;
        const _v94: any = 215;
        acc = _v94;
        const _v95: any = 23;
        acc = _v95;
        const _v96: any = await rt.call(215, "Format", [_v93, _v94, _v95], this);
        acc = _v96;
        const _v97: any = rt.ref("global", 0, 100);
        acc = _v97;
        const _v98: any = 215;
        acc = _v98;
        const _v99: any = 24;
        acc = _v99;
        const _v100: any = await rt.call(215, "Format", [_v97, _v98, _v99], this);
        acc = _v100;
        const _v101: any = rt.ref("global", 0, 100);
        acc = _v101;
        const _v102: any = 215;
        acc = _v102;
        const _v103: any = 25;
        acc = _v103;
        const _v104: any = await rt.call(215, "Format", [_v101, _v102, _v103], this);
        acc = _v104;
        const _v105: any = rt.ref("global", 0, 100);
        acc = _v105;
        const _v106: any = 215;
        acc = _v106;
        const _v107: any = 26;
        acc = _v107;
        const _v108: any = await rt.call(215, "Format", [_v105, _v106, _v107], this);
        acc = _v108;
        const _v109: any = rt.ref("global", 0, 100);
        acc = _v109;
        const _v110: any = 215;
        acc = _v110;
        const _v111: any = 27;
        acc = _v111;
        const _v112: any = await rt.call(215, "Format", [_v109, _v110, _v111], this);
        acc = _v112;
        const _v113: any = rt.ref("global", 0, 100);
        acc = _v113;
        const _v114: any = 215;
        acc = _v114;
        const _v115: any = 28;
        acc = _v115;
        const _v116: any = await rt.call(215, "Format", [_v113, _v114, _v115], this);
        acc = _v116;
        const _v117: any = rt.ref("global", 0, 100);
        acc = _v117;
        const _v118: any = 215;
        acc = _v118;
        const _v119: any = 29;
        acc = _v119;
        const _v120: any = await rt.call(215, "Format", [_v117, _v118, _v119], this);
        acc = _v120;
        const _v121: any = rt.ref("global", 0, 100);
        acc = _v121;
        const _v122: any = 215;
        acc = _v122;
        const _v123: any = 30;
        acc = _v123;
        const _v124: any = await rt.call(215, "Format", [_v121, _v122, _v123], this);
        acc = _v124;
        const _v125: any = rt.ref("global", 0, 100);
        acc = _v125;
        const _v126: any = 215;
        acc = _v126;
        const _v127: any = 31;
        acc = _v127;
        const _v128: any = await rt.call(215, "Format", [_v125, _v126, _v127], this);
        acc = _v128;
        const _v129: any = rt.ref("global", 0, 100);
        acc = _v129;
        const _v130: any = 215;
        acc = _v130;
        const _v131: any = 32;
        acc = _v131;
        const _v132: any = await rt.call(215, "Format", [_v129, _v130, _v131], this);
        acc = _v132;
        const _v133: any = rt.ref("global", 0, 100);
        acc = _v133;
        const _v134: any = 215;
        acc = _v134;
        const _v135: any = 33;
        acc = _v135;
        const _v136: any = await rt.call(215, "Format", [_v133, _v134, _v135], this);
        acc = _v136;
        const _v137: any = rt.ref("global", 0, 100);
        acc = _v137;
        const _v138: any = 215;
        acc = _v138;
        const _v139: any = 34;
        acc = _v139;
        const _v140: any = await rt.call(215, "Format", [_v137, _v138, _v139], this);
        acc = _v140;
        const _v141: any = rt.ref("global", 0, 100);
        acc = _v141;
        const _v142: any = 215;
        acc = _v142;
        const _v143: any = 35;
        acc = _v143;
        const _v144: any = await rt.call(215, "Format", [_v141, _v142, _v143], this);
        acc = _v144;
        const _v145: any = rt.ref("global", 0, 100);
        acc = _v145;
        const _v146: any = 215;
        acc = _v146;
        const _v147: any = 36;
        acc = _v147;
        const _v148: any = await rt.call(215, "Format", [_v145, _v146, _v147], this);
        acc = _v148;
        const _v149: any = rt.ref("global", 0, 100);
        acc = _v149;
        const _v150: any = 215;
        acc = _v150;
        const _v151: any = 37;
        acc = _v151;
        const _v152: any = await rt.call(215, "Format", [_v149, _v150, _v151], this);
        acc = _v152;
        const _v153: any = rt.ref("global", 0, 100);
        acc = _v153;
        const _v154: any = 215;
        acc = _v154;
        const _v155: any = 38;
        acc = _v155;
        const _v156: any = await rt.call(215, "Format", [_v153, _v154, _v155], this);
        acc = _v156;
        const _v157: any = rt.ref("global", 0, 100);
        acc = _v157;
        const _v158: any = 215;
        acc = _v158;
        const _v159: any = 39;
        acc = _v159;
        const _v160: any = await rt.call(215, "Format", [_v157, _v158, _v159], this);
        acc = _v160;
        const _v161: any = rt.ref("global", 0, 100);
        acc = _v161;
        const _v162: any = 215;
        acc = _v162;
        const _v163: any = 40;
        acc = _v163;
        const _v164: any = await rt.call(215, "Format", [_v161, _v162, _v163], this);
        acc = _v164;
        const _v165: any = rt.ref("global", 0, 100);
        acc = _v165;
        const _v166: any = 215;
        acc = _v166;
        const _v167: any = 41;
        acc = _v167;
        const _v168: any = await rt.call(215, "Format", [_v165, _v166, _v167], this);
        acc = _v168;
        const _v169: any = rt.ref("global", 0, 100);
        acc = _v169;
        const _v170: any = 215;
        acc = _v170;
        const _v171: any = 42;
        acc = _v171;
        const _v172: any = await rt.call(215, "Format", [_v169, _v170, _v171], this);
        acc = _v172;
        const _v173: any = rt.ref("global", 0, 100);
        acc = _v173;
        const _v174: any = 215;
        acc = _v174;
        const _v175: any = 43;
        acc = _v175;
        const _v176: any = await rt.call(215, "Format", [_v173, _v174, _v175], this);
        acc = _v176;
        const _v177: any = rt.ref("global", 0, 100);
        acc = _v177;
        const _v178: any = 215;
        acc = _v178;
        const _v179: any = 44;
        acc = _v179;
        const _v180: any = await rt.call(215, "Format", [_v177, _v178, _v179], this);
        acc = _v180;
        const _v181: any = rt.ref("global", 0, 100);
        acc = _v181;
        const _v182: any = 215;
        acc = _v182;
        const _v183: any = 45;
        acc = _v183;
        const _v184: any = await rt.call(215, "Format", [_v181, _v182, _v183], this);
        acc = _v184;
        const _v185: any = rt.ref("global", 0, 100);
        acc = _v185;
        const _v186: any = 215;
        acc = _v186;
        const _v187: any = 46;
        acc = _v187;
        const _v188: any = await rt.call(215, "Format", [_v185, _v186, _v187], this);
        acc = _v188;
        const _v189: any = rt.ref("global", 0, 100);
        acc = _v189;
        const _v190: any = 215;
        acc = _v190;
        const _v191: any = 47;
        acc = _v191;
        const _v192: any = await rt.call(215, "Format", [_v189, _v190, _v191], this);
        acc = _v192;
        const _v193: any = rt.ref("global", 0, 100);
        acc = _v193;
        const _v194: any = 215;
        acc = _v194;
        const _v195: any = 48;
        acc = _v195;
        const _v196: any = await rt.call(215, "Format", [_v193, _v194, _v195], this);
        acc = _v196;
        const _v197: any = rt.ref("global", 0, 100);
        acc = _v197;
        const _v198: any = 215;
        acc = _v198;
        const _v199: any = 49;
        acc = _v199;
        const _v200: any = await rt.call(215, "Format", [_v197, _v198, _v199], this);
        acc = _v200;
        const _v201: any = rt.ref("global", 0, 100);
        acc = _v201;
        const _v202: any = 215;
        acc = _v202;
        const _v203: any = 50;
        acc = _v203;
        const _v204: any = await rt.call(215, "Format", [_v201, _v202, _v203], this);
        acc = _v204;
        const _v205: any = rt.ref("global", 0, 100);
        acc = _v205;
        const _v206: any = 215;
        acc = _v206;
        const _v207: any = 51;
        acc = _v207;
        const _v208: any = await rt.call(215, "Format", [_v205, _v206, _v207], this);
        acc = _v208;
        const _v209: any = rt.ref("global", 0, 100);
        acc = _v209;
        const _v210: any = 215;
        acc = _v210;
        const _v211: any = 52;
        acc = _v211;
        const _v212: any = await rt.call(215, "Format", [_v209, _v210, _v211], this);
        acc = _v212;
        const _v213: any = rt.ref("global", 0, 100);
        acc = _v213;
        const _v214: any = 215;
        acc = _v214;
        const _v215: any = 53;
        acc = _v215;
        const _v216: any = await rt.call(215, "Format", [_v213, _v214, _v215], this);
        acc = _v216;
        const _v217: any = rt.ref("global", 0, 100);
        acc = _v217;
        const _v218: any = 215;
        acc = _v218;
        const _v219: any = 54;
        acc = _v219;
        const _v220: any = await rt.call(215, "Format", [_v217, _v218, _v219], this);
        acc = _v220;
        const _v221: any = rt.ref("global", 0, 100);
        acc = _v221;
        const _v222: any = 215;
        acc = _v222;
        const _v223: any = 55;
        acc = _v223;
        const _v224: any = await rt.call(215, "Format", [_v221, _v222, _v223], this);
        acc = _v224;
        const _v225: any = rt.ref("global", 0, 100);
        acc = _v225;
        const _v226: any = 215;
        acc = _v226;
        const _v227: any = 56;
        acc = _v227;
        const _v228: any = await rt.call(215, "Format", [_v225, _v226, _v227], this);
        acc = _v228;
        const _v229: any = rt.ref("global", 0, 100);
        acc = _v229;
        const _v230: any = 215;
        acc = _v230;
        const _v231: any = 57;
        acc = _v231;
        const _v232: any = await rt.call(215, "Format", [_v229, _v230, _v231], this);
        acc = _v232;
        const _v233: any = rt.ref("global", 0, 100);
        acc = _v233;
        const _v234: any = 215;
        acc = _v234;
        const _v235: any = 58;
        acc = _v235;
        const _v236: any = await rt.call(215, "Format", [_v233, _v234, _v235], this);
        acc = _v236;
        const _v237: any = rt.ref("global", 0, 100);
        acc = _v237;
        const _v238: any = 215;
        acc = _v238;
        const _v239: any = 59;
        acc = _v239;
        const _v240: any = await rt.call(215, "Format", [_v237, _v238, _v239], this);
        acc = _v240;
        const _v241: any = rt.ref("global", 0, 100);
        acc = _v241;
        const _v242: any = 215;
        acc = _v242;
        const _v243: any = 60;
        acc = _v243;
        const _v244: any = await rt.call(215, "Format", [_v241, _v242, _v243], this);
        acc = _v244;
        const _v245: any = rt.ref("global", 0, 100);
        acc = _v245;
        const _v246: any = 215;
        acc = _v246;
        const _v247: any = 61;
        acc = _v247;
        const _v248: any = await rt.call(215, "Format", [_v245, _v246, _v247], this);
        acc = _v248;
        const _v249: any = rt.ref("global", 0, 100);
        acc = _v249;
        const _v250: any = 215;
        acc = _v250;
        const _v251: any = 62;
        acc = _v251;
        const _v252: any = await rt.call(215, "Format", [_v249, _v250, _v251], this);
        acc = _v252;
        const _v253: any = rt.ref("global", 0, 100);
        acc = _v253;
        const _v254: any = 215;
        acc = _v254;
        const _v255: any = 63;
        acc = _v255;
        const _v256: any = await rt.call(215, "Format", [_v253, _v254, _v255], this);
        acc = _v256;
        return acc;
      },
    },
    exports: {"0": "newspaper"},
  });
}
