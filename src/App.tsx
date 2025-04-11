import React, { useState } from "react";
import TodoForms from "./Components/TodoContainer/todocontainer";
import TodoList from "./Components/TodoListing/Todolist";
import { Todo } from "./Components/types/todo.types";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
      length: "",
      status: "todo",
    };

    setTodos((prev) => [...prev, newTodo]);
  };
  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id: number, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-full h-screen custom-cursor">
      <div className="h-screen">
        {/* Form Section */}
        <div className="bg-white flex justify-center p-4">
          <div className="w-full max-w-1/3">
            <h1 className="text-center font-poppins text-xl font-medium">
              Todo List
            </h1>
            <TodoForms onAddTodo={addTodo} />
          </div>
        </div>

        <div className="w-full grid grid-cols-3 justify-center gap-8 ">
          {/* Todo List Section */}
          <div className="col-span-1 bg-white p-4 ">
            <h1 className="text-center font-poppins text-xl font-medium ">
              To Do
            </h1>
            <div className="">
              <TodoList
                todos={todos}
                onToggleTodo={toggleTodo}
                onEditTodo={editTodo}
                onDeleteTodo={deleteTodo}
              />
            </div>
          </div>
          <div className="col-span-1 bg-white p-4">
            <h1 className="text-center font-poppins text-xl font-medium">
              In Progress
            </h1>
          </div>
          {/* Completed Tasks Section (optional for future) */}
          <div className="col-span-1 bg-white p-4">
            <h1 className="text-center font-poppins text-xl font-medium">
              Completed
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
