import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Unica One', sans-serif;
        background-color: #f6f6f6;
        color: #6d6d6d;
    }

    html {
        font-size: 62.5%; /* 1rem = 10px; 10px/16px = 62.5%; */
    }
`

export default GlobalStyle;