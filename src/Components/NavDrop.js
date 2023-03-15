import { AiFillAppstore } from "react-icons/ai";
import "./NavDrop.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Logo from "../image/logo.png";

function NavDrop() {
  return (
    <div>
      <input id="dropdown" type="checkbox" />
      <label className="dropdownLabel" htmlFor="dropdown">
        <Link to="/home">
          <img className="logo" src={Logo} alt={Logo} />
        </Link>
        <h1>Animation</h1>
        <AiFillAppstore className="careIcon" />
      </label>
      <div className="content">
        <ul>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </ul>
      </div>
    </div>
  );
}

export default NavDrop;
