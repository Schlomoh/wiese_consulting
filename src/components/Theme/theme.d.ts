// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      base: {
        white: CSSProperties["color"];
        black: CSSProperties["color"];
      };
      grey: {
        light: CSSProperties["color"];
        medium: CSSProperties["color"];
        dark: CSSProperties["color"];
      };
      accent: {
        blue: CSSProperties["color"];
        yellow: CSSProperties["color"];
      };
    };
    misc: {
      boxShadow: CSSProperties["boxShadow"];
      navBar: {
        height: CSSProperties["height"];
      };
    };
  }
}
