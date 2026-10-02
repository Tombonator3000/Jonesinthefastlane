echo off
:tryagain
exists resource.001
if	not errorlevel 1 goto dosci
echo Please insert the disk labeled "Disk 1".
pause
goto tryagain 
:dosci
sciv256 -w 0 0 200 320 %1 %2
