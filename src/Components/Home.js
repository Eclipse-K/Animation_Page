import NavDrop from "./NavDrop";
import Copyright from "./Copyright";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../image/YeonU-Logo.png";

const Title = styled(Link)`
  color: black;
  margin: 0;
  font-family: "Black Ops One", cursive;
  font-size: 40px;
  transition: transform 0.3s;
  text-decoration: none;
  position: absolute;
  padding: 1rem;
  right: 0;
  top: 0;

  :hover {
    color: black;
    transform: scale(1.2);
  }

  .TitleLogo {
    width: 50px;
    height: 50px;
    margin-right: 5px;
  }

  @media all and (max-width: 414px) {
    font-size: 35px;
    border: 1px solid black;
  }
`;

function Home() {
  return (
    <div>
      <NavDrop />
      <Title to="/">
        <img className="TitleLogo" src={Logo} alt={Logo} />
        Animation
      </Title>
      <Copyright />
    </div>
  );
}

export default Home;
