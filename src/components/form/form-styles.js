import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0.4rem;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
