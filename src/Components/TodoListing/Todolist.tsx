import React, { useState } from "react";
import { Todo } from "../types/todo.types";
import EditTodoModal from "../modals/EditTodoModal"; // Adjust the import path if necessary

interface TodoListProps {
  todos: Todo[]; // Corrected: todos should be an array of Todo objects
  onToggleTodo: (id: number) => void;
  onEditTodo: (id: number, newText: string) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleTodo,
  onEditTodo,
  onDeleteTodo,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);

  const handleEditClick = (todo: Todo) => {
    setCurrentTodo(todo);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setCurrentTodo(null);
  };

  const handleUpdateTodo = (updatedTodo: Todo) => {
    onEditTodo(updatedTodo.id, updatedTodo.text);
    handleCloseEditModal();
  };

  if (todos.length === 0) {
    return <p className="text-center text-gray-500">No tasks available.</p>;
  }

  return (
    <div className="p-5 h-120 overflow-y-auto">
      <ul className="space-y-2">
        {Array.isArray(todos) &&
          todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-4 border rounded-lg shadow"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => {
                    console.log("check uncheck ID:", todo.id);
                    onToggleTodo(todo.id);
                  }}
                  className="mr-3"
                />
                <span
                  className={`${
                    todo.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {todo.text}
                </span>
              </div>
              <div>
                {/* Edit Button Now Triggers Modal */}
                <button
                  className="bg-blue-500 text-white py-1 px-2 rounded mr-2 cursor-pointer hover:bg-blue-800"
                  onClick={() => handleEditClick(todo)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1"
                  >
                    <path
                      d="M24.336,4.8l2.859,2.859L15.3,20H12V16.7L24.336,4.8M24.362,0a1.991,1.991,0,0,0-1.411.584L8,15v9h9L31.416,9.05a2,2,0,0,0,0-2.822L25.773.585A1.988,1.988,0,0,0,24.362,0Z"
                      fill="#fff"
                    />
                    <path
                      d="M28,27a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h5a2,2,0,0,0,2-2h0a2,2,0,0,0-2-2H2A2,2,0,0,0,0,2V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V22a2,2,0,0,0-2-2h0a2,2,0,0,0-2,2Z"
                      fill="#fff"
                    />
                  </svg>
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded cursor-pointer hover:bg-red-800"
                  onClick={() => {
                    console.log("Deleting ID:", todo.id);
                    onDeleteTodo(todo.id);
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1"
                  >
                    <path
                      d="M24,7.25 C27.1,7.25 29.63,9.7 29.75,12.78 L29.75,13 L37,13 C37.69,13 38.25,13.56 38.25,14.25 C38.25,14.89 37.75,15.42 37.12,15.49 L37,15.5 L35.9,15.5 L34.2,38.07 C34.03,40.28 32.19,42 29.96,42 L18.03,42 C15.8,42 13.96,40.28 13.79,38.07 L12.09,15.5 L11,15.5 C10.35,15.5 9.82,15.00 9.75,14.25 C9.75,13.60 10.24,13.07 10.87,13.00 L11,13 L18.25,13 C18.25,9.82 20.82,7.25 24,7.25 Z"
                      fill="#fff"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
      </ul>
      {isEditModalOpen && currentTodo && (
        <EditTodoModal
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          todo={currentTodo}
          onUpdate={handleUpdateTodo}
        />
      )}
    </div>
  );
};

export default TodoList;
