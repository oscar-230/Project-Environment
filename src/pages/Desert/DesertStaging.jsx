import {
    Environment,
    OrbitControls,
    Stars,
    Text3D,
    Html,
    KeyboardControls
  } from "@react-three/drei";
  import React, { useState, useEffect } from "react";
  import Navbar from "../../components/Navbar";
  import Footer from "../../components/Footer";
  import { Canvas } from "@react-three/fiber";
  import DesertStagingModel from "./models-3d/DesertStagingModel";
  import "../../Styles/DesertStaging.css";
  import Lights from "./models-3d/Lights";
import { Physics } from "@react-three/rapier";
import Car from "./models-3d/Car";
import { Suspense } from 'react';
import Demon from "./models-3d/Demon";
  const DesertStaging = ({ onLogout }) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    const cameraSettings = {
      position: [0, 1, 0],
    };
  
    const [scenePosition, setScenePosition] = useState({ x: 0, y: 0, z: 0 });
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isDay, setIsDay] = useState(true);
  
    useEffect(() => {
      const handleKey = (event) => {
        switch (event.key){
          case "n":
            setIsDay(false);
            break;
          case "d":
            setIsDay(true);
            break;
        }
      };

      window.addEventListener("keydown", handleKey);
  
      return () => {
        window.removeEventListener("keydown", handleKey);
      };

    }, [])
    
    return (
      
        <div className="">
          <Navbar onLogout={onLogout} />
          <main className="staging-main">
            <div className="canvas-container-staging">
              <Canvas shadows >
                <group
                  position={[scenePosition.x, scenePosition.y, scenePosition.z]}
                  rotation={[rotation.x, rotation.y, 0]}
                >
                  <Text3D
                    font="/fonts/Inter_Bold.json"
                    size={5}
                    color="#007BFF"
                    bevelEnabled
                    bevelSize={0.02}
                    bevelThickness={0.01}
                    height={0.2}
                    position={[30, 25, 60]}
                    rotation={[0,-3.3, 0]}
                  >
                    Cuidemos el Agua!
                    <meshNormalMaterial />
                  </Text3D>
                  <Suspense fallback={null}>
                    <Environment
                      files={isDay ? "/hdris/sky/sky3.hdr" : "/hdris/sky/sky2.hdr"}
                      background={true}
                    />
                    
                    <Lights />
                    
                      <Physics debug={false}>
                        <DesertStagingModel />
                        <Car />
      
                      </Physics>
                    </Suspense>
              
    
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
                  position={[7, 19, 45]}
                  scale={2}
                  transform
                  style={{ zIndex: 10 }}
                  rotation={[0,3,0]} // Rota el botón con el modelo
                >
                  <button
                    className="action-button"
                    //onClick={handleButtonClick}
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
        </div>
      
    );
  };
  
  export default DesertStaging;