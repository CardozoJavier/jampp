import React, { useState } from 'react';
import { ButtonInput } from './styles';
import { bemDestruct, getClassName } from '../../utils';

const triggerAction = () => setTimeout(() => alert('You clicked me!'), 1000);

const classesName = {
  switch: {
    defaultClassName: 'button option--default-medium',
    optionalClassName: 'button option--default-medium__selected',
  }
};

/**
 * Refactorear para aceptar el param type, y abstraer la definicion de la className
 * cuando implemento el componente
 */
const Button = ({ label, children, type, defaultClassName, optionalClassName, disabled }) => {
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
