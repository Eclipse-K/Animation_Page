import styled from "styled-components";

const DropdownContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;

  @media all and (max-width: 432px) {
    width: 100%;
  }
`;

export default DropdownContainer;
