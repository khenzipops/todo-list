import React, { useState, useEffect } from "react";
import { Todo } from "../types/todo.types"; // Assuming you have a Todo type defined

interface EditTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  todo: Todo | null;
  onUpdate: (updatedTodo: Todo) => void;
}

const EditTodoModal: React.FC<EditTodoModalProps> = ({
  isOpen,
  onClose,
  todo,
  onUpdate,
}) => {
  const [editText, setEditText] = useState("");

  useEffect(() => {
    if (todo) {
      setEditText(todo.text);
    } else {
      setEditText(""); // Clear the text when no todo is being edited
    }
  }, [todo]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const handleSaveClick = () => {
    if (todo) {
      onUpdate({ ...todo, text: editText });
    }
  };

  const handleCloseModal = () => {
    onClose();
    // Optionally clear the selected todo on close if needed
    // setCurrentTodo(null); in your parent component
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0  bg-opacity-10 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Edit Todo
        </h2>
        <input
          type="text"
          value={editText}
          onChange={handleInputChange}
          className="w-full border border-gray-800 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={handleCloseModal}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveClick}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodoModal;
