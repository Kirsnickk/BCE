@echo off
cd /d "%~dp0"
start "CloudOps Duo" http://127.0.0.1:8765/
python -m http.server 8765 --bind 127.0.0.1
