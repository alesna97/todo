import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import TodoCard from "components/TodoCard";
import React from "react";

const TodoList = ({
  data = [],
  loading = false,
  onEditItem,
  onDeleteItem,
  onMarkItem,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={2}
      gap={2}
    >
      {data.map((item) => (
        <TodoCard
          text={item.todo}
          key={item.id}
          completed={item.completed}
          onClickEdit={() => onEditItem(item.id)}
          onClickDelete={() => onDeleteItem.mutate({ id: item.id })}
          onMarkComplete={() => onMarkItem.mutate({ id: item.id })}
        />
      ))}
      {loading && <CircularProgress size={24} />}
    </Box>
  );
};

export default TodoList;
