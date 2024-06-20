import * as React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import "./Header.css";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="Header-AppBar" position="static">
        <Toolbar>
          <Typography variant="h2" color="black" sx={{ flexGrow: 1 }}>
            Food Finder
          </Typography>
        </Toolbar>
        <Toolbar>
          <Typography variant="h3" color="white">
            Find the best food on The Internets!!!
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
