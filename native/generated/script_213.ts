// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/broker.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 9255495e35b8e9a72622a22ab5929825e512a5efa6e2ab7421e7889a41d23d7b
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(213, {
    name: "broker",
    uses: [0, 104, 109, 110, 115, 255, 891, 999],
    locals: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    objects: [
      {
        name: "notEnoughCash",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: false,
        properties: {},
        methods: {
          // SCI broker.sc: notEnoughCash.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 213;
            acc = _v1;
            const _v2: any = 0;
            acc = _v2;
            const _v3: any = await rt.call(255, "Print", [_v1, _v2], this);
            acc = _v3;
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
        name: "broker",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI broker.sc: broker.init
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
              const _v8: any = 2;
              acc = _v8;
              const _v9: any = await rt.call(0, "proc0_17", [_v8], this);
              acc = _v9;
              _v1 = _v9;
              const _v10: any = rt.object(213, "dialogKeyMouse");
              acc = _v10;
              const _v11: any = rt.set(this, "keyMouseList", _v10);
              acc = _v11;
              _v1 = _v11;
              const _v12: any = rt.global(502);
              acc = _v12;
              const _v13: any = rt.set(this, "prevDialog", _v12);
              acc = _v13;
              _v1 = _v13;
              const _v14: any = rt.global(424);
              acc = _v14;
              const _v15: any = (temps[2] = _v14);
              acc = _v15;
              _v1 = _v15;
              const _v16: any = rt.object(213, "notEnoughCash");
              acc = _v16;
              const _v17: any = rt.setGlobal(424, _v16);
              acc = _v17;
              _v1 = _v17;
              const _v18: any = this;
              acc = _v18;
              const _v19: any = rt.setGlobal(502, _v18);
              acc = _v19;
              _v1 = _v19;
              const _v20: any = (args[0] ?? 0);
              acc = _v20;
              const _v21: any = rt.set(this, "client", _v20);
              acc = _v21;
              _v1 = _v21;
              let _v22: any = acc;
              const _v23: any = rt.global(302);
              acc = _v23;
              const _v24: any = await rt.send(_v23, "playing", []);
              acc = _v24;
              const _v25: any = 29;
              acc = _v25;
              const _v26: any = rt.op("==", ...[_v24, _v25]);
              acc = _v26;
              _v22 = _v26;
              if (rt.truth(_v26)) {
                const _v27: any = 0;
                acc = _v27;
                const _v28: any = rt.setLocal(213, 31, _v27);
                acc = _v28;
                _v22 = _v28;
                const _v29: any = rt.object(213, "computerScript");
                acc = _v29;
                const _v30: any = 0;
                acc = _v30;
                const _v31: any = this;
                acc = _v31;
                const _v32: any = await rt.send(_v31, "setScript", [_v29, _v30]);
                acc = _v32;
                _v22 = _v32;
                const _v33: any = rt.object(213, "computerScript");
                acc = _v33;
                const _v34: any = await rt.send(_v33, "cue", []);
                acc = _v34;
                _v22 = _v34;
              }
              acc = _v22;
              _v1 = _v22;
              const _v35: any = rt.global(59);
              acc = _v35;
              const _v36: any = rt.object(213, "background");
              acc = _v36;
              const _v37: any = rt.object(213, "tBills");
              acc = _v37;
              const _v38: any = rt.object(213, "gold");
              acc = _v38;
              const _v39: any = rt.object(213, "silver");
              acc = _v39;
              const _v40: any = rt.object(213, "porkBellies");
              acc = _v40;
              const _v41: any = rt.object(213, "blueChipStocks");
              acc = _v41;
              const _v42: any = rt.object(213, "pennyStocks");
              acc = _v42;
              const _v43: any = rt.object(213, "tBillsHoldings");
              acc = _v43;
              const _v44: any = rt.object(213, "goldHoldings");
              acc = _v44;
              const _v45: any = rt.object(213, "silverHoldings");
              acc = _v45;
              const _v46: any = rt.object(213, "porkBelliesHoldings");
              acc = _v46;
              const _v47: any = rt.object(213, "blueChipStocksHoldings");
              acc = _v47;
              const _v48: any = rt.object(213, "pennyStocksHoldings");
              acc = _v48;
              const _v49: any = rt.object(213, "buyButton");
              acc = _v49;
              const _v50: any = rt.object(213, "sellButton");
              acc = _v50;
              const _v51: any = rt.object(213, "exitButton");
              acc = _v51;
              const _v52: any = 102;
              acc = _v52;
              const _v53: any = 153;
              acc = _v53;
              const _v54: any = 69;
              acc = _v54;
              const _v55: any = 44;
              acc = _v55;
              const _v56: any = 0;
              acc = _v56;
              const _v57: any = 15;
              acc = _v57;
              const _v58: any = this;
              acc = _v58;
              const _v59: any = await rt.send(_v58, "window", [_v35]);
              acc = _v59;
              const _v60: any = await rt.send(_v58, "add", [_v36, _v37, _v38, _v39, _v40, _v41, _v42, _v43, _v44, _v45, _v46, _v47, _v48, _v49, _v50, _v51]);
              acc = _v60;
              const _v61: any = await rt.send(_v58, "eachElementDo", [_v52]);
              acc = _v61;
              const _v62: any = await rt.send(_v58, "eachElementDo", [_v53]);
              acc = _v62;
              const _v63: any = await rt.send(_v58, "moveTo", [_v54, _v55]);
              acc = _v63;
              const _v64: any = await rt.send(_v58, "open", [_v56, _v57]);
              acc = _v64;
              _v1 = _v64;
              const _v65: any = rt.object(891, "KeyMouse");
              acc = _v65;
              const _v66: any = await rt.send(_v65, "curItem", []);
              acc = _v66;
              const _v67: any = (temps[1] = _v66);
              acc = _v67;
              _v1 = _v67;
              const _v68: any = 48;
              acc = _v68;
              const _v69: any = rt.global(477);
              acc = _v69;
              const _v70: any = await rt.send(_v69, "playBed", [_v68]);
              acc = _v70;
              _v1 = _v70;
              const _v71: any = rt.get(this, "keyMouseList");
              acc = _v71;
              const _v72: any = rt.object(891, "KeyMouse");
              acc = _v72;
              const _v73: any = await rt.send(_v72, "setList", [_v71]);
              acc = _v73;
              _v1 = _v73;
              const _v74: any = this;
              acc = _v74;
              const _v75: any = rt.get(this, "keyMouseList");
              acc = _v75;
              const _v76: any = rt.object(213, "tBills");
              acc = _v76;
              const _v77: any = await rt.call(0, "proc0_9", [_v74, _v75, _v76], this);
              acc = _v77;
              _v1 = _v77;
              const _v78: any = rt.object(213, "tBills");
              acc = _v78;
              const _v79: any = rt.setGlobal(430, _v78);
              acc = _v79;
              _v1 = _v79;
              const _v80: any = rt.global(430);
              acc = _v80;
              const _v81: any = await rt.send(_v80, "brite", []);
              acc = _v81;
              _v1 = _v81;
            } else {
              const _v82: any = rt.get(this, "theItem");
              acc = _v82;
              const _v83: any = rt.object(891, "KeyMouse");
              acc = _v83;
              const _v84: any = await rt.send(_v83, "setCursor", [_v82]);
              acc = _v84;
              _v1 = _v84;
            }
            acc = _v1;
            const _v85: any = 0;
            acc = _v85;
            const _v86: any = 0;
            acc = _v86;
            const _v87: any = this;
            acc = _v87;
            const _v88: any = await rt.send(_v87, "doit", [_v85, _v86]);
            acc = _v88;
            const _v89: any = (temps[0] = _v88);
            acc = _v89;
            let _v90: any = acc;
            const _v91: any = (temps[0] ?? 0);
            acc = _v91;
            const _v92: any = await rt.call(213, "IsObject", [_v91], this);
            acc = _v92;
            _v90 = _v92;
            if (rt.truth(_v92)) {
              let _v93: any = acc;
              const _v94: any = (temps[0] ?? 0);
              acc = _v94;
              const _v95: any = this;
              acc = _v95;
              const _v96: any = await rt.send(_v95, "contains", [_v94]);
              acc = _v96;
              _v93 = _v96;
              if (rt.truth(_v96)) {
                const _v97: any = 0;
                acc = _v97;
                const _v98: any = (temps[0] = _v97);
                acc = _v98;
                _v93 = _v98;
              }
              acc = _v93;
              _v90 = _v93;
            } else {
              const _v99: any = 1;
              acc = _v99;
              const _v100: any = (temps[0] = _v99);
              acc = _v100;
              _v90 = _v100;
            }
            acc = _v90;
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
            const _v108: any = (temps[1] ?? 0);
            acc = _v108;
            const _v109: any = rt.object(891, "KeyMouse");
            acc = _v109;
            const _v110: any = await rt.send(_v109, "curItem", [_v108]);
            acc = _v110;
            let _v111: any = acc;
            const _v112: any = rt.global(447);
            acc = _v112;
            _v111 = _v112;
            if (rt.truth(_v112)) {
              const _v113: any = (temps[1] ?? 0);
              acc = _v113;
              const _v114: any = rt.object(891, "KeyMouse");
              acc = _v114;
              const _v115: any = await rt.send(_v114, "setCursor", [_v113]);
              acc = _v115;
              _v111 = _v115;
            }
            acc = _v111;
            const _v116: any = rt.get(this, "keyMouseList");
            acc = _v116;
            const _v117: any = await rt.send(_v116, "release", []);
            acc = _v117;
            const _v118: any = await rt.send(_v116, "dispose", []);
            acc = _v118;
            const _v119: any = rt.global(477);
            acc = _v119;
            const _v120: any = await rt.send(_v119, "fade", []);
            acc = _v120;
            const _v121: any = rt.get(this, "prevDialog");
            acc = _v121;
            const _v122: any = rt.setGlobal(502, _v121);
            acc = _v122;
            const _v123: any = this;
            acc = _v123;
            const _v124: any = 291;
            acc = _v124;
            const _v125: any = await rt.call(0, "proc0_15", [_v123, _v124], this);
            acc = _v125;
            const _v126: any = this;
            acc = _v126;
            const _v127: any = await rt.send(_v126, "dispose", []);
            acc = _v127;
            const _v128: any = 0;
            acc = _v128;
            const _v129: any = rt.setGlobal(430, _v128);
            acc = _v129;
            const _v130: any = 11;
            acc = _v130;
            const _v131: any = rt.get(this, "nsTop");
            acc = _v131;
            const _v132: any = 1;
            acc = _v132;
            const _v133: any = rt.op("+", ...[_v131, _v132]);
            acc = _v133;
            const _v134: any = rt.get(this, "nsLeft");
            acc = _v134;
            const _v135: any = rt.get(this, "nsBottom");
            acc = _v135;
            const _v136: any = 1;
            acc = _v136;
            const _v137: any = rt.op("-", ...[_v135, _v136]);
            acc = _v137;
            const _v138: any = rt.get(this, "nsRight");
            acc = _v138;
            const _v139: any = 3;
            acc = _v139;
            const _v140: any = rt.op("-", ...[_v138, _v139]);
            acc = _v140;
            const _v141: any = 2;
            acc = _v141;
            const _v142: any = 0;
            acc = _v142;
            const _v143: any = 0;
            acc = _v143;
            const _v144: any = await rt.call(213, "Graph", [_v130, _v133, _v134, _v137, _v140, _v141, _v142, _v143], this);
            acc = _v144;
            const _v145: any = 0;
            acc = _v145;
            const _v146: any = await rt.call(0, "proc0_17", [_v145], this);
            acc = _v146;
            const _v147: any = 47;
            acc = _v147;
            const _v148: any = rt.global(477);
            acc = _v148;
            const _v149: any = await rt.send(_v148, "playBed", [_v147]);
            acc = _v149;
            const _v150: any = rt.get(this, "prevTalker");
            acc = _v150;
            const _v151: any = rt.setGlobal(413, _v150);
            acc = _v151;
            const _v152: any = (temps[2] ?? 0);
            acc = _v152;
            const _v153: any = rt.setGlobal(424, _v152);
            acc = _v153;
            const _v154: any = (temps[0] ?? 0);
            acc = _v154;
            const _acc155: any = acc;
            const _v156: any = 213;
            acc = _v156;
            const _args157: any[] = [_v156];
            await rt.call(213, "DisposeScript", _args157, this);
            const _v158: any = _args157.length === 2 ? _args157[1] : _acc155;
            acc = _v158;
            return acc;
          },
          // SCI broker.sc: broker.advance
          "advance": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.object(213, "buyButton");
            acc = _v2;
            const _v3: any = await rt.send(_v2, "enable", [_v1]);
            acc = _v3;
            const _v4: any = 0;
            acc = _v4;
            const _v5: any = rt.object(213, "sellButton");
            acc = _v5;
            const _v6: any = await rt.send(_v5, "enable", [_v4]);
            acc = _v6;
            const _v7: any = await rt.superSend(this, {"script": 213, "name": "broker"}, "advance", []);
            acc = _v7;
            const _v8: any = 1;
            acc = _v8;
            const _v9: any = rt.object(213, "buyButton");
            acc = _v9;
            const _v10: any = await rt.send(_v9, "enable", [_v8]);
            acc = _v10;
            const _v11: any = 1;
            acc = _v11;
            const _v12: any = rt.object(213, "sellButton");
            acc = _v12;
            const _v13: any = await rt.send(_v12, "enable", [_v11]);
            acc = _v13;
            return acc;
          },
          // SCI broker.sc: broker.retreat
          "retreat": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.object(213, "buyButton");
            acc = _v2;
            const _v3: any = await rt.send(_v2, "enable", [_v1]);
            acc = _v3;
            const _v4: any = 0;
            acc = _v4;
            const _v5: any = rt.object(213, "sellButton");
            acc = _v5;
            const _v6: any = await rt.send(_v5, "enable", [_v4]);
            acc = _v6;
            const _v7: any = await rt.superSend(this, {"script": 213, "name": "broker"}, "retreat", []);
            acc = _v7;
            const _v8: any = 1;
            acc = _v8;
            const _v9: any = rt.object(213, "buyButton");
            acc = _v9;
            const _v10: any = await rt.send(_v9, "enable", [_v8]);
            acc = _v10;
            const _v11: any = 1;
            acc = _v11;
            const _v12: any = rt.object(213, "sellButton");
            acc = _v12;
            const _v13: any = await rt.send(_v12, "enable", [_v11]);
            acc = _v13;
            return acc;
          },
          // SCI broker.sc: broker.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const _v1: any = 83;
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "eachElementDo", [_v1]);
            acc = _v3;
            let _v4: any = acc;
            const _v5: any = rt.global(430);
            acc = _v5;
            _v4 = _v5;
            if (rt.truth(_v5)) {
              const _v6: any = rt.global(430);
              acc = _v6;
              const _v7: any = await rt.call(213, "HiliteControl", [_v6], this);
              acc = _v7;
              _v4 = _v7;
            }
            acc = _v4;
            let _v8: any = acc;
            const _v9: any = rt.global(535);
            acc = _v9;
            _v8 = _v9;
            if (rt.truth(_v9)) {
              const _v10: any = 93;
              acc = _v10;
              _v8 = _v10;
            } else {
              const _v11: any = 3;
              acc = _v11;
              _v8 = _v11;
            }
            acc = _v8;
            const _v12: any = (temps[20] = _v8);
            acc = _v12;
            const _v13: any = 213;
            acc = _v13;
            const _v14: any = 1;
            acc = _v14;
            const _v15: any = 105;
            acc = _v15;
            const _v16: any = 10;
            acc = _v16;
            const _v17: any = 100;
            acc = _v17;
            const _v18: any = 112;
            acc = _v18;
            const _v19: any = 8;
            acc = _v19;
            const _v20: any = 103;
            acc = _v20;
            const _v21: any = (temps[20] ?? 0);
            acc = _v21;
            const _v22: any = 102;
            acc = _v22;
            const _v23: any = 0;
            acc = _v23;
            const _v24: any = await rt.call(213, "Display", [_v13, _v14, _v15, _v16, _v17, _v18, _v19, _v20, _v21, _v22, _v23], this);
            acc = _v24;
            const _v25: any = 213;
            acc = _v25;
            const _v26: any = 2;
            acc = _v26;
            const _v27: any = 105;
            acc = _v27;
            const _v28: any = 10;
            acc = _v28;
            const _v29: any = 100;
            acc = _v29;
            const _v30: any = 115;
            acc = _v30;
            const _v31: any = 16;
            acc = _v31;
            const _v32: any = 103;
            acc = _v32;
            const _v33: any = (temps[20] ?? 0);
            acc = _v33;
            const _v34: any = 102;
            acc = _v34;
            const _v35: any = 0;
            acc = _v35;
            const _v36: any = await rt.call(213, "Display", [_v25, _v26, _v27, _v28, _v29, _v30, _v31, _v32, _v33, _v34, _v35], this);
            acc = _v36;
            const _v37: any = 213;
            acc = _v37;
            const _v38: any = 3;
            acc = _v38;
            const _v39: any = 105;
            acc = _v39;
            const _v40: any = 10;
            acc = _v40;
            const _v41: any = 100;
            acc = _v41;
            const _v42: any = 154;
            acc = _v42;
            const _v43: any = 8;
            acc = _v43;
            const _v44: any = 103;
            acc = _v44;
            const _v45: any = (temps[20] ?? 0);
            acc = _v45;
            const _v46: any = 102;
            acc = _v46;
            const _v47: any = 0;
            acc = _v47;
            const _v48: any = await rt.call(213, "Display", [_v37, _v38, _v39, _v40, _v41, _v42, _v43, _v44, _v45, _v46, _v47], this);
            acc = _v48;
            const _v49: any = 213;
            acc = _v49;
            const _v50: any = 4;
            acc = _v50;
            const _v51: any = 105;
            acc = _v51;
            const _v52: any = 10;
            acc = _v52;
            const _v53: any = 100;
            acc = _v53;
            const _v54: any = 147;
            acc = _v54;
            const _v55: any = 16;
            acc = _v55;
            const _v56: any = 103;
            acc = _v56;
            const _v57: any = (temps[20] ?? 0);
            acc = _v57;
            const _v58: any = 102;
            acc = _v58;
            const _v59: any = 0;
            acc = _v59;
            const _v60: any = await rt.call(213, "Display", [_v49, _v50, _v51, _v52, _v53, _v54, _v55, _v56, _v57, _v58, _v59], this);
            acc = _v60;
            const _v61: any = rt.ref("array", temps, 0);
            acc = _v61;
            const _v62: any = rt.object(213, "tBills");
            acc = _v62;
            const _v63: any = await rt.send(_v62, "price", []);
            acc = _v63;
            const _v64: any = await rt.call(213, "localproc_1", [_v61, _v63], this);
            acc = _v64;
            const _v65: any = 105;
            acc = _v65;
            const _v66: any = 10;
            acc = _v66;
            const _v67: any = 100;
            acc = _v67;
            const _v68: any = 109;
            acc = _v68;
            const _v69: any = 31;
            acc = _v69;
            const _v70: any = 103;
            acc = _v70;
            const _v71: any = (temps[20] ?? 0);
            acc = _v71;
            const _v72: any = 102;
            acc = _v72;
            const _v73: any = 0;
            acc = _v73;
            const _v74: any = await rt.call(213, "Display", [_v64, _v65, _v66, _v67, _v68, _v69, _v70, _v71, _v72, _v73], this);
            acc = _v74;
            const _v75: any = rt.ref("array", temps, 0);
            acc = _v75;
            const _v76: any = rt.object(213, "gold");
            acc = _v76;
            const _v77: any = await rt.send(_v76, "price", []);
            acc = _v77;
            const _v78: any = await rt.call(213, "localproc_1", [_v75, _v77], this);
            acc = _v78;
            const _v79: any = 105;
            acc = _v79;
            const _v80: any = 10;
            acc = _v80;
            const _v81: any = 100;
            acc = _v81;
            const _v82: any = 109;
            acc = _v82;
            const _v83: any = 44;
            acc = _v83;
            const _v84: any = 103;
            acc = _v84;
            const _v85: any = (temps[20] ?? 0);
            acc = _v85;
            const _v86: any = 102;
            acc = _v86;
            const _v87: any = 0;
            acc = _v87;
            const _v88: any = await rt.call(213, "Display", [_v78, _v79, _v80, _v81, _v82, _v83, _v84, _v85, _v86, _v87], this);
            acc = _v88;
            const _v89: any = rt.ref("array", temps, 0);
            acc = _v89;
            const _v90: any = rt.object(213, "silver");
            acc = _v90;
            const _v91: any = await rt.send(_v90, "price", []);
            acc = _v91;
            const _v92: any = await rt.call(213, "localproc_1", [_v89, _v91], this);
            acc = _v92;
            const _v93: any = 105;
            acc = _v93;
            const _v94: any = 10;
            acc = _v94;
            const _v95: any = 100;
            acc = _v95;
            const _v96: any = 109;
            acc = _v96;
            const _v97: any = 57;
            acc = _v97;
            const _v98: any = 103;
            acc = _v98;
            const _v99: any = (temps[20] ?? 0);
            acc = _v99;
            const _v100: any = 102;
            acc = _v100;
            const _v101: any = 0;
            acc = _v101;
            const _v102: any = await rt.call(213, "Display", [_v92, _v93, _v94, _v95, _v96, _v97, _v98, _v99, _v100, _v101], this);
            acc = _v102;
            const _v103: any = rt.ref("array", temps, 0);
            acc = _v103;
            const _v104: any = rt.object(213, "porkBellies");
            acc = _v104;
            const _v105: any = await rt.send(_v104, "price", []);
            acc = _v105;
            const _v106: any = await rt.call(213, "localproc_1", [_v103, _v105], this);
            acc = _v106;
            const _v107: any = 105;
            acc = _v107;
            const _v108: any = 10;
            acc = _v108;
            const _v109: any = 100;
            acc = _v109;
            const _v110: any = 109;
            acc = _v110;
            const _v111: any = 70;
            acc = _v111;
            const _v112: any = 103;
            acc = _v112;
            const _v113: any = (temps[20] ?? 0);
            acc = _v113;
            const _v114: any = 102;
            acc = _v114;
            const _v115: any = 0;
            acc = _v115;
            const _v116: any = await rt.call(213, "Display", [_v106, _v107, _v108, _v109, _v110, _v111, _v112, _v113, _v114, _v115], this);
            acc = _v116;
            const _v117: any = rt.ref("array", temps, 0);
            acc = _v117;
            const _v118: any = rt.object(213, "blueChipStocks");
            acc = _v118;
            const _v119: any = await rt.send(_v118, "price", []);
            acc = _v119;
            const _v120: any = await rt.call(213, "localproc_1", [_v117, _v119], this);
            acc = _v120;
            const _v121: any = 105;
            acc = _v121;
            const _v122: any = 10;
            acc = _v122;
            const _v123: any = 100;
            acc = _v123;
            const _v124: any = 109;
            acc = _v124;
            const _v125: any = 83;
            acc = _v125;
            const _v126: any = 103;
            acc = _v126;
            const _v127: any = (temps[20] ?? 0);
            acc = _v127;
            const _v128: any = 102;
            acc = _v128;
            const _v129: any = 0;
            acc = _v129;
            const _v130: any = await rt.call(213, "Display", [_v120, _v121, _v122, _v123, _v124, _v125, _v126, _v127, _v128, _v129], this);
            acc = _v130;
            const _v131: any = rt.ref("array", temps, 0);
            acc = _v131;
            const _v132: any = rt.object(213, "pennyStocks");
            acc = _v132;
            const _v133: any = await rt.send(_v132, "price", []);
            acc = _v133;
            const _v134: any = await rt.call(213, "localproc_1", [_v131, _v133], this);
            acc = _v134;
            const _v135: any = 105;
            acc = _v135;
            const _v136: any = 10;
            acc = _v136;
            const _v137: any = 100;
            acc = _v137;
            const _v138: any = 109;
            acc = _v138;
            const _v139: any = 96;
            acc = _v139;
            const _v140: any = 103;
            acc = _v140;
            const _v141: any = (temps[20] ?? 0);
            acc = _v141;
            const _v142: any = 102;
            acc = _v142;
            const _v143: any = 0;
            acc = _v143;
            const _v144: any = await rt.call(213, "Display", [_v134, _v135, _v136, _v137, _v138, _v139, _v140, _v141, _v142, _v143], this);
            acc = _v144;
            let _v145: any = acc;
            const _v146: any = rt.global(518);
            acc = _v146;
            _v145 = _v146;
            if (rt.truth(_v146)) {
              const _v147: any = rt.global(302);
              acc = _v147;
              const _v148: any = await rt.send(_v147, "cash", []);
              acc = _v148;
              const _v149: any = 1;
              acc = _v149;
              const _v150: any = rt.op("-", ...[_v148, _v149]);
              acc = _v150;
              const _v151: any = rt.global(305);
              acc = _v151;
              const _v152: any = await rt.send(_v151, "setSize", []);
              acc = _v152;
              const _v153: any = await rt.send(_v151, "value", [_v150]);
              acc = _v153;
              const _v154: any = await rt.send(_v151, "draw", []);
              acc = _v154;
              _v145 = _v154;
            }
            acc = _v145;
            return acc;
          },
        },
      },
      {
        name: "background",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"view": 696},
        methods: {
        },
      },
      {
        name: "InvestmentDIcon",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: true,
        properties: {"state": 1, "nsLeft": 8, "view": 696, "loop": 1, "price": 0, "basePrice": 0, "fixedPrice": 0},
        methods: {
          // SCI broker.sc: InvestmentDIcon.brite
          "brite": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "setPort", []);
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.call(213, "HiliteControl", [_v3], this);
            acc = _v4;
            const _v5: any = this;
            acc = _v5;
            const _v6: any = await rt.send(_v5, "resetPort", []);
            acc = _v6;
            return acc;
          },
          // SCI broker.sc: InvestmentDIcon.select
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
          // SCI broker.sc: InvestmentDIcon.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 23;
            acc = _v1;
            const _v2: any = rt.global(476);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "play", [_v1]);
            acc = _v3;
            const _v4: any = 0;
            acc = _v4;
            const _v5: any = rt.global(430);
            acc = _v5;
            const _v6: any = await rt.send(_v5, "select", [_v4]);
            acc = _v6;
            const _v7: any = await rt.send(_v5, "brite", []);
            acc = _v7;
            const _v8: any = this;
            acc = _v8;
            const _v9: any = rt.setGlobal(430, _v8);
            acc = _v9;
            const _v10: any = 1;
            acc = _v10;
            const _v11: any = rt.global(430);
            acc = _v11;
            const _v12: any = await rt.send(_v11, "select", [_v10]);
            acc = _v12;
            const _v13: any = await rt.send(_v11, "brite", []);
            acc = _v13;
            const _v14: any = await rt.superSend(this, {"script": 213, "name": "InvestmentDIcon"}, "doit", []);
            acc = _v14;
            return acc;
          },
        },
      },
      {
        name: "tBills",
        className: "InvestmentDIcon",
        parent: {"script": 213, "name": "InvestmentDIcon"},
        isClass: false,
        properties: {"nsTop": 27, "price": 100, "fixedPrice": 1},
        methods: {
        },
      },
      {
        name: "tBillsHoldings",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"state": 64, "nsLeft": 142, "shadowColor": 93},
        methods: {
          // SCI broker.sc: tBillsHoldings.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.object(213, "tBills");
            acc = _v1;
            const _v2: any = await rt.send(_v1, "nsTop", []);
            acc = _v2;
            const _v3: any = 4;
            acc = _v3;
            const _v4: any = rt.op("+", ...[_v2, _v3]);
            acc = _v4;
            const _v5: any = rt.set(this, "nsTop", _v4);
            acc = _v5;
            const _v6: any = 0;
            acc = _v6;
            const _v7: any = rt.global(302);
            acc = _v7;
            const _v8: any = await rt.send(_v7, "investments", []);
            acc = _v8;
            const _v9: any = await rt.send(_v8, "at", [_v6]);
            acc = _v9;
            const _v10: any = rt.object(213, "tBills");
            acc = _v10;
            const _v11: any = await rt.send(_v10, "price", []);
            acc = _v11;
            const _v12: any = await rt.call(115, "proc115_1", [_v9, _v11], this);
            acc = _v12;
            const _v13: any = rt.ref("local", 213, 1);
            acc = _v13;
            const _v14: any = rt.global(454);
            acc = _v14;
            const _v15: any = rt.global(455);
            acc = _v15;
            const _v16: any = await rt.call(115, "proc115_0", [_v14, _v15], this);
            acc = _v16;
            const _v17: any = await rt.call(213, "localproc_2", [_v13, _v16], this);
            acc = _v17;
            const _v18: any = rt.set(this, "text", _v17);
            acc = _v18;
            const _v19: any = await rt.superSend(this, {"script": 213, "name": "tBillsHoldings"}, "init", []);
            acc = _v19;
            return acc;
          },
        },
      },
      {
        name: "gold",
        className: "InvestmentDIcon",
        parent: {"script": 213, "name": "InvestmentDIcon"},
        isClass: false,
        properties: {"nsTop": 40, "key": 1, "cel": 1, "basePrice": 413},
        methods: {
          // SCI broker.sc: gold.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.global(310);
            acc = _v1;
            const _v2: any = rt.get(this, "basePrice");
            acc = _v2;
            const _v3: any = await rt.call(109, "proc109_0", [_v1, _v2], this);
            acc = _v3;
            const _v4: any = rt.set(this, "price", _v3);
            acc = _v4;
            return acc;
          },
        },
      },
      {
        name: "goldHoldings",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"state": 64, "nsLeft": 142, "shadowColor": 93},
        methods: {
          // SCI broker.sc: goldHoldings.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.object(213, "gold");
            acc = _v1;
            const _v2: any = await rt.send(_v1, "nsTop", []);
            acc = _v2;
            const _v3: any = 4;
            acc = _v3;
            const _v4: any = rt.op("+", ...[_v2, _v3]);
            acc = _v4;
            const _v5: any = rt.set(this, "nsTop", _v4);
            acc = _v5;
            const _v6: any = 1;
            acc = _v6;
            const _v7: any = rt.global(302);
            acc = _v7;
            const _v8: any = await rt.send(_v7, "investments", []);
            acc = _v8;
            const _v9: any = await rt.send(_v8, "at", [_v6]);
            acc = _v9;
            const _v10: any = rt.object(213, "gold");
            acc = _v10;
            const _v11: any = await rt.send(_v10, "price", []);
            acc = _v11;
            const _v12: any = await rt.call(115, "proc115_1", [_v9, _v11], this);
            acc = _v12;
            const _v13: any = rt.ref("local", 213, 6);
            acc = _v13;
            const _v14: any = rt.global(454);
            acc = _v14;
            const _v15: any = rt.global(455);
            acc = _v15;
            const _v16: any = await rt.call(115, "proc115_0", [_v14, _v15], this);
            acc = _v16;
            const _v17: any = await rt.call(213, "localproc_2", [_v13, _v16], this);
            acc = _v17;
            const _v18: any = rt.set(this, "text", _v17);
            acc = _v18;
            const _v19: any = await rt.superSend(this, {"script": 213, "name": "goldHoldings"}, "init", []);
            acc = _v19;
            return acc;
          },
        },
      },
      {
        name: "silver",
        className: "InvestmentDIcon",
        parent: {"script": 213, "name": "InvestmentDIcon"},
        isClass: false,
        properties: {"nsTop": 53, "key": 2, "cel": 2, "basePrice": 14},
        methods: {
          // SCI broker.sc: silver.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.global(311);
            acc = _v1;
            const _v2: any = rt.get(this, "basePrice");
            acc = _v2;
            const _v3: any = await rt.call(109, "proc109_0", [_v1, _v2], this);
            acc = _v3;
            const _v4: any = rt.set(this, "price", _v3);
            acc = _v4;
            return acc;
          },
        },
      },
      {
        name: "silverHoldings",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"state": 64, "nsLeft": 142, "shadowColor": 93},
        methods: {
          // SCI broker.sc: silverHoldings.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.object(213, "silver");
            acc = _v1;
            const _v2: any = await rt.send(_v1, "nsTop", []);
            acc = _v2;
            const _v3: any = 4;
            acc = _v3;
            const _v4: any = rt.op("+", ...[_v2, _v3]);
            acc = _v4;
            const _v5: any = rt.set(this, "nsTop", _v4);
            acc = _v5;
            const _v6: any = 2;
            acc = _v6;
            const _v7: any = rt.global(302);
            acc = _v7;
            const _v8: any = await rt.send(_v7, "investments", []);
            acc = _v8;
            const _v9: any = await rt.send(_v8, "at", [_v6]);
            acc = _v9;
            const _v10: any = rt.object(213, "silver");
            acc = _v10;
            const _v11: any = await rt.send(_v10, "price", []);
            acc = _v11;
            const _v12: any = await rt.call(115, "proc115_1", [_v9, _v11], this);
            acc = _v12;
            const _v13: any = rt.ref("local", 213, 11);
            acc = _v13;
            const _v14: any = rt.global(454);
            acc = _v14;
            const _v15: any = rt.global(455);
            acc = _v15;
            const _v16: any = await rt.call(115, "proc115_0", [_v14, _v15], this);
            acc = _v16;
            const _v17: any = await rt.call(213, "localproc_2", [_v13, _v16], this);
            acc = _v17;
            const _v18: any = rt.set(this, "text", _v17);
            acc = _v18;
            const _v19: any = await rt.superSend(this, {"script": 213, "name": "silverHoldings"}, "init", []);
            acc = _v19;
            return acc;
          },
        },
      },
      {
        name: "porkBellies",
        className: "InvestmentDIcon",
        parent: {"script": 213, "name": "InvestmentDIcon"},
        isClass: false,
        properties: {"nsTop": 66, "key": 3, "cel": 3, "basePrice": 20},
        methods: {
          // SCI broker.sc: porkBellies.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.global(312);
            acc = _v1;
            const _v2: any = rt.get(this, "basePrice");
            acc = _v2;
            const _v3: any = await rt.call(109, "proc109_0", [_v1, _v2], this);
            acc = _v3;
            const _v4: any = rt.set(this, "price", _v3);
            acc = _v4;
            return acc;
          },
        },
      },
      {
        name: "porkBelliesHoldings",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"state": 64, "nsLeft": 142, "shadowColor": 93},
        methods: {
          // SCI broker.sc: porkBelliesHoldings.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.object(213, "porkBellies");
            acc = _v1;
            const _v2: any = await rt.send(_v1, "nsTop", []);
            acc = _v2;
            const _v3: any = 4;
            acc = _v3;
            const _v4: any = rt.op("+", ...[_v2, _v3]);
            acc = _v4;
            const _v5: any = rt.set(this, "nsTop", _v4);
            acc = _v5;
            const _v6: any = 3;
            acc = _v6;
            const _v7: any = rt.global(302);
            acc = _v7;
            const _v8: any = await rt.send(_v7, "investments", []);
            acc = _v8;
            const _v9: any = await rt.send(_v8, "at", [_v6]);
            acc = _v9;
            const _v10: any = rt.object(213, "porkBellies");
            acc = _v10;
            const _v11: any = await rt.send(_v10, "price", []);
            acc = _v11;
            const _v12: any = await rt.call(115, "proc115_1", [_v9, _v11], this);
            acc = _v12;
            const _v13: any = rt.ref("local", 213, 16);
            acc = _v13;
            const _v14: any = rt.global(454);
            acc = _v14;
            const _v15: any = rt.global(455);
            acc = _v15;
            const _v16: any = await rt.call(115, "proc115_0", [_v14, _v15], this);
            acc = _v16;
            const _v17: any = await rt.call(213, "localproc_2", [_v13, _v16], this);
            acc = _v17;
            const _v18: any = rt.set(this, "text", _v17);
            acc = _v18;
            const _v19: any = await rt.superSend(this, {"script": 213, "name": "porkBelliesHoldings"}, "init", []);
            acc = _v19;
            return acc;
          },
        },
      },
      {
        name: "blueChipStocks",
        className: "InvestmentDIcon",
        parent: {"script": 213, "name": "InvestmentDIcon"},
        isClass: false,
        properties: {"nsTop": 79, "key": 4, "cel": 4, "basePrice": 49},
        methods: {
          // SCI broker.sc: blueChipStocks.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.global(313);
            acc = _v1;
            const _v2: any = rt.get(this, "basePrice");
            acc = _v2;
            const _v3: any = await rt.call(109, "proc109_0", [_v1, _v2], this);
            acc = _v3;
            const _v4: any = rt.set(this, "price", _v3);
            acc = _v4;
            return acc;
          },
        },
      },
      {
        name: "blueChipStocksHoldings",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"state": 64, "nsLeft": 142, "shadowColor": 93},
        methods: {
          // SCI broker.sc: blueChipStocksHoldings.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = rt.object(213, "blueChipStocks");
            acc = _v1;
            const _v2: any = await rt.send(_v1, "nsTop", []);
            acc = _v2;
            const _v3: any = 4;
            acc = _v3;
            const _v4: any = rt.op("+", ...[_v2, _v3]);
            acc = _v4;
            const _v5: any = rt.set(this, "nsTop", _v4);
            acc = _v5;
            const _v6: any = 4;
            acc = _v6;
            const _v7: any = rt.global(302);
            acc = _v7;
            const _v8: any = await rt.send(_v7, "investments", []);
            acc = _v8;
            const _v9: any = await rt.send(_v8, "at", [_v6]);
            acc = _v9;
            const _v10: any = rt.object(213, "blueChipStocks");
            acc = _v10;
            const _v11: any = await rt.send(_v10, "price", []);
            acc = _v11;
            const _v12: any = await rt.call(115, "proc115_1", [_v9, _v11], this);
            acc = _v12;
            const _v13: any = rt.ref("local", 213, 21);
            acc = _v13;
            const _v14: any = rt.global(454);
            acc = _v14;
            const _v15: any = rt.global(455);
            acc = _v15;
            const _v16: any = await rt.call(115, "proc115_0", [_v14, _v15], this);
            acc = _v16;
            const _v17: any = await rt.call(213, "localproc_2", [_v13, _v16], this);
            acc = _v17;
            const _v18: any = rt.set(this, "text", _v17);
            acc = _v18;
            const _v19: any = await rt.superSend(this, {"script": 213, "name": "blueChipStocksHoldings"}, "init", []);
            acc = _v19;
            return acc;
          },
        },
      },
      {
        name: "pennyStocks",
        className: "InvestmentDIcon",
        parent: {"script": 213, "name": "InvestmentDIcon"},
        isClass: false,
        properties: {"nsTop": 92, "key": 5, "cel": 5, "basePrice": 7},
        methods: {
          // SCI broker.sc: pennyStocks.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.global(314);
            acc = _v1;
            const _v2: any = rt.get(this, "basePrice");
            acc = _v2;
            const _v3: any = await rt.call(109, "proc109_0", [_v1, _v2], this);
            acc = _v3;
            const _v4: any = rt.set(this, "price", _v3);
            acc = _v4;
            return acc;
          },
        },
      },
      {
        name: "pennyStocksHoldings",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"state": 64, "nsLeft": 142, "shadowColor": 93},
        methods: {
          // SCI broker.sc: pennyStocksHoldings.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.object(213, "pennyStocks");
            acc = _v1;
            const _v2: any = await rt.send(_v1, "nsTop", []);
            acc = _v2;
            const _v3: any = 4;
            acc = _v3;
            const _v4: any = rt.op("+", ...[_v2, _v3]);
            acc = _v4;
            const _v5: any = rt.set(this, "nsTop", _v4);
            acc = _v5;
            const _v6: any = 5;
            acc = _v6;
            const _v7: any = rt.global(302);
            acc = _v7;
            const _v8: any = await rt.send(_v7, "investments", []);
            acc = _v8;
            const _v9: any = await rt.send(_v8, "at", [_v6]);
            acc = _v9;
            const _v10: any = rt.object(213, "pennyStocks");
            acc = _v10;
            const _v11: any = await rt.send(_v10, "price", []);
            acc = _v11;
            const _v12: any = await rt.call(115, "proc115_1", [_v9, _v11], this);
            acc = _v12;
            const _v13: any = rt.ref("local", 213, 26);
            acc = _v13;
            const _v14: any = rt.global(454);
            acc = _v14;
            const _v15: any = rt.global(455);
            acc = _v15;
            const _v16: any = await rt.call(115, "proc115_0", [_v14, _v15], this);
            acc = _v16;
            const _v17: any = await rt.call(213, "localproc_2", [_v13, _v16], this);
            acc = _v17;
            const _v18: any = rt.set(this, "text", _v17);
            acc = _v18;
            const _v19: any = await rt.superSend(this, {"script": 213, "name": "pennyStocksHoldings"}, "init", []);
            acc = _v19;
            return acc;
          },
        },
      },
      {
        name: "exitButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 99, "nsTop": 108, "nsLeft": 143, "key": 120, "view": 250},
        methods: {
        },
      },
      {
        name: "buyButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 108, "nsLeft": 7, "key": 98, "view": 250, "loop": 4},
        methods: {
          // SCI broker.sc: buyButton.select
          "select": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = await rt.superSend(this, {"script": 213, "name": "buyButton"}, "select", [_v1]);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(430);
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(430);
              acc = _v5;
              const _v6: any = rt.object(213, "broker");
              acc = _v6;
              const _v7: any = await rt.send(_v6, "theItem", [_v5]);
              acc = _v7;
              _v3 = _v7;
            }
            acc = _v3;
            return acc;
          },
          // SCI broker.sc: buyButton.doit
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
            const _v4: any = rt.global(430);
            acc = _v4;
            const _v5: any = await rt.send(_v4, "key", []);
            acc = _v5;
            const _v6: any = rt.global(302);
            acc = _v6;
            const _v7: any = await rt.send(_v6, "investments", []);
            acc = _v7;
            const _v8: any = await rt.send(_v7, "at", [_v5]);
            acc = _v8;
            const _v9: any = (temps[0] = _v8);
            acc = _v9;
            let _v10: any = acc;
            const _v11: any = await rt.call(0, "proc0_11", [], this);
            acc = _v11;
            const _v12: any = rt.global(430);
            acc = _v12;
            const _v13: any = await rt.send(_v12, "price", []);
            acc = _v13;
            const _v14: any = rt.op(">=", ...[_v11, _v13]);
            acc = _v14;
            _v10 = _v14;
            if (rt.truth(_v14)) {
              const _v15: any = (temps[0] ?? 0);
              acc = _v15;
              const _v16: any = await rt.send(_v15, "shares", []);
              acc = _v16;
              const _v17: any = 1;
              acc = _v17;
              const _v18: any = rt.op("+", ...[_v16, _v17]);
              acc = _v18;
              const _v19: any = (temps[0] ?? 0);
              acc = _v19;
              const _v20: any = await rt.send(_v19, "shares", [_v18]);
              acc = _v20;
              _v10 = _v20;
              const _v21: any = 0;
              acc = _v21;
              const _v22: any = rt.global(430);
              acc = _v22;
              const _v23: any = await rt.send(_v22, "price", []);
              acc = _v23;
              const _v24: any = rt.op("-", ...[_v21, _v23]);
              acc = _v24;
              const _v25: any = await rt.call(0, "proc0_10", [_v24], this);
              acc = _v25;
              _v10 = _v25;
              const _v26: any = rt.global(302);
              acc = _v26;
              const _v27: any = await rt.send(_v26, "invAss", []);
              acc = _v27;
              const _v28: any = rt.global(430);
              acc = _v28;
              const _v29: any = await rt.send(_v28, "price", []);
              acc = _v29;
              const _v30: any = rt.op("+", ...[_v27, _v29]);
              acc = _v30;
              const _v31: any = rt.global(302);
              acc = _v31;
              const _v32: any = await rt.send(_v31, "invAss", [_v30]);
              acc = _v32;
              _v10 = _v32;
              const _v33: any = rt.global(430);
              acc = _v33;
              const _v34: any = await rt.send(_v33, "key", []);
              acc = _v34;
              const _v35: any = await rt.call(213, "localproc_0", [_v34], this);
              acc = _v35;
              _v10 = _v35;
            } else {
              const _v36: any = 213;
              acc = _v36;
              const _v37: any = 5;
              acc = _v37;
              const _v38: any = await rt.call(104, "proc104_1", [_v36, _v37], this);
              acc = _v38;
              _v10 = _v38;
            }
            acc = _v10;
            const _v39: any = rt.global(305);
            acc = _v39;
            const _v40: any = await rt.send(_v39, "doit", []);
            acc = _v40;
            const _v41: any = rt.get(this, "value");
            acc = _v41;
            return _v41;
            return acc;
          },
          // SCI broker.sc: buyButton.hilite
          "hilite": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 5;
            acc = _v1;
            const _v2: any = await rt.superSend(this, {"script": 213, "name": "buyButton"}, "hilite", [_v1]);
            acc = _v2;
            return acc;
          },
        },
      },
      {
        name: "sellButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 108, "nsLeft": 77, "key": 106, "view": 250, "loop": 5},
        methods: {
          // SCI broker.sc: sellButton.select
          "select": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = await rt.superSend(this, {"script": 213, "name": "sellButton"}, "select", [_v1]);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(430);
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(430);
              acc = _v5;
              const _v6: any = rt.object(213, "broker");
              acc = _v6;
              const _v7: any = await rt.send(_v6, "theItem", [_v5]);
              acc = _v7;
              _v3 = _v7;
            }
            acc = _v3;
            return acc;
          },
          // SCI broker.sc: sellButton.doit
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
            const _v4: any = rt.global(430);
            acc = _v4;
            const _v5: any = await rt.send(_v4, "key", []);
            acc = _v5;
            const _v6: any = rt.global(302);
            acc = _v6;
            const _v7: any = await rt.send(_v6, "investments", []);
            acc = _v7;
            const _v8: any = await rt.send(_v7, "at", [_v5]);
            acc = _v8;
            const _v9: any = (temps[0] = _v8);
            acc = _v9;
            let _v10: any = acc;
            const _v11: any = (temps[0] ?? 0);
            acc = _v11;
            const _v12: any = await rt.send(_v11, "shares", []);
            acc = _v12;
            _v10 = _v12;
            if (rt.truth(_v12)) {
              const _v13: any = (temps[0] ?? 0);
              acc = _v13;
              const _v14: any = await rt.send(_v13, "shares", []);
              acc = _v14;
              const _v15: any = 1;
              acc = _v15;
              const _v16: any = rt.op("-", ...[_v14, _v15]);
              acc = _v16;
              const _v17: any = (temps[0] ?? 0);
              acc = _v17;
              const _v18: any = await rt.send(_v17, "shares", [_v16]);
              acc = _v18;
              _v10 = _v18;
              const _v19: any = rt.global(430);
              acc = _v19;
              const _v20: any = await rt.send(_v19, "price", []);
              acc = _v20;
              const _v21: any = await rt.call(0, "proc0_10", [_v20], this);
              acc = _v21;
              _v10 = _v21;
              const _v22: any = rt.global(302);
              acc = _v22;
              const _v23: any = await rt.send(_v22, "invAss", []);
              acc = _v23;
              const _v24: any = rt.global(430);
              acc = _v24;
              const _v25: any = await rt.send(_v24, "price", []);
              acc = _v25;
              const _v26: any = rt.op("-", ...[_v23, _v25]);
              acc = _v26;
              const _v27: any = rt.global(302);
              acc = _v27;
              const _v28: any = await rt.send(_v27, "invAss", [_v26]);
              acc = _v28;
              _v10 = _v28;
              const _v29: any = rt.global(430);
              acc = _v29;
              const _v30: any = await rt.send(_v29, "key", []);
              acc = _v30;
              const _v31: any = await rt.call(213, "localproc_0", [_v30], this);
              acc = _v31;
              _v10 = _v31;
              let _v32: any = acc;
              const _v33: any = rt.global(430);
              acc = _v33;
              const _v34: any = rt.object(213, "tBills");
              acc = _v34;
              const _v35: any = rt.op("==", ...[_v33, _v34]);
              acc = _v35;
              _v32 = _v35;
              if (rt.truth(_v35)) {
                const _v36: any = -3;
                acc = _v36;
                const _v37: any = await rt.call(0, "proc0_10", [_v36], this);
                acc = _v37;
                _v32 = _v37;
                let _v38: any = acc;
                const _v39: any = rt.global(537);
                acc = _v39;
                _v38 = _v39;
                if (rt.truth(_v39)) {
                  const _v40: any = 0;
                  acc = _v40;
                  const _v41: any = rt.setGlobal(537, _v40);
                  acc = _v41;
                  _v38 = _v41;
                  const _v42: any = 213;
                  acc = _v42;
                  const _v43: any = 6;
                  acc = _v43;
                  const _v44: any = await rt.call(104, "proc104_1", [_v42, _v43], this);
                  acc = _v44;
                  _v38 = _v44;
                }
                acc = _v38;
                _v32 = _v38;
              }
              acc = _v32;
              _v10 = _v32;
            } else {
              const _v45: any = 213;
              acc = _v45;
              const _v46: any = 7;
              acc = _v46;
              const _v47: any = await rt.call(104, "proc104_1", [_v45, _v46], this);
              acc = _v47;
              _v10 = _v47;
            }
            acc = _v10;
            const _v48: any = rt.global(305);
            acc = _v48;
            const _v49: any = await rt.send(_v48, "doit", []);
            acc = _v49;
            const _v50: any = rt.get(this, "value");
            acc = _v50;
            return _v50;
            return acc;
          },
          // SCI broker.sc: sellButton.hilite
          "hilite": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 5;
            acc = _v1;
            const _v2: any = await rt.superSend(this, {"script": 213, "name": "sellButton"}, "hilite", [_v1]);
            acc = _v2;
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
          // SCI broker.sc: computerScript.handleEvent
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
              const _v14: any = -1;
              acc = _v14;
              const _v15: any = rt.setLocal(213, 37, _v14);
              acc = _v15;
              _v1 = _v15;
              const _v16: any = rt.get(this, "state");
              acc = _v16;
              const _v17: any = rt.setLocal(213, 0, _v16);
              acc = _v17;
              _v1 = _v17;
              let _v18: any = acc;
              const _v19: any = rt.get(this, "state");
              acc = _v19;
              _branch20: {
                const _v21: any = 2;
                acc = _v21;
                _v18 = rt.op("==", _v19, _v21);
                acc = _v18;
                if (rt.truth(_v18)) {
                  let _v22: any = acc;
                  const _v23: any = 19;
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
                    const _v29: any = 0;
                    acc = _v29;
                    const _v30: any = rt.setLocal(213, 32, _v29);
                    acc = _v30;
                    const _v31: any = rt.setLocal(213, 31, _v30);
                    acc = _v31;
                    const _v32: any = (temps[0] = _v31);
                    acc = _v32;
                    _loop27: for (;;) {
                      const _v33: any = (temps[0] ?? 0);
                      acc = _v33;
                      const _v34: any = 5;
                      acc = _v34;
                      const _v35: any = rt.op("<", ...[_v33, _v34]);
                      acc = _v35;
                      if (!rt.truth(_v35)) break _loop27;
                      _continue28: {
                        let _v36: any = acc;
                        let _v37: any = 1;
                        if (rt.truth(_v37)) {
                          const _v38: any = await rt.call(0, "proc0_11", [], this);
                          acc = _v38;
                          const _v39: any = (temps[0] ?? 0);
                          acc = _v39;
                          const _v40: any = 1;
                          acc = _v40;
                          const _v41: any = rt.op("+", ...[_v39, _v40]);
                          acc = _v41;
                          const _v42: any = await rt.call(213, "localproc_3", [_v41], this);
                          acc = _v42;
                          const _v43: any = await rt.send(_v42, "price", []);
                          acc = _v43;
                          const _v44: any = rt.op(">=", ...[_v38, _v43]);
                          acc = _v44;
                          _v37 = _v44;
                        }
                        if (rt.truth(_v37)) {
                          const _v45: any = (temps[0] ?? 0);
                          acc = _v45;
                          const _v46: any = rt.global((318 + (Number(_v45) & 65535)));
                          acc = _v46;
                          const _v47: any = rt.local(213, 32);
                          acc = _v47;
                          const _v48: any = rt.op(">=", ...[_v46, _v47]);
                          acc = _v48;
                          _v37 = _v48;
                        }
                        acc = _v37;
                        _v36 = _v37;
                        if (rt.truth(_v37)) {
                          let _v49: any = acc;
                          _branch50: {
                            const _v51: any = (temps[0] ?? 0);
                            acc = _v51;
                            const _v52: any = rt.global((318 + (Number(_v51) & 65535)));
                            acc = _v52;
                            const _v53: any = rt.local(213, 32);
                            acc = _v53;
                            const _v54: any = rt.op(">", ...[_v52, _v53]);
                            acc = _v54;
                            _v49 = _v54;
                            acc = _v49;
                            if (rt.truth(_v49)) {
                              const _v55: any = (temps[0] ?? 0);
                              acc = _v55;
                              const _v56: any = rt.global((318 + (Number(_v55) & 65535)));
                              acc = _v56;
                              const _v57: any = rt.setLocal(213, 32, _v56);
                              acc = _v57;
                              _v49 = _v57;
                              const _v58: any = (temps[0] ?? 0);
                              acc = _v58;
                              const _v59: any = rt.setLocal(213, 31, _v58);
                              acc = _v59;
                              _v49 = _v59;
                              break _branch50;
                            }
                            const _v60: any = 0;
                            acc = _v60;
                            const _v61: any = 2;
                            acc = _v61;
                            const _v62: any = await rt.call(213, "Random", [_v60, _v61], this);
                            acc = _v62;
                            const _v63: any = rt.op("not", ...[_v62]);
                            acc = _v63;
                            _v49 = _v63;
                            acc = _v49;
                            if (rt.truth(_v49)) {
                              const _v64: any = (temps[0] ?? 0);
                              acc = _v64;
                              const _v65: any = rt.setLocal(213, 31, _v64);
                              acc = _v65;
                              _v49 = _v65;
                              break _branch50;
                            }
                          }
                          acc = _v49;
                          _v36 = _v49;
                        }
                        acc = _v36;
                      }
                      const _v66: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
                      acc = _v66;
                    }
                    _v22 = acc;
                    const _v67: any = rt.local(213, 31);
                    acc = _v67;
                    const _v68: any = 1;
                    acc = _v68;
                    const _v69: any = rt.op("+", ...[_v67, _v68]);
                    acc = _v69;
                    const _v70: any = rt.setLocal(213, 33, _v69);
                    acc = _v70;
                    _v22 = _v70;
                    let _v71: any = acc;
                    let _v72: any = 0;
                    if (!rt.truth(_v72)) {
                      let _v73: any = 1;
                      if (rt.truth(_v73)) {
                        const _v74: any = rt.local(213, 32);
                        acc = _v74;
                        const _v75: any = 1;
                        acc = _v75;
                        const _v76: any = rt.op("==", ...[_v74, _v75]);
                        acc = _v76;
                        _v73 = _v76;
                      }
                      if (rt.truth(_v73)) {
                        const _v77: any = 0;
                        acc = _v77;
                        const _v78: any = 5;
                        acc = _v78;
                        const _v79: any = await rt.call(213, "Random", [_v77, _v78], this);
                        acc = _v79;
                        const _v80: any = rt.op("not", ...[_v79]);
                        acc = _v80;
                        _v73 = _v80;
                      }
                      acc = _v73;
                      _v72 = _v73;
                    }
                    if (!rt.truth(_v72)) {
                      const _v81: any = rt.local(213, 32);
                      acc = _v81;
                      const _v82: any = 1;
                      acc = _v82;
                      const _v83: any = rt.op("<", ...[_v81, _v82]);
                      acc = _v83;
                      _v72 = _v83;
                    }
                    acc = _v72;
                    _v71 = _v72;
                    if (rt.truth(_v72)) {
                      const _v84: any = 0;
                      acc = _v84;
                      const _v85: any = rt.setLocal(213, 33, _v84);
                      acc = _v85;
                      _v71 = _v85;
                    }
                    acc = _v71;
                    _v22 = _v71;
                    const _v86: any = rt.local(213, 33);
                    acc = _v86;
                    const _v87: any = await rt.call(213, "localproc_3", [_v86], this);
                    acc = _v87;
                    const _v88: any = rt.setLocal(213, 34, _v87);
                    acc = _v88;
                    _v22 = _v88;
                    const _v89: any = rt.local(213, 34);
                    acc = _v89;
                    const _v90: any = await rt.send(_v89, "key", []);
                    acc = _v90;
                    const _v91: any = (args[0] ?? 0);
                    acc = _v91;
                    const _v92: any = await rt.send(_v91, "message", [_v90]);
                    acc = _v92;
                    _v22 = _v92;
                    let _v93: any = acc;
                    const _v94: any = rt.global(372);
                    acc = _v94;
                    const _v95: any = 4;
                    acc = _v95;
                    const _v96: any = rt.op("mod", ...[_v94, _v95]);
                    acc = _v96;
                    const _v97: any = 3;
                    acc = _v97;
                    const _v98: any = rt.op("==", ...[_v96, _v97]);
                    acc = _v98;
                    _v93 = _v98;
                    if (rt.truth(_v98)) {
                      const _v99: any = 800;
                      acc = _v99;
                      _v93 = _v99;
                    } else {
                      const _v100: any = 500;
                      acc = _v100;
                      _v93 = _v100;
                    }
                    acc = _v93;
                    const _v101: any = rt.setLocal(213, 35, _v93);
                    acc = _v101;
                    _v22 = _v101;
                  }
                  acc = _v22;
                  _v18 = _v22;
                  break _branch20;
                }
                const _v102: any = 3;
                acc = _v102;
                _v18 = rt.op("==", _v19, _v102);
                acc = _v18;
                if (rt.truth(_v18)) {
                  let _v103: any = acc;
                  let _v104: any = 1;
                  if (rt.truth(_v104)) {
                    const _v105: any = 19;
                    acc = _v105;
                    const _v106: any = await rt.call(0, "proc0_6", [_v105], this);
                    acc = _v106;
                    _v104 = _v106;
                  }
                  if (rt.truth(_v104)) {
                    const _v107: any = await rt.call(0, "proc0_11", [], this);
                    acc = _v107;
                    const _v108: any = rt.local(213, 33);
                    acc = _v108;
                    const _v109: any = await rt.call(213, "localproc_3", [_v108], this);
                    acc = _v109;
                    const _v110: any = await rt.send(_v109, "price", []);
                    acc = _v110;
                    const _v111: any = rt.op(">=", ...[_v107, _v110]);
                    acc = _v111;
                    _v104 = _v111;
                  }
                  acc = _v104;
                  _v103 = _v104;
                  if (rt.truth(_v104)) {
                    const _v112: any = 1;
                    acc = _v112;
                    const _v113: any = rt.setGlobal(525, _v112);
                    acc = _v113;
                    _v103 = _v113;
                    const _v114: any = 1;
                    acc = _v114;
                    const _v115: any = rt.setGlobal(485, _v114);
                    acc = _v115;
                    _v103 = _v115;
                    const _v116: any = rt.object(213, "buyButton");
                    acc = _v116;
                    const _v117: any = await rt.send(_v116, "key", []);
                    acc = _v117;
                    const _v118: any = (args[0] ?? 0);
                    acc = _v118;
                    const _v119: any = await rt.send(_v118, "message", [_v117]);
                    acc = _v119;
                    _v103 = _v119;
                    let _v120: any = acc;
                    const _v121: any = await rt.call(0, "proc0_11", [], this);
                    acc = _v121;
                    const _v122: any = rt.local(213, 35);
                    acc = _v122;
                    const _v123: any = rt.op(">", ...[_v121, _v122]);
                    acc = _v123;
                    _v120 = _v123;
                    if (rt.truth(_v123)) {
                      const _v124: any = 3;
                      acc = _v124;
                      const _v125: any = rt.setLocal(213, 37, _v124);
                      acc = _v125;
                      _v120 = _v125;
                    }
                    acc = _v120;
                    _v103 = _v120;
                  }
                  acc = _v103;
                  _v18 = _v103;
                  break _branch20;
                }
                const _v126: any = 4;
                acc = _v126;
                _v18 = rt.op("==", _v19, _v126);
                acc = _v18;
                if (rt.truth(_v18)) {
                  let _v127: any = acc;
                  const _v128: any = 20;
                  acc = _v128;
                  const _v129: any = await rt.call(0, "proc0_6", [_v128], this);
                  acc = _v129;
                  _v127 = _v129;
                  if (rt.truth(_v129)) {
                    let _v130: any = acc;
                    const _v131: any = rt.global(408);
                    acc = _v131;
                    const _v132: any = -1;
                    acc = _v132;
                    const _v133: any = rt.op("==", ...[_v131, _v132]);
                    acc = _v133;
                    _v130 = _v133;
                    if (rt.truth(_v133)) {
                      const _v134: any = 0;
                      acc = _v134;
                      const _v135: any = rt.setLocal(213, 36, _v134);
                      acc = _v135;
                      _v130 = _v135;
                      const _v136: any = 7;
                      acc = _v136;
                      const _v137: any = rt.setLocal(213, 37, _v136);
                      acc = _v137;
                      _v130 = _v137;
                    } else {
                      const _v138: any = 60;
                      acc = _v138;
                      const _v139: any = rt.set(this, "cycles", _v138);
                      acc = _v139;
                      _v130 = _v139;
                      const _v140: any = 0;
                      acc = _v140;
                      const _v141: any = rt.setLocal(213, 31, _v140);
                      acc = _v141;
                      const _v142: any = (temps[0] = _v141);
                      acc = _v142;
                      _v130 = _v142;
                      const _v143: any = 7;
                      acc = _v143;
                      const _v144: any = rt.setLocal(213, 32, _v143);
                      acc = _v144;
                      _v130 = _v144;
                      _loop145: for (;;) {
                        const _v147: any = (temps[0] ?? 0);
                        acc = _v147;
                        const _v148: any = 6;
                        acc = _v148;
                        const _v149: any = rt.op("<", ...[_v147, _v148]);
                        acc = _v149;
                        if (!rt.truth(_v149)) break _loop145;
                        _continue146: {
                          let _v150: any = acc;
                          const _v151: any = (temps[0] ?? 0);
                          acc = _v151;
                          const _v152: any = rt.global(302);
                          acc = _v152;
                          const _v153: any = await rt.send(_v152, "investments", []);
                          acc = _v153;
                          const _v154: any = await rt.send(_v153, "at", [_v151]);
                          acc = _v154;
                          const _v155: any = await rt.send(_v154, "shares", []);
                          acc = _v155;
                          _v150 = _v155;
                          if (rt.truth(_v155)) {
                            let _v156: any = acc;
                            _branch157: {
                              const _v158: any = (temps[0] ?? 0);
                              acc = _v158;
                              const _v159: any = rt.op("not", ...[_v158]);
                              acc = _v159;
                              _v156 = _v159;
                              acc = _v156;
                              if (rt.truth(_v156)) {
                                const _v160: any = 0;
                                acc = _v160;
                                const _v161: any = rt.setLocal(213, 32, _v160);
                                acc = _v161;
                                _v156 = _v161;
                                break _branch157;
                              }
                              const _v162: any = (temps[0] ?? 0);
                              acc = _v162;
                              const _v163: any = 1;
                              acc = _v163;
                              const _v164: any = rt.op("-", ...[_v162, _v163]);
                              acc = _v164;
                              const _v165: any = rt.global((318 + (Number(_v164) & 65535)));
                              acc = _v165;
                              const _v166: any = rt.local(213, 32);
                              acc = _v166;
                              const _v167: any = rt.op("<=", ...[_v165, _v166]);
                              acc = _v167;
                              _v156 = _v167;
                              acc = _v156;
                              if (rt.truth(_v156)) {
                                let _v168: any = acc;
                                _branch169: {
                                  const _v170: any = (temps[0] ?? 0);
                                  acc = _v170;
                                  const _v171: any = 1;
                                  acc = _v171;
                                  const _v172: any = rt.op("-", ...[_v170, _v171]);
                                  acc = _v172;
                                  const _v173: any = rt.global((318 + (Number(_v172) & 65535)));
                                  acc = _v173;
                                  const _v174: any = rt.local(213, 32);
                                  acc = _v174;
                                  const _v175: any = rt.op("<", ...[_v173, _v174]);
                                  acc = _v175;
                                  _v168 = _v175;
                                  acc = _v168;
                                  if (rt.truth(_v168)) {
                                    const _v176: any = (temps[0] ?? 0);
                                    acc = _v176;
                                    const _v177: any = 1;
                                    acc = _v177;
                                    const _v178: any = rt.op("-", ...[_v176, _v177]);
                                    acc = _v178;
                                    const _v179: any = rt.global((318 + (Number(_v178) & 65535)));
                                    acc = _v179;
                                    const _v180: any = rt.setLocal(213, 32, _v179);
                                    acc = _v180;
                                    _v168 = _v180;
                                    const _v181: any = (temps[0] ?? 0);
                                    acc = _v181;
                                    const _v182: any = rt.setLocal(213, 31, _v181);
                                    acc = _v182;
                                    _v168 = _v182;
                                    break _branch169;
                                  }
                                  const _v183: any = 0;
                                  acc = _v183;
                                  const _v184: any = 2;
                                  acc = _v184;
                                  const _v185: any = await rt.call(213, "Random", [_v183, _v184], this);
                                  acc = _v185;
                                  const _v186: any = rt.op("not", ...[_v185]);
                                  acc = _v186;
                                  _v168 = _v186;
                                  acc = _v168;
                                  if (rt.truth(_v168)) {
                                    const _v187: any = (temps[0] ?? 0);
                                    acc = _v187;
                                    const _v188: any = rt.setLocal(213, 31, _v187);
                                    acc = _v188;
                                    _v168 = _v188;
                                    break _branch169;
                                  }
                                }
                                acc = _v168;
                                _v156 = _v168;
                                break _branch157;
                              }
                            }
                            acc = _v156;
                            _v150 = _v156;
                          }
                          acc = _v150;
                          const _v189: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
                          acc = _v189;
                        }
                      }
                      _v130 = acc;
                      const _v190: any = rt.local(213, 31);
                      acc = _v190;
                      const _v191: any = await rt.call(213, "localproc_3", [_v190], this);
                      acc = _v191;
                      const _v192: any = rt.setLocal(213, 34, _v191);
                      acc = _v192;
                      _v130 = _v192;
                      const _v193: any = rt.local(213, 34);
                      acc = _v193;
                      const _v194: any = await rt.send(_v193, "key", []);
                      acc = _v194;
                      const _v195: any = (args[0] ?? 0);
                      acc = _v195;
                      const _v196: any = await rt.send(_v195, "message", [_v194]);
                      acc = _v196;
                      _v130 = _v196;
                    }
                    acc = _v130;
                    _v127 = _v130;
                  }
                  acc = _v127;
                  _v18 = _v127;
                  break _branch20;
                }
                const _v197: any = 5;
                acc = _v197;
                _v18 = rt.op("==", _v19, _v197);
                acc = _v18;
                if (rt.truth(_v18)) {
                  let _v198: any = acc;
                  const _v199: any = 20;
                  acc = _v199;
                  const _v200: any = await rt.call(0, "proc0_6", [_v199], this);
                  acc = _v200;
                  _v198 = _v200;
                  if (rt.truth(_v200)) {
                    const _v201: any = 1;
                    acc = _v201;
                    const _v202: any = rt.setGlobal(525, _v201);
                    acc = _v202;
                    _v198 = _v202;
                    let _v203: any = acc;
                    const _v204: any = await rt.call(0, "proc0_11", [], this);
                    acc = _v204;
                    const _v205: any = rt.global(408);
                    acc = _v205;
                    const _v206: any = rt.op("<", ...[_v204, _v205]);
                    acc = _v206;
                    _v203 = _v206;
                    if (rt.truth(_v206)) {
                      const _v207: any = 5;
                      acc = _v207;
                      const _v208: any = rt.setLocal(213, 37, _v207);
                      acc = _v208;
                      _v203 = _v208;
                      let _v209: any = acc;
                      const _v210: any = rt.local(213, 31);
                      acc = _v210;
                      const _v211: any = rt.global(302);
                      acc = _v211;
                      const _v212: any = await rt.send(_v211, "investments", []);
                      acc = _v212;
                      const _v213: any = await rt.send(_v212, "at", [_v210]);
                      acc = _v213;
                      const _v214: any = await rt.send(_v213, "shares", []);
                      acc = _v214;
                      const _v215: any = 1;
                      acc = _v215;
                      const _v216: any = rt.op("==", ...[_v214, _v215]);
                      acc = _v216;
                      _v209 = _v216;
                      if (rt.truth(_v216)) {
                        const _v217: any = 4;
                        acc = _v217;
                        const _v218: any = rt.setLocal(213, 37, _v217);
                        acc = _v218;
                        _v209 = _v218;
                      }
                      acc = _v209;
                      _v203 = _v209;
                    }
                    acc = _v203;
                    _v198 = _v203;
                    const _v219: any = rt.object(213, "sellButton");
                    acc = _v219;
                    const _v220: any = await rt.send(_v219, "key", []);
                    acc = _v220;
                    const _v221: any = (args[0] ?? 0);
                    acc = _v221;
                    const _v222: any = await rt.send(_v221, "message", [_v220]);
                    acc = _v222;
                    _v198 = _v222;
                  }
                  acc = _v198;
                  _v18 = _v198;
                  break _branch20;
                }
                const _v223: any = 6;
                acc = _v223;
                _v18 = rt.op("==", _v19, _v223);
                acc = _v18;
                if (rt.truth(_v18)) {
                  let _v224: any = acc;
                  let _v225: any = 1;
                  if (rt.truth(_v225)) {
                    const _v226: any = 20;
                    acc = _v226;
                    const _v227: any = await rt.call(0, "proc0_6", [_v226], this);
                    acc = _v227;
                    _v225 = _v227;
                  }
                  if (rt.truth(_v225)) {
                    const _v228: any = rt.global(408);
                    acc = _v228;
                    const _v229: any = -1;
                    acc = _v229;
                    const _v230: any = rt.op("==", ...[_v228, _v229]);
                    acc = _v230;
                    _v225 = _v230;
                  }
                  acc = _v225;
                  _v224 = _v225;
                  if (rt.truth(_v225)) {
                    const _v231: any = 0;
                    acc = _v231;
                    const _v232: any = (args[0] ?? 0);
                    acc = _v232;
                    const _v233: any = await rt.send(_v232, "message", [_v231]);
                    acc = _v233;
                    _v224 = _v233;
                    const _v236: any = 1;
                    acc = _v236;
                    const _v237: any = rt.setLocal(213, 36, _v236);
                    acc = _v237;
                    _loop234: for (;;) {
                      const _v238: any = rt.local(213, 36);
                      acc = _v238;
                      const _v239: any = 6;
                      acc = _v239;
                      const _v240: any = rt.op("<", ...[_v238, _v239]);
                      acc = _v240;
                      if (!rt.truth(_v240)) break _loop234;
                      _continue235: {
                        let _v241: any = acc;
                        let _v242: any = 1;
                        if (rt.truth(_v242)) {
                          const _v243: any = rt.local(213, 36);
                          acc = _v243;
                          const _v244: any = rt.global(302);
                          acc = _v244;
                          const _v245: any = await rt.send(_v244, "investments", []);
                          acc = _v245;
                          const _v246: any = await rt.send(_v245, "at", [_v243]);
                          acc = _v246;
                          const _v247: any = await rt.send(_v246, "shares", []);
                          acc = _v247;
                          _v242 = _v247;
                        }
                        if (rt.truth(_v242)) {
                          const _v248: any = rt.local(213, 36);
                          acc = _v248;
                          const _v249: any = 1;
                          acc = _v249;
                          const _v250: any = rt.op("-", ...[_v248, _v249]);
                          acc = _v250;
                          const _v251: any = rt.global((318 + (Number(_v250) & 65535)));
                          acc = _v251;
                          const _v252: any = -1;
                          acc = _v252;
                          const _v253: any = rt.op("<=", ...[_v251, _v252]);
                          acc = _v253;
                          _v242 = _v253;
                        }
                        acc = _v242;
                        _v241 = _v242;
                        if (rt.truth(_v242)) {
                          const _v254: any = rt.local(213, 36);
                          acc = _v254;
                          const _v255: any = await rt.call(213, "localproc_3", [_v254], this);
                          acc = _v255;
                          const _v256: any = rt.setLocal(213, 34, _v255);
                          acc = _v256;
                          _v241 = _v256;
                          const _v257: any = 60;
                          acc = _v257;
                          const _v258: any = rt.set(this, "cycles", _v257);
                          acc = _v258;
                          _v241 = _v258;
                          const _v259: any = rt.local(213, 34);
                          acc = _v259;
                          const _v260: any = await rt.send(_v259, "key", []);
                          acc = _v260;
                          const _v261: any = (args[0] ?? 0);
                          acc = _v261;
                          const _v262: any = await rt.send(_v261, "message", [_v260]);
                          acc = _v262;
                          _v241 = _v262;
                          break _loop234;
                          _v241 = acc;
                        }
                        acc = _v241;
                      }
                      const _v263: any = rt.setLocal(213, 36, rt.op("+", rt.local(213, 36), 1));
                      acc = _v263;
                    }
                    _v224 = acc;
                    let _v264: any = acc;
                    const _v265: any = (args[0] ?? 0);
                    acc = _v265;
                    const _v266: any = await rt.send(_v265, "message", []);
                    acc = _v266;
                    const _v267: any = rt.op("not", ...[_v266]);
                    acc = _v267;
                    _v264 = _v267;
                    if (rt.truth(_v267)) {
                      const _v268: any = 9;
                      acc = _v268;
                      const _v269: any = rt.setLocal(213, 37, _v268);
                      acc = _v269;
                      _v264 = _v269;
                    }
                    acc = _v264;
                    _v224 = _v264;
                  }
                  acc = _v224;
                  _v18 = _v224;
                  break _branch20;
                }
                const _v270: any = 7;
                acc = _v270;
                _v18 = rt.op("==", _v19, _v270);
                acc = _v18;
                if (rt.truth(_v18)) {
                  let _v271: any = acc;
                  let _v272: any = 1;
                  if (rt.truth(_v272)) {
                    const _v273: any = 20;
                    acc = _v273;
                    const _v274: any = await rt.call(0, "proc0_6", [_v273], this);
                    acc = _v274;
                    _v272 = _v274;
                  }
                  if (rt.truth(_v272)) {
                    const _v275: any = rt.global(408);
                    acc = _v275;
                    const _v276: any = -1;
                    acc = _v276;
                    const _v277: any = rt.op("==", ...[_v275, _v276]);
                    acc = _v277;
                    _v272 = _v277;
                  }
                  if (rt.truth(_v272)) {
                    const _v278: any = 0;
                    acc = _v278;
                    let _v279: any = _v278;
                    let _v280: any = 1;
                    if (rt.truth(_v280)) {
                      const _v281: any = rt.local(213, 36);
                      acc = _v281;
                      _v280 = rt.op("<=", _v279, _v281);
                      _v279 = _v281;
                    }
                    if (rt.truth(_v280)) {
                      const _v282: any = 5;
                      acc = _v282;
                      _v280 = rt.op("<=", _v279, _v282);
                      _v279 = _v282;
                    }
                    acc = _v280;
                    _v272 = _v280;
                  }
                  acc = _v272;
                  _v271 = _v272;
                  if (rt.truth(_v272)) {
                    const _v283: any = 1;
                    acc = _v283;
                    const _v284: any = rt.setGlobal(525, _v283);
                    acc = _v284;
                    _v271 = _v284;
                    let _v285: any = acc;
                    const _v286: any = rt.local(213, 36);
                    acc = _v286;
                    const _v287: any = rt.global(302);
                    acc = _v287;
                    const _v288: any = await rt.send(_v287, "investments", []);
                    acc = _v288;
                    const _v289: any = await rt.send(_v288, "at", [_v286]);
                    acc = _v289;
                    const _v290: any = await rt.send(_v289, "shares", []);
                    acc = _v290;
                    const _v291: any = 1;
                    acc = _v291;
                    const _v292: any = rt.op(">", ...[_v290, _v291]);
                    acc = _v292;
                    _v285 = _v292;
                    if (rt.truth(_v292)) {
                      const _v293: any = 7;
                      acc = _v293;
                      const _v294: any = rt.setLocal(213, 37, _v293);
                      acc = _v294;
                      _v285 = _v294;
                    } else {
                      const _v295: any = 6;
                      acc = _v295;
                      const _v296: any = rt.setLocal(213, 37, _v295);
                      acc = _v296;
                      _v285 = _v296;
                    }
                    acc = _v285;
                    _v271 = _v285;
                    const _v297: any = 1;
                    acc = _v297;
                    const _v298: any = rt.setGlobal(503, _v297);
                    acc = _v298;
                    _v271 = _v298;
                    const _v299: any = rt.object(213, "sellButton");
                    acc = _v299;
                    const _v300: any = await rt.send(_v299, "key", []);
                    acc = _v300;
                    const _v301: any = (args[0] ?? 0);
                    acc = _v301;
                    const _v302: any = await rt.send(_v301, "message", [_v300]);
                    acc = _v302;
                    _v271 = _v302;
                  }
                  acc = _v271;
                  _v18 = _v271;
                  break _branch20;
                }
                const _v303: any = 19;
                acc = _v303;
                _v18 = rt.op("==", _v19, _v303);
                acc = _v18;
                if (rt.truth(_v18)) {
                  const _v304: any = rt.global(302);
                  acc = _v304;
                  const _v305: any = 300;
                  acc = _v305;
                  const _v306: any = 0;
                  acc = _v306;
                  const _v307: any = await rt.call(213, "ScriptID", [_v305, _v306], this);
                  acc = _v307;
                  const _v308: any = await rt.send(_v307, "doit", [_v304]);
                  acc = _v308;
                  const _v309: any = rt.setGlobal(401, _v308);
                  acc = _v309;
                  _v18 = _v309;
                  let _v310: any = acc;
                  let _v311: any = 1;
                  if (rt.truth(_v311)) {
                    const _v312: any = rt.global(323);
                    acc = _v312;
                    const _v313: any = 60;
                    acc = _v313;
                    const _v314: any = rt.op("<", ...[_v312, _v313]);
                    acc = _v314;
                    _v311 = _v314;
                  }
                  if (rt.truth(_v311)) {
                    const _v315: any = rt.global(401);
                    acc = _v315;
                    const _v316: any = rt.global(400);
                    acc = _v316;
                    const _v317: any = rt.op("==", ...[_v315, _v316]);
                    acc = _v317;
                    _v311 = _v317;
                  }
                  if (rt.truth(_v311)) {
                    let _v318: any = 0;
                    if (!rt.truth(_v318)) {
                      const _v319: any = rt.global(407);
                      acc = _v319;
                      const _v320: any = 19;
                      acc = _v320;
                      const _v321: any = rt.op("==", ...[_v319, _v320]);
                      acc = _v321;
                      _v318 = _v321;
                    }
                    if (!rt.truth(_v318)) {
                      const _v322: any = rt.global(407);
                      acc = _v322;
                      const _v323: any = 20;
                      acc = _v323;
                      const _v324: any = rt.op("==", ...[_v322, _v323]);
                      acc = _v324;
                      _v318 = _v324;
                    }
                    acc = _v318;
                    _v311 = _v318;
                  }
                  acc = _v311;
                  _v310 = _v311;
                  if (rt.truth(_v311)) {
                    const _v325: any = 0;
                    acc = _v325;
                    const _v326: any = rt.set(this, "state", _v325);
                    acc = _v326;
                    _v310 = _v326;
                  }
                  acc = _v310;
                  _v18 = _v310;
                  break _branch20;
                }
                const _v327: any = (args[0] ?? 0);
                acc = _v327;
                const _v328: any = 0;
                acc = _v328;
                const _v329: any = await rt.superSend(this, {"script": 213, "name": "computerScript"}, "handleEvent", [_v327, _v328]);
                acc = _v329;
                _v18 = _v329;
                break _branch20;
              }
              acc = _v18;
              _v1 = _v18;
            }
            acc = _v1;
            return acc;
          },
          // SCI broker.sc: computerScript.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.setGlobal(525, _v1);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.local(213, 37);
            acc = _v4;
            const _v5: any = 0;
            acc = _v5;
            const _v6: any = rt.op(">=", ...[_v4, _v5]);
            acc = _v6;
            _v3 = _v6;
            if (rt.truth(_v6)) {
              const _v7: any = rt.local(213, 37);
              acc = _v7;
              _v3 = _v7;
            } else {
              const _v8: any = rt.get(this, "state");
              acc = _v8;
              const _v9: any = 1;
              acc = _v9;
              const _v10: any = rt.op("+", ...[_v8, _v9]);
              acc = _v10;
              _v3 = _v10;
            }
            acc = _v3;
            const _v11: any = rt.set(this, "state", _v3);
            acc = _v11;
            const _v12: any = 1;
            acc = _v12;
            const _v13: any = rt.set(this, "register", _v12);
            acc = _v13;
            return acc;
          },
        },
      },
    ],
    procedures: {
      // SCI broker.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0];
        const _v1: any = 0;
        acc = _v1;
        const _v2: any = (temps[0] = _v1);
        acc = _v2;
        let _v3: any = acc;
        let _v4: any = acc;
        const _v5: any = (args[0] ?? 0);
        acc = _v5;
        _branch6: {
          const _v7: any = 0;
          acc = _v7;
          _v4 = rt.op("==", _v5, _v7);
          acc = _v4;
          if (rt.truth(_v4)) {
            const _v8: any = rt.object(213, "tBillsHoldings");
            acc = _v8;
            _v4 = _v8;
            break _branch6;
          }
          const _v9: any = 1;
          acc = _v9;
          _v4 = rt.op("==", _v5, _v9);
          acc = _v4;
          if (rt.truth(_v4)) {
            const _v10: any = rt.object(213, "goldHoldings");
            acc = _v10;
            _v4 = _v10;
            break _branch6;
          }
          const _v11: any = 2;
          acc = _v11;
          _v4 = rt.op("==", _v5, _v11);
          acc = _v4;
          if (rt.truth(_v4)) {
            const _v12: any = rt.object(213, "silverHoldings");
            acc = _v12;
            _v4 = _v12;
            break _branch6;
          }
          const _v13: any = 3;
          acc = _v13;
          _v4 = rt.op("==", _v5, _v13);
          acc = _v4;
          if (rt.truth(_v4)) {
            const _v14: any = rt.object(213, "porkBelliesHoldings");
            acc = _v14;
            _v4 = _v14;
            break _branch6;
          }
          const _v15: any = 4;
          acc = _v15;
          _v4 = rt.op("==", _v5, _v15);
          acc = _v4;
          if (rt.truth(_v4)) {
            const _v16: any = rt.object(213, "blueChipStocksHoldings");
            acc = _v16;
            _v4 = _v16;
            break _branch6;
          }
          const _v17: any = 5;
          acc = _v17;
          _v4 = rt.op("==", _v5, _v17);
          acc = _v4;
          if (rt.truth(_v4)) {
            const _v18: any = rt.object(213, "pennyStocksHoldings");
            acc = _v18;
            _v4 = _v18;
            break _branch6;
          }
        }
        acc = _v4;
        const _v19: any = (temps[0] = _v4);
        acc = _v19;
        _v3 = _v19;
        if (rt.truth(_v19)) {
          const _v20: any = (temps[0] ?? 0);
          acc = _v20;
          const _v21: any = await rt.send(_v20, "erase", []);
          acc = _v21;
          const _v22: any = await rt.send(_v20, "init", []);
          acc = _v22;
          const _v23: any = await rt.send(_v20, "draw", []);
          acc = _v23;
          _v3 = _v23;
        }
        acc = _v3;
        return acc;
      },
      // SCI broker.sc: localproc_1
      "localproc_1": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const _v1: any = rt.ref("array", temps, 0);
        acc = _v1;
        const _v2: any = 213;
        acc = _v2;
        const _v3: any = 8;
        acc = _v3;
        const _v4: any = (args[1] ?? 0);
        acc = _v4;
        const _v5: any = await rt.call(213, "Format", [_v1, _v2, _v3, _v4], this);
        acc = _v5;
        const _v6: any = (args[0] ?? 0);
        acc = _v6;
        const _v7: any = 213;
        acc = _v7;
        const _v8: any = 9;
        acc = _v8;
        const _v9: any = rt.ref("array", temps, 0);
        acc = _v9;
        const _v10: any = await rt.call(213, "Format", [_v6, _v7, _v8, _v9], this);
        acc = _v10;
        return acc;
      },
      // SCI broker.sc: localproc_2
      "localproc_2": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const _v1: any = rt.ref("array", temps, 0);
        acc = _v1;
        const _v2: any = 213;
        acc = _v2;
        const _v3: any = 10;
        acc = _v3;
        const _v4: any = (args[1] ?? 0);
        acc = _v4;
        const _v5: any = await rt.call(213, "Format", [_v1, _v2, _v3, _v4], this);
        acc = _v5;
        const _v6: any = (args[0] ?? 0);
        acc = _v6;
        const _v7: any = 213;
        acc = _v7;
        const _v8: any = 11;
        acc = _v8;
        const _v9: any = rt.ref("array", temps, 0);
        acc = _v9;
        const _v10: any = await rt.call(213, "Format", [_v6, _v7, _v8, _v9], this);
        acc = _v10;
        return acc;
      },
      // SCI broker.sc: localproc_3
      "localproc_3": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        let _v1: any = acc;
        const _v2: any = (args[0] ?? 0);
        acc = _v2;
        _branch3: {
          const _v4: any = 0;
          acc = _v4;
          _v1 = rt.op("==", _v2, _v4);
          acc = _v1;
          if (rt.truth(_v1)) {
            const _v5: any = rt.object(213, "tBills");
            acc = _v5;
            _v1 = _v5;
            break _branch3;
          }
          const _v6: any = 1;
          acc = _v6;
          _v1 = rt.op("==", _v2, _v6);
          acc = _v1;
          if (rt.truth(_v1)) {
            const _v7: any = rt.object(213, "gold");
            acc = _v7;
            _v1 = _v7;
            break _branch3;
          }
          const _v8: any = 2;
          acc = _v8;
          _v1 = rt.op("==", _v2, _v8);
          acc = _v1;
          if (rt.truth(_v1)) {
            const _v9: any = rt.object(213, "silver");
            acc = _v9;
            _v1 = _v9;
            break _branch3;
          }
          const _v10: any = 3;
          acc = _v10;
          _v1 = rt.op("==", _v2, _v10);
          acc = _v1;
          if (rt.truth(_v1)) {
            const _v11: any = rt.object(213, "porkBellies");
            acc = _v11;
            _v1 = _v11;
            break _branch3;
          }
          const _v12: any = 4;
          acc = _v12;
          _v1 = rt.op("==", _v2, _v12);
          acc = _v1;
          if (rt.truth(_v1)) {
            const _v13: any = rt.object(213, "blueChipStocks");
            acc = _v13;
            _v1 = _v13;
            break _branch3;
          }
          const _v14: any = rt.object(213, "pennyStocks");
          acc = _v14;
          _v1 = _v14;
          break _branch3;
        }
        acc = _v1;
        return _v1;
        return acc;
      },
    },
    exports: {"0": "broker"},
  });
}
