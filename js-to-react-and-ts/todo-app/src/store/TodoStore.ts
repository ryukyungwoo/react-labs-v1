import { create } from "zustand";

export interface TodoType {
  id: number;
  content: string;
}

interface Todos {
  list: TodoType[];
  addTodo: (content: string) => void;
  deleteTodo: (id: number) => void;
}

export const useTodoStore = create<Todos>((set) => ({
  list: [],
  addTodo: (content) =>
    set((state) => ({
      list: [...state.list, { id: state.list.length + 1, content }],
    })),
  deleteTodo: (number) =>
    set((state) => ({
      list: state.list.filter((todo) => todo.id !== number),
    })),
}));
