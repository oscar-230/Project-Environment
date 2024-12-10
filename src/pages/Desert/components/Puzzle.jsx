import React, { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';
import '../../../Styles/Puzzle.css';
import exampleImage1 from "../../../../public/imgs/water-scarcity.jpg";
import exampleImage2 from "../../../../public/imgs/water.jpg"; 
import exampleImage3 from "../../../../public/imgs/logo.png"; 

const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

const calculateScore = (pieces) => {
    const correctOrder = [...Array(9).keys()];
    const correctPositions = pieces.reduce((score, piece, index) => {
        return score + (piece === correctOrder[index] ? 1 : 0);
    }, 0);

    const totalPieces = pieces.length;
    const percentage = (correctPositions / totalPieces) * 100;

    // Escalar el porcentaje a una puntuación de 1 a 10
    const score = Math.max(1, Math.round((percentage / 100) * 10));
    return score;
};

const Puzzle = ({ position, onClose, rotation, puzzleId }) => {
    const [pieces, setPieces] = useState(shuffleArray([...Array(9).keys()]));
    const [isComplete, setIsComplete] = useState(false);
    const [score, setScore] = useState(null);

    // Mapa de imágenes por ID de puzzle
    const imageMap = {
        1: exampleImage1,
        2: exampleImage2,
        3: exampleImage3,
    };

    const [selectedImage, setSelectedImage] = useState(imageMap[puzzleId] || exampleImage1);

    useEffect(() => {
        // Cargar el rompecabezas específico según el ID
        setSelectedImage(imageMap[puzzleId] || exampleImage1);
        setPieces(shuffleArray([...Array(9).keys()]));
    }, [puzzleId]);

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData("pieceIndex", index);
    };

    const handleDrop = (e, targetIndex) => {
        const sourceIndex = e.dataTransfer.getData("pieceIndex");
        const newPieces = [...pieces];
        [newPieces[sourceIndex], newPieces[targetIndex]] = [
            newPieces[targetIndex],
            newPieces[sourceIndex]
        ];
        setPieces(newPieces);
    };

    const handleComplete = () => {
        const score = calculateScore(pieces);
        setScore(score);
        setIsComplete(true);
    };

    return (
        <>
            <Html
                position={position}
                rotation={rotation}
                transform
            >
                <div className="puzzle-container"
                    style={{
                        color: "white",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        padding: "20px",
                        borderRadius: "5px",
                        fontSize: "9px",
                        maxWidth: "300px",
                        textAlign: "center",
                        position: "relative",
                        lineHeight: "1.3",
                        marginBottom: "30px",
                    }}
                >
                    <h1>Rompecabezas</h1>
                    <div className="puzzle-grid">
                        {pieces.map((piece, index) => (
                            <div
                                key={index}
                                className="puzzle-piece"
                                draggable
                                onDragStart={(e) => handleDragStart(e, index)}
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={(e) => handleDrop(e, index)}
                            >
                                {piece !== 8 && (
                                    <img
                                        src={selectedImage}
                                        alt="Puzzle-piece"
                                        style={{
                                            objectPosition: `-${(piece % 3) * 100}px -${Math.floor(piece / 3) * 100}px`,
                                            width: "300px",
                                            height: "300px",
                                        }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {isComplete && score !== null && (
                        <div className="score-display">
                            <p>¡Puntuación: {score}!</p>
                        </div>
                    )}
                </div>

                <button
                    style={{
                        padding: '10px 20px',
                        marginTop: '10px',
                        backgroundColor: 'green',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginLeft: '18px'
                    }}
                    onClick={handleComplete}
                >
                    Completar Puzzle
                </button>

                <button
                    style={{
                        padding: '10px 20px',
                        marginTop: '10px',
                        backgroundColor: 'red',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginLeft: '30px'
                    }}
                    onClick={() => onClose(null)} // Close without scoring
                >
                    Cerrar Puzzle
                </button>
            </Html>
        </>
    );
};

export default Puzzle;
