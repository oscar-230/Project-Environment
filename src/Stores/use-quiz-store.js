import { create } from "zustand";
import userDAO from "../Dao/userDAO";
import useAuthStore from "./use-auth-store";

const useQuizStore = create((set, get) => ({
  quizzes: {
    1: { correctPieces: 0, incorrectPieces: 0, percentageQuizCompleted: 0 },
    2: { correctPieces: 0, incorrectPieces: 0, percentageQuizCompleted: 0 },
    3: { correctPieces: 0, incorrectPieces: 0, percentageQuizCompleted: 0 },
  },  
  points: 0,
  claimedIcons: [],

  addPoints: (points) =>
    set((state) => ({ points: state.points + points })),

  claimIcon: (iconId, cost) =>
    set((state) => {
      if (state.points >= cost) {
        return {
          points: state.points - cost,
          claimedIcons: [...state.claimedIcons, iconId],
        };
      }
      console.warn("No tienes suficientes puntos para reclamar este ícono");
      return state;
    }),

  setQuiz: (quizId, quizUpdates) =>
    set((state) => ({
      quizzes: {
        ...state.quizzes,
        [quizId]: { ...state.quizzes[quizId], ...quizUpdates },
      },
    })),

  setPuzzleProgress: (quizId, correctPieces, incorrectPieces, percentage, score) =>
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
            score,
          },
        },
      };
    }),

  clearQuiz: (quizId) =>
    set((state) => ({
      quizzes: {
        ...state.quizzes,
        [quizId]: {
          correctPieces: 0,
          incorrectPieces: 0,
          percentageQuizCompleted: 0,
        },
      },
    })),

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

    saveQuizResult: async (quizId) => {
      const { user } = useAuthStore.getState();
      const quiz = get().quizzes[quizId];
      if (!user || !quiz) {
        console.warn("No user logged in or quiz data missing");
        return;
      }
    
      try {
        await userDAO.saveQuizResult(user.uid, { quizId, ...quiz });
      } catch (error) {
        console.error("Error saving quiz result: ", error);
      }
    },
    
    
  

  loadQuizResults: async () => {
    const { user } = useAuthStore.getState();
    if (!user) {
      console.warn("No user logged in");
      return;
    }
    try {
      const results = await userDAO.getQuizResultsByUserId(user.uid);
      const formattedResults = results.reduce((acc, result) => {
        acc[result.quizId] = result;
        return acc;
      }, {});
      set({ quizzes: formattedResults });
    } catch (error) {
      console.error("Error loading quiz results: ", error);
    }
  },
}));

export default useQuizStore;
