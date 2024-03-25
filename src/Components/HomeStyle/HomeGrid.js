import styled from "styled-components";

const HomeGrid = styled.div`
  position: absolute;
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  top: 150px;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;

  .book {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 100%;
    height: 50px;
  }

  h1 {
    font-size: 20px;
    margin: 0;
  }

  @media all and (width: 280px) {
    top: 15%;
    grid-template-columns: 1fr;
  }

  @media all and (min-width: 281px) and (max-width: 432px) {
    border: none;

    h1 {
      font-size: 10px;
    }
  }
`;

export default HomeGrid;
