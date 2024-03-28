import React from "react";
import "./AniItem.css";

function AniItem({ item, showOnlyOneItem, onClick }) {
  const { title, year, content } = item;
  const contentToShow = showOnlyOneItem ? content : null;

  return (
    <li
      className={showOnlyOneItem ? "info_card_one" : "info_card"}
      onClick={onClick}
    >
      <div className="card_content">
        <div className="card-content-second">
          <h1>{title}</h1>
          {showOnlyOneItem && (
            <React.Fragment>
              <h2>- 방영연도: {year}</h2>
              <p>- {contentToShow}</p>
            </React.Fragment>
          )}
        </div>
      </div>
    </li>
  );
}

export default AniItem;
