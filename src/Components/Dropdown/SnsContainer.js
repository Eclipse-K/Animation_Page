import styled from "styled-components";

const SnsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  svg {
    width: 32px;
    height: 32px;
    color: black;
    margin-left: 4px;
  }

  @media all and (max-width: 432px) {
    svg {
      width: 48px;
      height: 48px;
    }
  }
`;

export default SnsContainer;
