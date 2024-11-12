import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Forest from "./models-3d/Forest";
import { Canvas } from "@react-three/fiber";
import { Environment, KeyboardControls, Text3D } from "@react-three/drei";
import { useMemo } from "react";
import Controls from "../problem/models-3d/Controls";
import Lights from "../problem/models-3d/Lights";
import "../../Styles/Staging.css";

const Staging = ({ onLogout }) => {
  const cameraSettings = {
    position: [-8, 3, 5],
  };

  const map = useMemo(
    () => [
      { name: "forward", keys: ["ArrowUp", "KeyW"] },
      { name: "backward", keys: ["ArrowDown", "KeyS"] },
      { name: "left", keys: ["ArrowLeft", "KeyA"] },
      { name: "right", keys: ["ArrowRight", "KeyD"] },
    ],
    []
  );

  // Estado para almacenar la posición de la escena
  const [scenePosition, setScenePosition] = useState({ x: 0, y: 0, z: 0 });

  // Maneja el movimiento de la escena con las teclas
  useEffect(() => {
    const handleKeyDown = (e) => {
      setScenePosition((prevPosition) => {
        switch (e.key) {
          case "ArrowUp":
          case "w":
            return { ...prevPosition, z: prevPosition.z - 1 };
          case "ArrowDown":
          case "s":
            return { ...prevPosition, z: prevPosition.z + 1 };
          case "ArrowLeft":
          case "a":
            return { ...prevPosition, x: prevPosition.x - 1 };
          case "ArrowRight":
          case "d":
            return { ...prevPosition, x: prevPosition.x + 1 };
          default:
            return prevPosition;
        }
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="stating-container">
      <Navbar onLogout={onLogout} />
      <main className="stating-main">
        <KeyboardControls map={map}>
          <div className="canvas-container-staging">
            <Canvas camera={cameraSettings}>
              {/* Aplica la posición a toda la escena */}
              <group position={[scenePosition.x, scenePosition.y, scenePosition.z]}>
                <Text3D
                  font="/fonts/blue-font.json"
                  size={2}
                  color="#007BFF"
                  bevelEnabled
                  bevelSize={0.02}
                  bevelThickness={0.01}
                  height={0.2}
                  position={[-5, 6, -20]}
                  rotation={[0, 0, 0]}
                >
                  Exploremos!
                  <meshNormalMaterial />
                </Text3D>
                <Controls />
                <Lights />
                <Forest />
                <Environment
                  files="/hdris/sky/sky.hdr"
                  background={true}
                  intensity={0.5}
                />
              </group>
            </Canvas>
          </div>
        </KeyboardControls>
      </main>
      <Footer />
    </div>
  );
};

export default Staging;
