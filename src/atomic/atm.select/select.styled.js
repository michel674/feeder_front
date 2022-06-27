import styled from 'styled-components';
import {
  Color,
  FontSize,
  Radius,
  Spacing,
  FontFamily,
  FontWeight,
} from '../../components/constants';

export const LabelStyled = styled.label`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Nano};
  font-weight: ${FontWeight.Medium};
`;

export const SelectStyled = styled.select`
  padding: ${Spacing.Nano} ${Spacing.Small};
  background-color: ${Color.Gray200};
  border-radius: ${Radius.Small};
  color: ${Color.Gray600};
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Regular};
  border: 0;

  width: 100%;

  outline: none;
`;

export const SelectWrapperStyled = styled.div`
  width: ${props => (props.expand ? '100%' : 'fit-content')};
`;

export const StyledOption = styled.option`
  color: ${Color.Gray600};
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Regular};
  cursor: pointer;
`;
