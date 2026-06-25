import { PLANS } from "../lib/plans";

export default function PlansGrid() {
  return (
    <div className="plans">
      {PLANS.map((plan) => (
        <div
          key={plan.id}
          className={`plan${plan.featured ? " featured" : ""}`}
        >
          {plan.featured && (
            <span className="plan-badge">Recomendado</span>
          )}
          <span className="tier">{plan.name}</span>
          <div className="price">
            {plan.price} <small>+ IVA / mes</small>
          </div>
          <div className="vol">{plan.volume}</div>
          <ul>
            {plan.features.map((feature) => (
              <li key={feature}>
                <span className="ck">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            className={plan.featured ? "btn" : "btn ghost"}
            href="/demo"
          >
            Agenda una demo
          </a>
        </div>
      ))}
    </div>
  );
}
