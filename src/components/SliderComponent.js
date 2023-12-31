import { memo, useContext, useEffect, useRef, useState } from 'react';
import { ProfileContext } from './profileContext';
import Slider from 'react-slick';
import { SliderWrapper } from '../styles/Slider.styled';
import SliderImage from '../assets/slick.jpeg';
import { BestSlider } from '../styles/Slider.styled';
import { Link } from 'react-router-dom';
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiStarSFill,
  RiHeartLine,
  RiHeartFill,
} from 'react-icons/ri';

import { sliderList } from '../utils/sliderList';
// import { bestList } from '../utils/bestList';

import { fetchData, getOptions } from '../utils/fetchData';

const SliderComponent = ({ mode, selectedOption }) => {
  const [slideHeight, setSlideHeight] = useState(null);
  const slideItemRef = useRef(null);

  const { profileObj, setProfileObj } = useContext(ProfileContext);
  const [isHearted, setIsHearted] = useState({});

  // console.log(profileObj);

  const setSlideItemHeight = () => {
    if (slideItemRef.current) {
      const slideWidth = slideItemRef.current.offsetWidth;
      setSlideHeight(slideWidth);
      // console.log(slideWidth);
    }
  };

  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationsFromJson, setLocationsFromJson] = useState([]);

  // Event listener to update slide-item's height on window resize
  useEffect(() => {
    setSlideItemHeight(); // Set initial height
    window.addEventListener('resize', setSlideItemHeight);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', setSlideItemHeight);
    };
  }, []);

  // if (selectedOption) {
  //   setData(selectedOption);
  //   const getSelectedData = async (loca) => {
  //     const getData = await fetchData(
  //       `https://airbnb13.p.rapidapi.com/search-location?location=${loca}&checkin=2023-09-16&checkout=2023-09-17&adults=1`,
  //       getOptions
  //     );
  //     // console.log(getData.results);
  //     setSelectedData(getData);
  //     console.log(getData);
  //   };
  //   getSelectedData(data);
  // }

  useEffect(() => {
    // Get the user's current location using geolocation
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
        // console.log(latitude + 0.5, longitude + 0.5);
        const ne_lat = latitude + 0.01;
        const ne_lng = longitude + 0.01;
        const sw_lat = latitude - 0.01;
        const sw_lng = longitude - 0.01;
        // 37.4633133,126.7006694
        getSearchData(ne_lat, ne_lng, sw_lat, sw_lng);
      },
      (error) => {
        console.error('Error getting current location:', error);
      }
    );

    const getSearchData = async (nelat, nelng, swlat, swlng) => {
      const getData = await fetchData(
        `https://airbnb13.p.rapidapi.com/search-location?ne_lat=${nelat}&ne_lng=${nelng}&sw_lat=${swlat}&sw_lng=${swlng}&checkin=2023-09-28&checkout=2023-09-29&adults=1&children=0&infants=0&pets=0&page=1`,
        getOptions
      );
      // console.log(getData);
      setLocationsFromJson(getData.results);
    };
  }, []);

  let settings = {};
  if (mode === 'custom') {
    settings = {
      arrows: true,
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: <RiArrowLeftSLine />,
      nextArrow: <RiArrowRightSLine />,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 890,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <SliderWrapper>
          <Slider {...settings} className='slider-wrapper'>
            {sliderList.map(({ image, title, address, stars, linkId }) => (
              <div className='slide-item' key={linkId}>
                <img src={SliderImage} alt='' />
                <div className='slider-text'>
                  <h3>{title}</h3>
                  <p>
                    <em>{address}</em>
                    <span>
                      {Array.from({ length: stars }).map((_, index) => (
                        <RiStarSFill key={index} />
                      ))}
                    </span>
                  </p>
                  <Link to={`/details/${linkId}`}>자세히 보기</Link>
                </div>
              </div>
            ))}
          </Slider>
        </SliderWrapper>
      </div>
    );
  } else {
    settings = {
      arrows: false,
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 890,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const toggleHeart = (location) => {
      // if profileObj is not exist, alert('로그인이 필요합니다.')
      if (!profileObj) {
        alert('로그인이 필요합니다.');
        return;
      }
      setIsHearted({
        ...isHearted,
        [location.name]: !isHearted[location.name],
      });

      if (!isHearted[location.name]) {
        const data = {
          googleId: profileObj.googleId,
          rating: location.rating,
          name: location.name,
          image: location.images[0],
          address: location.address,
        };
        console.log(data);
      }
    };

    return (
      <div>
        <BestSlider>
          <Slider {...settings} className='slider-wrapper'>
            {[...locationsFromJson]
              .sort((a, b) => b.rating - a.rating)
              .map((location, idx) => (
                <div className='slide-item' key={idx} ref={slideItemRef}>
                  <img src={location.images[0]} alt='' />
                  {/* heart icon */}
                  <div
                    className='heart-icon'
                    onClick={() => toggleHeart(location)}>
                    {/* {console.log(rating, name, images[0], address)} */}
                    {isHearted[location.name] ? (
                      <RiHeartFill />
                    ) : (
                      <RiHeartLine />
                    )}
                  </div>
                  <div className='slider-text'>
                    <span className='label'>{idx + 1}위</span>
                    <h3>{location.name.split(' ')[0]}</h3>
                    {/* <p>{rating}</p> */}
                  </div>
                  <style>{`.slide-item { height: ${slideHeight}px; }`}</style>
                </div>
              ))}
          </Slider>
        </BestSlider>
      </div>
    );
  }
};

export default memo(SliderComponent);
