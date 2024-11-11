import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Forest from "./models-3d/Forest";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { useMemo } from "react";
import Controls from "../problem/models-3d/Controls";
import Lights from "../problem/models-3d/Lights";
import "../../Styles/Staging.css"; 

const Staging = ({ onLogout }) => {
  const cameraSettings = {
    position: [-8, 3, 1],
  };

  const map = useMemo(
    () => [
      { name: "forward", keys: ["ArrowUp", "KeyW"] },
      { name: "escape", keys: ["Escape"] },
    ],
    []
  );

  return (
    <div className="stating-container">
      <Navbar onLogout={onLogout} />
      <main className="stating-main">
        <KeyboardControls map={map}>
          <div className="canvas-container-staging">
            <Canvas camera={cameraSettings}>
              <Controls />
              <Lights />
              <Forest />
            </Canvas>
          </div>
        </KeyboardControls>
      </main>
      <Footer />
    </div>
  );
};

export default Staging;
