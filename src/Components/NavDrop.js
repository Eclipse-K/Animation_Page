import { FaAngleDown } from "react-icons/fa";
import "./NavDrop.css";

function NavDrop() {
  return (
    <div>
      <input id="dropdown" type="checkbox" />
      <label className="dropdownLabel" for="dropdown">
        <div>Css</div>
        <FaAngleDown className="careIcon" />
      </label>
      <div className="content">
        <ul>
          <li>Option1</li>
        </ul>
      </div>
    </div>
  );
}

export default NavDrop;
