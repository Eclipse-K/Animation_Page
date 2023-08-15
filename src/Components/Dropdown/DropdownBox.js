import styled from "styled-components";

const DropdownBox = styled.div`
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;

  p {
    padding: 0.25rem 0;
    text-align: center;
  }

  p:hover {
    background-color: #555;
  }

  button {
    display: block;
    margin-top: 10px;
    background-color: #333;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 4px;
  }
`;

export default DropdownBox;
