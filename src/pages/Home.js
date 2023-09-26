import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CustomSearch from '../components/CustomSearch';
import SliderSection from '../components/SliderSection';
import BestSection from '../components/BestSection';
import MapComponent from '../components/MapComponent';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState('프랑스 파리');

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  return (
    <div>
      <Header />
      <Hero />
      <CustomSearch
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}
      />
      <SliderSection
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}
      />
      <BestSection />
      <MapComponent />
    </div>
  );
};

export default Home;
