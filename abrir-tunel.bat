@echo off
chcp 65001 >nul
rem Abre el sitio de NPE en internet con ngrok: servidor en una ventana y túnel en otra.
rem Para cerrar: Ctrl + C en cada ventana, o cerrarlas. Este archivo no se publica.

cd /d "%~dp0"

if not exist "publicar\index.html" (
  echo Preparando la carpeta publicar...
  python preparar_publicacion.py
)

set "NGROK=%LOCALAPPDATA%\Programs\ngrok\ngrok.exe"
if not exist "%NGROK%" (
  echo No se encontro ngrok en %NGROK%
  pause
  exit /b 1
)

start "Servidor NPE (no cerrar)" cmd /k python servidor_tunel.py 8080
timeout /t 3 /nobreak >nul
start "Tunel ngrok NPE (no cerrar)" "%NGROK%" http 8080

echo.
echo Se abrieron dos ventanas: el servidor y el tunel.
echo La direccion publica aparece en la ventana de ngrok, en la linea Forwarding.
echo Si cambio algo en el sitio, ejecute antes:  python preparar_publicacion.py
echo.
pause
