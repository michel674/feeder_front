import styled from 'styled-components';
import {
  Color,
  FontFamily,
  Radius,
  Spacing,
  FontSize,
  FontWeight,
} from '../../components/constants';

export const InputWrapperStyled = styled.div`
  width: ${props => (props.expand ? '100%' : 'fit-content')};
  background-color: ${Color.Gray200};
  padding: ${Spacing.Nano} ${Spacing.Small};

  border-radius: ${Radius.Small};
  box-sizing: border-box;
`;

export const InputStyled = styled.input`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Nano};
  font-weight: ${FontWeight.Medium};

  border: none;
  outline: none;

  width: 95%;

  background-color: ${Color.Gray200};
`;

export const LabelStyled = styled.label`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Nano};
  font-weight: ${FontWeight.Medium};
`;
