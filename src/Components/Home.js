import NavDrop from "./NavDrop";
import Minesweeper from "./Minesweeper";
import HomeContainer from "./HomeStyle/HomeContainer.js";
import Title from "./Temporarily/Title";
import Copyright from "./Copyright";
import HomeIpad from "./HomeStyle/HomeIpad.js";

function Home() {
  return (
    <HomeContainer>
      <NavDrop />
      <Title>Animation</Title>
      <HomeIpad>
        <Minesweeper />
      </HomeIpad>
      <Copyright />
    </HomeContainer>
  );
}

export default Home;
