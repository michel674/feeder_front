import styled from 'styled-components';

import { Spacing } from '../../components/constants';

const SeparatorSize = {
  XNano: Spacing.XNano,
  Nano: Spacing.Nano,
  Small: Spacing.Small,
  SemiSmall: Spacing.SemiSmall,
  Medium: Spacing.Medium,
  SemiLarge: Spacing.SemiLarge,
  Large: Spacing.Large,
  XLarge: Spacing.XLarge,
  XXLarge: Spacing.XXLarge,
};

export const Separator = styled.div`
  padding-top: ${props =>
    props.type ? SeparatorSize[props.type] : Spacing.SemiSmall};
  padding-left: ${props =>
    props.type ? SeparatorSize[props.type] : Spacing.SemiSmall};
`;
