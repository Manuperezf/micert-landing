import Image from "next/image";
import styles from "./home.module.css";

export default function ProductBlock() {
  return (
    <section className={styles.product}>
      <div className={styles.productBg}>
        <Image
          src="/landing/fotos/oficina.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          aria-hidden
          className={styles.productBgImg}
        />
      </div>
      <div className={styles.productVeil} aria-hidden="true" />
      <div className={styles.stage}>
        <div className={styles.dashboard}>
          <Image
            src="/landing/producto/dashboard@2x.png"
            alt="Panel principal de MiCert"
            width={2880}
            height={1620}
            sizes="(max-width: 767px) 460px, (max-width: 1176px) calc(100vw - 176px), 1000px"
            priority
            className={styles.dashboardImg}
          />
          <div className={styles.ficha}>
            <Image
              src="/landing/producto/ficha-verificacion.png"
              alt="Ficha pública de verificación de un certificado"
              width={724}
              height={440}
              sizes="(max-width: 767px) 280px, 440px"
              className={styles.fichaImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
