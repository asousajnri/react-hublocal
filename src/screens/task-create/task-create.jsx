import React from "react";

import { Container, Form, Field, Title, Button } from "../../components";

import { StyledTaskCreate } from "./task-create-styles";

const TaskCreate = () => (
  <StyledTaskCreate>
    <Container column>
      <Title goBack text="Criar uma tarefa" textTransform="uppercase" />
      <Form>
        <Field labelText="Título" />
        <Field as="textarea" labelText="Descrição" />
        <Field as="select" labelText="Descrição">
          <option>NOT DONE</option>
          <option>IN PROGRESS</option>
          <option>DONE</option>
        </Field>
        <Button type="submit">Registrar</Button>
      </Form>
    </Container>
  </StyledTaskCreate>
);

export default TaskCreate;
