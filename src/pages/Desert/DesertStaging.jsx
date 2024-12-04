import React, { useState, useEffect, useCallback, useRef } from "react";
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
import { PositionalAudio } from "@react-three/drei";
import Video from "./components/Video";
import Alpaca from "./models-3d/Alpaca";
import ProstProcessing from "./postprocessing/PostProcessing";
import Farmer from "./models-3d/Farmer";

const DesertStaging = ({ onLogout }) => {
  const [isDay, setIsDay] = useState(true);
  const [showInstructions] = useState(true);
  const [darkBackground, setDarkBackground] = useState(true);

  const handleKeyPress = () => {
    setDarkBackground(false);
  };

  const audioRef = useRef();

  const handleAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.setVolume(2);
    }
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
        handleAudio();
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
          <Canvas shadows >
              <DesertEnvironment isDay={isDay} setIsDay={setIsDay}/>
              <Suspense fallback={null}> 
                <ProstProcessing />
                <Lights />
                <Physics debug={false}>
                  <DesertStagingModel />
                  <Car />
                  <Snake />
                  <Farmer />
                  <Alpaca />
                </Physics>
                <Video />
                <group>
                  <PositionalAudio ref={audioRef} loop url="/sounds/desert.mp3" distance={1} />
                </group>
              </Suspense>
          </Canvas>
        </div>
      </main>
    </div>
  );
};
  
export default DesertStaging;