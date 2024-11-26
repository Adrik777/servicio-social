import { useRef } from "react";
import { Link } from "react-router-dom";
import './HomePage.css';


const Hero = () => {
    return (
      <>
        <div className="hero">
          <div className="hero-content">
            <h1>Membresía Holística</h1>
            <p>Desarrolla al máximo tu potencial</p>
            <div className="hero-buttons">
              <a className="hero-button">
                Conoce más
                <img src="/assets/camera.PNG" alt="Orchid icon" className="button-icon" />
              </a>
              <Link to="/cursos" className="hero-button secondary-button">
                Explora Cursos
                <img src="/assets/arrow.PNG" alt="Orchid icon" className="button-icon" />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

export default function HomePage() {
    return(
        <Hero/>
    )
}