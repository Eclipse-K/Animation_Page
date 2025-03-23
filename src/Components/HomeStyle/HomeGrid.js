import styled from "styled-components";

const HomeGrid = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 0 10px 100px 10px;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  width: 100%;

  .book {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid black;
    border-radius: 20px;
    width: 100%;
    height: 150px;
    padding: 0 10px 0 10px;
  }

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Dongle", sans-serif;
    font-size: 40px;
    margin: 0;
  }

  @media all and (width: 280px) {
    top: 100px;
    grid-template-columns: 1fr;
  }

  @media all and (min-width: 281px) and (max-width: 432px) {
    grid-template-columns: repeat(3, 1fr);
    border: none;
    top: 100px;
    width: 100%;

    h1 {
      font-size: 25px;
    }
  }
`;

export default HomeGrid;
