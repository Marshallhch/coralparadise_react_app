import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line } from 'react-icons/ri';

import Logo from '../assets/logo.png';
// import Google from '../assets/google.png';

import { HeaderSection } from '../styles/Header.styled';
import Container from '../styles/Container.styled';

import { gapi } from 'gapi-script';

import Login from './Login';
import Logout from './Logout';

import { ProfileContext } from './profileContext';

const clientId = process.env.REACT_APP_CLIENT_ID;

// console.log(process.env.REACT_APP_CLIENT_ID);

const Header = () => {
  const { profileObj, setProfileObj } = useContext(ProfileContext);

  // console.log(profileObj);

  useEffect(() => {
    gapi.load('auth2', function () {
      gapi.auth2.init({
        client_id: clientId,
      });
    });
  });

  // 118325483071000080626
  // 118325483071000080626
  // 118325483071000080626
  // 118325483071000080626

  const [isActive, setIsActive] = useState(false);
  // const googleLoginClientId = process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID;

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
          <li className='google-login'>
            {profileObj ? <Logout /> : <Login setProfileObj={setProfileObj} />}
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
