import { useEffect, useState } from "react";
import anijson from "../../api.json";
import AniList from "../Temporarily/AniList";
import ScrollTopButton from "../ScrollTopButton";
import {
  BsFillPlusSquareFill,
  BsCaretDownSquareFill,
  BsCardList,
  BsCollectionPlayFill,
} from "react-icons/bs";
import PlusPopup from "../PlusPopup";
import NavDrop from "../NavDrop";
import "../List.css";

function Since1990() {
  // eslint-disable-next-line
  const [order, setOrder] = useState("id");
  const [data, setData] = useState([]); //애니데이터 설정, 초기에는 상위 10개의 데이터만 표시
  const [isPlusPopup, setIsPlusPopup] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(true); // 추가할 데이터가 더 있는지 여부를 나타내는 상태 추가
  const [showOnlyOneItem, setShowOnlyOneItem] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10); //현재 표시되는 데이터 개수

  const handleShowMore = () => {
    const newVisibleCount = visibleCount + 5;
    const filterData = anijson.filter((item) => item.since === "1990");
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

  const handleToggleVisibility = () => {
    setShowOnlyOneItem(!showOnlyOneItem);
    if (showOnlyOneItem) {
      setShowLoadMore(true); // 전체보기 모드로 전환 시 더보기 버튼 다시 활성화
    }
  };

  // visibleCount가 변경될 때마다 데이터 업데이트
  useEffect(() => {
    const filterData = anijson.filter((item) => item.since === "1990");
    const sortedData = filterData.sort((a, b) => a[order] - b[order]);
    const newData = showOnlyOneItem
      ? sortedData.slice(0, visibleCount)
      : sortedData;
    setData(newData);
  }, [showOnlyOneItem, order, visibleCount]);

  //추가하기 기능
  const handleAddClick = () => {
    setIsPlusPopup(true);
  };

  return (
    <div className="Since-Container">
      <NavDrop />

      <div className="List-Box">
        <div className="List-Container">
          <AniList item={data} data={data} showOnlyOneItem={showOnlyOneItem} />

          <ScrollTopButton />

          <BsFillPlusSquareFill
            className="plusbutton"
            onClick={handleAddClick}
          />
          {isPlusPopup && <PlusPopup onClose={() => setIsPlusPopup(false)} />}

          {showLoadMore && (
            <BsCaretDownSquareFill
              className="More-Arrow"
              onClick={handleShowMore}
              alt="더보기"
            />
          )}

          {showOnlyOneItem ? (
            <BsCollectionPlayFill
              className="Full-view"
              onClick={handleToggleVisibility}
              alt="전체보기"
            />
          ) : (
            <BsCardList
              className="View-only-one"
              onClick={handleToggleVisibility}
              alt="1개만 보기"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Since1990;
