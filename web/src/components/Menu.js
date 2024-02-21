import React, { useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import "../styles/Menu.css"; // Import the CSS file

const Menu = () => {
  // State to track profile photo and name
  const [photo, setPhoto] = useState(""); // You can set a default photo URL here
  const [name, setName] = useState("John Doe"); // You can set a default name here

  // Function to handle photo change
  const handleChangePhoto = () => {
    // Logic to handle photo change, e.g., open file picker
    console.log("Change photo");
  };

  return (
    <div className="menu-container">
      <div className="menu-profile-section">
        <Avatar
          alt="Profile"
          src={photo}
          sx={{ width: 100, height: 100 }} // Adjust size inline
          className="menu-profile-photo"
        />
        <div className="menu-profile-det">
          <span className="menu-name">{name}</span>
          Administrator
        </div>
        <div className="menu-camera-button">
          <IconButton onClick={handleChangePhoto}>
            <PhotoCamera />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Menu;
