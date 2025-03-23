import PlusInput from "./PlusOption/PlusInput";
import PlusLabel from "./PlusOption/PlusLabel";
import PlusInsertButton from "./PlusOption/PulsInsertButton";
import PlusContainer from "./PlusOption/PlusContainer";
import { useRef } from "react";
import { useEffect } from "react";
import PlusTextarea from "./PlusOption/PlusTextarea";

function PlusPopup({ onClose }) {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const handleConfirmClick = async () => {
    const titleInput = document.getElementById("title");
    const sinceInput = document.getElementById("since");
    const yearInput = document.getElementById("year");
    const contentInput = document.getElementById("content");

    const newItem = {
      id: crypto.randomUUID(), // UUID 생성
      title: titleInput.value,
      since: sinceInput.value,
      year: yearInput.value,
      content: contentInput.value,
    };

    try {
      const response = await fetch("http://localhost:5001/api/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error(`서버 오류: ${response.status}`);
      }

      const result = await response.json();
      console.log("서버 응답:", result);
      alert("추가되었습니다!");
      onClose();
    } catch (error) {
      console.error("API 요청 실패:", error);
      alert("데이터 저장 중 오류 발생");
    }
  };

  return (
    <PlusContainer onKeyDown={handleKeyDown} tabIndex="0">
      <form ref={popupRef}>
        <h2>추가하기</h2>
        <PlusLabel htmlFor="title">제목</PlusLabel>
        <PlusInput text="제목" id="title" name="title" placeholder="제목" />
        <PlusLabel htmlFor="since">연대</PlusLabel>
        <PlusInput text="연대" id="since" name="since" placeholder="연대" />
        <PlusLabel htmlFor="year">연도</PlusLabel>
        <PlusInput text="연도" id="year" name="year" placeholder="연도" />
        <PlusLabel htmlFor="content">내용</PlusLabel>
        <PlusTextarea
          text="내용"
          id="content"
          name="content"
          placeholder="내용"
        />
        <PlusInsertButton onClick={handleConfirmClick}>확인</PlusInsertButton>
      </form>
    </PlusContainer>
  );
}

export default PlusPopup;
