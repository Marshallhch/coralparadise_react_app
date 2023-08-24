import React from 'react';
import { CommonBtn } from '../styles/Button.styled';
import { SubWhiteBtn } from '../styles/Button.styled';
import { SubPointBtn } from '../styles/Button.styled';

const Button = ({ text, mode }) => {
  if (mode === 'hero') {
    return <CommonBtn>{text}</CommonBtn>;
  } else if (mode === 'sub-white') {
    return <SubWhiteBtn>{text}</SubWhiteBtn>;
  } else if (mode === 'sub-point') {
    return <SubPointBtn>{text}</SubPointBtn>;
  }
};

export default Button;
