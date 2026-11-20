---
name: Net Plus Energy
description: Bitácora de obra georreferenciada para un contratista de fibra óptica y redes eléctricas.
colors:
  suelo: "#F4F5F3"
  papel: "#FFFFFF"
  tinta: "#15171A"
  tinta-2: "#4A4F55"
  tinta-3: "#5E646A"
  filete: "#CDD1CF"
  naranja: "#FE6E17"
  naranja-hondo: "#E2560A"
  naranja-claro: "#FFE1CC"
  tinta-naranja: "rgba(21, 23, 26, .8)"
  noche: "#121416"
  noche-2: "#1C1F22"
  noche-tinta: "#EDEFEC"
  noche-tinta-2: "#A7ADB3"
  noche-filete: "#30353A"
  error-validacion: "#B3261E"
  whatsapp: "#25D366"
  whatsapp-hondo: "#128C7E"
  whatsapp-tinta: "#0B2E17"
  marco-video: "#000000"
typography:
  display:
    fontFamily: "Archivo, 'Arial Narrow', system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1rem + 5vw, 5.25rem)"
    fontWeight: 820
    lineHeight: 0.9
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 70"
  display-pagina:
    fontFamily: "Archivo, 'Arial Narrow', system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1rem + 5vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 68"
  headline:
    fontFamily: "Archivo, 'Arial Narrow', system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1rem + 3.4vw, 4rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 75"
  headline-hoja:
    fontFamily: "Archivo, 'Arial Narrow', system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1rem + 4vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 68"
  title-folio:
    fontFamily: "Archivo, 'Arial Narrow', system-ui, sans-serif"
    fontSize: "clamp(2rem, 1rem + 2.6vw, 3.4rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 68"
  title-bloque:
    fontFamily: "Archivo, 'Arial Narrow', system-ui, sans-serif"
    fontSize: "clamp(1.85rem, 1rem + 2vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 75"
  title:
    fontFamily: "Archivo, 'Arial Narrow', system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 1rem + 1.8vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 72"
  subtitle:
    fontFamily: "Archivo, 'Arial Narrow', system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 1rem + .5vw, 1.4rem)"
    fontWeight: 750
    lineHeight: 0.98
    fontVariation: "'wdth' 80"
  cifra:
    fontFamily: "Archivo, 'Arial Narrow', system-ui, sans-serif"
    fontSize: "clamp(3rem, 2rem + 3vw, 4.75rem)"
    fontWeight: 820
    lineHeight: 0.85
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 66"
  lead:
    fontFamily: "Archivo, 'Arial Narrow', system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Archivo, 'Arial Narrow', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "'wdth' 100"
  body-sm:
    fontFamily: "Archivo, 'Arial Narrow', system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, 'Arial Narrow', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 650
    lineHeight: 1.4
  rotulo:
    fontFamily: "Archivo, 'Arial Narrow', system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 92"
  micro:
    fontFamily: "Archivo, 'Arial Narrow', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 750
    lineHeight: 1.4
  button:
    fontFamily: "Archivo, 'Arial Narrow', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1
    fontVariation: "'wdth' 85"
rounded:
  none: "0px"
spacing:
  canal: "clamp(1.125rem, 3.2vw, 2.75rem)"
  seccion: "clamp(4.5rem, 9vw, 8rem)"
  marco: "1360px"
  barra-h: "68px"
components:
  button-primary:
    backgroundColor: "{colors.naranja}"
    textColor: "{colors.tinta}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "1rem 1.35rem"
    height: "3.1rem"
  button-primary-hover:
    backgroundColor: "{colors.naranja-hondo}"
    textColor: "{colors.tinta}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.tinta}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "1rem 1.35rem"
    height: "3.1rem"
  button-line-hover:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.suelo}"
  button-light:
    backgroundColor: "transparent"
    textColor: "{colors.noche-tinta}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "1rem 1.35rem"
    height: "3.1rem"
  button-light-hover:
    backgroundColor: "{colors.noche-tinta}"
    textColor: "{colors.noche}"
  input:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.none}"
    padding: ".8rem .9rem"
    height: "3.1rem"
  filter-chip:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.none}"
    padding: ".8rem 1rem"
    height: "2.9rem"
  filter-chip-active:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.suelo}"
  rotulo:
    textColor: "{colors.tinta-2}"
    typography: "{typography.rotulo}"
  regla-numero:
    backgroundColor: "{colors.naranja}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.none}"
    size: "2.4rem"
  enlace-wa:
    textColor: "{colors.tinta}"
  fab-wa:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.whatsapp-tinta}"
    rounded: "{rounded.none}"
    size: "52px"
  band-night:
    backgroundColor: "{colors.noche}"
    textColor: "{colors.noche-tinta}"
  field-orange:
    backgroundColor: "{colors.naranja}"
    textColor: "{colors.tinta}"
---

# Design System: Net Plus Energy

## Overview

**Creative North Star: "Bitácora georreferenciada"**

El sistema es un libro de registro de obra. Cada afirmación se apoya en un punto real: una foto de celular a tamaño nativo, un rótulo con lugar, coordenadas y fecha, y una línea de libro que la separa de la siguiente. La página no decora; anota. Fondo claro y frío, tinta carbón, filetes de 1 px y filetes gruesos de 3 px que abren cada folio, esquinas rectas en todo.

El naranja de marca no es un color de texto: es un campo. Aparece como superficie con tinta negra encima (botones, la ficha de equipo, la fila activa, el capítulo en reproducción, el subrayado de un enlace, el cuadrado de fijación) y nunca como texto pequeño sobre el suelo claro. Las bandas de noche invierten la página para lo audiovisual y el pie; ahí, y solo ahí, el naranja puede ser texto.

Una sola familia, Archivo variable, carga toda la jerarquía por anchura y peso: titulares condensados y pesados, texto a anchura normal, cifras tabulares en todo dato que se mide o se compara. La densidad es de documento técnico: filas, tablas y listas con filete antes que tarjetas.

**Key Characteristics:**
- Suelo claro frío, tinta carbón, naranja como campo con tinta negra.
- El rótulo GPS como objeto tipográfico recurrente: tres líneas alineadas a la derecha.
- Filetes de libro de 1 px; filete de 3 px como encabezado de folio y de bloque.
- Esquinas rectas (0px) en todo; sin sombras salvo los botones flotantes.
- Archivo variable en una sola familia: anchura 66–80 % en titulares, 100 % en texto.
- Movimiento corto y con propósito: cifras que ruedan, cuadrado que fija, subrayados que se trazan.

## Colors

Neutros fríos de papel y carbón con un único acento naranja, usado como superficie y no como tinta.

### Primary
- **Naranja de campo** (naranja): superficie de acción y de énfasis. Botón principal, ficha técnica de equipo (sección completa en campo naranja), fondo de la fila del libro al pasar, capítulo activo, paso abierto del procedimiento, código de módulo disponible, marcador cuadrado de avisos y listas, subrayado de enlaces (2 px), barra resaltada del titular de portada, selección de texto.
- **Naranja hondo** (naranja-hondo): estado hover del botón principal, cursor de texto y borde de la búsqueda enfocada.
- **Naranja claro** (naranja-claro): tinte de hover en filas y controles de lectura (filtros, módulos, capítulos, pasos, navegación entre módulos) y fondo de los valores por validar.
- **Tinta sobre naranja** (tinta-naranja): texto secundario dentro del campo naranja (pie de tabla, encabezados de la ficha, párrafo de la fila del libro en hover).

### Neutral
- **Suelo frío** (suelo): fondo de página.
- **Papel** (papel): campos de formulario, filtros, filas de módulo disponibles; la superficie que se escribe o se pulsa.
- **Tinta carbón** (tinta): texto principal, filetes fuertes de libro, contornos de 1.5 px de controles, encabezado de tabla de riesgos.
- **Tinta segunda** (tinta-2): texto secundario, párrafos de apoyo, rótulos.
- **Tinta tercera** (tinta-3): placeholders, viñetas cuadradas de listas, estados pendientes, barra de desplazamiento.
- **Filete** (filete): filetes suaves entre filas, fondo de imagen mientras carga.
- **Noche** (noche) y **noche segunda** (noche-2): bandas oscuras (formación, pie) y fondo de imagen en ellas.
- **Tinta de noche** (noche-tinta), **tinta de noche segunda** (noche-tinta-2), **filete de noche** (noche-filete): texto y filetes dentro de las bandas oscuras.

### Functional
Colores con una sola función, fuera de la paleta de marca. En el código están escritos como valores literales, no como propiedades de `:root`; aquí se registran como rol propio para que no se reutilicen en otra parte.
- **Rojo de validación** (error-validacion): borde del campo inválido y mensaje de error del formulario. Solo para errores de validación.
- **Verde WhatsApp** (whatsapp): fondo del botón flotante de WhatsApp e icono de WhatsApp dentro del pie oscuro.
- **Verde WhatsApp hondo** (whatsapp-hondo): icono de WhatsApp en los enlaces sobre el suelo claro (es un icono, no texto; el texto del enlace va en tinta).
- **Tinta WhatsApp** (whatsapp-tinta): icono sobre el botón flotante verde.
- **Marco de video** (marco-video): fondo negro puro de la caja de video, para que el reproductor no deje bandas de color.

### Named Rules
**The Campo Naranja Rule.** El naranja es un campo que lleva tinta negra (contraste 6.38:1). Nunca es texto pequeño sobre el suelo claro (2.58:1). Si un dato necesita destacar sobre claro, se pone sobre un campo naranja o se marca con un cuadrado naranja, no se tiñe.

**The Noche Exception Rule.** Sobre noche el naranja sí puede ser texto (6.56:1): estado de recursos, hover de enlaces del pie y de la banda, número de paso abierto sobre tinta, severidad alta.

## Typography

**Display Font:** Archivo variable, autoalojado (con 'Arial Narrow', system-ui, sans-serif)
**Body Font:** Archivo variable (misma familia)

**Character:** Una sola voz que cambia de anchura: condensada y pesada para nombrar lugares y obras como un rótulo de campo, normal y legible para el texto corrido. La fuente se sirve desde el propio sitio (rango de peso 100–900, anchura 62–125 %), con su cursiva.

### Hierarchy
La escala es fluida arriba (clamp() con base de 1rem más un término de viewport) y fija abajo. Cada titular usa su propio clamp según el sitio que ocupa; esos valores son la escala real, no desviaciones.

- **Display** (820, anchura 70 %, 0.9, clamp(2.6rem, 1rem + 5vw, 5.25rem)): titular de portada sobre ocho columnas.
- **Display de página** (800, anchura 68 %, 0.9): cabecera de página clamp(2.75rem, 1rem + 5vw, 5.5rem); titular de módulo clamp(2.6rem, 1rem + 5vw, 5.4rem), medida máxima 14ch.
- **Headline** (800, anchura 75 %, 0.98, clamp(2.25rem, 1rem + 3.4vw, 4rem)): títulos de sección, de la banda de formación y de contacto.
- **Headline de hoja** (800, anchura 68 %, 0.9, clamp(2.5rem, 1rem + 4vw, 4.75rem)): título de la hoja editorial.
- **Cifra** (820, anchura 66 %, 0.85, tabular, clamp(3rem, 2rem + 3vw, 4.75rem)): la cifra grande del folio. La capacidad en la ficha usa 800 a anchura 72 % con clamp(1.9rem, 1rem + 2.4vw, 3.1rem); su variante en texto, clamp(1.25rem, 1rem + .9vw, 1.65rem).
- **Title de folio** (800, anchura 68 %, clamp(2rem, 1rem + 2.6vw, 3.4rem)): lugar del folio.
- **Title de bloque** (800, anchura 75 %, clamp(1.85rem, 1rem + 2vw, 2.6rem)): h2 de cada bloque del módulo, bajo su filete de 3px.
- **Title** (800, anchura 72 %, clamp(1.6rem, 1rem + 1.8vw, 2.5rem)): nombre del servicio en el libro.
- **Subtítulo grande** (800 / 750, anchura 75–80 %): equipo en la ficha clamp(1.35rem, 1rem + 1vw, 1.85rem); título de video clamp(1.35rem, 1rem + 1vw, 1.75rem); título de la hoja 1.35rem.
- **Subtítulo** (750, anchura 80–85 %): título de módulo en el catálogo clamp(1.15rem, 1rem + .5vw, 1.4rem); paso del procedimiento clamp(1.1rem, 1rem + .4vw, 1.3rem) con interlineado 1.2; recurso 1.25rem; navegación entre módulos 1.15rem; término de valores y dato de módulo 1.125rem; fase 1.05rem en tinta-2.
- **Marca** (800, anchura 72 %, 1.55rem): nombre en la barra.
- **Entrada** (400, 1.125rem): párrafo de entrada bajo un titular de página o de módulo, medida 64ch.
- **Body** (400, anchura 100 %, 1.0625rem, 1.55; 1rem bajo 576px): texto corrido, con medidas de 38–72ch según el contexto. El botón usa este mismo tamaño en 700 a anchura 85 %.
- **Control** (400–600, 1rem): campos, selector, enlaces de la barra (1.125rem en el menú móvil), botón pequeño, código de módulo.
- **Body pequeño** (0.9375rem): el paso más usado; texto de filas, listas, avisos, pies de foto, filtros, capítulos.
- **Label** (650, 0.875rem): etiquetas de campo, migas, encabezado de tabla y del pie, notas, metadatos de video.
- **Rótulo** (anchura 92 %, 0.8125rem, 1.4, tabular): el rótulo GPS y los metadatos pequeños; primera línea en 650 y tinta. En la cabecera de página sube a 0.9375rem.
- **Micro** (750, 0.75rem): severidad en la tabla de riesgos; subtítulo de la marca en 500.

Los tamaños de icono (1.1–1.6rem y 1.1–1.15em) dimensionan glifos de Bootstrap Icons dentro de controles; no son pasos tipográficos.

### Named Rules
**The Una Familia Rule.** Toda la jerarquía sale de Archivo moviendo peso y anchura. No se añade una segunda familia ni una monoespaciada para datos: las cifras tabulares hacen ese trabajo.

**The Cifra Tabular Rule.** Coordenadas, fechas, códigos, duraciones, capacidades y contadores llevan cifras tabulares. Un número que se compara o que rueda no puede bailar de ancho.

**The Rótulo Rule.** El rótulo GPS tiene tres líneas alineadas a la derecha: lugar (semibold 650, tinta), coordenadas con hemisferio y fecha (tinta-2). Si el punto no está registrado, el rótulo lo dice ("Registro pendiente") en vez de inventar coordenadas. En móvil, dentro de la cabecera de página, se alinea a la izquierda.

## Layout

Marco máximo de 1360px con canal lateral fluido; la retícula propia es de 12 columnas con hueco de columna clamp(1rem, 2.5vw, 2.5rem), y convive con la rejilla y las utilidades de Bootstrap 5.3 (su contenedor se alinea al marco). Las secciones respiran con un paso vertical fluido (token seccion).

La composición es asimétrica y de libro: titular en ocho columnas con la acción en las cuatro restantes; cabecera de sección con título en siete columnas y párrafo en cinco; folios escalonados (6 + 6 desplazado + 7 centrado); hoja editorial de 5 + 6 con un hueco. El rollo de registros arranca en el margen del contenido y sangra por la derecha con desplazamiento lateral y ajuste por elemento.

Puntos de corte: 992px (la barra colapsa, todas las retículas pasan a una columna, el índice lateral deja de ser fijo) y 576px (el libro y la ficha pasan a una columna, la ficha se reorganiza en filas de cuadrícula, los filtros ocupan el ancho). La barra mide 68px y el desplazamiento por anclas la respeta.

**The Fila Antes Que Tarjeta Rule.** El contenido repetido se ordena en filas separadas por filete (libro de servicios, catálogo de módulos, vías de contacto, recursos, pasos), no en tarjetas con caja.

## Elevation & Depth

El sistema es plano. La profundidad se expresa con filetes y con cambio de campo (suelo, papel, naranja, noche), no con sombras. La barra superior es translúcida (suelo al 94 % con desenfoque de 8px) y su filete inferior pasa de filete a tinta al desplazar.

### Shadow Vocabulary
- **Botón flotante** (`box-shadow: 0 6px 18px rgba(18, 20, 22, .22)`): solo los botones flotantes de WhatsApp y volver arriba, que sí flotan sobre el contenido.
- **Pulso de fijación** (`box-shadow: 0 0 0 .7rem rgba(254, 110, 23, 0)` animado desde 0): anillo que se expande una vez desde el cuadrado naranja al fijar un punto. Es movimiento, no elevación.

Los contornos de botones de línea, de la severidad baja y el anillo de foco de los campos usan `box-shadow` inset o de 3px como trazo, no como sombra.

### Named Rules
**The Plano Por Defecto Rule.** Nada proyecta sombra salvo lo que flota fijo sobre la página. Una superficie que necesita separarse cambia de campo o gana un filete.

## Shapes

Esquinas rectas en todo (0px): botones, campos, filtros, imágenes, códigos, fichas, botones flotantes. Los bordes son trazos de libro: 1px para filas (tinta para el filete principal, filete para los secundarios), 1.5px para contornos de controles y la tabla de equipo, 3px como encabezado de folio, de bloque de módulo, de índice lateral y de la navegación entre módulos. El único marcador gráfico es el cuadrado macizo (0.35–0.6rem): naranja para avisos, listas de chequeo, índice activo y fijación; tinta-3 para viñetas del libro. El borde discontinuo de 1px queda reservado a los espacios por llenar.

**The Esquina Recta Rule.** No hay radio en ningún elemento. Un círculo o una esquina redondeada rompe el registro.

## Components

### Buttons
Bloques planos y firmes, de texto condensado.
- **Shape:** rectos (0px), alto mínimo 3.1rem.
- **Primary:** campo naranja con tinta carbón; flecha que avanza 3px en hover; baja 1px al pulsar.
- **Hover / Focus:** naranja hondo en hover; foco con contorno de 2px en tinta y separación de 3px (naranja dentro de bandas de noche).
- **Línea:** transparente con contorno interior de 1.5px en tinta; se rellena de tinta en hover.
- **Claro:** la variante de línea para bandas de noche, en tinta de noche.
- **Pequeño:** relleno 0.7rem 1rem, alto 2.6rem.

### Chips
- **Filtros:** grupo unido bajo un contorno de 1.5px, separados por trazos verticales; papel en reposo, naranja claro en hover, tinta con texto claro cuando están activos; código numérico tabular al 70 % de opacidad.
- **Norma:** contorno de 1.5px en tinta, texto 0.875rem, cifras tabulares; solo identifica una norma técnica.
- **Severidad:** alta en tinta con texto naranja, media en campo naranja, baja con contorno de tinta.

### Cards / Containers
- **Corner Style:** rectas (0px).
- **Background:** sin caja; el contenedor es un filete superior (3px en folios, 1px en ítems de EPP) y el suelo.
- **Shadow Strategy:** ninguna (ver Elevation & Depth).
- **Folio:** filete de 3px, foto 4:3 de hasta 22rem, lugar condensado con rótulo a la derecha, alcance en 650 y la cifra grande cerrada por un filete suave.
- **Espacio reservado:** borde discontinuo de 1px en tinta-3, icono y etiqueta centrados; marca un contenido real pendiente, nunca un relleno.

### Inputs / Fields
- **Style:** contorno de 1.5px en tinta, fondo papel, recto, alto 3.1rem; el selector lleva una flecha propia dibujada en tinta.
- **Focus:** anillo exterior de 3px en naranja con el borde en tinta.
- **Error:** borde y mensaje en rojo de validación; el estado válido no se pinta de verde.
- **Búsqueda:** solo una línea inferior de 1.5px; al enfocar pasa a naranja hondo con un trazo naranja de 2px debajo.
- **Pedido:** selector de servicio apilado sobre el botón principal, sin hueco entre ellos.

### Navigation
- **Barra:** pegada arriba, translúcida, isotipo con marca condensada. Enlaces de 1rem en peso 550; un trazo naranja de 2px se dibuja de izquierda a derecha en hover y queda fijo en la página activa (que sube a 700). Por debajo de 992px, botón "menú" con contorno y lista vertical con filetes, colapso de Bootstrap; el botón de acción ocupa el ancho.
- **Índice lateral:** fijo bajo la barra, filete superior de 3px, enlaces separados por filete; el activo gana peso y el cuadrado naranja.
- **Migas:** 0.875rem en tinta-2, subrayado en filete que pasa a naranja.
- **Navegación entre módulos:** dos celdas bajo un filete de 3px, separadas por un filete vertical, tinte naranja claro en hover.

### Punto registrado (firma)
Una línea bajo el titular con filete superior de 1px en tinta: "Punto registrado" en 700 con un cuadrado naranja, el lugar en 600 y las coordenadas y la fecha en cifras tabulares. Al recorrer el rollo, las coordenadas ruedan hasta los valores de la foto activa en unos 700 ms con salida suave (1-(1-p)^4), el cuadrado emite un pulso de 900 ms y el filete del pie de la foto activa pasa de filete a naranja. Con movimiento reducido el cambio es instantáneo. La región anuncia el cambio a lectores de pantalla.

### Rollo de registros
Fotos verticales a 3:4 (las anchas a 1.6:1) con alto clamp(280px, 42vh, 460px), ligeramente desaturadas en reposo y a color pleno en hover o activas; cada pie abre con un filete de 3px y lleva el rótulo. Mandos de avance cuadrados de 2.75rem con contorno.

### Libro de servicios
Filas de tres columnas separadas por filete de tinta. Al pasar el cursor, un campo naranja se extiende ligeramente más allá de la fila por detrás del contenido y el texto secundario pasa a tinta sobre naranja.

### Ficha técnica
Tabla sobre la sección en campo naranja: filas con trazo de 1.5px en tinta, equipo en titular condensado, capacidad en cifra grande tabular, detalle en tinta sobre naranja. Bajo 576px cada fila se recompone en cuadrícula.

### Aviso
Nota de bitácora: filetes de 1px arriba y abajo en tinta, sin fondo, y un cuadrado naranja de 0.6rem como marcador. Los iconos dentro del aviso se ocultan.

### Paso (procedimiento)
Acordeón de filas con filete de tinta; número en un cuadrado con contorno. Abierto: fila en campo naranja y número invertido (tinta con cifra naranja); chevrón que gira en 240 ms.

### Fila de módulo
Código en cuadrado con contorno, título, metadatos tabulares y estado. Disponible: fondo papel, código y estado sobre campo naranja, tinte naranja claro en hover. Pendiente: todo en tinta-2/tinta-3 con el código en filete.

### Reglas
Lista ordenada de reglas de seguridad con filete superior de tinta y filetes de filete entre ítems; cada número va en un cuadrado de 2.4rem en campo naranja con tinta carbón, 800 a anchura 80 %, cifras tabulares. El texto de la regla en 600, medida 72ch.

### Fase
Encabezado que agrupa pasos dentro del procedimiento: 1.05rem, 750, anchura 85 %, en tinta-2, con 2rem de aire arriba. No lleva filete propio; el filete lo pone el primer paso que le sigue.

### Enlace de WhatsApp
Enlace en 650 con el icono de WhatsApp delante (verde hondo sobre claro, verde WhatsApp en el pie). El texto nombra la línea ("Escríbanos por WhatsApp", "Línea principal", "Línea alterna"); el número de teléfono nunca se muestra como texto. Varias líneas se agrupan en fila con hueco de 0.4rem 1.4rem.

### Recursos
Lista sobre banda de noche con filetes de noche: nombre en 750 a anchura 82 %, descripción en tinta de noche segunda y estado en naranja alineado a la derecha (bajo 992px pasa a una columna).

## Do's and Don'ts

### Do:
- **Do** usar el naranja como campo con tinta carbón encima (botones, ficha, fila activa, capítulo activo, paso abierto).
- **Do** acompañar cada foto de obra con su rótulo de tres líneas: lugar, coordenadas tabulares, fecha.
- **Do** escribir "Registro pendiente" cuando un punto no tiene coordenadas confirmadas.
- **Do** separar el contenido repetido con filetes de 1px y abrir folios, bloques e índices con un filete de 3px en tinta.
- **Do** dar cifras tabulares a todo dato medido, codificado o fechado.
- **Do** resolver la jerarquía con Archivo cambiando anchura (66–80 % en titulares, 100 % en texto) y peso (800–820 en titulares).
- **Do** marcar con un cuadrado macizo, no con iconos, en avisos, listas de chequeo e índice activo.
- **Do** dejar instantáneo bajo movimiento reducido todo lo que rueda, pulsa o se traza.
- **Do** numerar listas ordenadas con cuadrados en campo naranja y cifras tabulares.

### Don't:
- **Don't** poner texto naranja sobre el suelo claro o el papel (2.58:1).
- **Don't** redondear esquinas ni usar círculos en controles, imágenes o marcadores.
- **Don't** usar sombras para separar superficies; solo los botones flotantes las llevan.
- **Don't** inventar coordenadas, fechas ni nombres de clientes en un rótulo.
- **Don't** añadir una segunda familia tipográfica ni una monoespaciada para datos.
- **Don't** convertir filas de libro en tarjetas con caja y sombra.
- **Don't** mostrar el número de teléfono como texto; el contacto por WhatsApp se nombra por su línea.
- **Don't** usar los colores funcionales (rojo de validación, verdes de WhatsApp, negro de video) fuera de su función.
