import React from "react";
import { Link } from "react-router-dom";

import Task from "../task";
import Button from "../button";

import Header from "./header";

import { StyledColumn, TasksListing } from "./column-styles";

const Column = ({ title, tasksTotal }) => (
  <StyledColumn>
    <Header title={title} tasksTotal={tasksTotal} />

    <TasksListing>
      <Task
        as="li"
        title="Task 1"
        description="asalkdnsdnsaklfnsklfnsk"
        timestamps={{ created_at: "10-10-2020", updated_at: "10-10-2021" }}
      />

      <Task
        as="li"
        title="Task 1"
        description="asalkdnsdnsaklfnsklfnsk"
        timestamps={{ created_at: "10-10-2020", updated_at: "10-10-2021" }}
      />
    </TasksListing>

    <Button as={Link} to="/criar-tarefa">
      Criar tarefa
    </Button>
  </StyledColumn>
);

export default Column;
