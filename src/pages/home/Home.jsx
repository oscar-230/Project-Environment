// src/Home.jsx
import React, { useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { BakeShadows, ContactShadows, OrbitControls } from "@react-three/drei";
import "../../Styles/Home.css";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { useNavigate } from "react-router-dom";
import Earth from "./models-3d/Earth.jsx";
import Floor from "./models-3d/Floor.jsx";
import Lights from "./lights/Lights.jsx";

const Home = ({ onLogout }) => {
  const navigate = useNavigate();
  const handleLogout = useCallback(async () => {
    await onLogout();
    navigate("/login"); // Redirigir a la página de login
  }, [onLogout, navigate]);

  const handleFindOut = () => {
    navigate("/problem"); // Redirigir a la página de Problem
  };

  return (
    <div className="home-container">
      <Navbar onLogout={handleLogout} />
      <main className="main-content">
        <div className="text-content">
          <h2 className="main-title">
            <span className="text-gray">El agua es vida,</span>{" "}
            <span className="text-blue">
              cuidarla es nuestra responsabilidad.
            </span>
          </h2>
          <p className="sub-text">
            ¿Sabías que más de 2 mil millones de personas en el mundo no tienen
            acceso a agua potable segura?
          </p>
          <button className="find-out-button" onClick={handleFindOut}>Find out</button>
        </div>
          <Canvas
            shadows
            camera={{ position: [0, 0, 7], fov:90 }} 
          >
            <Lights />
            <Earth />
            <Floor />

            <OrbitControls
              enablePan={false} 
              enableZoom={false} 
              minPolarAngle={Math.PI / 2} 
              maxPolarAngle={Math.PI / 2} 
            />
            
          </Canvas>
        
      </main>
      <main className="main-secondary">
        <div className="text-secondary">
          <h2 className="secondary-tittle">
            <span className="text-gray-second">
              El agua limpia no <br /> debería ser un lujo, <br />
            </span>{" "}
            <span className="text-blue-second">
              ¡es un derecho <br /> universal!
            </span>
          </h2>
          <p className="sub-text-second">
            La contaminación del agua está destruyendo nuestro planeta.
          </p>
        </div>
        <section className="stats-section">
          <div className="stats">
            <div className="stat-item">
              <i className="fas fa-users stat-icon"></i>
              <h3 className="stat-number">2.1 mil millones</h3>
              <p className="stat-description">
                De personas carecen de acceso a <br /> agua potable.
              </p>
            </div>
            <div className="stat-item">
              <i className="fas fa-trash-alt stat-icon"></i>
              <h3 className="stat-number">8 millones</h3>
              <p className="stat-description">
                De toneladas de plástico terminan en <br /> los océanos cada
                año.
              </p>
            </div>
            <div className="stat-item">
              <i className="fas fa-skull-crossbones stat-icon"></i>
              <h3 className="stat-number">485,000</h3>
              <p className="stat-description">
                Muertes anuales se atribuyen al consumo <br /> de agua
                contaminada.
              </p>
            </div>
            <div className="stat-item">
              <i className="fas fa-water stat-icon"></i>
              <h3 className="stat-number">70%</h3>
              <p className="stat-description">
                De los hábitats acuáticos están <br /> amenazados por la
                contaminación.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
