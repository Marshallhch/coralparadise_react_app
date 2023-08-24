import React from 'react';
import { BestWrapper } from '../styles/BestSection.styled';
import Container from '../styles/Container.styled';

import SliderComponent from './SliderComponent';

const BestSection = () => {
  return (
    <BestWrapper id='best' className='section'>
      <Container>
        <div className='best-text'>
          <h3>
            <span>CoralParadise</span>에서 가장 사장받는{' '}
            <span>월간 Best 숙소</span>
          </h3>
          <p>위치, 청결도 등에서 게스트의 높은 평가를 받은 숙소입니다.</p>
        </div>
        <SliderComponent mode='best' />
      </Container>
    </BestWrapper>
  );
};

export default BestSection;
