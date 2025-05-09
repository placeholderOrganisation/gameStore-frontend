import React from "react";
import HeroSection from "./sections/HeroSection";
import FeaturedGamesSection from "./sections/FeaturedGamesSection";
import BrowseByCategorySection from "./sections/BrowseByCategorySection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturedGamesSection />
      <BrowseByCategorySection />
      <WhyChooseUsSection />
    </>
  );
};

export default Home;
