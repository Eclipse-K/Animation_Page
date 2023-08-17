import { useEffect, useState } from "react";
import anijson from "../../api.json";
import AniList from "../Temporarily/AniList";
import ScrollTopButton from "../ScrollTopButton";
import { BsFillPlusSquareFill } from "react-icons/bs";
import PlusPopup from "../PlusPopup";
import "../List.css";

function Since1980() {
  // eslint-disable-next-line
  const [order, setOrder] = useState("id");
  const [data, setData] = useState([]); //애니데이터 설정, 초기에는 상위 10개의 데이터만 표시
  const [visibleCount, setVisibleCount] = useState(10); //현재 표시되는 데이터 개수
  const [isPlusPopup, setIsPlusPopup] = useState(false);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 10); //10개씩 추가로 개수 증가
  };

  // visibleCount가 변경될 때마다 데이터 업데이트
  useEffect(() => {
    const filterData = anijson.filter((item) => item.since === "1980");
    const sortedData = filterData.sort((a, b) => b[order] - a[order]);
    setData(sortedData.slice(0, visibleCount));
  }, [visibleCount, order]);

  //추가하기 기능
  const handleAddClick = () => {
    setIsPlusPopup(true);
  };

  return (
    <div className="list-container">
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

export default Since1980;
