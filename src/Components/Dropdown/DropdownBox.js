import styled from "styled-components";

const DropdownBox = styled.div`
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: #d0f276;

  @media all and (max-width: 414px) {
    width: 100px;

    p {
      margin: 0;
    }
  }
`;

export default DropdownBox;
