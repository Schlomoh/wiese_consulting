import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 300px;
  width: 100%;
  position: fixed;
  z-index: 0;
  bottom: 0;

  color: white;
`;

const LinkContainer = styled.div`
  padding: 2rem 1rem;
  display: flex;
  gap: 1rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <LinkContainer>
        <a>Impressum</a>
        <a>Kontakt</a>
        <a>Historie</a>
        <a>Datenschutz</a>
        <a>AGBs</a>
      </LinkContainer>
    </StyledFooter>
  );
};

export default Footer;
