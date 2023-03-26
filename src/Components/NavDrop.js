import { AiFillAppstore } from "react-icons/ai";
import "./NavDrop.css";
import { Link, Routes, Route } from "react-router-dom";
import List from "./List";
import Logo from "../image/logo.png";

function NavDrop() {
  return (
    <div>
      <input id="dropdown" type="checkbox" />
      <label className="dropdownLabel" htmlFor="dropdown">
        <img className="logo" src={Logo} alt={Logo} />
        <Link id="title-a" to="/">
          <h1>Animation</h1>
        </Link>
        <AiFillAppstore className="careIcon" />
      </label>
      <div className="content">
        <ul>
          <Routes>
            <Route path="/" element={<List />} />
          </Routes>
        </ul>
      </div>
    </div>
  );
}

export default NavDrop;
