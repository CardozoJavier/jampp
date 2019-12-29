import React, { useState } from 'react';
import { ButtonInput } from './styles';
import buttonProps from './buttonProps';
import { IconGenerator } from '../UI/Icons';
import { bemDestruct, getClassName } from '../../utils';

/**
 * Button component should be called with
 * @param {string} label - (Required) Text to be display inside button.
 * @param {string} type - (Required) Define button classes for styling.
 * @param {boolean} fixed - (Optional) Disabled move up transform on hover.
 * @param {boolean} disabled - (Optional) Disable component if is true.
 * @param {function} icon - (Optional) Function that returns an svg icon.
 * @param {function} onClick - (Optional) Callback to trigger on onClick event.
 * @param {object} children - (Optional) HTML element to be rendered, e.g.: strong tag inside button.
 */
const Button = ({ label, children, icon, type, disabled, onClick, fixed }) => {
  const { defaultClassName, optionalClassName, ButtonContainer, iconProps, iconClassName } = buttonProps[type];

  const [className, setClassName] = useState(defaultClassName);
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);

  const handleClick = () => {
    onClick && onClick();
    setClassName(toggleToClassName);
  };

  return (
    <ButtonContainer
      onClick={disabled ? null : handleClick}
      className={bemDestruct(className, disabled)}
      disabled={disabled}
      fixed={fixed}
    >
      <ButtonInput children={label || children} />
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
