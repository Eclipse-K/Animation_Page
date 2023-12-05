import "./AniItem.css";

function AniItem({ item }) {
  const { title, year, content } = item;

  return (
    <li className="info_card">
      <div className="card_content">
        <div className="card-content-second">
          <h1>{title}</h1>
          <h2>- 방영연도: {year}</h2>
          <p>- {content}</p>
        </div>
      </div>
    </li>
  );
}

export default AniItem;
