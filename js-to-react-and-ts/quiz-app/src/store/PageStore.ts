import { create } from "zustand";

interface PageState {
  isStarting: boolean;
  isSovling: boolean;
  isEnding: boolean;

  quizStart: () => void;
  quizEnd: () => void;
  quizRestart: () => void;
}

export const usePageStore = create<PageState>((set) => ({
  isStarting: true,
  isSovling: false,
  isEnding: false,

  quizStart: () =>
    set(() => ({ isStarting: false, isSovling: true, isEnding: false })),
  quizEnd: () =>
    set(() => ({ isStarting: false, isSovling: false, isEnding: true })),
  quizRestart: () =>
    set(() => ({ isStarting: true, isSovling: false, isEnding: false })),
}));
