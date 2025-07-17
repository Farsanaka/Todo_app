import { useTodoStore } from "../store/todoStore";
import { buttonVariants, inputVariants } from "../lib/cvaVariants";
import { useState } from "react";

const TodoItem = ({ todo }) => {
  const { deleteTodo, updateTodo } = useTodoStore();
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleSave = () => {
    if (text.trim()) {
      updateTodo(todo.id, text);
      setEdit(false);
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 p-3 bg-white border border-gray-200 rounded-xl shadow-sm">
      {edit ? (
        <input
          className={inputVariants({
            className:
              "flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 transition",
          })}
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
      ) : (
        <span className="flex-1 text-gray-800">{todo.text}</span>
      )}

      <div className="flex gap-2">
        {edit ? (
          <button
            onClick={handleSave}
            className="px-3 py-1.5 bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-md hover:from-slate-800 hover:to-slate-950 transition"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEdit(true)}
            className="px-3 py-1.5 text-slate-600 hover:text-slate-800 border border-slate-300 rounded-md transition"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteTodo(todo.id)}
          className="px-3 py-1.5 bg-gradient-to-r from-rose-600 to-rose-800 text-white rounded-md hover:from-rose-700 hover:to-rose-900 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
