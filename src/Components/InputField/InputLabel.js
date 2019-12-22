import React from 'react';
import { InputAccessoryContainer, LabelContainer, Label } from './styles';
import InputField from './InputField';
import inputProps from './inputProps';
import { IconGenerator } from '../UI/Icons';


const InputLabel = ({ placeholder, id, label, type, icon, disabled }) => {
  const { defaultClassName, iconProps } = inputProps[type];

  return (
    <InputAccessoryContainer>
      {label && 
        <LabelContainer>
          <Label htmlFor={id}>{label}</Label>
        </LabelContainer>
      }
      <InputField
        id={id}
        placeholder={placeholder}
        className={defaultClassName}
        disabled={disabled}
      />

      <IconGenerator
        renderIcon={icon}
        props={iconProps}
      />
    </InputAccessoryContainer>
  );
};

export default InputLabel;
