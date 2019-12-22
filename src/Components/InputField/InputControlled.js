import React, { useState } from 'react';
import {
  ControlledInputFieldContainer,
  CustomPlaceholderContainer,
  CustomPlaceholderBold,
  CustomPlaceholderNormal,
  Input,
  LabelContainer,
  Label,
  InputBasicContainer,
} from './styles';
import { bemDestruct } from '../../utils';
import inputProps from './inputProps';

const InputControlled = ({
  id,
  type,
  label,
  disabled,
  placeholder,
  boldPlaceholder,
}) => {
  const { defaultClassName, optionalClassName, inputClassName, } = inputProps[type];
  const [className, setClassName] = useState(defaultClassName);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      setClassName(optionalClassName);
    } else {
      setClassName(defaultClassName);
    };
  };
  
  return (
    <InputBasicContainer>
      <LabelContainer>
        <Label htmlFor={id}>{label}</Label>
      </LabelContainer>
      <ControlledInputFieldContainer>
        <CustomPlaceholderContainer htmlFor={id} className={bemDestruct(className, disabled)}>
          <CustomPlaceholderBold>
            { boldPlaceholder }
          </CustomPlaceholderBold>
          <CustomPlaceholderNormal>
            { placeholder }
          </CustomPlaceholderNormal>
        </CustomPlaceholderContainer>
        <Input 
          id={id}
          className={bemDestruct(inputClassName, disabled)}
          type="text"
          disabled={disabled}
          onChange={handleChange}
        />
      </ControlledInputFieldContainer>
    </InputBasicContainer>
  );
};

export default InputControlled;
