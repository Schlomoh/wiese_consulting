import {
  Footer,
  NavBar,
  NavBarContextProvider,
  ThemeProvider,
} from "@/components";
import { Home } from "./pages";

function App() {
  return (
    <NavBarContextProvider>
      <ThemeProvider>
        <NavBar />
        <Home />
        <Footer />
      </ThemeProvider>
    </NavBarContextProvider>
  );
}

export default App;
