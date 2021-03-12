import styled, { createGlobalStyle } from 'styled-components';
// import { ColorsVariables } from './components/Settings/fonts';

const GlobalStyle = createGlobalStyle`
    :root {
        --fontColor: #2a2a2a;
        --primaryColor: #f6f6f6;
        --secondaryColor: #e5e5e5;
        --tertiaryColor: #c08d17;
        --fourthColor: #928165;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%; /* 1rem = 10px; 10px/16px = 62.5%; */
    }

    body {
        background-color: var(--primaryColor);
        color: var(--fontColor);
        font-family: 'Unica One', 'Oswald', sans-serif;
        font-weight: 400;
    }
`

export default GlobalStyle;