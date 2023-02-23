import AniList from "./AniList";
import items from "../Animation.json";
import { useState } from "react";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [order, setOrder] = useState("year");
  const sortedItems = items.sort((a, b) => a[order] - b[order]); //오름차순 정리

  const handleYearClick = () => setOrder("year");

  const handleIdClick = () => setOrder("id");

  return (
    <div>
      <div>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </div>
      <div>
        <button onClick={handleYearClick}>연도순</button>
        <button onClick={handleIdClick}>번호순</button>
      </div>

      <AniList items={sortedItems} />
    </div>
  );
}

export default App;
