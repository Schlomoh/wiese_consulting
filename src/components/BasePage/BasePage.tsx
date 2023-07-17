import { ReactNode, useContext, useEffect } from "react";
import styled from "styled-components";
import { NavBarContext } from "../NavBar";

interface Props {
  children: ReactNode;
}

const BasePageWrapper = styled.main`
  position: relative;
  z-index: 2;
`;

const BasePage = ({ children }: Props) => {
  const { isAtTop, setIsAtTop } = useContext(NavBarContext);

  useEffect(() => {
    window.scroll(0, 0);

    return () => {
      setIsAtTop(true);
    };
  }, []);

  return <BasePageWrapper>{children}</BasePageWrapper>;
};

export default BasePage;
