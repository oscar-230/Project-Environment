import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../Styles/Problem.css"; 
import { useMemo } from "react";
import Nature from "./models-3d/Nature";
import { KeyboardControls, Text3D } from "@react-three/drei";
import Lights from "./models-3d/Lights";
import Controls from "./models-3d/Controls";
import { useNavigate } from "react-router-dom";
import Desert from "./models-3d/Desert";

const Problem = ({ onLogout }) => {
  
  const navigate = useNavigate();

  const cameraSettings = {
    position: [0, 2, 5],
  };

  const cameraSettings2 = {
    position: [-8, 4, 7],
  };

  const map = useMemo(
    () => [
      { name: "forward", keys: ["ArrowUp", "KeyW"] },
      { name: "escape", keys: ["Escape"] },
    ],
    []
  );

  return (
    <div className="home-container-problem">
      <Navbar onLogout={onLogout} />
      <main className="main-content-problem">
        <KeyboardControls map={map}>
          <div className="canvas-container">
            <Canvas camera={cameraSettings}>
              <Controls />
              <Lights />
              <Nature />
            </Canvas>
          </div>
        </KeyboardControls>
        <div className="text-content-problem">
          <h2 className="main-title-problem">
            La contaminación del <br /> agua, una crisis mundial creciente
          </h2>
          <div className="scrollable-text">
            <p className="sub-text-problem">
              La contaminación del agua es uno de los mayores desafíos ambientales que enfrentamos. 
              Los desechos industriales, plásticos y productos químicos llegan a ríos, lagos y océanos, 
              afectando gravemente la biodiversidad acuática. Esta contaminación no solo perjudica 
              a los ecosistemas, sino que también pone en riesgo la salud humana, afectando a millones 
              de personas que dependen de fuentes de agua contaminadas.
            </p>
            <p className="sub-text-problem">
              Sabías que la contaminación del agua afecta a más de 2 mil millones de personas en todo el mundo, 
              poniendo en riesgo su salud y bienestar? Cuando desechos industriales, plásticos y productos 
              químicos contaminan ríos, lagos y océanos, los ecosistemas acuáticos sufren daños irreparables. 
              La biodiversidad se ve afectada, y especies enteras están en peligro de extinción. Además, 
              estos contaminantes terminan en nuestra cadena alimenticia, afectando también a los seres humanos. 
              Proteger y preservar nuestros recursos hídricos es crucial, y todos podemos contribuir al cambio, 
              desde reducir el uso de plásticos hasta apoyar políticas de protección ambiental.
            </p>
          </div>
          <button className="button-problem" onClick={()=> navigate("/contamination")}>Ver más</button>
        </div>
      </main>

      <main className="main-content-problem">
        <KeyboardControls map={map}>
          <div className="canvas-container">
            <Canvas camera={cameraSettings2}>
              <Controls />
              <Lights />
              <Desert />

            </Canvas>
          </div>
        </KeyboardControls>
        <div className="text-content-problem">
          <h2 className="main-title-problem">
            El Desafío Global de la Escasez de Agua
          </h2>
          <div className="scrollable-text">
            <p className="sub-text-problem">
              La escasez de agua es un desafío crítico que enfrenta el mundo hoy. 
              Con el crecimiento de la población y el cambio climático, muchas regiones sufren una 
              disminución en la disponibilidad de este recurso vital. La sobreexplotación y la 
              contaminación agravan la crisis, afectando la salud, la producción de alimentos y el 
              desarrollo sostenible. Es urgente actuar para garantizar un acceso equitativo y 
              sostenible al agua
            </p>
            <p className="sub-text-problem">
              Sabías que la escasez de agua afecta a una de cada tres personas en el planeta y que la demanda 
              de agua dulce sigue aumentando debido al crecimiento poblacional y al cambio climático? Muchas 
              comunidades enfrentan graves dificultades para acceder a agua limpia, lo que impacta la salud, 
              la seguridad alimentaria y el desarrollo económico. Los cuerpos de agua subterránea se están 
              agotando rápidamente, y la gestión insostenible de este recurso vital está agravando la crisis. 
              Es urgente que adoptemos prácticas de conservación, como el uso eficiente del agua en nuestros 
              hogares y el apoyo a soluciones innovadoras, como la recolección de agua de lluvia y las políticas 
              que protejan este recurso esencial para la vida.
            </p>
          </div>

          <button className="button-problem" onClick={()=> navigate("/scarcity")}>Ver más</button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Problem;
