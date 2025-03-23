import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media all and (width: 280px) {
    width: 280px;
  }

  @media all and (min-width: 281px) and (max-width: 432px) {
  }

  @media all and (min-width: 768px) and (max-width; 1024px) {
  }
`;

export default HomeContainer;
