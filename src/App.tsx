import {
  CookieBanner,
  Footer,
  NavBar,
  NavBarContextProvider,
  PageTransitioner,
  ThemeProvider,
} from "@/components";

import { Contact, Home } from "./pages";
import { BrowserRouter, Route, RouteObject, Routes } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "kontakt",
    element: <Contact />,
  },
];

function App() {
  return (
    <NavBarContextProvider>
      <ThemeProvider>
        <BrowserRouter basename="/wiese_consulting">
          <PageTransitioner>
            <NavBar />
            <Routes>
              {routes.map((route) => (
                <Route
                  path={route.path}
                  element={route.element}
                  key={route.path}
                />
              ))}
            </Routes>
            <Footer />
            <CookieBanner />
          </PageTransitioner>
        </BrowserRouter>
      </ThemeProvider>
    </NavBarContextProvider>
  );
}

export default App;
