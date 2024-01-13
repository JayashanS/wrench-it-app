import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Drawer.css";

// icons and logos
import CarRepairIcon from "@mui/icons-material/CarRepair";
import MinorCrashIcon from "@mui/icons-material/MinorCrash";
import EventIcon from "@mui/icons-material/Event";
import AddBoxIcon from "@mui/icons-material/AddBox";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Drawer() {
  const [selectedLink, setSelectedLink] = useState("/dashboard/form");

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className="drawer">
      <div
        className="drawer-section"
        style={{
          paddingLeft: "10px",
        }}
      >
        <Link
          to=""
          style={{
            color: selectedLink === "" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
          onClick={() => handleLinkClick("")}
        >
          <span
            className="list-item"
            style={{
              color: "#09BEB1",
            }}
          >
            Workflow
          </span>
        </Link>
      </div>
      <div
        className="drawer-section"
        style={{
          backgroundColor:
            selectedLink === "/dashboard/req" ? "#09BEB1" : "#fff",
        }}
      >
        <Link
          className="link"
          to="/dashboard/req"
          style={{
            color: selectedLink === "/dashboard/req" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "10px",
          }}
          onClick={() => handleLinkClick("/dashboard/req")}
        >
          <MinorCrashIcon
            style={{
              color: selectedLink === "/dashboard/req" ? "#fff" : "#868e96",
              marginRight: "10px",
              fontSize: 20,
            }}
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
        }}
      >
        <Link
          className="link"
          to="/dashboard/stat"
          style={{
            color: selectedLink === "/dashboard/stat" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "10px",
          }}
          onClick={() => handleLinkClick("/dashboard/stat")}
        >
          <CarRepairIcon
            style={{
              color: selectedLink === "/dashboard/stat" ? "#fff" : "#868e96",
              marginRight: "10px",
              fontSize: 24,
            }}
          />
          <span className="list-item">Repair</span>
        </Link>
      </div>
      <div
        className="drawer-section"
        style={{
          backgroundColor:
            selectedLink === "/dashboard/res" ? "#09BEB1" : "#fff",
        }}
      >
        <Link
          className="link"
          to="/dashboard/res"
          style={{
            color: selectedLink === "/dashboard/res" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "10px",
          }}
          onClick={() => handleLinkClick("/dashboard/res")}
        >
          <EventIcon
            style={{
              color: selectedLink === "/dashboard/res" ? "#fff" : "#868e96",
              marginRight: "10px",
              fontSize: 20,
            }}
          />
          <span className="list-item">Reservations</span>
        </Link>
      </div>
      <div
        className="drawer-section"
        style={{
          backgroundColor:
            selectedLink === "/dashboard/loc" ? "#09BEB1" : "#fff",
        }}
      >
        <Link
          className="link"
          to="/dashboard/loc"
          style={{
            color: selectedLink === "/dashboard/loc" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "10px",
          }}
          onClick={() => handleLinkClick("/dashboard/loc")}
        >
          <LocationOnIcon
            style={{
              color: selectedLink === "/dashboard/loc" ? "#fff" : "#868e96",
              marginRight: "10px",
              fontSize: 20,
            }}
          />
          <span className="list-item">Location</span>
        </Link>
      </div>
      <div
        className="drawer-section"
        style={{
          backgroundColor: selectedLink === "/" ? "#09BEB1" : "#fff",
        }}
      >
        <Link
          className="link"
          to="/"
          style={{
            color: selectedLink === "/" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "10px",
          }}
          onClick={() => handleLinkClick("/")}
        >
          <AddBoxIcon
            style={{
              color: selectedLink === "/" ? "#fff" : "#868e96",
              marginRight: "10px",
              fontSize: 20,
            }}
          />
          <span className="list-item">Advertise</span>
        </Link>
      </div>
      <div className="drawer-section" style={{}}>
        <Link
          to=""
          style={{
            color: selectedLink === "" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "10px",
          }}
          onClick={() => handleLinkClick("")}
        >
          <span
            className="list-item"
            style={{
              color: "#09BEB1",
            }}
          >
            Workflow
          </span>
        </Link>
      </div>
      <div
        className="drawer-section"
        style={{
          backgroundColor:
            selectedLink === "/dashboard/help" ? "#09BEB1" : "#fff",
        }}
      >
        <Link
          className="link"
          to="/dashboard/help"
          style={{
            color: selectedLink === "/dashboard/help" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "10px",
          }}
          onClick={() => handleLinkClick("/dashboard/help")}
        >
          <HelpOutlineIcon
            style={{
              color: selectedLink === "/dashboard/help" ? "#fff" : "#868e96",
              marginRight: "10px",
              fontSize: 20,
            }}
          />
          <span className="list-item">Help</span>
        </Link>
      </div>
      <div
        className="drawer-section"
        style={{
          backgroundColor: selectedLink === "/" ? "#09BEB1" : "#fff",
        }}
      >
        <Link
          className="link"
          to="/"
          style={{
            color: selectedLink === "/" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "10px",
          }}
          onClick={() => handleLinkClick("/")}
        >
          <ContactMailIcon
            style={{
              color: selectedLink === "/" ? "#fff" : "#868e96",
              marginRight: "10px",
              fontSize: 20,
            }}
          />
          <span className="list-item">Feedback</span>
        </Link>
      </div>
      <div
        className="drawer-section"
        style={{
          backgroundColor:
            selectedLink === "/dashboard/settings" ? "#09BEB1" : "#fff",
        }}
      >
        <Link
          className="link"
          to="/dashboard/settings"
          style={{
            color: selectedLink === "/dashboard/settings" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "10px",
          }}
          onClick={() => handleLinkClick("/dashboard/settings")}
        >
          <SettingsIcon
            style={{
              color:
                selectedLink === "/dashboard/settings" ? "#fff" : "#868e96",
              marginRight: "10px",
              fontSize: 20,
            }}
          />
          <span className="list-item">Settings</span>
        </Link>
      </div>
      <hr />
      <div
        className="drawer-section"
        style={{
          backgroundColor: selectedLink === "/" ? "#09BEB1" : "#fff",
        }}
      >
        <Link
          className="link"
          to="/"
          style={{
            color: selectedLink === "/" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "10px",
          }}
          onClick={() => handleLinkClick("/")}
        >
          <LogoutIcon
            style={{
              color: selectedLink === "/" ? "#fff" : "#868e96",
              marginRight: "10px",
              fontSize: 20,
            }}
          />
          <span className="list-item">Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default Drawer;
