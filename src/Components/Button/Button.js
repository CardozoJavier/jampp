import React, { useState } from 'react';
import { ButtonInput } from './styles';
import buttonProps from './buttonProps';
import { IconGenerator } from '../UI/Icons';
import { bemDestruct, getClassName } from '../../utils';

/**
 * Button component should be called with
 * @param {String} label - (Required) Text to be display inside button.
 * @param {String} type - (Required) Define button classes for styling.
 * @param {Boolean} fixed - (Optional) Disabled move up transform on hover.
 * @param {Boolean} disabled - (Optional) Disable component if is true.
 * @param {Function} icon - (Optional) Function that returns an svg icon.
 * @param {Function} onClick - (Optional) Callback to trigger on onClick event.
 * @param {Object} children - (Optional) HTML element to be rendered, e.g.: strong tag inside button.
 * @return {React Component} A view for button.
 */
const Button = ({ label, children, icon, type, disabled, onClick, onClickIcon, fixed }) => {
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
          props={{
            ...iconProps,
            className: bemDestruct(iconClassName, disabled),
            onClick: onClickIcon
          }}
        />
      }
    </ButtonContainer>
  );
};

export default Button;
