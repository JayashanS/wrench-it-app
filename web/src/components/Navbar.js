import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

// icons and logos
import Logo from "../assets/wrenchit.png";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <Link style={{ display: "flex", alignItems: "center" }}>
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </Link>
        <span className="navbar-company-name">Wrench it</span>

        <NavLink
          exact
          to="/"
          className="navbar-link-box"
          activeClassName="active"
          style={{ textDecoration: "none" }}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className="navbar-link-box"
          activeClassName="active"
          style={{ textDecoration: "none" }}
        >
          Products
        </NavLink>
        <NavLink
          to="/signup"
          className="navbar-link-box"
          activeClassName="active"
          style={{ textDecoration: "none" }}
        >
          Register
        </NavLink>
        <NavLink
          to="/dashboard"
          className="navbar-link-box"
          activeClassName="active"
          style={{ textDecoration: "none", marginRight: "100px" }}
        >
          Dashboard
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
