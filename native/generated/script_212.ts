// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/pawnShop.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: fe9801be89ade007ef1bb48cee027f2e1a0093ea76752bd8e5595fe29a441d00
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(212, {
    name: "pawnShop",
    uses: [0, 104, 109, 110, 255, 891, 967, 992, 996, 999],
    locals: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, -1],
    objects: [
      {
        name: "boughtItem",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: false,
        properties: {},
        methods: {
          // SCI pawnShop.sc: boughtItem.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            _loop1: for (;;) {
              const _v3: any = rt.local(212, 429);
              acc = _v3;
              const _v4: any = 8;
              acc = _v4;
              const _v5: any = 15;
              acc = _v5;
              const _v6: any = await rt.call(212, "Random", [_v4, _v5], this);
              acc = _v6;
              const _v7: any = (temps[0] = _v6);
              acc = _v7;
              const _v8: any = rt.op("==", ...[_v3, _v7]);
              acc = _v8;
              if (!rt.truth(_v8)) break _loop1;
              _continue2: {
                const _v9: any = 1;
                acc = _v9;
              }
            }
            const _v10: any = (temps[0] ?? 0);
            acc = _v10;
            const _v11: any = rt.setLocal(212, 429, _v10);
            acc = _v11;
            const _v12: any = 212;
            acc = _v12;
            const _v13: any = rt.local(212, 429);
            acc = _v13;
            const _v14: any = 310;
            acc = _v14;
            const _v15: any = rt.global(413);
            acc = _v15;
            const _v16: any = rt.global(440);
            acc = _v16;
            const _v17: any = rt.global(441);
            acc = _v17;
            const _v18: any = rt.global(442);
            acc = _v18;
            const _v19: any = 25;
            acc = _v19;
            const _v20: any = rt.global(426);
            acc = _v20;
            const _v21: any = await rt.call(255, "Print", [_v12, _v13, _v14, _v15, _v16, _v17, _v18, _v19, _v20], this);
            acc = _v21;
            return acc;
          },
        },
      },
      {
        name: "notEnoughCash",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: false,
        properties: {},
        methods: {
          // SCI pawnShop.sc: notEnoughCash.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 16;
            acc = _v1;
            const _v2: any = rt.global(413);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "init", [_v1]);
            acc = _v3;
            const _v4: any = 212;
            acc = _v4;
            const _v5: any = 16;
            acc = _v5;
            const _v6: any = 310;
            acc = _v6;
            const _v7: any = rt.global(413);
            acc = _v7;
            const _v8: any = rt.global(440);
            acc = _v8;
            const _v9: any = rt.global(441);
            acc = _v9;
            const _v10: any = rt.global(442);
            acc = _v10;
            const _v11: any = 70;
            acc = _v11;
            const _v12: any = 70;
            acc = _v12;
            const _v13: any = 25;
            acc = _v13;
            const _v14: any = rt.global(426);
            acc = _v14;
            const _v15: any = await rt.call(255, "Print", [_v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14], this);
            acc = _v15;
            return acc;
          },
        },
      },
      {
        name: "FCue",
        className: "Cycle",
        parent: {"script": 992, "name": "Cycle"},
        isClass: true,
        properties: {"cycleSpeed": 0},
        methods: {
          // SCI pawnShop.sc: FCue.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = await rt.superSend(this, {"script": 212, "name": "FCue"}, "init", [_v1]);
            acc = _v2;
            const _v3: any = (args[1] ?? 0);
            acc = _v3;
            const _v4: any = rt.set(this, "caller", _v3);
            acc = _v4;
            return acc;
          },
          // SCI pawnShop.sc: FCue.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "client");
            acc = _v2;
            const _v3: any = await rt.send(_v2, "cel", []);
            acc = _v3;
            const _v4: any = this;
            acc = _v4;
            const _v5: any = await rt.send(_v4, "nextCel", []);
            acc = _v5;
            const _v6: any = rt.op("!=", ...[_v3, _v5]);
            acc = _v6;
            _v1 = _v6;
            if (rt.truth(_v6)) {
              const _v7: any = this;
              acc = _v7;
              const _v8: any = await rt.send(_v7, "cycleDone", []);
              acc = _v8;
              _v1 = _v8;
            }
            acc = _v1;
            return acc;
          },
          // SCI pawnShop.sc: FCue.cycleDone
          "cycleDone": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 1;
            acc = _v1;
            const _v2: any = rt.set(this, "completed", _v1);
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "motionCue", []);
            acc = _v4;
            return acc;
          },
        },
      },
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
        name: "pawnShop",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI pawnShop.sc: pawnShop.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            let _v1: any = acc;
            const _v2: any = rt.global(518);
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = 131;
              acc = _v4;
              const _v5: any = 212;
              acc = _v5;
              const _v6: any = await rt.call(212, "Load", [_v4, _v5], this);
              acc = _v6;
              _v1 = _v6;
              const _v7: any = 2;
              acc = _v7;
              const _v8: any = await rt.call(0, "proc0_17", [_v7], this);
              acc = _v8;
              _v1 = _v8;
              const _v9: any = rt.object(212, "dialogKeyMouse");
              acc = _v9;
              const _v10: any = rt.set(this, "keyMouseList", _v9);
              acc = _v10;
              _v1 = _v10;
              const _v11: any = rt.global(502);
              acc = _v11;
              const _v12: any = rt.set(this, "prevDialog", _v11);
              acc = _v12;
              _v1 = _v12;
              const _v13: any = 0;
              acc = _v13;
              let _v14: any = acc;
              const _v15: any = rt.global(535);
              acc = _v15;
              _v14 = _v15;
              if (rt.truth(_v15)) {
                const _v16: any = 82;
                acc = _v16;
                _v14 = _v16;
              } else {
                const _v17: any = 3;
                acc = _v17;
                _v14 = _v17;
              }
              acc = _v14;
              const _v18: any = rt.global(59);
              acc = _v18;
              const _v19: any = await rt.send(_v18, "color", [_v13]);
              acc = _v19;
              const _v20: any = await rt.send(_v18, "back", [_v14]);
              acc = _v20;
              _v1 = _v20;
              const _v21: any = this;
              acc = _v21;
              const _v22: any = rt.setGlobal(502, _v21);
              acc = _v22;
              _v1 = _v22;
              const _v23: any = 7;
              acc = _v23;
              const _v24: any = rt.setGlobal(440, _v23);
              acc = _v24;
              _v1 = _v24;
              const _v25: any = 110;
              acc = _v25;
              const _v26: any = rt.setGlobal(441, _v25);
              acc = _v26;
              _v1 = _v26;
              const _v27: any = 78;
              acc = _v27;
              const _v28: any = rt.setGlobal(442, _v27);
              acc = _v28;
              _v1 = _v28;
              let _v29: any = acc;
              const _v30: any = rt.global(534);
              acc = _v30;
              const _v31: any = 2;
              acc = _v31;
              const _v32: any = rt.op("<", ...[_v30, _v31]);
              acc = _v32;
              _v29 = _v32;
              if (rt.truth(_v32)) {
                const _v33: any = 128;
                acc = _v33;
                const _v34: any = rt.object(212, "theTalker");
                acc = _v34;
                const _v35: any = await rt.send(_v34, "view", []);
                acc = _v35;
                const _v36: any = await rt.call(212, "Load", [_v33, _v35], this);
                acc = _v36;
                _v29 = _v36;
              }
              acc = _v29;
              _v1 = _v29;
              let _v37: any = acc;
              const _v38: any = rt.global(534);
              acc = _v38;
              const _v39: any = 2;
              acc = _v39;
              const _v40: any = rt.op("<", ...[_v38, _v39]);
              acc = _v40;
              _v37 = _v40;
              if (rt.truth(_v40)) {
                const _v41: any = 128;
                acc = _v41;
                const _v42: any = rt.object(212, "items");
                acc = _v42;
                const _v43: any = await rt.send(_v42, "view", []);
                acc = _v43;
                const _v44: any = await rt.call(212, "Load", [_v41, _v43], this);
                acc = _v44;
                _v37 = _v44;
              }
              acc = _v37;
              _v1 = _v37;
              const _v45: any = rt.object(212, "notEnoughCash");
              acc = _v45;
              const _v46: any = rt.setGlobal(424, _v45);
              acc = _v46;
              _v1 = _v46;
              const _v47: any = rt.object(212, "boughtItem");
              acc = _v47;
              const _v48: any = rt.setGlobal(425, _v47);
              acc = _v48;
              _v1 = _v48;
              const _v49: any = rt.object(212, "items");
              acc = _v49;
              const _v50: any = rt.setGlobal(434, _v49);
              acc = _v50;
              _v1 = _v50;
              const _v51: any = 0;
              acc = _v51;
              const _v52: any = rt.setLocal(212, 0, _v51);
              acc = _v52;
              _v1 = _v52;
              const _v53: any = (args[0] ?? 0);
              acc = _v53;
              const _v54: any = rt.set(this, "client", _v53);
              acc = _v54;
              _v1 = _v54;
              const _v55: any = 2;
              acc = _v55;
              const _v56: any = rt.global(417);
              acc = _v56;
              const _v57: any = await rt.send(_v56, "doit", [_v55]);
              acc = _v57;
              _v1 = _v57;
              const _v58: any = 12;
              acc = _v58;
              const _v59: any = rt.setGlobal(400, _v58);
              acc = _v59;
              _v1 = _v59;
              const _v60: any = rt.object(212, "theTalker");
              acc = _v60;
              const _v61: any = rt.setGlobal(413, _v60);
              acc = _v61;
              _v1 = _v61;
              let _v62: any = acc;
              const _v63: any = rt.global(302);
              acc = _v63;
              const _v64: any = await rt.send(_v63, "playing", []);
              acc = _v64;
              const _v65: any = 29;
              acc = _v65;
              const _v66: any = rt.op("==", ...[_v64, _v65]);
              acc = _v66;
              _v62 = _v66;
              if (rt.truth(_v66)) {
                const _v67: any = rt.object(212, "computerScript");
                acc = _v67;
                const _v68: any = this;
                acc = _v68;
                const _v69: any = await rt.send(_v68, "setScript", [_v67]);
                acc = _v69;
                _v62 = _v69;
                const _v70: any = rt.object(212, "computerScript");
                acc = _v70;
                const _v71: any = await rt.send(_v70, "cue", []);
                acc = _v71;
                _v62 = _v71;
              }
              acc = _v62;
              _v1 = _v62;
              const _v72: any = rt.object(212, "background");
              acc = _v72;
              const _v73: any = rt.object(212, "theTalker");
              acc = _v73;
              const _v74: any = rt.object(212, "exitButton");
              acc = _v74;
              const _v75: any = this;
              acc = _v75;
              const _v76: any = await rt.send(_v75, "add", [_v72, _v73, _v74]);
              acc = _v76;
              _v1 = _v76;
              const _v77: any = rt.global(59);
              acc = _v77;
              const _v78: any = 102;
              acc = _v78;
              const _v79: any = 1;
              acc = _v79;
              const _v80: any = 153;
              acc = _v80;
              const _v81: any = 69;
              acc = _v81;
              const _v82: any = 44;
              acc = _v82;
              const _v83: any = 0;
              acc = _v83;
              const _v84: any = 15;
              acc = _v84;
              const _v85: any = this;
              acc = _v85;
              const _v86: any = await rt.send(_v85, "window", [_v77]);
              acc = _v86;
              const _v87: any = await rt.send(_v85, "eachElementDo", [_v78, _v79]);
              acc = _v87;
              const _v88: any = await rt.send(_v85, "eachElementDo", [_v80]);
              acc = _v88;
              const _v89: any = await rt.send(_v85, "moveTo", [_v81, _v82]);
              acc = _v89;
              const _v90: any = await rt.send(_v85, "open", [_v83, _v84]);
              acc = _v90;
              _v1 = _v90;
              const _v91: any = rt.object(212, "items");
              acc = _v91;
              const _v92: any = this;
              acc = _v92;
              const _v93: any = await rt.send(_v92, "add", [_v91]);
              acc = _v93;
              _v1 = _v93;
              const _v94: any = await rt.call(212, "localproc_6", [], this);
              acc = _v94;
              _v1 = _v94;
              const _v95: any = 50;
              acc = _v95;
              const _v96: any = rt.global(477);
              acc = _v96;
              const _v97: any = await rt.send(_v96, "playBed", [_v95]);
              acc = _v97;
              _v1 = _v97;
              const _v98: any = rt.global(302);
              acc = _v98;
              const _v99: any = await rt.send(_v98, "cash", []);
              acc = _v99;
              const _v100: any = 1;
              acc = _v100;
              const _v101: any = rt.op("-", ...[_v99, _v100]);
              acc = _v101;
              const _v102: any = rt.global(305);
              acc = _v102;
              const _v103: any = await rt.send(_v102, "setSize", []);
              acc = _v103;
              const _v104: any = await rt.send(_v102, "value", [_v101]);
              acc = _v104;
              const _v105: any = await rt.send(_v102, "draw", []);
              acc = _v105;
              _v1 = _v105;
              const _v106: any = 1;
              acc = _v106;
              const _v107: any = rt.object(996, "User");
              acc = _v107;
              const _v108: any = await rt.send(_v107, "canControl", [_v106]);
              acc = _v108;
              _v1 = _v108;
              let _v109: any = acc;
              const _v110: any = await rt.call(0, "proc0_14", [], this);
              acc = _v110;
              _v109 = _v110;
              if (rt.truth(_v110)) {
                const _v111: any = rt.global(413);
                acc = _v111;
                const _v112: any = await rt.send(_v111, "init", []);
                acc = _v112;
                _v109 = _v112;
                const _v113: any = 212;
                acc = _v113;
                const _v114: any = 0;
                acc = _v114;
                const _v115: any = 7;
                acc = _v115;
                const _v116: any = await rt.call(212, "Random", [_v114, _v115], this);
                acc = _v116;
                const _v117: any = 310;
                acc = _v117;
                const _v118: any = rt.global(413);
                acc = _v118;
                const _v119: any = rt.global(440);
                acc = _v119;
                const _v120: any = rt.global(441);
                acc = _v120;
                const _v121: any = rt.global(442);
                acc = _v121;
                const _v122: any = 70;
                acc = _v122;
                const _v123: any = 100;
                acc = _v123;
                const _v124: any = 25;
                acc = _v124;
                const _v125: any = rt.global(426);
                acc = _v125;
                const _v126: any = await rt.call(255, "Print", [_v113, _v116, _v117, _v118, _v119, _v120, _v121, _v122, _v123, _v124, _v125], this);
                acc = _v126;
                _v109 = _v126;
              }
              acc = _v109;
              _v1 = _v109;
            } else {
              const _v127: any = rt.get(this, "theItem");
              acc = _v127;
              const _v128: any = rt.object(891, "KeyMouse");
              acc = _v128;
              const _v129: any = await rt.send(_v128, "setCursor", [_v127]);
              acc = _v129;
              _v1 = _v129;
            }
            acc = _v1;
            const _v130: any = 0;
            acc = _v130;
            const _v131: any = rt.setGlobal(518, _v130);
            acc = _v131;
            const _v132: any = 0;
            acc = _v132;
            const _v133: any = 0;
            acc = _v133;
            const _v134: any = this;
            acc = _v134;
            const _v135: any = await rt.send(_v134, "doit", [_v132, _v133]);
            acc = _v135;
            const _v136: any = (temps[2] = _v135);
            acc = _v136;
            let _v137: any = acc;
            const _v138: any = (temps[2] ?? 0);
            acc = _v138;
            const _v139: any = await rt.call(212, "IsObject", [_v138], this);
            acc = _v139;
            _v137 = _v139;
            if (rt.truth(_v139)) {
              let _v140: any = acc;
              const _v141: any = (temps[2] ?? 0);
              acc = _v141;
              const _v142: any = this;
              acc = _v142;
              const _v143: any = await rt.send(_v142, "contains", [_v141]);
              acc = _v143;
              _v140 = _v143;
              if (rt.truth(_v143)) {
                const _v144: any = 0;
                acc = _v144;
                const _v145: any = (temps[2] = _v144);
                acc = _v145;
                _v140 = _v145;
              }
              acc = _v140;
              _v137 = _v140;
            } else {
              const _v146: any = 1;
              acc = _v146;
              const _v147: any = (temps[2] = _v146);
              acc = _v147;
              _v137 = _v147;
            }
            acc = _v137;
            const _v148: any = rt.get(this, "prevDialog");
            acc = _v148;
            const _v149: any = rt.setGlobal(502, _v148);
            acc = _v149;
            const _v150: any = this;
            acc = _v150;
            const _v151: any = 291;
            acc = _v151;
            const _v152: any = await rt.call(0, "proc0_15", [_v150, _v151], this);
            acc = _v152;
            const _v153: any = rt.global(477);
            acc = _v153;
            const _v154: any = await rt.send(_v153, "fade", []);
            acc = _v154;
            let _v155: any = acc;
            const _v156: any = rt.get(this, "prevDialog");
            acc = _v156;
            _v155 = _v156;
            if (rt.truth(_v156)) {
              const _v157: any = rt.get(this, "prevDialog");
              acc = _v157;
              const _v158: any = await rt.send(_v157, "keyMouseList", []);
              acc = _v158;
              _v155 = _v158;
            } else {
              const _v159: any = rt.global(432);
              acc = _v159;
              _v155 = _v159;
            }
            acc = _v155;
            const _v160: any = rt.object(891, "KeyMouse");
            acc = _v160;
            const _v161: any = await rt.send(_v160, "setList", [_v155]);
            acc = _v161;
            const _v162: any = rt.get(this, "keyMouseList");
            acc = _v162;
            const _v163: any = await rt.send(_v162, "release", []);
            acc = _v163;
            const _v164: any = await rt.send(_v162, "dispose", []);
            acc = _v164;
            const _v165: any = this;
            acc = _v165;
            const _v166: any = await rt.send(_v165, "dispose", []);
            acc = _v166;
            const _v167: any = 11;
            acc = _v167;
            const _v168: any = rt.get(this, "nsTop");
            acc = _v168;
            const _v169: any = 1;
            acc = _v169;
            const _v170: any = rt.op("+", ...[_v168, _v169]);
            acc = _v170;
            const _v171: any = rt.get(this, "nsLeft");
            acc = _v171;
            const _v172: any = rt.get(this, "nsBottom");
            acc = _v172;
            const _v173: any = 1;
            acc = _v173;
            const _v174: any = rt.op("-", ...[_v172, _v173]);
            acc = _v174;
            const _v175: any = rt.get(this, "nsRight");
            acc = _v175;
            const _v176: any = 3;
            acc = _v176;
            const _v177: any = rt.op("-", ...[_v175, _v176]);
            acc = _v177;
            const _v178: any = 2;
            acc = _v178;
            const _v179: any = 0;
            acc = _v179;
            const _v180: any = 0;
            acc = _v180;
            const _v181: any = await rt.call(212, "Graph", [_v167, _v170, _v171, _v174, _v177, _v178, _v179, _v180], this);
            acc = _v181;
            const _v182: any = 0;
            acc = _v182;
            const _v183: any = await rt.call(0, "proc0_17", [_v182], this);
            acc = _v183;
            const _v184: any = (temps[2] ?? 0);
            acc = _v184;
            const _acc185: any = acc;
            const _v186: any = 212;
            acc = _v186;
            const _args187: any[] = [_v186];
            await rt.call(212, "DisposeScript", _args187, this);
            const _v188: any = _args187.length === 2 ? _args187[1] : _acc185;
            acc = _v188;
            return acc;
          },
          // SCI pawnShop.sc: pawnShop.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.superSend(this, {"script": 212, "name": "pawnShop"}, "draw", []);
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
        properties: {"view": 712},
        methods: {
        },
      },
      {
        name: "pawnButton",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 40, "nsLeft": 76, "key": 1, "view": 712, "loop": 1, "priority": 14},
        methods: {
          // SCI pawnShop.sc: pawnButton.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            const _v1: any = 23;
            acc = _v1;
            const _v2: any = rt.global(476);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "play", [_v1]);
            acc = _v3;
            const _v4: any = 0;
            acc = _v4;
            const _v5: any = (temps[1] = _v4);
            acc = _v5;
            let _v6: any = acc;
            const _v7: any = rt.global(302);
            acc = _v7;
            const _v8: any = await rt.send(_v7, "durables", []);
            acc = _v8;
            const _v9: any = await rt.send(_v8, "size", []);
            acc = _v9;
            _v6 = _v9;
            if (rt.truth(_v9)) {
              const _v12: any = 0;
              acc = _v12;
              const _v13: any = (temps[2] = _v12);
              acc = _v13;
              _loop10: for (;;) {
                const _v14: any = (temps[2] ?? 0);
                acc = _v14;
                const _v15: any = rt.global(302);
                acc = _v15;
                const _v16: any = await rt.send(_v15, "durables", []);
                acc = _v16;
                const _v17: any = await rt.send(_v16, "size", []);
                acc = _v17;
                const _v18: any = rt.op("<", ...[_v14, _v17]);
                acc = _v18;
                if (!rt.truth(_v18)) break _loop10;
                _continue11: {
                  let _v19: any = acc;
                  let _v20: any = 0;
                  if (!rt.truth(_v20)) {
                    const _v21: any = (temps[2] ?? 0);
                    acc = _v21;
                    const _v22: any = rt.global(302);
                    acc = _v22;
                    const _v23: any = await rt.send(_v22, "durables", []);
                    acc = _v23;
                    const _v24: any = await rt.send(_v23, "at", [_v21]);
                    acc = _v24;
                    const _v25: any = await rt.send(_v24, "attributes", []);
                    acc = _v25;
                    const _v26: any = 56;
                    acc = _v26;
                    const _v27: any = rt.op("&", ...[_v25, _v26]);
                    acc = _v27;
                    const _v28: any = rt.op("not", ...[_v27]);
                    acc = _v28;
                    _v20 = _v28;
                  }
                  if (!rt.truth(_v20)) {
                    const _v29: any = (temps[2] ?? 0);
                    acc = _v29;
                    const _v30: any = rt.global(302);
                    acc = _v30;
                    const _v31: any = await rt.send(_v30, "durables", []);
                    acc = _v31;
                    const _v32: any = await rt.send(_v31, "at", [_v29]);
                    acc = _v32;
                    const _v33: any = await rt.send(_v32, "quantity", []);
                    acc = _v33;
                    const _v34: any = 1;
                    acc = _v34;
                    const _v35: any = rt.op(">", ...[_v33, _v34]);
                    acc = _v35;
                    _v20 = _v35;
                  }
                  acc = _v20;
                  _v19 = _v20;
                  if (rt.truth(_v20)) {
                    const _v36: any = 1;
                    acc = _v36;
                    const _v37: any = (temps[1] = _v36);
                    acc = _v37;
                    _v19 = _v37;
                    break _loop10;
                    _v19 = acc;
                  }
                  acc = _v19;
                }
                const _v38: any = (temps[2] = rt.op("+", (temps[2] ?? 0), 1));
                acc = _v38;
              }
              _v6 = acc;
            }
            acc = _v6;
            let _v39: any = acc;
            const _v40: any = (temps[1] ?? 0);
            acc = _v40;
            _v39 = _v40;
            if (rt.truth(_v40)) {
              const _v41: any = 0;
              acc = _v41;
              const _v42: any = this;
              acc = _v42;
              const _v43: any = await rt.send(_v42, "select", [_v41]);
              acc = _v43;
              _v39 = _v43;
              const _v44: any = 1;
              acc = _v44;
              const _v45: any = rt.object(212, "exitButton");
              acc = _v45;
              const _v46: any = await rt.send(_v45, "select", [_v44]);
              acc = _v46;
              _v39 = _v46;
              const _v47: any = rt.object(212, "exitButton");
              acc = _v47;
              const _v48: any = rt.object(212, "pawnShop");
              acc = _v48;
              const _v49: any = await rt.send(_v48, "theItem", [_v47]);
              acc = _v49;
              _v39 = _v49;
              const _v50: any = await rt.call(212, "localproc_7", [], this);
              acc = _v50;
              _v39 = _v50;
              const _v51: any = await rt.call(212, "localproc_8", [], this);
              acc = _v51;
              _v39 = _v51;
              const _v52: any = 1;
              acc = _v52;
              const _v53: any = rt.setLocal(212, 0, _v52);
              acc = _v53;
              _v39 = _v53;
            } else {
              const _v54: any = 16;
              acc = _v54;
              const _v55: any = rt.global(413);
              acc = _v55;
              const _v56: any = await rt.send(_v55, "init", [_v54]);
              acc = _v56;
              _v39 = _v56;
              const _v57: any = 212;
              acc = _v57;
              const _v58: any = 20;
              acc = _v58;
              const _v59: any = 310;
              acc = _v59;
              const _v60: any = rt.global(413);
              acc = _v60;
              const _v61: any = rt.global(440);
              acc = _v61;
              const _v62: any = rt.global(441);
              acc = _v62;
              const _v63: any = rt.global(442);
              acc = _v63;
              const _v64: any = 70;
              acc = _v64;
              const _v65: any = 70;
              acc = _v65;
              const _v66: any = 25;
              acc = _v66;
              const _v67: any = rt.global(426);
              acc = _v67;
              const _v68: any = await rt.call(255, "Print", [_v57, _v58, _v59, _v60, _v61, _v62, _v63, _v64, _v65, _v66, _v67], this);
              acc = _v68;
              _v39 = _v68;
            }
            acc = _v39;
            const _v69: any = await rt.superSend(this, {"script": 212, "name": "pawnButton"}, "doit", []);
            acc = _v69;
            return acc;
          },
        },
      },
      {
        name: "redeemButton",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 60, "nsLeft": 76, "key": 2, "view": 712, "loop": 1, "cel": 1, "priority": 14},
        methods: {
          // SCI pawnShop.sc: redeemButton.doit
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
            let _v4: any = acc;
            const _v5: any = await rt.call(212, "localproc_2", [], this);
            acc = _v5;
            _v4 = _v5;
            if (rt.truth(_v5)) {
              const _v6: any = 0;
              acc = _v6;
              const _v7: any = this;
              acc = _v7;
              const _v8: any = await rt.send(_v7, "select", [_v6]);
              acc = _v8;
              _v4 = _v8;
              const _v9: any = 1;
              acc = _v9;
              const _v10: any = rt.object(212, "exitButton");
              acc = _v10;
              const _v11: any = await rt.send(_v10, "select", [_v9]);
              acc = _v11;
              _v4 = _v11;
              const _v12: any = rt.object(212, "exitButton");
              acc = _v12;
              const _v13: any = rt.object(212, "pawnShop");
              acc = _v13;
              const _v14: any = await rt.send(_v13, "theItem", [_v12]);
              acc = _v14;
              _v4 = _v14;
              const _v15: any = await rt.call(212, "localproc_7", [], this);
              acc = _v15;
              _v4 = _v15;
              const _v16: any = await rt.call(212, "localproc_10", [], this);
              acc = _v16;
              _v4 = _v16;
              const _v17: any = 2;
              acc = _v17;
              const _v18: any = rt.setLocal(212, 0, _v17);
              acc = _v18;
              _v4 = _v18;
            } else {
              const _v19: any = 16;
              acc = _v19;
              const _v20: any = rt.global(413);
              acc = _v20;
              const _v21: any = await rt.send(_v20, "init", [_v19]);
              acc = _v21;
              _v4 = _v21;
              const _v22: any = 212;
              acc = _v22;
              const _v23: any = 21;
              acc = _v23;
              const _v24: any = 310;
              acc = _v24;
              const _v25: any = rt.global(413);
              acc = _v25;
              const _v26: any = rt.global(440);
              acc = _v26;
              const _v27: any = rt.global(441);
              acc = _v27;
              const _v28: any = rt.global(442);
              acc = _v28;
              const _v29: any = 70;
              acc = _v29;
              const _v30: any = 70;
              acc = _v30;
              const _v31: any = 25;
              acc = _v31;
              const _v32: any = rt.global(426);
              acc = _v32;
              const _v33: any = await rt.call(255, "Print", [_v22, _v23, _v24, _v25, _v26, _v27, _v28, _v29, _v30, _v31, _v32], this);
              acc = _v33;
              _v4 = _v33;
            }
            acc = _v4;
            const _v34: any = await rt.superSend(this, {"script": 212, "name": "redeemButton"}, "doit", []);
            acc = _v34;
            return acc;
          },
        },
      },
      {
        name: "buyButton",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 80, "nsLeft": 76, "key": 3, "view": 712, "loop": 1, "cel": 2, "priority": 14},
        methods: {
          // SCI pawnShop.sc: buyButton.doit
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
            let _v4: any = acc;
            const _v5: any = await rt.call(212, "localproc_1", [], this);
            acc = _v5;
            _v4 = _v5;
            if (rt.truth(_v5)) {
              const _v6: any = 0;
              acc = _v6;
              const _v7: any = this;
              acc = _v7;
              const _v8: any = await rt.send(_v7, "select", [_v6]);
              acc = _v8;
              _v4 = _v8;
              const _v9: any = 1;
              acc = _v9;
              const _v10: any = rt.object(212, "exitButton");
              acc = _v10;
              const _v11: any = await rt.send(_v10, "select", [_v9]);
              acc = _v11;
              _v4 = _v11;
              const _v12: any = rt.object(212, "exitButton");
              acc = _v12;
              const _v13: any = rt.object(212, "pawnShop");
              acc = _v13;
              const _v14: any = await rt.send(_v13, "theItem", [_v12]);
              acc = _v14;
              _v4 = _v14;
              const _v15: any = await rt.call(212, "localproc_7", [], this);
              acc = _v15;
              _v4 = _v15;
              const _v16: any = await rt.call(212, "localproc_12", [], this);
              acc = _v16;
              _v4 = _v16;
              const _v17: any = 3;
              acc = _v17;
              const _v18: any = rt.setLocal(212, 0, _v17);
              acc = _v18;
              _v4 = _v18;
            } else {
              const _v19: any = 16;
              acc = _v19;
              const _v20: any = rt.global(413);
              acc = _v20;
              const _v21: any = await rt.send(_v20, "init", [_v19]);
              acc = _v21;
              _v4 = _v21;
              const _v22: any = 212;
              acc = _v22;
              const _v23: any = 22;
              acc = _v23;
              const _v24: any = 310;
              acc = _v24;
              const _v25: any = rt.global(413);
              acc = _v25;
              const _v26: any = rt.global(440);
              acc = _v26;
              const _v27: any = rt.global(441);
              acc = _v27;
              const _v28: any = rt.global(442);
              acc = _v28;
              const _v29: any = 70;
              acc = _v29;
              const _v30: any = 70;
              acc = _v30;
              const _v31: any = 25;
              acc = _v31;
              const _v32: any = rt.global(426);
              acc = _v32;
              const _v33: any = await rt.call(255, "Print", [_v22, _v23, _v24, _v25, _v26, _v27, _v28, _v29, _v30, _v31, _v32], this);
              acc = _v33;
              _v4 = _v33;
            }
            acc = _v4;
            const _v34: any = await rt.superSend(this, {"script": 212, "name": "buyButton"}, "doit", []);
            acc = _v34;
            return acc;
          },
        },
      },
      {
        name: "exitButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 99, "nsTop": 108, "nsLeft": 143, "key": 120, "view": 250, "loop": 13, "priority": 15},
        methods: {
        },
      },
      {
        name: "theTalker",
        className: "Talker",
        parent: {"script": 104, "name": "Talker"},
        isClass: false,
        properties: {"nsLeft": 0, "view": 362},
        methods: {
        },
      },
      {
        name: "pawnMessage",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"state": 64, "nsTop": 27, "nsLeft": 95, "text": "Pawnable Items", "textColor": 26, "shadowColor": 65},
        methods: {
        },
      },
      {
        name: "pawn",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 108, "nsLeft": 77, "key": 5, "view": 250, "loop": 6},
        methods: {
          // SCI pawnShop.sc: pawn.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            const _v1: any = await rt.superSend(this, {"script": 212, "name": "pawn"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = await rt.call(212, "localproc_5", [], this);
            acc = _v4;
            const _v5: any = 6;
            acc = _v5;
            const _v6: any = rt.op(">=", ...[_v4, _v5]);
            acc = _v6;
            _v3 = _v6;
            if (rt.truth(_v6)) {
              const _v7: any = 16;
              acc = _v7;
              const _v8: any = rt.global(413);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "init", [_v7]);
              acc = _v9;
              _v3 = _v9;
              const _v10: any = 212;
              acc = _v10;
              const _v11: any = 23;
              acc = _v11;
              const _v12: any = 310;
              acc = _v12;
              const _v13: any = rt.global(413);
              acc = _v13;
              const _v14: any = rt.global(440);
              acc = _v14;
              const _v15: any = rt.global(441);
              acc = _v15;
              const _v16: any = rt.global(442);
              acc = _v16;
              const _v17: any = 70;
              acc = _v17;
              const _v18: any = 90;
              acc = _v18;
              const _v19: any = 25;
              acc = _v19;
              const _v20: any = rt.global(426);
              acc = _v20;
              const _v21: any = await rt.call(255, "Print", [_v10, _v11, _v12, _v13, _v14, _v15, _v16, _v17, _v18, _v19, _v20], this);
              acc = _v21;
              _v3 = _v21;
              const _v22: any = (temps[0] ?? 0);
              acc = _v22;
              return _v22;
              _v3 = acc;
            }
            acc = _v3;
            let _v23: any = acc;
            const _v24: any = await rt.call(212, "localproc_4", [], this);
            acc = _v24;
            const _v25: any = rt.setLocal(212, 2, _v24);
            acc = _v25;
            _v23 = _v25;
            if (rt.truth(_v25)) {
              let _v26: any = acc;
              const _v27: any = rt.local(212, 2);
              acc = _v27;
              const _v28: any = -1;
              acc = _v28;
              const _v29: any = rt.op("==", ...[_v27, _v28]);
              acc = _v29;
              _v26 = _v29;
              if (rt.truth(_v29)) {
                const _v30: any = 16;
                acc = _v30;
                const _v31: any = rt.global(413);
                acc = _v31;
                const _v32: any = await rt.send(_v31, "init", [_v30]);
                acc = _v32;
                _v26 = _v32;
                const _v33: any = rt.ref("global", 0, 100);
                acc = _v33;
                const _v34: any = 212;
                acc = _v34;
                const _v35: any = 24;
                acc = _v35;
                const _v36: any = await rt.call(212, "Format", [_v33, _v34, _v35], this);
                acc = _v36;
                const _v37: any = 310;
                acc = _v37;
                const _v38: any = rt.global(413);
                acc = _v38;
                const _v39: any = rt.global(440);
                acc = _v39;
                const _v40: any = rt.global(441);
                acc = _v40;
                const _v41: any = rt.global(442);
                acc = _v41;
                const _v42: any = 70;
                acc = _v42;
                const _v43: any = 90;
                acc = _v43;
                const _v44: any = 25;
                acc = _v44;
                const _v45: any = rt.global(426);
                acc = _v45;
                const _v46: any = await rt.call(255, "Print", [_v36, _v37, _v38, _v39, _v40, _v41, _v42, _v43, _v44, _v45], this);
                acc = _v46;
                _v26 = _v46;
                const _v47: any = (temps[0] ?? 0);
                acc = _v47;
                return _v47;
                _v26 = acc;
              }
              acc = _v26;
              _v23 = _v26;
              const _v48: any = rt.global(309);
              acc = _v48;
              const _v49: any = rt.local(212, 2);
              acc = _v49;
              const _v50: any = await rt.send(_v49, "pricePaid", []);
              acc = _v50;
              const _v51: any = await rt.call(109, "proc109_0", [_v48, _v50], this);
              acc = _v51;
              const _v52: any = 4;
              acc = _v52;
              const _v53: any = rt.op("*", ...[_v51, _v52]);
              acc = _v53;
              const _v54: any = 10;
              acc = _v54;
              const _v55: any = rt.op("/", ...[_v53, _v54]);
              acc = _v55;
              const _v56: any = rt.setLocal(212, 1, _v55);
              acc = _v56;
              _v23 = _v56;
              const _v57: any = 16;
              acc = _v57;
              const _v58: any = rt.global(413);
              acc = _v58;
              const _v59: any = await rt.send(_v58, "init", [_v57]);
              acc = _v59;
              _v23 = _v59;
              let _v60: any = acc;
              let _v61: any = 0;
              if (!rt.truth(_v61)) {
                const _v62: any = rt.global(302);
                acc = _v62;
                const _v63: any = await rt.send(_v62, "playing", []);
                acc = _v63;
                const _v64: any = 29;
                acc = _v64;
                const _v65: any = rt.op("==", ...[_v63, _v64]);
                acc = _v65;
                _v61 = _v65;
              }
              if (!rt.truth(_v61)) {
                const _v66: any = rt.ref("global", 0, 100);
                acc = _v66;
                const _v67: any = 212;
                acc = _v67;
                const _v68: any = 25;
                acc = _v68;
                const _v69: any = rt.local(212, 1);
                acc = _v69;
                const _v70: any = 700;
                acc = _v70;
                const _v71: any = rt.local(212, 2);
                acc = _v71;
                const _v72: any = await rt.send(_v71, "indexNum", []);
                acc = _v72;
                const _v73: any = await rt.call(212, "Format", [_v66, _v67, _v68, _v69, _v70, _v72], this);
                acc = _v73;
                const _v74: any = 81;
                acc = _v74;
                const _v75: any = "Take It";
                acc = _v75;
                const _v76: any = 1;
                acc = _v76;
                const _v77: any = 81;
                acc = _v77;
                const _v78: any = "Leave It";
                acc = _v78;
                const _v79: any = 0;
                acc = _v79;
                const _v80: any = 310;
                acc = _v80;
                const _v81: any = rt.global(413);
                acc = _v81;
                const _v82: any = rt.global(440);
                acc = _v82;
                const _v83: any = rt.global(441);
                acc = _v83;
                const _v84: any = rt.global(442);
                acc = _v84;
                const _v85: any = 70;
                acc = _v85;
                const _v86: any = 107;
                acc = _v86;
                const _v87: any = 311;
                acc = _v87;
                const _v88: any = await rt.call(255, "Print", [_v73, _v74, _v75, _v76, _v77, _v78, _v79, _v80, _v81, _v82, _v83, _v84, _v85, _v86, _v87], this);
                acc = _v88;
                _v61 = _v88;
              }
              acc = _v61;
              _v60 = _v61;
              if (rt.truth(_v61)) {
                const _v89: any = 23;
                acc = _v89;
                const _v90: any = rt.global(476);
                acc = _v90;
                const _v91: any = await rt.send(_v90, "play", [_v89]);
                acc = _v91;
                _v60 = _v91;
                const _v92: any = -1;
                acc = _v92;
                const _v93: any = await rt.call(0, "proc0_13", [_v92], this);
                acc = _v93;
                _v60 = _v93;
                const _v94: any = rt.local(212, 2);
                acc = _v94;
                const _v95: any = await rt.send(_v94, "attributes", []);
                acc = _v95;
                const _v96: any = 24;
                acc = _v96;
                const _v97: any = rt.op("|", ...[_v95, _v96]);
                acc = _v97;
                const _v98: any = rt.local(212, 2);
                acc = _v98;
                const _v99: any = await rt.send(_v98, "pricePaid", []);
                acc = _v99;
                const _v100: any = 2;
                acc = _v100;
                const _v101: any = rt.op("/", ...[_v99, _v100]);
                acc = _v101;
                const _v102: any = rt.local(212, 2);
                acc = _v102;
                const _v103: any = await rt.send(_v102, "quantity", []);
                acc = _v103;
                const _v104: any = 1;
                acc = _v104;
                const _v105: any = rt.op("-", ...[_v103, _v104]);
                acc = _v105;
                const _v106: any = rt.local(212, 2);
                acc = _v106;
                const _v107: any = await rt.send(_v106, "attributes", [_v97]);
                acc = _v107;
                const _v108: any = await rt.send(_v106, "redemptionPrice", [_v101]);
                acc = _v108;
                const _v109: any = await rt.send(_v106, "quantity", [_v105]);
                acc = _v109;
                _v60 = _v109;
                let _v110: any = acc;
                let _v111: any = 1;
                if (rt.truth(_v111)) {
                  const _v112: any = rt.local(212, 2);
                  acc = _v112;
                  const _v113: any = await rt.send(_v112, "indexNum", []);
                  acc = _v113;
                  const _v114: any = 21;
                  acc = _v114;
                  const _v115: any = rt.op("==", ...[_v113, _v114]);
                  acc = _v115;
                  _v111 = _v115;
                }
                if (rt.truth(_v111)) {
                  const _v116: any = 1;
                  acc = _v116;
                  const _v117: any = rt.global(302);
                  acc = _v117;
                  const _v118: any = await rt.send(_v117, "consumables", []);
                  acc = _v118;
                  const _v119: any = await rt.send(_v118, "objectAtIndex", [_v116]);
                  acc = _v119;
                  const _v120: any = (temps[1] = _v119);
                  acc = _v120;
                  _v111 = _v120;
                }
                acc = _v111;
                _v110 = _v111;
                if (rt.truth(_v111)) {
                  const _v121: any = -1;
                  acc = _v121;
                  const _v122: any = await rt.call(0, "proc0_13", [_v121], this);
                  acc = _v122;
                  _v110 = _v122;
                  const _v123: any = 0;
                  acc = _v123;
                  const _v124: any = (temps[1] ?? 0);
                  acc = _v124;
                  const _v125: any = await rt.send(_v124, "quantity", [_v123]);
                  acc = _v125;
                  _v110 = _v125;
                }
                acc = _v110;
                _v60 = _v110;
                const _v126: any = await rt.call(212, "localproc_3", [], this);
                acc = _v126;
                _v60 = _v126;
                const _v127: any = rt.object(212, "pawnSelector");
                acc = _v127;
                const _v128: any = await rt.send(_v127, "draw", []);
                acc = _v128;
                _v60 = _v128;
                const _v129: any = rt.local(212, 1);
                acc = _v129;
                const _v130: any = await rt.call(0, "proc0_10", [_v129], this);
                acc = _v130;
                _v60 = _v130;
                const _v131: any = rt.global(305);
                acc = _v131;
                const _v132: any = await rt.send(_v131, "doit", []);
                acc = _v132;
                _v60 = _v132;
              } else {
                const _v133: any = 23;
                acc = _v133;
                const _v134: any = rt.global(476);
                acc = _v134;
                const _v135: any = await rt.send(_v134, "play", [_v133]);
                acc = _v135;
                _v60 = _v135;
              }
              acc = _v60;
              _v23 = _v60;
            }
            acc = _v23;
            const _v136: any = (temps[0] ?? 0);
            acc = _v136;
            return _v136;
            return acc;
          },
        },
      },
      {
        name: "pawnSelector",
        className: "DSelector",
        parent: {"script": 255, "name": "DSelector"},
        isClass: false,
        properties: {"state": 64, "font": 4, "x": 18, "y": 4},
        methods: {
        },
      },
      {
        name: "donePawning",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 108, "nsLeft": 110, "view": 250, "loop": 2},
        methods: {
          // SCI pawnShop.sc: donePawning.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 212, "name": "donePawning"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = 0;
            acc = _v3;
            const _v4: any = this;
            acc = _v4;
            const _v5: any = await rt.send(_v4, "select", [_v3]);
            acc = _v5;
            const _v6: any = 1;
            acc = _v6;
            const _v7: any = rt.object(212, "exitButton");
            acc = _v7;
            const _v8: any = await rt.send(_v7, "select", [_v6]);
            acc = _v8;
            const _v9: any = rt.object(212, "exitButton");
            acc = _v9;
            const _v10: any = rt.object(212, "pawnShop");
            acc = _v10;
            const _v11: any = await rt.send(_v10, "theItem", [_v9]);
            acc = _v11;
            const _v12: any = await rt.call(212, "localproc_9", [], this);
            acc = _v12;
            const _v13: any = await rt.call(212, "localproc_6", [], this);
            acc = _v13;
            const _v14: any = 0;
            acc = _v14;
            const _v15: any = rt.setLocal(212, 0, _v14);
            acc = _v15;
            const _v16: any = (temps[0] ?? 0);
            acc = _v16;
            return _v16;
            return acc;
          },
        },
      },
      {
        name: "doneRedeeming",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 108, "nsLeft": 110, "view": 250, "loop": 2},
        methods: {
          // SCI pawnShop.sc: doneRedeeming.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 212, "name": "doneRedeeming"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = 0;
            acc = _v3;
            const _v4: any = this;
            acc = _v4;
            const _v5: any = await rt.send(_v4, "select", [_v3]);
            acc = _v5;
            const _v6: any = 1;
            acc = _v6;
            const _v7: any = rt.object(212, "exitButton");
            acc = _v7;
            const _v8: any = await rt.send(_v7, "select", [_v6]);
            acc = _v8;
            const _v9: any = rt.object(212, "exitButton");
            acc = _v9;
            const _v10: any = rt.object(212, "pawnShop");
            acc = _v10;
            const _v11: any = await rt.send(_v10, "theItem", [_v9]);
            acc = _v11;
            const _v12: any = await rt.call(212, "localproc_11", [], this);
            acc = _v12;
            const _v13: any = await rt.call(212, "localproc_6", [], this);
            acc = _v13;
            const _v14: any = 0;
            acc = _v14;
            const _v15: any = rt.setLocal(212, 0, _v14);
            acc = _v15;
            const _v16: any = (temps[0] ?? 0);
            acc = _v16;
            return _v16;
            return acc;
          },
        },
      },
      {
        name: "doneBuying",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 108, "nsLeft": 110, "view": 250, "loop": 2},
        methods: {
          // SCI pawnShop.sc: doneBuying.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 212, "name": "doneBuying"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = 0;
            acc = _v3;
            const _v4: any = this;
            acc = _v4;
            const _v5: any = await rt.send(_v4, "select", [_v3]);
            acc = _v5;
            const _v6: any = 1;
            acc = _v6;
            const _v7: any = rt.object(212, "exitButton");
            acc = _v7;
            const _v8: any = await rt.send(_v7, "select", [_v6]);
            acc = _v8;
            const _v9: any = rt.object(212, "exitButton");
            acc = _v9;
            const _v10: any = rt.object(212, "pawnShop");
            acc = _v10;
            const _v11: any = await rt.send(_v10, "theItem", [_v9]);
            acc = _v11;
            const _v12: any = await rt.call(212, "localproc_13", [], this);
            acc = _v12;
            const _v13: any = await rt.call(212, "localproc_6", [], this);
            acc = _v13;
            const _v14: any = 0;
            acc = _v14;
            const _v15: any = rt.setLocal(212, 0, _v14);
            acc = _v15;
            const _v16: any = (temps[0] ?? 0);
            acc = _v16;
            return _v16;
            return acc;
          },
        },
      },
      {
        name: "buyMessage",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"state": 64, "nsTop": 25, "nsLeft": 93, "text": "Buyable Items", "textColor": 26, "shadowColor": 65},
        methods: {
        },
      },
      {
        name: "redeemMessage",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"state": 64, "nsTop": 25, "nsLeft": 91, "text": "Redeemable Items", "textColor": 26, "shadowColor": 65},
        methods: {
        },
      },
      {
        name: "aRedeemableItem",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"state": 65, "text": "                             ", "textColor": 26, "shadowColor": 65},
        methods: {
          // SCI pawnShop.sc: aRedeemableItem.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = rt.get(this, "theDurable");
            acc = _v1;
            const _v2: any = await rt.send(_v1, "indexNum", []);
            acc = _v2;
            const _v3: any = 21;
            acc = _v3;
            const _v4: any = rt.op("-", ...[_v2, _v3]);
            acc = _v4;
            const _v5: any = rt.set(this, "celNum", _v4);
            acc = _v5;
            let _v6: any = acc;
            const _v7: any = await rt.call(0, "proc0_11", [], this);
            acc = _v7;
            const _v8: any = rt.get(this, "price");
            acc = _v8;
            const _v9: any = rt.op(">=", ...[_v7, _v8]);
            acc = _v9;
            const _v10: any = rt.setGlobal(416, _v9);
            acc = _v10;
            _v6 = _v10;
            if (rt.truth(_v10)) {
              const _v11: any = rt.get(this, "theSign");
              acc = _v11;
              const _v12: any = rt.get(this, "price");
              acc = _v12;
              const _v13: any = rt.op("*", ...[_v11, _v12]);
              acc = _v13;
              const _v14: any = await rt.call(0, "proc0_10", [_v13], this);
              acc = _v14;
              _v6 = _v14;
              const _v15: any = rt.global(305);
              acc = _v15;
              const _v16: any = await rt.send(_v15, "doit", []);
              acc = _v16;
              _v6 = _v16;
              let _v17: any = acc;
              let _v18: any = 1;
              if (rt.truth(_v18)) {
                const _v19: any = rt.global(434);
                acc = _v19;
                _v18 = _v19;
              }
              if (rt.truth(_v18)) {
                const _v20: any = rt.global(434);
                acc = _v20;
                const _v21: any = await rt.call(212, "IsObject", [_v20], this);
                acc = _v21;
                _v18 = _v21;
              }
              if (rt.truth(_v18)) {
                const _v22: any = rt.global(534);
                acc = _v22;
                const _v23: any = 2;
                acc = _v23;
                const _v24: any = rt.op("<", ...[_v22, _v23]);
                acc = _v24;
                _v18 = _v24;
              }
              acc = _v18;
              _v17 = _v18;
              if (rt.truth(_v18)) {
                const _v25: any = rt.get(this, "celNum");
                acc = _v25;
                const _v26: any = rt.global(434);
                acc = _v26;
                const _v27: any = await rt.send(_v26, "doit", [_v25]);
                acc = _v27;
                _v17 = _v27;
              }
              acc = _v17;
              _v6 = _v17;
              let _v28: any = acc;
              let _v29: any = 1;
              if (rt.truth(_v29)) {
                const _v30: any = rt.global(425);
                acc = _v30;
                _v29 = _v30;
              }
              if (rt.truth(_v29)) {
                const _v31: any = rt.global(427);
                acc = _v31;
                _v29 = _v31;
              }
              acc = _v29;
              _v28 = _v29;
              if (rt.truth(_v29)) {
                const _v32: any = this;
                acc = _v32;
                const _v33: any = rt.global(425);
                acc = _v33;
                const _v34: any = await rt.send(_v33, "doit", [_v32]);
                acc = _v34;
                _v28 = _v34;
              }
              acc = _v28;
              _v6 = _v28;
            } else {
              let _v35: any = acc;
              const _v36: any = rt.global(413);
              acc = _v36;
              _v35 = _v36;
              if (rt.truth(_v36)) {
                const _v37: any = 6;
                acc = _v37;
                const _v38: any = rt.global(413);
                acc = _v38;
                const _v39: any = await rt.send(_v38, "cel", [_v37]);
                acc = _v39;
                _v35 = _v39;
              }
              acc = _v35;
              _v6 = _v35;
              let _v40: any = acc;
              const _v41: any = rt.global(424);
              acc = _v41;
              _v40 = _v41;
              if (rt.truth(_v41)) {
                const _v42: any = rt.global(424);
                acc = _v42;
                const _v43: any = await rt.send(_v42, "doit", []);
                acc = _v43;
                _v40 = _v43;
              }
              acc = _v40;
              _v6 = _v40;
            }
            acc = _v6;
            let _v44: any = acc;
            const _v45: any = rt.global(416);
            acc = _v45;
            _v44 = _v45;
            if (rt.truth(_v45)) {
              const _v46: any = this;
              acc = _v46;
              const _v47: any = await rt.send(_v46, "erase", []);
              acc = _v47;
              _v44 = _v47;
              const _v48: any = rt.get(this, "theDurable");
              acc = _v48;
              const _v49: any = await rt.send(_v48, "attributes", []);
              acc = _v49;
              const _v50: any = 65479;
              acc = _v50;
              const _v51: any = rt.op("&", ...[_v49, _v50]);
              acc = _v51;
              const _v52: any = rt.get(this, "theDurable");
              acc = _v52;
              const _v53: any = await rt.send(_v52, "attributes", [_v51]);
              acc = _v53;
              _v44 = _v53;
              let _v54: any = acc;
              const _v55: any = rt.global(447);
              acc = _v55;
              _v54 = _v55;
              if (rt.truth(_v55)) {
                const _v56: any = 0;
                acc = _v56;
                const _v57: any = this;
                acc = _v57;
                const _v58: any = await rt.send(_v57, "select", [_v56]);
                acc = _v58;
                _v54 = _v58;
                const _v59: any = 1;
                acc = _v59;
                const _v60: any = rt.object(212, "exitButton");
                acc = _v60;
                const _v61: any = await rt.send(_v60, "select", [_v59]);
                acc = _v61;
                _v54 = _v61;
                const _v62: any = rt.object(212, "exitButton");
                acc = _v62;
                const _v63: any = rt.object(212, "pawnShop");
                acc = _v63;
                const _v64: any = await rt.send(_v63, "theItem", [_v62]);
                acc = _v64;
                _v54 = _v64;
                const _v65: any = rt.object(212, "exitButton");
                acc = _v65;
                const _v66: any = rt.object(891, "KeyMouse");
                acc = _v66;
                const _v67: any = await rt.send(_v66, "setCursor", [_v65]);
                acc = _v67;
                _v54 = _v67;
              } else {
                const _v68: any = rt.object(212, "pawnShop");
                acc = _v68;
                const _v69: any = await rt.send(_v68, "advance", []);
                acc = _v69;
                _v54 = _v69;
              }
              acc = _v54;
              _v44 = _v54;
              const _v70: any = this;
              acc = _v70;
              const _v71: any = rt.object(891, "KeyMouse");
              acc = _v71;
              const _v72: any = await rt.send(_v71, "listOfCoords", []);
              acc = _v72;
              const _v73: any = await rt.send(_v72, "delete", [_v70]);
              acc = _v73;
              _v44 = _v73;
              const _v74: any = rt.object(212, "pawnShop");
              acc = _v74;
              const _v75: any = await rt.send(_v74, "theItem", []);
              acc = _v75;
              const _v76: any = rt.object(891, "KeyMouse");
              acc = _v76;
              const _v77: any = await rt.send(_v76, "curItem", [_v75]);
              acc = _v77;
              _v44 = _v77;
              let _v78: any = acc;
              const _v79: any = rt.local(212, 0);
              acc = _v79;
              const _v80: any = 2;
              acc = _v80;
              const _v81: any = rt.op("==", ...[_v79, _v80]);
              acc = _v81;
              _v78 = _v81;
              if (rt.truth(_v81)) {
                const _v82: any = this;
                acc = _v82;
                const _v83: any = rt.object(212, "pawnShop");
                acc = _v83;
                const _v84: any = await rt.send(_v83, "delete", [_v82]);
                acc = _v84;
                _v78 = _v84;
                const _v85: any = rt.get(this, "theDurable");
                acc = _v85;
                const _v86: any = await rt.send(_v85, "quantity", []);
                acc = _v86;
                const _v87: any = 1;
                acc = _v87;
                const _v88: any = rt.op("+", ...[_v86, _v87]);
                acc = _v88;
                const _v89: any = rt.get(this, "theDurable");
                acc = _v89;
                const _v90: any = await rt.send(_v89, "quantity", [_v88]);
                acc = _v90;
                _v78 = _v90;
              } else {
                const _v91: any = this;
                acc = _v91;
                const _v92: any = rt.object(212, "pawnShop");
                acc = _v92;
                const _v93: any = await rt.send(_v92, "delete", [_v91]);
                acc = _v93;
                _v78 = _v93;
                const _v96: any = 0;
                acc = _v96;
                const _v97: any = (temps[0] = _v96);
                acc = _v97;
                _loop94: for (;;) {
                  const _v98: any = (temps[0] ?? 0);
                  acc = _v98;
                  const _v99: any = 1;
                  acc = _v99;
                  const _v100: any = 2;
                  acc = _v100;
                  const _v101: any = await rt.call(212, "ScriptID", [_v99, _v100], this);
                  acc = _v101;
                  const _v102: any = await rt.send(_v101, "size", []);
                  acc = _v102;
                  const _v103: any = rt.op("<", ...[_v98, _v102]);
                  acc = _v103;
                  if (!rt.truth(_v103)) break _loop94;
                  _continue95: {
                    let _v104: any = acc;
                    const _v105: any = rt.get(this, "theDurable");
                    acc = _v105;
                    const _v106: any = (temps[0] ?? 0);
                    acc = _v106;
                    const _v107: any = 1;
                    acc = _v107;
                    const _v108: any = 2;
                    acc = _v108;
                    const _v109: any = await rt.call(212, "ScriptID", [_v107, _v108], this);
                    acc = _v109;
                    const _v110: any = await rt.send(_v109, "at", [_v106]);
                    acc = _v110;
                    const _v111: any = await rt.send(_v110, "durables", []);
                    acc = _v111;
                    const _v112: any = await rt.send(_v111, "contains", [_v105]);
                    acc = _v112;
                    _v104 = _v112;
                    if (rt.truth(_v112)) {
                      let _v113: any = acc;
                      const _v114: any = rt.get(this, "theDurable");
                      acc = _v114;
                      const _v115: any = await rt.send(_v114, "quantity", []);
                      acc = _v115;
                      const _v116: any = rt.op("not", ...[_v115]);
                      acc = _v116;
                      _v113 = _v116;
                      if (rt.truth(_v116)) {
                        const _v117: any = rt.get(this, "theDurable");
                        acc = _v117;
                        const _v118: any = (temps[0] ?? 0);
                        acc = _v118;
                        const _v119: any = 1;
                        acc = _v119;
                        const _v120: any = 2;
                        acc = _v120;
                        const _v121: any = await rt.call(212, "ScriptID", [_v119, _v120], this);
                        acc = _v121;
                        const _v122: any = await rt.send(_v121, "at", [_v118]);
                        acc = _v122;
                        const _v123: any = await rt.send(_v122, "durables", []);
                        acc = _v123;
                        const _v124: any = await rt.send(_v123, "delete", [_v117]);
                        acc = _v124;
                        _v113 = _v124;
                      }
                      acc = _v113;
                      _v104 = _v113;
                      let _v125: any = acc;
                      const _v126: any = rt.get(this, "theDurable");
                      acc = _v126;
                      const _v127: any = await rt.send(_v126, "indexNum", []);
                      acc = _v127;
                      const _v128: any = 1;
                      acc = _v128;
                      const _v129: any = rt.global(302);
                      acc = _v129;
                      const _v130: any = await rt.send(_v129, "durables", []);
                      acc = _v130;
                      const _v131: any = await rt.send(_v130, "hasType", [_v127, _v128]);
                      acc = _v131;
                      const _v132: any = rt.op("not", ...[_v131]);
                      acc = _v132;
                      _v125 = _v132;
                      if (rt.truth(_v132)) {
                        let _v133: any = acc;
                        const _v134: any = rt.get(this, "theDurable");
                        acc = _v134;
                        const _v135: any = await rt.send(_v134, "quantity", []);
                        acc = _v135;
                        const _v136: any = 0;
                        acc = _v136;
                        const _v137: any = rt.op("==", ...[_v135, _v136]);
                        acc = _v137;
                        _v133 = _v137;
                        if (rt.truth(_v137)) {
                          const _v138: any = 1;
                          acc = _v138;
                          const _v139: any = rt.get(this, "theDurable");
                          acc = _v139;
                          const _v140: any = await rt.send(_v139, "quantity", [_v138]);
                          acc = _v140;
                          _v133 = _v140;
                          const _v141: any = rt.get(this, "theDurable");
                          acc = _v141;
                          const _v142: any = rt.global(302);
                          acc = _v142;
                          const _v143: any = await rt.send(_v142, "durables", []);
                          acc = _v143;
                          const _v144: any = await rt.send(_v143, "add", [_v141]);
                          acc = _v144;
                          _v133 = _v144;
                          break _loop94;
                          _v133 = acc;
                        }
                        acc = _v133;
                        _v125 = _v133;
                        const _v145: any = 1;
                        acc = _v145;
                        const _v146: any = rt.get(this, "theDurable");
                        acc = _v146;
                        const _v147: any = await rt.call(212, "Clone", [_v146], this);
                        acc = _v147;
                        const _v148: any = await rt.send(_v147, "quantity", [_v145]);
                        acc = _v148;
                        const _v149: any = await rt.send(_v147, "yourself", []);
                        acc = _v149;
                        const _v150: any = rt.global(302);
                        acc = _v150;
                        const _v151: any = await rt.send(_v150, "durables", []);
                        acc = _v151;
                        const _v152: any = await rt.send(_v151, "add", [_v149]);
                        acc = _v152;
                        _v125 = _v152;
                      }
                      acc = _v125;
                      _v104 = _v125;
                      break _loop94;
                      _v104 = acc;
                    }
                    acc = _v104;
                  }
                  const _v153: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
                  acc = _v153;
                }
                _v78 = acc;
              }
              acc = _v78;
              _v44 = _v78;
              const _v154: any = this;
              acc = _v154;
              const _v155: any = await rt.send(_v154, "dispose", []);
              acc = _v155;
              _v44 = _v155;
            }
            acc = _v44;
            const _v156: any = 0;
            acc = _v156;
            return _v156;
            return acc;
          },
          // SCI pawnShop.sc: aRedeemableItem.doFormat
          "doFormat": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "price");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = (args[0] ?? 0);
              acc = _v3;
              const _v4: any = 212;
              acc = _v4;
              const _v5: any = 26;
              acc = _v5;
              const _v6: any = rt.get(this, "text");
              acc = _v6;
              const _v7: any = rt.get(this, "price");
              acc = _v7;
              const _v8: any = await rt.call(212, "Format", [_v3, _v4, _v5, _v6, _v7], this);
              acc = _v8;
              _v1 = _v8;
            } else {
              const _v9: any = (args[0] ?? 0);
              acc = _v9;
              const _v10: any = await rt.superSend(this, {"script": 212, "name": "aRedeemableItem"}, "doFormat", [_v9]);
              acc = _v10;
              _v1 = _v10;
            }
            acc = _v1;
            return acc;
          },
        },
      },
      {
        name: "items",
        className: "DCIcon",
        parent: {"script": 967, "name": "DCIcon"},
        isClass: false,
        properties: {"state": 64, "nsTop": 56, "view": 708, "loop": 1, "cel": 13, "priority": 14, "cycleSpeed": 100},
        methods: {
          // SCI pawnShop.sc: items.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            let _v2: any = 1;
            if (rt.truth(_v2)) {
              const _v3: any = rt.global(534);
              acc = _v3;
              const _v4: any = 2;
              acc = _v4;
              const _v5: any = rt.op("<", ...[_v3, _v4]);
              acc = _v5;
              _v2 = _v5;
            }
            if (rt.truth(_v2)) {
              const _v6: any = rt.global(416);
              acc = _v6;
              _v2 = _v6;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v7: any = (args[0] ?? 0);
              acc = _v7;
              const _v8: any = rt.object(212, "FCue");
              acc = _v8;
              const _v9: any = this;
              acc = _v9;
              const _v10: any = this;
              acc = _v10;
              const _v11: any = await rt.send(_v10, "cel", [_v7]);
              acc = _v11;
              const _v12: any = await rt.send(_v10, "init", []);
              acc = _v12;
              const _v13: any = await rt.send(_v10, "setSize", []);
              acc = _v13;
              const _v14: any = await rt.send(_v10, "draw", []);
              acc = _v14;
              const _v15: any = await rt.send(_v10, "setCycle", [_v8, _v9]);
              acc = _v15;
              _v1 = _v15;
              const _v16: any = -50;
              acc = _v16;
              const _v17: any = rt.get(this, "cycler");
              acc = _v17;
              const _v18: any = await rt.send(_v17, "cycleCnt", [_v16]);
              acc = _v18;
              _v1 = _v18;
            }
            acc = _v1;
            return acc;
          },
          // SCI pawnShop.sc: items.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
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
              const _v5: any = 13;
              acc = _v5;
              const _v6: any = this;
              acc = _v6;
              const _v7: any = await rt.send(_v6, "cel", [_v5]);
              acc = _v7;
              const _v8: any = await rt.send(_v6, "draw", []);
              acc = _v8;
              _v1 = _v8;
            }
            acc = _v1;
            return acc;
          },
          // SCI pawnShop.sc: items.setCycle
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
              const _v6: any = await rt.superSend(this, {"script": 212, "name": "items"}, "setCycle", [..._v5]);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return acc;
          },
          // SCI pawnShop.sc: items.draw
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
              const _v6: any = await rt.superSend(this, {"script": 212, "name": "items"}, "draw", [..._v5]);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return acc;
          },
          // SCI pawnShop.sc: items.setSize
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
              const _v6: any = await rt.superSend(this, {"script": 212, "name": "items"}, "setSize", [..._v5]);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
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
          // SCI pawnShop.sc: computerScript.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
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
              const _v5: any = 4;
              acc = _v5;
              const _v6: any = 160;
              acc = _v6;
              const _v7: any = 100;
              acc = _v7;
              const _v8: any = (args[0] ?? 0);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "type", [_v5]);
              acc = _v9;
              const _v10: any = await rt.send(_v8, "x", [_v6]);
              acc = _v10;
              const _v11: any = await rt.send(_v8, "y", [_v7]);
              acc = _v11;
              _v1 = _v11;
              const _v12: any = 1;
              acc = _v12;
              const _v13: any = rt.set(this, "cycles", _v12);
              acc = _v13;
              _v1 = _v13;
              let _v14: any = acc;
              const _v15: any = rt.local(212, 0);
              acc = _v15;
              _branch16: {
                const _v17: any = 0;
                acc = _v17;
                _v14 = rt.op("==", _v15, _v17);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v18: any = acc;
                  const _v19: any = rt.local(212, 426);
                  acc = _v19;
                  _branch20: {
                    const _v21: any = 2;
                    acc = _v21;
                    _v18 = rt.op("==", _v19, _v21);
                    acc = _v18;
                    if (rt.truth(_v18)) {
                      let _v22: any = acc;
                      const _v23: any = 9;
                      acc = _v23;
                      const _v24: any = await rt.call(0, "proc0_6", [_v23], this);
                      acc = _v24;
                      _v22 = _v24;
                      if (rt.truth(_v24)) {
                        const _v25: any = 60;
                        acc = _v25;
                        const _v26: any = rt.set(this, "cycles", _v25);
                        acc = _v26;
                        _v22 = _v26;
                        const _v27: any = rt.object(212, "pawnButton");
                        acc = _v27;
                        const _v28: any = await rt.send(_v27, "key", []);
                        acc = _v28;
                        const _v29: any = (args[0] ?? 0);
                        acc = _v29;
                        const _v30: any = await rt.send(_v29, "message", [_v28]);
                        acc = _v30;
                        _v22 = _v30;
                      }
                      acc = _v22;
                      _v18 = _v22;
                      break _branch20;
                    }
                    const _v31: any = 3;
                    acc = _v31;
                    _v18 = rt.op("==", _v19, _v31);
                    acc = _v18;
                    if (rt.truth(_v18)) {
                      let _v32: any = acc;
                      const _v33: any = 10;
                      acc = _v33;
                      const _v34: any = await rt.call(0, "proc0_6", [_v33], this);
                      acc = _v34;
                      _v32 = _v34;
                      if (rt.truth(_v34)) {
                        const _v35: any = 60;
                        acc = _v35;
                        const _v36: any = rt.set(this, "cycles", _v35);
                        acc = _v36;
                        _v32 = _v36;
                        const _v37: any = rt.object(212, "redeemButton");
                        acc = _v37;
                        const _v38: any = await rt.send(_v37, "key", []);
                        acc = _v38;
                        const _v39: any = (args[0] ?? 0);
                        acc = _v39;
                        const _v40: any = await rt.send(_v39, "message", [_v38]);
                        acc = _v40;
                        _v32 = _v40;
                      }
                      acc = _v32;
                      _v18 = _v32;
                      break _branch20;
                    }
                    const _v41: any = rt.local(212, 426);
                    acc = _v41;
                    const _v42: any = rt.set(this, "state", _v41);
                    acc = _v42;
                    _v18 = _v42;
                    const _v43: any = (args[0] ?? 0);
                    acc = _v43;
                    const _v44: any = 0;
                    acc = _v44;
                    const _v45: any = await rt.superSend(this, {"script": 212, "name": "computerScript"}, "handleEvent", [_v43, _v44]);
                    acc = _v45;
                    _v18 = _v45;
                    break _branch20;
                  }
                  acc = _v18;
                  _v14 = _v18;
                  break _branch16;
                }
                const _v46: any = 1;
                acc = _v46;
                _v14 = rt.op("==", _v15, _v46);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v47: any = acc;
                  const _v48: any = rt.local(212, 427);
                  acc = _v48;
                  _branch49: {
                    const _v50: any = 2;
                    acc = _v50;
                    _v47 = rt.op("==", _v48, _v50);
                    acc = _v47;
                    if (rt.truth(_v47)) {
                      const _v51: any = 60;
                      acc = _v51;
                      const _v52: any = rt.set(this, "cycles", _v51);
                      acc = _v52;
                      _v47 = _v52;
                      break _branch49;
                    }
                    const _v53: any = 3;
                    acc = _v53;
                    _v47 = rt.op("==", _v48, _v53);
                    acc = _v47;
                    if (rt.truth(_v47)) {
                      const _v54: any = rt.local(212, 3);
                      acc = _v54;
                      const _v55: any = rt.object(212, "pawnSelector");
                      acc = _v55;
                      const _v56: any = await rt.send(_v55, "advance", [_v54]);
                      acc = _v56;
                      _v47 = _v56;
                      const _v57: any = 60;
                      acc = _v57;
                      const _v58: any = rt.set(this, "cycles", _v57);
                      acc = _v58;
                      _v47 = _v58;
                      break _branch49;
                    }
                    const _v59: any = 4;
                    acc = _v59;
                    _v47 = rt.op("==", _v48, _v59);
                    acc = _v47;
                    if (rt.truth(_v47)) {
                      let _v60: any = acc;
                      const _v61: any = await rt.call(212, "localproc_5", [], this);
                      acc = _v61;
                      const _v62: any = 6;
                      acc = _v62;
                      const _v63: any = rt.op("<", ...[_v61, _v62]);
                      acc = _v63;
                      _v60 = _v63;
                      if (rt.truth(_v63)) {
                        const _v64: any = rt.object(212, "pawn");
                        acc = _v64;
                        const _v65: any = await rt.send(_v64, "key", []);
                        acc = _v65;
                        const _v66: any = (args[0] ?? 0);
                        acc = _v66;
                        const _v67: any = await rt.send(_v66, "message", [_v65]);
                        acc = _v67;
                        _v60 = _v67;
                        const _v68: any = 60;
                        acc = _v68;
                        const _v69: any = rt.set(this, "cycles", _v68);
                        acc = _v69;
                        _v60 = _v69;
                        let _v70: any = acc;
                        const _v71: any = rt.local(212, 1);
                        acc = _v71;
                        const _v72: any = rt.setGlobal(408, rt.op("-", rt.global(408), _v71));
                        acc = _v72;
                        const _v73: any = 0;
                        acc = _v73;
                        const _v74: any = rt.op(">", ...[_v72, _v73]);
                        acc = _v74;
                        _v70 = _v74;
                        if (rt.truth(_v74)) {
                          const _v75: any = rt.set(this, "state", rt.op("-", rt.get(this, "state"), 1));
                          acc = _v75;
                          _v70 = _v75;
                        }
                        acc = _v70;
                        _v60 = _v70;
                      }
                      acc = _v60;
                      _v47 = _v60;
                      break _branch49;
                    }
                    const _v76: any = rt.local(212, 427);
                    acc = _v76;
                    const _v77: any = rt.set(this, "state", _v76);
                    acc = _v77;
                    _v47 = _v77;
                    const _v78: any = (args[0] ?? 0);
                    acc = _v78;
                    const _v79: any = 0;
                    acc = _v79;
                    const _v80: any = await rt.superSend(this, {"script": 212, "name": "computerScript"}, "handleEvent", [_v78, _v79]);
                    acc = _v80;
                    _v47 = _v80;
                    break _branch49;
                  }
                  acc = _v47;
                  _v14 = _v47;
                  break _branch16;
                }
                const _v81: any = 2;
                acc = _v81;
                _v14 = rt.op("==", _v15, _v81);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v82: any = acc;
                  const _v83: any = rt.local(212, 428);
                  acc = _v83;
                  _branch84: {
                    const _v85: any = 2;
                    acc = _v85;
                    _v82 = rt.op("==", _v83, _v85);
                    acc = _v82;
                    if (rt.truth(_v82)) {
                      const _v86: any = rt.object(212, "pawnShop");
                      acc = _v86;
                      const _v87: any = await rt.send(_v86, "size", []);
                      acc = _v87;
                      const _v88: any = 1;
                      acc = _v88;
                      const _v89: any = rt.local(212, 424);
                      acc = _v89;
                      const _v90: any = rt.op("+", ...[_v88, _v89]);
                      acc = _v90;
                      const _v91: any = rt.op("-", ...[_v87, _v90]);
                      acc = _v91;
                      const _v92: any = rt.object(212, "pawnShop");
                      acc = _v92;
                      const _v93: any = await rt.send(_v92, "at", [_v91]);
                      acc = _v93;
                      const _v94: any = (temps[0] = _v93);
                      acc = _v94;
                      _v82 = _v94;
                      let _v95: any = acc;
                      const _v96: any = (temps[0] ?? 0);
                      acc = _v96;
                      const _v97: any = await rt.send(_v96, "key", []);
                      acc = _v97;
                      const _v98: any = 199;
                      acc = _v98;
                      const _v99: any = rt.op("==", ...[_v97, _v98]);
                      acc = _v99;
                      _v95 = _v99;
                      if (rt.truth(_v99)) {
                        const _v100: any = rt.set(this, "state", rt.op("-", rt.get(this, "state"), 1));
                        acc = _v100;
                        _v95 = _v100;
                        let _v101: any = acc;
                        const _v102: any = await rt.call(0, "proc0_11", [], this);
                        acc = _v102;
                        const _v103: any = (temps[0] ?? 0);
                        acc = _v103;
                        const _v104: any = await rt.send(_v103, "price", []);
                        acc = _v104;
                        const _v105: any = rt.op(">=", ...[_v102, _v104]);
                        acc = _v105;
                        _v101 = _v105;
                        if (rt.truth(_v105)) {
                          const _v106: any = 12;
                          acc = _v106;
                          const _v107: any = (temps[0] ?? 0);
                          acc = _v107;
                          const _v108: any = await rt.send(_v107, "key", [_v106]);
                          acc = _v108;
                          _v101 = _v108;
                          const _v109: any = 12;
                          acc = _v109;
                          const _v110: any = (args[0] ?? 0);
                          acc = _v110;
                          const _v111: any = await rt.send(_v110, "message", [_v109]);
                          acc = _v111;
                          _v101 = _v111;
                          const _v112: any = 60;
                          acc = _v112;
                          const _v113: any = rt.set(this, "cycles", _v112);
                          acc = _v113;
                          _v101 = _v113;
                        }
                        acc = _v101;
                        _v95 = _v101;
                      }
                      acc = _v95;
                      _v82 = _v95;
                      const _v114: any = rt.setLocal(212, 424, rt.op("+", rt.local(212, 424), 1));
                      acc = _v114;
                      _v82 = _v114;
                      break _branch84;
                    }
                    const _v115: any = rt.local(212, 428);
                    acc = _v115;
                    const _v116: any = rt.set(this, "state", _v115);
                    acc = _v116;
                    _v82 = _v116;
                    const _v117: any = (args[0] ?? 0);
                    acc = _v117;
                    const _v118: any = 0;
                    acc = _v118;
                    const _v119: any = await rt.superSend(this, {"script": 212, "name": "computerScript"}, "handleEvent", [_v117, _v118]);
                    acc = _v119;
                    _v82 = _v119;
                    break _branch84;
                  }
                  acc = _v82;
                  _v14 = _v82;
                  break _branch16;
                }
              }
              acc = _v14;
              _v1 = _v14;
            }
            acc = _v1;
            return acc;
          },
          // SCI pawnShop.sc: computerScript.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.local(212, 0);
            acc = _v2;
            _branch3: {
              const _v4: any = 0;
              acc = _v4;
              _v1 = rt.op("==", _v2, _v4);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v5: any = rt.setLocal(212, 426, rt.op("+", rt.local(212, 426), 1));
                acc = _v5;
                _v1 = _v5;
                break _branch3;
              }
              const _v6: any = 1;
              acc = _v6;
              _v1 = rt.op("==", _v2, _v6);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v7: any = rt.setLocal(212, 427, rt.op("+", rt.local(212, 427), 1));
                acc = _v7;
                _v1 = _v7;
                break _branch3;
              }
              const _v8: any = 2;
              acc = _v8;
              _v1 = rt.op("==", _v2, _v8);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v9: any = rt.setLocal(212, 428, rt.op("+", rt.local(212, 428), 1));
                acc = _v9;
                _v1 = _v9;
                break _branch3;
              }
            }
            acc = _v1;
            const _v10: any = 1;
            acc = _v10;
            const _v11: any = rt.set(this, "register", _v10);
            acc = _v11;
            return acc;
          },
        },
      },
    ],
    procedures: {
      // SCI pawnShop.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = rt.ref("global", 0, 100);
        acc = _v1;
        const _v2: any = 212;
        acc = _v2;
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = await rt.call(212, "Format", [_v1, _v2, _v3], this);
        acc = _v4;
        const _v5: any = rt.ref("global", 0, 100);
        acc = _v5;
        const _v6: any = 212;
        acc = _v6;
        const _v7: any = 1;
        acc = _v7;
        const _v8: any = await rt.call(212, "Format", [_v5, _v6, _v7], this);
        acc = _v8;
        const _v9: any = rt.ref("global", 0, 100);
        acc = _v9;
        const _v10: any = 212;
        acc = _v10;
        const _v11: any = 2;
        acc = _v11;
        const _v12: any = await rt.call(212, "Format", [_v9, _v10, _v11], this);
        acc = _v12;
        const _v13: any = rt.ref("global", 0, 100);
        acc = _v13;
        const _v14: any = 212;
        acc = _v14;
        const _v15: any = 3;
        acc = _v15;
        const _v16: any = await rt.call(212, "Format", [_v13, _v14, _v15], this);
        acc = _v16;
        const _v17: any = rt.ref("global", 0, 100);
        acc = _v17;
        const _v18: any = 212;
        acc = _v18;
        const _v19: any = 4;
        acc = _v19;
        const _v20: any = await rt.call(212, "Format", [_v17, _v18, _v19], this);
        acc = _v20;
        const _v21: any = rt.ref("global", 0, 100);
        acc = _v21;
        const _v22: any = 212;
        acc = _v22;
        const _v23: any = 5;
        acc = _v23;
        const _v24: any = await rt.call(212, "Format", [_v21, _v22, _v23], this);
        acc = _v24;
        const _v25: any = rt.ref("global", 0, 100);
        acc = _v25;
        const _v26: any = 212;
        acc = _v26;
        const _v27: any = 6;
        acc = _v27;
        const _v28: any = await rt.call(212, "Format", [_v25, _v26, _v27], this);
        acc = _v28;
        const _v29: any = rt.ref("global", 0, 100);
        acc = _v29;
        const _v30: any = 212;
        acc = _v30;
        const _v31: any = 7;
        acc = _v31;
        const _v32: any = await rt.call(212, "Format", [_v29, _v30, _v31], this);
        acc = _v32;
        const _v33: any = rt.ref("global", 0, 100);
        acc = _v33;
        const _v34: any = 212;
        acc = _v34;
        const _v35: any = 8;
        acc = _v35;
        const _v36: any = await rt.call(212, "Format", [_v33, _v34, _v35], this);
        acc = _v36;
        const _v37: any = rt.ref("global", 0, 100);
        acc = _v37;
        const _v38: any = 212;
        acc = _v38;
        const _v39: any = 9;
        acc = _v39;
        const _v40: any = await rt.call(212, "Format", [_v37, _v38, _v39], this);
        acc = _v40;
        const _v41: any = rt.ref("global", 0, 100);
        acc = _v41;
        const _v42: any = 212;
        acc = _v42;
        const _v43: any = 10;
        acc = _v43;
        const _v44: any = await rt.call(212, "Format", [_v41, _v42, _v43], this);
        acc = _v44;
        const _v45: any = rt.ref("global", 0, 100);
        acc = _v45;
        const _v46: any = 212;
        acc = _v46;
        const _v47: any = 11;
        acc = _v47;
        const _v48: any = await rt.call(212, "Format", [_v45, _v46, _v47], this);
        acc = _v48;
        const _v49: any = rt.ref("global", 0, 100);
        acc = _v49;
        const _v50: any = 212;
        acc = _v50;
        const _v51: any = 12;
        acc = _v51;
        const _v52: any = await rt.call(212, "Format", [_v49, _v50, _v51], this);
        acc = _v52;
        const _v53: any = rt.ref("global", 0, 100);
        acc = _v53;
        const _v54: any = 212;
        acc = _v54;
        const _v55: any = 13;
        acc = _v55;
        const _v56: any = await rt.call(212, "Format", [_v53, _v54, _v55], this);
        acc = _v56;
        const _v57: any = rt.ref("global", 0, 100);
        acc = _v57;
        const _v58: any = 212;
        acc = _v58;
        const _v59: any = 14;
        acc = _v59;
        const _v60: any = await rt.call(212, "Format", [_v57, _v58, _v59], this);
        acc = _v60;
        const _v61: any = rt.ref("global", 0, 100);
        acc = _v61;
        const _v62: any = 212;
        acc = _v62;
        const _v63: any = 15;
        acc = _v63;
        const _v64: any = await rt.call(212, "Format", [_v61, _v62, _v63], this);
        acc = _v64;
        return acc;
      },
      // SCI pawnShop.sc: localproc_1
      "localproc_1": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0];
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = (temps[0] = _v3);
        acc = _v4;
        _loop1: for (;;) {
          const _v5: any = (temps[0] ?? 0);
          acc = _v5;
          const _v6: any = 1;
          acc = _v6;
          const _v7: any = 2;
          acc = _v7;
          const _v8: any = await rt.call(212, "ScriptID", [_v6, _v7], this);
          acc = _v8;
          const _v9: any = await rt.send(_v8, "size", []);
          acc = _v9;
          const _v10: any = rt.op("<", ...[_v5, _v9]);
          acc = _v10;
          if (!rt.truth(_v10)) break _loop1;
          _continue2: {
            const _v13: any = 0;
            acc = _v13;
            const _v14: any = (temps[1] = _v13);
            acc = _v14;
            _loop11: for (;;) {
              const _v15: any = (temps[1] ?? 0);
              acc = _v15;
              const _v16: any = (temps[0] ?? 0);
              acc = _v16;
              const _v17: any = 1;
              acc = _v17;
              const _v18: any = 2;
              acc = _v18;
              const _v19: any = await rt.call(212, "ScriptID", [_v17, _v18], this);
              acc = _v19;
              const _v20: any = await rt.send(_v19, "at", [_v16]);
              acc = _v20;
              const _v21: any = await rt.send(_v20, "durables", []);
              acc = _v21;
              const _v22: any = await rt.send(_v21, "size", []);
              acc = _v22;
              const _v23: any = rt.op("<", ...[_v15, _v22]);
              acc = _v23;
              if (!rt.truth(_v23)) break _loop11;
              _continue12: {
                let _v24: any = acc;
                const _v25: any = (temps[1] ?? 0);
                acc = _v25;
                const _v26: any = (temps[0] ?? 0);
                acc = _v26;
                const _v27: any = 1;
                acc = _v27;
                const _v28: any = 2;
                acc = _v28;
                const _v29: any = await rt.call(212, "ScriptID", [_v27, _v28], this);
                acc = _v29;
                const _v30: any = await rt.send(_v29, "at", [_v26]);
                acc = _v30;
                const _v31: any = await rt.send(_v30, "durables", []);
                acc = _v31;
                const _v32: any = await rt.send(_v31, "at", [_v25]);
                acc = _v32;
                const _v33: any = await rt.send(_v32, "attributes", []);
                acc = _v33;
                const _v34: any = 32;
                acc = _v34;
                const _v35: any = rt.op("&", ...[_v33, _v34]);
                acc = _v35;
                _v24 = _v35;
                if (rt.truth(_v35)) {
                  const _v36: any = 1;
                  acc = _v36;
                  return _v36;
                  _v24 = acc;
                }
                acc = _v24;
              }
              const _v37: any = (temps[1] = rt.op("+", (temps[1] ?? 0), 1));
              acc = _v37;
            }
          }
          const _v38: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
          acc = _v38;
        }
        const _v39: any = 0;
        acc = _v39;
        return _v39;
        return acc;
      },
      // SCI pawnShop.sc: localproc_2
      "localproc_2": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
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
          const _v6: any = rt.global(302);
          acc = _v6;
          const _v7: any = await rt.send(_v6, "durables", []);
          acc = _v7;
          const _v8: any = await rt.send(_v7, "size", []);
          acc = _v8;
          const _v9: any = rt.op("<", ...[_v5, _v8]);
          acc = _v9;
          if (!rt.truth(_v9)) break _loop1;
          _continue2: {
            let _v10: any = acc;
            const _v11: any = (temps[0] ?? 0);
            acc = _v11;
            const _v12: any = rt.global(302);
            acc = _v12;
            const _v13: any = await rt.send(_v12, "durables", []);
            acc = _v13;
            const _v14: any = await rt.send(_v13, "at", [_v11]);
            acc = _v14;
            const _v15: any = await rt.send(_v14, "attributes", []);
            acc = _v15;
            const _v16: any = 24;
            acc = _v16;
            const _v17: any = rt.op("&", ...[_v15, _v16]);
            acc = _v17;
            _v10 = _v17;
            if (rt.truth(_v17)) {
              const _v18: any = 1;
              acc = _v18;
              return _v18;
              _v10 = acc;
            }
            acc = _v10;
          }
          const _v19: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
          acc = _v19;
        }
        const _v20: any = 0;
        acc = _v20;
        return _v20;
        return acc;
      },
      // SCI pawnShop.sc: localproc_3
      "localproc_3": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const _v1: any = rt.global(302);
        acc = _v1;
        const _v2: any = await rt.send(_v1, "durables", []);
        acc = _v2;
        const _v3: any = (temps[32] = _v2);
        acc = _v3;
        const _v4: any = 0;
        acc = _v4;
        const _v5: any = rt.setLocal(212, 3, _v4);
        acc = _v5;
        const _v8: any = 0;
        acc = _v8;
        const _v9: any = (temps[31] = _v8);
        acc = _v9;
        _loop6: for (;;) {
          const _v10: any = (temps[31] ?? 0);
          acc = _v10;
          const _v11: any = 300;
          acc = _v11;
          const _v12: any = rt.op("<", ...[_v10, _v11]);
          acc = _v12;
          if (!rt.truth(_v12)) break _loop6;
          _continue7: {
            const _v13: any = 0;
            acc = _v13;
            const _v14: any = (temps[31] ?? 0);
            acc = _v14;
            const _v15: any = rt.setLocal(212, (4 + (Number(_v14) & 65535)), _v13);
            acc = _v15;
          }
          const _v16: any = (temps[31] = rt.op("+", (temps[31] ?? 0), 1));
          acc = _v16;
        }
        const _v17: any = rt.ref("local", 212, 4);
        acc = _v17;
        const _v18: any = 212;
        acc = _v18;
        const _v19: any = 17;
        acc = _v19;
        const _v20: any = await rt.call(212, "Format", [_v17, _v18, _v19], this);
        acc = _v20;
        let _v21: any = acc;
        const _v22: any = (temps[32] ?? 0);
        acc = _v22;
        const _v23: any = await rt.send(_v22, "size", []);
        acc = _v23;
        _v21 = _v23;
        if (rt.truth(_v23)) {
          const _v26: any = 0;
          acc = _v26;
          const _v27: any = (temps[31] = _v26);
          acc = _v27;
          _loop24: for (;;) {
            const _v28: any = (temps[31] ?? 0);
            acc = _v28;
            const _v29: any = (temps[32] ?? 0);
            acc = _v29;
            const _v30: any = await rt.send(_v29, "size", []);
            acc = _v30;
            const _v31: any = rt.op("<", ...[_v28, _v30]);
            acc = _v31;
            if (!rt.truth(_v31)) break _loop24;
            _continue25: {
              let _v32: any = acc;
              let _v33: any = 0;
              if (!rt.truth(_v33)) {
                const _v34: any = (temps[31] ?? 0);
                acc = _v34;
                const _v35: any = (temps[32] ?? 0);
                acc = _v35;
                const _v36: any = await rt.send(_v35, "at", [_v34]);
                acc = _v36;
                const _v37: any = await rt.send(_v36, "attributes", []);
                acc = _v37;
                const _v38: any = 56;
                acc = _v38;
                const _v39: any = rt.op("&", ...[_v37, _v38]);
                acc = _v39;
                const _v40: any = rt.op("not", ...[_v39]);
                acc = _v40;
                _v33 = _v40;
              }
              if (!rt.truth(_v33)) {
                const _v41: any = (temps[31] ?? 0);
                acc = _v41;
                const _v42: any = rt.global(302);
                acc = _v42;
                const _v43: any = await rt.send(_v42, "durables", []);
                acc = _v43;
                const _v44: any = await rt.send(_v43, "at", [_v41]);
                acc = _v44;
                const _v45: any = await rt.send(_v44, "quantity", []);
                acc = _v45;
                const _v46: any = 1;
                acc = _v46;
                const _v47: any = rt.op(">", ...[_v45, _v46]);
                acc = _v47;
                _v33 = _v47;
              }
              acc = _v33;
              _v32 = _v33;
              if (rt.truth(_v33)) {
                const _v48: any = rt.ref("local", 212, 4);
                acc = _v48;
                const _v49: any = await rt.call(212, "StrEnd", [_v48], this);
                acc = _v49;
                const _v50: any = 212;
                acc = _v50;
                const _v51: any = 18;
                acc = _v51;
                const _v52: any = 700;
                acc = _v52;
                const _v53: any = (temps[31] ?? 0);
                acc = _v53;
                const _v54: any = (temps[32] ?? 0);
                acc = _v54;
                const _v55: any = await rt.send(_v54, "at", [_v53]);
                acc = _v55;
                const _v56: any = await rt.send(_v55, "indexNum", []);
                acc = _v56;
                const _v57: any = await rt.call(212, "Format", [_v49, _v50, _v51, _v52, _v56], this);
                acc = _v57;
                _v32 = _v57;
                const _v58: any = rt.setLocal(212, 3, rt.op("+", rt.local(212, 3), 1));
                acc = _v58;
                _v32 = _v58;
              }
              acc = _v32;
            }
            const _v59: any = (temps[31] = rt.op("+", (temps[31] ?? 0), 1));
            acc = _v59;
          }
          _v21 = acc;
        }
        acc = _v21;
        return acc;
      },
      // SCI pawnShop.sc: localproc_4
      "localproc_4": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0];
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = (temps[1] = _v3);
        acc = _v4;
        const _v5: any = (temps[0] = _v4);
        acc = _v5;
        _loop1: for (;;) {
          const _v6: any = (temps[0] ?? 0);
          acc = _v6;
          const _v7: any = rt.global(302);
          acc = _v7;
          const _v8: any = await rt.send(_v7, "durables", []);
          acc = _v8;
          const _v9: any = await rt.send(_v8, "size", []);
          acc = _v9;
          const _v10: any = rt.op("<", ...[_v6, _v9]);
          acc = _v10;
          if (!rt.truth(_v10)) break _loop1;
          _continue2: {
            let _v11: any = acc;
            let _v12: any = 0;
            if (!rt.truth(_v12)) {
              const _v13: any = (temps[0] ?? 0);
              acc = _v13;
              const _v14: any = rt.global(302);
              acc = _v14;
              const _v15: any = await rt.send(_v14, "durables", []);
              acc = _v15;
              const _v16: any = await rt.send(_v15, "at", [_v13]);
              acc = _v16;
              const _v17: any = await rt.send(_v16, "attributes", []);
              acc = _v17;
              const _v18: any = 56;
              acc = _v18;
              const _v19: any = rt.op("&", ...[_v17, _v18]);
              acc = _v19;
              const _v20: any = rt.op("not", ...[_v19]);
              acc = _v20;
              _v12 = _v20;
            }
            if (!rt.truth(_v12)) {
              const _v21: any = (temps[0] ?? 0);
              acc = _v21;
              const _v22: any = rt.global(302);
              acc = _v22;
              const _v23: any = await rt.send(_v22, "durables", []);
              acc = _v23;
              const _v24: any = await rt.send(_v23, "at", [_v21]);
              acc = _v24;
              const _v25: any = await rt.send(_v24, "quantity", []);
              acc = _v25;
              const _v26: any = 1;
              acc = _v26;
              const _v27: any = rt.op(">", ...[_v25, _v26]);
              acc = _v27;
              _v12 = _v27;
            }
            acc = _v12;
            _v11 = _v12;
            if (rt.truth(_v12)) {
              let _v28: any = acc;
              const _v29: any = rt.object(212, "pawnSelector");
              acc = _v29;
              const _v30: any = await rt.send(_v29, "cursor", []);
              acc = _v30;
              const _v31: any = rt.object(212, "pawnSelector");
              acc = _v31;
              const _v32: any = await rt.send(_v31, "indexOf", [_v30]);
              acc = _v32;
              const _v33: any = (temps[0] ?? 0);
              acc = _v33;
              const _v34: any = (temps[1] ?? 0);
              acc = _v34;
              const _v35: any = rt.op("-", ...[_v33, _v34]);
              acc = _v35;
              const _v36: any = rt.op("==", ...[_v32, _v35]);
              acc = _v36;
              _v28 = _v36;
              if (rt.truth(_v36)) {
                let _v37: any = acc;
                const _v38: any = (temps[0] ?? 0);
                acc = _v38;
                const _v39: any = rt.global(302);
                acc = _v39;
                const _v40: any = await rt.send(_v39, "durables", []);
                acc = _v40;
                const _v41: any = await rt.send(_v40, "at", [_v38]);
                acc = _v41;
                const _v42: any = await rt.send(_v41, "attributes", []);
                acc = _v42;
                const _v43: any = 56;
                acc = _v43;
                const _v44: any = rt.op("&", ...[_v42, _v43]);
                acc = _v44;
                _v37 = _v44;
                if (rt.truth(_v44)) {
                  const _v45: any = -1;
                  acc = _v45;
                  return _v45;
                  _v37 = acc;
                } else {
                  const _v46: any = (temps[0] ?? 0);
                  acc = _v46;
                  const _v47: any = rt.global(302);
                  acc = _v47;
                  const _v48: any = await rt.send(_v47, "durables", []);
                  acc = _v48;
                  const _v49: any = await rt.send(_v48, "at", [_v46]);
                  acc = _v49;
                  return _v49;
                  _v37 = acc;
                }
                acc = _v37;
                _v28 = _v37;
              }
              acc = _v28;
              _v11 = _v28;
            } else {
              const _v50: any = (temps[1] = rt.op("+", (temps[1] ?? 0), 1));
              acc = _v50;
              _v11 = _v50;
            }
            acc = _v11;
          }
          const _v51: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
          acc = _v51;
        }
        const _v52: any = 0;
        acc = _v52;
        return _v52;
        return acc;
      },
      // SCI pawnShop.sc: localproc_5
      "localproc_5": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0];
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = (temps[0] = _v3);
        acc = _v4;
        const _v5: any = (temps[1] = _v4);
        acc = _v5;
        _loop1: for (;;) {
          const _v6: any = (temps[1] ?? 0);
          acc = _v6;
          const _v7: any = 1;
          acc = _v7;
          const _v8: any = 2;
          acc = _v8;
          const _v9: any = await rt.call(212, "ScriptID", [_v7, _v8], this);
          acc = _v9;
          const _v10: any = await rt.send(_v9, "size", []);
          acc = _v10;
          const _v11: any = rt.op("<", ...[_v6, _v10]);
          acc = _v11;
          if (!rt.truth(_v11)) break _loop1;
          _continue2: {
            let _v12: any = acc;
            const _v13: any = (temps[1] ?? 0);
            acc = _v13;
            const _v14: any = 1;
            acc = _v14;
            const _v15: any = 2;
            acc = _v15;
            const _v16: any = await rt.call(212, "ScriptID", [_v14, _v15], this);
            acc = _v16;
            const _v17: any = await rt.send(_v16, "at", [_v13]);
            acc = _v17;
            const _v18: any = await rt.send(_v17, "durables", []);
            acc = _v18;
            const _v19: any = await rt.send(_v18, "size", []);
            acc = _v19;
            _v12 = _v19;
            if (rt.truth(_v19)) {
              const _v22: any = 0;
              acc = _v22;
              const _v23: any = (temps[2] = _v22);
              acc = _v23;
              _loop20: for (;;) {
                const _v24: any = (temps[2] ?? 0);
                acc = _v24;
                const _v25: any = (temps[1] ?? 0);
                acc = _v25;
                const _v26: any = 1;
                acc = _v26;
                const _v27: any = 2;
                acc = _v27;
                const _v28: any = await rt.call(212, "ScriptID", [_v26, _v27], this);
                acc = _v28;
                const _v29: any = await rt.send(_v28, "at", [_v25]);
                acc = _v29;
                const _v30: any = await rt.send(_v29, "durables", []);
                acc = _v30;
                const _v31: any = await rt.send(_v30, "size", []);
                acc = _v31;
                const _v32: any = rt.op("<", ...[_v24, _v31]);
                acc = _v32;
                if (!rt.truth(_v32)) break _loop20;
                _continue21: {
                  let _v33: any = acc;
                  const _v34: any = (temps[2] ?? 0);
                  acc = _v34;
                  const _v35: any = (temps[1] ?? 0);
                  acc = _v35;
                  const _v36: any = 1;
                  acc = _v36;
                  const _v37: any = 2;
                  acc = _v37;
                  const _v38: any = await rt.call(212, "ScriptID", [_v36, _v37], this);
                  acc = _v38;
                  const _v39: any = await rt.send(_v38, "at", [_v35]);
                  acc = _v39;
                  const _v40: any = await rt.send(_v39, "durables", []);
                  acc = _v40;
                  const _v41: any = await rt.send(_v40, "at", [_v34]);
                  acc = _v41;
                  const _v42: any = await rt.send(_v41, "attributes", []);
                  acc = _v42;
                  const _v43: any = 56;
                  acc = _v43;
                  const _v44: any = rt.op("&", ...[_v42, _v43]);
                  acc = _v44;
                  _v33 = _v44;
                  if (rt.truth(_v44)) {
                    const _v45: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
                    acc = _v45;
                    _v33 = _v45;
                  }
                  acc = _v33;
                }
                const _v46: any = (temps[2] = rt.op("+", (temps[2] ?? 0), 1));
                acc = _v46;
              }
              _v12 = acc;
            }
            acc = _v12;
          }
          const _v47: any = (temps[1] = rt.op("+", (temps[1] ?? 0), 1));
          acc = _v47;
        }
        const _v48: any = (temps[0] ?? 0);
        acc = _v48;
        return _v48;
        return acc;
      },
      // SCI pawnShop.sc: localproc_6
      "localproc_6": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = rt.object(212, "pawnButton");
        acc = _v1;
        const _v2: any = rt.object(212, "redeemButton");
        acc = _v2;
        const _v3: any = rt.object(212, "buyButton");
        acc = _v3;
        const _v4: any = rt.object(212, "pawnShop");
        acc = _v4;
        const _v5: any = await rt.send(_v4, "add", [_v1, _v2, _v3]);
        acc = _v5;
        const _v6: any = rt.object(212, "pawnButton");
        acc = _v6;
        const _v7: any = await rt.send(_v6, "init", []);
        acc = _v7;
        const _v8: any = await rt.send(_v6, "setSize", []);
        acc = _v8;
        const _v9: any = await rt.send(_v6, "draw", []);
        acc = _v9;
        const _v10: any = rt.object(212, "redeemButton");
        acc = _v10;
        const _v11: any = await rt.send(_v10, "init", []);
        acc = _v11;
        const _v12: any = await rt.send(_v10, "setSize", []);
        acc = _v12;
        const _v13: any = await rt.send(_v10, "draw", []);
        acc = _v13;
        const _v14: any = rt.object(212, "buyButton");
        acc = _v14;
        const _v15: any = await rt.send(_v14, "init", []);
        acc = _v15;
        const _v16: any = await rt.send(_v14, "setSize", []);
        acc = _v16;
        const _v17: any = await rt.send(_v14, "draw", []);
        acc = _v17;
        const _v18: any = rt.object(212, "pawnShop");
        acc = _v18;
        const _v19: any = rt.object(212, "pawnShop");
        acc = _v19;
        const _v20: any = await rt.send(_v19, "keyMouseList", []);
        acc = _v20;
        const _v21: any = rt.object(212, "pawnButton");
        acc = _v21;
        const _v22: any = await rt.call(0, "proc0_9", [_v18, _v20, _v21], this);
        acc = _v22;
        const _v23: any = rt.object(212, "pawnShop");
        acc = _v23;
        const _v24: any = await rt.send(_v23, "keyMouseList", []);
        acc = _v24;
        const _v25: any = rt.object(891, "KeyMouse");
        acc = _v25;
        const _v26: any = await rt.send(_v25, "setList", [_v24]);
        acc = _v26;
        return acc;
      },
      // SCI pawnShop.sc: localproc_7
      "localproc_7": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = rt.object(212, "pawnButton");
        acc = _v1;
        const _v2: any = await rt.send(_v1, "erase", []);
        acc = _v2;
        const _v3: any = rt.object(212, "redeemButton");
        acc = _v3;
        const _v4: any = await rt.send(_v3, "erase", []);
        acc = _v4;
        const _v5: any = rt.object(212, "buyButton");
        acc = _v5;
        const _v6: any = await rt.send(_v5, "erase", []);
        acc = _v6;
        const _v7: any = rt.object(212, "pawnShop");
        acc = _v7;
        const _v8: any = await rt.send(_v7, "keyMouseList", []);
        acc = _v8;
        const _v9: any = await rt.send(_v8, "release", []);
        acc = _v9;
        const _v10: any = rt.object(212, "pawnButton");
        acc = _v10;
        const _v11: any = rt.object(212, "redeemButton");
        acc = _v11;
        const _v12: any = rt.object(212, "buyButton");
        acc = _v12;
        const _v13: any = rt.object(212, "pawnShop");
        acc = _v13;
        const _v14: any = await rt.send(_v13, "delete", [_v10, _v11, _v12]);
        acc = _v14;
        return acc;
      },
      // SCI pawnShop.sc: localproc_8
      "localproc_8": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = rt.object(212, "pawnMessage");
        acc = _v1;
        const _v2: any = rt.object(212, "pawn");
        acc = _v2;
        const _v3: any = rt.object(212, "pawnSelector");
        acc = _v3;
        const _v4: any = rt.object(212, "donePawning");
        acc = _v4;
        const _v5: any = rt.object(212, "pawnShop");
        acc = _v5;
        const _v6: any = await rt.send(_v5, "add", [_v1, _v2, _v3, _v4]);
        acc = _v6;
        const _v7: any = await rt.call(212, "localproc_3", [], this);
        acc = _v7;
        const _v8: any = rt.global(23);
        acc = _v8;
        const _v9: any = rt.ref("local", 212, 4);
        acc = _v9;
        const _v10: any = 71;
        acc = _v10;
        const _v11: any = 40;
        acc = _v11;
        const _v12: any = rt.object(212, "pawnSelector");
        acc = _v12;
        const _v13: any = await rt.send(_v12, "font", [_v8]);
        acc = _v13;
        const _v14: any = await rt.send(_v12, "text", [_v9]);
        acc = _v14;
        const _v15: any = await rt.send(_v12, "setSize", []);
        acc = _v15;
        const _v16: any = await rt.send(_v12, "moveTo", [_v10, _v11]);
        acc = _v16;
        const _v17: any = rt.object(212, "pawnMessage");
        acc = _v17;
        const _v18: any = await rt.send(_v17, "init", []);
        acc = _v18;
        const _v19: any = await rt.send(_v17, "setSize", []);
        acc = _v19;
        const _v20: any = await rt.send(_v17, "draw", []);
        acc = _v20;
        const _v21: any = 1;
        acc = _v21;
        const _v22: any = rt.object(212, "pawnSelector");
        acc = _v22;
        const _v23: any = await rt.send(_v22, "init", []);
        acc = _v23;
        const _v24: any = await rt.send(_v22, "setSize", []);
        acc = _v24;
        const _v25: any = await rt.send(_v22, "draw", [_v21]);
        acc = _v25;
        const _v26: any = rt.object(212, "pawn");
        acc = _v26;
        const _v27: any = await rt.send(_v26, "init", []);
        acc = _v27;
        const _v28: any = await rt.send(_v26, "setSize", []);
        acc = _v28;
        const _v29: any = await rt.send(_v26, "draw", []);
        acc = _v29;
        const _v30: any = rt.object(212, "donePawning");
        acc = _v30;
        const _v31: any = await rt.send(_v30, "init", []);
        acc = _v31;
        const _v32: any = await rt.send(_v30, "setSize", []);
        acc = _v32;
        const _v33: any = await rt.send(_v30, "draw", []);
        acc = _v33;
        const _v34: any = rt.object(212, "pawnShop");
        acc = _v34;
        const _v35: any = rt.object(212, "pawnShop");
        acc = _v35;
        const _v36: any = await rt.send(_v35, "keyMouseList", []);
        acc = _v36;
        const _v37: any = rt.object(212, "pawn");
        acc = _v37;
        const _v38: any = await rt.call(0, "proc0_9", [_v34, _v36, _v37], this);
        acc = _v38;
        const _v39: any = rt.object(212, "pawnShop");
        acc = _v39;
        const _v40: any = await rt.send(_v39, "keyMouseList", []);
        acc = _v40;
        const _v41: any = rt.object(891, "KeyMouse");
        acc = _v41;
        const _v42: any = await rt.send(_v41, "setList", [_v40]);
        acc = _v42;
        return acc;
      },
      // SCI pawnShop.sc: localproc_9
      "localproc_9": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = rt.object(212, "pawnMessage");
        acc = _v1;
        const _v2: any = await rt.send(_v1, "erase", []);
        acc = _v2;
        const _v3: any = rt.object(212, "pawn");
        acc = _v3;
        const _v4: any = await rt.send(_v3, "erase", []);
        acc = _v4;
        const _v5: any = 0;
        acc = _v5;
        const _v6: any = rt.object(212, "pawnSelector");
        acc = _v6;
        const _v7: any = await rt.send(_v6, "select", [_v5]);
        acc = _v7;
        const _v8: any = await rt.send(_v6, "erase", []);
        acc = _v8;
        const _v9: any = rt.object(212, "donePawning");
        acc = _v9;
        const _v10: any = await rt.send(_v9, "erase", []);
        acc = _v10;
        const _v11: any = rt.object(212, "pawnShop");
        acc = _v11;
        const _v12: any = await rt.send(_v11, "keyMouseList", []);
        acc = _v12;
        const _v13: any = await rt.send(_v12, "release", []);
        acc = _v13;
        const _v14: any = rt.object(212, "pawnMessage");
        acc = _v14;
        const _v15: any = rt.object(212, "pawn");
        acc = _v15;
        const _v16: any = rt.object(212, "pawnSelector");
        acc = _v16;
        const _v17: any = rt.object(212, "donePawning");
        acc = _v17;
        const _v18: any = rt.object(212, "pawnShop");
        acc = _v18;
        const _v19: any = await rt.send(_v18, "delete", [_v14, _v15, _v16, _v17]);
        acc = _v19;
        return acc;
      },
      // SCI pawnShop.sc: localproc_10
      "localproc_10": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0, 0, 0];
        const _v1: any = rt.object(212, "redeemMessage");
        acc = _v1;
        const _v2: any = rt.object(212, "pawnShop");
        acc = _v2;
        const _v3: any = await rt.send(_v2, "add", [_v1]);
        acc = _v3;
        const _v4: any = rt.object(212, "exitButton");
        acc = _v4;
        const _v5: any = rt.object(212, "pawnShop");
        acc = _v5;
        const _v6: any = await rt.send(_v5, "indexOf", [_v4]);
        acc = _v6;
        const _v7: any = (temps[2] = _v6);
        acc = _v7;
        const _v8: any = (temps[2] ?? 0);
        acc = _v8;
        const _v9: any = 1;
        acc = _v9;
        const _v10: any = rt.op("-", ...[_v8, _v9]);
        acc = _v10;
        const _v11: any = rt.object(212, "pawnShop");
        acc = _v11;
        const _v12: any = await rt.send(_v11, "at", [_v10]);
        acc = _v12;
        const _v13: any = rt.object(212, "doneRedeeming");
        acc = _v13;
        const _v14: any = rt.object(212, "pawnShop");
        acc = _v14;
        const _v15: any = await rt.send(_v14, "addAfter", [_v12, _v13]);
        acc = _v15;
        const _v16: any = rt.object(212, "redeemMessage");
        acc = _v16;
        const _v17: any = await rt.send(_v16, "init", []);
        acc = _v17;
        const _v18: any = await rt.send(_v16, "setSize", []);
        acc = _v18;
        const _v19: any = await rt.send(_v16, "draw", []);
        acc = _v19;
        const _v20: any = rt.object(212, "doneRedeeming");
        acc = _v20;
        const _v21: any = await rt.send(_v20, "init", []);
        acc = _v21;
        const _v22: any = await rt.send(_v20, "setSize", []);
        acc = _v22;
        const _v23: any = await rt.send(_v20, "draw", []);
        acc = _v23;
        const _v24: any = 0;
        acc = _v24;
        const _v25: any = (temps[5] = _v24);
        acc = _v25;
        const _v28: any = 0;
        acc = _v28;
        const _v29: any = (temps[3] = _v28);
        acc = _v29;
        const _v30: any = (temps[0] = _v29);
        acc = _v30;
        _loop26: for (;;) {
          const _v31: any = (temps[0] ?? 0);
          acc = _v31;
          const _v32: any = rt.global(302);
          acc = _v32;
          const _v33: any = await rt.send(_v32, "durables", []);
          acc = _v33;
          const _v34: any = await rt.send(_v33, "size", []);
          acc = _v34;
          const _v35: any = rt.op("<", ...[_v31, _v34]);
          acc = _v35;
          if (!rt.truth(_v35)) break _loop26;
          _continue27: {
            let _v36: any = acc;
            const _v37: any = (temps[0] ?? 0);
            acc = _v37;
            const _v38: any = rt.global(302);
            acc = _v38;
            const _v39: any = await rt.send(_v38, "durables", []);
            acc = _v39;
            const _v40: any = await rt.send(_v39, "at", [_v37]);
            acc = _v40;
            const _v41: any = await rt.send(_v40, "attributes", []);
            acc = _v41;
            const _v42: any = 24;
            acc = _v42;
            const _v43: any = rt.op("&", ...[_v41, _v42]);
            acc = _v43;
            _v36 = _v43;
            if (rt.truth(_v43)) {
              const _v44: any = (temps[3] ?? 0);
              acc = _v44;
              const _v45: any = 10;
              acc = _v45;
              const _v46: any = rt.op("*", ...[_v44, _v45]);
              acc = _v46;
              const _v47: any = rt.ref("local", 212, (364 + (Number(_v46) & 65535)));
              acc = _v47;
              const _v48: any = 212;
              acc = _v48;
              const _v49: any = 19;
              acc = _v49;
              const _v50: any = 700;
              acc = _v50;
              const _v51: any = (temps[0] ?? 0);
              acc = _v51;
              const _v52: any = rt.global(302);
              acc = _v52;
              const _v53: any = await rt.send(_v52, "durables", []);
              acc = _v53;
              const _v54: any = await rt.send(_v53, "at", [_v51]);
              acc = _v54;
              const _v55: any = await rt.send(_v54, "indexNum", []);
              acc = _v55;
              const _v56: any = await rt.call(212, "Format", [_v47, _v48, _v49, _v50, _v55], this);
              acc = _v56;
              _v36 = _v56;
              const _v57: any = (temps[0] ?? 0);
              acc = _v57;
              const _v58: any = rt.global(302);
              acc = _v58;
              const _v59: any = await rt.send(_v58, "durables", []);
              acc = _v59;
              const _v60: any = await rt.send(_v59, "at", [_v57]);
              acc = _v60;
              const _v61: any = await rt.send(_v60, "redemptionPrice", []);
              acc = _v61;
              const _v62: any = (temps[3] ?? 0);
              acc = _v62;
              const _v63: any = 10;
              acc = _v63;
              const _v64: any = rt.op("*", ...[_v62, _v63]);
              acc = _v64;
              const _v65: any = rt.ref("local", 212, (364 + (Number(_v64) & 65535)));
              acc = _v65;
              const _v66: any = 78;
              acc = _v66;
              const _v67: any = 40;
              acc = _v67;
              const _v68: any = 10;
              acc = _v68;
              const _v69: any = (temps[3] ?? 0);
              acc = _v69;
              const _v70: any = rt.op("*", ...[_v68, _v69]);
              acc = _v70;
              const _v71: any = rt.op("+", ...[_v67, _v70]);
              acc = _v71;
              const _v72: any = (temps[0] ?? 0);
              acc = _v72;
              const _v73: any = rt.global(302);
              acc = _v73;
              const _v74: any = await rt.send(_v73, "durables", []);
              acc = _v74;
              const _v75: any = await rt.send(_v74, "at", [_v72]);
              acc = _v75;
              const _v76: any = await rt.send(_v75, "indexNum", []);
              acc = _v76;
              const _v77: any = 1;
              acc = _v77;
              const _v78: any = (temps[0] ?? 0);
              acc = _v78;
              const _v79: any = rt.global(302);
              acc = _v79;
              const _v80: any = await rt.send(_v79, "durables", []);
              acc = _v80;
              const _v81: any = await rt.send(_v80, "at", [_v78]);
              acc = _v81;
              const _v82: any = 199;
              acc = _v82;
              const _v83: any = (temps[0] ?? 0);
              acc = _v83;
              const _v84: any = rt.global(302);
              acc = _v84;
              const _v85: any = await rt.send(_v84, "durables", []);
              acc = _v85;
              const _v86: any = await rt.send(_v85, "at", [_v83]);
              acc = _v86;
              const _v87: any = await rt.send(_v86, "indexNum", []);
              acc = _v87;
              const _v88: any = 21;
              acc = _v88;
              const _v89: any = rt.op("-", ...[_v87, _v88]);
              acc = _v89;
              const _v90: any = rt.object(212, "aRedeemableItem");
              acc = _v90;
              const _v91: any = await rt.send(_v90, "new", []);
              acc = _v91;
              const _v92: any = await rt.send(_v91, "price", [_v61]);
              acc = _v92;
              const _v93: any = await rt.send(_v91, "text", [_v65]);
              acc = _v93;
              const _v94: any = await rt.send(_v91, "nsLeft", [_v66]);
              acc = _v94;
              const _v95: any = await rt.send(_v91, "nsTop", [_v71]);
              acc = _v95;
              const _v96: any = await rt.send(_v91, "indexNum", [_v76]);
              acc = _v96;
              const _v97: any = await rt.send(_v91, "fixedPrice", [_v77]);
              acc = _v97;
              const _v98: any = await rt.send(_v91, "theDurable", [_v81]);
              acc = _v98;
              const _v99: any = await rt.send(_v91, "key", [_v82]);
              acc = _v99;
              const _v100: any = await rt.send(_v91, "celNum", [_v89]);
              acc = _v100;
              const _v101: any = await rt.send(_v91, "yourself", []);
              acc = _v101;
              const _v102: any = (temps[4] = _v101);
              acc = _v102;
              const _v103: any = rt.object(212, "pawnShop");
              acc = _v103;
              const _v104: any = await rt.send(_v103, "add", [_v102]);
              acc = _v104;
              _v36 = _v104;
              let _v105: any = acc;
              const _v106: any = (temps[5] ?? 0);
              acc = _v106;
              const _v107: any = rt.op("not", ...[_v106]);
              acc = _v107;
              _v105 = _v107;
              if (rt.truth(_v107)) {
                const _v108: any = (temps[4] ?? 0);
                acc = _v108;
                const _v109: any = (temps[5] = _v108);
                acc = _v109;
                _v105 = _v109;
              }
              acc = _v105;
              _v36 = _v105;
              const _v110: any = (temps[4] ?? 0);
              acc = _v110;
              const _v111: any = await rt.send(_v110, "init", []);
              acc = _v111;
              const _v112: any = await rt.send(_v110, "setSize", []);
              acc = _v112;
              const _v113: any = await rt.send(_v110, "draw", []);
              acc = _v113;
              _v36 = _v113;
              const _v114: any = (temps[3] = rt.op("+", (temps[3] ?? 0), 1));
              acc = _v114;
              _v36 = _v114;
            }
            acc = _v36;
          }
          const _v115: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
          acc = _v115;
        }
        const _v116: any = rt.object(212, "pawnShop");
        acc = _v116;
        const _v117: any = rt.object(212, "pawnShop");
        acc = _v117;
        const _v118: any = await rt.send(_v117, "keyMouseList", []);
        acc = _v118;
        const _v119: any = (temps[5] ?? 0);
        acc = _v119;
        const _v120: any = await rt.call(0, "proc0_9", [_v116, _v118, _v119], this);
        acc = _v120;
        const _v121: any = rt.object(212, "pawnShop");
        acc = _v121;
        const _v122: any = await rt.send(_v121, "keyMouseList", []);
        acc = _v122;
        const _v123: any = rt.object(891, "KeyMouse");
        acc = _v123;
        const _v124: any = await rt.send(_v123, "setList", [_v122]);
        acc = _v124;
        const _v125: any = 0;
        acc = _v125;
        const _v126: any = rt.setLocal(212, 424, _v125);
        acc = _v126;
        return acc;
      },
      // SCI pawnShop.sc: localproc_11
      "localproc_11": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0];
        const _v1: any = rt.object(212, "redeemMessage");
        acc = _v1;
        const _v2: any = await rt.send(_v1, "erase", []);
        acc = _v2;
        const _v3: any = rt.object(212, "doneRedeeming");
        acc = _v3;
        const _v4: any = await rt.send(_v3, "erase", []);
        acc = _v4;
        const _v5: any = rt.object(212, "pawnShop");
        acc = _v5;
        const _v6: any = await rt.send(_v5, "keyMouseList", []);
        acc = _v6;
        const _v7: any = await rt.send(_v6, "release", []);
        acc = _v7;
        const _v8: any = rt.object(212, "redeemMessage");
        acc = _v8;
        const _v9: any = rt.object(212, "doneRedeeming");
        acc = _v9;
        const _v10: any = rt.object(212, "pawnShop");
        acc = _v10;
        const _v11: any = await rt.send(_v10, "delete", [_v8, _v9]);
        acc = _v11;
        const _v14: any = rt.object(212, "pawnShop");
        acc = _v14;
        const _v15: any = await rt.send(_v14, "size", []);
        acc = _v15;
        const _v16: any = 1;
        acc = _v16;
        const _v17: any = rt.op("-", ...[_v15, _v16]);
        acc = _v17;
        const _v18: any = (temps[0] = _v17);
        acc = _v18;
        _loop12: for (;;) {
          const _v19: any = (temps[0] ?? 0);
          acc = _v19;
          const _v20: any = 0;
          acc = _v20;
          const _v21: any = rt.op(">=", ...[_v19, _v20]);
          acc = _v21;
          if (!rt.truth(_v21)) break _loop12;
          _continue13: {
            const _v22: any = (temps[0] ?? 0);
            acc = _v22;
            const _v23: any = rt.object(212, "pawnShop");
            acc = _v23;
            const _v24: any = await rt.send(_v23, "at", [_v22]);
            acc = _v24;
            const _v25: any = (temps[1] = _v24);
            acc = _v25;
            let _v26: any = acc;
            const _v27: any = rt.object(104, "CostDItem");
            acc = _v27;
            const _v28: any = (temps[1] ?? 0);
            acc = _v28;
            const _v29: any = await rt.send(_v28, "isMemberOf", [_v27]);
            acc = _v29;
            _v26 = _v29;
            if (rt.truth(_v29)) {
              const _v30: any = (temps[1] ?? 0);
              acc = _v30;
              const _v31: any = await rt.send(_v30, "erase", []);
              acc = _v31;
              _v26 = _v31;
              const _v32: any = (temps[1] ?? 0);
              acc = _v32;
              const _v33: any = rt.object(212, "pawnShop");
              acc = _v33;
              const _v34: any = await rt.send(_v33, "delete", [_v32]);
              acc = _v34;
              _v26 = _v34;
              const _v35: any = (temps[1] ?? 0);
              acc = _v35;
              const _v36: any = await rt.send(_v35, "dispose", []);
              acc = _v36;
              _v26 = _v36;
            }
            acc = _v26;
          }
          const _v37: any = (temps[0] = rt.op("-", (temps[0] ?? 0), 1));
          acc = _v37;
        }
        return acc;
      },
      // SCI pawnShop.sc: localproc_12
      "localproc_12": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0, 0, 0, 0];
        const _v1: any = rt.object(212, "buyMessage");
        acc = _v1;
        const _v2: any = rt.object(212, "pawnShop");
        acc = _v2;
        const _v3: any = await rt.send(_v2, "add", [_v1]);
        acc = _v3;
        const _v4: any = rt.object(212, "exitButton");
        acc = _v4;
        const _v5: any = rt.object(212, "pawnShop");
        acc = _v5;
        const _v6: any = await rt.send(_v5, "indexOf", [_v4]);
        acc = _v6;
        const _v7: any = (temps[2] = _v6);
        acc = _v7;
        const _v8: any = (temps[2] ?? 0);
        acc = _v8;
        const _v9: any = 1;
        acc = _v9;
        const _v10: any = rt.op("-", ...[_v8, _v9]);
        acc = _v10;
        const _v11: any = rt.object(212, "pawnShop");
        acc = _v11;
        const _v12: any = await rt.send(_v11, "at", [_v10]);
        acc = _v12;
        const _v13: any = rt.object(212, "doneBuying");
        acc = _v13;
        const _v14: any = rt.object(212, "pawnShop");
        acc = _v14;
        const _v15: any = await rt.send(_v14, "addAfter", [_v12, _v13]);
        acc = _v15;
        const _v16: any = rt.object(212, "buyMessage");
        acc = _v16;
        const _v17: any = await rt.send(_v16, "init", []);
        acc = _v17;
        const _v18: any = await rt.send(_v16, "setSize", []);
        acc = _v18;
        const _v19: any = await rt.send(_v16, "draw", []);
        acc = _v19;
        const _v20: any = rt.object(212, "doneBuying");
        acc = _v20;
        const _v21: any = await rt.send(_v20, "init", []);
        acc = _v21;
        const _v22: any = await rt.send(_v20, "setSize", []);
        acc = _v22;
        const _v23: any = await rt.send(_v20, "draw", []);
        acc = _v23;
        const _v24: any = 0;
        acc = _v24;
        const _v25: any = (temps[6] = _v24);
        acc = _v25;
        const _v28: any = 0;
        acc = _v28;
        const _v29: any = (temps[4] = _v28);
        acc = _v29;
        const _v30: any = (temps[3] = _v29);
        acc = _v30;
        _loop26: for (;;) {
          const _v31: any = (temps[3] ?? 0);
          acc = _v31;
          const _v32: any = 1;
          acc = _v32;
          const _v33: any = 2;
          acc = _v33;
          const _v34: any = await rt.call(212, "ScriptID", [_v32, _v33], this);
          acc = _v34;
          const _v35: any = await rt.send(_v34, "size", []);
          acc = _v35;
          const _v36: any = rt.op("<", ...[_v31, _v35]);
          acc = _v36;
          if (!rt.truth(_v36)) break _loop26;
          _continue27: {
            const _v39: any = 0;
            acc = _v39;
            const _v40: any = (temps[0] = _v39);
            acc = _v40;
            _loop37: for (;;) {
              const _v41: any = (temps[0] ?? 0);
              acc = _v41;
              const _v42: any = (temps[3] ?? 0);
              acc = _v42;
              const _v43: any = 1;
              acc = _v43;
              const _v44: any = 2;
              acc = _v44;
              const _v45: any = await rt.call(212, "ScriptID", [_v43, _v44], this);
              acc = _v45;
              const _v46: any = await rt.send(_v45, "at", [_v42]);
              acc = _v46;
              const _v47: any = await rt.send(_v46, "durables", []);
              acc = _v47;
              const _v48: any = await rt.send(_v47, "size", []);
              acc = _v48;
              const _v49: any = rt.op("<", ...[_v41, _v48]);
              acc = _v49;
              if (!rt.truth(_v49)) break _loop37;
              _continue38: {
                let _v50: any = acc;
                const _v51: any = (temps[0] ?? 0);
                acc = _v51;
                const _v52: any = (temps[3] ?? 0);
                acc = _v52;
                const _v53: any = 1;
                acc = _v53;
                const _v54: any = 2;
                acc = _v54;
                const _v55: any = await rt.call(212, "ScriptID", [_v53, _v54], this);
                acc = _v55;
                const _v56: any = await rt.send(_v55, "at", [_v52]);
                acc = _v56;
                const _v57: any = await rt.send(_v56, "durables", []);
                acc = _v57;
                const _v58: any = await rt.send(_v57, "at", [_v51]);
                acc = _v58;
                const _v59: any = await rt.send(_v58, "attributes", []);
                acc = _v59;
                const _v60: any = 32;
                acc = _v60;
                const _v61: any = rt.op("&", ...[_v59, _v60]);
                acc = _v61;
                _v50 = _v61;
                if (rt.truth(_v61)) {
                  const _v62: any = (temps[4] ?? 0);
                  acc = _v62;
                  const _v63: any = 10;
                  acc = _v63;
                  const _v64: any = rt.op("*", ...[_v62, _v63]);
                  acc = _v64;
                  const _v65: any = rt.ref("local", 212, (304 + (Number(_v64) & 65535)));
                  acc = _v65;
                  const _v66: any = 212;
                  acc = _v66;
                  const _v67: any = 19;
                  acc = _v67;
                  const _v68: any = 700;
                  acc = _v68;
                  const _v69: any = (temps[0] ?? 0);
                  acc = _v69;
                  const _v70: any = (temps[3] ?? 0);
                  acc = _v70;
                  const _v71: any = 1;
                  acc = _v71;
                  const _v72: any = 2;
                  acc = _v72;
                  const _v73: any = await rt.call(212, "ScriptID", [_v71, _v72], this);
                  acc = _v73;
                  const _v74: any = await rt.send(_v73, "at", [_v70]);
                  acc = _v74;
                  const _v75: any = await rt.send(_v74, "durables", []);
                  acc = _v75;
                  const _v76: any = await rt.send(_v75, "at", [_v69]);
                  acc = _v76;
                  const _v77: any = await rt.send(_v76, "indexNum", []);
                  acc = _v77;
                  const _v78: any = await rt.call(212, "Format", [_v65, _v66, _v67, _v68, _v77], this);
                  acc = _v78;
                  _v50 = _v78;
                  const _v79: any = "redeemable";
                  acc = _v79;
                  const _v80: any = (temps[0] ?? 0);
                  acc = _v80;
                  const _v81: any = (temps[3] ?? 0);
                  acc = _v81;
                  const _v82: any = 1;
                  acc = _v82;
                  const _v83: any = 2;
                  acc = _v83;
                  const _v84: any = await rt.call(212, "ScriptID", [_v82, _v83], this);
                  acc = _v84;
                  const _v85: any = await rt.send(_v84, "at", [_v81]);
                  acc = _v85;
                  const _v86: any = await rt.send(_v85, "durables", []);
                  acc = _v86;
                  const _v87: any = await rt.send(_v86, "at", [_v80]);
                  acc = _v87;
                  const _v88: any = await rt.send(_v87, "redemptionPrice", []);
                  acc = _v88;
                  const _v89: any = (temps[4] ?? 0);
                  acc = _v89;
                  const _v90: any = 10;
                  acc = _v90;
                  const _v91: any = rt.op("*", ...[_v89, _v90]);
                  acc = _v91;
                  const _v92: any = rt.ref("local", 212, (304 + (Number(_v91) & 65535)));
                  acc = _v92;
                  const _v93: any = 78;
                  acc = _v93;
                  const _v94: any = 40;
                  acc = _v94;
                  const _v95: any = 10;
                  acc = _v95;
                  const _v96: any = (temps[4] ?? 0);
                  acc = _v96;
                  const _v97: any = rt.op("*", ...[_v95, _v96]);
                  acc = _v97;
                  const _v98: any = rt.op("+", ...[_v94, _v97]);
                  acc = _v98;
                  const _v99: any = (temps[0] ?? 0);
                  acc = _v99;
                  const _v100: any = (temps[3] ?? 0);
                  acc = _v100;
                  const _v101: any = 1;
                  acc = _v101;
                  const _v102: any = 2;
                  acc = _v102;
                  const _v103: any = await rt.call(212, "ScriptID", [_v101, _v102], this);
                  acc = _v103;
                  const _v104: any = await rt.send(_v103, "at", [_v100]);
                  acc = _v104;
                  const _v105: any = await rt.send(_v104, "durables", []);
                  acc = _v105;
                  const _v106: any = await rt.send(_v105, "at", [_v99]);
                  acc = _v106;
                  const _v107: any = await rt.send(_v106, "indexNum", []);
                  acc = _v107;
                  const _v108: any = 1;
                  acc = _v108;
                  const _v109: any = (temps[0] ?? 0);
                  acc = _v109;
                  const _v110: any = (temps[3] ?? 0);
                  acc = _v110;
                  const _v111: any = 1;
                  acc = _v111;
                  const _v112: any = 2;
                  acc = _v112;
                  const _v113: any = await rt.call(212, "ScriptID", [_v111, _v112], this);
                  acc = _v113;
                  const _v114: any = await rt.send(_v113, "at", [_v110]);
                  acc = _v114;
                  const _v115: any = await rt.send(_v114, "durables", []);
                  acc = _v115;
                  const _v116: any = await rt.send(_v115, "at", [_v109]);
                  acc = _v116;
                  const _v117: any = (temps[0] ?? 0);
                  acc = _v117;
                  const _v118: any = (temps[3] ?? 0);
                  acc = _v118;
                  const _v119: any = 1;
                  acc = _v119;
                  const _v120: any = 2;
                  acc = _v120;
                  const _v121: any = await rt.call(212, "ScriptID", [_v119, _v120], this);
                  acc = _v121;
                  const _v122: any = await rt.send(_v121, "at", [_v118]);
                  acc = _v122;
                  const _v123: any = await rt.send(_v122, "durables", []);
                  acc = _v123;
                  const _v124: any = await rt.send(_v123, "at", [_v117]);
                  acc = _v124;
                  const _v125: any = await rt.send(_v124, "indexNum", []);
                  acc = _v125;
                  const _v126: any = 21;
                  acc = _v126;
                  const _v127: any = rt.op("-", ...[_v125, _v126]);
                  acc = _v127;
                  const _v128: any = rt.object(212, "aRedeemableItem");
                  acc = _v128;
                  const _v129: any = await rt.send(_v128, "new", []);
                  acc = _v129;
                  const _v130: any = await rt.send(_v129, "name", [_v79]);
                  acc = _v130;
                  const _v131: any = await rt.send(_v129, "price", [_v88]);
                  acc = _v131;
                  const _v132: any = await rt.send(_v129, "text", [_v92]);
                  acc = _v132;
                  const _v133: any = await rt.send(_v129, "nsLeft", [_v93]);
                  acc = _v133;
                  const _v134: any = await rt.send(_v129, "nsTop", [_v98]);
                  acc = _v134;
                  const _v135: any = await rt.send(_v129, "indexNum", [_v107]);
                  acc = _v135;
                  const _v136: any = await rt.send(_v129, "fixedPrice", [_v108]);
                  acc = _v136;
                  const _v137: any = await rt.send(_v129, "theDurable", [_v116]);
                  acc = _v137;
                  const _v138: any = await rt.send(_v129, "celNum", [_v127]);
                  acc = _v138;
                  const _v139: any = await rt.send(_v129, "yourself", []);
                  acc = _v139;
                  const _v140: any = (temps[5] = _v139);
                  acc = _v140;
                  const _v141: any = rt.object(212, "pawnShop");
                  acc = _v141;
                  const _v142: any = await rt.send(_v141, "add", [_v140]);
                  acc = _v142;
                  _v50 = _v142;
                  let _v143: any = acc;
                  const _v144: any = (temps[6] ?? 0);
                  acc = _v144;
                  const _v145: any = rt.op("not", ...[_v144]);
                  acc = _v145;
                  _v143 = _v145;
                  if (rt.truth(_v145)) {
                    const _v146: any = (temps[5] ?? 0);
                    acc = _v146;
                    const _v147: any = (temps[6] = _v146);
                    acc = _v147;
                    _v143 = _v147;
                  }
                  acc = _v143;
                  _v50 = _v143;
                  const _v148: any = (temps[5] ?? 0);
                  acc = _v148;
                  const _v149: any = await rt.send(_v148, "init", []);
                  acc = _v149;
                  const _v150: any = await rt.send(_v148, "setSize", []);
                  acc = _v150;
                  const _v151: any = await rt.send(_v148, "draw", []);
                  acc = _v151;
                  _v50 = _v151;
                  const _v152: any = (temps[5] ?? 0);
                  acc = _v152;
                  const _v153: any = await rt.send(_v152, "theDurable", []);
                  acc = _v153;
                  const _v154: any = await rt.send(_v153, "attributes", []);
                  acc = _v154;
                  const _v155: any = 256;
                  acc = _v155;
                  const _v156: any = rt.op("|", ...[_v154, _v155]);
                  acc = _v156;
                  const _v157: any = (temps[5] ?? 0);
                  acc = _v157;
                  const _v158: any = await rt.send(_v157, "theDurable", []);
                  acc = _v158;
                  const _v159: any = await rt.send(_v158, "attributes", [_v156]);
                  acc = _v159;
                  _v50 = _v159;
                  const _v160: any = (temps[4] = rt.op("+", (temps[4] ?? 0), 1));
                  acc = _v160;
                  _v50 = _v160;
                }
                acc = _v50;
              }
              const _v161: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
              acc = _v161;
            }
          }
          const _v162: any = (temps[3] = rt.op("+", (temps[3] ?? 0), 1));
          acc = _v162;
        }
        const _v163: any = rt.object(212, "pawnShop");
        acc = _v163;
        const _v164: any = rt.object(212, "pawnShop");
        acc = _v164;
        const _v165: any = await rt.send(_v164, "keyMouseList", []);
        acc = _v165;
        const _v166: any = (temps[6] ?? 0);
        acc = _v166;
        const _v167: any = await rt.call(0, "proc0_9", [_v163, _v165, _v166], this);
        acc = _v167;
        const _v168: any = rt.object(212, "pawnShop");
        acc = _v168;
        const _v169: any = await rt.send(_v168, "keyMouseList", []);
        acc = _v169;
        const _v170: any = rt.object(891, "KeyMouse");
        acc = _v170;
        const _v171: any = await rt.send(_v170, "setList", [_v169]);
        acc = _v171;
        return acc;
      },
      // SCI pawnShop.sc: localproc_13
      "localproc_13": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0];
        const _v1: any = rt.object(212, "buyMessage");
        acc = _v1;
        const _v2: any = await rt.send(_v1, "erase", []);
        acc = _v2;
        const _v3: any = rt.object(212, "doneBuying");
        acc = _v3;
        const _v4: any = await rt.send(_v3, "erase", []);
        acc = _v4;
        const _v5: any = rt.object(212, "pawnShop");
        acc = _v5;
        const _v6: any = await rt.send(_v5, "keyMouseList", []);
        acc = _v6;
        const _v7: any = await rt.send(_v6, "release", []);
        acc = _v7;
        const _v8: any = rt.object(212, "buyMessage");
        acc = _v8;
        const _v9: any = rt.object(212, "doneBuying");
        acc = _v9;
        const _v10: any = rt.object(212, "pawnShop");
        acc = _v10;
        const _v11: any = await rt.send(_v10, "delete", [_v8, _v9]);
        acc = _v11;
        const _v14: any = rt.object(212, "pawnShop");
        acc = _v14;
        const _v15: any = await rt.send(_v14, "size", []);
        acc = _v15;
        const _v16: any = 1;
        acc = _v16;
        const _v17: any = rt.op("-", ...[_v15, _v16]);
        acc = _v17;
        const _v18: any = (temps[0] = _v17);
        acc = _v18;
        _loop12: for (;;) {
          const _v19: any = (temps[0] ?? 0);
          acc = _v19;
          const _v20: any = 0;
          acc = _v20;
          const _v21: any = rt.op(">=", ...[_v19, _v20]);
          acc = _v21;
          if (!rt.truth(_v21)) break _loop12;
          _continue13: {
            const _v22: any = (temps[0] ?? 0);
            acc = _v22;
            const _v23: any = rt.object(212, "pawnShop");
            acc = _v23;
            const _v24: any = await rt.send(_v23, "at", [_v22]);
            acc = _v24;
            const _v25: any = (temps[1] = _v24);
            acc = _v25;
            let _v26: any = acc;
            const _v27: any = rt.object(104, "CostDItem");
            acc = _v27;
            const _v28: any = (temps[1] ?? 0);
            acc = _v28;
            const _v29: any = await rt.send(_v28, "isMemberOf", [_v27]);
            acc = _v29;
            _v26 = _v29;
            if (rt.truth(_v29)) {
              const _v30: any = (temps[1] ?? 0);
              acc = _v30;
              const _v31: any = await rt.send(_v30, "erase", []);
              acc = _v31;
              _v26 = _v31;
              const _v32: any = (temps[1] ?? 0);
              acc = _v32;
              const _v33: any = rt.object(212, "pawnShop");
              acc = _v33;
              const _v34: any = await rt.send(_v33, "delete", [_v32]);
              acc = _v34;
              _v26 = _v34;
              const _v35: any = (temps[1] ?? 0);
              acc = _v35;
              const _v36: any = await rt.send(_v35, "dispose", []);
              acc = _v36;
              _v26 = _v36;
            }
            acc = _v26;
          }
          const _v37: any = (temps[0] = rt.op("-", (temps[0] ?? 0), 1));
          acc = _v37;
        }
        return acc;
      },
      // SCI pawnShop.sc: localproc_14
      "localproc_14": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0];
        return acc;
      },
    },
    exports: {"0": "pawnShop"},
  });
}
