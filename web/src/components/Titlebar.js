import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
import Sound from "../assets/sound3.mp3";

function Titlebar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(Sound));
  const audioRef = useRef(new Audio(Sound));

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
              <Chip label="Revive Auto Solutions" />
            </Tooltip>
            <Tooltip title="Associated With">
              <IconButton aria-label="menu" sx={{ width: 30, height: 30 }}>
                <LinkIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="User Name">
              <Chip
                avatar={
                  <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />
                }
                label="John Doe"
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
          <MenuItem onClick={handleMenuClose}>Item 1</MenuItem>
          <MenuItem onClick={handleMenuClose}>Item 2</MenuItem>
          <MenuItem onClick={handleMenuClose}>Item 3</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Titlebar;
