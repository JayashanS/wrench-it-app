import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import io from "socket.io-client";
import Stack from "@mui/material/Stack";
import { Menu, MenuItem } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";

import Logo from "../assets/wrenchit.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import LinkIcon from "@mui/icons-material/Link";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import "../styles/Titlebar.css";
import Sound from "../assets/sound_2.mp3";
import Mennu from "./Menu";

function Titlebar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [garageId, setGarageId] = useState(localStorage.getItem("garageId"));
  const [fullName, setFullName] = useState("");
  const [garageName, setGarageName] = useState("");
  const [displayUrl, setDisplayUrl] = useState(null);
  const [audio] = useState(new Audio(Sound));
  const audioRef = useRef(new Audio(Sound));

  const user = JSON.parse(localStorage.getItem("user"));
  let email = user.email;

  useEffect(() => {
    const socket = io("http://localhost:4000");

    console.log("Socket connected:", socket.connected);

    socket.on("location", (data) => {
      console.log("Received Location Data:", data);
      const audio = audioRef.current;
      if (audio.paused) {
        audio.loop = true;
        audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(false);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/garage/${garageId}`
      );
      const responseData = response.data;
      setGarageName(responseData.repairCenterName);
    } catch (error) {
      console.error("Error Fetching Garage Name:", error);
    }

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
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setIsClicked(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsClicked(false);
  };
  const handleChip = () => {
    console.log("Clicked");
  };
  const handleLinkClick = () => {
    const audio = audioRef.current;
    setIsPlaying(false);
    audio.pause();
  };
  const handleSoundToggle = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.loop = true;
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
  };
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
        <span style={{ color: "#22A1CB", fontSize: "13px" }}>Dashboard</span>

        {isPlaying ? (
          <Link
            to="/dashboard/req"
            style={{ display: "flex", alignItems: "center" }}
            className="titlebar-call-container"
            onClick={handleLinkClick}
          >
            <div className="left-circle">
              <AddIcCallIcon sx={{ color: "#fff" }} />
            </div>
            <div class="arrow-icons">
              <span class="arrow-text">Incomming</span>
              <span class="arrow-icon">
                <KeyboardDoubleArrowRightIcon />
              </span>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            marginLeft: "auto",
            marginRight: "10px",
          }}
        >
          <IconButton
            aria-label="menu"
            sx={{ width: 30, height: 30 }}
            onClick={handleSoundToggle}
          >
            {isPlaying ? (
              <VolumeUpIcon fontSize="small" style={{ color: "#09BEB1" }} />
            ) : (
              <VolumeMuteIcon fontSize="small" />
            )}
          </IconButton>
          <Stack
            direction="row"
            spacing={0.2}
            sx={{
              marginLeft: "auto",
              marginRight: "10px",
            }}
          >
            <Tooltip title="Company Name">
              <Chip label={garageName} />
            </Tooltip>
            <Tooltip title="Associated With">
              <IconButton aria-label="menu" sx={{ width: 30, height: 30 }}>
                <LinkIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="User Name">
              <Chip
                avatar={<Avatar alt="Natacha" src={displayUrl} />}
                label={fullName}
                variant="outlined"
              />
            </Tooltip>
          </Stack>

          <Tooltip title="Logged in as Administrator">
            <IconButton
              aria-label="menu"
              sx={{ width: 30, height: 30, color: "#951cc9" }}
            >
              <AdminPanelSettingsIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Logged in as Operator">
            <IconButton
              aria-label="menu"
              sx={{ width: 30, height: 30, color: "#951cc9" }}
              disabled="true"
            >
              <ManageAccountsIcon />
            </IconButton>
          </Tooltip>

          <IconButton
            aria-label="menu"
            onClick={handleMenuOpen}
            style={{
              marginLeft: "20px",
              marginRight: "10px",
              backgroundColor: isClicked ? "#09beb26a" : "transparent",
            }}
            sx={{ width: 30, height: 30 }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
        </Stack>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <Mennu />
        </Menu>
      </div>
    </div>
  );
}

export default Titlebar;
