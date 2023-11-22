import { useEffect, useState } from "react";
import anijson from "../../api.json";
import AniList from "../Temporarily/AniList";
import ScrollTopButton from "../ScrollTopButton";
import { BsFillPlusSquareFill, BsCaretDownSquareFill } from "react-icons/bs";
import PlusPopup from "../PlusPopup";
import NavDrop from "../NavDrop";
import Copyright from "../Copyright";
import "../List.css";

function Since1980() {
  // eslint-disable-next-line
  const [order, setOrder] = useState("id");
  const [data, setData] = useState([]); //애니데이터 설정, 초기에는 상위 10개의 데이터만 표시
  const [visibleCount, setVisibleCount] = useState(10); //현재 표시되는 데이터 개수
  const [isPlusPopup, setIsPlusPopup] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(true); // 추가할 데이터가 더 있는지 여부를 나타내는 상태 추가

  const handleShowMore = () => {
    const newVisibleCount = visibleCount + 10;
    const filterData = anijson.filter((item) => item.since === "1980");
    const sortedData = filterData.sort((a, b) => a[order] - b[order]);
    const newData = sortedData.slice(0, newVisibleCount);
    if (newData.length > data.length) {
      setData(newData);
      setVisibleCount(newVisibleCount);
    } else {
      // 더 이상 추가할 데이터가 없으면 load-more 버튼을 숨김
      setShowLoadMore(false);
    }
  };

  // visibleCount가 변경될 때마다 데이터 업데이트
  useEffect(() => {
    const filterData = anijson.filter((item) => item.since === "1980");
    const sortedData = filterData.sort((a, b) => a[order] - b[order]);
    setData(sortedData.slice(0, visibleCount));
  }, [visibleCount, order]);

  //추가하기 기능
  const handleAddClick = () => {
    setIsPlusPopup(true);
  };

  return (
    <div className="Since-Container">
      <NavDrop />
      <div className="List-Box">
        <div className="List-Container">
          <BsFillPlusSquareFill
            className="plusbutton"
            onClick={handleAddClick}
          />
          {isPlusPopup && <PlusPopup onClose={() => setIsPlusPopup(false)} />}

          <AniList item={data} data={data} />
          <ScrollTopButton />

          {showLoadMore && (
            <BsCaretDownSquareFill
              className="More-Arrow"
              onClick={handleShowMore}
              alt="더보기"
            />
          )}
        </div>
      </div>

      <Copyright />
    </div>
  );
}

export default Since1980;
