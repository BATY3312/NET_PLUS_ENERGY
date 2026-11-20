"""
Prepara la carpeta 'publicar/' con exactamente lo que se sube al hosting.

Uso (desde la carpeta del proyecto):
    python preparar_publicacion.py

Cuando se conozca el dominio, escríbalo abajo en DOMINIO (con https:// y sin
barra final) y vuelva a ejecutar el script: se agregan las direcciones
canónicas, la imagen para compartir en redes y el mapa del sitio para Google.
Después suba el CONTENIDO de 'publicar/' a la carpeta public_html del hosting.

Los videos de los módulos están en YouTube (no listados) y las páginas los cargan desde
allí: la carpeta video/ guarda solo los originales y no se publica.

En Vercel se ejecuta con --vercel (ver vercel.json):
    python3 preparar_publicacion.py --vercel
  - no se copia .htaccess (Vercel no lo usa: sus reglas están en vercel.json);
  - el dominio puede venir de la variable de entorno NPE_DOMINIO.
"""

import hashlib
import os
import re
import shutil
import sys
from datetime import date
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote

DOMINIO = os.environ.get("NPE_DOMINIO", "")          # ejemplo: "https://npe.com.co"
VERCEL = "--vercel" in sys.argv

RAIZ = os.path.dirname(os.path.abspath(__file__))
DESTINO = os.path.join(RAIZ, "publicar")

# Lo único que se publica. Todo lo demás (pruebas, notas, capturas) queda fuera.
ARCHIVOS = ["index.html", "proyecto-putumayo.html", "proyecto-silvia.html", "formacion.html", "404.html", ".htaccess", "site.webmanifest"]
CARPETAS = ["formacion", "css", "js", "fonts", "img", "docs"]   # sin video/: los videos están en YouTube

PAGINAS_INDEXABLES = ["index.html", "proyecto-putumayo.html", "proyecto-silvia.html", "formacion.html",
                      "formacion/redes-troncales.html", "formacion/fusion-fibra-optica.html",
                      "formacion/retenidas.html", "formacion/postes-metalicos.html", "formacion/fundamentos-fibra-optica.html", "formacion/cajas-nap.html", "formacion/pruebas-certificacion.html", "formacion/trabajo-alturas.html"]
IMAGEN_REDES = "img/compartir.jpg"


class Referencias(HTMLParser):
    """Recoge las rutas locales que usa una página."""
    def __init__(self):
        super().__init__()
        self.rutas = []

    def handle_starttag(self, tag, attrs):
        for nombre, valor in attrs:
            if nombre in ("href", "src", "poster") and valor and \
               not re.match(r"^(https?:|mailto:|tel:|#|data:)", valor):
                self.rutas.append(valor)


def copiar():
    # Se vacía el contenido en lugar de borrar la carpeta: así no falla si está
    # abierta en el Explorador de Windows.
    os.makedirs(DESTINO, exist_ok=True)
    for nombre in os.listdir(DESTINO):
        ruta = os.path.join(DESTINO, nombre)
        if os.path.isdir(ruta):
            shutil.rmtree(ruta)
        else:
            os.remove(ruta)
    for f in ARCHIVOS:
        if VERCEL and f == ".htaccess":
            continue
        shutil.copy2(os.path.join(RAIZ, f), os.path.join(DESTINO, f))
    for c in CARPETAS:
        # Los .json son notas internas de procedencia de cada imagen y los .md, notas del repositorio: no se publican
        shutil.copytree(os.path.join(RAIZ, c), os.path.join(DESTINO, c),
                        ignore=shutil.ignore_patterns("*.json", "*.md"))


def versionar_recursos():
    """Pone en cada ?v= la huella del contenido del archivo: si cambia el CSS o el
    JS, cambia la huella y el navegador descarga la versión nueva (el .htaccess
    los guarda en caché un año)."""
    huellas = {}
    for carpeta in ("css", "js"):
        for f in os.listdir(os.path.join(DESTINO, carpeta)):
            datos = open(os.path.join(DESTINO, carpeta, f), "rb").read()
            huellas[f"{carpeta}/{f}"] = hashlib.sha256(datos).hexdigest()[:10]
    for base, _, archivos in os.walk(DESTINO):
        for a in archivos:
            if a.endswith(".html"):
                ruta = os.path.join(base, a)
                html = open(ruta, encoding="utf-8").read()
                html = re.sub(r'((?:css|js)/[\w\-]+\.(?:css|js))\?v=[\w]+',
                              lambda m: f"{m.group(1)}?v={huellas.get(m.group(1), 'x')}", html)
                open(ruta, "w", encoding="utf-8").write(html)


def agregar_seo():
    dominio = DOMINIO.rstrip("/")
    for pagina in PAGINAS_INDEXABLES:
        ruta = os.path.join(DESTINO, pagina)
        html = open(ruta, encoding="utf-8").read()
        url = dominio + "/" + ("" if pagina == "index.html" else pagina)
        extra = (f'<link rel="canonical" href="{url}">\n'
                 f'<meta property="og:url" content="{url}">\n'
                 f'<meta property="og:image" content="{dominio}/{IMAGEN_REDES}">\n')
        html = html.replace('<meta name="theme-color"', extra + '<meta name="theme-color"', 1)
        open(ruta, "w", encoding="utf-8").write(html)

    hoy = date.today().isoformat()
    urls = "".join(
        f"  <url><loc>{dominio}/{'' if p == 'index.html' else p}</loc><lastmod>{hoy}</lastmod></url>\n"
        for p in PAGINAS_INDEXABLES)
    open(os.path.join(DESTINO, "sitemap.xml"), "w", encoding="utf-8").write(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls + "</urlset>\n")


def escribir_robots():
    lineas = ["User-agent: *", "Allow: /"]
    if DOMINIO:
        lineas.append(f"Sitemap: {DOMINIO.rstrip('/')}/sitemap.xml")
    open(os.path.join(DESTINO, "robots.txt"), "w", encoding="utf-8").write("\n".join(lineas) + "\n")


def verificar():
    """Comprueba que todo lo que piden las páginas exista dentro de publicar/."""
    faltan = []
    for base, _, archivos in os.walk(DESTINO):
        for a in archivos:
            if not a.endswith(".html"):
                continue
            ruta = os.path.join(base, a)
            ref = Referencias()
            ref.feed(open(ruta, encoding="utf-8").read())
            for r in ref.rutas:
                camino = unquote(urlparse(r).path)
                if not camino:
                    continue
                destino = os.path.join(DESTINO, camino.lstrip("/")) if camino.startswith("/") \
                    else os.path.normpath(os.path.join(base, camino))
                if camino.endswith("/"):
                    destino = os.path.join(destino, "index.html")
                if not os.path.exists(destino):
                    faltan.append(f"{os.path.relpath(ruta, DESTINO)} -> {r}")
    return faltan


def peso(carpeta):
    return sum(os.path.getsize(os.path.join(b, f)) for b, _, fs in os.walk(carpeta) for f in fs)


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    copiar()
    versionar_recursos()
    if DOMINIO:
        agregar_seo()
    escribir_robots()
    faltan = verificar()
    print(f"Carpeta lista: {DESTINO}")
    print(f"Peso total: {peso(DESTINO) / 1_048_576:.1f} MB (videos en YouTube)")
    print("Dominio:", DOMINIO or "sin definir (sin canónicas ni sitemap todavía)")
    if faltan:
        print("ATENCIÓN, referencias rotas:")
        for f in faltan:
            print("  -", f)
        raise SystemExit(1)
    print("Verificación: todas las referencias locales existen.")
