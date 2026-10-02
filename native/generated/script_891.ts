// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/KeyMouse.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: c454fceda23f03c13c59efa2398524ac7fc865c6f1e684b37278902091f16a89
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(891, {
    name: "KeyMouse",
    uses: [0, 999],
    locals: [180, 0, 45, 90, 135, 180, 225, 270, 315],
    objects: [
      {
        name: "KeyMouse",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: true,
        properties: {"listOfCoords": 0, "curItem": 0, "-oldPort-": 0, "prevCursorX": 0, "prevCursorY": 0},
        methods: {
          // SCI KeyMouse.sc: KeyMouse.setPort
          "setPort": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.call(891, "GetPort", [], this);
            acc = _v1;
            const _v2: any = rt.set(this, "-oldPort-", _v1);
            acc = _v2;
            const _v3: any = 0;
            acc = _v3;
            const _v4: any = await rt.call(891, "SetPort", [_v3], this);
            acc = _v4;
            return acc;
          },
          // SCI KeyMouse.sc: KeyMouse.resetPort
          "resetPort": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "-oldPort-");
            acc = _v1;
            const _v2: any = await rt.call(891, "SetPort", [_v1], this);
            acc = _v2;
            return acc;
          },
          // SCI KeyMouse.sc: KeyMouse.setList
          "setList": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = rt.set(this, "listOfCoords", _v1);
            acc = _v2;
            return acc;
          },
          // SCI KeyMouse.sc: KeyMouse.setCursor
          "setCursor": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            let _v2: any = 1;
            if (rt.truth(_v2)) {
              const _v3: any = rt.global(302);
              acc = _v3;
              _v2 = _v3;
            }
            if (rt.truth(_v2)) {
              const _v4: any = rt.global(439);
              acc = _v4;
              _v2 = _v4;
            }
            if (rt.truth(_v2)) {
              const _v5: any = rt.global(443);
              acc = _v5;
              const _v6: any = rt.op("not", ...[_v5]);
              acc = _v6;
              _v2 = _v6;
            }
            if (rt.truth(_v2)) {
              const _v7: any = rt.global(302);
              acc = _v7;
              const _v8: any = await rt.send(_v7, "playing", []);
              acc = _v8;
              const _v9: any = 29;
              acc = _v9;
              const _v10: any = rt.op("==", ...[_v8, _v9]);
              acc = _v10;
              _v2 = _v10;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              return acc;
              _v1 = acc;
            }
            acc = _v1;
            let _v11: any = acc;
            let _v12: any = 0;
            if (!rt.truth(_v12)) {
              const _v13: any = rt.global(447);
              acc = _v13;
              _v12 = _v13;
            }
            if (!rt.truth(_v12)) {
              const _v14: any = rt.global(518);
              acc = _v14;
              _v12 = _v14;
            }
            acc = _v12;
            _v11 = _v12;
            if (rt.truth(_v12)) {
              const _v15: any = this;
              acc = _v15;
              const _v16: any = await rt.send(_v15, "setPort", []);
              acc = _v16;
              _v11 = _v16;
              let _v17: any = acc;
              const _v18: any = (args[0] ?? 0);
              acc = _v18;
              const _v19: any = await rt.call(891, "IsObject", [_v18], this);
              acc = _v19;
              _v17 = _v19;
              if (rt.truth(_v19)) {
                const _v20: any = rt.global(19);
                acc = _v20;
                const _v21: any = 1;
                acc = _v21;
                const _v22: any = (args[0] ?? 0);
                acc = _v22;
                const _v23: any = await rt.send(_v22, "keyMouseX", []);
                acc = _v23;
                const _v24: any = (args[0] ?? 0);
                acc = _v24;
                const _v25: any = await rt.send(_v24, "offsetX", []);
                acc = _v25;
                const _v26: any = rt.op("+", ...[_v23, _v25]);
                acc = _v26;
                const _v27: any = rt.set(this, "prevCursorX", _v26);
                acc = _v27;
                const _v28: any = (args[0] ?? 0);
                acc = _v28;
                const _v29: any = await rt.send(_v28, "keyMouseY", []);
                acc = _v29;
                const _v30: any = (args[0] ?? 0);
                acc = _v30;
                const _v31: any = await rt.send(_v30, "offsetY", []);
                acc = _v31;
                const _v32: any = rt.op("+", ...[_v29, _v31]);
                acc = _v32;
                const _v33: any = rt.set(this, "prevCursorY", _v32);
                acc = _v33;
                const _v34: any = await rt.call(891, "SetCursor", [_v20, _v21, _v27, _v33], this);
                acc = _v34;
                _v17 = _v34;
                const _v35: any = (args[0] ?? 0);
                acc = _v35;
                const _v36: any = rt.set(this, "curItem", _v35);
                acc = _v36;
                _v17 = _v36;
              } else {
                const _v37: any = 0;
                acc = _v37;
                const _v38: any = rt.set(this, "curItem", _v37);
                acc = _v38;
                _v17 = _v38;
              }
              acc = _v17;
              _v11 = _v17;
              const _v39: any = this;
              acc = _v39;
              const _v40: any = await rt.send(_v39, "resetPort", []);
              acc = _v40;
              _v11 = _v40;
            }
            acc = _v11;
            return acc;
          },
          // SCI KeyMouse.sc: KeyMouse.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            let _v1: any = acc;
            let _v2: any = 1;
            if (rt.truth(_v2)) {
              const _v3: any = rt.get(this, "listOfCoords");
              acc = _v3;
              _v2 = _v3;
            }
            if (rt.truth(_v2)) {
              const _v4: any = rt.get(this, "listOfCoords");
              acc = _v4;
              const _v5: any = await rt.send(_v4, "size", []);
              acc = _v5;
              _v2 = _v5;
            }
            if (rt.truth(_v2)) {
              const _v6: any = (args[0] ?? 0);
              acc = _v6;
              const _v7: any = await rt.send(_v6, "claimed", []);
              acc = _v7;
              const _v8: any = rt.op("not", ...[_v7]);
              acc = _v8;
              _v2 = _v8;
            }
            if (rt.truth(_v2)) {
              const _v9: any = 0;
              acc = _v9;
              let _v10: any = _v9;
              let _v11: any = 1;
              if (rt.truth(_v11)) {
                const _v12: any = (args[0] ?? 0);
                acc = _v12;
                const _v13: any = await rt.send(_v12, "message", []);
                acc = _v13;
                _v11 = rt.op("<=", _v10, _v13);
                _v10 = _v13;
              }
              if (rt.truth(_v11)) {
                const _v14: any = 7;
                acc = _v14;
                _v11 = rt.op("<=", _v10, _v14);
                _v10 = _v14;
              }
              acc = _v11;
              _v2 = _v11;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v15: any = (args[0] ?? 0);
              acc = _v15;
              const _v16: any = await rt.send(_v15, "message", []);
              acc = _v16;
              const _v17: any = rt.local(891, (0 + (Number(_v16) & 65535)));
              acc = _v17;
              const _v18: any = (temps[6] = _v17);
              acc = _v18;
              _v1 = _v18;
              const _v19: any = 60;
              acc = _v19;
              const _v20: any = (temps[3] = _v19);
              acc = _v20;
              _v1 = _v20;
              const _v21: any = 400;
              acc = _v21;
              const _v22: any = (temps[4] = _v21);
              acc = _v22;
              _v1 = _v22;
              const _v25: any = 0;
              acc = _v25;
              const _v26: any = (temps[2] = _v25);
              acc = _v26;
              const _v27: any = (temps[5] = _v26);
              acc = _v27;
              _loop23: for (;;) {
                const _v28: any = (temps[5] ?? 0);
                acc = _v28;
                const _v29: any = rt.get(this, "listOfCoords");
                acc = _v29;
                const _v30: any = await rt.send(_v29, "size", []);
                acc = _v30;
                const _v31: any = rt.op("<", ...[_v28, _v30]);
                acc = _v31;
                if (!rt.truth(_v31)) break _loop23;
                _continue24: {
                  const _v32: any = (temps[5] ?? 0);
                  acc = _v32;
                  const _v33: any = rt.get(this, "listOfCoords");
                  acc = _v33;
                  const _v34: any = await rt.send(_v33, "at", [_v32]);
                  acc = _v34;
                  const _v35: any = (temps[1] = _v34);
                  acc = _v35;
                  let _v36: any = acc;
                  let _v37: any = 0;
                  if (!rt.truth(_v37)) {
                    const _v38: any = (args[0] ?? 0);
                    acc = _v38;
                    const _v39: any = await rt.send(_v38, "x", []);
                    acc = _v39;
                    const _v40: any = (temps[1] ?? 0);
                    acc = _v40;
                    const _v41: any = await rt.send(_v40, "keyMouseX", []);
                    acc = _v41;
                    const _v42: any = rt.op("!=", ...[_v39, _v41]);
                    acc = _v42;
                    _v37 = _v42;
                  }
                  if (!rt.truth(_v37)) {
                    const _v43: any = (args[0] ?? 0);
                    acc = _v43;
                    const _v44: any = await rt.send(_v43, "y", []);
                    acc = _v44;
                    const _v45: any = (temps[1] ?? 0);
                    acc = _v45;
                    const _v46: any = await rt.send(_v45, "keyMouseY", []);
                    acc = _v46;
                    const _v47: any = rt.op("!=", ...[_v44, _v46]);
                    acc = _v47;
                    _v37 = _v47;
                  }
                  acc = _v37;
                  _v36 = _v37;
                  if (rt.truth(_v37)) {
                    const _v48: any = (args[0] ?? 0);
                    acc = _v48;
                    const _v49: any = await rt.send(_v48, "x", []);
                    acc = _v49;
                    const _v50: any = (args[0] ?? 0);
                    acc = _v50;
                    const _v51: any = await rt.send(_v50, "y", []);
                    acc = _v51;
                    const _v52: any = (temps[1] ?? 0);
                    acc = _v52;
                    const _v53: any = await rt.send(_v52, "keyMouseX", []);
                    acc = _v53;
                    const _v54: any = (temps[1] ?? 0);
                    acc = _v54;
                    const _v55: any = await rt.send(_v54, "keyMouseY", []);
                    acc = _v55;
                    const _v56: any = await rt.call(891, "GetAngle", [_v49, _v51, _v53, _v55], this);
                    acc = _v56;
                    const _v57: any = (temps[7] = _v56);
                    acc = _v57;
                    _v36 = _v57;
                    const _v58: any = (args[0] ?? 0);
                    acc = _v58;
                    const _v59: any = await rt.send(_v58, "x", []);
                    acc = _v59;
                    const _v60: any = (args[0] ?? 0);
                    acc = _v60;
                    const _v61: any = await rt.send(_v60, "y", []);
                    acc = _v61;
                    const _v62: any = (temps[1] ?? 0);
                    acc = _v62;
                    const _v63: any = await rt.send(_v62, "keyMouseX", []);
                    acc = _v63;
                    const _v64: any = (temps[1] ?? 0);
                    acc = _v64;
                    const _v65: any = await rt.send(_v64, "keyMouseY", []);
                    acc = _v65;
                    const _v66: any = await rt.call(891, "GetDistance", [_v59, _v61, _v63, _v65], this);
                    acc = _v66;
                    const _v67: any = (temps[0] = _v66);
                    acc = _v67;
                    _v36 = _v67;
                    let _v68: any = acc;
                    const _v69: any = (temps[6] ?? 0);
                    acc = _v69;
                    const _v70: any = (temps[7] ?? 0);
                    acc = _v70;
                    const _v71: any = rt.op("-", ...[_v69, _v70]);
                    acc = _v71;
                    const _v72: any = await rt.call(891, "Abs", [_v71], this);
                    acc = _v72;
                    const _v73: any = (temps[8] = _v72);
                    acc = _v73;
                    const _v74: any = 180;
                    acc = _v74;
                    const _v75: any = rt.op(">", ...[_v73, _v74]);
                    acc = _v75;
                    _v68 = _v75;
                    if (rt.truth(_v75)) {
                      const _v76: any = 360;
                      acc = _v76;
                      const _v77: any = (temps[8] ?? 0);
                      acc = _v77;
                      const _v78: any = rt.op("-", ...[_v76, _v77]);
                      acc = _v78;
                      const _v79: any = (temps[8] = _v78);
                      acc = _v79;
                      _v68 = _v79;
                    }
                    acc = _v68;
                    _v36 = _v68;
                    let _v80: any = acc;
                    let _v81: any = 0;
                    if (!rt.truth(_v81)) {
                      const _v82: any = (temps[8] ?? 0);
                      acc = _v82;
                      const _v83: any = (temps[3] ?? 0);
                      acc = _v83;
                      const _v84: any = 10;
                      acc = _v84;
                      const _v85: any = rt.op("-", ...[_v83, _v84]);
                      acc = _v85;
                      const _v86: any = rt.op("<=", ...[_v82, _v85]);
                      acc = _v86;
                      _v81 = _v86;
                    }
                    if (!rt.truth(_v81)) {
                      let _v87: any = 1;
                      if (rt.truth(_v87)) {
                        const _v88: any = (temps[8] ?? 0);
                        acc = _v88;
                        const _v89: any = (temps[3] ?? 0);
                        acc = _v89;
                        const _v90: any = 10;
                        acc = _v90;
                        const _v91: any = rt.op("+", ...[_v89, _v90]);
                        acc = _v91;
                        const _v92: any = rt.op("<=", ...[_v88, _v91]);
                        acc = _v92;
                        _v87 = _v92;
                      }
                      if (rt.truth(_v87)) {
                        const _v93: any = (temps[8] ?? 0);
                        acc = _v93;
                        const _v94: any = (temps[0] ?? 0);
                        acc = _v94;
                        const _v95: any = rt.op("+", ...[_v93, _v94]);
                        acc = _v95;
                        const _v96: any = (temps[3] ?? 0);
                        acc = _v96;
                        const _v97: any = (temps[4] ?? 0);
                        acc = _v97;
                        const _v98: any = rt.op("+", ...[_v96, _v97]);
                        acc = _v98;
                        const _v99: any = rt.op("<", ...[_v95, _v98]);
                        acc = _v99;
                        _v87 = _v99;
                      }
                      acc = _v87;
                      _v81 = _v87;
                    }
                    if (!rt.truth(_v81)) {
                      let _v100: any = 1;
                      if (rt.truth(_v100)) {
                        const _v101: any = (temps[8] ?? 0);
                        acc = _v101;
                        const _v102: any = (temps[3] ?? 0);
                        acc = _v102;
                        const _v103: any = 10;
                        acc = _v103;
                        const _v104: any = rt.op("+", ...[_v102, _v103]);
                        acc = _v104;
                        const _v105: any = rt.op("<=", ...[_v101, _v104]);
                        acc = _v105;
                        _v100 = _v105;
                      }
                      if (rt.truth(_v100)) {
                        const _v106: any = (temps[8] ?? 0);
                        acc = _v106;
                        const _v107: any = (temps[0] ?? 0);
                        acc = _v107;
                        const _v108: any = rt.op("+", ...[_v106, _v107]);
                        acc = _v108;
                        const _v109: any = (temps[3] ?? 0);
                        acc = _v109;
                        const _v110: any = (temps[4] ?? 0);
                        acc = _v110;
                        const _v111: any = rt.op("+", ...[_v109, _v110]);
                        acc = _v111;
                        const _v112: any = rt.op("==", ...[_v108, _v111]);
                        acc = _v112;
                        _v100 = _v112;
                      }
                      if (rt.truth(_v100)) {
                        const _v113: any = (temps[8] ?? 0);
                        acc = _v113;
                        const _v114: any = (temps[3] ?? 0);
                        acc = _v114;
                        const _v115: any = rt.op("<", ...[_v113, _v114]);
                        acc = _v115;
                        _v100 = _v115;
                      }
                      acc = _v100;
                      _v81 = _v100;
                    }
                    acc = _v81;
                    _v80 = _v81;
                    if (rt.truth(_v81)) {
                      const _v116: any = (temps[8] ?? 0);
                      acc = _v116;
                      const _v117: any = (temps[3] = _v116);
                      acc = _v117;
                      _v80 = _v117;
                      const _v118: any = (temps[0] ?? 0);
                      acc = _v118;
                      const _v119: any = (temps[4] = _v118);
                      acc = _v119;
                      _v80 = _v119;
                      const _v120: any = (temps[1] ?? 0);
                      acc = _v120;
                      const _v121: any = (temps[2] = _v120);
                      acc = _v121;
                      _v80 = _v121;
                    }
                    acc = _v80;
                    _v36 = _v80;
                  }
                  acc = _v36;
                }
                const _v122: any = (temps[5] = rt.op("+", (temps[5] ?? 0), 1));
                acc = _v122;
              }
              _v1 = acc;
              let _v123: any = acc;
              const _v124: any = (temps[2] ?? 0);
              acc = _v124;
              _v123 = _v124;
              if (rt.truth(_v124)) {
                const _v125: any = 1;
                acc = _v125;
                const _v126: any = (args[0] ?? 0);
                acc = _v126;
                const _v127: any = await rt.send(_v126, "claimed", [_v125]);
                acc = _v127;
                _v123 = _v127;
                const _v128: any = (temps[2] ?? 0);
                acc = _v128;
                const _v129: any = this;
                acc = _v129;
                const _v130: any = await rt.send(_v129, "setCursor", [_v128]);
                acc = _v130;
                _v123 = _v130;
              }
              acc = _v123;
              _v1 = _v123;
            }
            acc = _v1;
            return acc;
          },
          // SCI KeyMouse.sc: KeyMouse.advance
          "advance": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            let _v2: any = 1;
            if (rt.truth(_v2)) {
              const _v3: any = rt.global(447);
              acc = _v3;
              _v2 = _v3;
            }
            if (rt.truth(_v2)) {
              const _v4: any = rt.get(this, "curItem");
              acc = _v4;
              const _v5: any = rt.get(this, "listOfCoords");
              acc = _v5;
              const _v6: any = await rt.send(_v5, "contains", [_v4]);
              acc = _v6;
              _v2 = _v6;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              let _v7: any = acc;
              const _v8: any = rt.get(this, "curItem");
              acc = _v8;
              const _v9: any = rt.get(this, "listOfCoords");
              acc = _v9;
              const _v10: any = await rt.send(_v9, "indexOf", [_v8]);
              acc = _v10;
              const _v11: any = (temps[0] = _v10);
              acc = _v11;
              const _v12: any = rt.get(this, "listOfCoords");
              acc = _v12;
              const _v13: any = await rt.send(_v12, "size", []);
              acc = _v13;
              const _v14: any = 1;
              acc = _v14;
              const _v15: any = rt.op("-", ...[_v13, _v14]);
              acc = _v15;
              const _v16: any = rt.op("==", ...[_v11, _v15]);
              acc = _v16;
              _v7 = _v16;
              if (rt.truth(_v16)) {
                const _v17: any = -1;
                acc = _v17;
                const _v18: any = (temps[0] = _v17);
                acc = _v18;
                _v7 = _v18;
              }
              acc = _v7;
              _v1 = _v7;
              const _v19: any = this;
              acc = _v19;
              const _v20: any = await rt.send(_v19, "setPort", []);
              acc = _v20;
              _v1 = _v20;
              const _v21: any = (temps[0] ?? 0);
              acc = _v21;
              const _v22: any = 1;
              acc = _v22;
              const _v23: any = rt.op("+", ...[_v21, _v22]);
              acc = _v23;
              const _v24: any = rt.get(this, "listOfCoords");
              acc = _v24;
              const _v25: any = await rt.send(_v24, "at", [_v23]);
              acc = _v25;
              const _v26: any = this;
              acc = _v26;
              const _v27: any = await rt.send(_v26, "setCursor", [_v25]);
              acc = _v27;
              _v1 = _v27;
              const _v28: any = this;
              acc = _v28;
              const _v29: any = await rt.send(_v28, "resetPort", []);
              acc = _v29;
              _v1 = _v29;
            }
            acc = _v1;
            return acc;
          },
          // SCI KeyMouse.sc: KeyMouse.retreat
          "retreat": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            let _v2: any = 1;
            if (rt.truth(_v2)) {
              const _v3: any = rt.global(447);
              acc = _v3;
              _v2 = _v3;
            }
            if (rt.truth(_v2)) {
              const _v4: any = rt.get(this, "curItem");
              acc = _v4;
              const _v5: any = rt.get(this, "listOfCoords");
              acc = _v5;
              const _v6: any = await rt.send(_v5, "contains", [_v4]);
              acc = _v6;
              _v2 = _v6;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              let _v7: any = acc;
              const _v8: any = rt.get(this, "curItem");
              acc = _v8;
              const _v9: any = rt.get(this, "listOfCoords");
              acc = _v9;
              const _v10: any = await rt.send(_v9, "indexOf", [_v8]);
              acc = _v10;
              const _v11: any = (temps[0] = _v10);
              acc = _v11;
              const _v12: any = rt.op("not", ...[_v11]);
              acc = _v12;
              _v7 = _v12;
              if (rt.truth(_v12)) {
                const _v13: any = rt.get(this, "listOfCoords");
                acc = _v13;
                const _v14: any = await rt.send(_v13, "size", []);
                acc = _v14;
                const _v15: any = (temps[0] = _v14);
                acc = _v15;
                _v7 = _v15;
              }
              acc = _v7;
              _v1 = _v7;
              const _v16: any = this;
              acc = _v16;
              const _v17: any = await rt.send(_v16, "setPort", []);
              acc = _v17;
              _v1 = _v17;
              const _v18: any = (temps[0] ?? 0);
              acc = _v18;
              const _v19: any = 1;
              acc = _v19;
              const _v20: any = rt.op("-", ...[_v18, _v19]);
              acc = _v20;
              const _v21: any = rt.get(this, "listOfCoords");
              acc = _v21;
              const _v22: any = await rt.send(_v21, "at", [_v20]);
              acc = _v22;
              const _v23: any = this;
              acc = _v23;
              const _v24: any = await rt.send(_v23, "setCursor", [_v22]);
              acc = _v24;
              _v1 = _v24;
              const _v25: any = this;
              acc = _v25;
              const _v26: any = await rt.send(_v25, "resetPort", []);
              acc = _v26;
              _v1 = _v26;
            }
            acc = _v1;
            return acc;
          },
        },
      },
    ],
    procedures: {
    },
    exports: {},
  });
}
