import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    * {
        magrin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    html, body {
        overflow-x: hidden;
        background: #B9E0D7;
    }

`;

export default GlobalStyle;