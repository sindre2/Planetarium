import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./theme";
//GlobalStyle component from styled-components, used instead of index.css
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
        font-family: ${(props) => props.theme.fonts.text}, sans-serif;
        font-size: 1rem;
        color: ${(props) => props.theme.colors.white};
        background: ${(props) => props.theme.colors.bg} ;
        background-image: linear-gradient( 99.9deg, rgba(27,24,31,1) 21.2%, rgba(50,4,89,1) 84.8% );
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    h1, h2, h3, h4, h5 {
        font-family: ${(props) => props.theme.fonts.header}, sans-serif;
    }
    a.active{
        color: ${(props) => props.theme.colors.nav_link_hover};

    }
    a.active:after{
        content: "";
        display: block;
        border-bottom: solid 3px ${(props) =>
          props.theme.colors.nav_link_hover};
    }
    `;
//Theme provide that allows easy changes to the sites colors, fonts, font-sizes etc.
const Provider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Provider;
