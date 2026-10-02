// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/room1.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 3f790f0cb832ab53ece6453e2d581198ec66ba50b6bebf4a6a4ac0594d923a87
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(1, {
    name: "room1",
    uses: [0, 103, 106, 109, 110, 115, 255, 891, 967, 992, 994, 996, 997, 998, 999],
    locals: [0],
    objects: [
      {
        name: "door",
        className: "Prop",
        parent: {"script": 998, "name": "Prop"},
        isClass: false,
        properties: {"view": 751, "cycleSpeed": 1},
        methods: {
        },
      },
      {
        name: "marbleMoved",
        className: "Script",
        parent: {"script": 999, "name": "Script"},
        isClass: false,
        properties: {},
        methods: {
          // SCI room1.sc: marbleMoved.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 101;
            acc = _v1;
            const _v2: any = await rt.call(1, "ScriptID", [_v1], this);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "index", []);
            acc = _v3;
            const _v4: any = rt.setGlobal(458, _v3);
            acc = _v4;
            const _v5: any = 1;
            acc = _v5;
            const _v6: any = rt.setLocal(1, 0, _v5);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "Place",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: true,
        properties: {"placeNum": 0, "index": 0, "topR": 0, "leftR": 0, "bottomR": 0, "rightR": 0, "sNumber": 0, "placeX": 0, "placeY": 0, "doorLoop": 0, "doorX": 0, "doorY": 0, "keyMouseX": 0, "keyMouseY": 0, "offsetX": 0, "offsetY": 0},
        methods: {
          // SCI room1.sc: Place.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = rt.global(301);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "add", [_v1]);
            acc = _v3;
            const _v4: any = this;
            acc = _v4;
            const _v5: any = rt.global(432);
            acc = _v5;
            const _v6: any = await rt.send(_v5, "add", [_v4]);
            acc = _v6;
            return acc;
          },
          // SCI room1.sc: Place.openDoor
          "openDoor": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "doorLoop");
            acc = _v1;
            const _v2: any = rt.get(this, "doorX");
            acc = _v2;
            const _v3: any = rt.get(this, "doorY");
            acc = _v3;
            const _v4: any = rt.object(1, "door");
            acc = _v4;
            const _v5: any = await rt.send(_v4, "loop", [_v1]);
            acc = _v5;
            const _v6: any = await rt.send(_v4, "posn", [_v2, _v3]);
            acc = _v6;
            const _v7: any = 0;
            acc = _v7;
            const _v8: any = rt.object(1, "door");
            acc = _v8;
            const _v9: any = await rt.send(_v8, "setCel", [_v7]);
            acc = _v9;
            const _v10: any = await rt.send(_v8, "startUpd", []);
            acc = _v10;
            const _v11: any = await rt.call(0, "proc0_1", [], this);
            acc = _v11;
            const _v12: any = 6;
            acc = _v12;
            const _v13: any = await rt.call(1, "Wait", [_v12], this);
            acc = _v13;
            const _v14: any = 1;
            acc = _v14;
            const _v15: any = rt.object(1, "door");
            acc = _v15;
            const _v16: any = await rt.send(_v15, "setCel", [_v14]);
            acc = _v16;
            const _v17: any = await rt.call(0, "proc0_1", [], this);
            acc = _v17;
            const _v18: any = 6;
            acc = _v18;
            const _v19: any = await rt.call(1, "Wait", [_v18], this);
            acc = _v19;
            const _v20: any = 2;
            acc = _v20;
            const _v21: any = rt.object(1, "door");
            acc = _v21;
            const _v22: any = await rt.send(_v21, "setCel", [_v20]);
            acc = _v22;
            const _v23: any = await rt.call(0, "proc0_1", [], this);
            acc = _v23;
            const _v24: any = 6;
            acc = _v24;
            const _v25: any = await rt.call(1, "Wait", [_v24], this);
            acc = _v25;
            const _v26: any = 3;
            acc = _v26;
            const _v27: any = rt.object(1, "door");
            acc = _v27;
            const _v28: any = await rt.send(_v27, "setCel", [_v26]);
            acc = _v28;
            const _v29: any = await rt.call(0, "proc0_1", [], this);
            acc = _v29;
            return acc;
          },
          // SCI room1.sc: Place.closeDoor
          "closeDoor": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = -1;
            acc = _v1;
            const _v2: any = rt.object(992, "Beg");
            acc = _v2;
            const _v3: any = rt.object(1, "door");
            acc = _v3;
            const _v4: any = await rt.send(_v3, "setCel", [_v1]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "startUpd", []);
            acc = _v5;
            const _v6: any = await rt.send(_v3, "setCycle", [_v2]);
            acc = _v6;
            return acc;
          },
          // SCI room1.sc: Place.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            let _v2: any = 1;
            if (rt.truth(_v2)) {
              const _v3: any = (args[0] ?? 0);
              acc = _v3;
              const _v4: any = await rt.send(_v3, "claimed", []);
              acc = _v4;
              const _v5: any = rt.op("not", ...[_v4]);
              acc = _v5;
              _v2 = _v5;
            }
            if (rt.truth(_v2)) {
              const _v6: any = rt.object(996, "User");
              acc = _v6;
              const _v7: any = await rt.send(_v6, "controls", []);
              acc = _v7;
              _v2 = _v7;
            }
            if (rt.truth(_v2)) {
              const _v8: any = rt.global(474);
              acc = _v8;
              _v2 = _v8;
            }
            if (rt.truth(_v2)) {
              let _v9: any = 0;
              if (!rt.truth(_v9)) {
                const _v10: any = (args[0] ?? 0);
                acc = _v10;
                const _v11: any = await rt.send(_v10, "type", []);
                acc = _v11;
                const _v12: any = 1;
                acc = _v12;
                const _v13: any = rt.op("==", ...[_v11, _v12]);
                acc = _v13;
                _v9 = _v13;
              }
              if (!rt.truth(_v9)) {
                const _v14: any = (args[0] ?? 0);
                acc = _v14;
                const _v15: any = await rt.send(_v14, "type", []);
                acc = _v15;
                const _v16: any = 4;
                acc = _v16;
                const _v17: any = rt.op("==", ...[_v15, _v16]);
                acc = _v17;
                _v9 = _v17;
              }
              acc = _v9;
              _v2 = _v9;
            }
            if (rt.truth(_v2)) {
              const _v18: any = rt.get(this, "leftR");
              acc = _v18;
              let _v19: any = _v18;
              let _v20: any = 1;
              if (rt.truth(_v20)) {
                const _v21: any = (args[0] ?? 0);
                acc = _v21;
                const _v22: any = await rt.send(_v21, "x", []);
                acc = _v22;
                _v20 = rt.op("<=", _v19, _v22);
                _v19 = _v22;
              }
              if (rt.truth(_v20)) {
                const _v23: any = rt.get(this, "rightR");
                acc = _v23;
                _v20 = rt.op("<=", _v19, _v23);
                _v19 = _v23;
              }
              acc = _v20;
              _v2 = _v20;
            }
            if (rt.truth(_v2)) {
              const _v24: any = rt.get(this, "topR");
              acc = _v24;
              let _v25: any = _v24;
              let _v26: any = 1;
              if (rt.truth(_v26)) {
                const _v27: any = (args[0] ?? 0);
                acc = _v27;
                const _v28: any = await rt.send(_v27, "y", []);
                acc = _v28;
                _v26 = rt.op("<=", _v25, _v28);
                _v25 = _v28;
              }
              if (rt.truth(_v26)) {
                const _v29: any = rt.get(this, "bottomR");
                acc = _v29;
                _v26 = rt.op("<=", _v25, _v29);
                _v25 = _v29;
              }
              acc = _v26;
              _v2 = _v26;
            }
            if (rt.truth(_v2)) {
              let _v30: any = 0;
              if (!rt.truth(_v30)) {
                const _v31: any = rt.global(323);
                acc = _v31;
                const _v32: any = 60;
                acc = _v32;
                const _v33: any = rt.op("<", ...[_v31, _v32]);
                acc = _v33;
                _v30 = _v33;
              }
              if (!rt.truth(_v30)) {
                const _v34: any = rt.global(460);
                acc = _v34;
                const _v35: any = rt.op("not", ...[_v34]);
                acc = _v35;
                _v30 = _v35;
              }
              if (!rt.truth(_v30)) {
                const _v36: any = rt.object(1, "marble");
                acc = _v36;
                const _v37: any = await rt.send(_v36, "mover", []);
                acc = _v37;
                const _v38: any = rt.op("not", ...[_v37]);
                acc = _v38;
                _v30 = _v38;
              }
              acc = _v30;
              _v2 = _v30;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v39: any = -2;
              acc = _v39;
              const _v40: any = rt.setGlobal(433, _v39);
              acc = _v40;
              _v1 = _v40;
              const _v41: any = (args[0] ?? 0);
              acc = _v41;
              const _v42: any = await rt.send(_v41, "x", []);
              acc = _v42;
              const _v43: any = rt.setGlobal(449, _v42);
              acc = _v43;
              _v1 = _v43;
              const _v44: any = (args[0] ?? 0);
              acc = _v44;
              const _v45: any = await rt.send(_v44, "y", []);
              acc = _v45;
              const _v46: any = rt.setGlobal(450, _v45);
              acc = _v46;
              _v1 = _v46;
              let _v47: any = acc;
              _branch48: {
                let _v49: any = 0;
                if (!rt.truth(_v49)) {
                  const _v50: any = rt.object(1, "marble");
                  acc = _v50;
                  const _v51: any = await rt.send(_v50, "mover", []);
                  acc = _v51;
                  _v49 = _v51;
                }
                if (!rt.truth(_v49)) {
                  const _v52: any = rt.global(457);
                  acc = _v52;
                  const _v53: any = rt.get(this, "placeNum");
                  acc = _v53;
                  const _v54: any = rt.op("!=", ...[_v52, _v53]);
                  acc = _v54;
                  _v49 = _v54;
                }
                acc = _v49;
                _v47 = _v49;
                acc = _v47;
                if (rt.truth(_v47)) {
                  let _v55: any = acc;
                  const _v56: any = rt.object(1, "marble");
                  acc = _v56;
                  const _v57: any = await rt.send(_v56, "mover", []);
                  acc = _v57;
                  const _v58: any = rt.op("not", ...[_v57]);
                  acc = _v58;
                  _v55 = _v58;
                  if (rt.truth(_v58)) {
                    const _v59: any = rt.global(458);
                    acc = _v59;
                    const _v60: any = 101;
                    acc = _v60;
                    const _v61: any = await rt.call(1, "ScriptID", [_v60], this);
                    acc = _v61;
                    const _v62: any = await rt.send(_v61, "index", [_v59]);
                    acc = _v62;
                    _v55 = _v62;
                  }
                  acc = _v55;
                  _v47 = _v55;
                  const _v63: any = this;
                  acc = _v63;
                  const _v64: any = rt.setGlobal(459, _v63);
                  acc = _v64;
                  _v47 = _v64;
                  let _v65: any = acc;
                  let _v66: any = 1;
                  if (rt.truth(_v66)) {
                    const _v67: any = rt.global(446);
                    acc = _v67;
                    const _v68: any = rt.op("not", ...[_v67]);
                    acc = _v68;
                    _v66 = _v68;
                  }
                  if (rt.truth(_v66)) {
                    const _v69: any = rt.global(2);
                    acc = _v69;
                    const _v70: any = await rt.send(_v69, "script", []);
                    acc = _v70;
                    const _v71: any = rt.op("not", ...[_v70]);
                    acc = _v71;
                    _v66 = _v71;
                  }
                  acc = _v66;
                  _v65 = _v66;
                  if (rt.truth(_v66)) {
                    const _v72: any = 23;
                    acc = _v72;
                    const _v73: any = rt.global(476);
                    acc = _v73;
                    const _v74: any = await rt.send(_v73, "play", [_v72]);
                    acc = _v74;
                    _v65 = _v74;
                    const _v75: any = 101;
                    acc = _v75;
                    const _v76: any = await rt.call(1, "ScriptID", [_v75], this);
                    acc = _v76;
                    const _v77: any = rt.global(457);
                    acc = _v77;
                    const _v78: any = rt.get(this, "placeNum");
                    acc = _v78;
                    const _v79: any = rt.object(1, "marbleMoved");
                    acc = _v79;
                    const _v80: any = rt.object(1, "marble");
                    acc = _v80;
                    const _v81: any = await rt.send(_v80, "setMotion", [_v76, _v77, _v78, _v79]);
                    acc = _v81;
                    _v65 = _v81;
                    const _v82: any = rt.get(this, "placeNum");
                    acc = _v82;
                    const _v83: any = rt.setGlobal(457, _v82);
                    acc = _v83;
                    _v65 = _v83;
                  }
                  acc = _v65;
                  _v47 = _v65;
                  break _branch48;
                }
                let _v84: any = 1;
                if (rt.truth(_v84)) {
                  const _v85: any = rt.global(502);
                  acc = _v85;
                  const _v86: any = rt.op("not", ...[_v85]);
                  acc = _v86;
                  _v84 = _v86;
                }
                if (rt.truth(_v84)) {
                  const _v87: any = rt.global(446);
                  acc = _v87;
                  const _v88: any = rt.op("not", ...[_v87]);
                  acc = _v88;
                  _v84 = _v88;
                }
                if (rt.truth(_v84)) {
                  const _v89: any = rt.global(2);
                  acc = _v89;
                  const _v90: any = await rt.send(_v89, "script", []);
                  acc = _v90;
                  const _v91: any = rt.op("not", ...[_v90]);
                  acc = _v91;
                  _v84 = _v91;
                }
                acc = _v84;
                _v47 = _v84;
                acc = _v47;
                if (rt.truth(_v47)) {
                  const _v92: any = 23;
                  acc = _v92;
                  const _v93: any = rt.global(476);
                  acc = _v93;
                  const _v94: any = await rt.send(_v93, "play", [_v92]);
                  acc = _v94;
                  _v47 = _v94;
                  const _v95: any = this;
                  acc = _v95;
                  const _v96: any = await rt.send(_v95, "cue", []);
                  acc = _v96;
                  _v47 = _v96;
                  break _branch48;
                }
              }
              acc = _v47;
              _v1 = _v47;
              const _v97: any = 1;
              acc = _v97;
              return _v97;
              _v1 = acc;
            }
            acc = _v1;
            const _v98: any = 0;
            acc = _v98;
            return _v98;
            return acc;
          },
          // SCI room1.sc: Place.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 1;
            acc = _v1;
            const _v2: any = rt.setGlobal(516, _v1);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 0;
            if (!rt.truth(_v4)) {
              let _v5: any = 1;
              if (rt.truth(_v5)) {
                const _v6: any = rt.get(this, "placeNum");
                acc = _v6;
                const _v7: any = 0;
                acc = _v7;
                const _v8: any = rt.op("==", ...[_v6, _v7]);
                acc = _v8;
                _v5 = _v8;
              }
              if (rt.truth(_v5)) {
                const _v9: any = rt.global(302);
                acc = _v9;
                const _v10: any = await rt.send(_v9, "livesAt", []);
                acc = _v10;
                const _v11: any = 0;
                acc = _v11;
                const _v12: any = rt.op("==", ...[_v10, _v11]);
                acc = _v12;
                _v5 = _v12;
              }
              acc = _v5;
              _v4 = _v5;
            }
            if (!rt.truth(_v4)) {
              let _v13: any = 1;
              if (rt.truth(_v13)) {
                const _v14: any = rt.get(this, "placeNum");
                acc = _v14;
                const _v15: any = 2;
                acc = _v15;
                const _v16: any = rt.op("==", ...[_v14, _v15]);
                acc = _v16;
                _v13 = _v16;
              }
              if (rt.truth(_v13)) {
                const _v17: any = rt.global(302);
                acc = _v17;
                const _v18: any = await rt.send(_v17, "livesAt", []);
                acc = _v18;
                const _v19: any = 2;
                acc = _v19;
                const _v20: any = rt.op("==", ...[_v18, _v19]);
                acc = _v20;
                _v13 = _v20;
              }
              acc = _v13;
              _v4 = _v13;
            }
            if (!rt.truth(_v4)) {
              let _v21: any = 1;
              if (rt.truth(_v21)) {
                const _v22: any = rt.get(this, "placeNum");
                acc = _v22;
                const _v23: any = 1;
                acc = _v23;
                const _v24: any = rt.op("==", ...[_v22, _v23]);
                acc = _v24;
                _v21 = _v24;
              }
              if (rt.truth(_v21)) {
                let _v25: any = 0;
                if (!rt.truth(_v25)) {
                  const _v26: any = rt.global(302);
                  acc = _v26;
                  const _v27: any = await rt.send(_v26, "worksAt", []);
                  acc = _v27;
                  const _v28: any = 1;
                  acc = _v28;
                  const _v29: any = rt.op("==", ...[_v27, _v28]);
                  acc = _v29;
                  _v25 = _v29;
                }
                if (!rt.truth(_v25)) {
                  const _v30: any = rt.global(372);
                  acc = _v30;
                  const _v31: any = 4;
                  acc = _v31;
                  const _v32: any = rt.op("mod", ...[_v30, _v31]);
                  acc = _v32;
                  const _v33: any = rt.op("not", ...[_v32]);
                  acc = _v33;
                  _v25 = _v33;
                }
                if (!rt.truth(_v25)) {
                  const _v34: any = rt.global(302);
                  acc = _v34;
                  const _v35: any = await rt.send(_v34, "leaveOpen", []);
                  acc = _v35;
                  _v25 = _v35;
                }
                acc = _v25;
                _v21 = _v25;
              }
              acc = _v21;
              _v4 = _v21;
            }
            if (!rt.truth(_v4)) {
              let _v36: any = 1;
              if (rt.truth(_v36)) {
                const _v37: any = rt.get(this, "placeNum");
                acc = _v37;
                const _v38: any = 0;
                acc = _v38;
                const _v39: any = rt.op("!=", ...[_v37, _v38]);
                acc = _v39;
                _v36 = _v39;
              }
              if (rt.truth(_v36)) {
                const _v40: any = rt.get(this, "placeNum");
                acc = _v40;
                const _v41: any = 2;
                acc = _v41;
                const _v42: any = rt.op("!=", ...[_v40, _v41]);
                acc = _v42;
                _v36 = _v42;
              }
              if (rt.truth(_v36)) {
                const _v43: any = rt.get(this, "placeNum");
                acc = _v43;
                const _v44: any = 1;
                acc = _v44;
                const _v45: any = rt.op("!=", ...[_v43, _v44]);
                acc = _v45;
                _v36 = _v45;
              }
              acc = _v36;
              _v4 = _v36;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v46: any = this;
              acc = _v46;
              const _v47: any = await rt.send(_v46, "openDoor", []);
              acc = _v47;
              _v3 = _v47;
            } else {
              const _v48: any = 0;
              acc = _v48;
              const _v49: any = rt.setGlobal(516, _v48);
              acc = _v49;
              _v3 = _v49;
            }
            acc = _v3;
            const _v50: any = 0;
            acc = _v50;
            const _v51: any = rt.global(303);
            acc = _v51;
            const _v52: any = await rt.send(_v51, "stopUpd", []);
            acc = _v52;
            const _v53: any = await rt.send(_v51, "setCycle", [_v50]);
            acc = _v53;
            const _v54: any = 0;
            acc = _v54;
            const _v55: any = rt.object(1, "marble");
            acc = _v55;
            const _v56: any = await rt.send(_v55, "setMotion", [_v54]);
            acc = _v56;
            const _v57: any = await rt.call(0, "proc0_1", [], this);
            acc = _v57;
            const _v58: any = 0;
            acc = _v58;
            const _v59: any = rt.setGlobal(424, _v58);
            acc = _v59;
            const _v60: any = rt.setGlobal(425, _v59);
            acc = _v60;
            const _v61: any = rt.object(891, "KeyMouse");
            acc = _v61;
            const _v62: any = await rt.send(_v61, "curItem", []);
            acc = _v62;
            const _v63: any = rt.setGlobal(515, _v62);
            acc = _v63;
            const _v64: any = 0;
            acc = _v64;
            const _v65: any = rt.object(996, "User");
            acc = _v65;
            const _v66: any = await rt.send(_v65, "canControl", [_v64]);
            acc = _v66;
            const _v67: any = rt.global(303);
            acc = _v67;
            const _v68: any = await rt.send(_v67, "hide", []);
            acc = _v68;
            const _v69: any = await rt.call(0, "proc0_1", [], this);
            acc = _v69;
            const _v70: any = 3;
            acc = _v70;
            const _v71: any = 8;
            acc = _v71;
            const _v72: any = 16;
            acc = _v72;
            const _v73: any = 1;
            acc = _v73;
            const _v74: any = await rt.call(1, "Palette", [_v70, _v71, _v72, _v73], this);
            acc = _v74;
            const _v75: any = 3;
            acc = _v75;
            const _v76: any = 144;
            acc = _v76;
            const _v77: any = 255;
            acc = _v77;
            const _v78: any = 1;
            acc = _v78;
            const _v79: any = await rt.call(1, "Palette", [_v75, _v76, _v77, _v78], this);
            acc = _v79;
            const _v80: any = rt.global(477);
            acc = _v80;
            const _v81: any = await rt.send(_v80, "fade", []);
            acc = _v81;
            const _v82: any = 773;
            acc = _v82;
            const _v83: any = 112;
            acc = _v83;
            const _v84: any = 0;
            acc = _v84;
            const _v85: any = await rt.call(1, "SetMenu", [_v82, _v83, _v84], this);
            acc = _v85;
            const _v86: any = rt.object(1, "room1");
            acc = _v86;
            const _v87: any = rt.get(this, "sNumber");
            acc = _v87;
            const _v88: any = 0;
            acc = _v88;
            const _v89: any = await rt.call(1, "ScriptID", [_v87, _v88], this);
            acc = _v89;
            const _v90: any = rt.setGlobal(526, _v89);
            acc = _v90;
            const _v91: any = await rt.send(_v90, "init", [_v86]);
            acc = _v91;
            const _v92: any = 773;
            acc = _v92;
            const _v93: any = 112;
            acc = _v93;
            const _v94: any = 1;
            acc = _v94;
            const _v95: any = await rt.call(1, "SetMenu", [_v92, _v93, _v94], this);
            acc = _v95;
            const _v96: any = 0;
            acc = _v96;
            const _v97: any = rt.setGlobal(434, _v96);
            acc = _v97;
            const _v98: any = 3;
            acc = _v98;
            const _v99: any = 8;
            acc = _v99;
            const _v100: any = 16;
            acc = _v100;
            const _v101: any = 1;
            acc = _v101;
            const _v102: any = await rt.call(1, "Palette", [_v98, _v99, _v100, _v101], this);
            acc = _v102;
            const _v103: any = 3;
            acc = _v103;
            const _v104: any = 144;
            acc = _v104;
            const _v105: any = 255;
            acc = _v105;
            const _v106: any = 1;
            acc = _v106;
            const _v107: any = await rt.call(1, "Palette", [_v103, _v104, _v105, _v106], this);
            acc = _v107;
            const _v108: any = await rt.call(1, "proc1_8", [], this);
            acc = _v108;
            let _v109: any = acc;
            const _v110: any = rt.global(323);
            acc = _v110;
            const _v111: any = 60;
            acc = _v111;
            const _v112: any = rt.op("<", ...[_v110, _v111]);
            acc = _v112;
            _v109 = _v112;
            if (rt.truth(_v112)) {
              const _v113: any = rt.global(303);
              acc = _v113;
              const _v114: any = await rt.send(_v113, "show", []);
              acc = _v114;
              _v109 = _v114;
            }
            acc = _v109;
            const _v115: any = await rt.call(0, "proc0_1", [], this);
            acc = _v115;
            const _v116: any = rt.global(515);
            acc = _v116;
            const _v117: any = rt.object(891, "KeyMouse");
            acc = _v117;
            const _v118: any = await rt.send(_v117, "curItem", [_v116]);
            acc = _v118;
            let _v119: any = acc;
            const _v120: any = rt.global(521);
            acc = _v120;
            const _v121: any = rt.op("not", ...[_v120]);
            acc = _v121;
            _v119 = _v121;
            if (rt.truth(_v121)) {
              let _v122: any = acc;
              const _v123: any = rt.global(446);
              acc = _v123;
              _branch124: {
                const _v125: any = 1;
                acc = _v125;
                _v122 = rt.op("==", _v123, _v125);
                acc = _v122;
                if (rt.truth(_v122)) {
                  const _v126: any = -3;
                  acc = _v126;
                  const _v127: any = await rt.call(0, "proc0_13", [_v126], this);
                  acc = _v127;
                  _v122 = _v127;
                  const _v128: any = 0;
                  acc = _v128;
                  const _v129: any = rt.object(996, "User");
                  acc = _v129;
                  const _v130: any = await rt.send(_v129, "canControl", [_v128]);
                  acc = _v130;
                  _v122 = _v130;
                  const _v131: any = 114;
                  acc = _v131;
                  const _v132: any = 0;
                  acc = _v132;
                  const _v133: any = await rt.call(1, "ScriptID", [_v131, _v132], this);
                  acc = _v133;
                  const _v134: any = 0;
                  acc = _v134;
                  const _v135: any = this;
                  acc = _v135;
                  const _v136: any = rt.global(2);
                  acc = _v136;
                  const _v137: any = await rt.send(_v136, "setScript", [_v133, _v134, _v135]);
                  acc = _v137;
                  _v122 = _v137;
                  const _v138: any = 0;
                  acc = _v138;
                  const _v139: any = rt.setGlobal(473, _v138);
                  acc = _v139;
                  _v122 = _v139;
                  const _v140: any = 0;
                  acc = _v140;
                  const _v141: any = rt.setGlobal(446, _v140);
                  acc = _v141;
                  _v122 = _v141;
                  return acc;
                  _v122 = acc;
                  break _branch124;
                }
                const _v142: any = 2;
                acc = _v142;
                _v122 = rt.op("==", _v123, _v142);
                acc = _v122;
                if (rt.truth(_v122)) {
                  const _v143: any = -3;
                  acc = _v143;
                  const _v144: any = await rt.call(0, "proc0_13", [_v143], this);
                  acc = _v144;
                  _v122 = _v144;
                  const _v145: any = 0;
                  acc = _v145;
                  const _v146: any = rt.object(996, "User");
                  acc = _v146;
                  const _v147: any = await rt.send(_v146, "canControl", [_v145]);
                  acc = _v147;
                  _v122 = _v147;
                  const _v148: any = 114;
                  acc = _v148;
                  const _v149: any = 1;
                  acc = _v149;
                  const _v150: any = await rt.call(1, "ScriptID", [_v148, _v149], this);
                  acc = _v150;
                  const _v151: any = 0;
                  acc = _v151;
                  const _v152: any = this;
                  acc = _v152;
                  const _v153: any = rt.global(2);
                  acc = _v153;
                  const _v154: any = await rt.send(_v153, "setScript", [_v150, _v151, _v152]);
                  acc = _v154;
                  _v122 = _v154;
                  const _v155: any = 0;
                  acc = _v155;
                  const _v156: any = rt.setGlobal(473, _v155);
                  acc = _v156;
                  _v122 = _v156;
                  const _v157: any = 0;
                  acc = _v157;
                  const _v158: any = rt.setGlobal(446, _v157);
                  acc = _v158;
                  _v122 = _v158;
                  return acc;
                  _v122 = acc;
                  break _branch124;
                }
              }
              acc = _v122;
              _v119 = _v122;
            }
            acc = _v119;
            const _v159: any = this;
            acc = _v159;
            const _v160: any = await rt.send(_v159, "endCue", []);
            acc = _v160;
            return acc;
          },
          // SCI room1.sc: Place.endCue
          "endCue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.setGlobal(479, _v1);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(447);
              acc = _v5;
              _v4 = _v5;
            }
            if (rt.truth(_v4)) {
              const _v6: any = rt.global(302);
              acc = _v6;
              const _v7: any = await rt.send(_v6, "playing", []);
              acc = _v7;
              const _v8: any = 29;
              acc = _v8;
              const _v9: any = rt.op("!=", ...[_v7, _v8]);
              acc = _v9;
              _v4 = _v9;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v10: any = rt.global(19);
              acc = _v10;
              const _v11: any = 1;
              acc = _v11;
              const _v12: any = rt.global(449);
              acc = _v12;
              const _v13: any = rt.global(450);
              acc = _v13;
              const _v14: any = await rt.call(1, "SetCursor", [_v10, _v11, _v12, _v13], this);
              acc = _v14;
              _v3 = _v14;
              const _v15: any = rt.global(449);
              acc = _v15;
              const _v16: any = rt.global(450);
              acc = _v16;
              const _v17: any = rt.object(891, "KeyMouse");
              acc = _v17;
              const _v18: any = await rt.send(_v17, "prevCursorX", [_v15]);
              acc = _v18;
              const _v19: any = await rt.send(_v17, "prevCursorY", [_v16]);
              acc = _v19;
              _v3 = _v19;
            }
            acc = _v3;
            let _v20: any = acc;
            const _v21: any = rt.global(302);
            acc = _v21;
            const _v22: any = await rt.send(_v21, "whichBody", []);
            acc = _v22;
            _branch23: {
              const _v24: any = 0;
              acc = _v24;
              _v20 = rt.op("==", _v22, _v24);
              acc = _v20;
              if (rt.truth(_v20)) {
                const _v25: any = 280;
                acc = _v25;
                _v20 = _v25;
                break _branch23;
              }
              const _v26: any = 1;
              acc = _v26;
              _v20 = rt.op("==", _v22, _v26);
              acc = _v20;
              if (rt.truth(_v20)) {
                const _v27: any = 284;
                acc = _v27;
                _v20 = _v27;
                break _branch23;
              }
              const _v28: any = 2;
              acc = _v28;
              _v20 = rt.op("==", _v22, _v28);
              acc = _v20;
              if (rt.truth(_v20)) {
                const _v29: any = 290;
                acc = _v29;
                _v20 = _v29;
                break _branch23;
              }
              const _v30: any = 3;
              acc = _v30;
              _v20 = rt.op("==", _v22, _v30);
              acc = _v20;
              if (rt.truth(_v20)) {
                const _v31: any = 294;
                acc = _v31;
                _v20 = _v31;
                break _branch23;
              }
            }
            acc = _v20;
            const _v32: any = (temps[0] = _v20);
            acc = _v32;
            let _v33: any = acc;
            const _v34: any = rt.global(302);
            acc = _v34;
            const _v35: any = await rt.send(_v34, "playing", []);
            acc = _v35;
            const _v36: any = 29;
            acc = _v36;
            const _v37: any = rt.op("==", ...[_v35, _v36]);
            acc = _v37;
            _v33 = _v37;
            if (rt.truth(_v37)) {
              const _v38: any = 274;
              acc = _v38;
              const _v39: any = (temps[0] = _v38);
              acc = _v39;
              _v33 = _v39;
            }
            acc = _v33;
            let _v40: any = acc;
            const _v41: any = rt.global(302);
            acc = _v41;
            const _v42: any = await rt.send(_v41, "weeksOfClothing", []);
            acc = _v42;
            const _v43: any = rt.op("not", ...[_v42]);
            acc = _v43;
            _v40 = _v43;
            if (rt.truth(_v43)) {
              const _v44: any = (temps[0] ?? 0);
              acc = _v44;
              const _v45: any = 3;
              acc = _v45;
              const _v46: any = rt.op("+", ...[_v44, _v45]);
              acc = _v46;
              _v40 = _v46;
            } else {
              const _v47: any = (temps[0] ?? 0);
              acc = _v47;
              const _v48: any = rt.global(302);
              acc = _v48;
              const _v49: any = await rt.send(_v48, "wearing", []);
              acc = _v49;
              const _v50: any = 34;
              acc = _v50;
              const _v51: any = rt.op("-", ...[_v49, _v50]);
              acc = _v51;
              const _v52: any = rt.op("+", ...[_v47, _v51]);
              acc = _v52;
              _v40 = _v52;
            }
            acc = _v40;
            const _v53: any = rt.global(303);
            acc = _v53;
            const _v54: any = await rt.send(_v53, "view", [_v40]);
            acc = _v54;
            const _v55: any = rt.global(303);
            acc = _v55;
            const _v56: any = await rt.send(_v55, "forceUpd", []);
            acc = _v56;
            const _v57: any = await rt.call(0, "proc0_1", [], this);
            acc = _v57;
            const _v58: any = await rt.call(1, "proc1_9", [], this);
            acc = _v58;
            let _v59: any = acc;
            const _v60: any = rt.global(516);
            acc = _v60;
            _v59 = _v60;
            if (rt.truth(_v60)) {
              const _v61: any = this;
              acc = _v61;
              const _v62: any = await rt.send(_v61, "closeDoor", []);
              acc = _v62;
              _v59 = _v62;
            }
            acc = _v59;
            const _v63: any = rt.global(302);
            acc = _v63;
            const _v64: any = await rt.send(_v63, "consumables", []);
            acc = _v64;
            const _v65: any = await rt.send(_v64, "pack", []);
            acc = _v65;
            const _v66: any = rt.global(302);
            acc = _v66;
            const _v67: any = await rt.send(_v66, "durables", []);
            acc = _v67;
            const _v68: any = await rt.send(_v67, "pack", []);
            acc = _v68;
            const _v69: any = rt.global(302);
            acc = _v69;
            const _v70: any = await rt.send(_v69, "education", []);
            acc = _v70;
            const _v71: any = await rt.send(_v70, "pack", []);
            acc = _v71;
            let _v72: any = acc;
            const _v73: any = rt.global(323);
            acc = _v73;
            const _v74: any = 60;
            acc = _v74;
            const _v75: any = rt.op("<", ...[_v73, _v74]);
            acc = _v75;
            _v72 = _v75;
            if (rt.truth(_v75)) {
              const _v76: any = -1;
              acc = _v76;
              const _v77: any = 5;
              acc = _v77;
              const _v78: any = rt.global(477);
              acc = _v78;
              const _v79: any = await rt.send(_v78, "loop", [_v76]);
              acc = _v79;
              const _v80: any = await rt.send(_v78, "play", [_v77]);
              acc = _v80;
              _v72 = _v80;
            }
            acc = _v72;
            return acc;
          },
        },
      },
      {
        name: "places",
        className: "EventHandler",
        parent: {"script": 999, "name": "EventHandler"},
        isClass: false,
        properties: {},
        methods: {
        },
      },
      {
        name: "mainKeyMouseList",
        className: "Set",
        parent: {"script": 999, "name": "Set"},
        isClass: false,
        properties: {},
        methods: {
        },
      },
      {
        name: "apartmentsP",
        className: "Place",
        parent: {"script": 1, "name": "Place"},
        isClass: false,
        properties: {"index": 1, "topR": 10, "leftR": 130, "bottomR": 43, "rightR": 190, "sNumber": 200, "placeX": 134, "placeY": 2, "doorX": 144, "doorY": 30, "keyMouseX": 160, "keyMouseY": 25},
        methods: {
        },
      },
      {
        name: "rentOfficeP",
        className: "Place",
        parent: {"script": 1, "name": "Place"},
        isClass: false,
        properties: {"placeNum": 1, "index": 164, "topR": 10, "leftR": 68, "bottomR": 43, "rightR": 129, "sNumber": 201, "placeX": 85, "placeY": 3, "doorLoop": 1, "doorX": 105, "doorY": 29, "keyMouseX": 98, "keyMouseY": 25},
        methods: {
        },
      },
      {
        name: "securityP",
        className: "Place",
        parent: {"script": 1, "name": "Place"},
        isClass: false,
        properties: {"placeNum": 2, "index": 151, "topR": 10, "leftR": 7, "bottomR": 43, "rightR": 67, "sNumber": 202, "placeX": 9, "placeY": 2, "doorLoop": 2, "doorX": 29, "doorY": 44, "keyMouseX": 37, "keyMouseY": 25},
        methods: {
        },
      },
      {
        name: "marketP",
        className: "Place",
        parent: {"script": 1, "name": "Place"},
        isClass: false,
        properties: {"placeNum": 3, "index": 134, "topR": 69, "leftR": 24, "bottomR": 114, "rightR": 67, "sNumber": 203, "placeX": 26, "placeY": 70, "doorLoop": 3, "doorX": 46, "doorY": 105, "keyMouseX": 44, "keyMouseY": 89},
        methods: {
        },
      },
      {
        name: "bankP",
        className: "Place",
        parent: {"script": 1, "name": "Place"},
        isClass: false,
        properties: {"placeNum": 4, "index": 120, "topR": 119, "leftR": 7, "bottomR": 154, "rightR": 67, "sNumber": 204, "placeX": 11, "placeY": 92, "doorLoop": 4, "doorX": 20, "doorY": 147, "keyMouseX": 37, "keyMouseY": 139},
        methods: {
          // SCI room1.sc: bankP.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = args.slice(0, argc);
            acc = _v1;
            const _v2: any = await rt.superSend(this, {"script": 1, "name": "bankP"}, "init", [..._v1]);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(535);
            acc = _v4;
            const _v5: any = rt.op("not", ...[_v4]);
            acc = _v5;
            _v3 = _v5;
            if (rt.truth(_v5)) {
              const _v6: any = 21;
              acc = _v6;
              const _v7: any = rt.set(this, "doorX", _v6);
              acc = _v7;
              _v3 = _v7;
              const _v8: any = 146;
              acc = _v8;
              const _v9: any = rt.set(this, "doorY", _v8);
              acc = _v9;
              _v3 = _v9;
            }
            acc = _v3;
            return acc;
          },
        },
      },
      {
        name: "factoryP",
        className: "Place",
        parent: {"script": 1, "name": "Place"},
        isClass: false,
        properties: {"placeNum": 5, "index": 107, "topR": 155, "leftR": 7, "bottomR": 192, "rightR": 67, "sNumber": 205, "placeX": 25, "placeY": 134, "doorLoop": 5, "doorX": 50, "doorY": 181, "keyMouseX": 37, "keyMouseY": 182},
        methods: {
        },
      },
      {
        name: "employmentP",
        className: "Place",
        parent: {"script": 1, "name": "Place"},
        isClass: false,
        properties: {"placeNum": 6, "index": 99, "topR": 168, "leftR": 68, "bottomR": 192, "rightR": 128, "sNumber": 206, "placeX": 79, "placeY": 151, "doorLoop": 6, "doorX": 97, "doorY": 183, "keyMouseX": 98, "keyMouseY": 182},
        methods: {
          // SCI room1.sc: employmentP.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = args.slice(0, argc);
            acc = _v1;
            const _v2: any = await rt.superSend(this, {"script": 1, "name": "employmentP"}, "init", [..._v1]);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(535);
            acc = _v4;
            const _v5: any = rt.op("not", ...[_v4]);
            acc = _v5;
            _v3 = _v5;
            if (rt.truth(_v5)) {
              const _v6: any = 182;
              acc = _v6;
              const _v7: any = rt.set(this, "doorY", _v6);
              acc = _v7;
              _v3 = _v7;
            }
            acc = _v3;
            return acc;
          },
        },
      },
      {
        name: "universityP",
        className: "Place",
        parent: {"script": 1, "name": "Place"},
        isClass: false,
        properties: {"placeNum": 7, "index": 75, "topR": 158, "leftR": 190, "bottomR": 192, "rightR": 250, "sNumber": 207, "placeX": 190, "placeY": 141, "doorLoop": 7, "doorX": 220, "doorY": 179, "keyMouseX": 220, "keyMouseY": 182},
        methods: {
        },
      },
      {
        name: "applianceP",
        className: "Place",
        parent: {"script": 1, "name": "Place"},
        isClass: false,
        properties: {"placeNum": 8, "index": 66, "topR": 133, "leftR": 251, "bottomR": 192, "rightR": 311, "sNumber": 208, "placeX": 256, "placeY": 133, "doorLoop": 8, "doorX": 277, "doorY": 183, "keyMouseX": 281, "keyMouseY": 182},
        methods: {
          // SCI room1.sc: applianceP.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = args.slice(0, argc);
            acc = _v1;
            const _v2: any = await rt.superSend(this, {"script": 1, "name": "applianceP"}, "init", [..._v1]);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(535);
            acc = _v4;
            const _v5: any = rt.op("not", ...[_v4]);
            acc = _v5;
            _v3 = _v5;
            if (rt.truth(_v5)) {
              const _v6: any = 184;
              acc = _v6;
              const _v7: any = rt.set(this, "doorY", _v6);
              acc = _v7;
              _v3 = _v7;
            }
            acc = _v3;
            return acc;
          },
        },
      },
      {
        name: "clothingP",
        className: "Place",
        parent: {"script": 1, "name": "Place"},
        isClass: false,
        properties: {"placeNum": 9, "index": 47, "topR": 82, "leftR": 251, "bottomR": 118, "rightR": 311, "sNumber": 209, "placeX": 257, "placeY": 80, "doorLoop": 9, "doorX": 277, "doorY": 113, "keyMouseX": 281, "keyMouseY": 97},
        methods: {
        },
      },
      {
        name: "fastFoodP",
        className: "Place",
        parent: {"script": 1, "name": "Place"},
        isClass: false,
        properties: {"placeNum": 10, "index": 35, "topR": 44, "leftR": 251, "bottomR": 81, "rightR": 311, "sNumber": 210, "placeX": 264, "placeY": 32, "doorLoop": 10, "doorX": 288, "doorY": 75, "keyMouseX": 281, "keyMouseY": 64},
        methods: {
          // SCI room1.sc: fastFoodP.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = args.slice(0, argc);
            acc = _v1;
            const _v2: any = await rt.superSend(this, {"script": 1, "name": "fastFoodP"}, "init", [..._v1]);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(535);
            acc = _v4;
            const _v5: any = rt.op("not", ...[_v4]);
            acc = _v5;
            _v3 = _v5;
            if (rt.truth(_v5)) {
              const _v6: any = 289;
              acc = _v6;
              const _v7: any = rt.set(this, "doorX", _v6);
              acc = _v7;
              _v3 = _v7;
              const _v8: any = 76;
              acc = _v8;
              const _v9: any = rt.set(this, "doorY", _v8);
              acc = _v9;
              _v3 = _v9;
            }
            acc = _v3;
            return acc;
          },
        },
      },
      {
        name: "discountP",
        className: "Place",
        parent: {"script": 1, "name": "Place"},
        isClass: false,
        properties: {"placeNum": 11, "index": 24, "topR": 10, "leftR": 251, "bottomR": 43, "rightR": 311, "sNumber": 211, "placeX": 258, "placeY": 2, "doorLoop": 11, "doorX": 282, "doorY": 34, "keyMouseX": 281, "keyMouseY": 25},
        methods: {
        },
      },
      {
        name: "pawnShopP",
        className: "Place",
        parent: {"script": 1, "name": "Place"},
        isClass: false,
        properties: {"placeNum": 12, "index": 14, "topR": 10, "leftR": 191, "bottomR": 43, "rightR": 250, "sNumber": 212, "placeX": 201, "placeY": 4, "doorLoop": 12, "doorX": 221, "doorY": 34, "keyMouseX": 221, "keyMouseY": 25},
        methods: {
          // SCI room1.sc: pawnShopP.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = args.slice(0, argc);
            acc = _v1;
            const _v2: any = await rt.superSend(this, {"script": 1, "name": "pawnShopP"}, "init", [..._v1]);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(535);
            acc = _v4;
            const _v5: any = rt.op("not", ...[_v4]);
            acc = _v5;
            _v3 = _v5;
            if (rt.truth(_v5)) {
              const _v6: any = 33;
              acc = _v6;
              const _v7: any = rt.set(this, "doorY", _v6);
              acc = _v7;
              _v3 = _v7;
            }
            acc = _v3;
            return acc;
          },
        },
      },
      {
        name: "I",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: true,
        properties: {"shares": 0, "basePrice": 0, "indexNum": 0},
        methods: {
          // SCI room1.sc: I.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = (args[0] ?? 0);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "investments", []);
            acc = _v3;
            const _v4: any = await rt.send(_v3, "add", [_v1]);
            acc = _v4;
            return acc;
          },
        },
      },
      {
        name: "Player",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: true,
        properties: {"actualName": "", "playing": 0, "gender": 0, "monGoal": 50, "hapGoal": 50, "eduGoal": 50, "carGoal": 50, "monStat": 0, "hapStat": 0, "eduStat": 0, "carStat": 0, "monR": 0, "hapR": 0, "eduR": 0, "carR": 0, "finishStatus": 0, "cash": 200, "cashHi": 0, "netWorth": 200, "netWorthHi": 0, "lqAss": 200, "lqAssHi": 0, "invAss": 0, "invAssHi": 0, "bankBal": 0, "bankBalHi": 0, "livesAt": 0, "relax": 25, "worksAt": 0, "jobKey": 0, "wage": 0, "baseWage": 0, "occupation": 0, "raisesGiven": 0, "uniform": 36, "wearing": 36, "rentOwed": 0, "curRent": 325, "rentExt": 0, "triedExt": 0, "leaveOpen": 0, "loanBal": 0, "latePayments": 0, "paySched": 0, "madePayment": 0, "enrollments": 0, "extraCredits": 0, "needEd1": 0, "needEd2": 0, "consumables": 0, "durables": 0, "education": 0, "dependibility": 20, "minDepend": 0, "experience": 10, "maxExperience": 10, "notEnoughEd": 0, "investments": 0, "tBillS": 0, "goldS": 0, "silverS": 0, "porkS": 0, "blueS": 0, "pennyS": 0, "script": 0, "eduCredit": 0, "expCredit": 0, "jobT": -1, "nakedCount": 0, "turnedOver": 0, "whichBody": 0, "whichNumber": 0, "playingAsJones": 0, "coursesDone": 0},
        methods: {
          // SCI room1.sc: Player.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "playing");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = 200;
              acc = _v3;
              const _v4: any = 0;
              acc = _v4;
              const _v5: any = this;
              acc = _v5;
              const _v6: any = await rt.send(_v5, "cash", [_v3]);
              acc = _v6;
              const _v7: any = await rt.send(_v5, "cashHi", [_v4]);
              acc = _v7;
              _v1 = _v7;
              const _v8: any = rt.object(106, "Consumables");
              acc = _v8;
              const _v9: any = await rt.send(_v8, "new", []);
              acc = _v9;
              const _v10: any = rt.set(this, "consumables", _v9);
              acc = _v10;
              const _v11: any = await rt.send(_v10, "add", []);
              acc = _v11;
              _v1 = _v11;
              const _v12: any = rt.object(106, "Durables");
              acc = _v12;
              const _v13: any = await rt.send(_v12, "new", []);
              acc = _v13;
              const _v14: any = rt.set(this, "durables", _v13);
              acc = _v14;
              const _v15: any = await rt.send(_v14, "add", []);
              acc = _v15;
              _v1 = _v15;
              const _v16: any = rt.object(106, "Education");
              acc = _v16;
              const _v17: any = await rt.send(_v16, "new", []);
              acc = _v17;
              const _v18: any = rt.set(this, "education", _v17);
              acc = _v18;
              const _v19: any = await rt.send(_v18, "add", []);
              acc = _v19;
              _v1 = _v19;
              const _v20: any = rt.object(999, "List");
              acc = _v20;
              const _v21: any = await rt.send(_v20, "new", []);
              acc = _v21;
              const _v22: any = rt.set(this, "investments", _v21);
              acc = _v22;
              const _v23: any = await rt.send(_v22, "add", []);
              acc = _v23;
              _v1 = _v23;
              const _v24: any = this;
              acc = _v24;
              const _v25: any = 100;
              acc = _v25;
              const _v26: any = 65;
              acc = _v26;
              const _v27: any = rt.object(1, "I");
              acc = _v27;
              const _v28: any = await rt.send(_v27, "new", []);
              acc = _v28;
              const _v29: any = rt.set(this, "tBillS", _v28);
              acc = _v29;
              const _v30: any = await rt.send(_v29, "init", [_v24]);
              acc = _v30;
              const _v31: any = await rt.send(_v29, "basePrice", [_v25]);
              acc = _v31;
              const _v32: any = await rt.send(_v29, "indexNum", [_v26]);
              acc = _v32;
              _v1 = _v32;
              const _v33: any = this;
              acc = _v33;
              const _v34: any = 413;
              acc = _v34;
              const _v35: any = 66;
              acc = _v35;
              const _v36: any = rt.object(1, "I");
              acc = _v36;
              const _v37: any = await rt.send(_v36, "new", []);
              acc = _v37;
              const _v38: any = rt.set(this, "goldS", _v37);
              acc = _v38;
              const _v39: any = await rt.send(_v38, "init", [_v33]);
              acc = _v39;
              const _v40: any = await rt.send(_v38, "basePrice", [_v34]);
              acc = _v40;
              const _v41: any = await rt.send(_v38, "indexNum", [_v35]);
              acc = _v41;
              _v1 = _v41;
              const _v42: any = this;
              acc = _v42;
              const _v43: any = 14;
              acc = _v43;
              const _v44: any = 67;
              acc = _v44;
              const _v45: any = rt.object(1, "I");
              acc = _v45;
              const _v46: any = await rt.send(_v45, "new", []);
              acc = _v46;
              const _v47: any = rt.set(this, "silverS", _v46);
              acc = _v47;
              const _v48: any = await rt.send(_v47, "init", [_v42]);
              acc = _v48;
              const _v49: any = await rt.send(_v47, "basePrice", [_v43]);
              acc = _v49;
              const _v50: any = await rt.send(_v47, "indexNum", [_v44]);
              acc = _v50;
              _v1 = _v50;
              const _v51: any = this;
              acc = _v51;
              const _v52: any = 20;
              acc = _v52;
              const _v53: any = 68;
              acc = _v53;
              const _v54: any = rt.object(1, "I");
              acc = _v54;
              const _v55: any = await rt.send(_v54, "new", []);
              acc = _v55;
              const _v56: any = rt.set(this, "porkS", _v55);
              acc = _v56;
              const _v57: any = await rt.send(_v56, "init", [_v51]);
              acc = _v57;
              const _v58: any = await rt.send(_v56, "basePrice", [_v52]);
              acc = _v58;
              const _v59: any = await rt.send(_v56, "indexNum", [_v53]);
              acc = _v59;
              _v1 = _v59;
              const _v60: any = this;
              acc = _v60;
              const _v61: any = 49;
              acc = _v61;
              const _v62: any = 69;
              acc = _v62;
              const _v63: any = rt.object(1, "I");
              acc = _v63;
              const _v64: any = await rt.send(_v63, "new", []);
              acc = _v64;
              const _v65: any = rt.set(this, "blueS", _v64);
              acc = _v65;
              const _v66: any = await rt.send(_v65, "init", [_v60]);
              acc = _v66;
              const _v67: any = await rt.send(_v65, "basePrice", [_v61]);
              acc = _v67;
              const _v68: any = await rt.send(_v65, "indexNum", [_v62]);
              acc = _v68;
              _v1 = _v68;
              const _v69: any = this;
              acc = _v69;
              const _v70: any = 7;
              acc = _v70;
              const _v71: any = 70;
              acc = _v71;
              const _v72: any = rt.object(1, "I");
              acc = _v72;
              const _v73: any = await rt.send(_v72, "new", []);
              acc = _v73;
              const _v74: any = rt.set(this, "pennyS", _v73);
              acc = _v74;
              const _v75: any = await rt.send(_v74, "init", [_v69]);
              acc = _v75;
              const _v76: any = await rt.send(_v74, "basePrice", [_v70]);
              acc = _v76;
              const _v77: any = await rt.send(_v74, "indexNum", [_v71]);
              acc = _v77;
              _v1 = _v77;
              const _v78: any = 325;
              acc = _v78;
              const _v79: any = 40;
              acc = _v79;
              const _v80: any = 40;
              acc = _v80;
              const _v81: any = 3;
              acc = _v81;
              const _v82: any = rt.get(this, "consumables");
              acc = _v82;
              const _v83: any = await rt.send(_v82, "recieve", [_v80, _v81]);
              acc = _v83;
              const _v84: any = await rt.send(_v83, "pricePaid", [_v78]);
              acc = _v84;
              const _v85: any = await rt.send(_v83, "indexNum", [_v79]);
              acc = _v85;
              _v1 = _v85;
              const _v86: any = 30;
              acc = _v86;
              const _v87: any = 36;
              acc = _v87;
              const _v88: any = 36;
              acc = _v88;
              const _v89: any = 6;
              acc = _v89;
              const _v90: any = rt.get(this, "consumables");
              acc = _v90;
              const _v91: any = await rt.send(_v90, "recieve", [_v88, _v89]);
              acc = _v91;
              const _v92: any = await rt.send(_v91, "pricePaid", [_v86]);
              acc = _v92;
              const _v93: any = await rt.send(_v91, "indexNum", [_v87]);
              acc = _v93;
              _v1 = _v93;
            }
            acc = _v1;
            return acc;
          },
          // SCI room1.sc: Player.dressedForWork
          "dressedForWork": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0];
            const _v1: any = 36;
            acc = _v1;
            const _v2: any = rt.get(this, "consumables");
            acc = _v2;
            const _v3: any = await rt.send(_v2, "objectAtIndex", [_v1]);
            acc = _v3;
            const _v4: any = 0;
            acc = _v4;
            const _v5: any = (temps[(0 + (Number(_v4) & 65535))] = _v3);
            acc = _v5;
            const _v6: any = 35;
            acc = _v6;
            const _v7: any = rt.get(this, "consumables");
            acc = _v7;
            const _v8: any = await rt.send(_v7, "objectAtIndex", [_v6]);
            acc = _v8;
            const _v9: any = 1;
            acc = _v9;
            const _v10: any = (temps[(0 + (Number(_v9) & 65535))] = _v8);
            acc = _v10;
            const _v11: any = 34;
            acc = _v11;
            const _v12: any = rt.get(this, "consumables");
            acc = _v12;
            const _v13: any = await rt.send(_v12, "objectAtIndex", [_v11]);
            acc = _v13;
            const _v14: any = 2;
            acc = _v14;
            const _v15: any = (temps[(0 + (Number(_v14) & 65535))] = _v13);
            acc = _v15;
            const _v16: any = 2;
            acc = _v16;
            const _v17: any = (temps[3] = _v16);
            acc = _v17;
            const _v18: any = 0;
            acc = _v18;
            const _v19: any = rt.set(this, "wearing", _v18);
            acc = _v19;
            _loop20: for (;;) {
              const _v22: any = (temps[3] ?? 0);
              acc = _v22;
              const _v23: any = 0;
              acc = _v23;
              const _v24: any = rt.op(">=", ...[_v22, _v23]);
              acc = _v24;
              if (!rt.truth(_v24)) break _loop20;
              _continue21: {
                let _v25: any = acc;
                let _v26: any = 1;
                if (rt.truth(_v26)) {
                  const _v27: any = (temps[3] ?? 0);
                  acc = _v27;
                  const _v28: any = (temps[(0 + (Number(_v27) & 65535))] ?? 0);
                  acc = _v28;
                  _v26 = _v28;
                }
                if (rt.truth(_v26)) {
                  const _v29: any = (temps[3] ?? 0);
                  acc = _v29;
                  const _v30: any = (temps[(0 + (Number(_v29) & 65535))] ?? 0);
                  acc = _v30;
                  const _v31: any = await rt.send(_v30, "quantity", []);
                  acc = _v31;
                  _v26 = _v31;
                }
                acc = _v26;
                _v25 = _v26;
                if (rt.truth(_v26)) {
                  const _v32: any = (temps[3] ?? 0);
                  acc = _v32;
                  const _v33: any = (temps[(0 + (Number(_v32) & 65535))] ?? 0);
                  acc = _v33;
                  const _v34: any = await rt.send(_v33, "indexNum", []);
                  acc = _v34;
                  const _v35: any = rt.set(this, "wearing", _v34);
                  acc = _v35;
                  _v25 = _v35;
                  break _loop20;
                  _v25 = acc;
                }
                acc = _v25;
                const _v36: any = (temps[3] = rt.op("-", (temps[3] ?? 0), 1));
                acc = _v36;
              }
            }
            let _v37: any = acc;
            let _v38: any = 0;
            if (!rt.truth(_v38)) {
              const _v39: any = rt.get(this, "wearing");
              acc = _v39;
              const _v40: any = rt.op("not", ...[_v39]);
              acc = _v40;
              _v38 = _v40;
            }
            if (!rt.truth(_v38)) {
              const _v41: any = rt.get(this, "uniform");
              acc = _v41;
              const _v42: any = rt.get(this, "wearing");
              acc = _v42;
              const _v43: any = rt.op("<", ...[_v41, _v42]);
              acc = _v43;
              _v38 = _v43;
            }
            acc = _v38;
            _v37 = _v38;
            if (rt.truth(_v38)) {
              const _v44: any = 0;
              acc = _v44;
              return _v44;
              _v37 = acc;
            }
            acc = _v37;
            const _v45: any = 1;
            acc = _v45;
            return _v45;
            return acc;
          },
          // SCI room1.sc: Player.weeksOfClothing
          "weeksOfClothing": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0];
            const _v1: any = 36;
            acc = _v1;
            const _v2: any = rt.get(this, "consumables");
            acc = _v2;
            const _v3: any = await rt.send(_v2, "objectAtIndex", [_v1]);
            acc = _v3;
            const _v4: any = 0;
            acc = _v4;
            const _v5: any = (temps[(1 + (Number(_v4) & 65535))] = _v3);
            acc = _v5;
            const _v6: any = 35;
            acc = _v6;
            const _v7: any = rt.get(this, "consumables");
            acc = _v7;
            const _v8: any = await rt.send(_v7, "objectAtIndex", [_v6]);
            acc = _v8;
            const _v9: any = 1;
            acc = _v9;
            const _v10: any = (temps[(1 + (Number(_v9) & 65535))] = _v8);
            acc = _v10;
            const _v11: any = 34;
            acc = _v11;
            const _v12: any = rt.get(this, "consumables");
            acc = _v12;
            const _v13: any = await rt.send(_v12, "objectAtIndex", [_v11]);
            acc = _v13;
            const _v14: any = 2;
            acc = _v14;
            const _v15: any = (temps[(1 + (Number(_v14) & 65535))] = _v13);
            acc = _v15;
            const _v16: any = 0;
            acc = _v16;
            const _v17: any = (temps[0] = _v16);
            acc = _v17;
            const _v20: any = 2;
            acc = _v20;
            const _v21: any = (temps[4] = _v20);
            acc = _v21;
            _loop18: for (;;) {
              const _v22: any = (temps[4] ?? 0);
              acc = _v22;
              const _v23: any = 0;
              acc = _v23;
              const _v24: any = rt.op(">=", ...[_v22, _v23]);
              acc = _v24;
              if (!rt.truth(_v24)) break _loop18;
              _continue19: {
                let _v25: any = acc;
                let _v26: any = 1;
                if (rt.truth(_v26)) {
                  const _v27: any = (temps[4] ?? 0);
                  acc = _v27;
                  const _v28: any = (temps[(1 + (Number(_v27) & 65535))] ?? 0);
                  acc = _v28;
                  _v26 = _v28;
                }
                if (rt.truth(_v26)) {
                  const _v29: any = (temps[4] ?? 0);
                  acc = _v29;
                  const _v30: any = (temps[(1 + (Number(_v29) & 65535))] ?? 0);
                  acc = _v30;
                  const _v31: any = await rt.send(_v30, "quantity", []);
                  acc = _v31;
                  const _v32: any = (temps[0] ?? 0);
                  acc = _v32;
                  const _v33: any = rt.op(">", ...[_v31, _v32]);
                  acc = _v33;
                  _v26 = _v33;
                }
                acc = _v26;
                _v25 = _v26;
                if (rt.truth(_v26)) {
                  const _v34: any = (temps[4] ?? 0);
                  acc = _v34;
                  const _v35: any = (temps[(1 + (Number(_v34) & 65535))] ?? 0);
                  acc = _v35;
                  const _v36: any = await rt.send(_v35, "quantity", []);
                  acc = _v36;
                  const _v37: any = (temps[0] = _v36);
                  acc = _v37;
                  _v25 = _v37;
                }
                acc = _v25;
              }
              const _v38: any = (temps[4] = rt.op("-", (temps[4] ?? 0), 1));
              acc = _v38;
            }
            const _v39: any = (temps[0] ?? 0);
            acc = _v39;
            return _v39;
            return acc;
          },
          // SCI room1.sc: Player.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "script");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = rt.get(this, "script");
              acc = _v3;
              const _v4: any = await rt.send(_v3, "doit", []);
              acc = _v4;
              _v1 = _v4;
            }
            acc = _v1;
            let _v5: any = acc;
            const _v6: any = rt.global(448);
            acc = _v6;
            _v5 = _v6;
            if (rt.truth(_v6)) {
              const _v7: any = rt.object(1, "players");
              acc = _v7;
              const _v8: any = await rt.send(_v7, "doit", []);
              acc = _v8;
              _v5 = _v8;
              let _v9: any = acc;
              let _v10: any = 1;
              if (rt.truth(_v10)) {
                const _v11: any = rt.global(4);
                acc = _v11;
                const _v12: any = rt.op("not", ...[_v11]);
                acc = _v12;
                _v10 = _v12;
              }
              if (rt.truth(_v10)) {
                const _v13: any = rt.global(528);
                acc = _v13;
                const _v14: any = rt.op("not", ...[_v13]);
                acc = _v14;
                _v10 = _v14;
              }
              acc = _v10;
              _v9 = _v10;
              if (rt.truth(_v10)) {
                const _v15: any = rt.global(477);
                acc = _v15;
                const _v16: any = await rt.send(_v15, "stop", []);
                acc = _v16;
                _v9 = _v16;
                const _v17: any = 12;
                acc = _v17;
                const _v18: any = 12;
                acc = _v18;
                const _v19: any = rt.object(1, "marble");
                acc = _v19;
                const _v20: any = await rt.send(_v19, "setStep", [_v17, _v18]);
                acc = _v20;
                _v9 = _v20;
                const _v21: any = rt.object(1, "marble");
                acc = _v21;
                const _v22: any = rt.setGlobal(459, _v21);
                acc = _v22;
                _v9 = _v22;
                const _v23: any = 1;
                acc = _v23;
                const _v24: any = rt.setGlobal(460, _v23);
                acc = _v24;
                _v9 = _v24;
                let _v25: any = acc;
                const _v26: any = rt.global(302);
                acc = _v26;
                const _v27: any = await rt.send(_v26, "livesAt", []);
                acc = _v27;
                const _v28: any = 0;
                acc = _v28;
                const _v29: any = rt.op("==", ...[_v27, _v28]);
                acc = _v29;
                _v25 = _v29;
                if (rt.truth(_v29)) {
                  const _v30: any = rt.object(992, "MoveTo");
                  acc = _v30;
                  const _v31: any = 144;
                  acc = _v31;
                  const _v32: any = 37;
                  acc = _v32;
                  const _v33: any = rt.object(1, "marbleMoved");
                  acc = _v33;
                  const _v34: any = rt.object(1, "marble");
                  acc = _v34;
                  const _v35: any = await rt.send(_v34, "setMotion", [_v30, _v31, _v32, _v33]);
                  acc = _v35;
                  _v25 = _v35;
                } else {
                  const _v36: any = rt.object(992, "MoveTo");
                  acc = _v36;
                  const _v37: any = 29;
                  acc = _v37;
                  const _v38: any = 45;
                  acc = _v38;
                  const _v39: any = rt.object(1, "marbleMoved");
                  acc = _v39;
                  const _v40: any = rt.object(1, "marble");
                  acc = _v40;
                  const _v41: any = await rt.send(_v40, "setMotion", [_v36, _v37, _v38, _v39]);
                  acc = _v41;
                  _v25 = _v41;
                }
                acc = _v25;
                _v9 = _v25;
              }
              acc = _v9;
              _v5 = _v9;
            }
            acc = _v5;
            return acc;
          },
          // SCI room1.sc: Player.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "script");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = (args[0] ?? 0);
              acc = _v3;
              const _v4: any = rt.get(this, "script");
              acc = _v4;
              const _v5: any = await rt.send(_v4, "handleEvent", [_v3]);
              acc = _v5;
              _v1 = _v5;
            }
            acc = _v1;
            return acc;
          },
          // SCI room1.sc: Player.startTurn
          "startTurn": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.object(1, "timeKeep");
            acc = _v1;
            const _v2: any = await rt.send(_v1, "init", []);
            acc = _v2;
            const _v3: any = await rt.call(0, "proc0_1", [], this);
            acc = _v3;
            const _v4: any = rt.get(this, "livesAt");
            acc = _v4;
            const _v5: any = rt.setGlobal(457, _v4);
            acc = _v5;
            const _v6: any = 0;
            acc = _v6;
            const _v7: any = rt.setGlobal(473, _v6);
            acc = _v7;
            const _v8: any = 107;
            acc = _v8;
            const _v9: any = await rt.call(1, "ScriptID", [_v8], this);
            acc = _v9;
            const _v10: any = await rt.send(_v9, "doit", []);
            acc = _v10;
            const _v11: any = this;
            acc = _v11;
            const _v12: any = 111;
            acc = _v12;
            const _v13: any = await rt.call(1, "ScriptID", [_v12], this);
            acc = _v13;
            const _v14: any = rt.set(this, "script", _v13);
            acc = _v14;
            const _v15: any = await rt.send(_v14, "init", [_v11]);
            acc = _v15;
            return acc;
          },
          // SCI room1.sc: Player.endTurn
          "endTurn": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0];
            const _v1: any = 3;
            acc = _v1;
            const _v2: any = rt.set(this, "dependibility", rt.op("-", rt.get(this, "dependibility"), _v1));
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.get(this, "dependibility");
            acc = _v4;
            const _v5: any = 0;
            acc = _v5;
            const _v6: any = rt.op("<", ...[_v4, _v5]);
            acc = _v6;
            _v3 = _v6;
            if (rt.truth(_v6)) {
              const _v7: any = 0;
              acc = _v7;
              const _v8: any = rt.set(this, "dependibility", _v7);
              acc = _v8;
              _v3 = _v8;
            }
            acc = _v3;
            let _v9: any = acc;
            const _v10: any = rt.global(302);
            acc = _v10;
            const _v11: any = await rt.send(_v10, "wage", []);
            acc = _v11;
            _v9 = _v11;
            if (rt.truth(_v11)) {
              const _v12: any = rt.global(302);
              acc = _v12;
              const _v13: any = await rt.send(_v12, "dependibility", []);
              acc = _v13;
              const _v14: any = 8;
              acc = _v14;
              const _v15: any = rt.op("/", ...[_v13, _v14]);
              acc = _v15;
              const _v16: any = 10;
              acc = _v16;
              const _v17: any = rt.op("*", ...[_v15, _v16]);
              acc = _v17;
              _v9 = _v17;
            } else {
              const _v18: any = 0;
              acc = _v18;
              _v9 = _v18;
            }
            acc = _v9;
            const _v19: any = rt.global(302);
            acc = _v19;
            const _v20: any = await rt.send(_v19, "carStat", [_v9]);
            acc = _v20;
            let _v21: any = acc;
            const _v22: any = rt.global(302);
            acc = _v22;
            const _v23: any = await rt.send(_v22, "carStat", []);
            acc = _v23;
            const _v24: any = 100;
            acc = _v24;
            const _v25: any = rt.op(">", ...[_v23, _v24]);
            acc = _v25;
            _v21 = _v25;
            if (rt.truth(_v25)) {
              const _v26: any = 100;
              acc = _v26;
              const _v27: any = rt.global(302);
              acc = _v27;
              const _v28: any = await rt.send(_v27, "carStat", [_v26]);
              acc = _v28;
              _v21 = _v28;
            }
            acc = _v21;
            const _v31: any = 0;
            acc = _v31;
            const _v32: any = (temps[0] = _v31);
            acc = _v32;
            _loop29: for (;;) {
              const _v33: any = (temps[0] ?? 0);
              acc = _v33;
              const _v34: any = rt.get(this, "durables");
              acc = _v34;
              const _v35: any = await rt.send(_v34, "size", []);
              acc = _v35;
              const _v36: any = rt.op("<", ...[_v33, _v35]);
              acc = _v36;
              if (!rt.truth(_v36)) break _loop29;
              _continue30: {
                let _v37: any = acc;
                const _v38: any = (temps[0] ?? 0);
                acc = _v38;
                const _v39: any = rt.get(this, "durables");
                acc = _v39;
                const _v40: any = await rt.send(_v39, "at", [_v38]);
                acc = _v40;
                const _v41: any = await rt.send(_v40, "attributes", []);
                acc = _v41;
                const _v42: any = 24;
                acc = _v42;
                const _v43: any = rt.op("&", ...[_v41, _v42]);
                acc = _v43;
                const _v44: any = (temps[1] = _v43);
                acc = _v44;
                _v37 = _v44;
                if (rt.truth(_v44)) {
                  let _v45: any = acc;
                  const _v46: any = (temps[1] ?? 0);
                  acc = _v46;
                  _branch47: {
                    const _v48: any = 24;
                    acc = _v48;
                    _v45 = rt.op("==", _v46, _v48);
                    acc = _v45;
                    if (rt.truth(_v45)) {
                      const _v49: any = 16;
                      acc = _v49;
                      _v45 = _v49;
                      break _branch47;
                    }
                    const _v50: any = 16;
                    acc = _v50;
                    _v45 = rt.op("==", _v46, _v50);
                    acc = _v45;
                    if (rt.truth(_v45)) {
                      const _v51: any = 8;
                      acc = _v51;
                      _v45 = _v51;
                      break _branch47;
                    }
                    const _v52: any = 8;
                    acc = _v52;
                    _v45 = rt.op("==", _v46, _v52);
                    acc = _v45;
                    if (rt.truth(_v45)) {
                      const _v53: any = 0;
                      acc = _v53;
                      _v45 = _v53;
                      break _branch47;
                    }
                  }
                  acc = _v45;
                  const _v54: any = (temps[2] = _v45);
                  acc = _v54;
                  _v37 = _v54;
                  const _v55: any = (temps[0] ?? 0);
                  acc = _v55;
                  const _v56: any = rt.get(this, "durables");
                  acc = _v56;
                  const _v57: any = await rt.send(_v56, "at", [_v55]);
                  acc = _v57;
                  const _v58: any = await rt.send(_v57, "attributes", []);
                  acc = _v58;
                  const _v59: any = 65511;
                  acc = _v59;
                  const _v60: any = rt.op("&", ...[_v58, _v59]);
                  acc = _v60;
                  const _v61: any = (temps[2] ?? 0);
                  acc = _v61;
                  const _v62: any = rt.op("|", ...[_v60, _v61]);
                  acc = _v62;
                  const _v63: any = (temps[0] ?? 0);
                  acc = _v63;
                  const _v64: any = rt.get(this, "durables");
                  acc = _v64;
                  const _v65: any = await rt.send(_v64, "at", [_v63]);
                  acc = _v65;
                  const _v66: any = await rt.send(_v65, "attributes", [_v62]);
                  acc = _v66;
                  _v37 = _v66;
                  let _v67: any = acc;
                  const _v68: any = (temps[2] ?? 0);
                  acc = _v68;
                  const _v69: any = rt.op("not", ...[_v68]);
                  acc = _v69;
                  _v67 = _v69;
                  if (rt.truth(_v69)) {
                    const _v70: any = (temps[0] ?? 0);
                    acc = _v70;
                    const _v71: any = rt.get(this, "durables");
                    acc = _v71;
                    const _v72: any = await rt.send(_v71, "at", [_v70]);
                    acc = _v72;
                    const _v73: any = await rt.send(_v72, "attributes", []);
                    acc = _v73;
                    const _v74: any = 32;
                    acc = _v74;
                    const _v75: any = rt.op("|", ...[_v73, _v74]);
                    acc = _v75;
                    const _v76: any = (temps[0] ?? 0);
                    acc = _v76;
                    const _v77: any = rt.get(this, "durables");
                    acc = _v77;
                    const _v78: any = await rt.send(_v77, "at", [_v76]);
                    acc = _v78;
                    const _v79: any = await rt.send(_v78, "attributes", [_v75]);
                    acc = _v79;
                    _v67 = _v79;
                  }
                  acc = _v67;
                  _v37 = _v67;
                }
                acc = _v37;
              }
              const _v80: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
              acc = _v80;
            }
            let _v81: any = acc;
            const _v82: any = rt.get(this, "livesAt");
            acc = _v82;
            const _v83: any = 0;
            acc = _v83;
            const _v84: any = rt.op("==", ...[_v82, _v83]);
            acc = _v84;
            _v81 = _v84;
            if (rt.truth(_v84)) {
              const _v85: any = 40;
              acc = _v85;
              _v81 = _v85;
            } else {
              const _v86: any = 41;
              acc = _v86;
              _v81 = _v86;
            }
            acc = _v81;
            const _v87: any = (temps[3] = _v81);
            acc = _v87;
            let _v88: any = acc;
            const _v89: any = rt.global(372);
            acc = _v89;
            const _v90: any = 4;
            acc = _v90;
            const _v91: any = rt.op("mod", ...[_v89, _v90]);
            acc = _v91;
            const _v92: any = rt.op("not", ...[_v91]);
            acc = _v92;
            _v88 = _v92;
            if (rt.truth(_v92)) {
              let _v93: any = acc;
              const _v94: any = rt.get(this, "loanBal");
              acc = _v94;
              _v93 = _v94;
              if (rt.truth(_v94)) {
                const _v95: any = rt.set(this, "paySched", rt.op("-", rt.get(this, "paySched"), 1));
                acc = _v95;
                _v93 = _v95;
                let _v96: any = acc;
                const _v97: any = rt.get(this, "madePayment");
                acc = _v97;
                const _v98: any = rt.op("not", ...[_v97]);
                acc = _v98;
                _v96 = _v98;
                if (rt.truth(_v98)) {
                  const _v99: any = rt.set(this, "latePayments", rt.op("+", rt.get(this, "latePayments"), 1));
                  acc = _v99;
                  _v96 = _v99;
                }
                acc = _v96;
                _v93 = _v96;
              }
              acc = _v93;
              _v88 = _v93;
              let _v100: any = acc;
              let _v101: any = 1;
              if (rt.truth(_v101)) {
                const _v102: any = (temps[3] ?? 0);
                acc = _v102;
                const _v103: any = rt.get(this, "consumables");
                acc = _v103;
                const _v104: any = await rt.send(_v103, "objectAtIndex", [_v102]);
                acc = _v104;
                _v101 = _v104;
              }
              if (rt.truth(_v101)) {
                const _v105: any = (temps[3] ?? 0);
                acc = _v105;
                const _v106: any = rt.get(this, "consumables");
                acc = _v106;
                const _v107: any = await rt.send(_v106, "objectAtIndex", [_v105]);
                acc = _v107;
                const _v108: any = await rt.send(_v107, "quantity", []);
                acc = _v108;
                const _v109: any = rt.op("not", ...[_v108]);
                acc = _v109;
                _v101 = _v109;
              }
              if (rt.truth(_v101)) {
                const _v110: any = rt.get(this, "triedExt");
                acc = _v110;
                const _v111: any = 1;
                acc = _v111;
                const _v112: any = rt.op("!=", ...[_v110, _v111]);
                acc = _v112;
                _v101 = _v112;
              }
              if (rt.truth(_v101)) {
                const _v113: any = rt.get(this, "turnedOver");
                acc = _v113;
                const _v114: any = rt.op("not", ...[_v113]);
                acc = _v114;
                _v101 = _v114;
              }
              acc = _v101;
              _v100 = _v101;
              if (rt.truth(_v101)) {
                const _v115: any = 1;
                acc = _v115;
                const _v116: any = rt.set(this, "turnedOver", _v115);
                acc = _v116;
                _v100 = _v116;
                const _v117: any = rt.get(this, "curRent");
                acc = _v117;
                const _v118: any = rt.set(this, "rentOwed", rt.op("+", rt.get(this, "rentOwed"), _v117));
                acc = _v118;
                _v100 = _v118;
              }
              acc = _v100;
              _v88 = _v100;
              const _v119: any = rt.get(this, "triedExt");
              acc = _v119;
              const _v120: any = 1;
              acc = _v120;
              const _v121: any = rt.op("==", ...[_v119, _v120]);
              acc = _v121;
              const _v122: any = rt.set(this, "leaveOpen", _v121);
              acc = _v122;
              _v88 = _v122;
              const _v123: any = 0;
              acc = _v123;
              const _v124: any = rt.set(this, "madePayment", _v123);
              acc = _v124;
              const _v125: any = rt.set(this, "triedExt", _v124);
              acc = _v125;
              _v88 = _v125;
            } else {
              let _v126: any = acc;
              let _v127: any = 1;
              if (rt.truth(_v127)) {
                const _v128: any = (temps[3] ?? 0);
                acc = _v128;
                const _v129: any = rt.get(this, "consumables");
                acc = _v129;
                const _v130: any = await rt.send(_v129, "objectAtIndex", [_v128]);
                acc = _v130;
                _v127 = _v130;
              }
              if (rt.truth(_v127)) {
                const _v131: any = (temps[3] ?? 0);
                acc = _v131;
                const _v132: any = rt.get(this, "consumables");
                acc = _v132;
                const _v133: any = await rt.send(_v132, "objectAtIndex", [_v131]);
                acc = _v133;
                const _v134: any = await rt.send(_v133, "quantity", []);
                acc = _v134;
                const _v135: any = rt.op("not", ...[_v134]);
                acc = _v135;
                _v127 = _v135;
              }
              if (rt.truth(_v127)) {
                const _v136: any = rt.get(this, "triedExt");
                acc = _v136;
                const _v137: any = 1;
                acc = _v137;
                const _v138: any = rt.op("!=", ...[_v136, _v137]);
                acc = _v138;
                _v127 = _v138;
              }
              if (rt.truth(_v127)) {
                const _v139: any = rt.get(this, "rentOwed");
                acc = _v139;
                const _v140: any = rt.op("not", ...[_v139]);
                acc = _v140;
                _v127 = _v140;
              }
              if (rt.truth(_v127)) {
                const _v141: any = rt.get(this, "turnedOver");
                acc = _v141;
                const _v142: any = rt.op("not", ...[_v141]);
                acc = _v142;
                _v127 = _v142;
              }
              acc = _v127;
              _v126 = _v127;
              if (rt.truth(_v127)) {
                const _v143: any = 1;
                acc = _v143;
                const _v144: any = rt.set(this, "turnedOver", _v143);
                acc = _v144;
                _v126 = _v144;
                const _v145: any = rt.get(this, "curRent");
                acc = _v145;
                const _v146: any = rt.set(this, "rentOwed", rt.op("+", rt.get(this, "rentOwed"), _v145));
                acc = _v146;
                _v126 = _v146;
              }
              acc = _v126;
              _v88 = _v126;
              const _v147: any = rt.get(this, "triedExt");
              acc = _v147;
              const _v148: any = 1;
              acc = _v148;
              const _v149: any = rt.op("==", ...[_v147, _v148]);
              acc = _v149;
              const _v150: any = rt.set(this, "leaveOpen", _v149);
              acc = _v150;
              _v88 = _v150;
              const _v151: any = 0;
              acc = _v151;
              const _v152: any = rt.set(this, "madePayment", _v151);
              acc = _v152;
              const _v153: any = rt.set(this, "triedExt", _v152);
              acc = _v153;
              _v88 = _v153;
            }
            acc = _v88;
            return acc;
          },
          // SCI room1.sc: Player.doScandal
          "doScandal": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "playing");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              let _v3: any = acc;
              const _v4: any = (args[0] ?? 0);
              acc = _v4;
              const _v5: any = 1;
              acc = _v5;
              const _v6: any = rt.op("==", ...[_v4, _v5]);
              acc = _v6;
              _v3 = _v6;
              if (rt.truth(_v6)) {
                const _v7: any = 0;
                acc = _v7;
                const _v8: any = rt.set(this, "bankBal", _v7);
                acc = _v8;
                _v3 = _v8;
              }
              acc = _v3;
              _v1 = _v3;
              let _v9: any = acc;
              let _v10: any = 1;
              if (rt.truth(_v10)) {
                const _v11: any = rt.get(this, "wage");
                acc = _v11;
                _v10 = _v11;
              }
              if (rt.truth(_v10)) {
                const _v12: any = 0;
                acc = _v12;
                const _v13: any = (args[0] ?? 0);
                acc = _v13;
                const _v14: any = 1;
                acc = _v14;
                const _v15: any = rt.op("-", ...[_v13, _v14]);
                acc = _v15;
                const _v16: any = await rt.call(1, "Random", [_v12, _v15], this);
                acc = _v16;
                const _v17: any = rt.op("not", ...[_v16]);
                acc = _v17;
                _v10 = _v17;
              }
              acc = _v10;
              _v9 = _v10;
              if (rt.truth(_v10)) {
                const _v18: any = 0;
                acc = _v18;
                const _v19: any = rt.set(this, "occupation", _v18);
                acc = _v19;
                const _v20: any = rt.set(this, "worksAt", _v19);
                acc = _v20;
                const _v21: any = rt.set(this, "wage", _v20);
                acc = _v21;
                _v9 = _v21;
                const _v22: any = 1;
                acc = _v22;
                return _v22;
                _v9 = acc;
              }
              acc = _v9;
              _v1 = _v9;
              let _v23: any = acc;
              const _v24: any = rt.get(this, "wage");
              acc = _v24;
              _v23 = _v24;
              if (rt.truth(_v24)) {
                const _v25: any = rt.get(this, "wage");
                acc = _v25;
                const _v26: any = 4;
                acc = _v26;
                const _v27: any = (args[0] ?? 0);
                acc = _v27;
                const _v28: any = 2;
                acc = _v28;
                const _v29: any = rt.op("*", ...[_v27, _v28]);
                acc = _v29;
                const _v30: any = rt.op("+", ...[_v26, _v29]);
                acc = _v30;
                const _v31: any = rt.op("*", ...[_v25, _v30]);
                acc = _v31;
                const _v32: any = 10;
                acc = _v32;
                const _v33: any = rt.op("/", ...[_v31, _v32]);
                acc = _v33;
                const _v34: any = rt.set(this, "wage", _v33);
                acc = _v34;
                _v23 = _v34;
                let _v35: any = acc;
                const _v36: any = rt.get(this, "wage");
                acc = _v36;
                const _v37: any = 1;
                acc = _v37;
                const _v38: any = rt.op("<", ...[_v36, _v37]);
                acc = _v38;
                _v35 = _v38;
                if (rt.truth(_v38)) {
                  const _v39: any = 1;
                  acc = _v39;
                  const _v40: any = rt.set(this, "wage", _v39);
                  acc = _v40;
                  _v35 = _v40;
                }
                acc = _v35;
                _v23 = _v35;
                const _v41: any = -1;
                acc = _v41;
                return _v41;
                _v23 = acc;
              }
              acc = _v23;
              _v1 = _v23;
            }
            acc = _v1;
            const _v42: any = 0;
            acc = _v42;
            return _v42;
            return acc;
          },
          // SCI room1.sc: Player.calcNetWorth
          "calcNetWorth": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "calcLiquidAssets", []);
            acc = _v2;
            const _v5: any = 0;
            acc = _v5;
            const _v6: any = rt.set(this, "netWorthHi", _v5);
            acc = _v6;
            const _v7: any = rt.set(this, "netWorth", _v6);
            acc = _v7;
            const _v8: any = (temps[0] = _v7);
            acc = _v8;
            _loop3: for (;;) {
              const _v9: any = (temps[0] ?? 0);
              acc = _v9;
              const _v10: any = rt.get(this, "durables");
              acc = _v10;
              const _v11: any = await rt.send(_v10, "size", []);
              acc = _v11;
              const _v12: any = rt.op("<", ...[_v9, _v11]);
              acc = _v12;
              if (!rt.truth(_v12)) break _loop3;
              _continue4: {
                const _v13: any = (temps[0] ?? 0);
                acc = _v13;
                const _v14: any = rt.get(this, "durables");
                acc = _v14;
                const _v15: any = await rt.send(_v14, "at", [_v13]);
                acc = _v15;
                const _v16: any = await rt.send(_v15, "pricePaid", []);
                acc = _v16;
                const _v17: any = (temps[0] ?? 0);
                acc = _v17;
                const _v18: any = rt.get(this, "durables");
                acc = _v18;
                const _v19: any = await rt.send(_v18, "at", [_v17]);
                acc = _v19;
                const _v20: any = await rt.send(_v19, "quantity", []);
                acc = _v20;
                const _v21: any = rt.op("*", ...[_v16, _v20]);
                acc = _v21;
                const _v22: any = rt.set(this, "netWorth", rt.op("+", rt.get(this, "netWorth"), _v21));
                acc = _v22;
              }
              const _v23: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
              acc = _v23;
            }
            const _v24: any = rt.get(this, "netWorthHi");
            acc = _v24;
            const _v25: any = rt.get(this, "netWorth");
            acc = _v25;
            const _v26: any = rt.get(this, "lqAssHi");
            acc = _v26;
            const _v27: any = rt.get(this, "lqAss");
            acc = _v27;
            const _v28: any = await rt.call(0, "proc0_12", [_v24, _v25, _v26, _v27], this);
            acc = _v28;
            const _v29: any = rt.global(455);
            acc = _v29;
            const _v30: any = rt.set(this, "netWorth", _v29);
            acc = _v30;
            const _v31: any = rt.global(454);
            acc = _v31;
            const _v32: any = rt.set(this, "netWorthHi", _v31);
            acc = _v32;
            return acc;
          },
          // SCI room1.sc: Player.calcLiquidAssets
          "calcLiquidAssets": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0];
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.set(this, "lqAssHi", _v1);
            acc = _v2;
            const _v3: any = rt.set(this, "lqAss", _v2);
            acc = _v3;
            const _v4: any = 0;
            acc = _v4;
            const _v5: any = rt.get(this, "investments");
            acc = _v5;
            const _v6: any = await rt.send(_v5, "at", [_v4]);
            acc = _v6;
            const _v7: any = 0;
            acc = _v7;
            const _v8: any = rt.get(this, "investments");
            acc = _v8;
            const _v9: any = await rt.send(_v8, "at", [_v7]);
            acc = _v9;
            const _v10: any = await rt.send(_v9, "basePrice", []);
            acc = _v10;
            const _v11: any = await rt.call(115, "proc115_1", [_v6, _v10], this);
            acc = _v11;
            const _v12: any = rt.global(454);
            acc = _v12;
            const _v13: any = (temps[2] = _v12);
            acc = _v13;
            const _v14: any = rt.global(455);
            acc = _v14;
            const _v15: any = (temps[1] = _v14);
            acc = _v15;
            const _v16: any = (temps[2] ?? 0);
            acc = _v16;
            const _v17: any = (temps[1] ?? 0);
            acc = _v17;
            const _v18: any = this;
            acc = _v18;
            const _v19: any = await rt.send(_v18, "addLiquid", [_v16, _v17]);
            acc = _v19;
            const _v22: any = 1;
            acc = _v22;
            const _v23: any = (temps[0] = _v22);
            acc = _v23;
            _loop20: for (;;) {
              const _v24: any = (temps[0] ?? 0);
              acc = _v24;
              const _v25: any = rt.get(this, "investments");
              acc = _v25;
              const _v26: any = await rt.send(_v25, "size", []);
              acc = _v26;
              const _v27: any = rt.op("<", ...[_v24, _v26]);
              acc = _v27;
              if (!rt.truth(_v27)) break _loop20;
              _continue21: {
                const _v28: any = (temps[0] ?? 0);
                acc = _v28;
                const _v29: any = rt.get(this, "investments");
                acc = _v29;
                const _v30: any = await rt.send(_v29, "at", [_v28]);
                acc = _v30;
                const _v31: any = (temps[0] ?? 0);
                acc = _v31;
                const _v32: any = 1;
                acc = _v32;
                const _v33: any = rt.op("-", ...[_v31, _v32]);
                acc = _v33;
                const _v34: any = rt.global((310 + (Number(_v33) & 65535)));
                acc = _v34;
                const _v35: any = (temps[0] ?? 0);
                acc = _v35;
                const _v36: any = rt.get(this, "investments");
                acc = _v36;
                const _v37: any = await rt.send(_v36, "at", [_v35]);
                acc = _v37;
                const _v38: any = await rt.send(_v37, "basePrice", []);
                acc = _v38;
                const _v39: any = await rt.call(109, "proc109_0", [_v34, _v38], this);
                acc = _v39;
                const _v40: any = await rt.call(115, "proc115_1", [_v30, _v39], this);
                acc = _v40;
                const _v41: any = rt.global(454);
                acc = _v41;
                const _v42: any = (temps[2] = _v41);
                acc = _v42;
                const _v43: any = rt.global(455);
                acc = _v43;
                const _v44: any = (temps[1] = _v43);
                acc = _v44;
                const _v45: any = (temps[2] ?? 0);
                acc = _v45;
                const _v46: any = (temps[1] ?? 0);
                acc = _v46;
                const _v47: any = this;
                acc = _v47;
                const _v48: any = await rt.send(_v47, "addLiquid", [_v45, _v46]);
                acc = _v48;
              }
              const _v49: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
              acc = _v49;
            }
            const _v50: any = rt.get(this, "lqAss");
            acc = _v50;
            const _v51: any = rt.set(this, "invAss", _v50);
            acc = _v51;
            const _v52: any = rt.get(this, "lqAssHi");
            acc = _v52;
            const _v53: any = rt.set(this, "invAssHi", _v52);
            acc = _v53;
            const _v54: any = rt.get(this, "cashHi");
            acc = _v54;
            const _v55: any = rt.get(this, "cash");
            acc = _v55;
            const _v56: any = rt.get(this, "bankBalHi");
            acc = _v56;
            const _v57: any = rt.get(this, "bankBal");
            acc = _v57;
            const _v58: any = await rt.call(0, "proc0_12", [_v54, _v55, _v56, _v57], this);
            acc = _v58;
            const _v59: any = rt.global(454);
            acc = _v59;
            const _v60: any = rt.global(455);
            acc = _v60;
            const _v61: any = this;
            acc = _v61;
            const _v62: any = await rt.send(_v61, "addLiquid", [_v59, _v60]);
            acc = _v62;
            const _v63: any = 0;
            acc = _v63;
            const _v64: any = rt.get(this, "rentOwed");
            acc = _v64;
            const _v65: any = rt.get(this, "loanBal");
            acc = _v65;
            const _v66: any = rt.op("+", ...[_v64, _v65]);
            acc = _v66;
            const _v67: any = rt.op("-", ...[_v63, _v66]);
            acc = _v67;
            const _v68: any = (temps[3] = _v67);
            acc = _v68;
            const _v69: any = 0;
            acc = _v69;
            const _v70: any = (temps[3] ?? 0);
            acc = _v70;
            const _v71: any = this;
            acc = _v71;
            const _v72: any = await rt.send(_v71, "addLiquid", [_v69, _v70]);
            acc = _v72;
            return acc;
          },
          // SCI room1.sc: Player.addLiquid
          "addLiquid": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "lqAssHi");
            acc = _v1;
            const _v2: any = rt.get(this, "lqAss");
            acc = _v2;
            const _v3: any = (args[0] ?? 0);
            acc = _v3;
            const _v4: any = (args[1] ?? 0);
            acc = _v4;
            const _v5: any = await rt.call(0, "proc0_12", [_v1, _v2, _v3, _v4], this);
            acc = _v5;
            const _v6: any = rt.global(455);
            acc = _v6;
            const _v7: any = rt.set(this, "lqAss", _v6);
            acc = _v7;
            const _v8: any = rt.global(454);
            acc = _v8;
            const _v9: any = rt.set(this, "lqAssHi", _v8);
            acc = _v9;
            return acc;
          },
          // SCI room1.sc: Player.numDegrees
          "numDegrees": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
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
              const _v7: any = rt.get(this, "education");
              acc = _v7;
              const _v8: any = await rt.send(_v7, "size", []);
              acc = _v8;
              const _v9: any = rt.op("<", ...[_v6, _v8]);
              acc = _v9;
              if (!rt.truth(_v9)) break _loop1;
              _continue2: {
                let _v10: any = acc;
                const _v11: any = (temps[0] ?? 0);
                acc = _v11;
                const _v12: any = rt.get(this, "education");
                acc = _v12;
                const _v13: any = await rt.send(_v12, "at", [_v11]);
                acc = _v13;
                const _v14: any = await rt.send(_v13, "quantity", []);
                acc = _v14;
                const _v15: any = (temps[0] ?? 0);
                acc = _v15;
                const _v16: any = rt.get(this, "education");
                acc = _v16;
                const _v17: any = await rt.send(_v16, "at", [_v15]);
                acc = _v17;
                const _v18: any = await rt.send(_v17, "unitsToGraduate", []);
                acc = _v18;
                const _v19: any = rt.op(">=", ...[_v14, _v18]);
                acc = _v19;
                _v10 = _v19;
                if (rt.truth(_v19)) {
                  const _v20: any = (temps[1] = rt.op("+", (temps[1] ?? 0), 1));
                  acc = _v20;
                  _v10 = _v20;
                }
                acc = _v10;
              }
              const _v21: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
              acc = _v21;
            }
            const _v22: any = (temps[1] ?? 0);
            acc = _v22;
            return _v22;
            return acc;
          },
          // SCI room1.sc: Player.hasDegree
          "hasDegree": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            let _v1: any = acc;
            const _v2: any = (args[0] ?? 0);
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = 1;
              acc = _v4;
              return _v4;
              _v1 = acc;
            }
            acc = _v1;
            let _v5: any = acc;
            const _v6: any = rt.get(this, "education");
            acc = _v6;
            const _v7: any = await rt.send(_v6, "size", []);
            acc = _v7;
            _v5 = _v7;
            if (rt.truth(_v7)) {
              const _v10: any = 0;
              acc = _v10;
              const _v11: any = (temps[0] = _v10);
              acc = _v11;
              _loop8: for (;;) {
                const _v12: any = (temps[0] ?? 0);
                acc = _v12;
                const _v13: any = rt.get(this, "education");
                acc = _v13;
                const _v14: any = await rt.send(_v13, "size", []);
                acc = _v14;
                const _v15: any = rt.op("<", ...[_v12, _v14]);
                acc = _v15;
                if (!rt.truth(_v15)) break _loop8;
                _continue9: {
                  let _v16: any = acc;
                  let _v17: any = 1;
                  if (rt.truth(_v17)) {
                    const _v18: any = (temps[0] ?? 0);
                    acc = _v18;
                    const _v19: any = rt.get(this, "education");
                    acc = _v19;
                    const _v20: any = await rt.send(_v19, "at", [_v18]);
                    acc = _v20;
                    const _v21: any = await rt.send(_v20, "indexNum", []);
                    acc = _v21;
                    const _v22: any = (args[0] ?? 0);
                    acc = _v22;
                    const _v23: any = rt.op("==", ...[_v21, _v22]);
                    acc = _v23;
                    _v17 = _v23;
                  }
                  if (rt.truth(_v17)) {
                    const _v24: any = (temps[0] ?? 0);
                    acc = _v24;
                    const _v25: any = rt.get(this, "education");
                    acc = _v25;
                    const _v26: any = await rt.send(_v25, "at", [_v24]);
                    acc = _v26;
                    const _v27: any = await rt.send(_v26, "quantity", []);
                    acc = _v27;
                    const _v28: any = (temps[0] ?? 0);
                    acc = _v28;
                    const _v29: any = rt.get(this, "education");
                    acc = _v29;
                    const _v30: any = await rt.send(_v29, "at", [_v28]);
                    acc = _v30;
                    const _v31: any = await rt.send(_v30, "unitsToGraduate", []);
                    acc = _v31;
                    const _v32: any = rt.op(">=", ...[_v27, _v31]);
                    acc = _v32;
                    _v17 = _v32;
                  }
                  acc = _v17;
                  _v16 = _v17;
                  if (rt.truth(_v17)) {
                    const _v33: any = 1;
                    acc = _v33;
                    return _v33;
                    _v16 = acc;
                  }
                  acc = _v16;
                }
                const _v34: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
                acc = _v34;
              }
              _v5 = acc;
            }
            acc = _v5;
            const _v35: any = 0;
            acc = _v35;
            return _v35;
            return acc;
          },
          // SCI room1.sc: Player.courseActive
          "courseActive": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            let _v1: any = acc;
            const _v2: any = rt.get(this, "education");
            acc = _v2;
            const _v3: any = await rt.send(_v2, "size", []);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v6: any = 0;
              acc = _v6;
              const _v7: any = (temps[0] = _v6);
              acc = _v7;
              _loop4: for (;;) {
                const _v8: any = (temps[0] ?? 0);
                acc = _v8;
                const _v9: any = rt.get(this, "education");
                acc = _v9;
                const _v10: any = await rt.send(_v9, "size", []);
                acc = _v10;
                const _v11: any = rt.op("<", ...[_v8, _v10]);
                acc = _v11;
                if (!rt.truth(_v11)) break _loop4;
                _continue5: {
                  let _v12: any = acc;
                  let _v13: any = 1;
                  if (rt.truth(_v13)) {
                    const _v14: any = (temps[0] ?? 0);
                    acc = _v14;
                    const _v15: any = rt.get(this, "education");
                    acc = _v15;
                    const _v16: any = await rt.send(_v15, "at", [_v14]);
                    acc = _v16;
                    const _v17: any = await rt.send(_v16, "indexNum", []);
                    acc = _v17;
                    const _v18: any = (args[0] ?? 0);
                    acc = _v18;
                    const _v19: any = rt.op("==", ...[_v17, _v18]);
                    acc = _v19;
                    _v13 = _v19;
                  }
                  if (rt.truth(_v13)) {
                    const _v20: any = (temps[0] ?? 0);
                    acc = _v20;
                    const _v21: any = rt.get(this, "education");
                    acc = _v21;
                    const _v22: any = await rt.send(_v21, "at", [_v20]);
                    acc = _v22;
                    const _v23: any = await rt.send(_v22, "quantity", []);
                    acc = _v23;
                    _v13 = _v23;
                  }
                  if (rt.truth(_v13)) {
                    const _v24: any = (temps[0] ?? 0);
                    acc = _v24;
                    const _v25: any = rt.get(this, "education");
                    acc = _v25;
                    const _v26: any = await rt.send(_v25, "at", [_v24]);
                    acc = _v26;
                    const _v27: any = await rt.send(_v26, "quantity", []);
                    acc = _v27;
                    const _v28: any = (temps[0] ?? 0);
                    acc = _v28;
                    const _v29: any = rt.get(this, "education");
                    acc = _v29;
                    const _v30: any = await rt.send(_v29, "at", [_v28]);
                    acc = _v30;
                    const _v31: any = await rt.send(_v30, "unitsToGraduate", []);
                    acc = _v31;
                    const _v32: any = rt.op("<", ...[_v27, _v31]);
                    acc = _v32;
                    _v13 = _v32;
                  }
                  acc = _v13;
                  _v12 = _v13;
                  if (rt.truth(_v13)) {
                    const _v33: any = 1;
                    acc = _v33;
                    return _v33;
                    _v12 = acc;
                  }
                  acc = _v12;
                }
                const _v34: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
                acc = _v34;
              }
              _v1 = acc;
            }
            acc = _v1;
            const _v35: any = 0;
            acc = _v35;
            return _v35;
            return acc;
          },
        },
      },
      {
        name: "players",
        className: "List",
        parent: {"script": 999, "name": "List"},
        isClass: false,
        properties: {},
        methods: {
          // SCI room1.sc: players.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v3: any = rt.get(this, "size");
            acc = _v3;
            const _v4: any = 1;
            acc = _v4;
            const _v5: any = rt.op("-", ...[_v3, _v4]);
            acc = _v5;
            const _v6: any = (temps[0] = _v5);
            acc = _v6;
            _loop1: for (;;) {
              const _v7: any = (temps[0] ?? 0);
              acc = _v7;
              const _v8: any = 0;
              acc = _v8;
              const _v9: any = rt.op(">=", ...[_v7, _v8]);
              acc = _v9;
              if (!rt.truth(_v9)) break _loop1;
              _continue2: {
                let _v10: any = acc;
                const _v11: any = (temps[0] ?? 0);
                acc = _v11;
                const _v12: any = this;
                acc = _v12;
                const _v13: any = await rt.send(_v12, "at", [_v11]);
                acc = _v13;
                const _v14: any = await rt.send(_v13, "playing", []);
                acc = _v14;
                const _v15: any = rt.op("not", ...[_v14]);
                acc = _v15;
                _v10 = _v15;
                if (rt.truth(_v15)) {
                  const _v16: any = (temps[0] ?? 0);
                  acc = _v16;
                  const _v17: any = this;
                  acc = _v17;
                  const _v18: any = await rt.send(_v17, "at", [_v16]);
                  acc = _v18;
                  const _v19: any = this;
                  acc = _v19;
                  const _v20: any = await rt.send(_v19, "delete", [_v18]);
                  acc = _v20;
                  _v10 = _v20;
                }
                acc = _v10;
              }
              const _v21: any = (temps[0] = rt.op("-", (temps[0] ?? 0), 1));
              acc = _v21;
            }
            const _v24: any = 0;
            acc = _v24;
            const _v25: any = (temps[0] = _v24);
            acc = _v25;
            _loop22: for (;;) {
              const _v26: any = (temps[0] ?? 0);
              acc = _v26;
              const _v27: any = rt.get(this, "size");
              acc = _v27;
              const _v28: any = 1;
              acc = _v28;
              const _v29: any = rt.op("-", ...[_v27, _v28]);
              acc = _v29;
              const _v30: any = rt.op("<=", ...[_v26, _v29]);
              acc = _v30;
              if (!rt.truth(_v30)) break _loop22;
              _continue23: {
                const _v31: any = (temps[0] ?? 0);
                acc = _v31;
                const _v32: any = (temps[0] ?? 0);
                acc = _v32;
                const _v33: any = rt.object(1, "players");
                acc = _v33;
                const _v34: any = await rt.send(_v33, "at", [_v32]);
                acc = _v34;
                const _v35: any = await rt.send(_v34, "whichNumber", [_v31]);
                acc = _v35;
                let _v36: any = acc;
                const _v37: any = (temps[0] ?? 0);
                acc = _v37;
                const _v38: any = rt.object(1, "players");
                acc = _v38;
                const _v39: any = await rt.send(_v38, "at", [_v37]);
                acc = _v39;
                const _v40: any = await rt.send(_v39, "playing", []);
                acc = _v40;
                const _v41: any = 29;
                acc = _v41;
                const _v42: any = rt.op("==", ...[_v40, _v41]);
                acc = _v42;
                _v36 = _v42;
                if (rt.truth(_v42)) {
                  const _v43: any = 4;
                  acc = _v43;
                  const _v44: any = (temps[0] ?? 0);
                  acc = _v44;
                  const _v45: any = rt.object(1, "players");
                  acc = _v45;
                  const _v46: any = await rt.send(_v45, "at", [_v44]);
                  acc = _v46;
                  const _v47: any = await rt.send(_v46, "whichNumber", [_v43]);
                  acc = _v47;
                  _v36 = _v47;
                }
                acc = _v36;
              }
              const _v48: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
              acc = _v48;
            }
            const _v49: any = 102;
            acc = _v49;
            const _v50: any = this;
            acc = _v50;
            const _v51: any = await rt.send(_v50, "eachElementDo", [_v49]);
            acc = _v51;
            const _v52: any = rt.get(this, "size");
            acc = _v52;
            const _v53: any = rt.setGlobal(374, _v52);
            acc = _v53;
            const _v54: any = 0;
            acc = _v54;
            const _v55: any = this;
            acc = _v55;
            const _v56: any = await rt.send(_v55, "at", [_v54]);
            acc = _v56;
            const _v57: any = rt.setGlobal(302, _v56);
            acc = _v57;
            return acc;
          },
          // SCI room1.sc: players.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0];
            let _v1: any = acc;
            const _v2: any = rt.global(448);
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = 0;
              acc = _v3;
              const _v4: any = rt.setGlobal(448, _v3);
              acc = _v4;
              _v1 = _v4;
              const _v5: any = 3;
              acc = _v5;
              const _v6: any = rt.global(302);
              acc = _v6;
              const _v7: any = await rt.send(_v6, "playing", [_v5]);
              acc = _v7;
              _v1 = _v7;
            } else {
              const _v8: any = rt.global(302);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "endTurn", []);
              acc = _v9;
              _v1 = _v9;
            }
            acc = _v1;
            let _v10: any = acc;
            const _v11: any = rt.object(1, "players");
            acc = _v11;
            const _v12: any = await rt.send(_v11, "size", []);
            acc = _v12;
            const _v13: any = 1;
            acc = _v13;
            const _v14: any = rt.op("==", ...[_v12, _v13]);
            acc = _v14;
            _v10 = _v14;
            if (rt.truth(_v14)) {
              let _v15: any = acc;
              const _v16: any = 0;
              acc = _v16;
              const _v17: any = rt.object(1, "players");
              acc = _v17;
              const _v18: any = await rt.send(_v17, "at", [_v16]);
              acc = _v18;
              const _v19: any = await rt.send(_v18, "playing", []);
              acc = _v19;
              const _v20: any = 29;
              acc = _v20;
              const _v21: any = rt.op("==", ...[_v19, _v20]);
              acc = _v21;
              _v15 = _v21;
              if (rt.truth(_v21)) {
                const _v22: any = 4;
                acc = _v22;
                _v15 = _v22;
              } else {
                const _v23: any = 0;
                acc = _v23;
                const _v24: any = rt.object(1, "players");
                acc = _v24;
                const _v25: any = await rt.send(_v24, "at", [_v23]);
                acc = _v25;
                const _v26: any = await rt.send(_v25, "whichBody", []);
                acc = _v26;
                _v15 = _v26;
              }
              acc = _v15;
              const _v27: any = rt.object(1, "marble");
              acc = _v27;
              const _v28: any = await rt.send(_v27, "cel", [_v15]);
              acc = _v28;
              _v10 = _v28;
            }
            acc = _v10;
            const _v29: any = rt.global(302);
            acc = _v29;
            const _v30: any = (temps[3] = _v29);
            acc = _v30;
            const _v33: any = 0;
            acc = _v33;
            const _v34: any = (temps[2] = _v33);
            acc = _v34;
            _loop31: for (;;) {
              const _v35: any = (temps[2] ?? 0);
              acc = _v35;
              const _v36: any = rt.get(this, "size");
              acc = _v36;
              const _v37: any = rt.op("<", ...[_v35, _v36]);
              acc = _v37;
              if (!rt.truth(_v37)) break _loop31;
              _continue32: {
                const _v38: any = rt.global(302);
                acc = _v38;
                const _v39: any = this;
                acc = _v39;
                const _v40: any = await rt.send(_v39, "indexOf", [_v38]);
                acc = _v40;
                const _v41: any = (temps[1] = _v40);
                acc = _v41;
                const _v42: any = (temps[0] = _v41);
                acc = _v42;
                let _v43: any = acc;
                const _v44: any = (temps[1] ?? 0);
                acc = _v44;
                const _v45: any = rt.get(this, "size");
                acc = _v45;
                const _v46: any = 1;
                acc = _v46;
                const _v47: any = rt.op("-", ...[_v45, _v46]);
                acc = _v47;
                const _v48: any = rt.op("==", ...[_v44, _v47]);
                acc = _v48;
                _v43 = _v48;
                if (rt.truth(_v48)) {
                  const _v49: any = 0;
                  acc = _v49;
                  const _v50: any = (temps[0] = _v49);
                  acc = _v50;
                  _v43 = _v50;
                } else {
                  const _v51: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
                  acc = _v51;
                  _v43 = _v51;
                }
                acc = _v43;
                const _v52: any = (temps[0] ?? 0);
                acc = _v52;
                const _v53: any = this;
                acc = _v53;
                const _v54: any = await rt.send(_v53, "at", [_v52]);
                acc = _v54;
                const _v55: any = rt.setGlobal(302, _v54);
                acc = _v55;
                let _v56: any = acc;
                const _v57: any = (temps[0] ?? 0);
                acc = _v57;
                const _v58: any = this;
                acc = _v58;
                const _v59: any = await rt.send(_v58, "at", [_v57]);
                acc = _v59;
                const _v60: any = await rt.send(_v59, "playing", []);
                acc = _v60;
                const _v61: any = 3;
                acc = _v61;
                const _v62: any = rt.op("!=", ...[_v60, _v61]);
                acc = _v62;
                _v56 = _v62;
                if (rt.truth(_v62)) {
                  let _v63: any = acc;
                  const _v64: any = rt.global(505);
                  acc = _v64;
                  _v63 = _v64;
                  if (rt.truth(_v64)) {
                    const _v65: any = 0;
                    acc = _v65;
                    const _v66: any = rt.setGlobal(505, _v65);
                    acc = _v66;
                    _v63 = _v66;
                  }
                  acc = _v63;
                  _v56 = _v63;
                  let _v67: any = acc;
                  const _v68: any = (temps[3] ?? 0);
                  acc = _v68;
                  const _v69: any = rt.global(521);
                  acc = _v69;
                  const _v70: any = rt.op("==", ...[_v68, _v69]);
                  acc = _v70;
                  _v67 = _v70;
                  if (rt.truth(_v70)) {
                    const _v71: any = rt.setGlobal(522, rt.op("+", rt.global(522), 1));
                    acc = _v71;
                    _v67 = _v71;
                    let _v72: any = acc;
                    const _v73: any = (temps[3] ?? 0);
                    acc = _v73;
                    const _v74: any = this;
                    acc = _v74;
                    const _v75: any = await rt.send(_v74, "indexOf", [_v73]);
                    acc = _v75;
                    const _v76: any = (temps[0] = _v75);
                    acc = _v76;
                    const _v77: any = rt.get(this, "size");
                    acc = _v77;
                    const _v78: any = 1;
                    acc = _v78;
                    const _v79: any = rt.op("-", ...[_v77, _v78]);
                    acc = _v79;
                    const _v80: any = rt.op("!=", ...[_v76, _v79]);
                    acc = _v80;
                    _v72 = _v80;
                    if (rt.truth(_v80)) {
                      const _v81: any = 1;
                      acc = _v81;
                      const _v82: any = rt.setGlobal(523, _v81);
                      acc = _v82;
                      _v72 = _v82;
                    }
                    acc = _v72;
                    _v67 = _v72;
                    const _v83: any = (temps[3] ?? 0);
                    acc = _v83;
                    const _v84: any = this;
                    acc = _v84;
                    const _v85: any = await rt.send(_v84, "delete", [_v83]);
                    acc = _v85;
                    _v67 = _v85;
                    const _v86: any = 0;
                    acc = _v86;
                    const _v87: any = rt.setGlobal(521, _v86);
                    acc = _v87;
                    _v67 = _v87;
                  }
                  acc = _v67;
                  _v56 = _v67;
                  return acc;
                  _v56 = acc;
                }
                acc = _v56;
              }
              const _v88: any = (temps[2] = rt.op("+", (temps[2] ?? 0), 1));
              acc = _v88;
            }
            const _v89: any = 1;
            acc = _v89;
            const _v90: any = rt.object(996, "User");
            acc = _v90;
            const _v91: any = await rt.send(_v90, "canControl", [_v89]);
            acc = _v91;
            let _v92: any = acc;
            const _v93: any = 1;
            acc = _v93;
            const _v94: any = 0;
            acc = _v94;
            const _v95: any = 70;
            acc = _v95;
            const _v96: any = 150;
            acc = _v96;
            const _v97: any = 81;
            acc = _v97;
            const _v98: any = "Restart";
            acc = _v98;
            const _v99: any = 1;
            acc = _v99;
            const _v100: any = 81;
            acc = _v100;
            const _v101: any = "Quit";
            acc = _v101;
            const _v102: any = 0;
            acc = _v102;
            const _v103: any = 311;
            acc = _v103;
            const _v104: any = await rt.call(255, "Print", [_v93, _v94, _v95, _v96, _v97, _v98, _v99, _v100, _v101, _v102, _v103], this);
            acc = _v104;
            _v92 = _v104;
            if (rt.truth(_v104)) {
              const _v105: any = 23;
              acc = _v105;
              const _v106: any = rt.global(476);
              acc = _v106;
              const _v107: any = await rt.send(_v106, "play", [_v105]);
              acc = _v107;
              _v92 = _v107;
              const _v108: any = 1;
              acc = _v108;
              const _v109: any = rt.setGlobal(528, _v108);
              acc = _v109;
              _v92 = _v109;
            } else {
              const _v110: any = 23;
              acc = _v110;
              const _v111: any = rt.global(476);
              acc = _v111;
              const _v112: any = await rt.send(_v111, "play", [_v110]);
              acc = _v112;
              _v92 = _v112;
              const _v113: any = 1;
              acc = _v113;
              const _v114: any = rt.setGlobal(4, _v113);
              acc = _v114;
              _v92 = _v114;
            }
            acc = _v92;
            return acc;
          },
        },
      },
      {
        name: "player1",
        className: "Player",
        parent: {"script": 1, "name": "Player"},
        isClass: false,
        properties: {"actualName": "Player 1", "playing": 1},
        methods: {
        },
      },
      {
        name: "player2",
        className: "Player",
        parent: {"script": 1, "name": "Player"},
        isClass: false,
        properties: {"actualName": "Player 2"},
        methods: {
        },
      },
      {
        name: "player3",
        className: "Player",
        parent: {"script": 1, "name": "Player"},
        isClass: false,
        properties: {"actualName": "Player 3", "gender": 1},
        methods: {
        },
      },
      {
        name: "player4",
        className: "Player",
        parent: {"script": 1, "name": "Player"},
        isClass: false,
        properties: {"actualName": "Player 4", "gender": 1},
        methods: {
        },
      },
      {
        name: "theWalker",
        className: "Act",
        parent: {"script": 998, "name": "Act"},
        isClass: false,
        properties: {"y": 146, "x": 160, "priority": 4, "ticksToDo": 10},
        methods: {
          // SCI room1.sc: theWalker.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.superSend(this, {"script": 1, "name": "theWalker"}, "init", []);
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = rt.setGlobal(303, _v2);
            acc = _v3;
            const _v4: any = rt.get(this, "priority");
            acc = _v4;
            const _v5: any = this;
            acc = _v5;
            const _v6: any = await rt.send(_v5, "setPri", [_v4]);
            acc = _v6;
            return acc;
          },
          // SCI room1.sc: theWalker.show
          "show": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            let _v2: any = 0;
            if (!rt.truth(_v2)) {
              const _v3: any = rt.global(534);
              acc = _v3;
              const _v4: any = 1;
              acc = _v4;
              const _v5: any = rt.op("==", ...[_v3, _v4]);
              acc = _v5;
              _v2 = _v5;
            }
            if (!rt.truth(_v2)) {
              const _v6: any = rt.global(534);
              acc = _v6;
              const _v7: any = 3;
              acc = _v7;
              const _v8: any = rt.op("==", ...[_v6, _v7]);
              acc = _v8;
              _v2 = _v8;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              return acc;
              _v1 = acc;
            }
            acc = _v1;
            const _v9: any = args.slice(0, argc);
            acc = _v9;
            const _v10: any = await rt.superSend(this, {"script": 1, "name": "theWalker"}, "show", [..._v9]);
            acc = _v10;
            return acc;
          },
        },
      },
      {
        name: "marble",
        className: "Act",
        parent: {"script": 998, "name": "Act"},
        isClass: false,
        properties: {"y": 37, "x": 144, "loop": 2, "priority": 8, "ticksToDo": 1, "moveSpeed": 1},
        methods: {
          // SCI room1.sc: marble.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.superSend(this, {"script": 1, "name": "marble"}, "init", []);
            acc = _v1;
            const _v2: any = rt.get(this, "priority");
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "setPri", [_v2]);
            acc = _v4;
            return acc;
          },
          // SCI room1.sc: marble.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0];
            const _v1: any = rt.global(477);
            acc = _v1;
            const _v2: any = await rt.send(_v1, "fade", []);
            acc = _v2;
            const _v3: any = 0;
            acc = _v3;
            const _v4: any = rt.setGlobal(460, _v3);
            acc = _v4;
            const _v5: any = rt.setGlobal(324, _v4);
            acc = _v5;
            const _v6: any = rt.setGlobal(323, _v5);
            acc = _v6;
            const _v7: any = rt.global(417);
            acc = _v7;
            const _v8: any = await rt.send(_v7, "doit", []);
            acc = _v8;
            const _v9: any = 160;
            acc = _v9;
            const _v10: any = 146;
            acc = _v10;
            const _v11: any = 0;
            acc = _v11;
            const _v12: any = rt.global(303);
            acc = _v12;
            const _v13: any = await rt.send(_v12, "posn", [_v9, _v10]);
            acc = _v13;
            const _v14: any = await rt.send(_v12, "setCycle", [_v11]);
            acc = _v14;
            const _v15: any = await rt.send(_v12, "forceUpd", []);
            acc = _v15;
            let _v16: any = acc;
            const _v17: any = rt.global(302);
            acc = _v17;
            const _v18: any = await rt.send(_v17, "livesAt", []);
            acc = _v18;
            const _v19: any = 0;
            acc = _v19;
            const _v20: any = rt.op("==", ...[_v18, _v19]);
            acc = _v20;
            _v16 = _v20;
            if (rt.truth(_v20)) {
              const _v21: any = 144;
              acc = _v21;
              const _v22: any = 37;
              acc = _v22;
              const _v23: any = 1;
              acc = _v23;
              const _v24: any = 101;
              acc = _v24;
              const _v25: any = await rt.call(1, "ScriptID", [_v24], this);
              acc = _v25;
              const _v26: any = await rt.send(_v25, "x", [_v21]);
              acc = _v26;
              const _v27: any = await rt.send(_v25, "y", [_v22]);
              acc = _v27;
              const _v28: any = await rt.send(_v25, "index", [_v23]);
              acc = _v28;
              _v16 = _v28;
              const _v29: any = 1;
              acc = _v29;
              const _v30: any = rt.setGlobal(458, _v29);
              acc = _v30;
              _v16 = _v30;
            } else {
              const _v31: any = 29;
              acc = _v31;
              const _v32: any = 45;
              acc = _v32;
              const _v33: any = 151;
              acc = _v33;
              const _v34: any = 101;
              acc = _v34;
              const _v35: any = await rt.call(1, "ScriptID", [_v34], this);
              acc = _v35;
              const _v36: any = await rt.send(_v35, "x", [_v31]);
              acc = _v36;
              const _v37: any = await rt.send(_v35, "y", [_v32]);
              acc = _v37;
              const _v38: any = await rt.send(_v35, "index", [_v33]);
              acc = _v38;
              _v16 = _v38;
              const _v39: any = 151;
              acc = _v39;
              const _v40: any = rt.setGlobal(458, _v39);
              acc = _v40;
              _v16 = _v40;
            }
            acc = _v16;
            const _v41: any = rt.global(302);
            acc = _v41;
            const _v42: any = await rt.send(_v41, "livesAt", []);
            acc = _v42;
            const _v43: any = rt.setGlobal(400, _v42);
            acc = _v43;
            const _v44: any = rt.global(302);
            acc = _v44;
            const _v45: any = rt.object(1, "players");
            acc = _v45;
            const _v46: any = await rt.send(_v45, "indexOf", [_v44]);
            acc = _v46;
            const _v47: any = (temps[0] = _v46);
            acc = _v47;
            const _v48: any = 0;
            acc = _v48;
            const _v49: any = (temps[2] = _v48);
            acc = _v49;
            const _v52: any = 0;
            acc = _v52;
            const _v53: any = (temps[3] = _v52);
            acc = _v53;
            _loop50: for (;;) {
              const _v54: any = (temps[3] ?? 0);
              acc = _v54;
              const _v55: any = rt.object(1, "players");
              acc = _v55;
              const _v56: any = await rt.send(_v55, "size", []);
              acc = _v56;
              const _v57: any = rt.op("<", ...[_v54, _v56]);
              acc = _v57;
              if (!rt.truth(_v57)) break _loop50;
              _continue51: {
                let _v58: any = acc;
                _branch59: {
                  const _v60: any = (temps[3] ?? 0);
                  acc = _v60;
                  const _v61: any = rt.object(1, "players");
                  acc = _v61;
                  const _v62: any = await rt.send(_v61, "at", [_v60]);
                  acc = _v62;
                  const _v63: any = rt.global(302);
                  acc = _v63;
                  const _v64: any = rt.op("==", ...[_v62, _v63]);
                  acc = _v64;
                  _v58 = _v64;
                  acc = _v58;
                  if (rt.truth(_v58)) {
                    const _v65: any = 1;
                    acc = _v65;
                    const _v66: any = (temps[2] = _v65);
                    acc = _v66;
                    _v58 = _v66;
                    break _loop50;
                    _v58 = acc;
                    break _branch59;
                  }
                  const _v67: any = (temps[3] ?? 0);
                  acc = _v67;
                  const _v68: any = rt.object(1, "players");
                  acc = _v68;
                  const _v69: any = await rt.send(_v68, "at", [_v67]);
                  acc = _v69;
                  const _v70: any = await rt.send(_v69, "playing", []);
                  acc = _v70;
                  const _v71: any = 3;
                  acc = _v71;
                  const _v72: any = rt.op("!=", ...[_v70, _v71]);
                  acc = _v72;
                  _v58 = _v72;
                  acc = _v58;
                  if (rt.truth(_v58)) {
                    break _loop50;
                    _v58 = acc;
                    break _branch59;
                  }
                }
                acc = _v58;
              }
              const _v73: any = (temps[3] = rt.op("+", (temps[3] ?? 0), 1));
              acc = _v73;
            }
            let _v74: any = acc;
            let _v75: any = 1;
            if (rt.truth(_v75)) {
              const _v76: any = rt.global(523);
              acc = _v76;
              const _v77: any = rt.op("not", ...[_v76]);
              acc = _v77;
              _v75 = _v77;
            }
            if (rt.truth(_v75)) {
              const _v78: any = (temps[2] ?? 0);
              acc = _v78;
              _v75 = _v78;
            }
            acc = _v75;
            _v74 = _v75;
            if (rt.truth(_v75)) {
              const _v79: any = rt.setGlobal(372, rt.op("+", rt.global(372), 1));
              acc = _v79;
              _v74 = _v79;
            } else {
              const _v80: any = 0;
              acc = _v80;
              const _v81: any = rt.setGlobal(523, _v80);
              acc = _v81;
              _v74 = _v81;
            }
            acc = _v74;
            let _v82: any = acc;
            const _v83: any = (temps[0] ?? 0);
            acc = _v83;
            const _v84: any = rt.object(1, "players");
            acc = _v84;
            const _v85: any = await rt.send(_v84, "at", [_v83]);
            acc = _v85;
            const _v86: any = await rt.send(_v85, "playing", []);
            acc = _v86;
            const _v87: any = 29;
            acc = _v87;
            const _v88: any = rt.op("==", ...[_v86, _v87]);
            acc = _v88;
            _v82 = _v88;
            if (rt.truth(_v88)) {
              const _v89: any = 4;
              acc = _v89;
              _v82 = _v89;
            } else {
              const _v90: any = (temps[0] ?? 0);
              acc = _v90;
              const _v91: any = rt.object(1, "players");
              acc = _v91;
              const _v92: any = await rt.send(_v91, "at", [_v90]);
              acc = _v92;
              const _v93: any = await rt.send(_v92, "whichBody", []);
              acc = _v93;
              _v82 = _v93;
            }
            acc = _v82;
            const _v94: any = rt.object(1, "marble");
            acc = _v94;
            const _v95: any = await rt.send(_v94, "cel", [_v82]);
            acc = _v95;
            let _v96: any = acc;
            const _v97: any = rt.global(302);
            acc = _v97;
            const _v98: any = await rt.send(_v97, "whichBody", []);
            acc = _v98;
            _branch99: {
              const _v100: any = 0;
              acc = _v100;
              _v96 = rt.op("==", _v98, _v100);
              acc = _v96;
              if (rt.truth(_v96)) {
                const _v101: any = 280;
                acc = _v101;
                _v96 = _v101;
                break _branch99;
              }
              const _v102: any = 1;
              acc = _v102;
              _v96 = rt.op("==", _v98, _v102);
              acc = _v96;
              if (rt.truth(_v96)) {
                const _v103: any = 284;
                acc = _v103;
                _v96 = _v103;
                break _branch99;
              }
              const _v104: any = 2;
              acc = _v104;
              _v96 = rt.op("==", _v98, _v104);
              acc = _v96;
              if (rt.truth(_v96)) {
                const _v105: any = 290;
                acc = _v105;
                _v96 = _v105;
                break _branch99;
              }
              const _v106: any = 3;
              acc = _v106;
              _v96 = rt.op("==", _v98, _v106);
              acc = _v96;
              if (rt.truth(_v96)) {
                const _v107: any = 294;
                acc = _v107;
                _v96 = _v107;
                break _branch99;
              }
            }
            acc = _v96;
            const _v108: any = (temps[1] = _v96);
            acc = _v108;
            let _v109: any = acc;
            const _v110: any = rt.global(302);
            acc = _v110;
            const _v111: any = await rt.send(_v110, "playing", []);
            acc = _v111;
            const _v112: any = 29;
            acc = _v112;
            const _v113: any = rt.op("==", ...[_v111, _v112]);
            acc = _v113;
            _v109 = _v113;
            if (rt.truth(_v113)) {
              const _v114: any = 274;
              acc = _v114;
              const _v115: any = (temps[1] = _v114);
              acc = _v115;
              _v109 = _v115;
              const _v116: any = 4;
              acc = _v116;
              const _v117: any = (temps[0] = _v116);
              acc = _v117;
              _v109 = _v117;
            }
            acc = _v109;
            let _v118: any = acc;
            const _v119: any = rt.global(302);
            acc = _v119;
            const _v120: any = await rt.send(_v119, "weeksOfClothing", []);
            acc = _v120;
            const _v121: any = rt.op("not", ...[_v120]);
            acc = _v121;
            _v118 = _v121;
            if (rt.truth(_v121)) {
              const _v122: any = (temps[1] ?? 0);
              acc = _v122;
              const _v123: any = 3;
              acc = _v123;
              const _v124: any = rt.op("+", ...[_v122, _v123]);
              acc = _v124;
              _v118 = _v124;
            } else {
              const _v125: any = (temps[1] ?? 0);
              acc = _v125;
              const _v126: any = rt.global(302);
              acc = _v126;
              const _v127: any = await rt.send(_v126, "wearing", []);
              acc = _v127;
              const _v128: any = 34;
              acc = _v128;
              const _v129: any = rt.op("-", ...[_v127, _v128]);
              acc = _v129;
              const _v130: any = rt.op("+", ...[_v125, _v129]);
              acc = _v130;
              _v118 = _v130;
            }
            acc = _v118;
            const _v131: any = rt.global(303);
            acc = _v131;
            const _v132: any = await rt.send(_v131, "view", [_v118]);
            acc = _v132;
            const _v133: any = 3;
            acc = _v133;
            const _v134: any = 8;
            acc = _v134;
            const _v135: any = 16;
            acc = _v135;
            const _v136: any = 1;
            acc = _v136;
            const _v137: any = await rt.call(1, "Palette", [_v133, _v134, _v135, _v136], this);
            acc = _v137;
            const _v138: any = 3;
            acc = _v138;
            const _v139: any = 144;
            acc = _v139;
            const _v140: any = 255;
            acc = _v140;
            const _v141: any = 1;
            acc = _v141;
            const _v142: any = await rt.call(1, "Palette", [_v138, _v139, _v140, _v141], this);
            acc = _v142;
            const _v143: any = rt.global(303);
            acc = _v143;
            const _v144: any = await rt.send(_v143, "show", []);
            acc = _v144;
            const _v145: any = rt.global(303);
            acc = _v145;
            const _v146: any = await rt.send(_v145, "forceUpd", []);
            acc = _v146;
            const _v147: any = rt.global(302);
            acc = _v147;
            const _v148: any = await rt.send(_v147, "whichBody", []);
            acc = _v148;
            const _v149: any = await rt.call(0, "proc0_16", [_v148], this);
            acc = _v149;
            const _v150: any = rt.global(302);
            acc = _v150;
            const _v151: any = await rt.send(_v150, "whichNumber", []);
            acc = _v151;
            const _v152: any = rt.object(1, "number1");
            acc = _v152;
            const _v153: any = await rt.send(_v152, "cel", [_v151]);
            acc = _v153;
            const _v154: any = await rt.send(_v152, "addToPic", []);
            acc = _v154;
            const _v155: any = rt.global(302);
            acc = _v155;
            const _v156: any = await rt.send(_v155, "whichNumber", []);
            acc = _v156;
            const _v157: any = rt.object(1, "number2");
            acc = _v157;
            const _v158: any = await rt.send(_v157, "cel", [_v156]);
            acc = _v158;
            const _v159: any = await rt.send(_v157, "addToPic", []);
            acc = _v159;
            const _v160: any = rt.global(302);
            acc = _v160;
            const _v161: any = await rt.send(_v160, "whichNumber", []);
            acc = _v161;
            const _v162: any = rt.object(1, "number3");
            acc = _v162;
            const _v163: any = await rt.send(_v162, "cel", [_v161]);
            acc = _v163;
            const _v164: any = await rt.send(_v162, "addToPic", []);
            acc = _v164;
            const _v165: any = rt.global(302);
            acc = _v165;
            const _v166: any = await rt.send(_v165, "whichNumber", []);
            acc = _v166;
            const _v167: any = rt.object(1, "number4");
            acc = _v167;
            const _v168: any = await rt.send(_v167, "cel", [_v166]);
            acc = _v168;
            const _v169: any = await rt.send(_v167, "addToPic", []);
            acc = _v169;
            const _v170: any = await rt.call(0, "proc0_1", [], this);
            acc = _v170;
            const _v171: any = rt.ref("global", 0, 100);
            acc = _v171;
            const _v172: any = 1;
            acc = _v172;
            const _v173: any = 1;
            acc = _v173;
            const _v174: any = rt.global(372);
            acc = _v174;
            const _v175: any = await rt.call(1, "Format", [_v171, _v172, _v173, _v174], this);
            acc = _v175;
            const _v176: any = 102;
            acc = _v176;
            const _v177: any = 0;
            acc = _v177;
            const _v178: any = 103;
            acc = _v178;
            let _v179: any = acc;
            const _v180: any = rt.global(535);
            acc = _v180;
            _v179 = _v180;
            if (rt.truth(_v180)) {
              const _v181: any = 86;
              acc = _v181;
              _v179 = _v181;
            } else {
              const _v182: any = 7;
              acc = _v182;
              _v179 = _v182;
            }
            acc = _v179;
            const _v183: any = 100;
            acc = _v183;
            const _v184: any = 140;
            acc = _v184;
            const _v185: any = 184;
            acc = _v185;
            const _v186: any = 105;
            acc = _v186;
            const _v187: any = 10;
            acc = _v187;
            const _v188: any = await rt.call(1, "Display", [_v175, _v176, _v177, _v178, _v179, _v183, _v184, _v185, _v186, _v187], this);
            acc = _v188;
            const _v189: any = rt.global(302);
            acc = _v189;
            const _v190: any = await rt.send(_v189, "startTurn", []);
            acc = _v190;
            return acc;
          },
        },
      },
      {
        name: "room1",
        className: "Rm",
        parent: {"script": 994, "name": "Rm"},
        isClass: false,
        properties: {"picture": 11, "style": 2},
        methods: {
          // SCI room1.sc: room1.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            let _v1: any = acc;
            const _v2: any = rt.global(533);
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = await rt.superSend(this, {"script": 1, "name": "room1"}, "init", []);
              acc = _v4;
              _v1 = _v4;
              const _v5: any = rt.object(1, "door");
              acc = _v5;
              const _v6: any = rt.setGlobal(517, _v5);
              acc = _v6;
              _v1 = _v6;
              const _v7: any = 130;
              acc = _v7;
              const _v8: any = 102;
              acc = _v8;
              const _v9: any = 101;
              acc = _v9;
              const _v10: any = 104;
              acc = _v10;
              const _v11: any = 100;
              acc = _v11;
              const _v12: any = 107;
              acc = _v12;
              const _v13: any = 108;
              acc = _v13;
              const _v14: any = 109;
              acc = _v14;
              const _v15: any = 967;
              acc = _v15;
              const _v16: any = 110;
              acc = _v16;
              const _v17: any = 103;
              acc = _v17;
              const _v18: any = await rt.call(0, "proc0_2", [_v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15, _v16, _v17], this);
              acc = _v18;
              _v1 = _v18;
              const _v19: any = 132;
              acc = _v19;
              const _v20: any = 23;
              acc = _v20;
              const _v21: any = await rt.call(1, "Load", [_v19, _v20], this);
              acc = _v21;
              _v1 = _v21;
              const _v22: any = 1;
              acc = _v22;
              const _v23: any = rt.object(997, "MenuBar");
              acc = _v23;
              const _v24: any = await rt.send(_v23, "init", []);
              acc = _v24;
              const _v25: any = await rt.send(_v23, "state", [_v22]);
              acc = _v25;
              _v1 = _v25;
              const _v26: any = 104;
              acc = _v26;
              const _v27: any = await rt.call(1, "ScriptID", [_v26], this);
              acc = _v27;
              _v1 = _v27;
              const _v28: any = rt.object(967, "DCIcon");
              acc = _v28;
              const _v29: any = (temps[0] = _v28);
              acc = _v29;
              _v1 = _v29;
              const _v30: any = rt.object(110, "DialogScript");
              acc = _v30;
              const _v31: any = (temps[0] = _v30);
              acc = _v31;
              _v1 = _v31;
              const _v32: any = rt.object(103, "FwdCount");
              acc = _v32;
              const _v33: any = (temps[0] = _v32);
              acc = _v33;
              _v1 = _v33;
              const _v34: any = rt.object(891, "KeyMouse");
              acc = _v34;
              const _v35: any = (temps[0] = _v34);
              acc = _v35;
              _v1 = _v35;
              const _v36: any = rt.object(1, "mainKeyMouseList");
              acc = _v36;
              const _v37: any = rt.setGlobal(432, _v36);
              acc = _v37;
              const _v38: any = await rt.send(_v37, "add", []);
              acc = _v38;
              _v1 = _v38;
              const _v39: any = rt.object(1, "places");
              acc = _v39;
              const _v40: any = rt.setGlobal(301, _v39);
              acc = _v40;
              const _v41: any = await rt.send(_v40, "add", []);
              acc = _v41;
              _v1 = _v41;
              const _v42: any = rt.object(1, "players");
              acc = _v42;
              const _v43: any = await rt.send(_v42, "add", []);
              acc = _v43;
              _v1 = _v43;
              const _v44: any = rt.object(1, "tempList");
              acc = _v44;
              const _v45: any = await rt.send(_v44, "add", []);
              acc = _v45;
              _v1 = _v45;
              const _v46: any = rt.object(1, "calc");
              acc = _v46;
              const _v47: any = rt.setGlobal(305, _v46);
              acc = _v47;
              _v1 = _v47;
              const _v48: any = rt.object(1, "apartmentsP");
              acc = _v48;
              const _v49: any = await rt.send(_v48, "init", []);
              acc = _v49;
              _v1 = _v49;
              const _v50: any = rt.object(1, "rentOfficeP");
              acc = _v50;
              const _v51: any = await rt.send(_v50, "init", []);
              acc = _v51;
              _v1 = _v51;
              const _v52: any = rt.object(1, "securityP");
              acc = _v52;
              const _v53: any = await rt.send(_v52, "init", []);
              acc = _v53;
              _v1 = _v53;
              const _v54: any = rt.object(1, "marketP");
              acc = _v54;
              const _v55: any = await rt.send(_v54, "init", []);
              acc = _v55;
              _v1 = _v55;
              const _v56: any = rt.object(1, "bankP");
              acc = _v56;
              const _v57: any = await rt.send(_v56, "init", []);
              acc = _v57;
              _v1 = _v57;
              const _v58: any = rt.object(1, "factoryP");
              acc = _v58;
              const _v59: any = await rt.send(_v58, "init", []);
              acc = _v59;
              _v1 = _v59;
              const _v60: any = rt.object(1, "employmentP");
              acc = _v60;
              const _v61: any = await rt.send(_v60, "init", []);
              acc = _v61;
              _v1 = _v61;
              const _v62: any = rt.object(1, "universityP");
              acc = _v62;
              const _v63: any = await rt.send(_v62, "init", []);
              acc = _v63;
              _v1 = _v63;
              const _v64: any = rt.object(1, "applianceP");
              acc = _v64;
              const _v65: any = await rt.send(_v64, "init", []);
              acc = _v65;
              _v1 = _v65;
              const _v66: any = rt.object(1, "clothingP");
              acc = _v66;
              const _v67: any = await rt.send(_v66, "init", []);
              acc = _v67;
              _v1 = _v67;
              const _v68: any = rt.object(1, "fastFoodP");
              acc = _v68;
              const _v69: any = await rt.send(_v68, "init", []);
              acc = _v69;
              _v1 = _v69;
              const _v70: any = rt.object(1, "discountP");
              acc = _v70;
              const _v71: any = await rt.send(_v70, "init", []);
              acc = _v71;
              _v1 = _v71;
              const _v72: any = rt.object(1, "pawnShopP");
              acc = _v72;
              const _v73: any = await rt.send(_v72, "init", []);
              acc = _v73;
              _v1 = _v73;
              const _v74: any = 6;
              acc = _v74;
              const _v75: any = rt.object(1, "door");
              acc = _v75;
              const _v76: any = await rt.send(_v75, "init", []);
              acc = _v76;
              const _v77: any = await rt.send(_v75, "setPri", [_v74]);
              acc = _v77;
              _v1 = _v77;
              const _v78: any = 1;
              acc = _v78;
              const _v79: any = rt.object(996, "User");
              acc = _v79;
              const _v80: any = await rt.send(_v79, "canControl", [_v78]);
              acc = _v80;
              _v1 = _v80;
              const _v81: any = 999;
              acc = _v81;
              const _v82: any = 1;
              acc = _v82;
              const _v83: any = rt.global(1);
              acc = _v83;
              const _v84: any = await rt.send(_v83, "setCursor", [_v81, _v82]);
              acc = _v84;
              _v1 = _v84;
              const _v85: any = await rt.call(0, "proc0_1", [], this);
              acc = _v85;
              _v1 = _v85;
              const _v86: any = rt.object(1, "player1");
              acc = _v86;
              const _v87: any = rt.object(1, "player2");
              acc = _v87;
              const _v88: any = rt.object(1, "player3");
              acc = _v88;
              const _v89: any = rt.object(1, "player4");
              acc = _v89;
              const _v90: any = rt.object(1, "players");
              acc = _v90;
              const _v91: any = await rt.send(_v90, "add", [_v86, _v87, _v88, _v89]);
              acc = _v91;
              _v1 = _v91;
              const _v92: any = 0;
              acc = _v92;
              const _v93: any = rt.setGlobal(374, _v92);
              acc = _v93;
              _v1 = _v93;
              const _v94: any = 130;
              acc = _v94;
              const _v95: any = 233;
              acc = _v95;
              const _v96: any = 239;
              acc = _v96;
              const _v97: any = 235;
              acc = _v97;
              const _v98: any = 236;
              acc = _v98;
              const _v99: any = await rt.call(0, "proc0_2", [_v94, _v95, _v96, _v97, _v98], this);
              acc = _v99;
              _v1 = _v99;
              const _v100: any = 128;
              acc = _v100;
              const _v101: any = 501;
              acc = _v101;
              const _v102: any = 250;
              acc = _v102;
              const _v103: any = 10;
              acc = _v103;
              const _v104: any = 500;
              acc = _v104;
              const _v105: any = 499;
              acc = _v105;
              const _v106: any = await rt.call(0, "proc0_2", [_v100, _v101, _v102, _v103, _v104, _v105], this);
              acc = _v106;
              _v1 = _v106;
              const _v107: any = 3;
              acc = _v107;
              const _v108: any = 8;
              acc = _v108;
              const _v109: any = 16;
              acc = _v109;
              const _v110: any = 1;
              acc = _v110;
              const _v111: any = await rt.call(1, "Palette", [_v107, _v108, _v109, _v110], this);
              acc = _v111;
              _v1 = _v111;
              const _v112: any = 3;
              acc = _v112;
              const _v113: any = 144;
              acc = _v113;
              const _v114: any = 255;
              acc = _v114;
              const _v115: any = 1;
              acc = _v115;
              const _v116: any = await rt.call(1, "Palette", [_v112, _v113, _v114, _v115], this);
              acc = _v116;
              _v1 = _v116;
            }
            acc = _v1;
            const _v117: any = 0;
            acc = _v117;
            const _v118: any = rt.setGlobal(533, _v117);
            acc = _v118;
            const _v119: any = 233;
            acc = _v119;
            const _v120: any = 0;
            acc = _v120;
            const _v121: any = await rt.call(1, "ScriptID", [_v119, _v120], this);
            acc = _v121;
            const _v122: any = await rt.send(_v121, "init", []);
            acc = _v122;
            let _v123: any = acc;
            const _v124: any = rt.global(531);
            acc = _v124;
            _v123 = _v124;
            if (rt.truth(_v124)) {
              const _v125: any = 239;
              acc = _v125;
              const _v126: any = 0;
              acc = _v126;
              const _v127: any = await rt.call(1, "ScriptID", [_v125, _v126], this);
              acc = _v127;
              const _v128: any = await rt.send(_v127, "init", []);
              acc = _v128;
              _v123 = _v128;
            }
            acc = _v123;
            let _v129: any = acc;
            let _v130: any = 0;
            if (!rt.truth(_v130)) {
              const _v131: any = rt.global(528);
              acc = _v131;
              _v130 = _v131;
            }
            if (!rt.truth(_v130)) {
              const _v132: any = rt.global(4);
              acc = _v132;
              _v130 = _v132;
            }
            acc = _v130;
            _v129 = _v130;
            if (rt.truth(_v130)) {
              return acc;
              _v129 = acc;
            }
            acc = _v129;
            let _v133: any = acc;
            const _v134: any = rt.global(374);
            acc = _v134;
            _v133 = _v134;
            if (rt.truth(_v134)) {
              const _v135: any = 128;
              acc = _v135;
              const _v136: any = 499;
              acc = _v136;
              const _v137: any = await rt.call(0, "proc0_2", [_v135, _v136], this);
              acc = _v137;
              _v133 = _v137;
              const _v138: any = 235;
              acc = _v138;
              const _v139: any = 0;
              acc = _v139;
              const _v140: any = await rt.call(1, "ScriptID", [_v138, _v139], this);
              acc = _v140;
              const _v141: any = await rt.send(_v140, "init", []);
              acc = _v141;
              _v133 = _v141;
              let _v142: any = acc;
              let _v143: any = 0;
              if (!rt.truth(_v143)) {
                const _v144: any = rt.global(528);
                acc = _v144;
                _v143 = _v144;
              }
              if (!rt.truth(_v143)) {
                const _v145: any = rt.global(4);
                acc = _v145;
                _v143 = _v145;
              }
              acc = _v143;
              _v142 = _v143;
              if (rt.truth(_v143)) {
                return acc;
                _v142 = acc;
              }
              acc = _v142;
              _v133 = _v142;
              let _v146: any = acc;
              const _v147: any = rt.global(374);
              acc = _v147;
              const _v148: any = 1;
              acc = _v148;
              const _v149: any = rt.op("==", ...[_v147, _v148]);
              acc = _v149;
              _v146 = _v149;
              if (rt.truth(_v149)) {
                const _v150: any = 237;
                acc = _v150;
                const _v151: any = 0;
                acc = _v151;
                const _v152: any = await rt.call(1, "ScriptID", [_v150, _v151], this);
                acc = _v152;
                const _v153: any = await rt.send(_v152, "init", []);
                acc = _v153;
                _v146 = _v153;
                let _v154: any = acc;
                let _v155: any = 0;
                if (!rt.truth(_v155)) {
                  const _v156: any = rt.global(528);
                  acc = _v156;
                  _v155 = _v156;
                }
                if (!rt.truth(_v155)) {
                  const _v157: any = rt.global(4);
                  acc = _v157;
                  _v155 = _v157;
                }
                acc = _v155;
                _v154 = _v155;
                if (rt.truth(_v155)) {
                  return acc;
                  _v154 = acc;
                }
                acc = _v154;
                _v146 = _v154;
                let _v158: any = acc;
                const _v159: any = 1;
                acc = _v159;
                const _v160: any = rt.object(1, "players");
                acc = _v160;
                const _v161: any = await rt.send(_v160, "at", [_v159]);
                acc = _v161;
                const _v162: any = await rt.send(_v161, "playing", []);
                acc = _v162;
                const _v163: any = 29;
                acc = _v163;
                const _v164: any = rt.op("==", ...[_v162, _v163]);
                acc = _v164;
                _v158 = _v164;
                if (rt.truth(_v164)) {
                  const _v165: any = 0;
                  acc = _v165;
                  const _v166: any = 1;
                  acc = _v166;
                  const _v167: any = 236;
                  acc = _v167;
                  const _v168: any = 0;
                  acc = _v168;
                  const _v169: any = await rt.call(1, "ScriptID", [_v167, _v168], this);
                  acc = _v169;
                  const _v170: any = await rt.send(_v169, "init", [_v165, _v166]);
                  acc = _v170;
                  _v158 = _v170;
                }
                acc = _v158;
                _v146 = _v158;
              }
              acc = _v146;
              _v133 = _v146;
            }
            acc = _v133;
            const _v171: any = 128;
            acc = _v171;
            const _v172: any = 0;
            acc = _v172;
            const _v173: any = 250;
            acc = _v173;
            const _v174: any = 270;
            acc = _v174;
            const _v175: any = await rt.call(0, "proc0_2", [_v171, _v172, _v173, _v174], this);
            acc = _v175;
            const _v176: any = 130;
            acc = _v176;
            const _v177: any = 990;
            acc = _v177;
            const _v178: any = 997;
            acc = _v178;
            const _v179: any = 987;
            acc = _v179;
            const _v180: any = await rt.call(0, "proc0_2", [_v176, _v177, _v178, _v179], this);
            acc = _v180;
            const _v181: any = 136;
            acc = _v181;
            const _v182: any = 997;
            acc = _v182;
            const _v183: any = 999;
            acc = _v183;
            const _v184: any = await rt.call(0, "proc0_2", [_v181, _v182, _v183], this);
            acc = _v184;
            const _v185: any = 135;
            acc = _v185;
            const _v186: any = 0;
            acc = _v186;
            const _v187: any = 1;
            acc = _v187;
            const _v188: any = await rt.call(1, "Lock", [_v185, _v186, _v187], this);
            acc = _v188;
            const _v189: any = 135;
            acc = _v189;
            const _v190: any = 1;
            acc = _v190;
            const _v191: any = 1;
            acc = _v191;
            const _v192: any = await rt.call(1, "Lock", [_v189, _v190, _v191], this);
            acc = _v192;
            const _v193: any = 135;
            acc = _v193;
            const _v194: any = 3;
            acc = _v194;
            const _v195: any = 1;
            acc = _v195;
            const _v196: any = await rt.call(1, "Lock", [_v193, _v194, _v195], this);
            acc = _v196;
            const _v197: any = 135;
            acc = _v197;
            const _v198: any = 4;
            acc = _v198;
            const _v199: any = 1;
            acc = _v199;
            const _v200: any = await rt.call(1, "Lock", [_v197, _v198, _v199], this);
            acc = _v200;
            const _v201: any = 135;
            acc = _v201;
            const _v202: any = 10;
            acc = _v202;
            const _v203: any = 1;
            acc = _v203;
            const _v204: any = await rt.call(1, "Lock", [_v201, _v202, _v203], this);
            acc = _v204;
            const _v205: any = 135;
            acc = _v205;
            const _v206: any = 14;
            acc = _v206;
            const _v207: any = 1;
            acc = _v207;
            const _v208: any = await rt.call(1, "Lock", [_v205, _v206, _v207], this);
            acc = _v208;
            const _v209: any = 128;
            acc = _v209;
            const _v210: any = 0;
            acc = _v210;
            const _v211: any = 1;
            acc = _v211;
            const _v212: any = await rt.call(1, "Lock", [_v209, _v210, _v211], this);
            acc = _v212;
            const _v213: any = 128;
            acc = _v213;
            const _v214: any = 250;
            acc = _v214;
            const _v215: any = 1;
            acc = _v215;
            const _v216: any = await rt.call(1, "Lock", [_v213, _v214, _v215], this);
            acc = _v216;
            const _v217: any = 128;
            acc = _v217;
            const _v218: any = 270;
            acc = _v218;
            const _v219: any = 1;
            acc = _v219;
            const _v220: any = await rt.call(1, "Lock", [_v217, _v218, _v219], this);
            acc = _v220;
            const _v221: any = 130;
            acc = _v221;
            const _v222: any = 990;
            acc = _v222;
            const _v223: any = 1;
            acc = _v223;
            const _v224: any = await rt.call(1, "Lock", [_v221, _v222, _v223], this);
            acc = _v224;
            const _v225: any = 130;
            acc = _v225;
            const _v226: any = 997;
            acc = _v226;
            const _v227: any = 1;
            acc = _v227;
            const _v228: any = await rt.call(1, "Lock", [_v225, _v226, _v227], this);
            acc = _v228;
            const _v229: any = 130;
            acc = _v229;
            const _v230: any = 987;
            acc = _v230;
            const _v231: any = 1;
            acc = _v231;
            const _v232: any = await rt.call(1, "Lock", [_v229, _v230, _v231], this);
            acc = _v232;
            const _v233: any = 131;
            acc = _v233;
            const _v234: any = 115;
            acc = _v234;
            const _v235: any = 1;
            acc = _v235;
            const _v236: any = await rt.call(1, "Lock", [_v233, _v234, _v235], this);
            acc = _v236;
            const _v237: any = 131;
            acc = _v237;
            const _v238: any = 108;
            acc = _v238;
            const _v239: any = 1;
            acc = _v239;
            const _v240: any = await rt.call(1, "Lock", [_v237, _v238, _v239], this);
            acc = _v240;
            const _v241: any = 130;
            acc = _v241;
            const _v242: any = 115;
            acc = _v242;
            const _v243: any = 1;
            acc = _v243;
            const _v244: any = await rt.call(1, "Lock", [_v241, _v242, _v243], this);
            acc = _v244;
            const _v245: any = 130;
            acc = _v245;
            const _v246: any = 108;
            acc = _v246;
            const _v247: any = 1;
            acc = _v247;
            const _v248: any = await rt.call(1, "Lock", [_v245, _v246, _v247], this);
            acc = _v248;
            const _v249: any = 136;
            acc = _v249;
            const _v250: any = 997;
            acc = _v250;
            const _v251: any = 1;
            acc = _v251;
            const _v252: any = await rt.call(1, "Lock", [_v249, _v250, _v251], this);
            acc = _v252;
            const _v253: any = 136;
            acc = _v253;
            const _v254: any = 999;
            acc = _v254;
            const _v255: any = 1;
            acc = _v255;
            const _v256: any = await rt.call(1, "Lock", [_v253, _v254, _v255], this);
            acc = _v256;
            let _v257: any = acc;
            let _v258: any = 0;
            if (!rt.truth(_v258)) {
              const _v259: any = rt.global(527);
              acc = _v259;
              _v258 = _v259;
            }
            if (!rt.truth(_v258)) {
              const _v260: any = 1;
              acc = _v260;
              const _v261: any = rt.object(1, "players");
              acc = _v261;
              const _v262: any = await rt.send(_v261, "at", [_v260]);
              acc = _v262;
              const _v263: any = await rt.send(_v262, "playing", []);
              acc = _v263;
              const _v264: any = 29;
              acc = _v264;
              const _v265: any = rt.op("==", ...[_v263, _v264]);
              acc = _v265;
              _v258 = _v265;
            }
            acc = _v258;
            _v257 = _v258;
            if (rt.truth(_v258)) {
              const _v266: any = 128;
              acc = _v266;
              const _v267: any = 274;
              acc = _v267;
              const _v268: any = 275;
              acc = _v268;
              const _v269: any = 276;
              acc = _v269;
              const _v270: any = 277;
              acc = _v270;
              const _v271: any = await rt.call(0, "proc0_2", [_v266, _v267, _v268, _v269, _v270], this);
              acc = _v271;
              _v257 = _v271;
              const _v272: any = 128;
              acc = _v272;
              const _v273: any = 274;
              acc = _v273;
              const _v274: any = 1;
              acc = _v274;
              const _v275: any = await rt.call(1, "Lock", [_v272, _v273, _v274], this);
              acc = _v275;
              _v257 = _v275;
              const _v276: any = 128;
              acc = _v276;
              const _v277: any = 275;
              acc = _v277;
              const _v278: any = 1;
              acc = _v278;
              const _v279: any = await rt.call(1, "Lock", [_v276, _v277, _v278], this);
              acc = _v279;
              _v257 = _v279;
              const _v280: any = 128;
              acc = _v280;
              const _v281: any = 276;
              acc = _v281;
              const _v282: any = 1;
              acc = _v282;
              const _v283: any = await rt.call(1, "Lock", [_v280, _v281, _v282], this);
              acc = _v283;
              _v257 = _v283;
              const _v284: any = 128;
              acc = _v284;
              const _v285: any = 277;
              acc = _v285;
              const _v286: any = 1;
              acc = _v286;
              const _v287: any = await rt.call(1, "Lock", [_v284, _v285, _v286], this);
              acc = _v287;
              _v257 = _v287;
            }
            acc = _v257;
            let _v288: any = acc;
            let _v289: any = 0;
            if (!rt.truth(_v289)) {
              const _v290: any = rt.global(528);
              acc = _v290;
              _v289 = _v290;
            }
            if (!rt.truth(_v289)) {
              const _v291: any = rt.global(529);
              acc = _v291;
              _v289 = _v291;
            }
            if (!rt.truth(_v289)) {
              const _v292: any = rt.global(4);
              acc = _v292;
              _v289 = _v292;
            }
            acc = _v289;
            _v288 = _v289;
            if (rt.truth(_v289)) {
              return acc;
              _v288 = acc;
            }
            acc = _v288;
            const _v293: any = rt.global(477);
            acc = _v293;
            const _v294: any = await rt.send(_v293, "fade", []);
            acc = _v294;
            const _v295: any = rt.object(1, "players");
            acc = _v295;
            const _v296: any = await rt.send(_v295, "init", []);
            acc = _v296;
            const _v297: any = 3;
            acc = _v297;
            const _v298: any = 8;
            acc = _v298;
            const _v299: any = 16;
            acc = _v299;
            const _v300: any = 1;
            acc = _v300;
            const _v301: any = await rt.call(1, "Palette", [_v297, _v298, _v299, _v300], this);
            acc = _v301;
            const _v302: any = 3;
            acc = _v302;
            const _v303: any = 144;
            acc = _v303;
            const _v304: any = 255;
            acc = _v304;
            const _v305: any = 1;
            acc = _v305;
            const _v306: any = await rt.call(1, "Palette", [_v302, _v303, _v304, _v305], this);
            acc = _v306;
            const _v307: any = 0;
            acc = _v307;
            const _v308: any = rt.object(1, "players");
            acc = _v308;
            const _v309: any = await rt.send(_v308, "at", [_v307]);
            acc = _v309;
            const _v310: any = await rt.send(_v309, "whichBody", []);
            acc = _v310;
            const _v311: any = await rt.call(0, "proc0_16", [_v310], this);
            acc = _v311;
            let _v312: any = acc;
            const _v313: any = rt.global(302);
            acc = _v313;
            const _v314: any = await rt.send(_v313, "playing", []);
            acc = _v314;
            const _v315: any = 29;
            acc = _v315;
            const _v316: any = rt.op("==", ...[_v314, _v315]);
            acc = _v316;
            _v312 = _v316;
            if (rt.truth(_v316)) {
              const _v317: any = 4;
              acc = _v317;
              const _v318: any = rt.object(1, "number1");
              acc = _v318;
              const _v319: any = await rt.send(_v318, "cel", [_v317]);
              acc = _v319;
              _v312 = _v319;
              const _v320: any = 4;
              acc = _v320;
              const _v321: any = rt.object(1, "number2");
              acc = _v321;
              const _v322: any = await rt.send(_v321, "cel", [_v320]);
              acc = _v322;
              _v312 = _v322;
              const _v323: any = 4;
              acc = _v323;
              const _v324: any = rt.object(1, "number3");
              acc = _v324;
              const _v325: any = await rt.send(_v324, "cel", [_v323]);
              acc = _v325;
              _v312 = _v325;
              const _v326: any = 4;
              acc = _v326;
              const _v327: any = rt.object(1, "number4");
              acc = _v327;
              const _v328: any = await rt.send(_v327, "cel", [_v326]);
              acc = _v328;
              _v312 = _v328;
            }
            acc = _v312;
            const _v329: any = 7;
            acc = _v329;
            const _v330: any = rt.object(1, "number1");
            acc = _v330;
            const _v331: any = await rt.send(_v330, "setPri", [_v329]);
            acc = _v331;
            const _v332: any = await rt.send(_v330, "init", []);
            acc = _v332;
            const _v333: any = await rt.send(_v330, "addToPic", []);
            acc = _v333;
            const _v334: any = 7;
            acc = _v334;
            const _v335: any = rt.object(1, "number2");
            acc = _v335;
            const _v336: any = await rt.send(_v335, "setPri", [_v334]);
            acc = _v336;
            const _v337: any = await rt.send(_v335, "init", []);
            acc = _v337;
            const _v338: any = await rt.send(_v335, "addToPic", []);
            acc = _v338;
            const _v339: any = 7;
            acc = _v339;
            const _v340: any = rt.object(1, "number3");
            acc = _v340;
            const _v341: any = await rt.send(_v340, "setPri", [_v339]);
            acc = _v341;
            const _v342: any = await rt.send(_v340, "init", []);
            acc = _v342;
            const _v343: any = await rt.send(_v340, "addToPic", []);
            acc = _v343;
            const _v344: any = 7;
            acc = _v344;
            const _v345: any = rt.object(1, "number4");
            acc = _v345;
            const _v346: any = await rt.send(_v345, "setPri", [_v344]);
            acc = _v346;
            const _v347: any = await rt.send(_v345, "init", []);
            acc = _v347;
            const _v348: any = await rt.send(_v345, "addToPic", []);
            acc = _v348;
            const _v349: any = await rt.call(0, "proc0_1", [], this);
            acc = _v349;
            const _v350: any = rt.object(1, "timeKeep");
            acc = _v350;
            const _v351: any = rt.setGlobal(417, _v350);
            acc = _v351;
            const _v352: any = await rt.send(_v351, "init", []);
            acc = _v352;
            const _v353: any = rt.object(1, "calc");
            acc = _v353;
            const _v354: any = rt.get(this, "controls");
            acc = _v354;
            const _v355: any = await rt.send(_v354, "add", [_v353]);
            acc = _v355;
            const _v356: any = await rt.call(0, "proc0_1", [], this);
            acc = _v356;
            const _v357: any = rt.global(432);
            acc = _v357;
            const _v358: any = rt.object(891, "KeyMouse");
            acc = _v358;
            const _v359: any = await rt.send(_v358, "setList", [_v357]);
            acc = _v359;
            const _v360: any = -1;
            acc = _v360;
            const _v361: any = rt.setGlobal(401, _v360);
            acc = _v361;
            const _v362: any = 0;
            acc = _v362;
            let _v363: any = acc;
            const _v364: any = 0;
            acc = _v364;
            const _v365: any = rt.object(1, "players");
            acc = _v365;
            const _v366: any = await rt.send(_v365, "at", [_v364]);
            acc = _v366;
            const _v367: any = await rt.send(_v366, "playing", []);
            acc = _v367;
            const _v368: any = 29;
            acc = _v368;
            const _v369: any = rt.op("==", ...[_v367, _v368]);
            acc = _v369;
            _v363 = _v369;
            if (rt.truth(_v369)) {
              const _v370: any = 4;
              acc = _v370;
              _v363 = _v370;
            } else {
              const _v371: any = 0;
              acc = _v371;
              const _v372: any = rt.object(1, "players");
              acc = _v372;
              const _v373: any = await rt.send(_v372, "at", [_v371]);
              acc = _v373;
              const _v374: any = await rt.send(_v373, "whichBody", []);
              acc = _v374;
              _v363 = _v374;
            }
            acc = _v363;
            const _v375: any = rt.object(1, "marble");
            acc = _v375;
            const _v376: any = await rt.send(_v375, "view", [_v362]);
            acc = _v376;
            const _v377: any = await rt.send(_v375, "cel", [_v363]);
            acc = _v377;
            const _v378: any = await rt.send(_v375, "init", []);
            acc = _v378;
            const _v379: any = 771;
            acc = _v379;
            const _v380: any = 112;
            acc = _v380;
            const _v381: any = 1;
            acc = _v381;
            const _v382: any = await rt.call(1, "SetMenu", [_v379, _v380, _v381], this);
            acc = _v382;
            const _v383: any = 513;
            acc = _v383;
            const _v384: any = 112;
            acc = _v384;
            const _v385: any = 1;
            acc = _v385;
            const _v386: any = await rt.call(1, "SetMenu", [_v383, _v384, _v385], this);
            acc = _v386;
            const _v387: any = 515;
            acc = _v387;
            const _v388: any = 112;
            acc = _v388;
            const _v389: any = 1;
            acc = _v389;
            const _v390: any = await rt.call(1, "SetMenu", [_v387, _v388, _v389], this);
            acc = _v390;
            const _v391: any = 1025;
            acc = _v391;
            const _v392: any = 112;
            acc = _v392;
            const _v393: any = 1;
            acc = _v393;
            const _v394: any = await rt.call(1, "SetMenu", [_v391, _v392, _v393], this);
            acc = _v394;
            const _v395: any = 1026;
            acc = _v395;
            const _v396: any = 112;
            acc = _v396;
            const _v397: any = 1;
            acc = _v397;
            const _v398: any = await rt.call(1, "SetMenu", [_v395, _v396, _v397], this);
            acc = _v398;
            const _v399: any = rt.object(1, "picPatch");
            acc = _v399;
            const _v400: any = await rt.send(_v399, "init", []);
            acc = _v400;
            const _v401: any = await rt.send(_v399, "addToPic", []);
            acc = _v401;
            let _v402: any = acc;
            const _v403: any = rt.global(302);
            acc = _v403;
            const _v404: any = await rt.send(_v403, "whichBody", []);
            acc = _v404;
            _branch405: {
              const _v406: any = 0;
              acc = _v406;
              _v402 = rt.op("==", _v404, _v406);
              acc = _v402;
              if (rt.truth(_v402)) {
                const _v407: any = 282;
                acc = _v407;
                _v402 = _v407;
                break _branch405;
              }
              const _v408: any = 1;
              acc = _v408;
              _v402 = rt.op("==", _v404, _v408);
              acc = _v402;
              if (rt.truth(_v402)) {
                const _v409: any = 286;
                acc = _v409;
                _v402 = _v409;
                break _branch405;
              }
              const _v410: any = 2;
              acc = _v410;
              _v402 = rt.op("==", _v404, _v410);
              acc = _v402;
              if (rt.truth(_v402)) {
                const _v411: any = 292;
                acc = _v411;
                _v402 = _v411;
                break _branch405;
              }
              const _v412: any = 3;
              acc = _v412;
              _v402 = rt.op("==", _v404, _v412);
              acc = _v402;
              if (rt.truth(_v402)) {
                const _v413: any = 296;
                acc = _v413;
                _v402 = _v413;
                break _branch405;
              }
            }
            acc = _v402;
            const _v414: any = (temps[1] = _v402);
            acc = _v414;
            let _v415: any = acc;
            const _v416: any = rt.global(302);
            acc = _v416;
            const _v417: any = await rt.send(_v416, "playing", []);
            acc = _v417;
            const _v418: any = 29;
            acc = _v418;
            const _v419: any = rt.op("==", ...[_v417, _v418]);
            acc = _v419;
            _v415 = _v419;
            if (rt.truth(_v419)) {
              const _v420: any = 276;
              acc = _v420;
              const _v421: any = (temps[1] = _v420);
              acc = _v421;
              _v415 = _v421;
            }
            acc = _v415;
            const _v422: any = (temps[1] ?? 0);
            acc = _v422;
            const _v423: any = rt.object(1, "theWalker");
            acc = _v423;
            const _v424: any = await rt.send(_v423, "view", [_v422]);
            acc = _v424;
            const _v425: any = await rt.send(_v423, "init", []);
            acc = _v425;
            const _v426: any = await rt.send(_v423, "stopUpd", []);
            acc = _v426;
            let _v427: any = acc;
            let _v428: any = 0;
            if (!rt.truth(_v428)) {
              const _v429: any = rt.global(534);
              acc = _v429;
              const _v430: any = 1;
              acc = _v430;
              const _v431: any = rt.op("==", ...[_v429, _v430]);
              acc = _v431;
              _v428 = _v431;
            }
            if (!rt.truth(_v428)) {
              const _v432: any = rt.global(534);
              acc = _v432;
              const _v433: any = 3;
              acc = _v433;
              const _v434: any = rt.op("==", ...[_v432, _v433]);
              acc = _v434;
              _v428 = _v434;
            }
            acc = _v428;
            _v427 = _v428;
            if (rt.truth(_v428)) {
              const _v435: any = rt.object(1, "theWalker");
              acc = _v435;
              const _v436: any = await rt.send(_v435, "hide", []);
              acc = _v436;
              _v427 = _v436;
            }
            acc = _v427;
            const _v437: any = await rt.call(0, "proc0_1", [], this);
            acc = _v437;
            const _v438: any = rt.global(302);
            acc = _v438;
            const _v439: any = await rt.send(_v438, "startTurn", []);
            acc = _v439;
            const _v440: any = rt.object(1, "marble");
            acc = _v440;
            const _v441: any = await rt.send(_v440, "moveSpeed", []);
            acc = _v441;
            const _v442: any = 14;
            acc = _v442;
            const _v443: any = rt.op("*", ...[_v441, _v442]);
            acc = _v443;
            const _v444: any = rt.setGlobal(475, _v443);
            acc = _v444;
            const _v445: any = rt.ref("global", 0, 100);
            acc = _v445;
            const _v446: any = 1;
            acc = _v446;
            const _v447: any = 1;
            acc = _v447;
            const _v448: any = rt.global(372);
            acc = _v448;
            const _v449: any = await rt.call(1, "Format", [_v445, _v446, _v447, _v448], this);
            acc = _v449;
            const _v450: any = 102;
            acc = _v450;
            const _v451: any = 0;
            acc = _v451;
            const _v452: any = 103;
            acc = _v452;
            let _v453: any = acc;
            const _v454: any = rt.global(535);
            acc = _v454;
            _v453 = _v454;
            if (rt.truth(_v454)) {
              const _v455: any = 86;
              acc = _v455;
              _v453 = _v455;
            } else {
              const _v456: any = 7;
              acc = _v456;
              _v453 = _v456;
            }
            acc = _v453;
            const _v457: any = 100;
            acc = _v457;
            const _v458: any = 140;
            acc = _v458;
            const _v459: any = 184;
            acc = _v459;
            const _v460: any = 105;
            acc = _v460;
            const _v461: any = 10;
            acc = _v461;
            const _v462: any = await rt.call(1, "Display", [_v449, _v450, _v451, _v452, _v453, _v457, _v458, _v459, _v460, _v461], this);
            acc = _v462;
            let _v463: any = acc;
            const _v464: any = rt.object(1, "players");
            acc = _v464;
            const _v465: any = await rt.send(_v464, "size", []);
            acc = _v465;
            const _v466: any = 1;
            acc = _v466;
            const _v467: any = rt.op("==", ...[_v465, _v466]);
            acc = _v467;
            _v463 = _v467;
            if (rt.truth(_v467)) {
              const _v468: any = 771;
              acc = _v468;
              const _v469: any = 112;
              acc = _v469;
              const _v470: any = 0;
              acc = _v470;
              const _v471: any = await rt.call(1, "SetMenu", [_v468, _v469, _v470], this);
              acc = _v471;
              _v463 = _v471;
            }
            acc = _v463;
            const _v472: any = 132;
            acc = _v472;
            const _v473: any = 6;
            acc = _v473;
            const _v474: any = await rt.call(1, "UnLoad", [_v472, _v473], this);
            acc = _v474;
            const _v475: any = 1;
            acc = _v475;
            const _v476: any = rt.setGlobal(439, _v475);
            acc = _v476;
            return acc;
          },
          // SCI room1.sc: room1.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.global(533);
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = rt.global(533);
              acc = _v3;
              return _v3;
              _v1 = acc;
            }
            acc = _v1;
            let _v4: any = acc;
            const _v5: any = rt.get(this, "controls");
            acc = _v5;
            _v4 = _v5;
            if (rt.truth(_v5)) {
              const _v6: any = (args[0] ?? 0);
              acc = _v6;
              const _v7: any = rt.get(this, "controls");
              acc = _v7;
              const _v8: any = await rt.send(_v7, "handleEvent", [_v6]);
              acc = _v8;
              _v4 = _v8;
            }
            acc = _v4;
            let _v9: any = acc;
            const _v10: any = rt.get(this, "script");
            acc = _v10;
            _v9 = _v10;
            if (rt.truth(_v10)) {
              const _v11: any = (args[0] ?? 0);
              acc = _v11;
              const _v12: any = rt.get(this, "script");
              acc = _v12;
              const _v13: any = await rt.send(_v12, "handleEvent", [_v11]);
              acc = _v13;
              _v9 = _v13;
            }
            acc = _v9;
            const _v14: any = (args[0] ?? 0);
            acc = _v14;
            const _v15: any = rt.global(302);
            acc = _v15;
            const _v16: any = await rt.send(_v15, "handleEvent", [_v14]);
            acc = _v16;
            let _v17: any = acc;
            let _v18: any = 1;
            if (rt.truth(_v18)) {
              const _v19: any = (args[0] ?? 0);
              acc = _v19;
              const _v20: any = await rt.send(_v19, "type", []);
              acc = _v20;
              const _v21: any = 64;
              acc = _v21;
              const _v22: any = rt.op("==", ...[_v20, _v21]);
              acc = _v22;
              _v18 = _v22;
            }
            if (rt.truth(_v18)) {
              const _v23: any = 1;
              acc = _v23;
              let _v24: any = _v23;
              let _v25: any = 1;
              if (rt.truth(_v25)) {
                const _v26: any = (args[0] ?? 0);
                acc = _v26;
                const _v27: any = await rt.send(_v26, "message", []);
                acc = _v27;
                _v25 = rt.op("<=", _v24, _v27);
                _v24 = _v27;
              }
              if (rt.truth(_v25)) {
                const _v28: any = 8;
                acc = _v28;
                _v25 = rt.op("<=", _v24, _v28);
                _v24 = _v28;
              }
              acc = _v25;
              _v18 = _v25;
            }
            acc = _v18;
            _v17 = _v18;
            if (rt.truth(_v18)) {
              const _v29: any = (args[0] ?? 0);
              acc = _v29;
              const _v30: any = rt.object(891, "KeyMouse");
              acc = _v30;
              const _v31: any = await rt.send(_v30, "handleEvent", [_v29]);
              acc = _v31;
              _v17 = _v31;
            }
            acc = _v17;
            let _v32: any = acc;
            const _v33: any = (args[0] ?? 0);
            acc = _v33;
            const _v34: any = await rt.send(_v33, "claimed", []);
            acc = _v34;
            const _v35: any = rt.op("not", ...[_v34]);
            acc = _v35;
            _v32 = _v35;
            if (rt.truth(_v35)) {
              const _v36: any = rt.global(80);
              acc = _v36;
              const _v37: any = (args[0] ?? 0);
              acc = _v37;
              const _v38: any = await rt.send(_v37, "localize", [_v36]);
              acc = _v38;
              _v32 = _v38;
              let _v39: any = acc;
              const _v40: any = 124;
              acc = _v40;
              const _v41: any = (args[0] ?? 0);
              acc = _v41;
              const _v42: any = rt.object(1, "places");
              acc = _v42;
              const _v43: any = await rt.send(_v42, "firstTrue", [_v40, _v41]);
              acc = _v43;
              _v39 = _v43;
              if (rt.truth(_v43)) {
                const _v44: any = -1;
                acc = _v44;
                return _v44;
                _v39 = acc;
              }
              acc = _v39;
              _v32 = _v39;
            }
            acc = _v32;
            const _v45: any = 0;
            acc = _v45;
            return _v45;
            return acc;
          },
          // SCI room1.sc: room1.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.global(439);
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              return acc;
              _v1 = acc;
            }
            acc = _v1;
            let _v4: any = acc;
            const _v5: any = rt.global(479);
            acc = _v5;
            _v4 = _v5;
            if (rt.truth(_v5)) {
              const _v6: any = rt.global(479);
              acc = _v6;
              const _v7: any = await rt.send(_v6, "endCue", []);
              acc = _v7;
              _v4 = _v7;
            }
            acc = _v4;
            let _v8: any = acc;
            const _v9: any = rt.local(1, 0);
            acc = _v9;
            _v8 = _v9;
            if (rt.truth(_v9)) {
              const _v10: any = 0;
              acc = _v10;
              const _v11: any = rt.setLocal(1, 0, _v10);
              acc = _v11;
              _v8 = _v11;
              const _acc12: any = acc;
              const _v13: any = 101;
              acc = _v13;
              const _args14: any[] = [_v13];
              await rt.call(1, "DisposeScript", _args14, this);
              const _v15: any = _args14.length === 2 ? _args14[1] : _acc12;
              acc = _v15;
              _v8 = _v15;
              const _v16: any = rt.global(459);
              acc = _v16;
              const _v17: any = await rt.send(_v16, "cue", []);
              acc = _v17;
              _v8 = _v17;
            }
            acc = _v8;
            let _v18: any = acc;
            _branch19: {
              const _v20: any = rt.object(1, "marble");
              acc = _v20;
              const _v21: any = await rt.send(_v20, "mover", []);
              acc = _v21;
              _v18 = _v21;
              acc = _v18;
              if (rt.truth(_v18)) {
                const _v22: any = rt.global(417);
                acc = _v22;
                const _v23: any = await rt.send(_v22, "doit", []);
                acc = _v23;
                _v18 = _v23;
                break _branch19;
              }
              let _v24: any = 1;
              if (rt.truth(_v24)) {
                const _v25: any = rt.global(302);
                acc = _v25;
                const _v26: any = await rt.send(_v25, "playing", []);
                acc = _v26;
                const _v27: any = 29;
                acc = _v27;
                const _v28: any = rt.op("==", ...[_v26, _v27]);
                acc = _v28;
                _v24 = _v28;
              }
              if (rt.truth(_v24)) {
                const _v29: any = rt.global(473);
                acc = _v29;
                _v24 = _v29;
              }
              acc = _v24;
              _v18 = _v24;
              acc = _v18;
              if (rt.truth(_v18)) {
                let _v30: any = acc;
                const _v31: any = rt.global(401);
                acc = _v31;
                const _v32: any = -1;
                acc = _v32;
                const _v33: any = rt.op("==", ...[_v31, _v32]);
                acc = _v33;
                _v30 = _v33;
                if (rt.truth(_v33)) {
                  let _v34: any = acc;
                  const _v35: any = rt.global(302);
                  acc = _v35;
                  const _v36: any = await rt.send(_v35, "livesAt", []);
                  acc = _v36;
                  const _v37: any = 0;
                  acc = _v37;
                  const _v38: any = rt.op("==", ...[_v36, _v37]);
                  acc = _v38;
                  _v34 = _v38;
                  if (rt.truth(_v38)) {
                    const _v39: any = 0;
                    acc = _v39;
                    _v34 = _v39;
                  } else {
                    const _v40: any = 2;
                    acc = _v40;
                    _v34 = _v40;
                  }
                  acc = _v34;
                  const _v41: any = rt.setGlobal(400, _v34);
                  acc = _v41;
                  _v30 = _v41;
                  const _v42: any = rt.global(302);
                  acc = _v42;
                  const _v43: any = 300;
                  acc = _v43;
                  const _v44: any = await rt.call(1, "ScriptID", [_v43], this);
                  acc = _v44;
                  const _v45: any = await rt.send(_v44, "doit", [_v42]);
                  acc = _v45;
                  const _v46: any = rt.setGlobal(401, _v45);
                  acc = _v46;
                  _v30 = _v46;
                }
                acc = _v30;
                _v18 = _v30;
                const _v47: any = rt.global(458);
                acc = _v47;
                const _v48: any = 101;
                acc = _v48;
                const _v49: any = await rt.call(1, "ScriptID", [_v48], this);
                acc = _v49;
                const _v50: any = await rt.send(_v49, "index", [_v47]);
                acc = _v50;
                _v18 = _v50;
                const _v51: any = rt.global(401);
                acc = _v51;
                const _v52: any = rt.global(301);
                acc = _v52;
                const _v53: any = await rt.send(_v52, "at", [_v51]);
                acc = _v53;
                const _v54: any = rt.setGlobal(459, _v53);
                acc = _v54;
                _v18 = _v54;
                let _v55: any = acc;
                _branch56: {
                  let _v57: any = 1;
                  if (rt.truth(_v57)) {
                    const _v58: any = rt.global(446);
                    acc = _v58;
                    const _v59: any = rt.op("not", ...[_v58]);
                    acc = _v59;
                    _v57 = _v59;
                  }
                  if (rt.truth(_v57)) {
                    const _v60: any = rt.global(400);
                    acc = _v60;
                    const _v61: any = rt.global(401);
                    acc = _v61;
                    const _v62: any = rt.op("==", ...[_v60, _v61]);
                    acc = _v62;
                    _v57 = _v62;
                  }
                  if (rt.truth(_v57)) {
                    const _v63: any = rt.global(2);
                    acc = _v63;
                    const _v64: any = await rt.send(_v63, "script", []);
                    acc = _v64;
                    const _v65: any = rt.op("not", ...[_v64]);
                    acc = _v65;
                    _v57 = _v65;
                  }
                  acc = _v57;
                  _v55 = _v57;
                  acc = _v55;
                  if (rt.truth(_v55)) {
                    const _v66: any = 101;
                    acc = _v66;
                    const _v67: any = await rt.call(1, "ScriptID", [_v66], this);
                    acc = _v67;
                    const _v68: any = rt.global(457);
                    acc = _v68;
                    const _v69: any = rt.global(401);
                    acc = _v69;
                    const _v70: any = rt.object(1, "marbleMoved");
                    acc = _v70;
                    const _v71: any = rt.object(1, "marble");
                    acc = _v71;
                    const _v72: any = await rt.send(_v71, "setMotion", [_v67, _v68, _v69, _v70]);
                    acc = _v72;
                    _v55 = _v72;
                    break _branch56;
                  }
                  let _v73: any = 1;
                  if (rt.truth(_v73)) {
                    const _v74: any = rt.global(446);
                    acc = _v74;
                    const _v75: any = rt.op("not", ...[_v74]);
                    acc = _v75;
                    _v73 = _v75;
                  }
                  if (rt.truth(_v73)) {
                    const _v76: any = rt.global(2);
                    acc = _v76;
                    const _v77: any = await rt.send(_v76, "script", []);
                    acc = _v77;
                    const _v78: any = rt.op("not", ...[_v77]);
                    acc = _v78;
                    _v73 = _v78;
                  }
                  acc = _v73;
                  _v55 = _v73;
                  acc = _v55;
                  if (rt.truth(_v55)) {
                    const _v79: any = 101;
                    acc = _v79;
                    const _v80: any = await rt.call(1, "ScriptID", [_v79], this);
                    acc = _v80;
                    const _v81: any = rt.global(457);
                    acc = _v81;
                    const _v82: any = rt.global(401);
                    acc = _v82;
                    const _v83: any = rt.object(1, "marbleMoved");
                    acc = _v83;
                    const _v84: any = rt.object(1, "marble");
                    acc = _v84;
                    const _v85: any = await rt.send(_v84, "setMotion", [_v80, _v81, _v82, _v83]);
                    acc = _v85;
                    _v55 = _v85;
                    break _branch56;
                  }
                }
                acc = _v55;
                _v18 = _v55;
                const _v86: any = rt.global(401);
                acc = _v86;
                const _v87: any = rt.setGlobal(457, _v86);
                acc = _v87;
                _v18 = _v87;
                break _branch19;
              }
            }
            acc = _v18;
            const _v88: any = 1;
            acc = _v88;
            const _v89: any = rt.object(996, "User");
            acc = _v89;
            const _v90: any = await rt.send(_v89, "canControl", [_v88]);
            acc = _v90;
            const _v91: any = 60;
            acc = _v91;
            const _v92: any = rt.object(1, "players");
            acc = _v92;
            const _v93: any = await rt.send(_v92, "eachElementDo", [_v91]);
            acc = _v93;
            const _v94: any = await rt.superSend(this, {"script": 1, "name": "room1"}, "doit", []);
            acc = _v94;
            return acc;
          },
        },
      },
      {
        name: "calc",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"state": 64, "nsTop": 160, "nsLeft": 252, "loop": 4},
        methods: {
          // SCI room1.sc: calc.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.superSend(this, {"script": 1, "name": "calc"}, "draw", []);
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "doit", []);
            acc = _v3;
            return acc;
          },
          // SCI room1.sc: calc.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0];
            let _v1: any = acc;
            let _v2: any = 0;
            if (!rt.truth(_v2)) {
              const _v3: any = rt.get(this, "value");
              acc = _v3;
              const _v4: any = rt.global(302);
              acc = _v4;
              const _v5: any = await rt.send(_v4, "cash", []);
              acc = _v5;
              const _v6: any = rt.op("!=", ...[_v3, _v5]);
              acc = _v6;
              _v2 = _v6;
            }
            if (!rt.truth(_v2)) {
              const _v7: any = rt.global(456);
              acc = _v7;
              const _v8: any = rt.global(302);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "cashHi", []);
              acc = _v9;
              const _v10: any = rt.op("!=", ...[_v7, _v9]);
              acc = _v10;
              _v2 = _v10;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v11: any = await rt.call(1, "GetPort", [], this);
              acc = _v11;
              const _v12: any = (temps[7] = _v11);
              acc = _v12;
              _v1 = _v12;
              const _v13: any = 0;
              acc = _v13;
              const _v14: any = await rt.call(1, "SetPort", [_v13], this);
              acc = _v14;
              _v1 = _v14;
              const _v15: any = rt.global(302);
              acc = _v15;
              const _v16: any = await rt.send(_v15, "cash", []);
              acc = _v16;
              const _v17: any = rt.set(this, "value", _v16);
              acc = _v17;
              _v1 = _v17;
              const _v18: any = rt.global(302);
              acc = _v18;
              const _v19: any = await rt.send(_v18, "cashHi", []);
              acc = _v19;
              const _v20: any = rt.setGlobal(456, _v19);
              acc = _v20;
              _v1 = _v20;
              const _v21: any = rt.ref("array", temps, 0);
              acc = _v21;
              const _v22: any = 1;
              acc = _v22;
              const _v23: any = 2;
              acc = _v23;
              const _v24: any = rt.global(456);
              acc = _v24;
              const _v25: any = rt.get(this, "value");
              acc = _v25;
              const _v26: any = await rt.call(115, "proc115_0", [_v24, _v25], this);
              acc = _v26;
              const _v27: any = await rt.call(1, "Format", [_v21, _v22, _v23, _v26], this);
              acc = _v27;
              const _v28: any = 100;
              acc = _v28;
              const _v29: any = rt.get(this, "nsLeft");
              acc = _v29;
              const _v30: any = 22;
              acc = _v30;
              const _v31: any = rt.op("+", ...[_v29, _v30]);
              acc = _v31;
              const _v32: any = rt.get(this, "nsTop");
              acc = _v32;
              const _v33: any = 6;
              acc = _v33;
              const _v34: any = rt.op("+", ...[_v32, _v33]);
              acc = _v34;
              const _v35: any = 102;
              acc = _v35;
              const _v36: any = 0;
              acc = _v36;
              const _v37: any = 103;
              acc = _v37;
              let _v38: any = acc;
              _branch39: {
                const _v40: any = rt.global(535);
                acc = _v40;
                _v38 = _v40;
                acc = _v38;
                if (rt.truth(_v38)) {
                  const _v41: any = 101;
                  acc = _v41;
                  _v38 = _v41;
                  break _branch39;
                }
                const _v42: any = rt.global(552);
                acc = _v42;
                _v38 = _v42;
                acc = _v38;
                if (rt.truth(_v38)) {
                  const _v43: any = 15;
                  acc = _v43;
                  _v38 = _v43;
                  break _branch39;
                }
                const _v44: any = 7;
                acc = _v44;
                _v38 = _v44;
                break _branch39;
              }
              acc = _v38;
              const _v45: any = 105;
              acc = _v45;
              const _v46: any = 14;
              acc = _v46;
              const _v47: any = await rt.call(1, "Display", [_v27, _v28, _v31, _v34, _v35, _v36, _v37, _v38, _v45, _v46], this);
              acc = _v47;
              _v1 = _v47;
              const _v48: any = (temps[7] ?? 0);
              acc = _v48;
              const _v49: any = await rt.call(1, "SetPort", [_v48], this);
              acc = _v49;
              _v1 = _v49;
            }
            acc = _v1;
            const _v50: any = rt.global(302);
            acc = _v50;
            const _v51: any = await rt.send(_v50, "calcNetWorth", []);
            acc = _v51;
            return acc;
          },
        },
      },
      {
        name: "tempList",
        className: "List",
        parent: {"script": 999, "name": "List"},
        isClass: false,
        properties: {},
        methods: {
        },
      },
      {
        name: "timeKeep",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"y": 180, "x": 159, "view": 270, "priority": 10},
        methods: {
          // SCI room1.sc: timeKeep.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = 0;
            acc = _v2;
            const _v3: any = rt.get(this, "priority");
            acc = _v3;
            const _v4: any = rt.get(this, "x");
            acc = _v4;
            const _v5: any = rt.get(this, "y");
            acc = _v5;
            const _v6: any = this;
            acc = _v6;
            const _v7: any = await rt.send(_v6, "setLoop", [_v1]);
            acc = _v7;
            const _v8: any = await rt.send(_v6, "setCel", [_v2]);
            acc = _v8;
            const _v9: any = await rt.send(_v6, "setPri", [_v3]);
            acc = _v9;
            const _v10: any = await rt.send(_v6, "posn", [_v4, _v5]);
            acc = _v10;
            const _v11: any = await rt.superSend(this, {"script": 1, "name": "timeKeep"}, "init", []);
            acc = _v11;
            return acc;
          },
          // SCI room1.sc: timeKeep.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            const _v1: any = await rt.call(1, "GetPort", [], this);
            acc = _v1;
            const _v2: any = (temps[2] = _v1);
            acc = _v2;
            const _v3: any = 0;
            acc = _v3;
            const _v4: any = await rt.call(1, "SetPort", [_v3], this);
            acc = _v4;
            const _v5: any = 0;
            acc = _v5;
            const _v6: any = (temps[1] = _v5);
            acc = _v6;
            let _v7: any = acc;
            _branch8: {
              const _v9: any = argc;
              acc = _v9;
              _v7 = _v9;
              acc = _v7;
              if (rt.truth(_v7)) {
                let _v10: any = acc;
                const _v11: any = (args[0] ?? 0);
                acc = _v11;
                _v10 = _v11;
                if (rt.truth(_v11)) {
                  const _v12: any = (args[0] ?? 0);
                  acc = _v12;
                  const _v13: any = rt.setGlobal(323, rt.op("+", rt.global(323), _v12));
                  acc = _v13;
                  _v10 = _v13;
                  const _v14: any = 1;
                  acc = _v14;
                  const _v15: any = (temps[1] = _v14);
                  acc = _v15;
                  _v10 = _v15;
                }
                acc = _v10;
                _v7 = _v10;
                break _branch8;
              }
              const _v16: any = rt.setGlobal(324, rt.op("+", rt.global(324), 1));
              acc = _v16;
              const _v17: any = rt.global(475);
              acc = _v17;
              const _v18: any = rt.op(">", ...[_v16, _v17]);
              acc = _v18;
              _v7 = _v18;
              acc = _v7;
              if (rt.truth(_v7)) {
                const _v19: any = rt.setGlobal(323, rt.op("+", rt.global(323), 1));
                acc = _v19;
                _v7 = _v19;
                const _v20: any = 0;
                acc = _v20;
                const _v21: any = rt.setGlobal(324, _v20);
                acc = _v21;
                _v7 = _v21;
                const _v22: any = 1;
                acc = _v22;
                const _v23: any = (temps[1] = _v22);
                acc = _v23;
                _v7 = _v23;
                break _branch8;
              }
            }
            acc = _v7;
            let _v24: any = acc;
            const _v25: any = rt.global(323);
            acc = _v25;
            const _v26: any = 60;
            acc = _v26;
            const _v27: any = rt.op(">", ...[_v25, _v26]);
            acc = _v27;
            _v24 = _v27;
            if (rt.truth(_v27)) {
              const _v28: any = 60;
              acc = _v28;
              const _v29: any = rt.setGlobal(323, _v28);
              acc = _v29;
              _v24 = _v29;
            }
            acc = _v24;
            let _v30: any = acc;
            let _v31: any = 1;
            if (rt.truth(_v31)) {
              const _v32: any = rt.global(478);
              acc = _v32;
              const _v33: any = rt.op("not", ...[_v32]);
              acc = _v33;
              _v31 = _v33;
            }
            if (rt.truth(_v31)) {
              const _v34: any = rt.global(323);
              acc = _v34;
              const _v35: any = 60;
              acc = _v35;
              const _v36: any = rt.op("==", ...[_v34, _v35]);
              acc = _v36;
              _v31 = _v36;
            }
            acc = _v31;
            _v30 = _v31;
            if (rt.truth(_v31)) {
              const _v37: any = 1;
              acc = _v37;
              const _v38: any = rt.setGlobal(478, _v37);
              acc = _v38;
              _v30 = _v38;
              const _v39: any = rt.global(477);
              acc = _v39;
              const _v40: any = await rt.send(_v39, "stop", []);
              acc = _v40;
              _v30 = _v40;
              const _v41: any = 29;
              acc = _v41;
              const _v42: any = rt.global(476);
              acc = _v42;
              const _v43: any = await rt.send(_v42, "play", [_v41]);
              acc = _v43;
              _v30 = _v43;
            }
            acc = _v30;
            let _v44: any = acc;
            const _v45: any = (temps[1] ?? 0);
            acc = _v45;
            _v44 = _v45;
            if (rt.truth(_v45)) {
              const _v46: any = rt.global(323);
              acc = _v46;
              const _v47: any = 10;
              acc = _v47;
              const _v48: any = rt.op("mod", ...[_v46, _v47]);
              acc = _v48;
              const _v49: any = rt.set(this, "cel", _v48);
              acc = _v49;
              _v44 = _v49;
              const _v50: any = rt.global(323);
              acc = _v50;
              const _v51: any = 10;
              acc = _v51;
              const _v52: any = rt.op("/", ...[_v50, _v51]);
              acc = _v52;
              const _v53: any = rt.set(this, "loop", _v52);
              acc = _v53;
              _v44 = _v53;
              const _v54: any = rt.get(this, "view");
              acc = _v54;
              const _v55: any = rt.get(this, "loop");
              acc = _v55;
              const _v56: any = rt.get(this, "cel");
              acc = _v56;
              const _v57: any = rt.get(this, "x");
              acc = _v57;
              const _v58: any = rt.get(this, "view");
              acc = _v58;
              const _v59: any = rt.get(this, "loop");
              acc = _v59;
              const _v60: any = rt.get(this, "cel");
              acc = _v60;
              const _v61: any = await rt.call(1, "CelWide", [_v58, _v59, _v60], this);
              acc = _v61;
              const _v62: any = 2;
              acc = _v62;
              const _v63: any = rt.op("/", ...[_v61, _v62]);
              acc = _v63;
              const _v64: any = rt.op("-", ...[_v57, _v63]);
              acc = _v64;
              const _v65: any = rt.get(this, "y");
              acc = _v65;
              const _v66: any = rt.get(this, "view");
              acc = _v66;
              const _v67: any = rt.get(this, "loop");
              acc = _v67;
              const _v68: any = rt.get(this, "cel");
              acc = _v68;
              const _v69: any = await rt.call(1, "CelHigh", [_v66, _v67, _v68], this);
              acc = _v69;
              const _v70: any = rt.op("-", ...[_v65, _v69]);
              acc = _v70;
              const _v71: any = 1;
              acc = _v71;
              const _v72: any = rt.op("+", ...[_v70, _v71]);
              acc = _v72;
              const _v73: any = rt.get(this, "priority");
              acc = _v73;
              const _v74: any = await rt.call(1, "DrawCel", [_v54, _v55, _v56, _v64, _v72, _v73], this);
              acc = _v74;
              _v44 = _v74;
              let _v75: any = acc;
              let _v76: any = 1;
              if (rt.truth(_v76)) {
                const _v77: any = rt.global(323);
                acc = _v77;
                const _v78: any = 60;
                acc = _v78;
                const _v79: any = rt.op("==", ...[_v77, _v78]);
                acc = _v79;
                _v76 = _v79;
              }
              if (rt.truth(_v76)) {
                const _v80: any = rt.global(460);
                acc = _v80;
                const _v81: any = rt.op("not", ...[_v80]);
                acc = _v81;
                _v76 = _v81;
              }
              if (rt.truth(_v76)) {
                const _v82: any = rt.object(1, "marble");
                acc = _v82;
                const _v83: any = await rt.send(_v82, "mover", []);
                acc = _v83;
                _v76 = _v83;
              }
              acc = _v76;
              _v75 = _v76;
              if (rt.truth(_v76)) {
                const _v84: any = await rt.call(1, "proc1_9", [], this);
                acc = _v84;
                _v75 = _v84;
              }
              acc = _v75;
              _v44 = _v75;
            }
            acc = _v44;
            const _v85: any = (temps[2] ?? 0);
            acc = _v85;
            const _v86: any = await rt.call(1, "SetPort", [_v85], this);
            acc = _v86;
            return acc;
          },
        },
      },
      {
        name: "number1",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"y": 67, "x": 80, "loop": 3},
        methods: {
        },
      },
      {
        name: "number2",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"y": 67, "x": 238, "loop": 3},
        methods: {
        },
      },
      {
        name: "number3",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"y": 155, "x": 80, "loop": 3},
        methods: {
        },
      },
      {
        name: "number4",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"y": 155, "x": 238, "loop": 3},
        methods: {
        },
      },
      {
        name: "picPatch",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"y": 155, "x": 159, "loop": 1, "priority": 9},
        methods: {
        },
      },
      {
        name: "outline",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"y": 155, "x": 159, "cel": 4, "priority": 8},
        methods: {
        },
      },
    ],
    procedures: {
      // SCI room1.sc: proc1_8
      "proc1_8": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = rt.global(305);
        acc = _v1;
        const _v2: any = await rt.send(_v1, "erase", []);
        acc = _v2;
        const _v3: any = rt.global(302);
        acc = _v3;
        const _v4: any = await rt.send(_v3, "whichBody", []);
        acc = _v4;
        const _v5: any = await rt.call(0, "proc0_16", [_v4], this);
        acc = _v5;
        const _v6: any = rt.object(1, "outline");
        acc = _v6;
        const _v7: any = await rt.send(_v6, "init", []);
        acc = _v7;
        const _v8: any = await rt.send(_v6, "addToPic", []);
        acc = _v8;
        const _v9: any = rt.object(1, "picPatch");
        acc = _v9;
        const _v10: any = await rt.send(_v9, "init", []);
        acc = _v10;
        const _v11: any = await rt.send(_v9, "addToPic", []);
        acc = _v11;
        const _v12: any = rt.object(1, "number1");
        acc = _v12;
        const _v13: any = await rt.send(_v12, "init", []);
        acc = _v13;
        const _v14: any = await rt.send(_v12, "addToPic", []);
        acc = _v14;
        const _v15: any = rt.object(1, "number2");
        acc = _v15;
        const _v16: any = await rt.send(_v15, "init", []);
        acc = _v16;
        const _v17: any = await rt.send(_v15, "addToPic", []);
        acc = _v17;
        const _v18: any = rt.object(1, "number3");
        acc = _v18;
        const _v19: any = await rt.send(_v18, "init", []);
        acc = _v19;
        const _v20: any = await rt.send(_v18, "addToPic", []);
        acc = _v20;
        const _v21: any = rt.object(1, "number4");
        acc = _v21;
        const _v22: any = await rt.send(_v21, "init", []);
        acc = _v22;
        const _v23: any = await rt.send(_v21, "addToPic", []);
        acc = _v23;
        const _v24: any = await rt.call(0, "proc0_1", [], this);
        acc = _v24;
        return acc;
      },
      // SCI room1.sc: proc1_9
      "proc1_9": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        let _v1: any = acc;
        const _v2: any = rt.global(323);
        acc = _v2;
        const _v3: any = 60;
        acc = _v3;
        const _v4: any = rt.op("==", ...[_v2, _v3]);
        acc = _v4;
        _v1 = _v4;
        if (rt.truth(_v4)) {
          const _v5: any = rt.global(477);
          acc = _v5;
          const _v6: any = await rt.send(_v5, "stop", []);
          acc = _v6;
          _v1 = _v6;
          const _v7: any = 500;
          acc = _v7;
          const _v8: any = 500;
          acc = _v8;
          const _v9: any = 0;
          acc = _v9;
          const _v10: any = rt.global(303);
          acc = _v10;
          const _v11: any = await rt.send(_v10, "posn", [_v7, _v8]);
          acc = _v11;
          const _v12: any = await rt.send(_v10, "cel", [_v9]);
          acc = _v12;
          _v1 = _v12;
          const _v13: any = rt.object(1, "players");
          acc = _v13;
          const _v14: any = await rt.send(_v13, "doit", []);
          acc = _v14;
          _v1 = _v14;
          const _v15: any = 12;
          acc = _v15;
          const _v16: any = 12;
          acc = _v16;
          const _v17: any = rt.object(1, "marble");
          acc = _v17;
          const _v18: any = await rt.send(_v17, "setStep", [_v15, _v16]);
          acc = _v18;
          _v1 = _v18;
          const _v19: any = rt.object(1, "marble");
          acc = _v19;
          const _v20: any = rt.setGlobal(459, _v19);
          acc = _v20;
          _v1 = _v20;
          const _v21: any = 1;
          acc = _v21;
          const _v22: any = rt.setGlobal(460, _v21);
          acc = _v22;
          _v1 = _v22;
          let _v23: any = acc;
          const _v24: any = rt.global(302);
          acc = _v24;
          const _v25: any = await rt.send(_v24, "livesAt", []);
          acc = _v25;
          const _v26: any = 0;
          acc = _v26;
          const _v27: any = rt.op("==", ...[_v25, _v26]);
          acc = _v27;
          _v23 = _v27;
          if (rt.truth(_v27)) {
            const _v28: any = rt.object(992, "MoveTo");
            acc = _v28;
            const _v29: any = 144;
            acc = _v29;
            const _v30: any = 37;
            acc = _v30;
            const _v31: any = rt.object(1, "marbleMoved");
            acc = _v31;
            const _v32: any = rt.object(1, "marble");
            acc = _v32;
            const _v33: any = await rt.send(_v32, "setMotion", [_v28, _v29, _v30, _v31]);
            acc = _v33;
            _v23 = _v33;
          } else {
            const _v34: any = rt.object(992, "MoveTo");
            acc = _v34;
            const _v35: any = 29;
            acc = _v35;
            const _v36: any = 45;
            acc = _v36;
            const _v37: any = rt.object(1, "marbleMoved");
            acc = _v37;
            const _v38: any = rt.object(1, "marble");
            acc = _v38;
            const _v39: any = await rt.send(_v38, "setMotion", [_v34, _v35, _v36, _v37]);
            acc = _v39;
            _v23 = _v39;
          }
          acc = _v23;
          _v1 = _v23;
        }
        acc = _v1;
        return acc;
      },
    },
    exports: {"0": "room1", "1": "tempList", "2": "players", "3": "player1", "4": "player2", "5": "player3", "6": "player4", "7": "marble", "8": "proc1_8", "9": "proc1_9"},
  });
}
