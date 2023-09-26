import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import MarkerIcon from '../assets/marker.png';
import Container from '../styles/Container.styled';
import { MapContainer } from '../styles/MapContainer.styled';
import { fetchData, getOptions } from '../utils/fetchData';

const MapComponent = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationsFromJson, setLocationsFromJson] = useState([]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
  });

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
        `https://airbnb13.p.rapidapi.com/search-location?ne_lat=${nelat}&ne_lng=${nelng}&sw_lat=${swlat}&sw_lng=${swlng}&checkin=2023-09-27&checkout=2023-09-28&adults=1&children=0&infants=0&pets=0&page=1`,
        getOptions
      );
      // console.log(getData.results);
      setLocationsFromJson(getData.results);
    };
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return 'Error';
  if (!isLoaded) return 'Maps';

  return (
    <MapContainer>
      <Container className='map-wrapper'>
        <GoogleMap
          mapContainerStyle={{
            height: '500px',
            padding: '5px',
            border: '1px solid #999',
          }}
          center={currentLocation}
          zoom={14}
          onLoad={onMapLoad}>
          {currentLocation && (
            <Marker
              position={{ lat: currentLocation.lat, lng: currentLocation.lng }}
              icon={{
                url: MarkerIcon, // Use your custom marker icon
                scaledSize: new window.google.maps.Size(30, 40), // Adjust the size as needed
              }}
            />
          )}
          {/* Add markers for locations from JSON data */}
          {locationsFromJson.map((location, index) => (
            <Marker
              key={index}
              position={{ lat: location.lat, lng: location.lng }}
              // You can customize the icon for these markers as well
            />
          ))}
        </GoogleMap>
      </Container>
    </MapContainer>
  );
};

export default MapComponent;
