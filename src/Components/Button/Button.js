import React, { useState } from 'react';
import { ButtonInput } from './styles';
import buttonProps from './buttonProps';
import { IconGenerator } from '../UI/Icons';
import { bemDestruct, getClassName } from '../../utils';

const Button = ({ label, children, icon, type, disabled }) => {
  const { defaultClassName, optionalClassName, ButtonContainer, iconProps, iconClassName } = buttonProps[type];

  const [className, setClassName] = useState(defaultClassName);
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);

  const handleClick = () => {
    setClassName(toggleToClassName);
  };

  return (
    <ButtonContainer className={bemDestruct(className, disabled)} disabled={disabled}>
      <ButtonInput
        children={label || children}
        // className={bemDestruct(className, disabled)}
        onClick={disabled ? null : () => handleClick()}
      />
      {icon &&
        <IconGenerator
          renderIcon={icon}
          props={{ ...iconProps, className: bemDestruct(iconClassName, disabled) }}
        />
      }
    </ButtonContainer>
  );
};

export default Button;
