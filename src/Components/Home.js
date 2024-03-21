import NavDrop from "./NavDrop";
import Minesweeper from "./Minesweeper";
import HomeContainer from "./HomeStyle/HomeContainer.js";
import Title from "./Temporarily/Title";
import Copyright from "./Copyright";
import HomeGrid from "./HomeStyle/HomeGrid.js";
// import HomeSecond from "./HomeStyle/HomeSecond.js";
// import MickeyMouse from "../image/MickeyMouse.JPG";
// import Mazinger from "../image/마징가.png";
// import HomeThird from "./HomeStyle/HomeThird.js";

function Home() {
  return (
    <HomeContainer>
      <NavDrop />
      <Title>Animation</Title>
      <HomeGrid>
        <Minesweeper />
        {/* <HomeSecond src={MickeyMouse} alt="MickeyMouse" />
        <HomeThird src={Mazinger} alt="Mazinger" /> */}
      </HomeGrid>

      <Copyright />
    </HomeContainer>
  );
}

export default Home;
