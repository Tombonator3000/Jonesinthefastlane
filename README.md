# Jones in the Fast Lane — decompile workbench

Arbeidsrepo for Toms Jones-prosjekt. Målet er redigerbar kode, utskiftbar grafikk og etter hvert en testet moderne PC-port.

## Arbeidspakken er importert

**Hele arbeidspakken ligger nå utpakket på `main`. Ingen ny ZIP-opplasting er nødvendig.**

Kontrollert 2. oktober 2026: arbeidsflyten [Import workbench](https://github.com/Tombonator3000/Jonesinthefastlane/actions/runs/36969861967) fullførte med `success`. Den la til **1 504 filer**; **13 identiske filer** lå allerede i repoet. Ingen konflikter med endrede filer ble rapportert. Importen ble lagret i commit `76282663e768d5fa432f69bd5501e0b45532608c`.

**Alle 22 data- og importtester besto på GitHub etter utpakking.** Dette inkluderer originalenes kontrollsummer, byte-identisk sammenstilling av alle 69 uendrede skript, tekstressurser og pikselkontroll av 752 PNG-ruter.

- [Importresultat](reports/github_import.json)
- [Full testlogg fra importkjøringen](reports/github_import_tests.txt)
- [Detaljert status](docs/REPO_STATUS.md)

**Dette er fortsatt et arbeidsprosjekt for uttrekk og redigering, ikke en ferdig moderne spillmotor.** Testene bekrefter data og verktøy, ikke oppstart, gjennomspilling, lyd eller lagring.

## Kom i gang

Python 3.10 eller nyere. Pillow brukes til PNG-import/-eksport. Kjør fra repoets rotmappe:

```sh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python tools/jones.py verify
python -m unittest discover -s tests -v
```

Originalen kan forsøkes startet med en separat installasjon av ScummVM:

```sh
bash start_linux.sh
```

På Windows brukes `start_windows.cmd`. ScummVM er ikke inkludert. Startfilene er klargjort, men oppstart er ikke bekreftet av datatestene. Åpne `graphics/index.html` lokalt for grafikkviseren; nettleserfunksjonen er ikke bekreftet av PNG-testene.

## Hvor arbeidet ligger

| Mappe | Innhold |
| --- | --- |
| `tools/` | Uttrekk, dekomprimering, assembler, PNG-/tekstimport, patch-bygg og sikker ZIP-import. |
| `tests/` | Automatiske data- og importtester. |
| `original/` | 22 uendrede opplastede originalfiler. |
| `source_asm/` | 69 redigerbare SCI-lavnivåskript; ikke høynivåkildekode. |
| `script_metadata/` | Objekter, metoder, strenger og andre skriptstrukturer. |
| `graphics/` | 752 PNG-ruter fra 90 view-ressurser og lokal grafikkviser. PNG-antallet inkluderer delte og speilvendte ruter. |
| `extracted/` | 266 forskjellige råressurser, tilhørende SCI-patcher og 39 redigerbare tekst-JSON-filer. |
| `mods/` | Ferdige erstatningsressurser; ikke skriv over originalene. |
| `reference/` | Separat referanseindeks og verktøy for valgfri, fastlåst tredjepartsdekompilering. |
| `reports/` | Kontrollsummer, testlogger og importstatus. |

[README_NO.md](README_NO.md) inneholder den utførlige norske veiledningen. [docs/SOURCES.md](docs/SOURCES.md) dokumenterer formatreferanser og opprinnelse. [AGENTS.md](AGENTS.md) beskriver arbeidsregler for Claude/Codex og andre kodeverktøy.

## Neste verifiserbare milepæl

Kjør originalen i ScummVM og dokumenter oppstart, menyvalg, en spilleruke, arbeid, bank, butikk, utdanning og lagring/lasting. Test deretter én tekstendring og én grafikkendring i en separat spillmappe. Etter dette kan høynivårekonstruksjon og moderne spillmoduler sammenlignes med en fungerende referanse.

## Begrensninger som fortsatt gjelder

Assembleren bevarer eksisterende adresser og instruksjonslengder. Den er ikke en høynivåkompilator. Grafikkpatcher bruker originalstørrelse og originalpalett; de gir ikke HD-grafikk automatisk. PIC-bakgrunnene er bevart som SCI-data, ikke ferdig gjengitte PNG-bakgrunner. Lyd, lagring, full spilling og en ny motor må fortsatt testes eller utvikles.

## Arkiv og eventuell gjenoppretting

`Jones_decomp_arbeidsprosjekt.zip` er beholdt som opplastet. SHA-256:

```text
c2fa12f8f58caa6857ecea1cfc2c8d0e6ea8da035fbf19b594beef07ebcf2780
```

Bare ved behov for å gjenopprette manglende filer:

```sh
python3 tools/import_workbench.py Jones_decomp_arbeidsprosjekt.zip
```

Importøren beholder eksisterende endrede arbeidsfiler og stopper ved konflikter i `original/`. Den opprinnelige importloggen dokumenterer den første vellykkede GitHub-importen; nye kjøringer kan oppdatere rapporten.

De nye verktøyene er merket GPL-3.0-or-later. Dette relisensierer ikke Sierra-spillet, eksportert originalkode, grafikk eller tredjepartsreferanser. Full verktøylisens ligger i `LICENSE.tools.txt`; se også `LICENSE.md`.
