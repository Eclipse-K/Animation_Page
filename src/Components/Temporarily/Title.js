import styled from "styled-components";

const Title = styled.div`
  margin: 0;
  font-family: "Black Ops One", cursive;
  font-size: 40px;
  transition: transform 0.3s;
  text-decoration: none;
  position: absolute;
  right: 40px;
  top: 15px;
  cursor: default;

  :hover {
    transform: scale(1.2);
  }

  @media all and (width: 280px) {
    font-size: 25px;
  }

  @media all and (min-width: 281px) and (max-width: 432px) {
    font-size: 35px;
  }
`;

export default Title;
