# Jones in the Fast Lane — decompile workbench

Arbeidsrepo for Toms Jones-prosjekt. Målet er redigerbar kode, utskiftbar grafikk og etter hvert en testet moderne PC-port.

**Dette er et verktøy-/reverse-engineering-prosjekt, ikke en ferdig moderne spillmotor.** Originaloppstart og gjennomspilling er ikke bekreftet. Det lokale arbeidsarkivet besto 15 datatester 2. oktober 2026; det er ikke en spilltest.

## Første gangs import av hele arbeidspakken

GitHub-koblingen kunne overføre tekstkoden direkte, men ikke det lokale ZIP-arkivet med originalfiler, råressurser og PNG-er. Derfor er en kontrollert ZIP-import lagt til.

Last opp den uendrede **`Jones_decomp_arbeidsprosjekt.zip`** fra prosjektchatten til roten av dette repoet, eller til `imports/`. Ikke pakk ZIP-en ut først. Arbeidsflyten **Import workbench** skal kontrollere arkivet, pakke ut manglende filer, kjøre testene og legge resultatet på samme gren med en vanlig commit. Se Actions for faktisk resultat. Dersom GitHub ikke tillater at arbeidsflyten skriver til grenen, kan den samme importen kjøres lokalt:

```sh
python3 tools/import_workbench.py /sti/til/Jones_decomp_arbeidsprosjekt.zip
```

Importen krever denne SHA-256-kontrollsummen:

```text
c2fa12f8f58caa6857ecea1cfc2c8d0e6ea8da035fbf19b594beef07ebcf2780
```

Eksisterende endrede arbeidsfiler beholdes. Konflikter i `original/` stopper importen. Skjermbildet som allerede lå i repoet, beholdes.

**Ikke regn originalfilene eller grafikken som innlagt før de faktisk finnes i repoet.** `reports/github_import.json` opprettes av en vellykket import. Arbeidspakken inneholder 22 originalfiler, 266 forskjellige SCI-ressurser, 69 lavnivåskript, 39 tekst-JSON-filer og 752 PNG-ruter. PNG-antallet inkluderer delte og speilvendte ruter.

## Kom i gang etter import

Python 3.10 eller nyere. Pillow brukes til PNG-import/-eksport.

```sh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python tools/jones.py verify
python -m unittest discover -s tests -v
```

Originalen startes med en separat installasjon av ScummVM:

```sh
bash start_linux.sh
```

På Windows brukes `start_windows.cmd`. Startfilene er klargjort, men ikke spilltestet her. Åpne `graphics/index.html` etter import for å bla gjennom grafikken.

## Hvor arbeidet ligger

| Mappe | Innhold |
| --- | --- |
| `tools/` | Uttrekk, dekomprimering, assembler, PNG-/tekstimport, patch-bygg og sikker ZIP-import. |
| `tests/` | Automatiske data- og importtester. Full spilldatatest krever importert arbeidspakke. |
| `original/` | Uendrede opplastede originalfiler; kommer med ZIP-importen. |
| `source_asm/` | 69 redigerbare SCI-lavnivåskript; kommer med ZIP-importen. |
| `script_metadata/` | Objekter, metoder, strenger og andre skriptstrukturer. |
| `graphics/` | PNG-ruter og lokal grafikkviser; kommer med ZIP-importen. |
| `extracted/` | Råressurser, SCI-patcher og redigerbar tekst. |
| `mods/` | Ferdige erstatningsressurser; ikke skriv over originalene. |
| `reference/` | Separat referanseindeks og valgfri fastlåst tredjepartsdekompilering. |
| `reports/` | Kontrollsummer, testlogger og importstatus. |

Den utførlige norske veiledningen `README_NO.md` følger med arkivet. `docs/SOURCES.md` dokumenterer formatreferanser og opprinnelse. `AGENTS.md` beskriver arbeidsregler for Claude/Codex og andre kodeverktøy.

## Begrensninger som fortsatt gjelder

Assembleren bevarer eksisterende adresser og instruksjonslengder. Den er ikke en høynivåkompilator. Grafikkpatcher bruker originalstørrelse og originalpalett; de gir ikke HD-grafikk automatisk. PIC-bakgrunnene er bevart som SCI-data, ikke ferdig gjengitte PNG-bakgrunner. Lyd, lagring, full spilling og en ny motor må fortsatt testes eller utvikles.

De nye verktøyene er merket GPL-3.0-or-later. Dette relisensierer ikke Sierra-spillet, eksportert originalkode, grafikk eller tredjepartsreferanser. Full verktøylisens følger med arbeidspakken som `LICENSE.tools.txt`.
