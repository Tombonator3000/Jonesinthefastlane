// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/weekend.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 7af7f96c7662a6d0d0b5371144891b6e753805d6a79895796775ac0f0be197ae
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(232, {
    name: "weekend",
    uses: [0, 110, 255, 891, 999],
    locals: [0, 0, 0, 0, 0, 0, 0, 0, 0],
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
        name: "weekend",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI weekend.sc: weekend.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = rt.global(518);
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = 3;
              acc = _v4;
              const _v5: any = await rt.call(0, "proc0_17", [_v4], this);
              acc = _v5;
              _v1 = _v5;
              const _v6: any = -1;
              acc = _v6;
              const _v7: any = rt.setLocal(232, 8, _v6);
              acc = _v7;
              _v1 = _v7;
              const _v8: any = rt.object(232, "dialogKeyMouse");
              acc = _v8;
              const _v9: any = rt.set(this, "keyMouseList", _v8);
              acc = _v9;
              _v1 = _v9;
              const _v10: any = rt.global(502);
              acc = _v10;
              const _v11: any = rt.set(this, "prevDialog", _v10);
              acc = _v11;
              _v1 = _v11;
              const _v12: any = this;
              acc = _v12;
              const _v13: any = rt.setGlobal(502, _v12);
              acc = _v13;
              _v1 = _v13;
              const _v14: any = (args[0] ?? 0);
              acc = _v14;
              const _v15: any = rt.set(this, "client", _v14);
              acc = _v15;
              _v1 = _v15;
              const _v16: any = 9;
              acc = _v16;
              const _v17: any = rt.global(477);
              acc = _v17;
              const _v18: any = await rt.send(_v17, "play", [_v16]);
              acc = _v18;
              _v1 = _v18;
              let _v19: any = acc;
              const _v20: any = rt.global(302);
              acc = _v20;
              const _v21: any = await rt.send(_v20, "playing", []);
              acc = _v21;
              const _v22: any = 29;
              acc = _v22;
              const _v23: any = rt.op("==", ...[_v21, _v22]);
              acc = _v23;
              _v19 = _v23;
              if (rt.truth(_v23)) {
                const _v24: any = rt.object(232, "computerScript");
                acc = _v24;
                const _v25: any = this;
                acc = _v25;
                const _v26: any = await rt.send(_v25, "setScript", [_v24]);
                acc = _v26;
                _v19 = _v26;
                const _v27: any = rt.object(232, "computerScript");
                acc = _v27;
                const _v28: any = await rt.send(_v27, "cue", []);
                acc = _v28;
                _v19 = _v28;
              }
              acc = _v19;
              _v1 = _v19;
              const _v29: any = 0;
              acc = _v29;
              const _v30: any = rt.setGlobal(413, _v29);
              acc = _v30;
              _v1 = _v30;
              let _v31: any = acc;
              const _v32: any = await rt.call(0, "proc0_11", [], this);
              acc = _v32;
              _v31 = _v32;
              if (rt.truth(_v32)) {
                const _v33: any = 5;
                acc = _v33;
                const _v34: any = 20;
                acc = _v34;
                const _v35: any = await rt.call(232, "Random", [_v33, _v34], this);
                acc = _v35;
                _v31 = _v35;
              } else {
                const _v36: any = 0;
                acc = _v36;
                _v31 = _v36;
              }
              acc = _v31;
              const _v37: any = rt.setLocal(232, 3, _v31);
              acc = _v37;
              _v1 = _v37;
              const _v38: any = 15;
              acc = _v38;
              const _v39: any = 55;
              acc = _v39;
              const _v40: any = await rt.call(232, "Random", [_v38, _v39], this);
              acc = _v40;
              const _v41: any = rt.setLocal(232, 4, _v40);
              acc = _v41;
              _v1 = _v41;
              const _v42: any = 50;
              acc = _v42;
              const _v43: any = 100;
              acc = _v43;
              const _v44: any = await rt.call(232, "Random", [_v42, _v43], this);
              acc = _v44;
              const _v45: any = rt.setLocal(232, 5, _v44);
              acc = _v45;
              _v1 = _v45;
              const _v46: any = rt.global(59);
              acc = _v46;
              const _v47: any = rt.object(232, "background");
              acc = _v47;
              const _v48: any = rt.object(232, "weekendText");
              acc = _v48;
              const _v49: any = rt.object(232, "exitButton");
              acc = _v49;
              const _v50: any = 102;
              acc = _v50;
              const _v51: any = 153;
              acc = _v51;
              const _v52: any = 69;
              acc = _v52;
              const _v53: any = 44;
              acc = _v53;
              const _v54: any = 0;
              acc = _v54;
              const _v55: any = 15;
              acc = _v55;
              const _v56: any = this;
              acc = _v56;
              const _v57: any = await rt.send(_v56, "window", [_v46]);
              acc = _v57;
              const _v58: any = await rt.send(_v56, "add", [_v47, _v48, _v49]);
              acc = _v58;
              const _v59: any = await rt.send(_v56, "eachElementDo", [_v50]);
              acc = _v59;
              const _v60: any = await rt.send(_v56, "eachElementDo", [_v51]);
              acc = _v60;
              const _v61: any = await rt.send(_v56, "moveTo", [_v52, _v53]);
              acc = _v61;
              const _v62: any = await rt.send(_v56, "open", [_v54, _v55]);
              acc = _v62;
              _v1 = _v62;
              const _v63: any = this;
              acc = _v63;
              const _v64: any = rt.get(this, "keyMouseList");
              acc = _v64;
              const _v65: any = rt.object(232, "exitButton");
              acc = _v65;
              const _v66: any = await rt.call(0, "proc0_9", [_v63, _v64, _v65], this);
              acc = _v66;
              _v1 = _v66;
              const _v67: any = rt.get(this, "keyMouseList");
              acc = _v67;
              const _v68: any = rt.object(891, "KeyMouse");
              acc = _v68;
              const _v69: any = await rt.send(_v68, "setList", [_v67]);
              acc = _v69;
              _v1 = _v69;
              const _v70: any = rt.global(302);
              acc = _v70;
              const _v71: any = await rt.send(_v70, "cash", []);
              acc = _v71;
              const _v72: any = 1;
              acc = _v72;
              const _v73: any = rt.op("-", ...[_v71, _v72]);
              acc = _v73;
              const _v74: any = rt.global(305);
              acc = _v74;
              const _v75: any = await rt.send(_v74, "setSize", []);
              acc = _v75;
              const _v76: any = await rt.send(_v74, "value", [_v73]);
              acc = _v76;
              const _v77: any = await rt.send(_v74, "draw", []);
              acc = _v77;
              _v1 = _v77;
            } else {
              const _v78: any = rt.get(this, "theItem");
              acc = _v78;
              const _v79: any = rt.object(891, "KeyMouse");
              acc = _v79;
              const _v80: any = await rt.send(_v79, "setCursor", [_v78]);
              acc = _v80;
              _v1 = _v80;
            }
            acc = _v1;
            const _v81: any = 0;
            acc = _v81;
            const _v82: any = rt.setGlobal(518, _v81);
            acc = _v82;
            const _v83: any = 0;
            acc = _v83;
            const _v84: any = 0;
            acc = _v84;
            const _v85: any = this;
            acc = _v85;
            const _v86: any = await rt.send(_v85, "doit", [_v83, _v84]);
            acc = _v86;
            const _v87: any = (temps[0] = _v86);
            acc = _v87;
            let _v88: any = acc;
            const _v89: any = (temps[0] ?? 0);
            acc = _v89;
            const _v90: any = await rt.call(232, "IsObject", [_v89], this);
            acc = _v90;
            _v88 = _v90;
            if (rt.truth(_v90)) {
              let _v91: any = acc;
              const _v92: any = (temps[0] ?? 0);
              acc = _v92;
              const _v93: any = this;
              acc = _v93;
              const _v94: any = await rt.send(_v93, "contains", [_v92]);
              acc = _v94;
              _v91 = _v94;
              if (rt.truth(_v94)) {
                const _v95: any = 0;
                acc = _v95;
                const _v96: any = (temps[0] = _v95);
                acc = _v96;
                _v91 = _v96;
              }
              acc = _v91;
              _v88 = _v91;
            } else {
              const _v97: any = 1;
              acc = _v97;
              const _v98: any = (temps[0] = _v97);
              acc = _v98;
              _v88 = _v98;
            }
            acc = _v88;
            const _v99: any = rt.global(477);
            acc = _v99;
            const _v100: any = await rt.send(_v99, "fade", []);
            acc = _v100;
            let _v101: any = acc;
            const _v102: any = rt.get(this, "prevDialog");
            acc = _v102;
            _v101 = _v102;
            if (rt.truth(_v102)) {
              const _v103: any = rt.get(this, "prevDialog");
              acc = _v103;
              const _v104: any = await rt.send(_v103, "keyMouseList", []);
              acc = _v104;
              _v101 = _v104;
            } else {
              const _v105: any = rt.global(432);
              acc = _v105;
              _v101 = _v105;
            }
            acc = _v101;
            const _v106: any = rt.object(891, "KeyMouse");
            acc = _v106;
            const _v107: any = await rt.send(_v106, "setList", [_v101]);
            acc = _v107;
            const _v108: any = rt.get(this, "keyMouseList");
            acc = _v108;
            const _v109: any = await rt.send(_v108, "release", []);
            acc = _v109;
            const _v110: any = await rt.send(_v108, "dispose", []);
            acc = _v110;
            const _v111: any = rt.get(this, "prevDialog");
            acc = _v111;
            const _v112: any = rt.setGlobal(502, _v111);
            acc = _v112;
            const _v113: any = this;
            acc = _v113;
            const _v114: any = 291;
            acc = _v114;
            const _v115: any = await rt.call(0, "proc0_15", [_v113, _v114], this);
            acc = _v115;
            const _v116: any = this;
            acc = _v116;
            const _v117: any = await rt.send(_v116, "dispose", []);
            acc = _v117;
            const _v118: any = 0;
            acc = _v118;
            const _v119: any = await rt.call(232, "SetPort", [_v118], this);
            acc = _v119;
            const _v120: any = 11;
            acc = _v120;
            const _v121: any = rt.get(this, "nsTop");
            acc = _v121;
            const _v122: any = 1;
            acc = _v122;
            const _v123: any = rt.op("+", ...[_v121, _v122]);
            acc = _v123;
            const _v124: any = rt.get(this, "nsLeft");
            acc = _v124;
            const _v125: any = rt.get(this, "nsBottom");
            acc = _v125;
            const _v126: any = 1;
            acc = _v126;
            const _v127: any = rt.op("-", ...[_v125, _v126]);
            acc = _v127;
            const _v128: any = rt.get(this, "nsRight");
            acc = _v128;
            const _v129: any = 3;
            acc = _v129;
            const _v130: any = rt.op("-", ...[_v128, _v129]);
            acc = _v130;
            const _v131: any = 2;
            acc = _v131;
            const _v132: any = 0;
            acc = _v132;
            const _v133: any = 0;
            acc = _v133;
            const _v134: any = await rt.call(232, "Graph", [_v120, _v123, _v124, _v127, _v130, _v131, _v132, _v133], this);
            acc = _v134;
            const _v135: any = 0;
            acc = _v135;
            const _v136: any = await rt.call(0, "proc0_17", [_v135], this);
            acc = _v136;
            const _v137: any = (temps[0] ?? 0);
            acc = _v137;
            const _acc138: any = acc;
            const _v139: any = 232;
            acc = _v139;
            const _args140: any[] = [_v139];
            await rt.call(232, "DisposeScript", _args140, this);
            const _v141: any = _args140.length === 2 ? _args140[1] : _acc138;
            acc = _v141;
            return acc;
          },
          // SCI weekend.sc: weekend.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.superSend(this, {"script": 232, "name": "weekend"}, "draw", []);
            acc = _v1;
            let _v2: any = acc;
            const _v3: any = rt.global(518);
            acc = _v3;
            _v2 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = rt.global(302);
              acc = _v4;
              const _v5: any = await rt.send(_v4, "cash", []);
              acc = _v5;
              const _v6: any = 1;
              acc = _v6;
              const _v7: any = rt.op("-", ...[_v5, _v6]);
              acc = _v7;
              const _v8: any = rt.global(305);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "setSize", []);
              acc = _v9;
              const _v10: any = await rt.send(_v8, "value", [_v7]);
              acc = _v10;
              const _v11: any = await rt.send(_v8, "draw", []);
              acc = _v11;
              _v2 = _v11;
            }
            acc = _v2;
            return acc;
          },
        },
      },
      {
        name: "background",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"view": 608, "priority": 9},
        methods: {
        },
      },
      {
        name: "exitButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 99, "nsTop": 108, "nsLeft": 143, "key": 120, "view": 250, "priority": 15},
        methods: {
        },
      },
      {
        name: "weekendText",
        className: "DText",
        parent: {"script": 255, "name": "DText"},
        isClass: false,
        properties: {},
        methods: {
          // SCI weekend.sc: weekendText.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "setPort", []);
            acc = _v2;
            let _v3: any = acc;
            _branch4: {
              const _v5: any = rt.local(232, 8);
              acc = _v5;
              const _v6: any = -1;
              acc = _v6;
              const _v7: any = rt.op("!=", ...[_v5, _v6]);
              acc = _v7;
              _v3 = _v7;
              acc = _v3;
              if (rt.truth(_v3)) {
                const _v8: any = 1;
                acc = _v8;
                const _v9: any = 20;
                acc = _v9;
                const _v10: any = await rt.call(232, "Random", [_v8, _v9], this);
                acc = _v10;
                const _v11: any = rt.setLocal(232, 7, _v10);
                acc = _v11;
                _v3 = _v11;
                const _v12: any = rt.local(232, 8);
                acc = _v12;
                const _v13: any = rt.local(232, 7);
                acc = _v13;
                const _v14: any = await rt.call(232, "localproc_2", [_v12, _v13], this);
                acc = _v14;
                _v3 = _v14;
                break _branch4;
              }
              let _v15: any = 1;
              if (rt.truth(_v15)) {
                const _v16: any = 37;
                acc = _v16;
                const _v17: any = rt.global(302);
                acc = _v17;
                const _v18: any = await rt.send(_v17, "consumables", []);
                acc = _v18;
                const _v19: any = await rt.send(_v18, "objectAtIndex", [_v16]);
                acc = _v19;
                const _v20: any = rt.setLocal(232, 1, _v19);
                acc = _v20;
                _v15 = _v20;
              }
              if (rt.truth(_v15)) {
                const _v21: any = rt.local(232, 1);
                acc = _v21;
                const _v22: any = await rt.send(_v21, "quantity", []);
                acc = _v22;
                _v15 = _v22;
              }
              acc = _v15;
              _v3 = _v15;
              acc = _v3;
              if (rt.truth(_v3)) {
                const _v23: any = 14;
                acc = _v23;
                const _v24: any = rt.setLocal(232, 8, _v23);
                acc = _v24;
                _v3 = _v24;
                const _v25: any = rt.local(232, 4);
                acc = _v25;
                const _v26: any = rt.setLocal(232, 7, _v25);
                acc = _v26;
                _v3 = _v26;
                const _v27: any = 14;
                acc = _v27;
                const _v28: any = rt.local(232, 4);
                acc = _v28;
                const _v29: any = await rt.call(232, "localproc_2", [_v27, _v28], this);
                acc = _v29;
                _v3 = _v29;
                const _v30: any = 0;
                acc = _v30;
                const _v31: any = rt.local(232, 1);
                acc = _v31;
                const _v32: any = await rt.send(_v31, "quantity", [_v30]);
                acc = _v32;
                _v3 = _v32;
                break _branch4;
              }
              let _v33: any = 1;
              if (rt.truth(_v33)) {
                const _v34: any = 38;
                acc = _v34;
                const _v35: any = rt.global(302);
                acc = _v35;
                const _v36: any = await rt.send(_v35, "consumables", []);
                acc = _v36;
                const _v37: any = await rt.send(_v36, "objectAtIndex", [_v34]);
                acc = _v37;
                const _v38: any = rt.setLocal(232, 1, _v37);
                acc = _v38;
                _v33 = _v38;
              }
              if (rt.truth(_v33)) {
                const _v39: any = rt.local(232, 1);
                acc = _v39;
                const _v40: any = await rt.send(_v39, "quantity", []);
                acc = _v40;
                _v33 = _v40;
              }
              acc = _v33;
              _v3 = _v33;
              acc = _v3;
              if (rt.truth(_v3)) {
                const _v41: any = 15;
                acc = _v41;
                const _v42: any = rt.setLocal(232, 8, _v41);
                acc = _v42;
                _v3 = _v42;
                const _v43: any = rt.local(232, 4);
                acc = _v43;
                const _v44: any = rt.setLocal(232, 7, _v43);
                acc = _v44;
                _v3 = _v44;
                const _v45: any = 15;
                acc = _v45;
                const _v46: any = rt.local(232, 4);
                acc = _v46;
                const _v47: any = await rt.call(232, "localproc_2", [_v45, _v46], this);
                acc = _v47;
                _v3 = _v47;
                const _v48: any = 0;
                acc = _v48;
                const _v49: any = rt.local(232, 1);
                acc = _v49;
                const _v50: any = await rt.send(_v49, "quantity", [_v48]);
                acc = _v50;
                _v3 = _v50;
                break _branch4;
              }
              let _v51: any = 1;
              if (rt.truth(_v51)) {
                const _v52: any = 39;
                acc = _v52;
                const _v53: any = rt.global(302);
                acc = _v53;
                const _v54: any = await rt.send(_v53, "consumables", []);
                acc = _v54;
                const _v55: any = await rt.send(_v54, "objectAtIndex", [_v52]);
                acc = _v55;
                const _v56: any = rt.setLocal(232, 1, _v55);
                acc = _v56;
                _v51 = _v56;
              }
              if (rt.truth(_v51)) {
                const _v57: any = rt.local(232, 1);
                acc = _v57;
                const _v58: any = await rt.send(_v57, "quantity", []);
                acc = _v58;
                _v51 = _v58;
              }
              acc = _v51;
              _v3 = _v51;
              acc = _v3;
              if (rt.truth(_v3)) {
                const _v59: any = 16;
                acc = _v59;
                const _v60: any = rt.setLocal(232, 8, _v59);
                acc = _v60;
                _v3 = _v60;
                const _v61: any = rt.local(232, 4);
                acc = _v61;
                const _v62: any = rt.setLocal(232, 7, _v61);
                acc = _v62;
                _v3 = _v62;
                const _v63: any = 16;
                acc = _v63;
                const _v64: any = rt.local(232, 4);
                acc = _v64;
                const _v65: any = await rt.call(232, "localproc_2", [_v63, _v64], this);
                acc = _v65;
                _v3 = _v65;
                const _v66: any = 0;
                acc = _v66;
                const _v67: any = rt.local(232, 1);
                acc = _v67;
                const _v68: any = await rt.send(_v67, "quantity", [_v66]);
                acc = _v68;
                _v3 = _v68;
                break _branch4;
              }
              const _v69: any = await rt.call(232, "localproc_1", [], this);
              acc = _v69;
              const _v70: any = rt.setLocal(232, 0, _v69);
              acc = _v70;
              _v3 = _v70;
              acc = _v3;
              if (rt.truth(_v3)) {
                const _v71: any = rt.local(232, 0);
                acc = _v71;
                const _v72: any = rt.setLocal(232, 8, _v71);
                acc = _v72;
                _v3 = _v72;
                const _v73: any = rt.local(232, 3);
                acc = _v73;
                const _v74: any = rt.setLocal(232, 7, _v73);
                acc = _v74;
                _v3 = _v74;
                const _v75: any = rt.local(232, 0);
                acc = _v75;
                const _v76: any = rt.local(232, 3);
                acc = _v76;
                const _v77: any = await rt.call(232, "localproc_2", [_v75, _v76], this);
                acc = _v77;
                _v3 = _v77;
                break _branch4;
              }
              _loop78: for (;;) {
                const _v80: any = rt.global(421);
                acc = _v80;
                const _v81: any = 17;
                acc = _v81;
                const _v82: any = 60;
                acc = _v82;
                const _v83: any = await rt.call(232, "Random", [_v81, _v82], this);
                acc = _v83;
                const _v84: any = rt.setLocal(232, 8, _v83);
                acc = _v84;
                const _v85: any = rt.op("==", ...[_v80, _v84]);
                acc = _v85;
                if (!rt.truth(_v85)) break _loop78;
                _continue79: {
                  const _v86: any = 1;
                  acc = _v86;
                }
              }
              _v3 = acc;
              const _v87: any = rt.local(232, 8);
              acc = _v87;
              const _v88: any = rt.setGlobal(421, _v87);
              acc = _v88;
              _v3 = _v88;
              let _v89: any = acc;
              const _v90: any = rt.local(232, 8);
              acc = _v90;
              const _v91: any = 58;
              acc = _v91;
              const _v92: any = rt.op(">=", ...[_v90, _v91]);
              acc = _v92;
              _v89 = _v92;
              if (rt.truth(_v92)) {
                const _v93: any = 2;
                acc = _v93;
                const _v94: any = 4;
                acc = _v94;
                const _v95: any = await rt.call(232, "Random", [_v93, _v94], this);
                acc = _v95;
                const _v96: any = await rt.call(0, "proc0_13", [_v95], this);
                acc = _v96;
                _v89 = _v96;
              }
              acc = _v89;
              _v3 = _v89;
              const _v97: any = 0;
              acc = _v97;
              const _v98: any = rt.setLocal(232, 6, _v97);
              acc = _v98;
              _v3 = _v98;
              let _v99: any = acc;
              const _v100: any = await rt.call(0, "proc0_11", [], this);
              acc = _v100;
              _v99 = _v100;
              if (rt.truth(_v100)) {
                let _v101: any = acc;
                _branch102: {
                  const _v103: any = rt.local(232, 8);
                  acc = _v103;
                  const _v104: any = 44;
                  acc = _v104;
                  const _v105: any = rt.op("<=", ...[_v103, _v104]);
                  acc = _v105;
                  _v101 = _v105;
                  acc = _v101;
                  if (rt.truth(_v101)) {
                    let _v106: any = acc;
                    const _v107: any = await rt.call(0, "proc0_11", [], this);
                    acc = _v107;
                    const _v108: any = rt.local(232, 3);
                    acc = _v108;
                    const _v109: any = rt.op("<", ...[_v107, _v108]);
                    acc = _v109;
                    _v106 = _v109;
                    if (rt.truth(_v109)) {
                      const _v110: any = await rt.call(0, "proc0_11", [], this);
                      acc = _v110;
                      _v106 = _v110;
                    } else {
                      const _v111: any = rt.local(232, 3);
                      acc = _v111;
                      _v106 = _v111;
                    }
                    acc = _v106;
                    _v101 = _v106;
                    break _branch102;
                  }
                  const _v112: any = rt.local(232, 8);
                  acc = _v112;
                  const _v113: any = 52;
                  acc = _v113;
                  const _v114: any = rt.op("<=", ...[_v112, _v113]);
                  acc = _v114;
                  _v101 = _v114;
                  acc = _v101;
                  if (rt.truth(_v101)) {
                    let _v115: any = acc;
                    const _v116: any = await rt.call(0, "proc0_11", [], this);
                    acc = _v116;
                    const _v117: any = rt.local(232, 4);
                    acc = _v117;
                    const _v118: any = rt.op("<", ...[_v116, _v117]);
                    acc = _v118;
                    _v115 = _v118;
                    if (rt.truth(_v118)) {
                      const _v119: any = await rt.call(0, "proc0_11", [], this);
                      acc = _v119;
                      _v115 = _v119;
                    } else {
                      const _v120: any = rt.local(232, 4);
                      acc = _v120;
                      _v115 = _v120;
                    }
                    acc = _v115;
                    _v101 = _v115;
                    break _branch102;
                  }
                  const _v121: any = await rt.call(0, "proc0_11", [], this);
                  acc = _v121;
                  const _v122: any = rt.local(232, 5);
                  acc = _v122;
                  const _v123: any = rt.op("<", ...[_v121, _v122]);
                  acc = _v123;
                  _v101 = _v123;
                  acc = _v101;
                  if (rt.truth(_v101)) {
                    const _v124: any = await rt.call(0, "proc0_11", [], this);
                    acc = _v124;
                    _v101 = _v124;
                    break _branch102;
                  }
                  const _v125: any = rt.local(232, 5);
                  acc = _v125;
                  _v101 = _v125;
                  break _branch102;
                }
                acc = _v101;
                const _v126: any = rt.setLocal(232, 6, _v101);
                acc = _v126;
                _v99 = _v126;
              }
              acc = _v99;
              _v3 = _v99;
              const _v127: any = rt.local(232, 6);
              acc = _v127;
              const _v128: any = rt.setLocal(232, 7, _v127);
              acc = _v128;
              _v3 = _v128;
              const _v129: any = rt.local(232, 8);
              acc = _v129;
              const _v130: any = rt.local(232, 6);
              acc = _v130;
              const _v131: any = await rt.call(232, "localproc_2", [_v129, _v130], this);
              acc = _v131;
              _v3 = _v131;
              break _branch4;
            }
            acc = _v3;
            const _v132: any = this;
            acc = _v132;
            const _v133: any = await rt.send(_v132, "resetPort", []);
            acc = _v133;
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
          // SCI weekend.sc: computerScript.handleEvent
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
                  const _v18: any = 120;
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
                const _v26: any = await rt.superSend(this, {"script": 232, "name": "computerScript"}, "handleEvent", [_v24, _v25]);
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
      // SCI weekend.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = rt.ref("global", 0, 100);
        acc = _v1;
        const _v2: any = 232;
        acc = _v2;
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = await rt.call(232, "Format", [_v1, _v2, _v3], this);
        acc = _v4;
        const _v5: any = rt.ref("global", 0, 100);
        acc = _v5;
        const _v6: any = 232;
        acc = _v6;
        const _v7: any = 1;
        acc = _v7;
        const _v8: any = await rt.call(232, "Format", [_v5, _v6, _v7], this);
        acc = _v8;
        const _v9: any = rt.ref("global", 0, 100);
        acc = _v9;
        const _v10: any = 232;
        acc = _v10;
        const _v11: any = 2;
        acc = _v11;
        const _v12: any = await rt.call(232, "Format", [_v9, _v10, _v11], this);
        acc = _v12;
        const _v13: any = rt.ref("global", 0, 100);
        acc = _v13;
        const _v14: any = 232;
        acc = _v14;
        const _v15: any = 3;
        acc = _v15;
        const _v16: any = await rt.call(232, "Format", [_v13, _v14, _v15], this);
        acc = _v16;
        const _v17: any = rt.ref("global", 0, 100);
        acc = _v17;
        const _v18: any = 232;
        acc = _v18;
        const _v19: any = 4;
        acc = _v19;
        const _v20: any = await rt.call(232, "Format", [_v17, _v18, _v19], this);
        acc = _v20;
        const _v21: any = rt.ref("global", 0, 100);
        acc = _v21;
        const _v22: any = 232;
        acc = _v22;
        const _v23: any = 5;
        acc = _v23;
        const _v24: any = await rt.call(232, "Format", [_v21, _v22, _v23], this);
        acc = _v24;
        const _v25: any = rt.ref("global", 0, 100);
        acc = _v25;
        const _v26: any = 232;
        acc = _v26;
        const _v27: any = 6;
        acc = _v27;
        const _v28: any = await rt.call(232, "Format", [_v25, _v26, _v27], this);
        acc = _v28;
        const _v29: any = rt.ref("global", 0, 100);
        acc = _v29;
        const _v30: any = 232;
        acc = _v30;
        const _v31: any = 7;
        acc = _v31;
        const _v32: any = await rt.call(232, "Format", [_v29, _v30, _v31], this);
        acc = _v32;
        const _v33: any = rt.ref("global", 0, 100);
        acc = _v33;
        const _v34: any = 232;
        acc = _v34;
        const _v35: any = 8;
        acc = _v35;
        const _v36: any = await rt.call(232, "Format", [_v33, _v34, _v35], this);
        acc = _v36;
        const _v37: any = rt.ref("global", 0, 100);
        acc = _v37;
        const _v38: any = 232;
        acc = _v38;
        const _v39: any = 9;
        acc = _v39;
        const _v40: any = await rt.call(232, "Format", [_v37, _v38, _v39], this);
        acc = _v40;
        const _v41: any = rt.ref("global", 0, 100);
        acc = _v41;
        const _v42: any = 232;
        acc = _v42;
        const _v43: any = 10;
        acc = _v43;
        const _v44: any = await rt.call(232, "Format", [_v41, _v42, _v43], this);
        acc = _v44;
        const _v45: any = rt.ref("global", 0, 100);
        acc = _v45;
        const _v46: any = 232;
        acc = _v46;
        const _v47: any = 11;
        acc = _v47;
        const _v48: any = await rt.call(232, "Format", [_v45, _v46, _v47], this);
        acc = _v48;
        const _v49: any = rt.ref("global", 0, 100);
        acc = _v49;
        const _v50: any = 232;
        acc = _v50;
        const _v51: any = 12;
        acc = _v51;
        const _v52: any = await rt.call(232, "Format", [_v49, _v50, _v51], this);
        acc = _v52;
        const _v53: any = rt.ref("global", 0, 100);
        acc = _v53;
        const _v54: any = 232;
        acc = _v54;
        const _v55: any = 13;
        acc = _v55;
        const _v56: any = await rt.call(232, "Format", [_v53, _v54, _v55], this);
        acc = _v56;
        const _v57: any = rt.ref("global", 0, 100);
        acc = _v57;
        const _v58: any = 232;
        acc = _v58;
        const _v59: any = 14;
        acc = _v59;
        const _v60: any = await rt.call(232, "Format", [_v57, _v58, _v59], this);
        acc = _v60;
        const _v61: any = rt.ref("global", 0, 100);
        acc = _v61;
        const _v62: any = 232;
        acc = _v62;
        const _v63: any = 15;
        acc = _v63;
        const _v64: any = await rt.call(232, "Format", [_v61, _v62, _v63], this);
        acc = _v64;
        const _v65: any = rt.ref("global", 0, 100);
        acc = _v65;
        const _v66: any = 232;
        acc = _v66;
        const _v67: any = 16;
        acc = _v67;
        const _v68: any = await rt.call(232, "Format", [_v65, _v66, _v67], this);
        acc = _v68;
        const _v69: any = rt.ref("global", 0, 100);
        acc = _v69;
        const _v70: any = 232;
        acc = _v70;
        const _v71: any = 17;
        acc = _v71;
        const _v72: any = await rt.call(232, "Format", [_v69, _v70, _v71], this);
        acc = _v72;
        const _v73: any = rt.ref("global", 0, 100);
        acc = _v73;
        const _v74: any = 232;
        acc = _v74;
        const _v75: any = 18;
        acc = _v75;
        const _v76: any = await rt.call(232, "Format", [_v73, _v74, _v75], this);
        acc = _v76;
        const _v77: any = rt.ref("global", 0, 100);
        acc = _v77;
        const _v78: any = 232;
        acc = _v78;
        const _v79: any = 19;
        acc = _v79;
        const _v80: any = await rt.call(232, "Format", [_v77, _v78, _v79], this);
        acc = _v80;
        const _v81: any = rt.ref("global", 0, 100);
        acc = _v81;
        const _v82: any = 232;
        acc = _v82;
        const _v83: any = 20;
        acc = _v83;
        const _v84: any = await rt.call(232, "Format", [_v81, _v82, _v83], this);
        acc = _v84;
        const _v85: any = rt.ref("global", 0, 100);
        acc = _v85;
        const _v86: any = 232;
        acc = _v86;
        const _v87: any = 21;
        acc = _v87;
        const _v88: any = await rt.call(232, "Format", [_v85, _v86, _v87], this);
        acc = _v88;
        const _v89: any = rt.ref("global", 0, 100);
        acc = _v89;
        const _v90: any = 232;
        acc = _v90;
        const _v91: any = 22;
        acc = _v91;
        const _v92: any = await rt.call(232, "Format", [_v89, _v90, _v91], this);
        acc = _v92;
        const _v93: any = rt.ref("global", 0, 100);
        acc = _v93;
        const _v94: any = 232;
        acc = _v94;
        const _v95: any = 23;
        acc = _v95;
        const _v96: any = await rt.call(232, "Format", [_v93, _v94, _v95], this);
        acc = _v96;
        const _v97: any = rt.ref("global", 0, 100);
        acc = _v97;
        const _v98: any = 232;
        acc = _v98;
        const _v99: any = 24;
        acc = _v99;
        const _v100: any = await rt.call(232, "Format", [_v97, _v98, _v99], this);
        acc = _v100;
        const _v101: any = rt.ref("global", 0, 100);
        acc = _v101;
        const _v102: any = 232;
        acc = _v102;
        const _v103: any = 25;
        acc = _v103;
        const _v104: any = await rt.call(232, "Format", [_v101, _v102, _v103], this);
        acc = _v104;
        const _v105: any = rt.ref("global", 0, 100);
        acc = _v105;
        const _v106: any = 232;
        acc = _v106;
        const _v107: any = 26;
        acc = _v107;
        const _v108: any = await rt.call(232, "Format", [_v105, _v106, _v107], this);
        acc = _v108;
        const _v109: any = rt.ref("global", 0, 100);
        acc = _v109;
        const _v110: any = 232;
        acc = _v110;
        const _v111: any = 27;
        acc = _v111;
        const _v112: any = await rt.call(232, "Format", [_v109, _v110, _v111], this);
        acc = _v112;
        const _v113: any = rt.ref("global", 0, 100);
        acc = _v113;
        const _v114: any = 232;
        acc = _v114;
        const _v115: any = 28;
        acc = _v115;
        const _v116: any = await rt.call(232, "Format", [_v113, _v114, _v115], this);
        acc = _v116;
        const _v117: any = rt.ref("global", 0, 100);
        acc = _v117;
        const _v118: any = 232;
        acc = _v118;
        const _v119: any = 29;
        acc = _v119;
        const _v120: any = await rt.call(232, "Format", [_v117, _v118, _v119], this);
        acc = _v120;
        const _v121: any = rt.ref("global", 0, 100);
        acc = _v121;
        const _v122: any = 232;
        acc = _v122;
        const _v123: any = 30;
        acc = _v123;
        const _v124: any = await rt.call(232, "Format", [_v121, _v122, _v123], this);
        acc = _v124;
        const _v125: any = rt.ref("global", 0, 100);
        acc = _v125;
        const _v126: any = 232;
        acc = _v126;
        const _v127: any = 31;
        acc = _v127;
        const _v128: any = await rt.call(232, "Format", [_v125, _v126, _v127], this);
        acc = _v128;
        const _v129: any = rt.ref("global", 0, 100);
        acc = _v129;
        const _v130: any = 232;
        acc = _v130;
        const _v131: any = 32;
        acc = _v131;
        const _v132: any = await rt.call(232, "Format", [_v129, _v130, _v131], this);
        acc = _v132;
        const _v133: any = rt.ref("global", 0, 100);
        acc = _v133;
        const _v134: any = 232;
        acc = _v134;
        const _v135: any = 33;
        acc = _v135;
        const _v136: any = await rt.call(232, "Format", [_v133, _v134, _v135], this);
        acc = _v136;
        const _v137: any = rt.ref("global", 0, 100);
        acc = _v137;
        const _v138: any = 232;
        acc = _v138;
        const _v139: any = 34;
        acc = _v139;
        const _v140: any = await rt.call(232, "Format", [_v137, _v138, _v139], this);
        acc = _v140;
        const _v141: any = rt.ref("global", 0, 100);
        acc = _v141;
        const _v142: any = 232;
        acc = _v142;
        const _v143: any = 35;
        acc = _v143;
        const _v144: any = await rt.call(232, "Format", [_v141, _v142, _v143], this);
        acc = _v144;
        const _v145: any = rt.ref("global", 0, 100);
        acc = _v145;
        const _v146: any = 232;
        acc = _v146;
        const _v147: any = 36;
        acc = _v147;
        const _v148: any = await rt.call(232, "Format", [_v145, _v146, _v147], this);
        acc = _v148;
        const _v149: any = rt.ref("global", 0, 100);
        acc = _v149;
        const _v150: any = 232;
        acc = _v150;
        const _v151: any = 37;
        acc = _v151;
        const _v152: any = await rt.call(232, "Format", [_v149, _v150, _v151], this);
        acc = _v152;
        const _v153: any = rt.ref("global", 0, 100);
        acc = _v153;
        const _v154: any = 232;
        acc = _v154;
        const _v155: any = 38;
        acc = _v155;
        const _v156: any = await rt.call(232, "Format", [_v153, _v154, _v155], this);
        acc = _v156;
        const _v157: any = rt.ref("global", 0, 100);
        acc = _v157;
        const _v158: any = 232;
        acc = _v158;
        const _v159: any = 39;
        acc = _v159;
        const _v160: any = await rt.call(232, "Format", [_v157, _v158, _v159], this);
        acc = _v160;
        const _v161: any = rt.ref("global", 0, 100);
        acc = _v161;
        const _v162: any = 232;
        acc = _v162;
        const _v163: any = 40;
        acc = _v163;
        const _v164: any = await rt.call(232, "Format", [_v161, _v162, _v163], this);
        acc = _v164;
        const _v165: any = rt.ref("global", 0, 100);
        acc = _v165;
        const _v166: any = 232;
        acc = _v166;
        const _v167: any = 41;
        acc = _v167;
        const _v168: any = await rt.call(232, "Format", [_v165, _v166, _v167], this);
        acc = _v168;
        const _v169: any = rt.ref("global", 0, 100);
        acc = _v169;
        const _v170: any = 232;
        acc = _v170;
        const _v171: any = 42;
        acc = _v171;
        const _v172: any = await rt.call(232, "Format", [_v169, _v170, _v171], this);
        acc = _v172;
        const _v173: any = rt.ref("global", 0, 100);
        acc = _v173;
        const _v174: any = 232;
        acc = _v174;
        const _v175: any = 43;
        acc = _v175;
        const _v176: any = await rt.call(232, "Format", [_v173, _v174, _v175], this);
        acc = _v176;
        const _v177: any = rt.ref("global", 0, 100);
        acc = _v177;
        const _v178: any = 232;
        acc = _v178;
        const _v179: any = 44;
        acc = _v179;
        const _v180: any = await rt.call(232, "Format", [_v177, _v178, _v179], this);
        acc = _v180;
        const _v181: any = rt.ref("global", 0, 100);
        acc = _v181;
        const _v182: any = 232;
        acc = _v182;
        const _v183: any = 45;
        acc = _v183;
        const _v184: any = await rt.call(232, "Format", [_v181, _v182, _v183], this);
        acc = _v184;
        const _v185: any = rt.ref("global", 0, 100);
        acc = _v185;
        const _v186: any = 232;
        acc = _v186;
        const _v187: any = 46;
        acc = _v187;
        const _v188: any = await rt.call(232, "Format", [_v185, _v186, _v187], this);
        acc = _v188;
        const _v189: any = rt.ref("global", 0, 100);
        acc = _v189;
        const _v190: any = 232;
        acc = _v190;
        const _v191: any = 47;
        acc = _v191;
        const _v192: any = await rt.call(232, "Format", [_v189, _v190, _v191], this);
        acc = _v192;
        const _v193: any = rt.ref("global", 0, 100);
        acc = _v193;
        const _v194: any = 232;
        acc = _v194;
        const _v195: any = 48;
        acc = _v195;
        const _v196: any = await rt.call(232, "Format", [_v193, _v194, _v195], this);
        acc = _v196;
        const _v197: any = rt.ref("global", 0, 100);
        acc = _v197;
        const _v198: any = 232;
        acc = _v198;
        const _v199: any = 49;
        acc = _v199;
        const _v200: any = await rt.call(232, "Format", [_v197, _v198, _v199], this);
        acc = _v200;
        const _v201: any = rt.ref("global", 0, 100);
        acc = _v201;
        const _v202: any = 232;
        acc = _v202;
        const _v203: any = 50;
        acc = _v203;
        const _v204: any = await rt.call(232, "Format", [_v201, _v202, _v203], this);
        acc = _v204;
        const _v205: any = rt.ref("global", 0, 100);
        acc = _v205;
        const _v206: any = 232;
        acc = _v206;
        const _v207: any = 51;
        acc = _v207;
        const _v208: any = await rt.call(232, "Format", [_v205, _v206, _v207], this);
        acc = _v208;
        const _v209: any = rt.ref("global", 0, 100);
        acc = _v209;
        const _v210: any = 232;
        acc = _v210;
        const _v211: any = 52;
        acc = _v211;
        const _v212: any = await rt.call(232, "Format", [_v209, _v210, _v211], this);
        acc = _v212;
        const _v213: any = rt.ref("global", 0, 100);
        acc = _v213;
        const _v214: any = 232;
        acc = _v214;
        const _v215: any = 53;
        acc = _v215;
        const _v216: any = await rt.call(232, "Format", [_v213, _v214, _v215], this);
        acc = _v216;
        const _v217: any = rt.ref("global", 0, 100);
        acc = _v217;
        const _v218: any = 232;
        acc = _v218;
        const _v219: any = 54;
        acc = _v219;
        const _v220: any = await rt.call(232, "Format", [_v217, _v218, _v219], this);
        acc = _v220;
        const _v221: any = rt.ref("global", 0, 100);
        acc = _v221;
        const _v222: any = 232;
        acc = _v222;
        const _v223: any = 55;
        acc = _v223;
        const _v224: any = await rt.call(232, "Format", [_v221, _v222, _v223], this);
        acc = _v224;
        const _v225: any = rt.ref("global", 0, 100);
        acc = _v225;
        const _v226: any = 232;
        acc = _v226;
        const _v227: any = 56;
        acc = _v227;
        const _v228: any = await rt.call(232, "Format", [_v225, _v226, _v227], this);
        acc = _v228;
        const _v229: any = rt.ref("global", 0, 100);
        acc = _v229;
        const _v230: any = 232;
        acc = _v230;
        const _v231: any = 57;
        acc = _v231;
        const _v232: any = await rt.call(232, "Format", [_v229, _v230, _v231], this);
        acc = _v232;
        const _v233: any = rt.ref("global", 0, 100);
        acc = _v233;
        const _v234: any = 232;
        acc = _v234;
        const _v235: any = 58;
        acc = _v235;
        const _v236: any = await rt.call(232, "Format", [_v233, _v234, _v235], this);
        acc = _v236;
        const _v237: any = rt.ref("global", 0, 100);
        acc = _v237;
        const _v238: any = 232;
        acc = _v238;
        const _v239: any = 59;
        acc = _v239;
        const _v240: any = await rt.call(232, "Format", [_v237, _v238, _v239], this);
        acc = _v240;
        const _v241: any = rt.ref("global", 0, 100);
        acc = _v241;
        const _v242: any = 232;
        acc = _v242;
        const _v243: any = 60;
        acc = _v243;
        const _v244: any = await rt.call(232, "Format", [_v241, _v242, _v243], this);
        acc = _v244;
        return acc;
      },
      // SCI weekend.sc: localproc_1
      "localproc_1": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0];
        const _v1: any = 0;
        acc = _v1;
        const _v2: any = rt.setLocal(232, 0, _v1);
        acc = _v2;
        const _v5: any = 21;
        acc = _v5;
        const _v6: any = (temps[0] = _v5);
        acc = _v6;
        _loop3: for (;;) {
          const _v7: any = (temps[0] ?? 0);
          acc = _v7;
          const _v8: any = 33;
          acc = _v8;
          const _v9: any = rt.op("<=", ...[_v7, _v8]);
          acc = _v9;
          if (!rt.truth(_v9)) break _loop3;
          _continue4: {
            let _v10: any = acc;
            let _v11: any = 1;
            if (rt.truth(_v11)) {
              const _v12: any = (temps[0] ?? 0);
              acc = _v12;
              const _v13: any = rt.global(302);
              acc = _v13;
              const _v14: any = await rt.send(_v13, "durables", []);
              acc = _v14;
              const _v15: any = await rt.send(_v14, "objectAtIndex", [_v12]);
              acc = _v15;
              const _v16: any = rt.setLocal(232, 1, _v15);
              acc = _v16;
              _v11 = _v16;
            }
            if (rt.truth(_v11)) {
              const _v17: any = rt.local(232, 1);
              acc = _v17;
              const _v18: any = await rt.send(_v17, "quantity", []);
              acc = _v18;
              _v11 = _v18;
            }
            if (rt.truth(_v11)) {
              const _v19: any = 0;
              acc = _v19;
              const _v20: any = 4;
              acc = _v20;
              const _v21: any = rt.global(302);
              acc = _v21;
              const _v22: any = await rt.send(_v21, "durables", []);
              acc = _v22;
              const _v23: any = await rt.send(_v22, "size", []);
              acc = _v23;
              const _v24: any = rt.op("*", ...[_v20, _v23]);
              acc = _v24;
              const _v25: any = await rt.call(232, "Random", [_v19, _v24], this);
              acc = _v25;
              const _v26: any = rt.op("not", ...[_v25]);
              acc = _v26;
              _v11 = _v26;
            }
            acc = _v11;
            _v10 = _v11;
            if (rt.truth(_v11)) {
              const _v27: any = (temps[0] ?? 0);
              acc = _v27;
              const _v28: any = 20;
              acc = _v28;
              const _v29: any = rt.op("-", ...[_v27, _v28]);
              acc = _v29;
              const _v30: any = rt.setLocal(232, 0, _v29);
              acc = _v30;
              _v10 = _v30;
              let _v31: any = acc;
              const _v32: any = rt.global(421);
              acc = _v32;
              const _v33: any = rt.local(232, 0);
              acc = _v33;
              const _v34: any = rt.op("==", ...[_v32, _v33]);
              acc = _v34;
              _v31 = _v34;
              if (rt.truth(_v34)) {
                const _v35: any = 0;
                acc = _v35;
                const _v36: any = rt.setLocal(232, 0, _v35);
                acc = _v36;
                _v31 = _v36;
              } else {
                const _v37: any = rt.local(232, 0);
                acc = _v37;
                const _v38: any = rt.setGlobal(421, _v37);
                acc = _v38;
                _v31 = _v38;
                break _loop3;
                _v31 = acc;
              }
              acc = _v31;
              _v10 = _v31;
            }
            acc = _v10;
          }
          const _v39: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
          acc = _v39;
        }
        const _v40: any = rt.local(232, 0);
        acc = _v40;
        return _v40;
        return acc;
      },
      // SCI weekend.sc: localproc_2
      "localproc_2": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = rt.global(302);
        acc = _v1;
        const _v2: any = await rt.send(_v1, "actualName", []);
        acc = _v2;
        const _v3: any = 105;
        acc = _v3;
        const _v4: any = 4;
        acc = _v4;
        const _v5: any = 100;
        acc = _v5;
        const _v6: any = 13;
        acc = _v6;
        const _v7: any = 35;
        acc = _v7;
        const _v8: any = 103;
        acc = _v8;
        const _v9: any = -1;
        acc = _v9;
        const _v10: any = 102;
        acc = _v10;
        const _v11: any = 0;
        acc = _v11;
        const _v12: any = 106;
        acc = _v12;
        const _v13: any = 155;
        acc = _v13;
        const _v14: any = 101;
        acc = _v14;
        const _v15: any = 1;
        acc = _v15;
        const _v16: any = await rt.call(232, "Display", [_v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15], this);
        acc = _v16;
        const _v17: any = 232;
        acc = _v17;
        const _v18: any = (args[0] ?? 0);
        acc = _v18;
        const _v19: any = 105;
        acc = _v19;
        const _v20: any = 4;
        acc = _v20;
        const _v21: any = 100;
        acc = _v21;
        const _v22: any = 13;
        acc = _v22;
        const _v23: any = 47;
        acc = _v23;
        const _v24: any = 103;
        acc = _v24;
        const _v25: any = -1;
        acc = _v25;
        const _v26: any = 102;
        acc = _v26;
        const _v27: any = 0;
        acc = _v27;
        const _v28: any = 106;
        acc = _v28;
        const _v29: any = 155;
        acc = _v29;
        const _v30: any = 101;
        acc = _v30;
        const _v31: any = 1;
        acc = _v31;
        const _v32: any = await rt.call(232, "Display", [_v17, _v18, _v19, _v20, _v21, _v22, _v23, _v24, _v25, _v26, _v27, _v28, _v29, _v30, _v31], this);
        acc = _v32;
        let _v33: any = acc;
        const _v34: any = await rt.call(0, "proc0_11", [], this);
        acc = _v34;
        _v33 = _v34;
        if (rt.truth(_v34)) {
          let _v35: any = acc;
          const _v36: any = await rt.call(0, "proc0_11", [], this);
          acc = _v36;
          const _v37: any = (args[1] ?? 0);
          acc = _v37;
          const _v38: any = rt.op("<", ...[_v36, _v37]);
          acc = _v38;
          _v35 = _v38;
          if (rt.truth(_v38)) {
            const _v39: any = await rt.call(0, "proc0_11", [], this);
            acc = _v39;
            const _v40: any = (args[1] = _v39);
            acc = _v40;
            _v35 = _v40;
          }
          acc = _v35;
          _v33 = _v35;
          const _v41: any = rt.ref("global", 0, 100);
          acc = _v41;
          const _v42: any = 232;
          acc = _v42;
          const _v43: any = 61;
          acc = _v43;
          const _v44: any = (args[1] ?? 0);
          acc = _v44;
          const _v45: any = await rt.call(232, "Format", [_v41, _v42, _v43, _v44], this);
          acc = _v45;
          const _v46: any = 105;
          acc = _v46;
          const _v47: any = 4;
          acc = _v47;
          const _v48: any = 100;
          acc = _v48;
          const _v49: any = 59;
          acc = _v49;
          const _v50: any = 100;
          acc = _v50;
          const _v51: any = 103;
          acc = _v51;
          const _v52: any = -1;
          acc = _v52;
          const _v53: any = 102;
          acc = _v53;
          const _v54: any = 0;
          acc = _v54;
          const _v55: any = 101;
          acc = _v55;
          const _v56: any = 1;
          acc = _v56;
          const _v57: any = await rt.call(232, "Display", [_v45, _v46, _v47, _v48, _v49, _v50, _v51, _v52, _v53, _v54, _v55, _v56], this);
          acc = _v57;
          _v33 = _v57;
          const _v58: any = 0;
          acc = _v58;
          const _v59: any = (args[1] ?? 0);
          acc = _v59;
          const _v60: any = rt.op("-", ...[_v58, _v59]);
          acc = _v60;
          const _v61: any = await rt.call(0, "proc0_10", [_v60], this);
          acc = _v61;
          _v33 = _v61;
        }
        acc = _v33;
        return acc;
      },
    },
    exports: {"0": "weekend"},
  });
}
