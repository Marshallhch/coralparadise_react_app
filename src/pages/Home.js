import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CustomSearch from '../components/CustomSearch';
import SliderSection from '../components/SliderSection';
import BestSection from '../components/BestSection';
import MapComponent from '../components/MapComponent';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CustomSearch />
      <SliderSection />
      <BestSection />
      <MapComponent />
    </div>
  );
};

export default Home;
