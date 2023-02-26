import "./AnimationList.css";

function AnimationListItem({ items, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(items.id);
  };

  return (
    <div className="AnimationListItem">
      <h1>{items.title}</h1>
      <h2>{items.year}</h2>
      <h3>{items.best}</h3>
      <p>{items.content}</p>
      <button onClick={handleDeleteClick}>삭제</button>
    </div>
  );
}

function AnimationList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <AnimationListItem items={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

export default AnimationList;
