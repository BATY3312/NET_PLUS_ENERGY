"""
Servidor de desarrollo para ver el sitio en http://localhost:5500

    python servidor_local.py [puerto]

A diferencia de "python -m http.server", responde peticiones por rango
(Range / 206 Partial Content). Sin eso el navegador no puede saltar dentro
de un video y los botones de capítulos no funcionan en local. El hosting
con Apache (cPanel) ya lo hace por defecto; este archivo no se publica.
"""

import os
import re
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

RANGO = re.compile(r"bytes=(\d*)-(\d*)$")


class ConRangos(SimpleHTTPRequestHandler):
    def send_head(self):
        rango = self.headers.get("Range")
        ruta = self.translate_path(self.path)
        if not rango or not os.path.isfile(ruta):
            return super().send_head()

        m = RANGO.match(rango.strip())
        tam = os.path.getsize(ruta)
        if not m or (not m.group(1) and not m.group(2)):
            return super().send_head()
        if m.group(1):
            ini = int(m.group(1))
            fin = min(int(m.group(2)), tam - 1) if m.group(2) else tam - 1
        else:                                   # bytes=-N: los últimos N bytes
            ini, fin = max(tam - int(m.group(2)), 0), tam - 1
        if ini > fin or ini >= tam:
            self.send_response(416)
            self.send_header("Content-Range", f"bytes */{tam}")
            self.end_headers()
            return None

        f = open(ruta, "rb")
        f.seek(ini)
        self.restante = fin - ini + 1
        self.send_response(206)
        self.send_header("Content-Type", self.guess_type(ruta))
        self.send_header("Content-Range", f"bytes {ini}-{fin}/{tam}")
        self.send_header("Content-Length", str(self.restante))
        self.send_header("Accept-Ranges", "bytes")
        self.end_headers()
        return f

    def copyfile(self, origen, destino):
        restante = getattr(self, "restante", None)
        if restante is None:
            return super().copyfile(origen, destino)
        try:
            while restante > 0:
                bloque = origen.read(min(64 * 1024, restante))
                if not bloque:
                    break
                destino.write(bloque)
                restante -= len(bloque)
        except (BrokenPipeError, ConnectionResetError):
            pass                                # el navegador canceló al saltar: es normal
        finally:
            self.restante = None

    def end_headers(self):
        if not self.headers.get("Range"):
            self.send_header("Accept-Ranges", "bytes")
        super().end_headers()


if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    puerto = int(sys.argv[1]) if len(sys.argv) > 1 else 5500
    print(f"Sitio en http://localhost:{puerto}  (Ctrl+C para detener)")
    ThreadingHTTPServer(("", puerto), ConRangos).serve_forever()
