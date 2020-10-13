import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Header } from "./components";

import { Login, SignUp, TasksListing, TaskCreate, TaskUpdate } from "./screens";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/global";
import themeDefault from "./assets/styles/themes/default";

const Routes = ({ token }) => {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      <Router>
        {token && <Header />}

        <Switch>
          <Route exact path="/">
            {!token ? <Login /> : <Redirect to="/minhas-tarefas" />}
          </Route>
          <Route path="/registrar-se">
            {!token ? (
              <SignUp />
            ) : (
              <Redirect to="/minhas-tarefas" />
            )}
          </Route>

          {token ? (
            <>
              <Route path="/minhas-tarefas" component={TasksListing} />
              <Route path="/criar-tarefa" component={TaskCreate} />
              <Route path="/atualizar-tarefa/:user_id/tasks/:task_id" component={TaskUpdate} />
            </>
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default Routes;
