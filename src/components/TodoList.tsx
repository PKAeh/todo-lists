import ModalAddTodoList from "./ModalAddTodoList";
import Taps from "./Taps";

const TodoList = () => {
  return (
    <div className="w-full h-[500px] max-w-[700px] m-auto rounded shadow-blueShadow bg-red-400">
      <div>
        <p
          style={{
            // backgroundColor: "red",
            padding: "30px 0",
            textAlign: "center",
            // boxShadow: "0px 5px 5px 5px rgba(19,101,239,0.15)",
            textDecoration: "underline",
            color: "#1365ef",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textShadow: "0px 5px 5px rgba(19,101,239,0.3)",
          }}
        >
          My To-do List
        </p>
      </div>

      <Taps />

      <ModalAddTodoList />
    </div>
  );
};

export default TodoList;
