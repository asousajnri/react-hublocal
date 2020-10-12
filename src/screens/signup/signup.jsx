import React from "react";
import { Link } from "react-router-dom";

import { Form, Field, Button } from "../../components";

import { StyledSignUp, Separator } from "./signup-styles";

const SignUp = () => {
  return (
    <StyledSignUp>
      <Form>
        <Field labelText="Nome" />
        <Field labelText="E-mail" type="email" />
        <Field labelText="Senha" type="password" />
        <Button type="submit">Cadastrar</Button>
        <Separator>Ou</Separator>
        <Button as={Link} to="/" secondary>
          Entrar
        </Button>
      </Form>
    </StyledSignUp>
  );
};

export default SignUp;
