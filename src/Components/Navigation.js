import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import S1970 from "./S1970";
import S1980 from "./S1980";
import S1990 from "./S1990";
import S2000 from "./S2000";
import S2010 from "./S2010";

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Home">홈</Link>
        </li>
        <li>
          <Link to="/s1970">1970년대</Link>
        </li>
        <li>
          <Link to="/s1980">1980년대</Link>
        </li>
        <li>
          <Link to="/s1990">1990년대</Link>
        </li>
        <li>
          <Link to="/s2000">2000년대</Link>
        </li>
        <li>
          <Link to="/s2010">2010년대</Link>
        </li>
        <hr />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/s1970" element={<S1970 />} />
          <Route path="/s1980" element={<S1980 />} />
          <Route path="/s1990" element={<S1990 />} />
          <Route path="/s2000" element={<S2000 />} />
          <Route path="/s2010" element={<S2010 />} />
        </Routes>
      </ul>
    </div>
  );
}

export default Navigation;
