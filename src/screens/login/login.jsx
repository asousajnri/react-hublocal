import React from "react";
import { Link } from "react-router-dom";

import { Form, Field, Button } from "../../components";

import { StyledLogin, Separator } from "./login-styles";

const Login = () => {
  return (
    <StyledLogin>
      <Form>
        <Field labelText="E-mail" type="email" />
        <Field labelText="Senha" type="password" />
        <Button type="submit">Entrar</Button>
        <Separator>Ou</Separator>
        <Button as={Link} to="/registrar-se" secondary>
          Cadastre-se
        </Button>
      </Form>
    </StyledLogin>
  );
};

export default Login;
