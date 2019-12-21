import React from 'react';
import { InputAccessoryContainer } from './styles';
import InputField from './InputField';
import inputProps from './inputProps';
import { IconGenerator } from '../UI/Icons';


const InputAccessory = ({ placeholder, type, icon, disabled }) => {
  const { defaultClassName, iconProps } = inputProps[type];

  return (
    <InputAccessoryContainer>
      <InputField 
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

export default InputAccessory;
