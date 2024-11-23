import React, { useState, useEffect, useMemo, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Forest from "./models-3d/Forest";
import { Canvas } from "@react-three/fiber";
import { Environment, Html, KeyboardControls, Text3D } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import Controls from "../problem/models-3d/Controls";
import Lights from "../problem/models-3d/Lights";
import "../../Styles/Staging.css";
import { useGLTF } from "@react-three/drei";

const Boat = () => {
  const boatRef = useRef();
  const [velocity, setVelocity] = useState({ x: 0, z: 0 });
  const [rotation, setRotation] = useState({ y: 0 });

  // Manejo de teclas para mover y rotar el bote
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "w":
          setVelocity((prev) => ({ ...prev, z: prev.z - 1 }));
          break;
        case "s":
          setVelocity((prev) => ({ ...prev, z: prev.z + 1 }));
          break;
        case "a":
          setRotation((prev) => ({ y: prev.y + 0.05 }));
          break;
        case "d":
          setRotation((prev) => ({ y: prev.y - 0.05 }));
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (e) => {
      if (["w", "s"].includes(e.key)) {
        setVelocity((prev) => ({ ...prev, z: 0 }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Aplica la velocidad al bote
  useEffect(() => {
    if (boatRef.current) {
      boatRef.current.setLinvel({ x: velocity.x, y: 0, z: velocity.z });
    }
  }, [velocity]);

  // Carga el modelo del bote
  const { scene } = useGLTF("/models/Boat.glb");

  return (
    <RigidBody ref={boatRef} type="dynamic" restitution={0.5} friction={0.8}>
      <primitive
        object={scene}
        scale={[0.3, 0.3, 0.3]}
        position={[0, 1.1, 2]}
        rotation={[0, rotation.y, 0]}
      >
        <meshStandardMaterial color="#ff6347" /> {/* Color del bote */}
      </primitive>
    </RigidBody>
  );
};

const Staging = ({ onLogout }) => {
  const cameraSettings = {
    position: [-8, 3, 5],
  };

  const map = useMemo(
    () => [
      { name: "forward", keys: ["ArrowUp"] },
      { name: "backward", keys: ["ArrowDown"] },
      { name: "left", keys: ["ArrowLeft"] },
      { name: "right", keys: ["ArrowRight"] },
    ],
    []
  );

  const [isDay, setIsDay] = useState(true);
  const toggleDayNight = () => setIsDay((prev) => !prev);

  return (
    <div className="staging-container">
      <Navbar onLogout={onLogout} />
      <main className="staging-main">
        <KeyboardControls map={map}>
          <div className="canvas-container-staging">
            <Canvas camera={cameraSettings}>
              <Physics gravity={[0, -9.8, 0]}>
                <group>
                  <Text3D
                    font="/fonts/blue-font.json"
                    size={2}
                    color="#007BFF"
                    bevelEnabled
                    bevelSize={0.02}
                    bevelThickness={0.01}
                    height={0.2}
                    position={[-5, 6, -20]}
                  >
                    Exploremos!
                    <meshNormalMaterial />
                  </Text3D>
                  <Controls />
                  <Lights />
                  <Forest />
                  <Boat /> {/* Bote con físicas y color */}
                  <Environment
                    files={isDay ? "/hdris/sky/sky.hdr" : "/hdris/sky/night_sky.hdr"}
                    background={true}
                    intensity={0.5}
                  />
                  {/* Superficie del río */}
                  <RigidBody type="fixed" restitution={0.5} friction={0.8}>
                    <mesh position={[0, -0.8, 0]}>
                      <boxGeometry args={[50, 1, 50]} />
                      <meshStandardMaterial color="blue" transparent opacity={0} />
                    </mesh>
                  </RigidBody>

                  {/* Botón para alternar entre día y noche */}
                  <Html position={[50, 10, 10]} center>
                    <button
                      style={{
                        padding: "10px 20px",
                        backgroundColor: "#cd47d1",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                      onClick={toggleDayNight}
                    >
                      {isDay ? "Cambiar a Noche" : "Cambiar a Día"}
                    </button>
                  </Html>
                </group>
              </Physics>
            </Canvas>
          </div>
        </KeyboardControls>
      </main>
      <Footer />
    </div>
  );
};

export default Staging;
