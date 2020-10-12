import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 2rem 0 3rem;
  width: 100%;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .profile-image {
    border-radius: 0.4rem;
    width: 10rem;
    height: 10rem;
    margin-right: 2rem;
  }

  .profile-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .profile-name {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .exit {
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
