# Sitio web · NET PLUS ENERGY S.A.S (NPE)

Sitio estático de NET PLUS ENERGY S.A.S, ingenieros contratistas y consultores en energía MT–BT y
telecomunicaciones (fibra óptica) en Cauca, Valle del Cauca y Putumayo, Colombia.

Incluye el portafolio de la empresa, dos páginas de proyectos ejecutados y el **Centro de formación**:
módulos técnicos con video por capítulos, procedimiento, claves técnicas y autoevaluación.
Los videos están en YouTube (no listados) y se cargan al dar clic en reproducir.

## Tecnología

- HTML, CSS y JavaScript sin frameworks ni paso de compilación.
- Bootstrap 5.3.3 (solo páginas de formación) y Bootstrap Icons 1.11.3 desde jsDelivr, con SRI.
- Tipografía Archivo autoalojada en `fonts/`.
- Hosting: Vercel (`vercel.json`) o cPanel (`.htaccess`). Ambos definen la política de seguridad (CSP):
  **no se admiten scripts en línea**, todo el JavaScript va en `js/`. Solo se permite el iframe de
  `www.youtube-nocookie.com` para los videos.

## Estructura

```
index.html                 inicio
proyecto-putumayo.html     proyectos ejecutados (generadas por herramienta: no editar a mano)
proyecto-silvia.html
formacion.html             catálogo del centro de formación
formacion/*.html           un archivo por módulo publicado
404.html  .htaccess  site.webmanifest
css/inicio.css             inicio y proyectos
css/npe.css                páginas de formación
js/                        inicio.js, npe.js, catalogo.js, cursos-data.js (catálogo de módulos)
img/  fonts/  docs/        imágenes, tipografía y guías en PDF
video/                     originales de los videos, solo como respaldo: el sitio usa YouTube (ver video/LEEME.md)
preparar_publicacion.py    arma la carpeta publicar/ que se sube al hosting
servidor_local.py          servidor de pruebas en http://localhost:5500 (permite saltar en los videos)
servidor_tunel.py, abrir-tunel.bat   vista pública temporal con ngrok
DESIGN.md  PRODUCT.md      sistema de diseño y descripción del producto
```

Cada imagen tiene al lado un `.json` con su origen; esos archivos no se publican.

## Trabajar en local

1. En cmd, dentro de la carpeta del proyecto:
   ```
   python servidor_local.py
   ```
2. Abrir http://localhost:5500 (los videos necesitan internet porque vienen de YouTube).

Requiere Python 3.10 o superior.

## Publicar en el hosting

1. En cmd:
   ```
   python preparar_publicacion.py
   ```
   Debe terminar con «Verificación: todas las referencias locales existen».
2. Subir **el contenido** de `publicar/` a `public_html/` en cPanel (Administrador de archivos o FTP).
3. Cuando haya dominio, escribirlo en `DOMINIO = ""` de `preparar_publicacion.py` y repetir el paso 1
   (agrega URL canónicas y `sitemap.xml`). Con SSL activo, descomentar el bloque HTTPS de `.htaccess`.

## Publicar en Vercel

- Vercel importa este repositorio de GitHub y, en cada `git push`, ejecuta
  `python3 preparar_publicacion.py --vercel` y publica la carpeta `publicar/` (configurado en `vercel.json`).
- `vercel.json` reemplaza al `.htaccess`: cabeceras de seguridad, política CSP y caché.
- **Videos:** están en YouTube, así que no hay nada que subir ni configurar para ellos en Vercel.
- Dominio propio: variable de entorno `NPE_DOMINIO` en Vercel (por ejemplo `https://npe.com.co`).

## Reglas de contenido

- Los teléfonos no se muestran como texto: solo enlaces de WhatsApp (`wa.me`).
- Las fotos de obra muestran solo actividad, municipio o departamento y mes: sin coordenadas,
  direcciones, números de poste o de caja ni nombres de personas.
- El logo (`img/logo-npe.svg`) es el original de la empresa: no se redibuja.

© NET PLUS ENERGY S.A.S. Todos los derechos reservados.
