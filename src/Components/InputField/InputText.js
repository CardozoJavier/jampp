import React from 'react';
import { Input } from './styles';
import { bemDestruct } from '../../utils';


const InputText = ({ placeholder, className, disabled, id }) => (
  <Input
    id={id}
    placeholder={placeholder}
    className={bemDestruct(className, disabled)}
    type="text"
    disabled={disabled}
  />
);

export default InputText;