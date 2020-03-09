import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LabelContainer, Input, Label, ErrorMessage, WarningMessageContainer, WarningMessage } from './styles';
import { IconGenerator, ExclamationIcon, AlertIcon } from '../UI/Icons';
import { getClassName, bemDestruct } from '../../utils';
import inputProps from './inputProps';
import { palette } from '../styles';
const { yellow } = palette;

/**
 * InputField component should be called with
 * @param {String} type - (Required) It's to define styles of input field.
 * @param {String} placeholder - (Optional) It's to display text into input field.
 * @param {String} errorMessage - (Optional) String to be display on error event.
 * @param {String} warningMessage- (Optional) String to be display on warning event.
 * @param {String} label - (Optional) Text to be display in label.
 * @param {String} id - (Optional) ID to be use for label refering to input field.
 * @param {Function} icon - (Optional) Function that returns an svg icon.
 * @param {Function} onError - (Optional) Function to check input values and trigger error message.
 * @param {Function} onWarning- (Optional) Function to check input values and trigger warning message.
 * @param {Function} onChange - (Optional) Callback to trigger on onChange event. It receive input value in first argument.
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @param {String} defaultValue - (Optional) It's the default value setted in input field.
 * @return {React Component} A view for input field with icon and action on error.
 */
const InputField = ({ type, placeholder, errorMessage, warningMessage, label, icon, onError, onWarning, onChange, disabled, margin, defaultValue }) => {
  const { defaultClassName, optionalClassName, errorClassName, warningClassName, onBlurClassName, onFocusClassName, InputContainer, iconProps } = inputProps[type];
  const [className, setClassName] = useState(defaultClassName);
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState(false);
  const [labelId, setLabelId] = useState('');
  const [value, setValue] = useState(defaultValue);
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);

  const handleClick = () => {
    setClassName(toggleToClassName);
  }

  const handleBlur = () => {
    if (!error && !warning) {
      setClassName(onBlurClassName);
    }
  }

  const handleFocus = () => {
    if (!error && !warning) {
      setClassName(onFocusClassName);
    }
  }

  const handleChange = (e) => {
    const currentValue = e.target.value;
    const isError = onError ? onError(currentValue) : null;
    const warning = onWarning ? onWarning(currentValue) : null;
    setValue(currentValue);

    if (isError) {
      setError(true);
      setClassName(errorClassName);
    } else if (warning) {
      setWarning(true);
      setClassName(warningClassName);
    } else {
      setError(false);
      setWarning(false);
      onChange(currentValue, e);
      setClassName(onFocusClassName);
    }
  }

  useEffect(() => {
    const id = Math.random().toString();
    setLabelId(id);
  }, []);

  return (
    <LabelContainer margin={margin}>
      {label && <Label htmlFor={labelId}>{label}</Label>}
      <InputContainer
        onClick={disabled ? null : handleClick}
        className={bemDestruct(className, disabled)}
        disabled={disabled}
      >
        <Input
          id={labelId}
          value={value}
          placeholder={placeholder}
          onBlur={disabled ? null : handleBlur}
          onFocus={disabled ? null : handleFocus}
          onChange={disabled ? null : handleChange}
          disabled={disabled}
        />

        {icon ? <IconGenerator renderIcon={icon} props={iconProps} /> : null}

        {errorMessage && 
          <ExclamationIcon props={{ margin: '0 5px' }} />
        }
      </InputContainer>
      {errorMessage && 
        <ErrorMessage className={bemDestruct(className)}>{errorMessage}</ErrorMessage>
      }
      {warningMessage &&
        <WarningMessageContainer className={bemDestruct(className)}>
          <AlertIcon props={{ width: '10px', height: '10px', fill: yellow.y2 }} />
          <WarningMessage>{warningMessage}</WarningMessage>
        </WarningMessageContainer>
      }
    </LabelContainer>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.func,
  onError: PropTypes.func,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: '',
  errorMessage: '',
  label: '',
  icon: null,
  onError: () => null,
  onChange: () => null,
  disabled: false,
  defaultValue: '',
};

export default InputField;
