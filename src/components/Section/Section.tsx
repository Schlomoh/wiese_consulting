import { CSSProperties } from "react";
import styled from "styled-components";

interface SectionProps {
  padding?: CSSProperties["padding"];
}

const Section = styled.section<SectionProps>`
  position: relative;
  padding: ${({ padding }) => padding || "6rem 2rem"};
  background-color: ${({ theme }) => theme.colors.base.white};
`;

export default Section;
