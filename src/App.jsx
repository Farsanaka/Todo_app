import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <main className="max-w-2xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        📝 Zustand To-Do App
      </h1>

      <section className="space-y-6">
        <TodoForm />
        <TodoList />
      </section>
    </main>
  );
}

export default App;
