import DropdownContainer from "./Dropdown/DropdownContainer.js";
import { AiOutlineClose, AiFillFacebook } from "react-icons/ai";
import {
  FaSquareInstagram,
  FaXTwitter,
  FaSquareThreads,
} from "react-icons/fa6";
import DropdownLink from "./Dropdown/DropdownLink.js";
import DropStyledLink from "./Dropdown/DropStyledLink.js";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SnsContainer = styled.div`
  position: relative;
  top: 5%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SnsLink = styled(Link)`
  color: black;

  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;

function DropdownMenu({ closeDropdown }) {
  const dropButtonClick = () => {
    closeDropdown();
  };

  return (
    <DropdownContainer>
      <DropdownLink to="/" onClick={dropButtonClick}>
        <AiOutlineClose />
      </DropdownLink>
      <p>
        <DropStyledLink to="/SearchBar" onClick={dropButtonClick}>
          통합검색
        </DropStyledLink>
      </p>
      <p>
        <DropStyledLink to="/" onClick={dropButtonClick}>
          Home
        </DropStyledLink>
      </p>
      <p>
        <DropStyledLink to="/Since1970" onClick={dropButtonClick}>
          Since 1970
        </DropStyledLink>
      </p>
      <p>
        <DropStyledLink to="/Since1980" onClick={dropButtonClick}>
          Since 1980
        </DropStyledLink>
      </p>
      <p>
        <DropStyledLink to="/Since1990" onClick={dropButtonClick}>
          Since 1990
        </DropStyledLink>
      </p>
      <p>
        <DropStyledLink to="/Since2000" onClick={dropButtonClick}>
          Since 2000
        </DropStyledLink>
      </p>
      <SnsContainer>
        <SnsLink to="https://www.instagram.com/" target="_blank">
          <FaSquareInstagram />
        </SnsLink>
        <SnsLink to="https://www.facebook.com/" target="_blank">
          <AiFillFacebook />
        </SnsLink>
        <SnsLink to="https://twitter.com/" target="_blank">
          <FaXTwitter />
        </SnsLink>
        <SnsLink to="https://www.threads.net/" target="_blank">
          <FaSquareThreads />
        </SnsLink>
      </SnsContainer>
    </DropdownContainer>
  );
}

export default DropdownMenu;
