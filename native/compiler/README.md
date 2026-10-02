# SCI source translation

`tools/translate_sci.py` translates the pinned, separately attributed SCI source into ordinary editable asynchronous TypeScript. The browser receives functions and object definitions, not source syntax trees or a bytecode interpreter. `native/generated/index.ts` registers 69 modules: 72 classes, 526 instances, 738 methods and 98 procedures. Generated source headers identify the upstream revision and input hash.

The translator resolves flat SCI global/local/parameter/temp storage, inherited properties, script-local object names, original numeric selectors and header constants. It lowers control flow directly to JavaScript branches and labeled loops. Arithmetic goes through the runtime's 16-bit operations; `and`, `or` and chained adjacent comparisons short circuit. It captures complete selector argument frames before evaluating receivers, forwards `&rest`, preserves mutable `argc`, and represents addresses as references into the same flat storage. Unknown identifiers and unsupported syntax fail at build time before any output is written.

Two narrowly defined source issues are explicit:

- `Game.Rm.init` reads the object named `controls` and writes its identically named property. Original script994 instructions `@06ad lofsa` and `@06b0 aTop` disambiguate that read. Other `controls` reads remain properties. The test checks this distinction.
- `discount.localproc_1` and `discount.localproc_2` are marked unused in the decompiled reference and contain `super` outside an object. They have no callers or corresponding initial code-section procedures in original script211. Their generated functions explicitly throw if invoked. No superclass is invented. The manifest records this limitation.

The duplicate `MenuBar` name belongs to script997's subclass of script255's unnamed base. Every original class-reference operand uses species18 (the subclass), including script255 `@0fa4`; the translator therefore binds all expression references to script997 while retaining script255 as the explicit parent. Tests check this binding and compare all 598 source object parent relationships against the original binary metadata.

Brace-string underscores are decoded as literal spaces, as confirmed against original bank label bytes. `DisposeScript` retains the previous accumulator (or its explicit second argument), matching the original kernel; this matters for dialog methods ending with a return value followed by script disposal. The runtime handles disposal/reload separately so repeated shop visits receive original local variables and AI script state.

The source remains reference material, not proof of exhaustive binary equivalence. `manifest.json` deliberately sets `parityVerified` to false. The separately validated fixed-layout assembler still proves only that unchanged original script resources round-trip byte-for-byte. Native validation is separate: compiler execution fixtures, direct tests of original money/asset/job/education/time/goal/AI rules, and real original-interface journeys. Initialization, save/restore, audio, display and scheduling also depend on the native runtime and require integration tests.

Regenerate with `python3 tools/translate_sci.py`; run `python3 -m unittest tests.test_sci_translation -v` and `pnpm test:native`. Generated game code retains Sierra/sluicebox provenance; the translator and new runtime do not confer a new license on original game material.
