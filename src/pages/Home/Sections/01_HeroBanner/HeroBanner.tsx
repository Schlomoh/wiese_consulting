import { useContext, useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import styled from "styled-components";
import Sketch from "react-p5";
import p5Types from "react-p5/node_modules/@types/p5";
import {
  NavBarContext,
  GridContainer,
  Headline,
  Paragraph,
} from "@/components";

const StyledBanner = styled.header`
  min-height: calc(80vh + ${({ theme }) => theme.misc.navBar.height});
  width: 100%;

  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.accent.blue};
  margin-bottom: -50px;
`;

// replacement type for p5 to avoid ts error bug on 'clear' method
type FixedP5 = p5Types & {
  clear: () => void;
};

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

const createArray = (number: number) => Array.from(new Array(number).keys());
const normalize = (min: number, max: number, val: number) =>
  (val - min) / max - min;

interface RectData {
  x: number;
  y: number;
  alpha: number;
  speed: number;
  time: number;
}

const useCreateSketch = () => {
  const squareSize = 80;
  const squareGap = 2;

  const dimensions = useRef({ width: 0, height: 0 });
  const rectGrid = useRef([] as RectData[][]);

  const setup = (p5: p5Types, parentRef: Element) => {
    if (!parentRef) return;

    const createColums = (tempColumn: RectData[], x: number, y: number) => {
      const [xCoord, yCoord] = [x, y];
      if (
        xCoord % (squareSize + squareGap) === 0 &&
        yCoord % (squareSize + squareGap) === 0
      ) {
        return [
          ...tempColumn,
          {
            x: xCoord,
            y: yCoord,
            speed: Math.random(),
            time: 100 * Math.random(),
            alpha:
              normalize(0, window.innerWidth, xCoord) *
              (Math.random() * 2 + 2) *
              100,
          },
        ];
      } else return tempColumn;
    };

    const createGrid = (accu: RectData[][], x: number[], i: number) => {
      const column = x.reduce(
        (accu: RectData[], y) => createColums(accu, i, y),
        []
      );
      return [...accu, column];
    };

    const createRects = (width: number, height: number) => {
      const grid = createArray(width).map(() => createArray(height));
      return grid.reduce(createGrid, []);
    };

    p5.createCanvas(parentRef.clientWidth, parentRef.clientHeight).parent(
      parentRef
    );

    p5.windowResized = function () {
      p5.noLoop();
      dimensions.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      const { width, height } = dimensions.current;
      p5.resizeCanvas(width, height);
      rectGrid.current = createRects(width, height);
      p5.loop();
    };

    rectGrid.current = createRects(window.innerWidth, window.innerHeight);
  };

  const draw = (p5: FixedP5) => {
    p5.clear();

    rectGrid.current.forEach((xAxis, xCoord) =>
      xAxis.forEach((rect, y) => {
        rect.time += (p5.deltaTime / 4000) * rect.speed;
        p5.noStroke();
        p5.fill(255, 255, 255, rect.alpha * Math.abs(Math.sin(rect.time)));
        p5.rect(rect.x, rect.y, squareSize, squareSize, 10, 10, 10, 10);
      })
    );
  };

  return { setup, draw };
};

const HeroBanner = () => {
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const observer = useIntersection(bannerRef, { root: null, threshold: 0.01 });
  const { setIsAtTop } = useContext(NavBarContext);

  const { setup, draw } = useCreateSketch();

  useEffect(() => {
    if (observer) setIsAtTop(observer.isIntersecting);
  }, [observer?.isIntersecting]);

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
