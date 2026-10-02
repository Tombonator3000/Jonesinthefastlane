// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/applianceJobs.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: a0edab7057446ea2a0915431a22e7cd44a1c81cd3bcb013829ce0851f7d35b3b
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(219, {
    name: "applianceJobs",
    uses: [0, 104, 206, 255, 891, 999],
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
        name: "applianceJobs",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI applianceJobs.sc: applianceJobs.init
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
              const _v4: any = 0;
              acc = _v4;
              const _v5: any = rt.global(477);
              acc = _v5;
              const _v6: any = await rt.send(_v5, "pause", [_v4]);
              acc = _v6;
              _v1 = _v6;
              const _v7: any = rt.global(413);
              acc = _v7;
              const _v8: any = rt.set(this, "prevTalker", _v7);
              acc = _v8;
              _v1 = _v8;
              const _v9: any = 0;
              acc = _v9;
              const _v10: any = rt.setGlobal(413, _v9);
              acc = _v10;
              _v1 = _v10;
              const _v11: any = 1;
              acc = _v11;
              const _v12: any = await rt.call(0, "proc0_17", [_v11], this);
              acc = _v12;
              _v1 = _v12;
              const _v13: any = rt.object(219, "dialogKeyMouse");
              acc = _v13;
              const _v14: any = rt.set(this, "keyMouseList", _v13);
              acc = _v14;
              _v1 = _v14;
              const _v15: any = rt.global(502);
              acc = _v15;
              const _v16: any = rt.set(this, "prevDialog", _v15);
              acc = _v16;
              _v1 = _v16;
              const _v17: any = this;
              acc = _v17;
              const _v18: any = rt.setGlobal(502, _v17);
              acc = _v18;
              _v1 = _v18;
              const _v19: any = (args[0] ?? 0);
              acc = _v19;
              const _v20: any = rt.set(this, "client", _v19);
              acc = _v20;
              _v1 = _v20;
              const _v21: any = 8;
              acc = _v21;
              const _v22: any = rt.setGlobal(419, _v21);
              acc = _v22;
              _v1 = _v22;
              let _v23: any = acc;
              const _v24: any = rt.global(302);
              acc = _v24;
              const _v25: any = await rt.send(_v24, "playing", []);
              acc = _v25;
              const _v26: any = 29;
              acc = _v26;
              const _v27: any = rt.op("==", ...[_v25, _v26]);
              acc = _v27;
              _v23 = _v27;
              if (rt.truth(_v27)) {
                const _v28: any = rt.object(206, "JobScript");
                acc = _v28;
                const _v29: any = -1;
                acc = _v29;
                const _v30: any = this;
                acc = _v30;
                const _v31: any = await rt.send(_v30, "setScript", [_v28, _v29]);
                acc = _v31;
                _v23 = _v31;
                const _v32: any = rt.object(206, "JobScript");
                acc = _v32;
                const _v33: any = await rt.send(_v32, "cue", []);
                acc = _v33;
                _v23 = _v33;
              }
              acc = _v23;
              _v1 = _v23;
              const _v34: any = rt.global(59);
              acc = _v34;
              const _v35: any = rt.object(219, "background");
              acc = _v35;
              const _v36: any = rt.object(219, "jobsAvailable");
              acc = _v36;
              const _v37: any = rt.object(219, "salesperson");
              acc = _v37;
              const _v38: any = rt.object(219, "electronicsRepair");
              acc = _v38;
              const _v39: any = rt.object(219, "manager");
              acc = _v39;
              const _v40: any = rt.object(219, "exitButton");
              acc = _v40;
              const _v41: any = 102;
              acc = _v41;
              const _v42: any = 153;
              acc = _v42;
              const _v43: any = rt.get(this, "client");
              acc = _v43;
              const _v44: any = await rt.send(_v43, "nsLeft", []);
              acc = _v44;
              const _v45: any = rt.get(this, "client");
              acc = _v45;
              const _v46: any = await rt.send(_v45, "nsTop", []);
              acc = _v46;
              const _v47: any = 0;
              acc = _v47;
              const _v48: any = 15;
              acc = _v48;
              const _v49: any = this;
              acc = _v49;
              const _v50: any = await rt.send(_v49, "window", [_v34]);
              acc = _v50;
              const _v51: any = await rt.send(_v49, "add", [_v35, _v36, _v37, _v38, _v39, _v40]);
              acc = _v51;
              const _v52: any = await rt.send(_v49, "eachElementDo", [_v41]);
              acc = _v52;
              const _v53: any = await rt.send(_v49, "eachElementDo", [_v42]);
              acc = _v53;
              const _v54: any = await rt.send(_v49, "moveTo", [_v44, _v46]);
              acc = _v54;
              const _v55: any = await rt.send(_v49, "open", [_v47, _v48]);
              acc = _v55;
              _v1 = _v55;
              const _v56: any = rt.object(891, "KeyMouse");
              acc = _v56;
              const _v57: any = await rt.send(_v56, "curItem", []);
              acc = _v57;
              const _v58: any = (temps[1] = _v57);
              acc = _v58;
              _v1 = _v58;
              const _v59: any = this;
              acc = _v59;
              const _v60: any = rt.get(this, "keyMouseList");
              acc = _v60;
              const _v61: any = rt.object(219, "salesperson");
              acc = _v61;
              const _v62: any = await rt.call(0, "proc0_9", [_v59, _v60, _v61], this);
              acc = _v62;
              _v1 = _v62;
              const _v63: any = rt.get(this, "keyMouseList");
              acc = _v63;
              const _v64: any = rt.object(891, "KeyMouse");
              acc = _v64;
              const _v65: any = await rt.send(_v64, "setList", [_v63]);
              acc = _v65;
              _v1 = _v65;
            } else {
              const _v66: any = rt.get(this, "theItem");
              acc = _v66;
              const _v67: any = rt.object(891, "KeyMouse");
              acc = _v67;
              const _v68: any = await rt.send(_v67, "setCursor", [_v66]);
              acc = _v68;
              _v1 = _v68;
              const _v69: any = 1;
              acc = _v69;
              const _v70: any = rt.setGlobal(519, _v69);
              acc = _v70;
              _v1 = _v70;
            }
            acc = _v1;
            const _v71: any = 0;
            acc = _v71;
            const _v72: any = 0;
            acc = _v72;
            const _v73: any = this;
            acc = _v73;
            const _v74: any = await rt.send(_v73, "doit", [_v71, _v72]);
            acc = _v74;
            const _v75: any = (temps[0] = _v74);
            acc = _v75;
            let _v76: any = acc;
            const _v77: any = (temps[0] ?? 0);
            acc = _v77;
            const _v78: any = await rt.call(219, "IsObject", [_v77], this);
            acc = _v78;
            _v76 = _v78;
            if (rt.truth(_v78)) {
              let _v79: any = acc;
              const _v80: any = (temps[0] ?? 0);
              acc = _v80;
              const _v81: any = this;
              acc = _v81;
              const _v82: any = await rt.send(_v81, "contains", [_v80]);
              acc = _v82;
              _v79 = _v82;
              if (rt.truth(_v82)) {
                const _v83: any = 0;
                acc = _v83;
                const _v84: any = (temps[0] = _v83);
                acc = _v84;
                _v79 = _v84;
              }
              acc = _v79;
              _v76 = _v79;
            } else {
              const _v85: any = 1;
              acc = _v85;
              const _v86: any = (temps[0] = _v85);
              acc = _v86;
              _v76 = _v86;
            }
            acc = _v76;
            let _v87: any = acc;
            const _v88: any = rt.get(this, "prevDialog");
            acc = _v88;
            _v87 = _v88;
            if (rt.truth(_v88)) {
              const _v89: any = rt.get(this, "prevDialog");
              acc = _v89;
              const _v90: any = await rt.send(_v89, "keyMouseList", []);
              acc = _v90;
              _v87 = _v90;
            } else {
              const _v91: any = rt.global(432);
              acc = _v91;
              _v87 = _v91;
            }
            acc = _v87;
            const _v92: any = rt.object(891, "KeyMouse");
            acc = _v92;
            const _v93: any = await rt.send(_v92, "setList", [_v87]);
            acc = _v93;
            const _v94: any = (temps[1] ?? 0);
            acc = _v94;
            const _v95: any = rt.object(891, "KeyMouse");
            acc = _v95;
            const _v96: any = await rt.send(_v95, "curItem", [_v94]);
            acc = _v96;
            let _v97: any = acc;
            const _v98: any = rt.global(447);
            acc = _v98;
            _v97 = _v98;
            if (rt.truth(_v98)) {
              const _v99: any = (temps[1] ?? 0);
              acc = _v99;
              const _v100: any = rt.object(891, "KeyMouse");
              acc = _v100;
              const _v101: any = await rt.send(_v100, "setCursor", [_v99]);
              acc = _v101;
              _v97 = _v101;
            }
            acc = _v97;
            const _v102: any = rt.get(this, "keyMouseList");
            acc = _v102;
            const _v103: any = await rt.send(_v102, "release", []);
            acc = _v103;
            const _v104: any = rt.get(this, "keyMouseList");
            acc = _v104;
            const _v105: any = await rt.send(_v104, "dispose", []);
            acc = _v105;
            const _v106: any = rt.get(this, "prevDialog");
            acc = _v106;
            const _v107: any = rt.setGlobal(502, _v106);
            acc = _v107;
            const _v108: any = this;
            acc = _v108;
            const _v109: any = 291;
            acc = _v109;
            const _v110: any = await rt.call(0, "proc0_15", [_v108, _v109], this);
            acc = _v110;
            const _v111: any = this;
            acc = _v111;
            const _v112: any = await rt.send(_v111, "dispose", []);
            acc = _v112;
            const _v113: any = 0;
            acc = _v113;
            const _v114: any = await rt.call(0, "proc0_17", [_v113], this);
            acc = _v114;
            const _v115: any = rt.get(this, "prevTalker");
            acc = _v115;
            const _v116: any = rt.setGlobal(413, _v115);
            acc = _v116;
            let _v117: any = acc;
            const _v118: any = rt.global(519);
            acc = _v118;
            _v117 = _v118;
            if (rt.truth(_v118)) {
              const _v119: any = rt.global(502);
              acc = _v119;
              const _v120: any = await rt.send(_v119, "draw", []);
              acc = _v120;
              _v117 = _v120;
              const _v121: any = await rt.call(206, "proc206_1", [], this);
              acc = _v121;
              _v117 = _v121;
            }
            acc = _v117;
            const _v122: any = (temps[0] ?? 0);
            acc = _v122;
            const _acc123: any = acc;
            const _v124: any = 219;
            acc = _v124;
            const _args125: any[] = [_v124];
            await rt.call(219, "DisposeScript", _args125, this);
            const _v126: any = _args125.length === 2 ? _args125[1] : _acc123;
            acc = _v126;
            return acc;
          },
        },
      },
      {
        name: "background",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"view": 706, "cel": 1},
        methods: {
        },
      },
      {
        name: "jobsAvailable",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"state": 0, "nsTop": 35, "nsLeft": 32, "text": "Socket City Jobs Available:", "shadowColor": 107},
        methods: {
        },
      },
      {
        name: "salesperson",
        className: "JobDItem",
        parent: {"script": 206, "name": "JobDItem"},
        isClass: false,
        properties: {"nsTop": 50, "nsLeft": 25, "key": 1, "text": "Salesperson         ||", "shadowColor": 107, "indexNum": 47, "basePrice": 5, "dependibility": 30, "experience": 20, "jobNum": 11, "uniform": 35},
        methods: {
        },
      },
      {
        name: "electronicsRepair",
        className: "JobDItem",
        parent: {"script": 206, "name": "JobDItem"},
        isClass: false,
        properties: {"nsTop": 60, "nsLeft": 25, "key": 2, "text": "Electronic's Repair   ", "shadowColor": 107, "indexNum": 64, "basePrice": 11, "dependibility": 40, "experience": 40, "education": 11, "jobNum": 12},
        methods: {
        },
      },
      {
        name: "manager",
        className: "JobDItem",
        parent: {"script": 206, "name": "JobDItem"},
        isClass: false,
        properties: {"nsTop": 70, "nsLeft": 25, "key": 3, "text": "Manager            |", "shadowColor": 107, "indexNum": 46, "basePrice": 14, "dependibility": 40, "experience": 40, "education": 14, "education2": 11, "jobNum": 13, "uniform": 34},
        methods: {
        },
      },
      {
        name: "exitButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 99, "nsTop": 108, "nsLeft": 143, "view": 250},
        methods: {
          // SCI applianceJobs.sc: exitButton.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 219, "name": "exitButton"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = -2;
            acc = _v3;
            const _v4: any = rt.setGlobal(433, _v3);
            acc = _v4;
            const _v5: any = (temps[0] ?? 0);
            acc = _v5;
            return _v5;
            return acc;
          },
        },
      },
    ],
    procedures: {
    },
    exports: {"0": "applianceJobs"},
  });
}
