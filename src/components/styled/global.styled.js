import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        min-height: 100vh;
        margin: 0;
        background-color: ${props => props.theme.bg};
        color: ${props => props.theme.fg};
        font-family: "Fira Sans", sans-serif;

        // @media screen and (max-width: ${props => props.theme.breaks.sm}) {
        //     padding: 20px;
        // }
    }

    html, body {
        font-size: 20px;
    }

    img {
        max-width: 100%;
    }
`;
