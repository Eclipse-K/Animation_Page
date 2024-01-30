import NavDrop from "./NavDrop";
import Minesweeper from "./Minesweeper";
import HomeContainer from "./Temporarily/HomeContainer";
import Title from "./Temporarily/Title";
import Copyright from "./Copyright";

function Home() {
  return (
    <HomeContainer>
      <NavDrop />
      <Title>Animation</Title>
      <Minesweeper />
      <Copyright />
    </HomeContainer>
  );
}

export default Home;
