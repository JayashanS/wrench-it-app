import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Drawer.css";

// icons and logos
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import MinorCrashIcon from "@mui/icons-material/MinorCrash";
import EventIcon from "@mui/icons-material/Event";
import BusinessIcon from "@mui/icons-material/Business";

function Drawer() {
  const [selectedLink, setSelectedLink] = useState("/user");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1000);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
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
                color: "#075961",
              }}
            >
              DATA VIEWS
            </span>
          )}
        </Link>
      </div>
      <div
        className="drawer-section"
        style={{
          backgroundColor: selectedLink === "/user" ? "#075961" : "#fff",
        }}
      >
        <Link
          className="link"
          to="/user"
          style={{
            color: selectedLink === "/user" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "10px",
          }}
          onClick={() => handleLinkClick("/user")}
        >
          <GroupAddIcon
            style={{
              color: selectedLink === "/user" ? "#fff" : "#868e96",
              marginRight: "10px",
              fontSize: 20,
            }}
            className="icon"
          />
          {!isSmallScreen && <span className="list-item">Users</span>}
        </Link>
      </div>
      <div
        className="drawer-section"
        style={{
          backgroundColor: selectedLink === "/req" ? "#075961" : "#fff",
        }}
      >
        <Link
          className="link"
          to="/req"
          style={{
            color: selectedLink === "/req" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "10px",
          }}
          onClick={() => handleLinkClick("/req")}
        >
          <MinorCrashIcon
            style={{
              color: selectedLink === "/req" ? "#fff" : "#868e96",
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
          backgroundColor: selectedLink === "/rep" ? "#075961" : "#fff",
        }}
      >
        <Link
          className="link"
          to="/rep"
          style={{
            color: selectedLink === "/rep" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "10px",
          }}
          onClick={() => handleLinkClick("/rep")}
        >
          <CarRepairIcon
            style={{
              color: selectedLink === "/rep" ? "#fff" : "#868e96",
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
          backgroundColor: selectedLink === "/res" ? "#075961" : "#fff",
        }}
      >
        <Link
          className="link"
          to="/res"
          style={{
            color: selectedLink === "/res" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "10px",
          }}
          onClick={() => handleLinkClick("/res")}
        >
          <EventIcon
            style={{
              color: selectedLink === "/res" ? "#fff" : "#868e96",
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
          backgroundColor: selectedLink === "/gar" ? "#075961" : "#fff",
        }}
      >
        <Link
          className="link"
          to="/gar"
          style={{
            color: selectedLink === "/gar" ? "#fff" : "#868e96",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "10px",
          }}
          onClick={() => handleLinkClick("/gar")}
        >
          <BusinessIcon
            style={{
              color: selectedLink === "/gar" ? "#fff" : "#868e96",
              marginRight: "10px",
              fontSize: 20,
            }}
          />
          {!isSmallScreen && <span className="list-item">Garages</span>}
        </Link>
      </div>
    </div>
  );
}

export default Drawer;
