import React, { useState } from "react";
import TodoForms from "./Components/TodoContainer/todocontainer";
import TodoList from "./Components/TodoListing/Todolist";
import { Todo } from "./Components/types/todo.types";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };
  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id: string, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="grid grid-cols-[40%_60%] grid-rows-2 h-screen">
      {/* Form Section */}
      <div className="col-span-1 row-span-2 bg-white  justify-center p-4">
        <h1 className="text-center font-Poppins text-xl font-medium">
          Todo List
        </h1>
        <TodoForms onAddTodo={addTodo} />{" "}
        <div className="">
          <TodoList
            todos={todos}
            onToggleTodo={toggleTodo}
            onEditTodo={editTodo}
            onDeleteTodo={deleteTodo}
          />
          {/* <TodoList
            todos={todos}
            onToggleTodo={function (id: string): void {
              throw new Error("Function not implemented.");
            }}
            onEditTodo={function (id: string, newText: string): void {
              throw new Error("Function not implemented.");
            }}
            onDeleteTodo={function (id: string): void {
              throw new Error("Function not implemented.");
            }}
          /> */}
        </div>
      </div>

      {/* Todo List Section */}
      <div className="col-span-1 bg-green-500 p-4">
        {" "}
        <h1 className="text-center font-Poppins text-xl font-medium">
          Working Tasks
        </h1>
      </div>

      {/* Completed Tasks Section (optional for future) */}
      <div className="col-span-1 bg-orange-600 p-4">
        <h1 className="text-center font-Poppins text-xl font-medium">
          Completed Tasks
        </h1>
      </div>
    </div>
  );
};

export default App;
