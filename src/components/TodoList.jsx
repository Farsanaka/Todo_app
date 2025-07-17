import { useEffect } from "react";
import { useTodoStore } from "../store/todoStore";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const { todos, addTodo } = useTodoStore();

  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((todo) => addTodo({ id: todo.id, text: todo.text }));
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Todo List</h2>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
