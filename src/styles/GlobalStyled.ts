import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 500;
        font-size: 18px;
        color: #fff;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        background: unset;
        border-none: unset;
    }

    section {
        background-color: ${theme.colors.background};
    }

    h2 {
        ${theme.typography.sectionTitle}
    }

    h3 {
        ${theme.typography.cardTitle}
    }
`
