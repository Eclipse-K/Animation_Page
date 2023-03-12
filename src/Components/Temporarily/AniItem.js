const AniItem = ({ item }) => {
  const { id, title, year, since, content } = item;
  return (
    <li>
      <h2>분류: {since}</h2>
      <h3>{title}</h3>
      <p>방영연도: {year}</p>
      <p>개요: {content}</p>
    </li>
  );
};

export default AniItem;
