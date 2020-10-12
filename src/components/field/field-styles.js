import styled from "styled-components";

import { lighten } from "polished";

export const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  label {
    font-size: 1.4rem;
    font-weight: 500;
    display: block;
    margin-bottom: 1rem;
  }

  textarea {
    resize: none;
    height: 15rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;

export const StyledInput = styled.input`
  height: 4rem;
  border-radius: 0.4rem;
  padding: 0 1.5rem;
  border: 2px solid ${(props) => lighten(0.55, props.theme.colors.black)};
  width: 100%;
`;
