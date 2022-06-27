import styled from 'styled-components';
import {
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  Color,
} from './constants';

const TextColor = {
  primary: Color.Primary,
  gray100: Color.Gray100,
  gray400: Color.Gray400,
  gray700: Color.Gray700,
  white: Color.White,
};

const TextCursor = {
  default: 'default',
  pointer: 'pointer',
  text: 'text',
};

export const Title = styled.title`
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
  font-size: ${FontSize.Large};

  line-height: ${LineHeight.Large};
  cursor: ${props => TextCursor[props.cursor] || TextCursor.default};
  color: ${props => TextColor[props.color] || TextColor.gray100};
`;

export const H1 = styled.h1`
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
  font-size: ${FontSize.Large};

  line-height: ${LineHeight.Large};
  cursor: ${props => TextCursor[props.cursor] || TextCursor.default};
  color: ${props => TextColor[props.color] || TextColor.gray700};

  cursor: inherit;
`;

export const H2 = styled.h2`
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Medium};
  font-size: ${FontSize.Medium};

  line-height: ${LineHeight.Medium};
  cursor: ${props => TextCursor[props.cursor] || TextCursor.default};
  color: ${props => TextColor[props.color] || TextColor.gray700};

  cursor: inherit;
`;

export const H3 = styled.h2`
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Medium};
  font-size: ${FontSize.Small};

  line-height: ${LineHeight.Small};
  cursor: ${props => TextCursor[props.cursor] || TextCursor.default};
  color: ${props => TextColor[props.color] || TextColor.gray700};

  cursor: inherit;
`;

export const H4 = styled.h4`
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Medium};
  font-size: ${FontSize.Small};
  cursor: ${props => TextCursor[props.cursor] || TextCursor.default};
  color: ${props => TextColor[props.color] || TextColor.gray400};

  cursor: inherit;
`;

export const H5 = styled.h5`
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Medium};
  font-size: ${FontSize.XSmall};
  cursor: ${props => TextCursor[props.cursor] || TextCursor.default};
  color: ${props => TextColor[props.color] || TextColor.gray400};

  cursor: inherit;
`;

export const Body = styled.p`
  font-family: ${FontFamily.Primary};
  color: ${props => TextColor[props.color] || TextColor.gray400};
  cursor: ${props => TextCursor[props.cursor] || TextCursor.default};
  font-weight: ${props => (props.bold ? FontWeight.Medium : 'normal')};

  cursor: inherit;
`;
