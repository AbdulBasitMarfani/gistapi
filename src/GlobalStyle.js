import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --primary-color: #689EE6;
  --border-color: #e9e4e4
}
  body{
    margin: 0;
    font-family: Helvetica Neue,Helvetica,Segoe UI,Arial,freesans,sans-serif;
    color: #626465;
  }
  p{
    margin:0;
    padding:0;
  }
  *{
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
