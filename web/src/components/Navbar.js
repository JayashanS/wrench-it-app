import React, { useState } from "react";
import "../styles/Navbar.css"; // Import the CSS file
import Image from "../assets/logo.png";

function Navbar() {
  const [activePage, setActivePage] = useState(null);

  const handleClickPage = (page) => {
    setActivePage(page);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-logo">
          <img src={Image} alt="Logo" className="navbar-logo" />
        </a>
        <span className="navbar-company-name">Company Name</span>
        <div className="navbar-links-container">
          <div
            className={`navbar-link-box ${
              activePage === "home" ? "active" : ""
            }`}
            onClick={() => handleClickPage("home")}
          >
            Home
          </div>
          <div
            className={`navbar-link-box ${
              activePage === "products" ? "active" : ""
            }`}
            onClick={() => handleClickPage("products")}
          >
            Products
          </div>
          <div
            className={`navbar-link-box ${
              activePage === "aboutus" ? "active" : ""
            }`}
            onClick={() => handleClickPage("aboutus")}
          >
            About Us
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <button className="navbar-button">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
