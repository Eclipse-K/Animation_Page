import PlusInput from "./PlusOption/PlusInput";
import PlusLabel from "./PlusOption/PlusLabel";
import PlusInsertButton from "./PlusOption/PulsInsertButton";
import PlusContainer from "./PlusOption/PlusContainer";
import { useRef } from "react";
import { useEffect } from "react";
//import axios from "axios";

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

  const handleConfirmClick = () => {
    // "확인" 버튼을 클릭했을 때의 동작을 처리하기 위한 로직을 여기에 추가합니다.
    const titleInput = document.getElementById("title");
    const sicneInput = document.getElementById("since");
    const yearInput = document.getElementById("year");
    const contentInput = document.getElementById("content");

    // eslint-disable-next-line
    const newItem = {
      title: titleInput.value,
      since: sicneInput.value,
      year: yearInput.value,
      content: contentInput.value,
    };

    /* Axios를 사용하여 API 요청을 보내는 부분입니다.
    axios
      .post("https://example-api.com/items", newItem)
      .then((response) => {
        console.log("새로운 아이템이 추가되었습니다!", response.data);
        onClose(); // API 요청이 성공하면 팝업을 닫습니다.
      })
      .catch((error) => {
        console.error("아이템 추가에 실패했습니다:", error);
      });
      */

    onClose();
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
        <PlusInput text="내용" id="content" name="content" placeholder="내용" />
        <PlusInsertButton onClick={handleConfirmClick}>확인</PlusInsertButton>
      </form>
    </PlusContainer>
  );
}

export default PlusPopup;
