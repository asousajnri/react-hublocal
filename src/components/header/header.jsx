import React from "react";
import { connect } from "react-redux";

import { logout } from "../../store/actions";

import Container from "../container";

import { StyledHeader, Profile } from "./header-styles";


const Header = ({ dispatch, user_name }) => {
  return (
    <StyledHeader>
      <Container align="flex-start">
        <Profile>
          <img
            className="profile-image"
            src="https://picsum.photos/id/300/100/100"
            alt=""
          />
          <div className="profile-content">
            <h2 className="profile-name">{user_name}</h2>
            <span className="exit" onClick={() => dispatch(logout())}>Sair</span>
          </div>
        </Profile>
      </Container>
    </StyledHeader>
  );
};

export default connect(state => ({
  user_name: state.user_name,
}))(Header);
