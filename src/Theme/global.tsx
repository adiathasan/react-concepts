import { createGlobalStyle } from 'styled-components';

import { IThemes } from './theme';

export const GlobalStyles = createGlobalStyle<IThemes>`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@200&display=swap');
  
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    background-color: ${({theme}) => theme['bg-primary']};
    color: ${({theme}) => theme['text-primary']};
    transition: .2s ease-in-out all;
    overflow-x: hidden;
    min-height: 100vh;
    min-width: 100vw;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  a {
    text-decoration: none;
    color: hsl(222, 100%, 65%);
  }
`;
