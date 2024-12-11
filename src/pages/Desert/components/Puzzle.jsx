import React, { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';
import '../../../Styles/Puzzle.css';
import exampleImage1 from "../../../../public/imgs/agua.jpg";
import exampleImage2 from "../../../../public/imgs/contamination.jpg";
import exampleImage3 from "../../../../public/imgs/agua2.jpg";
import useQuizStore from "../../../Stores/use-quiz-store";

const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

const calculateScore = (pieces) => {
    const correctOrder = [...Array(16).keys()];
    const correctPositions = pieces.reduce((score, piece, index) => {
        return score + (piece === correctOrder[index] ? 1 : 0);
    }, 0);

    const totalPieces = pieces.length;
    const percentage = (correctPositions / totalPieces) * 100;

    const score = Math.max(1, Math.round((percentage / 100) * 10));
    return score;
};

const Puzzle = ({ position, onClose, rotation, puzzleId }) => {
    const [pieces, setPieces] = useState(shuffleArray([...Array(16).keys()]));
    const [isComplete, setIsComplete] = useState(false);
    const [score, setScore] = useState(null);
    const [feedback, setFeedback] = useState(null);
    const [feedbackVisible, setFeedbackVisible] = useState(false); // Estado para animar
    const [isGridVisible, setIsGridVisible] = useState(false);

    const imageMap = {
        1: exampleImage1,
        2: exampleImage2,
        3: exampleImage3,
    };

    const [selectedImage, setSelectedImage] = useState(imageMap[puzzleId] || exampleImage1);

    useEffect(() => {
        // Mostrar el puzzle-grid al montar el componente
        setTimeout(() => setIsGridVisible(true), 100); // Retraso para activar animación
    }, []);

    useEffect(() => {
        setSelectedImage(imageMap[puzzleId] || exampleImage1);
        setPieces(shuffleArray([...Array(16).keys()]));
    }, [puzzleId]);

    const handleClose = () => {
        setIsGridVisible(false); // Oculta el puzzle-grid con animación
        setTimeout(() => onClose(null), 500); // Espera a que termine la animación antes de cerrar
    };


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
        const correctPieces = pieces.filter((piece, index) => piece === index).length;
        const totalPieces = pieces.length;
        const incorrectPieces = totalPieces - correctPieces;
        const percentage = (correctPieces / totalPieces) * 100;

        useQuizStore.getState().setPuzzleProgress(puzzleId, correctPieces, incorrectPieces, percentage, score);

        setScore(score);
        setIsComplete(true);

        // Mostrar retroalimentación con animación
        setFeedback({ correctPieces, incorrectPieces, score });
        setFeedbackVisible(true);

        // Ocultar retroalimentación después de la animación
        setTimeout(() => setFeedbackVisible(false), 3000);
        setTimeout(() => setFeedback(null), 3500);
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
                        marginBottom: "15px",
                    }}>
                    <h1>Rompecabezas</h1>
                    <div className={`puzzle-grid ${isGridVisible ? 'visible' : ''}`}>
                        {pieces.map((piece, index) => (
                            <div
                                key={index}
                                className="puzzle-piece"
                                draggable
                                onDragStart={(e) => handleDragStart(e, index)}
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={(e) => handleDrop(e, index)}
                            >
                                {piece !== 16 && (
                                    <img
                                        src={selectedImage}
                                        alt="Puzzle-piece"
                                        style={{
                                            objectPosition: `-${(piece % 4) * 75}px -${Math.floor(piece / 4) * 75}px`,
                                            width: "300px",
                                            height: "300px",
                                        }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {feedback && (
                        <div className={`feedback-message ${feedbackVisible ? "visible" : ""}`}>
                            <p>Piezas correctas: {feedback.correctPieces}</p>
                            <p>Piezas incorrectas: {feedback.incorrectPieces}</p>
                            <p>Puntuación: {feedback.score}</p>
                        </div>
                    )}
                </div>

                <button
                    className="puzzle-button-open"
                    style={{
                        padding: '10px 20px',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '15px',
                        fontWeight: '600',
                        marginLeft: '5px'
                    }}
                    onClick={handleComplete}
                >
                    Completar Puzzle
                </button>

                <button
                    className="puzzle-button-close"
                    style={{
                        padding: '10px 20px',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '15px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        marginLeft: '30px'
                    }}
                    onClick={handleClose}
                >
                    Cerrar Puzzle
                </button>
            </Html>
        </>
    );
};

export default Puzzle;
