import React from 'react';
import { ButtonStyled } from './button.styled';

export const Button = ({ children, expanded, onClick, type }) => {
  return (
    <ButtonStyled expanded={expanded} onClick={onClick} type={type}>
      {children}
    </ButtonStyled>
  );
};
