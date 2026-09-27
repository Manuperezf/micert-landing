import { Fragment } from "react";
import Link from "next/link";
import {
  PLANS,
  PLAN_COMPARISON,
  type ComparisonRow,
  type ComparisonValue,
} from "../../lib/plans";
import { DEMO_URL } from "../home/links";
import styles from "./precios.module.css";

function clp(value: number) {
  const formatted = Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `$${formatted}`;
}

function Check() {
  return (
    <span className={styles.mark}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12.5l4.5 4.5L19 7.5" />
      </svg>
      <span className={styles.srOnly}>Incluido</span>
    </span>
  );
}

function valueFor(row: ComparisonRow, id: string): ComparisonValue {
  if (id === "basico" || id === "estandar" || id === "pro") return row.values[id];
  return false;
}

function Cell({ value }: { value: ComparisonValue }) {
  if (value === true) return <Check />;
  if (value === false) {
    return (
      <>
        <span className={styles.dash} aria-hidden="true">
          —
        </span>
        <span className={styles.srOnly}>No incluido</span>
      </>
    );
  }
  return <span className={styles.cellValue}>{value}</span>;
}

export default function PlanComparison() {
  return (
    <section className={`${styles.shell} ${styles.section}`}>
      <div className={styles.head}>
        <span className={styles.kicker}>
          <span className={styles.kickerMark} aria-hidden="true" />
          Comparativa
        </span>
        <h2 className={styles.h2}>Compara los planes en detalle.</h2>
      </div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <caption className={styles.caption}>Comparación de planes</caption>
          <thead>
            <tr>
              <th className={styles.corner} scope="col">
                <span className={styles.srOnly}>Funcionalidad</span>
              </th>
              {PLANS.map((plan) => (
                <th
                  key={plan.id}
                  scope="col"
                  className={plan.featured ? styles.featured : undefined}
                >
                  <span className={styles.planHeadName}>{plan.name}</span>
                  <span className={styles.planHeadPrice}>
                    {clp(plan.priceMonthly)} / mes
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PLAN_COMPARISON.map((group) => (
              <Fragment key={group.title}>
                <tr className={styles.group}>
                  <th scope="colgroup" colSpan={4}>
                    {group.title}
                  </th>
                </tr>
                {group.rows.map((row) => (
                  <tr className={styles.row} key={row.label}>
                    <th className={styles.rowLabel} scope="row">
                      {row.label}
                      {row.note ? (
                        <span className={styles.note}>{row.note}</span>
                      ) : null}
                    </th>
                    {PLANS.map((plan) => (
                      <td
                        key={plan.id}
                        className={plan.featured ? styles.featured : undefined}
                      >
                        <Cell value={valueFor(row, plan.id)} />
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
        <div className={styles.ctaRow}>
          <span />
          {PLANS.map((plan) => (
            <Link
              key={plan.id}
              className={`${styles.btn} ${plan.featured ? styles.btnPrimary : styles.btnSecondary} ${styles.compareBtn}`}
              href={DEMO_URL}
            >
              Contratar {plan.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
