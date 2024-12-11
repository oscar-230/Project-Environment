import React, { useState, useRef } from "react";
import { PositionalAudio } from "@react-three/drei";
import Text3DHeader from "./Text3DHeader";
import EnvironmentSetup from "./EnvironmentSetup";
import InteractiveButton from "./InteractiveButton";
import "../../../Styles/DesertEnvironment.css";
import Puzzle from "./Puzzle";

const DesertEnvironment = ({ isDay }) => {
  const audioSnakeRef = useRef();
  const audioOasisRef = useRef();
  const [showPuzzle, setShowPuzzle] = useState(false);
  const [currentPuzzle, setCurrentPuzzle] = useState(null);

  const closePuzzle = (score) => {
    setShowPuzzle(false);
    if (score !== null) {
      console.log("Score from puzzle:", score);
    }
  };

  const openPuzzle = (puzzleId) => {
    setCurrentPuzzle(puzzleId); // Asignar el puzzle seleccionado
    setShowPuzzle(true); // Mostrar el puzzle
  };

  return (
    <>
      <Text3DHeader />
      <EnvironmentSetup isDay={isDay} />
      <InteractiveButton
        position={[20, 14.6, 15]}
        rotation={[0, 3.5, 0]}
        audioRef={audioSnakeRef}
        text="El agua es esencial para la vida en la Tierra. Sin embargo, muchas veces no somos conscientes de su importancia y la estamos desperdiciando constantemente. ¡Hagamos un esfuerzo para cuidarla!"
        buttonColor="#2FBCDC"
      />
      <InteractiveButton
        position={[-16, 14, 15]}
        rotation={[0, 2, 0]}
        audioRef={audioOasisRef}
        textArray={[
          "¡Mira cómo se reduce el agua en el oasis! Si seguimos así, nuestros recursos hídricos disminuirán drásticamente. El futuro de muchas regiones depende de nuestro esfuerzo por ahorrar agua.",
          "Si seguimos desperdiciando agua a este ritmo, los desiertos avanzarán y los ríos se secarán. Muchas comunidades ya enfrentan escasez, y nosotros podemos ayudar a evitarlo. ¡Cada gota cuenta!",
          "Para solucionar la escasez de agua, debemos reparar fugas, usar dispositivos ahorradores y fomentar el uso de tecnologías como la recolección de agua de lluvia. Además, apoyar la reforestación ayuda a mantener los ciclos naturales del agua. ¡Actuar ahora es clave para asegurar agua limpia para todos!",
        ]}
        buttonColor="#2FBCDC"
      />
      <InteractiveButton
        position={[-18, 15.3, -12]}
        rotation={[0, 1, 0]}
        textArray={[
          "Hola, realiza quizzes",
        ]}
        conditionalButtonFarmer={true}
        buttonColor="#efb810"
        specialStyle={{ marginBottom: "0px" }}
      />
      <PositionalAudio ref={audioSnakeRef} loop url="/sounds/snake.mp3" distance={5} />
      <PositionalAudio ref={audioOasisRef} loop url="/sounds/water-drops.mp3" distance={5} />
    </>
  );
};

export default DesertEnvironment;
