import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
