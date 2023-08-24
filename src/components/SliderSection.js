import React from 'react';
import Container from '../styles/Container.styled';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderComponent from './SliderComponent';

const SliderSection = () => {
  return (
    <div>
      <Container>
        <SliderComponent mode='custom' />
      </Container>
    </div>
  );
};

export default SliderSection;
