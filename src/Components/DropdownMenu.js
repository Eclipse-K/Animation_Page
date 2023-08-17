import DropdownContainer from "./Dropdown/DropdownContainer.js";
import DropdownBox from "./Dropdown/DropdownBox.js";
import { AiOutlineClose } from "react-icons/ai";
import DropdownButton from "./Dropdown/DropdownButton.js";
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
          <Link to="/List">All</Link>
        </p>
        <p>
          <Link to="/Since1970">Since 1970</Link>
        </p>
        <p>
          <Link to="/Since1980">Since 1980</Link>
        </p>
        <p>
          <Link to="/Since1990">Since 1990</Link>
        </p>
        <p>
          <Link to="/Since2000">Since 2000</Link>
        </p>
      </DropdownBox>
    </DropdownContainer>
  );
}

export default DropdownMenu;
