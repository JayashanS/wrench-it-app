import React from "react";
import { Outlet } from "react-router-dom";
import Titlebar from "../components/Titlebar";
import Drawer from "../components/Drawer";
import "../styles/Dashboard.css";
import {
  createTheme,
  ThemeProvider,
  getContrastRatio,
} from "@mui/material/styles";

function Dashboard() {
  const theme = createTheme({
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
    palette: {
      primary: {
        main: "#09BEB1",
        contrastText:
          getContrastRatio("#09BEB1", "#fff") > 4.5 ? "#fff" : "#111",
      },
    },
  });
  return (
    <div className="container-dashboard">
      <ThemeProvider theme={theme}>
        <Titlebar />
        <Drawer />
        <div className="outlet">
          <Outlet />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Dashboard;
