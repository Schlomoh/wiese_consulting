import { BasePage } from "@/components";
import { CallToAction, HeroBanner, Introduction, Products } from "./Sections/";

const Home = () => {
  return (
    <BasePage>
      <HeroBanner />
      <Products />
      <Introduction />
      <CallToAction />
    </BasePage>
  );
};

export default Home;
