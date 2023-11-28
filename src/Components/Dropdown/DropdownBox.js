import styled from "styled-components";

const DropdownBox = styled.div`
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: #d0f276;
  z-index: 3;

  @media all and (max-width: 432px) {
    width: 100%;

    p {
      margin: 0;
    }
  }
`;

export default DropdownBox;
