import React from "react";

import { StyledLogMessage } from "./log-message-styles";

const LogMessage = ({ text }) => {
  return (<StyledLogMessage>
    {text}
  </StyledLogMessage>);
};

export default LogMessage;