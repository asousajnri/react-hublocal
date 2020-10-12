import styled from "styled-components";

import { lighten } from "polished";

export const StyledColumn = styled.div`
  padding: 1rem;
  border-radius: 0.4rem;
  background: ${(props) => lighten(0.85, props.theme.colors.black)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TasksListing = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;
  width: 100%;
  margin-bottom: 2rem;
`;
