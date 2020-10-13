import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import api from "../../api";

import { Form, Field, Button, Loading, LogMessage } from "../../components";

import { StyledSignUp, Separator } from "./signup-styles";

const SignUp = ({ user_id, user_token }) => {
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [status, setStatus] = React.useState(null);

  const fieldRefName = React.useRef(null);
  const fieldRefEmail = React.useRef(null);
  const fieldRefPassword = React.useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setIsFetching(true);
    setStatus(null);

    try {
      if(!fieldRefName.current.value || !fieldRefEmail.current.value || !fieldRefPassword.current.value) {
        setError("Nenhum campo pode estar vázio!")
        return;
      }

      const response = await api.post('signup', {
        name: fieldRefName.current.value,
        email: fieldRefEmail.current.value,
        password: fieldRefPassword.current.value
      });

      const { data } = await response;

      if(data.message) {
        setStatus(data.message);
      } else {
        setStatus("Usuário cadastrado com sucesso!");
      };
    } catch (error) {
      setError('Não foi possível cadastrar o usuário');
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <StyledSignUp>
      <Form submit={(e) => handleSubmit(e)}>
        <Field fieldRef={fieldRefName} labelText="Nome" />
        <Field fieldRef={fieldRefEmail} labelText="E-mail" type="email" />
        <Field fieldRef={fieldRefPassword} labelText="Senha" type="password" />

        {error && <LogMessage text={error}/>}
        {status && <LogMessage text={status}/>}

        <Button type="submit">Cadastrar</Button>
        <Separator>Ou</Separator>
        <Button as={Link} to="/" secondary>
          Entrar
        </Button>

        {isFetching && <Loading />}
      </Form>
    </StyledSignUp>
  );
};

export default connect(state => ({
  user_id: state.user_id,
  user_token: state.user_token
}))(SignUp);
