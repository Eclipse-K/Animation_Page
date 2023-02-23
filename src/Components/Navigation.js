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
          <Link to="/">연도</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
