import { CookieBanner } from "@schlomoh/react-cookieconsent";
import {
  Footer,
  NavBar,
  NavBarContextProvider,
  ThemeProvider,
} from "@/components";
import { Home } from "./pages";
import { CSSProperties, useMemo } from "react";
import { useTheme } from "styled-components";

const CustomCookieBanner = () => {
  const { colors } = useTheme();

  const containerStyle = useMemo(
    () =>
      ({
        backgroundColor: colors.base.white,
        boxSizing: "border-box",
      } as CSSProperties),
    []
  );
  const buttonStyle = useMemo(
    () =>
      ({
        backgroundColor: colors.accent.blue,
        boxSizing: "border-box",
      } as CSSProperties),
    []
  );
  return (
    <CookieBanner
      containerStyle={containerStyle}
      primaryButtonStyle={buttonStyle}
    />
  );
};

function App() {
  return (
    <NavBarContextProvider>
      <ThemeProvider>
        <NavBar />
        <Home />
        <Footer />
        <CustomCookieBanner />
      </ThemeProvider>
    </NavBarContextProvider>
  );
}

export default App;
