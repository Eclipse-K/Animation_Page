import { AiFillAppstore } from "react-icons/ai";
import "./NavDrop.css";
import Logo from "../image/yeonu_logo.png";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

function NavDrop() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isButtonRotated, setIsButtonRotated] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsButtonRotated(!isButtonRotated);
  };

  return (
    <nav className="navbar-drop">
      <div className="navbar-logo">
        <img src={Logo} alt={Logo} />
      </div>
      <h1 className="navbar-title">Animation</h1>
      <div className={`navbar-dropdown ${isDropdownOpen ? "open" : ""}`}>
        <button
          className={`dropdown-button ${isButtonRotated ? "rotated" : ""}`}
          onClick={toggleDropdown}
        >
          <AiFillAppstore />
        </button>
      </div>

      {isDropdownOpen && <DropdownMenu />}
    </nav>
  );
}

export default NavDrop;
