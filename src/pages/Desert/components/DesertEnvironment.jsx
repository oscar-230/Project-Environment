import React, { useState } from "react";
import { Html, Environment, Stars, Text3D } from "@react-three/drei";
import { Suspense } from "react";
import "font-awesome/css/font-awesome.min.css";

const DesertEnvironment = ({ isDay, setIsDay }) => {
  const [scenePosition, setScenePosition] = useState({ x: 0, y: 0, z: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [showText, setShowText] = useState(false);  // Estado para controlar el texto adicional

  const toggleNight = () => {
    setIsDay(!isDay);
  };

  const toggleText = () => {
    setShowText(!showText);  // Cambiar el estado del texto al presionar el botón
  };

  return (
    <>
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
        <Environment files={isDay ? "/hdris/sky/sky3.hdr" : "/hdris/sky/sky2.hdr"} background={true} />
      </Suspense>

      {!isDay && (
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      )}

      {/* Primer botón (cambiar día/noche) */}
      <Html position={[7, 19, 45]} scale={2} transform style={{ zIndex: 10 }} rotation={[0, 3, 0]}>
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

      

      {/* Segundo botón (mostrar texto adicional) */}
      <Html position={[20, 14.6, 15]} scale={2} transform style={{ zIndex: 10 }} rotation={[0, 3.5, 0]}>
      <button
        className="action-button"
        onClick={toggleText}
        style={{
          color: showText ? "red" : "lightgreen",
          borderRadius: "50px",
          fontSize: "20px",
          outline: "none",
          border: "none",
          zIndex: 10,
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
       <i className={showText ? "fa fa-times" : "fa fa-question-circle"}></i>
      </button>
      </Html>

      {/* Mostrar el texto cuando `showText` sea verdadero */}
      {showText && (
        <Html position={[20, 16.5, 15]} scale={2} transform style={{ zIndex: 10 }} rotation={[0,3.5,0]}>
          <div
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              padding: "5px",
              borderRadius: "5px",
              fontSize: "7px",
              maxWidth: "100px",
              textAlign: "center",
            }}
          >
            <p>
              El agua es esencial para la vida en la Tierra. Sin embargo, muchas veces no somos conscientes de
              su importancia y la estamos desperdiciando constantemente. ¡Hagamos un esfuerzo para cuidarla!
            </p>
          </div>
        </Html>
      )}
    </>
  );
};

export default DesertEnvironment;
