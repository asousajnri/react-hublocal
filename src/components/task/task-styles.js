import styled from "styled-components";

import { shade, lighten } from "polished";

export const StyledTask = styled.div`
  padding: 1rem;
  background: ${(props) => props.theme.colors.white};
  border-radius: 0.4rem;

  h2 {
    font-size: 2.2rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 0.1rem solid
      ${(props) => lighten(0.9, props.theme.colors.black)};
  }

  p {
    font-size: 1.4rem;
    color: ${(props) => lighten(0.3, props.theme.colors.black)};
    font-weight: 400;
    display: inline-block;
    margin-bottom: 3rem;
  }
`;

export const StyledTimeStamps = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background: ${(props) => lighten(0.9, props.theme.colors.black)};

  time {
    margin-right: 1rem;
    font-size: 1.4rem;
    display: flex;

    &:last-of-type {
      margin-right: 0;
    }
  }

  .time-icon {
    margin-right: 0.3rem;
  }
`;

export const StyledActions = styled.div`
  display: flex;
  justify-content: flex-end;

  .actions-icon {
    padding: 0.5rem;
    color: ${(props) => props.theme.colors.white};
    border-radius: 0.4rem;
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    transition: 0.3s;
    cursor: pointer;
  }

  .actions-icon--edit {
    background: ${(props) => props.theme.colors.secondary};
    margin-right: 0.8rem;

    &:hover {
      background: ${(props) => shade(0.3, props.theme.colors.secondary)};
    }
  }

  .actions-icon--delete {
    background: ${(props) => props.theme.colors.primary};

    &:hover {
      background: ${(props) => shade(0.3, props.theme.colors.primary)};
    }
  }
`;
