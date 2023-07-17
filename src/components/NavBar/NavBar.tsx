import { useContext } from "react";
import { Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";

import { SvgWrapper, BigLogo } from "@/components";
import { NavBarContext } from "./NavBarContext";
import { routes } from "@/App";

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
  width: 100%;
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
    text-transform: capitalize;
    margin-left: 1rem;
    color: ${({ atTop, theme }) =>
      atTop ? theme.colors.base.white : theme.colors.accent.blue};
  }
`;

const Links = () => {
  const { isAtTop } = useContext(NavBarContext);
  const capitalize = (string: string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const links = routes.map((route) => (
    <Link to={route.path || ""} key={route.path}>
      {route.path === "/" ? "Home" : capitalize(route.path!)}
    </Link>
  ));

  return <LinkContainer atTop={isAtTop}>{links}</LinkContainer>;
};

const Offset = styled.div`
  height: ${({ theme }) => theme.misc.navBar.height};
`;

const NavBar = () => {
  const { isAtTop } = useContext(NavBarContext);
  const { colors } = useTheme();

  return (
    <>
      <StyledNav atTop={isAtTop}>
        <NavContentContainer>
          <Link to="">
            <SvgWrapper
              height="3rem"
              color={isAtTop ? colors.base.white : colors.accent.blue}
            >
              <BigLogo />
            </SvgWrapper>
          </Link>
          <div style={{ flexGrow: 1 }} />
          <Links />
        </NavContentContainer>
      </StyledNav>
      <Offset />
    </>
  );
};

export default NavBar;
