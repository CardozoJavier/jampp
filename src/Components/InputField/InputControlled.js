import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ControlledInputFieldContainer,
  CustomPlaceholderContainer,
  CustomPlaceholderBold,
  CustomPlaceholderNormal,
  Input,
  LabelContainer,
  Label,
  InputControlledContainer,
} from './styles';
import { bemDestruct } from '../../utils';
import inputProps from './inputProps';

/**
 * InputControlled component should be called with
 * @param {String} type - (Required) It's to define styles of input field.
 * @param {String} placeholder - (Optional) It's to display text into input field. It'll be in second place.
 * @param {String} boldPlaceholder - (Optional) It's to display bold text into input field. It'll be in first place.
 * @param {String} label - (Optional) Text to be display in label.
 * @param {String} id - (Optional) ID to be use for label refering to input field.
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @param {Function} onChange - (Optional) Callback to trigger on onChange event. It receive input value in first argument.
 * @param {String} defaultValue - (Optional) It's the default value setted in input field.
 * @return {React Component} A view for input field with custom bold placeholder.
 */
const InputControlled = ({ type, placeholder, boldPlaceholder, id, label, disabled, onChange, defaultValue }) => {
  const { defaultClassName, optionalClassName, onFocusClassName, onBlurClassName } = inputProps[type];
  const [className, setClassName] = useState(defaultClassName);
  const [input, setInput] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    const currentValue = e.target.value;
    onChange(currentValue, e);
    setValue(currentValue);

    if (currentValue) {
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

  useEffect(() => {
    if (defaultValue) {
      setInput(true);
    }
  }, []);
  
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
          value={value}
          disabled={disabled}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </ControlledInputFieldContainer>
    </InputControlledContainer>
  );
};

InputControlled.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  boldPlaceholder: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
};

InputControlled.defaultProps = {
  placeholder: '',
  boldPlaceholder: '',
  id: '',
  label: '',
  disabled: false,
  defaultValue: '',
  onChange: () => null,
};

export default InputControlled;
