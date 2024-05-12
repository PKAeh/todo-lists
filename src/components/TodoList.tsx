import ModalAddTodoList from "./ModalAddTodoList";
import Taps from "./Taps";

const TodoList = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        maxWidth: "700px",
        margin: "auto",
        borderRadius: "4px",
        boxShadow: "0px 0px 8px rgba(19,101,239,0.3)",
      }}
    >
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
