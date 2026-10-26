import {
  COMPARISON_HEADERS,
  COMPARISON_ROWS,
} from "../../lib/actividades";
import styles from "./actividades.module.css";

export default function ActividadesCompare() {
  return (
    <section className={`${styles.shell} ${styles.block}`}>
      <h2 className={styles.h2}>
        Lista de firmas, formulario o MiCert: qué cambia.
      </h2>
      <p className={styles.intro}>
        Las tres sirven para registrar asistencia. La diferencia está en lo que
        queda después.
      </p>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col" />
              {COMPARISON_HEADERS.map((header) => (
                <th key={header} scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row) => (
              <tr key={row.feature}>
                <th scope="row">{row.feature}</th>
                {row.values.map((value, index) => (
                  <td key={`${row.feature}-${index}`}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
