import styled, { css } from "styled-components";
import { lighten } from "polished";

import { devices } from "../../assets/styles/devices";

export const StyledTitle = styled.h2`
  margin-bottom: 2rem;
  text-transform: ${(props) => props.textTransform};
  display: flex;

  ${(props) =>
    props.goBack &&
    css`
      flex-direction: column;

      @media ${devices.tablet} {
        flex-direction: row;
        align-items: center;
      }
    `}
`;

export const GoBack = styled.span`
  background: ${(props) => lighten(0.7, props.theme.colors.black)};
  display: flex;
  align-items: center;
  max-width: max-content;
  padding: 1rem 1.5rem;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: 0.3s;

  @media ${devices.tablet} {
    margin-bottom: 0;
    margin-right: 1.5rem;
  }

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
`;
