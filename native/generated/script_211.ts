// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/discount.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 0c9d5a5bacea6230eb3d48c6957ee7f1ef13e22f0b9f1227dbd82f899c18174c
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(211, {
    name: "discount",
    uses: [0, 104, 108, 110, 255, 891, 967, 992, 996, 999],
    locals: [0, 0, 0, 0, 0, 0, 0, -1],
    objects: [
      {
        name: "boughtItem",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: false,
        properties: {},
        methods: {
          // SCI discount.sc: boughtItem.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            _loop1: for (;;) {
              const _v3: any = rt.local(211, 7);
              acc = _v3;
              const _v4: any = 11;
              acc = _v4;
              const _v5: any = 26;
              acc = _v5;
              const _v6: any = await rt.call(211, "Random", [_v4, _v5], this);
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
            const _v11: any = rt.setLocal(211, 7, _v10);
            acc = _v11;
            const _v12: any = 211;
            acc = _v12;
            const _v13: any = rt.local(211, 7);
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
          // SCI discount.sc: notEnoughCash.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 16;
            acc = _v1;
            const _v2: any = rt.global(413);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "init", [_v1]);
            acc = _v3;
            const _v4: any = 211;
            acc = _v4;
            const _v5: any = 27;
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
        name: "FS",
        className: "Cycle",
        parent: {"script": 992, "name": "Cycle"},
        isClass: true,
        properties: {"count": 0},
        methods: {
          // SCI discount.sc: FS.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = await rt.superSend(this, {"script": 211, "name": "FS"}, "init", [_v1]);
            acc = _v2;
            const _v3: any = (args[1] ?? 0);
            acc = _v3;
            const _v4: any = rt.set(this, "caller", _v3);
            acc = _v4;
            const _v5: any = 0;
            acc = _v5;
            const _v6: any = rt.set(this, "cycleCnt", _v5);
            acc = _v6;
            const _v7: any = rt.set(this, "count", _v6);
            acc = _v7;
            return acc;
          },
          // SCI discount.sc: FS.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.set(this, "cycleCnt", rt.op("+", rt.get(this, "cycleCnt"), 1));
            acc = _v1;
            let _v2: any = acc;
            const _v3: any = rt.get(this, "cycleCnt");
            acc = _v3;
            const _v4: any = rt.get(this, "client");
            acc = _v4;
            const _v5: any = await rt.send(_v4, "cycleSpeed", []);
            acc = _v5;
            const _v6: any = rt.op(">", ...[_v3, _v5]);
            acc = _v6;
            _v2 = _v6;
            if (rt.truth(_v6)) {
              const _v7: any = 0;
              acc = _v7;
              const _v8: any = rt.set(this, "cycleCnt", _v7);
              acc = _v8;
              _v2 = _v8;
              let _v9: any = acc;
              const _v10: any = rt.set(this, "count", rt.op("+", rt.get(this, "count"), 1));
              acc = _v10;
              const _v11: any = rt.get(this, "client");
              acc = _v11;
              const _v12: any = await rt.send(_v11, "lastCel", []);
              acc = _v12;
              const _v13: any = rt.op(">", ...[_v10, _v12]);
              acc = _v13;
              _v9 = _v13;
              if (rt.truth(_v13)) {
                const _v14: any = 0;
                acc = _v14;
                const _v15: any = rt.set(this, "count", _v14);
                acc = _v15;
                _v9 = _v15;
              }
              acc = _v9;
              _v2 = _v9;
              const _v16: any = rt.get(this, "count");
              acc = _v16;
              const _v17: any = this;
              acc = _v17;
              const _v18: any = await rt.send(_v17, "next", [_v16]);
              acc = _v18;
              const _v19: any = rt.get(this, "client");
              acc = _v19;
              const _v20: any = await rt.send(_v19, "cel", [_v18]);
              acc = _v20;
              _v2 = _v20;
            }
            acc = _v2;
            return acc;
          },
          // SCI discount.sc: FS.next
          "next": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = rt.get(this, "count");
            acc = _v2;
            const _v3: any = rt.local(211, (0 + (Number(_v2) & 65535)));
            acc = _v3;
            const _v4: any = (temps[0] = _v3);
            acc = _v4;
            const _v5: any = 16;
            acc = _v5;
            const _v6: any = rt.op("<", ...[_v4, _v5]);
            acc = _v6;
            _v1 = _v6;
            if (rt.truth(_v6)) {
              const _v7: any = 1;
              acc = _v7;
              const _v8: any = rt.get(this, "caller");
              acc = _v8;
              const _v9: any = await rt.send(_v8, "loop", [_v7]);
              acc = _v9;
              _v1 = _v9;
              const _v10: any = (temps[0] ?? 0);
              acc = _v10;
              return _v10;
              _v1 = acc;
            } else {
              const _v11: any = 2;
              acc = _v11;
              const _v12: any = rt.get(this, "caller");
              acc = _v12;
              const _v13: any = await rt.send(_v12, "loop", [_v11]);
              acc = _v13;
              _v1 = _v13;
              const _v14: any = (temps[0] ?? 0);
              acc = _v14;
              const _v15: any = 16;
              acc = _v15;
              const _v16: any = rt.op("mod", ...[_v14, _v15]);
              acc = _v16;
              return _v16;
              _v1 = acc;
            }
            acc = _v1;
            return acc;
          },
        },
      },
      {
        name: "DiscountDItem",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: true,
        properties: {},
        methods: {
          // SCI discount.sc: DiscountDItem.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 211, "name": "DiscountDItem"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(418);
              acc = _v5;
              _v4 = _v5;
            }
            if (rt.truth(_v4)) {
              const _v6: any = rt.global(416);
              acc = _v6;
              _v4 = _v6;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v7: any = rt.global(418);
              acc = _v7;
              const _v8: any = await rt.send(_v7, "attributes", []);
              acc = _v8;
              const _v9: any = 256;
              acc = _v9;
              const _v10: any = rt.op("|", ...[_v8, _v9]);
              acc = _v10;
              const _v11: any = rt.global(418);
              acc = _v11;
              const _v12: any = await rt.send(_v11, "attributes", [_v10]);
              acc = _v12;
              _v3 = _v12;
            }
            acc = _v3;
            const _v13: any = (temps[0] ?? 0);
            acc = _v13;
            return _v13;
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
        name: "discount",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI discount.sc: discount.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0];
            let _v1: any = acc;
            const _v2: any = rt.global(518);
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = 131;
              acc = _v4;
              const _v5: any = 211;
              acc = _v5;
              const _v6: any = await rt.call(211, "Load", [_v4, _v5], this);
              acc = _v6;
              _v1 = _v6;
              const _v7: any = 1;
              acc = _v7;
              const _v8: any = await rt.call(0, "proc0_17", [_v7], this);
              acc = _v8;
              _v1 = _v8;
              const _v9: any = rt.object(211, "dialogKeyMouse");
              acc = _v9;
              const _v10: any = rt.set(this, "keyMouseList", _v9);
              acc = _v10;
              _v1 = _v10;
              const _v11: any = rt.global(502);
              acc = _v11;
              const _v12: any = rt.set(this, "prevDialog", _v11);
              acc = _v12;
              _v1 = _v12;
              const _v13: any = this;
              acc = _v13;
              const _v14: any = rt.setGlobal(502, _v13);
              acc = _v14;
              _v1 = _v14;
              const _v15: any = 0;
              acc = _v15;
              const _v16: any = rt.setLocal(211, 6, _v15);
              acc = _v16;
              _v1 = _v16;
              const _v17: any = 3;
              acc = _v17;
              const _v18: any = rt.setGlobal(440, _v17);
              acc = _v18;
              _v1 = _v18;
              const _v19: any = 209;
              acc = _v19;
              const _v20: any = rt.setGlobal(441, _v19);
              acc = _v20;
              _v1 = _v20;
              const _v21: any = 71;
              acc = _v21;
              const _v22: any = rt.setGlobal(442, _v21);
              acc = _v22;
              _v1 = _v22;
              let _v23: any = acc;
              const _v24: any = rt.global(534);
              acc = _v24;
              const _v25: any = 2;
              acc = _v25;
              const _v26: any = rt.op("<", ...[_v24, _v25]);
              acc = _v26;
              _v23 = _v26;
              if (rt.truth(_v26)) {
                const _v27: any = 128;
                acc = _v27;
                const _v28: any = rt.object(211, "theTalker");
                acc = _v28;
                const _v29: any = await rt.send(_v28, "view", []);
                acc = _v29;
                const _v30: any = await rt.call(211, "Load", [_v27, _v29], this);
                acc = _v30;
                _v23 = _v30;
              }
              acc = _v23;
              _v1 = _v23;
              const _v31: any = rt.object(211, "notEnoughCash");
              acc = _v31;
              const _v32: any = rt.setGlobal(424, _v31);
              acc = _v32;
              _v1 = _v32;
              const _v33: any = rt.object(211, "boughtItem");
              acc = _v33;
              const _v34: any = rt.setGlobal(425, _v33);
              acc = _v34;
              _v1 = _v34;
              const _v35: any = rt.object(211, "items");
              acc = _v35;
              const _v36: any = rt.setGlobal(434, _v35);
              acc = _v36;
              _v1 = _v36;
              const _v37: any = (args[0] ?? 0);
              acc = _v37;
              const _v38: any = rt.set(this, "client", _v37);
              acc = _v38;
              _v1 = _v38;
              const _v39: any = 2;
              acc = _v39;
              const _v40: any = rt.global(417);
              acc = _v40;
              const _v41: any = await rt.send(_v40, "doit", [_v39]);
              acc = _v41;
              _v1 = _v41;
              const _v42: any = 11;
              acc = _v42;
              const _v43: any = rt.setGlobal(400, _v42);
              acc = _v43;
              _v1 = _v43;
              const _v44: any = 1;
              acc = _v44;
              const _v45: any = rt.setGlobal(404, _v44);
              acc = _v45;
              _v1 = _v45;
              let _v46: any = acc;
              const _v47: any = rt.global(302);
              acc = _v47;
              const _v48: any = await rt.send(_v47, "playing", []);
              acc = _v48;
              const _v49: any = 29;
              acc = _v49;
              const _v50: any = rt.op("==", ...[_v48, _v49]);
              acc = _v50;
              _v46 = _v50;
              if (rt.truth(_v50)) {
                const _v51: any = rt.object(211, "computerScript");
                acc = _v51;
                const _v52: any = this;
                acc = _v52;
                const _v53: any = await rt.send(_v52, "setScript", [_v51]);
                acc = _v53;
                _v46 = _v53;
                const _v54: any = rt.object(211, "computerScript");
                acc = _v54;
                const _v55: any = await rt.send(_v54, "cue", []);
                acc = _v55;
                _v46 = _v55;
              }
              acc = _v46;
              _v1 = _v46;
              const _v56: any = rt.object(211, "background");
              acc = _v56;
              const _v57: any = rt.object(211, "theTalker");
              acc = _v57;
              const _v58: any = rt.object(211, "items");
              acc = _v58;
              const _v59: any = rt.object(211, "exitButton");
              acc = _v59;
              const _v60: any = rt.object(211, "refrigerator");
              acc = _v60;
              const _v61: any = rt.object(211, "stove");
              acc = _v61;
              const _v62: any = rt.object(211, "stereo");
              acc = _v62;
              const _v63: any = rt.object(211, "colorTV");
              acc = _v63;
              const _v64: any = rt.object(211, "bwTV");
              acc = _v64;
              const _v65: any = rt.object(211, "microwave");
              acc = _v65;
              const _v66: any = rt.object(211, "vcr");
              acc = _v66;
              const _v67: any = rt.object(211, "casualClothes");
              acc = _v67;
              const _v68: any = rt.object(211, "leisureSuit");
              acc = _v68;
              const _v69: any = rt.object(211, "baseballTickets");
              acc = _v69;
              const _v70: any = rt.object(211, "theatreTickets");
              acc = _v70;
              const _v71: any = rt.object(211, "concertTickets");
              acc = _v71;
              const _v72: any = rt.object(211, "encyclopedia");
              acc = _v72;
              const _v73: any = rt.object(211, "dictionary");
              acc = _v73;
              const _v74: any = rt.object(211, "atlas");
              acc = _v74;
              const _v75: any = rt.object(211, "dogFood");
              acc = _v75;
              const _v76: any = rt.object(211, "eightTrack");
              acc = _v76;
              const _v77: any = rt.object(211, "trumanCapote");
              acc = _v77;
              const _v78: any = this;
              acc = _v78;
              const _v79: any = await rt.send(_v78, "add", [_v56, _v57, _v58, _v59, _v60, _v61, _v62, _v63, _v64, _v65, _v66, _v67, _v68, _v69, _v70, _v71, _v72, _v73, _v74, _v75, _v76, _v77]);
              acc = _v79;
              _v1 = _v79;
              const _v82: any = 0;
              acc = _v82;
              const _v83: any = (temps[0] = _v82);
              acc = _v83;
              _loop80: for (;;) {
                const _v84: any = rt.get(this, "size");
                acc = _v84;
                const _v85: any = 10;
                acc = _v85;
                const _v86: any = rt.op(">", ...[_v84, _v85]);
                acc = _v86;
                if (!rt.truth(_v86)) break _loop80;
                _continue81: {
                  let _v87: any = acc;
                  const _v88: any = (temps[0] ?? 0);
                  acc = _v88;
                  const _v89: any = rt.global((385 + (Number(_v88) & 65535)));
                  acc = _v89;
                  _v87 = _v89;
                  if (rt.truth(_v89)) {
                    const _v90: any = (temps[0] ?? 0);
                    acc = _v90;
                    const _v91: any = rt.global((385 + (Number(_v90) & 65535)));
                    acc = _v91;
                    const _v92: any = this;
                    acc = _v92;
                    const _v93: any = await rt.send(_v92, "at", [_v91]);
                    acc = _v93;
                    const _v94: any = this;
                    acc = _v94;
                    const _v95: any = await rt.send(_v94, "delete", [_v93]);
                    acc = _v95;
                    _v87 = _v95;
                  } else {
                    const _v96: any = 4;
                    acc = _v96;
                    const _v97: any = rt.get(this, "size");
                    acc = _v97;
                    const _v98: any = 1;
                    acc = _v98;
                    const _v99: any = rt.op("-", ...[_v97, _v98]);
                    acc = _v99;
                    const _v100: any = await rt.call(211, "Random", [_v96, _v99], this);
                    acc = _v100;
                    const _v101: any = (temps[2] = _v100);
                    acc = _v101;
                    const _v102: any = this;
                    acc = _v102;
                    const _v103: any = await rt.send(_v102, "at", [_v101]);
                    acc = _v103;
                    const _v104: any = this;
                    acc = _v104;
                    const _v105: any = await rt.send(_v104, "delete", [_v103]);
                    acc = _v105;
                    _v87 = _v105;
                    const _v106: any = (temps[2] ?? 0);
                    acc = _v106;
                    const _v107: any = (temps[0] ?? 0);
                    acc = _v107;
                    const _v108: any = rt.setGlobal((385 + (Number(_v107) & 65535)), _v106);
                    acc = _v108;
                    _v87 = _v108;
                  }
                  acc = _v87;
                }
                const _v109: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
                acc = _v109;
              }
              _v1 = acc;
              let _v110: any = acc;
              const _v111: any = rt.global(302);
              acc = _v111;
              const _v112: any = await rt.send(_v111, "worksAt", []);
              acc = _v112;
              const _v113: any = 11;
              acc = _v113;
              const _v114: any = rt.op("==", ...[_v112, _v113]);
              acc = _v114;
              _v110 = _v114;
              if (rt.truth(_v114)) {
                const _v115: any = rt.object(211, "exitButton");
                acc = _v115;
                const _v116: any = this;
                acc = _v116;
                const _v117: any = await rt.send(_v116, "indexOf", [_v115]);
                acc = _v117;
                const _v118: any = (temps[3] = _v117);
                acc = _v118;
                _v110 = _v118;
                const _v119: any = (temps[3] ?? 0);
                acc = _v119;
                const _v120: any = 1;
                acc = _v120;
                const _v121: any = rt.op("-", ...[_v119, _v120]);
                acc = _v121;
                const _v122: any = this;
                acc = _v122;
                const _v123: any = await rt.send(_v122, "at", [_v121]);
                acc = _v123;
                const _v124: any = rt.object(211, "workButton");
                acc = _v124;
                const _v125: any = this;
                acc = _v125;
                const _v126: any = await rt.send(_v125, "addAfter", [_v123, _v124]);
                acc = _v126;
                _v110 = _v126;
              }
              acc = _v110;
              _v1 = _v110;
              const _v129: any = 0;
              acc = _v129;
              const _v130: any = (temps[4] = _v129);
              acc = _v130;
              const _v131: any = (temps[0] = _v130);
              acc = _v131;
              _loop127: for (;;) {
                const _v132: any = (temps[0] ?? 0);
                acc = _v132;
                const _v133: any = rt.get(this, "size");
                acc = _v133;
                const _v134: any = rt.op("<", ...[_v132, _v133]);
                acc = _v134;
                if (!rt.truth(_v134)) break _loop127;
                _continue128: {
                  let _v135: any = acc;
                  const _v136: any = rt.object(211, "DiscountDItem");
                  acc = _v136;
                  const _v137: any = (temps[0] ?? 0);
                  acc = _v137;
                  const _v138: any = this;
                  acc = _v138;
                  const _v139: any = await rt.send(_v138, "at", [_v137]);
                  acc = _v139;
                  const _v140: any = await rt.send(_v139, "isKindOf", [_v136]);
                  acc = _v140;
                  _v135 = _v140;
                  if (rt.truth(_v140)) {
                    const _v141: any = (temps[4] ?? 0);
                    acc = _v141;
                    const _v142: any = 1;
                    acc = _v142;
                    const _v143: any = rt.op("+", ...[_v141, _v142]);
                    acc = _v143;
                    const _v144: any = 13;
                    acc = _v144;
                    const _v145: any = rt.op("*", ...[_v143, _v144]);
                    acc = _v145;
                    const _v146: any = 20;
                    acc = _v146;
                    const _v147: any = rt.op("+", ...[_v145, _v146]);
                    acc = _v147;
                    const _v148: any = (temps[0] ?? 0);
                    acc = _v148;
                    const _v149: any = this;
                    acc = _v149;
                    const _v150: any = await rt.send(_v149, "at", [_v148]);
                    acc = _v150;
                    const _v151: any = await rt.send(_v150, "nsTop", [_v147]);
                    acc = _v151;
                    _v135 = _v151;
                    let _v152: any = acc;
                    const _v153: any = (temps[4] ?? 0);
                    acc = _v153;
                    const _v154: any = 2;
                    acc = _v154;
                    const _v155: any = rt.op(">=", ...[_v153, _v154]);
                    acc = _v155;
                    _v152 = _v155;
                    if (rt.truth(_v155)) {
                      const _v156: any = 78;
                      acc = _v156;
                      const _v157: any = (temps[0] ?? 0);
                      acc = _v157;
                      const _v158: any = this;
                      acc = _v158;
                      const _v159: any = await rt.send(_v158, "at", [_v157]);
                      acc = _v159;
                      const _v160: any = await rt.send(_v159, "nsLeft", [_v156]);
                      acc = _v160;
                      _v152 = _v160;
                    }
                    acc = _v152;
                    _v135 = _v152;
                    const _v161: any = (temps[0] ?? 0);
                    acc = _v161;
                    const _v162: any = this;
                    acc = _v162;
                    const _v163: any = await rt.send(_v162, "at", [_v161]);
                    acc = _v163;
                    const _v164: any = await rt.send(_v163, "celNum", []);
                    acc = _v164;
                    const _v165: any = (temps[4] ?? 0);
                    acc = _v165;
                    const _v166: any = rt.setLocal(211, (0 + (Number(_v165) & 65535)), _v164);
                    acc = _v166;
                    _v135 = _v166;
                    const _v167: any = (temps[4] = rt.op("+", (temps[4] ?? 0), 1));
                    acc = _v167;
                    _v135 = _v167;
                  }
                  acc = _v135;
                }
                const _v168: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
                acc = _v168;
              }
              _v1 = acc;
              const _v169: any = 0;
              acc = _v169;
              const _v170: any = rt.local(211, (0 + (Number(_v169) & 65535)));
              acc = _v170;
              const _v171: any = rt.object(211, "items");
              acc = _v171;
              const _v172: any = await rt.send(_v171, "cel", [_v170]);
              acc = _v172;
              _v1 = _v172;
              const _v173: any = rt.object(211, "theTalker");
              acc = _v173;
              const _v174: any = rt.setGlobal(413, _v173);
              acc = _v174;
              _v1 = _v174;
              const _v175: any = rt.global(59);
              acc = _v175;
              const _v176: any = 102;
              acc = _v176;
              const _v177: any = 1;
              acc = _v177;
              const _v178: any = 153;
              acc = _v178;
              const _v179: any = 69;
              acc = _v179;
              const _v180: any = 44;
              acc = _v180;
              const _v181: any = 0;
              acc = _v181;
              const _v182: any = 15;
              acc = _v182;
              const _v183: any = this;
              acc = _v183;
              const _v184: any = await rt.send(_v183, "window", [_v175]);
              acc = _v184;
              const _v185: any = await rt.send(_v183, "eachElementDo", [_v176, _v177]);
              acc = _v185;
              const _v186: any = await rt.send(_v183, "eachElementDo", [_v178]);
              acc = _v186;
              const _v187: any = await rt.send(_v183, "moveTo", [_v179, _v180]);
              acc = _v187;
              const _v188: any = await rt.send(_v183, "open", [_v181, _v182]);
              acc = _v188;
              _v1 = _v188;
              let _v189: any = acc;
              const _v190: any = rt.global(302);
              acc = _v190;
              const _v191: any = await rt.send(_v190, "worksAt", []);
              acc = _v191;
              const _v192: any = 11;
              acc = _v192;
              const _v193: any = rt.op("==", ...[_v191, _v192]);
              acc = _v193;
              _v189 = _v193;
              if (rt.truth(_v193)) {
                const _v194: any = rt.object(211, "timeClock");
                acc = _v194;
                const _v195: any = this;
                acc = _v195;
                const _v196: any = await rt.send(_v195, "add", [_v194]);
                acc = _v196;
                _v189 = _v196;
                const _v197: any = rt.object(211, "timeClock");
                acc = _v197;
                const _v198: any = await rt.send(_v197, "setSize", []);
                acc = _v198;
                _v189 = _v198;
              }
              acc = _v189;
              _v1 = _v189;
              const _v199: any = 37;
              acc = _v199;
              const _v200: any = rt.global(477);
              acc = _v200;
              const _v201: any = await rt.send(_v200, "playBed", [_v199]);
              acc = _v201;
              _v1 = _v201;
              const _v202: any = this;
              acc = _v202;
              const _v203: any = rt.get(this, "keyMouseList");
              acc = _v203;
              const _v204: any = 4;
              acc = _v204;
              const _v205: any = this;
              acc = _v205;
              const _v206: any = await rt.send(_v205, "at", [_v204]);
              acc = _v206;
              const _v207: any = await rt.call(0, "proc0_9", [_v202, _v203, _v206], this);
              acc = _v207;
              _v1 = _v207;
              const _v208: any = rt.get(this, "keyMouseList");
              acc = _v208;
              const _v209: any = rt.object(891, "KeyMouse");
              acc = _v209;
              const _v210: any = await rt.send(_v209, "setList", [_v208]);
              acc = _v210;
              _v1 = _v210;
              const _v211: any = rt.global(302);
              acc = _v211;
              const _v212: any = await rt.send(_v211, "cash", []);
              acc = _v212;
              const _v213: any = 1;
              acc = _v213;
              const _v214: any = rt.op("-", ...[_v212, _v213]);
              acc = _v214;
              const _v215: any = rt.global(305);
              acc = _v215;
              const _v216: any = await rt.send(_v215, "setSize", []);
              acc = _v216;
              const _v217: any = await rt.send(_v215, "value", [_v214]);
              acc = _v217;
              const _v218: any = await rt.send(_v215, "draw", []);
              acc = _v218;
              _v1 = _v218;
              const _v219: any = 1;
              acc = _v219;
              const _v220: any = rt.object(996, "User");
              acc = _v220;
              const _v221: any = await rt.send(_v220, "canControl", [_v219]);
              acc = _v221;
              _v1 = _v221;
              let _v222: any = acc;
              const _v223: any = await rt.call(0, "proc0_14", [], this);
              acc = _v223;
              _v222 = _v223;
              if (rt.truth(_v223)) {
                const _v224: any = rt.global(413);
                acc = _v224;
                const _v225: any = await rt.send(_v224, "init", []);
                acc = _v225;
                _v222 = _v225;
                const _v226: any = 211;
                acc = _v226;
                const _v227: any = 0;
                acc = _v227;
                const _v228: any = 10;
                acc = _v228;
                const _v229: any = await rt.call(211, "Random", [_v227, _v228], this);
                acc = _v229;
                const _v230: any = 310;
                acc = _v230;
                const _v231: any = rt.global(413);
                acc = _v231;
                const _v232: any = rt.global(440);
                acc = _v232;
                const _v233: any = rt.global(441);
                acc = _v233;
                const _v234: any = rt.global(442);
                acc = _v234;
                const _v235: any = 25;
                acc = _v235;
                const _v236: any = rt.global(426);
                acc = _v236;
                const _v237: any = await rt.call(255, "Print", [_v226, _v229, _v230, _v231, _v232, _v233, _v234, _v235, _v236], this);
                acc = _v237;
                _v222 = _v237;
              }
              acc = _v222;
              _v1 = _v222;
            } else {
              const _v238: any = rt.get(this, "theItem");
              acc = _v238;
              const _v239: any = rt.object(891, "KeyMouse");
              acc = _v239;
              const _v240: any = await rt.send(_v239, "setCursor", [_v238]);
              acc = _v240;
              _v1 = _v240;
            }
            acc = _v1;
            const _v241: any = 0;
            acc = _v241;
            const _v242: any = rt.setGlobal(518, _v241);
            acc = _v242;
            const _v243: any = 0;
            acc = _v243;
            const _v244: any = 0;
            acc = _v244;
            const _v245: any = this;
            acc = _v245;
            const _v246: any = await rt.send(_v245, "doit", [_v243, _v244]);
            acc = _v246;
            const _v247: any = (temps[1] = _v246);
            acc = _v247;
            let _v248: any = acc;
            const _v249: any = (temps[1] ?? 0);
            acc = _v249;
            const _v250: any = await rt.call(211, "IsObject", [_v249], this);
            acc = _v250;
            _v248 = _v250;
            if (rt.truth(_v250)) {
              let _v251: any = acc;
              const _v252: any = (temps[1] ?? 0);
              acc = _v252;
              const _v253: any = this;
              acc = _v253;
              const _v254: any = await rt.send(_v253, "contains", [_v252]);
              acc = _v254;
              _v251 = _v254;
              if (rt.truth(_v254)) {
                const _v255: any = 0;
                acc = _v255;
                const _v256: any = (temps[1] = _v255);
                acc = _v256;
                _v251 = _v256;
              }
              acc = _v251;
              _v248 = _v251;
            } else {
              const _v257: any = 1;
              acc = _v257;
              const _v258: any = (temps[1] = _v257);
              acc = _v258;
              _v248 = _v258;
            }
            acc = _v248;
            const _v259: any = rt.global(477);
            acc = _v259;
            const _v260: any = await rt.send(_v259, "fade", []);
            acc = _v260;
            const _v261: any = rt.object(211, "timeClock");
            acc = _v261;
            const _v262: any = await rt.send(_v261, "dispose", []);
            acc = _v262;
            let _v263: any = acc;
            const _v264: any = rt.get(this, "prevDialog");
            acc = _v264;
            _v263 = _v264;
            if (rt.truth(_v264)) {
              const _v265: any = rt.get(this, "prevDialog");
              acc = _v265;
              const _v266: any = await rt.send(_v265, "keyMouseList", []);
              acc = _v266;
              _v263 = _v266;
            } else {
              const _v267: any = rt.global(432);
              acc = _v267;
              _v263 = _v267;
            }
            acc = _v263;
            const _v268: any = rt.object(891, "KeyMouse");
            acc = _v268;
            const _v269: any = await rt.send(_v268, "setList", [_v263]);
            acc = _v269;
            const _v270: any = rt.get(this, "keyMouseList");
            acc = _v270;
            const _v271: any = await rt.send(_v270, "release", []);
            acc = _v271;
            const _v272: any = rt.get(this, "keyMouseList");
            acc = _v272;
            const _v273: any = await rt.send(_v272, "dispose", []);
            acc = _v273;
            const _v274: any = rt.get(this, "prevDialog");
            acc = _v274;
            const _v275: any = rt.setGlobal(502, _v274);
            acc = _v275;
            const _v276: any = this;
            acc = _v276;
            const _v277: any = 291;
            acc = _v277;
            const _v278: any = await rt.call(0, "proc0_15", [_v276, _v277], this);
            acc = _v278;
            const _v279: any = rt.object(211, "workButton");
            acc = _v279;
            const _v280: any = await rt.send(_v279, "dispose", []);
            acc = _v280;
            const _v281: any = this;
            acc = _v281;
            const _v282: any = await rt.send(_v281, "dispose", []);
            acc = _v282;
            const _v283: any = 11;
            acc = _v283;
            const _v284: any = rt.get(this, "nsTop");
            acc = _v284;
            const _v285: any = 1;
            acc = _v285;
            const _v286: any = rt.op("+", ...[_v284, _v285]);
            acc = _v286;
            const _v287: any = rt.get(this, "nsLeft");
            acc = _v287;
            const _v288: any = rt.get(this, "nsBottom");
            acc = _v288;
            const _v289: any = 1;
            acc = _v289;
            const _v290: any = rt.op("-", ...[_v288, _v289]);
            acc = _v290;
            const _v291: any = rt.get(this, "nsRight");
            acc = _v291;
            const _v292: any = 3;
            acc = _v292;
            const _v293: any = rt.op("-", ...[_v291, _v292]);
            acc = _v293;
            const _v294: any = 2;
            acc = _v294;
            const _v295: any = 0;
            acc = _v295;
            const _v296: any = 0;
            acc = _v296;
            const _v297: any = await rt.call(211, "Graph", [_v283, _v286, _v287, _v290, _v293, _v294, _v295, _v296], this);
            acc = _v297;
            const _v298: any = 0;
            acc = _v298;
            const _v299: any = await rt.call(0, "proc0_17", [_v298], this);
            acc = _v299;
            const _v300: any = (temps[1] ?? 0);
            acc = _v300;
            const _acc301: any = acc;
            const _v302: any = 211;
            acc = _v302;
            const _args303: any[] = [_v302];
            await rt.call(211, "DisposeScript", _args303, this);
            const _v304: any = _args303.length === 2 ? _args303[1] : _acc301;
            acc = _v304;
            return acc;
          },
          // SCI discount.sc: discount.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.superSend(this, {"script": 211, "name": "discount"}, "draw", []);
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
        properties: {"view": 811},
        methods: {
        },
      },
      {
        name: "refrigerator",
        className: "DiscountDItem",
        parent: {"script": 211, "name": "DiscountDItem"},
        isClass: false,
        properties: {"nsLeft": 11, "key": 1, "text": "Refrigerator.....", "textColor": 26, "shadowColor": 102, "indexNum": 21, "basePrice": 650},
        methods: {
          // SCI discount.sc: refrigerator.doFormat
          "doFormat": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "price");
            acc = _v2;
            const _v3: any = 1000;
            acc = _v3;
            const _v4: any = rt.op("<", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = (args[0] ?? 0);
              acc = _v5;
              const _v6: any = 211;
              acc = _v6;
              const _v7: any = 28;
              acc = _v7;
              const _v8: any = rt.get(this, "text");
              acc = _v8;
              const _v9: any = rt.get(this, "price");
              acc = _v9;
              const _v10: any = await rt.call(211, "Format", [_v5, _v6, _v7, _v8, _v9], this);
              acc = _v10;
              _v1 = _v10;
            } else {
              const _v11: any = (args[0] ?? 0);
              acc = _v11;
              const _v12: any = 211;
              acc = _v12;
              const _v13: any = 29;
              acc = _v13;
              const _v14: any = rt.get(this, "text");
              acc = _v14;
              const _v15: any = rt.get(this, "price");
              acc = _v15;
              const _v16: any = await rt.call(211, "Format", [_v11, _v12, _v13, _v14, _v15], this);
              acc = _v16;
              _v1 = _v16;
            }
            acc = _v1;
            return acc;
          },
          // SCI discount.sc: refrigerator.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 211, "name": "refrigerator"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(416);
              acc = _v5;
              _v4 = _v5;
            }
            if (rt.truth(_v4)) {
              const _v6: any = rt.get(this, "indexNum");
              acc = _v6;
              const _v7: any = rt.global(302);
              acc = _v7;
              const _v8: any = await rt.send(_v7, "durables", []);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "objectAtIndexQuan", [_v6]);
              acc = _v9;
              const _v10: any = rt.op("not", ...[_v9]);
              acc = _v10;
              _v4 = _v10;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v11: any = 1;
              acc = _v11;
              const _v12: any = await rt.call(0, "proc0_13", [_v11], this);
              acc = _v12;
              _v3 = _v12;
            }
            acc = _v3;
            const _v13: any = (temps[0] ?? 0);
            acc = _v13;
            return _v13;
            return acc;
          },
        },
      },
      {
        name: "stove",
        className: "DiscountDItem",
        parent: {"script": 211, "name": "DiscountDItem"},
        isClass: false,
        properties: {"nsLeft": 11, "key": 2, "text": "Stove|..............||", "textColor": 26, "shadowColor": 102, "indexNum": 23, "basePrice": 490, "celNum": 1},
        methods: {
          // SCI discount.sc: stove.doFormat
          "doFormat": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "price");
            acc = _v2;
            const _v3: any = 1000;
            acc = _v3;
            const _v4: any = rt.op("<", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = (args[0] ?? 0);
              acc = _v5;
              const _v6: any = 211;
              acc = _v6;
              const _v7: any = 28;
              acc = _v7;
              const _v8: any = rt.get(this, "text");
              acc = _v8;
              const _v9: any = rt.get(this, "price");
              acc = _v9;
              const _v10: any = await rt.call(211, "Format", [_v5, _v6, _v7, _v8, _v9], this);
              acc = _v10;
              _v1 = _v10;
            } else {
              const _v11: any = (args[0] ?? 0);
              acc = _v11;
              const _v12: any = 211;
              acc = _v12;
              const _v13: any = 29;
              acc = _v13;
              const _v14: any = rt.get(this, "text");
              acc = _v14;
              const _v15: any = rt.get(this, "price");
              acc = _v15;
              const _v16: any = await rt.call(211, "Format", [_v11, _v12, _v13, _v14, _v15], this);
              acc = _v16;
              _v1 = _v16;
            }
            acc = _v1;
            return acc;
          },
          // SCI discount.sc: stove.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 211, "name": "stove"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(416);
              acc = _v5;
              _v4 = _v5;
            }
            if (rt.truth(_v4)) {
              const _v6: any = rt.get(this, "indexNum");
              acc = _v6;
              const _v7: any = rt.global(302);
              acc = _v7;
              const _v8: any = await rt.send(_v7, "durables", []);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "objectAtIndexQuan", [_v6]);
              acc = _v9;
              const _v10: any = rt.op("not", ...[_v9]);
              acc = _v10;
              _v4 = _v10;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v11: any = 1;
              acc = _v11;
              const _v12: any = await rt.call(0, "proc0_13", [_v11], this);
              acc = _v12;
              _v3 = _v12;
            }
            acc = _v3;
            const _v13: any = (temps[0] ?? 0);
            acc = _v13;
            return _v13;
            return acc;
          },
        },
      },
      {
        name: "stereo",
        className: "DiscountDItem",
        parent: {"script": 211, "name": "DiscountDItem"},
        isClass: false,
        properties: {"nsLeft": 11, "key": 3, "text": "Stereo|.............||", "textColor": 26, "shadowColor": 102, "indexNum": 26, "basePrice": 450, "celNum": 2},
        methods: {
          // SCI discount.sc: stereo.doFormat
          "doFormat": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "price");
            acc = _v2;
            const _v3: any = 1000;
            acc = _v3;
            const _v4: any = rt.op("<", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = (args[0] ?? 0);
              acc = _v5;
              const _v6: any = 211;
              acc = _v6;
              const _v7: any = 28;
              acc = _v7;
              const _v8: any = rt.get(this, "text");
              acc = _v8;
              const _v9: any = rt.get(this, "price");
              acc = _v9;
              const _v10: any = await rt.call(211, "Format", [_v5, _v6, _v7, _v8, _v9], this);
              acc = _v10;
              _v1 = _v10;
            } else {
              const _v11: any = (args[0] ?? 0);
              acc = _v11;
              const _v12: any = 211;
              acc = _v12;
              const _v13: any = 29;
              acc = _v13;
              const _v14: any = rt.get(this, "text");
              acc = _v14;
              const _v15: any = rt.get(this, "price");
              acc = _v15;
              const _v16: any = await rt.call(211, "Format", [_v11, _v12, _v13, _v14, _v15], this);
              acc = _v16;
              _v1 = _v16;
            }
            acc = _v1;
            return acc;
          },
          // SCI discount.sc: stereo.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 211, "name": "stereo"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(416);
              acc = _v5;
              _v4 = _v5;
            }
            if (rt.truth(_v4)) {
              const _v6: any = rt.get(this, "indexNum");
              acc = _v6;
              const _v7: any = rt.global(302);
              acc = _v7;
              const _v8: any = await rt.send(_v7, "durables", []);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "objectAtIndexQuan", [_v6]);
              acc = _v9;
              const _v10: any = rt.op("not", ...[_v9]);
              acc = _v10;
              _v4 = _v10;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v11: any = 1;
              acc = _v11;
              const _v12: any = await rt.call(0, "proc0_13", [_v11], this);
              acc = _v12;
              _v3 = _v12;
            }
            acc = _v3;
            const _v13: any = (temps[0] ?? 0);
            acc = _v13;
            return _v13;
            return acc;
          },
        },
      },
      {
        name: "colorTV",
        className: "DiscountDItem",
        parent: {"script": 211, "name": "DiscountDItem"},
        isClass: false,
        properties: {"nsLeft": 11, "key": 4, "text": "Color TV..........||", "textColor": 26, "shadowColor": 102, "indexNum": 24, "basePrice": 349, "celNum": 3},
        methods: {
          // SCI discount.sc: colorTV.doFormat
          "doFormat": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "price");
            acc = _v2;
            const _v3: any = 1000;
            acc = _v3;
            const _v4: any = rt.op("<", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = (args[0] ?? 0);
              acc = _v5;
              const _v6: any = 211;
              acc = _v6;
              const _v7: any = 28;
              acc = _v7;
              const _v8: any = rt.get(this, "text");
              acc = _v8;
              const _v9: any = rt.get(this, "price");
              acc = _v9;
              const _v10: any = await rt.call(211, "Format", [_v5, _v6, _v7, _v8, _v9], this);
              acc = _v10;
              _v1 = _v10;
            } else {
              const _v11: any = (args[0] ?? 0);
              acc = _v11;
              const _v12: any = 211;
              acc = _v12;
              const _v13: any = 29;
              acc = _v13;
              const _v14: any = rt.get(this, "text");
              acc = _v14;
              const _v15: any = rt.get(this, "price");
              acc = _v15;
              const _v16: any = await rt.call(211, "Format", [_v11, _v12, _v13, _v14, _v15], this);
              acc = _v16;
              _v1 = _v16;
            }
            acc = _v1;
            return acc;
          },
          // SCI discount.sc: colorTV.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 211, "name": "colorTV"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(416);
              acc = _v5;
              _v4 = _v5;
            }
            if (rt.truth(_v4)) {
              const _v6: any = rt.get(this, "indexNum");
              acc = _v6;
              const _v7: any = rt.global(302);
              acc = _v7;
              const _v8: any = await rt.send(_v7, "durables", []);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "objectAtIndexQuan", [_v6]);
              acc = _v9;
              const _v10: any = rt.op("not", ...[_v9]);
              acc = _v10;
              _v4 = _v10;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v11: any = 1;
              acc = _v11;
              const _v12: any = await rt.call(0, "proc0_13", [_v11], this);
              acc = _v12;
              _v3 = _v12;
            }
            acc = _v3;
            const _v13: any = (temps[0] ?? 0);
            acc = _v13;
            return _v13;
            return acc;
          },
        },
      },
      {
        name: "bwTV",
        className: "DiscountDItem",
        parent: {"script": 211, "name": "DiscountDItem"},
        isClass: false,
        properties: {"nsLeft": 11, "key": 5, "text": "Black & White TV||", "textColor": 26, "shadowColor": 102, "indexNum": 30, "basePrice": 110, "celNum": 4},
        methods: {
        },
      },
      {
        name: "microwave",
        className: "DiscountDItem",
        parent: {"script": 211, "name": "DiscountDItem"},
        isClass: false,
        properties: {"nsLeft": 11, "key": 6, "text": "Microwave|.........|", "textColor": 26, "shadowColor": 102, "indexNum": 27, "basePrice": 220, "celNum": 5},
        methods: {
          // SCI discount.sc: microwave.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 211, "name": "microwave"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(416);
              acc = _v5;
              _v4 = _v5;
            }
            if (rt.truth(_v4)) {
              const _v6: any = rt.get(this, "indexNum");
              acc = _v6;
              const _v7: any = rt.global(302);
              acc = _v7;
              const _v8: any = await rt.send(_v7, "durables", []);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "objectAtIndexQuan", [_v6]);
              acc = _v9;
              const _v10: any = rt.op("not", ...[_v9]);
              acc = _v10;
              _v4 = _v10;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v11: any = 1;
              acc = _v11;
              const _v12: any = await rt.call(0, "proc0_13", [_v11], this);
              acc = _v12;
              _v3 = _v12;
            }
            acc = _v3;
            const _v13: any = (temps[0] ?? 0);
            acc = _v13;
            return _v13;
            return acc;
          },
        },
      },
      {
        name: "vcr",
        className: "DiscountDItem",
        parent: {"script": 211, "name": "DiscountDItem"},
        isClass: false,
        properties: {"nsLeft": 11, "key": 7, "text": "VCR...................|", "textColor": 26, "shadowColor": 102, "indexNum": 25, "basePrice": 250, "celNum": 6},
        methods: {
          // SCI discount.sc: vcr.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 211, "name": "vcr"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(416);
              acc = _v5;
              _v4 = _v5;
            }
            if (rt.truth(_v4)) {
              const _v6: any = rt.get(this, "indexNum");
              acc = _v6;
              const _v7: any = rt.global(302);
              acc = _v7;
              const _v8: any = await rt.send(_v7, "durables", []);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "objectAtIndexQuan", [_v6]);
              acc = _v9;
              const _v10: any = rt.op("not", ...[_v9]);
              acc = _v10;
              _v4 = _v10;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v11: any = 1;
              acc = _v11;
              const _v12: any = await rt.call(0, "proc0_13", [_v11], this);
              acc = _v12;
              _v3 = _v12;
            }
            acc = _v3;
            const _v13: any = (temps[0] ?? 0);
            acc = _v13;
            return _v13;
            return acc;
          },
        },
      },
      {
        name: "casualClothes",
        className: "DiscountDItem",
        parent: {"script": 211, "name": "DiscountDItem"},
        isClass: false,
        properties: {"nsLeft": 11, "key": 8, "text": "Casual Clothes...", "textColor": 26, "shadowColor": 102, "indexNum": 36, "typeOfGoods": 1, "units": 9, "basePrice": 35, "celNum": 7},
        methods: {
          // SCI discount.sc: casualClothes.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 211, "name": "casualClothes"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(416);
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(302);
              acc = _v5;
              const _v6: any = await rt.send(_v5, "dressedForWork", []);
              acc = _v6;
              _v3 = _v6;
              const _v7: any = 0;
              acc = _v7;
              const _v8: any = rt.global(302);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "nakedCount", [_v7]);
              acc = _v9;
              _v3 = _v9;
            }
            acc = _v3;
            const _v10: any = (temps[0] ?? 0);
            acc = _v10;
            return _v10;
            return acc;
          },
        },
      },
      {
        name: "leisureSuit",
        className: "DiscountDItem",
        parent: {"script": 211, "name": "DiscountDItem"},
        isClass: false,
        properties: {"nsLeft": 11, "key": 20, "text": "Dress Clothes.....", "textColor": 26, "shadowColor": 102, "indexNum": 35, "typeOfGoods": 1, "units": 9, "basePrice": 90, "celNum": 8},
        methods: {
          // SCI discount.sc: leisureSuit.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 211, "name": "leisureSuit"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(416);
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(302);
              acc = _v5;
              const _v6: any = await rt.send(_v5, "dressedForWork", []);
              acc = _v6;
              _v3 = _v6;
              const _v7: any = 0;
              acc = _v7;
              const _v8: any = rt.global(302);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "nakedCount", [_v7]);
              acc = _v9;
              _v3 = _v9;
            }
            acc = _v3;
            const _v10: any = (temps[0] ?? 0);
            acc = _v10;
            return _v10;
            return acc;
          },
        },
      },
      {
        name: "baseballTickets",
        className: "DiscountDItem",
        parent: {"script": 211, "name": "DiscountDItem"},
        isClass: false,
        properties: {"nsLeft": 11, "key": 10, "text": "Baseball Tickets..", "textColor": 26, "shadowColor": 102, "indexNum": 37, "typeOfGoods": 1, "units": 4, "basePrice": 45, "celNum": 9},
        methods: {
          // SCI discount.sc: baseballTickets.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 211, "name": "baseballTickets"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(416);
              acc = _v5;
              _v4 = _v5;
            }
            if (rt.truth(_v4)) {
              const _v6: any = rt.global(466);
              acc = _v6;
              const _v7: any = rt.op("not", ...[_v6]);
              acc = _v7;
              _v4 = _v7;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v8: any = 1;
              acc = _v8;
              const _v9: any = rt.setGlobal(466, _v8);
              acc = _v9;
              _v3 = _v9;
              const _v10: any = 2;
              acc = _v10;
              const _v11: any = await rt.call(0, "proc0_13", [_v10], this);
              acc = _v11;
              _v3 = _v11;
            }
            acc = _v3;
            const _v12: any = (temps[0] ?? 0);
            acc = _v12;
            return _v12;
            return acc;
          },
        },
      },
      {
        name: "theatreTickets",
        className: "DiscountDItem",
        parent: {"script": 211, "name": "DiscountDItem"},
        isClass: false,
        properties: {"nsLeft": 11, "key": 11, "text": "Theatre Tickets...", "textColor": 26, "shadowColor": 102, "indexNum": 38, "typeOfGoods": 1, "units": 4, "basePrice": 30, "celNum": 10},
        methods: {
          // SCI discount.sc: theatreTickets.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 211, "name": "theatreTickets"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(416);
              acc = _v5;
              _v4 = _v5;
            }
            if (rt.truth(_v4)) {
              const _v6: any = rt.global(467);
              acc = _v6;
              const _v7: any = rt.op("not", ...[_v6]);
              acc = _v7;
              _v4 = _v7;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v8: any = 1;
              acc = _v8;
              const _v9: any = rt.setGlobal(467, _v8);
              acc = _v9;
              _v3 = _v9;
              const _v10: any = 2;
              acc = _v10;
              const _v11: any = await rt.call(0, "proc0_13", [_v10], this);
              acc = _v11;
              _v3 = _v11;
            }
            acc = _v3;
            const _v12: any = (temps[0] ?? 0);
            acc = _v12;
            return _v12;
            return acc;
          },
        },
      },
      {
        name: "concertTickets",
        className: "DiscountDItem",
        parent: {"script": 211, "name": "DiscountDItem"},
        isClass: false,
        properties: {"nsLeft": 11, "key": 12, "text": "Concert Tickets|..|", "textColor": 26, "shadowColor": 102, "indexNum": 39, "typeOfGoods": 1, "units": 4, "basePrice": 40, "celNum": 11},
        methods: {
          // SCI discount.sc: concertTickets.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 211, "name": "concertTickets"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(416);
              acc = _v5;
              _v4 = _v5;
            }
            if (rt.truth(_v4)) {
              const _v6: any = rt.global(468);
              acc = _v6;
              const _v7: any = rt.op("not", ...[_v6]);
              acc = _v7;
              _v4 = _v7;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v8: any = 1;
              acc = _v8;
              const _v9: any = rt.setGlobal(468, _v8);
              acc = _v9;
              _v3 = _v9;
              const _v10: any = 2;
              acc = _v10;
              const _v11: any = await rt.call(0, "proc0_13", [_v10], this);
              acc = _v11;
              _v3 = _v11;
            }
            acc = _v3;
            const _v12: any = (temps[0] ?? 0);
            acc = _v12;
            return _v12;
            return acc;
          },
        },
      },
      {
        name: "encyclopedia",
        className: "DiscountDItem",
        parent: {"script": 211, "name": "DiscountDItem"},
        isClass: false,
        properties: {"nsLeft": 11, "key": 23, "text": "Encyclopedia.....", "textColor": 26, "shadowColor": 102, "indexNum": 31, "basePrice": 475, "celNum": 12},
        methods: {
          // SCI discount.sc: encyclopedia.doFormat
          "doFormat": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "price");
            acc = _v2;
            const _v3: any = 1000;
            acc = _v3;
            const _v4: any = rt.op("<", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = (args[0] ?? 0);
              acc = _v5;
              const _v6: any = 211;
              acc = _v6;
              const _v7: any = 28;
              acc = _v7;
              const _v8: any = rt.get(this, "text");
              acc = _v8;
              const _v9: any = rt.get(this, "price");
              acc = _v9;
              const _v10: any = await rt.call(211, "Format", [_v5, _v6, _v7, _v8, _v9], this);
              acc = _v10;
              _v1 = _v10;
            } else {
              const _v11: any = (args[0] ?? 0);
              acc = _v11;
              const _v12: any = 211;
              acc = _v12;
              const _v13: any = 29;
              acc = _v13;
              const _v14: any = rt.get(this, "text");
              acc = _v14;
              const _v15: any = rt.get(this, "price");
              acc = _v15;
              const _v16: any = await rt.call(211, "Format", [_v11, _v12, _v13, _v14, _v15], this);
              acc = _v16;
              _v1 = _v16;
            }
            acc = _v1;
            return acc;
          },
          // SCI discount.sc: encyclopedia.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 211, "name": "encyclopedia"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(416);
              acc = _v5;
              _v4 = _v5;
            }
            if (rt.truth(_v4)) {
              const _v6: any = rt.get(this, "indexNum");
              acc = _v6;
              const _v7: any = rt.global(302);
              acc = _v7;
              const _v8: any = await rt.send(_v7, "durables", []);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "objectAtIndexQuan", [_v6]);
              acc = _v9;
              const _v10: any = rt.op("not", ...[_v9]);
              acc = _v10;
              _v4 = _v10;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v11: any = 1;
              acc = _v11;
              const _v12: any = await rt.call(0, "proc0_13", [_v11], this);
              acc = _v12;
              _v3 = _v12;
            }
            acc = _v3;
            const _v13: any = (temps[0] ?? 0);
            acc = _v13;
            return _v13;
            return acc;
          },
        },
      },
      {
        name: "dictionary",
        className: "DiscountDItem",
        parent: {"script": 211, "name": "DiscountDItem"},
        isClass: false,
        properties: {"nsLeft": 11, "key": 14, "text": "Dictionary..........", "textColor": 26, "shadowColor": 102, "indexNum": 32, "basePrice": 70, "celNum": 13},
        methods: {
          // SCI discount.sc: dictionary.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 211, "name": "dictionary"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(416);
              acc = _v5;
              _v4 = _v5;
            }
            if (rt.truth(_v4)) {
              const _v6: any = rt.get(this, "indexNum");
              acc = _v6;
              const _v7: any = rt.global(302);
              acc = _v7;
              const _v8: any = await rt.send(_v7, "durables", []);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "objectAtIndexQuan", [_v6]);
              acc = _v9;
              const _v10: any = rt.op("not", ...[_v9]);
              acc = _v10;
              _v4 = _v10;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v11: any = 1;
              acc = _v11;
              const _v12: any = await rt.call(0, "proc0_13", [_v11], this);
              acc = _v12;
              _v3 = _v12;
            }
            acc = _v3;
            const _v13: any = (temps[0] ?? 0);
            acc = _v13;
            return _v13;
            return acc;
          },
        },
      },
      {
        name: "atlas",
        className: "DiscountDItem",
        parent: {"script": 211, "name": "DiscountDItem"},
        isClass: false,
        properties: {"nsLeft": 11, "key": 24, "text": "Atlas.................|", "textColor": 26, "shadowColor": 102, "indexNum": 33, "basePrice": 55, "celNum": 14},
        methods: {
          // SCI discount.sc: atlas.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 211, "name": "atlas"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(416);
              acc = _v5;
              _v4 = _v5;
            }
            if (rt.truth(_v4)) {
              const _v6: any = rt.get(this, "indexNum");
              acc = _v6;
              const _v7: any = rt.global(302);
              acc = _v7;
              const _v8: any = await rt.send(_v7, "durables", []);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "objectAtIndexQuan", [_v6]);
              acc = _v9;
              const _v10: any = rt.op("not", ...[_v9]);
              acc = _v10;
              _v4 = _v10;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v11: any = 1;
              acc = _v11;
              const _v12: any = await rt.call(0, "proc0_13", [_v11], this);
              acc = _v12;
              _v3 = _v12;
            }
            acc = _v3;
            const _v13: any = (temps[0] ?? 0);
            acc = _v13;
            return _v13;
            return acc;
          },
        },
      },
      {
        name: "dogFood",
        className: "DiscountDItem",
        parent: {"script": 211, "name": "DiscountDItem"},
        isClass: false,
        properties: {"nsLeft": 11, "key": 16, "text": "Dog Food...........|", "textColor": 26, "shadowColor": 102, "typeOfGoods": 3, "basePrice": 18, "celNum": 15},
        methods: {
          // SCI discount.sc: dogFood.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 211, "name": "dogFood"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(416);
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = -1;
              acc = _v5;
              const _v6: any = await rt.call(0, "proc0_13", [_v5], this);
              acc = _v6;
              _v3 = _v6;
            }
            acc = _v3;
            const _v7: any = (temps[0] ?? 0);
            acc = _v7;
            return _v7;
            return acc;
          },
        },
      },
      {
        name: "eightTrack",
        className: "DiscountDItem",
        parent: {"script": 211, "name": "DiscountDItem"},
        isClass: false,
        properties: {"nsLeft": 11, "key": 17, "text": "8-Track Player...", "textColor": 26, "shadowColor": 102, "typeOfGoods": 3, "basePrice": 75, "celNum": 16},
        methods: {
          // SCI discount.sc: eightTrack.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 211, "name": "eightTrack"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(416);
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = -1;
              acc = _v5;
              const _v6: any = await rt.call(0, "proc0_13", [_v5], this);
              acc = _v6;
              _v3 = _v6;
            }
            acc = _v3;
            const _v7: any = (temps[0] ?? 0);
            acc = _v7;
            return _v7;
            return acc;
          },
        },
      },
      {
        name: "trumanCapote",
        className: "DiscountDItem",
        parent: {"script": 211, "name": "DiscountDItem"},
        isClass: false,
        properties: {"nsLeft": 11, "key": 18, "text": "Works of Capote|", "textColor": 26, "shadowColor": 102, "typeOfGoods": 3, "basePrice": 100, "celNum": 17},
        methods: {
          // SCI discount.sc: trumanCapote.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 211, "name": "trumanCapote"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(416);
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = -2;
              acc = _v5;
              const _v6: any = await rt.call(0, "proc0_13", [_v5], this);
              acc = _v6;
              _v3 = _v6;
            }
            acc = _v3;
            const _v7: any = (temps[0] ?? 0);
            acc = _v7;
            return _v7;
            return acc;
          },
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
        name: "workButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 108, "nsLeft": 75, "key": 119, "view": 250, "loop": 1, "priority": 15},
        methods: {
          // SCI discount.sc: workButton.doit
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
            const _v4: any = 0;
            acc = _v4;
            const _v5: any = rt.object(211, "timeClock");
            acc = _v5;
            const _v6: any = await rt.send(_v5, "cel", [_v4]);
            acc = _v6;
            const _v7: any = await rt.send(_v5, "draw", []);
            acc = _v7;
            let _v8: any = acc;
            _branch9: {
              const _v10: any = await rt.call(108, "proc108_0", [], this);
              acc = _v10;
              const _v11: any = (temps[0] = _v10);
              acc = _v11;
              const _v12: any = -1;
              acc = _v12;
              const _v13: any = rt.op("==", ...[_v11, _v12]);
              acc = _v13;
              _v8 = _v13;
              acc = _v8;
              if (rt.truth(_v8)) {
                const _v14: any = this;
                acc = _v14;
                const _v15: any = rt.object(211, "discount");
                acc = _v15;
                const _v16: any = await rt.send(_v15, "delete", [_v14]);
                acc = _v16;
                _v8 = _v16;
                const _v17: any = this;
                acc = _v17;
                const _v18: any = await rt.send(_v17, "erase", []);
                acc = _v18;
                _v8 = _v18;
                break _branch9;
              }
              let _v19: any = 1;
              if (rt.truth(_v19)) {
                const _v20: any = rt.global(323);
                acc = _v20;
                const _v21: any = 60;
                acc = _v21;
                const _v22: any = rt.op("<", ...[_v20, _v21]);
                acc = _v22;
                _v19 = _v22;
              }
              if (rt.truth(_v19)) {
                const _v23: any = (temps[0] ?? 0);
                acc = _v23;
                const _v24: any = 0;
                acc = _v24;
                const _v25: any = rt.op(">", ...[_v23, _v24]);
                acc = _v25;
                _v19 = _v25;
              }
              acc = _v19;
              _v8 = _v19;
              acc = _v8;
              if (rt.truth(_v8)) {
                const _v26: any = 0;
                acc = _v26;
                const _v27: any = rt.object(211, "items");
                acc = _v27;
                const _v28: any = await rt.send(_v27, "setCycle", [_v26]);
                acc = _v28;
                _v8 = _v28;
                const _v29: any = rt.object(211, "timeClock");
                acc = _v29;
                const _v30: any = await rt.send(_v29, "doit", []);
                acc = _v30;
                _v8 = _v30;
                break _branch9;
              }
            }
            acc = _v8;
            const _v31: any = 0;
            acc = _v31;
            const _v32: any = await rt.superSend(this, {"script": 211, "name": "workButton"}, "doit", [_v31]);
            acc = _v32;
            return acc;
          },
        },
      },
      {
        name: "timeClock",
        className: "TimeClock",
        parent: {"script": 104, "name": "TimeClock"},
        isClass: false,
        properties: {"nsTop": 57},
        methods: {
          // SCI discount.sc: timeClock.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "setCycle", [_v1]);
            acc = _v3;
            const _v4: any = rt.object(211, "items");
            acc = _v4;
            const _v5: any = await rt.send(_v4, "init", []);
            acc = _v5;
            return acc;
          },
          // SCI discount.sc: timeClock.setSize
          "setSize": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.object(211, "timeClock");
            acc = _v1;
            const _v2: any = rt.global(502);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "aTimeClock", [_v1]);
            acc = _v3;
            const _v4: any = await rt.superSend(this, {"script": 211, "name": "timeClock"}, "setSize", []);
            acc = _v4;
            return acc;
          },
        },
      },
      {
        name: "items",
        className: "DCIcon",
        parent: {"script": 967, "name": "DCIcon"},
        isClass: false,
        properties: {"nsTop": 57, "view": 711, "loop": 1, "priority": 14, "cycleSpeed": 100},
        methods: {
          // SCI discount.sc: items.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
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
              const _v5: any = rt.object(211, "FS");
              acc = _v5;
              const _v6: any = this;
              acc = _v6;
              const _v7: any = this;
              acc = _v7;
              const _v8: any = await rt.send(_v7, "setCycle", [_v5, _v6]);
              acc = _v8;
              _v1 = _v8;
            }
            acc = _v1;
            return acc;
          },
          // SCI discount.sc: items.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
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
              let _v7: any = acc;
              const _v8: any = rt.get(this, "cycler");
              acc = _v8;
              _v7 = _v8;
              if (rt.truth(_v8)) {
                const _v9: any = -200;
                acc = _v9;
                const _v10: any = rt.get(this, "cycler");
                acc = _v10;
                const _v11: any = await rt.send(_v10, "cycleCnt", [_v9]);
                acc = _v11;
                _v7 = _v11;
              }
              acc = _v7;
              _v1 = _v7;
              const _v12: any = (args[0] ?? 0);
              acc = _v12;
              const _v13: any = 16;
              acc = _v13;
              const _v14: any = rt.op("mod", ...[_v12, _v13]);
              acc = _v14;
              const _v15: any = (temps[0] = _v14);
              acc = _v15;
              _v1 = _v15;
              const _v16: any = (temps[0] ?? 0);
              acc = _v16;
              let _v17: any = acc;
              const _v18: any = (args[0] ?? 0);
              acc = _v18;
              const _v19: any = 16;
              acc = _v19;
              const _v20: any = rt.op("<", ...[_v18, _v19]);
              acc = _v20;
              _v17 = _v20;
              if (rt.truth(_v20)) {
                const _v21: any = 1;
                acc = _v21;
                _v17 = _v21;
              } else {
                const _v22: any = 2;
                acc = _v22;
                _v17 = _v22;
              }
              acc = _v17;
              const _v23: any = this;
              acc = _v23;
              const _v24: any = await rt.send(_v23, "cel", [_v16]);
              acc = _v24;
              const _v25: any = await rt.send(_v23, "loop", [_v17]);
              acc = _v25;
              const _v26: any = await rt.send(_v23, "draw", []);
              acc = _v26;
              _v1 = _v26;
            }
            acc = _v1;
            return acc;
          },
          // SCI discount.sc: items.setCycle
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
              const _v6: any = await rt.superSend(this, {"script": 211, "name": "items"}, "setCycle", [..._v5]);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return acc;
          },
          // SCI discount.sc: items.draw
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
              const _v6: any = await rt.superSend(this, {"script": 211, "name": "items"}, "draw", [..._v5]);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return acc;
          },
          // SCI discount.sc: items.setSize
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
              const _v6: any = await rt.superSend(this, {"script": 211, "name": "items"}, "setSize", [..._v5]);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return acc;
          },
          // SCI discount.sc: items.lastCel
          "lastCel": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 5;
            acc = _v1;
            return _v1;
            return acc;
          },
        },
      },
      {
        name: "theTalker",
        className: "Talker",
        parent: {"script": 104, "name": "Talker"},
        isClass: false,
        properties: {"nsTop": 0, "view": 361},
        methods: {
        },
      },
      {
        name: "computerScript",
        className: "DialogScript",
        parent: {"script": 110, "name": "DialogScript"},
        isClass: false,
        properties: {},
        methods: {
          // SCI discount.sc: computerScript.handleEvent
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
                  let _v18: any = acc;
                  let _v19: any = 1;
                  if (rt.truth(_v19)) {
                    const _v20: any = 12;
                    acc = _v20;
                    const _v21: any = await rt.call(0, "proc0_6", [_v20], this);
                    acc = _v21;
                    _v19 = _v21;
                  }
                  if (rt.truth(_v19)) {
                    const _v22: any = 33;
                    acc = _v22;
                    const _v23: any = rt.global(302);
                    acc = _v23;
                    const _v24: any = await rt.send(_v23, "durables", []);
                    acc = _v24;
                    const _v25: any = await rt.send(_v24, "objectAtIndexQuan", [_v22]);
                    acc = _v25;
                    const _v26: any = rt.op("not", ...[_v25]);
                    acc = _v26;
                    _v19 = _v26;
                  }
                  if (rt.truth(_v19)) {
                    const _v27: any = rt.object(211, "atlas");
                    acc = _v27;
                    const _v28: any = rt.object(211, "discount");
                    acc = _v28;
                    const _v29: any = await rt.send(_v28, "contains", [_v27]);
                    acc = _v29;
                    _v19 = _v29;
                  }
                  acc = _v19;
                  _v18 = _v19;
                  if (rt.truth(_v19)) {
                    const _v30: any = rt.object(211, "atlas");
                    acc = _v30;
                    const _v31: any = await rt.send(_v30, "key", []);
                    acc = _v31;
                    const _v32: any = (args[0] ?? 0);
                    acc = _v32;
                    const _v33: any = await rt.send(_v32, "message", [_v31]);
                    acc = _v33;
                    _v18 = _v33;
                    const _v34: any = 60;
                    acc = _v34;
                    const _v35: any = rt.set(this, "cycles", _v34);
                    acc = _v35;
                    _v18 = _v35;
                  }
                  acc = _v18;
                  _v14 = _v18;
                  break _branch16;
                }
                const _v36: any = 3;
                acc = _v36;
                _v14 = rt.op("==", _v15, _v36);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v37: any = acc;
                  let _v38: any = 1;
                  if (rt.truth(_v38)) {
                    const _v39: any = 12;
                    acc = _v39;
                    const _v40: any = await rt.call(0, "proc0_6", [_v39], this);
                    acc = _v40;
                    _v38 = _v40;
                  }
                  if (rt.truth(_v38)) {
                    const _v41: any = await rt.call(0, "proc0_11", [], this);
                    acc = _v41;
                    const _v42: any = 800;
                    acc = _v42;
                    const _v43: any = rt.op(">=", ...[_v41, _v42]);
                    acc = _v43;
                    _v38 = _v43;
                  }
                  if (rt.truth(_v38)) {
                    const _v44: any = 32;
                    acc = _v44;
                    const _v45: any = rt.global(302);
                    acc = _v45;
                    const _v46: any = await rt.send(_v45, "durables", []);
                    acc = _v46;
                    const _v47: any = await rt.send(_v46, "objectAtIndexQuan", [_v44]);
                    acc = _v47;
                    const _v48: any = rt.op("not", ...[_v47]);
                    acc = _v48;
                    _v38 = _v48;
                  }
                  if (rt.truth(_v38)) {
                    const _v49: any = rt.object(211, "dictionary");
                    acc = _v49;
                    const _v50: any = rt.object(211, "discount");
                    acc = _v50;
                    const _v51: any = await rt.send(_v50, "contains", [_v49]);
                    acc = _v51;
                    _v38 = _v51;
                  }
                  acc = _v38;
                  _v37 = _v38;
                  if (rt.truth(_v38)) {
                    const _v52: any = rt.object(211, "dictionary");
                    acc = _v52;
                    const _v53: any = await rt.send(_v52, "key", []);
                    acc = _v53;
                    const _v54: any = (args[0] ?? 0);
                    acc = _v54;
                    const _v55: any = await rt.send(_v54, "message", [_v53]);
                    acc = _v55;
                    _v37 = _v55;
                    const _v56: any = 60;
                    acc = _v56;
                    const _v57: any = rt.set(this, "cycles", _v56);
                    acc = _v57;
                    _v37 = _v57;
                  }
                  acc = _v37;
                  _v14 = _v37;
                  break _branch16;
                }
                const _v58: any = 4;
                acc = _v58;
                _v14 = rt.op("==", _v15, _v58);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v59: any = acc;
                  let _v60: any = 1;
                  if (rt.truth(_v60)) {
                    const _v61: any = 12;
                    acc = _v61;
                    const _v62: any = await rt.call(0, "proc0_6", [_v61], this);
                    acc = _v62;
                    _v60 = _v62;
                  }
                  if (rt.truth(_v60)) {
                    const _v63: any = await rt.call(0, "proc0_11", [], this);
                    acc = _v63;
                    const _v64: any = 800;
                    acc = _v64;
                    const _v65: any = rt.op(">=", ...[_v63, _v64]);
                    acc = _v65;
                    _v60 = _v65;
                  }
                  if (rt.truth(_v60)) {
                    const _v66: any = 31;
                    acc = _v66;
                    const _v67: any = rt.global(302);
                    acc = _v67;
                    const _v68: any = await rt.send(_v67, "durables", []);
                    acc = _v68;
                    const _v69: any = await rt.send(_v68, "objectAtIndexQuan", [_v66]);
                    acc = _v69;
                    const _v70: any = rt.op("not", ...[_v69]);
                    acc = _v70;
                    _v60 = _v70;
                  }
                  if (rt.truth(_v60)) {
                    const _v71: any = rt.object(211, "encyclopedia");
                    acc = _v71;
                    const _v72: any = rt.object(211, "discount");
                    acc = _v72;
                    const _v73: any = await rt.send(_v72, "contains", [_v71]);
                    acc = _v73;
                    _v60 = _v73;
                  }
                  acc = _v60;
                  _v59 = _v60;
                  if (rt.truth(_v60)) {
                    const _v74: any = rt.object(211, "encyclopedia");
                    acc = _v74;
                    const _v75: any = await rt.send(_v74, "key", []);
                    acc = _v75;
                    const _v76: any = (args[0] ?? 0);
                    acc = _v76;
                    const _v77: any = await rt.send(_v76, "message", [_v75]);
                    acc = _v77;
                    _v59 = _v77;
                    const _v78: any = 60;
                    acc = _v78;
                    const _v79: any = rt.set(this, "cycles", _v78);
                    acc = _v79;
                    _v59 = _v79;
                  }
                  acc = _v59;
                  _v14 = _v59;
                  break _branch16;
                }
                const _v80: any = 5;
                acc = _v80;
                _v14 = rt.op("==", _v15, _v80);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v81: any = acc;
                  const _v82: any = 11;
                  acc = _v82;
                  const _v83: any = await rt.call(0, "proc0_6", [_v82], this);
                  acc = _v83;
                  _v81 = _v83;
                  if (rt.truth(_v83)) {
                    let _v84: any = acc;
                    const _v85: any = rt.global(302);
                    acc = _v85;
                    const _v86: any = await rt.send(_v85, "uniform", []);
                    acc = _v86;
                    _branch87: {
                      const _v88: any = 36;
                      acc = _v88;
                      _v84 = rt.op("==", _v86, _v88);
                      acc = _v84;
                      if (rt.truth(_v84)) {
                        let _v89: any = acc;
                        const _v90: any = rt.object(211, "casualClothes");
                        acc = _v90;
                        const _v91: any = rt.object(211, "discount");
                        acc = _v91;
                        const _v92: any = await rt.send(_v91, "contains", [_v90]);
                        acc = _v92;
                        _v89 = _v92;
                        if (rt.truth(_v92)) {
                          const _v93: any = rt.object(211, "casualClothes");
                          acc = _v93;
                          const _v94: any = await rt.send(_v93, "key", []);
                          acc = _v94;
                          const _v95: any = (args[0] ?? 0);
                          acc = _v95;
                          const _v96: any = await rt.send(_v95, "message", [_v94]);
                          acc = _v96;
                          _v89 = _v96;
                          const _v97: any = 60;
                          acc = _v97;
                          const _v98: any = rt.set(this, "cycles", _v97);
                          acc = _v98;
                          _v89 = _v98;
                        }
                        acc = _v89;
                        _v84 = _v89;
                        break _branch87;
                      }
                      const _v99: any = 35;
                      acc = _v99;
                      _v84 = rt.op("==", _v86, _v99);
                      acc = _v84;
                      if (rt.truth(_v84)) {
                        let _v100: any = acc;
                        const _v101: any = rt.object(211, "leisureSuit");
                        acc = _v101;
                        const _v102: any = rt.object(211, "discount");
                        acc = _v102;
                        const _v103: any = await rt.send(_v102, "contains", [_v101]);
                        acc = _v103;
                        _v100 = _v103;
                        if (rt.truth(_v103)) {
                          const _v104: any = rt.object(211, "leisureSuit");
                          acc = _v104;
                          const _v105: any = await rt.send(_v104, "key", []);
                          acc = _v105;
                          const _v106: any = (args[0] ?? 0);
                          acc = _v106;
                          const _v107: any = await rt.send(_v106, "message", [_v105]);
                          acc = _v107;
                          _v100 = _v107;
                          const _v108: any = 60;
                          acc = _v108;
                          const _v109: any = rt.set(this, "cycles", _v108);
                          acc = _v109;
                          _v100 = _v109;
                        }
                        acc = _v100;
                        _v84 = _v100;
                        break _branch87;
                      }
                    }
                    acc = _v84;
                    _v81 = _v84;
                  }
                  acc = _v81;
                  _v14 = _v81;
                  break _branch16;
                }
                const _v110: any = 11;
                acc = _v110;
                _v14 = rt.op("==", _v15, _v110);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v111: any = acc;
                  let _v112: any = 1;
                  if (rt.truth(_v112)) {
                    const _v113: any = rt.global(550);
                    acc = _v113;
                    const _v114: any = rt.op("not", ...[_v113]);
                    acc = _v114;
                    _v112 = _v114;
                  }
                  if (rt.truth(_v112)) {
                    const _v115: any = rt.local(211, 6);
                    acc = _v115;
                    const _v116: any = 2;
                    acc = _v116;
                    const _v117: any = rt.op("<", ...[_v115, _v116]);
                    acc = _v117;
                    _v112 = _v117;
                  }
                  if (rt.truth(_v112)) {
                    const _v118: any = 0;
                    acc = _v118;
                    const _v119: any = 1;
                    acc = _v119;
                    const _v120: any = await rt.call(211, "Random", [_v118, _v119], this);
                    acc = _v120;
                    _v112 = _v120;
                  }
                  if (rt.truth(_v112)) {
                    const _v121: any = await rt.call(0, "proc0_11", [], this);
                    acc = _v121;
                    const _v122: any = 800;
                    acc = _v122;
                    const _v123: any = rt.op(">", ...[_v121, _v122]);
                    acc = _v123;
                    _v112 = _v123;
                  }
                  acc = _v112;
                  _v111 = _v112;
                  if (rt.truth(_v112)) {
                    const _v124: any = rt.setLocal(211, 6, rt.op("+", rt.local(211, 6), 1));
                    acc = _v124;
                    _v111 = _v124;
                    const _v125: any = rt.object(211, "baseballTickets");
                    acc = _v125;
                    const _v126: any = await rt.send(_v125, "key", []);
                    acc = _v126;
                    const _v127: any = rt.object(211, "concertTickets");
                    acc = _v127;
                    const _v128: any = await rt.send(_v127, "key", []);
                    acc = _v128;
                    const _v129: any = await rt.call(211, "Random", [_v126, _v128], this);
                    acc = _v129;
                    const _v130: any = (args[0] ?? 0);
                    acc = _v130;
                    const _v131: any = await rt.send(_v130, "message", [_v129]);
                    acc = _v131;
                    _v111 = _v131;
                    const _v132: any = 60;
                    acc = _v132;
                    const _v133: any = rt.set(this, "cycles", _v132);
                    acc = _v133;
                    _v111 = _v133;
                  }
                  acc = _v111;
                  _v14 = _v111;
                  break _branch16;
                }
                const _v134: any = (args[0] ?? 0);
                acc = _v134;
                const _v135: any = 1;
                acc = _v135;
                const _v136: any = await rt.superSend(this, {"script": 211, "name": "computerScript"}, "handleEvent", [_v134, _v135]);
                acc = _v136;
                _v14 = _v136;
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
      // SCI discount.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = rt.ref("global", 0, 100);
        acc = _v1;
        const _v2: any = 211;
        acc = _v2;
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = await rt.call(211, "Format", [_v1, _v2, _v3], this);
        acc = _v4;
        const _v5: any = rt.ref("global", 0, 100);
        acc = _v5;
        const _v6: any = 211;
        acc = _v6;
        const _v7: any = 1;
        acc = _v7;
        const _v8: any = await rt.call(211, "Format", [_v5, _v6, _v7], this);
        acc = _v8;
        const _v9: any = rt.ref("global", 0, 100);
        acc = _v9;
        const _v10: any = 211;
        acc = _v10;
        const _v11: any = 2;
        acc = _v11;
        const _v12: any = await rt.call(211, "Format", [_v9, _v10, _v11], this);
        acc = _v12;
        const _v13: any = rt.ref("global", 0, 100);
        acc = _v13;
        const _v14: any = 211;
        acc = _v14;
        const _v15: any = 3;
        acc = _v15;
        const _v16: any = await rt.call(211, "Format", [_v13, _v14, _v15], this);
        acc = _v16;
        const _v17: any = rt.ref("global", 0, 100);
        acc = _v17;
        const _v18: any = 211;
        acc = _v18;
        const _v19: any = 4;
        acc = _v19;
        const _v20: any = await rt.call(211, "Format", [_v17, _v18, _v19], this);
        acc = _v20;
        const _v21: any = rt.ref("global", 0, 100);
        acc = _v21;
        const _v22: any = 211;
        acc = _v22;
        const _v23: any = 5;
        acc = _v23;
        const _v24: any = await rt.call(211, "Format", [_v21, _v22, _v23], this);
        acc = _v24;
        const _v25: any = rt.ref("global", 0, 100);
        acc = _v25;
        const _v26: any = 211;
        acc = _v26;
        const _v27: any = 6;
        acc = _v27;
        const _v28: any = await rt.call(211, "Format", [_v25, _v26, _v27], this);
        acc = _v28;
        const _v29: any = rt.ref("global", 0, 100);
        acc = _v29;
        const _v30: any = 211;
        acc = _v30;
        const _v31: any = 7;
        acc = _v31;
        const _v32: any = await rt.call(211, "Format", [_v29, _v30, _v31], this);
        acc = _v32;
        const _v33: any = rt.ref("global", 0, 100);
        acc = _v33;
        const _v34: any = 211;
        acc = _v34;
        const _v35: any = 8;
        acc = _v35;
        const _v36: any = await rt.call(211, "Format", [_v33, _v34, _v35], this);
        acc = _v36;
        const _v37: any = rt.ref("global", 0, 100);
        acc = _v37;
        const _v38: any = 211;
        acc = _v38;
        const _v39: any = 9;
        acc = _v39;
        const _v40: any = await rt.call(211, "Format", [_v37, _v38, _v39], this);
        acc = _v40;
        const _v41: any = rt.ref("global", 0, 100);
        acc = _v41;
        const _v42: any = 211;
        acc = _v42;
        const _v43: any = 10;
        acc = _v43;
        const _v44: any = await rt.call(211, "Format", [_v41, _v42, _v43], this);
        acc = _v44;
        const _v45: any = rt.ref("global", 0, 100);
        acc = _v45;
        const _v46: any = 211;
        acc = _v46;
        const _v47: any = 11;
        acc = _v47;
        const _v48: any = await rt.call(211, "Format", [_v45, _v46, _v47], this);
        acc = _v48;
        const _v49: any = rt.ref("global", 0, 100);
        acc = _v49;
        const _v50: any = 211;
        acc = _v50;
        const _v51: any = 12;
        acc = _v51;
        const _v52: any = await rt.call(211, "Format", [_v49, _v50, _v51], this);
        acc = _v52;
        const _v53: any = rt.ref("global", 0, 100);
        acc = _v53;
        const _v54: any = 211;
        acc = _v54;
        const _v55: any = 13;
        acc = _v55;
        const _v56: any = await rt.call(211, "Format", [_v53, _v54, _v55], this);
        acc = _v56;
        const _v57: any = rt.ref("global", 0, 100);
        acc = _v57;
        const _v58: any = 211;
        acc = _v58;
        const _v59: any = 14;
        acc = _v59;
        const _v60: any = await rt.call(211, "Format", [_v57, _v58, _v59], this);
        acc = _v60;
        const _v61: any = rt.ref("global", 0, 100);
        acc = _v61;
        const _v62: any = 211;
        acc = _v62;
        const _v63: any = 15;
        acc = _v63;
        const _v64: any = await rt.call(211, "Format", [_v61, _v62, _v63], this);
        acc = _v64;
        const _v65: any = rt.ref("global", 0, 100);
        acc = _v65;
        const _v66: any = 211;
        acc = _v66;
        const _v67: any = 16;
        acc = _v67;
        const _v68: any = await rt.call(211, "Format", [_v65, _v66, _v67], this);
        acc = _v68;
        const _v69: any = rt.ref("global", 0, 100);
        acc = _v69;
        const _v70: any = 211;
        acc = _v70;
        const _v71: any = 17;
        acc = _v71;
        const _v72: any = await rt.call(211, "Format", [_v69, _v70, _v71], this);
        acc = _v72;
        const _v73: any = rt.ref("global", 0, 100);
        acc = _v73;
        const _v74: any = 211;
        acc = _v74;
        const _v75: any = 18;
        acc = _v75;
        const _v76: any = await rt.call(211, "Format", [_v73, _v74, _v75], this);
        acc = _v76;
        const _v77: any = rt.ref("global", 0, 100);
        acc = _v77;
        const _v78: any = 211;
        acc = _v78;
        const _v79: any = 19;
        acc = _v79;
        const _v80: any = await rt.call(211, "Format", [_v77, _v78, _v79], this);
        acc = _v80;
        const _v81: any = rt.ref("global", 0, 100);
        acc = _v81;
        const _v82: any = 211;
        acc = _v82;
        const _v83: any = 20;
        acc = _v83;
        const _v84: any = await rt.call(211, "Format", [_v81, _v82, _v83], this);
        acc = _v84;
        const _v85: any = rt.ref("global", 0, 100);
        acc = _v85;
        const _v86: any = 211;
        acc = _v86;
        const _v87: any = 21;
        acc = _v87;
        const _v88: any = await rt.call(211, "Format", [_v85, _v86, _v87], this);
        acc = _v88;
        const _v89: any = rt.ref("global", 0, 100);
        acc = _v89;
        const _v90: any = 211;
        acc = _v90;
        const _v91: any = 22;
        acc = _v91;
        const _v92: any = await rt.call(211, "Format", [_v89, _v90, _v91], this);
        acc = _v92;
        const _v93: any = rt.ref("global", 0, 100);
        acc = _v93;
        const _v94: any = 211;
        acc = _v94;
        const _v95: any = 23;
        acc = _v95;
        const _v96: any = await rt.call(211, "Format", [_v93, _v94, _v95], this);
        acc = _v96;
        const _v97: any = rt.ref("global", 0, 100);
        acc = _v97;
        const _v98: any = 211;
        acc = _v98;
        const _v99: any = 24;
        acc = _v99;
        const _v100: any = await rt.call(211, "Format", [_v97, _v98, _v99], this);
        acc = _v100;
        const _v101: any = rt.ref("global", 0, 100);
        acc = _v101;
        const _v102: any = 211;
        acc = _v102;
        const _v103: any = 25;
        acc = _v103;
        const _v104: any = await rt.call(211, "Format", [_v101, _v102, _v103], this);
        acc = _v104;
        const _v105: any = rt.ref("global", 0, 100);
        acc = _v105;
        const _v106: any = 211;
        acc = _v106;
        const _v107: any = 26;
        acc = _v107;
        const _v108: any = await rt.call(211, "Format", [_v105, _v106, _v107], this);
        acc = _v108;
        return acc;
      },
      // SCI discount.sc: localproc_1
      "localproc_1": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0];
        throw new Error("Unused decompiled procedure has no lexical super class: discount.localproc_1");
        const _v1: any = (temps[0] = acc);
        acc = _v1;
        let _v2: any = acc;
        const _v3: any = rt.global(416);
        acc = _v3;
        _v2 = _v3;
        if (rt.truth(_v3)) {
          const _v4: any = rt.global(418);
          acc = _v4;
          const _v5: any = await rt.send(_v4, "attributes", []);
          acc = _v5;
          const _v6: any = 65471;
          acc = _v6;
          const _v7: any = rt.op("&", ...[_v5, _v6]);
          acc = _v7;
          const _v8: any = rt.global(418);
          acc = _v8;
          const _v9: any = await rt.send(_v8, "attributes", [_v7]);
          acc = _v9;
          _v2 = _v9;
        }
        acc = _v2;
        const _v10: any = (temps[0] ?? 0);
        acc = _v10;
        return _v10;
        return acc;
      },
      // SCI discount.sc: localproc_2
      "localproc_2": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0];
        throw new Error("Unused decompiled procedure has no lexical super class: discount.localproc_2");
        const _v1: any = (temps[0] = acc);
        acc = _v1;
        let _v2: any = acc;
        const _v3: any = rt.global(416);
        acc = _v3;
        _v2 = _v3;
        if (rt.truth(_v3)) {
          const _v4: any = rt.global(418);
          acc = _v4;
          const _v5: any = await rt.send(_v4, "attributes", []);
          acc = _v5;
          const _v6: any = 65471;
          acc = _v6;
          const _v7: any = rt.op("&", ...[_v5, _v6]);
          acc = _v7;
          const _v8: any = rt.global(418);
          acc = _v8;
          const _v9: any = await rt.send(_v8, "attributes", [_v7]);
          acc = _v9;
          _v2 = _v9;
        }
        acc = _v2;
        const _v10: any = (temps[0] ?? 0);
        acc = _v10;
        return _v10;
        return acc;
      },
    },
    exports: {"0": "discount"},
  });
}
