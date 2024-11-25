import { Routes, Route, Link, useLocation } from "react-router-dom";
import Beca from "./Beca/Beca";
import Contacto from "./Contacto/Contacto";
import Cursos from "./Cursos/Cursos";
import Equipo from "./Equipo/Equipo"
import HomePage from "./HomePage/HomePage";
import Membresia from "./Membresia/Membresia";
import "./NavBar.css";

import Privacidad from "./Footer/Pages/Privacidad";
import Condiciones from "./Footer/Pages/Condiciones";
export default function NavBar() {
    return (
        <div> 
        <nav className="navbar">
          
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <img
              src="/assets/cilcaLogo.png"
              alt="CILCA Logo"
            />
            <span className="nav-logo-text">CILCA</span>
          </Link>
  
          {/* Navigation Links */}
          <div className="nav-links">
            <Link to="/cursos" className="nav-item">Cursos</Link>
            <Link to="/membresia" className="nav-item">Membresía</Link>
            <Link to="/equipo" className="nav-item">Equipo</Link>
            <Link to="/beca" className="nav-item">Beca un niño</Link>
            <Link to="/contacto" className="nav-item">Contacto</Link>
          </div>
  
          {/* Sign in Button */}
          <Link to="/signin" className="nav-signin">Sign in</Link>
  
        </nav>
  
        {/* De aquí para abajo son las rutas de toda la página*/}
        <Routes> 
          <Route path="/" element={<HomePage />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/membresia" element={<Membresia />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/beca" element={<Beca />} />
          <Route path="/contacto" element={<Contacto />} />
          
          {/*Footer*/}
          <Route path="/privacy-policy" element={<Privacidad />} />
          <Route path="/terms" element={<Condiciones />} />
        </Routes>
      </div>
    )
}