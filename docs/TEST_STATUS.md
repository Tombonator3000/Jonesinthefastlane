# Tester og hva de ikke beviser

15 automatiske tester kontrollerer kartreferanser, originale SHA-256, identiske interne dubletter, patchfiler, tekst-rundtur, 69 skript-rundturer, PNG-piksler, RLE-inn/ut, speilvendte/delte animasjonsruter, full ressurs-repakking, avvisning av endret instruksjonslayout, avkappet input, patch-bygg og en faktisk endring av et instruksjonsargument. Se `reports/tests.txt`.

Det finnes ingen ukjente opkodebytes i skriptseksjonene som er dekodet, og den statiske hoppmålkontrollen ga null varsler. Dette beviser ikke at høynivåtolkning, dynamiske hopp, regelendringer eller grafikkvisning under kjøring er korrekte. Ingen test bruker et uavhengig kjørende SCI-system som fasit for hele spillet.

Et ScummVM-deteksjonsforsøk ble blokkert fordi programfilen manglet i miljøet. Det er ikke en observert feil i spillet. Oppstart, lyd, spilløkter, lagring og lasting er ubekreftet.

Bildeviseren viser eksporterte cels, ikke PIC-bakgrunner eller en rekonstruksjon av spillets skjermkomposisjon. Tidsintervall, plassering og palettendringer må verifiseres mot spillet.

Den eksperimentelle `repack`-kommandoen bevarer ressursdata i egen leser. Bruk vanlige overlay-patcher til de første spilltestene. Nedlasting av eksterne referansekilder og rekompilering i SCI Companion er ikke testet her.

## Bildeviseren

JavaScript-koden besto `node --check`. Forsøk på å åpne viseren i miljøets Chromium ble blokkert av nettleserens administratorpolicy, både som lokal fil og fra lokal HTTP-server. Interaktiv nettlesertest og mobilvisning er derfor ikke fullført. Dette gjelder viseren, ikke de 752 PNG-filene: PNG-pikseldata og originalenes RLE-data inngår i de beståtte datatestene. Se `reports/viewer_test.json`.
