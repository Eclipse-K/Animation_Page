import MenuItem from "./MenuItem";
import "./MenuList.css";

const MenuList = ({ menu, onMenu }) => {
  return (
    <ul className="list">
      {menu.map((item, index) => (
        <MenuItem key={index} item={item} onMenu={onMenu} />
      ))}
    </ul>
  );
};

export default MenuList;
