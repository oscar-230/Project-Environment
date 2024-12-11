import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../Styles/Quiz.css";
import useQuizStore from "../../Stores/use-quiz-store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = ({ onLogout }) => {
    const quizIds = [1, 2, 3]; 
    const quizzes = useQuizStore((state) => state.quizzes);
    const navigate = useNavigate();
    const imageMap = {
        1: "/imgs/agua.jpg", 
        2: "/imgs/contamination.jpg",
        3: "/imgs/agua2.jpg",
    };

    const handleTryQuiz = (quizId) => {
        console.log(`Intentar el quiz con ID: ${quizId}`);
        // Aquí puedes agregar la lógica para iniciar el quiz.
    };

    return (
        <div>
            <Navbar onLogout={onLogout} />
            <div className="quiz-container">
                <h1 className="quiz-header">Quizzes</h1>
                <div className="quiz-cards-container">
                    {quizIds.map((quizId) => {
                        const { correctPieces, incorrectPieces, percentageQuizCompleted } = quizzes[quizId];
                        const previewImage = imageMap[quizId];

                        return (
                            <div key={quizId} className="quiz-card">
                                <img src={previewImage} alt={`Quiz ${quizId} preview`} className="quiz-card-img" />
                                <div className="quiz-card-info">
                                    <h3 className="quiz-card-title">Quiz {quizId}</h3>
                                    <p className="quiz-card-progress">Progreso: {percentageQuizCompleted}%</p>
                                    <p className="quiz-card-progress">Piezas bien: {correctPieces}</p>
                                    <p className="quiz-card-progress">Piezas mal: {incorrectPieces}</p>
                                    <button 
                                        className="quiz-card-button"
                                        onClick={() => navigate("/quiznature")}
                                    >
                                        Intentar
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Quiz;
