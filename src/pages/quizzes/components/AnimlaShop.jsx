import React from "react";
import useQuizStore from "../../../Stores/use-quiz-store";
import "../../../Styles/AnimalShop.css";

const AnimalShop = () => {
  const animalIcons = [
    { id: 1, name: "Elefante", iconUrl: "/imgs/icons/elephant-icon.png", cost: 5 },
    { id: 2, name: "Tigre", iconUrl: "/imgs/icons/tiger-icon.jpg", cost: 8 },
    { id: 3, name: "Llama", iconUrl: "/imgs/icons/llama-icon.png", cost: 10 },
    { id: 4, name: "Pez", iconUrl: "/imgs/icons/fish-icon.png", cost: 10 },
    { id: 5, name: "Cerdo", iconUrl: "/imgs/icons/pig-icon.png", cost: 15 },
    { id: 6, name: "Leon", iconUrl: "/imgs/icons/lion-icon.png", cost: 18 },
    { id: 7, name: "Tiburón", iconUrl: "/imgs/icons/shark-icon.png", cost: 20 },
    { id: 8, name: "Rino", iconUrl: "/imgs/icons/rino-icon.png", cost: 22 },
    { id: 9, name: "Jirafa", iconUrl: "/imgs/icons/giraffe-icon.jpg", cost: 25 },
    { id: 10, name: "Mono", iconUrl: "/imgs/icons/monkey-icon.png", cost: 30 },
  ];

  const { getTotalPoints, claimedIcons, claimIcon } = useQuizStore();

  const totalPoints = getTotalPoints(); // Llama al método para calcular los puntos acumulados

  return (
    <div className="shop-container">
      <header className="shop-header">
        <h1>Tienda de Íconos</h1>
        <p>Tus puntos disponibles: <strong>{totalPoints}</strong></p>
      </header>
      <div className="shop-items">
        {animalIcons.map((icon) => (
          <div key={icon.id} className="shop-item">
            <img src={icon.iconUrl} alt={icon.name} className="shop-icon" />
            <h3>{icon.name}</h3>
            <p>Costo: {icon.cost} puntos</p>
            {claimedIcons.includes(icon.id) ? (
              <p className="claimed-label">¡Ya reclamado!</p>
            ) : (
              <button
                onClick={() => claimIcon(icon.id, icon.cost)}
                disabled={totalPoints < icon.cost}
              >
                Reclamar
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalShop;
