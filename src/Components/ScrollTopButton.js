import { FiArrowUp } from "react-icons/fi";
import "./ScrollTopButton.css";

function ScrollTopButton() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className="scrollbutton" onClick={handleScrollTop}>
      {FiArrowUp}위로가기
    </button>
  );
}

export default ScrollTopButton;
