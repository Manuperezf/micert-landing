export type ResourceTipo = "Producto" | "Comparativa" | "Normativa" | "Caso";
export type ResourceTema = "QR" | "SENCE" | "NCh 2728" | "Excel";

export type ArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type ResourceArticle = {
  slug: string;
  tipo: ResourceTipo;
  temas: ResourceTema[];
  title: string;
  excerpt: string;
  author: string;
  date: string;
  dateISO: string;
  featured?: boolean;
  metaTitle: string;
  metaDescription: string;
  sections: ArticleSection[];
};

export const RESOURCE_TIPOS: ResourceTipo[] = [
  "Producto",
  "Comparativa",
  "Normativa",
  "Caso",
];

export const RESOURCE_TEMAS: ResourceTema[] = [
  "QR",
  "SENCE",
  "NCh 2728",
  "Excel",
];

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    slug: "software-para-otec",
    tipo: "Producto",
    temas: ["Excel", "SENCE"],
    title: "Software para los OTEC: qué evaluar antes de emitir certificados",
    excerpt:
      "No todos los sistemas resuelven lo mismo. Estas son las capacidades que un OTEC debería exigir antes de migrar la emisión de certificados.",
    author: "Equipo MiCert",
    date: "20 de junio de 2026",
    dateISO: "2026-06-20",
    featured: true,
    metaTitle: "Software para los OTEC: guía de evaluación | MiCert",
    metaDescription:
      "Qué debe incluir un software de certificados para los OTEC: emisión masiva, QR verificable, trazabilidad SENCE y control de vigencia.",
    sections: [
      {
        id: "problema-pdf",
        title: "El PDF editable ya no alcanza",
        paragraphs: [
          "Muchos OTEC siguen emitiendo certificados en PDF armados a mano. El formato se ve bien, pero cualquier persona con un editor puede alterar nombre, fecha o nota. Eso debilita la confianza del alumno, del cliente corporativo y del auditor.",
          "Un software para los OTEC no debería limitarse a generar un archivo bonito. Debe entregar un documento verificable, con trazabilidad de emisión y un registro que resista una revisión de SENCE.",
        ],
      },
      {
        id: "emision-masiva",
        title: "Emisión masiva desde Excel",
        paragraphs: [
          "El flujo real de un OTEC parte por una planilla: RUT, nombre, correo y calificación del curso. Si el sistema obliga a cargar participante por participante, el ahorro de tiempo desaparece.",
          "MiCert importa la lista completa y prepara un certificado por alumno en segundos. El diseño se define una vez y se reutiliza en cada curso, sin volver a maquetar en Canva o Word.",
        ],
      },
      {
        id: "verificacion-qr",
        title: "Verificación pública con QR",
        paragraphs: [
          "Cada certificado debe llevar un código único que cualquiera pueda validar sin crear cuenta. Al escanear el QR o ingresar el código corto, se abre una página con el estado actual: vigente, por vencer, vencido o anulado.",
          "El emisor visible es el OTEC, no la plataforma. Eso refuerza la marca de la organización frente a alumnos y empresas mandantes.",
        ],
      },
      {
        id: "trazabilidad",
        title: "Trazabilidad para auditorías",
        paragraphs: [
          "En una auditoría de SENCE no basta con mostrar archivos sueltos. Se necesita saber qué se emitió, a quién, cuándo y con qué vigencia. Si hubo anulaciones, deben quedar registradas de forma definitiva.",
          "Un buen software conserva el historial completo: cursos archivados, certificados revocados y reglas de vigencia congeladas al momento de la emisión.",
        ],
      },
      {
        id: "que-pedir",
        title: "Qué pedir en una demo",
        paragraphs: [
          "Antes de contratar, pide ver el flujo completo con un curso real: importación desde Excel, revisión previa, emisión masiva y verificación pública del QR.",
          "Revisa también los planes según el volumen mensual de certificados de tu OTEC. Puedes comparar opciones en nuestra página de precios o volver al hub de recursos para seguir leyendo.",
        ],
      },
    ],
  },
  {
    slug: "certificados-qr-otec",
    tipo: "Producto",
    temas: ["QR", "NCh 2728"],
    title: "Certificados con QR para los OTEC: validación sin fricción",
    excerpt:
      "Cómo un código QR único convierte el certificado en un documento verificable en línea, alineado con buenas prácticas de autenticidad.",
    author: "Equipo MiCert",
    date: "18 de junio de 2026",
    dateISO: "2026-06-18",
    metaTitle: "Certificados con QR para los OTEC | MiCert",
    metaDescription:
      "Por qué los OTEC usan certificados con QR verificable: validación pública, estado en tiempo real y respaldo ante auditorías.",
    sections: [
      {
        id: "que-resuelve",
        title: "Qué resuelve un certificado con QR",
        paragraphs: [
          "Un certificado impreso o en PDF puede copiarse y editarse. Un QR enlazado a una página de verificación demuestra que el documento corresponde a un registro real emitido por el OTEC.",
          "Quien recibe el certificado escanea el código desde el celular y ve de inmediato si sigue vigente, sin llamar a secretaría ni pedir confirmación por correo.",
        ],
      },
      {
        id: "pagina-verificacion",
        title: "La página de verificación",
        paragraphs: [
          "MiCert genera una URL pública por certificado con un código corto legible. La página muestra participante, curso, horas, fecha de emisión y validez. Si el certificado fue anulado, el estado cambia al instante.",
          "También incluye un acceso directo para agregar el logro a LinkedIn, lo que facilita que el alumno comparta una credencial respaldada.",
        ],
      },
      {
        id: "nch-2728",
        title: "Relación con la NCh 2728",
        paragraphs: [
          "La norma chilena NCh 2728 define requisitos para documentos con código bidimensional. Aunque cada OTEC debe asegurar el cumplimiento de su propio proceso, un QR único por certificado es la base técnica para validación externa.",
          "La clave no es solo imprimir un cuadrado: es que el código apunte a un registro confiable controlado por quien emitió el documento.",
        ],
      },
      {
        id: "implementacion",
        title: "Cómo implementarlo en tu OTEC",
        paragraphs: [
          "El QR se incorpora en el diseño del certificado una sola vez. Desde ahí, cada emisión genera su propio código sin intervención manual.",
          "Si quieres ver el flujo en acción, agenda una demo. También puedes revisar los planes disponibles según el volumen de certificados que emite tu organización.",
        ],
      },
    ],
  },
  {
    slug: "alternativa-excel-canva",
    tipo: "Comparativa",
    temas: ["Excel"],
    title: "MiCert frente a Excel + Canva: cuándo conviene cada enfoque",
    excerpt:
      "Muchos OTEC parten con planillas y diseños manuales. Comparamos ese flujo con una plataforma de emisión y verificación dedicada.",
    author: "Equipo MiCert",
    date: "15 de junio de 2026",
    dateISO: "2026-06-15",
    metaTitle: "Alternativa a Excel y Canva para certificados OTEC | MiCert",
    metaDescription:
      "Comparativa entre emitir certificados con Excel y Canva versus una plataforma con emisión masiva, QR y trazabilidad para los OTEC.",
    sections: [
      {
        id: "flujo-manual",
        title: "El flujo manual que conoces",
        paragraphs: [
          "El esquema clásico: exportar alumnos desde Excel, abrir una plantilla en Canva o Word, reemplazar nombre por nombre, exportar PDF y enviar por correo. Funciona para cursos pequeños, pero no escala.",
          "Cada error de tipeo obliga a rehacer archivos. No hay un registro central ni forma simple de demostrar qué versión es la válida si alguien edita el PDF.",
        ],
      },
      {
        id: "donde-falla",
        title: "Dónde falla en auditoría",
        paragraphs: [
          "Ante SENCE o un cliente corporativo, un ZIP de PDFs no prueba integridad. Tampoco puedes anular un certificado erróneo sin generar confusión sobre cuál archivo hizo circular el alumno.",
          "La verificación depende de que alguien en el OTEC confirme manualmente, lo que consume tiempo y deja espacio a errores.",
        ],
      },
      {
        id: "flujo-micert",
        title: "El flujo con MiCert",
        paragraphs: [
          "Sigues usando Excel como punto de partida, pero la planilla alimenta la emisión masiva. El diseño vive en la plataforma y cada certificado sale con QR y código único.",
          "Si hay un error, anulas el documento incorrecto —de forma definitiva y trazable— y emites el corregido. La página de verificación deja de mostrar el anulado como válido.",
        ],
      },
      {
        id: "cuando-migrar",
        title: "Cuándo tiene sentido migrar",
        paragraphs: [
          "Si emites más de un curso al mes, si tienes varios diseños o si ya viviste un susto en auditoría, el costo de seguir manual supera el de una herramienta dedicada.",
          "Puedes probar con una demo de 5 certificados sin tarjeta de crédito. Revisa también los planes según tu volumen o explora más artículos en el hub de recursos.",
        ],
      },
    ],
  },
  {
    slug: "auditoria-sence",
    tipo: "Normativa",
    temas: ["SENCE"],
    title: "Auditoría SENCE: qué documentación exige un OTEC",
    excerpt:
      "Qué suelen revisar los auditores, cómo preparar la trazabilidad de certificados y qué papel juega la emisión digital.",
    author: "Equipo MiCert",
    date: "12 de junio de 2026",
    dateISO: "2026-06-12",
    metaTitle: "Auditoría SENCE para los OTEC: guía de trazabilidad | MiCert",
    metaDescription:
      "Cómo preparar la documentación de certificados para una auditoría SENCE: registro de emisiones, vigencia, anulaciones y verificación.",
    sections: [
      {
        id: "que-revisan",
        title: "Qué revisan en una auditoría",
        paragraphs: [
          "Los auditores buscan coherencia entre lo declarado en el curso y lo entregado al participante: quiénes asistieron, qué certificados se emitieron, con qué fecha y bajo qué reglas de vigencia.",
          "No alcanza con mostrar carpetas desordenadas. Se espera un registro ordenado que permita rastrear cada certificado hasta su origen.",
        ],
      },
      {
        id: "riesgos-comunes",
        title: "Riesgos con certificados editables",
        paragraphs: [
          "PDFs sin respaldo central son difíciles de defender. Si dos versiones circulan del mismo alumno, el OTEC no puede demostrar cuál es la oficial sin un sistema de registro.",
          "La anulación informal —borrar un archivo o reenviar otro— no deja huella auditable. Eso es un punto débil frecuente en revisiones.",
        ],
      },
      {
        id: "trazabilidad-digital",
        title: "Trazabilidad con emisión digital",
        paragraphs: [
          "Una plataforma de certificados mantiene el historial de emisiones, cambios de estado y anulaciones. La vigencia queda fijada al momento de emitir, y cada documento tiene un identificador verificable.",
          "MiCert está pensado para que los OTEC puedan responder preguntas concretas: qué se emitió, a quién, cuándo y si sigue vigente o fue revocado.",
        ],
      },
      {
        id: "como-prepararse",
        title: "Cómo prepararse antes de la visita",
        paragraphs: [
          "Centraliza la emisión en un solo sistema, define reglas de vigencia por curso y evita certificados fuera de la plataforma. Practica mostrar la verificación por QR como prueba de autenticidad.",
          "Si quieres validar el flujo con tu equipo, agenda una demo. Los planes por volumen están en la página de precios; más guías en el hub de recursos.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): ResourceArticle | undefined {
  return RESOURCE_ARTICLES.find((a) => a.slug === slug);
}

export function getRelatedArticles(
  slug: string,
  limit = 2
): ResourceArticle[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];

  return RESOURCE_ARTICLES.filter((a) => a.slug !== slug)
    .sort((a, b) => {
      const score = (article: ResourceArticle) => {
        let s = 0;
        if (article.tipo === current.tipo) s += 2;
        if (article.temas.some((t) => current.temas.includes(t))) s += 1;
        return s;
      };
      return score(b) - score(a);
    })
    .slice(0, limit);
}

export function getFeaturedArticle(): ResourceArticle | undefined {
  return RESOURCE_ARTICLES.find((a) => a.featured);
}
