import styled from "styled-components";
import { Link } from "react-router-dom";

const SnsLink = styled(Link)`
  color: black;
  width: 30px;
  height: 30px;

  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }

  svg {
    width: 24px;
    height: 24px;
  }

  @media all and (min-width: 281px) and (max-width: 432px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

export default SnsLink;
