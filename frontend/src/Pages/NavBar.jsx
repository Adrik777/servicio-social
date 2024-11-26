import { useState } from "react"; // Hook para manejar el estado del menú
import { Routes, Route, Link } from "react-router-dom";
import "./NavBar.css";

import Beca from "./Beca/Beca";
import Contacto from "./Contacto/Contacto";
import Cursos from "./Cursos/Cursos";
import Equipo from "./Equipo/Equipo";
import HomePage from "./HomePage/HomePage";
import Membresia from "./Membresia/Membresia";
import Privacidad from "./Footer/Pages/Privacidad";
import Condiciones from "./Footer/Pages/Condiciones";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado del menú

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Alterna entre abierto/cerrado
    };

    const closeMenu = () => {
        setIsMenuOpen(false); // Cierra el menú al seleccionar una opción
    };

    return (
        <div>
            <nav className="navbar">
                {/* Logo */}
                <Link to="/" className="nav-logo">
                    <img src="/assets/cilcaLogo.png" alt="CILCA Logo" />
                    <span className="nav-logo-text">CILCA</span>
                </Link>

                {/* Botón Sign In (siempre visible) */}

                {/* Botón hamburguesa */}
                <button className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Menú de navegación */}
                <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                    <Link to="/cursos" className="nav-item" onClick={closeMenu}>
                        Cursos
                    </Link>
                    <Link to="/membresia" className="nav-item" onClick={closeMenu}>
                        Membresía
                    </Link>
                    <Link to="/equipo" className="nav-item" onClick={closeMenu}>
                        Equipo
                    </Link>
                    <Link to="/beca" className="nav-item" onClick={closeMenu}>
                        Beca un niño
                    </Link>
                    <Link to="/contacto" className="nav-item" onClick={closeMenu}>
                        Contacto
                    </Link>
                </div>
                <Link to="/signin" className="nav-signin">
                    Sign in
                </Link>
            </nav>

            {/* Rutas */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cursos" element={<Cursos />} />
                <Route path="/membresia" element={<Membresia />} />
                <Route path="/equipo" element={<Equipo />} />
                <Route path="/beca" element={<Beca />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/privacy-policy" element={<Privacidad />} />
                <Route path="/terms" element={<Condiciones />} />
            </Routes>
        </div>
    );
}
