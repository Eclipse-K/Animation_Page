import DropdownContainer from "./Dropdown/DropdownContainer.js";
import DropdownBox from "./Dropdown/DropdownBox.js";

function DropdownMenu({ closeDropdown }) {
  const dropButtonClick = () => {
    closeDropdown();
  };

  return (
    <DropdownContainer>
      <DropdownBox>
        <button onClick={dropButtonClick}>Close</button>
        <p>List item 1</p>
        <p>List item 2</p>
        <p>List item 3</p>
      </DropdownBox>
    </DropdownContainer>
  );
}

export default DropdownMenu;
