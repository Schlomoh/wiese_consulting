import { GridContainer, Paragraph, Section, SubHeading } from "@/components";
import styled from "styled-components";

interface ContainerProps {
  padding?: boolean;
}

const EndSection = styled(Section)`
  margin-bottom: 300px;
  border-bottom-left-radius: ${({ theme }) => theme.misc.section.borderRadius};
  border-bottom-right-radius: ${({ theme }) => theme.misc.section.borderRadius};
  box-shadow: ${({ theme }) => theme.misc.boxShadow};
`;

const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.accent.blue};
  color: ${({ theme }) => theme.colors.base.white};
`;

const CtaContainer = styled.div<ContainerProps>`
  width: 100%;
  min-height: 100px;
  padding: ${({ padding }) => (padding ? "2rem" : 0)};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonContainer = styled(CtaContainer)<ContainerProps>`
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  a {
    text-decoration: underline;
  }
`;

const ContactContainer = styled(ButtonContainer)<ContainerProps>`
  justify-content: center;
  max-height: fit-content;
  gap: 0;
`;

const CallToAction = () => {
  return (
    <EndSection>
      <SubHeading>Wir sind für sie da.</SubHeading>
      <GridContainer flexDirection="row-reverse">
        <CtaContainer
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <ButtonContainer>
            <a>Schauen sie sich unsere Geschichte an &gt;</a>
            <Button>Nehmen sie hier Kontakt auf</Button>
          </ButtonContainer>

          <ContactContainer>
            <Paragraph color="grey"> Telefon: +49 12345678</Paragraph>
            <Paragraph color="grey"> E-mail: wiese@consluting.test</Paragraph>
          </ContactContainer>
        </CtaContainer>
        <CtaContainer>
          <Paragraph color="grey">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            expedita, beatae architecto aut quaerat tempora libero aliquam
            incidunt maiores nemo, amet molestias perspiciatis fugiat qui
            pariatur enim hic alias ut?
          </Paragraph>
        </CtaContainer>
      </GridContainer>
    </EndSection>
  );
};

export default CallToAction;
