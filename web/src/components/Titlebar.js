import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, Card } from "react-bootstrap";
import "../styles/Titlebar.css";

// icons and logos
import Logo from "../assets/wrenchit.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import LinkIcon from "@mui/icons-material/Link";

function Titlebar() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
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
            marginLeft: "59%",
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
    </div>
  );
}

export default Titlebar;
