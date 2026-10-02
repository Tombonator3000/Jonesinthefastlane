// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/factoryJobs.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 87e8d2f73e8d55e23028cb88a79e560d1de594a3269da4bc3a9b51e3e3228fd3
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(221, {
    name: "factoryJobs",
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
        name: "factoryJobs",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI factoryJobs.sc: factoryJobs.init
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
              const _v11: any = 3;
              acc = _v11;
              const _v12: any = await rt.call(0, "proc0_17", [_v11], this);
              acc = _v12;
              _v1 = _v12;
              const _v13: any = rt.object(221, "dialogKeyMouse");
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
              const _v21: any = 5;
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
              const _v35: any = rt.object(221, "background");
              acc = _v35;
              const _v36: any = rt.object(221, "jobsAvailable");
              acc = _v36;
              const _v37: any = rt.object(221, "janitor");
              acc = _v37;
              const _v38: any = rt.object(221, "assemblyWorker");
              acc = _v38;
              const _v39: any = rt.object(221, "secretary");
              acc = _v39;
              const _v40: any = rt.object(221, "machinistsHelper");
              acc = _v40;
              const _v41: any = rt.object(221, "executiveSecretary");
              acc = _v41;
              const _v42: any = rt.object(221, "machinist");
              acc = _v42;
              const _v43: any = rt.object(221, "departmentManager");
              acc = _v43;
              const _v44: any = rt.object(221, "engineer");
              acc = _v44;
              const _v45: any = rt.object(221, "generalManager");
              acc = _v45;
              const _v46: any = rt.object(221, "exitButton");
              acc = _v46;
              const _v47: any = 102;
              acc = _v47;
              const _v48: any = 153;
              acc = _v48;
              const _v49: any = rt.get(this, "client");
              acc = _v49;
              const _v50: any = await rt.send(_v49, "nsLeft", []);
              acc = _v50;
              const _v51: any = rt.get(this, "client");
              acc = _v51;
              const _v52: any = await rt.send(_v51, "nsTop", []);
              acc = _v52;
              const _v53: any = 0;
              acc = _v53;
              const _v54: any = 15;
              acc = _v54;
              const _v55: any = this;
              acc = _v55;
              const _v56: any = await rt.send(_v55, "window", [_v34]);
              acc = _v56;
              const _v57: any = await rt.send(_v55, "add", [_v35, _v36, _v37, _v38, _v39, _v40, _v41, _v42, _v43, _v44, _v45, _v46]);
              acc = _v57;
              const _v58: any = await rt.send(_v55, "eachElementDo", [_v47]);
              acc = _v58;
              const _v59: any = await rt.send(_v55, "eachElementDo", [_v48]);
              acc = _v59;
              const _v60: any = await rt.send(_v55, "moveTo", [_v50, _v52]);
              acc = _v60;
              const _v61: any = await rt.send(_v55, "open", [_v53, _v54]);
              acc = _v61;
              _v1 = _v61;
              const _v62: any = rt.object(891, "KeyMouse");
              acc = _v62;
              const _v63: any = await rt.send(_v62, "curItem", []);
              acc = _v63;
              const _v64: any = (temps[1] = _v63);
              acc = _v64;
              _v1 = _v64;
              const _v65: any = this;
              acc = _v65;
              const _v66: any = rt.get(this, "keyMouseList");
              acc = _v66;
              const _v67: any = rt.object(221, "assemblyWorker");
              acc = _v67;
              const _v68: any = await rt.call(0, "proc0_9", [_v65, _v66, _v67], this);
              acc = _v68;
              _v1 = _v68;
              const _v69: any = rt.get(this, "keyMouseList");
              acc = _v69;
              const _v70: any = rt.object(891, "KeyMouse");
              acc = _v70;
              const _v71: any = await rt.send(_v70, "setList", [_v69]);
              acc = _v71;
              _v1 = _v71;
            } else {
              const _v72: any = rt.get(this, "theItem");
              acc = _v72;
              const _v73: any = rt.object(891, "KeyMouse");
              acc = _v73;
              const _v74: any = await rt.send(_v73, "setCursor", [_v72]);
              acc = _v74;
              _v1 = _v74;
              const _v75: any = 1;
              acc = _v75;
              const _v76: any = rt.setGlobal(519, _v75);
              acc = _v76;
              _v1 = _v76;
            }
            acc = _v1;
            const _v77: any = 0;
            acc = _v77;
            const _v78: any = 0;
            acc = _v78;
            const _v79: any = this;
            acc = _v79;
            const _v80: any = await rt.send(_v79, "doit", [_v77, _v78]);
            acc = _v80;
            const _v81: any = (temps[0] = _v80);
            acc = _v81;
            let _v82: any = acc;
            const _v83: any = (temps[0] ?? 0);
            acc = _v83;
            const _v84: any = await rt.call(221, "IsObject", [_v83], this);
            acc = _v84;
            _v82 = _v84;
            if (rt.truth(_v84)) {
              let _v85: any = acc;
              const _v86: any = (temps[0] ?? 0);
              acc = _v86;
              const _v87: any = this;
              acc = _v87;
              const _v88: any = await rt.send(_v87, "contains", [_v86]);
              acc = _v88;
              _v85 = _v88;
              if (rt.truth(_v88)) {
                const _v89: any = 0;
                acc = _v89;
                const _v90: any = (temps[0] = _v89);
                acc = _v90;
                _v85 = _v90;
              }
              acc = _v85;
              _v82 = _v85;
            } else {
              const _v91: any = 1;
              acc = _v91;
              const _v92: any = (temps[0] = _v91);
              acc = _v92;
              _v82 = _v92;
            }
            acc = _v82;
            let _v93: any = acc;
            const _v94: any = rt.get(this, "prevDialog");
            acc = _v94;
            _v93 = _v94;
            if (rt.truth(_v94)) {
              const _v95: any = rt.get(this, "prevDialog");
              acc = _v95;
              const _v96: any = await rt.send(_v95, "keyMouseList", []);
              acc = _v96;
              _v93 = _v96;
            } else {
              const _v97: any = rt.global(432);
              acc = _v97;
              _v93 = _v97;
            }
            acc = _v93;
            const _v98: any = rt.object(891, "KeyMouse");
            acc = _v98;
            const _v99: any = await rt.send(_v98, "setList", [_v93]);
            acc = _v99;
            const _v100: any = (temps[1] ?? 0);
            acc = _v100;
            const _v101: any = rt.object(891, "KeyMouse");
            acc = _v101;
            const _v102: any = await rt.send(_v101, "curItem", [_v100]);
            acc = _v102;
            let _v103: any = acc;
            const _v104: any = rt.global(447);
            acc = _v104;
            _v103 = _v104;
            if (rt.truth(_v104)) {
              const _v105: any = (temps[1] ?? 0);
              acc = _v105;
              const _v106: any = rt.object(891, "KeyMouse");
              acc = _v106;
              const _v107: any = await rt.send(_v106, "setCursor", [_v105]);
              acc = _v107;
              _v103 = _v107;
            }
            acc = _v103;
            const _v108: any = rt.get(this, "keyMouseList");
            acc = _v108;
            const _v109: any = await rt.send(_v108, "release", []);
            acc = _v109;
            const _v110: any = rt.get(this, "keyMouseList");
            acc = _v110;
            const _v111: any = await rt.send(_v110, "dispose", []);
            acc = _v111;
            const _v112: any = rt.get(this, "prevDialog");
            acc = _v112;
            const _v113: any = rt.setGlobal(502, _v112);
            acc = _v113;
            const _v114: any = this;
            acc = _v114;
            const _v115: any = 291;
            acc = _v115;
            const _v116: any = await rt.call(0, "proc0_15", [_v114, _v115], this);
            acc = _v116;
            const _v117: any = this;
            acc = _v117;
            const _v118: any = await rt.send(_v117, "dispose", []);
            acc = _v118;
            const _v119: any = 0;
            acc = _v119;
            const _v120: any = await rt.call(0, "proc0_17", [_v119], this);
            acc = _v120;
            const _v121: any = rt.get(this, "prevTalker");
            acc = _v121;
            const _v122: any = rt.setGlobal(413, _v121);
            acc = _v122;
            let _v123: any = acc;
            const _v124: any = rt.global(519);
            acc = _v124;
            _v123 = _v124;
            if (rt.truth(_v124)) {
              const _v125: any = rt.global(502);
              acc = _v125;
              const _v126: any = await rt.send(_v125, "draw", []);
              acc = _v126;
              _v123 = _v126;
              const _v127: any = await rt.call(206, "proc206_1", [], this);
              acc = _v127;
              _v123 = _v127;
            }
            acc = _v123;
            const _v128: any = (temps[0] ?? 0);
            acc = _v128;
            const _acc129: any = acc;
            const _v130: any = 221;
            acc = _v130;
            const _args131: any[] = [_v130];
            await rt.call(221, "DisposeScript", _args131, this);
            const _v132: any = _args131.length === 2 ? _args131[1] : _acc129;
            acc = _v132;
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
        properties: {"state": 0, "nsTop": 19, "nsLeft": 40, "text": "Factory Jobs Available:", "shadowColor": 107},
        methods: {
        },
      },
      {
        name: "janitor",
        className: "JobDItem",
        parent: {"script": 206, "name": "JobDItem"},
        isClass: false,
        properties: {"nsTop": 30, "nsLeft": 25, "key": 1, "text": "Janitor            |||", "shadowColor": 107, "indexNum": 43, "basePrice": 7, "dependibility": 30, "experience": 30, "jobNum": 18},
        methods: {
        },
      },
      {
        name: "assemblyWorker",
        className: "JobDItem",
        parent: {"script": 206, "name": "JobDItem"},
        isClass: false,
        properties: {"nsTop": 38, "nsLeft": 25, "key": 2, "text": "Assembly Worker    ||||", "shadowColor": 107, "indexNum": 50, "basePrice": 8, "dependibility": 30, "experience": 30, "education": 10, "jobNum": 17},
        methods: {
        },
      },
      {
        name: "secretary",
        className: "JobDItem",
        parent: {"script": 206, "name": "JobDItem"},
        isClass: false,
        properties: {"nsTop": 46, "nsLeft": 25, "key": 3, "text": "Secretary          ||", "shadowColor": 107, "indexNum": 51, "basePrice": 9, "dependibility": 40, "experience": 40, "education": 14, "jobNum": 19, "uniform": 35},
        methods: {
        },
      },
      {
        name: "machinistsHelper",
        className: "JobDItem",
        parent: {"script": 206, "name": "JobDItem"},
        isClass: false,
        properties: {"nsTop": 54, "nsLeft": 25, "key": 4, "text": "Machinist's Helper   |", "shadowColor": 107, "indexNum": 52, "basePrice": 10, "dependibility": 40, "experience": 40, "education": 12, "jobNum": 20},
        methods: {
        },
      },
      {
        name: "executiveSecretary",
        className: "JobDItem",
        parent: {"script": 206, "name": "JobDItem"},
        isClass: false,
        properties: {"nsTop": 62, "nsLeft": 25, "key": 5, "text": "Executive Secretary ||", "shadowColor": 107, "indexNum": 53, "basePrice": 18, "dependibility": 50, "experience": 50, "education": 15, "jobNum": 21, "uniform": 34},
        methods: {
        },
      },
      {
        name: "machinist",
        className: "JobDItem",
        parent: {"script": 206, "name": "JobDItem"},
        isClass: false,
        properties: {"nsTop": 70, "nsLeft": 25, "key": 6, "text": "Machinist           ", "shadowColor": 107, "indexNum": 54, "basePrice": 19, "dependibility": 50, "experience": 50, "education": 13, "jobNum": 22},
        methods: {
        },
      },
      {
        name: "departmentManager",
        className: "JobDItem",
        parent: {"script": 206, "name": "JobDItem"},
        isClass: false,
        properties: {"nsTop": 78, "nsLeft": 25, "key": 7, "text": "Department Manager ", "shadowColor": 107, "indexNum": 56, "basePrice": 22, "dependibility": 60, "experience": 60, "education": 14, "education2": 13, "jobNum": 23, "uniform": 34},
        methods: {
        },
      },
      {
        name: "engineer",
        className: "JobDItem",
        parent: {"script": 206, "name": "JobDItem"},
        isClass: false,
        properties: {"nsTop": 86, "nsLeft": 25, "key": 8, "text": "Engineer            ", "shadowColor": 107, "indexNum": 55, "basePrice": 23, "dependibility": 60, "experience": 60, "education": 13, "education2": 14, "jobNum": 24, "uniform": 34},
        methods: {
        },
      },
      {
        name: "generalManager",
        className: "JobDItem",
        parent: {"script": 206, "name": "JobDItem"},
        isClass: false,
        properties: {"nsTop": 94, "nsLeft": 25, "key": 10, "text": "General Manager    ||", "shadowColor": 107, "indexNum": 57, "basePrice": 25, "dependibility": 70, "experience": 70, "education": 15, "education2": 13, "jobNum": 25, "uniform": 34},
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
          // SCI factoryJobs.sc: exitButton.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 221, "name": "exitButton"}, "doit", []);
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
    exports: {"0": "factoryJobs"},
  });
}
