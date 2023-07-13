import styled from "styled-components";
import PlusCloseButton from "./PlusOption/PulsCloseButton";
import PlusInput from "./PlusOption/PlusInput";

const Container = styled.div`
  border: 1px solid black;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  ${PlusInput} {
    margin-bottom: 16px;
  }
`;

function PlusPopup({ onClose }) {
  return (
    <Container>
      <form>
        <h1>추가하기</h1>
        <PlusInput text="제목" id="title" name="title" placeholder="제목" />
        <PlusInput text="연도" id="year" name="year" placeholder="연도" />
        <PlusCloseButton onClick={onClose}>닫기</PlusCloseButton>
      </form>
    </Container>
  );
}

export default PlusPopup;
