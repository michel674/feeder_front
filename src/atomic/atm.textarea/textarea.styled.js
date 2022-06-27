import styled from 'styled-components';
import {
  Color,
  FontFamily,
  FontWeight,
  FontSize,
} from '../../components/constants';

export const StyledTextArea = styled.textarea`
  appearance: none;
  background: ${Color.Gray200};
  width: 95%;
  display: block;
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Regular};
  font-size: ${FontSize.Small};
  color: ${Color.Gray700};
  border: solid transparent;
  border-radius: 3px;
  outline: none;
  margin-bottom: ${10 / 16}em;
  resize: vertical;
  &:focus,
  &:active {
    border-color: none;
  }
`;
