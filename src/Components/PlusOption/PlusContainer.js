import styled from "styled-components";

const PlusContainer = styled.div`
  border: 5px double black;
  border-radius: 20px;
  background-color: white;
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

  form {
    width: 400px;
  }
`;

export default PlusContainer;
