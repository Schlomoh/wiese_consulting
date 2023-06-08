import { ReactNode, createContext, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

export const NavBarContext = createContext(
  {} as ReturnType<typeof useNavBarContext>
);

export const useNavBarContext = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  return {
    isAtTop,
    setIsAtTop,
  };
};

const NavBarContextProvider = ({ children }: ProviderProps) => {
  const ctx = useNavBarContext();

  return (
    <NavBarContext.Provider value={ctx}>{children}</NavBarContext.Provider>
  );
};

export default NavBarContextProvider;
