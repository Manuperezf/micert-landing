export default function Nav() {
  return (
    <nav>
      <div className="wrap nav-row">
        <a className="brand" href="/"><img className="logo" src="/logo.svg" alt="MiCert" /></a>
        <div className="nav-links">
          <a href="/#como">Cómo funciona</a>
          <a href="/#planes">Planes</a>
        </div>
        <div className="nav-cta">
          <a className="btn primary" href="/demo">Solicita una demo</a>
        </div>
      </div>
    </nav>
  );
}
