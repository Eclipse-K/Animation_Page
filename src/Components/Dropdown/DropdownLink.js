import { Link } from "react-router-dom";
import styled from "styled-components";

const DropdownLink = styled(Link)`
  display: block;
  margin-top: 10px;
  border: none;
  background-color: #d0f276;

  svg {
    width: 30px;
    height: 30px;
    background-color: #d0f276;
    color: white;
    text-decoration: none;
    transition: background-color 0.3s;
  }

  svg:hover {
    color: rgba(0, 0, 0, 0.5);
  }

  @media all and (max-width: 432px) {
    svg {
      width: 60px;
      height: 60px;
    }
  }
`;

export default DropdownLink;
