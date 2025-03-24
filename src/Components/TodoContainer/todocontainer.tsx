import React, { useState } from "react";

interface TodoFormsProps {
  onAddTodo: (text: string) => void;
}
const TodoForms: React.FC<TodoFormsProps> = ({ onAddTodo }) => {
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    if (!task.trim()) return; // Prevent adding empty tasks
    onAddTodo(task);

    setTask(""); // Clear input field after adding
  };

  return (
    <div className="relative mt-5 p-5">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          id="floating_outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_outlined"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-6 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-7"
        >
          Add a new task
        </label>
        <button
          onClick={handleAddTodo}
          className="absolute right-7 top-7 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Add
        </button>
      </form>
    </div>
  );
};
export default TodoForms;
