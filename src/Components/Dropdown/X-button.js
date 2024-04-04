import styled from "styled-components";

const Xbutton = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  margin-left: 10px;
  background-color: white;
  border: 10px double black;
  color: black;
  text-decoration: none;
  transition: background-color 0.3s;

  .hover-span1,
  .hover-span2 {
    display: block;
    position: relative;
    top: -1px;
    left: -6px;
    width: 30px;
    height: 15px;
    background-color: black;
    cursor: pointer;
  }

  &:hover .hover-span1 {
    top: 3px;
    border-radius: 20px;
    transition: height 0.5s ease, transform 1s ease;
    transform: rotate(45deg);
    height: 5px;
  }

  &:hover .hover-span2 {
    border-radius: 20px;
    transition: height 0.5s ease, transform 1s ease;
    transform: rotate(-45deg);
    height: 5px;
  }
`;

export default Xbutton;
