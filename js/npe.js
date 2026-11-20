/* ============================================================
   NET PLUS ENERGY — Comportamientos compartidos
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Sombra de la barra al desplazar ---------- */
  const nav = document.querySelector('.npe-nav');
  const fabTop = document.getElementById('fabTop');

  const alDesplazar = () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 24);
    if (fabTop) fabTop.classList.toggle('visible', window.scrollY > 500);
  };
  window.addEventListener('scroll', alDesplazar, { passive: true });
  alDesplazar();

  if (fabTop) {
    fabTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------- Cerrar el menú móvil al elegir un enlace ---------- */
  const menu = document.getElementById('menuPrincipal');
  if (menu) {
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (menu.classList.contains('show')) {
          bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
      });
    });
  }

  /* ---------- Aparición progresiva ----------
     Los elementos .rv arrancan en opacity:0, así que si el observador
     no llegara a ejecutarse el contenido quedaría invisible. Por eso
     hay dos redes de seguridad: navegador sin soporte y temporizador. */
  const elementos = document.querySelectorAll('.rv');
  const mostrarTodo = () => elementos.forEach(el => el.classList.add('vis'));

  if (elementos.length) {
    if (!('IntersectionObserver' in window)) {
      mostrarTodo();
    } else {
      const obs = new IntersectionObserver((entradas) => {
        entradas.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      elementos.forEach(el => obs.observe(el));

      // Si pasados 4 s algo sigue oculto, se muestra de todas formas.
      setTimeout(mostrarTodo, 4000);
    }
  }

  /* ---------- Contadores ---------- */
  const contadores = document.querySelectorAll('[data-contador]');
  if (contadores.length) {
    const sinAnimar = () => contadores.forEach(el => {
      if (el.textContent === '0') el.textContent = el.dataset.contador;
    });
    const animar = el => {
      const meta = Number(el.dataset.contador);
      const t0 = performance.now();
      const paso = ahora => {
        const p = Math.min((ahora - t0) / 1600, 1);
        el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * meta);
        if (p < 1) requestAnimationFrame(paso);
      };
      requestAnimationFrame(paso);
    };
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sinAnimar();
    } else {
      const obsC = new IntersectionObserver((entradas) => {
        entradas.forEach(e => {
          if (e.isIntersecting) { animar(e.target); obsC.unobserve(e.target); }
        });
      }, { threshold: 0.5 });
      contadores.forEach(el => obsC.observe(el));
      setTimeout(sinAnimar, 4000);
    }
  }

  /* ---------- Índice lateral del módulo ---------- */
  const enlacesIndice = document.querySelectorAll('.indice-lateral a');
  if (enlacesIndice.length) {
    const secciones = [...enlacesIndice]
      .map(a => document.querySelector(a.getAttribute('href')))
      .filter(Boolean);

    const obsI = new IntersectionObserver((entradas) => {
      entradas.forEach(e => {
        if (!e.isIntersecting) return;
        enlacesIndice.forEach(a => {
          a.classList.toggle('activo', a.getAttribute('href') === '#' + e.target.id);
        });
      });
    }, { rootMargin: '-90px 0px -65% 0px' });

    secciones.forEach(s => obsI.observe(s));
  }

  /* ---------- Videos en YouTube ----------
     Cada parte es una portada (a.yt[data-yt]) que enlaza al video. Al dar clic se
     reemplaza por el reproductor de youtube-nocookie.com: YouTube no se carga ni
     pone cookies antes de que la persona decida ver el video. Sin JavaScript, el
     enlace abre el video en YouTube.
     El reproductor se controla con mensajes (postMessage), sin cargar scripts de
     YouTube en la página: así la política de seguridad solo permite su iframe. */
  const ORIGEN_YT = 'https://www.youtube-nocookie.com';
  const reproductores = new Map();          // id del elemento -> estado del reproductor

  const ordenar = (r, func, args = []) => {
    if (r.iframe.contentWindow) {
      r.iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func, args, id: r.id, channel: 'widget' }), ORIGEN_YT);
    }
  };

  const reproducirYT = (id, desde) => {
    const actual = reproductores.get(id);
    if (actual) {
      if (desde === undefined) return;
      if (!actual.listo) { actual.pendiente = desde; return; }
      ordenar(actual, 'seekTo', [desde, true]);
      ordenar(actual, 'playVideo');
      return;
    }
    const portada = document.getElementById(id);
    if (!portada || !portada.dataset.yt) return;
    const q = new URLSearchParams({
      autoplay: 1, rel: 0, playsinline: 1, enablejsapi: 1,
      origin: location.origin, start: Math.floor(desde || 0)
    });
    const iframe = document.createElement('iframe');
    iframe.src = `${ORIGEN_YT}/embed/${portada.dataset.yt}?${q}`;
    iframe.title = portada.dataset.titulo || 'Video';
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.className = 'yt-marco';
    iframe.id = id;

    const r = { id, iframe, listo: false, oyentes: [], pendiente: undefined };
    reproductores.set(id, r);
    // Saludo: pide al reproductor que informe su estado y tiempo; se repite hasta que responda.
    const saludar = () => {
      if (iframe.contentWindow) {
        iframe.contentWindow.postMessage(JSON.stringify({ event: 'listening', id, channel: 'widget' }), ORIGEN_YT);
      }
    };
    iframe.addEventListener('load', () => {
      let intentos = 0;
      saludar();
      clearInterval(r.saludo);
      r.saludo = setInterval(() => {
        if (r.listo || ++intentos > 40) clearInterval(r.saludo); else saludar();
      }, 250);
    });
    portada.replaceWith(iframe);
    iframe.focus();
  };

  window.addEventListener('message', e => {
    if (e.origin !== ORIGEN_YT || typeof e.data !== 'string') return;
    let d;
    try { d = JSON.parse(e.data); } catch { return; }
    const r = [...reproductores.values()].find(x => x.iframe.contentWindow === e.source);
    if (!r) return;
    if (!r.listo) {
      r.listo = true;
      clearInterval(r.saludo);
      if (r.pendiente !== undefined) {
        ordenar(r, 'seekTo', [r.pendiente, true]);
        ordenar(r, 'playVideo');
        r.pendiente = undefined;
      }
    }
    const info = (d && d.info) || {};
    if (typeof info.currentTime === 'number') r.oyentes.forEach(f => f(info.currentTime));
    // Un solo video a la vez: al empezar uno, se pausan los demás.
    if (info.playerState === 1) {
      reproductores.forEach(otro => { if (otro !== r && otro.listo) ordenar(otro, 'pauseVideo'); });
      document.querySelectorAll('video').forEach(v => { if (!v.paused) v.pause(); });
    }
  });

  document.querySelectorAll('a.yt[data-yt]').forEach(portada => {
    portada.addEventListener('click', e => {
      if (e.ctrlKey || e.metaKey || e.shiftKey) return;   // abrir en YouTube si lo pide
      e.preventDefault();
      reproducirYT(portada.id, 0);
    });
  });

  /* ---------- Capítulos de video ----------
     Cada grupo .capitulos apunta a su video por data-video (portada de YouTube
     o <video>). Al hacer clic salta a ese segundo; mientras reproduce,
     resalta el capítulo en curso. */
  document.querySelectorAll('.capitulos').forEach(grupo => {
    const id = grupo.dataset.video;
    const elemento = document.getElementById(id);
    if (!elemento) return;
    const enYouTube = Boolean(elemento.dataset.yt);
    const video = enYouTube ? null : elemento;

    const botones = [...grupo.querySelectorAll('.capitulo')];
    const marcas  = botones.map(b => Number(b.dataset.t));

    botones.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        if (enYouTube) {
          reproducirYT(id, marcas[i]);
          resaltar(marcas[i]);
          return;
        }
        video.currentTime = marcas[i];
        video.play().catch(() => { /* el navegador puede exigir un gesto previo */ });
      });
    });

    function resaltar(tiempo) {
      const t = enYouTube ? tiempo : video.currentTime;
      // Durante un salto el tiempo puede leerse NaN: en ese caso se
      // conserva el resaltado anterior en vez de apagarlo todo.
      if (!Number.isFinite(t)) return;
      let activo = 0;
      for (let i = 0; i < marcas.length; i++) {
        if (t >= marcas[i]) activo = i;
      }
      botones.forEach((b, i) => b.classList.toggle('activo', i === activo));
      // En pantalla ancha la lista se desplaza por dentro: mantener visible el capítulo en curso
      // moviendo solo la lista, nunca la página.
      if (grupo.scrollHeight > grupo.clientHeight + 1) {
        const b = botones[activo];
        const arriba = b.offsetTop - grupo.offsetTop;
        if (arriba < grupo.scrollTop || arriba + b.offsetHeight > grupo.scrollTop + grupo.clientHeight) {
          grupo.scrollTop = arriba - grupo.clientHeight / 3;
        }
      }
    }
    if (enYouTube) {
      // El reproductor se crea al primer clic: se registra el oyente cuando exista.
      const registrar = () => {
        const r = reproductores.get(id);
        if (r && !r.oyentes.includes(resaltar)) r.oyentes.push(resaltar);
      };
      elemento.addEventListener('click', () => setTimeout(registrar));
      botones.forEach(b => b.addEventListener('click', registrar));
    } else {
      video.addEventListener('timeupdate', () => resaltar());
      video.addEventListener('seeked', () => resaltar());
    }
  });

  /* ---------- Un solo video a la vez ---------- */
  const videos = [...document.querySelectorAll('video')];
  videos.forEach(v => {
    v.addEventListener('play', () => {
      videos.forEach(otro => { if (otro !== v && !otro.paused) otro.pause(); });
    });
  });

  const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Acción de la portada ----------
     Lleva el servicio elegido al formulario de contacto. */
  const pedido = document.getElementById('pedido');
  if (pedido) {
    pedido.addEventListener('submit', e => {
      e.preventDefault();
      const elegido = document.getElementById('pedidoServicio').value;
      const interes = document.getElementById('interes');
      if (elegido && interes) interes.value = elegido;
      const destino = document.getElementById('contacto');
      if (destino) destino.scrollIntoView({ behavior: reducido ? 'auto' : 'smooth' });
      setTimeout(() => {
        const nombre = document.getElementById('nombre');
        if (nombre) nombre.focus({ preventScroll: true });
      }, reducido ? 0 : 650);
    });
  }

  /* ---------- Rollo de registros y punto registrado ----------
     Al recorrer el rollo, la línea de la portada fija el punto
     activo: lugar, coordenadas (cifras que ruedan) y fecha. */
  const rollo = document.getElementById('rollo');
  const punto = document.getElementById('puntoActivo');
  if (rollo && punto) {
    const registros = [...rollo.querySelectorAll('.registro')];
    const campo = n => punto.querySelector(`[data-campo="${n}"]`);
    const mandos = [...document.querySelectorAll('[data-rollo]')];
    let actual = 0;

    // Cada cifra lleva su propia animación; un temporizador garantiza
    // el valor final aunque el navegador congele los cuadros.
    const rodar = (nodo, desde, hasta) => {
      cancelAnimationFrame(nodo._anim);
      clearTimeout(nodo._fin);
      const final = hasta.toFixed(6);
      if (reducido || document.hidden || !Number.isFinite(desde)) { nodo.textContent = final; return; }
      const t0 = performance.now();
      const paso = ahora => {
        const p = Math.min((ahora - t0) / 700, 1);
        const e = 1 - Math.pow(1 - p, 4);
        nodo.textContent = (desde + (hasta - desde) * e).toFixed(6);
        if (p < 1) nodo._anim = requestAnimationFrame(paso);
      };
      nodo._anim = requestAnimationFrame(paso);
      nodo._fin = setTimeout(() => { cancelAnimationFrame(nodo._anim); nodo.textContent = final; }, 760);
    };

    const actualizarMandos = () => {
      const fin = rollo.scrollWidth - rollo.clientWidth - 2;
      mandos.forEach(b => {
        const dir = Number(b.dataset.rollo);
        b.disabled = (dir < 0 && rollo.scrollLeft <= 2) || (dir > 0 && rollo.scrollLeft >= fin);
      });
    };

    const fijar = i => {
      if (i === actual && registros[i].classList.contains('activo')) return;
      actual = i;
      const r = registros[i];
      registros.forEach((x, j) => x.classList.toggle('activo', j === i));
      const lat = campo('lat'), lon = campo('lon');
      rodar(lat, parseFloat(lat.textContent), parseFloat(r.dataset.lat));
      rodar(lon, parseFloat(lon.textContent), parseFloat(r.dataset.lon));
      campo('lugar').textContent = r.dataset.lugar;
      campo('fecha').textContent = r.dataset.fecha;
      punto.classList.remove('cambio');
      void punto.offsetWidth;
      punto.classList.add('cambio');
    };

    const inicioRollo = () => parseFloat(getComputedStyle(rollo).paddingLeft) || 0;

    // El registro activo es el que queda alineado al inicio del rollo
    let pendiente = false;
    rollo.addEventListener('scroll', () => {
      actualizarMandos();
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(() => {
        pendiente = false;
        const ref = rollo.scrollLeft;
        let mejor = 0, dist = Infinity;
        registros.forEach((r, i) => {
          const d = Math.abs(r.offsetLeft - inicioRollo() - ref);
          if (d < dist) { dist = d; mejor = i; }
        });
        fijar(mejor);
      });
    }, { passive: true });

    registros.forEach((r, i) => {
      r.addEventListener('mouseenter', () => fijar(i));
      r.addEventListener('focusin', () => fijar(i));
    });

    mandos.forEach(b => b.addEventListener('click', () => {
      const i = Math.max(0, Math.min(registros.length - 1, actual + Number(b.dataset.rollo)));
      rollo.scrollTo({ left: registros[i].offsetLeft - inicioRollo(), behavior: reducido ? 'auto' : 'smooth' });
      fijar(i);
    }));

    rollo.addEventListener('keydown', e => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      document.querySelector(`[data-rollo="${e.key === 'ArrowRight' ? 1 : -1}"]`).click();
    });

    actualizarMandos();
  }

  /* ---------- Conteo de módulos por línea (inicio) ---------- */
  if (typeof CURSOS !== 'undefined') {
    document.querySelectorAll('[data-linea-cuenta]').forEach(el => {
      const n = CURSOS.filter(c => c.linea === el.dataset.lineaCuenta).length;
      el.textContent = `${n} módulo${n === 1 ? '' : 's'}`;
    });
  }

  /* ---------- Formulario de contacto ----------
     El sitio es estático: al enviar, se abre WhatsApp con el mensaje
     ya redactado al número de data-whatsapp del formulario. */
  const form = document.getElementById('formContacto');
  if (form) {
    const ok = document.getElementById('formOk');
    const valor = id => (document.getElementById(id)?.value || '').trim();

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        form.querySelector(':invalid')?.focus();
        return;
      }

      const lineas = [
        'Hola, NPE. Escribo desde la página web.',
        '',
        `Nombre: ${valor('nombre')}`,
        valor('empresa') ? `Empresa: ${valor('empresa')}` : null,
        `Correo: ${valor('correo')}`,
        valor('telefono') ? `Teléfono: ${valor('telefono')}` : null,
        `Servicio: ${valor('interes')}`,
        '',
        valor('mensaje'),
      ].filter(l => l !== null);

      const url = `https://wa.me/${form.dataset.whatsapp}?text=${encodeURIComponent(lineas.join('\n'))}`;
      const ventana = window.open(url, '_blank');
      if (ventana) ventana.opener = null;
      else window.location.href = url;   // navegador que bloquea ventanas nuevas

      ok.classList.remove('d-none');
      ok.scrollIntoView({ behavior: reducido ? 'auto' : 'smooth', block: 'center' });
      form.reset();
      form.classList.remove('was-validated');
    });
  }

  /* ---------- Año en el pie ---------- */
  document.querySelectorAll('[data-anio]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});
