import React, { useState } from 'react';
import { ButtonInput } from './styles';
import { bemDestruct } from '../../utils';

const getClassName = (className, defaultClassName, optionalClassName) => {
  let toggleToClassName;
  if (optionalClassName) {
    toggleToClassName = className === defaultClassName ? optionalClassName : defaultClassName;
    return toggleToClassName;
  } else {
    return className;
  }
};

const triggerAction = () => setTimeout(() => alert('You clicked me!'), 1000);

export default ({ label, children, defaultClassName, optionalClassName, disabled }) => {
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
