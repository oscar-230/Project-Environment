import React from "react";
import { Canvas } from "@react-three/fiber";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Text3D } from "@react-three/drei";
import "../../Styles/Contamination.css";
import { useNavigate } from "react-router-dom";

const Contamination = ({ onLogout }) => {

  const navigate = useNavigate();

  const handleGenerateClick = () => {
    navigate("/staging");
  };

  return (
    <div className="details-container">
      <Navbar onLogout={onLogout} />
      <main className="details-main">
        <div className="left-column">
          {/* Título en 3D para 'Causas' */}
          <Canvas className="text-3d-canvas">
            <Text3D 
              font="/fonts/blue-font.json" 
              size={3} 
              color="#007BFF" 
              bevelEnabled 
              bevelSize={0.02} 
              bevelThickness={0.01} 
              height={0.3} 
              position={[-12, 0, 0]}
            >
              Causas
              <meshNormalMaterial />
            </Text3D>
          </Canvas>

          {/* Tarjetas estilo viñeta para las descripciones de 'Causas' */}
          <div className="details-card">
            <p className="details-subtitle">Desechos Industriales</p>
            <p className="details-paragraph">
              Productos químicos y tóxicos vertidos por fábricas.
            </p>
          </div>

          <div className="details-card">
            <p className="details-subtitle">Plásticos y Basura</p>
            <p className="details-paragraph">
              El plástico que usamos diariamente acaba en ríos y mares.
            </p>
          </div>

          <div className="details-card">
            <p className="details-subtitle">Falta de Tratamiento de Aguas Residuales</p>
            <p className="details-paragraph">
              Muchas regiones carecen de infraestructura adecuada.
            </p>
          </div>
        </div>

        <div className="right-column">
          {/* Título en 3D para 'Consecuencias' */}
          <Canvas className="text-3d-canvas">
            <Text3D 
              font="/fonts/blue-font.json" 
              size={3} 
              color="#4CAF50" 
              bevelEnabled 
              bevelSize={0.02} 
              bevelThickness={0.01} 
              height={0.3} 
              position={[-13, 0, 0]}
            >
              Consecuencias
              <meshNormalMaterial />
            </Text3D>
          </Canvas>

          {/* Tarjetas estilo viñeta para las descripciones de 'Consecuencias' */}
          <div className="details-card">
            <p className="details-subtitle">Enfermedades</p>
            <p className="details-paragraph">
              El consumo de agua contaminada puede causar enfermedades graves como el cólera y otros problemas gastrointestinales.
            </p>
          </div>

          <div className="details-card">
            <p className="details-subtitle">Pérdida de Biodiversidad</p>
            <p className="details-paragraph">
              La contaminación del agua destruye la biodiversidad acuática, alterando ecosistemas y provocando la extinción de especies.
            </p>
          </div>

          <button className="generate-button" onClick={handleGenerateClick} >Generar entorno</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contamination;
