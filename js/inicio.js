/* ============================================================
   NET PLUS ENERGY — Inicio y páginas de proyecto
   Menú del celular, registro de obra y visor de fotos.
   El formulario, el año del pie y los contadores de módulos
   los maneja js/npe.js.
   ============================================================ */
(() => {
  const reducido = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Menú del celular ---------- */
  const barra = document.querySelector('.nav');
  const boton = barra && barra.querySelector('.menu');
  if (boton) {
    const cerrar = () => { barra.classList.remove('abierta'); boton.setAttribute('aria-expanded', 'false'); };
    boton.addEventListener('click', () => {
      const abierto = barra.classList.toggle('abierta');
      boton.setAttribute('aria-expanded', String(abierto));
      boton.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    });
    barra.querySelectorAll('nav a').forEach(a => a.addEventListener('click', cerrar));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && barra.classList.contains('abierta')) { cerrar(); boton.focus(); } });
  }

  /* ---------- Registro de obra: cada punto cambia la foto y su rótulo ---------- */
  const lista = document.getElementById('puntos');
  const img = document.getElementById('registro-img');
  const rotulo = document.getElementById('registro-rotulo');
  if (lista && img && rotulo) {
    lista.addEventListener('click', e => {
      const b = e.target.closest('button');
      if (!b || b.getAttribute('aria-pressed') === 'true') return;
      lista.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', 'false'));
      b.setAttribute('aria-pressed', 'true');
      const [titulo, zona] = b.dataset.rot.split('|');
      const poner = () => {
        img.src = `img/proyectos/${b.dataset.img}.webp`;
        img.alt = b.dataset.alt;
        img.width = b.dataset.w; img.height = b.dataset.h;
        const fuerte = document.createElement('b'); fuerte.textContent = titulo;
        rotulo.replaceChildren(fuerte, zona);
      };
      if (reducido) { poner(); return; }
      img.classList.add('cambia');                         // sale rápido (140 ms)…
      setTimeout(() => {
        poner();
        img.decode().catch(() => {}).finally(() => img.classList.remove('cambia'));   // …y entra al cargar
      }, 140);
    });
  }

  /* ---------- Visor de fotos (páginas de proyecto) ---------- */
  const visor = document.getElementById('visor');
  if (visor && visor.showModal) {
    const fotos = [...document.querySelectorAll('.fila-fotos .foto')];
    const vImg = document.getElementById('visor-img');
    const vTxt = document.getElementById('visor-txt');
    let i = 0, origen = null;
    const mostrar = k => {
      i = (k + fotos.length) % fotos.length;
      const a = fotos[i].querySelector('img');
      vImg.src = fotos[i].getAttribute('href'); vImg.alt = a.alt; vTxt.textContent = a.alt;
    };
    fotos.forEach((f, k) => f.addEventListener('click', e => { e.preventDefault(); origen = f; mostrar(k); visor.showModal(); }));
    visor.addEventListener('click', e => {
      const b = e.target.closest('button');
      if (b && b.dataset.paso) mostrar(i + Number(b.dataset.paso));
      else if ((b && 'cerrar' in b.dataset) || e.target === visor) visor.close();
    });
    visor.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') mostrar(i + 1);
      if (e.key === 'ArrowLeft') mostrar(i - 1);
    });
    visor.addEventListener('close', () => origen && origen.focus());
  }
})();
