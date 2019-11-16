import React from "react";
import StyledButton from "./StyledButton";

const Button = props => {
  return (
    <StyledButton
      zone={props.zone}
      onClick={() => props.handleClick(props.value)}
    >
      {props.value}
    </StyledButton>
  );
};

export default Button;
