import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    ul,
    ol {
        list-style: none;
    }
    html {
        font-size: 16px;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
        font-size: 0.875rem;
        counter-reset: tab;
        color: ${(props) => props.theme.colors.white};
        background: ${(props) => props.theme.colors.bg} ;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`;

const Provider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Provider;
