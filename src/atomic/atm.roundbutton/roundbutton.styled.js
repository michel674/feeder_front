import styled from 'styled-components';
import {
  Color,
  FontSize,
  FontWeight,
  Transition,
  Spacing,
} from '../../components/constants';

const fontSize = {
  Large: '4rem',
  Medium: '3.5rem',
  Small: '2.5rem',
};

export const RoundButtonStyled = styled.button`
  background-color: ${Color.Primary};
  color: ${Color.White};
  font-size: ${props => fontSize[props.size] || fontSize.Medium};
  font-weight: ${FontWeight.Bold};
  position:sticky;
  bottom:80px;
  top:0px;
  right:0px;
  left: 40px;

  display: flex;
  align-items: center;
  justify-content: center;


  width: 50px;
  height 50px;
  border: 0px solid transparent;
  border-radius: 50%;

  transition-duration: ${Transition.Normal};
  &:hover {
    box-shadow: 0 6px 6px -4px ${Color.Gray300};
    background-color: ${Color.PrimaryLight};
    border: 2px solid transparent;
  }
  &:active {
    transition-duration: ${Transition.Fast};
    color: ${Color.Gray200};
    background-color: ${Color.PrimaryDark};
  }

  cursor: pointer; ;
`;

export const ButtonLoginStyled = styled.button`
  background-color: ${Color.Black};
  color: ${Color.White};

  padding: 0.8rem 2rem;

  border: none;
  border-radius: 8px;
  width: 100%;
  transition-duration: ${Transition.Normal};
  &:hover {
    box-shadow: 0 6px 6px -4px ${Color.Black};
    background-color: ${Color.Gray700};
  }
  &:active {
    transition-duration: ${Transition.Fast};
    color: ${Color.Gray200};
    background-color: ${Color.Black};
  }

  cursor: pointer; ;
`;
