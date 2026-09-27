export type Plan = {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  volume: string;
  features: string[];
  featured?: boolean;
};

export const PLANS_PAGE = {
  heading: "Planes simples, según cuántos certificados emites",
  subheading: "Sin instalación ni costos ocultos. Pagas por volumen de emisión.",
};

// 2 meses gratis en el plan anual: se paga el equivalente a 10 meses.
export const PLANS: Plan[] = [
  {
    id: "basico",
    name: "Básico",
    priceMonthly: 29990,
    priceAnnual: 299900,
    volume: "80 certificados al mes",
    features: [
      "Emisión masiva desde Excel",
      "Verificación pública con QR",
      "Envío de certificados por correo",
      "Plantillas reutilizables",
      "2 usuarios del equipo",
    ],
  },
  {
    id: "estandar",
    name: "Estándar",
    priceMonthly: 49990,
    priceAnnual: 499900,
    volume: "200 certificados al mes",
    featured: true,
    features: [
      "Todo lo del plan Básico",
      "Vigencia y revocación por lote",
      "Dashboard con indicadores",
      "5 usuarios del equipo",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    priceMonthly: 89990,
    priceAnnual: 899900,
    volume: "500 certificados al mes",
    features: [
      "Todo lo del plan Estándar",
      "Mayor volumen de emisión mensual",
      "10 usuarios del equipo",
      "Soporte prioritario por correo",
    ],
  },
];

export const PACKS = [
  { size: 25, price: 17990 },
  { size: 50, price: 32990 },
  { size: 100, price: 59990 },
] as const;

export const PLAN_INCLUDES = [
  "Emisión masiva desde Excel",
  "Editor visual de certificados",
  "Verificación pública con QR",
  "Envío de certificados por correo",
] as const;

export type ComparisonValue = boolean | number | string;

export type ComparisonRow = {
  label: string;
  note?: string;
  values: {
    basico: ComparisonValue;
    estandar: ComparisonValue;
    pro: ComparisonValue;
  };
};

export type ComparisonGroup = {
  title: string;
  rows: ComparisonRow[];
};

export const PLAN_COMPARISON: ComparisonGroup[] = [
  {
    title: "Emisión",
    rows: [
      {
        label: "Certificados al mes",
        values: { basico: 80, estandar: 200, pro: 500 },
      },
      {
        label: "Emisión masiva desde Excel",
        values: { basico: true, estandar: true, pro: true },
      },
      {
        label: "Editor visual de certificados",
        values: { basico: true, estandar: true, pro: true },
      },
      {
        label: "Plantillas reutilizables",
        values: { basico: true, estandar: true, pro: true },
      },
      {
        label: "Envío de certificados por correo",
        values: { basico: true, estandar: true, pro: true },
      },
      {
        label: "Certificados de eventos y webinars",
        note: "Descuentan de la misma cuota",
        values: { basico: true, estandar: true, pro: true },
      },
    ],
  },
  {
    title: "Verificación y control",
    rows: [
      {
        label: "Verificación pública con QR",
        values: { basico: true, estandar: true, pro: true },
      },
      {
        label: "Vigencia y revocación individual",
        values: { basico: true, estandar: true, pro: true },
      },
      {
        label: "Vigencia y revocación por lote",
        values: { basico: false, estandar: true, pro: true },
      },
      {
        label: "Dashboard con indicadores",
        values: { basico: false, estandar: true, pro: true },
      },
    ],
  },
  {
    title: "Equipo y soporte",
    rows: [
      {
        label: "Usuarios del equipo",
        values: { basico: 2, estandar: 5, pro: 10 },
      },
      {
        label: "Soporte por correo",
        values: { basico: true, estandar: true, pro: "Prioritario" },
      },
    ],
  },
];

export const DEMO_BLOCK = {
  eyebrow: "Demo sin costo · 5 certificados",
  title: "Pruébalo con 5 certificados antes de decidir",
  description:
    "Emite certificados reales con tus plantillas, sin tarjeta de crédito. Tras tu solicitud, activamos la cuenta y te enviamos las credenciales.",
  cta: "Solicitar demo",
};

export const PRECIOS_METADATA = {
  title: "Planes y precios — Software de certificados OTEC | MiCert",
  description:
    "Conoce los planes de MiCert para emitir certificados con QR en tu OTEC. Demo sin costo de 5 certificados, sin tarjeta. Agenda una demo.",
};

export const PRECIOS_FAQ = [
  {
    question: "¿Puedo cambiar de plan después?",
    answer:
      "Sí. Puedes subir o bajar de plan cuando quieras, según las necesidades de tu OTEC. El cambio se refleja en tu próximo ciclo de facturación.",
  },
  {
    question: "¿Qué pasa si supero mi cuota mensual?",
    answer:
      "Te avisamos cuando te acercas al límite. Si necesitas más certificados en un mes puntual, puedes comprar un pack adicional sin cambiar de plan. Si el volumen extra es constante, conviene subir de plan.",
  },
  {
    question: "¿Los precios incluyen IVA?",
    answer:
      "No. Los valores publicados son netos. Al ser una operación entre empresas, se agrega el IVA correspondiente en la factura.",
  },
  {
    question: "¿Hay contrato de permanencia?",
    answer:
      "Los planes mensuales no tienen permanencia: puedes cancelar cuando quieras. El plan anual se contrata por 12 meses.",
  },
  {
    question: "¿Cómo funciona el plan anual?",
    answer:
      "Pagas 10 meses y usas 12, con la misma cuota mensual de certificados de tu plan.",
  },
  {
    question: "¿Necesito conocimientos técnicos para usar MiCert?",
    answer:
      "No. Cargas tus datos desde un Excel, eliges el diseño del certificado y emites. Todo desde el navegador, sin instalar nada.",
  },
  {
    question: "¿Puedo probar antes de contratar?",
    answer:
      "Sí. El plan Demo te permite emitir 5 certificados de prueba sin costo para que veas el flujo completo antes de decidir.",
  },
];
