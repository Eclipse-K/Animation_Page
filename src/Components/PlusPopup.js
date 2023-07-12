import "./PlusPopup.css";
import PopupCard from "./PopupCard";

function PlusPopup({ onClose }) {
  return (
    <div className="plus-popup-container">
      <div className="plus-popup-content">
        <h1>추가하기</h1>
        <PopupCard />
        <button className="close-button" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
}

export default PlusPopup;
