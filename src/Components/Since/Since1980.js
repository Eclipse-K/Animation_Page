import { useEffect, useRef, useState } from "react";
import anijson from "../../api.json";
import AniList from "../Temporarily/AniList";
import {
  BsFillPlusSquareFill,
  BsCaretDownSquareFill,
  BsCardList,
  BsCollectionPlayFill,
} from "react-icons/bs";
import PlusPopup from "../PlusPopup";
import "../List.css";
import ScrollButton from "../ScrollButton/ScrollButton";

function Since1980() {
  // eslint-disable-next-line
  const [order, setOrder] = useState("id");
  const [data, setData] = useState([]); //애니데이터 설정, 초기에는 상위 10개의 데이터만 표시
  const [isPlusPopup, setIsPlusPopup] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(true); // 추가할 데이터가 더 있는지 여부를 나타내는 상태 추가
  const [showOnlyOneItem, setShowOnlyOneItem] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10); //현재 표시되는 데이터 개수

  const handleShowMore = () => {
    const newVisibleCount = visibleCount + 5;
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

  const handleToggleVisibility = () => {
    setShowOnlyOneItem(!showOnlyOneItem);
    if (showOnlyOneItem) {
      setShowLoadMore(true); // 전체보기 모드로 전환 시 더보기 버튼 다시 활성화
    }
  };

  // visibleCount가 변경될 때마다 데이터 업데이트
  useEffect(() => {
    const filterData = anijson.filter((item) => item.since === "1980");
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

  const scrollRef = useRef(null);

  return (
    <div className="Since-Container">
      <div className="List-Box">
        <div className="List-Container">
          <AniList
            item={data}
            data={data}
            showOnlyOneItem={showOnlyOneItem}
            scrollRef={scrollRef}
          />

          {/* view-only-one일 때는 스크롤과 더보기 숨김 */}
          {showOnlyOneItem ? (
            <>
              <ScrollButton scrollRef={scrollRef} />
              {showLoadMore && (
                <BsCaretDownSquareFill
                  className="More-Arrow"
                  onClick={handleShowMore}
                  alt="더보기"
                />
              )}
            </>
          ) : null}

          {/* 추가하기 */}
          <BsFillPlusSquareFill
            className="plusbutton"
            onClick={handleAddClick}
          />
          {isPlusPopup && <PlusPopup onClose={() => setIsPlusPopup(false)} />}

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

export default Since1980;
