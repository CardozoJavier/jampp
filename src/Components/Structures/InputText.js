import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { removeEmptySpace, getWidthElement } from '../../utils';
import { Input } from '../CreationTag/styles';
import { fonts } from '../styles';
const { size10 } = fonts;

const InputText = ({ id, defaultValue, onChange, disabled, minWidth, margin, offset, fontSize, ...props }) => {
  const [value, setValue] = useState(defaultValue);
  const trimValue = removeEmptySpace(value);
  const [width, setWidth] = useState(minWidth);

  
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onChange(id, inputValue);
  };
  
  useEffect(() => {
    const updateWidth = getWidthElement(value, offset, fontSize);
    setWidth(updateWidth);
  }, [value]);
  
  return (
    <Input
      id={id}
      key={id}
      value={value}
      onChange={handleChange}
      style={{ display: trimValue.length || minWidth ? 'block' : 'none', }}
      placeholder=""
      fontSize={fontSize}
      width={width}
      disabled={disabled}
      minWidth={minWidth}
      margin={margin}
      {...props}
    />
  );
};

InputText.propTypes = {
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  minWidth: PropTypes.string,
  offset: PropTypes.number,
  fontSize: PropTypes.string,
};

InputText.defaultProps = {
  id: 'fake-id',
  onChange: () => null,
  defaultValue: '',
  disabled: false,
  minWidth: '',
  offset: 0,
  fontSize: null,
};

export default InputText;