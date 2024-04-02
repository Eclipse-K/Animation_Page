import ScrollStyle from "./ScrollStyle";

function ScrollButton() {
  const scrollToTop = () => {
    // if (scrollRef.current) {
    //   scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    // }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <ScrollStyle onClick={scrollToTop} />;
}

export default ScrollButton;
