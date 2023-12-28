import React, { useState } from "react";
import "../styles/Drawer.css";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import EventIcon from "@mui/icons-material/Event";
import AddBoxIcon from "@mui/icons-material/AddBox";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AddReactionIcon from "@mui/icons-material/AddReaction";

function Drawer() {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className="vertical-rectangle">
      <div className="profile">
        <div className="cover-photo">
          <div className="photo"></div>
        </div>
      </div>
      <hr />
      <div
        className="section section-1"
        style={{
          backgroundColor: selectedLink === "/" ? "#DEF2FD" : "#f0f0f0",
          paddingLeft: "10px",
        }}
      >
        <Link
          to="/"
          style={{
            color: selectedLink === "/" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",

            alignItems: "center",
            height: "100%",
          }}
          onClick={() => handleLinkClick("/")}
        >
          <DashboardIcon style={{ color: "#b8bfba", marginRight: "10px" }} />
          <span className="list-item">Dashboard</span>
        </Link>
      </div>
      <div
        className="section section-1"
        style={{
          backgroundColor: selectedLink === "/stat" ? "#DEF2FD" : "#f0f0f0",
          paddingLeft: "10px",
        }}
      >
        <Link
          to="/stat"
          style={{
            color: selectedLink === "/stat" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",

            alignItems: "center",
            height: "100%",
          }}
          onClick={() => handleLinkClick("/stat")}
        >
          <QueryStatsIcon style={{ color: "#b8bfba", marginRight: "10px" }} />
          <span className="list-item">Statistics</span>
        </Link>
      </div>
      <div
        className="section section-1"
        style={{
          backgroundColor: selectedLink === "/" ? "#DEF2FD" : "#f0f0f0",
          paddingLeft: "10px",
        }}
      >
        <Link
          to="/"
          style={{
            color: selectedLink === "/" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",

            alignItems: "center",
            height: "100%",
          }}
          onClick={() => handleLinkClick("/")}
        >
          <EventIcon style={{ color: "#b8bfba", marginRight: "10px" }} />
          <span className="list-item">Reservations</span>
        </Link>
      </div>
      <div
        className="section section-1"
        style={{
          backgroundColor: selectedLink === "/" ? "#DEF2FD" : "#f0f0f0",
          paddingLeft: "10px",
        }}
      >
        <Link
          to="/"
          style={{
            color: selectedLink === "/" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",

            alignItems: "center",
            height: "100%",
          }}
          onClick={() => handleLinkClick("/")}
        >
          <AddBoxIcon style={{ color: "#b8bfba", marginRight: "10px" }} />
          <span className="list-item">Advertise</span>
        </Link>
      </div>
      <hr />
      <div
        className="section section-1"
        style={{
          backgroundColor: selectedLink === "/" ? "#DEF2FD" : "#f0f0f0",
          paddingLeft: "10px",
        }}
      >
        <Link
          to="/"
          style={{
            color: selectedLink === "/" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",

            alignItems: "center",
            height: "100%",
          }}
          onClick={() => handleLinkClick("/")}
        >
          <HelpOutlineIcon style={{ color: "#b8bfba", marginRight: "10px" }} />
          <span className="list-item">Help</span>
        </Link>
      </div>
      <div
        className="section section-1"
        style={{
          backgroundColor: selectedLink === "/" ? "#DEF2FD" : "#f0f0f0",
          paddingLeft: "10px",
        }}
      >
        <Link
          to="/"
          style={{
            color: selectedLink === "/" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",

            alignItems: "center",
            height: "100%",
          }}
          onClick={() => handleLinkClick("/")}
        >
          <ContactMailIcon style={{ color: "#b8bfba", marginRight: "10px" }} />
          <span className="list-item">Feedback</span>
        </Link>
      </div>
      <div
        className="section section-1"
        style={{
          backgroundColor: selectedLink === "/" ? "#DEF2FD" : "#f0f0f0",
          paddingLeft: "10px",
        }}
      >
        <Link
          to="/"
          style={{
            color: selectedLink === "/" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",

            alignItems: "center",
            height: "100%",
          }}
          onClick={() => handleLinkClick("/")}
        >
          <SettingsIcon style={{ color: "#b8bfba", marginRight: "10px" }} />
          <span className="list-item">Settings</span>
        </Link>
      </div>
      <hr />
      <div
        className="section section-1"
        style={{
          backgroundColor: selectedLink === "/" ? "#DEF2FD" : "#f0f0f0",
          paddingLeft: "10px",
        }}
      >
        <Link
          to="/"
          style={{
            color: selectedLink === "/" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",

            alignItems: "center",
            height: "100%",
          }}
          onClick={() => handleLinkClick("/")}
        >
          <LogoutIcon style={{ color: "#b8bfba", marginRight: "10px" }} />
          <span className="list-item">Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default Drawer;
