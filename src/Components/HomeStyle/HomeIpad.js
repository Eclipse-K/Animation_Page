import styled from "styled-components";

const ipadStyle = styled.div`
  position: relative;
  width: 90%;
  height: 600px;
  top: -10%;
  background-color: #000;
  border-radius: 20px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    background: linear-gradient(rgb(255, 255, 255), transparent);
    border-radius: 10px;
    z-index: 1;
  }

  @media all and (min-width: 281px) and (max-width: 432px) {
    width: 90%;
    height: 700px;
    top: 0;

    &::before {
      background: linear-gradient(white, whitesmoke);
    }
  }
`;

export default ipadStyle;
