import styled from "styled-components";

import { breakpoints } from "../../assets/styles/devices";

export const StyledContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
  max-width: ${breakpoints.tabletLandscape};
  margin: 0 auto;

  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  align-items: ${(props) => props.align};
`;
