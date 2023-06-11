import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { AiOutlineInbox } from "react-icons/ai";
import {
  GridContainer,
  Paragraph,
  Section,
  SubHeading,
  useStaggeredFade,
} from "@/components/";

const StyledSection = styled(Section)`
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

const ProductContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    width: 100%;
  }
`;

const Product = ({ title }: { title: string }) => {
  const { colors } = useTheme();
  return (
    <ProductContainer className="product-container">
      <IconContext.Provider value={{ color: colors.grey.light, size: "150px" }}>
        <AiOutlineInbox />
      </IconContext.Provider>
      <h3>{title}</h3>
      <Paragraph color="grey">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id, quasi
        facilis dolore accusamus sapiente ad eaque vitae, ipsum numquam, aut ea?
        Laudantium a odit laborum nemo culpa deserunt dicta?
      </Paragraph>
    </ProductContainer>
  );
};

const Products = () => {
  const { scope, observedElement } = useStaggeredFade([".product-container"]);

  return (
    <>
      <StyledSection ref={observedElement}>
        <SubHeading>Unsere Säulen</SubHeading>

        <GridContainer ref={scope}>
          <Product title="KOPS/ICON Support" />
          <Product title="Data Development" />
          <Product title="Scrum / Agile Beratung" />
        </GridContainer>
      </StyledSection>
    </>
  );
};
export default Products;
