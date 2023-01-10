import { AppBar, Toolbar, Typography } from "@mui/material";
import React, { memo } from "react";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography color="white" fontWeight="bold" fontSize={18}>
          Todo list
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Header);
