const svgProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const FEATURES = [
  {
    label: "Emisión masiva desde Excel",
    icon: (
      <svg {...svgProps}>
        <path d="M12 15V4" />
        <path d="m8 8 4-4 4 4" />
        <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
      </svg>
    ),
  },
  {
    label: "Editor visual de certificados",
    icon: (
      <svg {...svgProps}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
  },
  {
    label: "Validación pública con QR",
    icon: (
      <svg {...svgProps}>
        <rect x="3" y="3" width="5" height="5" rx="1" />
        <rect x="16" y="3" width="5" height="5" rx="1" />
        <rect x="3" y="16" width="5" height="5" rx="1" />
        <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
        <path d="M21 21v.01" />
        <path d="M12 7v3a2 2 0 0 1-2 2H7" />
        <path d="M3 12h.01" />
        <path d="M12 3h.01" />
        <path d="M12 16v.01" />
        <path d="M16 12h1" />
        <path d="M21 12v.01" />
        <path d="M12 21v-1" />
      </svg>
    ),
  },
  {
    label: "Envío de certificados por email",
    icon: (
      <svg {...svgProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
];

export default function PlanFeatures() {
  return (
    <div className="plan-features">
      <div className="plan-features-head">
        <span className="eyebrow">Todos los planes incluyen</span>
        <p>
          Si recién partes o tienes cursos esporádicos, Básico te alcanza. Con
          volumen constante, Estándar o Pro te dan holgura sin estar pendiente
          de la cuota.
        </p>
      </div>
      <div className="plan-features-grid">
        {FEATURES.map((feature) => (
          <div key={feature.label} className="plan-features-item">
            <span className="plan-features-icon">{feature.icon}</span>
            <span className="plan-features-label">{feature.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
