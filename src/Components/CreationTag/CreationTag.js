import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { LabelContainer, Input, Label } from './styles';
import { getClassName, bemDestruct, getUniqueId } from '../../utils';
import inputProps from './inputProps';
import { DefaultLabel } from '../Label';
import { ErrorMessage } from '../InputField/styles';
import { ExclamationIcon } from '../UI/Icons';

/**
 * CreationTag component should be called with
 * @param {String} type - (Required) It's to define styles of input field.
 * @param {String} placeholder - (Optional) It's to display text into input field.
 * @param {String} label - (Optional) Text to be display in label.
 * @param {Function} icon - (Optional) Function that returns an svg icon.
 * @param {Function} onTagCreated - (Optional) Callback to trigger on tag created. It receive tag value in first argument.
 * @param {Function} onTagDeleted - (Optional) Callback to trigger on tag created. It receive tag value in first argument.
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @param {Function} onError - (Optional) Function to check input values and trigger error message. It receive the input value in first argument.
 * @param {String} errorMessage - (Optional) String to be display on error event.
 * @param {Array} defaultValue - (Optional) It's the default value for one or more tags to be displayed in render.
 * @return {React Component} A view for input field with icon and action on error.
 */
const CreationTag = ({ type, placeholder, width, label, onTagCreated, onTagDeleted, disabled, errorMessage, onError, defaultValue }) => {
  const { defaultClassName, optionalClassName, onBlurClassName, onFocusClassName, errorClassName, InputContainer } = inputProps[type];
  const [className, setClassName] = useState(defaultClassName);
  
  const [defaultLabelArray, setDefaultLabelArray] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [labelId, setLabelId] = useState(getUniqueId());
  const [error, setError] = useState(false);
  
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const maxWidth = Number(width.split('px')[0]) - 53;
  const maxLength = Math.ceil(maxWidth * 11/100);

  const handleClick = () => {
    if (!error) {
      setClassName(toggleToClassName);
    }
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

  const handleChange = (e) => {
    const value = e.target.value;
    const isError = onError ? onError(value) : null;
    setInputValue(value);   
    
    if (isError) {
      setError(true);
      setClassName(errorClassName);
    } else {
      setError(false);
      setClassName(onFocusClassName);
    }
  }

  const handleClose = (targetId, text) => {
    onTagDeleted(text);
  };

  const handleKeyDown = (key) => {
    const keyCode = key.keyCode.toString();
    const updateDefaultLabelArray = [...defaultLabelArray];
    
    if (!error && (keyCode === '13' || keyCode === '9')) {
      key.preventDefault();
      updateDefaultLabelArray.push(inputValue);
      setDefaultLabelArray(updateDefaultLabelArray);
      onTagCreated && onTagCreated(inputValue.trim());
      setInputValue('');
    } 
  };

  useEffect(() => {
    const id = getUniqueId();
    setLabelId(id);
    if (defaultValue.length) {
      const updateDefaultLabelArray = [...defaultLabelArray];
      defaultValue.forEach(value => updateDefaultLabelArray.push(value));
      setDefaultLabelArray(updateDefaultLabelArray);
    }
  }, []);

  return (
    <LabelContainer>
      {label && <Label htmlFor={labelId}>{label}</Label>}
      <InputContainer
        onClick={disabled ? null : handleClick}
        className={bemDestruct(className, disabled)}
        disabled={disabled}
        width={width}
      >
        {defaultLabelArray &&
          useMemo(() => defaultLabelArray.map((text, index) => (
            <DefaultLabel
              key={index}
              text={text}
              size="medium"
              margin="5px"
              maxWidth={maxWidth}
              onClose={handleClose}
            />
          )), [defaultLabelArray])
        }
        <Input
          id={labelId}
          width="auto"
          value={inputValue}
          disabled={disabled}
          maxLength={maxLength}
          placeholder={placeholder}
          onBlur={disabled ? null : handleBlur}
          onFocus={disabled ? null : handleFocus}
          onChange={disabled ? null : handleChange}
          onKeyDown={disabled ? null : handleKeyDown}
          size={inputValue.length && inputValue.length + 20}
        />
        {errorMessage &&
          <ExclamationIcon props={{ margin: '0 5px 0 auto' }} />
        }
      </InputContainer>
      {errorMessage &&
        <ErrorMessage className={bemDestruct(className)}>{errorMessage}</ErrorMessage>
      }
    </LabelContainer>
  );
};

CreationTag.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  label: PropTypes.string,
  onTagCreated: PropTypes.func,
  onTagDeleted: PropTypes.func,
  disabled: PropTypes.bool,
  onErrorMessage: PropTypes.string,
  onError: PropTypes.func,
  defaultValue: PropTypes.arrayOf(PropTypes.string),
};

CreationTag.defaultProps = {
  placeholder: '',
  width: '433px',
  label: '',
  onTagCreated: () => null,
  onTagDeleted: () => null,
  disabled: false,
  onErrorMessage: null,
  onError: () => null,
  defaultValue: [],
};

export default React.memo(CreationTag);
