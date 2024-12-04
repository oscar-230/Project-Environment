import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Html, Environment, Stars, Text3D, PositionalAudio } from "@react-three/drei";
import { Suspense } from "react";
import "font-awesome/css/font-awesome.min.css";
import "../../../Styles/DesertEnvironment.css"

const DesertEnvironment = ({ isDay, setIsDay }) => {
  const navigate = useNavigate();
  const [showText1, setShowText1] = useState(false); 
  const [showText2, setShowText2] = useState(false); // Estado para controlar el texto de Lake
  const [showText3, setShowText3] = useState(false);
  const [text, setText] = useState([
    "¡Mira cómo se reduce el agua en el oasis! Si seguimos así, nuestros recursos hídricos disminuirán drásticamente. El futuro de muchas regiones depende de nuestro esfuerzo por ahorrar agua. ¡No dejemos que esto suceda!",
    "Si seguimos desperdiciando agua a este ritmo, los desiertos avanzarán y los ríos se secarán. Muchas comunidades ya enfrentan escasez, y nosotros podemos ayudar a evitarlo. ¡Cada gota cuenta!",
    "Para solucionar la escasez de agua, debemos reparar fugas, usar dispositivos ahorradores y fomentar el uso de tecnologías como la recolección de agua de lluvia. Además, apoyar la reforestación ayuda a mantener los ciclos naturales del agua. ¡Actuar ahora es clave para asegurar agua limpia para todos!",
  ]); 
  const [textFarmer, setTextFarmer] = useState([
    "Hola",
    "Chao",
    "¿Quires ir?"
  ])

  const [textIndex, setTextIndex] = useState(0); // Estado para el índice del texto
  const [textIndexFarmer, setTextIndexFarmer] = useState(0);

  const audioSnakeRef = useRef();
  const audioOasisRef = useRef();

  const toggleNight = () => {
    setIsDay(!isDay);
  };

  const toggleText1 = () => {
    setShowText1(!showText1); 
    if (audioSnakeRef.current) {
      if (showText1) {
        audioSnakeRef.current.stop();
      } else {
        audioSnakeRef.current.play()
        audioSnakeRef.current.setVolume(10)
      }
    }
  };

  const toggleText2 = () => {
    setShowText2(!showText2); 
    setTextIndex(0);
    if (audioOasisRef.current) {
      if (showText2) {
        audioOasisRef.current.stop();
      } else {
        audioOasisRef.current.play();
        audioOasisRef.current.setVolume(10);
      }
    }
  };

  const toogleText3 = () => {
    setShowText3(!showText3);
    setTextIndexFarmer(0);
  };

  const handleArrowClick = () => {
    setTextIndex((prevIndex) => (prevIndex + 1) % text.length);
  };

  const handleArrowClickFarmer = () => {
    setTextIndexFarmer((prevIndex) => (prevIndex + 1) % textFarmer.length);
  };

  const handleCloseText = () => {
    // Cerrar el div y reiniciar el índice de texto
    setShowText2(false);
    setTextIndex(0);
  };

  return (
    <>
      <Text3D
        font="/fonts/Inter_Bold.json"
        size={5}
        color="#007BFF"
        bevelEnabled
        bevelSize={0.02}
        bevelThickness={0.01}
        height={0.2}
        position={[30, 25, 60]}
        rotation={[0, -3.3, 0]}
      >
        Cuidemos el Agua!
        <meshNormalMaterial />
      </Text3D>

      <Suspense fallback={null}>
        <Environment files={isDay ? "/hdris/sky/sky3.hdr" : "/hdris/sky/sky2.hdr"} background={true} />
      </Suspense>

      {!isDay && (
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      )}

      {/* Snake Button*/}
      <Html position={[20, 14.6, 15]} scale={2} transform style={{ zIndex: 10 }} rotation={[0, 3.5, 0]}>
        <button
          className="action-button"
          onClick={toggleText1}
          style={{
            color: showText1 ? "red" : "#2FBCDC",
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
          <i className={showText1 ? "fa fa-times" : "fa fa-question-circle"}></i>
        </button>
      </Html>

      {/* Snake text */}
      {showText1 && (
        <Html position={[20, 17, 15]} scale={2} transform style={{ zIndex: 10 }} rotation={[0, 3.5, 0]}>
          <div
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              padding: "5px",
              borderRadius: "5px",
              fontSize: "7px",
              maxWidth: "100px",
              textAlign: "center",
              lineHeight: "1.2"
            }}
          >
            <p>
              El agua es esencial para la vida en la Tierra. Sin embargo, muchas veces no somos conscientes de
              su importancia y la estamos desperdiciando constantemente. ¡Hagamos un esfuerzo para cuidarla!
            </p>
          </div>
        </Html>
      )}

      {/* Lake Button */}
      <Html 
        position={[-16, 14, 15]} 
        scale={2} 
        transform 
        style={{ zIndex: 10 }} 
        rotation={[0, 2, 0]}>
        <button
          className="action-button"
          onClick={toggleText2}
          style={{
            color: showText2 ? "red" : "#2FBCDC",
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
          <i className={showText2 ? "fa fa-times" : "fa fa-question-circle"}></i>
        </button>
      </Html>

      {/* Lake text */}
        {showText2 && (
        <Html
          position={[-17, 17.2, 15.4]}
          scale={2}
          transform
          style={{ zIndex: 10 }}
          rotation={[0, 2.1, 0]}
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
            }}
          >
            <p>{text[textIndex]}</p>

            {/* Flecha izquierda para retroceder */}
            {textIndex > 0 && (
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

            {/* Flecha derecha para avanzar */}
            {textIndex < text.length - 1 && (
              <i
                className="fa fa-arrow-right icon-hover"
                onClick={handleArrowClick}
                style={{
                  position: "absolute",
                  bottom: "5px",
                  right: "5px",
                  fontSize: "7px",
                  cursor: "pointer",
                }}
              ></i>
            )}
          </div>
        </Html>
      )}

      {/* Farmer Buton */}
      <Html 
        position={[2.1,13.7,-20]} 
        scale={2} 
        transform 
        style={{ zIndex: 10 }} 
        rotation={[0, 0, 0]}>
        <button
          className="action-button"
          onClick={toogleText3}
          style={{
            color: showText3 ? "red" : "#efb810",
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
          <i className={showText3 ? "fa fa-times" : "fa fa-question-circle"}></i>
        </button>
      </Html>

      {showText3 && (
        <Html
          position={[2.2,16,-20]} 
          scale={2}
          transform 
          style={{ zIndex: 10 }} 
          rotation={[0, 0.2, 0]}
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
            }}
          >
            
            <p>{textFarmer[textIndexFarmer]}</p>
            {textIndexFarmer === textFarmer.length - 1 && (
              <button
                className="action-button-navigate"
                onClick={() => navigate("/home")} //Nuevo entorno
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
                Si
              </button>
            )}

            {/* Flecha izquierda para retroceder */}
            {textIndexFarmer > 0 && (
              <i
                className="fa fa-arrow-left icon-hover"
                onClick={() => setTextIndexFarmer((prevIndex) => prevIndex - 1)}
                style={{
                  position: "absolute",
                  bottom: "5px",
                  left: "5px",
                  fontSize: "7px",
                  cursor: "pointer",
                }}
              ></i>
              
            )}
            
            {/* Flecha derecha para avanzar */}
            {textIndexFarmer < textFarmer.length - 1 && (
              <i
                className="fa fa-arrow-right icon-hover"
                onClick={handleArrowClickFarmer}
                style={{
                  position: "absolute",
                  bottom: "5px",
                  right: "5px",
                  fontSize: "7px",
                  cursor: "pointer",
                }}
              ></i>
            )}
            
          </div>
        </Html>
      )}

      <PositionalAudio
        ref={audioSnakeRef}
        loop
        url="/sounds/snake.mp3" 
        distance={5}
      /> 

      <PositionalAudio
        ref={audioOasisRef}
        loop
        url="/sounds/water-drops.mp3" 
        distance={5}
      />     
    </>
  );
};

export default DesertEnvironment;