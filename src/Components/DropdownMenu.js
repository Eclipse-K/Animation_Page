import DropdownContainer from "./Dropdown/DropdownContainer.js";
import DropdownBox from "./Dropdown/DropdownBox.js";
import { AiOutlineClose } from "react-icons/ai";
import DropdownButton from "./Dropdown/DropdownButton.js";
import DropStyledLink from "./Dropdown/DropStyledLink.js";
import { Link } from "react-router-dom";

function DropdownMenu({ closeDropdown }) {
  const dropButtonClick = () => {
    closeDropdown();
  };

  return (
    <DropdownContainer>
      <DropdownBox>
        <DropdownButton onClick={dropButtonClick}>
          <Link to="/">
            <AiOutlineClose />
          </Link>
        </DropdownButton>
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
      </DropdownBox>
    </DropdownContainer>
  );
}

export default DropdownMenu;
