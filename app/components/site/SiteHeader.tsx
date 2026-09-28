"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { APP_URL, DEMO_URL, MEET_URL } from "../home/links";
import styles from "./site.module.css";

const MENU_LINKS = [
  { href: "/#como-funciona", label: "Cursos" },
  { href: "/#ciclo", label: "Eventos" },
  { href: "/precios", label: "Precios" },
  { href: "/recursos", label: "Recursos" },
] as const;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <a className={styles.logoLink} href="/">
          <img
            className={styles.logo}
            src="/logo.svg"
            alt="MiCert"
            width={107}
            height={32}
          />
        </a>
        <nav className={styles.nav} aria-label="Principal">
          {MENU_LINKS.map((item) => (
            <Link key={item.label} href={item.href} className={styles.menuLink}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.headerActions}>
          <a className={`${styles.login} ${styles.menuLink}`} href={APP_URL}>
            Iniciar sesión
          </a>
          <Link
            className={`${styles.btn} ${styles.btnPrimary} ${styles.headerBtn}`}
            href={DEMO_URL}
          >
            Prueba gratis
          </Link>
          <Link
            className={`${styles.btn} ${styles.btnSecondary} ${styles.headerBtn} ${styles.desktopOnly} ${styles.headerMeet}`}
            href={MEET_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agenda una reunión
          </Link>
          <button
            type="button"
            className={styles.menuBtn}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        id="site-menu"
        className={`${styles.menuPanel} ${open ? styles.menuPanelOpen : ""}`}
      >
        <nav className={styles.menuNav} aria-label="Menú">
          {MENU_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={styles.menuLink}
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
          <a className={styles.menuLink} href={APP_URL} onClick={close}>
            Iniciar sesión
          </a>
        </nav>
        <Link
          className={`${styles.btn} ${styles.btnSecondary} ${styles.headerBtn} ${styles.menuCta}`}
          href={MEET_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
        >
          Agenda una reunión
        </Link>
      </div>
    </header>
  );
}
