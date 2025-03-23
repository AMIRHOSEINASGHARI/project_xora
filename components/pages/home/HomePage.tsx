import Hero from "./templates/Hero";
import Features from "./templates/Features";
import Pricing from "./templates/Pricing";
import Faq from "./templates/Faq";
import Testimonials from "./templates/Testimonials";
import Download from "./templates/Download";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
    </>
  );
};

export default HomePage;
