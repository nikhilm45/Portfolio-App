import React, { useState } from "react";

function RightPanel() {
  const [currentNavItem, setCurrentNavItem] = useState("");

  const handleNavClick = (navItem) => {
    setCurrentNavItem(navItem);
  };

  return (
    <div className="card">
      <div className="header">
        <h1 className="nav-title">{currentNavItem}</h1>
        <nav className="navbar">
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <button onClick={() => handleNavClick("About")}>
                <span>About</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("Resume")}>
                <span>Resume</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("Projects")}>
                <span>Projects</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("Skills")}>
                <span>Skills</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default RightPanel;
