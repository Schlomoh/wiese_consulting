import { CSSProperties } from "react";
import styled from "styled-components";

interface ParagraphProps {
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  color?: CSSProperties["color"];
}

const Paragraph = styled.p<ParagraphProps>`
  width: fit-content;
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  color: ${({ color, theme }) =>
    color
      ? color === "grey"
        ? theme.colors.grey.medium
        : color
      : theme.colors.base.white};
`;

export default Paragraph;
