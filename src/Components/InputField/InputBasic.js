import React from 'react';
import { InputBasicContainer, LabelContainer, Label } from './styles';
import InputField from './InputField';
import inputProps from './inputProps';

const InputBasic = ({ placeholder, label, id, type, disabled }) => {
  const { defaultClassName } = inputProps[type];
  return (
    <InputBasicContainer>
      <LabelContainer>
        <Label htmlFor={id}>{label}</Label>
      </LabelContainer>
      <InputField
        id={id}
        placeholder={placeholder}
        className={defaultClassName}
        disabled={disabled}
      />
    </InputBasicContainer>
  );
};

export default InputBasic;
