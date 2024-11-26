import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Navbar.css"; 

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();
  
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
        <a href="#quizz">Quizzes</a>
        <a href="#options">Opciones</a>
      </nav>
      <button className="logout-button" onClick={handleLogout}>Salir</button>
    </header>
  );
};

export default Navbar