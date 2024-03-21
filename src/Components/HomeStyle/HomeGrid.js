import styled from "styled-components";

const HomeGrid = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  height: 700px;
  top: -10%;
  // border: 1px solid black;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);

  @media all and (width: 280px) {
    top: 2%;
    height: 450px;
    grid-template-columns: 1fr;
  }

  @media all and (min-width: 281px) and (max-width: 432px) {
    top: 0;
    border: none;
    grid-template-columns: 1fr;
  }
`;

export default HomeGrid;
