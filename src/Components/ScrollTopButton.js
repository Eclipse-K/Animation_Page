import { AiOutlineCaretUp } from "react-icons/ai";
import "./ScrollTopButton.css";

function ScrollTopButton() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={handleScrollTop}>
      <AiOutlineCaretUp className="arrowIcon" alt="맨위로" />
    </button>
  );
}

export default ScrollTopButton;
