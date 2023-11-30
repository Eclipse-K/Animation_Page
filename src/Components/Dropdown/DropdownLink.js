import { Link } from "react-router-dom";
import styled from "styled-components";

const DropdownLink = styled(Link)`
  display: block;
  margin-top: 10px;
  border: none;
  background-color: white;

  svg {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
    margin-left: 10px;
    background-color: white;
    border: 10px double black;
    color: black;
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
      margin-left: 5px;
    }
  }
`;

export default DropdownLink;
