import "./AniItem.css";

const AniItem = ({ item }) => {
  const { title, year, since, content } = item;
  return (
    <li className="info_card">
      <h2>- 연 대: {since}</h2>
      <h2>- {title}</h2>
      <h2>- 방영연도: {year}</h2>
      <p>- {content}</p>
    </li>
  );
};

export default AniItem;
