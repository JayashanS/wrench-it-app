import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Avatar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import PhotoUploadComponent from "./Photo";
import "../styles/Menu.css";

const Menu = () => {
  const [displayUrl, setDisplayUrl] = useState(null);
  const [photo, setPhoto] = useState("");
  const [fullName, setFullName] = useState("");
  const [userDialogOpen, setUserDialogOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  let email = user.email;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/user/${email}`
      );
      const responseData = response.data;
      setFullName(`${responseData.fname} ${responseData.lname}`);
    } catch (error) {
      console.error("Error Fetching User Name:", error);
    }
    try {
      const photoResponse = await fetch(
        `http://localhost:4000/api/photo/${user.email}.jpg`
      );
      if (photoResponse.ok) {
        const photoUrl = await photoResponse.blob();
        setDisplayUrl(URL.createObjectURL(photoUrl));
      } else {
        throw new Error("Failed to retrieve uploaded photo.");
      }
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChangePhoto = () => {
    setUserDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setUserDialogOpen(false);
  };

  return (
    <div className="menu-container">
      <div className="menu-profile-section">
        <Avatar
          alt="Profile"
          src={displayUrl}
          sx={{ width: 100, height: 100 }}
          className="menu-profile-photo"
        />
        <div className="menu-profile-det">
          <span className="menu-name">{fullName}</span>
          Administrator
        </div>
        <div className="menu-camera-button">
          <Tooltip title="Update Your Photo">
            <IconButton
              onClick={handleChangePhoto}
              style={{ backgroundColor: "white" }}
              size="small"
            >
              <PhotoCamera />
            </IconButton>
          </Tooltip>
        </div>
      </div>

      <Dialog open={userDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Upload Photo</DialogTitle>
        <DialogContent>
          <PhotoUploadComponent onCloseModal={handleCloseDialog} />{" "}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Menu;
