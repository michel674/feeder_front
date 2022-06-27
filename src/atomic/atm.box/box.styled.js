import styled from 'styled-components';

export const BoxStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
  justify-content: ${props => (props.hAlign ? props.hAlign : 'flex-start')};
  align-items: ${props => (props.vAlign ? props.vAlign : 'flex-start')};
`;
