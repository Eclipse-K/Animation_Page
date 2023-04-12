import { useState } from "react";
import AniJsons from "../Animation.json";
import AniList from "./Temporarily/AniList";
import MenuList from "./Temporarily/MenuList";
import "./List.css";

function List() {
  // eslint-disable-next-line
  const [order, setOrder] = useState("id");
  const [data, setData] = useState(AniJsons); //애니데이터 설정
  // eslint-disable-next-line
  const [menu, setMenu] = useState([
    { since: "all" },
    { since: "1970" },
    { since: "1980" },
    { since: "1990" },
    { since: "2000" },
  ]); //메뉴 설정

  const sortedData = data.sort((a, b) => b[order] - a[order]);

  const onMenu = (since) => {
    if (since === "all") {
      setData(AniJsons);
    } else {
      setData(AniJsons.filter((item) => item.since === since));
    }
  };

  return (
    <div className="button">
      <MenuList menu={menu} onMenu={onMenu} />
      <AniList item={sortedData} data={data} />
    </div>
  );
}

export default List;
