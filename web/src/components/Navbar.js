import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css"; // Import the CSS file
import Image from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink exact to="/" className="navbar-logo">
          <img src={Image} alt="Logo" className="navbar-logo" />
        </NavLink>
        <span className="navbar-company-name">Wrench it</span>
        <div className="navbar-links-container">
          <NavLink
            exact
            to="/"
            className="navbar-link-box"
            activeClassName="active"
            style={{ textDecoration: "none" }}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="navbar-link-box"
            activeClassName="active"
            style={{ textDecoration: "none" }}
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard"
            className="navbar-link-box"
            activeClassName="active"
            style={{ textDecoration: "none" }}
          >
            Dashboard
          </NavLink>
        </div>
      </div>
      <div className="navbar-right">
        <button className="navbar-button">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
