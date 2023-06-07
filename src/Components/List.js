import { useState } from "react";
import anijson from "../api.json";
import AniList from "./Temporarily/AniList";
import MenuList from "./Temporarily/MenuList";
import "./List.css";

function List() {
  // eslint-disable-next-line
  const [order, setOrder] = useState("id");
  const [data, setData] = useState(anijson); //애니데이터 설정
  // eslint-disable-next-line
  const [menu, setMenu] = useState([
    { since: "all" },
    { since: "1970" },
    { since: "1980" },
    { since: "1990" },
    { since: "2000" },
  ]); //메뉴 설정

  const onMenu = (since) => {
    if (since === "all") {
      setData(anijson);
    } else {
      //setData(anijson.filter((item) => item.since === since));
      const filterData = anijson.filter((item) => item.since === since);
      const sortedData = filterData.sort((a, b) => b[order] - a[order]);
      setData(sortedData.slice(0, 10)); // 상위 10개의 데이터만 설정
    }
  };

  return (
    <div className="list-container">
      <MenuList menu={menu} onMenu={onMenu} />
      <AniList item={data} data={data} />
    </div>
  );
}

export default List;
