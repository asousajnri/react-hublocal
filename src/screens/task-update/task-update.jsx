import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

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

import { StyledTaskUpdate } from "./task-update-styles";

const TaskUpdate = ({ user_token }) => {
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [status, setStatus] = React.useState(null);

  const fieldTitleRef = React.useRef(null);
  const fieldDescriptionRef = React.useRef(null);
  const fieldStatusRef = React.useRef(null);

  const { user_id, task_id } = useParams();

  React.useEffect(() => {
    const loadTask = async () => {
      try {
        const response = await api({
          method: "GET",
          url: `tasks/${task_id}`,
          headers: {
            authorization: `Bearer ${user_token}`
          }
        });
  
        const { data } = response;
  
        if(data) {
          fieldTitleRef.current.value = data.name;
          fieldDescriptionRef.current.value = data.description;
          fieldStatusRef.current.value = data.status;
        }
      } catch(err) {
        console.log(err);
      }
    };

    loadTask();
  }, [task_id, user_token])

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setIsFetching(true);
      setError(null);
      setStatus(null);

      const response = await api({
        method: "PUT",
        data: {
          name: fieldTitleRef.current.value,
          description: fieldDescriptionRef.current.value,
          status: fieldStatusRef.current.value
        },
        url: `users/${user_id}/tasks/${task_id}`,
        headers: {
          authorization: `Bearer ${user_token}`
        }
      })

      if(response.status === 200) setStatus(200);
    } catch(error) {
      setError("Não foi possível atualizar a tarefa")
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <StyledTaskUpdate>
      <Container column>
        <Title goBack text="Atualizar tarefa" textTransform="uppercase" />
        <Form submit={(e)=> handleUpdate(e) }>
          <Field fieldRef={fieldTitleRef} labelText="Título" />
          <Field fieldRef={fieldDescriptionRef} as="textarea" labelText="Descrição" />
          <Field fieldRef={fieldStatusRef} as="select" labelText="Status">
            <option>NOT DONE</option>
            <option>IN PROGRESS</option>
            <option>DONE</option>
          </Field>

          {error && <LogMessage text="Não foi possível atualizar a tarefa" />}
          {status === 200 && <LogMessage text="Tarefa atualizada com sucesso!" />}

          <Button type="submit">Atualizar</Button>

          {isFetching && <Loading />}
        </Form>
      </Container>
    </StyledTaskUpdate>
  )
};

export default connect(state => ({
  user_token: state.user_token
}))(TaskUpdate);
