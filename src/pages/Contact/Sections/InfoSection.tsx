import { Paragraph, Section, SubHeading } from "@/components";
import styled from "styled-components";

import character from "@/assets/character_ball.png";

const CustomSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.accent.blue};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  @media screen and (max-width: 720px) {
    flex-direction: column-reverse;
  }
`;

const ImageWrapper = styled.div`
  height: 500px;
  width: 50%;

  @media screen and (max-width: 720px) {
    width: 100%;
  }

  img {
    height: inherit;
    width: 100%;
    object-fit: contain;
  }
`;

const TextContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
  h2 {
    color: ${({ theme }) => theme.colors.base.white};
  }
`;

const InfoSection = () => {
  return (
    <CustomSection>
      <TextContainer>
        <SubHeading>Kontakt</SubHeading>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          beatae necessitatibus asperiores eligendi eaque. Quos ab qui fuga ex
          velit facilis, aliquam molestias distinctio nihil quod. Ratione
          explicabo similique alias!
        </Paragraph>
      </TextContainer>
      <ImageWrapper>
        <img src={character} alt="character holding ball" />
      </ImageWrapper>
    </CustomSection>
  );
};

export default InfoSection;
