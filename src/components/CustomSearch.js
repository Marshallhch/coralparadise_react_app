import React, { useState } from 'react';
import { CustomSeach } from '../styles/CustomSearch.styled';
import Button from './Button';

import Container from '../styles/Container.styled';
// import SearchLists from '../pages/SearchLists';
import { locationList } from '../utils/selectList';

const CustomSearch = ({ selectedOption, onOptionChange }) => {
  const [selectLoca, setSelectLoca] = useState('프랑스 파리');

  const handleSelectLoca = (e) => {
    const selectedValue = e.target.value;
    setSelectLoca(selectedValue);
    onOptionChange(selectedValue);
  };

  return (
    <CustomSeach id='custom-search' className='section'>
      <Container>
        <div className='text-wrapper'>
          <h3>
            <select onChange={handleSelectLoca} value={selectLoca}>
              {locationList.map((loca, idx) => {
                return (
                  <option value={loca.en} key={idx}>
                    {loca.kr}
                  </option>
                );
              })}
            </select>
            나는 <span>👶 아이와 함께</span>{' '}
            <span>🇺🇸 미주/캐나다/대양주에서</span>
            <br />
            <span>🍨 관공보다는 휴식과 여유를</span> 즐기고 싶어요
          </h3>
          <div className='buttons'>
            <Button text='최신순' mode='sub-white' />
            <Button text='리뷰순' mode='sub-point' />
          </div>
        </div>
      </Container>
    </CustomSeach>
  );
};

export default CustomSearch;
