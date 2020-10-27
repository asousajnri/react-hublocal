import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as SessionActions } from "./store/ducks/session";

import Routes from "./routes";

const App = ({ token }) => {
  return <Routes token={token} />;
};

const mapStateToProps = state => ({
  session: state.session
})

const mapDispatchToProps = dispatch => bindActionCreators(SessionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
