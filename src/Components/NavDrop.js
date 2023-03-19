import { AiFillAppstore } from "react-icons/ai";
import "./NavDrop.css";
import { Link, Routes, Route } from "react-router-dom";
import List from "./List";
import Logo from "../image/logo.png";
import Career from "./Career";

function NavDrop() {
  return (
    <div>
      <input id="dropdown" type="checkbox" />
      <label className="dropdownLabel" htmlFor="dropdown">
        <Link to="/Career">
          <img className="logo" src={Logo} alt={Logo} />
        </Link>
        <Link id="title-a" to="/List">
          <h1>Animation</h1>
        </Link>
        <AiFillAppstore className="careIcon" />
      </label>
      <div className="content">
        <ul>
          <Routes>
            <Route path="/Career" element={<Career />} />
            <Route path="/List" element={<List />} />
          </Routes>
        </ul>
      </div>
    </div>
  );
}

export default NavDrop;
