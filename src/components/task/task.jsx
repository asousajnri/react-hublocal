import React from "react";
import { Link } from "react-router-dom";
import { FiTrash2, FiEdit3 } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { MdUpdate } from "react-icons/md";

import api from "../../api";

import { StyledTask, StyledTimeStamps, StyledActions } from "./task-styles";

const Task = ({ 
  idTask, 
  userId,
  userToken, 
  as, 
  title, 
  description, 
  timestamps,
  updateTasks
}) => {
  const handleDelete = async () => {
    try {
      await api({
        method: "DELETE",
        url: `users/${userId}/tasks/${idTask}`,
        headers: {
          authorization: `Bearer ${userToken}`
        }
      })
      updateTasks(oldState => [...oldState.filter(task => task.id !== idTask)])
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledTask as={as}>
      <h2>{title}</h2>
      <p>{description}</p>
      <StyledTimeStamps>
        <time>
          <BiTimeFive className="time-icon" />
          {timestamps.created_at}
        </time>
        <time>
          <MdUpdate className="time-icon" />
          {timestamps.updated_at}
        </time>
      </StyledTimeStamps>
      <StyledActions>
        <Link
          to={`/atualizar-tarefa/${userId}/tasks/${idTask}`}
          className="actions-icon actions-icon--edit"
        >
          <FiEdit3 />
        </Link>
        <span 
          className="actions-icon actions-icon--delete"
          onClick={() => handleDelete()}
        >
          <FiTrash2 />
        </span>
      </StyledActions>
    </StyledTask>
  );
};

export default Task;
