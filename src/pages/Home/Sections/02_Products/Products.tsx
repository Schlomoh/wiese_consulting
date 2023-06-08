import styled, { useTheme } from "styled-components";
import { IconContext } from "react-icons";
import { AiOutlineInbox } from "react-icons/ai";
import { GridContainer, Paragraph, Section } from "@/components/";

const StyledSection = styled(Section)`
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    width: 100%;
  }
`;

const Product = () => {
  const { colors } = useTheme();
  return (
    <ProductContainer>
      <IconContext.Provider value={{ color: colors.grey.light, size: "150px" }}>
        <AiOutlineInbox />
      </IconContext.Provider>
      <h3>Product 1</h3>
      <Paragraph color="grey">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id, quasi
        facilis dolore accusamus sapiente ad eaque vitae, ipsum numquam, aut ea?
        Laudantium a odit laborum nemo culpa deserunt dicta?
      </Paragraph>
    </ProductContainer>
  );
};

const Products = () => {
  return (
    <>
      <StyledSection>
        <h2>Unsere Säulen</h2>
        <GridContainer>
          <Product />
          <Product />
          <Product />
        </GridContainer>
      </StyledSection>
    </>
  );
};
export default Products;
