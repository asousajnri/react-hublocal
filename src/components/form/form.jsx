import React from "react";

import { StyledForm } from "./form-styles";

const Form = ({ submit, children }) => {
  return <StyledForm onSubmit={submit}>{children}</StyledForm>;
};

export default Form;
