import styled from "styled-components";

import { devices } from "../../assets/styles/devices";

export const StyledTasksListing = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;
  margin-bottom: 6rem;

  @media ${devices.tabletLandscape} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
  }
`;
