import NavDrop from "./NavDrop";
import Minesweeper from "./Minesweeper";
import HomeContainer from "./HomeStyle/HomeContainer.js";
import Title from "./Temporarily/Title";
import Copyright from "./Copyright";
import HomeGrid from "./HomeStyle/HomeGrid.js";
import HomeSecond from "./HomeStyle/HomeSecond.js";

function Home() {
  return (
    <HomeContainer>
      <NavDrop />
      <Title>Animation</Title>
      <HomeGrid>
        <Minesweeper />
        <HomeSecond>
          <h1>미제</h1>
        </HomeSecond>
      </HomeGrid>

      <Copyright />
    </HomeContainer>
  );
}

export default Home;
