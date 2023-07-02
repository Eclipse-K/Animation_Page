import "./AniItem.css";

const AniItem = ({ item }) => {
  const { title, year, content } = item;
  return (
    <li className="info_card">
      <sapn className="card_content">
        <h1>{title}</h1>
        <h2>- 방영연도: {year}</h2>
        <p>- {content}</p>
      </sapn>
    </li>
  );
};

export default AniItem;
