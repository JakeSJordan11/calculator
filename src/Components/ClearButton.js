import React from "react";
import StyledButton from "./StyledComponents/StyledButton";

const ClearButton = props => {
  return (
    <StyledButton zone={props.zone} onClick={props.handleClear}>
      {props.value}
    </StyledButton>
  );
};

export default ClearButton;
