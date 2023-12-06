import "./AniItem.css";

function AniItem({ item, showOnlyOneItem }) {
  const { title, year, content } = item;
  const cardClassName = showOnlyOneItem ? "info_card_one" : "info_card";

  return (
    <li className={cardClassName}>
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
