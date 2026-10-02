# Repooverføring — 2. oktober 2026

## Direkte overført

Python-verktøyene for SCI-ressurser, skript, grafikk og patch-bygg; begge startfiler; originalenes SHA-256-manifest; referanseindeks; datatester; norsk repo-README; AGENTS.md; kildegrunnlag; en kontrollert ZIP-importør med syv selvstendige tester.

## Krever arbeidspakkens ZIP-import

22 originalfiler, de 266 utpakkede ressursene, 69 .sciasm-filer, skriptmetadata, 39 tekst-JSON-filer, 752 PNG-ruter, bildeviser og de øvrige rapportene/veiledningene fra arbeidspakken.

Denne statusen beskriver første repooppsett. Den oppdateres ikke automatisk. Se `reports/github_import.json` og faktisk innhold for senere importstatus.

## Målt lokalt, ikke på GitHub

- Den uendrede arbeidspakken besto alle 15 datatestene på nytt.
- De syv nye importtestene besto.
- Hele ZIP-en ble faktisk importert til en separat lokal arbeidsmappe: 1517 arkivfiler, 1505 lagt til, 12 identiske eksisterende, ingen endrede filer overskrevet.
- Etter import besto alle 22 testene. Testene startet ikke spillet.
- Direkte Git-kloning fra dette arbeidsmiljøet feilet med `Could not resolve host: github.com`. GitHub-koblingens tekstskriveoperasjoner ble brukt i stedet.
- Den tilgjengelige GitHub-koblingen har ikke filopplasting fra lokal sti for et helt ZIP-arkiv. Ingen binærfiler er erstattet med tekst eller en påstått nedlastingslenke.

Ingen påstand om ferdig PC-port, vellykket høynivårekompilering eller spilltest er lagt til.
