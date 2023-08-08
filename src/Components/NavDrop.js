import { AiFillAppstore } from "react-icons/ai";
import "./NavDrop.css";
import { Link, Routes, Route } from "react-router-dom";
import List from "./List";
import Logo from "../image/yeonu_logo.png";

function NavDrop() {
  return (
    <div className="top_bar">
      <input id="dropdown" type="checkbox" />
      <label className="dropdownLabel" htmlFor="dropdown">
        <img className="logo" src={Logo} alt={Logo} />
        <Link id="title-a">
          <h1>Animation</h1>
        </Link>
        <AiFillAppstore className="careIcon" to="/" />
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
