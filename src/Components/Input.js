import React from "react";
import StyledInput from "./StyledComponents/StyledInput";

const Button = props => {
  return <StyledInput zone={props.zone}>{props.value}</StyledInput>;
};

export default Button;
