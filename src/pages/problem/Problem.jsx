import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../Styles/Problem.css"; 
import { useMemo } from "react";
import Nature from "./models-3d/Nature";
import { KeyboardControls } from "@react-three/drei";
import Lights from "./models-3d/Lights";
import Controls from "./models-3d/Controls";

const Problem = ({ onLogout }) => {
  
  const cameraSettings = {
    position: [0, 2, 5],
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
            La contaminación del <br/>agua, una crisis mundial creciente.
          </h2>
          <p className="sub-text-problem">
            La contaminación del agua es uno de los mayores desafíos ambientales que enfrentamos. 
            Los desechos industriales, plásticos y productos químicos llegan a ríos, lagos y océanos, 
            afectando gravemente la biodiversidad acuática. Esta contaminación no solo perjudica 
            a los ecosistemas, sino que también pone en riesgo la salud humana, afectando a millones 
            de personas que dependen de fuentes de agua contaminadas.
          </p>
          <button className="button-problem">Ver más</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Problem;