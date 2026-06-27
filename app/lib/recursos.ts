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
    title:
      "Auditoría en tu OTEC: por qué el certificado en PDF editable no te respalda",
    excerpt:
      "El día que alguien te pide demostrar que un certificado es auténtico, un PDF suelto en una carpeta no alcanza. Esta es la diferencia entre tener documentos y tener evidencia, y por qué la trazabilidad es lo que de verdad protege a tu OTEC.",
    author: "Equipo MiCert",
    date: "12 de junio de 2026",
    dateISO: "2026-06-12",
    relatedSlugs: ["alternativa-excel-canva", "certificados-qr-otec"],
    metaTitle:
      "Auditoría SENCE: por qué el PDF editable no te respalda | MiCert",
    metaDescription:
      "Cuando llega una auditoría, un PDF editable no es evidencia. Qué significa respaldar un certificado y cómo la trazabilidad protege a tu OTEC.",
    sections: [
      {
        id: "el-momento-en-que-el-pdf-te-falla",
        title: "El momento en que el PDF te falla",
        paragraphs: [
          "Mientras todo va bien, el certificado en PDF parece suficiente. El problema aparece en un momento puntual: cuando una empresa contratante, un fiscalizador o una auditoría te piden comprobar que un certificado que circula por ahí fue realmente emitido por tu OTEC, a esa persona, por ese curso.",
          "Ahí el PDF muestra su límite. Es una imagen del certificado, no una prueba. No tiene cómo confirmarse contra una fuente, y como se edita en pocos clics, tampoco puedes demostrar cuál es el original. En ese momento, lo que parecía un trámite resuelto se vuelve un problema de papeleo y de credibilidad.",
        ],
      },
      {
        id: "que-significa-respaldar-un-certificado",
        title: 'Qué significa "respaldar" un certificado',
        paragraphs: [
          "Respaldar no es tener el archivo guardado. Es poder demostrar, rápido y sin ambigüedad, cuatro cosas: qué se emitió, a quién, bajo qué curso y en qué fecha. Y poder hacerlo de una forma que no dependa de tu palabra, sino de un registro que cualquiera pueda verificar.",
          "Un PDF en una carpeta no cumple ninguna de esas condiciones por sí solo. Puedes tener el archivo, pero si te piden comprobar su autenticidad ante un tercero, no tienes con qué. Respaldar es justamente lo que falta cuando solo tienes el documento.",
        ],
      },
      {
        id: "que-necesita-ver-una-auditoria",
        title: "Qué necesita ver una auditoría, en la práctica",
        paragraphs: [
          "Más allá de los detalles formales de cada proceso, lo que una revisión busca es consistencia y rastro. Que lo que dices haber emitido coincida con un registro. Que exista historial de lo que se generó y de lo que, en su momento, se anuló. Que no haya documentos sueltos imposibles de contrastar.",
          "El método manual falla precisamente acá: los certificados viven repartidos en correos, carpetas y planillas, sin una fuente única. Reconstruir esa evidencia a mano, bajo presión y contra el reloj, es trabajo que nadie quiere estar haciendo el día de una auditoría.",
        ],
      },
      {
        id: "la-trazabilidad",
        title: "La trazabilidad: nada se borra, todo se archiva",
        paragraphs: [
          "Acá está el principio que cambia la situación. Un sistema de certificados pensado para respaldar no elimina información: la archiva. Si un certificado se anula, no desaparece, se revoca y queda registrado como tal. El historial completo se mantiene.",
          "Esto importa porque una auditoría no solo mira lo vigente, sino también lo que cambió. Poder mostrar que un certificado fue emitido, y que otro fue revocado en tal fecha y por tal motivo, es exactamente el tipo de rastro que da confianza. Borrar es perder evidencia; archivar es conservarla.",
        ],
      },
      {
        id: "donde-encaja-la-normativa",
        title: "Dónde encaja la normativa",
        paragraphs: [
          "Los OTEC en Chile operan bajo la supervisión de SENCE y, en materia de calidad y documentación, existen normas de referencia como la NCh 2728. No vamos a entrar a interpretar sus detalles aquí, porque cada OTEC debe revisarlos con su propia asesoría. Lo que sí es transversal a cualquier exigencia es esto: en todas, tarde o temprano, hay que poder demostrar lo que se hizo.",
          "Por eso la trazabilidad no es un requisito de una norma puntual, sino la base que cualquier exigencia de respaldo termina pidiendo. Resolver bien la trazabilidad te deja en mejor pie frente a cualquiera de ellas.",
        ],
      },
      {
        id: "que-aporta-micert",
        title: "Qué aporta MiCert (y qué no)",
        paragraphs: [
          "MiCert le da a cada certificado que emite tu OTEC un código único y un QR de verificación pública: la autenticidad se comprueba escaneando, sin depender de tu palabra. Cada emisión queda registrada en un solo lugar, y los certificados se revocan en vez de borrarse, manteniendo el historial.",
          "Conviene ser claro sobre el alcance: MiCert no te certifica ante SENCE, no es un sello oficial y no reemplaza tus obligaciones ni el trabajo de tu asesoría. Es la herramienta que te permite demostrar, con trazabilidad y verificación, lo que tu OTEC efectivamente emitió, el día que te lo pidan.",
        ],
      },
      {
        id: "preguntas-frecuentes",
        title: "Preguntas frecuentes",
        faq: [
          {
            question: "¿MiCert me certifica ante SENCE o es un sello oficial?",
            answer:
              "No. MiCert no es un sello oficial ni reemplaza tus obligaciones ante SENCE. Te da trazabilidad y verificación de los certificados que tu OTEC emite, para poder demostrarlos cuando te lo pidan.",
          },
          {
            question: "¿Por qué un PDF no sirve como respaldo en una auditoría?",
            answer:
              "Porque es una imagen del certificado, no una prueba. Se edita en pocos clics y no se puede contrastar contra una fuente, así que no permite demostrar con certeza qué se emitió ni a quién.",
          },
          {
            question: "¿Qué pasa con un certificado emitido por error?",
            answer:
              "Se revoca y queda registrado en el historial; no se elimina. La trazabilidad se mantiene, que es justo lo que una auditoría espera ver.",
          },
          {
            question: "¿Puedo ver todo lo que mi OTEC ha emitido?",
            answer:
              "Sí. Cada emisión queda registrada en un solo lugar, en vez de quedar repartida en correos y carpetas.",
          },
          {
            question:
              "¿La verificación con QR es la misma evidencia que pide una auditoría?",
            answer:
              "La verificación demuestra la autenticidad de cada certificado. Sumada al historial de emisiones y revocaciones, es el tipo de trazabilidad que respalda lo que tu OTEC hizo.",
          },
          {
            question: "¿Esto me garantiza pasar una auditoría?",
            answer:
              "No existe una garantía así, y desconfía de quien la prometa. Lo que la trazabilidad hace es dejarte en mejor pie: poder demostrar lo que emitiste, rápido y sin reconstruir nada a mano.",
          },
        ],
      },
    ],
  },
  {
    slug: "detectar-certificados-otec-falsos",
    tipo: "Normativa",
    temas: ["SENCE", "QR"],
    title:
      "Cómo detectar un certificado OTEC falso (y cómo evitar que falsifiquen los tuyos)",
    excerpt:
      "Un certificado falso se ve igual de bien que uno real: ese es justamente el problema. Si necesitas comprobar la autenticidad de uno, o eres un OTEC que no quiere que falsifiquen los suyos, esta guía es para ti.",
    author: "Equipo MiCert",
    date: "22 de junio de 2026",
    dateISO: "2026-06-22",
    featured: false,
    relatedSlugs: ["certificados-qr-otec", "auditoria-sence"],
    metaTitle: "Cómo detectar un certificado OTEC falso en Chile | MiCert",
    metaDescription:
      "Guía práctica para saber si un certificado de un OTEC es auténtico o falso: las señales de alerta y la forma confiable de verificarlo en segundos.",
    sections: [
      {
        id: "por-que-circulan-certificados-falsos",
        title: "Por qué circulan certificados OTEC falsos",
        paragraphs: [
          "La falsificación de certificados de capacitación es un problema conocido en Chile, sobre todo en sectores donde un certificado abre o cierra la puerta a un trabajo: construcción, minería, seguridad privada, salud. Cuando un documento vale un puesto, aparece el incentivo para falsificarlo.",
          "El terreno fértil es el formato editable. La mayoría de los certificados todavía circulan como PDF, y un PDF se modifica en pocos clics. Tomar uno legítimo y cambiarle el nombre, la nota o la fecha es trivial, y el resultado se ve idéntico al original. Por eso el problema golpea a dos partes a la vez: a quien recibe un certificado y necesita confiar en él, y al OTEC cuyo nombre termina en un documento que no emitió.",
        ],
      },
      {
        id: "senales-de-alerta",
        title: "Las señales de alerta de un certificado dudoso",
        paragraphs: [
          "Si tienes un certificado en la mano y quieres evaluar su autenticidad, estas son las pistas que conviene revisar. Ninguna es definitiva por sí sola, pero juntas dibujan un patrón.",
          "No hay forma de verificarlo. Es la señal más importante. Si el certificado no ofrece ninguna manera de comprobar su autenticidad —ni un código, ni un QR, ni una página donde validarlo— estás obligado a creer solo en cómo se ve. Eso no es respaldo.",
          "El QR no lleva a ninguna parte. Algunos falsos incluyen un QR decorativo que no abre nada, o que lleva a una página genérica sin datos del certificado. Un QR válido debería abrir una verificación con la información del documento.",
          "Inconsistencias en los datos. Nombres mal escritos, fechas que no calzan con la duración del curso, formatos que cambian dentro del mismo documento. Los certificados emitidos por sistema son consistentes; los editados a mano suelen tener pequeños descalces.",
          "El OTEC no aparece en los registros. Los OTEC en Chile están en el registro de SENCE. Si el organismo que supuestamente emitió el certificado no figura, es una bandera roja.",
        ],
      },
      {
        id: "verificar-a-ojo-no-alcanza",
        title: 'El problema de fondo: verificar "a ojo" no alcanza',
        paragraphs: [
          "Acá está el punto que todas las señales anteriores tienen en común: revisar la apariencia de un documento es poco confiable, porque la apariencia es justamente lo que un falsificador copia bien. Un certificado bien falsificado pasa cualquier inspección visual.",
          "La inspección a ojo sirve para descartar los falsos torpes, pero no para confirmar que uno es auténtico. Para eso hace falta otra cosa: poder contrastar el documento contra una fuente que el falsificador no controla.",
        ],
      },
      {
        id: "forma-confiable-de-comprobar",
        title: "La forma confiable de comprobar: verificar el origen",
        paragraphs: [
          "La única manera sólida de confirmar un certificado es verificar su origen, no su apariencia. Es decir, comprobar contra el registro del OTEC que lo emitió si ese certificado existe, a quién corresponde y para qué curso.",
          "Ahí es donde el código QR de verificación cambia las reglas. Un certificado verificable lleva un código único asociado a una página de verificación pública: al escanearlo, no estás mirando el documento, estás consultando la fuente. Si los datos coinciden, es auténtico. Si no hay coincidencia, no importa lo bien que se vea el papel. La apariencia deja de ser el criterio.",
        ],
      },
      {
        id: "si-eres-un-otec",
        title: "Si eres un OTEC: cómo evitar que falsifiquen los tuyos",
        paragraphs: [
          "La defensa contra la falsificación no es un papel más difícil de copiar —cualquier diseño se replica—. Es emitir certificados que se puedan comprobar contra una fuente que tú controlas.",
          "Con MiCert, cada certificado que emite tu OTEC lleva un código único y un QR que apunta a tu página de verificación pública. Si alguien toma uno de tus certificados y le cambia los datos, la verificación lo delata: muestra la información original que emitiste, o no encuentra coincidencia. El falsificador puede copiar el diseño, pero no puede falsificar el registro. Y como cada emisión queda guardada y los certificados se revocan en vez de borrarse, siempre hay un historial contra el cual contrastar.",
        ],
      },
      {
        id: "que-hacer-si-detectas-uno-falso",
        title: "Qué hacer si detectas uno falso",
        paragraphs: [
          "Si confirmaste que un certificado es falso, lo razonable es no validarlo y, según el contexto, avisar al OTEC supuestamente emisor —que tiene interés en saber que están usando su nombre— y a la parte que lo presentó. Para un empleador, dejar registro de la verificación protege a la empresa. Para un OTEC, detectar a tiempo que circulan falsos a su nombre permite reaccionar antes de que el daño reputacional crezca.",
        ],
      },
      {
        id: "preguntas-frecuentes",
        title: "Preguntas frecuentes",
        faq: [
          {
            question: "¿Cómo sé si un certificado de un OTEC es falso?",
            answer:
              "La forma confiable es verificar su origen, no su apariencia. Si el certificado tiene un código o QR de verificación, compruébalo: debe abrir una página con los datos del documento. Si no ofrece ninguna forma de validarse, no hay cómo confirmar que es auténtico.",
          },
          {
            question: "¿Un certificado en PDF se puede falsificar fácilmente?",
            answer:
              "Sí. Un PDF editable se modifica en pocos clics, y el resultado se ve idéntico al original. Por eso la apariencia no basta para confirmar autenticidad.",
          },
          {
            question: "¿Sirve revisar el certificado a simple vista?",
            answer:
              "Solo para descartar los falsos más torpes. Un certificado bien falsificado pasa la inspección visual, así que mirar el documento no alcanza para confirmar que es real.",
          },
          {
            question: "¿Qué es una página de verificación de certificados?",
            answer:
              "Es una página pública a la que apunta el QR del certificado, donde se confirma contra el registro del OTEC si el documento existe y a quién corresponde. Verifica el origen, no la imagen.",
          },
          {
            question:
              "Soy un OTEC: ¿cómo evito que falsifiquen mis certificados?",
            answer:
              "Emitiendo certificados verificables. Si cada certificado tiene un código único y una página de verificación que tú controlas, alterar el documento no sirve: la verificación muestra los datos originales o no encuentra coincidencia.",
          },
          {
            question: "¿Dónde compruebo si un OTEC está acreditado?",
            answer:
              "Los OTEC en Chile figuran en el registro de SENCE. Si el organismo emisor no aparece, es una señal de alerta sobre el certificado.",
          },
        ],
      },
    ],
  },
  {
    slug: "certificados-prevencion-de-riesgos",
    tipo: "Normativa",
    temas: ["SENCE", "QR"],
    title:
      "Certificados para OTEC de prevención de riesgos: por qué tienen que ser verificables",
    excerpt:
      "En prevención de riesgos, un certificado no acredita una asistencia: acredita que alguien puede hacer un trabajo peligroso sin ponerse en riesgo. Por eso, que se pueda comprobar no es un detalle administrativo, es seguridad.",
    author: "Equipo MiCert",
    date: "24 de junio de 2026",
    dateISO: "2026-06-24",
    featured: false,
    relatedSlugs: ["certificados-qr-otec", "detectar-certificados-otec-falsos"],
    metaTitle: "Certificados para OTEC de prevención de riesgos | MiCert",
    metaDescription:
      "En prevención de riesgos, un certificado falso es un riesgo real. Cómo emitir certificados verificables con QR que las empresas mandantes puedan comprobar.",
    sections: [
      {
        id: "en-prevencion-el-certificado-no-es-un-tramite",
        title: "En prevención, el certificado no es un trámite",
        paragraphs: [
          'En la mayoría de las capacitaciones, un certificado falso es un problema de honestidad. En prevención de riesgos es, además, un problema de seguridad. El certificado de un curso de trabajo en altura, espacios confinados o uso de equipos de protección no dice solo "esta persona asistió": dice "esta persona está habilitada para hacer una tarea que, mal hecha, puede costarle la vida a ella o a otros".',
          "Cuando ese documento se puede falsificar, el riesgo deja de ser abstracto. Un trabajador con un certificado adulterado puede terminar en una faena haciendo algo para lo que nunca se entrenó. El daño potencial no es reputacional: es físico. Por eso, en este sector, la verificabilidad del certificado pesa más que en casi cualquier otro.",
        ],
      },
      {
        id: "quien-comprueba-estos-certificados",
        title: "Quién comprueba estos certificados, y cuándo",
        paragraphs: [
          "Los certificados de prevención no se quedan guardados: circulan y se revisan. Una empresa mandante exige a sus contratistas que su gente acredite las capacitaciones de seguridad antes de ingresar a faena. El área de prevención del contratista junta esos certificados y los presenta. El supervisor que controla el acceso a la obra verifica que estén al día.",
          'En cada uno de esos pasos, alguien necesita confiar en un documento que no emitió. Hoy, con certificados en PDF, esa confianza se basa en cómo se ve el papel. Y como un PDF se edita en pocos clics, ese papel no prueba gran cosa. La pregunta "¿este certificado es real?" aparece justo en el momento de más presión: el ingreso a una faena.',
        ],
      },
      {
        id: "riesgo-concreto-del-pdf-editable",
        title: "El riesgo concreto del PDF editable en este sector",
        paragraphs: [
          "Un certificado de prevención en PDF editable hereda todos los problemas del formato, pero con consecuencias más graves. Se puede tomar uno legítimo y cambiarle el nombre para que otra persona ingrese a faena. Se puede modificar una fecha de vencimiento para que un curso caducado parezca vigente. Y nadie en la cadena —ni la empresa mandante, ni el supervisor— tiene cómo detectarlo a tiempo si el único criterio es la apariencia.",
          "Para el OTEC que emitió el original, el riesgo es doble: que falsifiquen sus certificados usando su nombre, y que no tenga cómo demostrar cuáles emitió de verdad cuando alguien se lo pregunte.",
        ],
      },
      {
        id: "que-necesita-un-otec-de-prevencion",
        title: "Qué necesita un OTEC de prevención al emitir",
        paragraphs: [
          "Este sector tiene una característica que define lo que necesita: volumen y rotación. Los OTEC de prevención suelen dictar muchos cursos cortos, a muchos trabajadores, de forma frecuente. Emitir esos certificados a mano, uno por uno, no escala.",
          "Lo que necesitan es poder emitir rápido y en lote desde la lista de participantes que ya tienen, que cada certificado sea verificable de inmediato, y que quede registro de todo lo emitido —incluido lo que se anula o caduca—. Es decir: velocidad, verificación y trazabilidad, las tres juntas.",
        ],
      },
      {
        id: "como-lo-resuelve-micert",
        title: "Cómo lo resuelve MiCert para un OTEC de prevención",
        paragraphs: [
          "MiCert está pensado exactamente para ese flujo. Cargas la planilla de Excel con los participantes del curso y emites un certificado por persona, sin reescribir nada. Cada certificado lleva un código único y un QR que apunta a tu página de verificación pública: la empresa mandante o el supervisor de faena lo escanean y confirman en segundos que es auténtico y que lo emitió tu OTEC.",
          "Cada emisión queda registrada, y los certificados se revocan en vez de borrarse, así que siempre hay historial de lo vigente y lo anulado. El trabajador, además, puede sumar su certificado a LinkedIn, con tu OTEC como emisor. Para un OTEC de prevención, eso significa emitir al ritmo que el sector exige, sin sacrificar la comprobabilidad que el sector necesita.",
        ],
      },
      {
        id: "marco-de-seguridad-laboral",
        title: "El marco de seguridad laboral, en simple",
        paragraphs: [
          "Chile tiene un marco de seguridad y salud en el trabajo de larga data —la Ley 16.744 sobre accidentes del trabajo es su pilar— y, en la práctica, las empresas trasladan esas exigencias a sus contratistas pidiendo respaldo documentado de las capacitaciones. No vamos a interpretar aquí cada obligación, porque eso lo ve cada OTEC con su asesoría. Lo transversal es simple: en todos los casos hay que poder demostrar que la capacitación ocurrió y que el certificado es real. La verificación con QR resuelve justamente esa parte.",
        ],
      },
      {
        id: "preguntas-frecuentes",
        title: "Preguntas frecuentes",
        faq: [
          {
            question:
              "¿Por qué un certificado de prevención de riesgos debería ser verificable?",
            answer:
              "Porque acredita que una persona está habilitada para una tarea peligrosa. Si se puede falsificar, alguien sin entrenamiento puede terminar haciendo ese trabajo. La verificación permite confirmar que el certificado es real antes de que eso pase.",
          },
          {
            question: "¿Quién suele pedir comprobar estos certificados?",
            answer:
              "Las empresas mandantes a sus contratistas, las áreas de prevención y los supervisores que controlan el ingreso a faena. Todos necesitan confiar en documentos que no emitieron.",
          },
          {
            question:
              "¿Un certificado de trabajo en altura o espacios confinados se puede falsificar?",
            answer:
              "Si está en PDF editable, sí: se le puede cambiar el nombre o la fecha de vencimiento. Un certificado verificable con QR evita eso, porque la autenticidad se comprueba contra el registro del OTEC, no contra la apariencia del documento.",
          },
          {
            question:
              "¿Cómo verifica una empresa mandante un certificado emitido con MiCert?",
            answer:
              "Escanea el QR del certificado, que abre la página de verificación pública del OTEC y confirma en segundos si es auténtico y a quién corresponde.",
          },
          {
            question: "¿Sirve para OTEC que emiten muchos cursos cortos?",
            answer:
              "Sí. Se importa la planilla de participantes y se emite en lote, lo que se ajusta al volumen y la rotación típicos del sector.",
          },
          {
            question: "¿MiCert reemplaza la acreditación SENCE de mi OTEC?",
            answer:
              "No. MiCert no es un sello oficial ni reemplaza tu acreditación ni tus obligaciones. Es la herramienta para emitir certificados verificables y demostrar su trazabilidad.",
          },
        ],
      },
    ],
  },
  {
    slug: "ley-21659-conserjes-condominios",
    tipo: "Normativa",
    temas: ["SENCE", "QR"],
    title:
      "Ley 21.659 y conserjes de condominios: ¿es obligatorio el curso de seguridad?",
    excerpt:
      "La respuesta corta es: depende de lo que haga el trabajador, no de cómo se llame su cargo. Te explicamos qué dice realmente la ley sobre los conserjes, dónde está el riesgo para los condominios y qué rol cumple —y cuál no— un OTEC en todo esto.",
    author: "Equipo MiCert",
    date: "26 de junio de 2026",
    dateISO: "2026-06-26",
    featured: false,
    relatedSlugs: [
      "certificados-prevencion-de-riesgos",
      "certificados-qr-otec",
    ],
    metaTitle:
      "Ley 21.659: ¿es obligatorio el curso para conserjes? | MiCert",
    metaDescription:
      "Qué dice la Ley 21.659 sobre la capacitación de conserjes de condominios: cuándo es obligatoria, cuándo es voluntaria y qué debe hacer un OTEC. Guía clara y actualizada.",
    sections: [
      {
        id: "la-respuesta-corta",
        title: "La respuesta corta para conserjes de condominio",
        paragraphs: [
          "Si un trabajador cumple funciones puramente administrativas y de recepción —recibir paquetes, anotar visitas, abrir el portón a residentes, asistir en emergencias básicas— la Ley 21.659 no le exige certificarse. Para ese conserje, la capacitación es voluntaria.",
          "La obligación de certificarse aparece cuando el trabajador ejerce funciones de seguridad: rondas, vigilancia activa, control estricto de acceso, respuesta ante delitos. Ahí ya no se trata de un conserje en sentido estricto, y la ley sí exige formación y autorización. La distinción, entonces, no es el nombre del cargo, sino lo que la persona hace en la práctica.",
        ],
      },
      {
        id: "que-dice-realmente-la-ley",
        title: "Qué dice realmente la ley sobre los conserjes",
        paragraphs: [
          "La Ley 21.659 sobre seguridad privada está vigente desde fines de 2025, con su reglamento ya publicado. En su artículo 55, la ley regula a los porteros, nocheros y rondines: quienes cumplan funciones de seguridad privada deben cursar una capacitación especializada, diferenciada de la de los guardias, según la naturaleza y el riesgo de su labor.",
          "Sobre los conserjes, la ley es explícita: podrán someterse voluntariamente a ese régimen de capacitación, en caso de que desempeñen funciones de seguridad. Es decir, para el conserje que solo hace tareas administrativas, no hay obligación. La capacitación pasa a ser una opción —que un condominio puede elegir para subir el estándar de su edificio— no un requisito legal.",
        ],
      },
      {
        id: "la-distincion-que-importa",
        title: "La distinción que importa: la función, no el cargo",
        paragraphs: [
          'Acá está el punto donde muchos condominios se equivocan. Contratar a alguien como "conserje" pero pedirle en la práctica que haga rondas nocturnas, controle activamente cámaras para detectar delitos o enfrente a personas sospechosas, es ponerlo a ejercer funciones de seguridad. Y esas funciones, por ley, requieren formación y autorización que un conserje no tiene.',
          "El riesgo no es solo administrativo. Si a un trabajador se le exigen labores para las que no está habilitado, el condominio queda expuesto frente a un accidente o un incidente. La forma correcta de tener vigilancia activa no es pedírsela al conserje: es contar con personal habilitado para esa función.",
          "Este es terreno de interpretación legal y cada comunidad debería revisarlo con su asesoría. Lo que es claro en la ley es la lógica de fondo: lo que define las obligaciones es la función real, no la etiqueta del contrato.",
        ],
      },
      {
        id: "quien-emite-la-certificacion-oficial",
        title: "Quién emite la certificación oficial (y quién no)",
        paragraphs: [
          "Este es el punto donde hay que ser muy preciso, porque circula mucha confusión. Para las funciones de seguridad privada, la certificación oficial no la emite cualquier plataforma ni el certificado interno de un OTEC.",
          "Según la ley, los programas y planes de estudio deben estar aprobados por la Subsecretaría de Prevención del Delito, los cursos finalizan con un examen ante Carabineros de Chile, y es la Subsecretaría la que entrega la certificación a través de su propia plataforma informática. Un OTEC participa dictando la capacitación autorizada, pero la credencial oficial de seguridad privada sale de ese circuito estatal, no de un certificado emitido por su cuenta.",
          "Conviene tener esto claro antes de contratar cualquier solución: ningún software privado emite ni reemplaza la credencial oficial de la Ley 21.659. Quien lo prometa, está prometiendo algo que la ley no permite.",
        ],
      },
      {
        id: "la-oportunidad-real-para-tu-otec",
        title: "La oportunidad real para tu OTEC",
        paragraphs: [
          "Entonces, ¿dónde está el negocio para un OTEC en este escenario? En dos planos distintos que conviene no mezclar.",
          "Por un lado, está la formación conducente a la credencial oficial de seguridad privada, que se rige por el circuito de la Subsecretaría y Carabineros descrito arriba. Si tu OTEC está autorizado para eso, opera dentro de ese marco.",
          'Por otro lado —y esto es lo que muchos pasan por alto— está toda la formación que tu OTEC emite por su cuenta y que no es la credencial oficial: los cursos voluntarios de profesionalización para conserjes (atención a residentes, manejo de conflictos sin uso de fuerza, protocolos básicos de emergencia), la formación complementaria que piden los condominios y las constancias de capacitación de tu organismo. Ahí el certificado lo emite tu OTEC, y ahí es donde necesitas que sea claro, verificable y bien presentado.',
          'La oportunidad comercial, además, es de educación: muchos administradores siguen creyendo que "el curso de conserje" es obligatorio sí o sí. El OTEC que explica bien la diferencia —obligatorio para funciones de seguridad, voluntario para el conserje administrativo— gana la confianza de las comunidades, en vez de venderles un curso como ineludible cuando no lo es.',
        ],
      },
      {
        id: "donde-encaja-micert",
        title: "Dónde encaja MiCert",
        paragraphs: [
          "Seamos claros sobre el alcance, porque es lo que te protege con tus clientes: MiCert no emite la credencial oficial de seguridad privada. Esa la entrega la Subsecretaría de Prevención del Delito.",
          "MiCert sirve para los certificados que tu OTEC emite por su cuenta: los cursos voluntarios de profesionalización de conserjes, la formación complementaria para condominios y las constancias de tu organismo. Esos certificados, con MiCert, llevan un código único y un QR de verificación pública: una administración o un comité de edificio puede comprobar en segundos que el certificado es auténtico y que lo emitió tu OTEC. Además, cada emisión queda registrada con historial, lo que te da trazabilidad de todo lo que has formado. Para un OTEC que trabaja con condominios, eso significa entregar documentos que se sostienen, sin invadir el terreno de la credencial oficial.",
          "Nota: este artículo es informativo y no constituye asesoría legal. La Ley 21.659 y su reglamento tienen detalles que cada OTEC y cada condominio debe revisar con su propia asesoría.",
        ],
      },
      {
        id: "preguntas-frecuentes",
        title: "Preguntas frecuentes",
        faq: [
          {
            question:
              "¿Es obligatorio que un conserje de condominio haga el curso de seguridad?",
            answer:
              "No, si el conserje cumple solo funciones administrativas y de recepción. Según la Ley 21.659, los conserjes pueden capacitarse de forma voluntaria, y la obligación aplica únicamente cuando desempeñan funciones de seguridad.",
          },
          {
            question:
              "¿Cuál es la diferencia entre un conserje y un guardia según la ley?",
            answer:
              "La función, no el cargo. Un conserje hace tareas administrativas y de recepción. Quien ejerce vigilancia activa, rondas o control de seguridad está cumpliendo funciones de seguridad privada, que sí requieren formación y autorización.",
          },
          {
            question:
              "¿Quién emite la certificación oficial de seguridad privada?",
            answer:
              "La Subsecretaría de Prevención del Delito, a través de su plataforma, tras un examen ante Carabineros de Chile. Ningún software privado ni certificado interno de un OTEC reemplaza esa credencial oficial.",
          },
          {
            question:
              "¿Qué riesgo corre un condominio que le exige funciones de seguridad a un conserje?",
            answer:
              "Queda expuesto, porque está pidiendo labores para las que el trabajador no está habilitado. Lo correcto, si se necesita vigilancia activa, es contar con personal habilitado para esa función. Conviene revisar cada caso con asesoría legal.",
          },
          {
            question:
              "¿Las credenciales obtenidas antes de la nueva ley siguen siendo válidas?",
            answer:
              "La ley contempla disposiciones transitorias: las autorizaciones vigentes se mantienen hasta su vencimiento conforme a la normativa con la que se otorgaron, con plazos de adecuación. Como es un punto sujeto a detalle reglamentario, conviene confirmar el estado actual con tu asesoría.",
          },
          {
            question: "¿MiCert emite la credencial oficial de la Ley 21.659?",
            answer:
              "No. MiCert no emite ni reemplaza la credencial oficial. Sirve para los certificados que tu OTEC emite por su cuenta —cursos voluntarios y formación complementaria—, haciéndolos verificables con QR y trazables.",
          },
        ],
      },
    ],
  },
  {
    slug: "rudo-sence-como-usar-registro-otec",
    tipo: "Normativa",
    temas: ["SENCE", "QR"],
    title:
      "RUDO SENCE: cómo verificar si un OTEC está vigente (y qué no te dice el registro)",
    excerpt:
      "El RUDO es el registro oficial de SENCE para comprobar si un OTEC existe y está vigente. Es el primer filtro antes de contratar una capacitación o confiar en un certificado. Pero tiene un límite importante que conviene conocer.",
    author: "Equipo MiCert",
    date: "28 de junio de 2026",
    dateISO: "2026-06-28",
    featured: false,
    relatedSlugs: ["detectar-certificados-otec-falsos", "certificados-qr-otec"],
    metaTitle: "RUDO SENCE: cómo verificar si un OTEC está vigente | MiCert",
    metaDescription:
      "Qué es el RUDO SENCE, cómo buscar un OTEC y leer su estado, qué hacer si no aparece o está suspendido, y por qué RUDO no basta para validar un certificado.",
    sections: [
      {
        id: "que-es-el-rudo",
        title: "Qué es el RUDO y qué confirma",
        paragraphs: [
          "RUDO significa Registro Unificado de Organismos. Es la plataforma oficial de SENCE —el Servicio Nacional de Capacitación y Empleo— donde están registrados los OTEC de Chile. Es, además, la plataforma digital que reemplazó la antigua forma de registro y actualización de estos organismos.",
          "Para una empresa o un área de RRHH, el RUDO funciona como el primer filtro antes de contratar capacitación: ahí compruebas si el OTEC existe como organismo reconocido y si está vigente. Para un trabajador, sirve para confirmar que el organismo que emitió su certificado es legítimo. Y para el propio OTEC, mantener su estado al día en el RUDO es parte de poder operar formalmente. Lo que el registro confirma es la existencia y el estado del organismo, no más que eso.",
        ],
      },
      {
        id: "como-acceder-y-buscar",
        title: "Cómo acceder y buscar un OTEC",
        paragraphs: [
          "La puerta de entrada es el sitio oficial de SENCE (sence.gob.cl), en la sección de Organismos, o la ficha del trámite OTEC en ChileAtiende. Conviene partir desde ahí y no desde enlaces de terceros, porque la plataforma se digitalizó recientemente y su interfaz puede cambiar.",
          "Un punto a tener presente sobre el acceso: según la ficha oficial de ChileAtiende, la consulta del registro se realiza con ClaveÚnica o Clave Tributaria del SII, filtrando por nombre o RUT de la empresa. La búsqueda por RUT es la más confiable, porque evita confusiones con nombres parecidos o razones sociales que cambiaron. Como el detalle de la interfaz puede variar, lo más seguro es seguir el flujo que indique el propio sitio de SENCE al momento de tu consulta.",
        ],
      },
      {
        id: "que-mirar-en-la-ficha",
        title: "Qué mirar en la ficha del OTEC",
        paragraphs: [
          "Cuando llegues a la ficha del organismo, hay un dato que manda sobre todos los demás: el estado. Si el OTEC no figura vigente, lo demás pierde relevancia. Un organismo con su acreditación suspendida o dada de baja no está en condiciones de operar formalmente, y conviene detenerse ahí antes de avanzar.",
          "Después del estado, vale la pena cruzar tres cosas con los documentos que te haya entregado el OTEC: que el RUT y la razón social coincidan exactamente con los de la cotización, el contrato o el certificado; que los datos de contacto y la región correspondan a un organismo real y ubicable; y que las fechas de inscripción y actualización sean coherentes con la trayectoria que el OTEC dice tener. Cualquier descalce entre lo que dice el registro y lo que te presentan es una señal para pedir aclaraciones antes de seguir.",
        ],
      },
      {
        id: "que-hacer-si-no-aparece",
        title: "Qué hacer si el OTEC no aparece o no está vigente",
        paragraphs: [
          'Si buscas y no aparece nada, primero descarta lo simple: prueba variantes del nombre (con y sin "OTEC", con y sin la razón social completa) o busca directamente por RUT. Si aun así no figura con ninguna variante, pídele al OTEC su certificado de vigencia emitido por SENCE, con fecha reciente, y no aceptes capturas antiguas o documentos sin fecha verificable. Ante la duda, consulta directamente a SENCE por sus canales oficiales, citando el RUT y el nombre del organismo.',
          "Si aparece pero con su acreditación suspendida o cancelada, conviene no avanzar hasta entender la situación: pídele al OTEC una explicación y, si dice haber regularizado, un documento oficial que lo respalde. Para efectos formales, como una capacitación con franquicia tributaria, lo prudente es confirmar el estado con SENCE antes de contratar.",
        ],
      },
      {
        id: "el-limite-del-rudo",
        title: "El límite del RUDO: confirma el organismo, no el certificado",
        paragraphs: [
          "Acá está el punto que mucha gente no ve, y es el más importante de toda esta guía. El RUDO te confirma que el OTEC existe y está vigente. No te confirma que el certificado específico que tienes en la mano sea auténtico.",
          "Son dos cosas distintas. Un OTEC puede estar perfectamente vigente en el RUDO y, aun así, alguien puede haber falsificado un certificado usando su nombre: tomar uno legítimo y cambiarle la persona, el curso o la nota. El registro no detecta eso, porque no guarda los certificados individuales ni los datos de cada participante. Verificar el organismo y verificar el documento son capas diferentes, y el RUDO solo cubre la primera.",
        ],
      },
      {
        id: "verificacion-a-nivel-de-certificado",
        title: "Cómo se cierra ese vacío: verificación a nivel de certificado",
        paragraphs: [
          "La capa que falta es la verificación del certificado individual, y ahí es donde entra la verificación con código QR. Cuando un OTEC emite sus certificados con un sistema que les asigna un código único y un QR de verificación pública, cualquiera puede comprobar ese documento en particular: escanea el QR y confirma contra el registro del OTEC si el certificado existe, a quién corresponde y de qué curso es.",
          'Combinadas, las dos capas dan confianza completa: el RUDO confirma que el organismo es legítimo, y la verificación por QR confirma que ese certificado puntual es real. Una responde "¿este OTEC existe?"; la otra, "¿este certificado lo emitió de verdad?".',
        ],
      },
      {
        id: "si-eres-un-otec",
        title: "Si eres un OTEC: por qué te conviene ser verificable",
        paragraphs: [
          "Para un OTEC, esto es una ventaja concreta frente a sus clientes. Estar vigente en el RUDO es lo mínimo, pero no es algo que te diferencie: lo cumplen todos los organismos serios. Lo que sí te distingue es que tus certificados se puedan verificar uno a uno.",
          "Con MiCert, cada certificado que emite tu OTEC lleva un código único y un QR que apunta a tu página de verificación pública. Una empresa mandante que recibe el certificado de un trabajador puede comprobarlo en segundos, sin llamarte. Importante ser preciso sobre el alcance: MiCert hace verificables los certificados que tu OTEC emite con MiCert, y la verificación se hace en línea, en la página pública del certificado. No reemplaza al RUDO ni valida documentos de terceros: es la capa que el RUDO no cubre, la del certificado individual, para lo que tú emites. Para un OTEC que trabaja con empresas que verifican credenciales, poder ofrecer esa comprobación es un argumento de venta real.",
        ],
      },
      {
        id: "preguntas-frecuentes",
        title: "Preguntas frecuentes",
        faq: [
          {
            question: "¿Qué es el RUDO SENCE?",
            answer:
              "Es el Registro Unificado de Organismos: la plataforma oficial de SENCE donde están registrados los OTEC de Chile. Permite comprobar si un organismo de capacitación existe y está vigente.",
          },
          {
            question: "¿Necesito ClaveÚnica para consultar el RUDO?",
            answer:
              "Según la ficha oficial de ChileAtiende, la consulta del registro se realiza con ClaveÚnica o Clave Tributaria del SII, filtrando por nombre o RUT. Como la plataforma se actualizó hace poco, conviene seguir el flujo que indique el sitio de SENCE al momento de consultar.",
          },
          {
            question:
              "¿El RUDO confirma que un certificado específico es auténtico?",
            answer:
              "No. El RUDO confirma que el OTEC existe y su estado, pero no guarda los certificados individuales. Un OTEC puede estar vigente y aun así existir certificados falsificados a su nombre. Para eso se necesita verificar el documento, no solo el organismo.",
          },
          {
            question: "¿Qué hago si un OTEC aparece suspendido o no aparece?",
            answer:
              "Si no aparece, prueba variantes del nombre o busca por RUT, y pide su certificado de vigencia emitido por SENCE. Si aparece suspendido o cancelado, pide una explicación y confirma el estado con SENCE antes de contratar, sobre todo para efectos formales.",
          },
          {
            question: "¿Sirve un certificado de un OTEC que no está vigente?",
            answer:
              "Para efectos formales, como capacitación con franquicia tributaria, conviene confirmar con SENCE, porque un OTEC sin vigencia no está en condiciones de operar formalmente. Si el certificado es antiguo, hay que verificar que el OTEC estuviera vigente en la fecha del curso.",
          },
          {
            question:
              "Soy un OTEC: ¿cómo hago que mis certificados se puedan verificar, más allá del RUDO?",
            answer:
              "Emitiéndolos con verificación a nivel de certificado. Con MiCert, cada certificado lleva un código único y un QR de verificación pública, así una empresa puede comprobar ese documento puntual. El RUDO confirma tu organismo; esto confirma cada certificado que emites.",
          },
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
