import { createGlobalStyle } from "styled-components";

import oswald from "@/assets/fonts/Oswald-Medium.ttf";
import poppins from "@/assets/fonts/Poppins-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Oswald';
      src: local('Oswald'), url(${oswald}) format('woff');
  }
 
  @font-face {
      font-family: 'Poppins';
      src: local('Poppins'), url(${poppins}) format('woff');
  }

  body, html {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.accent.blue};
  }

  * {
    font-family: Poppins, sans-serif;
  }
  
  h1 {
    font-size: calc(1.618rem * 3);
    font-family: Oswald, sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  h2 {
    margin:  0 0 3rem 0;

    ::after {
      content: "";
      display: block;
      position: relative;

      height: 0.5rem;
      width: 4rem;
      border-radius: 0.25rem;
      background-color: ${({ theme }) => theme.colors.accent.yellow};
    }

  }
  
  h3 {
    margin-top: 2rem;
  }

  button, a {
    cursor: pointer;
  }
`;

export default GlobalStyle;
