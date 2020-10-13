import React from "react";

import { StyledField, StyledInput } from "./field-styles";

const Field = ({
  as,
  type,
  labelText,
  messageValidate,
  isValidate,
  children,
  fieldRef
}) => {
  return (
    <StyledField>
      {labelText && <label>{labelText}</label>}
      {as !== "select" ? (
        <StyledInput ref={fieldRef} as={as} type={type || "text"} />
      ) : (
        <StyledInput ref={fieldRef} as={as}>{children}</StyledInput>
      )}
      {isValidate && <span>{messageValidate}</span>}
    </StyledField>
  );
};

export default Field;
