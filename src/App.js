import React from "react";
import { connect } from "react-redux";

import Routes from "./routes";

const App = ({ userAuthorization }) => {
  return <Routes userAuthorization={userAuthorization} />;
};

export default connect((state) => ({
  userAuthorization: state.userAuthorization,
}))(App);
