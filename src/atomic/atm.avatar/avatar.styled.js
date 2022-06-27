import styled from 'styled-components';
import {
  Color,
  FontFamily,
  FontSize,
  Spacing,
  Transition,
  Radius,
} from '../../components/constants';

export const UserAvatarStyled = styled.div`
  position: relative;
  z-index: 999;
  height: 50px; //Height = Width
  width: 50px;

  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Small};

  color: ${Color.Gray200};
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${Color.Gray700};

  border-radius: 50%;
  border: 4px solid ${Color.Gray200};

  transition-duration: ${Transition.Normal};
  &:hover {
    cursor: pointer;
    box-shadow: 0 -6px 6px -4px ${Color.Gray300};
    background-color: ${Color.Gray500};
  }
  cursor: pointer;

  ${props => (props.displayOnly ? 'height: 100px;' : '')}
  ${props => (props.displayOnly ? 'width: 100px;' : '')}
  ${props => (props.displayOnly ? 'font-size: 40px;' : '')}
`;

export const PopUpItemStyled = styled.div`
  padding: ${Spacing.XNano};

  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Small};
  color: ${Color.Gray700};

  border-radius: ${Radius.Small};

  cursor: pointer;

  &:hover {
    background-color: ${Color.Gray100};
  }
`;

export const AvatarWrapperStyled = styled.div`
  position: relative;
  z-index: 999;
`;

export const PopupBackground = styled.div`
  z-index: 999;
  background: ${Color.Black};
  opacity: 0.3;
  position: fixed;
  padding: ${Spacing.Nano};
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
`;

export const AvatarPopUpStyled = styled.div`
  position: absolute;

  top: calc(100% - 20px);
  right: calc(100% - 60px);
  padding: ${Spacing.Nano};
  background-color: ${Color.White};
  max-width: 1000%;

  border-radius: ${Radius.Small};
`;
