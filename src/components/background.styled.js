import styled from 'styled-components';
import { Color } from './constants';

const BackgroundColor = {
  primary: Color.Primary,
  default: Color.White,
};

export const Background = styled.div`
  background-color: ${props =>
    BackgroundColor[props.color] || BackgroundColor.secondary};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
