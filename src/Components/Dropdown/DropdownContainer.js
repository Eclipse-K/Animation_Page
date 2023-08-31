import styled from "styled-components";

const DropdownContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;

  @media all and (max-width: 400px) {
    width: 100px;
  }
`;

export default DropdownContainer;
