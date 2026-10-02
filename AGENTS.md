# Jones-prosjektet — arbeidsregler

## Mål og faktisk status

Målet er en spillbar, redigerbar moderne port, ikke bare emulering. Nåværende leveranse er et SCI1-arbeidsverktøy med uttrekk, lossless lavnivåkode og patch-import. Ikke omtale dette som en ferdig høynivådekompilering, testet gjennomspilling eller ferdig PC-port.

Repoet ble startet fra den lokale arbeidspakken 2. oktober 2026. Tekstverktøy kan være på plass før den store ZIP-importen. Kontroller `original/resource.map`, `graphics/views/` og `reports/github_import.json` før du hevder at hele pakken er importert.

## Bevar brukerens arbeid

- Ikke endre eller slette originalfiler. Kontroller `reports/original_files.sha256`.
- Ikke overskriv andres grener, arbeidsfiler, skjermbilder eller endrede ressurser. Ikke force-push.
- Arbeids-PNG, tekst-JSON og redigerte skript legges i egne arbeidsmapper. Ferdige SCI-patcher legges i `mods/`; bygg til en separat ny mappe.
- Originalmateriale og tredjepartsdekompilering er ikke ny GPL-lisensiert egenkode. Bevar kildehenvisninger og lisensskiller.

## Tester og kommandoer

```sh
python -m pip install -r requirements.txt
python -m unittest discover -s tests -p test_import_workbench.py -v
# De neste kommandoene krever komplett import av spilldata:
python tools/jones.py verify
python -m unittest discover -s tests -v
```

69 uendrede skript skal kunne sammenstilles til byte-identiske originalskript. Skill datatester fra testing i en faktisk SCI-motor. Dokumenter feil, ikke gjør en mislykket test om til en bestått test ved å svekke forventningen.

## Videre utvikling

Første kjøretest: originaloppstart, menyvalg, en spilleruke, jobb, bank, butikk, utdanning, lagring/lasting og én grafikk-/tekstpatch. Noter konkret hva som er testet. Skill deretter ut tid, økonomi, arbeid, utdanning og mål i moderne moduler med eksplisitte regresjonstester. Ikke endre spillregler uten å dokumentere forskjellen fra originalen.

`tools/fetch_reference_sources.py` henter en fastlåst ekstern referanseutgave til `reference/upstream/`. Den skal ikke blandes sammen med koden hentet ut fra brukerens binærfiler eller hevdes å være bytekodevalidert uten målinger.

Gjenbrukbare metoder og skills for brukerens spillprosjekter finnes i https://github.com/Tombonator3000/prosjektbibliotek . Les relevant metode før bruk; ikke importer hele biblioteket ukritisk.
