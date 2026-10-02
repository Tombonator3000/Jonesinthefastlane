// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/employment.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: e89b709c83c1449d8a0206cb006e17136568570325d3f4fb19da2cdf86730b65
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(206, {
    name: "employment",
    uses: [0, 104, 109, 110, 255, 891, 996, 999],
    locals: [0, 10, 10, 10, 20, 20, 20, 20, 20, 30, 30, 30, 30, 30, 30, 30, 30, 40, 40, 40, 40, 40, 40, 40, 40, 50, 50, 50, 50, 50, 50, 60, 60, 60, 60, 70, 70, 0, 10, 10, 10, 10, 20, 20, 20, 20, 20, 20, 30, 30, 30, 30, 30, 30, 30, 40, 40, 40, 40, 40, 40, 40, 40, 50, 50, 50, 50, 50, 50, 60, 60, 60, 70, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 14, 10, 14, 14, 14, 12, 14, 11, 14, 14, 16, 15, 15, 15, 15, 13, 19, 15, 14, 14, 15, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 13, 13, 16, 13, 4, 5, 4, 4, 5, 6, 8, 6, 6, 5, 6, 6, 7, 8, 7, 8, 9, 7, 9, 9, 10, 10, 11, 15, 14, 11, 12, 14, 18, 18, 19, 20, 19, 22, 23, 22, 25, 10, 3, 11, 7, 10, 11, 3, 1, 4, 8, 10, 5, 12, 5, 11, 1, 3, 10, 12, 5, 5, 4, 8, 3, 8, 7, 12, 4, 3, 5, 5, 7, 4, 5, 5, 4, 5, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 3, 1, 1, 2, 3, 2, 3, 4, 2, 3, 4, 2, 2, 4, 3, 2, 3, 3, 5, 5, 6, 3, 4, 7, 8, 5, 10, 36, 36, 36, 36, 36, 35, 36, 36, 36, 35, 36, 36, 35, 36, 34, 36, 36, 35, 34, 35, 36, 35, 36, 35, 34, 35, 34, 34, 34, 34, 36, 35, 34, 34, 34, 34, 34],
    objects: [
      {
        name: "JobDItem",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: true,
        properties: {"state": 35, "visitTime": 4, "dependibility": 10, "experience": 10, "education": 0, "education2": 0, "jobNum": 0, "uniform": 36},
        methods: {
          // SCI employment.sc: JobDItem.qualify
          "qualify": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            const _v1: any = rt.global(302);
            acc = _v1;
            const _v2: any = await rt.send(_v1, "numDegrees", []);
            acc = _v2;
            const _v3: any = 8;
            acc = _v3;
            const _v4: any = rt.op("*", ...[_v2, _v3]);
            acc = _v4;
            const _v5: any = 10;
            acc = _v5;
            const _v6: any = rt.op("+", ...[_v4, _v5]);
            acc = _v6;
            const _v7: any = (temps[0] = _v6);
            acc = _v7;
            let _v8: any = acc;
            let _v9: any = 0;
            if (!rt.truth(_v9)) {
              const _v10: any = rt.get(this, "education");
              acc = _v10;
              const _v11: any = rt.op("not", ...[_v10]);
              acc = _v11;
              _v9 = _v11;
            }
            if (!rt.truth(_v9)) {
              const _v12: any = rt.get(this, "education");
              acc = _v12;
              const _v13: any = rt.global(302);
              acc = _v13;
              const _v14: any = await rt.send(_v13, "hasDegree", [_v12]);
              acc = _v14;
              _v9 = _v14;
            }
            acc = _v9;
            _v8 = _v9;
            if (rt.truth(_v9)) {
              let _v15: any = 0;
              if (!rt.truth(_v15)) {
                const _v16: any = rt.get(this, "education2");
                acc = _v16;
                const _v17: any = rt.op("not", ...[_v16]);
                acc = _v17;
                _v15 = _v17;
              }
              if (!rt.truth(_v15)) {
                const _v18: any = rt.get(this, "education2");
                acc = _v18;
                const _v19: any = rt.global(302);
                acc = _v19;
                const _v20: any = await rt.send(_v19, "hasDegree", [_v18]);
                acc = _v20;
                _v15 = _v20;
              }
              acc = _v15;
              _v8 = _v15;
            }
            acc = _v8;
            const _v21: any = rt.setGlobal(325, _v8);
            acc = _v21;
            let _v22: any = acc;
            const _v23: any = rt.global(325);
            acc = _v23;
            _v22 = _v23;
            if (rt.truth(_v23)) {
              const _v24: any = 0;
              acc = _v24;
              _v22 = _v24;
            } else {
              const _v25: any = rt.get(this, "education");
              acc = _v25;
              _v22 = _v25;
            }
            acc = _v22;
            let _v26: any = acc;
            const _v27: any = rt.global(325);
            acc = _v27;
            _v26 = _v27;
            if (rt.truth(_v27)) {
              const _v28: any = 0;
              acc = _v28;
              _v26 = _v28;
            } else {
              const _v29: any = rt.get(this, "education2");
              acc = _v29;
              _v26 = _v29;
            }
            acc = _v26;
            const _v30: any = rt.global(302);
            acc = _v30;
            const _v31: any = await rt.send(_v30, "needEd1", [_v22]);
            acc = _v31;
            const _v32: any = await rt.send(_v30, "needEd2", [_v26]);
            acc = _v32;
            const _v33: any = rt.global(302);
            acc = _v33;
            const _v34: any = await rt.send(_v33, "dependibility", []);
            acc = _v34;
            const _v35: any = rt.get(this, "dependibility");
            acc = _v35;
            let _v36: any = acc;
            const _v37: any = rt.get(this, "dependibility");
            acc = _v37;
            const _v38: any = 10;
            acc = _v38;
            const _v39: any = rt.op("==", ...[_v37, _v38]);
            acc = _v39;
            _v36 = _v39;
            if (rt.truth(_v39)) {
              const _v40: any = 10;
              acc = _v40;
              _v36 = _v40;
            } else {
              const _v41: any = 0;
              acc = _v41;
              _v36 = _v41;
            }
            acc = _v36;
            const _v42: any = rt.op("-", ...[_v35, _v36]);
            acc = _v42;
            const _v43: any = rt.op(">=", ...[_v34, _v42]);
            acc = _v43;
            const _v44: any = rt.setGlobal(326, _v43);
            acc = _v44;
            const _v45: any = rt.global(302);
            acc = _v45;
            const _v46: any = await rt.send(_v45, "experience", []);
            acc = _v46;
            const _v47: any = rt.get(this, "experience");
            acc = _v47;
            const _v48: any = rt.op(">=", ...[_v46, _v47]);
            acc = _v48;
            const _v49: any = rt.setGlobal(327, _v48);
            acc = _v49;
            const _v50: any = 1;
            acc = _v50;
            const _v51: any = 100;
            acc = _v51;
            const _v52: any = await rt.call(206, "Random", [_v50, _v51], this);
            acc = _v52;
            const _v53: any = rt.global(302);
            acc = _v53;
            const _v54: any = await rt.send(_v53, "dependibility", []);
            acc = _v54;
            const _v55: any = rt.global(302);
            acc = _v55;
            const _v56: any = await rt.send(_v55, "experience", []);
            acc = _v56;
            const _v57: any = (temps[0] ?? 0);
            acc = _v57;
            const _v58: any = rt.op("+", ...[_v54, _v56, _v57]);
            acc = _v58;
            const _v59: any = 3;
            acc = _v59;
            const _v60: any = rt.op("/", ...[_v58, _v59]);
            acc = _v60;
            const _v61: any = 30;
            acc = _v61;
            const _v62: any = rt.op("+", ...[_v60, _v61]);
            acc = _v62;
            const _v63: any = rt.op("<=", ...[_v52, _v62]);
            acc = _v63;
            const _v64: any = rt.setGlobal(328, _v63);
            acc = _v64;
            const _v65: any = this;
            acc = _v65;
            const _v66: any = await rt.send(_v65, "turnedDown", []);
            acc = _v66;
            let _v67: any = acc;
            const _v68: any = rt.get(this, "indexNum");
            acc = _v68;
            const _v69: any = 44;
            acc = _v69;
            const _v70: any = rt.op("==", ...[_v68, _v69]);
            acc = _v70;
            _v67 = _v70;
            if (rt.truth(_v70)) {
              const _v71: any = 1;
              acc = _v71;
              const _v72: any = rt.setGlobal(328, _v71);
              acc = _v72;
              _v67 = _v72;
            }
            acc = _v67;
            let _v73: any = acc;
            let _v74: any = 1;
            if (rt.truth(_v74)) {
              const _v75: any = rt.global(325);
              acc = _v75;
              _v74 = _v75;
            }
            if (rt.truth(_v74)) {
              const _v76: any = rt.global(326);
              acc = _v76;
              _v74 = _v76;
            }
            if (rt.truth(_v74)) {
              const _v77: any = rt.global(327);
              acc = _v77;
              _v74 = _v77;
            }
            if (rt.truth(_v74)) {
              const _v78: any = rt.global(328);
              acc = _v78;
              _v74 = _v78;
            }
            acc = _v74;
            _v73 = _v74;
            if (rt.truth(_v74)) {
              const _v79: any = rt.get(this, "key");
              acc = _v79;
              const _v80: any = rt.global(501);
              acc = _v80;
              const _v81: any = rt.global(302);
              acc = _v81;
              const _v82: any = await rt.send(_v81, "jobKey", [_v79]);
              acc = _v82;
              const _v83: any = await rt.send(_v81, "jobT", [_v80]);
              acc = _v83;
              _v73 = _v83;
              const _v84: any = 1;
              acc = _v84;
              return _v84;
              _v73 = acc;
            }
            acc = _v73;
            const _v85: any = 0;
            acc = _v85;
            return _v85;
            return acc;
          },
          // SCI employment.sc: JobDItem.turnedDown
          "turnedDown": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            _branch2: {
              const _v3: any = argc;
              acc = _v3;
              _v1 = _v3;
              acc = _v1;
              if (rt.truth(_v1)) {
                let _v4: any = acc;
                const _v5: any = rt.global(370);
                acc = _v5;
                _v4 = _v5;
                if (rt.truth(_v5)) {
                  const _v8: any = 0;
                  acc = _v8;
                  const _v9: any = (temps[0] = _v8);
                  acc = _v9;
                  _loop6: for (;;) {
                    const _v10: any = (temps[0] ?? 0);
                    acc = _v10;
                    const _v11: any = rt.global(370);
                    acc = _v11;
                    const _v12: any = rt.op("<", ...[_v10, _v11]);
                    acc = _v12;
                    if (!rt.truth(_v12)) break _loop6;
                    _continue7: {
                      let _v13: any = acc;
                      const _v14: any = (temps[0] ?? 0);
                      acc = _v14;
                      const _v15: any = rt.global((330 + (Number(_v14) & 65535)));
                      acc = _v15;
                      const _v16: any = (args[0] ?? 0);
                      acc = _v16;
                      const _v17: any = rt.op("==", ...[_v15, _v16]);
                      acc = _v17;
                      _v13 = _v17;
                      if (rt.truth(_v17)) {
                        return acc;
                        _v13 = acc;
                      }
                      acc = _v13;
                    }
                    const _v18: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
                    acc = _v18;
                  }
                  _v4 = acc;
                }
                acc = _v4;
                _v1 = _v4;
                const _v19: any = (args[0] ?? 0);
                acc = _v19;
                const _v20: any = rt.global(370);
                acc = _v20;
                const _v21: any = rt.setGlobal((330 + (Number(_v20) & 65535)), _v19);
                acc = _v21;
                _v1 = _v21;
                const _v22: any = rt.setGlobal(370, rt.op("+", rt.global(370), 1));
                acc = _v22;
                _v1 = _v22;
                break _branch2;
              }
              const _v23: any = rt.global(370);
              acc = _v23;
              _v1 = _v23;
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v26: any = 0;
                acc = _v26;
                const _v27: any = (temps[0] = _v26);
                acc = _v27;
                _loop24: for (;;) {
                  const _v28: any = (temps[0] ?? 0);
                  acc = _v28;
                  const _v29: any = rt.global(370);
                  acc = _v29;
                  const _v30: any = rt.op("<", ...[_v28, _v29]);
                  acc = _v30;
                  if (!rt.truth(_v30)) break _loop24;
                  _continue25: {
                    let _v31: any = acc;
                    const _v32: any = (temps[0] ?? 0);
                    acc = _v32;
                    const _v33: any = rt.global((330 + (Number(_v32) & 65535)));
                    acc = _v33;
                    const _v34: any = rt.get(this, "jobNum");
                    acc = _v34;
                    const _v35: any = rt.op("==", ...[_v33, _v34]);
                    acc = _v35;
                    _v31 = _v35;
                    if (rt.truth(_v35)) {
                      const _v36: any = 0;
                      acc = _v36;
                      const _v37: any = rt.setGlobal(328, _v36);
                      acc = _v37;
                      _v31 = _v37;
                      return acc;
                      _v31 = acc;
                    }
                    acc = _v31;
                  }
                  const _v38: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
                  acc = _v38;
                }
                _v1 = acc;
                break _branch2;
              }
            }
            acc = _v1;
            return acc;
          },
          // SCI employment.sc: JobDItem.doFormat
          "doFormat": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "price");
            acc = _v2;
            const _v3: any = 10;
            acc = _v3;
            const _v4: any = rt.op("<", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = (args[0] ?? 0);
              acc = _v5;
              const _v6: any = 206;
              acc = _v6;
              const _v7: any = 14;
              acc = _v7;
              const _v8: any = rt.get(this, "text");
              acc = _v8;
              const _v9: any = rt.get(this, "price");
              acc = _v9;
              const _v10: any = await rt.call(206, "Format", [_v5, _v6, _v7, _v8, _v9], this);
              acc = _v10;
              _v1 = _v10;
            } else {
              const _v11: any = (args[0] ?? 0);
              acc = _v11;
              const _v12: any = 206;
              acc = _v12;
              const _v13: any = 15;
              acc = _v13;
              const _v14: any = rt.get(this, "text");
              acc = _v14;
              const _v15: any = rt.get(this, "price");
              acc = _v15;
              const _v16: any = await rt.call(206, "Format", [_v11, _v12, _v13, _v14, _v15], this);
              acc = _v16;
              _v1 = _v16;
            }
            acc = _v1;
            return acc;
          },
          // SCI employment.sc: JobDItem.doit
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
            const _v4: any = -2;
            acc = _v4;
            const _v5: any = rt.setGlobal(433, _v4);
            acc = _v5;
            let _v6: any = acc;
            const _v7: any = rt.global(323);
            acc = _v7;
            const _v8: any = 60;
            acc = _v8;
            const _v9: any = rt.op("!=", ...[_v7, _v8]);
            acc = _v9;
            _v6 = _v9;
            if (rt.truth(_v9)) {
              const _v10: any = rt.get(this, "visitTime");
              acc = _v10;
              const _v11: any = rt.global(417);
              acc = _v11;
              const _v12: any = await rt.send(_v11, "doit", [_v10]);
              acc = _v12;
              _v6 = _v12;
              const _v13: any = this;
              acc = _v13;
              const _v14: any = await rt.send(_v13, "qualify", []);
              acc = _v14;
              const _v15: any = (temps[0] = _v14);
              acc = _v15;
              _v6 = _v15;
              let _v16: any = acc;
              _branch17: {
                let _v18: any = 1;
                if (rt.truth(_v18)) {
                  const _v19: any = rt.global(302);
                  acc = _v19;
                  const _v20: any = await rt.send(_v19, "worksAt", []);
                  acc = _v20;
                  const _v21: any = rt.global(419);
                  acc = _v21;
                  const _v22: any = rt.op("==", ...[_v20, _v21]);
                  acc = _v22;
                  _v18 = _v22;
                }
                if (rt.truth(_v18)) {
                  const _v23: any = rt.global(302);
                  acc = _v23;
                  const _v24: any = await rt.send(_v23, "occupation", []);
                  acc = _v24;
                  const _v25: any = rt.get(this, "indexNum");
                  acc = _v25;
                  const _v26: any = rt.op("==", ...[_v24, _v25]);
                  acc = _v26;
                  _v18 = _v26;
                }
                acc = _v18;
                _v16 = _v18;
                acc = _v16;
                if (rt.truth(_v16)) {
                  let _v27: any = acc;
                  _branch28: {
                    const _v29: any = rt.global(302);
                    acc = _v29;
                    const _v30: any = await rt.send(_v29, "wage", []);
                    acc = _v30;
                    const _v31: any = rt.get(this, "price");
                    acc = _v31;
                    const _v32: any = rt.op(">", ...[_v30, _v31]);
                    acc = _v32;
                    _v27 = _v32;
                    acc = _v27;
                    if (rt.truth(_v27)) {
                      const _v33: any = 0;
                      acc = _v33;
                      const _v34: any = rt.setGlobal(433, _v33);
                      acc = _v34;
                      _v27 = _v34;
                      break _branch28;
                    }
                    const _v35: any = rt.global(302);
                    acc = _v35;
                    const _v36: any = await rt.send(_v35, "wage", []);
                    acc = _v36;
                    const _v37: any = rt.get(this, "price");
                    acc = _v37;
                    const _v38: any = rt.op("==", ...[_v36, _v37]);
                    acc = _v38;
                    _v27 = _v38;
                    acc = _v27;
                    if (rt.truth(_v27)) {
                      const _v39: any = 1;
                      acc = _v39;
                      const _v40: any = rt.setGlobal(433, _v39);
                      acc = _v40;
                      _v27 = _v40;
                      break _branch28;
                    }
                    const _v41: any = rt.global(302);
                    acc = _v41;
                    const _v42: any = await rt.send(_v41, "dependibility", []);
                    acc = _v42;
                    const _v43: any = rt.get(this, "dependibility");
                    acc = _v43;
                    const _v44: any = 5;
                    acc = _v44;
                    const _v45: any = rt.global(302);
                    acc = _v45;
                    const _v46: any = await rt.send(_v45, "raisesGiven", []);
                    acc = _v46;
                    const _v47: any = rt.op("*", ...[_v44, _v46]);
                    acc = _v47;
                    const _v48: any = rt.op("+", ...[_v43, _v47]);
                    acc = _v48;
                    const _v49: any = rt.op(">=", ...[_v42, _v48]);
                    acc = _v49;
                    _v27 = _v49;
                    acc = _v27;
                    if (rt.truth(_v27)) {
                      const _v50: any = 3;
                      acc = _v50;
                      const _v51: any = await rt.call(0, "proc0_13", [_v50], this);
                      acc = _v51;
                      _v27 = _v51;
                      const _v52: any = rt.global(302);
                      acc = _v52;
                      const _v53: any = await rt.send(_v52, "raisesGiven", []);
                      acc = _v53;
                      const _v54: any = 1;
                      acc = _v54;
                      const _v55: any = rt.op("+", ...[_v53, _v54]);
                      acc = _v55;
                      const _v56: any = rt.global(302);
                      acc = _v56;
                      const _v57: any = await rt.send(_v56, "raisesGiven", [_v55]);
                      acc = _v57;
                      _v27 = _v57;
                      const _v58: any = rt.get(this, "price");
                      acc = _v58;
                      const _v59: any = rt.global(302);
                      acc = _v59;
                      const _v60: any = await rt.send(_v59, "wage", [_v58]);
                      acc = _v60;
                      _v27 = _v60;
                      const _v61: any = 2;
                      acc = _v61;
                      const _v62: any = rt.setGlobal(433, _v61);
                      acc = _v62;
                      _v27 = _v62;
                      break _branch28;
                    }
                    const _v63: any = 3;
                    acc = _v63;
                    const _v64: any = rt.setGlobal(433, _v63);
                    acc = _v64;
                    _v27 = _v64;
                    break _branch28;
                  }
                  acc = _v27;
                  _v16 = _v27;
                  break _branch17;
                }
                const _v65: any = (temps[0] ?? 0);
                acc = _v65;
                _v16 = _v65;
                acc = _v16;
                if (rt.truth(_v16)) {
                  const _v66: any = 1;
                  acc = _v66;
                  const _v67: any = rt.setGlobal(438, _v66);
                  acc = _v67;
                  _v16 = _v67;
                  const _v68: any = 0;
                  acc = _v68;
                  const _v69: any = rt.global(302);
                  acc = _v69;
                  const _v70: any = await rt.send(_v69, "experience", []);
                  acc = _v70;
                  const _v71: any = 2;
                  acc = _v71;
                  const _v72: any = rt.op("+", ...[_v70, _v71]);
                  acc = _v72;
                  const _v73: any = rt.get(this, "experience");
                  acc = _v73;
                  const _v74: any = 10;
                  acc = _v74;
                  let _v75: any = acc;
                  const _v76: any = rt.get(this, "experience");
                  acc = _v76;
                  const _v77: any = rt.op("not", ...[_v76]);
                  acc = _v77;
                  _v75 = _v77;
                  if (rt.truth(_v77)) {
                    const _v78: any = 10;
                    acc = _v78;
                    _v75 = _v78;
                  } else {
                    const _v79: any = 0;
                    acc = _v79;
                    _v75 = _v79;
                  }
                  acc = _v75;
                  const _v80: any = rt.op("+", ...[_v73, _v74, _v75]);
                  acc = _v80;
                  const _v81: any = rt.get(this, "price");
                  acc = _v81;
                  const _v82: any = rt.get(this, "basePrice");
                  acc = _v82;
                  const _v83: any = rt.global(419);
                  acc = _v83;
                  const _v84: any = rt.get(this, "indexNum");
                  acc = _v84;
                  const _v85: any = rt.get(this, "dependibility");
                  acc = _v85;
                  let _v86: any = acc;
                  const _v87: any = rt.global(302);
                  acc = _v87;
                  const _v88: any = await rt.send(_v87, "dependibility", []);
                  acc = _v88;
                  const _v89: any = 10;
                  acc = _v89;
                  const _v90: any = rt.op("<", ...[_v88, _v89]);
                  acc = _v90;
                  _v86 = _v90;
                  if (rt.truth(_v90)) {
                    const _v91: any = 10;
                    acc = _v91;
                    _v86 = _v91;
                  } else {
                    const _v92: any = rt.global(302);
                    acc = _v92;
                    const _v93: any = await rt.send(_v92, "dependibility", []);
                    acc = _v93;
                    _v86 = _v93;
                  }
                  acc = _v86;
                  const _v94: any = rt.get(this, "uniform");
                  acc = _v94;
                  const _v95: any = rt.global(302);
                  acc = _v95;
                  const _v96: any = await rt.send(_v95, "raisesGiven", [_v68]);
                  acc = _v96;
                  const _v97: any = await rt.send(_v95, "experience", [_v72]);
                  acc = _v97;
                  const _v98: any = await rt.send(_v95, "maxExperience", [_v80]);
                  acc = _v98;
                  const _v99: any = await rt.send(_v95, "wage", [_v81]);
                  acc = _v99;
                  const _v100: any = await rt.send(_v95, "baseWage", [_v82]);
                  acc = _v100;
                  const _v101: any = await rt.send(_v95, "worksAt", [_v83]);
                  acc = _v101;
                  const _v102: any = await rt.send(_v95, "occupation", [_v84]);
                  acc = _v102;
                  const _v103: any = await rt.send(_v95, "minDepend", [_v85]);
                  acc = _v103;
                  const _v104: any = await rt.send(_v95, "dependibility", [_v86]);
                  acc = _v104;
                  const _v105: any = await rt.send(_v95, "uniform", [_v94]);
                  acc = _v105;
                  _v16 = _v105;
                  let _v106: any = acc;
                  const _v107: any = rt.global(302);
                  acc = _v107;
                  const _v108: any = await rt.send(_v107, "wage", []);
                  acc = _v108;
                  _v106 = _v108;
                  if (rt.truth(_v108)) {
                    const _v109: any = rt.global(302);
                    acc = _v109;
                    const _v110: any = await rt.send(_v109, "dependibility", []);
                    acc = _v110;
                    const _v111: any = 8;
                    acc = _v111;
                    const _v112: any = rt.op("/", ...[_v110, _v111]);
                    acc = _v112;
                    const _v113: any = 10;
                    acc = _v113;
                    const _v114: any = rt.op("*", ...[_v112, _v113]);
                    acc = _v114;
                    _v106 = _v114;
                  } else {
                    const _v115: any = 0;
                    acc = _v115;
                    _v106 = _v115;
                  }
                  acc = _v106;
                  const _v116: any = rt.global(302);
                  acc = _v116;
                  const _v117: any = await rt.send(_v116, "carStat", [_v106]);
                  acc = _v117;
                  _v16 = _v117;
                  let _v118: any = acc;
                  const _v119: any = rt.global(302);
                  acc = _v119;
                  const _v120: any = await rt.send(_v119, "carStat", []);
                  acc = _v120;
                  const _v121: any = 100;
                  acc = _v121;
                  const _v122: any = rt.op(">", ...[_v120, _v121]);
                  acc = _v122;
                  _v118 = _v122;
                  if (rt.truth(_v122)) {
                    const _v123: any = 100;
                    acc = _v123;
                    const _v124: any = rt.global(302);
                    acc = _v124;
                    const _v125: any = await rt.send(_v124, "carStat", [_v123]);
                    acc = _v125;
                    _v118 = _v125;
                  }
                  acc = _v118;
                  _v16 = _v118;
                  const _v126: any = 3;
                  acc = _v126;
                  const _v127: any = await rt.call(0, "proc0_13", [_v126], this);
                  acc = _v127;
                  _v16 = _v127;
                  const _v128: any = 4;
                  acc = _v128;
                  const _v129: any = rt.setGlobal(433, _v128);
                  acc = _v129;
                  _v16 = _v129;
                  break _branch17;
                }
                let _v130: any = acc;
                let _v131: any = 1;
                if (rt.truth(_v131)) {
                  const _v132: any = rt.global(325);
                  acc = _v132;
                  _v131 = _v132;
                }
                if (rt.truth(_v131)) {
                  const _v133: any = rt.global(326);
                  acc = _v133;
                  _v131 = _v133;
                }
                if (rt.truth(_v131)) {
                  const _v134: any = rt.global(327);
                  acc = _v134;
                  _v131 = _v134;
                }
                if (rt.truth(_v131)) {
                  const _v135: any = rt.global(328);
                  acc = _v135;
                  const _v136: any = rt.op("not", ...[_v135]);
                  acc = _v136;
                  _v131 = _v136;
                }
                acc = _v131;
                _v130 = _v131;
                if (rt.truth(_v131)) {
                  const _v137: any = rt.get(this, "jobNum");
                  acc = _v137;
                  const _v138: any = this;
                  acc = _v138;
                  const _v139: any = await rt.send(_v138, "turnedDown", [_v137]);
                  acc = _v139;
                  _v130 = _v139;
                }
                acc = _v130;
                _v16 = _v130;
                const _v140: any = -1;
                acc = _v140;
                const _v141: any = rt.setGlobal(433, _v140);
                acc = _v141;
                _v16 = _v141;
                break _branch17;
              }
              acc = _v16;
              _v6 = _v16;
            } else {
              const _v142: any = 5;
              acc = _v142;
              const _v143: any = rt.setGlobal(433, _v142);
              acc = _v143;
              _v6 = _v143;
            }
            acc = _v6;
            const _v144: any = rt.get(this, "value");
            acc = _v144;
            return _v144;
            return acc;
          },
        },
      },
      {
        name: "JobScript",
        className: "DialogScript",
        parent: {"script": 110, "name": "DialogScript"},
        isClass: true,
        properties: {},
        methods: {
          // SCI employment.sc: JobScript.handleEvent
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
              const _v15: any = rt.get(this, "state");
              acc = _v15;
              _branch16: {
                const _v17: any = 2;
                acc = _v17;
                _v14 = rt.op("==", _v15, _v17);
                acc = _v14;
                if (rt.truth(_v14)) {
                  const _v18: any = rt.global(436);
                  acc = _v18;
                  const _v19: any = (args[0] ?? 0);
                  acc = _v19;
                  const _v20: any = await rt.send(_v19, "message", [_v18]);
                  acc = _v20;
                  _v14 = _v20;
                  break _branch16;
                }
                const _v21: any = (args[0] ?? 0);
                acc = _v21;
                const _v22: any = 0;
                acc = _v22;
                const _v23: any = await rt.superSend(this, {"script": 206, "name": "JobScript"}, "handleEvent", [_v21, _v22]);
                acc = _v23;
                _v14 = _v23;
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
        name: "employment",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI employment.sc: employment.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = rt.global(518);
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = 131;
              acc = _v4;
              const _v5: any = 206;
              acc = _v5;
              const _v6: any = await rt.call(206, "Load", [_v4, _v5], this);
              acc = _v6;
              _v1 = _v6;
              const _v7: any = 1;
              acc = _v7;
              const _v8: any = await rt.call(0, "proc0_17", [_v7], this);
              acc = _v8;
              _v1 = _v8;
              const _v9: any = rt.object(206, "dialogKeyMouse");
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
              const _v15: any = 2;
              acc = _v15;
              const _v16: any = rt.setGlobal(440, _v15);
              acc = _v16;
              _v1 = _v16;
              const _v17: any = 205;
              acc = _v17;
              const _v18: any = rt.setGlobal(441, _v17);
              acc = _v18;
              _v1 = _v18;
              const _v19: any = 95;
              acc = _v19;
              const _v20: any = rt.setGlobal(442, _v19);
              acc = _v20;
              _v1 = _v20;
              const _v21: any = -1;
              acc = _v21;
              const _v22: any = rt.setGlobal(501, _v21);
              acc = _v22;
              _v1 = _v22;
              const _v23: any = -2;
              acc = _v23;
              const _v24: any = rt.setGlobal(433, _v23);
              acc = _v24;
              _v1 = _v24;
              let _v25: any = acc;
              const _v26: any = rt.global(534);
              acc = _v26;
              const _v27: any = 2;
              acc = _v27;
              const _v28: any = rt.op("<", ...[_v26, _v27]);
              acc = _v28;
              _v25 = _v28;
              if (rt.truth(_v28)) {
                const _v29: any = 128;
                acc = _v29;
                const _v30: any = rt.object(206, "theTalker");
                acc = _v30;
                const _v31: any = await rt.send(_v30, "view", []);
                acc = _v31;
                const _v32: any = await rt.call(206, "Load", [_v29, _v31], this);
                acc = _v32;
                _v25 = _v32;
              }
              acc = _v25;
              _v1 = _v25;
              const _v33: any = (args[0] ?? 0);
              acc = _v33;
              const _v34: any = rt.set(this, "client", _v33);
              acc = _v34;
              _v1 = _v34;
              const _v35: any = 2;
              acc = _v35;
              const _v36: any = rt.global(417);
              acc = _v36;
              const _v37: any = await rt.send(_v36, "doit", [_v35]);
              acc = _v37;
              _v1 = _v37;
              const _v38: any = 6;
              acc = _v38;
              const _v39: any = rt.setGlobal(400, _v38);
              acc = _v39;
              _v1 = _v39;
              const _v40: any = 1;
              acc = _v40;
              const _v41: any = rt.setGlobal(402, _v40);
              acc = _v41;
              _v1 = _v41;
              const _v42: any = 37;
              acc = _v42;
              const _v43: any = rt.setGlobal(437, _v42);
              acc = _v43;
              _v1 = _v43;
              let _v44: any = acc;
              const _v45: any = rt.global(302);
              acc = _v45;
              const _v46: any = await rt.send(_v45, "playing", []);
              acc = _v46;
              const _v47: any = 29;
              acc = _v47;
              const _v48: any = rt.op("==", ...[_v46, _v47]);
              acc = _v48;
              _v44 = _v48;
              if (rt.truth(_v48)) {
                const _v49: any = rt.object(206, "computerScript");
                acc = _v49;
                const _v50: any = this;
                acc = _v50;
                const _v51: any = await rt.send(_v50, "setScript", [_v49]);
                acc = _v51;
                _v44 = _v51;
                const _v52: any = rt.object(206, "computerScript");
                acc = _v52;
                const _v53: any = await rt.send(_v52, "cue", []);
                acc = _v53;
                _v44 = _v53;
              }
              acc = _v44;
              _v1 = _v44;
              const _v54: any = rt.object(206, "theTalker");
              acc = _v54;
              const _v55: any = rt.setGlobal(413, _v54);
              acc = _v55;
              _v1 = _v55;
              const _v56: any = rt.global(59);
              acc = _v56;
              const _v57: any = rt.object(206, "background");
              acc = _v57;
              const _v58: any = rt.object(206, "theTalker");
              acc = _v58;
              const _v59: any = rt.object(206, "discountStore");
              acc = _v59;
              const _v60: any = rt.object(206, "fastFoodStore");
              acc = _v60;
              const _v61: any = rt.object(206, "clothingStore");
              acc = _v61;
              const _v62: any = rt.object(206, "applianceStore");
              acc = _v62;
              const _v63: any = rt.object(206, "theUniversity");
              acc = _v63;
              const _v64: any = rt.object(206, "theFactory");
              acc = _v64;
              const _v65: any = rt.object(206, "theBank");
              acc = _v65;
              const _v66: any = rt.object(206, "theMarket");
              acc = _v66;
              const _v67: any = rt.object(206, "theRentOffice");
              acc = _v67;
              const _v68: any = rt.object(206, "exitButton");
              acc = _v68;
              const _v69: any = 102;
              acc = _v69;
              const _v70: any = 1;
              acc = _v70;
              const _v71: any = 153;
              acc = _v71;
              const _v72: any = 69;
              acc = _v72;
              const _v73: any = 44;
              acc = _v73;
              const _v74: any = 0;
              acc = _v74;
              const _v75: any = 15;
              acc = _v75;
              const _v76: any = this;
              acc = _v76;
              const _v77: any = await rt.send(_v76, "window", [_v56]);
              acc = _v77;
              const _v78: any = await rt.send(_v76, "add", [_v57, _v58, _v59, _v60, _v61, _v62, _v63, _v64, _v65, _v66, _v67, _v68]);
              acc = _v78;
              const _v79: any = await rt.send(_v76, "eachElementDo", [_v69, _v70]);
              acc = _v79;
              const _v80: any = await rt.send(_v76, "eachElementDo", [_v71]);
              acc = _v80;
              const _v81: any = await rt.send(_v76, "moveTo", [_v72, _v73]);
              acc = _v81;
              const _v82: any = await rt.send(_v76, "open", [_v74, _v75]);
              acc = _v82;
              _v1 = _v82;
              const _v83: any = 43;
              acc = _v83;
              const _v84: any = rt.global(477);
              acc = _v84;
              const _v85: any = await rt.send(_v84, "playBed", [_v83]);
              acc = _v85;
              _v1 = _v85;
              const _v86: any = rt.get(this, "keyMouseList");
              acc = _v86;
              const _v87: any = rt.object(891, "KeyMouse");
              acc = _v87;
              const _v88: any = await rt.send(_v87, "setList", [_v86]);
              acc = _v88;
              _v1 = _v88;
              const _v89: any = this;
              acc = _v89;
              const _v90: any = rt.get(this, "keyMouseList");
              acc = _v90;
              const _v91: any = rt.object(206, "discountStore");
              acc = _v91;
              const _v92: any = await rt.call(0, "proc0_9", [_v89, _v90, _v91], this);
              acc = _v92;
              _v1 = _v92;
              const _v93: any = rt.global(302);
              acc = _v93;
              const _v94: any = await rt.send(_v93, "cash", []);
              acc = _v94;
              const _v95: any = 1;
              acc = _v95;
              const _v96: any = rt.op("-", ...[_v94, _v95]);
              acc = _v96;
              const _v97: any = rt.global(305);
              acc = _v97;
              const _v98: any = await rt.send(_v97, "setSize", []);
              acc = _v98;
              const _v99: any = await rt.send(_v97, "value", [_v96]);
              acc = _v99;
              const _v100: any = await rt.send(_v97, "draw", []);
              acc = _v100;
              _v1 = _v100;
              const _v101: any = 1;
              acc = _v101;
              const _v102: any = rt.object(996, "User");
              acc = _v102;
              const _v103: any = await rt.send(_v102, "canControl", [_v101]);
              acc = _v103;
              _v1 = _v103;
              let _v104: any = acc;
              const _v105: any = await rt.call(0, "proc0_14", [], this);
              acc = _v105;
              _v104 = _v105;
              if (rt.truth(_v105)) {
                const _v106: any = rt.global(413);
                acc = _v106;
                const _v107: any = await rt.send(_v106, "init", []);
                acc = _v107;
                _v104 = _v107;
                const _v108: any = 206;
                acc = _v108;
                const _v109: any = 6;
                acc = _v109;
                const _v110: any = 12;
                acc = _v110;
                const _v111: any = await rt.call(206, "Random", [_v109, _v110], this);
                acc = _v111;
                const _v112: any = 310;
                acc = _v112;
                const _v113: any = rt.global(413);
                acc = _v113;
                const _v114: any = rt.global(440);
                acc = _v114;
                const _v115: any = rt.global(441);
                acc = _v115;
                const _v116: any = rt.global(442);
                acc = _v116;
                const _v117: any = 70;
                acc = _v117;
                const _v118: any = 100;
                acc = _v118;
                const _v119: any = 25;
                acc = _v119;
                const _v120: any = rt.global(426);
                acc = _v120;
                const _v121: any = await rt.call(255, "Print", [_v108, _v111, _v112, _v113, _v114, _v115, _v116, _v117, _v118, _v119, _v120], this);
                acc = _v121;
                _v104 = _v121;
              }
              acc = _v104;
              _v1 = _v104;
            } else {
              const _v122: any = rt.get(this, "theItem");
              acc = _v122;
              const _v123: any = rt.object(891, "KeyMouse");
              acc = _v123;
              const _v124: any = await rt.send(_v123, "setCursor", [_v122]);
              acc = _v124;
              _v1 = _v124;
            }
            acc = _v1;
            const _v125: any = 0;
            acc = _v125;
            const _v126: any = rt.setGlobal(518, _v125);
            acc = _v126;
            const _v127: any = 0;
            acc = _v127;
            const _v128: any = 0;
            acc = _v128;
            const _v129: any = this;
            acc = _v129;
            const _v130: any = await rt.send(_v129, "doit", [_v127, _v128]);
            acc = _v130;
            const _v131: any = (temps[0] = _v130);
            acc = _v131;
            let _v132: any = acc;
            const _v133: any = (temps[0] ?? 0);
            acc = _v133;
            const _v134: any = await rt.call(206, "IsObject", [_v133], this);
            acc = _v134;
            _v132 = _v134;
            if (rt.truth(_v134)) {
              let _v135: any = acc;
              const _v136: any = (temps[0] ?? 0);
              acc = _v136;
              const _v137: any = this;
              acc = _v137;
              const _v138: any = await rt.send(_v137, "contains", [_v136]);
              acc = _v138;
              _v135 = _v138;
              if (rt.truth(_v138)) {
                const _v139: any = 0;
                acc = _v139;
                const _v140: any = (temps[0] = _v139);
                acc = _v140;
                _v135 = _v140;
              }
              acc = _v135;
              _v132 = _v135;
            } else {
              const _v141: any = 1;
              acc = _v141;
              const _v142: any = (temps[0] = _v141);
              acc = _v142;
              _v132 = _v142;
            }
            acc = _v132;
            const _v143: any = rt.global(477);
            acc = _v143;
            const _v144: any = await rt.send(_v143, "fade", []);
            acc = _v144;
            let _v145: any = acc;
            const _v146: any = rt.get(this, "prevDialog");
            acc = _v146;
            _v145 = _v146;
            if (rt.truth(_v146)) {
              const _v147: any = rt.get(this, "prevDialog");
              acc = _v147;
              const _v148: any = await rt.send(_v147, "keyMouseList", []);
              acc = _v148;
              _v145 = _v148;
            } else {
              const _v149: any = rt.global(432);
              acc = _v149;
              _v145 = _v149;
            }
            acc = _v145;
            const _v150: any = rt.object(891, "KeyMouse");
            acc = _v150;
            const _v151: any = await rt.send(_v150, "setList", [_v145]);
            acc = _v151;
            const _v152: any = rt.get(this, "keyMouseList");
            acc = _v152;
            const _v153: any = await rt.send(_v152, "release", []);
            acc = _v153;
            const _v154: any = rt.get(this, "keyMouseList");
            acc = _v154;
            const _v155: any = await rt.send(_v154, "dispose", []);
            acc = _v155;
            const _v156: any = rt.get(this, "prevDialog");
            acc = _v156;
            const _v157: any = rt.setGlobal(502, _v156);
            acc = _v157;
            const _v158: any = this;
            acc = _v158;
            const _v159: any = 291;
            acc = _v159;
            const _v160: any = await rt.call(0, "proc0_15", [_v158, _v159], this);
            acc = _v160;
            const _v161: any = this;
            acc = _v161;
            const _v162: any = await rt.send(_v161, "dispose", []);
            acc = _v162;
            const _v163: any = 11;
            acc = _v163;
            const _v164: any = rt.get(this, "nsTop");
            acc = _v164;
            const _v165: any = 1;
            acc = _v165;
            const _v166: any = rt.op("+", ...[_v164, _v165]);
            acc = _v166;
            const _v167: any = rt.get(this, "nsLeft");
            acc = _v167;
            const _v168: any = rt.get(this, "nsBottom");
            acc = _v168;
            const _v169: any = 1;
            acc = _v169;
            const _v170: any = rt.op("-", ...[_v168, _v169]);
            acc = _v170;
            const _v171: any = rt.get(this, "nsRight");
            acc = _v171;
            const _v172: any = 3;
            acc = _v172;
            const _v173: any = rt.op("-", ...[_v171, _v172]);
            acc = _v173;
            const _v174: any = 2;
            acc = _v174;
            const _v175: any = 0;
            acc = _v175;
            const _v176: any = 0;
            acc = _v176;
            const _v177: any = await rt.call(206, "Graph", [_v163, _v166, _v167, _v170, _v173, _v174, _v175, _v176], this);
            acc = _v177;
            const _v178: any = 0;
            acc = _v178;
            const _v179: any = await rt.call(0, "proc0_17", [_v178], this);
            acc = _v179;
            const _v180: any = (temps[0] ?? 0);
            acc = _v180;
            const _acc181: any = acc;
            const _v182: any = 206;
            acc = _v182;
            const _args183: any[] = [_v182];
            await rt.call(206, "DisposeScript", _args183, this);
            const _v184: any = _args183.length === 2 ? _args183[1] : _acc181;
            acc = _v184;
            return acc;
          },
          // SCI employment.sc: employment.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.superSend(this, {"script": 206, "name": "employment"}, "draw", []);
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
        properties: {"view": 706},
        methods: {
        },
      },
      {
        name: "discountStore",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"nsTop": 37, "nsLeft": 23, "key": 11, "text": "Z-Mart Discount", "shadowColor": 80},
        methods: {
          // SCI employment.sc: discountStore.doit
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
            const _v4: any = rt.global(502);
            acc = _v4;
            const _v5: any = 291;
            acc = _v5;
            const _v6: any = await rt.call(0, "proc0_15", [_v4, _v5], this);
            acc = _v6;
            const _v7: any = rt.get(this, "client");
            acc = _v7;
            const _v8: any = 216;
            acc = _v8;
            const _v9: any = 0;
            acc = _v9;
            const _v10: any = await rt.call(206, "ScriptID", [_v8, _v9], this);
            acc = _v10;
            const _v11: any = await rt.send(_v10, "init", [_v7]);
            acc = _v11;
            const _v12: any = (temps[0] = _v11);
            acc = _v12;
            const _v13: any = rt.global(502);
            acc = _v13;
            const _v14: any = await rt.send(_v13, "draw", []);
            acc = _v14;
            const _v15: any = await rt.call(206, "proc206_1", [], this);
            acc = _v15;
            const _v16: any = (temps[0] ?? 0);
            acc = _v16;
            return _v16;
            return acc;
          },
        },
      },
      {
        name: "fastFoodStore",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"nsTop": 45, "nsLeft": 22, "key": 10, "text": "Monolith Burgers", "shadowColor": 80},
        methods: {
          // SCI employment.sc: fastFoodStore.doit
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
            const _v4: any = rt.global(502);
            acc = _v4;
            const _v5: any = 291;
            acc = _v5;
            const _v6: any = await rt.call(0, "proc0_15", [_v4, _v5], this);
            acc = _v6;
            const _v7: any = rt.get(this, "client");
            acc = _v7;
            const _v8: any = 217;
            acc = _v8;
            const _v9: any = 0;
            acc = _v9;
            const _v10: any = await rt.call(206, "ScriptID", [_v8, _v9], this);
            acc = _v10;
            const _v11: any = await rt.send(_v10, "init", [_v7]);
            acc = _v11;
            const _v12: any = (temps[0] = _v11);
            acc = _v12;
            const _v13: any = rt.global(502);
            acc = _v13;
            const _v14: any = await rt.send(_v13, "draw", []);
            acc = _v14;
            const _v15: any = await rt.call(206, "proc206_1", [], this);
            acc = _v15;
            const _v16: any = (temps[0] ?? 0);
            acc = _v16;
            return _v16;
            return acc;
          },
        },
      },
      {
        name: "clothingStore",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"nsTop": 53, "nsLeft": 35, "key": 12, "text": "QT Clothing", "shadowColor": 80},
        methods: {
          // SCI employment.sc: clothingStore.doit
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
            const _v4: any = rt.global(502);
            acc = _v4;
            const _v5: any = 291;
            acc = _v5;
            const _v6: any = await rt.call(0, "proc0_15", [_v4, _v5], this);
            acc = _v6;
            const _v7: any = rt.get(this, "client");
            acc = _v7;
            const _v8: any = 218;
            acc = _v8;
            const _v9: any = 0;
            acc = _v9;
            const _v10: any = await rt.call(206, "ScriptID", [_v8, _v9], this);
            acc = _v10;
            const _v11: any = await rt.send(_v10, "init", [_v7]);
            acc = _v11;
            const _v12: any = (temps[0] = _v11);
            acc = _v12;
            const _v13: any = rt.global(502);
            acc = _v13;
            const _v14: any = await rt.send(_v13, "draw", []);
            acc = _v14;
            const _v15: any = await rt.call(206, "proc206_1", [], this);
            acc = _v15;
            const _v16: any = (temps[0] ?? 0);
            acc = _v16;
            return _v16;
            return acc;
          },
        },
      },
      {
        name: "applianceStore",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"nsTop": 61, "nsLeft": 12, "key": 8, "text": "Socket City Appliance", "shadowColor": 80},
        methods: {
          // SCI employment.sc: applianceStore.doit
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
            const _v4: any = rt.global(502);
            acc = _v4;
            const _v5: any = 291;
            acc = _v5;
            const _v6: any = await rt.call(0, "proc0_15", [_v4, _v5], this);
            acc = _v6;
            const _v7: any = rt.get(this, "client");
            acc = _v7;
            const _v8: any = 219;
            acc = _v8;
            const _v9: any = 0;
            acc = _v9;
            const _v10: any = await rt.call(206, "ScriptID", [_v8, _v9], this);
            acc = _v10;
            const _v11: any = await rt.send(_v10, "init", [_v7]);
            acc = _v11;
            const _v12: any = (temps[0] = _v11);
            acc = _v12;
            const _v13: any = rt.global(502);
            acc = _v13;
            const _v14: any = await rt.send(_v13, "draw", []);
            acc = _v14;
            const _v15: any = await rt.call(206, "proc206_1", [], this);
            acc = _v15;
            const _v16: any = (temps[0] ?? 0);
            acc = _v16;
            return _v16;
            return acc;
          },
        },
      },
      {
        name: "theUniversity",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"nsTop": 69, "nsLeft": 20, "key": 7, "text": "Hi-Tech University", "shadowColor": 80},
        methods: {
          // SCI employment.sc: theUniversity.doit
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
            const _v4: any = rt.global(502);
            acc = _v4;
            const _v5: any = 291;
            acc = _v5;
            const _v6: any = await rt.call(0, "proc0_15", [_v4, _v5], this);
            acc = _v6;
            const _v7: any = rt.get(this, "client");
            acc = _v7;
            const _v8: any = 220;
            acc = _v8;
            const _v9: any = 0;
            acc = _v9;
            const _v10: any = await rt.call(206, "ScriptID", [_v8, _v9], this);
            acc = _v10;
            const _v11: any = await rt.send(_v10, "init", [_v7]);
            acc = _v11;
            const _v12: any = (temps[0] = _v11);
            acc = _v12;
            const _v13: any = rt.global(502);
            acc = _v13;
            const _v14: any = await rt.send(_v13, "draw", []);
            acc = _v14;
            const _v15: any = await rt.call(206, "proc206_1", [], this);
            acc = _v15;
            const _v16: any = (temps[0] ?? 0);
            acc = _v16;
            return _v16;
            return acc;
          },
        },
      },
      {
        name: "theFactory",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"nsTop": 77, "nsLeft": 41, "key": 5, "text": "Factory", "shadowColor": 80},
        methods: {
          // SCI employment.sc: theFactory.doit
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
            const _v4: any = rt.global(502);
            acc = _v4;
            const _v5: any = 291;
            acc = _v5;
            const _v6: any = await rt.call(0, "proc0_15", [_v4, _v5], this);
            acc = _v6;
            const _v7: any = rt.get(this, "client");
            acc = _v7;
            const _v8: any = 221;
            acc = _v8;
            const _v9: any = 0;
            acc = _v9;
            const _v10: any = await rt.call(206, "ScriptID", [_v8, _v9], this);
            acc = _v10;
            const _v11: any = await rt.send(_v10, "init", [_v7]);
            acc = _v11;
            const _v12: any = (temps[0] = _v11);
            acc = _v12;
            const _v13: any = rt.global(502);
            acc = _v13;
            const _v14: any = await rt.send(_v13, "draw", []);
            acc = _v14;
            const _v15: any = await rt.call(206, "proc206_1", [], this);
            acc = _v15;
            const _v16: any = (temps[0] ?? 0);
            acc = _v16;
            return _v16;
            return acc;
          },
        },
      },
      {
        name: "theBank",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"nsTop": 85, "nsLeft": 48, "key": 4, "text": "Bank", "shadowColor": 80},
        methods: {
          // SCI employment.sc: theBank.doit
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
            const _v4: any = rt.global(502);
            acc = _v4;
            const _v5: any = 291;
            acc = _v5;
            const _v6: any = await rt.call(0, "proc0_15", [_v4, _v5], this);
            acc = _v6;
            const _v7: any = rt.get(this, "client");
            acc = _v7;
            const _v8: any = 222;
            acc = _v8;
            const _v9: any = 0;
            acc = _v9;
            const _v10: any = await rt.call(206, "ScriptID", [_v8, _v9], this);
            acc = _v10;
            const _v11: any = await rt.send(_v10, "init", [_v7]);
            acc = _v11;
            const _v12: any = (temps[0] = _v11);
            acc = _v12;
            const _v13: any = rt.global(502);
            acc = _v13;
            const _v14: any = await rt.send(_v13, "draw", []);
            acc = _v14;
            const _v15: any = await rt.call(206, "proc206_1", [], this);
            acc = _v15;
            const _v16: any = (temps[0] ?? 0);
            acc = _v16;
            return _v16;
            return acc;
          },
        },
      },
      {
        name: "theMarket",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"nsTop": 93, "nsLeft": 26, "key": 3, "text": "Black's Market", "shadowColor": 80},
        methods: {
          // SCI employment.sc: theMarket.doit
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
            const _v4: any = rt.global(502);
            acc = _v4;
            const _v5: any = 291;
            acc = _v5;
            const _v6: any = await rt.call(0, "proc0_15", [_v4, _v5], this);
            acc = _v6;
            const _v7: any = rt.get(this, "client");
            acc = _v7;
            const _v8: any = 223;
            acc = _v8;
            const _v9: any = 0;
            acc = _v9;
            const _v10: any = await rt.call(206, "ScriptID", [_v8, _v9], this);
            acc = _v10;
            const _v11: any = await rt.send(_v10, "init", [_v7]);
            acc = _v11;
            const _v12: any = (temps[0] = _v11);
            acc = _v12;
            const _v13: any = rt.global(502);
            acc = _v13;
            const _v14: any = await rt.send(_v13, "draw", []);
            acc = _v14;
            const _v15: any = await rt.call(206, "proc206_1", [], this);
            acc = _v15;
            const _v16: any = (temps[0] ?? 0);
            acc = _v16;
            return _v16;
            return acc;
          },
        },
      },
      {
        name: "theRentOffice",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"nsTop": 101, "nsLeft": 35, "key": 1, "text": "Rent Office", "shadowColor": 80},
        methods: {
          // SCI employment.sc: theRentOffice.doit
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
            const _v4: any = rt.global(502);
            acc = _v4;
            const _v5: any = 291;
            acc = _v5;
            const _v6: any = await rt.call(0, "proc0_15", [_v4, _v5], this);
            acc = _v6;
            const _v7: any = rt.get(this, "client");
            acc = _v7;
            const _v8: any = 224;
            acc = _v8;
            const _v9: any = 0;
            acc = _v9;
            const _v10: any = await rt.call(206, "ScriptID", [_v8, _v9], this);
            acc = _v10;
            const _v11: any = await rt.send(_v10, "init", [_v7]);
            acc = _v11;
            const _v12: any = (temps[0] = _v11);
            acc = _v12;
            const _v13: any = rt.global(502);
            acc = _v13;
            const _v14: any = await rt.send(_v13, "draw", []);
            acc = _v14;
            const _v15: any = await rt.call(206, "proc206_1", [], this);
            acc = _v15;
            const _v16: any = (temps[0] ?? 0);
            acc = _v16;
            return _v16;
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
        name: "theTalker",
        className: "Talker",
        parent: {"script": 104, "name": "Talker"},
        isClass: false,
        properties: {"nsTop": 17, "view": 356},
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
          // SCI employment.sc: computerScript.handleEvent
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
              const _v15: any = rt.get(this, "state");
              acc = _v15;
              _branch16: {
                const _v17: any = 2;
                acc = _v17;
                _v14 = rt.op("==", _v15, _v17);
                acc = _v14;
                if (rt.truth(_v14)) {
                  const _v18: any = 0;
                  acc = _v18;
                  const _v19: any = rt.setGlobal(438, _v18);
                  acc = _v19;
                  _v14 = _v19;
                  let _v20: any = acc;
                  let _v21: any = 0;
                  if (!rt.truth(_v21)) {
                    const _v22: any = 3;
                    acc = _v22;
                    const _v23: any = await rt.call(0, "proc0_6", [_v22], this);
                    acc = _v23;
                    _v21 = _v23;
                  }
                  if (!rt.truth(_v21)) {
                    const _v24: any = 5;
                    acc = _v24;
                    const _v25: any = await rt.call(0, "proc0_6", [_v24], this);
                    acc = _v25;
                    _v21 = _v25;
                  }
                  acc = _v21;
                  _v20 = _v21;
                  if (rt.truth(_v21)) {
                    const _v26: any = 60;
                    acc = _v26;
                    const _v27: any = rt.set(this, "cycles", _v26);
                    acc = _v27;
                    _v20 = _v27;
                    const _v30: any = rt.global(437);
                    acc = _v30;
                    const _v31: any = 1;
                    acc = _v31;
                    const _v32: any = rt.op("-", ...[_v30, _v31]);
                    acc = _v32;
                    const _v33: any = rt.setGlobal(501, _v32);
                    acc = _v33;
                    _loop28: for (;;) {
                      const _v34: any = rt.global(501);
                      acc = _v34;
                      const _v35: any = 0;
                      acc = _v35;
                      const _v36: any = rt.op(">=", ...[_v34, _v35]);
                      acc = _v36;
                      if (!rt.truth(_v36)) break _loop28;
                      _continue29: {
                        let _v37: any = acc;
                        _branch38: {
                          let _v39: any = 1;
                          if (rt.truth(_v39)) {
                            const _v40: any = rt.global(323);
                            acc = _v40;
                            const _v41: any = 60;
                            acc = _v41;
                            const _v42: any = rt.op("<", ...[_v40, _v41]);
                            acc = _v42;
                            _v39 = _v42;
                          }
                          if (rt.truth(_v39)) {
                            const _v43: any = rt.global(302);
                            acc = _v43;
                            const _v44: any = await rt.send(_v43, "dependibility", []);
                            acc = _v44;
                            const _v45: any = rt.global(501);
                            acc = _v45;
                            const _v46: any = rt.local(206, (0 + (Number(_v45) & 65535)));
                            acc = _v46;
                            const _v47: any = rt.op(">=", ...[_v44, _v46]);
                            acc = _v47;
                            _v39 = _v47;
                          }
                          if (rt.truth(_v39)) {
                            const _v48: any = rt.global(302);
                            acc = _v48;
                            const _v49: any = await rt.send(_v48, "experience", []);
                            acc = _v49;
                            const _v50: any = rt.global(501);
                            acc = _v50;
                            const _v51: any = rt.local(206, (37 + (Number(_v50) & 65535)));
                            acc = _v51;
                            const _v52: any = rt.op(">=", ...[_v49, _v51]);
                            acc = _v52;
                            _v39 = _v52;
                          }
                          if (rt.truth(_v39)) {
                            let _v53: any = 0;
                            if (!rt.truth(_v53)) {
                              const _v54: any = rt.global(302);
                              acc = _v54;
                              const _v55: any = await rt.send(_v54, "wage", []);
                              acc = _v55;
                              const _v56: any = rt.op("not", ...[_v55]);
                              acc = _v56;
                              _v53 = _v56;
                            }
                            if (!rt.truth(_v53)) {
                              const _v57: any = rt.global(302);
                              acc = _v57;
                              const _v58: any = await rt.send(_v57, "wage", []);
                              acc = _v58;
                              const _v59: any = rt.global(501);
                              acc = _v59;
                              const _v60: any = rt.local(206, (148 + (Number(_v59) & 65535)));
                              acc = _v60;
                              const _v61: any = rt.op("<", ...[_v58, _v60]);
                              acc = _v61;
                              _v53 = _v61;
                            }
                            if (!rt.truth(_v53)) {
                              let _v62: any = 1;
                              if (rt.truth(_v62)) {
                                const _v63: any = rt.global(302);
                                acc = _v63;
                                const _v64: any = await rt.send(_v63, "wage", []);
                                acc = _v64;
                                const _v65: any = rt.global(501);
                                acc = _v65;
                                const _v66: any = rt.local(206, (148 + (Number(_v65) & 65535)));
                                acc = _v66;
                                const _v67: any = 1;
                                acc = _v67;
                                const _v68: any = rt.op("+", ...[_v66, _v67]);
                                acc = _v68;
                                const _v69: any = rt.op("<=", ...[_v64, _v68]);
                                acc = _v69;
                                _v62 = _v69;
                              }
                              if (rt.truth(_v62)) {
                                const _v70: any = rt.global(501);
                                acc = _v70;
                                const _v71: any = rt.global(302);
                                acc = _v71;
                                const _v72: any = await rt.send(_v71, "jobT", []);
                                acc = _v72;
                                const _v73: any = rt.op("!=", ...[_v70, _v72]);
                                acc = _v73;
                                _v62 = _v73;
                              }
                              acc = _v62;
                              _v53 = _v62;
                            }
                            acc = _v53;
                            _v39 = _v53;
                          }
                          if (rt.truth(_v39)) {
                            let _v74: any = 0;
                            if (!rt.truth(_v74)) {
                              const _v75: any = rt.global(302);
                              acc = _v75;
                              const _v76: any = await rt.send(_v75, "notEnoughEd", []);
                              acc = _v76;
                              const _v77: any = rt.op("not", ...[_v76]);
                              acc = _v77;
                              _v74 = _v77;
                            }
                            if (!rt.truth(_v74)) {
                              let _v78: any = 1;
                              if (rt.truth(_v78)) {
                                const _v79: any = rt.global(501);
                                acc = _v79;
                                const _v80: any = rt.local(206, (74 + (Number(_v79) & 65535)));
                                acc = _v80;
                                const _v81: any = rt.global(302);
                                acc = _v81;
                                const _v82: any = await rt.send(_v81, "hasDegree", [_v80]);
                                acc = _v82;
                                _v78 = _v82;
                              }
                              if (rt.truth(_v78)) {
                                const _v83: any = rt.global(501);
                                acc = _v83;
                                const _v84: any = rt.local(206, (111 + (Number(_v83) & 65535)));
                                acc = _v84;
                                const _v85: any = rt.global(302);
                                acc = _v85;
                                const _v86: any = await rt.send(_v85, "hasDegree", [_v84]);
                                acc = _v86;
                                _v78 = _v86;
                              }
                              acc = _v78;
                              _v74 = _v78;
                            }
                            acc = _v74;
                            _v39 = _v74;
                          }
                          if (rt.truth(_v39)) {
                            const _v87: any = rt.global(501);
                            acc = _v87;
                            const _v88: any = await rt.call(206, "localproc_1", [_v87], this);
                            acc = _v88;
                            _v39 = _v88;
                          }
                          acc = _v39;
                          _v37 = _v39;
                          acc = _v37;
                          if (rt.truth(_v37)) {
                            const _v89: any = rt.global(501);
                            acc = _v89;
                            const _v90: any = rt.local(206, (222 + (Number(_v89) & 65535)));
                            acc = _v90;
                            const _v91: any = rt.setGlobal(436, _v90);
                            acc = _v91;
                            _v37 = _v91;
                            const _v92: any = rt.global(501);
                            acc = _v92;
                            const _v93: any = rt.local(206, (185 + (Number(_v92) & 65535)));
                            acc = _v93;
                            const _v94: any = (args[0] ?? 0);
                            acc = _v94;
                            const _v95: any = await rt.send(_v94, "message", [_v93]);
                            acc = _v95;
                            _v37 = _v95;
                            const _v96: any = rt.global(501);
                            acc = _v96;
                            const _v97: any = rt.setGlobal(437, _v96);
                            acc = _v97;
                            _v37 = _v97;
                            break _loop28;
                            _v37 = acc;
                            break _branch38;
                          }
                          const _v98: any = rt.global(501);
                          acc = _v98;
                          const _v99: any = rt.op("not", ...[_v98]);
                          acc = _v99;
                          _v37 = _v99;
                          acc = _v37;
                          if (rt.truth(_v37)) {
                            const _v100: any = 4;
                            acc = _v100;
                            const _v101: any = rt.set(this, "state", _v100);
                            acc = _v101;
                            _v37 = _v101;
                            const _v102: any = 1;
                            acc = _v102;
                            const _v103: any = rt.set(this, "cycles", _v102);
                            acc = _v103;
                            _v37 = _v103;
                            break _branch38;
                          }
                        }
                        acc = _v37;
                      }
                      const _v104: any = rt.setGlobal(501, rt.op("-", rt.global(501), 1));
                      acc = _v104;
                    }
                    _v20 = acc;
                  }
                  acc = _v20;
                  _v14 = _v20;
                  break _branch16;
                }
                const _v105: any = 3;
                acc = _v105;
                _v14 = rt.op("==", _v15, _v105);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v106: any = acc;
                  _branch107: {
                    const _v108: any = rt.global(438);
                    acc = _v108;
                    _v106 = _v108;
                    acc = _v106;
                    if (rt.truth(_v106)) {
                      const _v109: any = rt.set(this, "state", rt.op("+", rt.get(this, "state"), 1));
                      acc = _v109;
                      _v106 = _v109;
                      break _branch107;
                    }
                    let _v110: any = 1;
                    if (rt.truth(_v110)) {
                      const _v111: any = rt.global(437);
                      acc = _v111;
                      _v110 = _v111;
                    }
                    if (rt.truth(_v110)) {
                      let _v112: any = 0;
                      if (!rt.truth(_v112)) {
                        const _v113: any = 3;
                        acc = _v113;
                        const _v114: any = await rt.call(0, "proc0_6", [_v113], this);
                        acc = _v114;
                        _v112 = _v114;
                      }
                      if (!rt.truth(_v112)) {
                        const _v115: any = 5;
                        acc = _v115;
                        const _v116: any = await rt.call(0, "proc0_6", [_v115], this);
                        acc = _v116;
                        _v112 = _v116;
                      }
                      acc = _v112;
                      _v110 = _v112;
                    }
                    acc = _v110;
                    _v106 = _v110;
                    acc = _v106;
                    if (rt.truth(_v106)) {
                      const _v117: any = 1;
                      acc = _v117;
                      const _v118: any = rt.set(this, "state", _v117);
                      acc = _v118;
                      _v106 = _v118;
                      break _branch107;
                    }
                  }
                  acc = _v106;
                  _v14 = _v106;
                  break _branch16;
                }
                const _v119: any = 4;
                acc = _v119;
                _v14 = rt.op("==", _v15, _v119);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v120: any = acc;
                  const _v121: any = 4;
                  acc = _v121;
                  const _v122: any = await rt.call(0, "proc0_6", [_v121], this);
                  acc = _v122;
                  _v120 = _v122;
                  if (rt.truth(_v122)) {
                    const _v123: any = 60;
                    acc = _v123;
                    const _v124: any = rt.set(this, "cycles", _v123);
                    acc = _v124;
                    _v120 = _v124;
                    const _v125: any = rt.global(302);
                    acc = _v125;
                    const _v126: any = await rt.send(_v125, "jobKey", []);
                    acc = _v126;
                    const _v127: any = rt.setGlobal(436, _v126);
                    acc = _v127;
                    _v120 = _v127;
                    let _v128: any = acc;
                    const _v129: any = rt.global(302);
                    acc = _v129;
                    const _v130: any = await rt.send(_v129, "worksAt", []);
                    acc = _v130;
                    const _v131: any = 9;
                    acc = _v131;
                    const _v132: any = rt.op("==", ...[_v130, _v131]);
                    acc = _v132;
                    _v128 = _v132;
                    if (rt.truth(_v132)) {
                      const _v133: any = 12;
                      acc = _v133;
                      _v128 = _v133;
                    } else {
                      const _v134: any = rt.global(302);
                      acc = _v134;
                      const _v135: any = await rt.send(_v134, "worksAt", []);
                      acc = _v135;
                      _v128 = _v135;
                    }
                    acc = _v128;
                    const _v136: any = (args[0] ?? 0);
                    acc = _v136;
                    const _v137: any = await rt.send(_v136, "message", [_v128]);
                    acc = _v137;
                    _v120 = _v137;
                  }
                  acc = _v120;
                  _v14 = _v120;
                  break _branch16;
                }
                const _v138: any = (args[0] ?? 0);
                acc = _v138;
                const _v139: any = 0;
                acc = _v139;
                const _v140: any = await rt.superSend(this, {"script": 206, "name": "computerScript"}, "handleEvent", [_v138, _v139]);
                acc = _v140;
                _v14 = _v140;
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
      // SCI employment.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = rt.ref("global", 0, 100);
        acc = _v1;
        const _v2: any = 206;
        acc = _v2;
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = await rt.call(206, "Format", [_v1, _v2, _v3], this);
        acc = _v4;
        const _v5: any = rt.ref("global", 0, 100);
        acc = _v5;
        const _v6: any = 206;
        acc = _v6;
        const _v7: any = 1;
        acc = _v7;
        const _v8: any = await rt.call(206, "Format", [_v5, _v6, _v7], this);
        acc = _v8;
        const _v9: any = rt.ref("global", 0, 100);
        acc = _v9;
        const _v10: any = 206;
        acc = _v10;
        const _v11: any = 2;
        acc = _v11;
        const _v12: any = await rt.call(206, "Format", [_v9, _v10, _v11], this);
        acc = _v12;
        const _v13: any = rt.ref("global", 0, 100);
        acc = _v13;
        const _v14: any = 206;
        acc = _v14;
        const _v15: any = 3;
        acc = _v15;
        const _v16: any = await rt.call(206, "Format", [_v13, _v14, _v15], this);
        acc = _v16;
        const _v17: any = rt.ref("global", 0, 100);
        acc = _v17;
        const _v18: any = 206;
        acc = _v18;
        const _v19: any = 4;
        acc = _v19;
        const _v20: any = await rt.call(206, "Format", [_v17, _v18, _v19], this);
        acc = _v20;
        const _v21: any = rt.ref("global", 0, 100);
        acc = _v21;
        const _v22: any = 206;
        acc = _v22;
        const _v23: any = 5;
        acc = _v23;
        const _v24: any = await rt.call(206, "Format", [_v21, _v22, _v23], this);
        acc = _v24;
        const _v25: any = rt.ref("global", 0, 100);
        acc = _v25;
        const _v26: any = 206;
        acc = _v26;
        const _v27: any = 6;
        acc = _v27;
        const _v28: any = await rt.call(206, "Format", [_v25, _v26, _v27], this);
        acc = _v28;
        const _v29: any = rt.ref("global", 0, 100);
        acc = _v29;
        const _v30: any = 206;
        acc = _v30;
        const _v31: any = 7;
        acc = _v31;
        const _v32: any = await rt.call(206, "Format", [_v29, _v30, _v31], this);
        acc = _v32;
        const _v33: any = rt.ref("global", 0, 100);
        acc = _v33;
        const _v34: any = 206;
        acc = _v34;
        const _v35: any = 8;
        acc = _v35;
        const _v36: any = await rt.call(206, "Format", [_v33, _v34, _v35], this);
        acc = _v36;
        const _v37: any = rt.ref("global", 0, 100);
        acc = _v37;
        const _v38: any = 206;
        acc = _v38;
        const _v39: any = 9;
        acc = _v39;
        const _v40: any = await rt.call(206, "Format", [_v37, _v38, _v39], this);
        acc = _v40;
        const _v41: any = rt.ref("global", 0, 100);
        acc = _v41;
        const _v42: any = 206;
        acc = _v42;
        const _v43: any = 10;
        acc = _v43;
        const _v44: any = await rt.call(206, "Format", [_v41, _v42, _v43], this);
        acc = _v44;
        const _v45: any = rt.ref("global", 0, 100);
        acc = _v45;
        const _v46: any = 206;
        acc = _v46;
        const _v47: any = 11;
        acc = _v47;
        const _v48: any = await rt.call(206, "Format", [_v45, _v46, _v47], this);
        acc = _v48;
        const _v49: any = rt.ref("global", 0, 100);
        acc = _v49;
        const _v50: any = 206;
        acc = _v50;
        const _v51: any = 12;
        acc = _v51;
        const _v52: any = await rt.call(206, "Format", [_v49, _v50, _v51], this);
        acc = _v52;
        return acc;
      },
      // SCI employment.sc: proc206_1
      "proc206_1": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = 25;
        acc = _v1;
        const _v2: any = 166;
        acc = _v2;
        let _v3: any = acc;
        const _v4: any = rt.global(433);
        acc = _v4;
        const _v5: any = -1;
        acc = _v5;
        const _v6: any = rt.op(">=", ...[_v4, _v5]);
        acc = _v6;
        _v3 = _v6;
        if (rt.truth(_v6)) {
          const _v7: any = 32;
          acc = _v7;
          const _v8: any = rt.global(413);
          acc = _v8;
          const _v9: any = await rt.send(_v8, "init", [_v7]);
          acc = _v9;
          _v3 = _v9;
          let _v10: any = acc;
          const _v11: any = rt.global(433);
          acc = _v11;
          const _v12: any = -1;
          acc = _v12;
          const _v13: any = rt.op("==", ...[_v11, _v12]);
          acc = _v13;
          _v10 = _v13;
          if (rt.truth(_v13)) {
            const _v14: any = -1;
            acc = _v14;
            const _v15: any = await rt.call(0, "proc0_13", [_v14], this);
            acc = _v15;
            _v10 = _v15;
            const _v16: any = 1;
            acc = _v16;
            const _v17: any = rt.global(477);
            acc = _v17;
            const _v18: any = await rt.send(_v17, "pause", [_v16]);
            acc = _v18;
            _v10 = _v18;
            const _v19: any = 44;
            acc = _v19;
            const _v20: any = rt.global(477);
            acc = _v20;
            const _v21: any = rt.global(476);
            acc = _v21;
            const _v22: any = await rt.send(_v21, "play", [_v19, _v20]);
            acc = _v22;
            _v10 = _v22;
            const _v23: any = rt.ref("global", 0, 100);
            acc = _v23;
            const _v24: any = 206;
            acc = _v24;
            const _v25: any = 13;
            acc = _v25;
            const _v26: any = await rt.call(206, "Format", [_v23, _v24, _v25], this);
            acc = _v26;
            _v10 = _v26;
            let _v27: any = acc;
            const _v28: any = rt.global(372);
            acc = _v28;
            const _v29: any = 4;
            acc = _v29;
            const _v30: any = rt.op("<", ...[_v28, _v29]);
            acc = _v30;
            _v27 = _v30;
            if (rt.truth(_v30)) {
              const _v31: any = 1;
              acc = _v31;
              const _v32: any = rt.setGlobal(326, _v31);
              acc = _v32;
              _v27 = _v32;
            }
            acc = _v27;
            _v10 = _v27;
            let _v33: any = acc;
            let _v34: any = 0;
            if (!rt.truth(_v34)) {
              const _v35: any = rt.global(325);
              acc = _v35;
              const _v36: any = rt.op("not", ...[_v35]);
              acc = _v36;
              _v34 = _v36;
            }
            if (!rt.truth(_v34)) {
              const _v37: any = rt.global(326);
              acc = _v37;
              const _v38: any = rt.op("not", ...[_v37]);
              acc = _v38;
              _v34 = _v38;
            }
            if (!rt.truth(_v34)) {
              const _v39: any = rt.global(327);
              acc = _v39;
              const _v40: any = rt.op("not", ...[_v39]);
              acc = _v40;
              _v34 = _v40;
            }
            acc = _v34;
            _v33 = _v34;
            if (rt.truth(_v34)) {
              let _v41: any = acc;
              const _v42: any = rt.global(325);
              acc = _v42;
              const _v43: any = rt.op("not", ...[_v42]);
              acc = _v43;
              _v41 = _v43;
              if (rt.truth(_v43)) {
                const _v44: any = rt.ref("global", 0, 100);
                acc = _v44;
                const _v45: any = "Not enough Education\n";
                acc = _v45;
                const _v46: any = await rt.call(206, "StrCat", [_v44, _v45], this);
                acc = _v46;
                _v41 = _v46;
                const _v47: any = 1;
                acc = _v47;
                const _v48: any = rt.global(302);
                acc = _v48;
                const _v49: any = await rt.send(_v48, "notEnoughEd", [_v47]);
                acc = _v49;
                _v41 = _v49;
              }
              acc = _v41;
              _v33 = _v41;
              let _v50: any = acc;
              const _v51: any = rt.global(327);
              acc = _v51;
              const _v52: any = rt.op("not", ...[_v51]);
              acc = _v52;
              _v50 = _v52;
              if (rt.truth(_v52)) {
                const _v53: any = rt.ref("global", 0, 100);
                acc = _v53;
                const _v54: any = "Not enough Experience.\n";
                acc = _v54;
                const _v55: any = await rt.call(206, "StrCat", [_v53, _v54], this);
                acc = _v55;
                _v50 = _v55;
              }
              acc = _v50;
              _v33 = _v50;
              let _v56: any = acc;
              const _v57: any = rt.global(326);
              acc = _v57;
              const _v58: any = rt.op("not", ...[_v57]);
              acc = _v58;
              _v56 = _v58;
              if (rt.truth(_v58)) {
                const _v59: any = rt.ref("global", 0, 100);
                acc = _v59;
                const _v60: any = "Poor work History.\n";
                acc = _v60;
                const _v61: any = await rt.call(206, "StrCat", [_v59, _v60], this);
                acc = _v61;
                _v56 = _v61;
              }
              acc = _v56;
              _v33 = _v56;
            } else {
              const _v62: any = rt.ref("global", 0, 100);
              acc = _v62;
              const _v63: any = "No openings.\n";
              acc = _v63;
              const _v64: any = await rt.call(206, "StrCat", [_v62, _v63], this);
              acc = _v64;
              _v33 = _v64;
            }
            acc = _v33;
            _v10 = _v33;
            const _v65: any = rt.ref("global", 0, 100);
            acc = _v65;
            const _v66: any = 310;
            acc = _v66;
            const _v67: any = rt.global(413);
            acc = _v67;
            const _v68: any = rt.global(440);
            acc = _v68;
            const _v69: any = rt.global(441);
            acc = _v69;
            const _v70: any = rt.global(442);
            acc = _v70;
            const _v71: any = 70;
            acc = _v71;
            const _v72: any = 150;
            acc = _v72;
            const _v73: any = await rt.call(104, "proc104_1", [_v65, _v66, _v67, _v68, _v69, _v70, _v71, _v72], this);
            acc = _v73;
            _v10 = _v73;
          } else {
            let _v74: any = acc;
            let _v75: any = 0;
            if (!rt.truth(_v75)) {
              const _v76: any = rt.global(433);
              acc = _v76;
              const _v77: any = 2;
              acc = _v77;
              const _v78: any = rt.op("==", ...[_v76, _v77]);
              acc = _v78;
              _v75 = _v78;
            }
            if (!rt.truth(_v75)) {
              const _v79: any = rt.global(433);
              acc = _v79;
              const _v80: any = 4;
              acc = _v80;
              const _v81: any = rt.op("==", ...[_v79, _v80]);
              acc = _v81;
              _v75 = _v81;
            }
            acc = _v75;
            _v74 = _v75;
            if (rt.truth(_v75)) {
              const _v82: any = 1;
              acc = _v82;
              const _v83: any = rt.global(477);
              acc = _v83;
              const _v84: any = await rt.send(_v83, "pause", [_v82]);
              acc = _v84;
              _v74 = _v84;
              const _v85: any = 45;
              acc = _v85;
              const _v86: any = rt.global(477);
              acc = _v86;
              const _v87: any = rt.global(476);
              acc = _v87;
              const _v88: any = await rt.send(_v87, "play", [_v85, _v86]);
              acc = _v88;
              _v74 = _v88;
            }
            acc = _v74;
            _v10 = _v74;
            const _v89: any = rt.ref("global", 0, 100);
            acc = _v89;
            const _v90: any = 206;
            acc = _v90;
            const _v91: any = rt.global(433);
            acc = _v91;
            const _v92: any = await rt.call(206, "Format", [_v89, _v90, _v91], this);
            acc = _v92;
            const _v93: any = 310;
            acc = _v93;
            const _v94: any = rt.global(413);
            acc = _v94;
            const _v95: any = rt.global(440);
            acc = _v95;
            const _v96: any = rt.global(441);
            acc = _v96;
            const _v97: any = rt.global(442);
            acc = _v97;
            const _v98: any = 25;
            acc = _v98;
            const _v99: any = rt.global(426);
            acc = _v99;
            const _v100: any = await rt.call(104, "proc104_1", [_v92, _v93, _v94, _v95, _v96, _v97, _v98, _v99], this);
            acc = _v100;
            _v10 = _v100;
          }
          acc = _v10;
          _v3 = _v10;
        }
        acc = _v3;
        return acc;
      },
      // SCI employment.sc: localproc_1
      "localproc_1": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0];
        let _v1: any = acc;
        const _v2: any = (args[0] ?? 0);
        acc = _v2;
        const _v3: any = rt.local(206, (259 + (Number(_v2) & 65535)));
        acc = _v3;
        _branch4: {
          const _v5: any = 36;
          acc = _v5;
          _v1 = rt.op("==", _v3, _v5);
          acc = _v1;
          if (rt.truth(_v1)) {
            const _v6: any = 0;
            acc = _v6;
            const _v7: any = (temps[0] = _v6);
            acc = _v7;
            _v1 = _v7;
            break _branch4;
          }
          const _v8: any = 35;
          acc = _v8;
          _v1 = rt.op("==", _v3, _v8);
          acc = _v1;
          if (rt.truth(_v1)) {
            const _v9: any = rt.global(309);
            acc = _v9;
            const _v10: any = 125;
            acc = _v10;
            const _v11: any = await rt.call(109, "proc109_0", [_v9, _v10], this);
            acc = _v11;
            const _v12: any = (temps[0] = _v11);
            acc = _v12;
            _v1 = _v12;
            break _branch4;
          }
          const _v13: any = 34;
          acc = _v13;
          _v1 = rt.op("==", _v3, _v13);
          acc = _v1;
          if (rt.truth(_v1)) {
            const _v14: any = rt.global(309);
            acc = _v14;
            const _v15: any = 295;
            acc = _v15;
            const _v16: any = await rt.call(109, "proc109_0", [_v14, _v15], this);
            acc = _v16;
            const _v17: any = (temps[0] = _v16);
            acc = _v17;
            _v1 = _v17;
            break _branch4;
          }
        }
        acc = _v1;
        const _v18: any = await rt.call(0, "proc0_11", [], this);
        acc = _v18;
        const _v19: any = (temps[0] ?? 0);
        acc = _v19;
        const _v20: any = rt.global(309);
        acc = _v20;
        const _v21: any = 65;
        acc = _v21;
        const _v22: any = await rt.call(109, "proc109_0", [_v20, _v21], this);
        acc = _v22;
        const _v23: any = rt.op("+", ...[_v19, _v22]);
        acc = _v23;
        const _v24: any = rt.op(">=", ...[_v18, _v23]);
        acc = _v24;
        return _v24;
        return acc;
      },
    },
    exports: {"0": "employment", "1": "proc206_1"},
  });
}
