import { create } from "zustand";

const useQuizStore = create((set) => ({
  quiz: {
    correctPieces: 0,
    incorrectPieces: 0,
    percentageQuizCompleted: 0,
  },

  setQuiz: (quizUpdates) =>
    set((state) => ({
      quiz: { ...state.quiz, ...quizUpdates },
    })),

  setPuzzleProgress: (correctPieces, incorrectPieces, percentage) =>
    set((state) => {
      console.log("Actualizando quiz state:", { correctPieces, incorrectPieces, percentage });
      return {
          quiz: {
              ...state.quiz,
              correctPieces,
              incorrectPieces,
              percentageQuizCompleted: percentage,
          },
      };
  }),

  clearQuiz: () =>
    set({
      quiz: {
        correctPieces: 0,
        incorrectPieces: 0,
        percentageQuizCompleted: 0,
      },
    }),

  incrementQuizProgress: () =>
    set((state) => {
      const newPercentage = Math.min(
        state.quiz.percentageQuizCompleted + 25,
        100
      );
      return {
        quiz: { ...state.quiz, percentageQuizCompleted: newPercentage },
      };
    }),
}));

export default useQuizStore;
