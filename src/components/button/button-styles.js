import styled from "styled-components";

import { shade } from "polished";

export const StyledButton = styled.button`
  height: 4rem;
  width: 100%;
  background: ${(props) =>
    !props.secondary
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  border: none;
  border-radius: 0.4rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: 0.3s;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background: ${(props) =>
      !props.secondary
        ? shade(0.2, props.theme.colors.primary)
        : shade(0.2, props.theme.colors.secondary)};
  }
`;
