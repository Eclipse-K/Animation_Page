import { BsFillCaretUpSquareFill } from "react-icons/bs";
import "./ScrollTopButton.css";

function ScrollTopButton() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BsFillCaretUpSquareFill
      className="arrowIcon"
      onClick={handleScrollTop}
      alt="맨위로"
    />
  );
}

export default ScrollTopButton;
