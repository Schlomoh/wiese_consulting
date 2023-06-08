import { motion } from "framer-motion";
import { CSSProperties } from "react";
import styled from "styled-components";

interface SvgWrapperProps {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  color?: CSSProperties["color"];
}

const SvgWrapper = styled(motion.div)<SvgWrapperProps>`
  height: ${({ height }) => height || "100px"};
  width: ${({ width }) => width || "100px"};
  svg {
    width: inherit;
    height: inherit;
    color: ${({ color, theme }) => color || theme.colors.base.white};
    fill: ${({ color, theme }) => color || theme.colors.base.white};
    transition: color 0.3s, fill 0.3s;
  }
`;

export default SvgWrapper;
