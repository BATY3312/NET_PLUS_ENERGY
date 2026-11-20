/* ============================================================
   NET PLUS ENERGY — Catálogo del Centro de Formación
   ------------------------------------------------------------
   PARA AGREGAR UN MÓDULO: añade un objeto a este arreglo.
   El índice (formacion.html) se construye solo a partir de aquí.

   estado: "publicado"  -> la tarjeta enlaza a su página
           "proximamente" -> la tarjeta se muestra en gris, sin enlace

   Se declara como variable global (no se usa fetch) para que el
   sitio funcione al abrirlo con doble clic, sin servidor web.
   ============================================================ */

const LINEAS = {
  A: { nombre: 'Infraestructura eléctrica',   color: 'A', icono: 'bi-lightning-charge-fill' },
  B: { nombre: 'Telecomunicaciones y F.O.',   color: 'B', icono: 'bi-broadcast-pin' },
  C: { nombre: 'Seguridad y SST',             color: 'C', icono: 'bi-shield-check' },
  D: { nombre: 'Herramientas y materiales',   color: 'D', icono: 'bi-tools' }
};

const CURSOS = [
  /* ---------- LÍNEA A · Infraestructura eléctrica ---------- */
  {
    id: 'postes-metalicos',
    linea: 'A',
    titulo: 'Instalación de postes metálicos',
    resumen: 'Excavación, ensamble de tramos por traslape, izaje con grúa o parado manual, aplomado en dos caras y relleno compactado por capas; cálculos de campo y criterios de recibo.',
    nivel: 'Intermedio',
    duracion: '40 min',
    icono: 'bi-sign-intersection-y',
    estado: 'publicado',
    url: 'formacion/postes-metalicos.html'
  },
  {
    id: 'retenidas',
    linea: 'A',
    titulo: 'Instalación de retenidas',
    resumen: 'Anclaje, cable de acero, guardacabo y grapas, collarín y aislador tensor; cálculo del anclaje, criterios de recibo y diagnóstico de fallas.',
    nivel: 'Intermedio',
    duracion: '35 min',
    icono: 'bi-triangle',
    estado: 'publicado',
    url: 'formacion/retenidas.html'
  },
  {
    id: 'redes-mt-bt',
    linea: 'A',
    titulo: 'Construcción y mantenimiento de redes MT–BT',
    resumen: 'Tendido de conductores, herrajes, aisladores, conexiones y maniobras de mantenimiento en media y baja tensión.',
    nivel: 'Avanzado',
    duracion: '60 min',
    icono: 'bi-diagram-3',
    estado: 'proximamente',
    url: 'formacion/redes-mt-bt.html'
  },
  {
    id: 'centros-transformacion',
    linea: 'A',
    titulo: 'Centros de transformación',
    resumen: 'Montaje de transformadores, protecciones, puesta a tierra y entregables al operador de red.',
    nivel: 'Avanzado',
    duracion: '50 min',
    icono: 'bi-box-seam',
    estado: 'proximamente',
    url: 'formacion/centros-transformacion.html'
  },
  {
    id: 'alumbrado-publico',
    linea: 'A',
    titulo: 'Alumbrado público',
    resumen: 'Criterios de diseño, luminarias, telegestión y requisitos de iluminación aplicables al espacio público.',
    nivel: 'Intermedio',
    duracion: '40 min',
    icono: 'bi-lamp',
    estado: 'proximamente',
    url: 'formacion/alumbrado-publico.html'
  },

  /* ---------- LÍNEA B · Telecomunicaciones y fibra óptica ---------- */
  {
    id: 'fundamentos-fibra',
    linea: 'B',
    titulo: 'Fundamentos de fibra óptica',
    resumen: 'Reflexión interna total, monomodo y multimodo, ventanas de operación, atenuación, dBm y dB, presupuesto óptico, medición de pérdida y código de colores TIA-598.',
    nivel: 'Básico',
    duracion: '50 min',
    icono: 'bi-rainbow',
    estado: 'publicado',
    url: 'formacion/fundamentos-fibra-optica.html'
  },
  {
    id: 'redes-troncales',
    linea: 'B',
    titulo: 'Redes troncales de telecomunicaciones',
    resumen: 'Las 10 reglas de oro, tendido del cable con carrete, chipa, cuerda guía y dron, vestido de postes, retenciones helicoidales y tensionado controlado.',
    nivel: 'Avanzado',
    duracion: '55 min',
    icono: 'bi-hdd-network',
    estado: 'publicado',
    url: 'formacion/redes-troncales.html'
  },
  {
    id: 'fusion-fibra-optica',
    linea: 'B',
    titulo: 'Fusión de fibra óptica',
    resumen: 'Empalme por fusión en planta externa: preparación del cable, pelado, limpieza, corte, fusión, protección y verificación con OTDR.',
    nivel: 'Intermedio',
    duracion: '50 min',
    icono: 'bi-bezier2',
    estado: 'publicado',
    url: 'formacion/fusion-fibra-optica.html'
  },
  {
    id: 'cajas-nap',
    linea: 'B',
    titulo: 'Instalación y configuración de cajas NAP',
    resumen: 'Lectura del unifilar, hilo asignado, cajas en sangría y en punta, conexión del splitter PLC, trazabilidad de salidas, pérdidas ópticas y verificación de la potencia.',
    nivel: 'Intermedio',
    duracion: '50 min',
    icono: 'bi-box',
    estado: 'publicado',
    url: 'formacion/cajas-nap.html'
  },
  {
    id: 'pruebas-certificacion',
    linea: 'B',
    titulo: 'Pruebas y certificación óptica',
    resumen: 'Inspección de conectores, pérdida de inserción con fuente y power meter, configuración del OTDR, lectura de trazas reales, reflectancia y registro de certificación.',
    nivel: 'Avanzado',
    duracion: '50 min',
    icono: 'bi-graph-up',
    estado: 'publicado',
    url: 'formacion/pruebas-certificacion.html'
  },

  /* ---------- LÍNEA C · Seguridad y SST ---------- */
  {
    id: 'marco-sgsst',
    linea: 'C',
    titulo: 'Marco legal del SG-SST',
    resumen: 'Obligaciones del empleador y del trabajador, estándares mínimos y documentación del sistema de gestión.',
    nivel: 'Básico',
    duracion: '35 min',
    icono: 'bi-journal-check',
    estado: 'proximamente',
    url: 'formacion/marco-sgsst.html'
  },
  {
    id: 'trabajo-alturas',
    linea: 'C',
    titulo: 'Trabajo seguro en alturas',
    resumen: 'Resolución 4272 de 2021, roles, peligros, sistemas de protección contra caídas, anclajes y espacio libre, inspección de equipos, permiso de trabajo, control del área y rescate.',
    nivel: 'Obligatorio',
    duracion: '60 min',
    icono: 'bi-arrow-up-square',
    estado: 'publicado',
    url: 'formacion/trabajo-alturas.html'
  },
  {
    id: 'riesgo-electrico',
    linea: 'C',
    titulo: 'Riesgo eléctrico y las cinco reglas de oro',
    resumen: 'Distancias de seguridad, consignación de instalaciones, arco eléctrico y bloqueo y etiquetado.',
    nivel: 'Obligatorio',
    duracion: '45 min',
    icono: 'bi-exclamation-octagon',
    estado: 'proximamente',
    url: 'formacion/riesgo-electrico.html'
  },
  {
    id: 'epp-actividad',
    linea: 'C',
    titulo: 'EPP por tipo de actividad',
    resumen: 'Selección, uso, inspección y reposición de los elementos de protección personal según la tarea.',
    nivel: 'Básico',
    duracion: '30 min',
    icono: 'bi-person-badge',
    estado: 'proximamente',
    url: 'formacion/epp-actividad.html'
  },
  {
    id: 'ats-permisos',
    linea: 'C',
    titulo: 'Análisis de trabajo seguro y permisos',
    resumen: 'Elaboración del ATS, identificación de peligros, controles y diligenciamiento de permisos de trabajo.',
    nivel: 'Intermedio',
    duracion: '35 min',
    icono: 'bi-clipboard-check',
    estado: 'proximamente',
    url: 'formacion/ats-permisos.html'
  },
  {
    id: 'emergencias',
    linea: 'C',
    titulo: 'Emergencias, rescate y primeros auxilios',
    resumen: 'Plan de emergencias, rescate en alturas, atención inicial de lesionados y reporte de incidentes.',
    nivel: 'Intermedio',
    duracion: '45 min',
    icono: 'bi-heart-pulse',
    estado: 'proximamente',
    url: 'formacion/emergencias.html'
  },

  /* ---------- LÍNEA D · Herramientas y materiales ---------- */
  {
    id: 'herramientas-electricas',
    linea: 'D',
    titulo: 'Herramientas y equipos para obra eléctrica',
    resumen: 'Herramienta manual, hidráulica y de medición, con los criterios para inspeccionarla antes de usarla.',
    nivel: 'Básico',
    duracion: '30 min',
    icono: 'bi-wrench-adjustable',
    estado: 'proximamente',
    url: 'formacion/herramientas-electricas.html'
  },
  {
    id: 'herramientas-fibra',
    linea: 'D',
    titulo: 'Herramientas y equipos para fibra óptica',
    resumen: 'Fusionadora, cortadora de precisión, peladoras, OTDR, power meter y consumibles de limpieza.',
    nivel: 'Básico',
    duracion: '30 min',
    icono: 'bi-tools',
    estado: 'proximamente',
    url: 'formacion/herramientas-fibra.html'
  },
  {
    id: 'materiales-herrajes',
    linea: 'D',
    titulo: 'Materiales y herrajes de red',
    resumen: 'Conductores, aisladores, herrajes de suspensión y retención, preformados y accesorios de planta externa.',
    nivel: 'Intermedio',
    duracion: '35 min',
    icono: 'bi-nut',
    estado: 'proximamente',
    url: 'formacion/materiales-herrajes.html'
  }
];
