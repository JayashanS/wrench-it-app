import React, { useState } from "react";
import "../styles/Dashboard.css";
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
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Dashboard() {
  const [selectedLink, setSelectedLink] = useState("/dashboard/form");

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className="container-dashboard">
      <div className="drawer">
        <div
          className="drawer-section"
          style={{
            backgroundColor:
              selectedLink === "/dashboard/req" ? "#09BEB1" : "#fff",
            paddingLeft: "10px",
          }}
        >
          <Link
            to="/dashboard/req"
            style={{
              color: selectedLink === "/dashboard/req" ? "#fff" : "#868e96",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
            onClick={() => handleLinkClick("/dashboard/req")}
          >
            <DashboardIcon
              style={{ color: "#bcbcbc", marginRight: "10px", fontSize: 20 }}
              className="icon"
            />
            <span className="list-item">Request</span>
          </Link>
        </div>
        <div
          className="drawer-section"
          style={{
            backgroundColor:
              selectedLink === "/dashboard/stat" ? "#09BEB1" : "#fff",
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
            <QueryStatsIcon
              style={{ color: "#bcbcbc", marginRight: "10px", fontSize: 20 }}
            />
            <span className="list-item">Repair</span>
          </Link>
        </div>
        <div
          className="drawer-section"
          style={{
            backgroundColor:
              selectedLink === "/dashboard/res" ? "#09BEB1" : "#fff",
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
            <EventIcon
              style={{ color: "#bcbcbc", marginRight: "10px", fontSize: 20 }}
            />
            <span className="list-item">Reservations</span>
          </Link>
        </div>
        <div
          className="drawer-section"
          style={{
            backgroundColor:
              selectedLink === "/dashboard/loc" ? "#09BEB1" : "#fff",
            paddingLeft: "10px",
          }}
        >
          <Link
            to="/dashboard/loc"
            style={{
              color: selectedLink === "/dashboard/loc" ? "#fff" : "#868e96",
              textDecoration: "none",
              display: "flex",

              alignItems: "center",
              height: "100%",
            }}
            onClick={() => handleLinkClick("/dashboard/loc")}
          >
            <LocationOnIcon
              style={{ color: "#bcbcbc", marginRight: "10px", fontSize: 20 }}
            />
            <span className="list-item">Location</span>
          </Link>
        </div>
        <div
          className="drawer-section"
          style={{
            backgroundColor: selectedLink === "/" ? "#09BEB1" : "#fff",
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
            <AddBoxIcon
              style={{ color: "#bcbcbc", marginRight: "10px", fontSize: 20 }}
            />
            <span className="list-item">Advertise</span>
          </Link>
        </div>
        <hr />
        <div
          className="drawer-section"
          style={{
            backgroundColor: selectedLink === "/" ? "#09BEB1" : "#fff",
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
              style={{ color: "#bcbcbc", marginRight: "10px", fontSize: 20 }}
            />
            <span className="list-item">Help</span>
          </Link>
        </div>
        <div
          className="drawer-section"
          style={{
            backgroundColor: selectedLink === "/" ? "#09BEB1" : "#fff",
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
              style={{ color: "#bcbcbc", marginRight: "10px", fontSize: 20 }}
            />
            <span className="list-item">Feedback</span>
          </Link>
        </div>
        <div
          className="drawer-section"
          style={{
            backgroundColor:
              selectedLink === "/dashboard/settings" ? "#09BEB1" : "#fff",
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
            <SettingsIcon
              style={{ color: "#bcbcbc", marginRight: "10px", fontSize: 20 }}
            />
            <span className="list-item">Settings</span>
          </Link>
        </div>
        <hr />
        <div
          className="drawer-section"
          style={{
            backgroundColor: selectedLink === "/" ? "#09BEB1" : "#fff",
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
            <LogoutIcon
              style={{ color: "#bcbcbc", marginRight: "10px", fontSize: 20 }}
            />
            <span className="list-item">Logout</span>
          </Link>
        </div>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
