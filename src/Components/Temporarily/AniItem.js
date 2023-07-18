import { useState } from "react";
import "./AniItem.css";

function AniItem({ item }) {
  const { title, year, content } = item;
  const [isClick, setIsClick] = useState(false);

  const zoomClick = () => {
    setIsClick(!isClick);
  };

  return (
    <li
      className={`info_card ${isClick ? "expansion" : ""}`}
      onClick={zoomClick}
    >
      <sapn className="card_content">
        <h1>{title}</h1>
        <h2>- 방영연도: {year}</h2>
        <p>- {content}</p>
      </sapn>
    </li>
  );
}

export default AniItem;
