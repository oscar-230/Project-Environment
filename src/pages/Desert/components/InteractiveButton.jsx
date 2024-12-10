import React, { useState } from "react";
import { Html } from "@react-three/drei";
import "../../../Styles/InteractiveButton.css";

const InteractiveButton = ({
    position, 
    rotation, 
    audioRef, 
    text, 
    textArray, 
    finalAction, 
    buttonColor, 
    onShowPuzzle,
    hasConditionalButtons = false,
    specialStyle = {}
  }) => {
  const [showText, setShowText] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const toggleText = () => {
    setShowText(!showText);
    if (audioRef?.current) {
      if (showText) {
        audioRef.current.stop();
      } else {
        audioRef.current.play();
        audioRef.current.setVolume(10);
      }
    }
  };

  return (
    <>
      <Html
        position={position}
        scale={2}
        transform
        style={{ zIndex: 10 }}
        rotation={rotation}
      >
        <button
          className="action-button"
          onClick={toggleText}
          style={{
            color: showText ? "red" : buttonColor,
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
          <i
            className={showText ? "fa fa-times" : "fa fa-question-circle"}
          ></i>
        </button>
      </Html>

      {showText && (
        <Html
          position={[position[0], position[1] + 2, position[2]]}
          scale={2}
          transform
          style={{ zIndex: 10 }}
          rotation={rotation}
        >
          <div
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              padding: "5px",
              borderRadius: "5px",
              fontSize: "9px",
              maxWidth: "200px",
              textAlign: "center",
              position: "relative",
              lineHeight: "1.3",
              marginBottom: "30px",
              ...specialStyle
            }}
          >
            <p>{textArray ? textArray[textIndex] : text}</p>

            {/* Renderiza botones condicionales si la prop está habilitada */}
            {hasConditionalButtons && textIndex === 1 && (
              <button
                className="button"
                onClick={() => onShowPuzzle(1)}
                style={{
                  marginBottom:"5px",
                  pdding: "5px",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Completar
              </button>
            )}

            {hasConditionalButtons && textIndex === 2 && (
              <button
                className="button"
                onClick={() => onShowPuzzle(2)}
                style={{
                  marginBottom:"5px",
                  padding: "5px",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Completar
              </button>
            )}

            {hasConditionalButtons && textIndex === 3 && (
              <button
                className="button"
                onClick={() => onShowPuzzle(3)}
                style={{
                  marginBottom:"5px",
                  padding: "5px",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Completar
              </button>
            )}

            {textArray && textIndex > 0 && (
              <i
                className="fa fa-arrow-left icon-hover"
                onClick={() => setTextIndex((prevIndex) => prevIndex - 1)}
                style={{
                  position: "absolute",
                  bottom: "5px",
                  left: "5px",
                  fontSize: "7px",
                  cursor: "pointer",
                }}
              ></i>
            )}

            {textArray && textIndex < textArray.length - 1 && (
              <i
                className="fa fa-arrow-right icon-hover"
                onClick={() => setTextIndex((prevIndex) => prevIndex + 1)}
                style={{
                  position: "absolute",
                  bottom: "5px",
                  right: "5px",
                  fontSize: "7px",
                  cursor: "pointer",
                }}
              ></i>
            )}

            {textArray &&
              textIndex === textArray.length - 1 &&
              finalAction && (
                <button
                  className="action-button-navigate"
                  onClick={finalAction}
                  style={{
                    position: "absolute",
                    bottom: "4px",
                    right: "17px",
                    fontSize: "7px",
                    outline: "none",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "rgba(60, 239, 22, 0.7)",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Sí
                </button>
              )}
          </div>
        </Html>
      )}
    </>
  );
};

export default InteractiveButton;
