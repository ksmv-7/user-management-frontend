import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f9fa;
    color: #333;
  }

  h1 {
    font-size: 2rem;
    margin: 1rem 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 0;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
`;