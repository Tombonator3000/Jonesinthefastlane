@echo off
setlocal
set "ROOT=%~dp0"
set "GAME=%ROOT%original"
if not "%~1"=="" set "GAME=%~f1"
if not exist "%GAME%\resource.map" (
 echo Cannot find resource.map in "%GAME%".
 exit /b 1
)
if defined SCUMMVM_BIN goto run
for %%I in (scummvm.exe) do set "SCUMMVM_BIN=%%~$PATH:I"
if defined SCUMMVM_BIN goto run
if exist "%ProgramFiles%\ScummVM\scummvm.exe" set "SCUMMVM_BIN=%ProgramFiles%\ScummVM\scummvm.exe"
if defined SCUMMVM_BIN goto run
if exist "%ProgramFiles(x86)%\ScummVM\scummvm.exe" set "SCUMMVM_BIN=%ProgramFiles(x86)%\ScummVM\scummvm.exe"
if not defined SCUMMVM_BIN (
 echo Install ScummVM or set SCUMMVM_BIN to the path of scummvm.exe.
 pause
 exit /b 1
)
:run
if not exist "%ROOT%saves" mkdir "%ROOT%saves"
if not exist "%ROOT%logs" mkdir "%ROOT%logs"
"%SCUMMVM_BIN%" --config="%ROOT%scummvm-local.ini" --savepath="%ROOT%saves" --logfile="%ROOT%logs\scummvm.log" --path="%GAME%" sci:jones
endlocal
