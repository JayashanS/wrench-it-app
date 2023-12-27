import React, { useState } from "react";
import "../styles/Drawer.css";

function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="drawer-container">
      <button className="drawer-toggle" onClick={toggleDrawer}>
        {isOpen ? "Close Drawer" : "Open Drawer"}
      </button>
      <aside className={`drawer ${isOpen ? "open" : ""}`}>
        <nav className="drawer-nav">
          <ul>
            <li>
              <a href="#">Item 1</a>
            </li>
            <li>
              <a href="#">Item 2</a>
            </li>
            <li>
              <a href="#">Item 3</a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default Drawer;
