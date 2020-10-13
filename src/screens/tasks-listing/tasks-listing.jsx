import React from "react";
import { connect } from "react-redux";

import { Column, Container, Title } from "../../components";

import api from "../../api";

import { StyledTasksListing } from "./tasks-listing-styles";

const TasksListing = ({ user_token, user_id }) => {
  const [isFetching, setIsFetching] = React.useState(true);

  const [notDoneTasks, setNotDoneTasks] = React.useState([]);
  const [inProgressTasks, setInProgressTasks] = React.useState([]);
  const [doneTasks, setDoneTasks] = React.useState([]);

  React.useEffect(() => {
    const loadTasks = async () => {
      try {
        setIsFetching(true);
  
        const response = await api({
          method: "GET",
          url: `users/${user_id}/tasks`,
          headers: {
            Authorization:`Bearer ${user_token}`,
          }
        });
      
        const { data } = await response;
  
        if(data) {
          setNotDoneTasks(data.filter(task => task.status === 'NOT DONE'));
          setInProgressTasks(data.filter(task => task.status === 'IN PROGRESS'));
          setDoneTasks(data.filter(task => task.status === 'DONE'));
        }
      
      } catch (error) {
        console.log(error);
      } finally {
        setIsFetching(false);
      }
    };
    
    loadTasks();
  }, [setIsFetching, user_id, user_token]);

  return (
    <Container column>
      <Title text="Minhas tarefas" textTransform="uppercase" />

      <StyledTasksListing>
        {isFetching ? <span>Carregando...</span> : (
          <>
            <Column 
              userToken={user_token}
              title="NOT DONE" 
              tasksTotal={notDoneTasks.length} tasks={notDoneTasks}
              updateTasks={setNotDoneTasks}
              />
            <Column 
              title="IN PROGRESS" 
              tasksTotal={inProgressTasks.length} 
              tasks={inProgressTasks}
              updateTasks={setInProgressTasks}
            />
            <Column 
              title="DONE" 
              tasksTotal={doneTasks.length} 
              tasks={doneTasks}
              updateTasks={setDoneTasks}
            />
          </>
        )}
      </StyledTasksListing>
    </Container>
  )
};

export default connect(state => ({
  user_token: state.user_token,
  user_id: state.user_id
}))(TasksListing);
