import React, { useCallback, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import "../../Styles/Home.css";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { useNavigate } from "react-router-dom";
import Earth from "./models-3d/Earth.jsx";
import Floor from "./models-3d/Floor.jsx";
import Lights from "./lights/Lights.jsx";
import { FaArrowDown } from 'react-icons/fa';  // Asegúrate de instalar react-icons si no lo tienes

const Home = ({ onLogout }) => {
  const [showSecondCanvas, setShowSecondCanvas] = useState(false);
  const navigate = useNavigate();
  const mainContentRef = useRef(null);
  const mainSecondaryRef = useRef(null);
  const canvasRef = useRef(null);
  const canvasRef2 = useRef(null);

  const handleLogout = useCallback(async () => {
    await onLogout();
    navigate("/login");
  }, [onLogout, navigate]);

  const handleFindOut = () => {
    navigate("/problem");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const canvasElement = canvasRef.current;
      const canvasElement2 = canvasRef2.current;
      const mainContent = mainContentRef.current;
      const mainSecondary = mainSecondaryRef.current;
      const arrowElement = document.querySelector('.arrow-container');  // Seleccionamos el elemento de la flecha
  
      // Lógica para mostrar el segundo canvas
      if (scrollY > 50) {
        setShowSecondCanvas(true);
      } else {
        setShowSecondCanvas(false);
      }
  
      // Animación de la flecha (desaparece más rápido)
      if (arrowElement) {
        const opacity = Math.max(1 - scrollY / 50, 0);
        gsap.to(arrowElement, {
          opacity: opacity,
          duration: 0.3,
          ease: "power2.out",
        });
      }
  
      // Animación del primer canvas con el desplazamiento
      if (canvasElement) {
        gsap.to(canvasElement, {
          y: scrollY * -0.5,
          duration: 1,
          ease: "power2.out",
        });
      }
  
      // Animación del contenido principal con el desplazamiento
      if (mainContent) {
        gsap.to(mainContent, {
          opacity: Math.max(1 - scrollY / 50, 0),
          duration: 0.5,
          ease: "power2.out",
        });
      }
  
      // Animación del contenido secundario con el desplazamiento
      if (mainSecondary) {
        gsap.to(mainSecondary, {
          opacity: Math.min(scrollY / 250, 1),
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };
  
    // Añadir el evento de scroll al cargar el componente
    window.addEventListener("scroll", handleScroll);
    
    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  useEffect(() => {
    if (showSecondCanvas) {
      gsap.fromTo(
        canvasRef2.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(canvasRef2.current, {
        y: 150,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, [showSecondCanvas]);

  return (
    <div className="home-container">
      <Navbar onLogout={handleLogout} />
      <main className="main-content" ref={mainContentRef}>
        <div className="text-content">
          <h2 className="main-title">
            <span className="text-gray">El agua es vida,</span>{" "}
            <span className="text-blue">
              cuidarla es nuestra responsabilidad.
            </span>
          </h2>
          <p className="sub-text">
            ¿Sabías que más de 2 mil millones de personas en el mundo no tienen
            acceso a agua potable segura?
          </p>
          <button className="find-out-button" onClick={handleFindOut}>
            Descubrir
          </button>
        </div>
        <Canvas
          ref={canvasRef}
          shadows
          camera={{ position: [0, 0, 7], fov: 90 }}
        >
          <Lights />
          <Earth />
          <Floor />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </main>

      {/* Flecha animada para hacer scroll */}
      <div className="arrow-container">
        <FaArrowDown />
      </div>

      {/* Contenido y Canvas secundario */}
      <main className="main-secondary" ref={mainSecondaryRef}>
        <div className="text-secondary">
          <h2 className="secondary-tittle">
            <span className="text-gray-second">
              El agua limpia no  <br /> debería ser un lujo, <br />
            </span>{" "}
            <span className="text-blue-second">
              ¡es un derecho <br /> universal!
            </span>
          </h2>
        </div>

        <section className="sensibilization-section">
          <h3 className="section-title">¡Cada gota cuenta!</h3>
          <p className="section-text">
            El agua es uno de los recursos más valiosos y limitados en nuestro planeta. Sin embargo, muchas personas alrededor del mundo siguen careciendo de acceso a agua limpia y segura. Cada año, millones de personas mueren debido a enfermedades relacionadas con la falta de agua potable. La contaminación y el desperdicio de agua son problemas que afectan a todos, sin importar el lugar en el que vivamos.
          </p>
          <p className="section-text">
            Todos podemos hacer la diferencia. Con pequeños gestos como cerrar la llave mientras nos cepillamos los dientes, reparar fugas en las tuberías y evitar el uso innecesario del agua, contribuimos a un futuro más sostenible. Es nuestra responsabilidad proteger este recurso esencial para las generaciones venideras. ¡Actúa hoy, el agua es vida!
          </p>
        </section>

        {showSecondCanvas && (
          <Canvas
            ref={canvasRef2}
            shadows
            camera={{ position: [0, 0, 7.5], fov: 90 }}
            style={{
              position: "absolute",
              top: "300px",
              left: "50px",
              width: "400px",
              height: "500px",
              zIndex: 20,
            }}
          >
            <Lights />
            <Earth />
            <Floor />
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
