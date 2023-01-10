import { Card } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TodoCard = ({ text }) => {
  return (
    <Card style={{ width: "100%" }}>
      <Box padding={2} width="100%">
        {text}
      </Box>
    </Card>
  );
};

export default TodoCard;
