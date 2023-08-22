import styled from "styled-components";

const DropdownButton = styled.button`
  display: block;
  margin-top: 10px;
  border: none;
  background-color: lightgray;

  svg {
    width: 30px;
    height: 30px;
    background-color: lightgray;
    color: white;
    text-decoration: none;
    transition: background-color 0.3s;
  }

  svg:hover {
    color: rgba(0, 0, 0, 0.5);
  }
`;

export default DropdownButton;
