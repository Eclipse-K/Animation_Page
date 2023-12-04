import NavDrop from "./NavDrop";
import Copyright from "./Copyright";
import Minesweeper from "./Minesweeper";
import HomeContainer from "./Temporarily/HomeContainer";
import Title from "./Temporarily/Title";

function Home() {
  return (
    <HomeContainer>
      <NavDrop />
      <Title to="/">Animation</Title>
      <Minesweeper />
      <Copyright />
    </HomeContainer>
  );
}

export default Home;
