import { useEffect, useState } from "react";
import anijson from "../api.json";
import AniList from "./Temporarily/AniList";
import MenuList from "./Temporarily/MenuList";
import ScrollTopButton from "./ScrollTopButton";
import { BsFillPlusSquareFill } from "react-icons/bs";
import PlusPopup from "./PlusPopup";
import "./List.css";

function Since2000() {
  // eslint-disable-next-line
  const [order, setOrder] = useState("id");
  const [data, setData] = useState([]); //애니데이터 설정, 초기에는 상위 10개의 데이터만 표시
  // eslint-disable-next-line
  const [menu, setMenu] = useState([{ since: "2000" }]); //메뉴 설정
  const [visibleCount, setVisibleCount] = useState(10); //현재 표시되는 데이터 개수
  const [activeTab, setActiveTab] = useState("2000");
  const [isPlusPopup, setIsPlusPopup] = useState(false);

  const onMenu = (since) => {
    setActiveTab(since);
    setVisibleCount(10); // "더보기" 기능 초기화
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 10); //10개씩 추가로 개수 증가
  };

  // visibleCount가 변경될 때마다 데이터 업데이트
  useEffect(() => {
    // visibleCount, order, activeTab이 변경될 때마다 실행되는 콜백 함수
    if (activeTab === "2000") {
      const filterData = anijson.filter((item) => item.since === activeTab);
      const sortedData = filterData.sort((a, b) => b[order] - a[order]);
      setData(sortedData.slice(0, visibleCount));
    }
  }, [visibleCount, order, activeTab]);

  //추가하기 기능
  const handleAddClick = () => {
    setIsPlusPopup(true);
  };

  return (
    <div className="list-container">
      <MenuList menu={menu} onMenu={onMenu} />

      <BsFillPlusSquareFill className="plusbutton" onClick={handleAddClick} />
      {isPlusPopup && <PlusPopup onClose={() => setIsPlusPopup(false)} />}

      <AniList item={data} data={data} />
      <ScrollTopButton />

      <button className="load-more" onClick={handleShowMore}>
        더보기
      </button>
    </div>
  );
}

export default Since2000;
