import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .btn-primary {
    background-color: #0A679A;
    color: white;
    &:hover {
      background-color: #01579b;
    }
  }

  .btn-outline {
    border: 1px solid #0A679A;
    color: #0A679A;
    background: transparent;
    &:hover {
      background-color: #0A679A;
      color: white;
    }
  }

  section {
    padding: 60px 0;
  }
`;