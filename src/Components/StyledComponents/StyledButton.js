import styled from "styled-components";

const StyledButton = styled.button`
  grid-area: ${props => props.zone};
  background-color: #134751;
  border: solid #0b2b31;
  margin: 0.1em;
  border-radius: 5px;
  font-size: xx-large;
  color: #cccccc;
  outline: none;
  :hover {
    background: transparent;
    color: #202020;
  }
  :after {
    border: none;
  }
`;

export default StyledButton;
