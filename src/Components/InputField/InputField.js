import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LabelContainer, Input, Label, ErrorMessage } from './styles';
import { IconGenerator, ExclamationIcon } from '../UI/Icons';
import { getClassName, bemDestruct } from '../../utils';
import inputProps from './inputProps';

/**
 * InputField component should be called with
 * @param {String} type - (Required) It's to define styles of input field.
 * @param {String} placeholder - (Optional) It's to display text into input field.
 * @param {String} errorMessage - (Optional) String to be display on error event.
 * @param {String} label - (Optional) Text to be display in label.
 * @param {String} id - (Optional) ID to be use for label refering to input field.
 * @param {Function} icon - (Optional) Function that returns an svg icon.
 * @param {Function} onError - (Optional) Function to check input values and trigger error message.
 * @param {Function} onChange - (Optional) Callback to trigger on onChange event. It receive input value in first argument.
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @return {React Component} A view for input field with icon and action on error.
 */
const InputField = ({ type, placeholder, errorMessage, label, id, icon, onError, onChange, disabled }) => {
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
    const error = onError ? onError(value) : null;

    if (error) {
      setError(true);
      setClassName(errorClassName);
    } else {
      setError(false);
      onChange(value);
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

        {errorMessage && 
          <IconGenerator
            renderIcon={ExclamationIcon}
            props={{}}
          />
        }
      </InputContainer>
      {errorMessage && 
        <ErrorMessage className={bemDestruct(className)}>{errorMessage}</ErrorMessage>
      }
    </LabelContainer>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.func,
  onError: PropTypes.func,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  placeholder: '',
  errorMessage: '',
  label: '',
  id: '',
  icon: () => null,
  onError: () => null,
  onChange: () => null,
  disabled: false,
};

export default InputField;
