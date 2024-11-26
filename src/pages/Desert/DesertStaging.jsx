import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Canvas } from "@react-three/fiber";
import DesertStagingModel from "./models-3d/DesertStagingModel";
import "../../Styles/DesertStaging.css";
import Lights from "./models-3d/Lights";
import { Physics } from "@react-three/rapier";
import Car from "./models-3d/Car";
import { Suspense } from 'react';
import DesertEnvironment from "./components/DesertEnvironment";
import Instructions from "./components/Instructions";
import Snake from "./models-3d/Snake";

const DesertStaging = ({ onLogout }) => {
  const [isDay, setIsDay] = useState(true);
  const [showInstructions] = useState(true);
  const [darkBackground, setDarkBackground] = useState(true);

  const handleKeyPress = () => {
    setDarkBackground(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "n") {
        setIsDay(false);
      } else if (event.key === "m") {
        setIsDay(true); 
      }
      if (darkBackground) {
        handleKeyPress();
      }
    };
  
    window.addEventListener("keydown", handleKey);
  
    return () => {
      window.removeEventListener("keydown", handleKey); 
    };
  }, [darkBackground]);
  

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
    
  return (
    <div className="world-page">
      <Navbar onLogout={onLogout} />
      <main className="staging-main">
        {darkBackground && (
          <div className="dark-background">
            <Instructions showInstructions={showInstructions} />
          </div>
        )}

        <div className="canvas-container-staging">
          <Canvas shadows>
              <DesertEnvironment isDay={isDay} setIsDay={setIsDay}/>
              <Suspense fallback={null}>  
                <Lights />
                <Physics debug={false}>
                  <DesertStagingModel />
                  <Car />
                  <Snake />
                </Physics>
              </Suspense>
          </Canvas>
        </div>
      </main>
    </div>
  );
};
  
export default DesertStaging;