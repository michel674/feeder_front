import styled from 'styled-components';
import { Color, FontFamily, FontSize, Radius, Spacing } from './constants';

export const VaccineDisplayStyled = styled.div`
  display: flex;
  background: ${props => (props.checked ? Color.Primary : Color.Gray100)};
  padding: ${Spacing.Nano} ${Spacing.Small};

  border-radius: ${Radius.Small};

  font-family: ${FontFamily.Primary};
  font-size: 0.8rem;

  color: ${props => (props.checked ? Color.Gray100 : Color.Primary)};
`;

export const VaccinesBoxStyled = styled.div``;
