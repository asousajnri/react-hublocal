import React from "react";

import { StyledHeader } from "./header-styles";

const Column = ({ title, tasksTotal }) => (
  <StyledHeader>
    <h2>{title}</h2>
    <span>{tasksTotal}</span>
  </StyledHeader>
);

export default Column;
