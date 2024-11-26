import React from "react";

const Instructions = ({ showInstructions }) => {
  return (
    showInstructions && (
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          fontSize: "18px",
          textAlign: "center",
        }}
      >
        <p>Para moverse usa las teclas W A S D</p>
        <p>Para cambiar el horario, presiona 'n' para noche y 'm' para día.</p>
        <p><strong>Presiona cualquier tecla para empezar...</strong></p>
      </div>
    )
  );
};

export default Instructions;
