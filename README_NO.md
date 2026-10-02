# Jones in the Fast Lane — arbeidsprosjekt 0.1

**Status 2. oktober 2026:** Ressursuttrekk, redigerbar lavnivåkode og verktøy for endringer er levert. Dette er **ikke** en ferdig høynivådekompilering eller en selvstendig moderne PC-port. Oppstart og gjennomspilling er **ikke testet** her: ScummVM var ikke installert i kjøremiljøet.

## Det som faktisk er på plass

| Innhold | Kontrollert resultat |
| --- | --- |
| Originalfiler | 22 forskjellige filnavn; alle 20 fra tidligere bolker har uendrede SHA-256-kontrollsummer. |
| Siste bolk | To nye filer, `resource.map` og `resource.bak`; åtte identiske gjenopplastinger. |
| Ressurser | 299 kartoppføringer, 266 forskjellige ressurser; 33 ekstra oppføringer er byte-identiske kopier mellom volumene. Alle pakket ut uten feil. |
| Kode | 69 `.sciasm`-filer; 53 923 dekodede instruksjoner; alle 69 blir byte-identiske med originalskriptene ved sammenstilling uten endringer. |
| Grafikk | 752 PNG-filer fra 90 view-ressurser. Antallet inkluderer speilvendte og delte animasjonsruter, ikke 752 unike tegninger. |
| Tekst | 39 redigerbare JSON-filer; uendret eksport/import gir identiske bytes. Tekst inne i selve skriptene ligger fortsatt der. |
| Tester | 15 automatiske datatester bestått. Ingen av dem er en gjennomspilling i spillmotoren. |

`resource.bak` er en gammel tekstkonfigurasjon for EGA, ikke et ekstra ressursarkiv. Den aktive `resource.cfg` bruker VGA, og driverfilene den peker på er med. De tre hovedfilenes størrelser og ScummVM-fingeravtrykk matcher den engelske DOS/VGA-utgaven. `version` inneholder `1.000.060`. Se `reports/version_match.json` og `docs/SOURCES.md`.

## Se grafikken med en gang

Åpne **`graphics/index.html`** i nettleseren etter at hele ZIP-filen er pakket ut. Ingen server eller nettilgang er nødvendig. Velg en view-ressurs, animasjonsretning («loop») og enkeltbilde («cel»). Avspillingen er en forhåndsvisning med valgt hastighet, ikke originalspillets tidsstyring. `graphics/oversikt.png` er en samlet oversikt. Viseren er syntakskontrollert, men nettleserens administratorpolicy blokkerte interaktiv testing her; se `reports/viewer_test.json`.

PNG-filene ligger i `graphics/views/`. De beholder palettindekser og gjennomsiktighetsindeks. Fargene i selve spillet kan påvirkes av palettendringer under kjøring.

**Bakgrunner er ikke ferdig konvertert:** De sju PIC-ressursene ligger som rådata og SCI-ressursfiler i `extracted/`, ikke som ferdig gjengitte PNG-bakgrunner. Lyd, skrifter og markører er også bevart i SCI-format, ikke konvertert til WAV, TTF eller lignende.

## Starte referansespillet

ScummVM må installeres separat. Det følger ikke med denne pakken. Startfilene bruker den dokumenterte kommandolinjen for en spillmappe og spill-ID; de er ikke kjørt mot en installert spillmotor her. Kilde: ScummVMs kommandolinjedokumentasjon i `docs/SOURCES.md`.

**Kubuntu/Linux:** Åpne terminal i denne prosjektmappen og kjør:

```sh
bash start_linux.sh
```

**Windows:** Kjør `start_windows.cmd`. Programmet leter etter ScummVM i PATH og vanlige installasjonsmapper. En annen plassering kan oppgis med miljøvariabelen `SCUMMVM_BIN`.

Alternativt: Legg til mappen `original` i ScummVMs vanlige spillvelger. Bruk originalen som referanse før du prøver endringer. Lagrede spill og logger fra startfilene legges i lokale `saves/` og `logs/`.

## Redigering med verktøyene i pakken

Python **3.10 eller nyere**. Bare PNG-funksjonene trenger Pillow. På Linux kan du bruke et virtuelt miljø:

```sh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python tools/jones.py verify
python -m unittest discover -s tests -v
```

På Windows kan `py -3` brukes i stedet for `python3`, og miljøet aktiveres med `.venv\Scripts\activate`.

Alle kommandoene nedenfor kjøres fra prosjektmappen. Lagre endringer i `mods/`, **ikke** i `original/`. Datatestene forutsetter at den leverte eksporten er uendret; ta kopier av filer du vil redigere.

### Bytte en figur eller gjenstand

Kopier for eksempel `graphics/views/view_0274/loop_00_cel_00.png` til `work_art/min_figur.png`. Rediger den med samme bildestørrelse. Behold originalpaletten og helt transparent eller helt ugjennomsiktig alfa.

```sh
python tools/jones.py view --id 274 --loop 0 --cel 0 --png work_art/min_figur.png --out mods/view.274
```

Opprett `work_art/` for arbeidskopien. Hold PNG-, JSON- og kodearbeidsfiler utenfor `mods/`; den mappen brukes til de ferdige SCI-patchene.

Legg til `--quantize` bare når du godtar at nye farger oversettes til nærmeste farge i den gamle paletten. Ingen HD-oppløsning eller ny fargedybde blir innført av dette verktøyet. Ved flere endringer i samme view må neste kommando også få `--base-patch mods/view.274`; ellers starter den på nytt fra originalgrafikken og den forrige endringen blir ikke med.

### Endre tekst

Kopier og rediger `extracted/text/text_204.json`. Behold rekkefølgen på tekstoppføringene, ressursnummeret og eventuelle tomme oppføringer. Endre selve tekstene, ikke indeksene. Spillfonten og dialogstørrelsen setter praktiske grenser for tegn og lengde.

```sh
python tools/jones.py text work_text/text_204.json --out mods/text.204
```

Eksemplet forutsetter at du først har lagt arbeidskopien i `work_text/`. Importen bruker CP437 og avviser tegn som ikke kan kodes. Verktøyet tilpasser ikke dialogrutene til lengre tekst.

### Endre kode på lavt nivå

`source_asm/` inneholder faktisk SCI-bytekode som lesbare instruksjoner, ikke bare en heksdump. Originale objektnavn, metoder, tekststrenger og lokale data ligger i de tilhørende metadatafilene. Se `docs/SCRIPT_INDEX.md` for navigering.

Eksempel etter at du har kopiert og redigert et skript:

```sh
python tools/jones.py assemble work_code/script_107.sciasm --out mods/script.107
```

**Viktig begrensning:** Denne første assembleren bevarer alle adresser og instruksjonslengder. Den støtter endringer som passer i eksisterende plass, men ikke å legge til eller fjerne kode vilkårlig. Den avviser endret layout i stedet for å gjette nye hoppadresser. Riktige filformater betyr ikke automatisk riktig spillogikk: hver regelendring må testes i spillet.

### Lage en egen mappe med endringene

`mods/` skal inneholde ferdige patchfiler som `script.107`, `text.204` og `view.274`, eventuelt Markdown-notater. Arbeids-PNG, JSON og `.sciasm` legges i egne mapper.

```sh
python tools/jones.py build --out build/modded
bash start_linux.sh build/modded
```

På Windows brukes `start_windows.cmd build\modded`. Bygget kopierer originalfilene og legger endrede SCI-ressurser ved siden av dem. Det kreves en tom eller ny utmappe, slik at tidligere arbeid ikke overskrives. Dette er fortsatt originalspillet med SCI-endringer, ikke en selvstendig ny motor.

`repack` er et separat **eksperimentelt** verktøy for ukomprimerte ressursarkiver. Dataene består rundturstesten, men kjøring i spillmotoren er ikke testet. Bruk patch-bygg fremfor dette til første redigeringsforsøk.

## Veien fra lavnivåkode til full dekompilering

SCI Companion har et eget høynivåverktøy som rekonstruerer funksjoner, løkker og betingelser. Det er noe annet enn `.sciasm`-filene i denne pakken. Arbeid på en **kopi** av `original/`, åpne kopiens `resource.map` med File → Open, og bruk Script → Manage Decompilation. Dokumentasjonen beskriver generering av `.sc`/`.sco` og anbefaler en ekstra dekompileringsrunde for bedre navn. Resultatet må kompileres og testes; eventuell feilrekonstruksjon må sammenlignes med bytekoden. Se primærkildene i `docs/SOURCES.md`.

Det finnes dessuten en eksisterende referansedekompilering i `sluicebox/sci-scripts`, under `jones-dos-1.000.060`. Denne pakken inneholder bare den kontrollerte `game.ini`-indeksen derfra, **ikke** de komplette `.sc`-kildene. Følgende skript kan hente den fastlåste revisjonen på en maskin med nettilgang:

```sh
python tools/fetch_reference_sources.py
```

Nedlasteren kontrollerer Git-blob-fingeravtrykk og nekter å overskrive lokalt endrede filer. Den er syntakskontrollert, men ikke ende-til-ende-testet her. Matchende mappenavn og versjon er ikke i seg selv bevis for bytekodeekvivalens eller vellykket rekompilering. Kilder legges i `reference/upstream/`, separat fra uttrekket av dine filer.

## Hva som gjenstår før målet ditt er nådd

En ferdig moderne port må ha lesbar og rekompilerbar spillogikk, en kjørende grafikk-/lyd-/inputløsning, lagring og sammenligningstester mot originalen. Ingen av disse er bevist ferdige av at uttrekket er vellykket.

Første manuelle testløp bør dekke oppstart, menyvalg, en hel spilleruke, jobb, bank, innkjøp, utdanning, lagring/lasting og én liten grafikk- og tekstendring. Noter forventet og faktisk resultat med samme starttilstand. Deretter kan systemene for tid, økonomi, jobber, utdanning og mål skilles ut i moderne moduler uten grafikkavhengighet. Dette er en arbeidsplan, ikke en påstand om utført portering.

## Mapper og rapporter

- `original/`: uendrede, opplastede spillfiler.
- `extracted/`: dekomprimerte data, SCI-patchformat og tekst-JSON.
- `source_asm/`, `script_metadata/`: redigerbar lavnivåkode og dokumenterte strukturer.
- `graphics/`: frakoblet bildeviser, oversikt og enkeltbilder.
- `tools/`, `tests/`: kjørbare Python-verktøy og repeterbare datatester.
- `reports/`: kontrollsummer, versjonsmatch, ressurser, dubletter, testlogg og ærlig kjørestatus.
- `reference/`: separat indeks og status for eksterne referansekilder.
- `docs/`: kildegrunnlag, kodeindeks og testavgrensninger.

## Kode og originalmateriale holdes atskilt

Python-verktøyene, testene og den egenproduserte bildeviseren er merket GPL-3.0-or-later; lisensvilkårene står i `LICENSE.tools.txt`. Oppføringer og logikk basert på formatreferansene er kreditert i `docs/SOURCES.md`.

Denne verktøylisensen tildeler **ikke** rettigheter til Sierra-spillet, grafikken, lyden, uttrekket av originalkode eller tredjepartsreferansene. De er ikke merket som ditt eget eller fritt lisensiert innhold. Del derfor ikke hele pakken som om den var en ny, åpen kildekodeutgivelse av spillet. Hold originale ressurser og dekompilert spillkode atskilt fra moduler du skriver selv når du bygger et eget prosjekt.
