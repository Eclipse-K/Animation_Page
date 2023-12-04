import AniItem from "./AniItem";
import "./AniList.css";

const AniList = ({ data }) => {
  return (
    <ul className="info_container">
      {data.map((item) => (
        <AniItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default AniList;
