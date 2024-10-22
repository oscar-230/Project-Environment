import React, { useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "/src/Styles/Home.css";
import { useNavigate } from "react-router-dom";

const EarthSphere = () => {
  return (
    <mesh castShadow receiveShadow>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="#1e5ece" />
      <mesh>
        <sphereGeometry args={[2.01, 64, 64]} />
        <meshStandardMaterial color="#4b88f3" />
      </mesh>
    </mesh>
  );
};

const Home = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    await onLogout();
    navigate("/login"); // Redirigir a la página de login
  }, [onLogout, navigate]);

  return (
    <div className="home-container">
      <header className="navbar">
        <div className="logo">
          <h1>BluePlanet</h1>
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#problem">Problem</a>
          <a href="#solutions">Solutions</a>
          <a href="#quizz">Quizz</a>
          <a href="#options">Options</a>
        </nav>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </header>

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
            acceso a <br/> agua potable segura?
          </p>
          <button className="find-out-button">Find out</button>
        </div>

        <Canvas className="canvas" shadows>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 5, 5]}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={1.5}
          />
          <EarthSphere />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </main>

      <main className="main-secondary">
        <div className="text-secondary">
          <h2 className="secondary-tittle">
            <span className="text-gray-second">
              El agua limpia no <br /> debería ser un lujo, <br />
            </span>{" "}
            <span className="text-blue  -second">
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

      <footer className="footer">
        <div className="footer-left">
          <p>Copyright © 2024 Nexcent ltd.</p>
          <div className="social-icons">
            {/* Agrega íconos de redes sociales aquí */}
          </div>
        </div>
        <div className="footer-right">
          <a href="#company">Company</a>
          <a href="#support">Support</a>
          <a href="#stay-up-to-date">Stay up to date</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
