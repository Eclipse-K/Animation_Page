import { useState } from "react";
import "./AniItem.css";

function AniItem({ item }) {
  const { img, title, year, content } = item;
  const [isClick, setIsClick] = useState(false);

  const zoomClick = () => {
    setIsClick(!isClick);
  }; //클릭하면 확대되는 기능

  return (
    <li
      className={`info_card ${isClick ? "expansion" : ""}`} //클릭하면 확대, 축소
      onClick={zoomClick}
    >
      <div className="card_content">
        <div className="card-img-group">
          <img src={img} alt={title} />
        </div>

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
