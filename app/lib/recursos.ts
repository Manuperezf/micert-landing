export type ResourceTipo = "Producto" | "Comparativa" | "Normativa" | "Caso";
export type ResourceTema = "QR" | "SENCE" | "NCh 2728" | "Excel";

export type ArticleTable = {
  headers: string[];
  rows: string[][];
};

export type ArticleSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  table?: ArticleTable;
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
  relatedSlugs?: string[];
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

export const RECURSOS_HUB_METADATA = {
  title: "Recursos de certificación digital para OTEC | MiCert",
  description:
    "Guías, comparativas y normativa para emitir certificados verificables con QR y dejar atrás el PDF editable en tu OTEC.",
};

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    slug: "software-para-otec",
    tipo: "Producto",
    temas: ["Excel", "SENCE"],
    title: "Software para OTEC que emite certificados con QR verificable",
    excerpt:
      "Carga tu Excel, diseña el certificado una vez y emite documentos con un código QR único que cualquiera puede validar. Pensado para los OTEC que todavía dependen del PDF editable.",
    author: "Equipo MiCert",
    date: "20 de junio de 2026",
    dateISO: "2026-06-20",
    featured: true,
    relatedSlugs: ["certificados-qr-otec", "alternativa-excel-canva"],
    metaTitle: "Software para OTEC: certificados con QR | MiCert",
    metaDescription:
      "Plataforma chilena para que los OTEC emitan certificados digitales con QR verificable desde Excel, sin conocimientos técnicos. Agenda una demo.",
    sections: [
      {
        id: "el-problema",
        title: "El problema",
        paragraphs: [
          "El certificado en PDF editable es un riesgo. Se modifica en dos clics, no tiene cómo comprobarse y, cuando llega una auditoría, no existe forma rápida de demostrar qué se emitió, a quién y cuándo. La emisión manual además consume horas administrativas por cada curso.",
        ],
      },
      {
        id: "como-funciona",
        title: "Cómo funciona",
        paragraphs: [
          "MiCert reemplaza ese flujo por uno trazable y verificable. Importas desde Excel: subes la planilla con RUT, nombre, email y calificación, y se genera un certificado por participante. Diseñas una vez: el editor te deja configurar los campos del certificado —nombre, RUT, curso, código, QR y firmas— y se aplica a todo el curso. Cada certificado lleva un QR único que apunta a una página de verificación pública. El alumno descarga su PDF y puede sumarlo a su perfil de LinkedIn, con tu OTEC como emisor.",
        ],
      },
      {
        id: "por-que-importa",
        title: "Por qué importa para un OTEC",
        paragraphs: [
          "Menos tiempo administrativo por curso. Un certificado que no se puede falsificar sin que se note. Trazabilidad para auditoría: los certificados se revocan, nunca se borran, así queda historial. Y todo sin instalar nada ni saber de tecnología, porque funciona en el navegador.",
        ],
      },
      {
        id: "que-no-es-micert",
        title: "Qué no es MiCert",
        paragraphs: [
          "MiCert no es un LMS y no gestiona el contenido de tus cursos. Hace una cosa y la hace bien: emitir, diseñar y validar certificados.",
        ],
      },
    ],
  },
  {
    slug: "certificados-qr-otec",
    tipo: "Producto",
    temas: ["QR", "NCh 2728"],
    title: "Certificados digitales con QR que cualquiera puede verificar",
    excerpt:
      "Cada certificado que emites con MiCert lleva un código único y un QR que apunta a una página de verificación pública. El alumno, su empleador o un auditor confirman la autenticidad en segundos.",
    author: "Equipo MiCert",
    date: "18 de junio de 2026",
    dateISO: "2026-06-18",
    relatedSlugs: ["software-para-otec", "auditoria-sence"],
    metaTitle: "Certificados digitales con QR para OTEC | MiCert",
    metaDescription:
      "Emite certificados con código único y verificación pública por QR. Importa desde Excel, diseña una vez y entrega un PDF validable.",
    sections: [
      {
        id: "como-funciona",
        title: "Cómo funciona",
        paragraphs: [
          "Tres pasos. Cargas tu Excel con RUT, nombre, email y calificación, un certificado por fila. Diseñas el certificado en el editor, configurando los campos: nombre, RUT, curso, código, QR y firmas. Emites y entregas: se genera el PDF de cada participante con su QR único, listo para descargar.",
        ],
      },
      {
        id: "que-hace-unico",
        title: "Qué hace único a cada certificado",
        paragraphs: [
          "Un código único asociado al certificado, imposible de duplicar sin que el sistema lo detecte. Un QR de verificación pública que lleva a una página donde se confirma quién lo emitió y a quién. Y el botón \"Agregar a LinkedIn\", con el que el alumno suma el certificado a su perfil figurando tu OTEC como emisor.",
        ],
      },
      {
        id: "el-contraste",
        title: "El contraste",
        paragraphs: [
          "Un PDF editable se modifica en dos clics y no tiene cómo comprobarse. Un certificado de MiCert tiene una fuente de verdad: la página de verificación. Si alguien altera el PDF, la verificación lo delata.",
        ],
      },
    ],
  },
  {
    slug: "alternativa-excel-canva",
    tipo: "Comparativa",
    temas: ["Excel"],
    title:
      "Excel, Word y Canva hacen el certificado bonito. No lo hacen verificable.",
    excerpt:
      "Si hoy armas tus certificados a mano, ya tienes la materia prima: tu planilla de Excel. MiCert la toma y la convierte en certificados con QR que se pueden validar.",
    author: "Equipo MiCert",
    date: "15 de junio de 2026",
    dateISO: "2026-06-15",
    relatedSlugs: ["software-para-otec", "certificados-qr-otec"],
    metaTitle: "¿Certificados en Excel, Word o Canva? | MiCert",
    metaDescription:
      "Excel, Word y Canva no verifican ni dejan rastro. MiCert emite certificados con QR validable desde tu misma planilla. Compara y agenda una demo.",
    sections: [
      {
        id: "la-comparacion",
        title: "La comparación",
        table: {
          headers: ["", "Excel / Word / Canva", "MiCert"],
          rows: [
            ["Diseño del certificado", "Sí", "Sí, con editor de campos"],
            ["Desde tu Excel", "Lo escribes a mano", "Importación masiva"],
            ["Código único por certificado", "No", "Sí"],
            ["QR de verificación", "No", "Sí"],
            ["Página pública de validación", "No", "Sí"],
            [
              "Trazabilidad para auditoría",
              "No",
              "Sí (revocación con historial)",
            ],
            ["Se puede editar sin dejar rastro", "Sí", "No"],
          ],
        },
      },
      {
        id: "por-que-cuesta-caro",
        title: "Por qué el método manual te cuesta caro",
        paragraphs: [
          "No es solo el tiempo de armar cada certificado uno por uno. Es que cuando un empleador o un auditor te pide comprobar que un certificado es real, no tienes cómo. Con MiCert, la prueba es el QR.",
        ],
      },
      {
        id: "lo-honesto",
        title: "Lo honesto",
        paragraphs: [
          "Si lo único que necesitas es un diploma decorativo para imprimir, Canva te sobra. MiCert es para los OTEC que necesitan que sus certificados se puedan comprobar.",
        ],
      },
    ],
  },
  {
    slug: "auditoria-sence",
    tipo: "Normativa",
    temas: ["SENCE"],
    title: "Cuando llega la auditoría SENCE, el PDF editable no te respalda",
    excerpt:
      "Un PDF que cualquiera puede modificar no es evidencia. Así te da MiCert la trazabilidad para demostrar qué emitiste, a quién y cuándo.",
    author: "Equipo MiCert",
    date: "12 de junio de 2026",
    dateISO: "2026-06-12",
    relatedSlugs: ["alternativa-excel-canva", "certificados-qr-otec"],
    metaTitle: "Certificados verificables para auditoría SENCE | MiCert",
    metaDescription:
      "Demuestra qué emitiste, a quién y cuándo. MiCert da trazabilidad y QR verificable a los certificados de tu OTEC. Agenda una demo.",
    sections: [
      {
        id: "el-problema",
        title: "El problema",
        paragraphs: [
          "El certificado en PDF editable se modifica en dos clics y no tiene cómo comprobarse. Cuando llega una auditoría, no existe forma rápida de demostrar qué se emitió, a quién y bajo qué curso. Eso vuelve la auditoría un problema de papeleo y de credibilidad.",
        ],
      },
      {
        id: "que-cambia",
        title: "Qué cambia con MiCert",
        paragraphs: [
          "Cada certificado queda registrado con un código único y un QR de verificación pública. La autenticidad no depende de tu palabra: cualquiera la confirma escaneando. Y el historial es inmutable, porque los certificados se revocan, no se borran.",
        ],
      },
      {
        id: "que-demuestras",
        title: "Qué demuestras",
        paragraphs: [
          "En un solo lugar ves todo lo que emitiste, en vez de buscar archivos sueltos por correo y carpetas. Esa es la diferencia entre reconstruir evidencia a mano y mostrar una fuente de verdad.",
        ],
      },
      {
        id: "por-que-aplica",
        title: "Por qué aplica a tu OTEC",
        paragraphs: [
          "MiCert no te certifica ante SENCE ni es un sello oficial; es la herramienta que te deja demostrar lo que hiciste cuando te lo piden. Eso vale para cualquier OTEC que emita certificados.",
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

  if (current.relatedSlugs?.length) {
    return current.relatedSlugs
      .map((s) => getArticleBySlug(s))
      .filter((a): a is ResourceArticle => !!a)
      .slice(0, limit);
  }

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
