import styled from "styled-components";
import { BsCaretUpSquareFill } from "react-icons/bs";

const ScrollStyle = styled(BsCaretUpSquareFill)`
  justify-content: flex-end;
  position: fixed;
  right: 25px;
  width: 30px;
  height: 30px;
  bottom: 140px;
  color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  cursor: pointer;
  z-index: 4;

  &:hover {
    color: black;
  }

  @media all and (max-width: 432px) {
    &:hover {
      background-color: none;
    }
  }
`;

export default ScrollStyle;
