import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DropdownContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: #d0f276;
  z-index: 3;
  animation: ${fadeIn} 0.7s ease;

  @media all and (max-width: 432px) {
    width: 100%;
  }
`;

export default DropdownContainer;
