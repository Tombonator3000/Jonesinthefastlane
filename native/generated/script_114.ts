// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/muggedByMarket.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 940d44e0154e5541fc4e343bc2271d254b130a5365b04d116684ec76829e3835
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(114, {
    name: "muggedByMarket",
    uses: [0, 1, 992, 996, 998, 999],
    locals: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    objects: [
      {
        name: "muggedByMarket",
        className: "Script",
        parent: {"script": 999, "name": "Script"},
        isClass: false,
        properties: {},
        methods: {
          // SCI muggedByMarket.sc: muggedByMarket.changeState
          "changeState": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = (args[0] ?? 0);
            acc = _v2;
            const _v3: any = rt.set(this, "state", _v2);
            acc = _v3;
            _branch4: {
              const _v5: any = 0;
              acc = _v5;
              _v1 = rt.op("==", _v3, _v5);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v6: any = 0;
                acc = _v6;
                const _v7: any = rt.setLocal(114, 55, _v6);
                acc = _v7;
                _v1 = _v7;
                const _v8: any = rt.global(477);
                acc = _v8;
                const _v9: any = await rt.send(_v8, "stop", []);
                acc = _v9;
                _v1 = _v9;
                const _v10: any = 20;
                acc = _v10;
                const _v11: any = rt.global(476);
                acc = _v11;
                const _v12: any = await rt.send(_v11, "play", [_v10]);
                acc = _v12;
                _v1 = _v12;
                const _v13: any = 0;
                acc = _v13;
                const _v14: any = rt.object(996, "User");
                acc = _v14;
                const _v15: any = await rt.send(_v14, "canControl", [_v13]);
                acc = _v15;
                _v1 = _v15;
                const _v16: any = 31;
                acc = _v16;
                const _v17: any = 166;
                acc = _v17;
                const _v18: any = 5;
                acc = _v18;
                const _v19: any = rt.object(992, "Fwd");
                acc = _v19;
                const _v20: any = rt.object(992, "MoveTo");
                acc = _v20;
                const _v21: any = 64;
                acc = _v21;
                const _v22: any = 141;
                acc = _v22;
                const _v23: any = this;
                acc = _v23;
                const _v24: any = rt.object(114, "willy");
                acc = _v24;
                const _v25: any = await rt.send(_v24, "init", []);
                acc = _v25;
                const _v26: any = await rt.send(_v24, "posn", [_v16, _v17]);
                acc = _v26;
                const _v27: any = await rt.send(_v24, "loop", [_v18]);
                acc = _v27;
                const _v28: any = await rt.send(_v24, "setCycle", [_v19]);
                acc = _v28;
                const _v29: any = await rt.send(_v24, "setMotion", [_v20, _v21, _v22, _v23]);
                acc = _v29;
                _v1 = _v29;
                break _branch4;
              }
              const _v30: any = 1;
              acc = _v30;
              _v1 = rt.op("==", _v3, _v30);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v31: any = rt.object(992, "MoveTo");
                acc = _v31;
                const _v32: any = 57;
                acc = _v32;
                const _v33: any = 110;
                acc = _v33;
                const _v34: any = this;
                acc = _v34;
                const _v35: any = rt.object(114, "willy");
                acc = _v35;
                const _v36: any = await rt.send(_v35, "setMotion", [_v31, _v32, _v33, _v34]);
                acc = _v36;
                _v1 = _v36;
                break _branch4;
              }
              const _v37: any = 2;
              acc = _v37;
              _v1 = rt.op("==", _v3, _v37);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v38: any = 7;
                acc = _v38;
                const _v39: any = 1;
                acc = _v39;
                const _v40: any = rt.object(114, "willy");
                acc = _v40;
                const _v41: any = await rt.send(_v40, "setLoop", [_v38]);
                acc = _v41;
                const _v42: any = await rt.send(_v40, "setCel", [_v39]);
                acc = _v42;
                _v1 = _v42;
                const _v43: any = 3;
                acc = _v43;
                const _v44: any = rt.set(this, "seconds", _v43);
                acc = _v44;
                _v1 = _v44;
                break _branch4;
              }
              const _v45: any = 3;
              acc = _v45;
              _v1 = rt.op("==", _v3, _v45);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v46: any = 3;
                acc = _v46;
                const _v47: any = 0;
                acc = _v47;
                const _v48: any = rt.object(992, "Fwd");
                acc = _v48;
                const _v49: any = rt.object(992, "MoveTo");
                acc = _v49;
                const _v50: any = 17;
                acc = _v50;
                const _v51: any = 109;
                acc = _v51;
                const _v52: any = this;
                acc = _v52;
                const _v53: any = rt.object(114, "willy");
                acc = _v53;
                const _v54: any = await rt.send(_v53, "setLoop", [_v46]);
                acc = _v54;
                const _v55: any = await rt.send(_v53, "cel", [_v47]);
                acc = _v55;
                const _v56: any = await rt.send(_v53, "setCycle", [_v48]);
                acc = _v56;
                const _v57: any = await rt.send(_v53, "setMotion", [_v49, _v50, _v51, _v52]);
                acc = _v57;
                _v1 = _v57;
                break _branch4;
              }
              const _v58: any = 4;
              acc = _v58;
              _v1 = rt.op("==", _v3, _v58);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v59: any = 5;
                acc = _v59;
                const _v60: any = rt.object(992, "Fwd");
                acc = _v60;
                const _v61: any = rt.object(992, "MoveTo");
                acc = _v61;
                const _v62: any = -10;
                acc = _v62;
                const _v63: any = 72;
                acc = _v63;
                const _v64: any = this;
                acc = _v64;
                const _v65: any = rt.object(114, "willy");
                acc = _v65;
                const _v66: any = await rt.send(_v65, "setLoop", [_v59]);
                acc = _v66;
                const _v67: any = await rt.send(_v65, "setCycle", [_v60]);
                acc = _v67;
                const _v68: any = await rt.send(_v65, "setMotion", [_v61, _v62, _v63, _v64]);
                acc = _v68;
                _v1 = _v68;
                break _branch4;
              }
              const _v69: any = 5;
              acc = _v69;
              _v1 = rt.op("==", _v3, _v69);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v70: any = rt.object(114, "willy");
                acc = _v70;
                const _v71: any = await rt.send(_v70, "dispose", []);
                acc = _v71;
                _v1 = _v71;
                const _v72: any = await rt.call(0, "proc0_1", [], this);
                acc = _v72;
                _v1 = _v72;
                const _v73: any = 16;
                acc = _v73;
                const _v74: any = rt.setGlobal(415, _v73);
                acc = _v74;
                _v1 = _v74;
                const _v75: any = 1;
                acc = _v75;
                const _v76: any = rt.object(996, "User");
                acc = _v76;
                const _v77: any = await rt.send(_v76, "canControl", [_v75]);
                acc = _v77;
                _v1 = _v77;
                const _v78: any = 0;
                acc = _v78;
                const _v79: any = 215;
                acc = _v79;
                const _v80: any = 0;
                acc = _v80;
                const _v81: any = await rt.call(114, "ScriptID", [_v79, _v80], this);
                acc = _v81;
                const _v82: any = await rt.send(_v81, "init", [_v78]);
                acc = _v82;
                _v1 = _v82;
                const _v83: any = rt.object(114, "newspaper");
                acc = _v83;
                const _v84: any = await rt.send(_v83, "dispose", []);
                acc = _v84;
                _v1 = _v84;
                const _v85: any = await rt.call(0, "proc0_1", [], this);
                acc = _v85;
                _v1 = _v85;
                const _v86: any = 1;
                acc = _v86;
                const _v87: any = rt.object(996, "User");
                acc = _v87;
                const _v88: any = await rt.send(_v87, "canControl", [_v86]);
                acc = _v88;
                _v1 = _v88;
                const _v89: any = rt.get(this, "register");
                acc = _v89;
                const _v90: any = rt.setGlobal(479, _v89);
                acc = _v90;
                _v1 = _v90;
                const _v91: any = 1;
                acc = _v91;
                const _v92: any = rt.setGlobal(473, _v91);
                acc = _v92;
                _v1 = _v92;
                let _v93: any = acc;
                const _v94: any = rt.global(302);
                acc = _v94;
                const _v95: any = await rt.send(_v94, "playing", []);
                acc = _v95;
                const _v96: any = 29;
                acc = _v96;
                const _v97: any = rt.op("==", ...[_v95, _v96]);
                acc = _v97;
                _v93 = _v97;
                if (rt.truth(_v97)) {
                  const _v98: any = rt.global(302);
                  acc = _v98;
                  const _v99: any = 300;
                  acc = _v99;
                  const _v100: any = await rt.call(114, "ScriptID", [_v99], this);
                  acc = _v100;
                  const _v101: any = await rt.send(_v100, "doit", [_v98]);
                  acc = _v101;
                  const _v102: any = rt.setGlobal(401, _v101);
                  acc = _v102;
                  _v93 = _v102;
                }
                acc = _v93;
                _v1 = _v93;
                const _v103: any = 1;
                acc = _v103;
                const _v104: any = rt.setLocal(114, 55, _v103);
                acc = _v104;
                _v1 = _v104;
                const _v105: any = 0;
                acc = _v105;
                const _v106: any = rt.get(this, "client");
                acc = _v106;
                const _v107: any = await rt.send(_v106, "setScript", [_v105]);
                acc = _v107;
                _v1 = _v107;
                const _v108: any = await rt.call(1, "proc1_8", [], this);
                acc = _v108;
                _v1 = _v108;
                break _branch4;
              }
            }
            acc = _v1;
            let _v109: any = acc;
            const _v110: any = rt.local(114, 55);
            acc = _v110;
            _v109 = _v110;
            if (rt.truth(_v110)) {
              const _acc111: any = acc;
              const _v112: any = 114;
              acc = _v112;
              const _args113: any[] = [_v112];
              await rt.call(114, "DisposeScript", _args113, this);
              const _v114: any = _args113.length === 2 ? _args113[1] : _acc111;
              acc = _v114;
              _v109 = _v114;
            }
            acc = _v109;
            return acc;
          },
        },
      },
      {
        name: "muggedByBank",
        className: "Script",
        parent: {"script": 999, "name": "Script"},
        isClass: false,
        properties: {},
        methods: {
          // SCI muggedByMarket.sc: muggedByBank.changeState
          "changeState": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = (args[0] ?? 0);
            acc = _v2;
            const _v3: any = rt.set(this, "state", _v2);
            acc = _v3;
            _branch4: {
              const _v5: any = 0;
              acc = _v5;
              _v1 = rt.op("==", _v3, _v5);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v6: any = 0;
                acc = _v6;
                const _v7: any = rt.setLocal(114, 55, _v6);
                acc = _v7;
                _v1 = _v7;
                const _v8: any = rt.global(477);
                acc = _v8;
                const _v9: any = await rt.send(_v8, "stop", []);
                acc = _v9;
                _v1 = _v9;
                const _v10: any = 20;
                acc = _v10;
                const _v11: any = rt.global(476);
                acc = _v11;
                const _v12: any = await rt.send(_v11, "play", [_v10]);
                acc = _v12;
                _v1 = _v12;
                const _v13: any = 0;
                acc = _v13;
                const _v14: any = rt.object(996, "User");
                acc = _v14;
                const _v15: any = await rt.send(_v14, "canControl", [_v13]);
                acc = _v15;
                _v1 = _v15;
                const _v16: any = 17;
                acc = _v16;
                const _v17: any = 119;
                acc = _v17;
                const _v18: any = 3;
                acc = _v18;
                const _v19: any = rt.object(992, "Fwd");
                acc = _v19;
                const _v20: any = rt.object(992, "MoveTo");
                acc = _v20;
                const _v21: any = 5;
                acc = _v21;
                const _v22: any = 125;
                acc = _v22;
                const _v23: any = this;
                acc = _v23;
                const _v24: any = rt.object(114, "willy");
                acc = _v24;
                const _v25: any = await rt.send(_v24, "init", []);
                acc = _v25;
                const _v26: any = await rt.send(_v24, "posn", [_v16, _v17]);
                acc = _v26;
                const _v27: any = await rt.send(_v24, "loop", [_v18]);
                acc = _v27;
                const _v28: any = await rt.send(_v24, "setCycle", [_v19]);
                acc = _v28;
                const _v29: any = await rt.send(_v24, "setMotion", [_v20, _v21, _v22, _v23]);
                acc = _v29;
                _v1 = _v29;
                break _branch4;
              }
              const _v30: any = 1;
              acc = _v30;
              _v1 = rt.op("==", _v3, _v30);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v31: any = 4;
                acc = _v31;
                const _v32: any = rt.object(992, "MoveTo");
                acc = _v32;
                const _v33: any = 5;
                acc = _v33;
                const _v34: any = 152;
                acc = _v34;
                const _v35: any = this;
                acc = _v35;
                const _v36: any = rt.object(114, "willy");
                acc = _v36;
                const _v37: any = await rt.send(_v36, "setLoop", [_v31]);
                acc = _v37;
                const _v38: any = await rt.send(_v36, "setMotion", [_v32, _v33, _v34, _v35]);
                acc = _v38;
                _v1 = _v38;
                break _branch4;
              }
              const _v39: any = 2;
              acc = _v39;
              _v1 = rt.op("==", _v3, _v39);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v40: any = 2;
                acc = _v40;
                const _v41: any = rt.object(992, "MoveTo");
                acc = _v41;
                const _v42: any = 10;
                acc = _v42;
                const _v43: any = 152;
                acc = _v43;
                const _v44: any = this;
                acc = _v44;
                const _v45: any = rt.object(114, "willy");
                acc = _v45;
                const _v46: any = await rt.send(_v45, "setLoop", [_v40]);
                acc = _v46;
                const _v47: any = await rt.send(_v45, "setMotion", [_v41, _v42, _v43, _v44]);
                acc = _v47;
                _v1 = _v47;
                break _branch4;
              }
              const _v48: any = 3;
              acc = _v48;
              _v1 = rt.op("==", _v3, _v48);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v49: any = 6;
                acc = _v49;
                const _v50: any = 0;
                acc = _v50;
                const _v51: any = rt.object(114, "willy");
                acc = _v51;
                const _v52: any = await rt.send(_v51, "setLoop", [_v49]);
                acc = _v52;
                const _v53: any = await rt.send(_v51, "setCel", [_v50]);
                acc = _v53;
                _v1 = _v53;
                const _v54: any = 3;
                acc = _v54;
                const _v55: any = rt.set(this, "seconds", _v54);
                acc = _v55;
                _v1 = _v55;
                break _branch4;
              }
              const _v56: any = 4;
              acc = _v56;
              _v1 = rt.op("==", _v3, _v56);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v57: any = 4;
                acc = _v57;
                const _v58: any = 0;
                acc = _v58;
                const _v59: any = rt.object(992, "Fwd");
                acc = _v59;
                const _v60: any = rt.object(992, "MoveTo");
                acc = _v60;
                const _v61: any = 0;
                acc = _v61;
                const _v62: any = 173;
                acc = _v62;
                const _v63: any = this;
                acc = _v63;
                const _v64: any = rt.object(114, "willy");
                acc = _v64;
                const _v65: any = await rt.send(_v64, "setLoop", [_v57]);
                acc = _v65;
                const _v66: any = await rt.send(_v64, "cel", [_v58]);
                acc = _v66;
                const _v67: any = await rt.send(_v64, "setCycle", [_v59]);
                acc = _v67;
                const _v68: any = await rt.send(_v64, "setMotion", [_v60, _v61, _v62, _v63]);
                acc = _v68;
                _v1 = _v68;
                break _branch4;
              }
              const _v69: any = 5;
              acc = _v69;
              _v1 = rt.op("==", _v3, _v69);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v70: any = rt.object(114, "willy");
                acc = _v70;
                const _v71: any = await rt.send(_v70, "dispose", []);
                acc = _v71;
                _v1 = _v71;
                const _v72: any = await rt.call(0, "proc0_1", [], this);
                acc = _v72;
                _v1 = _v72;
                const _v73: any = 16;
                acc = _v73;
                const _v74: any = rt.setGlobal(415, _v73);
                acc = _v74;
                _v1 = _v74;
                const _v75: any = 1;
                acc = _v75;
                const _v76: any = rt.object(996, "User");
                acc = _v76;
                const _v77: any = await rt.send(_v76, "canControl", [_v75]);
                acc = _v77;
                _v1 = _v77;
                const _v78: any = 0;
                acc = _v78;
                const _v79: any = 215;
                acc = _v79;
                const _v80: any = 0;
                acc = _v80;
                const _v81: any = await rt.call(114, "ScriptID", [_v79, _v80], this);
                acc = _v81;
                const _v82: any = await rt.send(_v81, "init", [_v78]);
                acc = _v82;
                _v1 = _v82;
                const _v83: any = rt.object(114, "newspaper");
                acc = _v83;
                const _v84: any = await rt.send(_v83, "dispose", []);
                acc = _v84;
                _v1 = _v84;
                const _v85: any = await rt.call(0, "proc0_1", [], this);
                acc = _v85;
                _v1 = _v85;
                const _v86: any = 1;
                acc = _v86;
                const _v87: any = rt.object(996, "User");
                acc = _v87;
                const _v88: any = await rt.send(_v87, "canControl", [_v86]);
                acc = _v88;
                _v1 = _v88;
                const _v89: any = rt.get(this, "register");
                acc = _v89;
                const _v90: any = rt.setGlobal(479, _v89);
                acc = _v90;
                _v1 = _v90;
                const _v91: any = 1;
                acc = _v91;
                const _v92: any = rt.setGlobal(473, _v91);
                acc = _v92;
                _v1 = _v92;
                let _v93: any = acc;
                const _v94: any = rt.global(302);
                acc = _v94;
                const _v95: any = await rt.send(_v94, "playing", []);
                acc = _v95;
                const _v96: any = 29;
                acc = _v96;
                const _v97: any = rt.op("==", ...[_v95, _v96]);
                acc = _v97;
                _v93 = _v97;
                if (rt.truth(_v97)) {
                  const _v98: any = rt.global(302);
                  acc = _v98;
                  const _v99: any = 300;
                  acc = _v99;
                  const _v100: any = await rt.call(114, "ScriptID", [_v99], this);
                  acc = _v100;
                  const _v101: any = await rt.send(_v100, "doit", [_v98]);
                  acc = _v101;
                  const _v102: any = rt.setGlobal(401, _v101);
                  acc = _v102;
                  _v93 = _v102;
                }
                acc = _v93;
                _v1 = _v93;
                const _v103: any = 1;
                acc = _v103;
                const _v104: any = rt.setLocal(114, 55, _v103);
                acc = _v104;
                _v1 = _v104;
                const _v105: any = 0;
                acc = _v105;
                const _v106: any = rt.get(this, "client");
                acc = _v106;
                const _v107: any = await rt.send(_v106, "setScript", [_v105]);
                acc = _v107;
                _v1 = _v107;
                const _v108: any = await rt.call(1, "proc1_8", [], this);
                acc = _v108;
                _v1 = _v108;
                break _branch4;
              }
            }
            acc = _v1;
            let _v109: any = acc;
            const _v110: any = rt.local(114, 55);
            acc = _v110;
            _v109 = _v110;
            if (rt.truth(_v110)) {
              const _acc111: any = acc;
              const _v112: any = 114;
              acc = _v112;
              const _args113: any[] = [_v112];
              await rt.call(114, "DisposeScript", _args113, this);
              const _v114: any = _args113.length === 2 ? _args113[1] : _acc111;
              acc = _v114;
              _v109 = _v114;
            }
            acc = _v109;
            return acc;
          },
        },
      },
      {
        name: "willy",
        className: "Act",
        parent: {"script": 998, "name": "Act"},
        isClass: false,
        properties: {"view": 340, "priority": 8, "ticksToDo": 8, "moveSpeed": 3},
        methods: {
          // SCI muggedByMarket.sc: willy.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "priority");
            acc = _v1;
            const _v2: any = 3;
            acc = _v2;
            const _v3: any = 3;
            acc = _v3;
            const _v4: any = this;
            acc = _v4;
            const _v5: any = await rt.send(_v4, "setPri", [_v1]);
            acc = _v5;
            const _v6: any = await rt.send(_v4, "setStep", [_v2, _v3]);
            acc = _v6;
            const _v7: any = await rt.superSend(this, {"script": 114, "name": "willy"}, "init", []);
            acc = _v7;
            return acc;
          },
        },
      },
      {
        name: "newspaper",
        className: "Act",
        parent: {"script": 998, "name": "Act"},
        isClass: false,
        properties: {"view": 603, "priority": 10},
        methods: {
          // SCI muggedByMarket.sc: newspaper.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 159;
            acc = _v1;
            const _v2: any = 130;
            acc = _v2;
            const _v3: any = rt.get(this, "priority");
            acc = _v3;
            const _v4: any = this;
            acc = _v4;
            const _v5: any = await rt.send(_v4, "posn", [_v1, _v2]);
            acc = _v5;
            const _v6: any = await rt.send(_v4, "setPri", [_v3]);
            acc = _v6;
            const _v7: any = await rt.superSend(this, {"script": 114, "name": "newspaper"}, "init", []);
            acc = _v7;
            return acc;
          },
        },
      },
    ],
    procedures: {
    },
    exports: {"0": "muggedByMarket", "1": "muggedByBank"},
  });
}
