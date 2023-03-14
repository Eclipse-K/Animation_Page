import { FaAngleDown } from "react-icons/fa";
import "./NavDrop.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Logo from "../image/logo.png";

function NavDrop() {
  return (
    <div>
      <img className="logo" src={Logo} alt={Logo} />
      <input id="dropdown" type="checkbox" />
      <label className="dropdownLabel" htmlFor="dropdown">
        <Link to="/">홈</Link>
        <FaAngleDown className="careIcon" />
      </label>
      <div className="content">
        <ul>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ul>
      </div>
    </div>
  );
}

export default NavDrop;
