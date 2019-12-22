import React from 'react';
import { InputBasicContainer, LabelContainer, Label } from './styles';
import InputText from './InputText';
import inputProps from './inputProps';

const InputBasic = ({ placeholder, label, id, type, disabled }) => {
  const { defaultClassName } = inputProps[type];
  return (
    <InputBasicContainer>
      <LabelContainer>
        <Label htmlFor={id}>{label}</Label>
      </LabelContainer>
      <InputText
        id={id}
        placeholder={placeholder}
        className={defaultClassName}
        disabled={disabled}
      />
    </InputBasicContainer>
  );
};

export default InputBasic;
