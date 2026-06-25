export type Plan = {
  id: string;
  name: string;
  price: string;
  volume: string;
  features: string[];
  featured?: boolean;
};

export const PLANS_PAGE = {
  heading: "Planes simples, según cuántos certificados emites",
  subheading: "Sin instalación ni costos ocultos. Pagas por volumen de emisión.",
};

export const PLANS: Plan[] = [
  {
    id: "basico",
    name: "Básico",
    price: "$29.990",
    volume: "80 certificados al mes",
    features: [
      "Plantillas reutilizables",
      "Verificación pública con QR",
      "Emisión masiva e historial",
      "1 usuario administrador",
    ],
  },
  {
    id: "estandar",
    name: "Estándar",
    price: "$49.990",
    volume: "200 certificados al mes",
    featured: true,
    features: [
      "Todo lo del plan Básico",
      "Mayor volumen mensual",
      "Vigencia y anulación por lote",
      "Varios usuarios del equipo",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$89.990",
    volume: "500 certificados al mes",
    features: [
      "Todo lo del plan Estándar",
      "Alto volumen de emisión",
      "Reportes y trazabilidad",
      "Soporte por correo",
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
