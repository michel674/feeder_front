import React from 'react';
import { InputStyled, InputWrapperStyled, LabelStyled } from './input.styled';
import { Separator } from '../atm.separator/separator.styled';

export const Input = ({
  name,
  id,
  label,
  expand,
  type,
  defaultValue,
  disabled,
  step,
  placeholder,
}) => {
  return (
    <>
      <LabelStyled htmlFor={name}>{label}</LabelStyled>
      <Separator type="XNano" />
      <InputWrapperStyled expand={expand}>
        <InputStyled
          name={name}
          type={type}
          id={id}
          defaultValue={defaultValue}
          disabled={disabled}
          step={step}
          placeholder={placeholder}
        />
      </InputWrapperStyled>
    </>
  );
};
