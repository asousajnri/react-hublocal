import styled from "styled-components";
import { lighten } from "polished";

export const StyledLogMessage = styled.span`
  margin-bottom: 2rem;
  padding: 1rem;
  text-align: center;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  background: ${props => lighten(0.1, props.theme.colors.primary)};
  color: ${props => props.theme.colors.white};
  display: block;
  width: 100%;
`;