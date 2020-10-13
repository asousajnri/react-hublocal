import React from "react";
import { connect } from "react-redux";

import api from "../../api";

import { 
  Container, 
  Form, 
  Field, 
  Title, 
  Button,
  Loading,
  LogMessage
} from "../../components";

import { StyledTaskCreate } from "./task-create-styles";

const TaskCreate = ({ user_id, user_token }) => {
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [status, setStatus] = React.useState(null);
  
  const fieldTitleRef = React.useRef(null);
  const fieldDescriptionRef = React.useRef(null);
  const fieldStatusRef = React.useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!fieldTitleRef.current.value 
      || !fieldDescriptionRef.current.value 
      || !fieldStatusRef.current.value) {
        setError("Nenhum campo poder ser vázio!");
        return;
    }

    try {
      setError(null);
      setIsFetching(true);
      setStatus(null);

      const response = await api({
        method: "POST",
        url: `users/${user_id}/tasks`,
        data: {
          name: fieldTitleRef.current.value,
          description: fieldDescriptionRef.current.value,
          status: fieldStatusRef.current.value
        },
        headers: {
          authorization: `Bearer ${user_token}`
        }
      });

      if(response.status === 200) setStatus("Tarefa registrada com sucesso");
    } catch (error) {
      setError(error);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <StyledTaskCreate>
      <Container column>
        <Title goBack text="Criar uma tarefa" textTransform="uppercase" />
        <Form submit={(e) => handleSubmit(e)}>
          <Field fieldRef={fieldTitleRef} labelText="Título" />
          <Field fieldRef={fieldDescriptionRef} as="textarea" labelText="Descrição" />
          <Field fieldRef={fieldStatusRef} as="select" labelText="Status">
            <option>NOT DONE</option>
            <option>IN PROGRESS</option>
            <option>DONE</option>
          </Field>

          {error && <LogMessage text="Não foi possível registrar a tarefa" />}
          {status && <LogMessage text={status} />}

          <Button type="submit">Registrar</Button>

          {isFetching && <Loading />}
        </Form>
      </Container>
    </StyledTaskCreate>
  )
};

export default connect(state => ({
  user_id: state.user_id,
  user_token: state.user_token
}))(TaskCreate);
