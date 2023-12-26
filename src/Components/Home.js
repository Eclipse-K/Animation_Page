import NavDrop from "./NavDrop";
import Minesweeper from "./Minesweeper";
import HomeContainer from "./Temporarily/HomeContainer";
import Title from "./Temporarily/Title";
import "./Home.css";
import { useEffect, useState } from "react";
import Copyright from "./Copyright";

function Home() {
  const [modeChange, setModeChange] = useState(false);
  //시스템 설정에 따라 테마 색상이 변함.

  useEffect(() => {
    const prefersModeChange = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setModeChange(prefersModeChange);
  }, []);

  return (
    <div className={modeChange ? "dark-mode" : "light-mode"}>
      <HomeContainer>
        <NavDrop />
        <Title to="/">Animation</Title>
        <Minesweeper />
        <Copyright />
      </HomeContainer>
    </div>
  );
}

export default Home;
