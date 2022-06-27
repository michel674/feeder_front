import React from 'react';
import { ButtonStyled } from './button.styled';

export const Button = ({ children, expanded, onClick }) => {
  return (
    <ButtonStyled expanded={expanded} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
