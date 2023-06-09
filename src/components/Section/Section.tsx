import { CSSProperties } from "react";
import styled from "styled-components";

interface SectionProps {
  padding?: CSSProperties["padding"];
}

const Section = styled.section<SectionProps>`
  position: relative;
  padding: ${({ padding }) => padding || "6rem 2rem"};

  background-color: ${({ theme }) => theme.colors.base.white};

  h2 {
    margin-bottom: 2rem;
    margin-top: 0rem;

    ::after {
      content: "";
      display: block;
      position: relative;

      height: 0.5rem;
      width: 4rem;
      border-radius: 0.25rem;
      background-color: ${({ theme }) => theme.colors.accent.yellow};
    }
  }
`;

export default Section;
