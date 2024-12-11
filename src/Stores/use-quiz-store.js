import { create } from "zustand";

const useQuizStore = create((set) => ({
  quizzes: {
    1: { correctPieces: 0, incorrectPieces: 0, percentageQuizCompleted: 0 },
    2: { correctPieces: 0, incorrectPieces: 0, percentageQuizCompleted: 0 },
    3: { correctPieces: 0, incorrectPieces: 0, percentageQuizCompleted: 0 },
  },

  setQuiz: (quizId, quizUpdates) =>
    set((state) => ({
      quizzes: {
        ...state.quizzes,
        [quizId]: { ...state.quizzes[quizId], ...quizUpdates },
      },
    })),

  setPuzzleProgress: (quizId, correctPieces, incorrectPieces, percentage) =>
    set((state) => {
      console.log("Actualizando quiz state:", { correctPieces, incorrectPieces, percentage });
      return {
        quizzes: {
          ...state.quizzes,
          [quizId]: {
            ...state.quizzes[quizId],
            correctPieces,
            incorrectPieces,
            percentageQuizCompleted: percentage,
          },
        },
      };
    }),

  clearQuiz: (quizId) =>
    set({
      quizzes: {
        ...state.quizzes,
        [quizId]: {
          correctPieces: 0,
          incorrectPieces: 0,
          percentageQuizCompleted: 0,
        },
      },
    }),

  incrementQuizProgress: (quizId) =>
    set((state) => {
      const newPercentage = Math.min(
        state.quizzes[quizId].percentageQuizCompleted + 25,
        100
      );
      return {
        quizzes: {
          ...state.quizzes,
          [quizId]: { ...state.quizzes[quizId], percentageQuizCompleted: newPercentage },
        },
      };
    }),
}));

export default useQuizStore;
