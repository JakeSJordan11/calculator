import styled from "styled-components";

const StyledButton = styled.button`
  grid-area: ${props => props.zone};
  background-color: #1f2f3f;
  margin: 0.1em;
  border: none;
  border-radius: 5px;
  font-size: xx-large;
  color: #cccccc;
`;

export default StyledButton;
