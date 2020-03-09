import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextAreaContainer, TextAreaInput } from './styles';

const TextArea = ({ onChange, width, height, fontSize, disabled }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const val = e.target.value;
    onChange(val);
    setValue(val);
  };

  return (
    <TextAreaContainer>
      <TextAreaInput width={width} height={height} fontSize={fontSize} disabled={disabled} onChange={handleChange} autoFocus="on" />
    </TextAreaContainer>
  );
};

TextArea.propTypes = {
  onChange: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  disabled: PropTypes.bool,
};

TextArea.defaultProps = {
  onChange: () => null,
  width: '',
  height: '',
  fontSize: '',
  disabled: false,
};

export default TextArea;