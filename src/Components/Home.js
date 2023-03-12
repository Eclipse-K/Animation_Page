import { useState } from "react";
import aniJsons from "../Animation.json";
import AniList from "./Temporarily/AniList";
import MenuList from "./Temporarily/MenuList";

function Home() {
  const [data, setData] = useState(aniJsons); //애니데이터 설정
  const [menu, setMenu] = useState([
    { since: "all" },
    { since: "1970" },
    { since: "1980" },
    { since: "1990" },
    { since: "2000" },
  ]); //메뉴 설정

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
      <AniList data={data} />
    </div>
  );
}

export default Home;
