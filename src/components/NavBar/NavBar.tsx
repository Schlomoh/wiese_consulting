import styled, { useTheme } from "styled-components";

import { SvgWrapper } from "@/components/SvgWrapper";
import { SmallLogo } from "../Logos";
import { BigLogo } from "../Logos";
import { useIntersection } from "react-use";
import { NavBarContext, useNavBarContext } from "./NavBarContext";
import { useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

interface StyledNavProps {
  atTop: boolean;
}

const StyledNav = styled.nav<StyledNavProps>`
  // position
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  overflow: hidden;

  // size
  width: 100vw;
  height: ${({ theme }) => theme.misc.navBar.height};

  // color
  background-color: ${({ atTop, theme }) =>
    atTop ? theme.colors.accent.blue : theme.colors.base.white};
  /* background-color: transparent; */
  box-shadow: ${({ atTop, theme }) =>
    atTop ? "0 0 0 rgba(0,0,0,0)" : theme.misc.boxShadow};

  transition: background-color 0.3s, box-shadow 0.3s;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NavContentContainer = styled.div`
  height: inherit;
  margin: 0 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LinkContainer = styled.span<StyledNavProps>`
  a {
    margin-left: 1rem;
    color: ${({ atTop, theme }) =>
      atTop ? theme.colors.base.white : theme.colors.accent.blue};
  }
`;

const Links = () => {
  const { isAtTop } = useContext(NavBarContext);

  return (
    <LinkContainer atTop={isAtTop}>
      <a>Home</a>
      <a>Contact</a>
      <a>About</a>
    </LinkContainer>
  );
};

const ScrollCheck = styled.div`
  width: 100vw;
  height: ${({ theme }) => theme.misc.navBar.height};
`;

const NavBar = () => {
  const { isAtTop } = useContext(NavBarContext);
  const { colors } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  const scrollCheckElement = useRef<null | HTMLDivElement>(null);
  const observer = useIntersection(scrollCheckElement, { threshold: 0.01 });

  useEffect(() => {
    if (!observer) return;

    setScrolled(!observer.isIntersecting);
  }, [observer?.isIntersecting]);

  return (
    <>
      <StyledNav atTop={isAtTop}>
        <NavContentContainer>
          <SvgWrapper
            height="3rem"
            color={isAtTop ? colors.base.white : colors.accent.blue}
          >
            <BigLogo />
          </SvgWrapper>
          <div style={{ flexGrow: 1 }} />
          <Links />
        </NavContentContainer>
      </StyledNav>
      <ScrollCheck ref={scrollCheckElement} />
    </>
  );
};

export default NavBar;
