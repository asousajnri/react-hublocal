import React from "react";
import { Link } from "react-router-dom";
import { FiTrash2, FiEdit3 } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { MdUpdate } from "react-icons/md";

import { StyledTask, StyledTimeStamps, StyledActions } from "./task-styles";

const Task = ({ as, title, description, timestamps }) => {
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
          to={`/atualizar-tarefa/${1}`}
          className="actions-icon actions-icon--edit"
        >
          <FiEdit3 />
        </Link>
        <Link to="/" className="actions-icon actions-icon--delete">
          <FiTrash2 />
        </Link>
      </StyledActions>
    </StyledTask>
  );
};

export default Task;
