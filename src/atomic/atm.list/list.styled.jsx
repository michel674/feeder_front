import styled from 'styled-components';
import { Color, FontFamily, Spacing } from '../../components/constants';

export const UlStyled = styled.ul``;

export const LiStyled = styled.li`
  font-family: ${FontFamily.Primary};
  color: ${Color.Gray400};
  list-style: disc inside;

  padding-bottom: ${Spacing.XNano};
`;
