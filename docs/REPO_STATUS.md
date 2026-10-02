# Repooverføring — 2. oktober 2026

## Fullført: hele arbeidspakken ligger på main

ZIP-en er lastet opp og automatisk importert. Originalfiler, utpakkede ressurser, lavnivåskript, skriptmetadata, tekst-JSON, PNG-ruter, grafikkviser, rapporter og veiledninger ligger nå som vanlige filer i repoet. En ny opplasting er ikke nødvendig.

### Kontrollerbare spor

- Opplastingscommit: `983850a18ccd7513b94b003e0bd1786e6dbaeab0`.
- Arbeidsflyt: [Import workbench, kjøring 36969861967](https://github.com/Tombonator3000/Jonesinthefastlane/actions/runs/36969861967), status `completed`, resultat `success`.
- Importcommit: `76282663e768d5fa432f69bd5501e0b45532608c`, melding `Import verified Jones workbench and game resources`.
- Importen ble lagret 2. oktober 2026 kl. 05:39 UTC / 07:39 norsk sommertid.
- [Importresultat](../reports/github_import.json): 1 517 arkivfiler, 1 504 lagt til, 13 identiske eksisterende og ingen rapporterte konflikter med endrede filer.
- [Testlogg](../reports/github_import_tests.txt): alle 22 tester besto etter utpakking på GitHub (`Ran 22 tests in 4.934s`, `OK`).
- Kontrollert arkiv-SHA-256: `c2fa12f8f58caa6857ecea1cfc2c8d0e6ea8da035fbf19b594beef07ebcf2780`.

### Hva testene dekker

Originalenes kontrollsummer, ressurskart/dekomprimering, byte-identisk sammenstilling av 69 uendrede skript, 39 tekstressurser, 266 separate SCI-patcher, pikseldata og transparens i 752 PNG-ruter, grafikkgjenimport, eksperimentell ompakking og importørens sikkerhetskontroller.

### Hva som ikke er bekreftet

Spilloppstart, menyer og faktisk spilling, lyd, lagring/lasting, grafikkviseren i en nettleser, høynivårekompilering og en selvstendig moderne PC-port. De beståtte testene kjører ikke SCI-spillmotoren. En korrekt byte-for-byte-retur i verktøyet er ikke i seg selv bevis på at alle instruksjoner er semantisk tolket korrekt.

Neste milepæl er en dokumentert kjøretest av originalen og deretter en tekst-/grafikkpatch i en separat spillmappe. Originalfiler og eksisterende brukerarbeid skal fortsatt beholdes uendret.

## Historikk: første repooppsett før ZIP-opplastingen

Python-verktøyene for SCI-ressurser, skript, grafikk og patch-bygg; begge startfiler; originalenes SHA-256-manifest; referanseindeks; datatester; norsk repo-README; AGENTS.md; kildegrunnlag; en kontrollert ZIP-importør med syv selvstendige tester ble først overført direkte gjennom GitHub-koblingen.

Da gjensto ZIP-importen av 22 originalfiler, 266 utpakkede ressurser, 69 .sciasm-filer, skriptmetadata, 39 tekst-JSON-filer, 752 PNG-ruter, bildeviser og øvrige rapporter/veiledninger. Denne delen er nå fullført, som dokumentert over.

### Lokale målinger fra første repooppsett

- Den uendrede arbeidspakken besto alle 15 datatestene på nytt.
- De syv nye importtestene besto.
- Hele ZIP-en ble importert til en separat lokal arbeidsmappe: 1 517 arkivfiler, 1 505 lagt til, 12 identiske eksisterende, ingen endrede filer overskrevet.
- Etter den lokale importen besto alle 22 testene. Testene startet ikke spillet.
- Direkte Git-kloning fra det daværende arbeidsmiljøet feilet med `Could not resolve host: github.com`. GitHub-koblingens tekstskriveoperasjoner ble brukt i stedet.
- Binærfilene ble derfor overført gjennom brukerens ZIP-opplasting og den etterfølgende GitHub-arbeidsflyten, ikke gjennom tekstskriveoperasjonene.

Forskjellen mellom lokal og GitHub-import (1 505/12 mot 1 504/13) gjelder hvor mange identiske filer som allerede fantes på hvert importsted. Begge importene omfattet de samme 1 517 arkivfilene.

Denne siden er et statusbilde. Ved senere endringer må faktiske filer, aktuelle testkjøringer og rapporter kontrolleres på nytt.
