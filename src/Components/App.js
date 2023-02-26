import AnimationList from "./AnimationList";
import { useState } from "react";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";
import aniJsons from "../Animation.json";

function App() {
  const [order, setOrder] = useState("year");
  const [items, setItems] = useState(aniJsons);
  const sortedItems = items.sort((a, b) => b[order] - a[order]); //오름차순 정리

  const handleYearClick = () => setOrder("year");

  const handlePopClick = () => setOrder("popular");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  return (
    <div>
      <div>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </div>
      <div>
        <button onClick={handleYearClick}>연도순</button>
        <button onClick={handlePopClick}>인기순</button>
      </div>

      <AnimationList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
