import NavDrop from "./NavDrop";
import Copyright from "./Copyright";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Home.css";
import Minesweeper from "./Minesweeper";

const Title = styled(Link)`
  color: white;
  margin: 0;
  font-family: "Black Ops One", cursive;
  font-size: 40px;
  transition: transform 0.3s;
  text-decoration: none;
  position: absolute;
  right: 40px;
  top: 10px;

  :hover {
    color: black;
    transform: scale(1.2);
  }

  @media all and (max-width: 432px) {
    font-size: 35px;
  }
`;

function Home() {
  return (
    <div className="Home-container">
      <NavDrop />
      <Title to="/">Animation</Title>
      <Minesweeper />

      <Copyright />
    </div>
  );
}

export default Home;
