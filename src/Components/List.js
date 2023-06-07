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
  const [visibleCount, setVisibleCount] = useState(10);

  const sortedData = data.sort((a, b) => b[order] - a[order]);
  const visibleData = sortedData.slice(0, visibleCount);

  const onMenu = (since) => {
    if (since === "all") {
      setData(anijson);
    } else {
      setData(anijson.filter((item) => item.since === since));
    }
    setVisibleCount(10); // 메뉴 변경 시 보이는 리스트 개수 초기화
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10); //"더보기" 버튼 클릭 시 보이는 리스트 개수 증가
  };

  return (
    <div className="list-container">
      <MenuList menu={menu} onMenu={onMenu} />
      <AniList item={visibleData} data={data} />
      {visibleCount < sortedData.length && (
        <div className="load-more">
          <button onClick={handleLoadMore}>더보기</button>
        </div>
      )}
    </div>
  );
}

export default List;
