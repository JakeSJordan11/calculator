import styled from "styled-components";

export const Grid = styled.div`
  background-color: #005f5f;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 0.1fr repeat(4, 1fr) 0.1fr;
  grid-template-rows: 0.1fr repeat(6, 1fr) 0.1fr;
  grid-template-areas:
    ".  .      .      .      .     ."
    ".  input  input  input  input ."
    ".  btnC   btnD   btnM   btnS  ."
    ".  btn7   btn8   btn9   btnA  ."
    ".  btn4   btn5   btn6   btnA  ."
    ".  btn1   btn2   btn3   btnE  ."
    ".  btn0   btn0   btnP   btnE  ."
    ".  .      .      .      .     .";
`;

export default Grid;
