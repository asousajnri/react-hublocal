import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as SessionActions } from "../../store/ducks/session";

import Container from "../container";

import { StyledHeader, Profile } from "./header-styles";


const Header = ({ logout, user_name }) => {
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
            <span className="exit" onClick={() => logout()}>Sair</span>
          </div>
        </Profile>
      </Container>
    </StyledHeader>
  );
};

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => bindActionCreators(SessionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
