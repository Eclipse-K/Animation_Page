const MenuItem = ({ item, onMenu }) => {
  const { since } = item;
  return <li onClick={() => onMenu(since)}>{since}</li>;
};

export default MenuItem;
