import styled from 'styled-components';
import { Color, Radius } from './constants';

export const RecipientBarStyled = styled.div`
  background-color: ${Color.Gray100};
  position: relative;
  z-index: 0;

  display: flex;
  justify-content: center;

  width: 100%;

  height: 0;
  padding-bottom: 80%;

  border-radius: ${Radius.Medium};
`;

export const PercentageIndicatorStyled = styled.div`
  position: absolute;
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border-radius: ${Radius.Medium};
`;

export const BarIndicatorStlyed = styled.div`
  background-color: ${props =>
    props.type == 'secondary' ? Color.Secondary : Color.PrimaryLight};
  position: absolute;

  bottom: 0;
  z-index: 3;

  width: 100%;

  height: ${props => props.volume}%;
`;
