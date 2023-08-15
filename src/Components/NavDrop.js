import React, { useState } from "react";
import { AiFillAppstore } from "react-icons/ai";
import "./NavDrop.css";
import Logo from "../image/yeonu_logo.png";
import DropdownMenu from "./DropdownMenu";

function NavDrop() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar-drop">
      <div className="navbar-logo">
        <img src={Logo} alt={Logo} />
      </div>
      <h1 className="navbar-title">Animation</h1>
      <div className={`navbar-dropdown ${isDropdownOpen ? "open" : ""}`}>
        {isDropdownOpen ? (
          <button className="dropdown-button rotated" onClick={closeDropdown}>
            <AiFillAppstore />
          </button>
        ) : (
          <button className="dropdown-button" onClick={toggleDropdown}>
            <AiFillAppstore />
          </button>
        )}
      </div>

      {isDropdownOpen && <DropdownMenu closeDropdown={closeDropdown} />}
    </nav>
  );
}

export default NavDrop;
