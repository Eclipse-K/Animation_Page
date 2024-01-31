import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  height: 1500px;
  align-items: flex-end;

  @media all and (width: 280px) {
    height: 653px;
  }

  @media all and (min-width: 281px) and (max-width: 432px) {
    height: 950px;
  }

  @media all and (min-width: 768px) and (max-width; 1024px) {
    height: 1024px;
  }
`;

export default HomeContainer;
