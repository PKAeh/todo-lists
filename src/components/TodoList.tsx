import Grid from "@mui/material/Unstable_Grid2";
import { Box, Input, Typography } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import useTodoStore from "../store/todoStore";
import ModalAddTodoList from "./ModalAddTodoList";

const TodoList = () => {
  const ariaLabel = { "aria-label": "description" };

  const openModal = useTodoStore((state) => state.openModal);

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

      <Grid xs={12}>
        <Box
          sx={{ display: "flex", alignItems: "center", position: "relative" }}
        >
          <Input
            placeholder="Add new to-do lists"
            inputProps={ariaLabel}
            fullWidth
            sx={{ height: "40px", paddingLeft: "40px" }}
          />
          <ListAltIcon
            sx={{
              color: "action.active",
              mr: 1,
              my: 0.5,
              position: "absolute",
              left: "5px",
            }}
          />
        </Box>
      </Grid>

      <Grid
        sx={{
          bgcolor: "rgba(221,221,221,0.30)",
          height: "150px",
          borderRadius: "4px",
          padding: "0px",
          margin: "0px 8px",
          boxShadow: "5px 5px 12px 1px rgba(0,0,0,0.10)",
        }}
        xs={6}
        onClick={openModal}
      >
        +
      </Grid>

      {/* <Taps /> */}

      <ModalAddTodoList />
    </Grid>
  );
};

export default TodoList;
