import { Add } from "@mui/icons-material";
import { Card, Fab } from "@mui/material";
import { Box } from "@mui/system";
import Header from "components/Header";
import TodoList from "components/TodoList";
import useTodos from "hooks/useTodos";
import { useEffect } from "react";

const Home = () => {
  const { getAllTodos } = useTodos();

  return (
    <Box
      display="flex"
      flexDirection="column"
      position="relative"
      minHeight="100vh"
      gap={2}
      boxShadow={3}
    >
      <Header />
      <TodoList data={getAllTodos.data?.data?.todos || []} />
      <Box position="fixed" bottom={30} right={30}>
        <Fab color="primary" aria-label="add" size="large">
          <Add />
        </Fab>
      </Box>
    </Box>
  );
};

export default Home;
