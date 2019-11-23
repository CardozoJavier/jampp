import React from 'react';
import { Input } from './styles';
import { bemDestruct } from '../../utils';


const InputField = ({ placeholder, className, disabled }) => (
  <Input
    placeholder={placeholder}
    className={bemDestruct(className, disabled)}
    type="text"
    disabled={disabled}
  />
);

export default InputField;
