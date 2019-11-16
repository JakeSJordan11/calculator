import styled from "styled-components";

const Grid = styled.div`
  background: linear-gradient(#6f6861, #5b5650);
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    "  input  input  input  input "
    "  btnC   btnD   btnM   btnS  "
    "  btn7   btn8   btn9   btnA  "
    "  btn4   btn5   btn6   btnA  "
    "  btn1   btn2   btn3   btnE  "
    "  btn0   btn0   btnP   btnE  ";
`;

export default Grid;
