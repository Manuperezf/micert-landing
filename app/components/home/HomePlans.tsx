"use client";

import { useState } from "react";
import Link from "next/link";
import { PLANS } from "../../lib/plans";
import { DEMO_URL } from "./links";
import styles from "./home.module.css";

function clp(value: number) {
  const formatted = Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `$${formatted}`;
}

function quotaOf(volume: string) {
  const match = volume.match(/\d+/);
  return match ? Number(match[0]) : 0;
}

function Check() {
  return (
    <svg
      className={styles.planCheck}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export default function HomePlans() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className={styles.plans} id="precios">
      <div className={`${styles.shell} ${styles.plansInner}`}>
        <div className={styles.plansHead}>
          <div className={styles.plansIntro}>
            <span className={styles.kicker}>
              <span className={styles.kickerMark} aria-hidden="true" />
              Planes
            </span>
            <h2 className={styles.h2}>Pagas según lo que emites al mes.</h2>
          </div>
          <div className={styles.plansSwitch}>
            <div className={styles.billToggle}>
              <button
                type="button"
                className={styles.billBtn}
                aria-pressed={!annual}
                onClick={() => setAnnual(false)}
              >
                Mensual
              </button>
              <button
                type="button"
                className={styles.billBtn}
                aria-pressed={annual}
                onClick={() => setAnnual(true)}
              >
                Anual
                <span className={styles.billFree}>2 meses gratis</span>
              </button>
            </div>
            <p className={styles.billNote}>
              Con el plan anual pagas 10 meses y usas 12.
            </p>
          </div>
        </div>

        <div className={styles.planGrid}>
          {PLANS.map((plan) => {
            const items = plan.features;
            const quota = quotaOf(plan.volume);
            const annualPrice = plan.priceAnnual || plan.priceMonthly * 10;
            const unit = Math.round(plan.priceMonthly / quota / 5) * 5;
            const equivalent = Math.round(annualPrice / 12);
            const savings = plan.priceMonthly * 12 - annualPrice;

            return (
              <article
                key={plan.id}
                className={`${styles.plan} ${plan.featured ? styles.planFeatured : ""}`}
              >
                <div className={styles.planNameRow}>
                  <span className={styles.planName}>{plan.name}</span>
                  {plan.featured ? (
                    <span className={styles.recommend}>Recomendado</span>
                  ) : null}
                </div>
                <div className={styles.planPrice}>
                  {annual ? (
                    <>
                      <div className={styles.planAmountRow}>
                        <span className={styles.planAmount}>{clp(annualPrice)}</span>
                        <span className={styles.planPeriod}>+ IVA / año</span>
                      </div>
                      <p className={styles.planDetail}>
                        Equivale a {clp(equivalent)} al mes
                        <span className={styles.saveBadge}>
                          Ahorras {clp(savings)}
                        </span>
                      </p>
                    </>
                  ) : (
                    <>
                      <div className={styles.planAmountRow}>
                        <span className={styles.planAmount}>
                          {clp(plan.priceMonthly)}
                        </span>
                        <span className={styles.planPeriod}>+ IVA / mes</span>
                      </div>
                      <p className={styles.planDetail}>
                        {plan.volume}{" "}
                        <span className={styles.planMuted}>· ≈ {clp(unit)} c/u</span>
                      </p>
                    </>
                  )}
                </div>
                <ul className={styles.planFeatures}>
                  {items.map((item) => (
                    <li key={item}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className={styles.planFeaturesCompact}>{items.join(" · ")}</p>
                <Link
                  className={`${styles.btn} ${plan.featured ? styles.btnPrimary : styles.btnSecondary} ${styles.planCta}`}
                  href={DEMO_URL}
                >
                  Contratar {plan.name}
                </Link>
              </article>
            );
          })}
        </div>

        <div className={styles.planFoot}>
          <p>
            <strong>Packs adicionales:</strong> 25, 50 o 100 certificados, con
            vigencia de 3 meses. <strong>¿Más volumen?</strong> Plan a medida.
          </p>
          <Link className={styles.arrowLink} href="/precios">
            Comparar planes en detalle <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
