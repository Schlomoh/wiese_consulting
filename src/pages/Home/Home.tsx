import { CallToAction, HeroBanner, Introduction, Products } from "./Sections/";

const Home = () => {
  return (
    <main style={{position: 'relative', zIndex: 2}}>
      <HeroBanner />
      <Products />
      <Introduction />
      <CallToAction />
    </main>
  );
};

export default Home;
