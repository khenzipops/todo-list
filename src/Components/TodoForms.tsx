const Todoforms = () => {
  return (
    <div>
      <h1 className="text-center font-Roboto text-2xl font-medium m-2">TODO</h1>
      <form className="flex justify-center p-3">
        <input
          type="text"
          id="task"
          className="peer h-12 w-full border border-black rounded-lg px-4 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Add Task"
        />
        <label
          htmlFor="task"
          className="absolute left-6 top-10 text-gray-400 text-sm transition-all duration-200 ease-in-out
           peer-placeholder-shown:top-18 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
           peer-focus:top-10 peer-focus:text-sm peer-focus:text-blue-500"
        >
          Add Task
        </label>
        <button className="bg-blue-500 text-white rounded-md p-2 ml-2">
          Add
        </button>
      </form>
    </div>
  );
};

export default Todoforms;
