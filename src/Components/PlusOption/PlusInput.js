import styled from "styled-components";

const PlusInput = styled.input`
  border: 1px solid black;
  border-bottom: 2px solid ${({ error }) => (error ? `#f44336` : `#eeeeee`)};
  display: flex;
  font-size: 16px;
  outline: none;
  padding: 4px 0;
  width: 100%;
  margin-bottom: 8px;
  text-transform: lowercase;

  ${({ error }) =>
    !error &&
    `
    &:focus {
      border-bottom: 2px solid #7760b4;
    }
    `}

  &::placeholder {
    color: #c4c5cd;
  }
`;

export default PlusInput;
