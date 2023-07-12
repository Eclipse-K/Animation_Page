import styled from "styled-components";
import PlusCloseButton from "./PlusOption/PulsCloseButton";

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
`;

function PlusPopup({ onClose }) {
  return (
    <Container>
      <h1>추가하기</h1>
      <PlusCloseButton onClick={onClose}>닫기</PlusCloseButton>
    </Container>
  );
}

export default PlusPopup;
