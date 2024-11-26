import React from "react";
import '../../../Styles/VideoCard.css';

const VideoCard = ({ videoUrl, title, description }) => {
    const videoId = videoUrl.split("v=")[1].split("&")[0]; // Extraer el ID del video de YouTube

    return (
        <div className="video-card">
            <h3>{title}</h3> {/* Título arriba */}
            <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <p className="video-description">{description}</p>
        </div>
    );
};

export default VideoCard;