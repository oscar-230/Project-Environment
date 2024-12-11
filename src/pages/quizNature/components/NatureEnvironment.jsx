import React, { useState } from "react";
import InteractiveButton from "../../Desert/components/InteractiveButton";
import Puzzle from "../../Desert/components/Puzzle"; 

const NatureEnvironment = () => {
  const [showPuzzle, setShowPuzzle] = useState(false);
  const [currentPuzzle, setCurrentPuzzle] = useState(null);

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
        position={[35, 3.5, 0]} 
        rotation={[0, -1.5, 0]} 
        textArray={[
          "Hola, realiza quizzes",
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
    </>
  );
};

export default NatureEnvironment;
