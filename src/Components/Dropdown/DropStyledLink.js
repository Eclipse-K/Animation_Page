import { Link } from "react-router-dom";
import styled from "styled-components";

const DropStyledLink = styled(Link)`
  display: block;
  padding: 10px;
  background-color: white;
  color: #1f461f;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s;
  border: 3px solid black;
  margin-left: 1px;
  margin-right: 1px;
  font-family: ${(props) => (props.isfirst ? "Dongle" : "Hi Melody")},
    sans-serif;
  font-size: 25px;

  &:hover {
    background-color: black;
    color: white;
  }

  @media all and (max-width: 432px) {
    font-size: 30px;
    text-align: left;
    padding-left: 5rem;
  }
`;

export default DropStyledLink;
