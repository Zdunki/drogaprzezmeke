import * as React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import "./Header.css";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="Header-AppBar" position="static">
        <Toolbar>
          <Typography
            fontFamily="Lucida Paragraph"
            className="Header-TitleText"
            variant="h2"
            sx={{ flexGrow: 1 }}
          >
            Food Finder
          </Typography>
        </Toolbar>
        <Toolbar>
          <Typography
            fontFamily="Lucida Handwriting"
            className="Header-SubTitleText"
            variant="h4"
            sx={{ flexGrow: 1 }}
          >
            Find the best food on The Internets!!!
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
