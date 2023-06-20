import "./AniItem.css";

const AniItem = ({ item }) => {
  const { title, year, since, content } = item;
  return (
    <li className="info_card">
      <h3>- 연 대: {since}</h3>
      <h3>- {title}</h3>
      <p>- 방영연도: {year}</p>
      <p>- {content}</p>
    </li>
  );
};

export default AniItem;
