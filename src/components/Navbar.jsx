import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../Stores/use-auth-store";
import useQuizStore from "../Stores/use-quiz-store"; // Importamos el store
import "../Styles/Navbar.css"; 

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();
  const { user, observeAuthState } = useAuthStore((state) => state);
  const { claimedIcons, animalIcons, setSelectedIcon } = useQuizStore(); // Traemos los íconos reclamados y el setSelectedIcon

  const [showIconsMenu, setShowIconsMenu] = useState(false);
  const [selectedIcon, setSelectedIconState] = useState(user.photoURL || "/path/to/default-image.jpg");

  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  useEffect(() => {
    if (claimedIcons.length > 0) {
      const selectedIcon = animalIcons.find(icon => icon.id === claimedIcons[claimedIcons.length - 1]);
      if (selectedIcon) {
        setSelectedIconState(selectedIcon.iconUrl);  // Actualiza la foto de perfil con el ícono seleccionado
      }
    }
  }, [claimedIcons, animalIcons]);

  const handleLogout = async () => {
    await onLogout();
    navigate("/"); // Redirigir a la página de login
  };

  const toggleIconsMenu = () => setShowIconsMenu(!showIconsMenu);

  const handleIconSelection = (iconUrl) => {
    setSelectedIconState(iconUrl); // Actualiza el estado local
    setSelectedIcon(iconUrl); // Actualiza el ícono seleccionado globalmente
    setShowIconsMenu(false); // Cierra el menú
  };

  return (
    <header className="navbar">
      <div className="logo" onClick={() => navigate("/home")}>
        <h1>BluePlanet</h1>
      </div>
      <nav>
        <a href="#home" onClick={() => navigate("/home")}>Inicio</a>
        <a href="#problem" onClick={() => navigate("/problem")}>Problemas</a>
        <a href="#solutions" onClick={() => navigate("/solution")}>Soluciones</a>
        <a href="#quiz" onClick={() => navigate("/quiz")}>Quizzes</a>
        <a href="#options" onClick={() => navigate("/clasification")} >Clasificación</a>
      </nav>

      {user && user.photoURL ? (
        <div className="user-info" onClick={toggleIconsMenu}>
          <img
            src={selectedIcon}
            alt="User Profile"
            className="user-photo"
            onError={(e) => e.target.src = "/path/to/default-image.jpg"}
          />
          {showIconsMenu && (
            <div className="icons-menu">
              {claimedIcons.map((iconId) => {
                const icon = animalIcons.find(item => item.id === iconId);
                return icon ? (
                  <div key={icon.id} onClick={() => handleIconSelection(icon.iconUrl)} className="icon-item">
                    <img src={icon.iconUrl} alt={icon.name} className="icon-thumbnail" />
                    <span>{icon.name}</span>
                  </div>
                ) : null;
              })}
            </div>
          )}
        </div>
      ) : (
        <div className="user-info">
          <span>Bienvenido</span>
        </div>
      )}

      <button className="logout-button" onClick={handleLogout}>Salir</button>
    </header>
  );
};

export default Navbar;
