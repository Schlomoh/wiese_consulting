import { CallToAction, HeroBanner, Introduction, Products } from "./Sections/";

const Home = () => {
  return (
    <main>
      <HeroBanner />
      <Products />
      <Introduction />
      <CallToAction />
    </main>
  );
};

export default Home;
