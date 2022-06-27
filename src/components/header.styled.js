import styled from 'styled-components';
import { Color, FontFamily, Transition, FontWeight } from './constants';

export const Head = styled.div`
  position: absolute;
  top: 0;
  height: 80px;
  width: 100%;
  background-color: ${Color.Primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.a`
  font-size: 30px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  color: ${Color.Gray100};

  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};

  transition-duration: ${Transition.Normal};
`;

export const HeaderSeparatorStyled = styled.div`
  padding-bottom: 80px;
`;
