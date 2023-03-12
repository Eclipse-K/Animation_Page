import AniItem from "./AniItem";

const AniList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <AniItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default AniList;
