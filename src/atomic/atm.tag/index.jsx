import React from 'react';
import { TagStyled } from './tag.styled';

export const Tag = ({ children, cattleTag }) => {
  return <TagStyled cattleTag={cattleTag}>{children}</TagStyled>;
};
