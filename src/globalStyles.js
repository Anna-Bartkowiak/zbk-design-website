import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%; /* 1rem = 10px; 10px/16px = 62.5%; */
    }

    body {
        background-color: #f6f6f6;
        color: #6d6d6d;
        font-family: 'Unica One', 'Oswald', sans-serif;
        font-weight: 400;
    }
`

export default GlobalStyle;