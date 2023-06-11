import { CSSProperties } from "react";
import styled from "styled-components";

interface GridContainerProps {
  breakWidth?: number;
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  flexDirection?: CSSProperties["flexDirection"];
  gap?: CSSProperties["gap"];
  height?: CSSProperties["height"];
}

const GridContainer = styled.div<GridContainerProps>`
  width: 100%;
  height: ${({ height }) => height || "initial"};
  min-height: inherit;

  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  gap: ${({ gap }) => gap || "2rem"};
  align-items: ${({ alignItems }) => alignItems || "initial"};

  @media screen and (max-width: ${({ breakWidth }) => breakWidth || 720}px) {
    flex-direction: column;
  }
`;

export default GridContainer;
