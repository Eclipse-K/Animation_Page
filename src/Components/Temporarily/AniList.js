import AniItem from "./AniItem";
import "./AniList.css";

function AniList({ data, showOnlyOneItem }) {
  const infoContainer = showOnlyOneItem
    ? "info_container_one"
    : "info_container";

  const sliderClass = showOnlyOneItem ? "" : "slider";

  return (
    <div className={`slider-container ${sliderClass}`}>
      <ul className={infoContainer}>
        {data.map((item) => (
          <AniItem
            key={item.id}
            item={item}
            showOnlyOneItem={showOnlyOneItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default AniList;
