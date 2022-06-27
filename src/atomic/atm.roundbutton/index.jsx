import React from 'react';
import { RoundButtonStyled } from './roundbutton.styled';

export const RoundButton = ({ children, size }) => {
  return <RoundButtonStyled size={size}>{children}</RoundButtonStyled>;
};
