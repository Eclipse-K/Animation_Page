import { Link } from "react-router-dom";
import styled from "styled-components";

const DropStyledLink = styled(Link)`
  display: block;
  padding: 10px;
  background-color: lightgray;
  color: white;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export default DropStyledLink;
