import AniItem from "./AniItem";
import "./AniList.css";

function AniList({ data, showOnlyOneItem }) {
  return (
    <ul className="info_container">
      {data.map((item) => (
        <AniItem key={item.id} item={item} showOnlyOneItem={showOnlyOneItem} />
      ))}
    </ul>
  );
}

export default AniList;
