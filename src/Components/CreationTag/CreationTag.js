import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LabelContainer, Input, Label } from './styles';
import { getClassName, bemDestruct } from '../../utils';
import inputProps from './inputProps';
import { DefaultLabel } from '../Label';

/**
 * CreationTag component should be called with
 * @param {String} type - (Required) It's to define styles of input field.
 * @param {String} placeholder - (Optional) It's to display text into input field.
 * @param {String} label - (Optional) Text to be display in label.
 * @param {String} id - (Optional) ID to be use for label refering to input field.
 * @param {Function} icon - (Optional) Function that returns an svg icon.
 * @param {Function} onTagCreated - (Optional) Callback to trigger on tag created. It receive tag value in first argument.
 * @param {Function} onTagDeleted - (Optional) Callback to trigger on tag created. It receive tag value in first argument.
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @return {React Component} A view for input field with icon and action on error.
 */
const CreationTag = ({ type, placeholder, width, label, id, onTagCreated, onTagDeleted, disabled }) => {
  const { defaultClassName, optionalClassName, onBlurClassName, onFocusClassName, InputContainer } = inputProps[type];
  const [className, setClassName] = useState(defaultClassName);
  
  const [defaultLabelArray, setDefaultLabelArray] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const maxWidth = Number(width.split('px')[0]) - 53;
  const maxLength = Math.ceil(maxWidth * 11/100);

  const handleClick = () => {
    setClassName(toggleToClassName);
  }

  const handleBlur = () => {
    setClassName(onBlurClassName);
  }

  const handleFocus = () => {
    setClassName(onFocusClassName);
  }

  const handleChange = ({ target: { value }}) => {
    const tabAsciiCode = value && value[value.length-1].charCodeAt();

    setInputValue(value);

    if (tabAsciiCode === 32 && inputValue.trim()) {
      const trimValue = value.trim();
      defaultLabelArray.push(trimValue);
      setDefaultLabelArray(defaultLabelArray);
      onTagCreated && onTagCreated(inputValue.trim());
      setInputValue('');
    }

    setClassName(onFocusClassName);
  }

  return (
    <LabelContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputContainer
        onClick={disabled ? null : handleClick}
        className={bemDestruct(className, disabled)}
        disabled={disabled}
        width={width}
      >
        {defaultLabelArray &&
          defaultLabelArray.map((text, index) => (
            <DefaultLabel
              key={index}
              id={index}
              text={text}
              size="small"
              margin="5px"
              maxWidth={maxWidth}
              onClose={onTagDeleted}
            />
          ))
        }
        <Input
          id={id}
          width="auto"
          value={inputValue}
          disabled={disabled}
          maxLength={maxLength}
          placeholder={placeholder}
          onBlur={disabled ? null : handleBlur}
          onFocus={disabled ? null : handleFocus}
          onChange={disabled ? null : handleChange}
          size={inputValue.length && inputValue.length + 20}
        />

      </InputContainer>
    </LabelContainer>
  );
};

CreationTag.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  onTagCreated: PropTypes.func,
  onTagDeleted: PropTypes.func,
  disabled: PropTypes.bool,
};

CreationTag.defaultProps = {
  placeholder: '',
  width: '433px',
  label: '',
  id: '',
  onTagCreated: () => null,
  onTagDeleted: () => null,
  disabled: false,
};

export default CreationTag;
