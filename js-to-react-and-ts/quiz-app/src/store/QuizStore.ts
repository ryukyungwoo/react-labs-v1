import { create } from "zustand";

export interface Quiz {
  id: number;
  question: string;
  choices: string[];
  answer: number;
  timeLimit: number;
}

export interface Result {
  id: number;
  question: string;
  choice: string;
  answer: number;
}

interface QuizState {
  quizList: Quiz[];
  resultList: Result[];
  loadQuizList: () => Promise<void>;
  addResult: (input: Result) => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  quizList: [],
  resultList: [],
  loadQuizList: async () => {
    try {
      const res = await fetch("/data/question.json");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data: Quiz[] = await res.json();
      set({ quizList: data });
    } catch (err) {
      console.error("퀴즈 데이터를 불러오다 실패했습니다:", err);
    }
  },
  addResult: (result) =>
    set((state) => ({ resultList: [...state.resultList, result] })),
}));
