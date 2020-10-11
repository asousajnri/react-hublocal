import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Login, SignUp, Dashboard } from "./screens";

const Routes = ({ userAuthorization }) => {
  return (
    <Router>
      <Switch>
        {!userAuthorization ? (
          <>
            <Redirect to="/" />
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </>
        ) : (
          <>
            <Redirect to="/dashboard" />
            <Route path="/dashboard" component={Dashboard} />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default Routes;
