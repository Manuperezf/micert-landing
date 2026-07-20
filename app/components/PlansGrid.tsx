"use client";

import { useState } from "react";
import { PLANS } from "../lib/plans";

type Billing = "monthly" | "annual";

const clp = (value: number) => "$" + value.toLocaleString("es-CL");

export default function PlansGrid() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div className="billing-toggle" role="group" aria-label="Ciclo de facturación">
          <button
            type="button"
            className={billing === "monthly" ? "active" : ""}
            onClick={() => setBilling("monthly")}
            aria-pressed={billing === "monthly"}
          >
            Facturación mensual
          </button>
          <button
            type="button"
            className={billing === "annual" ? "active" : ""}
            onClick={() => setBilling("annual")}
            aria-pressed={billing === "annual"}
          >
            Facturación anual <span className="billing-save">2 meses gratis</span>
          </button>
        </div>
      </div>

      <div className="plans">
        {PLANS.map((plan) => {
          const price = billing === "monthly" ? plan.priceMonthly : plan.priceAnnual;
          const period = billing === "monthly" ? "+ IVA / mes" : "+ IVA / año";

          return (
            <div
              key={plan.id}
              className={`plan${plan.featured ? " featured" : ""}`}
            >
              {plan.featured && (
                <span className="plan-badge">Recomendado</span>
              )}
              <span className="tier">{plan.name}</span>
              <div className="price">
                {clp(price)} <small>{period}</small>
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
          );
        })}
      </div>
    </>
  );
}
