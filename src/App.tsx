import { NavBar, NavBarContextProvider, ThemeProvider } from "@/components";
import { Home } from "./pages";

function App() {
  return (
    <NavBarContextProvider>
      <ThemeProvider>
        <NavBar />
        <Home />
      </ThemeProvider>
    </NavBarContextProvider>
  );
}

export default App;
