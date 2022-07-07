import React from 'react';
import {
  RecipientBarStyled,
  PercentageIndicatorStyled,
  BarIndicatorStlyed,
} from './recipient.styled';

import { H1 } from './typography';

export const Recipient = ({ type, volume }) => {
  const recipientVolume = volume < 100 ? volume : 100;
  return (
    <RecipientBarStyled>
      <BarIndicatorStlyed type={type} volume={recipientVolume} />
      <PercentageIndicatorStyled>
        <H1>{recipientVolume || 0}%</H1>
      </PercentageIndicatorStyled>
    </RecipientBarStyled>
  );
};
