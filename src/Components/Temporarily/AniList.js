import Slider from "react-slick";
import AniItem from "./AniItem";
import "./AniList.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AniList({ data, showOnlyOneItem }) {
  const infoContainer = showOnlyOneItem
    ? "info_container_one"
    : "info_container";

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ul className={infoContainer}>
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
        <Slider {...settings}>
          {data.map((item) => (
            <AniItem
              key={item.id}
              item={item}
              showOnlyOneItem={showOnlyOneItem}
            />
          ))}
        </Slider>
      )}
    </ul>
  );
}

export default AniList;
