import React from "react";

import { StyledButton } from "./button-styles";

const Button = ({ onClick, secondary, to, type, children, as }) => {
  return (
    <StyledButton onClick={onClick} as={as} to={to} secondary={secondary} type={type || "button"}>
      {children}
    </StyledButton>
  );
};

export default Button;
