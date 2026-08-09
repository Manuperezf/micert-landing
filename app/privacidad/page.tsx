import Footer from "../components/Footer";
import Nav from "../components/Nav";

export const metadata = {
  title: "Política de Privacidad | MiCert",
  description:
    "Política de Privacidad de la plataforma MiCert, operada por MiCert Digital SpA, conforme a la Ley N° 19.628 según su texto modificado por la Ley N° 21.719.",
  robots: { index: false, follow: false },
};

export default function PrivacidadPage() {
  return (
    <div className="legal-page">
      <style>{`
        .legal-page{background:#ffffff;color:#262626;font-family:var(--font-inter-tight),system-ui,sans-serif;line-height:1.6}
        .legal-wrap{max-width:820px;margin:0 auto;padding:40px 20px 80px}
        .legal-wrap h1{font-size:32px;line-height:1.2;margin:0 0 6px;letter-spacing:-.01em}
        .legal-wrap .updated{color:#9a9890;font-size:14px;margin:0 0 28px}
        .legal-wrap h2{font-size:20px;margin:36px 0 10px;letter-spacing:-.01em}
        .legal-wrap h3{font-size:16px;margin:22px 0 8px}
        .legal-wrap p{margin:0 0 14px;color:#2f2f2f}
        .legal-wrap ul{margin:0 0 14px;padding-left:20px}
        .legal-wrap li{margin:0 0 7px}
        .legal-wrap a{color:#0c59f2}
        .legal-summary{background:#f2f1e9;border:1px solid #e6e4da;border-radius:14px;padding:22px 24px;margin:0 0 32px}
        .legal-summary h2{margin-top:0}
      `}</style>

      <Nav />

      <div className="legal-wrap">
        <h1>Política de Privacidad</h1>
        <p className="updated">Última actualización: 9 de agosto de 2026</p>

        <div className="legal-summary">
          <h2>En resumen</h2>
          <p>Esta política explica cómo MiCert trata los datos personales. En pocas palabras:</p>
          <ul>
            <li><strong>Qué datos tomamos:</strong> datos de identificación de la organización Cliente, de los usuarios que esta habilita en la plataforma y de los titulares de certificados (nombre, documento de identidad —RUT o pasaporte—, correo electrónico y datos del curso).</li>
            <li><strong>Para qué los usamos:</strong> emitir, distribuir y validar certificados digitales, cumplir la normativa SENCE y prestar soporte.</li>
            <li><strong>Con quién los compartimos:</strong> únicamente con los proveedores estrictamente necesarios para operar el servicio y con autoridades cuando la ley lo exige. No vendemos datos.</li>
            <li><strong>Quién es responsable de qué:</strong> cuando una organización Cliente emite certificados a sus participantes, la organización es Responsable y MiCert es Encargado.</li>
            <li><strong>Tus derechos:</strong> acceso, rectificación, supresión, oposición, portabilidad y bloqueo, además del derecho a ser informado.</li>
            <li><strong>Cómo contactarnos:</strong> hola@micert.cl</li>
          </ul>
          <p>Lo que sigue es el desarrollo legal completo.</p>
        </div>

        <h2>1. Identificación del Prestador</h2>
        <p>MiCert es una plataforma SaaS de emisión, gestión, distribución y validación de certificados digitales, operada por:</p>
        <p><strong>Razón social:</strong> MiCert Digital SpA</p>
        <p><strong>RUT:</strong> 78.454.247-5</p>
        <p><strong>Domicilio:</strong> Antonio Bellet N° 193, oficina 1210, comuna de Providencia, Región Metropolitana de Santiago</p>
        <p><strong>Sitio web:</strong> www.micert.cl</p>
        <p><strong>Email de contacto:</strong> hola@micert.cl</p>
        <p>El servicio se presta en idioma español y opera bajo la legislación de la República de Chile.</p>
        <p>Esta Política se rige por la Ley N° 19.628 sobre protección de la vida privada, según su texto modificado por la Ley N° 21.719 (publicada el 13 de diciembre de 2024, con aplicación plena a partir del 1 de diciembre de 2026), que además crea la Agencia de Protección de Datos Personales. Las referencias a artículos que se hacen en esta Política corresponden a la Ley N° 19.628 según dicho texto modificado.</p>

        <h2>2. Roles en el Tratamiento de Datos Personales</h2>
        <p>MiCert opera bajo dos roles distintos según el tipo de dato y el contexto. Esta distinción es esencial y determina las obligaciones de cada parte frente a los titulares.</p>
        <h3>2.1 MiCert como Responsable del Tratamiento</h3>
        <p>MiCert actúa como Responsable respecto de los datos de la organización Cliente y de los usuarios que esta habilita en la plataforma (nombre, RUT, correo electrónico, teléfono, rol asignado y datos de facturación), de los datos de uso de la plataforma y registros de auditoría asociados a esos usuarios, y de los datos recopilados con fines de gestión comercial, soporte y mejora del servicio. En estos casos, MiCert determina los fines y medios del tratamiento conforme a esta Política.</p>
        <h3>2.2 MiCert como Encargado del Tratamiento</h3>
        <p>MiCert actúa como Encargado respecto de los datos personales de los titulares de certificados (participantes cuyos certificados emite el Cliente) y de las demás personas cuyos datos el Cliente incorpore al servicio, según la Sección 3.2. En estos casos, el Responsable es el Cliente que contrata el servicio; MiCert procesa estos datos únicamente bajo las instrucciones documentadas del Cliente; y las solicitudes de derechos de los titulares se gestionan según la Sección 7.2.</p>
        <h3>2.3 Contrato de Encargo de Tratamiento de Datos (DPA)</h3>
        <p>Conforme al artículo 15 bis, cuando MiCert actúa como Encargado debe existir un Contrato de Encargo de Tratamiento de Datos (DPA) firmado entre el Cliente Responsable y MiCert. Este contrato es obligatorio legalmente, forma parte integral del acuerdo y define el objeto del encargo, su duración, la finalidad del tratamiento, el tipo de datos tratados, las categorías de titulares y los derechos y obligaciones de las partes. MiCert pone una plantilla a disposición de sus clientes, que puede solicitarse a hola@micert.cl.</p>
        <h3>2.4 Subcontratación de Servicios (Subprocesadores)</h3>
        <p>Cuando MiCert actúa como Encargado, recurre a subprocesadores estrictamente necesarios para la prestación del servicio, identificados en la Sección 6 (actualmente Supabase, Vercel, Resend y Sentry). Cuando MiCert incorpore nuevos subprocesadores con acceso a datos personales del Cliente, lo notificará con anticipación razonable; el Cliente podrá objetar fundadamente y, de no llegar a acuerdo, dar término al contrato sin penalidad. Todos los subprocesadores están obligados contractualmente a aplicar medidas de seguridad equivalentes.</p>

        <h2>3. Información que Recopilamos</h2>
        <h3>3.1 Datos de Organizaciones Clientes</h3>
        <p>Cuando una organización se registra, recopilamos: nombre o razón social, RUT de la empresa, dirección, teléfono de contacto y datos de los usuarios que la organización habilita en la plataforma (nombre completo, correo electrónico, teléfono, RUT y rol asignado).</p>
        <h3>3.2 Datos de Titulares de Certificados y de Terceros Aportados por el Cliente</h3>
        <p>Para emitir certificados por encargo del Cliente, procesamos los siguientes datos de los participantes: nombre completo; documento de identidad, que puede ser la cédula nacional de identidad (RUT) o el número de pasaporte, según el tipo que el Cliente declare al cargar los datos; correo electrónico, cuando el Cliente lo aporte; actividad de capacitación, fechas, horas y asistencia; calificación o resultado global y resultados por módulo de evaluación cuando el Cliente los configure; los códigos que el Cliente incorpore al certificado, incluido el código SENCE del curso; y el estado del certificado, esto es, su código único de verificación, su fecha de emisión, su fecha de vigencia o caducidad, su eventual revocación y las reemisiones asociadas.</p>
        <p>El Cliente puede además incorporar al servicio datos de otras personas: el nombre, cargo y firma gráfica de los relatores o firmantes que aparecen en el diseño del certificado, y el nombre y correo electrónico de la persona de contacto que registre respecto de una empresa mandante. Todos estos datos son aportados por el Cliente y procesados bajo su responsabilidad y sus instrucciones.</p>
        <h3>3.3 Datos de Uso de la Plataforma</h3>
        <p>Dirección IP, tipo de navegador y dispositivo, fecha y hora de acceso, y acciones realizadas en la plataforma (registro de auditoría). Además, la plataforma registra información técnica sobre errores de funcionamiento, configurada para excluir el nombre, el documento de identidad, el correo electrónico y el contenido de los certificados.</p>
        <h3>3.4 Base Legal para el Tratamiento</h3>
        <p>Tratamos los datos bajo las siguientes bases de licitud reconocidas por la ley: ejecución de contrato; cumplimiento de una obligación legal (normativa SENCE, obligaciones tributarias y requisitos de auditoría); interés legítimo (seguridad, prevención de fraudes y mejora de la plataforma); consentimiento del titular cuando aplique; e instrucciones del Responsable cuando MiCert actúa como Encargado.</p>

        <h2>4. Cómo Usamos la Información</h2>
        <p>Utilizamos los datos personales exclusivamente para prestar el servicio (generar, distribuir y validar certificados), mantener trazabilidad y auditoría, facilitar el cumplimiento normativo ante SENCE, prestar soporte técnico, mejorar el servicio mediante análisis agregado, y enviar comunicaciones del servicio (notificaciones sobre la cuenta, actualizaciones o cambios en los términos).</p>
        <p>No usamos los datos para marketing no solicitado, venta o transferencia a terceros con fines comerciales, perfilamiento comercial sin consentimiento, ni decisiones automatizadas que produzcan efectos jurídicos o significativamente similares sobre los titulares.</p>

        <h2>5. Almacenamiento, Seguridad y Transferencias Internacionales</h2>
        <h3>5.1 Ubicación de los Datos e Infraestructura</h3>
        <p>MiCert se apoya en proveedores de infraestructura cloud profesionales para operar la plataforma: la base de datos, la autenticación y el almacenamiento de archivos se gestionan a través de Supabase; el alojamiento y la entrega de la aplicación, a través de Vercel; el envío de correos electrónicos transaccionales (notificaciones y enlaces de verificación a los titulares), a través de Resend; y el monitoreo técnico de errores de la aplicación, a través de Sentry, configurado para no recibir datos identificatorios de los titulares. Los datos se alojan en servidores ubicados fuera de Chile, principalmente en Estados Unidos.</p>
        <h3>5.2 Transferencia Internacional de Datos</h3>
        <p>El almacenamiento de datos en infraestructura ubicada fuera de Chile constituye una transferencia internacional de datos personales, que se realiza procurando cumplir los requisitos de los artículos 27 y 28, mediante garantías contractuales con los proveedores de infraestructura, medidas técnicas y organizativas equivalentes a las exigidas en Chile, y las cláusulas contractuales tipo que apruebe la Agencia de Protección de Datos Personales una vez que estén disponibles.</p>
        <p>Asimismo, cuando un visitante nos contacta a través de WhatsApp Business, sus datos de contacto y el contenido del mensaje son tratados por Meta Platforms, Inc., con infraestructura ubicada fuera de Chile. Dicha transferencia se ampara en el consentimiento del titular al iniciar voluntariamente la conversación por ese canal.</p>
        <h3>5.3 Medidas de Seguridad</h3>
        <ul>
          <li><strong>Cifrado en tránsito:</strong> todas las comunicaciones entre el navegador y los servidores están protegidas mediante SSL/TLS.</li>
          <li><strong>Cifrado en reposo a nivel de infraestructura:</strong> los datos almacenados se cifran en los servidores del proveedor de infraestructura.</li>
          <li><strong>Control de acceso:</strong> el acceso a los datos está restringido mediante autenticación y reglas de seguridad a nivel de base de datos, con segregación lógica entre organizaciones Clientes.</li>
          <li><strong>Roles diferenciados:</strong> dentro de la cuenta de cada Cliente, los usuarios pueden tener permisos distintos, incluido un rol de solo lectura sin capacidad de escritura.</li>
          <li><strong>Enlaces de acceso con vigencia limitada</strong> para los archivos almacenados.</li>
          <li><strong>Inmutabilidad de los certificados emitidos:</strong> los datos de un certificado quedan fijados al momento de su emisión y no admiten edición posterior. Toda corrección se efectúa mediante revocación y reemisión, decisión que corresponde al Cliente.</li>
          <li><strong>Limitación de frecuencia de consultas</strong> sobre la página pública de verificación.</li>
          <li><strong>Respaldos:</strong> copias de seguridad automatizadas del proveedor de infraestructura.</li>
          <li><strong>Pruebas automatizadas</strong> ejecutadas antes de cada puesta en producción.</li>
        </ul>
        <p><strong>Sobre la página de verificación pública.</strong> La verificación por terceros es la finalidad misma del servicio, y por su naturaleza la página muestra datos del titular a quien acceda al enlace o escanee el código QR. Se muestran el nombre del titular, su documento de identidad, la actividad de capacitación, sus fechas y horas, el estado de vigencia del certificado, la identificación del Cliente como emisor y, cuando el Cliente lo haya configurado, la empresa mandante del curso. El acceso se realiza mediante un identificador único no enumerable (no adivinable), y la plataforma no ofrece listados, índices ni buscadores públicos que permitan recorrer los certificados emitidos por un Cliente. MiCert evalúa de forma continua medidas adicionales de minimización de datos en esta página, en línea con la protección de datos desde el diseño y por defecto.</p>
        <h3>5.4 Notificación de Brechas de Seguridad</h3>
        <p>En caso de una vulneración de seguridad que afecte datos personales, conforme al artículo 14 sexies, MiCert actúa según su rol:</p>
        <ul>
          <li><strong>Cuando MiCert es Encargado</strong> (datos de titulares de certificados aportados por el Cliente): notifica al Cliente Responsable sin dilación indebida, para que este efectúe las comunicaciones que correspondan a la Agencia y a los titulares.</li>
          <li><strong>Cuando MiCert es Responsable</strong> (datos de cuenta y de los usuarios habilitados por el Cliente): notifica a la Agencia de Protección de Datos Personales a la brevedad posible, y a los titulares afectados sin dilación indebida cuando exista riesgo para sus derechos.</li>
        </ul>
        <p>En ambos casos la notificación incluirá la naturaleza de la vulneración, los datos afectados, las posibles consecuencias y las medidas adoptadas. MiCert mantiene un registro de las vulneraciones de que toma conocimiento.</p>
        <h3>5.5 Período de Retención</h3>
        <p>MiCert conserva los datos personales solo durante el tiempo necesario para cumplir las finalidades de esta Política y las obligaciones legales aplicables. No conservamos datos de forma indefinida: una vez cumplidos los plazos legales correspondientes, y cuando no exista otro fundamento legal que justifique su conservación, los datos se suprimen, anonimizan o bloquean.</p>
        <p><strong>Certificados y registros de trazabilidad:</strong> se conservan mientras exista una obligación legal que lo justifique, principalmente la normativa SENCE de trazabilidad y auditoría de los certificados de capacitación y las obligaciones tributarias asociadas, que conforme a los plazos de prescripción aplicables pueden extenderse hasta seis años. Vencidos esos plazos, los registros se anonimizan o se suprimen.</p>
        <p><strong>Certificados revocados:</strong> la revocación de un certificado es un cambio de estado y no una eliminación. El registro se conserva con estado revocado para que quien consulte su código pueda constatar que el certificado dejó de ser válido, lo que es necesario para la propia finalidad de verificación y para la trazabilidad exigida al Cliente.</p>
        <p><strong>Datos de cuenta y de los usuarios habilitados por el Cliente:</strong> tras la cancelación de la cuenta, durante los días 1 a 30 el Cliente puede solicitar la exportación de sus datos; los días 31 a 90 constituyen un período de gracia; a partir del día 90 se suprimen los datos operacionales, salvo aquellos cuya conservación exija la ley por los plazos legales correspondientes. La verificación pública de los certificados ya emitidos puede mantenerse después del término del contrato, en función de esas mismas obligaciones de trazabilidad.</p>

        <h2>6. Compartir Información con Terceros</h2>
        <p>MiCert no vende, alquila ni transfiere datos personales a terceros con fines comerciales propios. Solo compartimos información con:</p>
        <ul>
          <li><strong>Proveedores de infraestructura necesarios para operar el servicio:</strong> Supabase (base de datos y almacenamiento), Vercel (alojamiento), Resend (envío de correo transaccional) y Sentry (monitoreo técnico de errores, sin datos identificatorios de los titulares), bajo contrato de tratamiento.</li>
          <li><strong>En el sitio de marketing,</strong> proveedores de formularios, analítica, protección antispam y atención: HubSpot (formulario de contacto y demo), Google Analytics (analítica), Google reCAPTCHA (protección del formulario contra envíos automatizados) y WhatsApp Business, operado por Meta Platforms, Inc. (canal de contacto directo con visitantes) (ver Secciones 5 y 8).</li>
          <li><strong>Plataformas profesionales de terceros, solo por decisión del propio titular.</strong> La página de verificación ofrece al titular la posibilidad de agregar su certificado a su perfil profesional. Esa acción la inicia el titular desde su navegador y bajo su exclusiva decisión; MiCert no comunica datos a esas plataformas por cuenta propia ni del Cliente, y no responde del tratamiento que ellas efectúen.</li>
          <li><strong>Autoridades,</strong> cuando sea obligatorio por ley u orden judicial, incluida la Agencia de Protección de Datos Personales.</li>
          <li><strong>Cuando sea necesario</strong> para prevenir fraude o proteger la seguridad de la plataforma.</li>
        </ul>
        <p>Todos los proveedores con acceso a datos personales están obligados a mantener la confidencialidad, aplicar medidas de seguridad equivalentes y procesar los datos solo según las instrucciones recibidas.</p>

        <h2>7. Derechos de los Titulares</h2>
        <h3>7.1 Catálogo de Derechos</h3>
        <p>Conforme a la ley, los titulares tienen los siguientes derechos: acceso, rectificación, supresión, oposición, portabilidad y bloqueo del tratamiento, además del derecho a ser informados sobre el tratamiento de sus datos. MiCert no adopta decisiones basadas únicamente en tratamiento automatizado que produzcan efectos jurídicos o significativamente similares sobre los titulares; de existir alguna, el titular tiene derecho a ser informado de ello conforme al deber de información del artículo 14 ter.</p>
        <h3>7.2 Cómo Ejercer los Derechos</h3>
        <p><strong>Caso 1 — Datos aportados por una organización Cliente (titulares de certificados):</strong> si los datos del titular fueron aportados por una organización Cliente (por ejemplo, un certificado emitido por un OTEC), el Cliente es Responsable del Tratamiento y MiCert actúa como Encargado. El titular puede dirigirse directamente al Cliente Responsable. Si el titular escribe a hola@micert.cl, MiCert reenviará la solicitud al Cliente Responsable dentro de cinco días hábiles e informará al titular de este reenvío, y asistirá técnicamente al Cliente en la atención de la solicitud cuando este lo requiera.</p>
        <p><strong>Caso 2 — Datos donde MiCert es Responsable (usuarios de la cuenta, datos de cuenta):</strong> el titular debe enviar un email a hola@micert.cl indicando su nombre completo y RUT, el derecho que desea ejercer, una descripción específica de la solicitud y un documento que acredite su identidad. Plazos: acuse de recibo dentro de cinco días hábiles; respuesta dentro del plazo establecido por la ley y su reglamento.</p>
        <p><strong>Importante.</strong> Los certificados emitidos son inmutables por diseño, de modo que la página de verificación refleje exactamente lo que el Cliente certificó. En consecuencia, una solicitud de rectificación referida a un certificado ya emitido se atiende mediante su revocación y la emisión de uno nuevo con los datos corregidos, decisión que corresponde adoptar al Cliente Responsable. Del mismo modo, la eliminación de datos puede afectar la trazabilidad de certificados emitidos, el cumplimiento de obligaciones normativas (SENCE, auditorías) y la verificación posterior de certificados. MiCert informará al titular de cualquier limitación antes de procesar su solicitud, ya que en algunos casos existe obligación legal de conservar ciertos datos.</p>
        <h3>7.3 Derecho a Reclamar</h3>
        <p>Si el titular considera que sus derechos han sido vulnerados, puede presentar un reclamo ante la Agencia de Protección de Datos Personales, sin perjuicio de las acciones judiciales que correspondan.</p>

        <h2>8. Cookies y Tecnologías Similares</h2>
        <p>En la plataforma (app.micert.cl) utilizamos únicamente cookies esenciales: de sesión (para mantener la sesión activa), de seguridad (para proteger la cuenta y prevenir ataques) y funcionales (para recordar preferencias de visualización).</p>
        <p>En el sitio de marketing (micert.cl) utilizamos Google Analytics para medir el uso del sitio de forma agregada y mejorar su contenido, lo que puede instalar cookies de analítica. El formulario de contacto y demo está protegido con Google reCAPTCHA, que puede instalar cookies y recabar datos de navegación con el solo objeto de distinguir a una persona de un envío automatizado. El contacto por WhatsApp se realiza mediante un enlace directo que abre la aplicación de WhatsApp fuera de nuestro sitio, por lo que no instala cookies en micert.cl. El usuario puede configurar su navegador para rechazar cookies; rechazar las cookies esenciales puede afectar la funcionalidad de la plataforma, especialmente las funciones de sesión y seguridad.</p>
        <p>MiCert no utiliza cookies de publicidad de terceros ni de perfilamiento comercial.</p>

        <h2>9. Datos de Menores de Edad</h2>
        <p>MiCert es una plataforma B2B diseñada para uso corporativo y no recopila datos directamente de menores de 18 años. Cuando una organización Cliente emite certificados para programas dirigidos a menores, MiCert puede procesar datos de menores aportados por el Cliente, exclusivamente bajo sus instrucciones. En estos casos, el Cliente es responsable de haber obtenido las autorizaciones exigidas por el artículo 16 quáter:</p>
        <ul>
          <li><strong>Para los niños y niñas (menores de 14 años):</strong> el consentimiento de sus padres, representantes legales o de quien tenga a su cargo su cuidado personal.</li>
          <li><strong>Los adolescentes (entre 14 y 18 años):</strong> sus datos se tratan conforme a las normas de autorización aplicables a los adultos, salvo sus datos sensibles cuando son menores de 16 años, que requieren el consentimiento de sus padres o representantes legales.</li>
        </ul>
        <p>Todo tratamiento de datos de niños, niñas y adolescentes atiende a su interés superior y al respeto de su autonomía progresiva. Si se detecta procesamiento de datos de un menor sin autorización adecuada, contactar a hola@micert.cl.</p>

        <h2>10. Delegado de Protección de Datos</h2>
        <p>Conforme al artículo 50, el responsable de datos puede designar un delegado de protección de datos. Su designación es voluntaria y, por las características del servicio de MiCert, no constituye una obligación legal. Como empresa de menor tamaño, MiCert puede asumir estas funciones a través de sus socios o máximas autoridades, conforme lo permite el mismo artículo. MiCert evalúa periódicamente la conveniencia de formalizar esta designación según evolucione el volumen y la naturaleza del tratamiento. Las consultas sobre privacidad deben dirigirse a hola@micert.cl.</p>

        <h2>11. Modificaciones a esta Política</h2>
        <p>MiCert puede actualizar esta Política para reflejar cambios en las prácticas de tratamiento, nuevos requisitos legales (incluida la entrada en aplicación plena de la Ley N° 21.719 en diciembre de 2026), mejoras del servicio o actualizaciones de seguridad. Ante cambios sustanciales, MiCert notificará con al menos 15 días hábiles de anticipación mediante email a la dirección registrada o aviso en la plataforma. Los cambios menores solo actualizarán la fecha de &quot;Última actualización&quot;. El uso continuado después de las modificaciones constituye aceptación.</p>

        <h2>12. Relación con los Términos y Condiciones</h2>
        <p>Esta Política de Privacidad complementa los Términos y Condiciones de Uso. En caso de conflicto entre ambos documentos en materia de privacidad y protección de datos, prevalece esta Política. Ambos documentos deben leerse conjuntamente y forman parte del acuerdo entre el Cliente y MiCert.</p>

        <h2>13. Contacto</h2>
        <p>Puedes contactarnos en hola@micert.cl o por WhatsApp al +56 9 5068 6974.</p>

        <h2>14. Marco Legal Aplicable</h2>
        <ul>
          <li>Ley N° 19.628 sobre protección de la vida privada, según su texto modificado por la Ley N° 21.719, que regula la protección y el tratamiento de los datos personales y crea la Agencia de Protección de Datos Personales.</li>
          <li>Ley N° 19.799 sobre documentos electrónicos, firma electrónica y servicios de certificación.</li>
          <li>Normativa SENCE para la retención y auditoría de certificados de capacitación.</li>
        </ul>

        <p style={{ marginTop: 28, color: "#65645d" }}>Al usar MiCert, el titular confirma que ha leído, comprendido y aceptado esta Política de Privacidad en su totalidad.</p>
      </div>

      <Footer />
    </div>
  );
}
