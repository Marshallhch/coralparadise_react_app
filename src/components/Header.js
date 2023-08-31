import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line } from 'react-icons/ri';

import Logo from '../assets/logo.png';

import { HeaderSection } from '../styles/Header.styled';
import Container from '../styles/Container.styled';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  return (
    <HeaderSection id='header'>
      <Container className='header-wrapper'>
        <div className='logo'>
          <img src={Logo} alt='logo' />
        </div>
        <ul className={`navi ${isActive ? 'active' : ''}`}>
          <li>
            <Link to='/'>홈</Link>
          </li>
          <li>
            <Link to='/wish-lists'>위시 리스트</Link>
          </li>
          <li>
            <Link to='/signin'>로그인</Link>
          </li>
          <li>
            <Link to='/signup'>회원가입</Link>
          </li>
        </ul>
        <div className='menu-icon'>
          <button className={isActive ? 'active' : ''} onClick={handleClick}>
            <RiMenu3Line />
          </button>
        </div>
      </Container>
    </HeaderSection>
  );
};

export default Header;
