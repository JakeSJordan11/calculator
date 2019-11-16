import React from "react";
import StyledButton from "./StyledButton";

const ClearButton = props => {
  return (
    <StyledButton zone={props.zone} onClick={props.handleClear}>
      {props.value}
    </StyledButton>
  );
};

export default ClearButton;
