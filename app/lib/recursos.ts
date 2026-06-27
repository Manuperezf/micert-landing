export type ResourceTipo = "Producto" | "Comparativa" | "Normativa" | "Caso";
export type ResourceTema = "QR" | "SENCE" | "NCh 2728" | "Excel";

export type ArticleTable = {
  headers: string[];
  rows: string[][];
};

export type ArticleFaqItem = {
  question: string;
  answer: string;
};

export type ArticleSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  table?: ArticleTable;
  faq?: ArticleFaqItem[];
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
    title:
      "Software para OTEC: la guía para emitir certificados verificables y dejar atrás el PDF editable",
    excerpt:
      "Si tu OTEC todavía arma los certificados a mano y los entrega en PDF, esta guía es para ti. Repasamos qué problemas trae ese método, qué debería tener un buen software de certificados y cómo se ve el flujo completo de emisión con código QR verificable.",
    author: "Equipo MiCert",
    date: "20 de junio de 2026",
    dateISO: "2026-06-20",
    featured: true,
    relatedSlugs: ["certificados-qr-otec", "alternativa-excel-canva"],
    metaTitle: "Software para OTEC: cómo elegir y emitir con QR | MiCert",
    metaDescription:
      "Guía para elegir un software de certificados para tu OTEC: qué problemas resuelve, qué debe tener y cómo emitir documentos con QR verificable desde Excel.",
    sections: [
      {
        id: "por-que-el-pdf-editable-se-volvio-un-problema",
        title: "Por qué el PDF editable se volvió un problema",
        paragraphs: [
          "Durante años, el flujo de la mayoría de los OTEC fue el mismo: armar el certificado en Word, Canva o una plantilla de PDF, escribir los datos de cada alumno a mano y enviarlo por correo. Funciona hasta que deja de funcionar, y deja de funcionar por tres razones.",
          "La primera es que un PDF se edita en dos clics. Cualquiera con una herramienta gratuita puede cambiar un nombre, una nota o una fecha, y el documento sigue viéndose legítimo. Para el alumno honesto no es un problema; para tu OTEC sí, porque no tienes cómo demostrar cuál es el certificado real que tú emitiste.",
          "La segunda es el tiempo. Emitir treinta certificados a mano —copiar nombre, RUT, curso y fecha uno por uno— consume horas administrativas por cada curso. Ese tiempo es trabajo que no se factura y que se repite en cada generación.",
          "La tercera, y la que más pesa cuando aprieta, es la trazabilidad. Cuando llega una auditoría o una empresa te pide comprobar que un certificado es auténtico, un PDF suelto en una carpeta no es evidencia. No hay forma rápida de demostrar qué se emitió, a quién, bajo qué curso y en qué fecha.",
        ],
      },
      {
        id: "que-hace-un-software-de-certificados",
        title: "Qué hace un software de certificados (y qué no)",
        paragraphs: [
          "Conviene aclararlo de entrada para no confundir categorías. Un software de certificados para OTEC se encarga de emitir, diseñar y validar los certificados de tus cursos. No es un LMS: no dicta clases, no gestiona contenidos pedagógicos ni evalúa alumnos dentro de la plataforma. Son herramientas distintas que resuelven problemas distintos.",
          "Si lo que necesitas es ordenar y dar respaldo a los documentos que entregas al final de cada curso, un software de certificados es lo que buscas. Si necesitas además una plataforma para impartir los cursos en línea, eso es un LMS y es otra conversación.",
        ],
      },
      {
        id: "que-deberia-tener-un-buen-software",
        title: "Qué debería tener un buen software de certificados para OTEC",
        paragraphs: [
          "No todos resuelven lo mismo. Estos son los criterios que de verdad importan al evaluar uno.",
          "Que parta desde tu Excel. Ya tienes la lista de participantes en una planilla. Un buen software la importa directo —RUT, nombre, email, calificación— y genera un certificado por persona, en vez de obligarte a reescribir todo a mano.",
          "Que cada certificado sea verificable. Esta es la diferencia de fondo con el PDF. Cada documento debería llevar un código único y un QR que apunte a una página de verificación pública, donde cualquiera —el alumno, su empleador, un auditor— confirme la autenticidad en segundos, sin depender de tu palabra.",
          "Que el diseño sea configurable, pero una sola vez. Debe permitirte definir cómo se ve el certificado —nombre, RUT, curso, código, QR, firmas— y aplicar ese diseño a todo el curso, no rehacerlo en cada emisión.",
          "Que deje rastro. Para auditoría, lo importante no es solo emitir, sino poder demostrar después. Un buen sistema no borra: archiva. Si un certificado se anula, se revoca y queda historial, en vez de desaparecer.",
          "Que no exija conocimientos técnicos. Quien emite certificados en un OTEC suele ser un coordinador o administrativo, no un programador. La herramienta debe funcionar en el navegador, sin instalar nada.",
        ],
      },
      {
        id: "como-se-ve-el-flujo-con-micert",
        title: "Cómo se ve el flujo con MiCert",
        paragraphs: [
          "MiCert es una plataforma chilena construida sobre estos criterios. El flujo completo son tres pasos.",
          "Primero, importas desde Excel: subes tu planilla con RUT, nombre, email y calificación, y se genera un certificado por participante. No reescribes nada.",
          "Segundo, diseñas una vez. El editor te deja configurar los campos del certificado —nombre, RUT, curso, código, QR y firmas— y ese diseño se aplica a todo el curso.",
          "Tercero, emites y entregas. Cada certificado se genera con su código único y su QR, listo para descargar en PDF. El alumno puede sumarlo a su perfil de LinkedIn, con tu OTEC como emisor.",
          "Lo que cambia respecto al PDF editable es que cada certificado tiene ahora una fuente de verdad: la página de verificación pública a la que apunta el QR. Si alguien altera el documento descargado, la verificación lo delata. Y como los certificados se revocan en lugar de borrarse, queda el historial que una auditoría necesita.",
        ],
      },
      {
        id: "cuando-conviene-dar-el-paso",
        title: "Cuándo conviene dar el paso",
        paragraphs: [
          "No todos los OTEC lo necesitan al mismo tiempo. Tiene más sentido cuando emites volumen de certificados de forma regular, cuando trabajas en sectores donde el certificado falso es un problema caro —construcción, minería, seguridad privada, salud— o cuando ya te ha pasado que no pudiste comprobar rápido la autenticidad de algo que emitiste. Si te identificas con alguno de esos casos, el PDF editable ya te está costando más de lo que parece.",
        ],
      },
      {
        id: "preguntas-frecuentes",
        title: "Preguntas frecuentes",
        faq: [
          {
            question:
              "¿Un software de certificados reemplaza a SENCE o emite certificados oficiales SENCE?",
            answer:
              "No. MiCert no es un sello oficial ni reemplaza tus obligaciones ante SENCE. Es la herramienta que te permite emitir tus propios certificados de forma verificable y demostrar su trazabilidad cuando te lo pidan.",
          },
          {
            question: "¿Necesito saber de tecnología para usarlo?",
            answer:
              "No. Funciona en el navegador, sin instalar nada. Cargas tu Excel y diseñas el certificado desde la misma plataforma.",
          },
          {
            question: "¿Qué pasa cuando alguien escanea el QR de un certificado?",
            answer:
              "Llega a una página de verificación pública que confirma que el certificado es auténtico y fue emitido por tu OTEC.",
          },
          {
            question: "¿Puedo seguir usando mi planilla de Excel?",
            answer:
              "Sí. Excel sigue siendo tu punto de partida: MiCert importa la planilla con los datos de los participantes y genera un certificado por cada uno.",
          },
          {
            question: "¿Qué pasa si emito un certificado por error?",
            answer:
              "Se revoca. Queda registrado en el historial y no se elimina, lo que mantiene la trazabilidad para auditoría.",
          },
          {
            question: "¿Es lo mismo que un LMS?",
            answer:
              "No. Un LMS sirve para dictar y gestionar cursos en línea. MiCert se enfoca solo en emitir, diseñar y validar los certificados de esos cursos.",
          },
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
