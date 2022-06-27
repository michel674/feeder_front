import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Frame } from '../atomic/atm.frame/frame';
import { FaAngleDown } from 'react-icons/fa';
import { Color, Transition, Spacing, Radius } from './constants';
import { Hbox } from '../atomic/atm.box/hbox.styled';
import { Separator } from '../atomic/atm.separator/separator.styled';
import { LogoDarkStyled } from './logo.styled';

export const ArrowStyled = styled(FaAngleDown)`
  position: absolute;
  display: block;
  top: 35%;
  right: 0;
  height: 30%;
  width: 3rem;
  pointer-events: none;

  }
`;

export const Container = styled.div`
  position: absolute;
  background: ${Color.White};
  box-shadow: ${Color.Gray500} 0px 2px 8px 0px;
  top: 15%;
  right: 20%;
  bottom: 20%;
  left: 15%;
  border-radius: 8px;
  place-items: center;

  ${props => {
    if (props.disable) {
      return `
      background:red;
      pointer-events:none;
      `;
    } else {
      return `
      opacity:1;
      pointer-events:none;`;
    }
  }};
`;

export const LoginBoxStyled = () => {
  return (
    <Container>
      <Grid>
        <Separator type="Medium" />
        <Row>
          <Hbox>
            <Hbox.Separator />
            <Hbox.Item vAlign="center" hAlign="flex-start">
              <LogoDarkStyled>Feeder</LogoDarkStyled>
            </Hbox.Item>
          </Hbox>
        </Row>
      </Grid>
    </Container>
  );
};
