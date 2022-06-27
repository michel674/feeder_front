import styled from 'styled-components';
import { Color, FontFamily, Transition, FontWeight } from './constants';

export const LogoStyled = styled.a`
  font-size: 30px;
  font-weight: ${FontWeight.Bold};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  color: ${Color.Gray100};

  font-family: ${FontFamily.Primary};

  transition-duration: ${Transition.Normal};
`;

export const LogoDarkStyled = styled.a`
  font-size: 40px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  color: ${Color.Gray700};
  font-family: ${FontFamily.Primary};

  transition-duration: ${Transition.Normal};
`;
