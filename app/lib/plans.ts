export type Plan = {
  id: string;
  name: string;
  price: string;
  volume: string;
  features: string[];
  featured?: boolean;
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
