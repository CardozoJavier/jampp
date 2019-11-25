import React, { useState } from 'react';
import { ButtonInput } from './styles';
import { bemDestruct, getClassName } from '../../utils';

const triggerAction = () => setTimeout(() => alert('You clicked me!'), 1000);

const Button = ({ label, children, defaultClassName, optionalClassName, disabled }) => {
  const [className, setClassName] = useState(defaultClassName);
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);

  const handleClick = () => {
    // triggerAction();
    setClassName(toggleToClassName);
  };

  return (
    <ButtonInput
      children={label || children}
      className={bemDestruct(className, disabled)}
      onClick={handleClick}
    />
  );
};

export default Button;
