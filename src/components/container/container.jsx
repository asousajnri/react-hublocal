import React from "react";

import { StyledContainer } from "./container-styles";

const Container = ({ children, align, column }) => {
  return (
    <StyledContainer column={column} align={align}>
      {children}
    </StyledContainer>
  );
};

export default Container;
