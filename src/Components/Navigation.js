import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import S1970 from "./S1970";
import S1980 from "./S1980";

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/s1970">1970년</Link>
        </li>
        <li>
          <Link to="/s1980">1980년</Link>
        </li>
        <li>
          <Link to="/s1990">1990년</Link>
        </li>
        <hr />
        <Routes>
          <Route path="/s1970" element={<S1970 />} />
          <Route path="/s1980" element={<S1980 />} />
        </Routes>
      </ul>
    </div>
  );
}

export default Navigation;
