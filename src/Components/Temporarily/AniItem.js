import "./AniItem.css";

const AniItem = ({ item }) => {
  const { title, year, content } = item;
  return (
    <li className="info_card">
      <h1>{title}</h1>
      <h2>- 방영연도: {year}</h2>
      <p>- {content}</p>
    </li>
  );
};

export default AniItem;
