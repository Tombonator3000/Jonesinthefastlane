// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/economicIndex.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 780359d0e1b860aa8a8f16e39fab0514fe90c04055174b4f8b8121220ac643eb
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(107, {
    name: "economicIndex",
    uses: [0, 999],
    locals: [0, 0],
    objects: [
      {
        name: "EconomicIndex",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: true,
        properties: {"index": 0, "reading": 0, "high": 0, "low": 0, "lowerRange": 0, "upperRange": 0, "adjustment": 0, "risk": 4, "headline": 0},
        methods: {
          // SCI economicIndex.sc: EconomicIndex.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = rt.set(this, "index", _v1);
            acc = _v2;
            const _v3: any = (args[1] ?? 0);
            acc = _v3;
            const _v4: any = rt.set(this, "reading", _v3);
            acc = _v4;
            let _v5: any = acc;
            _branch6: {
              const _v7: any = rt.global(373);
              acc = _v7;
              _v5 = _v7;
              acc = _v5;
              if (rt.truth(_v5)) {
                let _v8: any = acc;
                const _v9: any = rt.get(this, "index");
                acc = _v9;
                const _v10: any = -3;
                acc = _v10;
                const _v11: any = rt.op(">", ...[_v9, _v10]);
                acc = _v11;
                _v8 = _v11;
                if (rt.truth(_v11)) {
                  const _v12: any = 3;
                  acc = _v12;
                  const _v13: any = rt.set(this, "index", rt.op("-", rt.get(this, "index"), _v12));
                  acc = _v13;
                  _v8 = _v13;
                  let _v14: any = acc;
                  const _v15: any = rt.get(this, "index");
                  acc = _v15;
                  const _v16: any = -3;
                  acc = _v16;
                  const _v17: any = rt.op("<", ...[_v15, _v16]);
                  acc = _v17;
                  _v14 = _v17;
                  if (rt.truth(_v17)) {
                    const _v18: any = -3;
                    acc = _v18;
                    const _v19: any = rt.set(this, "index", _v18);
                    acc = _v19;
                    _v14 = _v19;
                  }
                  acc = _v14;
                  _v8 = _v14;
                } else {
                  const _v20: any = rt.set(this, "index", rt.op("-", rt.get(this, "index"), 1));
                  acc = _v20;
                  _v8 = _v20;
                }
                acc = _v8;
                _v5 = _v8;
                break _branch6;
              }
              const _v21: any = rt.global(444);
              acc = _v21;
              _v5 = _v21;
              acc = _v5;
              if (rt.truth(_v5)) {
                let _v22: any = acc;
                const _v23: any = rt.get(this, "index");
                acc = _v23;
                const _v24: any = 3;
                acc = _v24;
                const _v25: any = rt.op("<", ...[_v23, _v24]);
                acc = _v25;
                _v22 = _v25;
                if (rt.truth(_v25)) {
                  const _v26: any = 3;
                  acc = _v26;
                  const _v27: any = rt.set(this, "index", rt.op("+", rt.get(this, "index"), _v26));
                  acc = _v27;
                  _v22 = _v27;
                  let _v28: any = acc;
                  const _v29: any = rt.get(this, "index");
                  acc = _v29;
                  const _v30: any = 3;
                  acc = _v30;
                  const _v31: any = rt.op(">", ...[_v29, _v30]);
                  acc = _v31;
                  _v28 = _v31;
                  if (rt.truth(_v31)) {
                    const _v32: any = 3;
                    acc = _v32;
                    const _v33: any = rt.set(this, "index", _v32);
                    acc = _v33;
                    _v28 = _v33;
                  }
                  acc = _v28;
                  _v22 = _v28;
                } else {
                  const _v34: any = rt.set(this, "index", rt.op("+", rt.get(this, "index"), 1));
                  acc = _v34;
                  _v22 = _v34;
                }
                acc = _v22;
                _v5 = _v22;
                break _branch6;
              }
            }
            acc = _v5;
            const _v35: any = 0;
            acc = _v35;
            const _v36: any = rt.set(this, "high", _v35);
            acc = _v36;
            let _v37: any = acc;
            _branch38: {
              const _v39: any = rt.get(this, "reading");
              acc = _v39;
              const _v40: any = 40;
              acc = _v40;
              const _v41: any = rt.op("<", ...[_v39, _v40]);
              acc = _v41;
              _v37 = _v41;
              acc = _v37;
              if (rt.truth(_v37)) {
                const _v42: any = 2;
                acc = _v42;
                const _v43: any = rt.set(this, "high", _v42);
                acc = _v43;
                _v37 = _v43;
                break _branch38;
              }
              const _v44: any = rt.get(this, "reading");
              acc = _v44;
              const _v45: any = 70;
              acc = _v45;
              const _v46: any = rt.op("<", ...[_v44, _v45]);
              acc = _v46;
              _v37 = _v46;
              acc = _v37;
              if (rt.truth(_v37)) {
                const _v47: any = 1;
                acc = _v47;
                const _v48: any = rt.set(this, "high", _v47);
                acc = _v48;
                _v37 = _v48;
                break _branch38;
              }
            }
            acc = _v37;
            const _v49: any = 0;
            acc = _v49;
            const _v50: any = rt.set(this, "low", _v49);
            acc = _v50;
            let _v51: any = acc;
            _branch52: {
              const _v53: any = rt.get(this, "reading");
              acc = _v53;
              const _v54: any = 160;
              acc = _v54;
              const _v55: any = rt.op(">", ...[_v53, _v54]);
              acc = _v55;
              _v51 = _v55;
              acc = _v51;
              if (rt.truth(_v51)) {
                const _v56: any = 2;
                acc = _v56;
                const _v57: any = rt.set(this, "low", _v56);
                acc = _v57;
                _v51 = _v57;
                break _branch52;
              }
              const _v58: any = rt.get(this, "reading");
              acc = _v58;
              const _v59: any = 130;
              acc = _v59;
              const _v60: any = rt.op(">", ...[_v58, _v59]);
              acc = _v60;
              _v51 = _v60;
              acc = _v51;
              if (rt.truth(_v51)) {
                const _v61: any = 1;
                acc = _v61;
                const _v62: any = rt.set(this, "low", _v61);
                acc = _v62;
                _v51 = _v62;
                break _branch52;
              }
            }
            acc = _v51;
            let _v63: any = acc;
            _branch64: {
              const _v65: any = 100;
              acc = _v65;
              const _v66: any = -3;
              acc = _v66;
              const _v67: any = rt.get(this, "low");
              acc = _v67;
              const _v68: any = rt.op("-", ...[_v66, _v67]);
              acc = _v68;
              const _v69: any = rt.op("+", ...[_v65, _v68]);
              acc = _v69;
              const _v70: any = 100;
              acc = _v70;
              const _v71: any = 3;
              acc = _v71;
              const _v72: any = rt.get(this, "high");
              acc = _v72;
              const _v73: any = rt.op("+", ...[_v70, _v71, _v72]);
              acc = _v73;
              const _v74: any = await rt.call(107, "Random", [_v69, _v73], this);
              acc = _v74;
              const _v75: any = (temps[0] = _v74);
              acc = _v75;
              const _v76: any = 100;
              acc = _v76;
              const _v77: any = rt.op("-", ...[_v75, _v76]);
              acc = _v77;
              const _v78: any = (temps[0] = _v77);
              acc = _v78;
              const _v79: any = rt.get(this, "index");
              acc = _v79;
              const _v80: any = rt.op("<", ...[_v78, _v79]);
              acc = _v80;
              _v63 = _v80;
              acc = _v63;
              if (rt.truth(_v63)) {
                const _v81: any = rt.set(this, "index", rt.op("-", rt.get(this, "index"), 1));
                acc = _v81;
                _v63 = _v81;
                let _v82: any = acc;
                const _v83: any = rt.get(this, "index");
                acc = _v83;
                const _v84: any = -3;
                acc = _v84;
                const _v85: any = rt.get(this, "low");
                acc = _v85;
                const _v86: any = rt.op("-", ...[_v84, _v85]);
                acc = _v86;
                const _v87: any = rt.op("<", ...[_v83, _v86]);
                acc = _v87;
                _v82 = _v87;
                if (rt.truth(_v87)) {
                  const _v88: any = -3;
                  acc = _v88;
                  const _v89: any = rt.get(this, "low");
                  acc = _v89;
                  const _v90: any = rt.op("-", ...[_v88, _v89]);
                  acc = _v90;
                  const _v91: any = rt.set(this, "index", _v90);
                  acc = _v91;
                  _v82 = _v91;
                }
                acc = _v82;
                _v63 = _v82;
                break _branch64;
              }
              const _v92: any = (temps[0] ?? 0);
              acc = _v92;
              const _v93: any = rt.get(this, "index");
              acc = _v93;
              const _v94: any = rt.op(">", ...[_v92, _v93]);
              acc = _v94;
              _v63 = _v94;
              acc = _v63;
              if (rt.truth(_v63)) {
                const _v95: any = rt.set(this, "index", rt.op("+", rt.get(this, "index"), 1));
                acc = _v95;
                _v63 = _v95;
                let _v96: any = acc;
                const _v97: any = rt.get(this, "index");
                acc = _v97;
                const _v98: any = 3;
                acc = _v98;
                const _v99: any = rt.get(this, "high");
                acc = _v99;
                const _v100: any = rt.op("+", ...[_v98, _v99]);
                acc = _v100;
                const _v101: any = rt.op(">", ...[_v97, _v100]);
                acc = _v101;
                _v96 = _v101;
                if (rt.truth(_v101)) {
                  const _v102: any = 3;
                  acc = _v102;
                  const _v103: any = rt.get(this, "high");
                  acc = _v103;
                  const _v104: any = rt.op("+", ...[_v102, _v103]);
                  acc = _v104;
                  const _v105: any = rt.set(this, "index", _v104);
                  acc = _v105;
                  _v96 = _v105;
                }
                acc = _v96;
                _v63 = _v96;
                break _branch64;
              }
            }
            acc = _v63;
            const _v106: any = -3;
            acc = _v106;
            const _v107: any = rt.set(this, "lowerRange", _v106);
            acc = _v107;
            const _v108: any = 3;
            acc = _v108;
            const _v109: any = rt.set(this, "upperRange", _v108);
            acc = _v109;
            let _v110: any = acc;
            _branch111: {
              const _v112: any = rt.get(this, "index");
              acc = _v112;
              const _v113: any = 0;
              acc = _v113;
              const _v114: any = rt.op("<", ...[_v112, _v113]);
              acc = _v114;
              _v110 = _v114;
              acc = _v110;
              if (rt.truth(_v110)) {
                const _v115: any = -3;
                acc = _v115;
                const _v116: any = 2;
                acc = _v116;
                const _v117: any = rt.get(this, "index");
                acc = _v117;
                const _v118: any = rt.op("*", ...[_v116, _v117]);
                acc = _v118;
                const _v119: any = rt.op("+", ...[_v115, _v118]);
                acc = _v119;
                const _v120: any = rt.set(this, "lowerRange", _v119);
                acc = _v120;
                _v110 = _v120;
                break _branch111;
              }
              const _v121: any = rt.get(this, "index");
              acc = _v121;
              const _v122: any = 0;
              acc = _v122;
              const _v123: any = rt.op(">", ...[_v121, _v122]);
              acc = _v123;
              _v110 = _v123;
              acc = _v110;
              if (rt.truth(_v110)) {
                const _v124: any = 3;
                acc = _v124;
                const _v125: any = 2;
                acc = _v125;
                const _v126: any = rt.get(this, "index");
                acc = _v126;
                const _v127: any = rt.op("*", ...[_v125, _v126]);
                acc = _v127;
                const _v128: any = rt.op("+", ...[_v124, _v127]);
                acc = _v128;
                const _v129: any = rt.set(this, "upperRange", _v128);
                acc = _v129;
                _v110 = _v129;
                break _branch111;
              }
            }
            acc = _v110;
            const _v130: any = 100;
            acc = _v130;
            const _v131: any = rt.get(this, "lowerRange");
            acc = _v131;
            const _v132: any = rt.op("+", ...[_v130, _v131]);
            acc = _v132;
            const _v133: any = 100;
            acc = _v133;
            const _v134: any = rt.get(this, "upperRange");
            acc = _v134;
            const _v135: any = rt.op("+", ...[_v133, _v134]);
            acc = _v135;
            const _v136: any = await rt.call(107, "Random", [_v132, _v135], this);
            acc = _v136;
            const _v137: any = rt.set(this, "adjustment", _v136);
            acc = _v137;
            const _v138: any = 100;
            acc = _v138;
            const _v139: any = rt.set(this, "adjustment", rt.op("-", rt.get(this, "adjustment"), _v138));
            acc = _v139;
            let _v140: any = acc;
            _branch141: {
              const _v142: any = rt.get(this, "adjustment");
              acc = _v142;
              const _v143: any = rt.get(this, "lowerRange");
              acc = _v143;
              const _v144: any = rt.op("==", ...[_v142, _v143]);
              acc = _v144;
              _v140 = _v144;
              acc = _v140;
              if (rt.truth(_v140)) {
                const _v145: any = 0;
                acc = _v145;
                const _v146: any = rt.get(this, "risk");
                acc = _v146;
                const _v147: any = rt.get(this, "index");
                acc = _v147;
                const _v148: any = await rt.call(107, "Abs", [_v147], this);
                acc = _v148;
                const _v149: any = rt.op("*", ...[_v146, _v148]);
                acc = _v149;
                const _v150: any = await rt.call(107, "Random", [_v145, _v149], this);
                acc = _v150;
                const _v151: any = rt.set(this, "adjustment", rt.op("-", rt.get(this, "adjustment"), _v150));
                acc = _v151;
                _v140 = _v151;
                break _branch141;
              }
              const _v152: any = rt.get(this, "adjustment");
              acc = _v152;
              const _v153: any = rt.get(this, "lowerRange");
              acc = _v153;
              const _v154: any = rt.op("==", ...[_v152, _v153]);
              acc = _v154;
              _v140 = _v154;
              acc = _v140;
              if (rt.truth(_v140)) {
                const _v155: any = 0;
                acc = _v155;
                const _v156: any = rt.get(this, "risk");
                acc = _v156;
                const _v157: any = rt.get(this, "index");
                acc = _v157;
                const _v158: any = await rt.call(107, "Abs", [_v157], this);
                acc = _v158;
                const _v159: any = rt.op("*", ...[_v156, _v158]);
                acc = _v159;
                const _v160: any = await rt.call(107, "Random", [_v155, _v159], this);
                acc = _v160;
                const _v161: any = rt.set(this, "adjustment", rt.op("+", rt.get(this, "adjustment"), _v160));
                acc = _v161;
                _v140 = _v161;
                break _branch141;
              }
            }
            acc = _v140;
            return acc;
          },
          // SCI economicIndex.sc: EconomicIndex.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = argc;
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = (args[0] ?? 0);
              acc = _v3;
              _v1 = _v3;
            } else {
              const _v4: any = 0;
              acc = _v4;
              _v1 = _v4;
            }
            acc = _v1;
            const _v5: any = (temps[0] = _v1);
            acc = _v5;
            const _v6: any = rt.get(this, "adjustment");
            acc = _v6;
            const _v7: any = (args[0] ?? 0);
            acc = _v7;
            const _v8: any = 3;
            acc = _v8;
            const _v9: any = rt.op("/", ...[_v7, _v8]);
            acc = _v9;
            const _v10: any = rt.op("+", ...[_v6, _v9]);
            acc = _v10;
            const _v11: any = rt.set(this, "reading", rt.op("+", rt.get(this, "reading"), _v10));
            acc = _v11;
            let _v12: any = acc;
            _branch13: {
              const _v14: any = rt.global(373);
              acc = _v14;
              _v12 = _v14;
              acc = _v12;
              if (rt.truth(_v12)) {
                const _v15: any = rt.get(this, "reading");
                acc = _v15;
                const _v16: any = 16;
                acc = _v16;
                const _v17: any = rt.global(373);
                acc = _v17;
                const _v18: any = rt.op("+", ...[_v16, _v17]);
                acc = _v18;
                const _v19: any = rt.op("*", ...[_v15, _v18]);
                acc = _v19;
                const _v20: any = 20;
                acc = _v20;
                const _v21: any = rt.op("/", ...[_v19, _v20]);
                acc = _v21;
                const _v22: any = rt.set(this, "reading", _v21);
                acc = _v22;
                _v12 = _v22;
                break _branch13;
              }
              const _v23: any = rt.global(444);
              acc = _v23;
              _v12 = _v23;
              acc = _v12;
              if (rt.truth(_v12)) {
                const _v24: any = rt.get(this, "reading");
                acc = _v24;
                const _v25: any = 11;
                acc = _v25;
                const _v26: any = rt.op("*", ...[_v24, _v25]);
                acc = _v26;
                const _v27: any = 10;
                acc = _v27;
                const _v28: any = rt.op("/", ...[_v26, _v27]);
                acc = _v28;
                const _v29: any = rt.set(this, "reading", _v28);
                acc = _v29;
                _v12 = _v29;
                break _branch13;
              }
            }
            acc = _v12;
            let _v30: any = acc;
            const _v31: any = rt.get(this, "reading");
            acc = _v31;
            const _v32: any = 10;
            acc = _v32;
            const _v33: any = rt.op("<", ...[_v31, _v32]);
            acc = _v33;
            _v30 = _v33;
            if (rt.truth(_v33)) {
              const _v34: any = 10;
              acc = _v34;
              const _v35: any = rt.set(this, "reading", _v34);
              acc = _v35;
              _v30 = _v35;
            }
            acc = _v30;
            let _v36: any = acc;
            const _v37: any = rt.get(this, "reading");
            acc = _v37;
            const _v38: any = 190;
            acc = _v38;
            const _v39: any = rt.op(">", ...[_v37, _v38]);
            acc = _v39;
            _v36 = _v39;
            if (rt.truth(_v39)) {
              const _v40: any = 190;
              acc = _v40;
              const _v41: any = rt.set(this, "reading", _v40);
              acc = _v41;
              _v36 = _v41;
            }
            acc = _v36;
            const _v42: any = rt.get(this, "reading");
            acc = _v42;
            return _v42;
            return acc;
          },
        },
      },
      {
        name: "mainI",
        className: "EconomicIndex",
        parent: {"script": 107, "name": "EconomicIndex"},
        isClass: false,
        properties: {"headline": 20},
        methods: {
        },
      },
      {
        name: "investIndex",
        className: "EconomicIndex",
        parent: {"script": 107, "name": "EconomicIndex"},
        isClass: false,
        properties: {"headline": 18},
        methods: {
        },
      },
      {
        name: "gdsIndex",
        className: "EconomicIndex",
        parent: {"script": 107, "name": "EconomicIndex"},
        isClass: false,
        properties: {"headline": 20},
        methods: {
        },
      },
      {
        name: "gldIndex",
        className: "EconomicIndex",
        parent: {"script": 107, "name": "EconomicIndex"},
        isClass: false,
        properties: {"risk": 2, "headline": 5},
        methods: {
        },
      },
      {
        name: "silIndex",
        className: "EconomicIndex",
        parent: {"script": 107, "name": "EconomicIndex"},
        isClass: false,
        properties: {"risk": 2, "headline": 7},
        methods: {
        },
      },
      {
        name: "prkIndex",
        className: "EconomicIndex",
        parent: {"script": 107, "name": "EconomicIndex"},
        isClass: false,
        properties: {"headline": 9},
        methods: {
        },
      },
      {
        name: "bcIndex",
        className: "EconomicIndex",
        parent: {"script": 107, "name": "EconomicIndex"},
        isClass: false,
        properties: {"risk": 1, "headline": 11},
        methods: {
        },
      },
      {
        name: "penIndex",
        className: "EconomicIndex",
        parent: {"script": 107, "name": "EconomicIndex"},
        isClass: false,
        properties: {"risk": 10, "headline": 13},
        methods: {
        },
      },
      {
        name: "economicIndex",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: false,
        properties: {},
        methods: {
          // SCI economicIndex.sc: economicIndex.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.setGlobal(444, _v1);
            acc = _v2;
            const _v3: any = 0;
            acc = _v3;
            const _v4: any = rt.setGlobal(373, _v3);
            acc = _v4;
            let _v5: any = acc;
            _branch6: {
              let _v7: any = 1;
              if (rt.truth(_v7)) {
                const _v8: any = rt.global(307);
                acc = _v8;
                const _v9: any = 80;
                acc = _v9;
                const _v10: any = rt.op(">=", ...[_v8, _v9]);
                acc = _v10;
                _v7 = _v10;
              }
              if (rt.truth(_v7)) {
                const _v11: any = rt.global(372);
                acc = _v11;
                const _v12: any = 4;
                acc = _v12;
                const _v13: any = rt.op(">=", ...[_v11, _v12]);
                acc = _v13;
                _v7 = _v13;
              }
              if (rt.truth(_v7)) {
                const _v14: any = 0;
                acc = _v14;
                const _v15: any = rt.global(374);
                acc = _v15;
                const _v16: any = 20;
                acc = _v16;
                const _v17: any = rt.op("*", ...[_v15, _v16]);
                acc = _v17;
                const _v18: any = await rt.call(107, "Random", [_v14, _v17], this);
                acc = _v18;
                const _v19: any = rt.op("not", ...[_v18]);
                acc = _v19;
                _v7 = _v19;
              }
              acc = _v7;
              _v5 = _v7;
              acc = _v5;
              if (rt.truth(_v5)) {
                const _v20: any = 1;
                acc = _v20;
                const _v21: any = 3;
                acc = _v21;
                const _v22: any = await rt.call(107, "Random", [_v20, _v21], this);
                acc = _v22;
                const _v23: any = rt.setGlobal(373, _v22);
                acc = _v23;
                const _v24: any = rt.setGlobal(415, _v23);
                acc = _v24;
                _v5 = _v24;
                break _branch6;
              }
              const _v25: any = rt.global(307);
              acc = _v25;
              const _v26: any = 120;
              acc = _v26;
              const _v27: any = rt.op("<=", ...[_v25, _v26]);
              acc = _v27;
              _v5 = _v27;
              acc = _v5;
              if (rt.truth(_v5)) {
                const _v28: any = 0;
                acc = _v28;
                const _v29: any = rt.global(374);
                acc = _v29;
                const _v30: any = 30;
                acc = _v30;
                const _v31: any = rt.op("*", ...[_v29, _v30]);
                acc = _v31;
                const _v32: any = await rt.call(107, "Random", [_v28, _v31], this);
                acc = _v32;
                const _v33: any = rt.op("not", ...[_v32]);
                acc = _v33;
                const _v34: any = rt.setGlobal(444, _v33);
                acc = _v34;
                _v5 = _v34;
                break _branch6;
              }
            }
            acc = _v5;
            const _v35: any = rt.global(315);
            acc = _v35;
            const _v36: any = rt.global(307);
            acc = _v36;
            const _v37: any = rt.object(107, "mainI");
            acc = _v37;
            const _v38: any = await rt.send(_v37, "init", [_v35, _v36]);
            acc = _v38;
            const _v39: any = await rt.send(_v37, "doit", []);
            acc = _v39;
            const _v40: any = rt.setGlobal(307, _v39);
            acc = _v40;
            const _v41: any = rt.object(107, "mainI");
            acc = _v41;
            const _v42: any = await rt.send(_v41, "index", []);
            acc = _v42;
            const _v43: any = rt.setGlobal(315, _v42);
            acc = _v43;
            const _v44: any = rt.object(107, "mainI");
            acc = _v44;
            const _v45: any = rt.setLocal(107, 1, _v44);
            acc = _v45;
            const _v46: any = rt.setLocal(107, 0, _v45);
            acc = _v46;
            const _v47: any = rt.global(316);
            acc = _v47;
            const _v48: any = rt.global(308);
            acc = _v48;
            const _v49: any = rt.global(315);
            acc = _v49;
            const _v50: any = rt.object(107, "investIndex");
            acc = _v50;
            const _v51: any = await rt.send(_v50, "init", [_v47, _v48]);
            acc = _v51;
            const _v52: any = await rt.send(_v50, "doit", [_v49]);
            acc = _v52;
            const _v53: any = rt.setGlobal(308, _v52);
            acc = _v53;
            const _v54: any = rt.object(107, "investIndex");
            acc = _v54;
            const _v55: any = await rt.send(_v54, "index", []);
            acc = _v55;
            const _v56: any = rt.setGlobal(316, _v55);
            acc = _v56;
            const _v57: any = rt.object(107, "investIndex");
            acc = _v57;
            const _v58: any = await rt.call(107, "localproc_0", [_v57], this);
            acc = _v58;
            const _v59: any = rt.global(317);
            acc = _v59;
            const _v60: any = rt.global(309);
            acc = _v60;
            const _v61: any = rt.global(315);
            acc = _v61;
            const _v62: any = rt.object(107, "gdsIndex");
            acc = _v62;
            const _v63: any = await rt.send(_v62, "init", [_v59, _v60]);
            acc = _v63;
            const _v64: any = await rt.send(_v62, "doit", [_v61]);
            acc = _v64;
            const _v65: any = rt.setGlobal(309, _v64);
            acc = _v65;
            const _v66: any = rt.object(107, "gdsIndex");
            acc = _v66;
            const _v67: any = await rt.send(_v66, "index", []);
            acc = _v67;
            const _v68: any = rt.setGlobal(317, _v67);
            acc = _v68;
            const _v69: any = rt.object(107, "gdsIndex");
            acc = _v69;
            const _v70: any = await rt.call(107, "localproc_0", [_v69], this);
            acc = _v70;
            const _v71: any = rt.global(318);
            acc = _v71;
            const _v72: any = rt.global(310);
            acc = _v72;
            const _v73: any = rt.global(316);
            acc = _v73;
            const _v74: any = rt.object(107, "gldIndex");
            acc = _v74;
            const _v75: any = await rt.send(_v74, "init", [_v71, _v72]);
            acc = _v75;
            const _v76: any = await rt.send(_v74, "doit", [_v73]);
            acc = _v76;
            const _v77: any = rt.setGlobal(310, _v76);
            acc = _v77;
            const _v78: any = rt.object(107, "gldIndex");
            acc = _v78;
            const _v79: any = await rt.send(_v78, "index", []);
            acc = _v79;
            const _v80: any = rt.setGlobal(318, _v79);
            acc = _v80;
            const _v81: any = rt.object(107, "gldIndex");
            acc = _v81;
            const _v82: any = await rt.call(107, "localproc_0", [_v81], this);
            acc = _v82;
            const _v83: any = rt.global(319);
            acc = _v83;
            const _v84: any = rt.global(311);
            acc = _v84;
            const _v85: any = rt.global(316);
            acc = _v85;
            const _v86: any = rt.object(107, "silIndex");
            acc = _v86;
            const _v87: any = await rt.send(_v86, "init", [_v83, _v84]);
            acc = _v87;
            const _v88: any = await rt.send(_v86, "doit", [_v85]);
            acc = _v88;
            const _v89: any = rt.setGlobal(311, _v88);
            acc = _v89;
            const _v90: any = rt.object(107, "silIndex");
            acc = _v90;
            const _v91: any = await rt.send(_v90, "index", []);
            acc = _v91;
            const _v92: any = rt.setGlobal(319, _v91);
            acc = _v92;
            const _v93: any = rt.object(107, "silIndex");
            acc = _v93;
            const _v94: any = await rt.call(107, "localproc_0", [_v93], this);
            acc = _v94;
            const _v95: any = rt.global(320);
            acc = _v95;
            const _v96: any = rt.global(312);
            acc = _v96;
            const _v97: any = rt.global(316);
            acc = _v97;
            const _v98: any = rt.object(107, "prkIndex");
            acc = _v98;
            const _v99: any = await rt.send(_v98, "init", [_v95, _v96]);
            acc = _v99;
            const _v100: any = await rt.send(_v98, "doit", [_v97]);
            acc = _v100;
            const _v101: any = rt.setGlobal(312, _v100);
            acc = _v101;
            const _v102: any = rt.object(107, "prkIndex");
            acc = _v102;
            const _v103: any = await rt.send(_v102, "index", []);
            acc = _v103;
            const _v104: any = rt.setGlobal(320, _v103);
            acc = _v104;
            const _v105: any = rt.object(107, "prkIndex");
            acc = _v105;
            const _v106: any = await rt.call(107, "localproc_0", [_v105], this);
            acc = _v106;
            const _v107: any = rt.global(321);
            acc = _v107;
            const _v108: any = rt.global(313);
            acc = _v108;
            const _v109: any = rt.global(316);
            acc = _v109;
            const _v110: any = rt.object(107, "bcIndex");
            acc = _v110;
            const _v111: any = await rt.send(_v110, "init", [_v107, _v108]);
            acc = _v111;
            const _v112: any = await rt.send(_v110, "doit", [_v109]);
            acc = _v112;
            const _v113: any = rt.setGlobal(313, _v112);
            acc = _v113;
            const _v114: any = rt.object(107, "bcIndex");
            acc = _v114;
            const _v115: any = await rt.send(_v114, "index", []);
            acc = _v115;
            const _v116: any = rt.setGlobal(321, _v115);
            acc = _v116;
            const _v117: any = rt.object(107, "bcIndex");
            acc = _v117;
            const _v118: any = await rt.call(107, "localproc_0", [_v117], this);
            acc = _v118;
            const _v119: any = rt.global(322);
            acc = _v119;
            const _v120: any = rt.global(314);
            acc = _v120;
            const _v121: any = rt.global(316);
            acc = _v121;
            const _v122: any = rt.object(107, "penIndex");
            acc = _v122;
            const _v123: any = await rt.send(_v122, "init", [_v119, _v120]);
            acc = _v123;
            const _v124: any = await rt.send(_v122, "doit", [_v121]);
            acc = _v124;
            const _v125: any = rt.setGlobal(314, _v124);
            acc = _v125;
            const _v126: any = rt.object(107, "penIndex");
            acc = _v126;
            const _v127: any = await rt.send(_v126, "index", []);
            acc = _v127;
            const _v128: any = rt.setGlobal(322, _v127);
            acc = _v128;
            const _v129: any = rt.object(107, "penIndex");
            acc = _v129;
            const _v130: any = await rt.call(107, "localproc_0", [_v129], this);
            acc = _v130;
            const _v131: any = rt.object(107, "mainI");
            acc = _v131;
            const _v132: any = await rt.send(_v131, "dispose", []);
            acc = _v132;
            const _v133: any = rt.object(107, "investIndex");
            acc = _v133;
            const _v134: any = await rt.send(_v133, "dispose", []);
            acc = _v134;
            const _v135: any = rt.object(107, "gdsIndex");
            acc = _v135;
            const _v136: any = await rt.send(_v135, "dispose", []);
            acc = _v136;
            const _v137: any = rt.object(107, "gldIndex");
            acc = _v137;
            const _v138: any = await rt.send(_v137, "dispose", []);
            acc = _v138;
            const _v139: any = rt.object(107, "silIndex");
            acc = _v139;
            const _v140: any = await rt.send(_v139, "dispose", []);
            acc = _v140;
            const _v141: any = rt.object(107, "prkIndex");
            acc = _v141;
            const _v142: any = await rt.send(_v141, "dispose", []);
            acc = _v142;
            const _v143: any = rt.object(107, "bcIndex");
            acc = _v143;
            const _v144: any = await rt.send(_v143, "dispose", []);
            acc = _v144;
            const _v145: any = rt.object(107, "penIndex");
            acc = _v145;
            const _v146: any = await rt.send(_v145, "dispose", []);
            acc = _v146;
            let _v147: any = acc;
            const _v148: any = rt.global(415);
            acc = _v148;
            const _v149: any = rt.op("not", ...[_v148]);
            acc = _v149;
            _v147 = _v149;
            if (rt.truth(_v149)) {
              let _v150: any = acc;
              _branch151: {
                const _v152: any = rt.local(107, 1);
                acc = _v152;
                const _v153: any = await rt.send(_v152, "index", []);
                acc = _v153;
                const _v154: any = await rt.call(107, "Abs", [_v153], this);
                acc = _v154;
                const _v155: any = rt.local(107, 0);
                acc = _v155;
                const _v156: any = await rt.send(_v155, "index", []);
                acc = _v156;
                const _v157: any = await rt.call(107, "Abs", [_v156], this);
                acc = _v157;
                const _v158: any = rt.op(">", ...[_v154, _v157]);
                acc = _v158;
                _v150 = _v158;
                acc = _v150;
                if (rt.truth(_v150)) {
                  let _v159: any = acc;
                  let _v160: any = 0;
                  if (!rt.truth(_v160)) {
                    let _v161: any = 1;
                    if (rt.truth(_v161)) {
                      const _v162: any = rt.local(107, 1);
                      acc = _v162;
                      const _v163: any = await rt.send(_v162, "index", []);
                      acc = _v163;
                      const _v164: any = await rt.call(107, "Abs", [_v163], this);
                      acc = _v164;
                      const _v165: any = 3;
                      acc = _v165;
                      const _v166: any = rt.op(">=", ...[_v164, _v165]);
                      acc = _v166;
                      _v161 = _v166;
                    }
                    if (rt.truth(_v161)) {
                      const _v167: any = 0;
                      acc = _v167;
                      const _v168: any = 3;
                      acc = _v168;
                      const _v169: any = await rt.call(107, "Random", [_v167, _v168], this);
                      acc = _v169;
                      _v161 = _v169;
                    }
                    acc = _v161;
                    _v160 = _v161;
                  }
                  if (!rt.truth(_v160)) {
                    let _v170: any = 1;
                    if (rt.truth(_v170)) {
                      const _v171: any = rt.local(107, 1);
                      acc = _v171;
                      const _v172: any = await rt.send(_v171, "index", []);
                      acc = _v172;
                      const _v173: any = await rt.call(107, "Abs", [_v172], this);
                      acc = _v173;
                      const _v174: any = 2;
                      acc = _v174;
                      const _v175: any = rt.op("==", ...[_v173, _v174]);
                      acc = _v175;
                      _v170 = _v175;
                    }
                    if (rt.truth(_v170)) {
                      const _v176: any = 0;
                      acc = _v176;
                      const _v177: any = 2;
                      acc = _v177;
                      const _v178: any = await rt.call(107, "Random", [_v176, _v177], this);
                      acc = _v178;
                      const _v179: any = rt.op("not", ...[_v178]);
                      acc = _v179;
                      _v170 = _v179;
                    }
                    acc = _v170;
                    _v160 = _v170;
                  }
                  acc = _v160;
                  _v159 = _v160;
                  if (rt.truth(_v160)) {
                    const _v180: any = rt.local(107, 1);
                    acc = _v180;
                    const _v181: any = await rt.send(_v180, "headline", []);
                    acc = _v181;
                    const _v182: any = 1;
                    acc = _v182;
                    const _v183: any = rt.op("+", ...[_v181, _v182]);
                    acc = _v183;
                    const _v184: any = rt.setGlobal(415, _v183);
                    acc = _v184;
                    _v159 = _v184;
                  }
                  acc = _v159;
                  _v150 = _v159;
                  break _branch151;
                }
                let _v185: any = 0;
                if (!rt.truth(_v185)) {
                  let _v186: any = 1;
                  if (rt.truth(_v186)) {
                    const _v187: any = rt.local(107, 0);
                    acc = _v187;
                    const _v188: any = await rt.send(_v187, "index", []);
                    acc = _v188;
                    const _v189: any = await rt.call(107, "Abs", [_v188], this);
                    acc = _v189;
                    const _v190: any = 3;
                    acc = _v190;
                    const _v191: any = rt.op(">=", ...[_v189, _v190]);
                    acc = _v191;
                    _v186 = _v191;
                  }
                  if (rt.truth(_v186)) {
                    const _v192: any = 0;
                    acc = _v192;
                    const _v193: any = 3;
                    acc = _v193;
                    const _v194: any = await rt.call(107, "Random", [_v192, _v193], this);
                    acc = _v194;
                    _v186 = _v194;
                  }
                  acc = _v186;
                  _v185 = _v186;
                }
                if (!rt.truth(_v185)) {
                  let _v195: any = 1;
                  if (rt.truth(_v195)) {
                    const _v196: any = rt.local(107, 0);
                    acc = _v196;
                    const _v197: any = await rt.send(_v196, "index", []);
                    acc = _v197;
                    const _v198: any = await rt.call(107, "Abs", [_v197], this);
                    acc = _v198;
                    const _v199: any = 2;
                    acc = _v199;
                    const _v200: any = rt.op("==", ...[_v198, _v199]);
                    acc = _v200;
                    _v195 = _v200;
                  }
                  if (rt.truth(_v195)) {
                    const _v201: any = 0;
                    acc = _v201;
                    const _v202: any = 2;
                    acc = _v202;
                    const _v203: any = await rt.call(107, "Random", [_v201, _v202], this);
                    acc = _v203;
                    const _v204: any = rt.op("not", ...[_v203]);
                    acc = _v204;
                    _v195 = _v204;
                  }
                  acc = _v195;
                  _v185 = _v195;
                }
                acc = _v185;
                _v150 = _v185;
                acc = _v150;
                if (rt.truth(_v150)) {
                  const _v205: any = rt.local(107, 0);
                  acc = _v205;
                  const _v206: any = await rt.send(_v205, "headline", []);
                  acc = _v206;
                  const _v207: any = rt.setGlobal(415, _v206);
                  acc = _v207;
                  _v150 = _v207;
                  break _branch151;
                }
              }
              acc = _v150;
              _v147 = _v150;
            }
            acc = _v147;
            const _v208: any = this;
            acc = _v208;
            const _v209: any = await rt.send(_v208, "dispose", []);
            acc = _v209;
            const _acc210: any = acc;
            const _v211: any = 107;
            acc = _v211;
            const _args212: any[] = [_v211];
            await rt.call(107, "DisposeScript", _args212, this);
            const _v213: any = _args212.length === 2 ? _args212[1] : _acc210;
            acc = _v213;
            return acc;
          },
        },
      },
    ],
    procedures: {
      // SCI economicIndex.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        let _v1: any = acc;
        _branch2: {
          const _v3: any = (args[0] ?? 0);
          acc = _v3;
          const _v4: any = await rt.send(_v3, "index", []);
          acc = _v4;
          const _v5: any = rt.local(107, 1);
          acc = _v5;
          const _v6: any = await rt.send(_v5, "index", []);
          acc = _v6;
          const _v7: any = rt.op("<", ...[_v4, _v6]);
          acc = _v7;
          _v1 = _v7;
          acc = _v1;
          if (rt.truth(_v1)) {
            const _v8: any = (args[0] ?? 0);
            acc = _v8;
            const _v9: any = rt.setLocal(107, 1, _v8);
            acc = _v9;
            _v1 = _v9;
            break _branch2;
          }
          const _v10: any = (args[0] ?? 0);
          acc = _v10;
          const _v11: any = await rt.send(_v10, "index", []);
          acc = _v11;
          const _v12: any = rt.local(107, 0);
          acc = _v12;
          const _v13: any = await rt.send(_v12, "index", []);
          acc = _v13;
          const _v14: any = rt.op(">", ...[_v11, _v13]);
          acc = _v14;
          _v1 = _v14;
          acc = _v1;
          if (rt.truth(_v1)) {
            const _v15: any = (args[0] ?? 0);
            acc = _v15;
            const _v16: any = rt.setLocal(107, 0, _v15);
            acc = _v16;
            _v1 = _v16;
            break _branch2;
          }
        }
        acc = _v1;
        return acc;
      },
    },
    exports: {"0": "economicIndex"},
  });
}
