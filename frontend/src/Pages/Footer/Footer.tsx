import { Routes, Route, Link } from "react-router-dom";

import "./Footer.css"; // Importa el archivo CSS personalizado

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <Link to="/" className="footer-logo-link">
                            <img src="/assets/cilcaLogo.png" alt="CILCA Logo" className="footer-logo-image" />
                            <span className="footer-logo-text">CILCA</span>
                        </Link>
                    </div>
                    <div className="footer-sections">
                        <div className="footer-section">
                            <h2 className="footer-section-title">Recursos</h2>
                            <ul className="footer-list">
                                <li className="footer-list-item">
                                    <a href="#" className="footer-link">CILCA</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h2 className="footer-section-title">¡Síguenos!</h2>
                            <ul className="footer-list">
                                <li className="footer-list-item">
                                    <a href="https://www.facebook.com/luzcienciayarte/" className="footer-link">Facebook</a>
                                </li>
                                <li className="footer-list-item">
                                    <a href="https://www.instagram.com/luzcienciayarte/" className="footer-link">Instagram</a>
                                </li>
                                <li className="footer-list-item">
                                    <a href="https://www.youtube.com/@fundacionluzcienciayarte" className="footer-link">YouTube</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h2 className="footer-section-title">Legales</h2>
                            <ul className="footer-list">
                                <li className="footer-list-item">
                                    <Link to="/privacy-policy" className="footer-link">Política de privacidad</Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link to="/terms" className="footer-link">Términos y condiciones</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="footer-divider" />
                <div className="footer-bottom">
                    <span className="footer-bottom-text">
                        © 2024 <span className="footer-bottom-link">CILCA</span>. Todos los derechos reservados.
                    </span>
                </div>
            </div>
        </footer>


    );
}
