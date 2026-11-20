/* ============================================================
   NET PLUS ENERGY — Catálogo del Centro de Formación
   Construye el índice de módulos a partir de CURSOS (cursos-data.js).
   ============================================================ */
(() => {
  const cont     = document.getElementById('catalogo');
  const vacio    = document.getElementById('sinResultados');
  const buscador = document.getElementById('buscador');
  const filtros  = document.getElementById('filtros');

  let lineaActiva = 'todos';

  document.getElementById('totalModulos').textContent = CURSOS.length;
  const publicados = CURSOS.filter(c => c.estado === 'publicado').length;
  document.getElementById('totalPublicados').textContent = publicados;
  document.getElementById('palabraPublicados').textContent = publicados === 1 ? 'publicado' : 'publicados';

  const esc = s => String(s).replace(/[&<>"]/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function fila(c) {
    const publicado = c.estado === 'publicado';
    const etiqueta  = LINEAS[c.linea].nombre;
    const el = document.createElement(publicado ? 'a' : 'div');

    el.className = 'modulo-fila' + (publicado ? '' : ' pendiente');
    el.setAttribute('role', 'listitem');
    el.dataset.linea = c.linea;
    el.dataset.texto = (c.titulo + ' ' + c.resumen + ' ' + etiqueta).toLowerCase();
    if (publicado) el.href = c.url;

    el.innerHTML = `
      <span class="codigo" aria-hidden="true">${esc(c.linea)}</span>
      <div>
        <h3>${esc(c.titulo)}</h3>
        <p>${esc(c.resumen)}</p>
        <p class="meta-movil">${esc(etiqueta)} · ${esc(c.nivel)} · ${esc(c.duracion)}</p>
      </div>
      <span class="meta">${esc(etiqueta)}</span>
      <span class="meta">${esc(c.nivel)} · ${esc(c.duracion)}</span>
      ${publicado
        ? '<span class="estado">Ver módulo <i class="bi bi-arrow-right" aria-hidden="true"></i></span>'
        : '<span class="estado">Próximamente</span>'}`;

    return el;
  }

  // Publicados primero, conservando el orden del archivo de datos
  [...CURSOS]
    .sort((a, b) => (a.estado === 'publicado' ? 0 : 1) - (b.estado === 'publicado' ? 0 : 1))
    .forEach(c => cont.appendChild(fila(c)));

  function aplicar() {
    const q = buscador.value.trim().toLowerCase();
    let visibles = 0;

    cont.querySelectorAll('[data-linea]').forEach(item => {
      const coincideLinea = lineaActiva === 'todos' || item.dataset.linea === lineaActiva;
      const coincideTexto = !q || item.dataset.texto.includes(q);
      const mostrar = coincideLinea && coincideTexto;
      item.hidden = !mostrar;
      if (mostrar) visibles++;
    });

    vacio.classList.toggle('d-none', visibles > 0);
  }

  filtros.addEventListener('click', e => {
    const btn = e.target.closest('.filtro-btn');
    if (!btn) return;
    filtros.querySelectorAll('.filtro-btn').forEach(b => {
      b.classList.remove('activo');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('activo');
    btn.setAttribute('aria-pressed', 'true');
    lineaActiva = btn.dataset.filtro;
    aplicar();
  });

  buscador.addEventListener('input', aplicar);

  // Permite enlazar directo a una línea: formacion.html?linea=B
  const pedida = new URLSearchParams(location.search).get('linea');
  if (pedida && LINEAS[pedida]) {
    const btn = filtros.querySelector(`[data-filtro="${pedida}"]`);
    if (btn) btn.click();
  }
})();
