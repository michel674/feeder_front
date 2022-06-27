import { faIcon } from '../atomic/atm.font-awesome';
import { VaccineDisplayStyled } from './vaccine-display.styled';
import { Separator } from '../atomic/atm.separator/separator.styled';

export const VaccineDisplay = ({ title, checked }) => {
  return (
    <VaccineDisplayStyled checked={checked}>
      {checked ? faIcon.check : faIcon.times} <Separator type="Nano" />
      {title}
    </VaccineDisplayStyled>
  );
};
