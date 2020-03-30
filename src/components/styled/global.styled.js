import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        min-height: 100vh;
        margin: 0;
        background-color: ${props => props.theme.bg};
        color: ${props => props.theme.fg};
        font-family: "Fira Sans", sans-serif;

        
    }

    html, body {
        font-size: 20px;
    }

    img {
        max-width: 100%;
        margin: 0 auto;
    }

    blockquote {
        border-left: 5px solid ${props => props.theme.primary};
        margin-left: 0;
        padding-left: 1rem;
        font-style: italic;
    }
`;
