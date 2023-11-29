import DropdownContainer from "./Dropdown/DropdownContainer.js";
import { AiOutlineClose } from "react-icons/ai";
import DropdownLink from "./Dropdown/DropdownLink.js";
import DropStyledLink from "./Dropdown/DropStyledLink.js";

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
    </DropdownContainer>
  );
}

export default DropdownMenu;
