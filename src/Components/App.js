import AniList from "./AniList";
import NavbarDrop from "./Navbar";
import items from "../Animation.json";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState("year");
  const sortedItems = items.sort((a, b) => a[order] - b[order]);

  const handleYearClick = () => setOrder("year");

  const handleIdClick = () => setOrder("id");

  return (
    <div>
      <NavbarDrop />
      <div>
        <button onClick={handleYearClick}>연도순</button>
        <button onClick={handleIdClick}>번호순</button>
      </div>

      <AniList items={sortedItems} />
    </div>
  );
}

export default App;
