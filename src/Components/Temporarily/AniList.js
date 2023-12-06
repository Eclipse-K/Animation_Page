import AniItem from "./AniItem";
import "./AniList.css";

function AniList({ data, showOnlyOneItem }) {
  const infoContainer = showOnlyOneItem
    ? "info_container_one"
    : "info_container";

  return (
    <ul className={infoContainer}>
      {data.map((item) => (
        <AniItem key={item.id} item={item} showOnlyOneItem={showOnlyOneItem} />
      ))}
    </ul>
  );
}

export default AniList;
