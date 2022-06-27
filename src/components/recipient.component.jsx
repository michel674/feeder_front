import React from 'react';
import {
  RecipientBarStyled,
  PercentageIndicatorStyled,
  BarIndicatorStlyed,
} from './recipient.styled';

import { H1 } from './typography';

export const Recipient = ({ type, volume }) => {
  return (
    <RecipientBarStyled>
      <BarIndicatorStlyed type={type} volume={volume} />
      <PercentageIndicatorStyled>
        <H1>{volume || 0}%</H1>
      </PercentageIndicatorStyled>
    </RecipientBarStyled>
  );
};
