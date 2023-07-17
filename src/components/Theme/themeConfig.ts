import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    base: {
      white: "#fffffc",
      black: "#121420",
    },
    grey: {
      light: "#c4c4c5",
      medium: "#898a8e",
      dark: "#4d4f57",
    },
    accent: {
      blue: "#0034A3",
      yellow: "#edf060",
    },
  },
  misc: {
    boxShadow: "0 .5rem 1.5rem rgba(0,0,0,0.15)",
    navBar: {
      height: "4rem",
    },
    section: {
      borderRadius: "25px",
    },
  },
};

export default theme;
