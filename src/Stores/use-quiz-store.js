import { create } from "zustand";
import userDAO from "../Dao/userDAO";
import useAuthStore from "./use-auth-store";

const useQuizStore = create((set, get) => ({
  quizzes: {
    1: { correctPieces: 0, incorrectPieces: 0, percentageQuizCompleted: 0 },
    2: { correctPieces: 0, incorrectPieces: 0, percentageQuizCompleted: 0 },
    3: { correctPieces: 0, incorrectPieces: 0, percentageQuizCompleted: 0 },
  },

  // Agregar la lista de íconos a `useQuizStore`
  animalIcons: [
    { id: 1, name: "Elefante", iconUrl: "/imgs/icons/elephant-icon.png", cost: 5 },
    { id: 2, name: "Tigre", iconUrl: "/imgs/icons/tiger-icon.jpg", cost: 8 },
    { id: 3, name: "Llama", iconUrl: "/imgs/icons/llama-icon.png", cost: 10 },
    { id: 4, name: "Pez", iconUrl: "/imgs/icons/fish-icon.png", cost: 10 },
    { id: 5, name: "Cerdo", iconUrl: "/imgs/icons/pig-icon.png", cost: 15 },
    { id: 6, name: "Leon", iconUrl: "/imgs/icons/lion-icon.png", cost: 18 },
    { id: 7, name: "Tiburón", iconUrl: "/imgs/icons/shark-icon.png", cost: 20 },
    { id: 8, name: "Rino", iconUrl: "/imgs/icons/rino-icon.png", cost: 22 },
    { id: 9, name: "Jirafa", iconUrl: "/imgs/icons/giraffe-icon.jpg", cost: 25 },
    { id: 10, name: "Mono", iconUrl: "/imgs/icons/monkey-icon.png", cost: 30 },
  ],

  
  points: 0,
  claimedIcons: [], // Íconos desbloqueados
  currentIcon: null, // Ícono actual seleccionado (por defecto null)

  addPoints: (points) =>
    set((state) => ({ points: state.points + points })),

  claimIcon: (iconId, cost) =>
    set((state) => {
      // Calcular los puntos totales acumulados de los quizzes
      const totalPoints = Object.values(state.quizzes).reduce(
        (total, quiz) => total + (quiz.score || 0),
        0
      );

      if (totalPoints >= cost) {
        return {
          claimedIcons: [...state.claimedIcons, iconId],
          quizzes: {
            ...state.quizzes,
          },
          // Restar puntos globales (opcional)
          points: totalPoints - cost,
        };
      }

      console.warn("No tienes suficientes puntos para reclamar este ícono");
      return state;
    }),

  getTotalPoints: () => {
    const quizzes = get().quizzes;
    return Object.values(quizzes).reduce(
      (total, quiz) => total + (quiz.score || 0),
      0
    );
  },

  setCurrentIcon: (iconUrl) => 
    set(() => ({ currentIcon: iconUrl })), // Cambiar el ícono actual

  setQuiz: (quizId, quizUpdates) =>
    set((state) => ({
      quizzes: {
        ...state.quizzes,
        [quizId]: { ...state.quizzes[quizId], ...quizUpdates },
      },
    })),

  setPuzzleProgress: (quizId, correctPieces, incorrectPieces, percentage, score) =>
    set((state) => {
      console.log("Actualizando quiz state:", {
        correctPieces,
        incorrectPieces,
        percentage,
      });
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
          [quizId]: {
            ...state.quizzes[quizId],
            percentageQuizCompleted: newPercentage,
          },
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
