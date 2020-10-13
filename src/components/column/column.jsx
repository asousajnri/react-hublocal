import React from "react";
import { Link } from "react-router-dom";

import Task from "../task";
import Button from "../button";

import Header from "./header";

import { StyledColumn, TasksListing } from "./column-styles";

const Column = ({ 
  title, 
  tasksTotal, 
  tasks, 
  updateTasks,
  userToken 
}) => (
  <StyledColumn>
    <Header title={title} tasksTotal={tasksTotal} />
    <TasksListing>
      {tasks.map(task => (
        <Task
          key={task.id}
          as="li"
          idTask={task.id}
          userId={task.user_id}
          userToken={userToken}
          title={task.name}
          description={task.description}
          updateTasks={updateTasks}
          timestamps={{ 
            created_at: task.createdAt.split("T")[0], 
            updated_at: task.updatedAt.split("T")[0] 
          }}
        />
      ))}
      
    </TasksListing>

    <Button as={Link} to="/criar-tarefa">
      Criar tarefa
    </Button>
  </StyledColumn>
);

export default Column;
