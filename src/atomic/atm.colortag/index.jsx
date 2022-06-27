import React from 'react';
import {
  ColorTagStyled,
  ColorTagLabel,
  ColorTagSpacing,
  ColorTagWrapperStyled,
} from './colortag.styled';

export const ColorTag = ({ children, color, width, height }) => {
  return (
    <ColorTagWrapperStyled>
      <ColorTagStyled color={color} width={width} height={height} />
      <ColorTagSpacing />
      <ColorTagLabel>{children}</ColorTagLabel>
    </ColorTagWrapperStyled>
  );
};
