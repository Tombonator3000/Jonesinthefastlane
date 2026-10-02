// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/inventories.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: a9598d6e3f686fc29ece829ac5e2feb026d772c788dc5b71425861ad14f43e82
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(231, {
    name: "inventories",
    uses: [0, 115, 255, 891, 999],
    locals: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
        name: "inventories",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI inventories.sc: inventories.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0];
            const _v1: any = 1;
            acc = _v1;
            const _v2: any = await rt.call(0, "proc0_17", [_v1], this);
            acc = _v2;
            const _v3: any = 0;
            acc = _v3;
            const _v4: any = rt.setGlobal(510, _v3);
            acc = _v4;
            const _v5: any = rt.object(231, "dialogKeyMouse");
            acc = _v5;
            const _v6: any = rt.set(this, "keyMouseList", _v5);
            acc = _v6;
            const _v7: any = rt.global(502);
            acc = _v7;
            const _v8: any = rt.set(this, "prevDialog", _v7);
            acc = _v8;
            const _v9: any = this;
            acc = _v9;
            const _v10: any = rt.setGlobal(502, _v9);
            acc = _v10;
            const _v11: any = await rt.call(0, "proc0_7", [], this);
            acc = _v11;
            const _v12: any = rt.global(443);
            acc = _v12;
            const _v13: any = (temps[3] = _v12);
            acc = _v13;
            const _v14: any = 1;
            acc = _v14;
            const _v15: any = rt.setGlobal(443, _v14);
            acc = _v15;
            const _v16: any = (args[0] ?? 0);
            acc = _v16;
            const _v17: any = rt.set(this, "client", _v16);
            acc = _v17;
            const _v18: any = 0;
            acc = _v18;
            let _v19: any = acc;
            const _v20: any = rt.global(535);
            acc = _v20;
            _v19 = _v20;
            if (rt.truth(_v20)) {
              const _v21: any = 142;
              acc = _v21;
              _v19 = _v21;
            } else {
              const _v22: any = 15;
              acc = _v22;
              _v19 = _v22;
            }
            acc = _v19;
            const _v23: any = rt.global(59);
            acc = _v23;
            const _v24: any = await rt.send(_v23, "color", [_v18]);
            acc = _v24;
            const _v25: any = await rt.send(_v23, "back", [_v19]);
            acc = _v25;
            const _v26: any = rt.global(413);
            acc = _v26;
            const _v27: any = rt.set(this, "prevTalker", _v26);
            acc = _v27;
            const _v28: any = 0;
            acc = _v28;
            const _v29: any = rt.setGlobal(413, _v28);
            acc = _v29;
            const _v30: any = rt.global(59);
            acc = _v30;
            const _v31: any = rt.object(231, "background");
            acc = _v31;
            const _v32: any = rt.object(231, "invSelector");
            acc = _v32;
            const _v33: any = rt.object(231, "doneButton");
            acc = _v33;
            const _v34: any = this;
            acc = _v34;
            const _v35: any = await rt.send(_v34, "window", [_v30]);
            acc = _v35;
            const _v36: any = await rt.send(_v34, "add", [_v31, _v32, _v33]);
            acc = _v36;
            const _v37: any = await rt.call(231, "localproc_0", [], this);
            acc = _v37;
            const _v38: any = rt.ref("local", 231, 0);
            acc = _v38;
            const _v39: any = 17;
            acc = _v39;
            const _v40: any = 20;
            acc = _v40;
            const _v41: any = rt.object(231, "invSelector");
            acc = _v41;
            const _v42: any = await rt.send(_v41, "text", [_v38]);
            acc = _v42;
            const _v43: any = await rt.send(_v41, "moveTo", [_v39, _v40]);
            acc = _v43;
            const _v44: any = 102;
            acc = _v44;
            const _v45: any = 153;
            acc = _v45;
            const _v46: any = 69;
            acc = _v46;
            const _v47: any = 44;
            acc = _v47;
            const _v48: any = 0;
            acc = _v48;
            const _v49: any = 15;
            acc = _v49;
            const _v50: any = this;
            acc = _v50;
            const _v51: any = await rt.send(_v50, "eachElementDo", [_v44]);
            acc = _v51;
            const _v52: any = await rt.send(_v50, "eachElementDo", [_v45]);
            acc = _v52;
            const _v53: any = await rt.send(_v50, "moveTo", [_v46, _v47]);
            acc = _v53;
            const _v54: any = await rt.send(_v50, "open", [_v48, _v49]);
            acc = _v54;
            const _v55: any = rt.object(891, "KeyMouse");
            acc = _v55;
            const _v56: any = await rt.send(_v55, "curItem", []);
            acc = _v56;
            const _v57: any = (temps[4] = _v56);
            acc = _v57;
            const _v58: any = this;
            acc = _v58;
            const _v59: any = rt.get(this, "keyMouseList");
            acc = _v59;
            const _v60: any = rt.object(231, "doneButton");
            acc = _v60;
            const _v61: any = await rt.call(0, "proc0_9", [_v58, _v59, _v60], this);
            acc = _v61;
            const _v62: any = rt.get(this, "keyMouseList");
            acc = _v62;
            const _v63: any = rt.object(891, "KeyMouse");
            acc = _v63;
            const _v64: any = await rt.send(_v63, "setList", [_v62]);
            acc = _v64;
            const _v65: any = 0;
            acc = _v65;
            const _v66: any = 0;
            acc = _v66;
            const _v67: any = this;
            acc = _v67;
            const _v68: any = await rt.send(_v67, "doit", [_v65, _v66]);
            acc = _v68;
            const _v69: any = (temps[0] = _v68);
            acc = _v69;
            let _v70: any = acc;
            const _v71: any = (temps[0] ?? 0);
            acc = _v71;
            const _v72: any = await rt.call(231, "IsObject", [_v71], this);
            acc = _v72;
            _v70 = _v72;
            if (rt.truth(_v72)) {
              let _v73: any = acc;
              const _v74: any = (temps[0] ?? 0);
              acc = _v74;
              const _v75: any = this;
              acc = _v75;
              const _v76: any = await rt.send(_v75, "contains", [_v74]);
              acc = _v76;
              _v73 = _v76;
              if (rt.truth(_v76)) {
                const _v77: any = 0;
                acc = _v77;
                const _v78: any = (temps[0] = _v77);
                acc = _v78;
                _v73 = _v78;
              }
              acc = _v73;
              _v70 = _v73;
            } else {
              const _v79: any = 1;
              acc = _v79;
              const _v80: any = (temps[0] = _v79);
              acc = _v80;
              _v70 = _v80;
            }
            acc = _v70;
            let _v81: any = acc;
            const _v82: any = rt.get(this, "prevDialog");
            acc = _v82;
            _v81 = _v82;
            if (rt.truth(_v82)) {
              const _v83: any = rt.get(this, "prevDialog");
              acc = _v83;
              const _v84: any = await rt.send(_v83, "keyMouseList", []);
              acc = _v84;
              _v81 = _v84;
            } else {
              const _v85: any = rt.global(432);
              acc = _v85;
              _v81 = _v85;
            }
            acc = _v81;
            const _v86: any = rt.object(891, "KeyMouse");
            acc = _v86;
            const _v87: any = await rt.send(_v86, "setList", [_v81]);
            acc = _v87;
            const _v88: any = (temps[4] ?? 0);
            acc = _v88;
            const _v89: any = rt.object(891, "KeyMouse");
            acc = _v89;
            const _v90: any = await rt.send(_v89, "curItem", [_v88]);
            acc = _v90;
            let _v91: any = acc;
            const _v92: any = rt.global(447);
            acc = _v92;
            _v91 = _v92;
            if (rt.truth(_v92)) {
              const _v93: any = (temps[4] ?? 0);
              acc = _v93;
              const _v94: any = rt.object(891, "KeyMouse");
              acc = _v94;
              const _v95: any = await rt.send(_v94, "setCursor", [_v93]);
              acc = _v95;
              _v91 = _v95;
            }
            acc = _v91;
            const _v96: any = rt.get(this, "keyMouseList");
            acc = _v96;
            const _v97: any = await rt.send(_v96, "release", []);
            acc = _v97;
            const _v98: any = await rt.send(_v96, "dispose", []);
            acc = _v98;
            const _v99: any = rt.get(this, "prevDialog");
            acc = _v99;
            const _v100: any = rt.setGlobal(502, _v99);
            acc = _v100;
            const _v101: any = this;
            acc = _v101;
            const _v102: any = 291;
            acc = _v102;
            const _v103: any = await rt.call(0, "proc0_15", [_v101, _v102], this);
            acc = _v103;
            const _v104: any = this;
            acc = _v104;
            const _v105: any = await rt.send(_v104, "dispose", []);
            acc = _v105;
            const _v106: any = rt.get(this, "prevTalker");
            acc = _v106;
            const _v107: any = rt.setGlobal(413, _v106);
            acc = _v107;
            const _v108: any = (temps[3] ?? 0);
            acc = _v108;
            const _v109: any = rt.setGlobal(443, _v108);
            acc = _v109;
            const _v110: any = 11;
            acc = _v110;
            const _v111: any = rt.get(this, "nsTop");
            acc = _v111;
            const _v112: any = 1;
            acc = _v112;
            const _v113: any = rt.op("+", ...[_v111, _v112]);
            acc = _v113;
            const _v114: any = rt.get(this, "nsLeft");
            acc = _v114;
            const _v115: any = rt.get(this, "nsBottom");
            acc = _v115;
            const _v116: any = 1;
            acc = _v116;
            const _v117: any = rt.op("-", ...[_v115, _v116]);
            acc = _v117;
            const _v118: any = rt.get(this, "nsRight");
            acc = _v118;
            const _v119: any = 3;
            acc = _v119;
            const _v120: any = rt.op("-", ...[_v118, _v119]);
            acc = _v120;
            const _v121: any = 2;
            acc = _v121;
            const _v122: any = 0;
            acc = _v122;
            const _v123: any = 0;
            acc = _v123;
            const _v124: any = await rt.call(231, "Graph", [_v110, _v113, _v114, _v117, _v120, _v121, _v122, _v123], this);
            acc = _v124;
            const _v125: any = 1;
            acc = _v125;
            const _v126: any = rt.setGlobal(510, _v125);
            acc = _v126;
            const _v127: any = 0;
            acc = _v127;
            const _v128: any = await rt.call(0, "proc0_17", [_v127], this);
            acc = _v128;
            const _v129: any = (temps[0] ?? 0);
            acc = _v129;
            const _acc130: any = acc;
            const _v131: any = 231;
            acc = _v131;
            const _args132: any[] = [_v131];
            await rt.call(231, "DisposeScript", _args132, this);
            const _v133: any = _args132.length === 2 ? _args132[1] : _acc130;
            acc = _v133;
            return acc;
          },
        },
      },
      {
        name: "background",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"view": 505, "loop": 4},
        methods: {
        },
      },
      {
        name: "doneButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 99, "nsTop": 108, "nsLeft": 143, "view": 250, "loop": 2},
        methods: {
        },
      },
      {
        name: "invSelector",
        className: "DSelector",
        parent: {"script": 255, "name": "DSelector"},
        isClass: false,
        properties: {"type": 7, "font": 4, "x": 25, "y": 7},
        methods: {
        },
      },
    ],
    procedures: {
      // SCI inventories.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const _v1: any = rt.global(302);
        acc = _v1;
        const _v2: any = await rt.send(_v1, "calcNetWorth", []);
        acc = _v2;
        const _v5: any = 0;
        acc = _v5;
        const _v6: any = (temps[31] = _v5);
        acc = _v6;
        _loop3: for (;;) {
          const _v7: any = (temps[31] ?? 0);
          acc = _v7;
          const _v8: any = 700;
          acc = _v8;
          const _v9: any = rt.op("<", ...[_v7, _v8]);
          acc = _v9;
          if (!rt.truth(_v9)) break _loop3;
          _continue4: {
            const _v10: any = 0;
            acc = _v10;
            const _v11: any = (temps[31] ?? 0);
            acc = _v11;
            const _v12: any = rt.setLocal(231, (0 + (Number(_v11) & 65535)), _v10);
            acc = _v12;
          }
          const _v13: any = (temps[31] = rt.op("+", (temps[31] ?? 0), 1));
          acc = _v13;
        }
        const _v14: any = rt.global(302);
        acc = _v14;
        const _v15: any = await rt.send(_v14, "durables", []);
        acc = _v15;
        const _v16: any = (temps[32] = _v15);
        acc = _v16;
        const _v17: any = 0;
        acc = _v17;
        const _v18: any = (temps[33] = _v17);
        acc = _v18;
        let _v19: any = acc;
        const _v20: any = (temps[32] ?? 0);
        acc = _v20;
        const _v21: any = await rt.send(_v20, "size", []);
        acc = _v21;
        _v19 = _v21;
        if (rt.truth(_v21)) {
          const _v24: any = 0;
          acc = _v24;
          const _v25: any = (temps[31] = _v24);
          acc = _v25;
          _loop22: for (;;) {
            const _v26: any = (temps[31] ?? 0);
            acc = _v26;
            const _v27: any = (temps[32] ?? 0);
            acc = _v27;
            const _v28: any = await rt.send(_v27, "size", []);
            acc = _v28;
            const _v29: any = rt.op("<", ...[_v26, _v28]);
            acc = _v29;
            if (!rt.truth(_v29)) break _loop22;
            _continue23: {
              const _v30: any = (temps[31] ?? 0);
              acc = _v30;
              const _v31: any = (temps[32] ?? 0);
              acc = _v31;
              const _v32: any = await rt.send(_v31, "at", [_v30]);
              acc = _v32;
              const _v33: any = await rt.send(_v32, "pricePaid", []);
              acc = _v33;
              const _v34: any = (temps[31] ?? 0);
              acc = _v34;
              const _v35: any = (temps[32] ?? 0);
              acc = _v35;
              const _v36: any = await rt.send(_v35, "at", [_v34]);
              acc = _v36;
              const _v37: any = await rt.send(_v36, "quantity", []);
              acc = _v37;
              const _v38: any = rt.op("*", ...[_v33, _v37]);
              acc = _v38;
              const _v39: any = (temps[33] = rt.op("+", (temps[33] ?? 0), _v38));
              acc = _v39;
            }
            const _v40: any = (temps[31] = rt.op("+", (temps[31] ?? 0), 1));
            acc = _v40;
          }
          _v19 = acc;
        }
        acc = _v19;
        const _v41: any = rt.ref("local", 231, 0);
        acc = _v41;
        const _v42: any = 231;
        acc = _v42;
        const _v43: any = 0;
        acc = _v43;
        const _v44: any = rt.global(302);
        acc = _v44;
        const _v45: any = await rt.send(_v44, "actualName", []);
        acc = _v45;
        const _v46: any = await rt.call(231, "Format", [_v41, _v42, _v43, _v45], this);
        acc = _v46;
        let _v47: any = acc;
        const _v48: any = rt.global(302);
        acc = _v48;
        const _v49: any = await rt.send(_v48, "worksAt", []);
        acc = _v49;
        _v47 = _v49;
        if (rt.truth(_v49)) {
          const _v50: any = rt.ref("local", 231, 0);
          acc = _v50;
          const _v51: any = await rt.call(231, "StrEnd", [_v50], this);
          acc = _v51;
          const _v52: any = 231;
          acc = _v52;
          const _v53: any = 1;
          acc = _v53;
          const _v54: any = 700;
          acc = _v54;
          const _v55: any = rt.global(302);
          acc = _v55;
          const _v56: any = await rt.send(_v55, "worksAt", []);
          acc = _v56;
          const _v57: any = 71;
          acc = _v57;
          const _v58: any = rt.op("+", ...[_v56, _v57]);
          acc = _v58;
          const _v59: any = await rt.call(231, "Format", [_v51, _v52, _v53, _v54, _v58], this);
          acc = _v59;
          _v47 = _v59;
          const _v60: any = rt.ref("local", 231, 0);
          acc = _v60;
          const _v61: any = await rt.call(231, "StrEnd", [_v60], this);
          acc = _v61;
          const _v62: any = 231;
          acc = _v62;
          const _v63: any = 2;
          acc = _v63;
          const _v64: any = 700;
          acc = _v64;
          const _v65: any = rt.global(302);
          acc = _v65;
          const _v66: any = await rt.send(_v65, "occupation", []);
          acc = _v66;
          const _v67: any = await rt.call(231, "Format", [_v61, _v62, _v63, _v64, _v66], this);
          acc = _v67;
          _v47 = _v67;
          const _v68: any = rt.ref("local", 231, 0);
          acc = _v68;
          const _v69: any = await rt.call(231, "StrEnd", [_v68], this);
          acc = _v69;
          const _v70: any = 231;
          acc = _v70;
          const _v71: any = 3;
          acc = _v71;
          const _v72: any = rt.global(302);
          acc = _v72;
          const _v73: any = await rt.send(_v72, "wage", []);
          acc = _v73;
          const _v74: any = await rt.call(231, "Format", [_v69, _v70, _v71, _v73], this);
          acc = _v74;
          _v47 = _v74;
        } else {
          const _v75: any = rt.ref("local", 231, 0);
          acc = _v75;
          const _v76: any = await rt.call(231, "StrEnd", [_v75], this);
          acc = _v76;
          const _v77: any = 231;
          acc = _v77;
          const _v78: any = 4;
          acc = _v78;
          const _v79: any = 231;
          acc = _v79;
          const _v80: any = 5;
          acc = _v80;
          const _v81: any = await rt.call(231, "Format", [_v76, _v77, _v78, _v79, _v80], this);
          acc = _v81;
          _v47 = _v81;
        }
        acc = _v47;
        const _v82: any = rt.ref("local", 231, 0);
        acc = _v82;
        const _v83: any = await rt.call(231, "StrEnd", [_v82], this);
        acc = _v83;
        const _v84: any = 231;
        acc = _v84;
        const _v85: any = 6;
        acc = _v85;
        const _v86: any = rt.global(302);
        acc = _v86;
        const _v87: any = await rt.send(_v86, "cashHi", []);
        acc = _v87;
        const _v88: any = rt.global(302);
        acc = _v88;
        const _v89: any = await rt.send(_v88, "cash", []);
        acc = _v89;
        const _v90: any = await rt.call(115, "proc115_0", [_v87, _v89], this);
        acc = _v90;
        const _v91: any = await rt.call(231, "Format", [_v83, _v84, _v85, _v90], this);
        acc = _v91;
        const _v92: any = rt.ref("local", 231, 0);
        acc = _v92;
        const _v93: any = await rt.call(231, "StrEnd", [_v92], this);
        acc = _v93;
        const _v94: any = 231;
        acc = _v94;
        const _v95: any = 7;
        acc = _v95;
        const _v96: any = rt.global(302);
        acc = _v96;
        const _v97: any = await rt.send(_v96, "bankBalHi", []);
        acc = _v97;
        const _v98: any = rt.global(302);
        acc = _v98;
        const _v99: any = await rt.send(_v98, "bankBal", []);
        acc = _v99;
        const _v100: any = await rt.call(115, "proc115_0", [_v97, _v99], this);
        acc = _v100;
        const _v101: any = await rt.call(231, "Format", [_v93, _v94, _v95, _v100], this);
        acc = _v101;
        const _v102: any = rt.ref("local", 231, 0);
        acc = _v102;
        const _v103: any = await rt.call(231, "StrEnd", [_v102], this);
        acc = _v103;
        const _v104: any = 231;
        acc = _v104;
        const _v105: any = 8;
        acc = _v105;
        const _v106: any = rt.global(302);
        acc = _v106;
        const _v107: any = await rt.send(_v106, "rentOwed", []);
        acc = _v107;
        const _v108: any = await rt.call(231, "Format", [_v103, _v104, _v105, _v107], this);
        acc = _v108;
        const _v109: any = rt.ref("local", 231, 0);
        acc = _v109;
        const _v110: any = await rt.call(231, "StrEnd", [_v109], this);
        acc = _v110;
        const _v111: any = 231;
        acc = _v111;
        const _v112: any = 9;
        acc = _v112;
        const _v113: any = rt.global(302);
        acc = _v113;
        const _v114: any = await rt.send(_v113, "loanBal", []);
        acc = _v114;
        const _v115: any = await rt.call(231, "Format", [_v110, _v111, _v112, _v114], this);
        acc = _v115;
        const _v116: any = rt.ref("local", 231, 0);
        acc = _v116;
        const _v117: any = await rt.call(231, "StrEnd", [_v116], this);
        acc = _v117;
        const _v118: any = 231;
        acc = _v118;
        const _v119: any = 10;
        acc = _v119;
        const _v120: any = (temps[33] ?? 0);
        acc = _v120;
        const _v121: any = await rt.call(231, "Format", [_v117, _v118, _v119, _v120], this);
        acc = _v121;
        const _v122: any = rt.ref("local", 231, 0);
        acc = _v122;
        const _v123: any = await rt.call(231, "StrEnd", [_v122], this);
        acc = _v123;
        const _v124: any = 231;
        acc = _v124;
        const _v125: any = 11;
        acc = _v125;
        const _v126: any = rt.global(302);
        acc = _v126;
        const _v127: any = await rt.send(_v126, "invAssHi", []);
        acc = _v127;
        const _v128: any = rt.global(302);
        acc = _v128;
        const _v129: any = await rt.send(_v128, "invAss", []);
        acc = _v129;
        const _v130: any = await rt.call(115, "proc115_0", [_v127, _v129], this);
        acc = _v130;
        const _v131: any = await rt.call(231, "Format", [_v123, _v124, _v125, _v130], this);
        acc = _v131;
        const _v132: any = rt.ref("local", 231, 0);
        acc = _v132;
        const _v133: any = await rt.call(231, "StrEnd", [_v132], this);
        acc = _v133;
        const _v134: any = 231;
        acc = _v134;
        const _v135: any = 12;
        acc = _v135;
        const _v136: any = rt.global(302);
        acc = _v136;
        const _v137: any = await rt.send(_v136, "netWorthHi", []);
        acc = _v137;
        const _v138: any = rt.global(302);
        acc = _v138;
        const _v139: any = await rt.send(_v138, "netWorth", []);
        acc = _v139;
        const _v140: any = await rt.call(115, "proc115_0", [_v137, _v139], this);
        acc = _v140;
        const _v141: any = await rt.call(231, "Format", [_v133, _v134, _v135, _v140], this);
        acc = _v141;
        const _v142: any = rt.ref("local", 231, 0);
        acc = _v142;
        const _v143: any = await rt.call(231, "StrEnd", [_v142], this);
        acc = _v143;
        const _v144: any = 231;
        acc = _v144;
        const _v145: any = 0;
        acc = _v145;
        const _v146: any = 231;
        acc = _v146;
        const _v147: any = 13;
        acc = _v147;
        const _v148: any = await rt.call(231, "Format", [_v143, _v144, _v145, _v146, _v147], this);
        acc = _v148;
        let _v149: any = acc;
        let _v150: any = 1;
        if (rt.truth(_v150)) {
          const _v151: any = 36;
          acc = _v151;
          const _v152: any = rt.global(302);
          acc = _v152;
          const _v153: any = await rt.send(_v152, "consumables", []);
          acc = _v153;
          const _v154: any = await rt.send(_v153, "objectAtIndex", [_v151]);
          acc = _v154;
          const _v155: any = (temps[34] = _v154);
          acc = _v155;
          _v150 = _v155;
        }
        if (rt.truth(_v150)) {
          const _v156: any = (temps[34] ?? 0);
          acc = _v156;
          const _v157: any = await rt.send(_v156, "quantity", []);
          acc = _v157;
          _v150 = _v157;
        }
        acc = _v150;
        _v149 = _v150;
        if (rt.truth(_v150)) {
          const _v158: any = rt.ref("local", 231, 0);
          acc = _v158;
          const _v159: any = await rt.call(231, "StrEnd", [_v158], this);
          acc = _v159;
          const _v160: any = 231;
          acc = _v160;
          const _v161: any = 0;
          acc = _v161;
          const _v162: any = 231;
          acc = _v162;
          const _v163: any = 14;
          acc = _v163;
          const _v164: any = (temps[34] ?? 0);
          acc = _v164;
          const _v165: any = await rt.call(231, "Format", [_v159, _v160, _v161, _v162, _v163, _v164], this);
          acc = _v165;
          _v149 = _v165;
        }
        acc = _v149;
        let _v166: any = acc;
        let _v167: any = 1;
        if (rt.truth(_v167)) {
          const _v168: any = 35;
          acc = _v168;
          const _v169: any = rt.global(302);
          acc = _v169;
          const _v170: any = await rt.send(_v169, "consumables", []);
          acc = _v170;
          const _v171: any = await rt.send(_v170, "objectAtIndex", [_v168]);
          acc = _v171;
          const _v172: any = (temps[34] = _v171);
          acc = _v172;
          _v167 = _v172;
        }
        if (rt.truth(_v167)) {
          const _v173: any = (temps[34] ?? 0);
          acc = _v173;
          const _v174: any = await rt.send(_v173, "quantity", []);
          acc = _v174;
          _v167 = _v174;
        }
        acc = _v167;
        _v166 = _v167;
        if (rt.truth(_v167)) {
          const _v175: any = rt.ref("local", 231, 0);
          acc = _v175;
          const _v176: any = await rt.call(231, "StrEnd", [_v175], this);
          acc = _v176;
          const _v177: any = 231;
          acc = _v177;
          const _v178: any = 0;
          acc = _v178;
          const _v179: any = 231;
          acc = _v179;
          const _v180: any = 15;
          acc = _v180;
          const _v181: any = (temps[34] ?? 0);
          acc = _v181;
          const _v182: any = await rt.call(231, "Format", [_v176, _v177, _v178, _v179, _v180, _v181], this);
          acc = _v182;
          _v166 = _v182;
        }
        acc = _v166;
        let _v183: any = acc;
        let _v184: any = 1;
        if (rt.truth(_v184)) {
          const _v185: any = 34;
          acc = _v185;
          const _v186: any = rt.global(302);
          acc = _v186;
          const _v187: any = await rt.send(_v186, "consumables", []);
          acc = _v187;
          const _v188: any = await rt.send(_v187, "objectAtIndex", [_v185]);
          acc = _v188;
          const _v189: any = (temps[34] = _v188);
          acc = _v189;
          _v184 = _v189;
        }
        if (rt.truth(_v184)) {
          const _v190: any = (temps[34] ?? 0);
          acc = _v190;
          const _v191: any = await rt.send(_v190, "quantity", []);
          acc = _v191;
          _v184 = _v191;
        }
        acc = _v184;
        _v183 = _v184;
        if (rt.truth(_v184)) {
          const _v192: any = rt.ref("local", 231, 0);
          acc = _v192;
          const _v193: any = await rt.call(231, "StrEnd", [_v192], this);
          acc = _v193;
          const _v194: any = 231;
          acc = _v194;
          const _v195: any = 0;
          acc = _v195;
          const _v196: any = 231;
          acc = _v196;
          const _v197: any = 16;
          acc = _v197;
          const _v198: any = (temps[34] ?? 0);
          acc = _v198;
          const _v199: any = await rt.call(231, "Format", [_v193, _v194, _v195, _v196, _v197, _v198], this);
          acc = _v199;
          _v183 = _v199;
        }
        acc = _v183;
        let _v200: any = acc;
        let _v201: any = 1;
        if (rt.truth(_v201)) {
          const _v202: any = 1;
          acc = _v202;
          const _v203: any = rt.global(302);
          acc = _v203;
          const _v204: any = await rt.send(_v203, "consumables", []);
          acc = _v204;
          const _v205: any = await rt.send(_v204, "objectAtIndex", [_v202]);
          acc = _v205;
          const _v206: any = (temps[34] = _v205);
          acc = _v206;
          _v201 = _v206;
        }
        if (rt.truth(_v201)) {
          const _v207: any = (temps[34] ?? 0);
          acc = _v207;
          const _v208: any = await rt.send(_v207, "quantity", []);
          acc = _v208;
          _v201 = _v208;
        }
        acc = _v201;
        _v200 = _v201;
        if (rt.truth(_v201)) {
          const _v209: any = rt.ref("local", 231, 0);
          acc = _v209;
          const _v210: any = await rt.call(231, "StrEnd", [_v209], this);
          acc = _v210;
          const _v211: any = 231;
          acc = _v211;
          const _v212: any = 17;
          acc = _v212;
          const _v213: any = (temps[34] ?? 0);
          acc = _v213;
          const _v214: any = await rt.send(_v213, "quantity", []);
          acc = _v214;
          const _v215: any = await rt.call(231, "Format", [_v210, _v211, _v212, _v214], this);
          acc = _v215;
          _v200 = _v215;
        }
        acc = _v200;
        const _v216: any = rt.global(302);
        acc = _v216;
        const _v217: any = await rt.send(_v216, "durables", []);
        acc = _v217;
        const _v218: any = (temps[32] = _v217);
        acc = _v218;
        let _v219: any = acc;
        const _v220: any = (temps[32] ?? 0);
        acc = _v220;
        const _v221: any = await rt.send(_v220, "size", []);
        acc = _v221;
        _v219 = _v221;
        if (rt.truth(_v221)) {
          const _v224: any = 0;
          acc = _v224;
          const _v225: any = (temps[31] = _v224);
          acc = _v225;
          _loop222: for (;;) {
            const _v226: any = (temps[31] ?? 0);
            acc = _v226;
            const _v227: any = (temps[32] ?? 0);
            acc = _v227;
            const _v228: any = await rt.send(_v227, "size", []);
            acc = _v228;
            const _v229: any = rt.op("<", ...[_v226, _v228]);
            acc = _v229;
            if (!rt.truth(_v229)) break _loop222;
            _continue223: {
              let _v230: any = acc;
              const _v231: any = (temps[31] ?? 0);
              acc = _v231;
              const _v232: any = (temps[32] ?? 0);
              acc = _v232;
              const _v233: any = await rt.send(_v232, "at", [_v231]);
              acc = _v233;
              const _v234: any = await rt.send(_v233, "quantity", []);
              acc = _v234;
              _v230 = _v234;
              if (rt.truth(_v234)) {
                const _v235: any = rt.ref("local", 231, 0);
                acc = _v235;
                const _v236: any = await rt.call(231, "StrEnd", [_v235], this);
                acc = _v236;
                const _v237: any = 231;
                acc = _v237;
                const _v238: any = 18;
                acc = _v238;
                const _v239: any = (temps[31] ?? 0);
                acc = _v239;
                const _v240: any = (temps[32] ?? 0);
                acc = _v240;
                const _v241: any = await rt.send(_v240, "at", [_v239]);
                acc = _v241;
                const _v242: any = await rt.send(_v241, "quantity", []);
                acc = _v242;
                const _v243: any = 700;
                acc = _v243;
                const _v244: any = (temps[31] ?? 0);
                acc = _v244;
                const _v245: any = (temps[32] ?? 0);
                acc = _v245;
                const _v246: any = await rt.send(_v245, "at", [_v244]);
                acc = _v246;
                const _v247: any = await rt.send(_v246, "indexNum", []);
                acc = _v247;
                const _v248: any = await rt.call(231, "Format", [_v236, _v237, _v238, _v242, _v243, _v247], this);
                acc = _v248;
                _v230 = _v248;
              }
              acc = _v230;
            }
            const _v249: any = (temps[31] = rt.op("+", (temps[31] ?? 0), 1));
            acc = _v249;
          }
          _v219 = acc;
        }
        acc = _v219;
        const _v250: any = rt.ref("local", 231, 0);
        acc = _v250;
        const _v251: any = await rt.call(231, "StrEnd", [_v250], this);
        acc = _v251;
        const _v252: any = 231;
        acc = _v252;
        const _v253: any = 0;
        acc = _v253;
        const _v254: any = 231;
        acc = _v254;
        const _v255: any = 19;
        acc = _v255;
        const _v256: any = await rt.call(231, "Format", [_v251, _v252, _v253, _v254, _v255], this);
        acc = _v256;
        let _v257: any = acc;
        const _v258: any = rt.global(302);
        acc = _v258;
        const _v259: any = await rt.send(_v258, "numDegrees", []);
        acc = _v259;
        _v257 = _v259;
        if (rt.truth(_v259)) {
          const _v260: any = rt.global(302);
          acc = _v260;
          const _v261: any = await rt.send(_v260, "education", []);
          acc = _v261;
          const _v262: any = (temps[32] = _v261);
          acc = _v262;
          _v257 = _v262;
          let _v263: any = acc;
          const _v264: any = (temps[32] ?? 0);
          acc = _v264;
          const _v265: any = await rt.send(_v264, "size", []);
          acc = _v265;
          _v263 = _v265;
          if (rt.truth(_v265)) {
            const _v268: any = 0;
            acc = _v268;
            const _v269: any = (temps[31] = _v268);
            acc = _v269;
            _loop266: for (;;) {
              const _v270: any = (temps[31] ?? 0);
              acc = _v270;
              const _v271: any = (temps[32] ?? 0);
              acc = _v271;
              const _v272: any = await rt.send(_v271, "size", []);
              acc = _v272;
              const _v273: any = rt.op("<", ...[_v270, _v272]);
              acc = _v273;
              if (!rt.truth(_v273)) break _loop266;
              _continue267: {
                let _v274: any = acc;
                const _v275: any = (temps[31] ?? 0);
                acc = _v275;
                const _v276: any = (temps[32] ?? 0);
                acc = _v276;
                const _v277: any = await rt.send(_v276, "at", [_v275]);
                acc = _v277;
                const _v278: any = await rt.send(_v277, "indexNum", []);
                acc = _v278;
                const _v279: any = rt.global(302);
                acc = _v279;
                const _v280: any = await rt.send(_v279, "hasDegree", [_v278]);
                acc = _v280;
                _v274 = _v280;
                if (rt.truth(_v280)) {
                  const _v281: any = rt.ref("local", 231, 0);
                  acc = _v281;
                  const _v282: any = await rt.call(231, "StrEnd", [_v281], this);
                  acc = _v282;
                  const _v283: any = 231;
                  acc = _v283;
                  const _v284: any = 4;
                  acc = _v284;
                  const _v285: any = 700;
                  acc = _v285;
                  const _v286: any = (temps[31] ?? 0);
                  acc = _v286;
                  const _v287: any = (temps[32] ?? 0);
                  acc = _v287;
                  const _v288: any = await rt.send(_v287, "at", [_v286]);
                  acc = _v288;
                  const _v289: any = await rt.send(_v288, "indexNum", []);
                  acc = _v289;
                  const _v290: any = await rt.call(231, "Format", [_v282, _v283, _v284, _v285, _v289], this);
                  acc = _v290;
                  _v274 = _v290;
                }
                acc = _v274;
              }
              const _v291: any = (temps[31] = rt.op("+", (temps[31] ?? 0), 1));
              acc = _v291;
            }
            _v263 = acc;
          }
          acc = _v263;
          _v257 = _v263;
        }
        acc = _v257;
        const _v292: any = rt.ref("local", 231, 0);
        acc = _v292;
        const _v293: any = await rt.call(231, "StrEnd", [_v292], this);
        acc = _v293;
        const _v294: any = 231;
        acc = _v294;
        const _v295: any = 0;
        acc = _v295;
        const _v296: any = 231;
        acc = _v296;
        const _v297: any = 20;
        acc = _v297;
        const _v298: any = await rt.call(231, "Format", [_v293, _v294, _v295, _v296, _v297], this);
        acc = _v298;
        const _v299: any = rt.global(302);
        acc = _v299;
        const _v300: any = await rt.send(_v299, "investments", []);
        acc = _v300;
        const _v301: any = (temps[32] = _v300);
        acc = _v301;
        const _v304: any = 0;
        acc = _v304;
        const _v305: any = (temps[31] = _v304);
        acc = _v305;
        _loop302: for (;;) {
          const _v306: any = (temps[31] ?? 0);
          acc = _v306;
          const _v307: any = (temps[32] ?? 0);
          acc = _v307;
          const _v308: any = await rt.send(_v307, "size", []);
          acc = _v308;
          const _v309: any = rt.op("<", ...[_v306, _v308]);
          acc = _v309;
          if (!rt.truth(_v309)) break _loop302;
          _continue303: {
            let _v310: any = acc;
            const _v311: any = (temps[31] ?? 0);
            acc = _v311;
            const _v312: any = (temps[32] ?? 0);
            acc = _v312;
            const _v313: any = await rt.send(_v312, "at", [_v311]);
            acc = _v313;
            const _v314: any = await rt.send(_v313, "shares", []);
            acc = _v314;
            _v310 = _v314;
            if (rt.truth(_v314)) {
              const _v315: any = rt.ref("local", 231, 0);
              acc = _v315;
              const _v316: any = await rt.call(231, "StrEnd", [_v315], this);
              acc = _v316;
              const _v317: any = 231;
              acc = _v317;
              const _v318: any = 4;
              acc = _v318;
              const _v319: any = rt.ref("global", 0, 100);
              acc = _v319;
              const _v320: any = 231;
              acc = _v320;
              const _v321: any = 21;
              acc = _v321;
              const _v322: any = (temps[31] ?? 0);
              acc = _v322;
              const _v323: any = (temps[32] ?? 0);
              acc = _v323;
              const _v324: any = await rt.send(_v323, "at", [_v322]);
              acc = _v324;
              const _v325: any = await rt.send(_v324, "shares", []);
              acc = _v325;
              const _v326: any = 700;
              acc = _v326;
              const _v327: any = (temps[31] ?? 0);
              acc = _v327;
              const _v328: any = (temps[32] ?? 0);
              acc = _v328;
              const _v329: any = await rt.send(_v328, "at", [_v327]);
              acc = _v329;
              const _v330: any = await rt.send(_v329, "indexNum", []);
              acc = _v330;
              const _v331: any = await rt.call(231, "Format", [_v319, _v320, _v321, _v325, _v326, _v330], this);
              acc = _v331;
              const _v332: any = await rt.call(231, "Format", [_v316, _v317, _v318, _v331], this);
              acc = _v332;
              _v310 = _v332;
            }
            acc = _v310;
          }
          const _v333: any = (temps[31] = rt.op("+", (temps[31] ?? 0), 1));
          acc = _v333;
        }
        return acc;
      },
    },
    exports: {"0": "inventories"},
  });
}
