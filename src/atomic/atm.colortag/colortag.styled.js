import styled from 'styled-components';
import { Radius, FontFamily, FontSize } from '../../components/constants';

export const ColorTagWrapperStyled = styled.div`
  width: fit-content;

  flex-direction: column;

  align-items: center;

  display: flex;
`;

export const ColorTagStyled = styled.div`
  width: ${props => (props.width ? props.width : '50px')};
  height: ${props => (props.height ? props.height : '50px')};
  border-radius: ${Radius.Medium};
  background: ${props => props.color};
  border: 1px solid black;
`;

export const ColorTagLabel = styled.label`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XXSmall};
  display: flex;
  justify-content: center;
`;

export const ColorTagSpacing = styled.div`
  height: 4px;
`;
