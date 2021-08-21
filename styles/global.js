import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';
import variables from 'theme/variables';

export const GlobalStyle = createGlobalStyle`
html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${variables.TYPOGRAPHYS.FONT_FAMILIES.PRIMARY}, -apple-system,Roboto Mono, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 17px;
    font-weight: normal;
  }

  *, :before, :after {
    box-sizing: border-box;
    font-family: ${variables.TYPOGRAPHYS.FONT_FAMILIES.PRIMARY}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }


  .error-msg{
    color: ${variables.COLORS.ERRORMSG}
  }


`;
