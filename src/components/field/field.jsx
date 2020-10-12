import React from "react";

import { StyledField, StyledInput } from "./field-styles";

const Field = ({
  as,
  type,
  labelText,
  messageValidate,
  isValidate,
  children,
}) => {
  return (
    <StyledField>
      {labelText && <label>{labelText}</label>}
      {as !== "select" ? (
        <StyledInput as={as} type={type || "text"} />
      ) : (
        <StyledInput as={as}>{children}</StyledInput>
      )}
      {isValidate && <span>{messageValidate}</span>}
    </StyledField>
  );
};

export default Field;
