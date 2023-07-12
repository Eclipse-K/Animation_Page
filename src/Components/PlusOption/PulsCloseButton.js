import styled from "styled-components";

const PlusCloseButton = styled.button`
  background-color: black;
  border: none;
  border-radius: ${({ round }) => (round ? `9999px` : `8px`)};
  color: white;
  cursor: pointer;
  font-size: 18px;
  padding: 16px;

  &:hover,
  &active {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export default PlusCloseButton;
