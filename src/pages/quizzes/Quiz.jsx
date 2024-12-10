import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../Styles/Quiz.css";
import useQuizStore from "../../Stores/use-quiz-store";
import { useEffect } from "react";

const Quiz = ({ onLogout }) => {
    const { correctPieces, incorrectPieces, percentageQuizCompleted } = useQuizStore((state) => state.quiz);

    useEffect(() => {
        console.log("Estado del quiz actualizado:", { correctPieces, incorrectPieces, percentageQuizCompleted });
    }, [correctPieces, incorrectPieces, percentageQuizCompleted]);

    return (
        <div>
            <Navbar onLogout={onLogout} />
            <div className="quiz-container">
                <h1 className="quiz-header">Quiz</h1>
                <p className="quiz-progress">Progreso del quiz: {percentageQuizCompleted}%</p>
                <p className="quiz-progress">Piezas bien colocadas: {correctPieces}</p>
                <p className="quiz-progress">Piezas incorrectas: {incorrectPieces}</p>
            </div>
            <Footer />
        </div>
    );
};

export default Quiz;