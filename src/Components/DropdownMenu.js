import DropdownContainer from "./Dropdown/DropdownContainer.js";
import { AiFillFacebook, AiOutlineClose } from "react-icons/ai";
import {
  FaSquareInstagram,
  FaXTwitter,
  FaSquareThreads,
} from "react-icons/fa6";
import DropdownLink, { Closebutton } from "./Dropdown/DropdownLink.js";
import DropStyledLink from "./Dropdown/DropStyledLink.js";
import SnsContainer from "./Dropdown/SnsContainer.js";
import Xbutton from "./Dropdown/X-button.js";

function DropdownMenu({ closeDropdown }) {
  const dropButtonClick = () => {
    closeDropdown();
  };
  const xMobile = window.innerWidth <= 1024;

  const outsideUrl = (url) => {
    window.open(url, "_blank");
  };

  return (
    <DropdownContainer>
      <DropdownLink to="/" onClick={dropButtonClick}>
        {xMobile ? (
          <Closebutton>
            <AiOutlineClose />
          </Closebutton>
        ) : (
          <Xbutton>
            <span className="hover-span1"></span>
            <span className="hover-span2"></span>
          </Xbutton>
        )}
        <SnsContainer>
          <FaSquareInstagram
            onClick={() => outsideUrl("https://www.instagram.com/")}
          />

          <AiFillFacebook
            onClick={() => outsideUrl("https://www.facebook.com/")}
          />

          <FaXTwitter onClick={() => outsideUrl("https://twitter.com/")} />

          <FaSquareThreads
            onClick={() => outsideUrl("https://www.threads.net/")}
          />
        </SnsContainer>
      </DropdownLink>
      <p>
        <DropStyledLink
          to="/SearchBar"
          onClick={dropButtonClick}
          isfirst="true"
        >
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
      <p>
        <DropStyledLink to="/Since2010" onClick={dropButtonClick}>
          Since 2010
        </DropStyledLink>
      </p>
      <p>
        <DropStyledLink to="/Since2020" onClick={dropButtonClick}>
          Since 2020
        </DropStyledLink>
      </p>
    </DropdownContainer>
  );
}

export default DropdownMenu;
