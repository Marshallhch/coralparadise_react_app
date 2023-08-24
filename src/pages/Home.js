import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CustomSearch from '../components/CustomSearch';
import SliderSection from '../components/SliderSection';
import BestSection from '../components/BestSection';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CustomSearch />
      <SliderSection />
      <BestSection />
    </div>
  );
};

export default Home;
