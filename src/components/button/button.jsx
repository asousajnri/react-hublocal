import React from "react";

import { StyledButton } from "./button-styles";

const Button = ({ secondary, to, type, children, as }) => {
  return (
    <StyledButton as={as} to={to} secondary={secondary} type={type || "button"}>
      {children}
    </StyledButton>
  );
};

export default Button;
