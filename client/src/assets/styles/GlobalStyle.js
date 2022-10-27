import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif;
    color: #232629;
  }

  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    margin: 0;
    font-size: 100%;
  }

  button {
    padding: 0;
    background-color: transparent;
    font-size: 100%;
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    outline: none;
    font-size: 100%;
    color: inherit;
  }
  .g-recaptcha iframe {
    max-width: 100%;
    transform:scale(0.77);
    -webkit-transform:scale(0.77);
    transform-origin: center center;
    -webkit-transform-origin: center center;
  }
  #rc-imageselect,.g-recaptcha {
    transform:scale(0.77);
    -webkit-transform:scale(0.77);
    transform-origin:0 0;
    -webkit-transform-origin:0 0;
  }
`;
