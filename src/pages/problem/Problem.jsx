// src/pages/problem/Problem.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../Styles/Home.css"; // Usaremos el mismo archivo CSS de Home para mantener los estilos

const RotatingCube = () => {
  const meshRef = useRef();
  useFrame(() => (meshRef.current.rotation.y += 0.01)); // Rotación constante

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const Problem = ({ onLogout }) => {
  return (
    <div className="home-container">
      <Navbar onLogout={onLogout} />
      <main className="main-content">
        <Canvas className="canvas" shadows>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 5, 5]}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={1.5}
          />
          <RotatingCube />
        </Canvas>
        <div className="text-content">
          <h2 className="main-title">
            La contaminación del agua, una crisis mundial creciente.
          </h2>
          <p className="sub-text">
            La contaminación del agua es uno de los mayores desafíos ambientales que enfrentamos. 
            Los desechos industriales, plásticos y productos químicos llegan a ríos, lagos y océanos, 
            afectando gravemente la biodiversidad acuática. Esta contaminación no solo perjudica 
            a los ecosistemas, sino que también pone en riesgo la salud humana, afectando a millones 
            de personas que dependen de fuentes de agua contaminadas.
          </p>
          <button className="find-out-button">Ver más</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Problem;
