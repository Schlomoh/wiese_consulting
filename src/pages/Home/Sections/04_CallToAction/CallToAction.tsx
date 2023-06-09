import { GridContainer, Paragraph, Section } from "@/components";
import styled from "styled-components";

const EndSection = styled(Section)`
  margin-bottom: 300px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  box-shadow: ${({ theme }) => theme.misc.boxShadow};
`;

const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.accent.blue};
  color: ${({ theme }) => theme.colors.base.white};
`;

const CtaContainer = styled.div<{ padding?: boolean }>`
  width: 100%;
  min-height: 100px;
  padding: ${({ padding }) => (padding ? "2rem" : 0)};
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled(CtaContainer)`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;

  a {
    text-decoration: underline;
  }
`;

const CallToAction = () => {
  return (
    <EndSection>
      <GridContainer flexDirection="row-reverse">
        <CtaContainer
          style={{ justifyContent: "space-around", alignItems: "center" }}
        >
          <ButtonContainer>
            <Button>Kontakt</Button>
            <a>Oder schauen sie sich unsere Geschichte an.</a>
          </ButtonContainer>

          <Paragraph color="grey"> Telefon: +49 12345678</Paragraph>
          <Paragraph color="grey"> E-mail: wiese@consluting.test</Paragraph>
        </CtaContainer>
        <CtaContainer>
          <h2>Rufen sie gerne an.</h2>
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
