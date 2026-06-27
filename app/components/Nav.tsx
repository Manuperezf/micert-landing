export default function Nav() {
  return (
    <nav>
      <div className="wrap nav-row">
        <a className="brand" href="/"><img className="logo" src="/logo.svg" alt="MiCert" /></a>
        <div className="nav-links">
          <a href="/#como">Cómo funciona</a>
          <a href="/precios">Precios</a>
          <a href="/recursos">Recursos</a>
        </div>
        <div className="nav-cta">
          <a className="btn ghost" href="https://app.micert.cl">Iniciar sesión</a>
          <a className="btn primary" href="/demo">Agenda una demo</a>
        </div>
      </div>
    </nav>
  );
}
