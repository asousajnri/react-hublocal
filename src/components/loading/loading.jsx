import React from "react";

import imageLoading from "../../assets/images/three-dots.svg";

import { StyledLoading } from "./loading-styles";

const Loading = () => {
  return (<StyledLoading>
    <img src={imageLoading} alt=""/>
  </StyledLoading>);
};

export default Loading;