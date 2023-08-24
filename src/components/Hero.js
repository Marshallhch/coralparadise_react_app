import React from 'react';
import Container from '../styles/Container.styled';
import { HeroSection } from '../styles/Hero.styled';
import MainImage from '../assets/main.jpg';
import Button from './Button';

const Hero = () => {
  return (
    <HeroSection id='hero' className='section'>
      <Container>
        <div className='image-wrapper'>
          <img src={MainImage} alt='main' />
        </div>
        <div className='search-input-wrapper'>
          <h3>한국의 휴가 임대 시설</h3>
          <p>
            <span>CoralParadise</span>에서 독특한 숙소를 예약하세요.
          </p>
          <form action='#'>
            <div className='upper-inputs'>
              <p className='input-box'>
                <label>위치</label>
                <input type='text' placeholder='한국' />
              </p>
              <span className='line'></span>
              <p className='input-box'>
                <label>인원</label>
                <input type='number' placeholder='인원수' />
              </p>
            </div>
            <div className='lower-inputs'>
              <p className='input-box'>
                <label>체크인</label>
                <input type='date' placeholder='날짜선택' />
              </p>
              <span className='line'></span>
              <p className='input-box'>
                <label>체크아웃</label>
                <input type='date' placeholder='날짜선택' />
              </p>
            </div>
            <Button text='검색' mode='hero' />
          </form>
        </div>
      </Container>
    </HeroSection>
  );
};

export default Hero;
