import React from "react";
import "../Styles/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Copyright © 2024 Nexcent ltd.</p>
        <div className="social-icons">
          {/* Agrega íconos de redes sociales aquí */}
        </div>
      </div>
      <div className="footer-right">
        <a href="#company">Company</a>
        <a href="#support">Support</a>
        <a href="#stay-up-to-date">Stay up to date</a>
      </div>
    </footer>
  );
};

export default Footer;
