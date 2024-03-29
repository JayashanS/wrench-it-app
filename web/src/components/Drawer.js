import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import "../styles/Drawer.css";

// icons and logos
import HomeIcon from "@mui/icons-material/Home";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import MinorCrashIcon from "@mui/icons-material/MinorCrash";
import EventIcon from "@mui/icons-material/Event";
import PeopleIcon from "@mui/icons-material/People";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

function Drawer() {
  const [selectedLink, setSelectedLink] = useState("/dashboard/view");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1000);
  const { logout } = useLogout();

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const handleLogout = async (e) => {
    logout();
  };
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const createGarageId = () => {
      const userString = localStorage.getItem("user");
      if (userString) {
        const userObject = JSON.parse(userString);
        const email = userObject.email;
        const garageId = `G_${email.replace("@", "_").replace(".", "_")}`;
        localStorage.setItem("garageId", garageId);
      }
    };
    createGarageId();
  }, []);

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
          {!isSmallScreen && (
            <span
              className="list-item d-drawer-title"
              style={{
                color: "#09BEB1",
              }}
            >
              Workflow
            </span>
          )}
        </Link>
      </div>
      <div
        className="drawer-section"
        style={{
          backgroundColor:
            selectedLink === "/dashboard/view" ? "#09BEB1" : "#fff",
        }}
      >
        <Link
          className="link"
          to="/dashboard/view"
          style={{
            color: selectedLink === "/dashboard/view" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "10px",
          }}
          onClick={() => handleLinkClick("/dashboard/view")}
        >
          <HomeIcon
            style={{
              color: selectedLink === "/dashboard/view" ? "#fff" : "#868e96",
              marginRight: "10px",
              fontSize: 20,
            }}
            className="icon"
          />
          {!isSmallScreen && <span className="list-item">Overview</span>}
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
          {!isSmallScreen && <span className="list-item">Request</span>}
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
              fontSize: 20,
            }}
          />
          {!isSmallScreen && <span className="list-item">Repair</span>}
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
          {!isSmallScreen && <span className="list-item">Reservations</span>}
        </Link>
      </div>
      <div
        className="drawer-section"
        style={{
          backgroundColor:
            selectedLink === "/dashboard/com" ? "#09BEB1" : "#fff",
        }}
      >
        <Link
          className="link"
          to="/dashboard/com"
          style={{
            color: selectedLink === "/dashboard/com" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "10px",
          }}
          onClick={() => handleLinkClick("/dashboard/com")}
        >
          <PeopleIcon
            style={{
              color: selectedLink === "/dashboard/com" ? "#fff" : "#868e96",
              marginRight: "10px",
              fontSize: 20,
            }}
          />
          {!isSmallScreen && <span className="list-item">Community</span>}
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
            className="list-item d-drawer-title"
            style={{
              color: "#09BEB1",
            }}
          >
            Tools
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
          {!isSmallScreen && <span className="list-item">Help</span>}
        </Link>
      </div>
      <div
        className="drawer-section"
        style={{
          backgroundColor:
            selectedLink === "/dashboard/feed" ? "#09BEB1" : "#fff",
        }}
      >
        <Link
          className="link"
          to="/dashboard/feed"
          style={{
            color: selectedLink === "/dashboard/feed" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "10px",
          }}
          onClick={() => handleLinkClick("/dashboard/feed")}
        >
          <ContactMailIcon
            style={{
              color: selectedLink === "/dashboard/feed" ? "#fff" : "#868e96",
              marginRight: "10px",
              fontSize: 20,
            }}
          />
          {!isSmallScreen && <span className="list-item">Feedback</span>}
        </Link>
      </div>
      <div
        className="drawer-section"
        style={{
          backgroundColor:
            selectedLink === "/dashboard/set" ? "#09BEB1" : "#fff",
        }}
      >
        <Link
          className="link"
          to="/dashboard/set"
          style={{
            color: selectedLink === "/dashboard/set" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "10px",
          }}
          onClick={() => handleLinkClick("/dashboard/set")}
        >
          <SettingsIcon
            style={{
              color: selectedLink === "/dashboard/set" ? "#fff" : "#868e96",
              marginRight: "10px",
              fontSize: 20,
            }}
          />
          {!isSmallScreen && <span className="list-item">Settings</span>}
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
          style={{
            color: selectedLink === "/" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "10px",
          }}
          onClick={handleLogout}
        >
          <LogoutIcon
            style={{
              color: selectedLink === "/" ? "#fff" : "#868e96",
              marginRight: "10px",
              fontSize: 20,
            }}
          />
          {!isSmallScreen && <span className="list-item">Logout</span>}
        </Link>
      </div>
    </div>
  );
}

export default Drawer;
