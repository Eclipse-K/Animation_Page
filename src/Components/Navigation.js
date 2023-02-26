import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/1970s">1970년</Link>
        </li>
        <li>
          <Link to="/1980s">1980년</Link>
        </li>
        <li>
          <Link to="/1990s">1990년</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
