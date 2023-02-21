function AniListItem({ item }) {
  return (
    <div>
      <h1>{item.id}</h1>
      <p>{item.name}</p>
      <p>{item.year}</p>
      <p>{item.content}</p>
    </div>
  );
}

function AniList({ item }) {
  return (
    <ul>
      {item.map((item) => {
        return (
          <li>
            <AniListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default AniList;
