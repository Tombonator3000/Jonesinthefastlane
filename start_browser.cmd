@echo off
cd /d "%~dp0"
py -3 tools\build_browser.py
if errorlevel 1 exit /b 1
echo Open http://localhost:8765 in your browser. Press Ctrl+C to stop the server.
py -3 -m http.server 8765 --bind 127.0.0.1 --directory build\browser
