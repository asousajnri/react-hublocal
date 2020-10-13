import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as ReduxActions from "../../store/actions";

import api from "../../api";

import { Form, Field, Button, Loading, LogMessage } from "../../components";

import { StyledLogin, Separator } from "./login-styles";

const Login = ({ dispatch }) => {
  const [isLogin, setIsLogin] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fieldEmailRef = React.useRef(null);
  const fieldPasswordRef = React.useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!fieldEmailRef.current.value || !fieldPasswordRef.current.value) {
      setError("Preencha todos os campos!")
      return;
    }

    try {
      setIsLogin(true);
      setError(null);

      const response = await api({
        method: "POST",
        url: "sessions",
        data: {
          email: fieldEmailRef.current.value,
          password: fieldPasswordRef.current.value
        }
      });
    
      const { data } = await response;
    
      if(data) {
        const { user: { id: user_id, name: user_name}, token: user_token } = data;
        dispatch(ReduxActions.startSession({ user_id, user_name, user_token }))
      }
    } catch (error) {
      setError("usuário não encontrado!");
    } finally {
      setIsLogin(false);
    }
  };

  return (
    <StyledLogin>
      <Form submit={(e) => handleSubmit(e)}>
        <Field fieldRef={fieldEmailRef} labelText="E-mail" type="email" />
        <Field fieldRef={fieldPasswordRef} labelText="Senha" type="password" />

        {error && <LogMessage text={error}/>}

        <Button type="submit">Entrar</Button>
        <Separator>Ou</Separator>
        <Button as={Link} to="/registrar-se" secondary>
          Cadastre-se
        </Button>

        {isLogin && <Loading />}
      </Form>
    </StyledLogin>
  );
};

export default connect(state => ({ user_name: state.user_name }))(Login);
