import styled from 'styled-components';
import {
  Color,
  Spacing,
  Radius,
  FontSize,
  FontFamily,
} from '../../components/constants';

export const MoreButtonWrapperStyled = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  font-size: 1.5rem;

  background-color: ${Color.Gray200};
  &:hover {
    background-color: ${Color.White};
  }
  &:active {
    background-color: ${Color.Gray300};
  }
`;

export const MoreWrapperStyled = styled.div`
  position: relative;
  z-index: 996;
`;
export const PopupStyled = styled.div`
  position: absolute;

  top: calc(100% - 10px);
  right: calc(100% - 20px);
  padding: ${Spacing.Nano};
  background-color: ${Color.White};
  max-width: 1000%;

  border-radius: ${Radius.Small};
`;

export const PopupBackground = styled.div`
  z-index: 995;
  background: ${Color.Black};
  opacity: 0.3;
  position: fixed;
  padding: ${Spacing.Nano};
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
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

export const MoreIconStyled = styled.div`
  font-size: 1.7rem;
`;
