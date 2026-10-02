// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/bankJobs.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 558be993e072b4e38445e88cd3b7758afe893290ddd6f51a6b73e1f7d1ed0531
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(222, {
    name: "bankJobs",
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
        name: "bankJobs",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI bankJobs.sc: bankJobs.init
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
              const _v11: any = 2;
              acc = _v11;
              const _v12: any = await rt.call(0, "proc0_17", [_v11], this);
              acc = _v12;
              _v1 = _v12;
              const _v13: any = rt.object(222, "dialogKeyMouse");
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
              const _v21: any = 4;
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
              const _v35: any = rt.object(222, "background");
              acc = _v35;
              const _v36: any = rt.object(222, "jobsAvailable");
              acc = _v36;
              const _v37: any = rt.object(222, "janitor");
              acc = _v37;
              const _v38: any = rt.object(222, "teller");
              acc = _v38;
              const _v39: any = rt.object(222, "assistManager");
              acc = _v39;
              const _v40: any = rt.object(222, "manager");
              acc = _v40;
              const _v41: any = rt.object(222, "broker");
              acc = _v41;
              const _v42: any = rt.object(222, "exitButton");
              acc = _v42;
              const _v43: any = 102;
              acc = _v43;
              const _v44: any = 153;
              acc = _v44;
              const _v45: any = rt.get(this, "client");
              acc = _v45;
              const _v46: any = await rt.send(_v45, "nsLeft", []);
              acc = _v46;
              const _v47: any = rt.get(this, "client");
              acc = _v47;
              const _v48: any = await rt.send(_v47, "nsTop", []);
              acc = _v48;
              const _v49: any = 0;
              acc = _v49;
              const _v50: any = 15;
              acc = _v50;
              const _v51: any = this;
              acc = _v51;
              const _v52: any = await rt.send(_v51, "window", [_v34]);
              acc = _v52;
              const _v53: any = await rt.send(_v51, "add", [_v35, _v36, _v37, _v38, _v39, _v40, _v41, _v42]);
              acc = _v53;
              const _v54: any = await rt.send(_v51, "eachElementDo", [_v43]);
              acc = _v54;
              const _v55: any = await rt.send(_v51, "eachElementDo", [_v44]);
              acc = _v55;
              const _v56: any = await rt.send(_v51, "moveTo", [_v46, _v48]);
              acc = _v56;
              const _v57: any = await rt.send(_v51, "open", [_v49, _v50]);
              acc = _v57;
              _v1 = _v57;
              const _v58: any = rt.object(891, "KeyMouse");
              acc = _v58;
              const _v59: any = await rt.send(_v58, "curItem", []);
              acc = _v59;
              const _v60: any = (temps[1] = _v59);
              acc = _v60;
              _v1 = _v60;
              const _v61: any = this;
              acc = _v61;
              const _v62: any = rt.get(this, "keyMouseList");
              acc = _v62;
              const _v63: any = rt.object(222, "janitor");
              acc = _v63;
              const _v64: any = await rt.call(0, "proc0_9", [_v61, _v62, _v63], this);
              acc = _v64;
              _v1 = _v64;
              const _v65: any = rt.get(this, "keyMouseList");
              acc = _v65;
              const _v66: any = rt.object(891, "KeyMouse");
              acc = _v66;
              const _v67: any = await rt.send(_v66, "setList", [_v65]);
              acc = _v67;
              _v1 = _v67;
            } else {
              const _v68: any = rt.get(this, "theItem");
              acc = _v68;
              const _v69: any = rt.object(891, "KeyMouse");
              acc = _v69;
              const _v70: any = await rt.send(_v69, "setCursor", [_v68]);
              acc = _v70;
              _v1 = _v70;
              const _v71: any = 1;
              acc = _v71;
              const _v72: any = rt.setGlobal(519, _v71);
              acc = _v72;
              _v1 = _v72;
            }
            acc = _v1;
            const _v73: any = 0;
            acc = _v73;
            const _v74: any = 0;
            acc = _v74;
            const _v75: any = this;
            acc = _v75;
            const _v76: any = await rt.send(_v75, "doit", [_v73, _v74]);
            acc = _v76;
            const _v77: any = (temps[0] = _v76);
            acc = _v77;
            let _v78: any = acc;
            const _v79: any = (temps[0] ?? 0);
            acc = _v79;
            const _v80: any = await rt.call(222, "IsObject", [_v79], this);
            acc = _v80;
            _v78 = _v80;
            if (rt.truth(_v80)) {
              let _v81: any = acc;
              const _v82: any = (temps[0] ?? 0);
              acc = _v82;
              const _v83: any = this;
              acc = _v83;
              const _v84: any = await rt.send(_v83, "contains", [_v82]);
              acc = _v84;
              _v81 = _v84;
              if (rt.truth(_v84)) {
                const _v85: any = 0;
                acc = _v85;
                const _v86: any = (temps[0] = _v85);
                acc = _v86;
                _v81 = _v86;
              }
              acc = _v81;
              _v78 = _v81;
            } else {
              const _v87: any = 1;
              acc = _v87;
              const _v88: any = (temps[0] = _v87);
              acc = _v88;
              _v78 = _v88;
            }
            acc = _v78;
            let _v89: any = acc;
            const _v90: any = rt.get(this, "prevDialog");
            acc = _v90;
            _v89 = _v90;
            if (rt.truth(_v90)) {
              const _v91: any = rt.get(this, "prevDialog");
              acc = _v91;
              const _v92: any = await rt.send(_v91, "keyMouseList", []);
              acc = _v92;
              _v89 = _v92;
            } else {
              const _v93: any = rt.global(432);
              acc = _v93;
              _v89 = _v93;
            }
            acc = _v89;
            const _v94: any = rt.object(891, "KeyMouse");
            acc = _v94;
            const _v95: any = await rt.send(_v94, "setList", [_v89]);
            acc = _v95;
            const _v96: any = (temps[1] ?? 0);
            acc = _v96;
            const _v97: any = rt.object(891, "KeyMouse");
            acc = _v97;
            const _v98: any = await rt.send(_v97, "curItem", [_v96]);
            acc = _v98;
            let _v99: any = acc;
            const _v100: any = rt.global(447);
            acc = _v100;
            _v99 = _v100;
            if (rt.truth(_v100)) {
              const _v101: any = (temps[1] ?? 0);
              acc = _v101;
              const _v102: any = rt.object(891, "KeyMouse");
              acc = _v102;
              const _v103: any = await rt.send(_v102, "setCursor", [_v101]);
              acc = _v103;
              _v99 = _v103;
            }
            acc = _v99;
            const _v104: any = rt.get(this, "keyMouseList");
            acc = _v104;
            const _v105: any = await rt.send(_v104, "release", []);
            acc = _v105;
            const _v106: any = rt.get(this, "keyMouseList");
            acc = _v106;
            const _v107: any = await rt.send(_v106, "dispose", []);
            acc = _v107;
            const _v108: any = rt.get(this, "prevDialog");
            acc = _v108;
            const _v109: any = rt.setGlobal(502, _v108);
            acc = _v109;
            const _v110: any = this;
            acc = _v110;
            const _v111: any = 291;
            acc = _v111;
            const _v112: any = await rt.call(0, "proc0_15", [_v110, _v111], this);
            acc = _v112;
            const _v113: any = this;
            acc = _v113;
            const _v114: any = await rt.send(_v113, "dispose", []);
            acc = _v114;
            const _v115: any = 0;
            acc = _v115;
            const _v116: any = await rt.call(0, "proc0_17", [_v115], this);
            acc = _v116;
            const _v117: any = rt.get(this, "prevTalker");
            acc = _v117;
            const _v118: any = rt.setGlobal(413, _v117);
            acc = _v118;
            let _v119: any = acc;
            const _v120: any = rt.global(519);
            acc = _v120;
            _v119 = _v120;
            if (rt.truth(_v120)) {
              const _v121: any = rt.global(502);
              acc = _v121;
              const _v122: any = await rt.send(_v121, "draw", []);
              acc = _v122;
              _v119 = _v122;
              const _v123: any = await rt.call(206, "proc206_1", [], this);
              acc = _v123;
              _v119 = _v123;
            }
            acc = _v119;
            const _v124: any = (temps[0] ?? 0);
            acc = _v124;
            const _acc125: any = acc;
            const _v126: any = 222;
            acc = _v126;
            const _args127: any[] = [_v126];
            await rt.call(222, "DisposeScript", _args127, this);
            const _v128: any = _args127.length === 2 ? _args127[1] : _acc125;
            acc = _v128;
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
        properties: {"state": 0, "nsTop": 30, "nsLeft": 45, "text": "Bank Jobs Available:", "shadowColor": 107},
        methods: {
        },
      },
      {
        name: "janitor",
        className: "JobDItem",
        parent: {"script": 206, "name": "JobDItem"},
        isClass: false,
        properties: {"nsTop": 45, "nsLeft": 25, "key": 1, "text": "Janitor            |", "shadowColor": 107, "indexNum": 43, "basePrice": 6, "dependibility": 20, "experience": 20, "jobNum": 26},
        methods: {
        },
      },
      {
        name: "teller",
        className: "JobDItem",
        parent: {"script": 206, "name": "JobDItem"},
        isClass: false,
        properties: {"nsTop": 55, "nsLeft": 25, "key": 2, "text": "Teller              ||", "shadowColor": 107, "indexNum": 58, "basePrice": 10, "dependibility": 40, "experience": 40, "education": 14, "jobNum": 27, "uniform": 35},
        methods: {
        },
      },
      {
        name: "assistManager",
        className: "JobDItem",
        parent: {"script": 206, "name": "JobDItem"},
        isClass: false,
        properties: {"nsTop": 65, "nsLeft": 25, "key": 3, "text": "Assistant Manager  ", "shadowColor": 107, "indexNum": 45, "basePrice": 14, "dependibility": 50, "experience": 50, "education": 15, "jobNum": 28, "uniform": 34},
        methods: {
        },
      },
      {
        name: "manager",
        className: "JobDItem",
        parent: {"script": 206, "name": "JobDItem"},
        isClass: false,
        properties: {"nsTop": 75, "nsLeft": 25, "key": 4, "text": "Manager           |", "shadowColor": 107, "indexNum": 46, "basePrice": 19, "dependibility": 60, "experience": 60, "education": 15, "jobNum": 29, "uniform": 34},
        methods: {
        },
      },
      {
        name: "broker",
        className: "JobDItem",
        parent: {"script": 206, "name": "JobDItem"},
        isClass: false,
        properties: {"nsTop": 85, "nsLeft": 25, "key": 5, "text": "Investment Broker  |||", "shadowColor": 107, "indexNum": 59, "basePrice": 22, "dependibility": 70, "experience": 70, "education": 15, "education2": 16, "jobNum": 30, "uniform": 34},
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
          // SCI bankJobs.sc: exitButton.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 222, "name": "exitButton"}, "doit", []);
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
    exports: {"0": "bankJobs"},
  });
}
