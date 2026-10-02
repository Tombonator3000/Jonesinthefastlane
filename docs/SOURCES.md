# Kildegrunnlag og avgrensninger

Kontrollert 2. oktober 2026. Resultatene i `reports/` er målt fra brukerens opplastede filer. Prosjektet er ikke tilknyttet Sierra, ScummVM, SCI Companion eller Sluicebox.

## Primærkilder for filformatene

ScummVMs SCI-motor er brukt som referanse for strukturer, dekomprimeringsdetaljer, opkoder, paletter og patchformat. ScummVM er GPL-3.0-or-later; verktøyene her leveres med samme lisensvalg og referansen beholdes. Dette er en egen Python-implementasjon, ikke en medfølgende ScummVM-motor.

- Utgavedeteksjon; de tre filenes lengder og MD5 av de første 5000 bytene: https://raw.githubusercontent.com/scummvm/scummvm/master/engines/sci/detection_tables.h
- SCI1 LZW og Huffman: https://raw.githubusercontent.com/scummvm/scummvm/master/engines/sci/resource/decompressor.cpp
- Ressurskart, volumhoder og separate SCI-patchfiler: https://raw.githubusercontent.com/scummvm/scummvm/master/engines/sci/resource/resource.cpp
- View-/loop-/cel-hoder, komprimerte bildepiksler og speiling: https://raw.githubusercontent.com/scummvm/scummvm/master/engines/sci/graphics/view.cpp
- SCI-palettstruktur: https://raw.githubusercontent.com/scummvm/scummvm/master/engines/sci/graphics/palette16.cpp
- Skriptseksjoner: https://raw.githubusercontent.com/scummvm/scummvm/master/engines/sci/engine/script.cpp
- Instruksjonsformater: https://raw.githubusercontent.com/scummvm/scummvm/master/engines/sci/engine/kernel_tables.h
- Instruksjonsnavn og skriptstruktur: https://raw.githubusercontent.com/scummvm/scummvm/master/engines/sci/engine/scriptdebug.cpp
- SCI-instruksjoner og operandbredder: https://raw.githubusercontent.com/scummvm/scummvm/master/engines/sci/engine/vm.cpp
- ScummVMs dokumenterte kommandolinje for oppstart: https://docs.scummvm.org/en/latest/advanced_topics/command_line.html
- Åpne resource.map og redigere SCI-ressurser: https://scicompanion.com/Documentation/intro.html
- Høynivådekompilering, navn, .sco og behov for kontroll: https://scicompanion.com/Documentation/decompiler.html

`master`-lenkene viser den eksterne kilden og kan endres. Det lokale uttrekket, originalenes SHA-256 og testene er det repeterbare grunnlaget for akkurat denne leveransen. En delvis MD5 brukt til spilldeteksjon er ikke en fullfilkontrollsum; derfor er samtlige opplastede filer også sikret med SHA-256.

## Referanseindeks fra Sluicebox

Repository: https://github.com/sluicebox/sci-scripts

Fastlåst commit: `870a8015b689474484bf3d8b41416956d4315432`

Spillmappe: `jones-dos-1.000.060`

Kildetre: `9842b4d5d449ab71fc7e50881afdc567a82fefd1`

Den inkluderte `reference/game.ini` er kontrollert mot Git-blob `f15313708e88783af0c46f7ddc33798aeabedf8a`. Den brukes kun som navn-/nummerindeks. Kilden er:

https://github.com/sluicebox/sci-scripts/blob/870a8015b689474484bf3d8b41416956d4315432/jones-dos-1.000.060/game.ini

Hele høynivåkoden er **ikke** inkludert eller sammenlignet med dine skript. `fetch_reference_sources.py` er en valgfri nedlaster, ikke bevis for at kildekoden er ferdig validert. Originale klasse-/objekt-/metodenavn i `script_metadata/` leses fra dine ressurser; navn i denne referanseindeksen er separat attribuert. Beskrivende navn er ikke en komplett analyse av hva hvert system gjør.

## Rettighetsavgrensning

Lisensen til de nye verktøyene overfører ikke rettigheter til det opplastede originalspillet eller eksterne dekompilerte kilder. Ingen av originalfilene, de eksporterte grafikkfilene eller `source_asm/` skal forstås som en ny GPL-lisensiering av Sierra-materiale.
