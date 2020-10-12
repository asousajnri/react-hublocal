import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1rem;
  width: 100%;

  h2 {
    font-size: 1.6rem;
    font-weight: 600;
  }

  span {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    padding: 0.2rem 0.5rem;
    border-radius: 0.4rem;
  }
`;
