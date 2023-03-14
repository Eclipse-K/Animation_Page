import { useState } from "react";
import aniJsons from "../Animation.json";
import AniList from "./Temporarily/AniList";
import MenuList from "./Temporarily/MenuList";

function Home() {
  const [order, setOrder] = useState("year");
  const [data, setData] = useState(aniJsons); //애니데이터 설정
  const [menu, setMenu] = useState([
    { since: "all" },
    { since: "1970" },
    { since: "1980" },
    { since: "1990" },
    { since: "2000" },
  ]); //메뉴 설정

  const sortedData = data.sort((a, b) => b[order] - a[order]);

  const handleYearClick = () => setOrder("year");
  const handleBestClick = () => setOrder("best");

  const onMenu = (since) => {
    if (since === "all") {
      setData(aniJsons);
    } else {
      setData(aniJsons.filter((item) => item.since === since));
    }
  };

  return (
    <div>
      <h1>애니</h1>
      <MenuList menu={menu} onMenu={onMenu} />
      <hr />
      <div>
        <button onClick={handleYearClick}>연도순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <AniList item={sortedData} data={data} />
    </div>
  );
}

export default Home;
