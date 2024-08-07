import styled from "styled-components";

const Title = styled.div`
  margin: 0;
  font-family: "Black Ops One", cursive;
  font-size: 40px;
  text-decoration: none;
  right: 40px;
  top: 15px;
  cursor: default;

  @media all and (width: 280px) {
    font-size: 25px;
    padding-right: 8px;
  }

  @media all and (min-width: 281px) and (max-width: 432px) {
    font-size: 35px;
    padding-right: 8px;
  }
`;

export default Title;
