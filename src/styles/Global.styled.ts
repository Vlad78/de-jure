import { createGlobalStyle } from 'styled-components';

import { theme } from './Theme';


export const GlobalStyle = createGlobalStyle`

 *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,
body {
  max-width: 100vw;
  min-width: 320px;
  overflow-x: hidden;
  color: ${theme.colors.font};
  background-color: ${theme.colors.bgPrimary};
}

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0 0 10px 0;
    font-weight: normal;
}

h3 {
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    margin: 40px;
}

p {
    margin: 0 0 10px 0;
}

a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
}

ul {
    list-style: none;
}

button {
    background-color: transparent;
    border: none;
    font-family: inherit;
    cursor: pointer;
}

img {
    max-width: 100%;
    min-height: auto;
}

`;
