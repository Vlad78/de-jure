import { createGlobalStyle } from 'styled-components';

import { font } from './FontSize';
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
  min-width: 480px;
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

h2 {
font-size: 64px;
font-weight: 700;
line-height: 180%;
letter-spacing: 0;
text-align: left;
}

h3 {
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
}

p {
    margin: 0 0 10px 0;
    font-size: ${font(14, 20)};
font-weight: 400;
line-height: 136.15%;
color: ${theme.colors.fontShaddy};
}

a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
        color: inherit;
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
    height: auto;
}

input, textarea {
    font-family: inherit;
    border: none;

    &:focus-visible {
      border-color: ${theme.colors.font};
    }
}

`;
