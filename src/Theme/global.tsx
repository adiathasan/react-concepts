import { createGlobalStyle } from 'styled-components';

import { IThemes } from './theme';

export const GlobalStyles = createGlobalStyle<IThemes>`
    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
        background-color: ${({ theme }) => theme['bg-primary']};
        color: ${({ theme }) => theme['text-primary']};
        transition: .2s ease-in-out all;
        overflow-x: hidden;
        min-height: 100vh;
	    min-width: 100vw;
    }
    code {
    	font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
	    	monospace;
    }
`;
