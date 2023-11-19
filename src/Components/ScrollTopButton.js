import { BsCaretUpSquareFill } from "react-icons/bs";
import "./ScrollTopButton.css";

function ScrollTopButton() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BsCaretUpSquareFill
      className="arrowIcon"
      onClick={handleScrollTop}
      alt="맨위로"
    />
  );
}

export default ScrollTopButton;
