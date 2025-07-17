import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export const useTodoStore = create((set) => ({
  todos: [],

  addTodo: ({ text, id }) =>
    set((state) => {
      if (state.todos.some((todo) => todo.id === id)) {
        return {}; 
      }

      return {
        todos: [...state.todos, { id: id || uuidv4(), text }],
      };
    }),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  updateTodo: (id, newText) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      ),
    })),
}));
