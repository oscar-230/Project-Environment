import React from "react";
import Navbar from "../../components/Navbar";
import VideoCard from "./components/VideoCard";
import "../../Styles/Solutions.css";
import Footer from "../../components/Footer";

const Solutions = () => {
    const videos = [
        { 
            url: "https://www.youtube.com/watch?v=R4YQHnVSapE", 
            title: "5 SOLUCIONES PARA LA CONTAMINACIÓN DEL AGUA ", 
            description: "En este vídeo llamado “SOLUCIONES para la CONTAMINACIÓN DEL AGUA” te vamos a explicar todo lo que debes sobre la contaminación del agua y sus posibles soluciones." 
        },
        { 
            url: "https://www.youtube.com/watch?v=Wka0KQmCL3w", 
            title: "¿Cómo superar la Crisis Mundial del Agua?", 
            description: "¡¿Se acerca el día cero?! ¡El momento en el que la ciudad ya no tendrá más agua!  ¿Qué está pasando con el agua y qué podemos hacer para salvarnos?" 
        },
        { 
            url: "https://www.youtube.com/watch?v=EbwJMPF-YGQ&t=26s", 
            title: "Importancia del Agua y principales usos", 
            description: "En este video, el equipo técnico de la ONG Internacional Vitalis, comparte la importancia del recurso agua, y sus principales usos en el planeta." 
        }
    ];

    return (
        <div className="page-container">
            <Navbar />
            <div className="video-grid">
                {videos.map((video, index) => (
                    <VideoCard 
                        key={index} 
                        videoUrl={video.url} 
                        title={video.title} 
                        description={video.description} 
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Solutions;
