import styled from "styled-components";

export const StyledLogin = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Separator = styled.span`
  margin: 1rem 0;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.grey};
`;
