import React, { useState } from 'react';
import { InputErrorMessageContainer, LabelContainer, Input, Label, ErrorMessage } from './styles';
import { IconGenerator, ExclamationIcon } from '../UI/Icons';
import { getClassName, bemDestruct } from '../../utils';
import inputProps from './inputProps';

const InputErrorMessage = ({ placeholder, errorMessage, label, id, type, disabled }) => {
  const { defaultClassName, optionalClassName, errorClassName, onBlurClassName, onFocusClassName } = inputProps[type];
  const [className, setClassName] = useState(defaultClassName);
  const [error, setError] = useState(false);
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);

  const handleClick = () => {
    setClassName(toggleToClassName);
  }

  const handleBlur = () => {
    if (!error) {
      setClassName(onBlurClassName);
    }
  }

  const handleFocus = () => {
    if (!error) {
      setClassName(onFocusClassName);
    }
  }

  const handleChange = ({ target: { value }}) => {
    const isDigit = /\d/.test(value);

    if (isDigit) {
      setError(true);
      setClassName(errorClassName);
    } else {
      setError(false);
      setClassName(onFocusClassName);
    }
  }

  return (
    <LabelContainer>
      <Label htmlFor={id}>{label}</Label>
      <InputErrorMessageContainer
        onClick={disabled ? null : handleClick}
        className={bemDestruct(className, disabled)}
        disabled={disabled}
      >
        <Input
          id={id}
          placeholder={placeholder}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleChange}
          />
        <IconGenerator
          renderIcon={ExclamationIcon}
          props={{}}
          />
      </InputErrorMessageContainer>
      <ErrorMessage className={bemDestruct(className)}>{errorMessage}</ErrorMessage>
    </LabelContainer>
  );
};

export default InputErrorMessage;
