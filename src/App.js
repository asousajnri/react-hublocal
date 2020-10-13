import React from "react";
import { connect } from "react-redux";

import Routes from "./routes";

const App = ({ token }) => {
  return <Routes token={token} />;
};

export default connect((state) => ({
  token: state.user_token,
}))(App);
