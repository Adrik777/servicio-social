import { useState, useEffect } from "react"; // Hooks para manejar el estado del menú y scroll
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./NavBar.css";

import Beca from "./Beca/Beca";
import Contacto from "./Contacto/Contacto";
import Equipo from "./Equipo/Equipo";
import HomePage from "./HomePage/HomePage";
import Membresia from "./Membresia/Membresia";
import Privacidad from "./Footer/Pages/Privacidad";
import Condiciones from "./Footer/Pages/Condiciones";
import Cursos from "./Cursos/Cursos";
import CursoId from "./Cursos/Pages/CursoId";

// Componente para reiniciar el scroll al cambiar de ruta
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Desplaza el scroll a la parte superior
    }, [pathname]);

    return null;
};

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado del menú

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Alterna entre abierto/cerrado
    };

    const closeMenu = () => {
        setIsMenuOpen(false); // Cierra el menú al seleccionar una opción
    };

    const handleScrollToTop = () => {
        window.scrollTo(0, 0); // Asegura que el scroll vaya al inicio incluso en la misma página
    };

    return (
        <div>
            <nav className="navbar">
                {/* Logo */}
                <Link to="/" className="nav-logo">
                    <img src="/assets/cilcaLogo.png" alt="CILCA Logo" />
                    <span className="nav-logo-text">CILCA</span>
                </Link>

                {/* Botón hamburguesa */}
                <button className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Menú de navegación */}
                <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                    <Link
                        to="/cursos"
                        className="nav-item"
                        onClick={() => {
                            closeMenu();
                            handleScrollToTop();
                        }}
                    >
                        Cursos
                    </Link>
                    <Link
                        to="/membresia"
                        className="nav-item"
                        onClick={() => {
                            closeMenu();
                            handleScrollToTop();
                        }}
                    >
                        Membresía
                    </Link>
                    <Link
                        to="/equipo"
                        className="nav-item"
                        onClick={() => {
                            closeMenu();
                            handleScrollToTop();
                        }}
                    >
                        Equipo
                    </Link>
                    <Link
                        to="/beca"
                        className="nav-item"
                        onClick={() => {
                            closeMenu();
                            handleScrollToTop();
                        }}
                    >
                        Beca un niño
                    </Link>
                    <Link
                        to="/contacto"
                        className="nav-item"
                        onClick={() => {
                            closeMenu();
                            handleScrollToTop();
                        }}
                    >
                        Contacto
                    </Link>
                </div>
                <Link to="/signin" className="nav-signin">
                    Sign in
                </Link>
            </nav>

            {/* ScrollToTop y Rutas */}
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/membresia" element={<Membresia />} />
                <Route path="/equipo" element={<Equipo />} />
                <Route path="/beca" element={<Beca />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/privacy-policy" element={<Privacidad />} />
                <Route path="/terms" element={<Condiciones />} />
                <Route path="/cursos" element={<Cursos />} />
                <Route path="/cursos/:id" element={<CursoId/>}/>
            </Routes>
        </div>
    );
}
