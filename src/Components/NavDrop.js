import React, { useState } from "react";
import { AiFillAppstore } from "react-icons/ai";
import "./NavDrop.css";
import DropdownMenu from "./DropdownMenu";

function NavDrop() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  };

  const closeDropdown = () => {
    setIsCollapsed(false);
  };

  return (
    <nav className="navbar-drop">
      <div className={`navbar-dropdown ${isCollapsed ? "open" : ""}`}>
        {isCollapsed ? (
          <button className="dropdown-button rotated" onClick={closeDropdown}>
            <AiFillAppstore />
          </button>
        ) : (
          <button className="dropdown-button" onClick={toggleCollapse}>
            <AiFillAppstore />
          </button>
        )}
      </div>

      {isCollapsed && <DropdownMenu closeDropdown={closeDropdown} />}
    </nav>
  );
}

export default NavDrop;
