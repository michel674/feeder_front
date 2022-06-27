import styledComponents from 'styled-components';
import { Color } from './constants';

const fontSize = {
  XSmall: '1rem',
  Small: '1.2rem',
  Medium: '1.6rem',
  Large: '2rem',
};

const iconColor = {
  primary: Color.Primary,
  secondary: Color.Error,
  gray100: Color.Gray100,
  gray700: Color.Gray700,
  white: Color.White,
};

export const IconStyled = styledComponents.span`
  font-size: ${props => fontSize[props.size] || fontSize.Small};

  color: ${props => iconColor[props.type] || iconColor.primary};

`;
