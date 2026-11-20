"""
Sirve la carpeta publicar/ para exponerla con un túnel (ngrok).

    python servidor_tunel.py [puerto]          (por defecto 8080)
    ngrok http 8080

Diferencias con servidor_local.py, que sirve todo el proyecto para desarrollo:
- Sirve solo publicar/, lo mismo que se sube al hosting: los scripts, fuentes
  y archivos de trabajo del proyecto no quedan expuestos.
- Escucha solo en 127.0.0.1: el único acceso desde fuera es el túnel.
- No lista carpetas (como "Options -Indexes" en Apache).
- Responde con la página 404.html del sitio cuando algo no existe.
Mantiene el soporte de Range de servidor_local.py, necesario para los videos.
Este archivo no se publica.
"""

import os
import sys
from http.server import ThreadingHTTPServer

from servidor_local import ConRangos

RAIZ = os.path.dirname(os.path.abspath(__file__))
CARPETA = os.path.join(RAIZ, "publicar")


class Publico(ConRangos):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=CARPETA, **kwargs)

    def list_directory(self, path):
        self.send_error(404)
        return None

    def send_error(self, code, message=None, explain=None):
        pagina = os.path.join(CARPETA, "404.html")
        if code != 404 or not os.path.isfile(pagina):
            return super().send_error(code, message, explain)
        cuerpo = open(pagina, "rb").read()
        self.send_response(404)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(cuerpo)))
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(cuerpo)

    def end_headers(self):
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        super().end_headers()

    def log_message(self, formato, *args):
        sys.stderr.write("%s %s\n" % (self.log_date_time_string(), formato % args))


if __name__ == "__main__":
    if not os.path.isfile(os.path.join(CARPETA, "index.html")):
        sys.exit("No existe publicar/index.html: ejecute primero  python preparar_publicacion.py")
    puerto = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    print(f"Sirviendo publicar/ en http://127.0.0.1:{puerto}  (Ctrl+C para detener)", flush=True)
    ThreadingHTTPServer(("127.0.0.1", puerto), Publico).serve_forever()
