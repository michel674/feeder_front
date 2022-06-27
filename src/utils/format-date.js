export const formatAddZero = value =>
  value >= 0 && value < 10 ? `0${value}` : `${value}`;

export const formatDayAndMonthToHuman = (value, mobile) => {
  const date = new Date(value || new Date());

  const months = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];
  const monthsNumber = date.getUTCMonth();

  return `${formatAddZero(date.getUTCDate())} de ${
    mobile && months[monthsNumber]
      ? months[monthsNumber].substring(0, 3)
      : months[monthsNumber]
  } de ${date.getFullYear()}`;
};
