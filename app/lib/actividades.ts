export const ACTIVIDADES_TITLE =
  "Asistencia y encuesta de satisfacción para OTEC";

export const ACTIVIDADES_DESCRIPTION =
  "Registra la asistencia con QR y código al final de cada clase, online o presencial, y aplica una encuesta anónima sobre la clase y el relator.";

export const ACTIVIDADES_PRICES = {
  withPlan: { monthly: 14990, annual: 149900 },
  solo: { monthly: 24990, annual: 249900 },
} as const;

export function formatClp(value: number) {
  const formatted = Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `$${formatted}`;
}

export const ACTIVIDADES_FEATURES = [
  "Asistencia y encuesta en cada actividad",
  "Registro e informe en PDF con folio",
  "Exportación a Excel",
  "Historial de correcciones",
] as const;

const soloMonth = formatClp(ACTIVIDADES_PRICES.solo.monthly);
const withPlanMonth = formatClp(ACTIVIDADES_PRICES.withPlan.monthly);

export const ACTIVIDADES_FAQ = [
  {
    question: "¿Necesito un plan de certificados para usar Actividades?",
    answer: `No. Puedes contratar solo Actividades por ${soloMonth} +\u00A0IVA al mes. Si ya tienes un plan de certificados, lo sumas por ${withPlanMonth} +\u00A0IVA.`,
  },
  {
    question: "¿Se conecta con Zoom, Meet o Teams?",
    answer:
      "No. Funciona al lado de cualquier plataforma: el relator comparte la pantalla con el QR y el código al final de la clase.",
  },
  {
    question: "¿Funciona en clases presenciales?",
    answer:
      "Sí. Está pensada para clases online, donde no hay lista que firmar, pero el QR funciona igual proyectado en una sala.",
  },
  {
    question: "¿Qué necesita el participante?",
    answer:
      "Su teléfono y el código que da el relator. No descarga ninguna aplicación ni crea una cuenta.",
  },
  {
    question: "¿Qué pasa si alguien no alcanzó a marcar?",
    answer:
      "Lo registras desde la ficha de la actividad, con un motivo. El cambio queda en el historial.",
  },
  {
    question: "¿Puedo usar solo la encuesta, sin asistencia?",
    answer:
      "Sí. En cada actividad eliges si registra asistencia, encuesta o las dos.",
  },
  {
    question: "¿Quién ve las respuestas de la encuesta?",
    answer:
      "Tu equipo, cuando cierra el registro y solo si el grupo tiene al menos 5 respuestas. Nadie puede ver quién respondió qué.",
  },
  {
    question: "¿Quién es responsable de los datos?",
    answer:
      "Tu OTEC es el responsable y MiCert los trata como encargado, con Contrato de servicios y DPA firmados.",
  },
] as const;

export const COMPARISON_HEADERS = [
  "MiCert Actividades",
  "Lista de firmas",
  "Formulario en línea",
] as const;

export const COMPARISON_ROWS = [
  {
    feature: "Clase online",
    values: ["Sí", "No aplica", "Sí"],
  },
  {
    feature: "Quien marca estuvo en la clase",
    values: ["Código que da el relator", "Firma en la sala", "Hay que armar un control"],
  },
  {
    feature: "Encuesta anónima con mínimo de respuestas",
    values: ["Incluida, desde 5 respuestas", "Aparte", "Depende de cómo se configure"],
  },
  {
    feature: "Registro en PDF con folio",
    values: ["Incluido", "Hay que escanearla", "Hay que armarlo"],
  },
  {
    feature: "Correcciones con motivo e historial",
    values: ["Incluidas", "A mano", "Sin historial"],
  },
  {
    feature: "Lista para emitir certificados",
    values: ["En el formato de carga de MiCert", "Hay que transcribirla", "Hay que ordenarla"],
  },
] as const;

export const ACTIVIDADES_BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://micert.cl/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Actividades",
      item: "https://micert.cl/actividades",
    },
  ],
};

function monthlyOffer(name: string, price: number) {
  return {
    "@type": "Offer",
    name,
    price,
    priceCurrency: "CLP",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price,
      priceCurrency: "CLP",
      unitText: "MONTH",
      valueAddedTaxIncluded: false,
    },
  };
}

export const ACTIVIDADES_SOFTWARE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MiCert Actividades",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://micert.cl/actividades",
  inLanguage: "es-CL",
  description: ACTIVIDADES_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "MiCert Digital SpA",
    url: "https://micert.cl",
  },
  offers: [
    monthlyOffer(
      "Para clientes con plan de certificados MiCert",
      ACTIVIDADES_PRICES.withPlan.monthly,
    ),
    monthlyOffer("Solo Actividades", ACTIVIDADES_PRICES.solo.monthly),
  ],
};
