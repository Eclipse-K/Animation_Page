import { BiChevronsUp } from "react-icons/bi";
import "./ScrollTopButton.css";

function ScrollTopButton() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={handleScrollTop}>
      <BiChevronsUp className="arrowIcon" alt="맨위로" />
    </button>
  );
}

export default ScrollTopButton;
