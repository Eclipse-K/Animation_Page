import { AiOutlineCaretUp } from "react-icons/ai";
import "./ScrollTopButton.css";

function ScrollTopButton() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AiOutlineCaretUp
      className="arrowIcon"
      onClick={handleScrollTop}
      alt="맨위로"
    />
  );
}

export default ScrollTopButton;
