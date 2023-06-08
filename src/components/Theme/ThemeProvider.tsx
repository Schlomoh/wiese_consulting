import { ThemeProvider as SCThemeProvider } from "styled-components";
import { ReactNode } from "react";
import theme from "./themeConfig";
import GlobalStyle from "./GlobalStyle";

interface ProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ProviderProps) => {
  return (
    <SCThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </SCThemeProvider>
  );
};

export default ThemeProvider;
