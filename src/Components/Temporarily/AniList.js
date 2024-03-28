import AniItem from "./AniItem";
import "./AniList.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

function AniList({ data, showOnlyOneItem, scrollRef }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const infoContainer = showOnlyOneItem
    ? "info_container_one"
    : "info_container";

  // const settings = {
  //   arrows: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <ul className={infoContainer} ref={scrollRef}>
      {showOnlyOneItem ? (
        <div className="Card-Box">
          {data.map((item) => (
            <AniItem
              key={item.id}
              item={item}
              showOnlyOneItem={showOnlyOneItem}
            />
          ))}
        </div>
      ) : (
        <div className="Card">
          <div className="Card-big">
            {selectedItem && (
              <div className="card_content">
                <div className="card-content-second">
                  <h1>{selectedItem.title}</h1>
                  <h2>- 방영연도: {selectedItem.year}</h2>
                  <p>- {selectedItem.content}</p>
                </div>
              </div>
            )}
          </div>
          <div className="Card-Slider-Box">
            <div className="Card-Slider">
              {data.map((item) => (
                <AniItem
                  key={item.id}
                  item={item}
                  showOnlyOneItem={showOnlyOneItem}
                  onClick={() => handleItemClick(item)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </ul>
  );
}

export default AniList;
