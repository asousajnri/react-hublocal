import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:hover,
  *:focus {
    box-shadow: none;
    outline: none;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background-color: ${(props) => props.theme.page.bg_body};
  }

  #root {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Roboto;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;
