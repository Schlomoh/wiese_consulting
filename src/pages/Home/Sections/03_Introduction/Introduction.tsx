import { GridContainer, Paragraph, Section } from "@/components";
import styled from "styled-components";
import p5Types from "p5";

import imgTini from "@/assets/headshot_tini.jpeg";
import imgPetra from "@/assets/headshot_petra.jpeg";

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    position: relative;
    object-fit: contain;
    height: 300px;
    border-radius: 1rem;
    z-index: 1;
    box-shadow: ${({ theme }) => theme.misc.boxShadow};
  }

  ::before {
    content: "";
    display: block;
    position: absolute;

    z-index: 0;

    height: 200px;
    width: 200px;

    translate: 70px -20px;

    border-radius: 2rem;
    background-color: ${({ theme }) => theme.colors.accent.yellow};
  }
`;

const PetraIntro = () => {
  return (
    <div>
      <ImageWrapper>
        <img alt="Petra Becker" src={imgPetra} loading="lazy" />
      </ImageWrapper>
      <h3>Petra Becker</h3>
      <Paragraph color="grey">
        Sie verfügt über ein tiefes Verständnis für Datenoptimierung und
        -verarbeitung sowie über umfangreiche Erfahrung in der Zusammenarbeit
        mit interdisziplinären Teams. Mit ihrer Fähigkeit, komplexe
        Datenanalysen in leicht verständliche Berichte zu übersetzen, hilft sie
        unseren Kunden, wertvolle Erkenntnisse aus ihren Daten zu gewinnen und
        ihre Geschäftsprozesse zu optimieren.
      </Paragraph>
      <br />
      <Paragraph color="grey">
        Als Beraterin trägt sie dazu bei, dass wir unsere Dienstleistungen
        kontinuierlich verbessern und auf die Bedürfnisse unserer Kunden
        abstimmen. Ihre Erfahrung in verschiedenen Branchen und Projekten
        ermöglicht es ihr, maßgeschneiderte Lösungen für die spezifischen
        Anforderungen unserer Kunden zu entwickeln. Mit ihrem breiten Wissen in
        Datenanalyse und -verarbeitung kann sie komplexe Datenprojekte managen
        und effektive Lösungen für unsere Kunden bereitstellen.
      </Paragraph>
    </div>
  );
};

const TiniInfo = () => {
  return (
    <div>
      <ImageWrapper>
        <img alt="Christiane Wiese" src={imgTini} loading="lazy" />
      </ImageWrapper>

      <h3>Christiane Wiese</h3>
      <Paragraph color="grey">
        Sie hat sich auf agile Arbeitsweisen und Prozessoptimierung
        spezialisiert und verfügt über umfangreiche Erfahrung als Agile Coach,
        Scrum Master und Technical Product Manager. Mit ihrem tiefen Verständnis
        für agile Methoden und Prozesse unterstützt sie unsere Kunden dabei,
        ihre Geschäftsprozesse zu optimieren und ihre Produkte zu entwickeln.
      </Paragraph>
      <br />
      <Paragraph color="grey">
        Sie hat maßgeschneiderte Lösungen für die spezifischen Anforderungen
        unserer Kunden entwickelt und verfügt über exzellente Fähigkeiten im
        Stakeholder-Management, der Teamleitung und der Prozessoptimierung. Als
        Beraterin unterstützt sie unsere Kunden bei der Einführung agiler
        Methoden und der Prozessoptimierung. Mit ihrer Erfahrung in
        verschiedenen Branchen und Projekten kann sie schnell und effektiv auf
        die Bedürfnisse unserer Kunden eingehen und maßgeschneiderte Lösungen
        entwickeln.
      </Paragraph>
    </div>
  );
};

const Introduction = () => {
  return (
    <Section style={{ position: "relative", zIndex: 1 }}>
      <h2>Wer wir sind</h2>
      <GridContainer gap="8rem">
        <PetraIntro />
        <TiniInfo />
      </GridContainer>
    </Section>
  );
};

export default Introduction;
