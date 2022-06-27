import styled from 'styled-components';

import { Spacing } from '../../components/constants';

const HboxStyled = styled.div`
  flex-direction: row;
  align-content: flex-start;
  display: flex;
  flex: 1;
  ${props => props.wrap && 'flex-wrap: wrap'};
  justify-content: ${props => (props.vAlign ? props.vAlign : 'flex-start')};
  align-items: ${props => (props.hAlign ? props.hAlign : 'stretch')};
  width: ${props => (props.width ? props.width : 'auto')};
`;

export const Hbox = HboxStyled;
Hbox.displayName = 'Hbox';

Hbox.Item = styled.div`
  flex-direction: column;
  display: flex;
  ${props => (!props.noGrow ? 'flex: 1' : null)};
  justify-content: ${props => (props.vAlign ? props.vAlign : 'flex-start')};
  align-items: ${props => (props.hAlign ? props.hAlign : 'stretch')};
  ${props => props.wrap && 'flex-wrap: wrap'};
  width: ${props => (props.width ? props.width : 'auto')};
`;
Hbox.Item.displayName = 'Hbox.Item';

Hbox.Separator = styled.div`
  width: ${Spacing.Small};
`;
Hbox.Separator.displayName = 'Hbox.Separator';
