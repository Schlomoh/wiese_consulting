import styled from "styled-components";
import Sketch from "react-p5";

import { GridContainer, Headline, Paragraph } from "@/components";

import useCreateSketch from "./useCreateSketch";
import useIsAtTop from "./useIsAtTop";

const StyledBanner = styled.header`
  min-height: calc(80vh + ${({ theme }) => theme.misc.navBar.height});
  width: 100%;

  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.accent.blue};
  margin-bottom: -50px;
`;

const TextContainer = styled.div`
  width: calc(100% - 4rem);
  padding: 2rem;
  h1,
  p,
  div {
    position: relative;
    z-index: 1;
  }

  ::before {
    z-index: 0;
    left: 0;
    content: "";
    display: block;
    position: absolute;
    height: 600px;
    width: 50%;
    background-color: ${({ theme }) => theme.colors.accent.blue};
    filter: blur(150px);

    @media screen and (max-width: 720px) {
      width: 100%;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: calc(80vh + ${({ theme }) => theme.misc.navBar.height} + 50px);

  canvas,
  .react-p5,
  .p5Canvas {
    height: calc(100% + 50px);
    width: 100%;
  }
`;

const Divider = styled.div`
  height: 0.5rem;
  width: 25vw;
  background-color: ${({ theme }) => theme.colors.accent.yellow};
  border-radius: 1rem;
`;

const HeroBanner = () => {
  const { setup, draw } = useCreateSketch();
  const bannerRef = useIsAtTop();

  return (
    <StyledBanner ref={bannerRef}>
      <GridContainer alignItems="center" style={{ position: "absolute" }}>
        <TextContainer>
          <Headline margin="0 0 .5rem">
            Expertise und Erfahrung für Ihre Projekte
          </Headline>
          <Divider />
          <Paragraph margin=".5rem 0 0 ">
            Unsere strategischen Consulting-Lösungen sind darauf ausgerichtet,
            erfolgreiche Transformationen zu ermöglichen. Wir bieten unseren
            Kunden eine umfassende Beratung bei der Umsetzung von
            Veränderungsprozessen, von der Erstellung einer Strategie bis hin
            zur Implementierung von Maßnahmen.
          </Paragraph>
        </TextContainer>
        <div style={{ width: "100%" }} />
      </GridContainer>
      <ImageWrapper>
        <Sketch setup={setup} draw={draw} />
      </ImageWrapper>
    </StyledBanner>
  );
};

export default HeroBanner;
