# Videos del sitio

Los videos de los módulos están en **YouTube**, como **no listados** en el canal de NPE. Las páginas los muestran
con el reproductor de `youtube-nocookie.com`, que se carga solo cuando la persona da clic en reproducir.

Esta carpeta guarda **solo los originales**, como respaldo. No se publica y no está en el repositorio: los
videos suman unos 775 MB y GitHub no acepta archivos de más de 100 MB.

| Archivo original | Módulo | YouTube |
|---|---|---|
| `alturas-parte1-prevencion-preparacion.mp4` | C2 · Trabajo seguro en alturas | https://youtu.be/HB0ymqN_iE4 |
| `alturas-parte2-ejecucion-caidas-rescate.mp4` | C2 · Trabajo seguro en alturas | https://youtu.be/5PK0JCnL5Rw |
| `fundamentos-fo-parte1-transmision.mp4` | B1 · Fundamentos de fibra óptica | https://youtu.be/81-bBM4_WWo |
| `fundamentos-fo-parte2-ventanas-colores.mp4` | B1 · Fundamentos de fibra óptica | https://youtu.be/KvoAUNVkZl8 |
| `fusion-fo-parte1-preparacion.mp4` | B3 · Fusión de fibra óptica | https://youtu.be/Vt-BBLlhWVs |
| `fusion-fo-parte2-empalme.mp4` | B3 · Fusión de fibra óptica | https://youtu.be/W1zI3LEDOuA |
| `nap-parte1-unifilar.mp4` | B4 · Cajas NAP | https://youtu.be/1DDVmJQqx_Y |
| `nap-parte2-fusiones-perdidas.mp4` | B4 · Cajas NAP | https://youtu.be/9rzoVUjHp0s |
| `pruebas-certificacion-optica.mp4` | B5 · Pruebas y certificación óptica | https://youtu.be/5qhvGTZJUuE |
| `troncales-parte1-seguridad.mp4` | B2 · Redes troncales | https://youtu.be/sldxiG8DxuU |
| `troncales-parte2-tendido.mp4` | B2 · Redes troncales | https://youtu.be/ue8OaSb3kSE |
| `troncales-parte3-herrajes-tensionado.mp4` | B2 · Redes troncales | https://youtu.be/VHTk9k1jVuY |
| `troncales-parte4-retenidas.mp4` | A2 · Instalación de retenidas | https://youtu.be/VYbtfFKFp0M |
| `troncales-parte5-postes-metalicos.mp4` | A1 · Instalación de postes metálicos | https://youtu.be/8UHaM5bIIa4 |

## Cambiar o agregar un video

1. Súbalo a YouTube como **No listado** y con **«Permitir inserción»** activado. Si la inserción está apagada,
   la página muestra un error en lugar del video.
2. Anote el código del enlace (lo que va después de `youtu.be/`) en `IDS` de
   `D:\SKILLS\pagina\herramientas\videos_youtube.py`.
3. En la página del módulo, la portada es `<a class="yt" data-yt="CÓDIGO" …>`: cambie el código ahí y en el
   enlace «Ver en YouTube», o regenere el módulo con su `construir_*.py`.
