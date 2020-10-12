import React from "react";

import Container from "../container";

import { StyledHeader, Profile } from "./header-styles";

const Header = () => {
  return (
    <StyledHeader>
      <Container align="flex-start">
        <Profile>
          <img
            className="profile-image"
            src="https://picsum.photos/id/300/100/100"
            alt=""
          />
          <div class="profile-content">
            <h2 className="profile-name">Antônio</h2>
            <span className="exit">Sair</span>
          </div>
        </Profile>
      </Container>
    </StyledHeader>
  );
};

export default Header;
