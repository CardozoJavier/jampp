import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { removeEmptySpace } from '../../utils';
import { Input } from '../CreationTag/styles';
import { fonts } from '../styles';
const { size10 } = fonts;

const InputText = ({ id, defaultValue, onChange, disabled }) => {
  const [value, setValue] = useState(defaultValue);
  const trimValue = removeEmptySpace(value);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onChange(id, inputValue);
  };

  return (
    <Input
      id={id}
      key={id}
      value={value}
      onChange={handleChange}
      style={{ display: trimValue.length ? 'block' : 'none' }}
      size={value.length + 3}
      placeholder=""
      fontSize={size10}
      width="auto"
      disabled={disabled}
    />
  );
};

InputText.propTypes = {
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

InputText.defaultProps = {
  id: 'fake-id',
  onChange: () => null,
  defaultValue: '',
  disabled: false,
};

export default InputText;