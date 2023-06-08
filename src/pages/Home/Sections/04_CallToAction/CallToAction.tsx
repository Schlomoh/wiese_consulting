import { GridContainer, Section } from "@/components";
import styled from "styled-components";

const EndSection = styled(Section)`
  margin-bottom: 500px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  box-shadow: ${({ theme }) => theme.misc.boxShadow};
`;

const CallToAction = () => {
  return (
    <EndSection>
      <GridContainer></GridContainer>
    </EndSection>
  );
};

export default CallToAction;
