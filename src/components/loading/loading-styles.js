import styled from "styled-components";
import { rgba } from "polished";

export const StyledLoading = styled.span`
  padding: 1rem;
  text-align: center;
  border-radius: 0.4rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: ${props => rgba(props.theme.colors.black, 0.5)};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 8rem;
  }
`;