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
          <AiOutlineClose />
        </DropdownButton>
        <p>
          <Link to="/List">List</Link>
        </p>
        <p>List item 2</p>
        <p>List item 3</p>
      </DropdownBox>
    </DropdownContainer>
  );
}

export default DropdownMenu;
