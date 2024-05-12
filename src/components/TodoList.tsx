import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import ModalAddTodoList from "./ModalAddTodoList";
// import Taps from "./Taps";

const TodoList = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "500px",
        maxWidth: "700px",
        margin: "auto",
        borderRadius: "4px",
        boxShadow: "0px 0px 8px rgba(19,101,239,0.3)",
      }}
      spacing={0}
    >
      <Grid xs={12}>
        <Typography
          variant="h1"
          sx={{
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
        </Typography>
      </Grid>

      {/* <Taps /> */}

      <ModalAddTodoList />
    </Grid>
  );
};

export default TodoList;
