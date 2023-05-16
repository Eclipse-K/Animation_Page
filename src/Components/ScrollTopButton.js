import { BsArrowUpCircleFill } from "react-icons/bs";
import "./ScrollTopButton.css";

function ScrollTopButton() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className="scrollbutton" onClick={handleScrollTop}>
      <BsArrowUpCircleFill className="arrowIcon" />
    </button>
  );
}

export default ScrollTopButton;
