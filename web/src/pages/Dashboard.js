import React from "react";
import { Outlet } from "react-router-dom";
import Titlebar from "../components/Titlebar";
import Drawer from "../components/Drawer";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="container-dashboard">
      <Titlebar />
      <Drawer />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
