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
    title:
      "Certificados con QR verificable: cómo funcionan y por qué tu OTEC los necesita",
    excerpt:
      "Un código QR en un certificado no es un adorno: es lo que lo vuelve comprobable. Te explicamos cómo funciona la verificación, qué confirma realmente quien escanea el código y por qué esto cambia la forma en que tu OTEC respalda lo que emite.",
    author: "Equipo MiCert",
    date: "18 de junio de 2026",
    dateISO: "2026-06-18",
    relatedSlugs: ["software-para-otec", "auditoria-sence"],
    metaTitle:
      "Certificados con QR para OTEC: cómo funciona la verificación | MiCert",
    metaDescription:
      "Cómo funciona un certificado digital con QR verificable, por qué evita la falsificación y qué confirma quien lo escanea. Guía para OTEC en Chile.",
    sections: [
      {
        id: "que-es-un-certificado-con-qr-verificable",
        title: "Qué es un certificado con QR verificable",
        paragraphs: [
          "Un certificado verificable es un documento que cualquiera puede comprobar como auténtico sin tener que llamarte ni confiar en tu palabra. El código QR es la puerta de entrada a esa comprobación: al escanearlo, lleva a una página de verificación pública donde se confirma que el certificado existe, que lo emitió tu OTEC y a quién corresponde.",
          "La diferencia con un PDF normal es de fondo. Un PDF es una imagen del certificado; el QR verificable es un enlace a la fuente de verdad. El documento que el alumno descarga y la página de verificación son dos cosas conectadas: el papel puede circular, pero la verdad sobre su validez vive en un solo lugar que tú controlas.",
        ],
      },
      {
        id: "como-funciona-la-verificacion",
        title: "Cómo funciona la verificación, paso a paso",
        paragraphs: [
          "El mecanismo es más simple de lo que parece, y esa simpleza es justamente lo que lo hace confiable.",
          "Cuando tu OTEC emite un certificado, el sistema le asigna un código único, imposible de duplicar sin que se detecte. Ese código queda asociado a los datos del certificado —quién, qué curso, qué fecha— y se incrusta en el QR.",
          "Cuando alguien escanea el QR, su teléfono abre la página de verificación pública. Esa página consulta el código y muestra el resultado: si el certificado es auténtico, aparece confirmado, con el OTEC emisor. Si el código no corresponde a nada emitido, no hay nada que mostrar, y eso por sí solo delata un documento falso.",
          "No hace falta una app especial ni que el alumno se registre en nada. Cualquier cámara de celular abre el QR, y cualquier persona —el alumno, su empleador, un auditor— puede hacer la comprobación.",
        ],
      },
      {
        id: "por-que-evita-la-falsificacion",
        title: "Por qué esto evita la falsificación",
        paragraphs: [
          "Un PDF editable se altera en dos clics: se cambia un nombre, una nota, una fecha, y el documento sigue viéndose legítimo. El problema no es solo que se pueda falsificar, sino que no hay forma rápida de demostrar cuál es el real.",
          "Con un certificado verificable, alterar el PDF descargado no sirve de nada. Si alguien modifica el documento, la página de verificación sigue mostrando los datos originales que tu OTEC emitió —o directamente no encuentra coincidencia—. El intento de falsificación queda en evidencia al primer escaneo. La autenticidad deja de depender de cómo se ve el papel y pasa a depender de lo que dice la fuente que tú controlas.",
        ],
      },
      {
        id: "que-gana-tu-otec",
        title: "Qué gana tu OTEC, más allá de la seguridad",
        paragraphs: [
          "La verificación con QR resuelve el problema de la falsificación, pero abre otras ventajas concretas.",
          "Para el alumno, el certificado se vuelve algo que puede mostrar con respaldo. Con MiCert, además, puede sumarlo a su perfil de LinkedIn, con tu OTEC como emisor: tu marca viaja con cada certificado que tus alumnos comparten.",
          "Para tu OTEC, cada emisión queda registrada. Cuando una empresa o un auditor te pide comprobar algo, no buscas en carpetas ni en correos: hay una fuente única. Y como los certificados se revocan en lugar de borrarse, existe historial de lo que se emitió y de lo que se anuló, que es exactamente lo que una auditoría necesita ver.",
        ],
      },
      {
        id: "como-se-emite-con-micert",
        title: "Cómo se emite con MiCert",
        paragraphs: [
          "En la práctica, generar certificados con QR no agrega trabajo: lo quita. Cargas tu planilla de Excel con los participantes, diseñas el certificado una vez configurando sus campos —nombre, RUT, curso, código, QR y firmas— y emites. Cada participante recibe su certificado con su QR único, listo para descargar en PDF. El código y la página de verificación se generan solos, en el mismo paso.",
        ],
      },
      {
        id: "preguntas-frecuentes",
        title: "Preguntas frecuentes",
        faq: [
          {
            question: "¿Qué pasa exactamente cuando alguien escanea el QR?",
            answer:
              "Su teléfono abre una página de verificación pública que confirma si el certificado es auténtico y qué OTEC lo emitió. No necesita instalar ninguna app.",
          },
          {
            question: "¿Se necesita una aplicación especial para verificar?",
            answer:
              "No. Cualquier cámara de celular lee el QR y abre la página de verificación en el navegador.",
          },
          {
            question: "¿Qué pasa si alguien edita el PDF del certificado?",
            answer:
              "La verificación seguirá mostrando los datos originales que emitió el OTEC, o no encontrará coincidencia. La alteración queda en evidencia al escanear.",
          },
          {
            question: "¿El alumno puede usar el certificado en LinkedIn?",
            answer:
              "Sí. Con MiCert puede agregarlo a su perfil, figurando tu OTEC como emisor.",
          },
          {
            question: "¿Qué pasa si un certificado se anula?",
            answer:
              "Se revoca y queda registrado en el historial; no se elimina. La verificación refleja su estado.",
          },
          {
            question: "¿Esto reemplaza algún registro oficial de SENCE?",
            answer:
              "No. La verificación con QR respalda la autenticidad de los certificados que tu OTEC emite; no es un sello oficial ni reemplaza tus obligaciones ante SENCE.",
          },
        ],
      },
    ],
  },
  {
    slug: "alternativa-excel-canva",
    tipo: "Comparativa",
    temas: ["Excel"],
    title:
      "Excel, Word y Canva vs software de certificados: la comparación honesta para tu OTEC",
    excerpt:
      "Si hoy armas tus certificados en Excel, Word o Canva, no lo estás haciendo mal: estás usando lo que tienes a mano. La pregunta es hasta cuándo te alcanza. Comparamos los dos caminos sin exagerar, para que decidas con criterio.",
    author: "Equipo MiCert",
    date: "15 de junio de 2026",
    dateISO: "2026-06-15",
    relatedSlugs: ["software-para-otec", "certificados-qr-otec"],
    metaTitle: "Excel y Canva vs software de certificados OTEC | MiCert",
    metaDescription:
      "Comparativa honesta entre hacer certificados en Excel, Word o Canva y un software con QR verificable. Qué pierdes con el método manual y cuándo conviene cambiar.",
    sections: [
      {
        id: "para-que-sirven-bien",
        title: "Para qué sirven bien Excel, Word y Canva",
        paragraphs: [
          "Empecemos por lo justo. Estas herramientas son buenas en lo suyo. Canva diseña certificados que se ven profesionales. Word y Excel los tienes instalados, los sabes usar y no cuestan nada extra. Para un OTEC que emite pocos certificados al año y al que nadie le ha pedido nunca comprobar la autenticidad de uno, el método manual puede ser suficiente.",
          "No hace falta complicar lo que funciona. Si ese es tu caso, esta comparación quizá no es para ti todavía. El punto de quiebre llega cuando el volumen sube o cuando alguien, por primera vez, te pide demostrar que un certificado es real.",
        ],
      },
      {
        id: "donde-el-metodo-manual-cuesta-caro",
        title: "Dónde el método manual empieza a costar caro",
        paragraphs: [
          "El primer costo es el tiempo, y es el más fácil de subestimar. Armar treinta certificados a mano significa copiar nombre, RUT, curso y fecha treinta veces, revisar que no haya errores y enviarlos uno por uno. Ese trabajo se repite íntegro en cada curso. No se ve en una factura, pero son horas administrativas que se van.",
          "El segundo costo es invisible hasta que aparece: no puedes comprobar nada. Un certificado hecho en Canva o Word es una imagen. Cuando una empresa contratante o un auditor te pregunta si un certificado que circula por ahí es auténtico, no tienes cómo responder con certeza ni rapidez. Y como esos archivos se editan en dos clics, tampoco puedes demostrar cuál es el original que tú emitiste.",
          "El tercer costo es el riesgo reputacional. Si un certificado tuyo es falsificado —cambiándole el nombre o la nota a uno legítimo— el problema no es solo del impostor: es de tu OTEC, porque tu nombre queda asociado a un documento que no controlas.",
        ],
      },
      {
        id: "verificable-vs-editable",
        title: "La diferencia de fondo: verificable vs editable",
        paragraphs: [
          "Acá está el punto que lo cambia todo. Un documento hecho en Excel, Word o Canva es editable y no deja rastro: quien lo modifica no deja huella, y no hay una fuente contra la cual contrastar.",
          "Un certificado emitido con un software como MiCert es verificable. Lleva un código único y un QR que apunta a una página de verificación pública. El documento que circula es solo la cara visible; la verdad sobre su validez vive en un lugar que tú controlas. Si alguien altera el PDF, la verificación lo delata. Esa es la línea que separa \"un certificado bonito\" de \"un certificado comprobable\".",
        ],
      },
      {
        id: "comparacion-lado-a-lado",
        title: "Comparación lado a lado",
        table: {
          headers: ["", "Excel / Word / Canva", "MiCert"],
          rows: [
            ["Diseño del certificado", "Sí", "Sí, con editor de campos"],
            ["Parte desde tu Excel", "Lo escribes a mano", "Importación masiva"],
            ["Código único por certificado", "No", "Sí"],
            ["QR de verificación", "No", "Sí"],
            ["Página pública de validación", "No", "Sí"],
            [
              "Trazabilidad para auditoría",
              "No",
              "Sí (revocación con historial)",
            ],
            ["Agregar a LinkedIn", "No", "Sí, con tu OTEC como emisor"],
            ["Se puede editar sin dejar rastro", "Sí", "No"],
          ],
        },
      },
      {
        id: "no-tienes-que-abandonar-excel",
        title: "No tienes que abandonar Excel",
        paragraphs: [
          "Una aclaración importante, porque suele ser la duda número uno. Cambiar a un software no significa dejar tu planilla. Al revés: tu Excel es el punto de partida. MiCert importa esa misma planilla —RUT, nombre, email, calificación— y genera un certificado por participante. El trabajo que ya hiciste en Excel no se pierde; se aprovecha. Lo único que cambia es que el resultado, en vez de un PDF editable, es un certificado con QR que se puede comprobar.",
        ],
      },
      {
        id: "cuando-conviene-dar-el-paso",
        title: "Cuándo conviene dar el paso",
        paragraphs: [
          "La señal más clara es haber pasado por alguna de estas situaciones: emites certificados con frecuencia y el armado manual ya te quita horas; trabajas en sectores donde un certificado falso es caro —construcción, minería, seguridad privada, salud—; o ya te tocó no poder comprobar rápido si algo que emitiste era auténtico. Si te reconoces en alguna, el método manual ya te está costando más de lo que ahorra.",
        ],
      },
      {
        id: "preguntas-frecuentes",
        title: "Preguntas frecuentes",
        faq: [
          {
            question: "¿Tengo que dejar de usar Excel si cambio a un software?",
            answer:
              "No. Tu planilla de Excel sigue siendo el punto de partida: el software la importa y genera un certificado por participante.",
          },
          {
            question: "¿Qué tiene de malo hacer certificados en Canva o Word?",
            answer:
              "Nada, si solo necesitas un documento que se vea bien. El límite es que no son verificables: se editan sin dejar rastro y no puedes comprobar después cuál es el original que emitiste.",
          },
          {
            question: "¿Un certificado en PDF se puede falsificar?",
            answer:
              "Sí. Un PDF se edita en pocos clics. Por eso un certificado verificable con QR es más seguro: la autenticidad no depende del archivo, sino de una página de verificación que controla el OTEC.",
          },
          {
            question: "¿Cuánto tiempo ahorra dejar el método manual?",
            answer:
              "Depende del volumen, pero el ahorro está en no reescribir los datos de cada alumno ni enviar uno por uno: se importa la planilla y se emite en lote.",
          },
          {
            question: "¿Es complicado migrar desde Excel?",
            answer:
              "No. Si ya tienes la planilla de participantes, la mayor parte del trabajo está hecha; solo se importa.",
          },
          {
            question: "¿Esto reemplaza algún registro de SENCE?",
            answer:
              "No. Un software de certificados respalda y da trazabilidad a lo que tu OTEC emite; no es un sello oficial ni reemplaza obligaciones ante SENCE.",
          },
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
