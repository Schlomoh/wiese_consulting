import { CSSProperties } from "react";
import styled from "styled-components";

interface HeadlineProps {
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  color?: CSSProperties["color"];
}

const Headline = styled.h1<HeadlineProps>`
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  color: ${({ color, theme }) => color || theme.colors.base.white};

  @media screen and (max-width: 1000px) {
    font-size: ${1.618 * 2}rem;
  }
  @media screen and (max-width: 550px) {
    font-size: ${1.618 * 1.5}rem;
  }
`;

export default Headline;
