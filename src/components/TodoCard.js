import { Delete, Edit } from "@mui/icons-material";
import { Button, Card, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TodoCard = ({ text, completed }) => {
  const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  return (
    <Card
      style={{
        width: "100%",
        opacity: completed ? 0.5 : 1,
        borderLeft: `solid 4px ${
          colors[[Math.floor(Math.random() * colors.length)]]
        }`,
      }}
    >
      <Box padding={2} width="100%" display="flex" alignItems="center">
        <Box flex={1} ml={1}>
          <Typography variant="body1">{text}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <IconButton size="small" disabled={completed}>
            <Edit fontSize="small" />
          </IconButton>
          <IconButton size="small" disabled={completed}>
            <Delete fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <Box display="flex" justifyContent="end">
        <Button variant="text" disabled={completed}>
          Mark as complete
        </Button>
      </Box>
    </Card>
  );
};

export default TodoCard;
