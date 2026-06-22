export default function Home() {
  return (
    <>
      <nav>
        <div className="wrap nav-row">
          <a className="brand" href="#"><span className="seal"></span>MiCert</a>
          <div className="nav-links">
            <a href="#como">Cómo funciona</a>
            <a href="#planes">Planes</a>
          </div>
          <div className="nav-cta">
            <a className="btn ghost" href="https://micert.vercel.app/" target="_blank" rel="noopener">Ver la demo</a>
            <a className="btn primary" href="#contacto">Solicita una demo</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Certificados digitales para OTEC</span>
            <h1>Emite certificados verificables en minutos, no en horas.</h1>
            <p className="lead">MiCert convierte tu lista de Excel en certificados digitales con código QR único, listos para validar. Sin PDF editables, sin diseño manual, sin conocimientos técnicos.</p>
            <div className="actions">
              <a className="btn primary" href="#contacto">Solicita una demo</a>
              <a className="btn link" href="https://micert.vercel.app/" target="_blank" rel="noopener">Ver la demo en vivo <span className="arr">→</span></a>
            </div>
          </div>
          <div className="mock">
            <div className="mock-bar" aria-hidden="true"><i></i><i></i><i></i></div>
            <div className="cert">
              <h4>Manejo de extintores</h4>
              <div className="sub">Prevención de riesgos · 16 horas cronológicas</div>
              <div className="cert-row">
                <div className="cert-meta">Otorgado a<br/><b>María Fernanda Soto Reyes</b><br/>RUT 16.482.903-4<br/>Emitido el 12 de junio de 2026</div>
                <div className="qr-wrap">
                  <img className="qr-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAAEiCAIAAADS3EjhAAAFFklEQVR4nO3dQW7bMBBA0broXXL/4+Q0ytYrog37MZTy3l6W4uiDCw/I13Vdv4DS7+kHgOeTGeRkBjmZQU5mkJMZ5GQGOZlBTmaQkxnkZAY5mUFOZpCTGeRkBjmZQU5mkJMZ5GQGuT87F398fPyv5zjE5+fnt69dfxs7n3zmfde8G++sZpCTGeRkBjmZQU5mkJMZ5GQGOZlBTmaQ25oCWZuaP1jbmU44c86j0/29z3s31qxmkJMZ5GQGOZlBTmaQkxnkZAY5mUFOZpALp0DWul/c77j7xfqZnzdfsva8d8NqBjmZQU5mkJMZ5GQGOZlBTmaQkxnkZAa5sSmQn2Y9fzA19zD1VD+N1QxyMoOczCAnM8jJDHIyg5zMICczyMkMcqZA/sGZ55ic+VS8s5pBTmaQkxnkZAY5mUFOZpCTGeRkBjmZQW5sCuR5swvdiTA799355Kn/0fPeDasZ5GQGOZlBTmaQkxnkZAY5mUFOZpCTGeTCKZDnnSeyM2+x82109+2uXXveu7FmNYOczCAnM8jJDHIyg5zMICczyMkMcjKD3NYUyPP2bOh0MyI7uvt6N95ZzSAnM8jJDHIyg5zMICczyMkMcjKDnMwgtzUF0u0V0bnjMz9vguTMfUS6/77VDHIyg5zMICczyMkMcjKDnMwgJzPIyQxyr+u6Rm48dbrK1JzH1PTJmd/VmSfCmAKBG5MZ5GQGOZlBTmaQkxnkZAY5mUFOZpAL9wLpPnlqJ4md+565y8iZdmaAdq7t3jqrGeRkBjmZQU5mkJMZ5GQGOZlBTmaQkxnktqZAdkxNRZy5F8jaHZ/5zPtOna1jNYOczCAnM8jJDHIyg5zMICczyMkMcjKD3NgUyNRUxJlnkazt7FHRfVfPO7WnYzWDnMwgJzPIyQxyMoOczCAnM8jJDHIyg1w4BXLmrMYdZxe6c0y6M1Cmdt1Y6/7eNasZ5GQGOZlBTmaQkxnkZAY5mUFOZpCTGeRuuRdI98lnzi6cOU/T3ffMfWJ2PtlqBjmZQU5mkJMZ5GQGOZlBTmaQkxnkZAa5sSmQtTvu2LFjao+KM8+L2bl26hSbNasZ5GQGOZlBTmaQkxnkZAY5mUFOZpCTGeRe13V9++Kp2YWpX/rvuCfHmbub7Jg642aH1QxyMoOczCAnM8jJDHIyg5zMICczyMkMcltTID9NN2HQTWOcOROzduYkxw6rGeRkBjmZQU5mkJMZ5GQGOZlBTmaQkxnktk6EueNOEmvrCYMz5w92nqqbEbnjJEf3zFYzyMkMcjKDnMwgJzPIyQxyMoOczCAnM8htTYGs3fGX/qn7Tp3bMrUHyZm6Z7aaQU5mkJMZ5GQGOZlBTmaQkxnkZAY5mUEunAJZM3/w96ZmRNbO3AnmzD1IrGaQkxnkZAY5mUFOZpCTGeRkBjmZQU5mkBubAuHdzuzCzozIzlTEzhRIN43RTcw4EQaOJjPIyQxyMoOczCAnM8jJDHIyg5zMIGcK5AjdJMfUJ3e6SY5udxOrGeRkBjmZQU5mkJMZ5GQGOZlBTmaQkxnkxqZAnnduyx1PSOmu7dzxzbGaQU5mkJMZ5GQGOZlBTmaQkxnkZAY5mUEunAI5c4Zgx9TpKjufPPVUd/yuOlYzyMkMcjKDnMwgJzPIyQxyMoOczCAnM8i9ruuafgZ4OKsZ5GQGOZlBTmaQkxnkZAY5mUFOZpCTGeRkBjmZQU5mkJMZ5GQGOZlBTmaQkxnkZAY5mUHuC77AaJiU1/Q9AAAAAElFTkSuQmCC" alt="Código QR para verificar un certificado de demostración" />
                  <span className="qr-hint">Escanéame ✓</span>
                </div>
              </div>
            </div>
            <div className="verify" aria-hidden="true">
              <div className="vleft"><span className="badge ok"><span className="dot"></span>Vigente</span><span className="vcode">ED12-837B-D96F</span></div>
              <span className="vcode">Verificado</span>
            </div>
          </div>
        </div>
      </header>

      <section className="band">
        <div className="wrap">
          <div className="shot">
            <div className="chrome"><i></i><i></i><i></i><span className="addr">app.micert.cl</span></div>
            {/* REEMPLAZAR por: <img src="/landing/panel-principal.png" alt="Panel principal de MiCert" /> */}
            <div className="ph wide"><span className="lbl">Captura 1 · Panel principal</span><span className="dim">dashboard con métricas y certificados recientes · ~1440×810</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="producto">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">El problema</span>
            <h2>El PDF editable es un problema de confianza.</h2>
            <p className="lead">Un certificado que cualquiera puede modificar no prueba nada. Armarlos a mano consume horas. Y cuando llega una auditoría, no hay forma simple de demostrar qué se emitió, a quién y cuándo.</p>
          </div>
          <div className="contrast">
            <div className="crow before"><span className="tag">Hoy</span><p>Un archivo que cualquiera edita. Una tarde armándolos uno por uno. Nada que mostrar cuando preguntan.</p></div>
            <div className="crow after"><span className="tag">Con MiCert</span><p>Un original validable por QR. El curso completo emitido de una pasada. Registro claro de todo lo emitido.</p></div>
          </div>
        </div>
      </section>

      <section className="section tight alt" id="como">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Cómo funciona</span>
            <h2>De Excel a certificado emitido, en tres pasos.</h2>
            <p className="lead">El diseño se define una sola vez. Después, cada curso es cargar, revisar y emitir.</p>
          </div>
          <div className="steps">
            <div className="step">
              <span className="n">Paso 01</span><h3>Importa desde Excel</h3>
              <p>Sube la planilla con RUT, nombre, correo y calificación. MiCert prepara un certificado por participante.</p>
              <div className="shot"><div className="ph step"><span className="lbl">Captura 2 · Importar Excel</span><span className="dim">~960×720</span></div></div>
            </div>
            <div className="step">
              <span className="n">Paso 02</span><h3>Diseña una vez</h3>
              <p>Editor visual con campos arrastrables, firmas y QR. Defines el formato y lo reutilizas en cada curso.</p>
              <div className="shot"><div className="ph step"><span className="lbl">Captura 3 · Editor de diseño</span><span className="dim">~960×720</span></div></div>
            </div>
            <div className="step">
              <span className="n">Paso 03</span><h3>Emite a todo el curso</h3>
              <p>Generas los certificados de una vez. Descarga individual en PDF o el curso completo en un ZIP.</p>
              <div className="shot"><div className="ph step"><span className="lbl">Captura 4 · Certificados emitidos</span><span className="dim">~960×720</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="verificacion">
        <div className="wrap split">
          <div className="copy">
            <span className="eyebrow">Verificación</span>
            <h2>Cualquiera puede comprobar que es real.</h2>
            <p className="lead">Quien recibe el certificado escanea el QR o ingresa el código, y llega a una página pública con el estado actual: vigente, por vencer, vencido o anulado. Sin crear cuenta, sin fricción.</p>
            <ul>
              <li><span className="ck">✓</span><span>El <b>emisor es tu OTEC</b>, no MiCert. Tu nombre respalda el documento.</span></li>
              <li><span className="ck">✓</span><span>Estado <b>en tiempo real</b>: si anulas un certificado, la página deja de mostrarlo como válido.</span></li>
              <li><span className="ck">✓</span><span>Botón para <b>agregar a LinkedIn</b> directo desde la verificación.</span></li>
            </ul>
          </div>
          <div className="vpanel" aria-hidden="true">
            <div className="url">app.micert.cl/verificar/ed12-837b-d96f</div>
            <div className="vhead"><div className="vname">Manejo de extintores</div><span className="badge ok"><span className="dot delay"></span>Vigente</span></div>
            <div className="vrow"><span>Participante</span><b>María Fernanda Soto Reyes</b></div>
            <div className="vrow"><span>RUT</span><b>16.482.903-4</b></div>
            <div className="vrow"><span>Horas</span><b>16 horas cronológicas</b></div>
            <div className="vrow"><span>Emitido</span><b>12 de junio de 2026</b></div>
            <div className="vrow"><span>Válido hasta</span><b>12 de junio de 2028</b></div>
            <div className="vrow"><span>Código</span><b className="vcode code-ink">ED12-837B-D96F</b></div>
          </div>
        </div>
      </section>

      <section className="section tight alt">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">Una plataforma completa</span><h2>Emite, valida y controla, en el mismo lugar.</h2></div>
          <div className="caps-grid">
            <div className="cap">
              <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V4"/><path d="m8 8 4-4 4 4"/><path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/></svg></div>
              <h3>Carga tu lista en segundos</h3><p>Importa participantes desde Excel: RUT, nombre, correo y nota.</p>
            </div>
            <div className="cap">
              <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg></div>
              <h3>Diseña tu certificado</h3><p>Campos arrastrables, firmas y QR. Se define una vez por OTEC.</p>
            </div>
            <div className="cap">
              <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="13" height="13" rx="2"/><path d="M4 16V5a2 2 0 0 1 2-2h11"/></svg></div>
              <h3>Emite el curso completo</h3><p>Todos de una vez. Descarga en PDF o en un ZIP.</p>
            </div>
            <div className="cap">
              <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="m9 12 2 2 4-4"/></svg></div>
              <h3>Validable por QR</h3><p>Página pública por certificado, con código corto único.</p>
            </div>
            <div className="cap">
              <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/></svg></div>
              <h3>Controla la vigencia</h3><p>Regla por curso. La validez se congela al emitir.</p>
            </div>
            <div className="cap">
              <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/></svg></div>
              <h3>Anula con respaldo</h3><p>Revoca uno o varios. Definitiva y trazable.</p>
            </div>
            <div className="cap">
              <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.4" fill="currentColor" stroke="none"/></svg></div>
              <h3>Estado a simple vista</h3><p>Vigente, por vencer, vencido o anulado, en color.</p>
            </div>
            <div className="cap">
              <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4"/></svg></div>
              <h3>Listo para LinkedIn</h3><p>Tus alumnos publican el certificado en un clic.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="planes">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Planes</span>
            <h2>Planes simples para empezar sin complicarte.</h2>
            <p className="lead">Puedes partir con una demo, validar el flujo con tus propias plantillas y escalar según el volumen de certificados que emitas al mes.</p>
          </div>
          <div className="plans">
            <div className="plan">
              <span className="tier">Básico</span>
              <div className="price">$29.990 <small>+ IVA / mes</small></div>
              <div className="vol">80 certificados al mes</div>
              <ul>
                <li><span className="ck">✓</span>Plantillas reutilizables</li>
                <li><span className="ck">✓</span>Verificación pública con QR</li>
                <li><span className="ck">✓</span>Emisión masiva e historial</li>
                <li><span className="ck">✓</span>1 usuario administrador</li>
              </ul>
              <a className="btn ghost" href="#contacto">Solicita una demo</a>
            </div>
            <div className="plan featured">
              <span className="tier">Estándar · recomendado</span>
              <div className="price">$49.990 <small>+ IVA / mes</small></div>
              <div className="vol">200 certificados al mes</div>
              <ul>
                <li><span className="ck">✓</span>Todo lo del plan Básico</li>
                <li><span className="ck">✓</span>Mayor volumen mensual</li>
                <li><span className="ck">✓</span>Vigencia y anulación por lote</li>
                <li><span className="ck">✓</span>Varios usuarios del equipo</li>
              </ul>
              <a className="btn" href="#contacto">Pedir demo →</a>
            </div>
            <div className="plan">
              <span className="tier">Pro</span>
              <div className="price">$89.990 <small>+ IVA / mes</small></div>
              <div className="vol">500 certificados al mes</div>
              <ul>
                <li><span className="ck">✓</span>Todo lo del plan Estándar</li>
                <li><span className="ck">✓</span>Alto volumen de emisión</li>
                <li><span className="ck">✓</span>Reportes y trazabilidad</li>
                <li><span className="ck">✓</span>Soporte por correo</li>
              </ul>
              <a className="btn ghost" href="#contacto">Solicita una demo</a>
            </div>
          </div>
          <div className="plans-foot">
            <span><b>Demo gratis:</b> 10 certificados para probar el flujo, sin tarjeta.</span>
            <span><b>Packs adicionales:</b> 25, 50 o 100 certificados, vigencia 6 meses.</span>
            <span><b>¿Más volumen?</b> Plan a medida para alto volumen e integraciones.</span>
          </div>
        </div>
      </section>

      <section className="section tight alt">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">Para quién es</span><h2>Hecho para quien firma y emite, no para el área de TI.</h2></div>
          <div className="aud">
            <div className="aud-card"><span className="role">Directores de OTEC</span><h3>Respaldo y trazabilidad</h3><p>Tu nombre va en cada certificado. MiCert te da el registro que necesitas frente a SENCE y a tus clientes, sin planillas sueltas.</p></div>
            <div className="aud-card"><span className="role">Coordinadores administrativos</span><h3>Menos trabajo repetitivo</h3><p>Dejas de armar certificados uno por uno en un editor de PDF. Cargas el curso, emites y, si algo falla, lo corriges sin rehacer todo.</p></div>
          </div>
        </div>
      </section>

      <section className="section sec" id="seguridad">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">Seguridad y datos</span><h2>Cada OTEC ve solo lo suyo.</h2><p className="lead">Los datos de tus participantes son tuyos. MiCert está construido para mantenerlos aislados y bajo control.</p></div>
          <div className="sec-grid">
            <div className="sec-item"><h3>Aislamiento por organización</h3><p>Cada OTEC accede únicamente a sus cursos, participantes y certificados. La separación se aplica a nivel de base de datos.</p></div>
            <div className="sec-item"><h3>Control de acceso</h3><p>Acceso por cuenta y por organización. Quién entra y qué puede hacer se define desde el servidor, no desde el navegador.</p></div>
            <div className="sec-item"><h3>En línea con la Ley 21.719</h3><p>Pensado para operar como encargado de tratamiento de datos, de cara a la plena vigencia de la ley en diciembre de 2026.</p></div>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="wrap">
          <div className="section-head center"><span className="eyebrow">Preguntas frecuentes</span><h2>Lo que más nos preguntan.</h2></div>
          <div className="faq">
            <details name="faq"><summary>¿MiCert es una plataforma de cursos (LMS)? <span className="pm">+</span></summary><p>No. MiCert no dicta ni gestiona cursos en lo pedagógico. Hace una cosa y la hace bien: emitir, diseñar y validar certificados. Convive sin problema con el LMS o el sistema que ya uses.</p></details>
            <details name="faq"><summary>¿Necesito saber de tecnología para usarlo? <span className="pm">+</span></summary><p>No. Si sabes manejar una planilla de Excel, sabes usar MiCert. Cargas la lista, eliges el diseño y emites. El QR, el código y la página de verificación se generan solos.</p></details>
            <details name="faq"><summary>¿Cómo se valida un certificado? <span className="pm">+</span></summary><p>Cada certificado lleva un QR y un código corto. Al escanearlo o ingresar el código se abre una página pública con el estado actual y los datos del curso. No hace falta crear cuenta.</p></details>
            <details name="faq"><summary>¿Sirve para auditorías de SENCE? <span className="pm">+</span></summary><p>MiCert está pensado con la trazabilidad en mente: nada se borra. Los cursos se archivan, los certificados se anulan y la vigencia queda fija desde la emisión. Tienes un registro claro de qué se emitió, a quién y cuándo.</p></details>
            <details name="faq"><summary>¿Qué pasa si emito un certificado con un error? <span className="pm">+</span></summary><p>Lo anulas. La anulación es definitiva y queda registrada; luego emites el corregido. La página de verificación deja de mostrar el anulado como válido al instante.</p></details>
            <details name="faq"><summary>¿Cuánto cuesta? <span className="pm">+</span></summary><p>Tres planes según el volumen mensual: Básico ($29.990 + IVA, 80 certificados), Estándar ($49.990 + IVA, 200) y Pro ($89.990 + IVA, 500). Además, una demo gratis de 10 certificados para partir.</p></details>
          </div>
        </div>
      </section>

      <section className="section final" id="contacto">
        <div className="wrap">
          <h2>Empieza a emitir con confianza.</h2>
          <p>Te mostramos MiCert con un curso real y resolvemos tus dudas en una llamada corta.</p>
          <div className="actions">
            <a className="btn primary" href="mailto:hola@micert.cl?subject=Quiero%20una%20demo%20de%20MiCert">Solicita una demo</a>
            <a className="btn ghost" href="https://micert.vercel.app/" target="_blank" rel="noopener">Ver la demo en vivo</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap foot">
          <a className="brand" href="#"><span className="seal"></span>MiCert</a>
          <div className="fr">
            <a href="#como">Cómo funciona</a><a href="#planes">Planes</a><a href="#contacto">Contacto</a>
            <span>·</span><span>Hecho en Chile</span><span>© 2026 micert.cl</span>
          </div>
        </div>
      </footer>
    </>
  );
}
