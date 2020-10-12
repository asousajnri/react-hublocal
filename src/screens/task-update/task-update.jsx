import React from "react";

import { Container, Form, Field, Title, Button } from "../../components";

import { StyledTaskUpdate } from "./task-update-styles";

const TaskUpdate = () => (
  <StyledTaskUpdate>
    <Container column>
      <Title goBack text="Atualizar tarefa" textTransform="uppercase" />
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
  </StyledTaskUpdate>
);

export default TaskUpdate;
