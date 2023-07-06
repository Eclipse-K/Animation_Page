import { useEffect, useState } from "react";
import anijson from "../api.json";
import AniList from "./Temporarily/AniList";
import MenuList from "./Temporarily/MenuList";
import "./List.css";
import ScrollTopButton from "./ScrollTopButton";
import { BsFillPlusSquareFill } from "react-icons/bs";
import PlusPopup from "./PlusPopup";

function List() {
  // eslint-disable-next-line
  const [order, setOrder] = useState("id");
  const [data, setData] = useState(anijson.slice(0, 10)); //애니데이터 설정, 초기에는 상위 10개의 데이터만 표시
  // eslint-disable-next-line
  const [menu, setMenu] = useState([
    { since: "all" },
    { since: "1970" },
    { since: "1980" },
    { since: "1990" },
    { since: "2000" },
  ]); //메뉴 설정
  const [visibleCount, setVisibleCount] = useState(10); //현재 표시되는 데이터 개수
  const [activeTab, setActiveTab] = useState("all");
  const [isPlusPopup, setIsPlusPopup] = useState(false);

  const onMenu = (since) => {
    setActiveTab(since);

    if (since === "all") {
      const allData = anijson.sort((a, b) => b[order] - a[order]);
      setData(allData.slice(0, visibleCount));
    } else {
      //setData(anijson.filter((item) => item.since === since));
      const filterData = anijson.filter((item) => item.since === since);
      const sortedData = filterData.sort((a, b) => b[order] - a[order]);
      setData(sortedData.slice(0, visibleCount)); // 상위 10개의 데이터만 설정
    }
    setVisibleCount(10); // "더보기" 기능 초기화
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 10); //10개씩 추가로 개수 증가
  };

  // visibleCount가 변경될 때마다 데이터 업데이트
  useEffect(() => {
    // visibleCount, order, activeTab이 변경될 때마다 실행되는 콜백 함수
    if (activeTab === "all") {
      const allData = anijson.sort((a, b) => b[order] - a[order]);
      setData(allData.slice(0, visibleCount));
    } else {
      const filterData = anijson.filter((item) => item.since === activeTab);
      const sortedData = filterData.sort((a, b) => b[order] - a[order]);
      setData(sortedData.slice(0, visibleCount));
    }
  }, [visibleCount, order, activeTab]);

  //추가하기 기능
  const hadnleAddClick = () => {
    setIsPlusPopup(true);
  };

  return (
    <div className="list-container">
      <MenuList menu={menu} onMenu={onMenu} />

      <BsFillPlusSquareFill className="plusbutton" onClick={hadnleAddClick} />
      {isPlusPopup && <PlusPopup onClose={() => setIsPlusPopup(false)} />}

      <AniList item={data} data={data} />
      <ScrollTopButton />

      <button className="load-more" onClick={handleShowMore}>
        더보기
      </button>
    </div>
  );
}

export default List;
