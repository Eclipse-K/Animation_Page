import { Link } from "react-router-dom";
import styled from "styled-components";

const DropdownLink = styled(Link)`
  display: flex;
  padding: 8px 1px;
  border: none;
  background-color: white;
`;

export const Closebutton = styled.div`
  svg {
    width: 50px;
    height: 50px;
    color: black;
  }
`;

export default DropdownLink;
