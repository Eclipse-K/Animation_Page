import styled from "styled-components";
import PlusInput from "./PlusInput";

const PlusContainer = styled.div`
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
  }

  #title {
    height: 30px;
  }

  #since {
    height: 30px;
  }

  #year {
    height: 30px;
  }

  #content {
    height: 100px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`;

export default PlusContainer;
