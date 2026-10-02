// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/n108.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 7ebe252df2d1ed273486a2e730b867c89bca851fce528b96b0c6534f0f8c6f32
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(108, {
    name: "n108",
    uses: [0, 104, 201],
    locals: [0],
    objects: [
    ],
    procedures: {
      // SCI n108.sc: proc108_0
      "proc108_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = 0;
        acc = _v1;
        const _v2: any = rt.setLocal(108, 0, _v1);
        acc = _v2;
        let _v3: any = acc;
        const _v4: any = rt.global(323);
        acc = _v4;
        const _v5: any = 60;
        acc = _v5;
        const _v6: any = rt.op("!=", ...[_v4, _v5]);
        acc = _v6;
        _v3 = _v6;
        if (rt.truth(_v6)) {
          let _v7: any = acc;
          _branch8: {
            const _v9: any = rt.global(302);
            acc = _v9;
            const _v10: any = await rt.send(_v9, "dressedForWork", []);
            acc = _v10;
            const _v11: any = rt.op("not", ...[_v10]);
            acc = _v11;
            _v7 = _v11;
            acc = _v7;
            if (rt.truth(_v7)) {
              let _v12: any = acc;
              const _v13: any = rt.global(413);
              acc = _v13;
              _v12 = _v13;
              if (rt.truth(_v13)) {
                const _v14: any = 16;
                acc = _v14;
                const _v15: any = rt.global(413);
                acc = _v15;
                const _v16: any = await rt.send(_v15, "init", [_v14]);
                acc = _v16;
                _v12 = _v16;
              }
              acc = _v12;
              _v7 = _v12;
              const _v17: any = 108;
              acc = _v17;
              const _v18: any = 0;
              acc = _v18;
              const _v19: any = 310;
              acc = _v19;
              const _v20: any = rt.global(413);
              acc = _v20;
              const _v21: any = rt.global(440);
              acc = _v21;
              const _v22: any = rt.global(441);
              acc = _v22;
              const _v23: any = rt.global(442);
              acc = _v23;
              const _v24: any = 25;
              acc = _v24;
              const _v25: any = rt.global(426);
              acc = _v25;
              const _v26: any = await rt.call(104, "proc104_1", [_v17, _v18, _v19, _v20, _v21, _v22, _v23, _v24, _v25], this);
              acc = _v26;
              _v7 = _v26;
              break _branch8;
            }
            const _v27: any = rt.global(302);
            acc = _v27;
            const _v28: any = await rt.send(_v27, "dependibility", []);
            acc = _v28;
            const _v29: any = rt.global(302);
            acc = _v29;
            const _v30: any = await rt.send(_v29, "minDepend", []);
            acc = _v30;
            const _v31: any = 5;
            acc = _v31;
            const _v32: any = rt.op("-", ...[_v30, _v31]);
            acc = _v32;
            const _v33: any = rt.op("<", ...[_v28, _v32]);
            acc = _v33;
            _v7 = _v33;
            acc = _v7;
            if (rt.truth(_v7)) {
              let _v34: any = acc;
              const _v35: any = rt.global(413);
              acc = _v35;
              _v34 = _v35;
              if (rt.truth(_v35)) {
                const _v36: any = 16;
                acc = _v36;
                const _v37: any = rt.global(413);
                acc = _v37;
                const _v38: any = await rt.send(_v37, "init", [_v36]);
                acc = _v38;
                _v34 = _v38;
              }
              acc = _v34;
              _v7 = _v34;
              const _v39: any = 30;
              acc = _v39;
              const _v40: any = rt.global(476);
              acc = _v40;
              const _v41: any = await rt.send(_v40, "play", [_v39]);
              acc = _v41;
              _v7 = _v41;
              const _v42: any = 108;
              acc = _v42;
              const _v43: any = 1;
              acc = _v43;
              const _v44: any = 310;
              acc = _v44;
              const _v45: any = rt.global(413);
              acc = _v45;
              const _v46: any = rt.global(440);
              acc = _v46;
              const _v47: any = rt.global(441);
              acc = _v47;
              const _v48: any = rt.global(442);
              acc = _v48;
              const _v49: any = 25;
              acc = _v49;
              const _v50: any = rt.global(426);
              acc = _v50;
              const _v51: any = await rt.call(104, "proc104_1", [_v42, _v43, _v44, _v45, _v46, _v47, _v48, _v49, _v50], this);
              acc = _v51;
              _v7 = _v51;
              const _v52: any = -1;
              acc = _v52;
              const _v53: any = rt.setLocal(108, 0, _v52);
              acc = _v53;
              _v7 = _v53;
              const _v54: any = 0;
              acc = _v54;
              const _v55: any = 0;
              acc = _v55;
              const _v56: any = 0;
              acc = _v56;
              const _v57: any = -1;
              acc = _v57;
              const _v58: any = rt.global(302);
              acc = _v58;
              const _v59: any = await rt.send(_v58, "wage", [_v54]);
              acc = _v59;
              const _v60: any = await rt.send(_v58, "worksAt", [_v55]);
              acc = _v60;
              const _v61: any = await rt.send(_v58, "occupation", [_v56]);
              acc = _v61;
              const _v62: any = await rt.send(_v58, "jobT", [_v57]);
              acc = _v62;
              _v7 = _v62;
              break _branch8;
            }
            let _v63: any = 1;
            if (rt.truth(_v63)) {
              const _v64: any = rt.global(302);
              acc = _v64;
              const _v65: any = await rt.send(_v64, "dependibility", []);
              acc = _v65;
              const _v66: any = rt.global(302);
              acc = _v66;
              const _v67: any = await rt.send(_v66, "minDepend", []);
              acc = _v67;
              const _v68: any = 2;
              acc = _v68;
              const _v69: any = rt.op("-", ...[_v67, _v68]);
              acc = _v69;
              const _v70: any = rt.op("<", ...[_v65, _v69]);
              acc = _v70;
              _v63 = _v70;
            }
            if (rt.truth(_v63)) {
              const _v71: any = rt.global(329);
              acc = _v71;
              _v63 = _v71;
            }
            acc = _v63;
            _v7 = _v63;
            acc = _v7;
            if (rt.truth(_v7)) {
              let _v72: any = acc;
              const _v73: any = rt.global(413);
              acc = _v73;
              _v72 = _v73;
              if (rt.truth(_v73)) {
                const _v74: any = 16;
                acc = _v74;
                const _v75: any = rt.global(413);
                acc = _v75;
                const _v76: any = await rt.send(_v75, "init", [_v74]);
                acc = _v76;
                _v72 = _v76;
              }
              acc = _v72;
              _v7 = _v72;
              const _v77: any = 108;
              acc = _v77;
              const _v78: any = 2;
              acc = _v78;
              const _v79: any = 310;
              acc = _v79;
              const _v80: any = rt.global(413);
              acc = _v80;
              const _v81: any = rt.global(440);
              acc = _v81;
              const _v82: any = rt.global(441);
              acc = _v82;
              const _v83: any = rt.global(442);
              acc = _v83;
              const _v84: any = 25;
              acc = _v84;
              const _v85: any = rt.global(426);
              acc = _v85;
              const _v86: any = await rt.call(104, "proc104_1", [_v77, _v78, _v79, _v80, _v81, _v82, _v83, _v84, _v85], this);
              acc = _v86;
              _v7 = _v86;
              const _v87: any = await rt.call(108, "localproc_0", [], this);
              acc = _v87;
              _v7 = _v87;
              break _branch8;
            }
            const _v88: any = await rt.call(108, "localproc_0", [], this);
            acc = _v88;
            _v7 = _v88;
            break _branch8;
          }
          acc = _v7;
          _v3 = _v7;
        } else {
          let _v89: any = acc;
          const _v90: any = rt.global(413);
          acc = _v90;
          _v89 = _v90;
          if (rt.truth(_v90)) {
            const _v91: any = 16;
            acc = _v91;
            const _v92: any = rt.global(413);
            acc = _v92;
            const _v93: any = await rt.send(_v92, "init", [_v91]);
            acc = _v93;
            _v89 = _v93;
          }
          acc = _v89;
          _v3 = _v89;
          const _v94: any = 108;
          acc = _v94;
          const _v95: any = 3;
          acc = _v95;
          const _v96: any = 310;
          acc = _v96;
          const _v97: any = rt.global(413);
          acc = _v97;
          const _v98: any = rt.global(440);
          acc = _v98;
          const _v99: any = rt.global(441);
          acc = _v99;
          const _v100: any = rt.global(442);
          acc = _v100;
          const _v101: any = 25;
          acc = _v101;
          const _v102: any = rt.global(426);
          acc = _v102;
          const _v103: any = await rt.call(104, "proc104_1", [_v94, _v95, _v96, _v97, _v98, _v99, _v100, _v101, _v102], this);
          acc = _v103;
          _v3 = _v103;
        }
        acc = _v3;
        const _v104: any = rt.local(108, 0);
        acc = _v104;
        return _v104;
        return acc;
      },
      // SCI n108.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0];
        const _v1: any = 0;
        acc = _v1;
        const _v2: any = rt.setGlobal(329, _v1);
        acc = _v2;
        let _v3: any = acc;
        const _v4: any = rt.global(302);
        acc = _v4;
        const _v5: any = await rt.send(_v4, "experience", []);
        acc = _v5;
        const _v6: any = rt.global(302);
        acc = _v6;
        const _v7: any = await rt.send(_v6, "maxExperience", []);
        acc = _v7;
        const _v8: any = rt.global(302);
        acc = _v8;
        const _v9: any = await rt.send(_v8, "expCredit", []);
        acc = _v9;
        const _v10: any = rt.op("+", ...[_v7, _v9]);
        acc = _v10;
        const _v11: any = rt.op("<", ...[_v5, _v10]);
        acc = _v11;
        _v3 = _v11;
        if (rt.truth(_v11)) {
          const _v12: any = rt.global(302);
          acc = _v12;
          const _v13: any = await rt.send(_v12, "experience", []);
          acc = _v13;
          const _v14: any = 1;
          acc = _v14;
          const _v15: any = rt.op("+", ...[_v13, _v14]);
          acc = _v15;
          const _v16: any = rt.global(302);
          acc = _v16;
          const _v17: any = await rt.send(_v16, "experience", [_v15]);
          acc = _v17;
          _v3 = _v17;
        }
        acc = _v3;
        let _v18: any = acc;
        const _v19: any = rt.global(302);
        acc = _v19;
        const _v20: any = await rt.send(_v19, "dependibility", []);
        acc = _v20;
        const _v21: any = rt.global(302);
        acc = _v21;
        const _v22: any = await rt.send(_v21, "minDepend", []);
        acc = _v22;
        const _v23: any = 20;
        acc = _v23;
        const _v24: any = rt.global(302);
        acc = _v24;
        const _v25: any = await rt.send(_v24, "eduCredit", []);
        acc = _v25;
        const _v26: any = rt.op("+", ...[_v22, _v23, _v25]);
        acc = _v26;
        const _v27: any = rt.op("<", ...[_v20, _v26]);
        acc = _v27;
        _v18 = _v27;
        if (rt.truth(_v27)) {
          const _v28: any = rt.global(302);
          acc = _v28;
          const _v29: any = await rt.send(_v28, "dependibility", []);
          acc = _v29;
          const _v30: any = 1;
          acc = _v30;
          const _v31: any = rt.op("+", ...[_v29, _v30]);
          acc = _v31;
          const _v32: any = rt.global(302);
          acc = _v32;
          const _v33: any = await rt.send(_v32, "dependibility", [_v31]);
          acc = _v33;
          _v18 = _v33;
        }
        acc = _v18;
        let _v34: any = acc;
        const _v35: any = rt.global(302);
        acc = _v35;
        const _v36: any = await rt.send(_v35, "wage", []);
        acc = _v36;
        _v34 = _v36;
        if (rt.truth(_v36)) {
          const _v37: any = rt.global(302);
          acc = _v37;
          const _v38: any = await rt.send(_v37, "dependibility", []);
          acc = _v38;
          const _v39: any = 8;
          acc = _v39;
          const _v40: any = rt.op("/", ...[_v38, _v39]);
          acc = _v40;
          const _v41: any = 10;
          acc = _v41;
          const _v42: any = rt.op("*", ...[_v40, _v41]);
          acc = _v42;
          _v34 = _v42;
        } else {
          const _v43: any = 0;
          acc = _v43;
          _v34 = _v43;
        }
        acc = _v34;
        const _v44: any = rt.global(302);
        acc = _v44;
        const _v45: any = await rt.send(_v44, "carStat", [_v34]);
        acc = _v45;
        let _v46: any = acc;
        const _v47: any = rt.global(302);
        acc = _v47;
        const _v48: any = await rt.send(_v47, "carStat", []);
        acc = _v48;
        const _v49: any = 100;
        acc = _v49;
        const _v50: any = rt.op(">", ...[_v48, _v49]);
        acc = _v50;
        _v46 = _v50;
        if (rt.truth(_v50)) {
          const _v51: any = 100;
          acc = _v51;
          const _v52: any = rt.global(302);
          acc = _v52;
          const _v53: any = await rt.send(_v52, "carStat", [_v51]);
          acc = _v53;
          _v46 = _v53;
        }
        acc = _v46;
        const _v54: any = rt.global(302);
        acc = _v54;
        const _v55: any = await rt.send(_v54, "wage", []);
        acc = _v55;
        const _v56: any = 8;
        acc = _v56;
        const _v57: any = rt.op("*", ...[_v55, _v56]);
        acc = _v57;
        const _v58: any = (temps[0] = _v57);
        acc = _v58;
        const _v59: any = (temps[1] = _v58);
        acc = _v59;
        let _v60: any = acc;
        const _v61: any = rt.global(323);
        acc = _v61;
        const _v62: any = 6;
        acc = _v62;
        const _v63: any = rt.op("+", ...[_v61, _v62]);
        acc = _v63;
        const _v64: any = 60;
        acc = _v64;
        const _v65: any = rt.op(">", ...[_v63, _v64]);
        acc = _v65;
        _v60 = _v65;
        if (rt.truth(_v65)) {
          const _v66: any = 60;
          acc = _v66;
          const _v67: any = rt.global(323);
          acc = _v67;
          const _v68: any = rt.op("-", ...[_v66, _v67]);
          acc = _v68;
          const _v69: any = (temps[2] = _v68);
          acc = _v69;
          _v60 = _v69;
          const _v70: any = (temps[1] ?? 0);
          acc = _v70;
          const _v71: any = (temps[2] ?? 0);
          acc = _v71;
          const _v72: any = rt.op("*", ...[_v70, _v71]);
          acc = _v72;
          const _v73: any = 6;
          acc = _v73;
          const _v74: any = rt.op("/", ...[_v72, _v73]);
          acc = _v74;
          const _v75: any = (temps[1] = _v74);
          acc = _v75;
          _v60 = _v75;
        }
        acc = _v60;
        let _v76: any = acc;
        const _v77: any = rt.global(302);
        acc = _v77;
        const _v78: any = await rt.send(_v77, "rentOwed", []);
        acc = _v78;
        _v76 = _v78;
        if (rt.truth(_v78)) {
          let _v79: any = acc;
          const _v80: any = (temps[0] ?? 0);
          acc = _v80;
          const _v81: any = 2;
          acc = _v81;
          const _v82: any = rt.op("/", ...[_v80, _v81]);
          acc = _v82;
          const _v83: any = rt.global(302);
          acc = _v83;
          const _v84: any = await rt.send(_v83, "rentOwed", []);
          acc = _v84;
          const _v85: any = rt.op(">", ...[_v82, _v84]);
          acc = _v85;
          _v79 = _v85;
          if (rt.truth(_v85)) {
            const _v86: any = (temps[0] ?? 0);
            acc = _v86;
            const _v87: any = rt.global(302);
            acc = _v87;
            const _v88: any = await rt.send(_v87, "rentOwed", []);
            acc = _v88;
            const _v89: any = rt.op("-", ...[_v86, _v88]);
            acc = _v89;
            const _v90: any = (temps[1] = _v89);
            acc = _v90;
            _v79 = _v90;
            const _v91: any = 0;
            acc = _v91;
            const _v92: any = rt.global(302);
            acc = _v92;
            const _v93: any = await rt.send(_v92, "rentOwed", [_v91]);
            acc = _v93;
            _v79 = _v93;
          } else {
            const _v94: any = (temps[0] ?? 0);
            acc = _v94;
            const _v95: any = 2;
            acc = _v95;
            const _v96: any = rt.op("/", ...[_v94, _v95]);
            acc = _v96;
            const _v97: any = 2;
            acc = _v97;
            const _v98: any = rt.op("-", ...[_v96, _v97]);
            acc = _v98;
            const _v99: any = (temps[1] = _v98);
            acc = _v99;
            _v79 = _v99;
            const _v100: any = rt.global(302);
            acc = _v100;
            const _v101: any = await rt.send(_v100, "rentOwed", []);
            acc = _v101;
            const _v102: any = (temps[0] ?? 0);
            acc = _v102;
            const _v103: any = 2;
            acc = _v103;
            const _v104: any = rt.op("/", ...[_v102, _v103]);
            acc = _v104;
            const _v105: any = rt.op("-", ...[_v101, _v104]);
            acc = _v105;
            const _v106: any = rt.global(302);
            acc = _v106;
            const _v107: any = await rt.send(_v106, "rentOwed", [_v105]);
            acc = _v107;
            _v79 = _v107;
          }
          acc = _v79;
          _v76 = _v79;
          let _v108: any = acc;
          const _v109: any = rt.global(413);
          acc = _v109;
          _v108 = _v109;
          if (rt.truth(_v109)) {
            const _v110: any = 16;
            acc = _v110;
            const _v111: any = rt.global(413);
            acc = _v111;
            const _v112: any = await rt.send(_v111, "init", [_v110]);
            acc = _v112;
            _v108 = _v112;
          }
          acc = _v108;
          _v76 = _v108;
          let _v113: any = acc;
          const _v114: any = rt.global(302);
          acc = _v114;
          const _v115: any = await rt.send(_v114, "worksAt", []);
          acc = _v115;
          const _v116: any = 1;
          acc = _v116;
          const _v117: any = rt.op("==", ...[_v115, _v116]);
          acc = _v117;
          _v113 = _v117;
          if (rt.truth(_v117)) {
            const _v118: any = await rt.call(201, "proc201_1", [], this);
            acc = _v118;
            _v113 = _v118;
            const _v119: any = rt.ref("global", 0, 100);
            acc = _v119;
            const _v120: any = 108;
            acc = _v120;
            const _v121: any = 4;
            acc = _v121;
            const _v122: any = (temps[0] ?? 0);
            acc = _v122;
            const _v123: any = (temps[1] ?? 0);
            acc = _v123;
            const _v124: any = rt.op("-", ...[_v122, _v123]);
            acc = _v124;
            const _v125: any = await rt.call(108, "Format", [_v119, _v120, _v121, _v124], this);
            acc = _v125;
            const _v126: any = 310;
            acc = _v126;
            const _v127: any = rt.global(413);
            acc = _v127;
            const _v128: any = rt.global(440);
            acc = _v128;
            const _v129: any = rt.global(441);
            acc = _v129;
            const _v130: any = rt.global(442);
            acc = _v130;
            const _v131: any = 25;
            acc = _v131;
            const _v132: any = rt.global(426);
            acc = _v132;
            const _v133: any = await rt.call(104, "proc104_1", [_v125, _v126, _v127, _v128, _v129, _v130, _v131, _v132], this);
            acc = _v133;
            _v113 = _v133;
          } else {
            const _v134: any = rt.ref("global", 0, 100);
            acc = _v134;
            const _v135: any = 108;
            acc = _v135;
            const _v136: any = 5;
            acc = _v136;
            const _v137: any = (temps[0] ?? 0);
            acc = _v137;
            const _v138: any = (temps[1] ?? 0);
            acc = _v138;
            const _v139: any = rt.op("-", ...[_v137, _v138]);
            acc = _v139;
            const _v140: any = await rt.call(108, "Format", [_v134, _v135, _v136, _v139], this);
            acc = _v140;
            const _v141: any = 310;
            acc = _v141;
            const _v142: any = rt.global(413);
            acc = _v142;
            const _v143: any = rt.global(440);
            acc = _v143;
            const _v144: any = rt.global(441);
            acc = _v144;
            const _v145: any = rt.global(442);
            acc = _v145;
            const _v146: any = 25;
            acc = _v146;
            const _v147: any = rt.global(426);
            acc = _v147;
            const _v148: any = await rt.call(104, "proc104_1", [_v140, _v141, _v142, _v143, _v144, _v145, _v146, _v147], this);
            acc = _v148;
            _v113 = _v148;
          }
          acc = _v113;
          _v76 = _v113;
          const _v149: any = -1;
          acc = _v149;
          const _v150: any = rt.global(302);
          acc = _v150;
          const _v151: any = await rt.send(_v150, "rentExt", [_v149]);
          acc = _v151;
          _v76 = _v151;
        }
        acc = _v76;
        const _v152: any = (temps[1] ?? 0);
        acc = _v152;
        const _v153: any = await rt.call(0, "proc0_10", [_v152], this);
        acc = _v153;
        const _v154: any = 1;
        acc = _v154;
        const _v155: any = rt.setLocal(108, 0, _v154);
        acc = _v155;
        const _v156: any = rt.global(305);
        acc = _v156;
        const _v157: any = await rt.send(_v156, "doit", []);
        acc = _v157;
        const _v158: any = 6;
        acc = _v158;
        const _v159: any = rt.global(417);
        acc = _v159;
        const _v160: any = await rt.send(_v159, "doit", [_v158]);
        acc = _v160;
        return acc;
      },
    },
    exports: {"0": "proc108_0"},
  });
}
