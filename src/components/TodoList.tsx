import Tabs from "./Tabs";

const TodoList = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="flex flex-col w-full h-[31.25rem] max-w-[43.75rem] rounded shadow-blueShadow p-4">
        <div>
          <p className="py-7 text-center underline drop-shadow-2xl text-[#4ba8ff] font-bold text-3xl">
            My To-do List
          </p>
        </div>

        <div className="grow">
          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
