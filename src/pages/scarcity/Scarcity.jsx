import React from 'react'
import { Canvas } from "@react-three/fiber";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Text3D } from "@react-three/drei";
import "../../Styles/Scarcity.css"

const Scarcity = ({ onLogout }) => {
    return (
        <div className="details-container">
          <Navbar onLogout={onLogout} />
          <main className="details-main">
            <div className="left-column">
              <Canvas className="text-3d-canvas">
                <Text3D 
                  font="/fonts/blue-font.json" 
                  size={3} 
                  color="#007BFF" 
                  bevelEnabled 
                  bevelSize={0.02} 
                  bevelThickness={0.01} 
                  height={0.3} 
                  position={[-15, 0, 0]}
                >
                  Causas
                  <meshNormalMaterial />
                </Text3D>
              </Canvas>
    
              <div className="details-card">
                <p className="details-subtitle">Cambio climático</p>
                <p className="details-paragraph">
                    Aumento de temperaturas y alteraciones en los patrones de precipitación
                </p>
              </div>
    
              <div className="details-card">
                <p className="details-subtitle">Crecimiento poblacional</p>
                <p className="details-paragraph">
                    Mayor demanda de agua para consumo, agricultura e industria
                </p>
              </div>
    
              <div className="details-card">
                <p className="details-subtitle">Contaminación</p>
                <p className="details-paragraph">
                    Residuos industriales y agrícolas que contaminan fuentes de agua
                </p>
              </div>

              <div className="details-card">
                <p className="details-subtitle">Desforestación</p>
                <p className="details-paragraph">
                    Pérdida de bosques que afecta el ciclo del agua
                </p>
              </div>
            </div>
    
            <div className="right-column">
              <Canvas className="text-3d-canvas">
                <Text3D 
                  font="/fonts/blue-font.json" 
                  size={3} 
                  color="#4CAF50" 
                  bevelEnabled 
                  bevelSize={0.02} 
                  bevelThickness={0.01} 
                  height={0.3} 
                  position={[-15, 0, 0]}
                >
                  Consecuencias
                  <meshNormalMaterial />
                </Text3D>
              </Canvas>
    
              <div className="details-card">
                <p className="details-subtitle">Sequías Extensas</p>
                <p className="details-paragraph">
                 ...
                </p>
              </div>
    
              <div className="details-card">
                <p className="details-subtitle">Ecosistemas Deteriorados</p>
                <p className="details-paragraph">
                 ...
                </p>
              </div>

              <div className="details-card">
                <p className="details-subtitle">Impacto en la Agricultura</p>
                <p className="details-paragraph">
                 ...
                </p>
              </div>
    
              <button className="generate-button">Generar entorno</button>
            </div>
          </main>
          <Footer />
        </div>
      );
    };

export default Scarcity;