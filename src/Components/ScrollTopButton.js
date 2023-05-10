import { SiAcclaim } from "react-icons/si";
import "./ScrollTopButton.css";

function ScrollTopButton() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className="scrollbutton" onClick={handleScrollTop}>
      <SiAcclaim />
    </button>
  );
}

export default ScrollTopButton;
