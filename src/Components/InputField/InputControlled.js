import React, { useState } from 'react';
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
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @param {String} label - (Optional) Text to be display in label.
 * @param {String} id - (Optional) ID to be use for label refering to input field.
 * @return {React Component} A view for input field with custom bold placeholder.
 */
const InputControlled = ({
  id,
  type,
  label,
  disabled,
  placeholder,
  boldPlaceholder,
}) => {
  const { defaultClassName, optionalClassName, onFocusClassName, onBlurClassName } = inputProps[type];
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

InputControlled.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  boldPlaceholder: PropTypes.string,
};

InputControlled.defaultProps = {
  id: '',
  label: '',
  disabled: false,
  placeholder: '',
  boldPlaceholder: '',
};

export default InputControlled;
