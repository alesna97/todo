import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import TodoCard from "components/TodoCard";
import React from "react";

const TodoList = ({ data = [], loading = false }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={2}
      gap={2}
    >
      {data.map((item) => (
        <TodoCard text={item.todo} key={item.id} completed={item.completed} />
      ))}
      {loading && <CircularProgress size={24} />}
    </Box>
  );
};

export default TodoList;
