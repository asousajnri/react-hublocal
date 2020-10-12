import React from "react";

import { Column, Container, Title } from "../../components";

import { StyledTasksListing } from "./tasks-listing-styles";

const TasksListing = () => (
  <Container column>
    <Title text="Minhas tarefas" textTransform="uppercase" />

    <StyledTasksListing>
      <Column title="NOT DONE" tasksTotal="10" />
      <Column title="IN PROGRESS" tasksTotal="2" />
      <Column title="DONE" tasksTotal="0" />
    </StyledTasksListing>
  </Container>
);

export default TasksListing;
