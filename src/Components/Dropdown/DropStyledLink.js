import { Link } from "react-router-dom";
import styled from "styled-components";

const DropStyledLink = styled(Link)`
  display: block;
  padding: 10px;
  background-color: #d0f276;
  color: #1f461f;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media all and (max-width: 432px) {
    font-size: 30px;
    text-align: left;
    padding-left: 5rem;
  }
`;

export default DropStyledLink;
