import AnimationList from "./AnimationList";
import aniJsons from "../Animation.json";
import { useState } from "react";

function AnimationForm() {
  const [order, setOrder] = useState("year");
  const [items, setItems] = useState(aniJsons);
  const sortedItems = items.sort((a, b) => b[order] - a[order]); //오름차순 정리

  const handleYearClick = () => setOrder("year");

  const handleBestClick = () => setOrder("best");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  return (
    <div>
      <div>
        <button onClick={handleYearClick}>연도순</button>
        <button onClick={handleBestClick}>인기순</button>
      </div>
      <AnimationList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default AnimationForm;
