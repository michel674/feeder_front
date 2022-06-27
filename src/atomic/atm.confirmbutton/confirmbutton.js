import styled from 'styled-components';
import {
  Color,
  FontSize,
  FontWeight,
  Transition,
  Spacing,
} from '../../components/constants';

const frameColor = {
  primary: Color.Primary,
  secondary: '#ff4336',
};

export const ConfirmButtonStyled = styled.button`
  background-color: ${Color.Primary};
  color: ${Color.White};
  font-size: ${FontSize.Nano};
  font-weight: ${FontWeight.SemiBold};

  padding: ${Spacing.Nano} ${Spacing.Small};

  border: none;
  border-radius: 3px;

  transition-duration: ${Transition.Normal};
  &:hover {
    box-shadow: 0 6px 6px -4px ${Color.Gray300};
    background-color: ${Color.PrimaryLight};
  }
  &:active {
    transition-duration: ${Transition.Fast};
    color: ${Color.Gray200};
    background-color: ${Color.PrimaryDark};
  }

  cursor: pointer; ;
`;

export const OuterButtonStyled = styled.div`
  z-index: 998;
  background: ${Color.Black};
  opacity: 0.3;
  position: fixed;
  padding: ${Spacing.Nano};
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
`;

export const PopupWraperStyled = styled.div`
  z-index: 999;
  position: fixed;
  background-color: ${Color.Gray100};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-width: 100px;
  min-height: 40px;
  max-width: 50%;
  max-height: 50%;
  border-radius: 5px;
  margin: auto;
`;

export const PopupButtonStyled = styled.button`
  background-color: ${props => frameColor[props.color] || frameColor.primary};
  color: ${Color.White};
  font-size: ${FontSize.Nano};
  font-weight: ${FontWeight.SemiBold};

  padding: ${Spacing.Nano} ${Spacing.Small};

  border: none;
  border-radius: 2rem;

  transition-duration: ${Transition.Normal};
  &:hover {
    box-shadow: 0 6px 6px -4px ${Color.Gray300};
    border: 5px solid transparent;
    opacity: 0.7;
  }
  &:active {
    transition-duration: ${Transition.Fast};
    color: ${Color.Gray200};
    opacity: 1;
  }
  min-width: 150px;
  cursor: pointer; ;
`;
