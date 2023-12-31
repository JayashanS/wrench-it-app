import React, { useState } from "react";
import "../styles/Drawer.css";
import { Link, Outlet } from "react-router-dom";
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
    <div className="container-drawer">
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
            backgroundColor:
              selectedLink === "/dashboard/form" ? "#0c091f" : "#1a1c38",
            paddingLeft: "10px",
          }}
        >
          <Link
            to="/dashboard/form"
            style={{
              color: selectedLink === "/dashboard/form" ? "#fff" : "#868e96",
              textDecoration: "none",
              display: "flex",

              alignItems: "center",
              height: "100%",
            }}
            onClick={() => handleLinkClick("/dashboard/form")}
          >
            <DashboardIcon style={{ color: "#64CCC5", marginRight: "10px" }} />
            <span className="list-item">Dashboard</span>
          </Link>
        </div>
        <div
          className="section section-1"
          style={{
            backgroundColor:
              selectedLink === "/dashboard/stat" ? "#0c091f" : "#1a1c38",
            paddingLeft: "10px",
          }}
        >
          <Link
            to="/dashboard/stat"
            style={{
              color: selectedLink === "/dashboard/stat" ? "#fff" : "#868e96",
              textDecoration: "none",
              display: "flex",

              alignItems: "center",
              height: "100%",
            }}
            onClick={() => handleLinkClick("/dashboard/stat")}
          >
            <QueryStatsIcon style={{ color: "#64CCC5", marginRight: "10px" }} />
            <span className="list-item">Statistics</span>
          </Link>
        </div>
        <div
          className="section section-1"
          style={{
            backgroundColor:
              selectedLink === "/dashboard/res" ? "#0c091f" : "#1a1c38",
            paddingLeft: "10px",
          }}
        >
          <Link
            to="/dashboard/res"
            style={{
              color: selectedLink === "/dashboard/res" ? "#fff" : "#868e96",
              textDecoration: "none",
              display: "flex",

              alignItems: "center",
              height: "100%",
            }}
            onClick={() => handleLinkClick("/dashboard/res")}
          >
            <EventIcon style={{ color: "#64CCC5", marginRight: "10px" }} />
            <span className="list-item">Reservations</span>
          </Link>
        </div>
        <div
          className="section section-1"
          style={{
            backgroundColor: selectedLink === "/" ? "#0c091f" : "#1a1c38",
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
            <AddBoxIcon style={{ color: "#64CCC5", marginRight: "10px" }} />
            <span className="list-item">Advertise</span>
          </Link>
        </div>
        <hr />
        <div
          className="section section-1"
          style={{
            backgroundColor: selectedLink === "/" ? "#0c091f" : "#1a1c38",
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
            <HelpOutlineIcon
              style={{ color: "#64CCC5", marginRight: "10px" }}
            />
            <span className="list-item">Help</span>
          </Link>
        </div>
        <div
          className="section section-1"
          style={{
            backgroundColor: selectedLink === "/" ? "#0c091f" : "#1a1c38",
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
            <ContactMailIcon
              style={{ color: "#64CCC5", marginRight: "10px" }}
            />
            <span className="list-item">Feedback</span>
          </Link>
        </div>
        <div
          className="section section-1"
          style={{
            backgroundColor:
              selectedLink === "/dashboard/settings" ? "#0c091f" : "#1a1c38",
            paddingLeft: "10px",
          }}
        >
          <Link
            to="/dashboard/settings"
            style={{
              color:
                selectedLink === "/dashboard/settings" ? "#fff" : "#868e96",
              textDecoration: "none",
              display: "flex",

              alignItems: "center",
              height: "100%",
            }}
            onClick={() => handleLinkClick("/dashboard/settings")}
          >
            <SettingsIcon style={{ color: "#64CCC5", marginRight: "10px" }} />
            <span className="list-item">Settings</span>
          </Link>
        </div>
        <hr />
        <div
          className="section section-1"
          style={{
            backgroundColor: selectedLink === "/" ? "#0c091f" : "#1a1c38",
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
            <LogoutIcon style={{ color: "#64CCC5", marginRight: "10px" }} />
            <span className="list-item">Logout</span>
          </Link>
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Drawer;
