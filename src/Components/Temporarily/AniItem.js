import "./AniItem.css";

const AniItem = ({ item }) => {
  const { title, year, since, content } = item;
  return (
    <li className="card">
      <h2>연대: {since}</h2>
      <h3>{title}</h3>
      <p>방영연도: {year}</p>
      <p>개요: {content}</p>
    </li>
  );
};

export default AniItem;
