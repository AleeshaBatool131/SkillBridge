import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import TrustedBy from "../components/TrustedBy/TrustedBy";
import FeaturedServices from "../components/FeaturedServices/FeaturedServices";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Stats from "../components/Stats/Stats";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";
import useScrollReveal from "../hooks/useScrollReveal";


function Home() {
  useScrollReveal();
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <FeaturedServices />
      <WhyChooseUs />
      <Stats />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;