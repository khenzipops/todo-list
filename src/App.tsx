import Todoforms from "./Components/TodoForms";

const App = () => {
  return (
    <>
      <div className="grid grid-cols-[40%_60%]  grid-rows-2 h-screen">
        <div className="col-span-1 row-span-2 bg-[var(--primary)] flext items-center justify-center Poppins w-full">
          <Todoforms />
        </div>
        <div className="col-span-1 bg-red-500 "></div>
        <div className="col-span-1 bg-green-500 "></div>
      </div>
    </>
  );
};

export default App;
