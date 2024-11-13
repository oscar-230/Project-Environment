import React, { useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Text3D } from "@react-three/drei";
import "../../Styles/Scarcity.css"
import { useNavigate } from 'react-router-dom';

const Scarcity = ({ onLogout }) => {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigate = () => {
    navigate("/desertstaging");
  };

    return (
        <div className="details-container">
          <Navbar onLogout={onLogout} />
          <main className="details-main">
            <div className="left-column">
              <h1 className="title-secondary">Causas</h1>
    
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
             <h1 className="title-secondary">Consecuencias</h1>
    
              <div className="details-card">
                <p className="details-subtitle">Sequías Extensas</p>
                <p className="details-paragraph">
                  Reducción de fuentes de agua, escasez de alimentos y pérdida de biodiversidad.
                </p>
              </div>
    
              <div className="details-card">
                <p className="details-subtitle">Ecosistemas Deteriorados</p>
                <p className="details-paragraph">
                  Pérdida de hábitats, disminución de especies y alteración del equilibrio natural.
                </p>
              </div>

              <div className="details-card">
                <p className="details-subtitle">Impacto en la Agricultura</p>
                <p className="details-paragraph">
                  Caída en la producción de alimentos, aumento de precios y seguridad alimentaria comprometida.
                </p>
              </div>
    
              <button className="generate-button" onClick={handleNavigate}>Generar entorno</button>
            </div>
          </main>
          <Footer />
        </div>
      );
    };

export default Scarcity;