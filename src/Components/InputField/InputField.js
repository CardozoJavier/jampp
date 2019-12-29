import React, { useState } from 'react';
import { LabelContainer, Input, Label, ErrorMessage } from './styles';
import { IconGenerator, ExclamationIcon } from '../UI/Icons';
import { getClassName, bemDestruct } from '../../utils';
import inputProps from './inputProps';

/**
 * InputField component should be called with
 * @param {string} type - (Required) It's to define styles of input field.
 * @param {string} errorMessage - (Optional) String to be display on error event.
 * @param {string} placeholder - (Optional) It's to display text into input field.
 * @param {boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @param {function} icon - (Optional) Function that returns an svg icon.
 * @param {string} label - (Optional) Text to be display in label.
 * @param {id} id - (Optional) ID to be use for label refering to input field.
 * @param {function} onError - (Optional) Function to check input values and trigger error message. 
 */
const InputField = ({ placeholder, errorMessage, label, id, type, icon, onError, disabled }) => {
  const { defaultClassName, optionalClassName, errorClassName, onBlurClassName, onFocusClassName, InputContainer, iconProps } = inputProps[type];
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
    const error = onError(value);

    if (error) {
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
      <InputContainer
        onClick={disabled ? null : handleClick}
        className={bemDestruct(className, disabled)}
        disabled={disabled}
      >
        <Input
          id={id}
          placeholder={placeholder}
          onBlur={disabled ? null : handleBlur}
          onFocus={disabled ? null : handleFocus}
          onChange={disabled ? null : handleChange}
          disabled={disabled}
        />

        {icon ? <IconGenerator renderIcon={icon} props={iconProps} /> : null}

        {errorMessage !== undefined && 
          <IconGenerator
            renderIcon={ExclamationIcon}
            props={{}}
          />
        }
      </InputContainer>
      {errorMessage !== undefined && 
        <ErrorMessage className={bemDestruct(className)}>{errorMessage}</ErrorMessage>
      }
    </LabelContainer>
  );
};

export default InputField;
