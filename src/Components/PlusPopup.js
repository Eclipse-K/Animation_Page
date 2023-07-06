import "./PlusPopup.css";

function PlusPopup({ onClose }) {
  return (
    <div className="pluscard">
      <h1>추가하기</h1>
      <button onClick={onClose}>닫기</button>
    </div>
  );
}

export default PlusPopup;
