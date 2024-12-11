import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useQuizStore from "../../Stores/use-quiz-store";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../Styles/Quiz.css";

const Quiz = ({ onLogout }) => {
  const quizIds = [1, 2, 3];
  const quizzes = useQuizStore((state) => state.quizzes);
  const loadQuizResults = useQuizStore((state) => state.loadQuizResults);
  const navigate = useNavigate();
  const imageMap = {
    1: "/imgs/agua.jpg",
    2: "/imgs/contamination.jpg",
    3: "/imgs/agua2.jpg",
  };

  // Cargar los resultados del quiz cuando el componente se monta
  useEffect(() => {
    loadQuizResults(); // Cargar los resultados desde la base de datos
  }, [loadQuizResults]);

  return (
    <div>
      <Navbar onLogout={onLogout} />
      <div className="quiz-container">
        <h1 className="quiz-header">Quizzes</h1>
        <div className="quiz-cards-container">
          {quizIds.map((quizId) => {
            // Acceder a los datos del quiz desde el store
            const quiz = quizzes[quizId] || {}; // Usar un valor vacío si no hay datos
            const { correctPieces, incorrectPieces, percentageQuizCompleted, score } = quiz;
            const previewImage = imageMap[quizId];

            return (
              <div key={quizId} className="quiz-card">
                <img
                  src={previewImage}
                  alt={`Quiz ${quizId} preview`}
                  className="quiz-card-img"
                />
                <div className="quiz-card-info">
                  <h3 className="quiz-card-title">Quiz {quizId}</h3>
                  <p className="quiz-card-progress">
                    Progreso: {percentageQuizCompleted || 0}%
                  </p>
                  <p className="quiz-card-progress">
                    Piezas bien: {correctPieces || 0}
                  </p>
                  <p className="quiz-card-progress">
                    Piezas mal: {incorrectPieces || 0}
                  </p>
                  <p className="quiz-card-progress">
                    Puntaje: {score || 0}
                  </p>

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
