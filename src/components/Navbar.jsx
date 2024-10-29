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
        <a href="#home" onClick={() => navigate("/home")}>Home</a>
        <a href="#problem" onClick={() => navigate("/problem")}>Problems</a>
        <a href="#solutions">Solutions</a>
        <a href="#quizz">Quizz</a>
        <a href="#options">Options</a>
      </nav>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </header>
  );
};

export default Navbar