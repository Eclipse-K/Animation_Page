function AniListItem({ items }) {
  return (
    <div>
      <h1>{items.id}</h1>
      <p>{items.name}</p>
      <p>{items.year}</p>
      <p>{items.content}</p>
    </div>
  );
}

function AniList({ items }) {
  return (
    <ul>
      {items.map((items) => {
        return (
          <li>
            <AniListItem items={items} />
          </li>
        );
      })}
    </ul>
  );
}

export default AniList;
