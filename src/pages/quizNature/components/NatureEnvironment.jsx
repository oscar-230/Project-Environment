import React, { useRef, useState } from "react";
import InteractiveButton from "../../Desert/components/InteractiveButton";
import Puzzle from "../../Desert/components/Puzzle"; 
import { PositionalAudio } from "@react-three/drei";

const NatureEnvironment = () => {
  const [showPuzzle, setShowPuzzle] = useState(false);
  const [currentPuzzle, setCurrentPuzzle] = useState(null);
  const audioQuizRef = useRef();

  const openPuzzle = (puzzleId) => {
    setCurrentPuzzle(puzzleId); 
    setShowPuzzle(true); 
  };

  const closePuzzle = () => {
    setShowPuzzle(false); 
  };

  return (
    <>
      <InteractiveButton
        audioRef={audioQuizRef}
        position={[35, 3.5, 0]} 
        rotation={[0, -1.5, 0]} 
        textArray={[
          "Hola, a continuación encontrarás unos rompecabezas para completar, arrastra la casilla a donde quieras moverla, si quieres ver tu desempeño puedes presionar completar puzzle",
          "Rompecabezas 1",
          "Rompecabezas 2",
          "Rompecabezas 3",
        ]}
        onShowPuzzle={(puzzleId) => openPuzzle(puzzleId)} 
        buttonColor="#2FBCDC"
        hasConditionalButtons={true}
        specialStyle={{ marginBottom: "0px" }} 
      />

      {/* Mostrar el puzzle cuando se seleccione uno */}
      {showPuzzle && <Puzzle position={[37, 8.5, 7]} onClose={closePuzzle} rotation={[0, -1.5, 0]} puzzleId={currentPuzzle} />}
      <PositionalAudio ref={audioQuizRef} loop url="/sounds/quiz-song.mp3" distance={1} setVolume={1} />
    </>
  );
};

export default NatureEnvironment;
