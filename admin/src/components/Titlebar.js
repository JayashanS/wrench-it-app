import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Titlebar.css";

// icons and logos
import Logo from "../assets/wrenchit.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Titlebar() {
  return (
    <div>
      <div className="nav">
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <ArrowBackIosIcon
            style={{
              color: "#868e96",
              marginRight: "10px",
              fontSize: 20,
            }}
          />
        </Link>
        <Link style={{ display: "flex", alignItems: "center" }}>
          <img src={Logo} alt="Logo" className="d-navbar-logo" />
        </Link>
        <span className="d-navbar-company-name">Wrench it</span>
        <Link style={{ display: "flex", alignItems: "center" }}>
          <ArrowForwardIosIcon
            style={{
              color: "#868e96",
              marginRight: "10px",
              marginLeft: "30px",
              fontSize: 12,
            }}
          />
        </Link>
        <span
          style={{ color: "#075961", fontSize: "14px", fontWeight: "bold" }}
        >
          Administrator Dashboard
        </span>
      </div>
    </div>
  );
}

export default Titlebar;
