import styled from 'styled-components';
import {
  Color,
  FontSize,
  FontFamily,
  FontWeight,
  Spacing,
} from '../../components/constants';

export const CheckboxContainer = styled.div`
  cursor: pointer;
  height: 35px;
  padding: ${Spacing.XNano} ${Spacing.Nano};
  margin: 0px 4px;
  border-radius: 5px;

  background-color: ${props => (props.checked ? '#0f6a3f' : '#E4EEE9')};

  display: flex;
  align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
`;

export const Text = styled.label`
  color: ${props => (props.checked ? Color.White : Color.Gray600)};
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Regular};
  cursor: pointer;
`;

export const StyledCheckbox = styled.label`
  width: 23px;
  height: 23px;
  margin-right: 6px;
  border-radius: 50%;
  background: ${Color.Gray200};
  display: flex;
  justify-content: center;
  align-items: center;
  .IconStyled {
    display: ${props => (props.checked ? 'flex' : 'none')};
    filter: invert(75%) sepia(11%) saturate(6042%) hue- rotate(30deg)
      brightness(105%) contrast(68%);
  }
  cursor: pointer;
`;

export const IconStyled = styled.div`
  display: ${props => (props.checked ? 'flex' : 'none')};
  color: ${Color.PrimaryDark};
  font-size: ${FontSize.Medium};
`;
