import {
    Environment,
    OrbitControls,
    Stars,
    Text3D,
    Html
  } from "@react-three/drei";
  import React, { useState, useEffect } from "react";
  import Navbar from "../../components/Navbar";
  import Footer from "../../components/Footer";
  import { Canvas } from "@react-three/fiber";
  import DesertStagingModel from "./models-3d/DesertStagingModel";
  import "../../Styles/DesertStaging.css";
  import Lights from "./models-3d/Lights";
  
  const DesertStaging = ({ onLogout }) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    const cameraSettings = {
      position: [-2, 2, 5],
      fov: 55,
    };
  
    const [scenePosition, setScenePosition] = useState({ x: 0, y: 0, z: 0 });
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isDay, setIsDay] = useState(true);
  
    // Manejar eventos de teclado
    useEffect(() => {
      const handleKeyDown = (event) => {
        switch (event.key) {
          case "ArrowUp":
            setRotation((prev) => ({ ...prev, x: prev.x - 0.1 }));
            break;
          case "ArrowDown":
            setRotation((prev) => ({ ...prev, x: prev.x + 0.1 }));
            break;
          case "ArrowLeft":
            setRotation((prev) => ({ ...prev, y: prev.y - 0.1 }));
            break;
          case "ArrowRight":
            setRotation((prev) => ({ ...prev, y: prev.y + 0.1 }));
            break;
          case "n":
            setIsDay(false);
            break;
          case "d":
            setIsDay(true);
            break;
          default:
            break;
        }
      };
  
      window.addEventListener("keydown", handleKeyDown);
  
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, []);
  
    // Función para manejar el clic en el botón 3D
    const handleButtonClick = () => {
      setIsDay(!isDay);
    };
  
    return (
      <div className="staging-container">
        <Navbar onLogout={onLogout} />
        <main className="staging-main">
          <div className="canvas-container-staging">
            <Canvas camera={cameraSettings} shadows>
              <group
                position={[scenePosition.x, scenePosition.y, scenePosition.z]}
                rotation={[rotation.x, rotation.y, 0]}
              >
                <Text3D
                  font="/fonts/Inter_Bold.json"
                  size={0.2}
                  color="#007BFF"
                  bevelEnabled
                  bevelSize={0.02}
                  bevelThickness={0.01}
                  height={0.2}
                  position={[-2.2, 1.5, -1.8]}
                  rotation={[0, 0, 0]}
                >
                  Cuidemos el Agua!
                  <meshNormalMaterial />
                </Text3D>
  
                <OrbitControls />
                <Lights />
                <DesertStagingModel />
  
                <Environment
                  files={isDay ? "/hdris/sky/sky3.hdr" : "/hdris/sky/sky2.hdr"}
                  background={true}
                />
  
                {!isDay && (
                  <Stars
                    radius={100}
                    depth={50}
                    count={5000}
                    factor={4}
                    saturation={0}
                    fade
                    speed={1}
                  />
                )}
              </group>
  
              {/* Botón que rota con el modelo */}
              <Html
                position={[0.1, 2.5, 0]}
                scale={[0.2, 0.2, 0.2]}
                transform
                style={{ zIndex: 10 }}
                rotation={[rotation.x, rotation.y, 0]} // Rota el botón con el modelo
              >
                <button
                  className="action-button"
                  onClick={handleButtonClick}
                  style={{
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    fontSize: "16px",
                    border: "none",
                    zIndex: 10,
                  }}
                >
                  Cambiar a {isDay ? "Noche" : "Día"}
                </button>
              </Html>
            </Canvas>
          </div>
        </main>
        <Footer />
      </div>
    );
  };
  
  export default DesertStaging;
  