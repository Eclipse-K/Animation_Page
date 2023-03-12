import MenuItem from "./MenuItem";

const MenuList = ({ menu, onMenu }) => {
  return (
    <ul>
      {menu.map((item, index) => (
        <MenuItem key={index} item={item} onMenu={onMenu} />
      ))}
    </ul>
  );
};

export default MenuList;
