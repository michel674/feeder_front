import React, { useEffect, useState } from 'react';
import { Separator } from '../atm.separator/separator.styled';

import {
  SelectStyled,
  LabelStyled,
  SelectWrapperStyled,
  StyledOption,
} from './select.styled';

export const Select = ({
  options,
  name,
  expand,
  label,
  id,
  onChange,
  defaultValue,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = e => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <SelectWrapperStyled expand={expand}>
      <LabelStyled htmlFor={name}>{label}</LabelStyled>
      <Separator type="XNano" />

      <SelectStyled
        name={name}
        id={id}
        onChange={value => handleChange(value)}
        value={value}
      >
        {options?.map(item => {
          return (
            <>
              <StyledOption key={item.value} value={item.value}>
                {item.title}
              </StyledOption>
            </>
          );
        })}
        <Separator type="Large" />
      </SelectStyled>
    </SelectWrapperStyled>
  );
};
