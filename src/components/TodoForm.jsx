import { useState } from "react";
import { inputVariants, buttonVariants } from "../lib/cvaVariants";
import { useTodoStore } from "../store/todoStore";

const TodoForm = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo({ text });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3">
      <input
        type="text"
        className={inputVariants({
          className:
            "flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition",
        })}
        placeholder="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className={buttonVariants({
          className:
            "px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-lg hover:from-slate-800 hover:to-slate-950 transition",
        })}
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
