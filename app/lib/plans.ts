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
      "No. Los planes son mensuales y sin permanencia. Puedes cancelar cuando quieras.",
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
