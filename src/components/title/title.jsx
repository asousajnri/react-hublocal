import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useHistory } from "react-router-dom";

import { StyledTitle, GoBack } from "./title-styles";

const Title = ({ text, textTransform, goBack }) => {
  let history = useHistory();

  return (
    <StyledTitle goBack={goBack} textTransform={textTransform}>
      {goBack && (
        <GoBack onClick={() => history.goBack()}>
          {" "}
          <MdKeyboardBackspace size="2.5rem" /> Voltar
        </GoBack>
      )}
      {text}
    </StyledTitle>
  );
};

export default Title;
