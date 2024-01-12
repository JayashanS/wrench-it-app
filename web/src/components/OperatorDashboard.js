import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Accordion, Card } from "react-bootstrap";
import "../styles/Dashboard.css";

// icons and logos
import Logo from "../assets/wrenchit.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import LinkIcon from "@mui/icons-material/Link";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import MinorCrashIcon from "@mui/icons-material/MinorCrash";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import EventIcon from "@mui/icons-material/Event";
import AddBoxIcon from "@mui/icons-material/AddBox";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Dashboard() {
  const [selectedLink, setSelectedLink] = useState("/dashboard/form");
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="container-dashboard">
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
        <span
          style={{
            color: "#22A1CB",
            fontSize: "13px",
            backgroundColor: "rgba(103, 190, 219, 0.35)",
            borderRadius: "2px",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "5px",
            paddingBottom: "5px",
            marginLeft: "900px",
          }}
        >
          #Company Name
        </span>
        <Link style={{ display: "flex", alignItems: "center" }}>
          <LinkIcon
            style={{
              color: "#868e96",
              marginRight: "2px",
              marginLeft: "2px",
              fontSize: 20,
            }}
          />
        </Link>
        <span style={{ color: "#22A1CB", fontSize: "13px" }}>John Doe</span>
        <Link onClick={toggleAccordion} className="menu-button">
          <MenuIcon
            style={{ color: "#868e96", marginLeft: "120px", fontSize: 20 }}
          />
        </Link>
      </div>
      {isAccordionOpen && (
        <div className="accordion-content">
          <Card className="accordion-card">
            <Card.Body>
              <Accordion defaultActiveKey="0">{/* ... */}</Accordion>
            </Card.Body>
          </Card>
        </div>
      )}
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
              style={{
                color: selectedLink === "/" ? "#fff" : "#868e96",
                marginRight: "10px",
                fontSize: 20,
              }}
            />
            <span className="list-item">Advertise</span>
          </Link>
        </div>
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
              selectedLink === "/dashboard/help" ? "#09BEB1" : "#fff",
            paddingLeft: "10px",
          }}
        >
          <Link
            to="/dashboard/help"
            style={{
              color: selectedLink === "/dashboard/help" ? "#fff" : "#868e96",
              textDecoration: "none",
              display: "flex",

              alignItems: "center",
              height: "100%",
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
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
