import styled from "styled-components";
import PlusCloseButton from "./PlusOption/PulsCloseButton";
import PlusInput from "./PlusOption/PlusInput";
import PlusLabel from "./PlusOption/PlusLabel";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 20px;
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

  form {
    width: 400px;
    padding: 5px;
  }
`;

function PlusPopup({ onClose }) {
  return (
    <Container>
      <form>
        <h2>추가하기</h2>
        <PlusLabel htmlFor="title">제목</PlusLabel>
        <PlusInput text="제목" id="title" name="title" placeholder="제목" />
        <PlusLabel htmlFor="since">연대</PlusLabel>
        <PlusInput text="연대" id="since" name="since" placeholder="연대" />
        <PlusLabel htmlFor="year">연도</PlusLabel>
        <PlusInput text="연도" id="year" name="year" placeholder="연도" />
        <PlusLabel htmlFor="content">내용</PlusLabel>
        <PlusInput text="내용" id="content" name="content" placeholder="내용" />
        <PlusCloseButton onClick={onClose}>닫기</PlusCloseButton>
      </form>
    </Container>
  );
}

export default PlusPopup;
