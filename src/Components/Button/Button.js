import React from 'react';
import { ButtonInput } from './styles';
import { bemDestruct } from '../../utils';

const handleClick = () => (alert('You clicked me!'));

const Button = ({ label, children, className, disabled }) => (
  <ButtonInput 
    type="submit" 
    children={label || children}
    className={bemDestruct(className, disabled)}
    onClick={disabled ? null : handleClick}
  />
);

export default Button;
