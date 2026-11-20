# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: contratantes.** Operadores de red, integradores y empresas del sector eléctrico y de telecomunicaciones que evalúan a quién adjudicar obra. Llegan para verificar capacidad técnica, experiencia real y cumplimiento antes de pedir una propuesta. El inicio les habla a ellos primero (confirmado por el usuario).
- **Secundario: técnicos de campo y aspirantes.** Cuadrillas de NPE y candidatos que consultan el centro de formación, normalmente desde el celular, en terreno y a veces bajo el sol o con datos móviles limitados.

## Product Purpose

Sitio corporativo de NET PLUS ENERGY S.A.S (NPE) que presenta su capacidad como contratista de ingeniería y, a la vez, publica un centro de formación técnica abierto. El éxito es que un contratante confíe lo suficiente para escribir o llamar, y que un técnico encuentre el procedimiento que necesita sin fricción.

## Positioning

NPE ejecuta en terreno, en el suroccidente colombiano (Cauca, Valle del Cauca, Putumayo), obra eléctrica MT–BT y de fibra óptica con equipo propio (grúas de 4 y 7 t, dron para tendido de hasta 3 km), y documenta sus procedimientos en un centro de formación abierto producido por la propia empresa. La prueba de rigor técnico es pública.

## Operating Context

- Trabajo de campo con registro fotográfico georreferenciado (rótulo con coordenadas, fecha y punto de red: NAP, troncal, poste).
- Procedimientos de planta externa: empalme por fusión, cajas NAP, redes troncales, postería y retenidas, redes MT–BT, alumbrado público.
- Normativa colombiana de referencia (RETIE, RETILAP, NTC 2050, SG-SST, trabajo en alturas, RITEL); los valores técnicos concretos deben validarse antes de publicarse como criterio de aceptación.

## Capabilities and Constraints

- Sitio estático: Bootstrap 5.3 + HTML + JavaScript, sin backend. Se abre con doble clic o en hosting estático; el hosting debe admitir peticiones de rango para los videos.
- Páginas: `index.html` (corporativo), `formacion.html` (catálogo generado desde `js/cursos-data.js` por `js/catalogo.js`), `formacion/redes-troncales.html` y `formacion/fusion-fibra-optica.html` (módulos publicados, con video por capítulos), `404.html`.
- El formulario de contacto valida en el navegador y envía por WhatsApp: abre wa.me con el mensaje ya redactado (decisión del usuario, nov 2026). No hay backend.
- Los números de teléfono nunca se muestran escritos en la página: solo enlaces con el ícono de WhatsApp (decisión del usuario).
- Publicación: hosting con cPanel (Apache). La carpeta `publicar/` se genera con `python preparar_publicacion.py`; el dominio aún no está definido y se configura en ese script.
- Funcionalidad que debe conservarse: filtros y búsqueda del catálogo, enlace directo `?linea=X`, capítulos de video con salto y resaltado, un video a la vez, acordeón de procedimiento, índice lateral, validación del formulario, contadores, botón de WhatsApp.
- Datos pendientes de la empresa: dirección y sede, NIT, año de fundación, redes sociales, certificaciones. No se inventan.

## Brand Commitments

- Nombre: NET PLUS ENERGY S.A.S, marca corta **NPE**. Descriptor: "Ingenieros contratistas y consultores".
- Colores del Portafolio 2025: naranja `#FE6E17` (y `#EF5C0A`), carbón `#292929`, grises. El naranja no cumple contraste AA como texto pequeño sobre blanco; su uso como texto está pendiente de decisión del usuario.
- Isotipo: cuadro naranja (#F56A00) con círculo blanco y glifo de nube con nodos y flechas. `img/logo-npe.svg` es el logo original vectorizado (17 nov 2026) desde la imagen del Portafolio de Servicios 2025 (copia en `documentacion/fuentes-cliente/logo-npe-portafolio-p10.png`). No se redibuja a mano: el cliente rechazó la reconstrucción anterior.
- Las piezas audiovisuales propias de NPE usan rótulos en mayúsculas espaciadas sobre titulares grandes.

## Evidence on Hand

- Fotos reales de obra con rótulo GPS: `img/galeria/` (Sibundoy, troncal San Francisco–Sibundoy p91, Santiago, Mocoa, San Francisco).
- Dos videos propios con narración: `video/fusion-fo-parte1-preparacion.mp4`, `video/fusion-fo-parte2-empalme.mp4`.
- Tres proyectos del portafolio: alumbrado público inteligente en Cali (como subcontratista); redes MT y BT para la parcelación Indiana con centros de transformación; enlaces de fibra óptica con tecnología 5G para 16 instituciones educativas en el sur del Cauca.
- **No mostrar en el inicio los nombres de los clientes** (INELCIME, CEO, TSG): decisión del usuario. Las fotos de obra sí se pueden usar.
- Las fotos de herramientas 1, 2, 3 y 6 parecen renders genéricos, no equipo real de NPE.
- No hay testimonios, cifras de facturación, certificaciones ni logos de clientes autorizados. No se fabrican.

## Product Principles

1. La obra real es la prueba: fotos de terreno, proyectos ejecutados y procedimientos propios pesan más que cualquier afirmación.
2. Contratante primero en el inicio; técnico primero en formación.
3. Legible en terreno: celular, sol, datos limitados.
4. Seguridad antes que eficiencia en todo contenido técnico.
5. No afirmar lo que no está confirmado.

## Accessibility & Inclusion

Lectura en exteriores con luz solar directa y en celulares de gama media: contraste alto, texto funcional de 11 px como mínimo, peso de página contenido.
