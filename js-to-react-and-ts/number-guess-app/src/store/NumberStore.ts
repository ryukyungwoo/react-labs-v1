import { create } from "zustand";

export interface Trial {
  id: number;
  input: number;
  judgement: string;
}

interface Try {
  target: number;
  trials: Trial[];
  addTrial: (input: number) => void;
  judge: (input: number) => string;
  endgame: boolean;
}

export const useNumberStore = create<Try>((set, get) => ({
  target: Math.floor(Math.random() * 100),
  trials: [],
  endgame: false,
  judge: (input) => {
    const t = get().target;

    console.log(`t: ${t} , input : ${input}`);
    if (t < input) {
      return "down";
    } else if (t > input) {
      return "up";
    } else {
      return "currect";
    }
  },

  addTrial: (input) =>
    set((state) => {
      const result = state.judge(input); // ① 입력값 판정
      const newTrial: Trial = {
        id: state.trials.length + 1,
        input,
        judgement: result,
      };
      return {
        trials: [...state.trials, newTrial], // ② 새 트라이얼을 추가
        endgame: result === "currect", // ③ ‘currect’면 endgame을 true
      };
    }),
}));
