import { create } from "zustand";
import pickUniqueRandoms from "../utils/pickUniqueRandoms";
import questionData from "../data/question.json" assert { type: "json" };

export interface Quiz {
  id: number;
  question: string;
  choices: string[];
  answer: number;
  timeLimit: number;
}

export interface Result {
  correct: string;
  id: number;
  question: string;
  choice: string;
  answer: string;
}

interface QuizState {
  quizList: Quiz[];
  resultList: Result[];
  loadQuizList: (count: number) => Promise<void>;
  addResult: (input: Result) => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  quizList: [],
  resultList: [],
  loadQuizList: async (count) => {
    try {
      const loadedData: Quiz[] = questionData;

      const ids = pickUniqueRandoms(count);

      const data = loadedData.filter((quiz) => ids.includes(quiz.id));

      set({ quizList: data });
    } catch (err) {
      console.error("퀴즈 데이터를 불러오다 실패했습니다:", err);
    }
  },
  addResult: (result) =>
    set((state) => ({ resultList: [...state.resultList, result] })),
}));
