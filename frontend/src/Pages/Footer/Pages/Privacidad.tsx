import "./Placeholder.css";

export default function PrivacyPolicy() {
    return (
        <div className="container">
            <h2 className="title">Política de Privacidad</h2>
            <p className="paragraph">
                En CILCA, valoramos tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, 
                divulgamos y protegemos tu información personal cuando visitas o utilizas nuestros servicios.
            </p>
            
            <h2 className="subtitle">1. Información que recopilamos</h2>
            <p className="paragraph">
                Podemos recopilar la siguiente información cuando utilizas nuestros servicios:
            </p>
            <ul className="list">
                <li>Información personal, como tu nombre, dirección de correo electrónico, y teléfono.</li>
                <li>Información sobre el dispositivo, incluyendo la dirección IP, tipo de navegador, etc.</li>
                <li>Información sobre el uso de nuestros servicios.</li>
            </ul>

            <h2 className="subtitle">2. Uso de la información</h2>
            <p className="paragraph">Utilizamos tu información para los siguientes propósitos:</p>
            <ul className="list">
                <li>Proporcionar, operar y mejorar nuestros servicios.</li>
                <li>Comunicarnos contigo para responder a tus consultas o enviarte información importante.</li>
                <li>Personalizar tu experiencia en nuestro sitio.</li>
            </ul>

            <h2 className="subtitle">3. Compartir información</h2>
            <p className="paragraph">
                No compartimos tu información personal con terceros, excepto en los siguientes casos:
            </p>
            <ul className="list">
                <li>Cuando sea necesario para cumplir con la ley.</li>
                <li>Cuando nos des tu consentimiento explícito.</li>
            </ul>

            <h2 className="subtitle">4. Seguridad de la información</h2>
            <p className="paragraph">
                Nos comprometemos a proteger tu información personal implementando medidas de seguridad razonables 
                para evitar accesos no autorizados o divulgaciones.
            </p>

            <h2 className="subtitle">5. Cambios a esta Política</h2>
            <p className="paragraph">
                Podemos actualizar esta Política de Privacidad en cualquier momento. Te notificaremos de cualquier 
                cambio publicando la nueva política en este sitio web.
            </p>

            <h2 className="subtitle">6. Contacto</h2>
            <p className="paragraph">
                Si tienes alguna pregunta sobre esta Política de Privacidad, puedes contactarnos en: [correo electrónico o información de contacto].
            </p>
        </div>
    );
}