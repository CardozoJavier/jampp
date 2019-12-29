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
  InputControlledContainer,
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
  const { defaultClassName, optionalClassName, inputClassName, onFocusClassName, onBlurClassName } = inputProps[type];
  const [className, setClassName] = useState(defaultClassName);
  const [input, setInput] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      setInput(true);
      setClassName(optionalClassName);
    } else {
      setInput(false);
      setClassName(onFocusClassName);
    };
  };

  const handleBlur = () => {
    setClassName(onBlurClassName);
  }

  const handleFocus = () => {
    setClassName(onFocusClassName);
  }
  
  return (
    <InputControlledContainer>
      <LabelContainer>
        <Label htmlFor={id}>{label}</Label>
      </LabelContainer>
      <ControlledInputFieldContainer className={bemDestruct(className, disabled)}>
        {!input && 
          <CustomPlaceholderContainer htmlFor={id} className={bemDestruct(className, disabled)}>
            <CustomPlaceholderBold>
              { boldPlaceholder }
            </CustomPlaceholderBold>
            <CustomPlaceholderNormal>
              { placeholder }
            </CustomPlaceholderNormal>
          </CustomPlaceholderContainer>
        }
        <Input 
          id={id}
          type="text"
          disabled={disabled}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </ControlledInputFieldContainer>
    </InputControlledContainer>
  );
};

export default InputControlled;
