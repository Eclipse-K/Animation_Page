import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const DropdownContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: white;
  border: 10px double black;
  z-index: 99;
  animation: ${fadeIn} 0.7s ease;

  @media all and (max-width: 432px) {
    width: 100%;
  }
`;

export default DropdownContainer;
