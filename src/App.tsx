// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Container } from "@mui/material";
import TodoList from "./components/TodoList";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Unstable_Grid2";

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Grid container sx={{ height: "100vh" }}>
          <TodoList />
        </Grid>
      </Container>
    </>
  );
}

export default App;
