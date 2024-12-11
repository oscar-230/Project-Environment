import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../Stores/use-auth-store";
import "../Styles/Navbar.css"; 

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();
  const { user, observeAuthState } = useAuthStore((state) => state); 

  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  const handleLogout = async () => {
    await onLogout();
    navigate("/"); // Redirigir a la página de login
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

      {/* Verifica si la URL de la foto es válida */}
      {user && user.photoURL ? (
        <div className="user-info">
          <img
            src={user.photoURL}
            alt="User Profile"
            className="user-photo"
            onError={(e) => e.target.src = "/path/to/default-image.jpg"}
          />
        </div>
      ) : (
        <div className="user-info">
          <span>Bienvenido</span>
        </div>
      )}

      {/* Botón de logout */}
      <button className="logout-button" onClick={handleLogout}>Salir</button>
    </header>
  );
};

export default Navbar;