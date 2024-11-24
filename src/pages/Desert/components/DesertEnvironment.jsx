import React, { useState } from "react";
import { Html, Environment, Stars, Text3D } from "@react-three/drei";
import { Suspense } from "react";

const DesertEnvironment = ({ isDay, setIsDay }) => {
    const [scenePosition, setScenePosition] = useState({ x: 0, y:0, z: 0});
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const toggleNight = () => {
        setIsDay(!isDay);
    };

    return (
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
          rotation={[0, -3.3, 0]}
        >
          Cuidemos el Agua!
          <meshNormalMaterial />
        </Text3D>
  
        <Suspense fallback={null}>
          <Environment
            files={isDay ? "/hdris/sky/sky3.hdr" : "/hdris/sky/sky2.hdr"}
            background={true}
          />

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
  
        {/* Botón que rota con el modelo */}
        <Html
          position={[7, 19, 45]}
          scale={2}
          transform
          style={{ zIndex: 10 }}
          rotation={[0, 3, 0]} 
        >
          <button
            className="action-button"
            onClick={toggleNight}
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
    
      </group>
    );
};

export default DesertEnvironment;